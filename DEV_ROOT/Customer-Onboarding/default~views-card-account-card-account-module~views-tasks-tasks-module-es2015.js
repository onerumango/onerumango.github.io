(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-card-account-card-account-module~views-tasks-tasks-module"],{

/***/ "I5/J":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/card-account/digital-signing/upload-signature-or-esign/upload-signature-or-esign.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: UploadSignatureOrEsignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadSignatureOrEsignComponent", function() { return UploadSignatureOrEsignComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/dialogs/dialog.service */ "laYw");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _esignature_pop_esignature_pop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../esignature-pop/esignature-pop.component */ "igS8");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");




















const _c0 = ["profileFile"];
function UploadSignatureOrEsignComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadSignatureOrEsignComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.close1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UploadSignatureOrEsignComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadSignatureOrEsignComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UploadSignatureOrEsignComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UploadSignatureOrEsignComponent_div_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UploadSignatureOrEsignComponent_div_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r11.imageURL1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UploadSignatureOrEsignComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signature!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadSignatureOrEsignComponent_div_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.openPopUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Digital Sign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadSignatureOrEsignComponent_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); return _r8.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadSignatureOrEsignComponent_div_7_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onFileSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UploadSignatureOrEsignComponent_div_7_div_15_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UploadSignatureOrEsignComponent_div_7_ng_template_16_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadSignatureOrEsignComponent_div_7_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.deleteImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " DELETE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadSignatureOrEsignComponent_div_7_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " SUBMIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.imageURL1 == "not_available")("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.disableDone);
} }
class UploadSignatureOrEsignComponent {
    constructor(data, router, apiService, dialogService, dialog, dialogRef, ls, location, snack) {
        this.data = data;
        this.router = router;
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.ls = ls;
        this.location = location;
        this.snack = snack;
        this.isDone = false;
        this.previousUrl = "";
        this.disableDone = true;
        this.res = { enable: false, image: null };
    }
    ngOnInit() {
        this.isCardDigitalSigningDone = this.ls.getItem("CARD_DIGITAL_STAGE_DONE");
        this.isCardDigitalSigning = this.ls.getItem("CARD_DIGITAL_SIGN_DONE");
        this.image = this.ls.getItem("cardSignedImage");
        if (this.image) {
            this.imageURL1 = this.image;
            // this.disableDone = false;
        }
        else {
            this.imageURL1 = "not_available";
            //this.disableDone = true;
        }
        this.accountId = this.ls.getItem("cardId");
        // this.urlService.previousUrl$.subscribe((previousUrl: string) => {
        //   this.previousUrl = previousUrl;
        // });
    }
    close1() {
        if (this.data.screen === "NewCustomerOnboarding") {
            this.dialogRef.close(this.res);
        }
        else {
            this.dialogRef.close(true);
            this.ls.setItem("enable", this.ls.getItem('cardSignedImage') ? true : false);
        }
    }
    openPopUp(data) {
        let response;
        if (data === undefined || data === null) {
            response = {
                isSignLater: false,
                screen: "Create Account",
                accountId: this.accountId,
                customerId: this.ls.getItem("cId"),
            };
        }
        if (!this.show) {
            let dialogRef = this.dialog.open(_esignature_pop_esignature_pop_component__WEBPACK_IMPORTED_MODULE_8__["EsignaturePopComponent"], {
                width: "720px",
                disableClose: true,
                data: data === undefined || data === null ? response : data,
            });
            dialogRef.afterClosed().subscribe((res) => {
                console.log("dismiss res", res);
                if (res) {
                    this.ls.setItem("enable", true);
                    this.imageURL1 = (res === null || res === void 0 ? void 0 : res.image) ? res === null || res === void 0 ? void 0 : res.image : 'not_available';
                    this.disableDone = (res === null || res === void 0 ? void 0 : res.image) ? false : true;
                    //this.res = true;
                    //this.isDone = true;
                    // this.getByAccountId(this.accountId);
                }
            });
        }
    }
    // getByAccountId(accountId: any) {
    //   this.apiService.getByAccountId(accountId)
    // .subscribe(resp => {
    //   this.accountdetailsForStatusUpdate = resp;
    //       this.updateAccountStatus(resp);
    // });
    // }
    // updateAccountStatus(accData) {
    //   accData.status = 'BACKLOG';
    //   this.apiService.updateAccountStatusService(accData)
    //   .subscribe(updateResp => {
    //     console.log("updateResp:: ", updateResp);
    //   });
    // }
    // goBack() {
    //   this.ls.setItem('CARD_DIGITAL_STAGE_DONE', true);
    //   this.ls.setItem('CARD_DIGITAL_SIGN_DONE', true);
    //   this.ls.setItem('eSignStage', true);
    //   this.location.back();
    // }
    onFileSelect(event) {
        console.log("event -- ", event.target.files);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        //   let extName=this.selectedFile.name;
        //   const restArr=extName.split(".");
        //  if(restArr[restArr.length-1]!=='xlsx'){
        reader.onload = (event2) => {
            this.imageURL1 = reader.result;
        };
        const cId = this.customerId;
        const url = this.selectedFile;
        const uploadData = new FormData();
        const data = {
            customerId: this.customerId,
            documentName: "Signature",
            documentType: "10",
            fileType: event.type,
            fileName: event.name,
            verificationType: "Digital Signing",
        };
        uploadData.append("data", JSON.stringify(data));
        uploadData.append("file", url);
        debugger;
        this.apiService.uploadDocument(uploadData).subscribe((res) => {
            // console.log(res);
            // this.disableDone = false;
            if (res) {
                // this.res = res;
                // this.ls.setItem('signedImage', res.fileUrl);
                // this.ls.setItem('enable', true);
            }
        });
        // }else{
        //   this.snack.open("Excel files cannot be uploaded!", "OK", {
        //     duration: 3000,
        //     verticalPosition: "top",
        //     horizontalPosition: "right",
        //   });
        // }
    }
    deleteImg() {
        this.dialogService.doConfirmDialog("").subscribe((response) => {
            if (response == "Yes") {
                this.ls.removeItem("cardSignedImage");
                this.disableDone = true;
                this.imageURL1 = "not_available";
                this.profileFile.nativeElement.value = "";
                this.apiService
                    .deleteCustomerDoc(this.customerId, this.profileId)
                    .subscribe((data) => { });
                this.disableDone = true;
                this.ls.setItem("enable", false);
            }
        });
    }
    // resetState() {
    //   this.ls.removeItem('appEntryStage');
    //   this.ls.removeItem('ACC_DONE');
    //   this.ls.removeItem('ACC_OPEN_DONE');
    //   this.ls.removeItem('ACC_SERVICE_DONE');
    //   this.ls.removeItem('ACC_MANDATE_DONE');
    //   this.ls.removeItem('ACC_NOMINEE_DONE');
    //   this.ls.removeItem('limitEntryStage');
    //   this.ls.removeItem('LIMIT_SECURED_DONE');
    //   this.ls.removeItem('LIMIT_UNSECURED_DONE');
    //   this.ls.removeItem('LIMIT_FIN_DONE');
    //   // Parent 3
    //   this.ls.removeItem('enrichmentStage');
    //   // Subnave of parent 3
    //   this.ls.removeItem('ENRICHMENT_CHARGES_DONE');
    //   this.ls.removeItem('ENRICHMENT_INTEREST_DONE');
    //   // PArent 4
    //   this.ls.removeItem('assessmentStage');
    //   // Subnave of parent 4
    //   this.ls.removeItem('ASSESSMENT_QA_DONE');
    //   this.ls.removeItem('ASSESSMENT_REPORT_DONE');
    //   // PArent 5
    //   this.ls.removeItem('fundingStage');
    //   // Subnave of parent 5
    //   this.ls.removeItem('FUNDING_INI_DONE');
    //   // Parent 6
    //   this.ls.removeItem('approvalStage');
    //   // Parent 6 childs nav
    //   this.ls.removeItem('APPROVAL_DETAILS_DONE');
    //   this.ls.removeItem('accountId');
    //   this.ls.removeItem('eSignStage');
    //   this.ls.removeItem('PRODUCT_CUSTOMER_ID');
    //   this.ls.removeItem('accountType');
    //   this.ls.removeItem('intrestFlag');
    //   this.ls.removeItem('Status');
    //   this.ls.removeItem("CIF_NUM_PRIMARY");
    //   this.ls.removeItem("cId");
    //   this.ls.removeItem("fundByStatus");
    //   this.ls.removeItem("overDraftByStatus");
    //   sessionStorage.clear();
    //   this.accountService.refresh.next();
    //   this.router.navigate(['/loan-account']);
    // }
    onSubmit() {
        this.isDone = true;
        this.dialogRef.close(true);
    }
}
UploadSignatureOrEsignComponent.ɵfac = function UploadSignatureOrEsignComponent_Factory(t) { return new (t || UploadSignatureOrEsignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
UploadSignatureOrEsignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadSignatureOrEsignComponent, selectors: [["app-upload-signature-or-esign"]], viewQuery: function UploadSignatureOrEsignComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.profileFile = _t.first);
    } }, decls: 8, vars: 4, consts: [["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutAlign", "end center"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxFlex", "100", 4, "ngIf"], ["fxFlex", "100"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "50", "fxFlexOffset", "20px", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "propic", "text-center"], ["src", "assets/images/esign.png", "alt", ""], ["fxFlex", "50", "fxFlexOffset", "20px"], [1, "text-center", "mt-16", "size"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px"], [1, "sub-section-1"], ["appearence", "outline", 1, "scanButton", 3, "click"], [1, "sub-section-2"], [1, "Upload", "scanButton", 3, "click"], ["type", "file", "required", "", 1, "changeInput", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "insertDriveImg"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], ["mat-raised-button", "", "color", "red", 1, "dltbtn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "dbtn", 3, "disabled", "click"], ["alt", "No Image", 1, "formImg", 3, "src"], ["required", "", "alt", "", 1, "formImg", 3, "src"]], template: function UploadSignatureOrEsignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UploadSignatureOrEsignComponent_button_2_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UploadSignatureOrEsignComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UploadSignatureOrEsignComponent_div_4_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UploadSignatureOrEsignComponent_div_7_Template, 23, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDone);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexOffsetDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"]], styles: [".scanButton[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: white;\n  color: blue;\n  border-color: lightgray;\n  margin-left: 5px;\n  border-style: ridge;\n  margin-top: 0px;\n  border-radius: 5px;\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 400px !important;\n  background-color: whitesmoke;\n  border-radius: 10%;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.size[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 300;\n}\n\n.dltbtn[_ngcontent-%COMP%] {\n  margin-left: 91px;\n  margin: 12px 0px 12px 0px;\n  width: 35%;\n  background-color: red;\n  color: white;\n  border-radius: 55px;\n}\n\n.dbtn[_ngcontent-%COMP%] {\n  margin-left: 29px;\n  margin: 12px 0px 12px 0px;\n  width: 35%;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVwbG9hZC1zaWduYXR1cmUtb3ItZXNpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx1QkFBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQXBCOztBQUdBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQXBCOztBQUdDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQUF0Qjs7QUFHQztFQUNDLGdCQUFnQjtFQUNkLGdCQUFnQjtBQUFwQjs7QUFHQztFQUNDLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDeEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQXRCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN4QixVQUFVO0VBQ1YseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFBdEIiLCJmaWxlIjoidXBsb2FkLXNpZ25hdHVyZS1vci1lc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2FuQnV0dG9uIHtcclxuICAvLyAgIHdpZHRoOiA4MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmx1ZTtcclxuICBib3JkZXItY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvcm1JbWcge1xyXG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuIC5OZXh0IHtcclxuICAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICAgd2lkdGg6IDE1MHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gfVxyXG5cclxuIC5zaXple1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gfVxyXG5cclxuIC5kbHRidG57XHJcbiAgbWFyZ2luLWxlZnQ6IDkxcHg7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDsgICAgXHJcbiAgIHdpZHRoOiAzNSU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG5cclxufVxyXG4uZGJ0bntcclxuICBtYXJnaW4tbGVmdDogMjlweDtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4OyAgICBcclxuICAgd2lkdGg6IDM1JTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadSignatureOrEsignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-upload-signature-or-esign",
                templateUrl: "./upload-signature-or-esign.component.html",
                styleUrls: ["./upload-signature-or-esign.component.scss"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, { profileFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["profileFile"]
        }] }); })();


/***/ }),

/***/ "igS8":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/card-account/digital-signing/esignature-pop/esignature-pop.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EsignaturePopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsignaturePopComponent", function() { return EsignaturePopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-signaturepad */ "r1zJ");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/application-entry-stage.service */ "qMRc");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var app_views_home_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/views/home/account.service */ "kA6c");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "PDjf");





















function EsignaturePopComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EsignaturePopComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EsignaturePopComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EsignaturePopComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EsignaturePopComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EsignaturePopComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please e-sign the application!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "signature-pad", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function EsignaturePopComponent_div_7_Template_signature_pad_onBeginEvent_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.drawStart(); })("onEndEvent", function EsignaturePopComponent_div_7_Template_signature_pad_onEndEvent_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.drawComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EsignaturePopComponent_div_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " SUBMIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.signaturePadOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.disableDone);
} }
class EsignaturePopComponent {
    constructor(data, dialogRef, ls, router, accountService, apiService, appEntryService, cdr) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.ls = ls;
        this.router = router;
        this.accountService = accountService;
        this.apiService = apiService;
        this.appEntryService = appEntryService;
        this.cdr = cdr;
        this.isDone = false;
        this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 700,
            canvasHeight: 300,
        };
        this.count = 0;
        this.res = { enable: false, image: null };
        this.disableDone = true;
        this.signupload = true;
    }
    ngOnInit() {
        this.cardId = this.ls.getItem("cardId");
        console.log("popup response data:", this.data);
        this.isDone = this.data.isSignLater;
        this.cdr.markForCheck();
    }
    ngAfterViewInit() {
        // this.signaturePad is now available
        this.signaturePad.set("minWidth", 2);
        this.signaturePad.clear();
    }
    drawComplete() {
        console.log(this.signaturePad.toDataURL());
        this.esignUrl = this.signaturePad.toDataURL();
        if (this.esignUrl.toString().includes("data:image/png;base64")) {
            this.disableDone = false;
        }
        else {
            this.disableDone = true;
        }
    }
    drawStart() {
        console.log("begin drawing");
    }
    clearSignature() {
        this.signaturePad.clear();
    }
    savePad() {
        const base64Data = this.signaturePad.toDataURL();
        this.signatureImg = base64Data;
    }
    close1() {
        if (this.data.screen === "NewCustomerOnboarding") {
            this.dialogRef.close(this.res);
        }
        else {
            this.dialogRef.close({ image: this.ls.getItem('cardSignedImage') ? this.ls.getItem('cardSignedImage') : '' });
            this.ls.setItem("enable", false);
        }
    }
    close() {
        if (this.data.screen === "NewCustomerOnboarding") {
            this.dialogRef.close(this.res);
        }
        else {
            this.dialogRef.close({ image: this.esignUrl });
            // this.ls.setItem('enable', true);
        }
    }
    // onFileChanged(event) {
    //   this.selectedFile = event.target.files[0];
    //   console.log(this.selectedFile);
    //   this.disableDone = false;
    // }
    onSubmit() {
        console.log(this.signaturePad.toDataURL());
        let data = {};
        let uploadModel = {};
        console.log("this.data::", this.data);
        if (this.data.screen !== "NewCustomerOnboarding") {
            uploadModel.cardId = this.data.accountId;
            this.getByAccountId(uploadModel.cardId);
        }
        else {
            let customerId = this.data.customerId;
            this.apiService.getAccountIdByCusId(customerId).subscribe((res) => {
                console.log("Account Id response -- ", res);
                data.accountId = res;
            });
            this.res = { enable: true, image: this.signaturePad.toDataURL() };
        }
        uploadModel.customerId = this.data.customerId;
        uploadModel.documentName = this.data.customerId + "Signature";
        uploadModel.documentType = "10";
        uploadModel.fileType = "image/jpeg";
        uploadModel.fileName = "signature";
        const dataURL = this.signaturePad.toDataURL("image/png");
        this.ls.setItem('cardSignedImage', dataURL);
        const datam = atob(dataURL.substring("data:image/png;base64,".length)), asArray = new Uint8Array(datam.length);
        for (var i = 0, len = datam.length; i < len; ++i) {
            asArray[i] = datam.charCodeAt(i);
        }
        const blob = new Blob([asArray], { type: "image/png" });
        data["uploadModel"] = uploadModel;
        data.noOfSignatures = "1";
        const uploadData = new FormData();
        uploadData.append("data", JSON.stringify(data));
        console.log("data", data);
        uploadData.append("file", blob);
        uploadData.append("accType", "cardOrigin");
        this.apiService.uploadSignature(uploadData).subscribe((op) => {
            console.log(op);
            if (op) {
                this.close();
                this.show = true;
                this.ls.setItem("enable", true);
                this.res = op;
            }
        }, (err) => {
            this.close();
            this.res = false;
        });
        if (this.data.screen !== "NewCustomerOnboarding") {
            this.isDone = false;
        }
        else {
            this.close();
        }
        console.log(this.isDone);
        this.ls.setItem("eSignStage", true);
        //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        //     this.router.navigate(["cardaccount/digitalsigning/options"]);
        // });
    }
    getByAccountId(cardId) {
        this.apiService.getCardInitiationDetails(cardId).subscribe((resp) => {
            console.log("updateStatus :: ", resp);
            this.accountdetailsForStatusUpdate = resp;
            this.updateCardAccountStatus();
        });
    }
    updateCardAccountStatus() {
        let statusModel = {
            cardId: this.cardId,
            status: "BACKLOG",
        };
        this.apiService.updateCardStatus(statusModel).subscribe((updateResp) => {
            console.log("updateResp:: ", updateResp);
        });
    }
}
EsignaturePopComponent.ɵfac = function EsignaturePopComponent_Factory(t) { return new (t || EsignaturePopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_views_home_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEntryStageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
EsignaturePopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EsignaturePopComponent, selectors: [["app-esignature-pop"]], viewQuery: function EsignaturePopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
    } }, decls: 8, vars: 4, consts: [["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutAlign", "end center"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxFlex", "100", 4, "ngIf"], ["fxFlex", "100"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "50", "fxFlexOffset", "20px", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "propic", "text-center"], ["src", "assets/images/esign.png", "alt", ""], ["fxFlex", "50", "fxFlexOffset", "20px"], [1, "text-center", "mt-16"], [1, "mt-16", "signbox"], [3, "options", "onBeginEvent", "onEndEvent"], [1, "text-center"], ["mat-raised-button", "", 1, "Next", 3, "disabled", "click"]], template: function EsignaturePopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EsignaturePopComponent_button_2_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EsignaturePopComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EsignaturePopComponent_div_4_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EsignaturePopComponent_div_7_Template, 9, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexOffsetDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"]], styles: [".signbox[_ngcontent-%COMP%] {\n  border-style: shadow;\n  height: 160px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVzaWduYXR1cmUtcG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGFBQ0o7QUFBQTs7QUFDQztFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFFeEIiLCJmaWxlIjoiZXNpZ25hdHVyZS1wb3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmJveHtcclxuICAgIGJvcmRlci1zdHlsZTogc2hhZG93O1xyXG4gICAgaGVpZ2h0OiAxNjBweFxyXG59XHJcbiAuTmV4dCB7XHJcbiAgICAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EsignaturePopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-esignature-pop",
                templateUrl: "./esignature-pop.component.html",
                styleUrls: ["./esignature-pop.component.scss"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_views_home_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEntryStageService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~views-card-account-card-account-module~views-tasks-tasks-module-es2015.js.map