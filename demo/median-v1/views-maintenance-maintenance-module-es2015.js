(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-maintenance-maintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n    <span>Cash Payments Authorization</span>\r\n</mat-toolbar>\r\n<br>\r\n<div>\r\n    <div>\r\n        <div fxLayout=\"row wrap\">\r\n\r\n            <div fxFlex=\"10\"></div>\r\n            <div fxFlex=\"70\">\r\n                <mat-card>\r\n                <div style=\"text-align: center\" >\r\n                   \r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>PRN/Eslip No:</mat-label>\r\n                        <input matInput value=\"5678910\" #prn>\r\n                    </mat-form-field>&nbsp;\r\n                  \r\n                    <button mat-raised-button color=\"primary\" (click)=\"onSearchCall(prn.value)\">\r\n                      Search\r\n                    </button>\r\n                </div>\r\n                <div *ngIf=\"serach\">\r\n                <p >Number Of records:<b class=\"inner\">1</b></p>\r\n                <div>\r\n                        <table>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th>E-Slip No</th>\r\n                                    <th>Pin No</th>\r\n                                    <th>Amount</th>\r\n                                    <th>Debit Account</th>\r\n                                    \r\n                                </tr>\r\n                                <tr>\r\n                                    <td>X</td>\r\n                                    <td>5678910</td>\r\n                                    <td>4556675</td>\r\n                                    <td>3,60,000</td>\r\n                                    <td>123456789</td>\r\n                                    \r\n                                </tr>\r\n                                <tr>\r\n                                        <td>X</td>\r\n                                        <td>5678910</td>\r\n                                        <td>4556675</td>\r\n                                        <td>3,60,000</td>\r\n                                        <td>123456789</td>\r\n                                        \r\n                                </tr>\r\n                                <tr>\r\n                                        <td>X</td>\r\n                                        <td>5678910</td>\r\n                                        <td>4556675</td>\r\n                                        <td>3,60,000</td>\r\n                                        <td>123456789</td>\r\n                                      \r\n                                </tr>\r\n                                <tr>\r\n                                        <td>X</td>\r\n                                        <td>5678910</td>\r\n                                        <td>4556675</td>\r\n                                        <td>3,60,000</td>\r\n                                        <td>123456789</td>\r\n                                        \r\n                                </tr>\r\n                              \r\n                                                     </table>\r\n                                                  \r\n                </div>\r\n                <hr>\r\n                <div>\r\n                        <div style=\"text-align: center\">\r\n                               \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Tax Payers Name:</mat-label>\r\n                                    <input matInput value=\"Joe Doe\" readonly>\r\n                                </mat-form-field>&nbsp;&nbsp;\r\n                               \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Inputter:</mat-label>\r\n                                    <input matInput value=\"Vikas\" readonly>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div style=\"text-align: center\">\r\n                                   \r\n                                    <mat-form-field appearance=\"outline\" >\r\n                                        <mat-label>Payment Type</mat-label>\r\n                                        <input matInput value=\"Account\" readonly>\r\n                                    </mat-form-field>&nbsp;&nbsp;\r\n                                    \r\n                                    <mat-form-field appearance=\"outline\"  >\r\n                                        <mat-label>Paid By:</mat-label>\r\n                                        <input matInput value=\"Vidya\" readonly>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div style=\"text-align: center\">\r\n                                       \r\n                                        <mat-form-field appearance=\"outline\" >\r\n                                            <mat-label>Risk Authorizer:</mat-label>\r\n                                            <input matInput value=\"Pooja\" readonly>\r\n                                        </mat-form-field>&nbsp;\r\n                                       \r\n                                        <mat-form-field appearance=\"outline\" >\r\n                                            <mat-label> Branch:</mat-label>\r\n                                          <mat-select value=\"hq-001\" disabled>\r\n                                              <mat-option value=\"hq-001\">\r\n                                                  HQ-001\r\n                                              </mat-option>\r\n                                              <mat-option value=\"AB-001\">\r\n                                                    AB-001\r\n                                                </mat-option>\r\n                                                <mat-option value=\"AB-002\">\r\n                                                        AB-002\r\n                                                    </mat-option>\r\n                                          </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                </div>\r\n                <hr>\r\n                <div>\r\n                        <div style=\"text-align: center\">\r\n                               \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Debit Account No</mat-label>\r\n                                    <input matInput value=\"Tax Payment\" readonly>\r\n                                </mat-form-field>&nbsp;\r\n                                    \r\n                                \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Credit Account No:</mat-label>\r\n                                    <input matInput value=\"KRA-111000001\" readonly>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div style=\"text-align: center\">\r\n                                   \r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Available Balance:</mat-label>\r\n                                        <input matInput value=\"550,000.00\" readonly>\r\n                                    </mat-form-field>&nbsp;\r\n                                  \r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Cheque Number:</mat-label>\r\n                                        <input matInput value=\"9876\" readonly>\r\n                                    </mat-form-field>\r\n                                   \r\n\r\n                                </div>\r\n                                \r\n                                    <div style=\"text-align: center\">\r\n                                        \r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                    <mat-label>Amount Expected</mat-label>\r\n                                                    <input matInput value=\"10,000.00\" readonly>\r\n                                                </mat-form-field>&nbsp;\r\n                                           \r\n                                            <mat-form-field appearance=\"outline\" >\r\n                                                    <mat-label>Currency</mat-label>\r\n            \r\n                                                <input matInput value=\"KES\" readonly>\r\n                                            </mat-form-field>&nbsp;\r\n                                      \r\n                                                   \r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                            <mat-label>Account Status</mat-label>\r\n                                                        <input matInput value=\"Tax Payment\" readonly>\r\n                                                    </mat-form-field>&nbsp;\r\n                                                   \r\n                                      \r\n                                           <hr>\r\n                                           <!-- <div>\r\n                                                <mat-label>Attach Memo</mat-label>\r\n                                                <div style=\"border: solid black 1px;margin-left: 100px;padding-top: 10px;padding-bottom: 10px\">&nbsp;\r\n                                                    Authorized By\r\n                                                </div>\r\n                                           </div> -->\r\n                                        </div>\r\n                </div>\r\n\r\n                <div style=\"padding-top: 20px;text-align: center\">\r\n                        <button mat-raised-button color=\"warn\" (click)=\"onReject()\">Reject</button>&nbsp;\r\n                        <button mat-raised-button color=\"primary\" (click)=\"onRework()\">Rework</button>&nbsp;\r\n                        <button mat-raised-button color=\"warn\" (click)=\"onApprove()\">Approve</button>\r\n                </div>\r\n            </div>\r\n           \r\n            </mat-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><div fxLayout=\"row\">\r\n        <div fxFlex></div>\r\n        <div fxFlex=\"95\">\r\n            <mat-card style=\"width: 70%;  margin-left:10%;\">\r\n                <mat-card-title>\r\n\r\n                </mat-card-title>\r\n                <mat-card-content style=\" margin-left:-25%;\">\r\n                    <div fxLayout=\"row\">\r\n\r\n                        <table id=\"customers\">\r\n                            <tr>\r\n                                <th>Record Status:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip>{{fetchUserSingle.recordStatus }}</mat-chip> -->\r\n\r\n                                </td>\r\n                                <th>Auth Status:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip>{{fetchUserSingle.verifiedStatus}}</mat-chip> -->\r\n                                    <!-- <mat-form-field appearance=\"outline\">\r\n                                          <mat-label>Status</mat-label>\r\n                                          <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                       \r\n                                        </mat-form-field> \r\n                        </td> -->\r\n                                <th>Input By:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip>{{fetchUserSingle.inputBy}}</mat-chip> -->\r\n                                </td>\r\n\r\n                                <th>Modification No:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip >{{fetchUserSingle.modNo}}</mat-chip>  -->\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n\r\n                                <th>Input Date:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip>{{fetchUserSingle.inputTime | date}}</mat-chip> -->\r\n                                </td>\r\n                                <!-- <th>Creation Date:</th>\r\n                                      <td>\r\n                                        <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                                      </td> -->\r\n                                <th>Authorized Date:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip >{{fetchUserSingle.verifiedTime | date:'d/M/yy'}}</mat-chip> -->\r\n                                </td>\r\n                                <th> Frist Auth Status:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip >{{fetchUserSingle.verifiedOnce}}</mat-chip> -->\r\n                                    <!-- <mat-form-field appearance=\"outline\">\r\n                                          <mat-label>Status</mat-label>\r\n                                          <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                         \r\n                                        </mat-form-field>  -->\r\n                                </td>\r\n                                <th>Authorized By:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip >{{fetchUserSingle.verifiedBy}}</mat-chip>  -->\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </div>\r\n        <div fxFlex></div>\r\n\r\n    </div>\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n    <span>Cash Payments</span>\r\n</mat-toolbar>\r\n<br>\r\n<div>\r\n    <div>\r\n        <div fxLayout=\"row wrap\" >\r\n            <div fxFlex=\"10\"></div>\r\n            <div fxFlex=\"70\">\r\n                <mat-card>\r\n\r\n                        <div style=\"text-align: center\">\r\n                                \r\n                                <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Service Type:</mat-label>\r\n    \r\n                                    <mat-select value=\"kentrade\">\r\n                                        <mat-option value=\"kentrade\">KENTRADE\r\n                                        </mat-option>\r\n                                        <mat-option value=\"itax\">Itax\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>&nbsp;&nbsp;\r\n                              \r\n                                <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>PRN/EslipNo:</mat-label>\r\n                                    <input matInput value=\"5678910\"  #prn>\r\n                                </mat-form-field>&nbsp;&nbsp;&nbsp;\r\n    \r\n         <button mat-raised-button color=\"primary\" (click)=\"onSearchcall(prn.value)\">\r\n                                   Validate\r\n                                </button>\r\n                            </div>\r\n                    <mat-card-content *ngIf=\"onSearch\">\r\n                        \r\n                        <div>\r\n                            <div fxFlex=\"row\">\r\n                                <div fxFlex=\"100\">\r\n\r\n                                    <form>\r\n                                        <fieldset class=\"scheduler-border\">\r\n                                            <legend class=\"scheduler-border\">E-slip Details</legend>\r\n                                            <div style=\"text-align: center\">\r\n                                               \r\n                                                <mat-form-field appearance=\"outline\" >\r\n                                                        <mat-label>Status:</mat-label>\r\n                                                    <input matInput value=\"Valid\">\r\n                                                </mat-form-field>&nbsp;&nbsp;\r\n                                               \r\n                                                <mat-form-field appearance=\"outline\" >\r\n                                                        <mat-label>PIN:</mat-label>\r\n                                                    <input matInput value=\"A0000013214J\">\r\n                                                </mat-form-field>\r\n                                            </div>\r\n\r\n                                            <div style=\"text-align: center\">\r\n                                               \r\n                                                <mat-form-field appearance=\"outline\" >\r\n                                                        <mat-label>Tax Payers Name:</mat-label>\r\n                                                    <input matInput value=\"Joe Doe\">\r\n                                                </mat-form-field>&nbsp;&nbsp;\r\n                                              \r\n                                                <mat-form-field appearance=\"outline\" >\r\n                                                        <mat-label>Amount Excepted:</mat-label>\r\n                                                    <input matInput value=\"3,60,000\">\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                            <div style=\"text-align: center\">\r\n                                               \r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                        <mat-label>Remark:</mat-label>\r\n                                                    <input matInput value=\"Tax Payment\">\r\n                                                </mat-form-field>&nbsp;&nbsp;\r\n                                               \r\n                                                <mat-form-field appearance=\"outline\" >\r\n                                                        <mat-label>Currency:</mat-label>\r\n                                                    <input matInput value=\"KES\">\r\n                                                </mat-form-field>\r\n                                            </div>\r\n\r\n                                            <div style=\"border:solid black 1px\">\r\n                                                <table>\r\n                                                    <tr>\r\n                                                        <th>Tax Code</th>\r\n                                                        <th>Tax Component</th>\r\n                                                        <th>Amount</th>\r\n                                                        <th>Tax Period</th>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>6002</td>\r\n                                                        <td>Import Declaration</td>\r\n                                                        <td>60,000.00</td>\r\n                                                        <td>21-may-2017 12:00.00</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>6002</td>\r\n                                                        <td>Import Declaration</td>\r\n                                                        <td>60,000.00</td>\r\n                                                        <td>21-may-2017 12:00.00</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>6002</td>\r\n                                                        <td>Import Declaration</td>\r\n                                                        <td>60,000.00</td>\r\n                                                        <td>21-may-2017 12:00.00</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>6002</td>\r\n                                                        <td>Import Declaration</td>\r\n                                                        <td>60,000.00</td>\r\n                                                        <td>21-may-2017 12:00.00</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>6002</td>\r\n                                                        <td>Import Declaration</td>\r\n                                                        <td>60,000.00</td>\r\n                                                        <td>21-may-2017 12:00.00</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>6002</td>\r\n                                                        <td>Import Declaration</td>\r\n                                                        <td>60,000.00</td>\r\n                                                        <td>21-may-2017 12:00.00</td>\r\n                                                    </tr>\r\n                                                </table>\r\n\r\n                                            </div>\r\n                                        </fieldset>\r\n                                        <div>\r\n                                        <mat-checkbox color=\"primary\" (change)=\"getValueForcash($event)\" >Cash\r\n                                        </mat-checkbox>&nbsp;&nbsp;&nbsp;\r\n                                        <mat-checkbox color=\"primary\" (change)=\"getcheque($event)\" >Account</mat-checkbox>\r\n                                        &nbsp;&nbsp;&nbsp;\r\n                                        <!-- <mat-checkbox color=\"primary\" (change)=\"getInternalTansefer($event)\" >Internal\r\n\r\n                                            Transfer</mat-checkbox>&nbsp;&nbsp;&nbsp; -->\r\n                                            </div>\r\n                                        <div *ngIf=\"is_cash\" >\r\n                                           <div style=\"text-align: center\">\r\n                                            <mat-form-field appearance=\"outline\" >\r\n                                                    <mat-label>Amount Paid:</mat-label>\r\n                                                <input matInput value=\"3,60,000\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                          \r\n                                            <div style=\"text-align: center\">\r\n                                                    \r\n                                                <mat-form-field appearance=\"outline\"  >\r\n                                                        <mat-label>Paid By</mat-label>\r\n                                                    <input matInput value=\"Joe Doe\">\r\n                                                </mat-form-field>&nbsp;&nbsp;\r\n                                               \r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                        <mat-label>Naration</mat-label>\r\n                                                    <input matInput >\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                            <div style=\"text-align: center\">\r\n                                                   \r\n                                                    <mat-form-field appearance=\"outline\" >\r\n                                                            <mat-label>Mobile No:</mat-label>\r\n                                                        <input matInput value=\"198766424\">\r\n                                                    </mat-form-field>&nbsp;&nbsp;\r\n                                                   \r\n                                                    <mat-form-field appearance=\"outline\" >\r\n                                                            <mat-label>Email Id</mat-label>\r\n                                                        <input matInput value=\"abc@gmail.com\">\r\n                                                    </mat-form-field>\r\n                                                  \r\n                                            </div>\r\n                                            <div style=\"text-align: center\">\r\n                                                    <button mat-raised-button color=\"primary\" (click)=\"onPostofCash()\">\r\n                                                          Post Transaction\r\n                                                        </button>&nbsp;\r\n                                                <button mat-raised-button color=\"warn\" (click)=\"CancelCash()\">\r\n                                                   Cancel Transaction\r\n                                                </button>&nbsp;\r\n                                               \r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                        <div *ngIf=\"is_cheque\">\r\n                                            \r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                    <mat-label>Capture The Branch:</mat-label>\r\n                                                <mat-select value=\"HQ-001\">\r\n                                                    <mat-option value=\"HQ-001\">HQ-001\r\n                                                    </mat-option>\r\n                                                    <mat-option value=\"HQ-001\">AB-002\r\n                                                        </mat-option> <mat-option value=\"HQ-001\">AB-003\r\n                                                            </mat-option>\r\n\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                            <fieldset class=\"scheduler-border\">\r\n                                                <legend class=\"scheduler-border\">Account Details</legend>\r\n                                                <div style=\"text-align: center\">\r\n                                                    \r\n                                                    <mat-form-field appearance=\"outline\" >\r\n                                                            <mat-label>Account No</mat-label>\r\n                                                        <input matInput [(ngModel)]=\"accNo\" #accNum=\"ngModel\" name=\"accNo\">\r\n                                                    </mat-form-field>&nbsp;\r\n                                                <button mat-raised-button color=\"primary\" (click)=\"onValidateAccountNo(accNum.value)\">\r\n                                                       Validate</button>&nbsp;\r\n                                                   \r\n                                                    \r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                            <mat-label>Cheque No</mat-label>\r\n                                                        <input matInput [(ngModel)]=\"chequeNO\" name=\"chequeNO\" #chque=\"ngModel\">\r\n                                                    </mat-form-field>   &nbsp;<button mat-raised-button color=\"primary\" (click)=\"onvalidatecheque(chque.value)\">\r\n                                                           Validate</button>\r\n                                                </div>\r\n\r\n                                                <div style=\"text-align: center\" *ngIf=\"validateCheque\">\r\n                                                    \r\n                                            \r\n                                                    <div style=\"text-align: center\">\r\n                                                        <mat-form-field appearance=\"outline\" >\r\n                                                            <mat-label>Cheque Status:</mat-label>\r\n\r\n                                                        <input matInput value=\"Valid\">\r\n                                                    </mat-form-field>&nbsp;\r\n                                                        <mat-form-field appearance=\"outline\" >\r\n                                                                <mat-label>Mobile No:</mat-label>\r\n                                                            <input matInput value=\"198766424\">\r\n                                                        </mat-form-field>&nbsp;\r\n                                                        \r\n                                                        <mat-form-field appearance=\"outline\" >\r\n                                                                <mat-label>Email Id</mat-label>\r\n                                                            <input matInput value=\"abc@gmail.com\">\r\n                                                        </mat-form-field>\r\n                                                      \r\n                                                </div>\r\n                                                    \r\n                                                    \r\n                                                </div>\r\n                                                <div *ngIf=\"acc\">\r\n                                                <div style=\"text-align: center\">\r\n                                                   \r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                            <mat-label>Available Balance</mat-label>\r\n                                                        <input matInput value=\"150,000.00\">\r\n                                                    </mat-form-field>&nbsp;\r\n                                                   \r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                            <mat-label>Account Satus</mat-label>\r\n                                                        <input matInput value=\"Ok\">\r\n                                                    </mat-form-field>\r\n\r\n                                                </div>\r\n                                                <div>\r\n                                                        <div style=\"text-align: center\">\r\n                                                              <mat-form-field appearance=\"outline\" >\r\n                                                            <mat-label>Account Name</mat-label>\r\n                                                        <input matInput value=\"Joe Doe\">\r\n                                                    </mat-form-field> &nbsp;\r\n                                                                <mat-form-field appearance=\"outline\" >\r\n                                                                        <mat-label>Mobile No:</mat-label>\r\n                                                                    <input matInput value=\"198766424\">\r\n                                                                </mat-form-field>&nbsp;\r\n                                                                \r\n                                                                <mat-form-field appearance=\"outline\" >\r\n                                                                        <mat-label>Email Id</mat-label>\r\n                                                                    <input matInput value=\"abc@gmail.com\">\r\n                                                                </mat-form-field>\r\n                                                              \r\n                                                        </div>\r\n                                                        \r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            </fieldset>\r\n                                            <div style=\"text-align: center\">\r\n                                                    <button mat-raised-button color=\"primary\" (click)=\"postCheque()\">\r\n                                                            Post Transaction\r\n                                                        </button>&nbsp;\r\n                                            <button mat-raised-button color=\"warn\" (click)=\"cancelCheque()\">\r\n                                                   Cancel Transaction\r\n                                                </button>\r\n                                              \r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div *ngIf=\"internal_transfer\">\r\n                                                <mat-label>Capture The Branch:</mat-label>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <mat-select value=\"HQ-001\">\r\n                                                        <mat-option value=\"HQ-001\">HQ-001\r\n                                                        </mat-option>\r\n    \r\n                                                    </mat-select>\r\n                                                </mat-form-field>\r\n                                                <fieldset class=\"scheduler-border\">\r\n                                                    <legend class=\"scheduler-border\">Transfer Details</legend>\r\n                                                    <div>\r\n                                                        <mat-label>Debit Account No:</mat-label>\r\n                                                        <mat-form-field appearance=\"outline\">\r\n    \r\n                                                            <input matInput value=\"123456789\">\r\n                                                        </mat-form-field>\r\n                                                    <button mat-raised-button color=\"primary\">\r\n                                                            Validate</button>\r\n                                                       \r\n                                                        <mat-label>Available Balance:</mat-label>\r\n                                                        <mat-form-field appearance=\"outline\">\r\n    \r\n                                                            <input matInput value=\"550,000,00\">\r\n                                                        </mat-form-field>  \r\n                                                            \r\n                                                    </div>\r\n    \r\n                                                    <div>\r\n                                                        <mat-label>Account Status:</mat-label>\r\n                                                        <mat-form-field appearance=\"outline\" style=\"margin-left: 2%\">\r\n    \r\n                                                            <input matInput value=\"OK\">\r\n                                                        </mat-form-field>\r\n                                                        <mat-label style=\"margin-left: 13%\">Account Name:</mat-label>\r\n                                                        <mat-form-field appearance=\"outline\" >\r\n    \r\n                                                            <input matInput value=\"Joe Doe\">\r\n                                                        </mat-form-field>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <hr>\r\n                                                        <mat-label>Credit Account Number:</mat-label>\r\n                                                        <mat-form-field appearance=\"outline\">\r\n    \r\n                                                          <mat-select value=\"KRA Domestic Acount\">\r\n                                                              <mat-option value=\"KRA Domestic Acount\">KRA Domestic Acount</mat-option>\r\n                                                          </mat-select>\r\n                                                        </mat-form-field>\r\n                                                    </div>\r\n                                                   \r\n                                                   \r\n    \r\n                                                </fieldset>\r\n                                                <!-- <fieldset class=\"scheduler-border\">\r\n                                                    <legend class=\"scheduler-border\">Authorization Memo</legend>\r\n                                                    <mat-label>Attach Memo</mat-label>\r\n                                                    <div style=\"border: solid black 1px;margin-left: 100px;padding-top: 10px;padding-bottom: 10px\">&nbsp;\r\n                                                        Authorized By\r\n                                                    </div>\r\n                                                    \r\n                                                </fieldset> -->\r\n                                                <div style=\"text-align: center\">\r\n                                                        <button mat-raised-button color=\"primary\" >\r\n                                                             Post Transaction\r\n                                                            </button>&nbsp;\r\n                                                <button mat-raised-button color=\"warn\">\r\n                                                      Cancel Transaction\r\n                                                    </button>&nbsp;\r\n                                                    \r\n                                                </div>\r\n    \r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                  \r\n                    </mat-card-content>\r\n                   \r\n\r\n\r\n                </mat-card>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    <br><br>\r\n    <div fxLayout=\"row\">\r\n        <div fxFlex></div>\r\n        <div fxFlex=\"95\">\r\n            <mat-card style=\"width: 70%;  margin-left:16%;\">\r\n                <mat-card-title>\r\n\r\n                </mat-card-title>\r\n                <mat-card-content style=\" margin-left:-25%;\">\r\n                    <div fxLayout=\"row\">\r\n\r\n                        <table id=\"customers\">\r\n                            <tr>\r\n                                <th>Record Status:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip>{{fetchUserSingle.recordStatus }}</mat-chip> -->\r\n\r\n                                </td>\r\n                                <th>Auth Status:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip>{{fetchUserSingle.verifiedStatus}}</mat-chip> -->\r\n                                    <!-- <mat-form-field appearance=\"outline\">\r\n                                          <mat-label>Status</mat-label>\r\n                                          <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                       \r\n                                        </mat-form-field> \r\n                        </td> -->\r\n                                <th>Input By:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip>{{fetchUserSingle.inputBy}}</mat-chip> -->\r\n                                </td>\r\n\r\n                                <th>Modification No:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip >{{fetchUserSingle.modNo}}</mat-chip>  -->\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n\r\n                                <th>Input Date:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip>{{fetchUserSingle.inputTime | date}}</mat-chip> -->\r\n                                </td>\r\n                                <!-- <th>Creation Date:</th>\r\n                                      <td>\r\n                                        <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                                      </td> -->\r\n                                <th>Authorized Date:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip >{{fetchUserSingle.verifiedTime | date:'d/M/yy'}}</mat-chip> -->\r\n                                </td>\r\n                                <th> Frist Auth Status:</th>\r\n                                <td>\r\n\r\n                                    <!-- <mat-chip >{{fetchUserSingle.verifiedOnce}}</mat-chip> -->\r\n                                    <!-- <mat-form-field appearance=\"outline\">\r\n                                          <mat-label>Status</mat-label>\r\n                                          <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                         \r\n                                        </mat-form-field>  -->\r\n                                </td>\r\n                                <th>Authorized By:</th>\r\n                                <td>\r\n                                    <!-- <mat-chip >{{fetchUserSingle.verifiedBy}}</mat-chip>  -->\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </div>\r\n        <div fxFlex></div>\r\n\r\n    </div>\r\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-edit/department-edit.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-edit/department-edit.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        <span>Department Id Maintenance</span>\r\n    </mat-toolbar>\r\n    <br>\r\n    \r\n    <div>\r\n        <div fxFlex=\"row\">\r\n            <div fxFlex=\"30\"></div>\r\n            <div fxFlex=\"60\">\r\n                <mat-card>\r\n    \r\n    \r\n                    <mat-card-content>\r\n                        <div fxLayoutGap=\"10px\">\r\n                        <mat-form-field appearance=\"outline\">\r\n    \r\n                            <mat-label>Department ID</mat-label>\r\n                            <input matInput placeholder=\"Department Id\" name=\"departId\" \r\n                          readonly [(ngModel)]=\"departmentFrom.departId\" #departId=\"ngModel\"required>\r\n                        </mat-form-field>\r\n    \r\n                        <mat-form-field appearance=\"outline\">\r\n    \r\n                          <mat-label>Department Name</mat-label>\r\n                          <input matInput placeholder=\"Department Name\"  [readonly]=\"!editFlag\" \r\n                          name=\"departName\" [(ngModel)]=\"departmentFrom.departName\" #departName=\"ngModel\"required>\r\n                      </mat-form-field>\r\n  \r\n                    </div>\r\n                    <div fxLayoutGap=\"10px\">\r\n                            <mat-form-field appearance=\"outline\" >\r\n    \r\n                                    <mat-label>BatchNo From</mat-label>\r\n                                    <input pattern=\"[0-9]*\" matInput (keypress)=\"numericOnly($event)\" placeholder=\"Batch No From\" maxlength=\"3\" [readonly]=\"!editFlag\"   [readonly]=\"!editFlag\" required name=\"fromSeries\"[(ngModel)]=\"departmentFrom.fromSeries\" #fromSeries=\"ngModel\">\r\n            \r\n                                </mat-form-field> \r\n                    \r\n                            <mat-form-field appearance=\"outline\">\r\n    \r\n                                    <mat-label>BatchNo To</mat-label>\r\n                                    <input pattern=\"[0-9]*\" matInput (keypress)=\"numericOnly($event)\" placeholder=\"Batch No To\" maxlength=\"3\"  [readonly]=\"!editFlag\" required name=\"toSeries\" [(ngModel)]=\"departmentFrom.toSeries\" #toSeries=\"ngModel\">\r\n            \r\n                                </mat-form-field> \r\n                    </div>\r\n    \r\n                    </mat-card-content>\r\n                    <!-- <mat-card-actions  style=\"text-align: center\" fxLayoutGap=\"10px\">\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"editFlag\"(click)=\"onsaveTheEditOfDepartment()\">Submit</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onAuthDepartment()\" *ngIf=\"departmentFrom.verifiedStatus=='U'||departmentFrom.verifiedStatus=='UNAUTHORIZED'\">Auth</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onCloseOfDepartment()\"  *ngIf=\"departmentFrom.recordStatus=='O'||departmentFrom.recordStatus=='OPEN'\">Close</button>\r\n                            <button mat-raised-button color=\"primary\"  (click)=\"onReopenOfDepartment()\"  *ngIf=\"departmentFrom.recordStatus=='C'||departmentFrom.recordStatus=='CLOSE'\">Re-open</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onDeleteOfDepartment()\" >Delete</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onEdit()\" *ngIf=\"!editFlag\">Edit</button>\r\n                            \r\n                            <button mat-raised-button color=\"warn\" [routerLink]=\"'/maintenance/departmentSummary'\">Exit</button>\r\n                    </mat-card-actions> -->\r\n                    <!-- <mat-card-actions  style=\"text-align: center\" fxLayoutGap=\"10px\">\r\n                      <button mat-raised-button color=\"primary\" [routerLink]=\"'/maintenance/departmentNew'\">New</button>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onEdit()\" *ngIf=\"!editFlag && departmentFrom.recordStatus=='O' ||departmentFrom.recordStatus=='OPEN'\" >Edit</button>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"editFlag\"(click)=\"onsaveTheEditOfDepartment()\">Submit</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onAuthDepartment()\" *ngIf=\"departmentFrom.verifiedStatus=='U'||departmentFrom.verifiedStatus=='UNAUTHORIZED'\">Auth</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onCloseOfDepartment()\"  *ngIf=\"departmentFrom.recordStatus=='OPEN' && departmentFrom.verifiedOnce=='YES' \">Close</button>\r\n                            <button mat-raised-button color=\"primary\"  (click)=\"onReopenOfDepartment()\"  *ngIf=\"departmentFrom.recordStatus=='CLOSE' && departmentFrom.verifiedStatus=='AUTHORIZED'\">Re-open</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onDeleteOfDepartment()\" *ngIf=\"departmentFrom.verifiedOnce=='N'||departmentFrom.verifiedOnce=='NO'\">Delete</button>\r\n                        \r\n                            \r\n                            <button mat-raised-button color=\"warn\" [routerLink]=\"'/maintenance/departmentSummary'\">Exit</button>\r\n                    </mat-card-actions> -->\r\n                    <mat-card-actions  style=\"text-align: center\" fxLayoutGap=\"10px\">\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onNew()\" *ngIf=\"!editFlag &&!onlySubmit\">New</button>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onEdit()\" *ngIf=\" departmentFrom.recordStatus=='O' ||departmentFrom.recordStatus=='OPEN' && !editFlag  &&!onlySubmit\" >Edit</button>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"editFlag\"(click)=\"onsaveTheEditOfDepartment()\">Submit</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onAuthDepartment()\" *ngIf=\"departmentFrom.verifiedStatus=='U'||departmentFrom.verifiedStatus=='UNAUTHORIZED' && !editFlag  &&!onlySubmit\">Auth</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onCloseOfDepartment()\"  *ngIf=\"departmentFrom.recordStatus=='OPEN' && departmentFrom.verifiedOnce=='YES'&& !editFlag  &&!onlySubmit\">Close</button>\r\n                            <button mat-raised-button color=\"primary\"  (click)=\"onReopenOfDepartment()\"  *ngIf=\"departmentFrom.recordStatus=='CLOSE' && departmentFrom.verifiedStatus=='AUTHORIZED' && !editFlag  &&!onlySubmit\">Re-open</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"onDeleteOfDepartment()\" *ngIf=\"departmentFrom.verifiedOnce=='N'||departmentFrom.verifiedOnce=='NO' && !editFlag  &&!onlySubmit\">Delete</button>\r\n                        \r\n                            \r\n                            <button mat-raised-button color=\"warn\" [routerLink]=\"'/maintenance/departmentSummary'\">Exit</button>\r\n                    </mat-card-actions>\r\n                \r\n                  </mat-card>\r\n            </div>\r\n            <div fxFlex=\"30\"></div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex></div>\r\n      <div fxFlex=\"95\">\r\n        <mat-card style=\"width: 70%;  margin-left:16%;\">\r\n          <mat-card-title>\r\n    \r\n          </mat-card-title>\r\n          <mat-card-content style=\" margin-left:-25%;\">\r\n              <div fxLayout=\"row\">\r\n      \r\n                <table id=\"customers\">\r\n                  <tr>\r\n                  <th>Record Status:</th>\r\n                    <td>\r\n                      <mat-chip>{{departmentFrom.recordStatus }}</mat-chip>\r\n      \r\n                    </td>\r\n                  <th>Auth Status:</th>\r\n                    <td>\r\n      \r\n                      <mat-chip>{{departmentFrom.verifiedStatus}}</mat-chip>\r\n                    \r\n                    </td> \r\n                    <th>Input By:</th>\r\n                    <td>\r\n      \r\n                      <mat-chip>{{departmentFrom.inputBy}}</mat-chip>\r\n                    </td>\r\n                  \r\n                    <th>Modification No:</th>\r\n                    <td>\r\n                       <mat-chip >{{departmentFrom.modNo}}</mat-chip> \r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                   \r\n                    <th>Input Date:</th>\r\n                    <td>\r\n      \r\n                      <mat-chip>{{departmentFrom.inputTime | date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                    </td>\r\n                  \r\n                   <th>Authorized Date:</th>\r\n                    <td>\r\n                      <mat-chip >{{departmentFrom.verifiedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                    </td> \r\n                    <th> Frist Auth Status:</th>\r\n                    <td>\r\n      \r\n                      <mat-chip >{{departmentFrom.verifiedOnce}}</mat-chip>\r\n                     \r\n                    </td>\r\n                    <th>Authorized By:</th>\r\n                    <td>\r\n                       <mat-chip >{{departmentFrom.verifiedBy}}</mat-chip> \r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex></div>\r\n    \r\n    </div>\r\n    <br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-new/department-new.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-new/department-new.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        <span>Department Id Maintenance</span>\r\n    </mat-toolbar>\r\n    <br>\r\n    <form >\r\n    <div>\r\n        <div fxFlex=\"row\">\r\n            <div fxFlex=\"30\"></div>\r\n            <div fxFlex=\"60\">\r\n                <mat-card>\r\n    \r\n    \r\n                    <mat-card-content>\r\n                       <!-- added by gayathri issueid=0000654 on 18-08-2020 -->\r\n                       <form #fn=\"ngForm\" novalidate>\r\n                        <div>\r\n                        <mat-form-field appearance=\"outline\">\r\n    \r\n                            <mat-label>Department ID</mat-label>\r\n\r\n                              <input matInput placeholder=\"Department Id\" required name=\"departId\" [(ngModel)]=\"departmentFrom.departId\" #departId=\"ngModel\" (keyup)=\"fun(departmentFrom.departId)\" >\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\">\r\n    \r\n                          <mat-label>Department Name</mat-label>\r\n                          \r\n                          <input matInput placeholder=\"Department Name\" required name=\"departName\" [(ngModel)]=\"departmentFrom.departName\" #departName=\"ngModel\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                            <mat-form-field appearance=\"outline\" >\r\n    \r\n                                    <mat-label>BatchNo From</mat-label>\r\n                                    <input pattern=\"[0-9]*\"  matInput (keypress)=\"numericOnly($event)\" maxlength=\"3\" placeholder=\"Batch No From\" name=\"from\" required [(ngModel)]=\"departmentFrom.fromSeries\" #fromSeries=\"ngModel\">\r\n            \r\n                                </mat-form-field> \r\n                    \r\n                            <mat-form-field appearance=\"outline\">\r\n    \r\n                                    <mat-label>BatchNo To</mat-label>\r\n                                    <input pattern=\"[0-9]*\" matInput (keypress)=\"numericOnly($event)\" maxlength=\"3\" placeholder=\"Batch No To\" required name=\"to\"[(ngModel)]=\"departmentFrom.toSeries\"  #toSeries=\"ngModel\">\r\n            \r\n                                </mat-form-field> \r\n                    </div>\r\n    \r\n                   \r\n                    <mat-card-actions  style=\"text-align: center\">\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\"  (click)=\"onSubmittingDepartment()\" [disabled]=\"disabledSubmit||!fn.form.valid ||!space\">Submit</button>&nbsp;\r\n                            <button mat-raised-button color=\"warn\" [routerLink]=\"'/dashboard'\">Exit</button>\r\n                    </mat-card-actions>\r\n                  </form>\r\n                  </mat-card-content>\r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"30\"></div>\r\n        </div>\r\n    </div>\r\n  </form>\r\n    <br><br>\r\n    <div fxLayout=\"row\">\r\n        <div fxFlex></div>\r\n        <div fxFlex=\"95\">\r\n           <!-- //added by gayathri issueid=0000648 on 18-08-2020 -->\r\n          <mat-card style=\"width: 70%;  margin-left:16%;\" *ngIf=\"aftersubmit\">\r\n            <mat-card-title>\r\n      \r\n            </mat-card-title>\r\n            <mat-card-content style=\" margin-left:-25%;\">\r\n                <div fxLayout=\"row\">\r\n        \r\n                  <table id=\"customers\">\r\n                    <tr>\r\n                    <th>Record Status:</th>\r\n                      <td>\r\n                        <mat-chip>{{departmentFrom.recordStatus }}</mat-chip>\r\n        \r\n                      </td>\r\n                    <th>Auth Status:</th>\r\n                      <td>\r\n        \r\n                        <mat-chip>{{departmentFrom.verifiedStatus}}</mat-chip>\r\n                      \r\n                      </td> \r\n                      <th>Input By:</th>\r\n                      <td>\r\n        \r\n                        <mat-chip>{{departmentFrom.inputBy}}</mat-chip>\r\n                      </td>\r\n                    \r\n                      <th>Modification No:</th>\r\n                      <td>\r\n                         <mat-chip >{{departmentFrom.modNo}}</mat-chip> \r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                     \r\n                      <th>Input Date:</th>\r\n                      <td>\r\n        \r\n                        <mat-chip>{{departmentFrom.inputTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                      </td>\r\n                    \r\n                     <th>Authorized Date:</th>\r\n                      <td>\r\n                        <mat-chip >{{departmentFrom.verifiedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                      </td> \r\n                      <th> Frist Auth Status:</th>\r\n                      <td>\r\n        \r\n                        <mat-chip >{{departmentFrom.verifiedOnce}}</mat-chip>\r\n                       \r\n                      </td>\r\n                      <th>Authorized By:</th>\r\n                      <td>\r\n                         <mat-chip >{{departmentFrom.verifiedBy}}</mat-chip> \r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex></div>\r\n      \r\n      </div>\r\n   <br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-summary/department-summary.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-summary/department-summary.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n        <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n            <span>Department Maintenance Summary</span>\r\n        </mat-toolbar>\r\n        <br>\r\n        <div style=\"text-align: end\">\r\n            <button [routerLink]=\"'/maintenance/departmentNew'\" mat-raised-button color=\"primary\">New</button>&nbsp;\r\n            <button [routerLink]=\"'/dashboard'\" mat-raised-button color=\"warn\">Exit</button>\r\n        </div>\r\n        <br>\r\n        <div>\r\n    \r\n            <mat-card>\r\n    \r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\">\r\n    \r\n                        <ng-container matColumnDef=\"departId\">\r\n                            <th mat-header-cell *matHeaderCellDef> Department Id</th>\r\n                            \r\n                            <td mat-cell *matCellDef=\"let row\">\r\n                        <a routerLink =\"/maintenance/batchedit/{{row.departId}}\" \r\n                        (click)=\"getDataFromSummary(row)\"> {{row.departId}}</a> </td> \r\n    \r\n                        </ng-container>\r\n    \r\n    \r\n                        <ng-container matColumnDef=\"fromSeries\">\r\n                            <th mat-header-cell *matHeaderCellDef> Batch No From </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.fromSeries}}</td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"toSeries\">\r\n                            <th mat-header-cell *matHeaderCellDef> Batch No To </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.toSeries}}</td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"inputBy\">\r\n                            <th mat-header-cell *matHeaderCellDef> Maker Id </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.inputBy}}</td>\r\n                        </ng-container>\r\n    \r\n    \r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </tr>\r\n    \r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                </div>\r\n            </mat-card>\r\n    \r\n        </div>\r\n    </div>\r\n    <br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        <span>Sftp Maintenance</span>\r\n    </mat-toolbar>\r\n    <br>\r\n<div>\r\n    <div fxLayout=\"row\">\r\n        <div fxFlex=\"30\"></div>\r\n            <div fxFlex=\"70\">\r\n                <mat-card>\r\n                    \r\n                    \r\n                    <mat-card-content>\r\n                      <div>\r\n                            <mat-form-field appearance=\"outline\">\r\n\r\n                                    <mat-label>External System Name</mat-label>\r\n                                    <mat-select>\r\n                                        <mat-option value=\"extsysName\">\r\n                                            External System Name\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n            \r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\">\r\n\r\n                                        <mat-label>Process Name</mat-label>\r\n                                        <mat-select>\r\n                                            <mat-option value=\"processNAme\">\r\n                                                Process Name\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                \r\n                                    </mat-form-field>\r\n                      </div>\r\n                      <div>\r\n                          <mat-form-field appearance=\"outline\">\r\n                                <mat-label>User Name</mat-label>\r\n                              <input matInput required placeholder=\"UserName\">\r\n                          </mat-form-field>\r\n                      \r\n                      \r\n                            <mat-form-field appearance=\"outline\">\r\n                                  <mat-label>Password</mat-label>\r\n                                <input matInput required placeholder=\"password\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div>\r\n                                <mat-form-field appearance=\"outline\">\r\n                                      <mat-label>Ip Address</mat-label>\r\n                                    <input matInput required placeholder=\"IpAddress\">\r\n                                </mat-form-field>\r\n                            \r\n                            \r\n                                  <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Port</mat-label>\r\n                                      <input matInput required placeholder=\"Port\">\r\n                                  </mat-form-field>\r\n                              </div>\r\n                              <div>\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Path</mat-label>\r\n                                          <input matInput required placeholder=\"Path\">\r\n                                      </mat-form-field>\r\n                              </div>\r\n                    </mat-card-content>\r\n                    <mat-card-actions  style=\"text-align: center\">\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"editFlag\"(click)=\"saveOfsftpMaintenaceEdit()\">Submit</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"sftpAuth()\">Auth</button>\r\n                            \r\n                            <button mat-raised-button color=\"primary\" (click)=\"sftpClose()\">Close</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"sftpReopen()\">Open</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"sftpDelete()\">Delete</button>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"sftpEdit()\" *ngIf=\"!editFlag\">Edit</button>\r\n                            <button mat-raised-button color=\"warn\" [routerLink]=\"'/maintenance/sftpSummary'\">Exit</button>\r\n                    </mat-card-actions>\r\n                    \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"30\">\r\n\r\n            </div>\r\n       \r\n    </div>\r\n</div>\r\n<br>\r\n<div fxLayout=\"row\">\r\n    <div fxFlex></div>\r\n    <div fxFlex=\"95\">\r\n      <mat-card style=\"width: 70%;  margin-left:16%;\">\r\n        <mat-card-title>\r\n  \r\n        </mat-card-title>\r\n        <mat-card-content style=\" margin-left:-25%;\">\r\n            <div fxLayout=\"row\">\r\n    \r\n              <table id=\"customers\">\r\n                <tr>\r\n                <th>Record Status:</th>\r\n                  <td>\r\n                    <!-- <mat-chip>{{fetchUserSingle.recordStatus }}</mat-chip> -->\r\n    \r\n                  </td>\r\n                <th>Auth Status:</th>\r\n                  <td>\r\n    \r\n                    <!-- <mat-chip>{{fetchUserSingle.verifiedStatus}}</mat-chip> -->\r\n                    <!-- <mat-form-field appearance=\"fill\">\r\n                                    <mat-label>Status</mat-label>\r\n                                    <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                    <mat-icon matSuffix>person</mat-icon>\r\n                                  </mat-form-field> \r\n                  </td> -->\r\n                  <th>Input By:</th>\r\n                  <td>\r\n    \r\n                    <!-- <mat-chip>{{fetchUserSingle.inputBy}}</mat-chip> -->\r\n                  </td>\r\n                \r\n                  <th>Modification No:</th>\r\n                  <td>\r\n                     <!-- <mat-chip >{{fetchUserSingle.modNo}}</mat-chip>  -->\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                 \r\n                  <th>Input Date:</th>\r\n                  <td>\r\n    \r\n                    <!-- <mat-chip>{{fetchUserSingle.inputTime | date}}</mat-chip> -->\r\n                  </td>\r\n                  <!-- <th>Creation Date:</th>\r\n                                <td>\r\n                                  <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                                </td> -->\r\n                 <th>Authorized Date:</th>\r\n                  <td>\r\n                    <!-- <mat-chip >{{fetchUserSingle.verifiedTime | date:'d/M/yy'}}</mat-chip> -->\r\n                  </td> \r\n                  <th> Frist Auth Status:</th>\r\n                  <td>\r\n    \r\n                    <!-- <mat-chip >{{fetchUserSingle.verifiedOnce}}</mat-chip> -->\r\n                     <!-- <mat-form-field appearance=\"fill\">\r\n                                    <mat-label>Status</mat-label>\r\n                                    <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                    <mat-icon matSuffix>person</mat-icon>\r\n                                  </mat-form-field>  -->\r\n                  </td>\r\n                  <th>Authorized By:</th>\r\n                  <td>\r\n                     <!-- <mat-chip >{{fetchUserSingle.verifiedBy}}</mat-chip>  -->\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex></div>\r\n  \r\n  </div>\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Cash Payments</span>\r\n</mat-toolbar>\r\n<br>\r\n<div>\r\n  <div>\r\n    <div fxLayout=\"row wrap\">\r\n     <div fxFlex=\"10\"></div>\r\n      <div fxFlex=\"70\">\r\n        <mat-card>\r\n            \r\n            \r\n            <mat-card-content>\r\n              <div>\r\n                  <mat-label>Service Type:</mat-label>\r\n                <mat-form-field appearance=\"fill\">\r\n                   \r\n                    <mat-select >\r\n                      <mat-option value=\"kentrade\">KENTRADE\r\n                      </mat-option>\r\n                      <mat-option value=\"itax\">Itax\r\n                        </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-label>PRN/EslipNo:</mat-label>\r\n                  <mat-form-field appearance=\"fill\">\r\n                     \r\n                      <input matInput value=\"20134312636\">\r\n                    </mat-form-field>&nbsp;&nbsp;&nbsp;\r\n                    <button  mat-raised-button color=\"primary\">\r\n                      <mat-icon>cached</mat-icon>Search</button>\r\n                </div>\r\n                <div>\r\n                    <div fxFlex=\"row\">\r\n                      <div fxFlex=\"100\" style=\"border: solid black 2px\">\r\n                        <div>\r\n                          <fieldset></fieldset>\r\n                          <legend>\r\n\r\n                              Please Enter Your Name</legend>\r\n                              \r\n                        <div>\r\n                          <mat-label>Status</mat-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                          <mat-form-field appearance=\"fill\">\r\n                             \r\n                              <input matInput value=\"Valid\">\r\n                            </mat-form-field>&nbsp;&nbsp;\r\n                            <mat-label>PIN</mat-label>\r\n                            <mat-form-field appearance=\"fill\">\r\n                                \r\n                                <input matInput value=\"A0000013214J\">\r\n                              </mat-form-field>\r\n                      </div>\r\n                      <div>\r\n                          <mat-label>Tax Payers Name</mat-label>\r\n                          <mat-form-field appearance=\"fill\">\r\n                             \r\n                              <input matInput value=\"Joe Doe\">\r\n                            </mat-form-field>&nbsp;&nbsp;\r\n                            <mat-label>Amount Exeected</mat-label>\r\n                            <mat-form-field appearance=\"fill\">\r\n                                \r\n                                <input matInput value=\"10,000,00\">\r\n                              </mat-form-field>\r\n                      </div>\r\n                      <div>\r\n                          <mat-label>Remark</mat-label>\r\n                          <mat-form-field appearance=\"fill\">\r\n                             \r\n                              <input matInput value=\"Tax Payment\">\r\n                            </mat-form-field>&nbsp;&nbsp;\r\n                            <mat-label>Currency</mat-label>\r\n                            <mat-form-field appearance=\"fill\">\r\n                                \r\n                                <input matInput value=\"KES\">\r\n                              </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                    \r\n                </div>\r\n\r\n            </mat-card-content>\r\n          \r\n           \r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div fxLayout=\"row\">\r\n        <div fxFlex=\"30\"></div>\r\n            <div fxFlex=\"70\">\r\n                <mat-card>\r\n                    \r\n                    \r\n                    <mat-card-content>\r\n                      <div>\r\n                            <mat-form-field appearance=\"outline\">\r\n\r\n                                    <mat-label>External sytem Name</mat-label>\r\n                                    <mat-select>\r\n                                      <mat-option *ngFor=\"let extSys of extSysName\" [value]=\"extSys\" required>\r\n                                       \r\n                                      </mat-option>\r\n                                    </mat-select>\r\n            \r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\">\r\n\r\n                                        <mat-label>Process Name</mat-label>\r\n                                        <mat-select>\r\n                                          <mat-option *ngFor=\"let process of processName\" [value]=\"extSys\" required>\r\n                                         \r\n                                          </mat-option>\r\n                                        </mat-select>\r\n                \r\n                                    </mat-form-field>\r\n                      </div>\r\n                      <div>\r\n                          <mat-form-field appearance=\"outline\">\r\n                                <mat-label>User Name</mat-label>\r\n                              <input matInput required placeholder=\"UserName\">\r\n                          </mat-form-field>\r\n                      \r\n                      \r\n                            <mat-form-field appearance=\"outline\">\r\n                                  <mat-label>Password</mat-label>\r\n                                <input matInput required placeholder=\"password\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div>\r\n                                <mat-form-field appearance=\"outline\">\r\n                                      <mat-label>Ip Address</mat-label>\r\n                                    <input matInput required placeholder=\"IpAddress\">\r\n                                </mat-form-field>\r\n                            \r\n                            \r\n                                  <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Port</mat-label>\r\n                                      <input matInput required placeholder=\"Port\">\r\n                                  </mat-form-field>\r\n                              </div>\r\n                              <div>\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Path</mat-label>\r\n                                          <input matInput required placeholder=\"Path\">\r\n                                      </mat-form-field>\r\n                              </div>\r\n                    </mat-card-content>\r\n                    <mat-card-actions  style=\"text-align: center\">\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" (clcik)=\"onSaveOfSftpMaintenance()\">Submit</button>\r\n                            <button mat-raised-button color=\"warn\" [routerLink]=\"'/dashboard'\">Exit</button>\r\n                    </mat-card-actions>\r\n                    \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"30\">\r\n\r\n            </div>\r\n       \r\n    </div> -->\r\n</div>\r\n<br><br>\r\n<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card style=\"width: 70%;  margin-left:16%;\">\r\n      <mat-card-title>\r\n\r\n      </mat-card-title>\r\n      <mat-card-content style=\" margin-left:-25%;\">\r\n        <div fxLayout=\"row\">\r\n\r\n          <table id=\"customers\">\r\n            <tr>\r\n              <th>Record Status:</th>\r\n              <td>\r\n                <!-- <mat-chip>{{fetchUserSingle.recordStatus }}</mat-chip> -->\r\n\r\n              </td>\r\n              <th>Auth Status:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip>{{fetchUserSingle.verifiedStatus}}</mat-chip> -->\r\n                <!-- <mat-form-field appearance=\"fill\">\r\n                                    <mat-label>Status</mat-label>\r\n                                    <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                    <mat-icon matSuffix>person</mat-icon>\r\n                                  </mat-form-field> \r\n                  </td> -->\r\n              <th>Input By:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip>{{fetchUserSingle.inputBy}}</mat-chip> -->\r\n              </td>\r\n\r\n              <th>Modification No:</th>\r\n              <td>\r\n                <!-- <mat-chip >{{fetchUserSingle.modNo}}</mat-chip>  -->\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n\r\n              <th>Input Date:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip>{{fetchUserSingle.inputTime | date}}</mat-chip> -->\r\n              </td>\r\n              <!-- <th>Creation Date:</th>\r\n                                <td>\r\n                                  <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                                </td> -->\r\n              <th>Authorized Date:</th>\r\n              <td>\r\n                <!-- <mat-chip >{{fetchUserSingle.verifiedTime | date:'d/M/yy'}}</mat-chip> -->\r\n              </td>\r\n              <th> Frist Auth Status:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip >{{fetchUserSingle.verifiedOnce}}</mat-chip> -->\r\n                <!-- <mat-form-field appearance=\"fill\">\r\n                                    <mat-label>Status</mat-label>\r\n                                    <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                                    <mat-icon matSuffix>person</mat-icon>\r\n                                  </mat-form-field>  -->\r\n              </td>\r\n              <th>Authorized By:</th>\r\n              <td>\r\n                <!-- <mat-chip >{{fetchUserSingle.verifiedBy}}</mat-chip>  -->\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex></div>\r\n\r\n</div>\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n        <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n            <span>SFTP Maintenance Summary</span>\r\n        </mat-toolbar>\r\n        <br>\r\n        <div style=\"text-align: end\">\r\n            <button [routerLink]=\"'/maintenance/sftpNew'\" mat-raised-button color=\"primary\">New</button>&nbsp;\r\n            <button [routerLink]=\"'/dashboard'\" mat-raised-button color=\"warn\">Exit</button>\r\n        </div>\r\n        <br>\r\n        <div>\r\n    \r\n            <mat-card>\r\n    \r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table dataSource>\r\n    \r\n                        <ng-container matColumnDef=\"departmentId\">\r\n                            <th mat-header-cell *matHeaderCellDef> UserName</th>\r\n                            <!-- <td mat-cell *matCellDef=\"let row\">{{row.closureType}}</td> -->\r\n                            <!-- <td mat-cell *matCellDef=\"let row\">\r\n                                            <a routerLink =\"/maintenance/batchedit/{{row.departmentId}}\" (click)=\"getDataFromSummary(row)\"> {{row.closureType}}</a> </td> -->\r\n    \r\n                        </ng-container>\r\n    \r\n    \r\n                        <ng-container matColumnDef=\"from\">\r\n                            <th mat-header-cell *matHeaderCellDef>Ip Address </th>\r\n                            <!-- <td mat-cell *matCellDef=\"let row\"> {{row.accountNumber}}</td> -->\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"to\">\r\n                            <th mat-header-cell *matHeaderCellDef> Port </th>\r\n                            <!-- <td mat-cell *matCellDef=\"let row\"> {{row.fileName}}</td> -->\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"inputBy\">\r\n                            <th mat-header-cell *matHeaderCellDef> Maker Id </th>\r\n                            <!-- <td mat-cell *matCellDef=\"let row\"> {{row.inputBy}}</td> -->\r\n                        </ng-container>\r\n    \r\n    \r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </tr>\r\n    \r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                </div>\r\n            </mat-card>\r\n    \r\n        </div>\r\n    </div>\r\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\r\n    <br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n        <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n            <span>SubAgentcode Maintenance </span>\r\n        </mat-toolbar>\r\n        </div>\r\n        <br>\r\n        <div>\r\n            <div fxLayout=\"row wrap\">\r\n                <div fxFlex=\"25\"></div>\r\n                <div fxFlex=\"70\">\r\n                    <mat-card>\r\n                        <div>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>SubAgentAccNo</mat-label>\r\n                                <input matInput [readonly]=\"!editFlag\" placeholder=\"SubAgentAccNo\" required name=\"subAgentAccNo\" \r\n                                [(ngModel)]=\"subAgentcode.subAgentAccNo\" #subAgentAccNo=\"ngModel\"  [readonly]=\"!editFlag\">\r\n                            </mat-form-field>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>SubAgentName</mat-label>\r\n                                    <input matInput placeholder=\"SubAgentName\" required name=\"subAgentName\" \r\n                                    [(ngModel)]=\"subAgentcode.subAgentName\" #subAgentName=\"ngModel\"  [readonly]=\"!editFlag\">\r\n                                </mat-form-field>\r\n                        </div>     \r\n                        <div>\r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Branch</mat-label>\r\n                                    <input matInput placeholder=\"Branch\" required name=\"branch\" \r\n                                    [(ngModel)]=\"subAgentcode.branch\" #branch=\"ngModel\"  [readonly]=\"!editFlag\">\r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>FccAccountNumber</mat-label>\r\n                                        <input matInput placeholder=\"FccAccNo\" required name=\"fccAccNo\" \r\n                                        [(ngModel)]=\"subAgentcode.fccAccNo\" #fccAccNo=\"ngModel\"  [readonly]=\"!editFlag\">\r\n                                    </mat-form-field>\r\n                            </div>       \r\n                            <div>\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>wuAgShortCode</mat-label>\r\n                                        <input matInput placeholder=\"WuAgShortCode\" required name=\"wuAgShortCode\" \r\n                                        [(ngModel)]=\"subAgentcode.wuAgShortCode\" #wuAgShortCode=\"ngModel\"  [readonly]=\"!editFlag\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Gl</mat-label>\r\n                                            <input matInput placeholder=\"gl\" required name=\"gl\" \r\n                                            [(ngModel)]=\"subAgentcode.gl\" #gl=\"ngModel\"  [readonly]=\"!editFlag\">\r\n                                        </mat-form-field>\r\n                                </div>  \r\n                                <!-- <div style=\"text-align: center\">\r\n                                        <button mat-raised-button (click)=\"onsaveTheEditOfSubAgentCode()\" color=\"primary\" *ngIf=\"editFlag\" >Save</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\" (click)=\"onAuthsubagentcode()\" *ngIf=\"subAgentcode.verifiedStatus=='U'||subAgentcode.verifiedStatus=='UNAUTHORIZED'\">Auth</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\" (click)=\"onCloseOfsubAgentCode()\"  *ngIf=\"subAgentcode.recordStatus=='O'||subAgentcode.recordStatus=='OPEN'\">Close</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\"  (click)=\"onReopenOfsubagentCode()\"  *ngIf=\"subAgentcode.recordStatus=='C'||subAgentcode.recordStatus=='CLOSE'\">Re-open</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\"  (click)=\" onDeleteOfsubAgentcode()\">Delete</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\" (click)=\"onEdit()\" *ngIf=\"!editFlag\">Edit</button>&nbsp;\r\n                                        <button mat-raised-button [routerLink]=\"'/maintenance/subAgentSummary'\" color=\"warn\">Exit</button>&nbsp;\r\n                                </div> -->\r\n                   \r\n                                <!-- <div style=\"text-align: center\" fxLayoutGap=\"10\">\r\n                                    <button mat-raised-button color=\"primary\" [routerLink]=\"'/maintenance/subAgnetNew'\">New</button>&nbsp;\r\n                                    <button mat-raised-button color=\"primary\" (click)=\"onEdit()\" *ngIf=\"!editFlag && subAgentcode.recordStatus=='O' ||subAgentcode.recordStatus=='OPEN'\">Edit</button>&nbsp;\r\n                                    <button mat-raised-button (click)=\"onsaveTheEditOfSubAgentCode()\" color=\"primary\" *ngIf=\"editFlag\" >Save</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\" (click)=\"onAuthsubagentcode()\" *ngIf=\"subAgentcode.verifiedStatus=='U'||subAgentcode.verifiedStatus=='UNAUTHORIZED'\">Auth</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\" (click)=\"onCloseOfsubAgentCode()\"  *ngIf=\"subAgentcode.recordStatus=='O'||subAgentcode.recordStatus=='OPEN' && subAgentcode.verifiedOnce=='YES'\">Close</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\"  (click)=\"onReopenOfsubagentCode()\"  *ngIf=\"subAgentcode.recordStatus=='C'||subAgentcode.recordStatus=='CLOSE' && subAgentcode.verifiedStatus=='AUTHORIZED'\">Re-open</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\"  (click)=\" onDeleteOfsubAgentcode()\"  *ngIf=\"subAgentcode.verifiedOnce=='N'||subAgentcode.verifiedOnce=='NO'\">Delete</button>&nbsp;\r\n                                       \r\n                                        <button mat-raised-button [routerLink]=\"'/maintenance/subAgentSummary'\" color=\"warn\">Exit</button>&nbsp;\r\n                                </div> -->\r\n\r\n                                <div style=\"text-align: center\" fxLayoutGap=\"10\">\r\n                                    <button mat-raised-button color=\"primary\" (click)=\"onNew()\" *ngIf=\"!editFlag &&!onlySubmit\">New</button>&nbsp;\r\n                                    <button mat-raised-button color=\"primary\" (click)=\"onEdit()\" *ngIf=\" subAgentcode.recordStatus=='O' ||subAgentcode.recordStatus=='OPEN' && !editFlag  &&!onlySubmit\" >Edit</button>&nbsp;\r\n                                    <button mat-raised-button (click)=\"onsaveTheEditOfSubAgentCode()\" color=\"primary\" *ngIf=\"editFlag\" >Save</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\" (click)=\"onAuthsubagentcode()\" *ngIf=\"subAgentcode.verifiedStatus=='U'||subAgentcode.verifiedStatus=='UNAUTHORIZED'&& !editFlag  &&!onlySubmit\">Auth</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\" (click)=\"onCloseOfsubAgentCode()\"  *ngIf=\"subAgentcode.recordStatus=='O'||subAgentcode.recordStatus=='OPEN' && subAgentcode.verifiedOnce=='YES'&& !editFlag  &&!onlySubmit\">Close</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\"  (click)=\"onReopenOfsubagentCode()\"  *ngIf=\"subAgentcode.recordStatus=='C'||subAgentcode.recordStatus=='CLOSE' && subAgentcode.verifiedStatus=='AUTHORIZED'&& !editFlag  &&!onlySubmit\">Re-open</button>&nbsp;\r\n                                        <button mat-raised-button color=\"primary\"  (click)=\" onDeleteOfsubAgentcode()\"  *ngIf=\"subAgentcode.verifiedOnce=='N'||subAgentcode.verifiedOnce=='NO'&& !editFlag  &&!onlySubmit\">Delete</button>&nbsp;\r\n                                       \r\n                                        <button mat-raised-button [routerLink]=\"'/maintenance/subAgentSummary'\" color=\"warn\">Exit</button>&nbsp;\r\n                                </div>\r\n                   \r\n                   \r\n                            </mat-card>\r\n                    \r\n                      \r\n                    \r\n                    <div fxFlex=\"10\"></div>\r\n                </div>\r\n        \r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div fxLayout=\"row\">\r\n                <div fxFlex></div>\r\n                <div fxFlex=\"95\">\r\n                    <mat-card style=\"width: 70%;  margin-left:16%;\">\r\n                        <mat-card-title>\r\n        \r\n                        </mat-card-title>\r\n                        <mat-card-content style=\" margin-left:-25%;\">\r\n                            <div fxLayout=\"row\">\r\n                                <table id=\"customers\">\r\n                                    <tr>\r\n                                        <th>Record Status:</th>\r\n                                        <td>\r\n                                            <mat-chip>{{subAgentcode.recordStatus }}</mat-chip>\r\n        \r\n                                        </td>\r\n                                        <th>Auth Status:</th>\r\n                                        <td>\r\n        \r\n                                            <mat-chip>{{subAgentcode.verifiedStatus}}</mat-chip>\r\n                                            \r\n                                        <th>Input By:</th>\r\n                                        <td>\r\n        \r\n                                            <mat-chip>{{subAgentcode.inputBy}}</mat-chip>\r\n                                        </td>\r\n        \r\n                                        <th>Modification No:</th>\r\n                                        <td>\r\n                                            <mat-chip >{{subAgentcode.modNo}}</mat-chip> \r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n        \r\n                                        <th>Input Date:</th>\r\n                                        <td>\r\n        \r\n                                            <mat-chip>{{subAgentcode.inputTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                                        </td>\r\n                                      \r\n                                        <th>Authorized Date:</th>\r\n                                        <td>\r\n                                            <mat-chip >{{subAgentcode.verifiedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                                        </td>\r\n                                        <th> Frist Auth Status:</th>\r\n                                        <td>\r\n        \r\n                                            <mat-chip >{{subAgentcode.verifiedOnce}}</mat-chip>\r\n                                          \r\n                                        </td>\r\n                                        <th>Authorized By:</th>\r\n                                        <td>\r\n                                            <mat-chip >{{subAgentcode.verifiedBy}}</mat-chip> \r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n                </div>\r\n                <div fxFlex></div>\r\n        \r\n            </div>\r\n\t\t\t\t<br><br> <br><br> <br><br> <br><br> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n    <span>SubAgentcode Maintenance </span>\r\n</mat-toolbar>\r\n</div>\r\n<br>\r\n<div>\r\n        <form #fn=\"ngForm\">\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"25\"></div>\r\n        <div fxFlex=\"70\">\r\n            <mat-card>\r\n                <div>\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>SubAgentAccNo</mat-label>\r\n                        <input matInput placeholder=\"SubAgent AccNo\" required name=\"subAgentcode\"\r\n                        [(ngModel)]=\"subAgentcode.subAgentAccNo\" #subAgentAccNo=\"ngModel\" (keyup)=\"fun(subAgentcode.subAgentAccNo)\">\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\">\r\n                            <mat-label>SubAgentName</mat-label>\r\n                            <input matInput placeholder=\"SubAgent Name\" required name=\"subAgentName\"\r\n                            [(ngModel)]=\"subAgentcode.subAgentName\" #subAgentName=\"ngModel\" >\r\n                        </mat-form-field>\r\n                </div>     \r\n                <div>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Branch</mat-label>\r\n                            <input matInput placeholder=\"Branch\" required name=\"branch\" [(ngModel)]=\"subAgentcode.branch\" \r\n                            #branch=\"ngModel\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\">\r\n                                <mat-label>FccAccountNumber</mat-label>\r\n                                <input matInput placeholder=\"FccAccountNumber\" required name=\"fccAccNo\" [(ngModel)]=\"subAgentcode.fccAccNo\" \r\n                                #fccAccNo=\"ngModel\">\r\n                            </mat-form-field>\r\n                    </div>       \r\n                    <div>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>wuAgShortCode</mat-label>\r\n                                <input matInput placeholder=\"wuAgShortCode\"\r\n                                 required name=\"wuAgShortCode\" [(ngModel)]=\"subAgentcode.wuAgShortCode\" \r\n                                #wuAgShortCode=\"ngModel\"\r\n                                >\r\n                            </mat-form-field>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Gl</mat-label>\r\n                                    <input matInput placeholder=\"GL\"\r\n                                    required name=\"gl\" [(ngModel)]=\"subAgentcode.gl\" \r\n                                   #gl=\"ngModel\">\r\n                                </mat-form-field>\r\n                        </div>  \r\n                        <div style=\"text-align: center\">\r\n                                <button mat-raised-button (click)=\"onSaveOfSubAgentcode()\" color=\"primary\" [disabled]=\"disablesubmit||!fn.form.valid ||!space\">Save</button>&nbsp;\r\n                                <button mat-raised-button [routerLink]=\"'/dashboard'\" color=\"warn\">Exit</button>\r\n                        </div>\r\n            </mat-card>\r\n            \r\n              \r\n            \r\n            <div fxFlex=\"10\"></div>\r\n        </div>\r\n\r\n    </div>\r\n    </form>\r\n\r\n</div>\r\n<br>\r\n<div fxLayout=\"row\">\r\n        <div fxFlex></div>\r\n        <div fxFlex=\"95\">\r\n            <mat-card style=\"width: 70%;  margin-left:16%;\">\r\n                <mat-card-title>\r\n\r\n                </mat-card-title>\r\n                <mat-card-content style=\" margin-left:-25%;\">\r\n                    <div fxLayout=\"row\">\r\n\r\n                        <table id=\"customers\">\r\n                            <tr>\r\n                                <th>Record Status:</th>\r\n                                <td>\r\n                                    <mat-chip>{{subAgentcode.recordStatus }}</mat-chip>\r\n\r\n                                </td>\r\n                                <th>Auth Status:</th>\r\n                                <td>\r\n\r\n                                    <mat-chip>{{subAgentcode.verifiedStatus}}</mat-chip>\r\n                                    \r\n                                <th>Input By:</th>\r\n                                <td>\r\n\r\n                                    <mat-chip>{{subAgentcode.inputBy}}</mat-chip>\r\n                                </td>\r\n\r\n                                <th>Modification No:</th>\r\n                                <td>\r\n                                    <mat-chip >{{subAgentcode.modNo}}</mat-chip> \r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n\r\n                                <th>Input Date:</th>\r\n                                <td>\r\n\r\n                                    <mat-chip>{{subAgentcode.inputTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                                </td>\r\n                              \r\n                                <th>Authorized Date:</th>\r\n                                <td>\r\n                                    <mat-chip >{{subAgentcode.verifiedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                                </td>\r\n                                <th> Frist Auth Status:</th>\r\n                                <td>\r\n\r\n                                    <mat-chip >{{subAgentcode.verifiedOnce}}</mat-chip>\r\n                                  \r\n                                </td>\r\n                                <th>Authorized By:</th>\r\n                                <td>\r\n                                    <mat-chip >{{subAgentcode.verifiedBy}}</mat-chip> \r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </div>\r\n        <div fxFlex></div>\r\n\r\n    </div>\r\n    <br><br> <br><br> <br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n    <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        <span>SubAgentcode Maintenance Summary</span>\r\n    </mat-toolbar>\r\n    <br>\r\n    <div style=\"text-align: end\">\r\n        <button [routerLink]=\"'/maintenance/subAgnetNew'\" mat-raised-button color=\"primary\">New</button>&nbsp;\r\n        <button [routerLink]=\"'/dashboard'\" mat-raised-button color=\"warn\">Exit</button>\r\n    </div>\r\n    <br>\r\n    <div>\r\n\r\n        <mat-card>\r\n\r\n            <div class=\"mat-elevation-z8\">\r\n                <table mat-table [dataSource]=\"dataSource\">\r\n\r\n                    <ng-container matColumnDef=\"subAgentAccNo\" >\r\n                        <th mat-header-cell *matHeaderCellDef> Sub Agent Acco No</th>\r\n                        \r\n                        <td mat-cell *matCellDef=\"let row\">\r\n                     <a routerLink =\"/maintenance/subagentEdit/{{row.subAgentAccNo}}\" \r\n                     (click)=\"getDataFromSummary(row)\"> {{row.subAgentAccNo}}</a> \r\n                 </td>  \r\n\r\n                    </ng-container>\r\n\r\n\r\n                    <ng-container matColumnDef=\"subAgentName\">\r\n                        <th mat-header-cell *matHeaderCellDef> Sub Agent Name </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.subAgentName}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"branch\">\r\n                        <th mat-header-cell *matHeaderCellDef> Branch </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.branch}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"inputBy\">\r\n                        <th mat-header-cell *matHeaderCellDef> Maker Id </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.inputBy}}</td>\r\n                    </ng-container>\r\n\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                    </tr>\r\n\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n            </div>\r\n        </mat-card>\r\n\r\n    </div>\r\n</div>\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.css ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box{\r\n    width:20px;\r\n    height:20px;\r\n    }\r\n    .red{\r\n    background:white;\r\n    }\r\n    .wrapper {\r\n        height: 160px;\r\n        width: 250px;\r\n        border-style: solid; \r\n        -o-border-image: url(https://i.stack.imgur.com/2RoPg.png) 12 / 6 stretch; \r\n           border-image: url(https://i.stack.imgur.com/2RoPg.png) 12 / 6 stretch;\r\n        position: relative;\r\n        box-sizing: border-box;\r\n      }\r\n    .inner {\r\n        \r\n             box-sizing: border-box;  \r\n      }\r\n    table {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n      }\r\n    td {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n      }\r\n    th {\r\n        background-color: #1b9ab9;\r\n        color: rgb(244, 252, 246);\r\n        font-weight: lighter;\r\n        height: 22px !important;\r\n      }\r\n    /* tr:nth-child(even) {\r\n        background-color: #dddddd;\r\n      } */\r\n    tr {\r\n  background-color: #b8def0;\r\n  color: rgb(34, 29, 29);\r\n  font-weight: lighter;\r\n  height: 22px !important;\r\n  padding-top: 5px;\r\n}\r\n    mat-form-field {\r\n        font-size: 12px;\r\n        width: 180px;\r\n        \r\n      }\r\n    #customers {\r\n        border-collapse: collapse;\r\n        width: 70%;\r\n        margin-left: 26%;\r\n        }\r\n    #customers td, #customers th {\r\n        border: 1px solid #ddd;\r\n        padding: 10px;\r\n        text-align: center;\r\n        font-size: x-small;\r\n        \r\n        }\r\n    #customers td mat-chip {\r\n        font-size: x-small;\r\n        }\r\n    #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n    #customers th {\r\n        padding-top: 8px;\r\n        padding-bottom: px;\r\n        text-align: left;\r\n        background-color:rgb(97, 178, 216);\r\n        color: white;\r\n        }\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvY2FzaC1wYXltZW50LWF1dGhvcml6YXRpb24vY2FzaC1wYXltZW50LWF1dGhvcml6YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1g7SUFDQTtJQUNBLGdCQUFnQjtJQUNoQjtJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsd0VBQXFFO1dBQXJFLHFFQUFxRTtRQUNyRSxrQkFBa0I7UUFDbEIsc0JBQXNCO01BQ3hCO0lBRUE7O2FBRU8sc0JBQXNCO01BQzdCO0lBQ0E7UUFDRSw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLFdBQVc7TUFDYjtJQUVBO1FBQ0UseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixZQUFZO01BQ2Q7SUFDQTtRQUNFLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtNQUN6QjtJQUNBOztTQUVHO0lBRVQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0lBRU07UUFDRSxlQUFlO1FBQ2YsWUFBWTs7TUFFZDtJQUNBO1FBQ0UseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEI7SUFDQTtRQUNBLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGtCQUFrQjs7UUFFbEI7SUFDQTtRQUNBLGtCQUFrQjtRQUNsQjtJQUNBLDhCQUE4Qix5QkFBeUIsQ0FBQztJQUV4RDtRQUNBLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWludGVuYW5jZS9jYXNoLXBheW1lbnQtYXV0aG9yaXphdGlvbi9jYXNoLXBheW1lbnQtYXV0aG9yaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuICAgIH1cclxuICAgIC5yZWR7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkOyBcclxuICAgICAgICBib3JkZXItaW1hZ2U6IHVybChodHRwczovL2kuc3RhY2suaW1ndXIuY29tLzJSb1BnLnBuZykgMTIgLyA2IHN0cmV0Y2g7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5pbm5lciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXHJcbiAgICAgIH1cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgfVxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWFiOTtcclxuICAgICAgICBjb2xvcjogcmdiKDI0NCwgMjUyLCAyNDYpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8qIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICAgICAgfSAqL1xyXG4gICAgICBcclxudHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XHJcbiAgY29sb3I6IHJnYigzNCwgMjksIDI5KTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbiAgICAgIFxyXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAjY3VzdG9tZXJzIHtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjdXN0b21lcnMgdGQgbWF0LWNoaXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NywgMTc4LCAyMTYpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIl19 */");

/***/ }),

/***/ "./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CashPaymentAuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentAuthorizationComponent", function() { return CashPaymentAuthorizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let CashPaymentAuthorizationComponent = class CashPaymentAuthorizationComponent {
    constructor() { }
    ngOnInit() {
    }
    onSearchCall(prn) {
        if (prn != "5678910") {
            this.serach = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Failed To Fetch the Deatils"
            });
        }
        else {
            this.serach = true;
        }
    }
    onReject() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Payment Rejected"
        });
    }
    onRework() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Payment For Rework"
        });
    }
    onApprove() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Payment Approved"
        });
    }
};
CashPaymentAuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-payment-authorization',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-payment-authorization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-payment-authorization.component.css */ "./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CashPaymentAuthorizationComponent);



/***/ }),

/***/ "./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    /* vertical-align: top; */\r\n    font-size: 11px;\r\n   \r\n    margin: 0;\r\n  }\r\n  #customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n  #customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n  #customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n  #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n  #customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n  .pb-1{\r\n      font-size: 12px;\r\n    }\r\n  fieldset.scheduler-border {\r\n        border: 1px groove #ddd !important;\r\n        padding: 0 1.4em 1.4em 1.4em !important;\r\n        margin: 0 0 1.5em 0 !important;\r\n        box-shadow:  0px 0px 0px 0px #000;\r\n    }\r\n  legend.scheduler-border {\r\n        width:inherit; /* Or auto */\r\n        padding:0 10px; /* To give a bit of padding on the left and right */\r\n        border-bottom:none;\r\n    }\r\n  table {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n      }\r\n  th {\r\n        background-color: #1b9ab9;\r\n        color: rgb(244, 252, 246);\r\n        font-weight: lighter;\r\n        height: 22px !important;\r\n      }\r\n  td{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n      }\r\n  /* tr:nth-child(even) {\r\n        background-color: #dddddd;\r\n      } */\r\n  tr {\r\n        background-color: #b8def0;\r\n        color: rgb(34, 29, 29);\r\n        font-weight: lighter;\r\n        height: 22px !important;\r\n        padding-top: 5px;\r\n      }\r\n  mat-form-field {\r\n        font-size: 12px;\r\n        width: 180px;\r\n        \r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvY2FzaC1wYXltZW50cy1uZXcvY2FzaC1wYXltZW50cy1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlOztJQUVmLFNBQVM7RUFDWDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7RUFDQTtJQUNBLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEI7RUFDQTtJQUNBLGtCQUFrQjtJQUNsQjtFQUNBLDhCQUE4Qix5QkFBeUIsQ0FBQztFQUV4RDtJQUNBLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1o7RUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDQTtRQUNJLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFDdkMsOEJBQThCO1FBRXRCLGlDQUFpQztJQUM3QztFQUVBO1FBQ0ksYUFBYSxFQUFFLFlBQVk7UUFDM0IsY0FBYyxFQUFFLG1EQUFtRDtRQUNuRSxrQkFBa0I7SUFDdEI7RUFDQTtRQUNJLDhCQUE4QjtRQUM5Qix5QkFBeUI7UUFDekIsV0FBVztNQUNiO0VBQ0E7UUFDRSx5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQix1QkFBdUI7TUFDekI7RUFDQTtRQUNFLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsWUFBWTtNQUNkO0VBRUE7O1NBRUc7RUFDSDtRQUNFLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixnQkFBZ0I7TUFDbEI7RUFDQTtRQUNFLGVBQWU7UUFDZixZQUFZOztNQUVkIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvY2FzaC1wYXltZW50cy1uZXcvY2FzaC1wYXltZW50cy1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAqL1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgI2N1c3RvbWVycyB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNiU7XHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gICAgXHJcbiAgICAjY3VzdG9tZXJzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTcsIDE3OCwgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5wYi0xe1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBmaWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMHB4IDBweCAwcHggMHB4ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAgMHB4IDBweCAwcHggMHB4ICMwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICAgICAgICB3aWR0aDppbmhlcml0OyAvKiBPciBhdXRvICovXHJcbiAgICAgICAgcGFkZGluZzowIDEwcHg7IC8qIFRvIGdpdmUgYSBiaXQgb2YgcGFkZGluZyBvbiB0aGUgbGVmdCBhbmQgcmlnaHQgKi9cclxuICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjlhYjk7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDQsIDI1MiwgMjQ2KTtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICB0ZHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgICAgIH0gKi9cclxuICAgICAgdHIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XHJcbiAgICAgICAgY29sb3I6IHJnYigzNCwgMjksIDI5KTtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICB9Il19 */");

/***/ }),

/***/ "./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.ts ***!
  \************************************************************************************/
/*! exports provided: CashPaymentsNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentsNewComponent", function() { return CashPaymentsNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let CashPaymentsNewComponent = class CashPaymentsNewComponent {
    constructor() {
        // Eslip=5678910;
        this.checked = ['is_cash', 'is_cheque', 'internal_transfer'];
        this.chequeNO = "";
        this.accNo = "";
    }
    ngOnInit() {
    }
    getValueForcash(event) {
        this.is_cash = event.checked;
        // console.log(event.checked);
        // this.is_cheque!=event.checked;
    }
    getcheque(event) {
        this.is_cheque = event.checked;
        // this.is_cash!=event.checked;
        // this.internal_transfer!=event.checked;
    }
    getInternalTansefer(event) {
        this.internal_transfer = event.checked;
        // this.is_cash!=event.checked;
        // this.is_cheque!=event.checked;
    }
    onSearchcall(prn) {
        console.log("prn", prn);
        if (prn != "5678910") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Failed To Fetch The Details"
            });
            this.onSearch = false;
        }
        else {
            this.onSearch = true;
        }
    }
    onPostofCash() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Transaction Posted Successfully"
        });
    }
    onPostcheque() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Transaction Posted Successfully"
        });
    }
    onValidateAccountNo(accNum) {
        if (!accNum) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Enter Account Number"
            });
        }
        else if (accNum == "123456789") {
            this.acc = true;
            this.validateCheque = false;
            this.chequeNO = "";
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Entered Account Number is not Valid"
            });
        }
    }
    CancelCash() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Transaction Canceled"
        });
    }
    cancelCheque() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Transaction Canceled"
        });
    }
    onvalidatecheque(chque) {
        if (!chque) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Please Enter Cheque Number"
            });
            this.acc = false;
        }
        else if (chque == "9876") {
            this.validateCheque = true;
            this.acc = false;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Entered cheque No is not Valid"
            });
        }
    }
    postCheque() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Transaction Posted Successfully"
        });
    }
};
CashPaymentsNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-payments-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-payments-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-payments-new.component.css */ "./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CashPaymentsNewComponent);



/***/ }),

/***/ "./src/app/views/maintenance/department/department-edit/department-edit.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/views/maintenance/department/department-edit/department-edit.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 20px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n \r\n  margin: 0;\r\n}\r\n#customers {\r\n  border-collapse: collapse;\r\n  width: 70%;\r\n  margin-left: 26%;\r\n  }\r\n#customers td, #customers th {\r\n  border: 1px solid #ddd;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: x-small;\r\n  \r\n  }\r\n#customers td mat-chip {\r\n  font-size: x-small;\r\n  }\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers th {\r\n  padding-top: 8px;\r\n  padding-bottom: px;\r\n  text-align: left;\r\n  background-color:rgb(97, 178, 216);\r\n  color: white;\r\n  }\r\n.pb-1{\r\n    font-size: 12px;\r\n  }\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color: black !important;\r\n  }\r\nmat-label\r\n  {\r\n    font-size: 12px;\r\n    color: black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvZGVwYXJ0bWVudC9kZXBhcnRtZW50LWVkaXQvZGVwYXJ0bWVudC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCO0FBQ0E7RUFDQSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCO0FBQ0E7RUFDQSxrQkFBa0I7RUFDbEI7QUFDQSw4QkFBOEIseUJBQXlCLENBQUM7QUFFeEQ7RUFDQSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDQTs7SUFFRSxlQUFlO0lBQ2YsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvZGVwYXJ0bWVudC9kZXBhcnRtZW50LWVkaXQvZGVwYXJ0bWVudC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuIFxyXG4gIG1hcmdpbjogMDtcclxufVxyXG4jY3VzdG9tZXJzIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICB9XHJcbiAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgXHJcbiAgfVxyXG4gICNjdXN0b21lcnMgdGQgbWF0LWNoaXAge1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICB9XHJcbiAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NywgMTc4LCAyMTYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnBiLTF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBtYXQtbGFiZWxcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/views/maintenance/department/department-edit/department-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/maintenance/department/department-edit/department-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DepartmentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEditComponent", function() { return DepartmentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _departmentDto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../departmentDto */ "./src/app/views/maintenance/department/departmentDto.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/date.service */ "./src/app/shared/services/date.service.ts");







let DepartmentEditComponent = class DepartmentEditComponent {
    constructor(maintenance, ref, dateservice, route, router) {
        this.maintenance = maintenance;
        this.ref = ref;
        this.dateservice = dateservice;
        this.route = route;
        this.router = router;
        this.departmentFrom = new _departmentDto__WEBPACK_IMPORTED_MODULE_4__["deaprtmentDto"]();
        this.currentUser = localStorage.getItem('userFromLogin');
        this.editFlag = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.departmentFrom.departId = params['deptId'];
            this.departmentFrom.fromSeries = params['fromSeries'];
            this.departmentFrom.toSeries = params['toSeries'];
            this.departmentFrom.departName = params['deptName'];
            this.departmentFrom.recordStatus = params['record'];
            this.departmentFrom.inputBy = params['inputBy'];
            this.departmentFrom.modNo = params['modifyNo'];
            this.departmentFrom.verifiedStatus = params['verifiedStatus'];
            this.departmentFrom.inputTime = params['inputTime'];
            this.departmentFrom.verifiedTime = params['verifiedTime'];
            this.departmentFrom.verifiedOnce = params['verifiedfirst'];
            this.departmentFrom.verifiedBy = params['verifiedBy'];
            this.departmentFrom.id = params['id'];
            this.commonAuditlog();
            this.ref.markForCheck();
            let d = this.dateservice.convertDate(this.departmentFrom.verifiedTime);
            console.log(d);
        });
    }
    //this is save
    onsaveTheEditOfDepartment() {
        this.departmentFrom.inputBy = this.currentUser;
        console.log("sending ", this.departmentFrom);
        this.maintenance.onsaveTheEditOfDepartment(this.departmentFrom).subscribe(departmentEditResp => {
            console.log(departmentEditResp);
            this.departmentFrom = departmentEditResp;
            this.ref.markForCheck();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: this.departmentFrom.respMsg
            });
            this.commonAuditlog();
            this.ref.markForCheck();
            this.editFlag = false;
        });
    }
    //authorizing
    onAuthDepartment() {
        console.log("on click of auth");
        this.departmentFrom.inputBy = this.currentUser;
        console.log("inside else");
        this.maintenance.onAuthDepartment(this.departmentFrom).subscribe(authdeptResp => {
            console.log(authdeptResp);
            this.departmentFrom = authdeptResp;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: this.departmentFrom.respMsg
            });
            this.commonAuditlog();
            this.ref.markForCheck();
        });
    }
    //close
    onCloseOfDepartment() {
        this.departmentFrom.inputBy = this.currentUser;
        this.maintenance.onCloseOfDepartment(this.departmentFrom).subscribe(closeResp => {
            console.log(closeResp);
            this.departmentFrom = closeResp;
            this.commonAuditlog();
            this.ref.markForCheck();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: this.departmentFrom.respMsg
            });
        });
    }
    //reopen
    onReopenOfDepartment() {
        this.departmentFrom.inputBy = this.currentUser;
        this.maintenance.onReopenOfDepartment(this.departmentFrom).subscribe(reopenResp => {
            console.log(reopenResp);
            this.departmentFrom = reopenResp;
            this.commonAuditlog();
            this.ref.markForCheck();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: this.departmentFrom.respMsg
            });
        });
    }
    //edit
    onEdit() {
        this.editFlag = true;
    }
    onDeleteOfDepartment() {
        this.departmentFrom.inputBy = this.currentUser;
        console.log("delete", this.departmentFrom);
        this.maintenance.onDeleteOfDepartment(this.departmentFrom).subscribe(deleteDepartmentResp => {
            console.log(deleteDepartmentResp);
            // this.departmentFrom=deleteDepartmentResp;
            this.ref.markForCheck();
            if (deleteDepartmentResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: "Failed To Delete The Record"
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.departmentFrom.respMsg
                });
            }
            this.commonAuditlog();
        });
    }
    commonAuditlog() {
        if (this.departmentFrom.recordStatus == 'O') {
            this.departmentFrom.recordStatus = 'OPEN';
        }
        if (this.departmentFrom.recordStatus == 'C') {
            this.departmentFrom.recordStatus = 'CLOSE';
        }
        if (this.departmentFrom.verifiedStatus == 'U') {
            this.departmentFrom.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.departmentFrom.verifiedStatus == 'A') {
            this.departmentFrom.verifiedStatus = 'AUTHORIZED';
        }
        if (this.departmentFrom.verifiedOnce == 'N') {
            this.departmentFrom.verifiedOnce = 'NO';
        }
        if (this.departmentFrom.verifiedOnce == 'Y') {
            this.departmentFrom.verifiedOnce = 'YES';
        }
    }
    //added by vidya for issue id 583
    onNew() {
        this.editFlag = true;
        this.onlySubmit = false;
        this.router.navigateByUrl('/maintenance/departmentNew');
    }
    numericOnly(event) {
        return !isNaN(Number(event.key)) && event.key !== ' ';
    }
};
DepartmentEditComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DepartmentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-edit/department-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department-edit.component.css */ "./src/app/views/maintenance/department/department-edit/department-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DepartmentEditComponent);



/***/ }),

/***/ "./src/app/views/maintenance/department/department-new/department-new.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/views/maintenance/department/department-new/department-new.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n   padding-left: 10px;\r\n    margin: 0;\r\n  }\r\n  #customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n  #customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n  #customers td mat-chip {\r\n    font-size: 10px;\r\n    }\r\n  #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n  #customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n  .pb-1{\r\n      font-size: 12px;\r\n    }\r\n  mat-form-field\r\n    {\r\n      padding-left: 10px;\r\n    }\r\n  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n      color: black !important;\r\n    }\r\n  mat-label\r\n    {\r\n      font-size: 12px;\r\n      color: black;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvZGVwYXJ0bWVudC9kZXBhcnRtZW50LW5ldy9kZXBhcnRtZW50LW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7R0FDaEIsa0JBQWtCO0lBQ2pCLFNBQVM7RUFDWDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7RUFDQTtJQUNBLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEI7RUFDQTtJQUNBLGVBQWU7SUFDZjtFQUNBLDhCQUE4Qix5QkFBeUIsQ0FBQztFQUV4RDtJQUNBLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1o7RUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDQTs7TUFFRSxrQkFBa0I7SUFDcEI7RUFDQTtNQUNFLHVCQUF1QjtJQUN6QjtFQUNBOztNQUVFLGVBQWU7TUFDZixZQUFZO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWludGVuYW5jZS9kZXBhcnRtZW50L2RlcGFydG1lbnQtbmV3L2RlcGFydG1lbnQtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAjY3VzdG9tZXJzIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdGQgbWF0LWNoaXAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgICBcclxuICAgICNjdXN0b21lcnMgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NywgMTc4LCAyMTYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnBiLTF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxkXHJcbiAgICB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBtYXQtbGFiZWxcclxuICAgIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/views/maintenance/department/department-new/department-new.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/maintenance/department/department-new/department-new.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DepartmentNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentNewComponent", function() { return DepartmentNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");
/* harmony import */ var _departmentDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../departmentDto */ "./src/app/views/maintenance/department/departmentDto.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let DepartmentNewComponent = class DepartmentNewComponent {
    constructor(maintenanceservice) {
        this.maintenanceservice = maintenanceservice;
        this.departmentFrom = new _departmentDto__WEBPACK_IMPORTED_MODULE_3__["deaprtmentDto"]();
        this.aftersubmit = false;
        this.space = false;
        this.currentUser = localStorage.getItem('userFromLogin');
    }
    ngOnInit() {
    }
    onSubmittingDepartment() {
        console.log("department from submission", this.departmentFrom);
        this.departmentFrom.inputBy = this.currentUser;
        this.maintenanceservice.onSubmittingDepartment(this.departmentFrom).subscribe(departmentResp => {
            console.log(departmentResp);
            if (departmentResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: "Failed To Save The Record"
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: departmentResp.respMsg
                });
                this.departmentFrom = departmentResp;
                this.disabledSubmit = true;
                this.aftersubmit = true;
                console.log(this.departmentFrom);
                this.commonAuditlog();
            }
        });
    }
    commonAuditlog() {
        if (this.departmentFrom.recordStatus == 'O') {
            this.departmentFrom.recordStatus = 'OPEN';
        }
        if (this.departmentFrom.verifiedStatus == 'U') {
            this.departmentFrom.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.departmentFrom.verifiedOnce == 'N') {
            this.departmentFrom.verifiedOnce = 'NO';
        }
    }
    fun(subAgentAccNo) {
        console.log(subAgentAccNo);
        console.log("enters inside fn");
        const result = subAgentAccNo.trim();
        console.log(result);
        if (result) {
            console.log("valid string");
            this.space = true;
            console.log(this.space);
        }
        else {
            console.log("invalid string");
            this.space = false;
            // this.submitted = false;
            console.log(this.space);
        }
    }
    numericOnly(event) {
        return !isNaN(Number(event.key)) && event.key !== ' ';
    }
};
DepartmentNewComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] }
];
DepartmentNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-new/department-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department-new.component.css */ "./src/app/views/maintenance/department/department-new/department-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"]])
], DepartmentNewComponent);



/***/ }),

/***/ "./src/app/views/maintenance/department/department-summary/department-summary.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/maintenance/department/department-summary/department-summary.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntable {\r\n  border-collapse: initial;\r\n  width: 100%;\r\n  text-align: center !important;\r\n}\r\n.mat-header-cell {\r\n  text-align: center;\r\n}\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n.mat-raised-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 20px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n}\r\ntable {\r\n  border-collapse: initial;\r\n  width:100%;\r\n  text-align: center !important;\r\n}\r\n.mat-header-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n.mat-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\ntr:nth-child(even) {\r\n  height: 25px !important;\r\n}\r\nth {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n\r\n}\r\nmat-paginator {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\nmd-pagination-wrapper {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvZGVwYXJ0bWVudC9kZXBhcnRtZW50LXN1bW1hcnkvZGVwYXJ0bWVudC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFHQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7QUFFekI7QUFHQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2UvZGVwYXJ0bWVudC9kZXBhcnRtZW50LXN1bW1hcnkvZGVwYXJ0bWVudC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdC1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuICBcclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50aCB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ciB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZC1wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/maintenance/department/department-summary/department-summary.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/maintenance/department/department-summary/department-summary.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DepartmentSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentSummaryComponent", function() { return DepartmentSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DepartmentSummaryComponent = class DepartmentSummaryComponent {
    constructor(maintenance, router) {
        this.maintenance = maintenance;
        this.router = router;
        this.displayedColumns = ['departId', 'fromSeries', 'toSeries', 'inputBy'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
    }
    ngOnInit() {
        this.gettingDepartmentDataInSummary();
    }
    gettingDepartmentDataInSummary() {
        this.maintenance.gettingDepartmentDataInSummary().subscribe(allDepartments => {
            console.log(allDepartments);
            this.summaryDetails = allDepartments;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.summaryDetails);
            this.dataSource.paginator = this.paginator.toArray()[0];
            ;
            console.log(this.summaryDetails);
        });
    }
    getDataFromSummary(row) {
        console.log("this is row", row);
        const navigationExtras = {
            queryParams: {
                modifyNo: row.modNo,
                deptId: row.departId,
                deptName: row.departName,
                fromSeries: row.fromSeries,
                toSeries: row.toSeries,
                record: row.recordStatus,
                verifiedStatus: row.verifiedStatus,
                inputBy: row.inputBy,
                inputTime: row.inputTime,
                verifiedTime: row.verifiedTime,
                verifiedfirst: row.verifiedOnce,
                verifiedBy: row.verifiedBy,
                id: row.id
            }
        };
        this.router.navigate(['maintenance/departmentEdit'], navigationExtras);
    }
};
DepartmentSummaryComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DepartmentSummaryComponent.prototype, "paginator", void 0);
DepartmentSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/department/department-summary/department-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department-summary.component.css */ "./src/app/views/maintenance/department/department-summary/department-summary.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DepartmentSummaryComponent);



/***/ }),

/***/ "./src/app/views/maintenance/department/departmentDto.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/maintenance/department/departmentDto.ts ***!
  \***************************************************************/
/*! exports provided: deaprtmentDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deaprtmentDto", function() { return deaprtmentDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class deaprtmentDto {
}


/***/ }),

/***/ "./src/app/views/maintenance/maintenance-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/maintenance/maintenance-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: maintenanceroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maintenanceroutes", function() { return maintenanceroutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _department_department_summary_department_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department/department-summary/department-summary.component */ "./src/app/views/maintenance/department/department-summary/department-summary.component.ts");
/* harmony import */ var _department_department_new_department_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department/department-new/department-new.component */ "./src/app/views/maintenance/department/department-new/department-new.component.ts");
/* harmony import */ var _department_department_edit_department_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department/department-edit/department-edit.component */ "./src/app/views/maintenance/department/department-edit/department-edit.component.ts");
/* harmony import */ var _sftp_sftp_summary_sftp_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sftp/sftp-summary/sftp-summary.component */ "./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.ts");
/* harmony import */ var _sftp_sftp_new_sftp_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sftp/sftp-new/sftp-new.component */ "./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.ts");
/* harmony import */ var _sftp_sftp_edit_sftp_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sftp/sftp-edit/sftp-edit.component */ "./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.ts");
/* harmony import */ var _cash_payments_new_cash_payments_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cash-payments-new/cash-payments-new.component */ "./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.ts");
/* harmony import */ var _cash_payment_authorization_cash_payment_authorization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cash-payment-authorization/cash-payment-authorization.component */ "./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.ts");
/* harmony import */ var _subAgentCode_sub_agent_code_sub_agent_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subAgentCode/sub-agent-code/sub-agent-code.component */ "./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.ts");
/* harmony import */ var _subAgentCode_sub_agent_code_new_sub_agent_code_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subAgentCode/sub-agent-code-new/sub-agent-code-new.component */ "./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.ts");
/* harmony import */ var _subAgentCode_sub_agent_code_edit_sub_agent_code_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component */ "./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.ts");












const maintenanceroutes = [
    {
        path: 'departmentSummary',
        component: _department_department_summary_department_summary_component__WEBPACK_IMPORTED_MODULE_1__["DepartmentSummaryComponent"]
    },
    {
        path: 'departmentNew',
        component: _department_department_new_department_new_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentNewComponent"]
    },
    {
        path: 'departmentEdit',
        component: _department_department_edit_department_edit_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentEditComponent"]
    },
    {
        path: 'sftpSummary',
        component: _sftp_sftp_summary_sftp_summary_component__WEBPACK_IMPORTED_MODULE_4__["SftpSummaryComponent"]
    },
    {
        path: 'sftpNew',
        component: _sftp_sftp_new_sftp_new_component__WEBPACK_IMPORTED_MODULE_5__["SftpNewComponent"]
    },
    {
        path: 'sftpEdit',
        component: _sftp_sftp_edit_sftp_edit_component__WEBPACK_IMPORTED_MODULE_6__["SftpEditComponent"]
    },
    {
        path: 'cashPayments',
        component: _cash_payments_new_cash_payments_new_component__WEBPACK_IMPORTED_MODULE_7__["CashPaymentsNewComponent"]
    },
    {
        path: 'cashPayAuth',
        component: _cash_payment_authorization_cash_payment_authorization_component__WEBPACK_IMPORTED_MODULE_8__["CashPaymentAuthorizationComponent"]
    },
    {
        path: 'subAgentSummary',
        component: _subAgentCode_sub_agent_code_sub_agent_code_component__WEBPACK_IMPORTED_MODULE_9__["SubAgentCodeComponent"]
    },
    {
        path: 'subAgnetNew',
        component: _subAgentCode_sub_agent_code_new_sub_agent_code_new_component__WEBPACK_IMPORTED_MODULE_10__["SubAgentCodeNewComponent"]
    },
    {
        path: 'subagentEdit',
        component: _subAgentCode_sub_agent_code_edit_sub_agent_code_edit_component__WEBPACK_IMPORTED_MODULE_11__["SubAgentCodeEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/maintenance/maintenance.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/maintenance/maintenance.module.ts ***!
  \*********************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _department_department_summary_department_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department/department-summary/department-summary.component */ "./src/app/views/maintenance/department/department-summary/department-summary.component.ts");
/* harmony import */ var _department_department_new_department_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department/department-new/department-new.component */ "./src/app/views/maintenance/department/department-new/department-new.component.ts");
/* harmony import */ var _department_department_edit_department_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department/department-edit/department-edit.component */ "./src/app/views/maintenance/department/department-edit/department-edit.component.ts");
/* harmony import */ var _sftp_sftp_summary_sftp_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sftp/sftp-summary/sftp-summary.component */ "./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.ts");
/* harmony import */ var _sftp_sftp_new_sftp_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sftp/sftp-new/sftp-new.component */ "./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.ts");
/* harmony import */ var _sftp_sftp_edit_sftp_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sftp/sftp-edit/sftp-edit.component */ "./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.ts");
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance-routing.module */ "./src/app/views/maintenance/maintenance-routing.module.ts");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cash_payments_new_cash_payments_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cash-payments-new/cash-payments-new.component */ "./src/app/views/maintenance/cash-payments-new/cash-payments-new.component.ts");
/* harmony import */ var _cash_payment_authorization_cash_payment_authorization_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cash-payment-authorization/cash-payment-authorization.component */ "./src/app/views/maintenance/cash-payment-authorization/cash-payment-authorization.component.ts");
/* harmony import */ var _subAgentCode_sub_agent_code_sub_agent_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subAgentCode/sub-agent-code/sub-agent-code.component */ "./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.ts");
/* harmony import */ var _subAgentCode_sub_agent_code_new_sub_agent_code_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subAgentCode/sub-agent-code-new/sub-agent-code-new.component */ "./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.ts");
/* harmony import */ var _subAgentCode_sub_agent_code_edit_sub_agent_code_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component */ "./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.ts");



















let MaintenanceModule = class MaintenanceModule {
};
MaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_department_department_new_department_new_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentNewComponent"], _department_department_edit_department_edit_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentEditComponent"], _department_department_summary_department_summary_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentSummaryComponent"], _sftp_sftp_edit_sftp_edit_component__WEBPACK_IMPORTED_MODULE_8__["SftpEditComponent"], _sftp_sftp_new_sftp_new_component__WEBPACK_IMPORTED_MODULE_7__["SftpNewComponent"], _sftp_sftp_summary_sftp_summary_component__WEBPACK_IMPORTED_MODULE_6__["SftpSummaryComponent"], _cash_payments_new_cash_payments_new_component__WEBPACK_IMPORTED_MODULE_14__["CashPaymentsNewComponent"], _cash_payment_authorization_cash_payment_authorization_component__WEBPACK_IMPORTED_MODULE_15__["CashPaymentAuthorizationComponent"], _subAgentCode_sub_agent_code_sub_agent_code_component__WEBPACK_IMPORTED_MODULE_16__["SubAgentCodeComponent"], _subAgentCode_sub_agent_code_new_sub_agent_code_new_component__WEBPACK_IMPORTED_MODULE_17__["SubAgentCodeNewComponent"], _subAgentCode_sub_agent_code_edit_sub_agent_code_edit_component__WEBPACK_IMPORTED_MODULE_18__["SubAgentCodeEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forChild(_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_9__["maintenanceroutes"])
        ]
    })
], MaintenanceModule);



/***/ }),

/***/ "./src/app/views/maintenance/maintenance.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/maintenance/maintenance.service.ts ***!
  \**********************************************************/
/*! exports provided: MaintenanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceService", function() { return MaintenanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let MaintenanceService = class MaintenanceService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].MEDIAN_URL;
    }
    //save in new screen
    onSubmittingDepartment(obj) {
        console.log("service ", obj);
        return this.http.post(`${this.API_URL}/departBatchMaint/createBatch`, obj);
    }
    //getting data in summary
    gettingDepartmentDataInSummary() {
        return this.http.get(`${this.API_URL}/departBatchMaint/getAllDeparts`);
    }
    //save in edit Department
    onsaveTheEditOfDepartment(obj) {
        return this.http.put(`${this.API_URL}/departBatchMaint/modify`, obj);
    }
    //department --->auth
    onAuthDepartment(obj) {
        return this.http.post(`${this.API_URL}/departBatchMaint/verify`, obj);
    } //department --->close
    onCloseOfDepartment(obj) {
        return this.http.post(`${this.API_URL}/departBatchMaint/close`, obj);
    } //deaprtment --->open
    onReopenOfDepartment(obj) {
        return this.http.post(`${this.API_URL}/departBatchMaint/reopen`, obj);
    }
    // /dept ---delete
    onDeleteOfDepartment(obj) {
        return this.http.post(`${this.API_URL}/departBatchMaint/delete`, obj);
    }
    // ==============SFTP Maintenance=========
    //getting ExtSysName
    gettingExternalSystemName() {
        return this.http.get(``);
    }
    //getting ProcessName
    gettingProcessName() {
        return this.http.get(``);
    }
    //save-->new SftpMaintenance
    onSaveOfSftpMaintenance(obj) {
        return this.http.post(``, obj);
    }
    //sftp-->summary
    gettingSftpSummary() {
        return this.http.get(``);
    }
    //edit--save
    saveOfsftpMaintenaceEdit(obj) {
        return this.http.post(``, obj);
    }
    //auth
    sftpAuth(obj) {
        return this.http.post(``, obj);
    }
    //close
    sftpClose(obj) {
        return this.http.post(``, obj);
    }
    //open
    sftpReopen(obj) {
        return this.http.post(``, obj);
    }
    //delete
    sftpDelete(obj) {
        return this.http.post(``, obj);
    }
    // ==================Sub Agent Code Maintenance==========
    onsaveOfsubAgentCode(obj) {
        return this.http.post(`${this.API_URL}/subAgent/createBatch`, obj);
    }
    gettingSubAgentCode() {
        return this.http.get(`${this.API_URL}/subAgent/getAllSubAgentAccs`);
    }
    onsaveTheEditOfSubAgentCode(obj) {
        return this.http.put(`${this.API_URL}/subAgent/modify`, obj);
    }
    onAuthsubagentcode(obj) {
        return this.http.post(`${this.API_URL}/subAgent/verify`, obj);
    }
    onCloseOfSubAgentcode(obj) {
        return this.http.post(`${this.API_URL}/subAgent/close`, obj);
    }
    onReopenOfsubagentCode(obj) {
        return this.http.post(`${this.API_URL}/subAgent/reopen`, obj);
    }
    onDeleteOfsubAgentcode(obj) {
        return this.http.post(`${this.API_URL}/subAgent/delete`, obj);
    }
};
MaintenanceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MaintenanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MaintenanceService);



/***/ }),

/***/ "./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n   padding-left: 10px;\r\n    margin: 0;\r\n  }\r\n  mat-form-field\r\n  \r\n  {\r\n    padding-left: 10px;\r\n  }\r\n  #customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n  #customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n  #customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n  #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n  #customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n  .pb-1{\r\n      font-size: 12px;\r\n    }\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc2Z0cC9zZnRwLWVkaXQvc2Z0cC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtHQUNoQixrQkFBa0I7SUFDakIsU0FBUztFQUNYO0VBQ0E7OztJQUdFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7RUFDQTtJQUNBLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEI7RUFDQTtJQUNBLGtCQUFrQjtJQUNsQjtFQUNBLDhCQUE4Qix5QkFBeUIsQ0FBQztFQUV4RDtJQUNBLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1o7RUFDQTtNQUNFLGVBQWU7SUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWludGVuYW5jZS9zZnRwL3NmdHAtZWRpdC9zZnRwLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxkXHJcbiAgXHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAjY3VzdG9tZXJzIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdGQgbWF0LWNoaXAge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgICBcclxuICAgICNjdXN0b21lcnMgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NywgMTc4LCAyMTYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnBiLTF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIl19 */");

/***/ }),

/***/ "./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: SftpEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SftpEditComponent", function() { return SftpEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");



let SftpEditComponent = class SftpEditComponent {
    constructor(maintenance) {
        this.maintenance = maintenance;
        this.editFlag = false;
    }
    ngOnInit() {
    }
    //save
    saveOfsftpMaintenaceEdit() {
        console.log("this save in edit");
        // this.maintenance.saveOfsftpMaintenaceEdit().subscribe(saveResp=>
        //   {
        //     console.log(saveResp);
        //   })
    }
    //auth
    sftpAuth() {
        console.log("this auth in edit");
        // this.maintenance.sftpAuth().subscribe(sftpAuthResp=>
        //   {
        //     console.log(sftpAuthResp);
        //   })
    }
    //close
    sftpClose() {
        console.log("this close in edit");
        // this.maintenance.sftpClose().subscribe(sftpClose=>
        //   {
        //     console.log(sftpClose)
        //   })
    }
    //open
    sftpReopen() {
        console.log("this open in edit");
        // this.maintenance.sftpReopen.subscribe(openResp=>{
        //   console.log(openResp);
        // })
    }
    sftpDelete() {
        console.log("this delete in edit");
        // this.maintenance.sftpDelete().subscribe(sftpDelete=>{
        //     console.log(sftpDelete);
        //   })
    }
    sftpEdit() {
        this.editFlag = true;
    }
};
SftpEditComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] }
];
SftpEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sftp-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sftp-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sftp-edit.component.css */ "./src/app/views/maintenance/sftp/sftp-edit/sftp-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"]])
], SftpEditComponent);



/***/ }),

/***/ "./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .mat-raised-button {\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n   \r\n    margin: 0;\r\n  } */\r\n  #customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n  #customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n  #customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n  #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n  #customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n  .pb-1{\r\n      font-size: 12px;\r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc2Z0cC9zZnRwLW5ldy9zZnRwLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7S0FTSztFQUNIO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7RUFDQTtJQUNBLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEI7RUFDQTtJQUNBLGtCQUFrQjtJQUNsQjtFQUNBLDhCQUE4Qix5QkFBeUIsQ0FBQztFQUV4RDtJQUNBLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1o7RUFDQTtNQUNFLGVBQWU7SUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWludGVuYW5jZS9zZnRwL3NmdHAtbmV3L3NmdHAtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfSAqL1xyXG4gICNjdXN0b21lcnMge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYlO1xyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0ZCBtYXQtY2hpcCB7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICAgIFxyXG4gICAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAucGItMXtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgIl19 */");

/***/ }),

/***/ "./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.ts ***!
  \***********************************************************************/
/*! exports provided: SftpNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SftpNewComponent", function() { return SftpNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");



let SftpNewComponent = class SftpNewComponent {
    constructor(maintenanceService) {
        this.maintenanceService = maintenanceService;
    }
    ngOnInit() {
    }
    //getting External system name
    gettingExternalSystemName() {
        console.log("this is getting External ");
        this.maintenanceService.gettingExternalSystemName().subscribe(listOfExtsys => {
            console.log(listOfExtsys);
            this.extSysName = listOfExtsys;
        });
    }
    //getting Process Name
    gettingProcessName() {
        console.log("this is getting Process Name ");
        this.maintenanceService.gettingProcessName().subscribe(listOfExtsys => {
            console.log(listOfExtsys);
            this.extSysName = listOfExtsys;
        });
    }
    onSaveOfSftpMaintenance() {
        console.log("save sftp maintenenac");
        // this.maintenanceService.onSaveOfSftpMaintenance(obj).subscribe(saveResp=>{
        //   console.log(saveResp);
        // })
    }
};
SftpNewComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] }
];
SftpNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sftp-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sftp-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sftp-new.component.css */ "./src/app/views/maintenance/sftp/sftp-new/sftp-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"]])
], SftpNewComponent);



/***/ }),

/***/ "./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntable {\r\n    border-collapse: initial;\r\n    width: 100%;\r\n    text-align: center !important;\r\n  }\r\n  .mat-header-cell {\r\n    text-align: center;\r\n  }\r\n  .mat-cell {\r\n    text-align: center;\r\n  }\r\n  .mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n    padding: 0 0;\r\n    margin: 0;\r\n  }\r\n  table {\r\n    border-collapse: initial;\r\n    width:100%;\r\n    text-align: center !important;\r\n  }\r\n  .mat-header-cell {\r\n    text-align: center;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  .mat-cell {\r\n    text-align: center;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  tr:nth-child(even) {\r\n    height: 25px !important;\r\n  }\r\n  th {\r\n    font-weight: small;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  tr {\r\n    font-weight: small;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  mat-paginator {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n  md-pagination-wrapper {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc2Z0cC9zZnRwLXN1bW1hcnkvc2Z0cC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixTQUFTO0VBQ1g7RUFHQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsNkJBQTZCO0VBQy9CO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCOztFQUV6QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7RUFFekI7RUFHQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7RUFFekI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7O0VBRXpCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCO0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc2Z0cC9zZnRwLXN1bW1hcnkvc2Z0cC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAgIFxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBzbWFsbDtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIH1cclxuICB0ciB7XHJcbiAgICBmb250LXdlaWdodDogc21hbGw7XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgbWF0LXBhZ2luYXRvciB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG1kLXBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SftpSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SftpSummaryComponent", function() { return SftpSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");



let SftpSummaryComponent = class SftpSummaryComponent {
    constructor(maintenanceservice) {
        this.maintenanceservice = maintenanceservice;
        this.displayedColumns = ['departmentId', 'from', 'to', 'inputBy'];
    }
    ngOnInit() {
    }
    gettingSftpSummary() {
        this.maintenanceservice.gettingSftpSummary().subscribe(allsftp => {
            console.log(allsftp);
            // this.summaryDetails=allDepartments
            // this.dataSource = new MatTableDataSource<deaprtmentDto>(this.summaryDetails);
            // this.dataSource.paginator = this.paginator.toArray()[0];;
            // console.log(this.summaryDetails);
        });
    }
};
SftpSummaryComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] }
];
SftpSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sftp-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sftp-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sftp-summary.component.css */ "./src/app/views/maintenance/sftp/sftp-summary/sftp-summary.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"]])
], SftpSummaryComponent);



/***/ }),

/***/ "./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field \r\n{\r\n    padding-left: 20px;\r\n    font-size: 10px;\r\n}\r\n.mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n   \r\n    margin: 0;\r\n  }\r\n#customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n#customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n#customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc3ViQWdlbnRDb2RlL3N1Yi1hZ2VudC1jb2RlLWVkaXQvc3ViLWFnZW50LWNvZGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixTQUFTO0VBQ1g7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCO0FBQ0E7SUFDQSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCO0FBQ0E7SUFDQSxrQkFBa0I7SUFDbEI7QUFDQSw4QkFBOEIseUJBQXlCLENBQUM7QUFFeEQ7SUFDQSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc3ViQWdlbnRDb2RlL3N1Yi1hZ2VudC1jb2RlLWVkaXQvc3ViLWFnZW50LWNvZGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQgXHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICNjdXN0b21lcnMge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYlO1xyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0ZCBtYXQtY2hpcCB7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICAgIFxyXG4gICAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAiXX0= */");

/***/ }),

/***/ "./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SubAgentCodeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAgentCodeEditComponent", function() { return SubAgentCodeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _subAgentcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subAgentcode */ "./src/app/views/maintenance/subAgentCode/subAgentcode.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let SubAgentCodeEditComponent = class SubAgentCodeEditComponent {
    constructor(route, ref, router, maintenance) {
        this.route = route;
        this.ref = ref;
        this.router = router;
        this.maintenance = maintenance;
        this.subAgentcode = new _subAgentcode__WEBPACK_IMPORTED_MODULE_2__["SubAgentDto"]();
        this.currentUser = localStorage.getItem('userFromLogin');
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.subAgentcode.subAgentAccNo = params['subAgentAccNo'];
            this.subAgentcode.subAgentName = params['subAgentName'];
            this.subAgentcode.branch = params['branch'];
            this.subAgentcode.fccAccNo = params['fccAccNo'];
            this.subAgentcode.recordStatus = params['recordStatus'];
            this.subAgentcode.wuAgShortCode = params['wuAgShortCode'];
            this.subAgentcode.gl = params['gl'];
            this.subAgentcode.inputBy = params['inputBy'];
            this.subAgentcode.modNo = params['modNo'];
            this.subAgentcode.verifiedStatus = params['verifiedStatus'];
            this.subAgentcode.inputTime = params['inputTime'];
            this.subAgentcode.verifiedTime = params['verifiedTime'];
            this.subAgentcode.verifiedOnce = params['verifiedOnce'];
            this.subAgentcode.verifiedBy = params['verifiedBy'];
            this.subAgentcode.id = params['id'];
            this.commonAuditlog();
            this.ref.markForCheck();
        });
        this.commonAuditlog();
    }
    //this is save
    onsaveTheEditOfSubAgentCode() {
        this.subAgentcode.inputBy = this.currentUser;
        console.log("sending ", this.subAgentcode);
        this.maintenance.onsaveTheEditOfSubAgentCode(this.subAgentcode).subscribe(subAgentEditResp => {
            console.log(subAgentEditResp);
            if (subAgentEditResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: "Failed To Save The Record"
                });
            }
            else {
                this.subAgentcode = subAgentEditResp;
                this.ref.markForCheck();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.subAgentcode.respMsg
                });
                this.commonAuditlog();
                this.ref.markForCheck();
                this.editFlag = false;
            }
        });
    }
    //authorizing
    onAuthsubagentcode() {
        console.log("on click of auth");
        this.subAgentcode.inputBy = this.currentUser;
        console.log("inside else");
        this.maintenance.onAuthsubagentcode(this.subAgentcode).subscribe(authsubAgentResp => {
            console.log(authsubAgentResp);
            if (authsubAgentResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: "Failed To Authorize The Reocrd"
                });
            }
            else {
                this.subAgentcode = authsubAgentResp;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.subAgentcode.respMsg
                });
                this.commonAuditlog();
                this.ref.markForCheck();
            }
        });
    }
    //close
    onCloseOfsubAgentCode() {
        this.subAgentcode.inputBy = this.currentUser;
        this.maintenance.onCloseOfSubAgentcode(this.subAgentcode).subscribe(closeResp => {
            console.log(closeResp);
            if (closeResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: "Failed To Close The Reocrd"
                });
            }
            else {
                this.subAgentcode = closeResp;
                this.commonAuditlog();
                this.ref.markForCheck();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.subAgentcode.respMsg
                });
            }
        });
    }
    //reopen
    onReopenOfsubagentCode() {
        this.subAgentcode.inputBy = this.currentUser;
        this.maintenance.onReopenOfsubagentCode(this.subAgentcode).subscribe(reopenResp => {
            console.log(reopenResp);
            if (reopenResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: "Failed To Reopen The Record"
                });
            }
            else {
                this.subAgentcode = reopenResp;
                this.commonAuditlog();
                this.ref.markForCheck();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.subAgentcode.respMsg
                });
            }
        });
    }
    //edit
    onEdit() {
        this.editFlag = true;
    }
    onDeleteOfsubAgentcode() {
        this.subAgentcode.inputBy = this.currentUser;
        console.log("delete", this.subAgentcode);
        this.maintenance.onDeleteOfsubAgentcode(this.subAgentcode).subscribe(deletesubAgentResp => {
            console.log(deletesubAgentResp);
            if (deletesubAgentResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: "Failed To Delete The Record"
                });
            }
            this.subAgentcode = deletesubAgentResp;
            this.ref.markForCheck();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: this.subAgentcode.respMsg
            });
            this.commonAuditlog();
        });
    }
    commonAuditlog() {
        if (this.subAgentcode.recordStatus == 'O') {
            this.subAgentcode.recordStatus = 'OPEN';
        }
        if (this.subAgentcode.recordStatus == 'C') {
            this.subAgentcode.recordStatus = 'CLOSE';
        }
        if (this.subAgentcode.verifiedStatus == 'U') {
            this.subAgentcode.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.subAgentcode.verifiedStatus == 'A') {
            this.subAgentcode.verifiedStatus = 'AUTHORIZED';
        }
        if (this.subAgentcode.verifiedOnce == 'N') {
            this.subAgentcode.verifiedOnce = 'NO';
        }
        if (this.subAgentcode.verifiedOnce == 'Y') {
            this.subAgentcode.verifiedOnce = 'YES';
        }
    }
    onNew() {
        this.editFlag = true;
        this.onlySubmit = false;
        this.router.navigateByUrl('/maintenance/subAgnetNew');
    }
};
SubAgentCodeEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"] }
];
SubAgentCodeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-agent-code-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-agent-code-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-agent-code-edit.component.css */ "./src/app/views/maintenance/subAgentCode/sub-agent-code-edit/sub-agent-code-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"]])
], SubAgentCodeEditComponent);



/***/ }),

/***/ "./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field \r\n{\r\n    padding-left: 20px;\r\n    font-size: 10px;\r\n}\r\n.mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n   \r\n    margin: 0;\r\n  }\r\n#customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n#customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n#customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n      color: black !important;\r\n    }\r\nmat-label\r\n    {\r\n      font-size: 12px;\r\n      color: black;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc3ViQWdlbnRDb2RlL3N1Yi1hZ2VudC1jb2RlLW5ldy9zdWItYWdlbnQtY29kZS1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsU0FBUztFQUNYO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjtBQUNBO0lBQ0Esc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCOztJQUVsQjtBQUNBO0lBQ0Esa0JBQWtCO0lBQ2xCO0FBQ0EsOEJBQThCLHlCQUF5QixDQUFDO0FBRXhEO0lBQ0EsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWjtBQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0FBQ0E7O01BRUUsZUFBZTtNQUNmLFlBQVk7SUFDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW50ZW5hbmNlL3N1YkFnZW50Q29kZS9zdWItYWdlbnQtY29kZS1uZXcvc3ViLWFnZW50LWNvZGUtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCBcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgI2N1c3RvbWVycyB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNiU7XHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gICAgXHJcbiAgICAjY3VzdG9tZXJzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTcsIDE3OCwgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBtYXQtbGFiZWxcclxuICAgIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SubAgentCodeNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAgentCodeNewComponent", function() { return SubAgentCodeNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _subAgentcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subAgentcode */ "./src/app/views/maintenance/subAgentCode/subAgentcode.ts");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let SubAgentCodeNewComponent = class SubAgentCodeNewComponent {
    constructor(maintservice) {
        this.maintservice = maintservice;
        this.subAgentcode = new _subAgentcode__WEBPACK_IMPORTED_MODULE_2__["SubAgentDto"]();
        this.currentUser = localStorage.getItem('userFromLogin');
        this.space = false;
    }
    ngOnInit() {
    }
    onSaveOfSubAgentcode() {
        this.subAgentcode.inputBy = this.currentUser;
        console.log("onSaveOfSubAgentcode", this.subAgentcode);
        this.maintservice.onsaveOfsubAgentCode(this.subAgentcode).subscribe(saveResp => {
            console.log(saveResp);
            if (saveResp == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: "Failed To Save The Record"
                });
            }
            this.subAgentcode = saveResp;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: this.subAgentcode.respMsg
            });
            this.disablesubmit = true;
            this.commonAuditlog();
        });
    }
    commonAuditlog() {
        if (this.subAgentcode.recordStatus == 'O') {
            this.subAgentcode.recordStatus = 'OPEN';
        }
        if (this.subAgentcode.recordStatus == 'C') {
            this.subAgentcode.recordStatus = 'CLOSE';
        }
        if (this.subAgentcode.verifiedStatus == 'U') {
            this.subAgentcode.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.subAgentcode.verifiedStatus == 'A') {
            this.subAgentcode.verifiedStatus = 'AUTHORIZED';
        }
        if (this.subAgentcode.verifiedOnce == 'N') {
            this.subAgentcode.verifiedOnce = 'NO';
        }
        if (this.subAgentcode.verifiedOnce == 'Y') {
            this.subAgentcode.verifiedOnce = 'YES';
        }
    }
    fun(departId) {
        console.log(departId);
        console.log("enters inside fn");
        const result = departId.trim();
        console.log(result);
        if (result) {
            console.log("valid string");
            this.space = true;
            console.log(this.space);
        }
        else {
            console.log("invalid string");
            this.space = false;
            // this.submitted = false;
            console.log(this.space);
        }
        //  console.log("enters inside fn")
    }
};
SubAgentCodeNewComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"] }
];
SubAgentCodeNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-agent-code-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-agent-code-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-agent-code-new.component.css */ "./src/app/views/maintenance/subAgentCode/sub-agent-code-new/sub-agent-code-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"]])
], SubAgentCodeNewComponent);



/***/ }),

/***/ "./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntable {\r\n    border-collapse: initial;\r\n    width: 100%;\r\n    text-align: center !important;\r\n  }\r\n  .mat-header-cell {\r\n    text-align: center;\r\n  }\r\n  .mat-cell {\r\n    text-align: center;\r\n  }\r\n  .mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n    padding: 0 0;\r\n    margin: 0;\r\n  }\r\n  table {\r\n    border-collapse: initial;\r\n    width:100%;\r\n    text-align: center !important;\r\n  }\r\n  .mat-header-cell {\r\n    text-align: center;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  .mat-cell {\r\n    text-align: center;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  tr:nth-child(even) {\r\n    height: 25px !important;\r\n  }\r\n  th {\r\n    font-weight: small;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  tr {\r\n    font-weight: small;\r\n    height: 25px !important;\r\n  \r\n  }\r\n  mat-paginator {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n  md-pagination-wrapper {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc3ViQWdlbnRDb2RlL3N1Yi1hZ2VudC1jb2RlL3N1Yi1hZ2VudC1jb2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixTQUFTO0VBQ1g7RUFHQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsNkJBQTZCO0VBQy9CO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCOztFQUV6QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7RUFFekI7RUFHQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7RUFFekI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7O0VBRXpCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCO0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbnRlbmFuY2Uvc3ViQWdlbnRDb2RlL3N1Yi1hZ2VudC1jb2RlL3N1Yi1hZ2VudC1jb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAgIFxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBzbWFsbDtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIH1cclxuICB0ciB7XHJcbiAgICBmb250LXdlaWdodDogc21hbGw7XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgbWF0LXBhZ2luYXRvciB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG1kLXBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SubAgentCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAgentCodeComponent", function() { return SubAgentCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../maintenance.service */ "./src/app/views/maintenance/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SubAgentCodeComponent = class SubAgentCodeComponent {
    constructor(maintenance, router) {
        this.maintenance = maintenance;
        this.router = router;
        this.displayedColumns = ['subAgentAccNo', 'subAgentName', 'branch', 'inputBy'];
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
    }
    ngOnInit() {
        this.gettingSubAgentCodeSummary();
    }
    gettingSubAgentCodeSummary() {
        this.maintenance.gettingSubAgentCode().subscribe(allsubAgentdata => {
            console.log(allsubAgentdata);
            this.summaryDetails = allsubAgentdata;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.summaryDetails);
            this.dataSource.paginator = this.paginator.toArray()[0];
            ;
            console.log(this.summaryDetails);
        });
    }
    getDataFromSummary(row) {
        console.log("this is row", row);
        const navigationExtras = {
            queryParams: {
                subAgentAccNo: row.subAgentAccNo,
                subAgentName: row.subAgentName,
                branch: row.branch,
                modNo: row.modNo,
                fccAccNo: row.fccAccNo,
                wuAgShortCode: row.wuAgShortCode,
                gl: row.gl,
                recordStatus: row.recordStatus,
                verifiedStatus: row.verifiedStatus,
                inputBy: row.inputBy,
                inputTime: row.inputTime,
                verifiedTime: row.verifiedTime,
                verifiedOnce: row.verifiedOnce,
                verifiedBy: row.verifiedBy,
                respMsg: row.respMsg,
                id: row.id
            }
        };
        this.router.navigate(['maintenance/subagentEdit'], navigationExtras);
    }
};
SubAgentCodeComponent.ctorParameters = () => [
    { type: _maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubAgentCodeComponent.prototype, "paginator", void 0);
SubAgentCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-agent-code',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-agent-code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-agent-code.component.css */ "./src/app/views/maintenance/subAgentCode/sub-agent-code/sub-agent-code.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SubAgentCodeComponent);



/***/ }),

/***/ "./src/app/views/maintenance/subAgentCode/subAgentcode.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/maintenance/subAgentCode/subAgentcode.ts ***!
  \****************************************************************/
/*! exports provided: SubAgentDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAgentDto", function() { return SubAgentDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SubAgentDto {
}


/***/ })

}]);
//# sourceMappingURL=views-maintenance-maintenance-module-es2015.js.map