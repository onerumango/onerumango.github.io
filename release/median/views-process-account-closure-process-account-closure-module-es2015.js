(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-process-account-closure-process-account-closure-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Process The Account Closure</span>\r\n</mat-toolbar>\r\n<mat-card>\r\n\r\n  <div class=\"mat-elevation-z8 \">\r\n      <table mat-table [dataSource]=\"process\">\r\n\r\n        <ng-container matColumnDef=\"fileName\">\r\n          <th mat-header-cell *matHeaderCellDef> FileName </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.fileName}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"closureType\">\r\n          <th mat-header-cell *matHeaderCellDef> Closure Type </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.closureType}}</td>\r\n        </ng-container> \r\n\r\n        <ng-container matColumnDef=\"accountType\">\r\n        <th mat-header-cell *matHeaderCellDef> Account Type </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.accountType}}</td>\r\n        </ng-container>\r\n    \r\n      <!-- <ng-container matColumnDef=\"accountNumber\">\r\n      <th mat-header-cell *matHeaderCellDef> Account Number </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.accountNumber}}</td>\r\n      </ng-container> -->\r\n \r\n      <ng-container matColumnDef=\"inputTime\">\r\n        <th mat-header-cell *matHeaderCellDef>Upload Date</th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.inputTime | date: 'MM/dd/yyyy, h:mm a'}}</td>\r\n        </ng-container>\r\n\r\n \r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef>Status</th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.status}}</td>\r\n          </ng-container>\r\n  \r\n <ng-container matColumnDef=\"approve\">\r\n  \r\n  <th mat-header-cell *matHeaderCellDef>Approve </th>\r\n  <td mat-cell *matCellDef=\"let row;let i=index\"> \r\n      \r\n      \r\n      \r\n <button mat-raised-button color=\"primary\" (click)=\"approveReason(i)\" [disabled]=\"row.disabled||row.rejectButtonDisabled|| flag[i] || flag1[i]\">\r\n  Approve \r\n  <mat-progress-bar mode=\"query\" color=\"warn\" *ngIf=\"row.showprogressbar\" ></mat-progress-bar>&nbsp;\r\n  \r\n  </button>\r\n</td>\r\n</ng-container>\r\n<ng-container matColumnDef=\"reject\">\r\n  <th mat-header-cell *matHeaderCellDef> Reject </th>\r\n  <td mat-cell *matCellDef=\"let row;let i=index\"> \r\n    <!-- <button mat-raised-button color=\"warn\" (click)=\"onclickOfReject(i)\"  [disabled]=\"row.rejectButtonDisabled ||row.disabled|| flag2[i]||flag3[i]\" >\r\n     Reject\r\n     \r\n     <mat-progress-bar mode=\"query\" color=\"warn\" *ngIf=\"row.enableprogressbar\" ></mat-progress-bar>&nbsp;\r\n      </button> -->\r\n      <button mat-raised-button color=\"warn\" (click)=\"RejectReason(i)\"  [disabled]=\"row.rejectButtonDisabled ||row.disabled|| flag2[i]||flag3[i]\">\r\n        Reject\r\n        \r\n        <mat-progress-bar mode=\"query\" color=\"warn\" *ngIf=\"row.enableprogressbar\" ></mat-progress-bar>&nbsp;\r\n         </button>\r\n      <!-- <mat-form-field *ngIf=\"reasonBoolean[i]\">\r\n        <mat-label>Reject Reason</mat-label>\r\n        <textarea matInput cdkTextareaAutosize #rejectReason name=\"rejectReason\"  (keyup)=\"try(rejectReason.value)\"\r\n          ></textarea>\r\n\r\n      </mat-form-field> -->\r\n      <!-- <button mat-raised-button color=\"warn\" (click)=\"Reject(i)\"  [disabled]=\"row.rejectButtonDisabled ||row.disabled|| flag2[i]||flag3[i]\" *ngIf=\"reasonBoolean[i]\" style=\"width: 80px;\r\n      height: 25px;line-height: 20px;min-height: 20px;font-size: 11px;vertical-align:0px;\">\r\n        Reject\r\n        \r\n        <mat-progress-bar mode=\"query\" color=\"warn\" *ngIf=\"row.enableprogressbar\" ></mat-progress-bar>&nbsp;\r\n         </button> -->\r\n  </td>\r\n\r\n\r\n  </ng-container>\r\n  \r\n  \r\n<ng-container matColumnDef=\"viewReport\">\r\n  <th mat-header-cell *matHeaderCellDef> ViewReport </th>\r\n  <td mat-cell *matCellDef=\"let row; let i=index\"> \r\n      <!-- [disabled]=\"!row.showviewBtn\" -->\r\n     <button mat-raised-button color=\"primary\"  (click)=\"onClickofViewReport(row.accountType,row.fileName,row.closureType,i)\"  >\r\n    View Report\r\n    </button></td>\r\n</ng-container>\r\n\r\n<ng-container matColumnDef=\"checkerId\">\r\n  <th mat-header-cell *matHeaderCellDef>Checker Id</th>\r\n  <td mat-cell *matCellDef=\"let row\"> {{row.checkerId}}</td>\r\n  </ng-container>\r\n\r\n\r\n    \r\n    \r\n  \r\n    \r\n        <tr mat-header-row *matHeaderRowDef=\"toProcessTheClosureData\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: toProcessTheClosureData\"></tr>\r\n      </table>\r\n    \r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n    <table>\r\n        \r\n    </table>\r\n</mat-card>\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./src/app/shared/models/process-account-closure-resp-dto.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/models/process-account-closure-resp-dto.ts ***!
  \*******************************************************************/
/*! exports provided: ProcessAccountClosureRespDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAccountClosureRespDTO", function() { return ProcessAccountClosureRespDTO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.css ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    border-collapse: initial;\r\n    width:100%;\r\n    text-align: center !important;\r\n  }\r\n  \r\n  .mat-header-cell {\r\n    text-align: center;\r\n    height: 22px !important;\r\n  \r\n  }\r\n  \r\n  .mat-cell {\r\n    text-align: center;\r\n    height: 22px !important;\r\n  \r\n  }\r\n  \r\n  tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n    height: 22px !important;\r\n    font-weight: lighter;\r\n  \r\n  }\r\n  \r\n  th {\r\n    background-color: #1b9ab9;\r\n    color: rgb(244, 252, 246);\r\n    font-weight: lighter;\r\n    height: 22px !important;\r\n  }\r\n  \r\n  tr {\r\n    background-color: #b8def0;\r\n    color: rgb(34, 29, 29);\r\n    font-weight: lighter;\r\n    height: 22px !important;\r\n  }\r\n  \r\n  mat-paginator {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n  \r\n  md-pagination-wrapper {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n  \r\n  md-row:nth-child(even) {\r\n    background-color: #edf1f5;\r\n  }\r\n  \r\n  md-row:nth-child(odd) {\r\n    background-color: #fdfdfb;\r\n  }\r\n  \r\n  p {\r\n    padding-left: 510px;\r\n  }\r\n  \r\n  .mat-raised-button {\r\n    width: 80px;\r\n    height: 25px;\r\n    line-height: 20px;\r\n    min-height: 20px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvY2Vzcy1hY2NvdW50LWNsb3N1cmUvYXV0aG9yaXplLWFjY291bnQtY2xvc3VyZS9hdXRob3JpemUtYWNjb3VudC1jbG9zdXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7O0VBRXpCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7RUFFekI7O0VBR0E7SUFDRSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjs7RUFFdEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2Nlc3MtYWNjb3VudC1jbG9zdXJlL2F1dGhvcml6ZS1hY2NvdW50LWNsb3N1cmUvYXV0aG9yaXplLWFjY291bnQtY2xvc3VyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWFiOTtcclxuICAgIGNvbG9yOiByZ2IoMjQ0LCAyNTIsIDI0Nik7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0ciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkZWYwO1xyXG4gICAgY29sb3I6IHJnYigzNCwgMjksIDI5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIG1hdC1wYWdpbmF0b3Ige1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBtZC1wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBtZC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZjU7XHJcbiAgfVxyXG4gIFxyXG4gIG1kLXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZiO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIHBhZGRpbmctbGVmdDogNTEwcHg7XHJcbiAgfVxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AuthorizeAccountClosureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeAccountClosureComponent", function() { return AuthorizeAccountClosureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _process_acc_closure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../process-acc-closure.service */ "./src/app/views/process-account-closure/process-acc-closure.service.ts");
/* harmony import */ var src_app_shared_models_process_account_closure_resp_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/process-account-closure-resp-dto */ "./src/app/shared/models/process-account-closure-resp-dto.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");

var AuthorizeAccountClosureComponent_1;





let AuthorizeAccountClosureComponent = AuthorizeAccountClosureComponent_1 = class AuthorizeAccountClosureComponent {
    // toProcessTheClosureData:string[]=['closureType','accountType','accountNumber','viewReport','approveTheRecord','rejectTheRecord']
    constructor(dialog, processService, ref) {
        this.dialog = dialog;
        this.processService = processService;
        this.ref = ref;
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
        this.processAccountClosureRespDTO = new src_app_shared_models_process_account_closure_resp_dto__WEBPACK_IMPORTED_MODULE_3__["ProcessAccountClosureRespDTO"];
        this.excelSingle = Array();
        this.showProgressBarReject = false;
    }
    openDialog() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };
        this.dialog.open(AuthorizeAccountClosureComponent_1, dialogConfig);
    }
    ngOnInit() {
        this.loginUser = localStorage.getItem('userFromLogin');
        console.log(this.loginUser);
        this.gettingAllProcessedRecord();
    }
    gettingAllProcessedRecord() {
        console.log("this is display processed record");
        this.currentUser = localStorage.getItem('currentUser');
        this.processService.gettingAllProcessedRecord(this.currentUser).subscribe(processResp => {
            console.log(processResp);
            console.log(this.currentUser);
            this.process = processResp.map(p => {
                p.enableprogressbar = false;
                console.log(p.status);
                return Object.assign({}, p, { rejectButtonDisabled: p.status === "Rejected" || p.inputBy === this.currentUser, disabled: p.status === "APPROVED" || p.inputBy === this.currentUser });
            });
            console.log(this.process);
        });
    }
    //   onClickofApprove(index:number){
    //     console.log("This is approve");
    //     this.fileName=this.process[index].fileName;
    //     this.accountType=this.process[index].accountType;
    //     this.inputBy = this.process[index].inputBy;
    //     this.id = this.process[index].id;
    //     this.closureType = this.process[index].closureType;
    //     this.process[index].showprogressbar = true;
    //     console.log(this.process[index]);
    //     console.log(this.fileName);
    //  /* this.process.forEach(element => {
    //     console.log(element);
    //     console.log(element.fileName);
    //     this.fileName=element.fileName;
    //     this.closureType = element.closureType;
    //   }); */
    //   this.showProgressBar = true;
    //   setTimeout(() => {
    //     this.process[index].showprogressbar = false;
    //     // this.showProgressBar = false;
    //   }, 5000);
    //   this.process[index].showviewBtn = true;
    //    this.processService.approveRecord(this.fileName,this.accountType,this.inputBy,this.closureType,this.id).
    //    subscribe(approveResp=>{console.log(approveResp)
    //     let processAccountClosureRespDTO = approveResp;
    //     let response = processAccountClosureRespDTO.respMeg;
    //     Swal.fire({
    //     
    //       text: response,
    //     });
    //   })   
    //     /** */  
    //   }
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
        /* this.process.forEach(element => {
          console.log(element);
          console.log(element.fileName);
          this.fileName=element.fileName;
          this.closureType = element.closureType;
        }); */
        // this.showProgressBar = true;
        // setTimeout(() => {
        //   // this.showProgressBar = false;
        // }, 5000);
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: response,
                });
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: response,
                });
                //here
                if (singleResp != null) {
                    console.log("enabled the process button");
                    this.process[index].showviewBtn = true;
                    //here
                }
            });
        }
        //  setTimeout(() => {
        //   this.process[index].showviewBtn =true;
        // }, 5000);
        //  this.process[index].showviewBtn = true;
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
        // if(closureType=="SINGLE")
        // {
        //   console.log("this is single");
        // }
        // else{
        //   console.log("bulk");
        //   console.log("this is on click of download");
        //   this.showProgressBar = true;
        //   setTimeout(() => {
        //     this.showProgressBar = false;
        //   }, 2000)
        //   console.log(this.excel);
        //   this.bulkDataInExcel=this.excel;
        //   console.log("bulkDataInExcel",this.bulkDataInExcel);
        //   console.log(this.excel)
        // --passing two arguments --1)is getting data from backend --i.e is excel data
        // 2)what name i should give for file
    }
    onclickOfReject(i, rejectReasonTextArea) {
        console.log("on clcik of reject", this.process[i]);
        // this.process[i].showprogressbar = true;
        this.process[i].enableprogressbar = true;
        // setTimeout(() => {
        // this.process[i].showProgressBar = false;
        //   // this.showProgressBar = false;
        //    this.showProgressBarReject = false;
        // }, 5000);
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
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Record Rejected successfully'
                    });
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
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: "Record Rejected successFully"
                    });
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            // title: "Reject!",
            text: "Enter Remarks",
            input: 'text',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Please enter remarks!';
                }
            }
            // inputValidator: (value) => {
            //   return !value && 'Please give a value'
            //  },    
        }).then((result) => {
            console.log(result);
            const r = result.value.trim();
            this.approveReasonTextArea = result.value;
            if (!r) {
                console.log('no value');
                return false;
            }
            if (r) {
                console.log(" valid string");
                this.onClickofApprove(i, this.approveReasonTextArea);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.enableButtons();
            }
            else {
                console.log("in valid string");
                //  this.RejectReason(i,approveReason);
            }
        });
    }
    RejectReason(i, rejectReason) {
        this.reasonBoolean[i] = true;
        console.log("enter inside method");
        console.log(rejectReason);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            // title: "Reject!",
            text: "Enter Remarks",
            input: 'text',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Please enter remarks!';
                }
            }
            // inputValidator: (value) => {
            //   return !value && 'Please give a value'
            //  },    
        }).then((result) => {
            console.log(result);
            const r = result.value.trim();
            this.rejectReasonTextArea = result.value;
            if (!r) {
                console.log('no value');
                return false;
            }
            if (r) {
                console.log(" valid string");
                this.onclickOfReject(i, this.rejectReasonTextArea);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.enableButtons();
            }
            else {
                console.log("in valid string");
                this.RejectReason(i, rejectReason);
            }
        });
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: "Please enter reason for rejection",
            });
        }
    }
};
AuthorizeAccountClosureComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _process_acc_closure_service__WEBPACK_IMPORTED_MODULE_2__["ProcessAccClosureService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AuthorizeAccountClosureComponent = AuthorizeAccountClosureComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authorize-account-closure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authorize-account-closure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authorize-account-closure.component.css */ "./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _process_acc_closure_service__WEBPACK_IMPORTED_MODULE_2__["ProcessAccClosureService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AuthorizeAccountClosureComponent);



/***/ }),

/***/ "./src/app/views/process-account-closure/process-acc-closure.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/process-account-closure/process-acc-closure.service.ts ***!
  \******************************************************************************/
/*! exports provided: API_URL, ProcessAccClosureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAccClosureService", function() { return ProcessAccClosureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/config/app.constant */ "./src/app/shared/config/app.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);






const API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].acctCloserUrl;
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ProcessAccClosureService = class ProcessAccClosureService {
    constructor(http) {
        this.http = http;
    }
    gettingAllProcessedRecord(user_id) {
        console.log(user_id);
        return this.http.get(`${API_URL}/api2/getAllProcessedRecordsForBulkAndSingle/${user_id}`);
    }
    approveRecord(fileName, accountType, inputBy, id, closureType, approveReasonTextArea) {
        // return this.http.get<FetchUserForSingleAccClosureReqDTO>(`${API_URL}/medAccount/closeAccount/${fileName}/${accountType}/${inputBy}/${id}/${closureType}`);
        return this.http.get(`${API_URL}/medAccount/closeAccount/${fileName}/${accountType}/${inputBy}/${id}/${closureType}/${approveReasonTextArea}`);
    }
    approveRecordForSingle(accountType, inputBy, closureType, id, approveReasonTextArea) {
        console.log(accountType, closureType, id, inputBy);
        return this.http.get(`${API_URL}/medAccount/closeAccountSingle/${accountType}/${inputBy}/${closureType}/${id}/${approveReasonTextArea}`);
    }
    exportAsExcel(json, excelFileName) {
        console.log(excelFileName);
        console.log(json);
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(json);
        worksheet.blankRows = false;
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_5__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelSingle(excelBuffer, excelFileName);
    }
    saveAsExcelSingle(buffer, fileName) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    onClickofViewReport(fileName, accountType) {
        // @GetMapping("/viewReport/{fileName}/{accountType}"
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
};
ProcessAccClosureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProcessAccClosureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ProcessAccClosureService);



/***/ }),

/***/ "./src/app/views/process-account-closure/process-account-closure-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/process-account-closure/process-account-closure-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: processAccClosureroutes, ProcessAccountClosureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processAccClosureroutes", function() { return processAccClosureroutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAccountClosureRoutingModule", function() { return ProcessAccountClosureRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authorize_account_closure_authorize_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize-account-closure/authorize-account-closure.component */ "./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.ts");


const processAccClosureroutes = [{
        path: '',
        component: _authorize_account_closure_authorize_account_closure_component__WEBPACK_IMPORTED_MODULE_1__["AuthorizeAccountClosureComponent"]
    }];
class ProcessAccountClosureRoutingModule {
}


/***/ }),

/***/ "./src/app/views/process-account-closure/process-account-closure.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/process-account-closure/process-account-closure.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProcessAccountClosureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAccountClosureModule", function() { return ProcessAccountClosureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-account-closure-routing.module */ "./src/app/views/process-account-closure/process-account-closure-routing.module.ts");
/* harmony import */ var _authorize_account_closure_authorize_account_closure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorize-account-closure/authorize-account-closure.component */ "./src/app/views/process-account-closure/authorize-account-closure/authorize-account-closure.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");







let ProcessAccountClosureModule = class ProcessAccountClosureModule {
};
ProcessAccountClosureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_authorize_account_closure_authorize_account_closure_component__WEBPACK_IMPORTED_MODULE_4__["AuthorizeAccountClosureComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_3__["processAccClosureroutes"]),
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]
        ]
    })
], ProcessAccountClosureModule);



/***/ })

}]);
//# sourceMappingURL=views-process-account-closure-process-account-closure-module-es2015.js.map