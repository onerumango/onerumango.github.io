"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_account-blocking_account-block_account-block_module_ts"],{

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

/***/ 35482:
/*!**************************************************************************************!*\
  !*** ./src/app/views/account-blocking/account-block/account-block-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountBlockRoutingModule": function() { return /* binding */ AccountBlockRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _account_blocking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-blocking.component */ 26984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: "",
        component: _account_blocking_component__WEBPACK_IMPORTED_MODULE_1__.AccountBlockingComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    },
];
class AccountBlockRoutingModule {
}
AccountBlockRoutingModule.ɵfac = function AccountBlockRoutingModule_Factory(t) { return new (t || AccountBlockRoutingModule)(); };
AccountBlockRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountBlockRoutingModule });
AccountBlockRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountBlockRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2991:
/*!******************************************************************************!*\
  !*** ./src/app/views/account-blocking/account-block/account-block.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountBlockModule": function() { return /* binding */ AccountBlockModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _account_block_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-block-routing.module */ 35482);
/* harmony import */ var _account_blocking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-blocking.component */ 26984);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class AccountBlockModule {
}
AccountBlockModule.ɵfac = function AccountBlockModule_Factory(t) { return new (t || AccountBlockModule)(); };
AccountBlockModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountBlockModule });
AccountBlockModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _account_block_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountBlockRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountBlockModule, { declarations: [_account_blocking_component__WEBPACK_IMPORTED_MODULE_1__.AccountBlockingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _account_block_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountBlockRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 26984:
/*!**********************************************************************!*\
  !*** ./src/app/views/account-blocking/account-blocking.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountBlockingComponent": function() { return /* binding */ AccountBlockingComponent; },
/* harmony export */   "sendMailToOperationTeam": function() { return /* binding */ sendMailToOperationTeam; },
/* harmony export */   "FCUBSAccsCustomerQueryResDTO": function() { return /* binding */ FCUBSAccsCustomerQueryResDTO; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);








function AccountBlockingComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter valid Phone Number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter valid email address! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ID Name & Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter valid Phone Number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Email Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Name of the Operator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Customer Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Amount To Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Account Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountBlockingComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Blocking Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AccountBlockingComponent {
    constructor(toastService, formBuilder, apiService, router) {
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.router = router;
        this.sendMailtoOpt = new sendMailToOperationTeam();
        this.checkValue = true;
        this.accountBlock = new FCUBSAccsCustomerQueryResDTO();
    }
    ngOnInit() {
        this.link = localStorage.getItem("link");
        this.apiService.getCustomerSearch().subscribe(data => {
            this.buildForm(data);
        });
    }
    buildForm(data) {
        this.accountBlockForm = this.formBuilder.group({
            customerName: [data ? data.customerName : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            customerNumber: [data ? data.customerNumber : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            customerAccountNumber: [data ? data.accountNumber : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            branchCode: [data ? data.branchCode : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            nameOfOperator: ["", this.link === "Account_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            // nameOfOperator: ["",Validators.required],
            nameOfCustomer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            idnameValue: ['', this.link === "Amount_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            dobOfCustomer: ['', this.link === "Amount_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            emailOfoperator: ['', this.link === "Amount_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            customerAddress: ['', this.link === "Amount_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            amountToBlock: ['', this.link === "Amount_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            accountCurrency: ['', this.link === "Amount_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            blockingstatus: ['', this.link === "Amount_Block" ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
            customerMobileNumber: [data ? data.mobileNo :
                    "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
            ],
            mobileNumber: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
            ],
            dueDeligenceInfo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            reasonForBlocking: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            commentsByOperator: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            emailid: [data ? data.email :
                    "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"),
                ],
            ],
            sendmail: [""],
        });
    }
    onClickOfSubmit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Account frozen successfully',
            icon: 'success',
        });
        this.submitdisable = true;
        this.accountBlock.customerName =
            this.accountBlockForm.get("customerName").value;
        this.accountBlock.customerNumber =
            this.accountBlockForm.get("customerNumber").value;
        this.sendMailtoOpt.emailid = this.accountBlockForm.get("emailid").value;
        this.sendMailtoOpt.nameOfCustomer =
            this.accountBlockForm.get("nameOfCustomer").value;
        this.sendMailtoOpt.mobileNumber =
            this.accountBlockForm.get("mobileNumber").value;
        this.sendMailtoOpt.dueDeligenceInfo =
            this.accountBlockForm.get("dueDeligenceInfo").value;
        this.sendMailtoOpt.commentsByOperator =
            this.accountBlockForm.get("commentsByOperator").value;
        this.sendMailtoOpt.reasonForBlocking =
            this.accountBlockForm.get("reasonForBlocking").value;
        this.sendMailtoOpt.nameOfOperator =
            this.accountBlockForm.get("nameOfOperator").value;
        this.accountBlock.branchCode =
            this.accountBlockForm.get("branchCode").value;
        this.accountBlock.accountNumber = this.accountBlockForm.get("customerAccountNumber").value;
        this.accountBlock.mobileNo = this.accountBlockForm.get("customerMobileNumber").value;
        this.sendMailtoOpt.idnameValue =
            this.accountBlockForm.get("idnameValue").value;
        this.sendMailtoOpt.dobOfCustomer =
            this.accountBlockForm.get("dobOfCustomer").value;
        this.sendMailtoOpt.emailOfoperator =
            this.accountBlockForm.get("emailOfoperator").value;
        this.sendMailtoOpt.customerAddress =
            this.accountBlockForm.get("customerAddress").value;
        this.sendMailtoOpt.amountToBlock =
            this.accountBlockForm.get("amountToBlock").value;
        this.sendMailtoOpt.accountCurrency =
            this.accountBlockForm.get("accountCurrency").value;
        this.sendMailtoOpt.blockingstatus =
            this.accountBlockForm.get("blockingstatus").value;
        this.sendMailtoOpt.sendMailtoCustomer =
            this.accountBlockForm.get("sendmail").value;
        this.sendMailtoOpt.customerName = this.accountBlock.customerName;
        this.sendMailtoOpt.customerMobileNumber = this.accountBlock.mobileNo;
        this.sendMailtoOpt.branchCode = this.accountBlock.branchCode;
        this.sendMailtoOpt.customerNumber = this.accountBlock.customerNumber;
        this.sendMailtoOpt.customerAccountNumber = this.accountBlock.accountNumber;
        this.sendMailtoOpt.statusChangeDate = this.data;
        this.currentUser = localStorage.getItem("currentUser");
        this.sendMailtoOpt.status = this.customerdatafromcomponent.accstatus;
        if (!this.sendMailtoOpt.sendMailtoCustomer) {
            this.sendMailtoOpt.sendMailtoCustomer = false;
        }
        if (this.sendMailtoOpt.mobileNumber &&
            this.sendMailtoOpt.nameOfCustomer &&
            this.sendMailtoOpt.dueDeligenceInfo &&
            this.sendMailtoOpt.reasonForBlocking &&
            this.sendMailtoOpt.commentsByOperator) {
            this.submitdisable = true;
            this.apiService.accountBlock(this.sendMailtoOpt).subscribe((resp) => {
                this.resp = resp;
                if (this.resp) {
                    this.toastService.successMessage("Account frozen successfully!.", "");
                }
                else {
                    this.toastService.errorMessage("Unable to process the request. ", "");
                }
            });
        }
        else {
            this.toastService.errorMessage("All fields are mandatory", "Ensure all fields are captured correctly.");
        }
    }
    exit() {
        this.apiService.setAccountBlocking({
            exit: 'clickedOnExitFromAccountBlocking'
        });
        this.link === "Account_Block" ? this.router.navigateByUrl('/customer-search') : this.router.navigateByUrl('/amount-block');
    }
}
AccountBlockingComponent.ɵfac = function AccountBlockingComponent_Factory(t) { return new (t || AccountBlockingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AccountBlockingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountBlockingComponent, selectors: [["npr-account-blocking"]], decls: 71, vars: 13, consts: [["action", "", 1, "formStyle", 3, "formGroup"], [1, "pageContentMain"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "", 1, "formLbl"], ["id", "fname", "type", "text", "formControlName", "customerName", "placeholder", "Customer Name", "value", "", 1, "form-control"], ["id", "cNumber", "formControlName", "customerNumber", "type", "number", "placeholder", "Customer Number", "value", "", 1, "form-control"], ["id", "accNumber", "formControlName", "customerAccountNumber", "type", "number", "placeholder", "Account Number", "value", "", 1, "form-control"], ["id", "cName", "formControlName", "branchCode", "type", "text", "placeholder", "Branch Code", "value", "", 1, "form-control"], ["id", "nationalID", "maxlength", "10", "formControlName", "customerMobileNumber", "type", "number", "placeholder", "Mobile Number", "value", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "accNumber", "formControlName", "emailid", "type", "text", "placeholder", "Email Id", "value", "", 1, "form-control"], [1, "pageContentMain", "mt-4", "mb-4"], ["action", "", 1, "formStyle"], ["id", "fname", "formControlName", "nameOfCustomer", "type", "text", "placeholder", "Customer Name", "value", "", 1, "form-control"], ["class", "col-lg-4", 4, "ngIf"], ["id", "cNumber", "formControlName", "mobileNumber", "maxlength", "10", "type", "number", "placeholder", "Mobile Number", "value", "", 1, "form-control"], ["rows", "8", "id", "cName", "formControlName", "dueDeligenceInfo", "type", "text", "placeholder", "Due Diligence", "value", "", 1, "form-control", "rounded-0"], ["rows", "8", "id", "nationalID", "formControlName", "reasonForBlocking", "type", "text", "placeholder", "Reason", "value", "", 1, "form-control", "rounded-0"], ["rows", "8", "formControlName", "commentsByOperator", "id", "MobNumber", "type", "text", "placeholder", "Comments", "value", "", 1, "form-control", "rounded-0"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"], [1, "invalid-feedback"], ["id", "fname", "formControlName", "idnameValue", "type", "text", "placeholder", "ID Name & Value", "value", "", 1, "form-control"], ["id", "fname", "formControlName", "dobOfCustomer", "type", "text", "placeholder", "DD/MM/YYYY", "value", "", 1, "form-control"], ["id", "MobNumber", "formControlName", "emailOfoperator", "type", "text", "placeholder", "you@gmail.com", "value", "", 1, "form-control"], ["id", "MobNumber", "formControlName", "nameOfOperator", "type", "text", "placeholder", "Name of the Operator", "value", "", 1, "form-control"], ["rows", "8", "id", "cName", "formControlName", "customerAddress", "type", "text", "placeholder", "Customer Address", "value", "", 1, "form-control", "rounded-0"], ["id", "fname", "formControlName", "amountToBlock", "type", "text", "placeholder", "Amount To Block", "value", "", 1, "form-control"], ["id", "cNumber", "formControlName", "accountCurrency", "maxlength", "10", "type", "text", "placeholder", "Account Currency", "value", "", 1, "form-control"], ["rows", "8", "id", "cName", "formControlName", "blockingstatus", "type", "text", "placeholder", "Blocking Status", "value", "", 1, "form-control", "rounded-0"]], template: function AccountBlockingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Customer Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AccountBlockingComponent_div_24_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AccountBlockingComponent_div_29_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AccountBlockingComponent_div_38_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AccountBlockingComponent_div_39_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, AccountBlockingComponent_div_44_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AccountBlockingComponent_div_45_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, AccountBlockingComponent_div_46_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, AccountBlockingComponent_div_47_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, AccountBlockingComponent_div_48_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, AccountBlockingComponent_div_49_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Due Diligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AccountBlockingComponent_div_54_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountBlockingComponent_Template_button_click_66_listener() { return ctx.onClickOfSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountBlockingComponent_Template_a_click_69_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.accountBlockForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.accountBlockForm.get("customerMobileNumber").hasError("pattern") && ctx.accountBlockForm.get("mobileNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.accountBlockForm.get("emailid").hasError("pattern") && ctx.accountBlockForm.get("emailid").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Amount_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Amount_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.accountBlockForm.get("mobileNumber").hasError("pattern") && ctx.accountBlockForm.get("mobileNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Amount_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Account_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Amount_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Amount_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Amount_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link === "Amount_Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.accountBlockForm.valid || ctx.submitdisable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWJsb2NraW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
class sendMailToOperationTeam {
}
class FCUBSAccsCustomerQueryResDTO {
}


/***/ })

}]);
//# sourceMappingURL=src_app_views_account-blocking_account-block_account-block_module_ts-es2015.js.map