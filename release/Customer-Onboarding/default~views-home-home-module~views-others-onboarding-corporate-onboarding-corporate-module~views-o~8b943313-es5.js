(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-home-home-module~views-others-onboarding-corporate-onboarding-corporate-module~views-o~8b943313"], {
    /***/
    "4X5X":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/views/home/application-entry-stage/account-details-summary/account-details-summary.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: AccountDetailsSummaryComponent */

    /***/
    function X5X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountDetailsSummaryComponent", function () {
        return AccountDetailsSummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AccountDetailsSummaryComponent_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Swift Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.accountDetails == null ? null : ctx_r0.accountDetails.swiftCode, " ");
        }
      }

      var AccountDetailsSummaryComponent = /*#__PURE__*/function () {
        function AccountDetailsSummaryComponent(dialogRef, localstore, router, dataService, apiService) {
          _classCallCheck(this, AccountDetailsSummaryComponent);

          this.dialogRef = dialogRef;
          this.localstore = localstore;
          this.router = router;
          this.dataService = dataService;
          this.apiService = apiService;
          this.formData = {};
          this.showEditOption = false;
          this.title = "Account Details";
          this.imgUrl = "assets/images/flagUSA.jpg";
          this.swiftEnable = false;
        }

        _createClass(AccountDetailsSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productaccountID = this.localstore.getItem('accountId');
            console.log("Account ID from Local Storage", this.productaccountID);
            this.getAccountDetails();
          }
        }, {
          key: "getAccountDetails",
          value: function getAccountDetails() {
            var _this = this;

            this.apiService.getAccountDetailsById(this.productaccountID).subscribe(function (accountDetails) {
              console.log("All Account Service", accountDetails);
              _this.accountDetails = accountDetails;

              if (accountDetails.swiftCode != null) {
                _this.swiftEnable = true;
              }

              _this.cifNumber = _this.localstore.getItem('CIF_NUM_PRIMARY');
              _this.customerName = _this.localstore.getItem('Customer Name');
            });
          }
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.dialogRef.close();
            this.dataService.sendNavParam(this.accountDetails);
            this.router.navigate(["/home/application/create-customer-account"]);
          }
        }]);

        return AccountDetailsSummaryComponent;
      }();

      AccountDetailsSummaryComponent.ɵfac = function AccountDetailsSummaryComponent_Factory(t) {
        return new (t || AccountDetailsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      AccountDetailsSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AccountDetailsSummaryComponent,
        selectors: [["app-account-details-summary"]],
        decls: 94,
        vars: 11,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], [1, "fullcard"], ["fxLayout", "row"], [1, "paraFont"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100%"], [1, "chequecard"], ["fxLayout", "column", "fxLayoutGap", "2%", "fxLayoutAlign", "space-between none", 1, "colAlign"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "headingText"], [1, "valueText"], ["layout", "row"], ["flex", "", 1, "line"], [1, "toggle"], [3, "checked"], ["fxFlex", "33%", "fxFlex.xs", "100%", 4, "ngIf"], [1, "editButton", 3, "click"]],
        template: function AccountDetailsSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountDetailsSummaryComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CIF Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Customer Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Business Product Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Account Branch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Account Currency ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Application Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Initial Funding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-slide-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Overdraft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "mat-slide-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Want to add SWIFT Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "mat-slide-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AccountDetailsSummaryComponent_div_91_Template, 6, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountDetailsSummaryComponent_Template_p_click_92_listener() {
              return ctx.goToEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cifNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.customerName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accountDetails == null ? null : ctx.accountDetails.accountType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountDetails == null ? null : ctx.accountDetails.businessProductName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountDetails == null ? null : ctx.accountDetails.accountBranch, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountDetails == null ? null : ctx.accountDetails.accountCurrency, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountDetails == null ? null : ctx.accountDetails.applicationDate, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.accountDetails.fundBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.accountDetails.overDraftRequested);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.accountDetails.swiftCodeEnable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.swiftEnable);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
        styles: [".entryImg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2%;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  text-align: center;\n  font-family: 'Montserrat';\n  font-size: 20px;\n  padding-top: 12px;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.boxCard[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 700px;\n  height: 250px;\n  border: 1px solid #e4e4e4;\n  padding: 10px;\n}\n\n.paraFont[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  padding-left: 20px;\n  font-family: 'Montserrat';\n  font-size: 16px;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  padding-left: 10px;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.valueText[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n}\n\n.textSpanCIF[_ngcontent-%COMP%] {\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n}\n\n.valueTextName[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 16px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #6e6e6e;\n}\n\n.editButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 18px;\n  cursor: pointer;\n}\n\n.fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 95%;\n  height: 50%;\n  margin: auto;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  height: auto;\n  border-radius: 5px;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  pointer-events: none;\n  opacity: .4 !important;\n}\n\n.textIconCust[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 16px !important;\n  color: #B2B2B2;\n}\n\n.textSpanCust[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.textIcon[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 20px !important;\n  color: #24CCA7;\n}\n\n.textSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #464545;\n  font-family: 'Montserrat';\n  font-size: 13px;\n}\n\n.nomineeIcon[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 20px !important;\n  color: #24CCA7;\n}\n\n.nomineeSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #464545;\n  font-family: 'Montserrat';\n  font-size: 13px;\n}\n\n.textIconnom[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 16px !important;\n  color: #B2B2B2;\n}\n\n.textSpannom[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n  height: 200px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8,\r 0 1px 0 #f8f8f8,\r 0 5px 8px 0 #e9e9e9;\n}\n\n.textSpanCIF[_ngcontent-%COMP%] {\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  width: 32px !important;\n  height: 14px !important;\n  background-color: #49c5b6;\n}\n\n .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f9fafa;\n  width: 17px !important;\n  height: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjY291bnQtZGV0YWlscy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwiYWNjb3VudC1kZXRhaWxzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFHQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7QUFBckI7O0FBRUE7RUFDSSx5QkFBMEI7QUFDOUI7O0FBQ0E7RUFDUSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtBQUVyQjs7QUFDQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGVBQWU7QUFFbkI7O0FBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixlQUFlO0FBR25COztBQURBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsZUFBZTtBQUlqQjs7QUFGQTtFQUNJLGNBQWM7RUFDZCxzQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUt0Qjs7QUFIQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFNN0I7O0FBSkM7RUFDRyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixlQUFlO0FBT25COztBQUxBO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztBQVFsQjs7QUFOQTtFQUNJLGNBQWM7RUFDZCx5QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZUFBZTtBQVNuQjs7QUFOQTtFQUNJLHVCQUFvQztFQUNwQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFTaEI7O0FBTkE7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0FBUXRCOztBQU5BO0VBQ0ksa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFTMUI7O0FBUEE7RUFDSSx1QkFBc0I7RUFDdEIsc0JBQXFCO0VBQ3JCLDBCQUF5QjtFQUN6QixjQUFjO0FBVWxCOztBQVJBO0VBQ0ksa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFxQjtFQUNyQixlQUFlO0FBV25COztBQVRBO0VBQ0ksdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQiwwQkFBeUI7RUFDekIsY0FBYztBQVlsQjs7QUFWQTtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBd0I7RUFDeEIsZUFBZTtBQWFuQjs7QUFYQTtFQUNJLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsMEJBQXlCO0VBQ3pCLGNBQWM7QUFjbEI7O0FBWkE7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXdCO0VBQ3hCLGVBQWU7QUFlbkI7O0FBYkE7RUFDSSx1QkFBc0I7RUFDdEIsc0JBQXFCO0VBQ3JCLDBCQUF5QjtFQUN6QixjQUFjO0FBZ0JsQjs7QUFkQTtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBcUI7RUFDckIsZUFBZTtBQWlCbkI7O0FBZkE7RUFDSSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFrQmpCOztBQWhCQTtFQUNJLDBFQ29CZ0I7QURHcEI7O0FDQUE7RURkQyxjQUFBO0VBa0JDLHNCQUFrQjtFQWZwQixlQUFBO0VDZUUsa0JBQWtCO0FER3BCOztBQ0FBO0VER0Usc0JBQUE7RUFmRix1QkFBQTtFQ2VFLHlCQUF5QjtBREczQjs7QUNBQTtFREdFLHlCQUF1QjtFQUN6QixzQkFBQTtFQ0RFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJhY2NvdW50LWRldGFpbHMtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnRyeUltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuXHJcbi5wYXJhe1xyXG4gICAgY29sb3I6ICMwRjBGMEY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG4uY29udGFpbntcclxuICAgIGp1c3RpZnktY29udGVudDogIGZsZXgtZW5kO1xyXG59XHJcbi5ib3hDYXJkIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucGFyYUZvbnR7XHJcbiAgICBjb2xvcjogIzJiMmIyYjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaGVhZGluZ1RleHR7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4udmFsdWVUZXh0e1xyXG4gIGNvbG9yOiAjMEYwRjBGO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi50ZXh0U3BhbkNJRntcclxuICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgZm9udC1mYW1pbHk6J01hbnJvcGUnO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5saW5le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTQlO1xyXG59LnZhbHVlVGV4dE5hbWV7XHJcbiAgICBjb2xvcjogIzBGMEYwRjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbi5iYWNrSWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbn1cclxuLmVkaXRCdXR0b257XHJcbiAgICBjb2xvcjogIzQ1NkVGRTtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZ1bGxjYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2hlcXVlY2FyZHtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udG9nZ2xle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAuNCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0SWNvbkN1c3R7XHJcbiAgICBoZWlnaHQ6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOjE2cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG59XHJcbi50ZXh0U3BhbkN1c3R7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOjFweDtcclxuICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgZm9udC1mYW1pbHk6J01hbnJvcGUnO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi50ZXh0SWNvbntcclxuICAgIGhlaWdodDoxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6MjBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyNENDQTc7XHJcbn1cclxuLnRleHRTcGFue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXRvcDoxcHg7XHJcbiAgICBjb2xvcjogIzQ2NDU0NTtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ubm9taW5lZUljb257XHJcbiAgICBoZWlnaHQ6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOjIwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjRDQ0E3O1xyXG59XHJcbi5ub21pbmVlU3BhbntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6MXB4O1xyXG4gICAgY29sb3I6ICM0NjQ1NDU7XHJcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnRleHRJY29ubm9te1xyXG4gICAgaGVpZ2h0OjE2cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0IyQjJCMjtcclxufVxyXG4udGV4dFNwYW5ub217XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOjFweDtcclxuICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgZm9udC1mYW1pbHk6J01hbnJvcGUnO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi5pbnB1dENhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmlucHV0Q2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgMCAxcHggMCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgMCA1cHggOHB4IDAgI2U5ZTllOTtcclxufVxyXG4udGV4dFNwYW5DSUZ7XHJcbiAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIHdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNjtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmE7XHJcbiAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbiIsIi5lbnRyeUltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnBhcmEge1xuICBjb2xvcjogIzBGMEYwRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uY29udGFpbiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5ib3hDYXJkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wYXJhRm9udCB7XG4gIGNvbG9yOiAjMmIyYjJiO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmhlYWRpbmdUZXh0IHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4udmFsdWVUZXh0IHtcbiAgY29sb3I6ICMwRjBGMEY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGV4dFNwYW5DSUYge1xuICBjb2xvcjogIzk0OTQ5NDtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnZhbHVlVGV4dE5hbWUge1xuICBjb2xvcjogIzBGMEYwRjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5iYWNrSWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCUgMCUgMCUgMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2ZTZlNmU7XG59XG5cbi5lZGl0QnV0dG9uIHtcbiAgY29sb3I6ICM0NTZFRkU7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZnVsbGNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNoZXF1ZWNhcmQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRvZ2dsZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IC40ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0SWNvbkN1c3Qge1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQjJCMkIyO1xufVxuXG4udGV4dFNwYW5DdXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4udGV4dEljb24ge1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjRDQ0E3O1xufVxuXG4udGV4dFNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIGNvbG9yOiAjNDY0NTQ1O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5ub21pbmVlSWNvbiB7XG4gIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMyNENDQTc7XG59XG5cbi5ub21pbmVlU3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgY29sb3I6ICM0NjQ1NDU7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRleHRJY29ubm9tIHtcbiAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0IyQjJCMjtcbn1cblxuLnRleHRTcGFubm9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uaW5wdXRDYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmlucHV0Q2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4ICNmOGY4ZjgsXHIgMCAxcHggMCAjZjhmOGY4LFxyIDAgNXB4IDhweCAwICNlOWU5ZTk7XG59XG5cbi50ZXh0U3BhbkNJRiB7XG4gIGNvbG9yOiAjOTQ5NDk0O1xuICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNjtcbn1cblxuOjpuZy1kZWVwLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYTtcbiAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountDetailsSummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-account-details-summary',
            templateUrl: './account-details-summary.component.html',
            styleUrls: ['./account-details-summary.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7CNx":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/views/others/new-customer-onboarding/success-dialogue/success-dialogue.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: SuccessDialogueComponent */

    /***/
    function CNx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessDialogueComponent", function () {
        return SuccessDialogueComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");

      function SuccessDialogueComponent_mat_label_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Customer Id: ", ctx_r0.customerId, "");
        }
      }

      function SuccessDialogueComponent_mat_label_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Corporate Id: ", ctx_r1.corporateId, "");
        }
      }

      var SuccessDialogueComponent = /*#__PURE__*/function () {
        function SuccessDialogueComponent(dialogRef, dialogService, data, router, // private corporateService: CorporateOnboardingService,
        ls) {
          _classCallCheck(this, SuccessDialogueComponent);

          this.dialogRef = dialogRef;
          this.dialogService = dialogService;
          this.data = data;
          this.router = router;
          this.ls = ls;
          this.hideCustId = false;
          this.hideCorporateId = false;
        }

        _createClass(SuccessDialogueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('data :: ', this.data);

            if (this.data.screenName === 'INDIVIDUAL') {
              this.hideCustId = true;
              this.hideCorporateId = false;
            } else if (this.data.screenName === 'CORPORATE') {
              this.hideCustId = false;
              this.hideCorporateId = true;
              this.corporateId = this.data.id;
            }

            this.customerId = this.ls.getItem('customerId');
          }
        }, {
          key: "closeClick",
          value: function closeClick() {
            this.dialogRef.close();
          }
        }, {
          key: "backToDashboard",
          value: function backToDashboard() {
            this.dialogRef.close();

            if (this.data.screenName === 'INDIVIDUAL') {
              this.router.navigateByUrl('/others/mainNavigation');
            } else if (this.data.screenName === 'CORPORATE') {
              this.router.navigateByUrl('/others/mainNavigation');
            }
          }
        }, {
          key: "continue",
          value: function _continue() {
            this.dialogRef.close();
            this.dialogService.openCustomerType();

            if (this.data.screenName === 'INDIVIDUAL') {
              this.router.navigateByUrl('/others/newCustomerOnboarding');
            } else if (this.data.screenName === 'CORPORATE') {
              this.router.navigateByUrl('/onboardingCorporate/corporate');
            }
          }
        }]);

        return SuccessDialogueComponent;
      }();

      SuccessDialogueComponent.ɵfac = function SuccessDialogueComponent_Factory(t) {
        return new (t || SuccessDialogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"]));
      };

      SuccessDialogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SuccessDialogueComponent,
        selectors: [["app-success-dialogue"]],
        decls: 18,
        vars: 2,
        consts: [[1, "close-icon"], ["id", "close", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center center", 1, "columnDiv"], ["fxFlex", "100", "fxLayoutAlign", "center stretch", "fxLayoutGap", "space-around", "id", "scanDiv"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "id", "proceedDiv"], ["id", "hold", 4, "ngIf"], ["fxFlex", "25", "fxLayoutAlign", "center stretch"], ["src", "assets/images/success.png", 1, "sucess-img"], ["fxFlex", "50", "fxLayoutAlign", "center stretch"], ["mat-raised-button", "", 1, "btnContinue", 3, "click"], ["mat-raised-button", "", 1, "btnGTD", 3, "click"], ["id", "hold"]],
        template: function SuccessDialogueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessDialogueComponent_Template_mat_icon_click_1_listener() {
              return ctx.closeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer Onboarded Successfully");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SuccessDialogueComponent_mat_label_8_Template, 2, 1, "mat-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SuccessDialogueComponent_mat_label_9_Template, 2, 1, "mat-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessDialogueComponent_Template_button_click_13_listener() {
              return ctx["continue"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessDialogueComponent_Template_button_click_16_listener() {
              return ctx.backToDashboard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Go To Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideCustId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideCorporateId);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"]],
        styles: [".close-icon[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.columnDiv[_ngcontent-%COMP%] {\n  padding: 3rem 0rem;\n}\n\n.btnContinue[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 3rem;\n  border-radius: 30px;\n  background-color: #456EFE;\n  color: white;\n  font-family: sans-serif;\n}\n\n.btnGTD[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 3rem;\n  border-radius: 30px;\n  background-color: #C9C9C9;\n  color: white;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN1Y2Nlc3MtZGlhbG9ndWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxZQUFZO0FBSmhCOztBQU9BO0VBQ0ksa0JBQWtCO0FBSnRCOztBQU9BO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix1QkFBdUI7QUFKM0I7O0FBT0E7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHVCQUF1QjtBQUozQiIsImZpbGUiOiJzdWNjZXNzLWRpYWxvZ3VlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8uc3VjZXNzLWltZ3tcclxuICAvLyAgd2lkdGg6IDEwMHB4O1xyXG4gIC8vICBoZWlnaHQ6IDEwMHB4O1xyXG4vL31cclxuXHJcbi5jbG9zZS1pY29ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY29sdW1uRGl2e1xyXG4gICAgcGFkZGluZzogM3JlbSAwcmVtO1xyXG59XHJcblxyXG4uYnRuQ29udGludWV7XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuR1REe1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessDialogueComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-success-dialogue',
            templateUrl: './success-dialogue.component.html',
            styleUrls: ['./success-dialogue.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ADVx":
    /*!***********************************************************************!*\
      !*** ./src/app/views/others/customer-type/customer-type.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CustomerTypeComponent */

    /***/
    function ADVx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerTypeComponent", function () {
        return CustomerTypeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");

      function CustomerTypeComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTypeComponent_div_11_Template_mat_card_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.goToService(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", folder_r1.flag ? "borderCard" : "inputCard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", folder_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r1.title);
        }
      }

      var CustomerTypeComponent = /*#__PURE__*/function () {
        function CustomerTypeComponent(router, jwtService, dialogRef) {
          _classCallCheck(this, CustomerTypeComponent);

          this.router = router;
          this.jwtService = jwtService;
          this.dialogRef = dialogRef; // flag1: boolean;
          // flag2: boolean;
          // flag3: boolean;
          // index: any;
          // toggle = true;
          // status = 'Enable'; 

          this.flag = true;
          this.proceed = "Proceed";
          this.active = {};
          this.folders = [{
            title: "Individual",
            id: 1,
            flag: false,
            link: 'others/newCustomerOnboarding',
            imgUrl: "assets/images/type1.png"
          }, {
            title: "Corporate",
            id: 2,
            flag: false,
            link: 'onboardingCorporate/corporate',
            imgUrl: "assets/images/type2.png"
          }];
          this.disableBtn = true;
        }

        _createClass(CustomerTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeClick",
          value: function closeClick(type) {
            // console.log("close click")
            this.dialogRef.close(); // window.open(`${REDIRECT_HOST}?code=${this.jwtService.getEncryptedToken()}&appType=${type}`, "_blank");

            window.location.replace("".concat(app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["REDIRECT_HOST"], "?code=").concat(this.jwtService.getEncryptedToken(), "&appType=").concat(type));
          } //   focus(index){
          //     console.log(index);
          //     if(index==1)
          //     {
          //     this.flag1=true;
          //     this.flag2=false;
          //     this.flag3=false;
          //     this.index=index;
          //   }
          //   if(index==2)
          //   {
          //   this.flag1=false;
          //   this.flag2=true;
          //   this.flag3=false;
          //   this.index=index;
          // }
          // if(index==3)
          // {
          // this.flag1=false;
          // this.flag2=false;
          // this.flag3=true;
          // this.index=index;
          // }
          // }
          // img()
          // {
          //   console.log("clicked")
          // }
          // goToVerification(i){
          // console.log("Test");
          // }
          // proceed()
          // {
          //   console.log("index value",this.index);
          //   if(this.index==1)
          //   {
          //     console.log("enter inside if")
          //        this.router.navigateByUrl('/others/kyc');
          //   }
          //   this.closeClick();
          // }

        }, {
          key: "goToService",
          value: function goToService(index) {
            if (this.active !== index) {
              this.active = index;
              this.folders.forEach(function (item) {
                item.flag = false;
              });
            }

            this.index = index;
            this.folders[index].flag = !this.folders[index].flag;
          } // contiueButton(){
          //   // console.log(this.active);
          //   this.enableList = this.folders.filter(x => x.flag === true)
          //   console.log(this.enableList);
          //   if(this.enableList.length > 0 )
          //   return true;
          //   else 
          //   return false;
          // }

        }, {
          key: "contiueButton",
          value: function contiueButton() {
            this.enableList = this.folders.filter(function (x) {
              return x.flag === true;
            });

            if (this.enableList.length > 0) {
              this.disableBtn = false;
              return true;
            } else return false;
          }
        }, {
          key: "goToOperations",
          value: function goToOperations() {
            this.dialogRef.close();
            this.router.navigate([this.enableList[0].link]);
          }
        }]);

        return CustomerTypeComponent;
      }();

      CustomerTypeComponent.ɵfac = function CustomerTypeComponent_Factory(t) {
        return new (t || CustomerTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      CustomerTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomerTypeComponent,
        selectors: [["app-customer-type"]],
        decls: 15,
        vars: 4,
        consts: [[2, "margin-top", "15px"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], [1, "card-title"], [1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "full-width"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "center stretch", 1, "done"], ["mat-flat-button", "", "tabindex", "-1", 3, "ngClass", "disabled", "click"], ["fxLayout", "column", "fxLayoutAlign", "space-around center"], [1, "card-container"], [3, "ngClass", "click"], [1, "img"], ["alt", "", 1, "signnowImg", 3, "src"], [1, "folder-title"], [1, "insideTitle"]],
        template: function CustomerTypeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTypeComponent_Template_mat_icon_click_2_listener() {
              return ctx.closeClick("DASHBOARD360");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select your Customer Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerTypeComponent_div_11_Template, 9, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTypeComponent_Template_button_click_13_listener() {
              return ctx.goToOperations();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contiueButton() ? "buttonActive" : "buttonPassive")("disabled", ctx.disableBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.proceed);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: #818181;\n  width: 100%;\n  height: 100vh;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  border-radius: 10px;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  color: #c3c2c2;\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 18px;\n  text-align: center;\n  color: #000000;\n  padding-bottom: 5px;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.fingerImg[_ngcontent-%COMP%] {\n  font-size: 70px;\n  margin-right: 7%;\n  color: #456EFE;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  width: 160px;\n  background-color: #456EFE;\n  color: #FFFFFF;\n}\n\n.img[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 50px;\n  justify-content: center;\n}\n\n.insideTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  font-family: sans-serif;\n  color: #202020;\n  font-size: 14px;\n  padding: 10px;\n  font-weight: 400;\n}\n\n.doneButton[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 228px;\n  border-radius: 24px;\n  background-color: #d3d4d4;\n  color: white;\n}\n\n.done[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  padding: 15px;\n  overflow: auto;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 220px;\n  border-radius: 36px;\n  border: 1px solid #f8f8f8;\n  box-shadow: 4px 4px 4px #eeeeee;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n}\n\n.borderCard[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 220px;\n  border-radius: 36px;\n  border: 1px solid #f8f8f8;\n  box-shadow: 4px 4px 4px #eeeeee;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: row;\n  border-style: solid;\n  border-width: thin;\n  border-color: #456EFE;\n  cursor: pointer;\n}\n\n.buttonActive[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 228px;\n  border-radius: 24px;\n  background-color: #456EFE;\n  color: white;\n}\n\n.buttonPassive[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 228px;\n  border-radius: 24px;\n  background-color: #d3d4d4;\n  color: white;\n}\n\n.tile-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n\n.folder-title[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n\n.ht[_ngcontent-%COMP%] {\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3VzdG9tZXItdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtBQUNqQjs7QUFDRTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFFdkI7O0FBQUU7RUFDRSx5QkFBMEI7QUFHOUI7O0FBREU7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFJbkI7O0FBRkU7RUFDRSx1QkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQWtCO0FBS3RCOztBQUhFO0VBQ0Usa0JBQWtCO0FBTXRCOztBQUpFO0VBQ0UsY0FBYztFQUNkLHVCQUFzQjtFQUN0QixlQUFlO0FBT25COztBQUxFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBUWxCOztBQU5FO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFnQztFQUNoQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7QUFTbEI7O0FBUEU7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBVTNCOztBQVBFO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWU7QUFVbkI7O0FBUkU7RUFFRyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQVVqQjs7QUFSRTtFQUNFLFdBQVc7QUFXZjs7QUFUSTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7QUFZcEI7O0FBVkU7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFhdkI7O0FBVkU7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBYW5COztBQVhFO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7QUFjaEI7O0FBWkU7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQWVoQjs7QUFiRTtFQUNFLHVCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtBQWdCbkI7O0FBZEU7RUFDRSw2QkFBNkI7QUFpQmpDOztBQWZFO0VBQ0UsNkJBQTZCO0FBa0JqQzs7QUFoQkU7RUFFRSxZQUFXO0FBa0JmIiwiZmlsZSI6ImN1c3RvbWVyLXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4MTgxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAuY2hlcXVlY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLmNvbnRhaW57XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICBmbGV4LWVuZDtcclxuICB9XHJcbiAgLmJhY2tJY29ue1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIGNvbG9yOiAjYzNjMmMyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY2FyZC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gIH1cclxuICAuZmluZ2VySW1ne1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxuICAgIGNvbG9yOiAjNDU2RUZFO1xyXG4gIH1cclxuICAuYnV0dG9uQ2FuY2Vse1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAuaW1ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmluc2lkZVRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7IFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB9XHJcbiAgLmRvbmVCdXR0b25cclxuICB7XHJcbiAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgIHdpZHRoOiAyMjhweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2Q0ZDQ7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZG9uZXtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgfVxyXG4gICAgLmZ1bGwtd2lkdGh7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAuaW5wdXRDYXJke1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7IFxyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZjhmOGY4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggI2VlZWVlZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIFxyXG4gIH1cclxuICAuYm9yZGVyQ2FyZHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4OyBcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2Y4ZjhmODtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICNlZWVlZWU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmJ1dHRvbkFjdGl2ZXtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHdpZHRoOiAyMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYnV0dG9uUGFzc2l2ZXtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHdpZHRoOiAyMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkNGQ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAudGlsZS1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLmNhcmQtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gIC5mb2xkZXItdGl0bGV7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbiAgLmh0XHJcbiAge1xyXG4gICAgaGVpZ2h0OjE1cHg7XHJcbiAgfVxyXG4gICJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerTypeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customer-type',
            templateUrl: './customer-type.component.html',
            styleUrls: ['./customer-type.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Dj6q":
    /*!*************************************************************************!*\
      !*** ./src/app/views/others/confirm-dialog/confirm-dialog.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function Dj6q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(dialogRef, data) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.Title = "Confirmation!";
          this.nameInUpload = data.nameInUpload;
          this.nameInBasicTab = data.nameInBasicTab;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Close",
          value: function Close() {
            this.dialogRef.close("No");
          }
        }, {
          key: "Yes",
          value: function Yes() {
            this.dialogRef.close("Yes");
          }
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 20,
        vars: 3,
        consts: [[1, "parentDiv"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "full-width"], [1, "messageClass"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "full-width"], ["fxFlex", "49%", "fxFlex.xs", "100%"], ["tabindex", "-1", "mat-raised-button", "", 1, "full-width", "mat-elevation-z0", "yesBtn", 3, "click"], ["tabindex", "-2", "mat-raised-button", "", 1, "full-width", "mat-elevation-z0", "NoBtn", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " is not matching.Do you want to continue?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_15_listener() {
              return ctx.Yes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_18_listener() {
              return ctx.Close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name in Document: ", ctx.nameInUpload, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Entered Name: ", ctx.nameInBasicTab, "");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: [".yesBtn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #456EFE;\n  color: white;\n  padding: 0.2rem;\n}\n\n.NoBtn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #F5F5F5;\n  color: black;\n  padding: 0.2rem;\n}\n\n.parentDiv[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.messageClass[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ25COztBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUVuQjs7QUFBQTtFQUNJLGFBQWE7QUFHakI7O0FBREE7RUFDSSxpQkFBaUI7QUFJckIiLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueWVzQnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuLk5vQnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuLnBhcmVudERpdntcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLm1lc3NhZ2VDbGFzc3tcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-confirm-dialog',
            templateUrl: './confirm-dialog.component.html',
            styleUrls: ['./confirm-dialog.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FuEV":
    /*!*************************************************************************************************!*\
      !*** ./src/app/views/home/application-entry-stage/mandate-summary/mandate-summary.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: MandateSummaryComponent */

    /***/
    function FuEV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MandateSummaryComponent", function () {
        return MandateSummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");

      function MandateSummaryComponent_mat_card_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mode of Opertaion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Amount From");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Amount To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Required No. of Signatories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mandate_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mandate ", i_r2 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mandate_r1.modeOfOperation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mandate_r1.amountFrom, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mandate_r1.amountTo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mandate_r1.totalSignaturesRequired, "");
        }
      }

      var MandateSummaryComponent = /*#__PURE__*/function () {
        function MandateSummaryComponent(router, apiService, localstore, dialogRef, dataService) {
          _classCallCheck(this, MandateSummaryComponent);

          this.router = router;
          this.apiService = apiService;
          this.localstore = localstore;
          this.dialogRef = dialogRef;
          this.dataService = dataService;
          this.title = "Mandate Details";
        }

        _createClass(MandateSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.accountIdMandate = this.localstore.getItem('accountId');
            console.log("Account ID from Local Storage", this.accountIdMandate);
            this.gettingallmandateDetail(this.accountIdMandate);
          }
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
        }, {
          key: "gettingallmandateDetail",
          value: function gettingallmandateDetail(accountId) {
            var _this2 = this;

            this.apiService.gettingMandateDetails(this.accountIdMandate).subscribe(function (allTransactionResp) {
              console.log("All Transaction Details", allTransactionResp);
              _this2.allMandate = allTransactionResp;
            });
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.dialogRef.close();
            var payload = this.allMandate; // [
            //   {
            //     "mandateId": 2128,
            //     "productAccountId": 12345,
            //     "modeOfOperation": "Net Banking",
            //     "amountFrom": 1222.0,
            //     "amountTo": 212122.0,
            //     "totalSignaturesRequired": 2,
            //     "remarks": "Testing"
            //   }
            // ];

            this.dataService.sendNavParam(payload);
            this.router.navigate(["/home/application/mandate/".concat(this.accountIdMandate)]);
          }
        }]);

        return MandateSummaryComponent;
      }();

      MandateSummaryComponent.ɵfac = function MandateSummaryComponent_Factory(t) {
        return new (t || MandateSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
      };

      MandateSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MandateSummaryComponent,
        selectors: [["app-mandate-summary"]],
        decls: 13,
        vars: 2,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], ["fxLayout", "row"], [1, "para"], [1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100%"], ["class", "chequecard", 4, "ngFor", "ngForOf"], [1, "editButton", 3, "click"], [1, "chequecard"], [1, "valueText"], [1, "textIcon"], [1, "textSpan"], ["fxLayout", "column", "fxLayoutGap", "10%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "28%", "fxFlex.xs", "100%"], [1, "headingText"], ["fxFlex", "20%", "fxFlex.xs", "100%"], ["fxFlex", "30%", "fxFlex.xs", "100%"]],
        template: function MandateSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MandateSummaryComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MandateSummaryComponent_mat_card_10_Template, 36, 5, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MandateSummaryComponent_Template_p_click_11_listener() {
              return ctx.goToEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allMandate);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.boxCard[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 700px;\n  height: 250px;\n  border: 1px solid #e4e4e4;\n  padding: 10px;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 16px;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  padding-left: 10px;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.valueText[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: -4%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #6e6e6e;\n}\n\n.editButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 18px;\n  cursor: pointer;\n}\n\n.fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 90%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  height: auto;\n  border-radius: 5px;\n}\n\n.textIcon[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 20px !important;\n  color: #24CCA7;\n}\n\n.textSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #464545;\n  font-family: 'Montserrat';\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1hbmRhdGUtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUEwQjtBQUM5Qjs7QUFDQTtFQUNRLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0FBRXJCOztBQUNBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsZUFBZTtBQUVuQjs7QUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLGVBQWU7QUFHbkI7O0FBREE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixlQUFlO0FBSWpCOztBQUZBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFLcEI7O0FBSEE7RUFDSSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBTWxCOztBQUpBO0VBQ0ksY0FBYztFQUNkLHlCQUF3QjtFQUN4QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0FBT25COztBQUpBO0VBQ0ksdUJBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBT2Y7O0FBSkE7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0FBTXRCOztBQUhBO0VBQ0ksdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQiwwQkFBeUI7RUFDekIsY0FBYztBQU1sQjs7QUFKQTtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBd0I7RUFDeEIsZUFBZTtBQU9uQiIsImZpbGUiOiJtYW5kYXRlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbntcclxuICAgIGp1c3RpZnktY29udGVudDogIGZsZXgtZW5kO1xyXG59XHJcbi5ib3hDYXJkIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucGFyYXtcclxuICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5oZWFkaW5nVGV4dHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J01hbnJvcGUnO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi52YWx1ZVRleHR7XHJcbiAgY29sb3I6ICMwRjBGMEY7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxpbmV7XHJcbiAgICB3aWR0aDogOTQwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQlO1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbn1cclxuLmVkaXRCdXR0b257XHJcbiAgICBjb2xvcjogIzQ1NkVGRTtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZ1bGxjYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLmNoZXF1ZWNhcmR7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRleHRJY29ue1xyXG4gICAgaGVpZ2h0OjE2cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzI0Q0NBNztcclxufVxyXG4udGV4dFNwYW57XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOjFweDtcclxuICAgIGNvbG9yOiAjNDY0NTQ1O1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MandateSummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mandate-summary',
            templateUrl: './mandate-summary.component.html',
            styleUrls: ['./mandate-summary.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Mxxu":
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/others/kyc-verification-method/kyc-verification-method.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: KycVerificationMethodComponent */

    /***/
    function Mxxu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycVerificationMethodComponent", function () {
        return KycVerificationMethodComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");

      function KycVerificationMethodComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycVerificationMethodComponent_div_11_Template_mat_card_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.goToService(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", folder_r1.flag ? "borderCard" : "inputCard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", folder_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r1.title);
        }
      }

      var KycVerificationMethodComponent = /*#__PURE__*/function () {
        function KycVerificationMethodComponent(router, dialogRef) {
          _classCallCheck(this, KycVerificationMethodComponent);

          this.router = router;
          this.dialogRef = dialogRef; // flag1: boolean;
          // flag2: boolean;
          // flag3: boolean;
          // index: any;
          // toggle = true;
          // status = 'Enable'; 

          this.flag = true;
          this.proceed = "Proceed";
          this.disableBtn = true;
          this.active = {};
          this.folders = [{
            title: "Branch Verification",
            id: 1,
            flag: false,
            link: 'others/kyc',
            imgUrl: "assets/images/branch.png"
          }, {
            title: "Video Verification",
            id: 2,
            flag: false,
            link: '/video-verification/verification',
            imgUrl: "assets/images/agency.png"
          }, {
            title: "KYC Registration Agency",
            id: 3,
            flag: false,
            link: 'others/cheque-deposit',
            imgUrl: "assets/images/vdio.png"
          }];
        }

        _createClass(KycVerificationMethodComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeClick",
          value: function closeClick() {
            console.log("close click");
            this.dialogRef.close(); // [routerLink]="['/others/kyc']" 
            // this.dialogRef.close();
            // this.router.navigateByUrl('/others/kyc'); 
          } //   focus(index){
          //     console.log(index);
          //     if(index==1)
          //     {
          //     this.flag1=true;
          //     this.flag2=false;
          //     this.flag3=false;
          //     this.index=index;
          //   }
          //   if(index==2)
          //   {
          //   this.flag1=false;
          //   this.flag2=true;
          //   this.flag3=false;
          //   this.index=index;
          // }
          // if(index==3)
          // {
          // this.flag1=false;
          // this.flag2=false;
          // this.flag3=true;
          // this.index=index;
          // }
          // }
          // img()
          // {
          //   console.log("clicked")
          // }
          // goToVerification(i){
          // console.log("Test");
          // }
          // proceed()
          // {
          //   console.log("index value",this.index);
          //   if(this.index==1)
          //   {
          //     console.log("enter inside if")
          //        this.router.navigateByUrl('/others/kyc');
          //   }
          //   this.closeClick();
          // }

        }, {
          key: "goToService",
          value: function goToService(index) {
            if (this.active !== index) {
              this.active = index;
              this.folders.forEach(function (item) {
                item.flag = false;
              });
            }

            this.folders[index].flag = !this.folders[index].flag;
          }
        }, {
          key: "contiueButton",
          value: function contiueButton() {
            console.log(this.disableBtn);
            this.enableList = this.folders.filter(function (x) {
              return x.flag === true;
            });

            if (this.enableList.length > 0) {
              console.log(this.enableList);
              this.disableBtn = false;
              return true;
            } else {
              console.log(this.enableList, "false");
              return false;
            }
          }
        }, {
          key: "goToOperations",
          value: function goToOperations() {
            this.dialogRef.close();
            this.router.navigate([this.enableList[0].link]);
          }
        }]);

        return KycVerificationMethodComponent;
      }();

      KycVerificationMethodComponent.ɵfac = function KycVerificationMethodComponent_Factory(t) {
        return new (t || KycVerificationMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      KycVerificationMethodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: KycVerificationMethodComponent,
        selectors: [["app-kyc-verification-method"]],
        decls: 15,
        vars: 4,
        consts: [["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], [1, "card-title"], [1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "full-width"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "center stretch", 1, "done"], ["mat-flat-button", "", "tabindex", "-1", 3, "ngClass", "disabled", "click"], ["fxLayout", "column", "fxLayoutAlign", "space-around center"], [1, "card-container"], [3, "ngClass", "click"], [1, "img"], ["alt", "", 1, "signnowImg", 3, "src"], [1, "folder-title"], [1, "insideTitle"]],
        template: function KycVerificationMethodComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycVerificationMethodComponent_Template_mat_icon_click_2_listener() {
              return ctx.closeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please select KYC verification method");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KycVerificationMethodComponent_div_11_Template, 9, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycVerificationMethodComponent_Template_button_click_13_listener() {
              return ctx.goToOperations();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contiueButton() ? "buttonActive" : "buttonPassive")("disabled", ctx.disableBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.proceed);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: #818181;\n  width: 100%;\n  height: 100vh;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  border-radius: 10px;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  color: #c3c2c2;\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 18px;\n  text-align: center;\n  color: #000000;\n  margin-top: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.fingerImg[_ngcontent-%COMP%] {\n  font-size: 70px;\n  margin-right: 7%;\n  color: #456EFE;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  width: 160px;\n  background-color: #456EFE;\n  color: #FFFFFF;\n}\n\n.img[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 50px;\n  justify-content: center;\n}\n\n.insideTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  font-family: sans-serif;\n  color: #202020;\n  font-size: 14px;\n  padding: 10px;\n  font-weight: 400;\n}\n\n.doneButton[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 228px;\n  border-radius: 24px;\n  background-color: #d3d4d4;\n  color: white;\n}\n\n.done[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  padding: 15px;\n  overflow: auto;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 220px;\n  border-radius: 36px;\n  border: 1px solid #f8f8f8;\n  box-shadow: 4px 4px 4px #eeeeee;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n}\n\n.borderCard[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 220px;\n  border-radius: 36px;\n  border: 1px solid #f8f8f8;\n  box-shadow: 4px 4px 4px #eeeeee;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: row;\n  border-style: solid;\n  border-width: thin;\n  border-color: #456EFE;\n  cursor: pointer;\n}\n\n.buttonActive[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 228px;\n  border-radius: 24px;\n  background-color: #456EFE;\n  color: white;\n}\n\n.buttonPassive[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 228px;\n  border-radius: 24px;\n  background-color: #d3d4d4;\n  color: white;\n}\n\n.tile-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n\n.folder-title[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n\n.ht[_ngcontent-%COMP%] {\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLXZlcmlmaWNhdGlvbi1tZXRob2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFFckI7O0FBQUE7RUFDRSx5QkFBMEI7QUFHNUI7O0FBREE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFJakI7O0FBRkE7RUFDRSx1QkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWU7QUFLakI7O0FBSEE7RUFDRSxrQkFBa0I7QUFNcEI7O0FBSkE7RUFDRSxjQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLGVBQWU7QUFPakI7O0FBTEE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFRaEI7O0FBTkE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQWdDO0VBQ2hDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztBQVNoQjs7QUFQQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFVekI7O0FBUEE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZTtBQVVqQjs7QUFSQTtFQUVHLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0FBVWY7O0FBUkE7RUFDRSxXQUFXO0FBV2I7O0FBVEU7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0FBWWxCOztBQVZBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBYXJCOztBQVZBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQWFqQjs7QUFYQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0FBY2Q7O0FBWkE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQWVkOztBQWJBO0VBQ0UsdUJBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0FBZ0JqQjs7QUFkQTtFQUNFLDZCQUE2QjtBQWlCL0I7O0FBZkE7RUFDRSw2QkFBNkI7QUFrQi9COztBQWhCQTtFQUVFLFlBQVc7QUFrQmIiLCJmaWxlIjoia3ljLXZlcmlmaWNhdGlvbi1tZXRob2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxODE4MTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jaGVxdWVjYXJke1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW57XHJcbiAganVzdGlmeS1jb250ZW50OiAgZmxleC1lbmQ7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgY29sb3I6ICNjM2MyYzI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tdG9wOjEycHg7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7IFxyXG59XHJcbi5maW5nZXJJbWd7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgY29sb3I6ICM0NTZFRkU7XHJcbn1cclxuLmJ1dHRvbkNhbmNlbHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5pbWd7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnNpZGVUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBmb250LXNpemU6IDE0cHg7IFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG59XHJcbi5kb25lQnV0dG9uXHJcbntcclxuICAgaGVpZ2h0OiA0NHB4O1xyXG4gICB3aWR0aDogMjI4cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNkM2Q0ZDQ7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZG9uZXtcclxuICBwYWRkaW5nOiAyJTtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGh7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uaW5wdXRDYXJke1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7IFxyXG4gIGJvcmRlcjoxcHggc29saWQgI2Y4ZjhmODtcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjZWVlZWVlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgXHJcbn1cclxuLmJvcmRlckNhcmR7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzZweDsgXHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZjhmOGY4O1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICNlZWVlZWU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItY29sb3I6ICM0NTZFRkU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idXR0b25BY3RpdmV7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHdpZHRoOiAyMjhweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idXR0b25QYXNzaXZle1xyXG4gIGhlaWdodDogNDRweDtcclxuICB3aWR0aDogMjI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkNGQ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGlsZS1jb250YWluZXJ7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmZvbGRlci10aXRsZXtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uaHRcclxue1xyXG4gIGhlaWdodDoxNXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KycVerificationMethodComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-kyc-verification-method',
            templateUrl: './kyc-verification-method.component.html',
            styleUrls: ['./kyc-verification-method.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "To2v":
    /*!***************************************************************************************!*\
      !*** ./src/app/views/home/limit-entry-stage/alert-diaglog/alert-diaglog.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: AlertDiaglogComponent */

    /***/
    function To2v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDiaglogComponent", function () {
        return AlertDiaglogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var AlertDiaglogComponent = /*#__PURE__*/function () {
        function AlertDiaglogComponent(dialogRef) {
          _classCallCheck(this, AlertDiaglogComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(AlertDiaglogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Yes",
          value: function Yes() {
            this.dialogRef.close("Yes");
          }
        }]);

        return AlertDiaglogComponent;
      }();

      AlertDiaglogComponent.ɵfac = function AlertDiaglogComponent_Factory(t) {
        return new (t || AlertDiaglogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      AlertDiaglogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertDiaglogComponent,
        selectors: [["app-alert-diaglog"]],
        decls: 10,
        vars: 0,
        consts: [[1, "parentDiv"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "full-width"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "full-width"], ["fxFlex", "20%", "fxFlex.xs", "100%"], ["tabindex", "-1", "mat-raised-button", "", 1, "full-width", "mat-elevation-z0", "yesBtn", 3, "click"]],
        template: function AlertDiaglogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Either Secured or Unsecured Overdraft Details are Mandatory.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDiaglogComponent_Template_button_click_8_listener() {
              return ctx.Yes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: [".yesBtn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #456EFE;\n  color: white;\n  padding: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFsZXJ0LWRpYWdsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImFsZXJ0LWRpYWdsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueWVzQnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDiaglogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alert-diaglog',
            templateUrl: './alert-diaglog.component.html',
            styleUrls: ['./alert-diaglog.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gbAy":
    /*!******************************************************************************************************!*\
      !*** ./src/app/views/home/application-assessment/scoreboard-details/scoreboard-details.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ScoreboardDetailsComponent */

    /***/
    function gbAy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreboardDetailsComponent", function () {
        return ScoreboardDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var ScoreboardDetailsComponent = /*#__PURE__*/function () {
        function ScoreboardDetailsComponent(dialogRef, router, ls, apiService, dataService) {
          _classCallCheck(this, ScoreboardDetailsComponent);

          this.dialogRef = dialogRef;
          this.router = router;
          this.ls = ls;
          this.apiService = apiService;
          this.dataService = dataService;
          this.title = "Assessment Report";
        }

        _createClass(ScoreboardDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.accountId = this.ls.getItem('accountId');
            console.log(this.accountId, "AccountId");
            this.getAllData(this.accountId);
          }
        }, {
          key: "getAllData",
          value: function getAllData(id) {
            var _this3 = this;

            // id == '' || id == null ? id = 1234 : id;
            this.apiService.getAssessmentReportDetails(id).subscribe(function (response) {
              _this3.assessmentReportSummary = response;
              console.log(_this3.assessmentReportSummary);
            });
          }
        }, {
          key: "Close",
          value: function Close() {
            this.dialogRef.close();
          }
        }, {
          key: "goAndEdit",
          value: function goAndEdit() {
            console.log(this.assessmentReportSummary);
            this.dialogRef.close();
            this.dataService.sendNavParam(this.assessmentReportSummary);
            this.router.navigate(['/home/application/assessment/report/', this.accountId]);
          }
        }]);

        return ScoreboardDetailsComponent;
      }();

      ScoreboardDetailsComponent.ɵfac = function ScoreboardDetailsComponent_Factory(t) {
        return new (t || ScoreboardDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
      };

      ScoreboardDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScoreboardDetailsComponent,
        selectors: [["app-scoreboard-details"]],
        decls: 61,
        vars: 6,
        consts: [["fxLayout", "column", "fxLayoutAlign", "space-between start", "fxLayoutGap", "10px", 1, "full-width"], ["fxFlex", "100%", "fxFlex.xs", "100%", 1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [2, "padding", "1rem 1rem 0.5rem 1rem", "font-size", "large"], [2, "font-size", "medium", "color", "#a9a7a7", "cursor", "pointer", 3, "click"], ["fxFlex", "100%", "fxFlex.xs", "100%", 1, "full-width", 2, "border", "1px solid rgb(249 245 245)", "border-radius", "5px"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly start", 1, "full-width"], [1, "full-width"], ["fxLayout", "row wrap", 1, "full-width", 2, "padding", "2rem"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [2, "color", "#102245", "opacity", "64%", "font-size", "small", "font-family", "sans-serif"], [2, "padding-top", "5px"], [2, "font-size", "medium"], [2, "background-color", "white"], [2, "padding", "1rem 1rem"], ["mat-stroked-button", "", "tabindex", "-1", 2, "border", "transparent", "color", "#456EFE", "background-color", "#ffffff", "text-decoration", "underline", 3, "click"]],
        template: function ScoreboardDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreboardDetailsComponent_Template_mat_icon_click_7_listener() {
              return ctx.Close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Limit Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Overdraft Limit Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Recommended OverDraft Limit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Limit Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Limit End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreboardDetailsComponent_Template_button_click_59_listener() {
              return ctx.goAndEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Edit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assessmentReportSummary.limitId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assessmentReportSummary.overdraftLimitAmount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assessmentReportSummary.recommendedOverdraftLimit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assessmentReportSummary.limitStartDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assessmentReportSummary.limitEndDate);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY29yZWJvYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreboardDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-scoreboard-details',
            templateUrl: './scoreboard-details.component.html',
            styleUrls: ['./scoreboard-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "laYw":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/dialogs/dialog.service.ts ***!
      \***********************************************************/

    /*! exports provided: DialogService */

    /***/
    function laYw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogService", function () {
        return DialogService;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api.service */
      "nm5K");
      /* harmony import */


      var app_views_home_application_entry_stage_account_service_summary_account_service_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/views/home/application-entry-stage/account-service-summary/account-service-summary.component */
      "omPt");
      /* harmony import */


      var app_views_home_application_entry_stage_mandate_summary_mandate_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/views/home/application-entry-stage/mandate-summary/mandate-summary.component */
      "FuEV");
      /* harmony import */


      var app_views_home_application_entry_stage_nominees_summary_nominees_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/views/home/application-entry-stage/nominees-summary/nominees-summary.component */
      "lv/R");
      /* harmony import */


      var app_views_home_application_entry_stage_account_details_summary_account_details_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/views/home/application-entry-stage/account-details-summary/account-details-summary.component */
      "4X5X");
      /* harmony import */


      var app_views_home_application_entry_stage_customer_information_details_summary_customer_information_details_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/views/home/application-entry-stage/customer-information-details-summary/customer-information-details-summary.component */
      "m+Hc");
      /* harmony import */


      var app_views_home_application_assessment_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/views/home/application-assessment/report-details/report-details.component */
      "stbE");
      /* harmony import */


      var app_views_home_application_assessment_scoreboard_details_scoreboard_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/views/home/application-assessment/scoreboard-details/scoreboard-details.component */
      "gbAy");
      /* harmony import */


      var app_views_others_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/views/others/confirm-dialog/confirm-dialog.component */
      "Dj6q");
      /* harmony import */


      var app_views_others_kyc_verification_method_kyc_verification_method_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/views/others/kyc-verification-method/kyc-verification-method.component */
      "Mxxu");
      /* harmony import */


      var app_views_tasks_kyc_branch_verify_summary_kyc_branch_verify_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/views/tasks/kyc-branch-verify-summary/kyc-branch-verify-summary.component */
      "yAWA");
      /* harmony import */


      var app_views_others_new_customer_onboarding_success_dialogue_success_dialogue_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/views/others/new-customer-onboarding/success-dialogue/success-dialogue.component */
      "7CNx");
      /* harmony import */


      var app_views_others_customer_type_customer_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/views/others/customer-type/customer-type.component */
      "ADVx");
      /* harmony import */


      var app_views_home_limit_entry_stage_alert_diaglog_alert_diaglog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/views/home/limit-entry-stage/alert-diaglog/alert-diaglog.component */
      "To2v");

      var DialogService = /*#__PURE__*/function () {
        function DialogService(dialog, apiService, _document) {
          _classCallCheck(this, DialogService);

          this.dialog = dialog;
          this.apiService = apiService;
          this._document = _document;
        }

        _createClass(DialogService, [{
          key: "AccountOpenComponent",
          value: function AccountOpenComponent() {
            throw new Error('Method not implemented.');
          }
        }, {
          key: "accountserviceDialog",
          value: function accountserviceDialog() {
            var tokenDialog = this.dialog.open(app_views_home_application_entry_stage_account_service_summary_account_service_summary_component__WEBPACK_IMPORTED_MODULE_4__["AccountServiceSummaryComponent"], {
              data: {},
              width: '60%',
              height: '57%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true
            });
            tokenDialog.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "mandateDialog",
          value: function mandateDialog() {
            console.log("Logout Response");
            var dialogBox = this.dialog.open(app_views_home_application_entry_stage_mandate_summary_mandate_summary_component__WEBPACK_IMPORTED_MODULE_5__["MandateSummaryComponent"], {
              data: {},
              width: '65%',
              height: '65%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true
            });
            dialogBox.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "nomineeDialog",
          value: function nomineeDialog() {
            console.log("test");
            var dialogRef = this.dialog.open(app_views_home_application_entry_stage_nominees_summary_nominees_summary_component__WEBPACK_IMPORTED_MODULE_6__["NomineesSummaryComponent"], {
              width: '65%',
              height: '70%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "qualitativeSummaryDialog",
          value: function qualitativeSummaryDialog() {
            var dialogRef = this.dialog.open(app_views_home_application_assessment_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_9__["ReportDetailsComponent"], {
              width: '55%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "assessmentSummaryDialog",
          value: function assessmentSummaryDialog() {
            var dialogRef = this.dialog.open(app_views_home_application_assessment_scoreboard_details_scoreboard_details_component__WEBPACK_IMPORTED_MODULE_10__["ScoreboardDetailsComponent"], {
              width: '55%',
              maxHeight: '90%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "accountDetailsSummaryDialog",
          value: function accountDetailsSummaryDialog() {
            var dialogRef = this.dialog.open(app_views_home_application_entry_stage_account_details_summary_account_details_summary_component__WEBPACK_IMPORTED_MODULE_7__["AccountDetailsSummaryComponent"], {
              width: '60%',
              maxHeight: '90%',
              backdropClass: 'dialog-bg-trans',
              height: '90%',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "kycBranchVerificationSummary",
          value: function kycBranchVerificationSummary() {
            var dialogRef = this.dialog.open(app_views_tasks_kyc_branch_verify_summary_kyc_branch_verify_summary_component__WEBPACK_IMPORTED_MODULE_13__["KycBranchVerifySummaryComponent"], {
              width: '80%',
              maxHeight: '100%',
              // height: '500%',
              backdropClass: 'dialog-bg-trans',
              // height: '75%',
              disableClose: true
            }); // this.addClientDialogRef.afterClosed().subscribe(() => { this.getAllClients(); } );

            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed', result);
              return result;
            });
          }
        }, {
          key: "customerInformationDetailsSummaryDialog",
          value: function customerInformationDetailsSummaryDialog() {
            var dialogRef = this.dialog.open(app_views_home_application_entry_stage_customer_information_details_summary_customer_information_details_summary_component__WEBPACK_IMPORTED_MODULE_8__["CustomerInformationDetailsSummaryComponent"], {
              width: '75%',
              backdropClass: 'dialog-bg-trans',
              height: '90%',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "openKycVerificationMethod",
          value: function openKycVerificationMethod() {
            var dialogRef = this.dialog.open(app_views_others_kyc_verification_method_kyc_verification_method_component__WEBPACK_IMPORTED_MODULE_12__["KycVerificationMethodComponent"], {
              width: '75%',
              backdropClass: 'dialog-bg-trans',
              maxHeight: '90%',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "openCustomerType",
          value: function openCustomerType() {
            var dialogRef = this.dialog.open(app_views_others_customer_type_customer_type_component__WEBPACK_IMPORTED_MODULE_15__["CustomerTypeComponent"], {
              width: '55%',
              backdropClass: 'dialog-bg-trans',
              maxHeight: '90%',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "confirmationDialog",
          value: function confirmationDialog(namePancard, name) {
            var dialogRef = this.dialog.open(app_views_others_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], {
              width: '40%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true,
              data: {
                nameInUpload: namePancard,
                nameInBasicTab: name
              }
            });
            return dialogRef.afterClosed();
          }
        }, {
          key: "customerOnboardingSuccessDialogue",
          value: function customerOnboardingSuccessDialogue(screenName, id) {
            var dialogRef = this.dialog.open(app_views_others_new_customer_onboarding_success_dialogue_success_dialogue_component__WEBPACK_IMPORTED_MODULE_14__["SuccessDialogueComponent"], {
              width: '65%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true,
              data: {
                screenName: screenName,
                id: id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "alertDialog",
          value: function alertDialog() {
            console.log("inside alertDialog");
            var dialogRef = this.dialog.open(app_views_home_limit_entry_stage_alert_diaglog_alert_diaglog_component__WEBPACK_IMPORTED_MODULE_16__["AlertDiaglogComponent"], {
              width: '40%',
              backdropClass: 'dialog-bg-trans',
              disableClose: true
            });
            return dialogRef.afterClosed();
          }
        }]);

        return DialogService;
      }();

      DialogService.ɵfac = function DialogService_Factory(t) {
        return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DialogService,
        factory: DialogService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lv/R":
    /*!***************************************************************************************************!*\
      !*** ./src/app/views/home/application-entry-stage/nominees-summary/nominees-summary.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: NomineesSummaryComponent */

    /***/
    function lvR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NomineesSummaryComponent", function () {
        return NomineesSummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");

      function NomineesSummaryComponent_mat_card_10_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gaurdian Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Relationship Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var nominee_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nominee_r1.guardianDetails[0].firstName + " " + nominee_r1.guardianDetails[0].lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nominee_r1.guardianDetails[0].relationshipType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nominee_r1.guardianDetails[0].dateOfBirth);
        }
      }

      function NomineesSummaryComponent_mat_card_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Relationship Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-hint", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, NomineesSummaryComponent_mat_card_10_div_52_Template, 20, 3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var nominee_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nominee ", i_r2 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nominee_r1.firstName + " " + nominee_r1.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nominee_r1.mobileNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nominee_r1.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nominee_r1.building + "," + nominee_r1.street + "," + nominee_r1.city + "," + nominee_r1.state + "," + nominee_r1.country, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nominee_r1.dateOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nominee_r1.relationshipType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nominee_r1.isNomineeMinor && (nominee_r1.guardianDetails == null ? null : nominee_r1.guardianDetails.length));
        }
      }

      var NomineesSummaryComponent = /*#__PURE__*/function () {
        function NomineesSummaryComponent(router, apiService, localstore, dialogRef, dataService) {
          _classCallCheck(this, NomineesSummaryComponent);

          this.router = router;
          this.apiService = apiService;
          this.localstore = localstore;
          this.dialogRef = dialogRef;
          this.dataService = dataService;
          this.title = "Nominee Details";
          this.gaurdianDetails = true;
        }

        _createClass(NomineesSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productAccountId = this.localstore.getItem('accountId');
            console.log("Account ID from Local Storage", this.productAccountId);
            this.gettingallnomineeDetail(this.productAccountId);
          }
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
        }, {
          key: "gettingallnomineeDetail",
          value: function gettingallnomineeDetail(accountId) {
            var _this4 = this;

            this.apiService.gettingNomineeDetails(this.productAccountId).subscribe(function (allTransactionResp) {
              console.log("All Transaction Details", allTransactionResp, allTransactionResp.nominees[0].isNomineeMinor);
              _this4.allNominee = allTransactionResp.nominees;
            });
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.dialogRef.close();
            var payload = this.allNominee;
            this.dataService.sendNavParam(payload);
            this.router.navigate(["/home/application/nominee/add/".concat(this.productAccountId)]);
          }
        }]);

        return NomineesSummaryComponent;
      }();

      NomineesSummaryComponent.ɵfac = function NomineesSummaryComponent_Factory(t) {
        return new (t || NomineesSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
      };

      NomineesSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NomineesSummaryComponent,
        selectors: [["app-nominees-summary"]],
        decls: 13,
        vars: 2,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], ["fxLayout", "row"], [1, "para"], [1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100%"], ["class", "chequecard", 4, "ngFor", "ngForOf"], [1, "editButton", 3, "click"], [1, "chequecard"], [1, "valueText"], [1, "nomineeIcon"], [1, "nomineeSpan"], ["fxLayout", "column", "fxLayoutGap", "6%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "50%", "fxFlex.xs", "100%", 1, "inputCardclass"], [1, "inputCard"], [1, "textIcon"], [1, "textSpan"], ["fxFlex", "30%", "fxFlex.xs", "100%", 1, "inputCardclass"], [1, "headingText"], ["fxFlex", "30%", "fxFlex.xs", "100%", "class", "inputCardclass", 4, "ngIf"]],
        template: function NomineesSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NomineesSummaryComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NomineesSummaryComponent_mat_card_10_Template, 53, 8, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NomineesSummaryComponent_Template_p_click_11_listener() {
              return ctx.goToEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allNominee);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #6e6e6e;\n}\n\n.fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 90%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  height: auto;\n  border-radius: 5px;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 16px;\n}\n\n.editButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 18px;\n  cursor: pointer;\n}\n\n.boxInside[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border: #0F0F0F;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n  height: 200px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8,\r 0 1px 0 #f8f8f8,\r 0 5px 8px 0 #e9e9e9;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  padding-left: 10px;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.valueText[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n}\n\n.iconInline[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.textIcon[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 16px !important;\n  color: #B2B2B2;\n}\n\n.textSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.nomineeIcon[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 20px !important;\n  color: #24CCA7;\n}\n\n.nomineeSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #464545;\n  font-family: 'Montserrat';\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vbWluZWVzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJub21pbmVlcy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQTBCO0FBQzlCOztBQUNBO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztBQUVsQjs7QUFDQTtFQUNJLHVCQUFvQztFQUNwQyxXQUFXO0VBQ1gsV0FBVztBQUVmOztBQUFBO0VBRUksWUFBWTtFQUNaLGtCQUFrQjtBQUV0Qjs7QUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGVBQWU7QUFHbkI7O0FBREE7RUFDSSxjQUFjO0VBQ2QseUJBQXdCO0VBQ3hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFJbkI7O0FBRkE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFLbkI7O0FBSEE7RUFDSSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFNakI7O0FBSkE7RUFDSSwwRUNRZ0I7QURHcEI7O0FDQUE7RURGQyxjQUFBO0VBTUMsa0JBQWU7RUFMakIsc0JBQUE7RUNLRSxlQUFlO0FER2pCOztBQ0FBO0VESEMsY0FBQTtFQU9DLGtCQUFlO0VBTmpCLHlCQUFBO0VDTUUsZUFBZTtBREdqQjs7QUFMQTtFQ01FLHFCQUFxQjtBREd2Qjs7QUNBQTtFREpDLHVCQUFBO0VBUUMsc0JBQWM7RUFQaEIsMEJBQUE7RUNPRSxjQUFjO0FER2hCOztBQ0FBO0VETEksa0JBQVc7RUFDZCxnQkFBQTtFQVNDLGNBQUE7RUFSRixzQkFBQTtFQ1FFLGVBQWU7QURHakI7O0FDQUE7RUROQyx1QkFBQTtFQVVDLHNCQUFjO0VBVGhCLDBCQUFBO0VDU0UsY0FBYztBREdoQjs7QUNBQTtFRFBJLGtCQUFXO0VBQ2QsZ0JBQUE7RUFXQyxjQUFBO0VBQ0YseUJBQUE7RUNERSxlQUFlO0FBQ2pCIiwiZmlsZSI6Im5vbWluZWVzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbntcclxuICAgIGp1c3RpZnktY29udGVudDogIGZsZXgtZW5kO1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgIFxyXG59XHJcbi5mdWxsY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ucGFyYXtcclxuICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5lZGl0QnV0dG9ue1xyXG4gICAgY29sb3I6ICM0NTZFRkU7XHJcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJveEluc2lkZXtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAjMEYwRjBGO1xyXG59XHJcbi5pbnB1dENhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmlucHV0Q2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgMCAxcHggMCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgMCA1cHggOHB4IDAgI2U5ZTllOTtcclxufVxyXG4uaGVhZGluZ1RleHR7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4udmFsdWVUZXh0e1xyXG4gICAgY29sb3I6ICMwRjBGMEY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmljb25JbmxpbmV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50ZXh0SWNvbntcclxuICAgIGhlaWdodDoxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNCMkIyQjI7XHJcbn1cclxuLnRleHRTcGFue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXRvcDoxcHg7XHJcbiAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4ubm9taW5lZUljb257XHJcbiAgICBoZWlnaHQ6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOjIwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjRDQ0E3O1xyXG59XHJcbi5ub21pbmVlU3BhbntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6MXB4O1xyXG4gICAgY29sb3I6ICM0NjQ1NDU7XHJcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbiIsIi5jb250YWluIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmJhY2tJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwJSAwJSAwJSAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cblxuLmZ1bGxjYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmNoZXF1ZWNhcmQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBhcmEge1xuICBjb2xvcjogIzJiMmIyYjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5lZGl0QnV0dG9uIHtcbiAgY29sb3I6ICM0NTZFRkU7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94SW5zaWRlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAjMEYwRjBGO1xufVxuXG4uaW5wdXRDYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmlucHV0Q2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4ICNmOGY4ZjgsXHIgMCAxcHggMCAjZjhmOGY4LFxyIDAgNXB4IDhweCAwICNlOWU5ZTk7XG59XG5cbi5oZWFkaW5nVGV4dCB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnZhbHVlVGV4dCB7XG4gIGNvbG9yOiAjMEYwRjBGO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmljb25JbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZXh0SWNvbiB7XG4gIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNCMkIyQjI7XG59XG5cbi50ZXh0U3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgY29sb3I6ICM5NDk0OTQ7XG4gIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLm5vbWluZWVJY29uIHtcbiAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI0Q0NBNztcbn1cblxuLm5vbWluZWVTcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogIzQ2NDU0NTtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NomineesSummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nominees-summary',
            templateUrl: './nominees-summary.component.html',
            styleUrls: ['./nominees-summary.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "m+Hc":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/views/home/application-entry-stage/customer-information-details-summary/customer-information-details-summary.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: CustomerInformationDetailsSummaryComponent */

    /***/
    function mHc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerInformationDetailsSummaryComponent", function () {
        return CustomerInformationDetailsSummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/application-entry-stage.service */
      "qMRc");
      /* harmony import */


      var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/app-loader/app-loader.service */
      "3sEA");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../avatar-photo/avatar-photo.component */
      "vV0b");

      function CustomerInformationDetailsSummaryComponent_mat_card_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-avatar-photo", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Other Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-hint", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-hint", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Citizenship By");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-hint", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "ID Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Residence Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-hint", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Occupation Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-hint", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Unique Id Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", (customer_r1 == null ? null : customer_r1.firstName) + " " + (customer_r1 == null ? null : customer_r1.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (customer_r1 == null ? null : customer_r1.firstName) + " " + (customer_r1 == null ? null : customer_r1.lastName), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("CIF ", (customer_r1 == null ? null : customer_r1.cifNumber) != null ? "#" + (customer_r1 == null ? null : customer_r1.cifNumber) : "- n/a", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", customer_r1 == null ? null : customer_r1.landlineNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", customer_r1 == null ? null : customer_r1.primaryEmailAdress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", customer_r1 == null ? null : customer_r1.userAddress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1 == null ? null : customer_r1.dateOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", customer_r1 == null ? null : customer_r1.nationality, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", customer_r1 == null ? null : customer_r1.custIdProofs[0].idType, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.residenceStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", customer_r1.occupationType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", customer_r1 == null ? null : customer_r1.custIdProofs[0].idNumber, " ");
        }
      }

      var CustomerInformationDetailsSummaryComponent = /*#__PURE__*/function () {
        function CustomerInformationDetailsSummaryComponent(dialogRef, router, localstore, apiService, loader) {
          _classCallCheck(this, CustomerInformationDetailsSummaryComponent);

          this.dialogRef = dialogRef;
          this.router = router;
          this.localstore = localstore;
          this.apiService = apiService;
          this.loader = loader;
          this.title = "Customer Information Details";
          this.imgUrl = "assets/images/flagUSA.jpg";
        }

        _createClass(CustomerInformationDetailsSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productAccountIdCust = this.localstore.getItem('accountId');
            console.log("Account ID from Local Storage", this.productAccountIdCust);
            this.getCustomerInformationDetails();
          }
        }, {
          key: "getCustomerInformationDetails",
          value: function getCustomerInformationDetails() {
            var _this5 = this;

            this.loader.open();
            this.apiService.fetchAccountDependentInfo(this.productAccountIdCust).subscribe(function (allCustomernResp) {
              _this5.loader.close();

              _this5.customerSummary = allCustomernResp.data;
              _this5.customerId = allCustomernResp.data[0].customerId;
              _this5.Custownership = allCustomernResp.data[0].ownership;
              _this5.CustnumOfApplicants = allCustomernResp.data[0].numOfApplicants;
              _this5.customerDetails = allCustomernResp.data;

              for (var i = 0; i < _this5.customerDetails.length; i++) {
                var userAddress = _this5.customerDetails[i].userAddress;
                var pickOneAddress = void 0;
                var Address = "";

                if (userAddress.length > 1) {
                  pickOneAddress = userAddress.find(function (item) {
                    return item.addressType == "Permanent";
                  });
                } else {
                  pickOneAddress = userAddress[0];
                }

                Address = pickOneAddress.city + "," + pickOneAddress.state + "," + pickOneAddress.zipCode + "," + pickOneAddress.country;
                _this5.customerDetails[i].userAddress = Address;
              }
            }, function (err) {
              _this5.loader.close();
            });
          }
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.dialogRef.close();
            this.router.navigate(["/home/application/customer-information/".concat(this.productAccountIdCust)]);
          }
        }]);

        return CustomerInformationDetailsSummaryComponent;
      }();

      CustomerInformationDetailsSummaryComponent.ɵfac = function CustomerInformationDetailsSummaryComponent_Factory(t) {
        return new (t || CustomerInformationDetailsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationEntryStageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"]));
      };

      CustomerInformationDetailsSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomerInformationDetailsSummaryComponent,
        selectors: [["app-customer-information-details-summary"]],
        decls: 35,
        vars: 4,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], ["fxLayout", "row"], [1, "paraFont"], [1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100%"], [1, "chequecard"], ["fxLayout", "column", "fxLayoutGap", "6%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "headingText"], [1, "valueText"], ["class", "chequecard", 4, "ngFor", "ngForOf"], [1, "editButton", 3, "click"], ["fxFlex", "5%", "fxFlex.xs", "100%", "fxLayoutAlign", "end start", 1, "inputCardclass"], [3, "name"], ["fxFlex", "30%", "fxFlex.xs", "100%", 1, "inputCardclass"], [1, "inputCard"], [1, "valueTextName"], [1, "textSpanCIF"], [1, "textIcon"], [1, "textSpan"], ["fxFlex", "", "fxFlex.xs", "100%", 1, "inputCardclass"]],
        template: function CustomerInformationDetailsSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerInformationDetailsSummaryComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ownership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Number of Applicant ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CustomerInformationDetailsSummaryComponent_mat_card_32_Template, 80, 12, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerInformationDetailsSummaryComponent_Template_p_click_33_listener() {
              return ctx.goToEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Custownership);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.CustnumOfApplicants, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerDetails);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_11__["AvatarPhotoComponent"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.boxCard[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 700px;\n  height: 250px;\n  border: 1px solid #e4e4e4;\n  padding: 10px;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 16px;\n}\n\n.paraFont[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  font-family: 'Montserrat';\n  font-size: 20px;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  padding-left: 10px;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.valueText[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n}\n\n.valueTextName[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 16px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: -4%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #6e6e6e;\n}\n\n.editButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 18px;\n}\n\n.fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 90%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  height: auto;\n  border-radius: 5px;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  width: 32px !important;\n  height: 14px !important;\n  background-color: #49c5b6;\n}\n\n .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f9fafa;\n  width: 17px !important;\n  height: 17px !important;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n  height: 200px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8,\r 0 1px 0 #f8f8f8,\r 0 5px 8px 0 #e9e9e9;\n}\n\n.textIcon[_ngcontent-%COMP%] {\n  height: 16px !important;\n  width: 16px !important;\n  font-size: 16px !important;\n  color: #B2B2B2;\n}\n\n.textSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 1px;\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.textSpanCIF[_ngcontent-%COMP%] {\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGN1c3RvbWVyLWluZm9ybWF0aW9uLWRldGFpbHMtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsImN1c3RvbWVyLWluZm9ybWF0aW9uLWRldGFpbHMtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUEwQjtBQUM5Qjs7QUFDQTtFQUNRLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0FBRXJCOztBQUNBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsZUFBZTtBQUVuQjs7QUFBQTtFQUNJLGNBQWM7RUFDZCx5QkFBd0I7RUFDeEIsZUFBZTtBQUduQjs7QUFEQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLGVBQWU7QUFJbkI7O0FBRkE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixlQUFlO0FBS2pCOztBQUhBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsZUFBZTtBQU1uQjs7QUFKQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBT3BCOztBQUxBO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztBQVFsQjs7QUFOQTtFQUNJLGNBQWM7RUFDZCx5QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFTdEI7O0FBTkE7RUFDSSx1QkFBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7QUFTZjs7QUFOQTtFQUVJLFlBQVk7RUFDWixrQkFBa0I7QUFRdEI7O0FBTkE7RUFDSSxrQkFBa0I7QUFTdEI7O0FBUEE7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLHlCQUF5QjtBQVU3Qjs7QUFQQTtFQUNJLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBVTNCOztBQVBBO0VBQ0kseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixhQUFhO0FBVWpCOztBQVJBO0VBQ0ksMEVDWWdCO0FER3BCOztBQ0FBO0VETEMsdUJBQUE7RUFTQyxzQkFBYztFQVJoQiwwQkFBQTtFQ1FFLGNBQWM7QURHaEI7O0FDQUE7RUROSSxrQkFBVztFQUNkLGdCQUFBO0VBVUMsY0FBQTtFQVRGLHNCQUFBO0VDU0UsZUFBZTtBREdqQjs7QUNBQTtFRFBDLGNBQUE7RUFXQyxzQkFBa0I7RUFDcEIsZUFBQTtFQ0RFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjdXN0b21lci1pbmZvcm1hdGlvbi1kZXRhaWxzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbntcclxuICAgIGp1c3RpZnktY29udGVudDogIGZsZXgtZW5kO1xyXG59XHJcbi5ib3hDYXJkIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucGFyYXtcclxuICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wYXJhRm9udHtcclxuICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5oZWFkaW5nVGV4dHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J01hbnJvcGUnO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi52YWx1ZVRleHR7XHJcbiAgY29sb3I6ICMwRjBGMEY7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnZhbHVlVGV4dE5hbWV7XHJcbiAgICBjb2xvcjogIzBGMEYwRjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbi5saW5le1xyXG4gICAgd2lkdGg6IDk0MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00JTtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJSAwJSAwJSAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG59XHJcbi5lZGl0QnV0dG9ue1xyXG4gICAgY29sb3I6ICM0NTZFRkU7XHJcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi5mdWxsY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5jaGVxdWVjYXJke1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi50b2dnbGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xyXG4gICAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNWI2O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYTtcclxuICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmlucHV0Q2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uaW5wdXRDYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4ICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAwIDFweCAwICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAwIDVweCA4cHggMCAjZTllOWU5O1xyXG59XHJcblxyXG4udGV4dEljb257XHJcbiAgICBoZWlnaHQ6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOjE2cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG59XHJcbi50ZXh0U3BhbntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6MXB4O1xyXG4gICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBmb250LWZhbWlseTonTWFucm9wZSc7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLnRleHRTcGFuQ0lGe1xyXG4gICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBmb250LWZhbWlseTonTWFucm9wZSc7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4gIiwiLmNvbnRhaW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uYm94Q2FyZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucGFyYSB7XG4gIGNvbG9yOiAjMmIyYjJiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnBhcmFGb250IHtcbiAgY29sb3I6ICMyYjJiMmI7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlYWRpbmdUZXh0IHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4udmFsdWVUZXh0IHtcbiAgY29sb3I6ICMwRjBGMEY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udmFsdWVUZXh0TmFtZSB7XG4gIGNvbG9yOiAjMEYwRjBGO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogOTQwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjVmNTtcbiAgbWFyZ2luLWxlZnQ6IC00JTtcbn1cblxuLmJhY2tJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwJSAwJSAwJSAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cblxuLmVkaXRCdXR0b24ge1xuICBjb2xvcjogIzQ1NkVGRTtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xufVxuXG4uZnVsbGNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xufVxuXG4uY2hlcXVlY2FyZCB7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIHdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNWI2O1xufVxuXG46Om5nLWRlZXAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZhO1xuICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0Q2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5pbnB1dENhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCAjZjhmOGY4LFxyIDAgMXB4IDAgI2Y4ZjhmOCxcciAwIDVweCA4cHggMCAjZTllOWU5O1xufVxuXG4udGV4dEljb24ge1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQjJCMkIyO1xufVxuXG4udGV4dFNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xuICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi50ZXh0U3BhbkNJRiB7XG4gIGNvbG9yOiAjOTQ5NDk0O1xuICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerInformationDetailsSummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customer-information-details-summary',
            templateUrl: './customer-information-details-summary.component.html',
            styleUrls: ['./customer-information-details-summary.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"]
          }, {
            type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationEntryStageService"]
          }, {
            type: app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "omPt":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/views/home/application-entry-stage/account-service-summary/account-service-summary.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: AccountServiceSummaryComponent */

    /***/
    function omPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountServiceSummaryComponent", function () {
        return AccountServiceSummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");

      function AccountServiceSummaryComponent_mat_hint_26_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccountServiceSummaryComponent_mat_hint_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountServiceSummaryComponent_mat_hint_26_span_2_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var statementPref_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statementPref_r3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 !== ctx_r0.statementPreference.length - 1);
        }
      }

      function AccountServiceSummaryComponent_mat_hint_42_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccountServiceSummaryComponent_mat_hint_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountServiceSummaryComponent_mat_hint_42_span_2_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bankPref_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bankPref_r6, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 !== ctx_r1.bankPreference.length - 1);
        }
      }

      function AccountServiceSummaryComponent_mat_hint_47_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccountServiceSummaryComponent_mat_hint_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountServiceSummaryComponent_mat_hint_47_span_2_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comchanel_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comchanel_r9, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 !== ctx_r2.commChannel.length - 1);
        }
      }

      var AccountServiceSummaryComponent = /*#__PURE__*/function () {
        function AccountServiceSummaryComponent(router, apiService, localstore, dialogRef, dataService) {
          _classCallCheck(this, AccountServiceSummaryComponent);

          this.router = router;
          this.apiService = apiService;
          this.localstore = localstore;
          this.dialogRef = dialogRef;
          this.dataService = dataService;
          this.title = "Account Service Details";
          this.bankPreference = [];
          this.statementPreference = [];
          this.commChannel = [];
        }

        _createClass(AccountServiceSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productAccountId = this.localstore.getItem('accountId');
            console.log("Account ID from Local Storage", this.productAccountId);
            this.gettingallAccountService(this.productAccountId);
          }
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
        }, {
          key: "gettingallAccountService",
          value: function gettingallAccountService(productAccountId) {
            var _this6 = this;

            this.apiService.gettingAccountServiceDetails(this.productAccountId).subscribe(function (allAccountServiceResp) {
              console.log("All Account Service", allAccountServiceResp);
              _this6.accountStatement = allAccountServiceResp.statementFrequency;
              _this6.checkBook = allAccountServiceResp.chequebookNeeded;
              _this6.bankChannel = allAccountServiceResp.bankChannelPref;

              for (var index = 0; index < _this6.bankChannel.length; index++) {
                var element = _this6.bankChannel[index];

                if (element.checked) {
                  _this6.bankPreference.push(element.name);
                }
              }

              _this6.passBook = allAccountServiceResp.passbookNeeded;
              _this6.statementPreferenceFetched = allAccountServiceResp.statementPref;

              for (var _index = 0; _index < _this6.statementPreferenceFetched.length; _index++) {
                var _element = _this6.statementPreferenceFetched[_index];

                if (_element.checked) {
                  _this6.statementPreference.push(_element.name);
                }
              }

              _this6.commChannelFetched = allAccountServiceResp.commChannelPref;

              for (var _index2 = 0; _index2 < _this6.commChannelFetched.length; _index2++) {
                var _element2 = _this6.commChannelFetched[_index2];

                if (_element2.checked) {
                  _this6.commChannel.push(_element2.name);
                }
              }

              _this6.summaryResponse = allAccountServiceResp;
            });
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.dialogRef.close();
            this.dataService.sendNavParam(this.summaryResponse);
            this.router.navigate(["/home/application/account-service/".concat(this.productAccountId)]);
          }
        }]);

        return AccountServiceSummaryComponent;
      }();

      AccountServiceSummaryComponent.ɵfac = function AccountServiceSummaryComponent_Factory(t) {
        return new (t || AccountServiceSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
      };

      AccountServiceSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AccountServiceSummaryComponent,
        selectors: [["app-account-service-summary"]],
        decls: 56,
        vars: 7,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], ["fxLayout", "row"], [1, "para"], [1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100%"], [1, "chequecard"], ["fxLayout", "column", "fxLayoutGap", "4%", "fxLayoutAlign", "space-between none", 1, "colAlign"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "headingText"], [1, "valueText"], ["class", "valueText", 4, "ngFor", "ngForOf"], [1, "toggle"], [2, "cursor", "not-allowed", "pointer-events", "none", 3, "checked"], ["layout", "row"], ["flex", "", 1, "line"], [1, "editButton", 3, "click"], [4, "ngIf"]],
        template: function AccountServiceSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountServiceSummaryComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Account statement frequency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Account Statement Preferences ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountServiceSummaryComponent_mat_hint_26_Template, 3, 2, "mat-hint", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cheque Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-slide-toggle", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Banking Channel Preferences ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AccountServiceSummaryComponent_mat_hint_42_Template, 3, 2, "mat-hint", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Communication Channel Preferences ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AccountServiceSummaryComponent_mat_hint_47_Template, 3, 2, "mat-hint", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Pass Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "mat-slide-toggle", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountServiceSummaryComponent_Template_p_click_54_listener() {
              return ctx.goToEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accountStatement);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statementPreference);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkBook);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bankPreference);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commChannel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.passBook);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.boxCard[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 700px;\n  height: 250px;\n  border: 1px solid #e4e4e4;\n  padding: 10px;\n}\n\n.colAlign[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 16px;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  padding-left: 10px;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.valueText[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  padding-left: 10px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: -4%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #6e6e6e;\n}\n\n.editButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 18px;\n  cursor: pointer;\n}\n\n.fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 90%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  height: auto;\n  border-radius: 5px;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  width: 32px !important;\n  height: 14px !important;\n  background-color: #49c5b6;\n}\n\n .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f9fafa;\n  width: 17px !important;\n  height: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjY291bnQtc2VydmljZS1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQTBCO0FBQzlCOztBQUNBO0VBQ1EsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7QUFFckI7O0FBQUE7RUFDQSxrQkFBa0I7QUFHbEI7O0FBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixlQUFlO0FBR25COztBQURBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsZUFBZTtBQUluQjs7QUFGQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGVBQWU7QUFLakI7O0FBSEE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQU1wQjs7QUFKQTtFQUNJLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7QUFPbEI7O0FBTEE7RUFDSSxjQUFjO0VBQ2QseUJBQXdCO0VBQ3hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFRbkI7O0FBTEE7RUFDSSx1QkFBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7QUFRZjs7QUFMQTtFQUVJLFlBQVk7RUFDWixrQkFBa0I7QUFPdEI7O0FBTEE7RUFDSSxrQkFBa0I7QUFRdEI7O0FBTkE7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLHlCQUF5QjtBQVM3Qjs7QUFOQTtFQUNJLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBUzNCIiwiZmlsZSI6ImFjY291bnQtc2VydmljZS1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW57XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICBmbGV4LWVuZDtcclxufVxyXG4uYm94Q2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29sQWxpZ257XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmF7XHJcbiAgICBjb2xvcjogIzJiMmIyYjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaGVhZGluZ1RleHR7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4udmFsdWVUZXh0e1xyXG4gIGNvbG9yOiAjMEYwRjBGO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5saW5le1xyXG4gICAgd2lkdGg6IDk0MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00JTtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJSAwJSAwJSAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG59XHJcbi5lZGl0QnV0dG9ue1xyXG4gICAgY29sb3I6ICM0NTZFRkU7XHJcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mdWxsY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5jaGVxdWVjYXJke1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi50b2dnbGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xyXG4gICAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNWI2O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYTtcclxuICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG4gIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountServiceSummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-account-service-summary',
            templateUrl: './account-service-summary.component.html',
            styleUrls: ['./account-service-summary.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qMRc":
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/application-entry-stage.service.ts ***!
      \********************************************************************/

    /*! exports provided: API_URL, ApplicationEntryStageService */

    /***/
    function qMRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationEntryStageService", function () {
        return ApplicationEntryStageService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/config/app.constant */
      "ngOV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./showMessage/show-message.service */
      "x/2q");

      var API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].baseURL;

      var ApplicationEntryStageService = /*#__PURE__*/function () {
        function ApplicationEntryStageService(http, showMessageService) {
          var _this7 = this;

          _classCallCheck(this, ApplicationEntryStageService);

          this.http = http;
          this.showMessageService = showMessageService;

          this.errorHandler = function (errorResp) {
            console.error('Error : ' + errorResp.message);
            console.error('status : ' + errorResp.status);

            _this7.showMessageService.errorMessage(errorResp.status, errorResp);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorResp);
          };
        }

        _createClass(ApplicationEntryStageService, [{
          key: "saveProductAccountInfo",
          value: function saveProductAccountInfo(accountInfo) {
            return this.http.post("".concat(API_URL, "/productAccount"), accountInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveCustomerDetails1",
          value: function saveCustomerDetails1(customerInfo) {
            return this.http.post("".concat(API_URL, "/productCustomer/save"), customerInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveCustomerDetails2",
          value: function saveCustomerDetails2(customerInfo) {
            return this.http.post("".concat(API_URL, "/productApplicant"), customerInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveMandateDetails",
          value: function saveMandateDetails(mandateInfo) {
            return this.http.post("".concat(API_URL, "/productMandate"), mandateInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getByAccountId",
          value: function getByAccountId(accountId) {
            return this.http.get("".concat(API_URL, "/productAccount/account/").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateAccountStatusService",
          value: function updateAccountStatusService(data) {
            return this.http.put("".concat(API_URL, "/productAccount/updateStatus"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteMandateById",
          value: function deleteMandateById(id, loggedInUser) {
            return this.http["delete"]("".concat(API_URL, "/productMandate/").concat(id, "/").concat(loggedInUser)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchAccountDependentInfo",
          value: function fetchAccountDependentInfo(accountId) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomerDependentInfo?accountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createAndUpdateAccountants",
          value: function createAndUpdateAccountants(accountModel) {
            return this.http.post("".concat(API_URL, "/customerdata/upsertCustomerDependentInfo"), accountModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchByCif",
          value: function fetchByCif(cifNumber) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?cifNumber=").concat(cifNumber)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteApplicant",
          value: function deleteApplicant(customerId, dependentId) {
            return this.http["delete"]("".concat(API_URL, "/customerdata/deleteDependent?customerId=").concat(customerId, "&dependentId=").concat(dependentId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }]);

        return ApplicationEntryStageService;
      }();

      ApplicationEntryStageService.ɵfac = function ApplicationEntryStageService_Factory(t) {
        return new (t || ApplicationEntryStageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"]));
      };

      ApplicationEntryStageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApplicationEntryStageService,
        factory: ApplicationEntryStageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApplicationEntryStageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "stbE":
    /*!**********************************************************************************************!*\
      !*** ./src/app/views/home/application-assessment/report-details/report-details.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ReportDetailsComponent */

    /***/
    function stbE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportDetailsComponent", function () {
        return ReportDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");

      function ReportDetailsComponent_div_9_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r3 + 1, ".", item_r2.scorecardQuestion, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.scorecardAnswer);
        }
      }

      function ReportDetailsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ScoreCard Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Number Of Applicants");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportDetailsComponent_div_9_div_26_Template, 5, 3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID #", ctx_r0.qualitativeScoreboardSummary == null ? null : ctx_r0.qualitativeScoreboardSummary.scoreCardId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.qualitativeScoreboardSummary == null ? null : ctx_r0.qualitativeScoreboardSummary.numberOfApplicant);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.qualitativeScoreboardSummary == null ? null : ctx_r0.qualitativeScoreboardSummary.scoreCardMapping[0].scoreCardDetails);
        }
      }

      var ReportDetailsComponent = /*#__PURE__*/function () {
        function ReportDetailsComponent(dialogRef, router, ls, apiService, dataService) {
          _classCallCheck(this, ReportDetailsComponent);

          this.dialogRef = dialogRef;
          this.router = router;
          this.ls = ls;
          this.apiService = apiService;
          this.dataService = dataService;
          this.title = "Qualitative Scoreboard";
          this.imgUrl = "assets/images/flagUSA.jpg";
        }

        _createClass(ReportDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.accountId = this.ls.getItem('accountId');
            console.log(this.accountId, "AccountId");
            this.getAllData(this.accountId);
          }
        }, {
          key: "getAllData",
          value: function getAllData(id) {
            var _this8 = this;

            // id == '' || id == null ? id = 1234 : id;
            this.apiService.getQualitativeScorecardDetails(id).subscribe(function (response) {
              _this8.qualitativeScoreboardSummary = response;
              console.log(_this8.qualitativeScoreboardSummary);
              console.log(_this8.qualitativeScoreboardSummary.scoreCardMapping);
            });
          }
        }, {
          key: "Close",
          value: function Close() {
            this.dialogRef.close();
          }
        }, {
          key: "goAndEdit",
          value: function goAndEdit() {
            console.log(this.qualitativeScoreboardSummary);
            this.dialogRef.close();
            this.dataService.sendNavParam(this.qualitativeScoreboardSummary);
            this.router.navigate(['/home/application/assessment/qualitative/', this.accountId]);
          }
        }]);

        return ReportDetailsComponent;
      }();

      ReportDetailsComponent.ɵfac = function ReportDetailsComponent_Factory(t) {
        return new (t || ReportDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
      };

      ReportDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportDetailsComponent,
        selectors: [["app-report-details"]],
        decls: 14,
        vars: 2,
        consts: [["fxLayout", "column", "fxLayoutAlign", "space-between start", "fxLayoutGap", "10px", 1, "full-width"], ["fxFlex", "100%", "fxFlex.xs", "100%", 1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [2, "padding", "1rem 1rem 0.5rem 1rem", "font-size", "large"], [2, "font-size", "medium", "color", "#a9a7a7", "cursor", "pointer", 3, "click"], ["fxFlex", "100%", "fxFlex.xs", "100%", "class", "full-width", "style", "border:1px solid rgb(249 245 245);border-radius: 5px;", 4, "ngIf"], [2, "padding", "1rem 1rem"], ["mat-stroked-button", "", "tabindex", "-1", 2, "border", "transparent", "color", "#456EFE", "background-color", "#ffffff", "text-decoration", "underline", 3, "click"], ["fxFlex", "100%", "fxFlex.xs", "100%", 1, "full-width", 2, "border", "1px solid rgb(249 245 245)", "border-radius", "5px"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly start", 1, "full-width"], [1, "full-width"], ["fxLayout", "row wrap", 1, "full-width", 2, "padding", "2rem"], ["fxFlex", "100%", "fxFlex.xs", "100%"], [2, "color", "#102245", "opacity", "64%", "font-size", "medium", "font-family", "sans-serif"], [2, "padding-top", "5px"], [2, "font-size", "medium"], [1, "mt-32"], [2, "background-color", "white"], ["fxLayout", "row wrap", 1, "qtnhd", 2, "color", "#102245", "opacity", "64%", "font-size", "medium", "font-family", "sans-serif", "padding", "0rem 1rem"], [1, "full-width", 2, "padding", "0rem 2rem"], ["fxLayout", "row wrap", 1, "full-width"], ["fxFlex", "47", "class", "qtncrd", "fxFlex.xs", "100", 4, "ngFor", "ngForOf"], ["fxFlex", "47", "fxFlex.xs", "100", 1, "qtncrd"], [1, "qtnval"]],
        template: function ReportDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportDetailsComponent_Template_mat_icon_click_7_listener() {
              return ctx.Close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReportDetailsComponent_div_9_Template, 27, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportDetailsComponent_Template_button_click_12_listener() {
              return ctx.goAndEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Edit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qualitativeScoreboardSummary != null);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        styles: [".qtncrd[_ngcontent-%COMP%] {\n  background-color: #F7F7F7;\n  margin-right: 2%;\n  margin-bottom: 40px;\n  padding: 10px;\n}\n\n.qtnval[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.qtnhd[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJlcG9ydC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQXdCO0VBQ3hCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGFBQVk7QUFBaEI7O0FBRUE7RUFFSSxnQkFBZTtBQUFuQjs7QUFFQTtFQUVJLFlBQVc7QUFBZiIsImZpbGUiOiJyZXBvcnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdG5jcmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjdGN0Y3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5xdG52YWxcclxue1xyXG4gICAgcGFkZGluZy10b3A6OHB4O1xyXG59XHJcbi5xdG5oZFxyXG57XHJcbiAgICBtYXJnaW46MjBweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report-details',
            templateUrl: './report-details.component.html',
            styleUrls: ['./report-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vV0b":
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/home/application-entry-stage/avatar-photo/avatar-photo.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: AvatarPhotoComponent */

    /***/
    function vV0b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvatarPhotoComponent", function () {
        return AvatarPhotoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");

      function AvatarPhotoComponent_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AvatarPhotoComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.initials, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var AvatarPhotoComponent = /*#__PURE__*/function () {
        function AvatarPhotoComponent() {
          _classCallCheck(this, AvatarPhotoComponent);

          this.showInitials = false;
          this.colors = ['#24CCA7', '#24CCA7', '#24CCA7', '#24CCA7'];
        }

        _createClass(AvatarPhotoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.photoUrl) {
              this.showInitials = true;
              this.createInititals();
              var randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
              this.circleColor = this.colors[randomIndex];
            }
          }
        }, {
          key: "createInititals",
          value: function createInititals() {
            var names = this.name.split(' '),
                initials = names[0].substring(0, 1).toUpperCase();

            if (names.length > 1) {
              initials += names[names.length - 1].substring(0, 1).toUpperCase();
            }

            this.initials = initials;
            console.log("this.name", this.name);
            console.log("this.initials", this.initials);
          }
        }]);

        return AvatarPhotoComponent;
      }();

      AvatarPhotoComponent.ɵfac = function AvatarPhotoComponent_Factory(t) {
        return new (t || AvatarPhotoComponent)();
      };

      AvatarPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AvatarPhotoComponent,
        selectors: [["app-avatar-photo"]],
        inputs: {
          photoUrl: "photoUrl",
          name: "name"
        },
        decls: 3,
        vars: 5,
        consts: [[1, "circle", 3, "ngStyle"], [3, "src", 4, "ngIf"], ["class", "initials", 4, "ngIf"], [3, "src"], [1, "initials"]],
        template: function AvatarPhotoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AvatarPhotoComponent_img_1_Template, 1, 1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AvatarPhotoComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.circleColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showInitials);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInitials);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n\n.circle[_ngcontent-%COMP%]   .initials[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3ZCOztBQVBBO0VBVVEsa0JBQWtCO0VBQ2xCLFdBQW1CO0VBQ25CLFlBQW1CO0FBQzNCOztBQWJBO0VBZ0JRLGNBQXVCO0VBQ3ZCLGVBQW9CO0VBQ3BCLGlCQUFvQjtFQUNwQix3QkFBd0I7QUFDaEMiLCJmaWxlIjoiYXZhdGFyLXBob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aCAgICAgICAgOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodCAgICAgICA6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluaXRpYWxzIHtcclxuICAgICAgICBjb2xvciAgICAgICAgIDogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemUgICAgIDogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodCAgIDogMTlweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNjI1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarPhotoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-avatar-photo',
            templateUrl: './avatar-photo.component.html',
            styleUrls: ['./avatar-photo.component.scss']
          }]
        }], null, {
          photoUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "yAWA":
    /*!**********************************************************************************************!*\
      !*** ./src/app/views/tasks/kyc-branch-verify-summary/kyc-branch-verify-summary.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: KycBranchVerifySummaryComponent */

    /***/
    function yAWA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycBranchVerifySummaryComponent", function () {
        return KycBranchVerifySummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");

      function KycBranchVerifySummaryComponent_mat_spinner_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function KycBranchVerifySummaryComponent_div_9_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r11.customerColorCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, items_r9.firstName), 0, 1), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, items_r9.lastName), 0, 1), "");
        }
      }

      function KycBranchVerifySummaryComponent_div_9_div_4_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
        }

        if (rf & 2) {
          var items_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", items_r9.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBranchVerifySummaryComponent_div_9_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycBranchVerifySummaryComponent_div_9_div_4_img_1_Template, 1, 1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.image != null);
        }
      }

      function KycBranchVerifySummaryComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KycBranchVerifySummaryComponent_div_9_div_3_Template, 7, 16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KycBranchVerifySummaryComponent_div_9_div_4_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r9.profileImage == "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r9.profileImage !== "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", items_r9.prefix, "\xA0", items_r9.firstName, "\xA0", items_r9.middleName, "\xA0", items_r9.lastName, "");
        }
      }

      function KycBranchVerifySummaryComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customer Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "KYC Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "KYC Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "KYC Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r16.customerAdditionalInfo.kycReference);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r16.customerAdditionalInfo.kycStatus);
        }
      }

      function KycBranchVerifySummaryComponent_div_12_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Verification Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Video Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Schedule Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Schedule Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var videoItems_r19 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](videoItems_r19.scheduledDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.format24HrsTo12Hrs(videoItems_r19.scheduledTime[0]));
        }
      }

      function KycBranchVerifySummaryComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Video verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, KycBranchVerifySummaryComponent_div_12_div_12_Template, 18, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.videoVerificationDetails);
        }
      }

      function KycBranchVerifySummaryComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Middle Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Date Of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Marital Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Primary Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.prefix);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.middleName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.dateOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.materialStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.nationality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.primaryEmailAdress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r20.phoneNumber);
        }
      }

      function KycBranchVerifySummaryComponent_div_15_div_7_div_1_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycBranchVerifySummaryComponent_div_15_div_7_div_1_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycBranchVerifySummaryComponent_div_15_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Communication Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Residence Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Is your Permanent Address same as Communication Address? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, KycBranchVerifySummaryComponent_div_15_div_7_div_1_div_49_Template, 3, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, KycBranchVerifySummaryComponent_div_15_div_7_div_1_div_50_Template, 3, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var address_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var items_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.address1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.zipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.address2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.residenceType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r21.userAddress.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r21.userAddress.length == 1);
        }
      }

      function KycBranchVerifySummaryComponent_div_15_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Permanent Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Residence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var address_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.address1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.zipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.address2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r23.residenceType);
        }
      }

      function KycBranchVerifySummaryComponent_div_15_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycBranchVerifySummaryComponent_div_15_div_7_div_1_Template, 51, 9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycBranchVerifySummaryComponent_div_15_div_7_div_2_Template, 45, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var address_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", address_r23.addressType === "Communication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", address_r23.addressType === "Permanent");
        }
      }

      function KycBranchVerifySummaryComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KycBranchVerifySummaryComponent_div_15_div_7_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r21.userAddress);
        }
      }

      function KycBranchVerifySummaryComponent_div_16_small_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Documents Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycBranchVerifySummaryComponent_div_16_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Document Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Document Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var docs_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](docs_r34.documentName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](docs_r34.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", docs_r34.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBranchVerifySummaryComponent_div_16_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycBranchVerifySummaryComponent_div_16_div_12_div_1_Template, 15, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.custOtherDoc_array);
        }
      }

      function KycBranchVerifySummaryComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Documents Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KycBranchVerifySummaryComponent_div_16_small_11_Template, 2, 0, "small", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, KycBranchVerifySummaryComponent_div_16_div_12_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.custOtherDoc_array == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.custOtherDoc_array != null && (ctx_r6.custOtherDoc_array == null ? null : ctx_r6.custOtherDoc_array.length) > 0);
        }
      }

      function KycBranchVerifySummaryComponent_div_18_small_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Biometric Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycBranchVerifySummaryComponent_div_18_div_11_table_1_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bio Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r39 = ctx.$implicit;
          var i_r40 = ctx.index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.custBiometric[i_r40] == null ? null : ctx_r38.custBiometric[i_r40].bioName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r39 == null ? null : item_r39.fingerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:image/jpg;base64," + item_r39.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBranchVerifySummaryComponent_div_18_div_11_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycBranchVerifySummaryComponent_div_18_div_11_table_1_tr_2_Template, 13, 3, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.custBiometric);
        }
      }

      function KycBranchVerifySummaryComponent_div_18_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycBranchVerifySummaryComponent_div_18_div_11_table_1_Template, 3, 1, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.custBiometric != null && ctx_r36.custBiometric.length > 0);
        }
      }

      function KycBranchVerifySummaryComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Biometric Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, KycBranchVerifySummaryComponent_div_18_small_10_Template, 2, 0, "small", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KycBranchVerifySummaryComponent_div_18_div_11_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.custBiometric == null || ctx_r7.custBiometric.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.custBiometric != null && ctx_r7.custBiometric.length > 0);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "disabledbtn": a0,
          "rejectbtn": a1
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          "disabledbtn": a0,
          "approvebtn": a1
        };
      };

      function KycBranchVerifySummaryComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycBranchVerifySummaryComponent_div_20_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.approveDetails("R");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycBranchVerifySummaryComponent_div_20_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.approveDetails("A");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Approve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r8.rejectedStatus)("hidden", ctx_r8.rejectedStatus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r8.rejectedStatus, !ctx_r8.rejectedStatus));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r8.approvedStatus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx_r8.approvedStatus, !ctx_r8.approvedStatus));
        }
      }

      var KycBranchVerifySummaryComponent = /*#__PURE__*/function () {
        function KycBranchVerifySummaryComponent(dialogRef, router, apiService, route, snack, cdr, sanitizer) {
          _classCallCheck(this, KycBranchVerifySummaryComponent);

          this.dialogRef = dialogRef;
          this.router = router;
          this.apiService = apiService;
          this.snack = snack;
          this.cdr = cdr;
          this.sanitizer = sanitizer;
          this.custBiometric = [];
        }

        _createClass(KycBranchVerifySummaryComponent, [{
          key: "closeClick",
          value: function closeClick() {
            // console.log("close click")
            // [routerLink]="['/others/kyc']" 
            this.dialogRef.close(); // this.router.navigateByUrl('/others/kyc'); 
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.customerId = localStorage.getItem('customerId');
            this.kycStatus = localStorage.getItem('kycStatus');
            setTimeout(function () {
              _this9.goToKycSummary();
            }, 500); // let kyc = new KycTaskSummaryComponent();
          } // getKycTaskSummary(customerId){
          //   this.apiService.getKycTaskSummary(this.customerId).subscribe((response) => {
          //     console.log(response);
          //     this.kycList=response;
          //     console.log(this.kycList[0].customerAdditionalInfo.kycStatus,"Kyc status");
          //     console.log(this.kycList[0].custDocuments[0].verificationType,"verificationType");
          //      console.log(this.kycList);
          //   });
          // }

        }, {
          key: "goToKycSummary",
          value: function goToKycSummary() {
            var _this10 = this;

            this.loading = true;
            this.customerColorCode = localStorage.getItem('CustomerColorCode');
            console.log(this.customerId, "CustomerId");
            this.apiService.getKycTaskSummary(this.customerId).subscribe(function (response) {
              // console.log(response);
              _this10.cdr.markForCheck();

              _this10.cdr.detectChanges();

              _this10.loading = false;
              _this10.customerDetails = response;
              console.log("Summry", _this10.customerDetails); // console.log(this.customerDetails,"customerDetails")

              _this10.firstName = _this10.customerDetails[0].firstName;
              _this10.phoneNum = _this10.customerDetails[0].phoneNumber; // console.log(this.customerDetails[0].customerAdditionalInfo.kycStatus);

              _this10.kycStatusVal = _this10.customerDetails[0].customerAdditionalInfo.kycStatus;

              if (_this10.customerDetails[0].customerAdditionalInfo.kycStatus === 'REJECTED') {
                _this10.rejectedStatus = true;
                _this10.approvedStatus = true;
              } else if (_this10.customerDetails[0].customerAdditionalInfo.kycStatus === 'INITIATED') {
                _this10.rejectedStatus = false;
                _this10.approvedStatus = false;
              } else if (_this10.customerDetails[0].customerAdditionalInfo.kycStatus === 'APPROVED') {
                _this10.rejectedStatus = true;
                _this10.approvedStatus = true;
              } else if (_this10.customerDetails[0].customerAdditionalInfo.kycStatus === 'UNDER_PROCESS') {
                _this10.rejectedStatus = true;
                _this10.approvedStatus = true;
              }

              localStorage.setItem('kycStatus', _this10.customerDetails[0].customerAdditionalInfo.kycStatus);

              _this10.getProfileImage(_this10.customerId);

              _this10.getAdditionalDocumentsDetails(_this10.customerId);

              _this10.getCustomerDocumentsDetails(_this10.customerId);

              _this10.getBiometricDetails(_this10.customerId); // this.phoneNum= 9876789876;
              // this.email="test@gmail.com";


              _this10.email = _this10.customerDetails[0].primaryEmailAdress; // console.log(this.customerDetails[0].phoneNumber)

              _this10.getVideoVerification(_this10.phoneNum, _this10.email);
            }); // console.log(this.customerDetails,"customerDetails")
          }
        }, {
          key: "format24HrsTo12Hrs",
          value: function format24HrsTo12Hrs(time) {
            var formatted = moment__WEBPACK_IMPORTED_MODULE_6__(time, "HH:mm").format("LT");
            console.log("time", time, formatted);
            return formatted;
          }
        }, {
          key: "getVideoVerification",
          value: function getVideoVerification(phoneno, email) {
            var _this11 = this;

            // console.log(this.email + this.phoneNum);
            this.apiService.getVideoTaskSummary(phoneno, email).subscribe(function (response) {
              console.log("Vdio summry", response);
              _this11.videoVerificationDetails = response;

              _this11.cdr.markForCheck();

              _this11.cdr.detectChanges(); // console.log(this.videoVerificationDetails,"customerDetails")

            });
          }
        }, {
          key: "approveDetails",
          value: function approveDetails(stat) {
            var _this12 = this;

            this.kycStatus = localStorage.getItem('kycStatus'); // this.customerId = localStorage.getItem('CustomerId');

            console.log(this.customerId, " :: customerId ");
            this.statusData = [this.customerId, this.kycStatus]; // console.log(this.statusData,"statusData");

            var kycStat;
            if (stat == "A") kycStat = "APPROVED";else kycStat = "REJECTED";
            var jsonObject = {
              customerId: this.customerId,
              kycStatus: kycStat,
              verificationType: 'KYC'
            }; // let jsonObject = {customerId: this.customerId, kycStatus: "REJECTED"}; 

            var data = kycStat;
            this.updatedStatus = kycStat;
            console.log(jsonObject);
            this.apiService.updateKycStatus(jsonObject).subscribe(function (response) {
              console.log(response);

              if (response) {
                _this12.close(data);

                _this12.cdr.markForCheck();

                _this12.cdr.detectChanges();

                _this12.snack.open("Successfully ".concat(kycStat, "!"), 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);
              _this12.errorStatus = kycStat;

              _this12.snack.open("".concat(error.error.message, " "), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "close",
          value: function close(data) {
            this.dialogRef.close({
              message: 'Confirm',
              data: data
            });
          }
        }, {
          key: "getAdditionalDocumentsDetails",
          value: function getAdditionalDocumentsDetails(customerId) {
            var _this13 = this;

            this.document_type = "2";
            this.apiService.getCustomerDocuments(customerId, this.document_type).subscribe(function (result) {
              console.log("result additional::", result);

              if (result != null) {
                _this13.custDocuments = result;
              }
            });
          }
        }, {
          key: "getBiometricDetails",
          value: function getBiometricDetails(customerId) {
            var _this14 = this;

            var arr = ["4", "5", "11", "12"];

            for (var key in arr) {
              var bioName;

              if (Object.prototype.hasOwnProperty.call(arr, key)) {
                var element = arr[key];
                console.log('bio element :: ', element);
                this.apiService.getCustomerDocuments(customerId, element).subscribe(function (result) {
                  console.log("result additional::", result);

                  if (result != null) {
                    if (result[0].documentType == 4 || result[0].documentType == 5) {
                      bioName = 'Biometric scan';
                    }

                    if (result[0].documentType == 11) {
                      bioName = 'Irish scan';
                    }

                    if (result[0].documentType == 12) {
                      bioName = 'Face scanner';
                    }

                    var obj = {
                      bioName: bioName,
                      fingerName: result[0].documentName.toString().toUpperCase(),
                      image: result[0].fileUrl //image:result[0].imgTemplateBase64

                    };

                    _this14.custBiometric.push(obj);

                    console.log('bio info :: ', _this14.custBiometric);
                  }
                });
              }
            }
          }
        }, {
          key: "getCustomerDocumentsDetails",
          value: function getCustomerDocumentsDetails(customerId) {
            var _this15 = this;

            this.document_type = "3";
            this.apiService.getCustomerDocuments(customerId, this.document_type).subscribe(function (result) {
              console.log("result Docs::", result);

              if (result) {
                _this15.custOtherDoc_array = result;
              } //if endng

            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(customerId) {
            var _this16 = this;

            console.log("getProfileImage ::", customerId);
            this.apiService.getProfileDetails(customerId).subscribe(function (data) {
              console.log(data); // this.profileData = data;

              console.log(data.profileImage);

              if (data.profileImage != null) {
                //let objectURL = 'data:image/jpeg;base64,' + data.profileImage.fileData;
                var objectURL = data.profileImage.fileUrl;
                _this16.image = _this16.sanitizer.bypassSecurityTrustUrl(objectURL);
              } // console.log(this.image,"Profile Data");
              // console.log(this.profileData.customerName,"Profile Data");
              // const blob = base64StringToBlob(this.profileData.fileData, contentType);
              // console.log(blob);

            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "fetchCustomerByStatus",
          value: function fetchCustomerByStatus(status, page, size) {
            this.apiService.getKycTaskSummaryList(status, page, size).subscribe(function (custResp) {
              console.log("Response", custResp); // this.updateStatusResponse(status, custResp);
            });
          }
        }]);

        return KycBranchVerifySummaryComponent;
      }();

      KycBranchVerifySummaryComponent.ɵfac = function KycBranchVerifySummaryComponent_Factory(t) {
        return new (t || KycBranchVerifySummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      KycBranchVerifySummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: KycBranchVerifySummaryComponent,
        selectors: [["app-kyc-branch-verify-summary"]],
        decls: 21,
        vars: 9,
        consts: [["fxLayout", "column wrap"], [1, "content"], ["fxLayout", "row", "fxLayoutAlign", "end"], [2, "color", "darkgray", "cursor", "pointer", 3, "click"], ["fxLayoutAlign", "center"], [4, "ngIf"], [1, "main"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "class", "flex-container", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "class", "flex-container", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end", "fxLayoutGap", "20px", 4, "ngIf"], ["fxLayout", "row", 1, "imgdiv"], ["mat-card-avatar", ""], ["fxLayout", "row", "class", "defaultImage", 3, "background", 4, "ngIf"], ["fxLayout", "row", "class", "defaultImage", 4, "ngIf"], ["fxLayout", "row", 1, "apprdiv"], ["fxLayout", "row", 1, "defaultImage"], [1, "imageText"], ["style", "width: 120px; height: 120px; border-radius: 50%;", "alt", "", 3, "src", 4, "ngIf"], ["alt", "", 2, "width", "120px", "height", "120px", "border-radius", "50%", 3, "src"], ["fxLayout", "row", 1, "flex-container"], ["fxFlex", "15"], [1, "num"], [1, "bordnum"], ["fxFlex", "75"], ["fxLayout", "row", "fxLayoutGap", "20%"], [1, "mtcd"], ["fxLayout", "row", 1, "rowbord"], ["fxFlex", "4"], ["fxFlex", "32"], [1, "label"], [1, "labelval"], [1, "KYCtxt"], ["fxFlex", "85"], ["fxLayout", "row", 1, "rowbord", "nobord"], ["class", "labelval", 4, "ngIf"], ["style", "color: grey;", 4, "ngIf"], [2, "color", "grey"], ["fxLayout", "row", 1, "col"], ["fxFlex", "30"], ["download", "", 1, "linkColor", 3, "href"], ["fxLayoutGap", "10px", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "10px"], [2, "width", "300px"], ["fxFlex", "30%", "id", "clr", 2, "margin", "0px", "padding", "0px", "margin-right", "10px"], [2, "margin", "00px", "padding", "0px", "text-align", "center"], [3, "src"], ["fxLayout", "row", "fxLayoutAlign", "end", "fxLayoutGap", "20px"], ["type", "button", 1, "rejectbtn", 3, "hidden", "ngClass", "click"], ["type", "button", 1, "approvebtn", 3, "hidden", "ngClass", "click"]],
        template: function KycBranchVerifySummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycBranchVerifySummaryComponent_Template_mat_icon_click_4_listener() {
              return ctx.close(ctx.updatedStatus);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KycBranchVerifySummaryComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KycBranchVerifySummaryComponent_div_9_Template, 12, 6, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KycBranchVerifySummaryComponent_div_11_Template, 29, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, KycBranchVerifySummaryComponent_div_12_Template, 14, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, KycBranchVerifySummaryComponent_div_14_Template, 70, 10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, KycBranchVerifySummaryComponent_div_15_Template, 8, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, KycBranchVerifySummaryComponent_div_16_Template, 13, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, KycBranchVerifySummaryComponent_div_18_Template, 13, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, KycBranchVerifySummaryComponent_div_20_Template, 5, 11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]],
        styles: [".appimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.imgdiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-top: 50%;\n  align-self: center;\n}\n\n.num[_ngcontent-%COMP%] {\n  border: 1px solid #4A56E2;\n  border-radius: 50%;\n  text-align: center;\n  width: 50%;\n  height: 70px;\n  padding-top: 25px;\n  background-color: white;\n}\n\n.imgdiv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.apprdiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.apprdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 5%;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: #9AA1B0;\n  font-size: 0.7rem;\n}\n\n.labelval[_ngcontent-%COMP%] {\n  color: #2F2F2F;\n}\n\n.linkColor[_ngcontent-%COMP%] {\n  color: #4A56E2;\n  text-decoration: underline;\n}\n\n.KYCtxt[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.rowbord[_ngcontent-%COMP%] {\n  \n  border-bottom: 2px solid #f5f5f5;\n  padding: 10px 0 10px 10px;\n}\n\n.mtcd[_ngcontent-%COMP%] {\n  padding: 0px;\n  border-radius: 0px;\n}\n\n.nobord[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.main[_ngcontent-%COMP%] {\n  height: 85vh;\n  overflow: auto;\n}\n\n.appersoninfocard[_ngcontent-%COMP%] {\n  background-color: #E5E5E5;\n}\n\n.clr[_ngcontent-%COMP%] {\n  color: #B2B2B2;\n  width: 180px;\n  height: 180px;\n}\n\n.bordnum[_ngcontent-%COMP%] {\n  height: 100%;\n  border-left: 1px solid #4A56E2;\n  margin-left: 24%;\n}\n\n.RNbtn[_ngcontent-%COMP%] {\n  background-color: #4A56E2;\n  color: white;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 20px;\n  border-style: 1px solid;\n  -webkit-text-size-adjust: 20px;\n     -moz-text-size-adjust: 20px;\n          text-size-adjust: 20px;\n  height: 30px;\n  width: 300px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #0ec588;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 20px;\n  border-style: 1px solid;\n  -webkit-text-size-adjust: 20px;\n     -moz-text-size-adjust: 20px;\n          text-size-adjust: 20px;\n  height: 30px;\n  width: 150px;\n}\n\n.cancelbtn[_ngcontent-%COMP%] {\n  color: grey;\n  background-color: #f3ecec;\n  cursor: pointer;\n}\n\n.rejectbtn[_ngcontent-%COMP%] {\n  color: red;\n  background-color: white;\n  cursor: pointer;\n  outline: none;\n  outline-style: none;\n  text-align: center;\n  border-radius: 20px;\n  border-style: 1px solid transparent;\n  -webkit-text-size-adjust: 20px;\n     -moz-text-size-adjust: 20px;\n          text-size-adjust: 20px;\n  border-color: red;\n  size: 20px;\n  height: 30px;\n  width: 150px;\n}\n\n.approvebtn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #0ec588;\n  cursor: pointer;\n  outline: none;\n  outline-style: none;\n  text-align: center;\n  border-radius: 20px;\n  border-style: 1px solid transparent;\n  -webkit-text-size-adjust: 20px;\n     -moz-text-size-adjust: 20px;\n          text-size-adjust: 20px;\n  height: 30px;\n  width: 150px;\n}\n\n.sqftbtn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: grey;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 20px;\n  border-style: 1px solid;\n  -webkit-text-size-adjust: 20px;\n     -moz-text-size-adjust: 20px;\n          text-size-adjust: 20px;\n  height: 20px;\n  width: 100px;\n}\n\n.acbtn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: grey;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 20px;\n  border-style: 1px solid;\n  -webkit-text-size-adjust: 20px;\n     -moz-text-size-adjust: 20px;\n          text-size-adjust: 20px;\n  height: 20px;\n  width: 100px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  background-color: #0ec588;\n  margin: auto;\n  position: relative;\n}\n\n.content1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: inherit;\n  height: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n}\n\n.circle1[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: #0ec588;\n  margin: auto;\n  position: relative;\n}\n\n.content2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: inherit;\n  height: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n}\n\n.defaultImage[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.imageText[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2.7rem;\n  color: white;\n}\n\n.dwnld[_ngcontent-%COMP%] {\n  color: blue !important;\n  text-decoration: underline !important;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLWJyYW5jaC12ZXJpZnktc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLFlBQVc7RUFDWCxhQUFZO0FBQWY7O0FBRUE7RUFFSSxrQkFBaUI7QUFBckI7O0FBR0E7RUFDQSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQWxCOztBQUdBO0VBRUkseUJBQXdCO0VBQ3hCLGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0FBRDNCOztBQUdBO0VBRUksWUFBVztBQURmOztBQUdBO0VBRUksa0JBQWtCO0FBRHRCOztBQUdBO0VBRUksV0FBVTtFQUNWLGVBQWU7QUFEbkI7O0FBR0E7RUFFRSxjQUFhO0VBQ2IsaUJBQWlCO0FBRG5COztBQUdBO0VBRUcsY0FBYTtBQURoQjs7QUFHQTtFQUNJLGNBQWE7RUFDYiwwQkFBMEI7QUFBOUI7O0FBR0E7RUFFSSx5QkFBeUI7QUFEN0I7O0FBR0E7RUFFSSxvQ0FBQTtFQUNBLGdDQUErQjtFQUMvQix5QkFBd0I7QUFENUI7O0FBR0E7RUFFSSxZQUFXO0VBQ1gsa0JBQWtCO0FBRHRCOztBQUdBO0VBRUksdUJBQXNCO0FBRDFCOztBQUdBO0VBRUksWUFBWTtFQUNaLGNBQWE7QUFEakI7O0FBSUE7RUFFRyx5QkFBd0I7QUFGM0I7O0FBSUE7RUFFSSxjQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFGakI7O0FBSUE7RUFFSSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGdCQUFnQjtBQUZwQjs7QUFJQTtFQUNJLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUFxQjtLQUFyQiwyQkFBcUI7VUFBckIsc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxZQUFXO0FBRGY7O0FBSUE7RUFDSSxZQUFZO0VBQ1oseUJBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw4QkFBcUI7S0FBckIsMkJBQXFCO1VBQXJCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsWUFBVztBQURmOztBQUlBO0VBQ0ksV0FBVztFQUNYLHlCQUFvQztFQUNwQyxlQUFlO0FBRG5COztBQUlBO0VBQ0ksVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw4QkFBcUI7S0FBckIsMkJBQXFCO1VBQXJCLHNCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVc7RUFDWCxZQUFZO0FBRGhCOztBQUlBO0VBQ0ksWUFBWTtFQUNaLHlCQUFrQztFQUNsQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw4QkFBcUI7S0FBckIsMkJBQXFCO1VBQXJCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsWUFBVztBQURmOztBQUtBO0VBQ0ksWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsOEJBQXFCO0tBQXJCLDJCQUFxQjtVQUFyQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLFlBQVc7QUFGZjs7QUFLQTtFQUNJLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUFxQjtLQUFyQiwyQkFBcUI7VUFBckIsc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxZQUFXO0FBRmY7O0FBS0E7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix5QkFBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtBQUZ0Qjs7QUFNQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFhO0VBQ2IsWUFBWTtFQUNaLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBSG5COztBQU9BO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIseUJBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7QUFKdEI7O0FBT0E7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFlBQVk7RUFDWixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUpuQjs7QUFNQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUh0Qjs7QUFRRTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUFBWTtBQUxoQjs7QUFPRTtFQUVJLHNCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsa0JBQWlCO0FBTHZCIiwiZmlsZSI6Imt5Yy1icmFuY2gtdmVyaWZ5LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwaW1nXHJcbntcclxuICAgd2lkdGg6MTAwcHg7XHJcbiAgIGhlaWdodDoxMDBweDtcclxufVxyXG4uaW1nZGl2XHJcbntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG5tYXJnaW4tdG9wOiA1MCU7XHJcbmFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLm51bVxyXG57XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM0QTU2RTI7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbWdkaXYgZGl2XHJcbntcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcbi5hcHByZGl2XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXBwcmRpdiBoMlxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5sYWJlbFxyXG57XHJcbiAgY29sb3I6IzlBQTFCMDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4ubGFiZWx2YWxcclxue1xyXG4gICBjb2xvcjojMkYyRjJGO1xyXG59XHJcbi5saW5rQ29sb3J7XHJcbiAgICBjb2xvcjojNEE1NkUyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IFxyXG59XHJcblxyXG4uS1lDdHh0XHJcbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnJvd2JvcmRcclxue1xyXG4gICAgLypib3JkZXItYm90dG9tOjJweCBzb2xpZCAjNzA3MDcwOyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6MTBweCAwIDEwcHggMTBweDtcclxufVxyXG4ubXRjZFxyXG57XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDsgXHJcbn1cclxuLm5vYm9yZFxyXG57XHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluXHJcbntcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmFwcGVyc29uaW5mb2NhcmRcclxue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNFNUU1RTU7XHJcbn1cclxuLmNsclxyXG57XHJcbiAgICBjb2xvcjojQjJCMkIyOyAgXHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcbi5ib3JkbnVtXHJcbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRBNTZFMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNCU7XHJcbn1cclxuLlJOYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNEE1NkUyO1xyXG4gICAgY29sb3I6d2hpdGUgO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAxcHggc29saWQ7XHJcbiAgICB0ZXh0LXNpemUtYWRqdXN0OjIwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgY29sb3I6d2hpdGUgO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQsIDE5NywgMTM2KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1zdHlsZTogMXB4IHNvbGlkO1xyXG4gICAgdGV4dC1zaXplLWFkanVzdDoyMHB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG5cclxuLmNhbmNlbGJ0bntcclxuICAgIGNvbG9yOmdyZXkgO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjM2LCAyMzYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVqZWN0YnRue1xyXG4gICAgY29sb3I6cmVkIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtc2l6ZS1hZGp1c3Q6MjBweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uYXBwcm92ZWJ0bntcclxuICAgIGNvbG9yOndoaXRlIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0LCAxOTcsIDEzNik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1zdHlsZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1zaXplLWFkanVzdDoyMHB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIFxyXG59XHJcblxyXG4uc3FmdGJ0bntcclxuICAgIGNvbG9yOndoaXRlIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IDFweCBzb2xpZDtcclxuICAgIHRleHQtc2l6ZS1hZGp1c3Q6MjBweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbn1cclxuXHJcbi5hY2J0bntcclxuICAgIGNvbG9yOndoaXRlIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IDFweCBzb2xpZDtcclxuICAgIHRleHQtc2l6ZS1hZGp1c3Q6MjBweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGV7XHJcbiAgICB3aWR0aDo3NXB4O1xyXG4gICAgaGVpZ2h0Ojc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0LCAxOTcsIDEzNik7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxufVxyXG5cclxuLmNvbnRlbnQxe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6aW5oZXJpdDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmNpcmNsZTF7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0LCAxOTcsIDEzNik7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250ZW50MntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOmluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5kZWZhdWx0SW1hZ2V7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzE5YzI4ZjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlVGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNyZW0gMi43cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZHdubGRcclxuICB7XHJcbiAgICAgIGNvbG9yOmJsdWUgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KycBranchVerifySummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-kyc-branch-verify-summary',
            templateUrl: './kyc-branch-verify-summary.component.html',
            styleUrls: ['./kyc-branch-verify-summary.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-home-home-module~views-others-onboarding-corporate-onboarding-corporate-module~views-o~8b943313-es5.js.map