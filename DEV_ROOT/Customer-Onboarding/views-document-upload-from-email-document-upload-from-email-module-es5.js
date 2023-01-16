(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-document-upload-from-email-document-upload-from-email-module"], {
    /***/
    "BSJg":
    /*!*****************************************************************************************!*\
      !*** ./src/app/views/document-upload-from-email/sucess-popup/sucess-popup.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SucessPopupComponent */

    /***/
    function BSJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SucessPopupComponent", function () {
        return SucessPopupComponent;
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

      var SucessPopupComponent = /*#__PURE__*/function () {
        function SucessPopupComponent(dialogRef, data) {
          _classCallCheck(this, SucessPopupComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.Title = "Successfull Message!";
          this.Message = "Uploaded successfully.";
        }

        _createClass(SucessPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// if(this.data.message=='' || this.data.message ==null || this.data.message==undefined){
            //   this.Message = "Are you sure?";
            // }else{
            //   this.Message = this.data.message;
            // }
          }
        }, {
          key: "done",
          value: function done() {
            this.dialogRef.close("done");
          }
        }]);

        return SucessPopupComponent;
      }();

      SucessPopupComponent.ɵfac = function SucessPopupComponent_Factory(t) {
        return new (t || SucessPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      SucessPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SucessPopupComponent,
        selectors: [["app-sucess-popup"]],
        decls: 15,
        vars: 2,
        consts: [[1, "parentDiv"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "full-width"], [1, "tittle"], ["fxFlex", "25", "fxLayoutAlign", "center stretch"], ["src", "assets/images/completed.PNG", 1, "coImg"], [1, "messageClass"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "full-width", 2, "padding-left", "35%"], ["fxFlex", "49%", "fxFlex.xs", "100%"], ["tabindex", "-1", "mat-raised-button", "", 1, "full-width", "mat-elevation-z0", "yesBtn", 3, "click"]],
        template: function SucessPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SucessPopupComponent_Template_button_click_13_listener() {
              return ctx.done();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Done");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Message);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: [".yesBtn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #456EFE;\n  color: white;\n  padding: 0.2rem;\n}\n\n.NoBtn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #F5F5F5;\n  color: black;\n  padding: 0.2rem;\n}\n\n.parentDiv[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.tittle[_ngcontent-%COMP%] {\n  padding-left: 33%;\n}\n\n.coImg[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin-bottom: 10px;\n}\n\n.messageClass[_ngcontent-%COMP%] {\n  font-size: medium;\n  padding-left: 33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3VjZXNzLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNuQjs7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFFbkI7O0FBQUE7RUFDSSxhQUFhO0FBR2pCOztBQURBO0VBQ0ksaUJBQWlCO0FBSXJCOztBQUZBO0VBQ0ksZ0JBQWU7RUFDZixtQkFBbUI7QUFLdkI7O0FBSEE7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBTXJCIiwiZmlsZSI6InN1Y2Vzcy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZXNCdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxufVxyXG4uTm9CdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxufVxyXG4ucGFyZW50RGl2e1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4udGl0dGxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMyU7XHJcbn1cclxuLmNvSW1ne1xyXG4gICAgbWF4LXdpZHRoOjIwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubWVzc2FnZUNsYXNze1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMzJTtcclxufSAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SucessPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sucess-popup',
            templateUrl: './sucess-popup.component.html',
            styleUrls: ['./sucess-popup.component.scss']
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
    "JEza":
    /*!***************************************************************************************!*\
      !*** ./src/app/views/document-upload-from-email/document-upload-from-email.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: DocumentUploadFromEmailModule */

    /***/
    function JEza(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentUploadFromEmailModule", function () {
        return DocumentUploadFromEmailModule;
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


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular2-signaturepad */
      "r1zJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "w9WL");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/shared/directives/shared-directives.module */
      "mnDI");
      /* harmony import */


      var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/shared/shared-material.module */
      "zMWy");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _document_upload_from_email_document_upload_from_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./document-upload-from-email/document-upload-from-email.component */
      "kJIm");
      /* harmony import */


      var _document_upload_from_email_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./document-upload-from-email.routing */
      "lsHn");
      /* harmony import */


      var _sucess_popup_sucess_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./sucess-popup/sucess-popup.component */
      "BSJg");

      var DocumentUploadFromEmailModule = function DocumentUploadFromEmailModule() {
        _classCallCheck(this, DocumentUploadFromEmailModule);
      };

      DocumentUploadFromEmailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DocumentUploadFromEmailModule
      });
      DocumentUploadFromEmailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DocumentUploadFromEmailModule_Factory(t) {
          return new (t || DocumentUploadFromEmailModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_12__["SharedMaterialModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_document_upload_from_email_routing__WEBPACK_IMPORTED_MODULE_15__["DocumentUploadFromEmailRoutes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocumentUploadFromEmailModule, {
          declarations: [_document_upload_from_email_document_upload_from_email_component__WEBPACK_IMPORTED_MODULE_14__["DocumentUploadFromEmailComponent"], _sucess_popup_sucess_popup_component__WEBPACK_IMPORTED_MODULE_16__["SucessPopupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_12__["SharedMaterialModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentUploadFromEmailModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_document_upload_from_email_document_upload_from_email_component__WEBPACK_IMPORTED_MODULE_14__["DocumentUploadFromEmailComponent"], _sucess_popup_sucess_popup_component__WEBPACK_IMPORTED_MODULE_16__["SucessPopupComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_12__["SharedMaterialModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_document_upload_from_email_routing__WEBPACK_IMPORTED_MODULE_15__["DocumentUploadFromEmailRoutes"])],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kJIm":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/views/document-upload-from-email/document-upload-from-email/document-upload-from-email.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: DocumentUploadFromEmailComponent */

    /***/
    function kJIm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentUploadFromEmailComponent", function () {
        return DocumentUploadFromEmailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/shared/services/app-loader/app-loader.service */
      "3sEA");
      /* harmony import */


      var app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/file-upload.service */
      "MJbI");
      /* harmony import */


      var _sucess_popup_sucess_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../sucess-popup/sucess-popup.component */
      "BSJg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");

      function DocumentUploadFromEmailComponent_div_5_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var doc_r23 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", doc_r23)("disabled", ctx_r3.isDocumentOptionDisabled2(doc_r23));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", doc_r23, " ");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select Document name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.frontImageArray[i_r2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_input_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadFromEmailComponent_div_5_input_31_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.onUpload($event, "frontSide", 1, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_32_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.triggerSnapshot(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Take Snapshot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_ng_container_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_ng_container_41_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.cancelUpload("frontSide");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_ng_container_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_43_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_43_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r35.backImageArray[i_r2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_43_input_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadFromEmailComponent_div_5_div_43_input_16_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.onUpload($event, "backSide", 2, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_43_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_43_div_17_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.triggerSnapshot(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Take Snapshot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_43_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_43_ng_container_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r47.cancelUpload("backSide");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_43_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "backup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DocumentUploadFromEmailComponent_div_5_div_43_div_6_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentUploadFromEmailComponent_div_5_div_43_ng_template_7_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back side ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DocumentUploadFromEmailComponent_div_5_div_43_input_16_Template, 1, 0, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DocumentUploadFromEmailComponent_div_5_div_43_div_17_Template, 4, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "insert_drive_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-progress-bar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DocumentUploadFromEmailComponent_div_5_div_43_ng_container_26_Template, 5, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DocumentUploadFromEmailComponent_div_5_div_43_ng_container_27_Template, 4, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_43_Template_mat_icon_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var item_r1 = ctx_r50.$implicit;
            var i_r2 = ctx_r50.index;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49["delete"](item_r1.value, 2, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r2 = ctx_r52.index;
          var item_r1 = ctx_r52.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.backImageArray[i_r2] == "not_available")("ngIfElse", _r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !item_r1.controls.documentName.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.controls.documentName.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.scan2Array[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.progressValBackArray[i_r2], "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r12.progressValBackArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.progressValBackArray[i_r2] && ctx_r12.progressValBackArray[i_r2] != 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.progressValBackArray[i_r2] && ctx_r12.progressValBackArray[i_r2] == 100);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_44_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.callingBox2(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BACKSIDE PAGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_45_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r56.otherImageArray[i_r2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_45_input_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadFromEmailComponent_div_5_div_45_input_14_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.onUpload($event, "others", 3, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_45_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_45_div_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.triggerSnapshot(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Take Snapshot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_45_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_45_ng_container_24_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r68.cancelUpload("others");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_45_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "backup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DocumentUploadFromEmailComponent_div_5_div_45_ng_container_6_Template, 2, 1, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DocumentUploadFromEmailComponent_div_5_div_45_input_14_Template, 1, 0, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DocumentUploadFromEmailComponent_div_5_div_45_div_15_Template, 4, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "insert_drive_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-progress-bar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DocumentUploadFromEmailComponent_div_5_div_45_ng_container_24_Template, 5, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DocumentUploadFromEmailComponent_div_5_div_45_ng_container_25_Template, 4, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_45_Template_mat_icon_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var item_r1 = ctx_r71.$implicit;
            var i_r2 = ctx_r71.index;

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r70["delete"](item_r1.value, 3, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r2 = ctx_r73.index;
          var item_r1 = ctx_r73.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.otherImageArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !item_r1.controls.documentName.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.controls.documentName.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.scan3Array[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.progressValOthersArray[i_r2], "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r14.progressValOthersArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.progressValOthersArray[i_r2] && ctx_r14.progressValOthersArray[i_r2] != 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.progressValOthersArray[i_r2] && ctx_r14.progressValOthersArray[i_r2] == 100);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name:", ctx_r74.nameOnCard[i_r2], "");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Id Number:", ctx_r75.idNumberArray[i_r2], "");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dob: ", ctx_r76.dobArray[i_r2], "");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address: ", ctx_r83.addressArray[i_r2], "");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_5_td_1_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.addressDisplay);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date Of Issue: ", ctx_r78.dateOfIssue, "");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date Of Expiry: ", ctx_r79.dateOfExpiry, "");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_mat_card_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_2_Template, 3, 1, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_3_Template, 3, 1, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_4_Template, 3, 1, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_5_Template, 2, 1, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_6_Template, 3, 1, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentUploadFromEmailComponent_div_5_mat_card_46_tr_7_Template, 3, 1, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.nameOnCard[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.idNumberArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.dobArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.addressArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.dateOfIssue === "undefined" && ctx_r15.documentForm.controls.documentName.value == "Passport");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.dateOfExpiry === "undefined" && ctx_r15.documentForm.controls.documentName.value == "Passport");
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_47_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r86.callingBox3(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OTHER PAGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_49_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_49_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
        }

        if (rf & 2) {
          var k_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r93.otherDocumentArray[i_r2][k_r90], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "backup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentUploadFromEmailComponent_div_5_div_49_div_7_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DocumentUploadFromEmailComponent_div_5_div_49_ng_template_8_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "another page ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadFromEmailComponent_div_5_div_49_Template_input_change_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

            var k_r90 = ctx.index;

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r96.onUpload($event, "otherDocument", k_r90 + 4, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "insert_drive_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-progress-bar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_49_Template_mat_icon_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

            var k_r90 = ctx.index;

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var item_r1 = ctx_r100.$implicit;
            var i_r2 = ctx_r100.index;

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r99.deleteOtherDocument(item_r1.value, i_r2, k_r90);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var k_r90 = ctx.index;

          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", k_r90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.otherDocumentArray[i_r2][k_r90] == "not_available")("ngIfElse", _r92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.progressValOtherDocumentArray[i_r2][k_r90], "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r17.progressValOtherDocumentArray[i_r2][k_r90]);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_50_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r102.addotherpage(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ADD ANOTHER PAGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_div_5_div_51_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var item_r1 = ctx_r106.$implicit;
            var i_r2 = ctx_r106.index;

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r105.deleteDocument(item_r1.value, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "webcam", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function DocumentUploadFromEmailComponent_div_5_div_52_Template_webcam_imageCapture_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r108.handleImage($event, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 500)("width", 1200)("trigger", ctx_r20.triggerObservable);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "webcam", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function DocumentUploadFromEmailComponent_div_5_div_53_Template_webcam_imageCapture_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r111.handleImage1($event, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 500)("width", 1200)("trigger", ctx_r21.triggerObservable);
        }
      }

      function DocumentUploadFromEmailComponent_div_5_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "webcam", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function DocumentUploadFromEmailComponent_div_5_div_54_Template_webcam_imageCapture_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r114.handleImage2($event, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 500)("width", 1200)("trigger", ctx_r22.triggerObservable);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "errbd": a0
        };
      };

      function DocumentUploadFromEmailComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Document Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DocumentUploadFromEmailComponent_div_5_Template_mat_select_valueChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

            var i_r2 = ctx.index;

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r117.changeValue2($event, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DocumentUploadFromEmailComponent_div_5_mat_option_13_Template, 2, 3, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DocumentUploadFromEmailComponent_div_5_mat_error_14_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "backup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DocumentUploadFromEmailComponent_div_5_div_21_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DocumentUploadFromEmailComponent_div_5_ng_template_22_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Front side ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DocumentUploadFromEmailComponent_div_5_input_31_Template, 1, 0, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DocumentUploadFromEmailComponent_div_5_div_32_Template, 4, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "insert_drive_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-progress-bar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DocumentUploadFromEmailComponent_div_5_ng_container_41_Template, 5, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DocumentUploadFromEmailComponent_div_5_ng_container_42_Template, 4, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DocumentUploadFromEmailComponent_div_5_div_43_Template, 30, 9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DocumentUploadFromEmailComponent_div_5_div_44_Template, 6, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DocumentUploadFromEmailComponent_div_5_div_45_Template, 28, 8, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DocumentUploadFromEmailComponent_div_5_mat_card_46_Template, 8, 6, "mat-card", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DocumentUploadFromEmailComponent_div_5_div_47_Template, 6, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DocumentUploadFromEmailComponent_div_5_div_49_Template, 34, 5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DocumentUploadFromEmailComponent_div_5_div_50_Template, 6, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, DocumentUploadFromEmailComponent_div_5_div_51_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, DocumentUploadFromEmailComponent_div_5_div_52_Template, 2, 3, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DocumentUploadFromEmailComponent_div_5_div_53_Template, 2, 3, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, DocumentUploadFromEmailComponent_div_5_div_54_Template, 2, 3, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Document ", i_r2 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, !item_r1.controls.documentName.valid && item_r1.controls.documentName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.document_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.controls.documentName.valid && item_r1.controls.documentName.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.frontImageArray[i_r2] == "not_available")("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !item_r1.controls.documentName.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.controls.documentName.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scan1Array[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.progressValFrontArray[i_r2], "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.progressValFrontArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.progressValFrontArray[i_r2] && ctx_r0.progressValFrontArray[i_r2] != 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.progressValFrontArray[i_r2] && ctx_r0.progressValFrontArray[i_r2] == 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.secondBoxArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.secondBoxArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.thirdBoxArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pancard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.secondBoxArray[i_r2] && !ctx_r0.thirdBoxArray[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.docarray1[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newOtherPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scan1Array[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scan2Array[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scan3Array[i_r2]);
        }
      }

      var DocumentUploadFromEmailComponent = /*#__PURE__*/function () {
        function DocumentUploadFromEmailComponent(http, tokenService, dialog, router, fb, snack, ls, shareDataService, cdr, api, dialogService, loader, fileService) {
          var _this = this;

          _classCallCheck(this, DocumentUploadFromEmailComponent);

          this.http = http;
          this.tokenService = tokenService;
          this.dialog = dialog;
          this.router = router;
          this.fb = fb;
          this.snack = snack;
          this.ls = ls;
          this.shareDataService = shareDataService;
          this.cdr = cdr;
          this.api = api;
          this.dialogService = dialogService;
          this.loader = loader;
          this.fileService = fileService;
          this.webcamImage = null;
          this.webcamImage1 = null;
          this.scan1Array = [];
          this.scan2Array = [];
          this.scan3Array = [];
          this.customerId = null;
          this.frontImageArray = [];
          this.backImageArray = [];
          this.otherImageArray = [];
          this.otherDocumentArray = [];
          this.boxArray = []; //document_type: string;

          this.document_type = ["6", "7", "8"];
          this.custDocExist = false;
          this.selectedOptions2 = [];
          this.documentSide = null;
          this.frontImage = null;
          this.backImage = null;
          this.otherImage = null;
          this.secondBoxArray = [];
          this.thirdBoxArray = [];
          this.ocrResult = "Recognizing...";
          this.selectedDocumentTypes2 = [];
          this.nameOnCard = [];
          this.dobArray = [];
          this.idNumberArray = [];
          this.pincode = [];
          this.gender = [];
          this.state = [];
          this.addressArray = [];
          this.dataFetched = false;
          this.boxArray2 = [];
          this.boxArray3 = [];
          this.doc_name = [];
          this.docuNameArray = [];
          this.arrayOfImageArrays0 = [];
          this.arrayOfImageArrays1 = [];
          this.arrayOfImageArrays2 = [];
          this.docValArray = [];
          this.docarray1 = [];
          this.newOtherPage = false;
          this.otherDocPages = [];
          this.otherDocumentArray2 = [];
          this.ff = false;
          this.bf = false;
          this.docName = "document_name";
          this.progressValFrontArray = [];
          this.progressValBackArray = [];
          this.progressValOthersArray = [];
          this.progressValOtherDocumentArray = [];
          this.customerDocs = [];
          this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

          this.aadharParser = function (str) {
            try {
              var _ret = function () {
                var adharNumber,
                    dob,
                    name,
                    nameLineIndex = 2;
                var asciiStr = str.replace(/[^\x00-\x7F]/g, "").trim();
                var lines = asciiStr.split("\n");

                for (var i = lines.length - 1; i >= 0; i--) {
                  var count = 0,
                      startIndex = -1;

                  for (var j = 0; j < lines[i].length; j++) {
                    if (lines[i][j] >= "0" && lines[i][j] <= "9") {
                      count++;
                      if (startIndex === -1) startIndex = j;
                    }
                  }

                  if (count >= 12) {
                    adharNumber = lines[i].substr(startIndex, startIndex + 14);
                  }
                }

                var _loop = function _loop(_i) {
                  ["DOB", "Year of Birth"].some(function (docString) {
                    var dobIndex = lines[_i].indexOf(docString);

                    if (dobIndex !== -1) {
                      dob = lines[_i].trim().slice(dobIndex, lines[_i].length).split(" ").pop();
                      nameLineIndex = _i - 1;
                      console.log(dob);
                    }
                  });
                };

                for (var _i = 0; _i < lines.length; _i++) {
                  _loop(_i);
                }

                var names = lines[nameLineIndex].split(" ").filter(function (x) {
                  return x.length > 1;
                }).join(" ");
                console.log(names);
                return {
                  v: {
                    dob: dob,
                    adharNumber: adharNumber,
                    fullName: names
                  }
                };
              }();

              if (typeof _ret === "object") return _ret.v;
            } catch (error) {
              console.log(error);
              console.error("Unable to parse aadhar");
            }
          };

          this.isDocumentOptionDisabled2 = function (value) {
            return _this.selectedOptions2.includes(value);
          };

          this.panCardParser = function (str) {
            try {
              var asciiStr = str.replace(/[^\x00-\x7F]/g, "");
              var startIndex = asciiStr.indexOf("Permanent");
              var nameIndex = asciiStr.indexOf("Name");
              var panNumber = asciiStr.slice(startIndex, nameIndex).match("[A-Z]{5}[0-9]{4}[A-Z]{1}")[0]; // Returns ain,ain,ain

              var fatherNameIndex = asciiStr.indexOf("Father's Name :"); //const slicedStr = asciiStr.slice(fatherNameIndex, str.length).split('\n');

              var nameString = asciiStr.slice(nameIndex, fatherNameIndex).split("\n"); // .find(str => str.length > 3);

              var displayName = nameString[1].split(" ");
              var dobString = asciiStr.slice(asciiStr.indexOf("Date of Birth"), asciiStr.length);
              var dob = dobString.split("\n")[1].split(" ")[0];
              return {
                panNumber: panNumber,
                name: "".concat(displayName[0], " ").concat(displayName[1]),
                dateOfBirth: dob
              };
            } catch (error) {
              console.log(error);
              console.error("Unable to parse pan card");

              _this.snack.open("Please Upload Valid Document", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right"
              });
            }
          };

          this.passportParser = function (str) {
            var _a;

            try {
              var dateOfIssue, dateOfExpiry;
              var asciiStr = str.replace(/[^\x00-\x7F]/g, "");
              var nameIndex = asciiStr.indexOf("Given Name");
              var lines = asciiStr.slice(nameIndex, asciiStr.length).split("\n");
              var doIssueIndex = lines.findIndex(function (line) {
                return line.indexOf("Date of Issue") > -1;
              }) + 1;

              if (doIssueIndex > 0) {
                var dates = lines[doIssueIndex].split(" ");
                dateOfIssue = dates[dates.length - 2];
                dateOfExpiry = dates[dates.length - 2];
              }

              var nationalityIndex = asciiStr.indexOf("Nationality");
              var dob = (_a = asciiStr.slice(nationalityIndex, asciiStr.length)) === null || _a === void 0 ? void 0 : _a.split("\n")[1].split(" ").pop();
              var issueNoString;
              var issueNoStringArray = asciiStr.trim().split("\n");

              for (var i = issueNoStringArray.length - 1; i >= 0; i--) {
                if (issueNoStringArray[i].includes("<")) {
                  issueNoString = issueNoStringArray[i].substr(0, issueNoStringArray[i].indexOf("<"));
                  break;
                }
              }

              return {
                dob: dob,
                name: lines[1],
                issueNoString: issueNoString,
                dateOfIssue: dateOfIssue,
                dateOfExpiry: dateOfExpiry
              };
            } catch (error) {
              console.error("Unable to parse passport");
            }
          };
        }

        _createClass(DocumentUploadFromEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            localStorage.getItem("customer_id") ? this.getCustomerDocuments(localStorage.getItem("customer_id")) : "";
            this.documentForm = this.fb.group({
              documentName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              frontSide: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              backSide: [""],
              others: [""],
              items: this.fb.array([this.inititemrows("")])
            });
            this.doc_name = ["Aadhar card", "Pan card", "Passport"];
            this.docValArray = ["frontSide", "backSide", "others"];
            console.log(this.documentForm);
            console.log(this.docName);
            this.tokenService.getDropDownValues(this.docName).subscribe(function (resp) {
              _this2.document_name = resp;
              console.log("resp", resp);
              console.log("this.document_name :: ", _this2.document_name);
            });
            this.api.getName().subscribe(function (resp) {
              _this2.assignName(resp.name);

              console.log("resp.name", resp.name);
            });
            this.api.getOCR().subscribe(function (resp) {
              console.log("ocr resp from backend ", resp);
            });
            this.shareDataService.getCustomerId.subscribe(function (cId) {
              _this2.api.getOCR().subscribe(function (resp) {
                console.log("ocr resp from backend ", resp);

                _this2.assignOCRValues(resp);
              });

              console.log("cId=", cId);

              if (cId !== null) {
                _this2.refreshCustomerId = cId;

                _this2.getCustomerDocuments(cId);

                console.log("cId=", cId);
              }
            });
            this.documentForm.valueChanges.subscribe(function (data) {
              console.log("data:: ", data);
              console.log("this.documentForm", _this2.documentForm);
              console.log("data.doc_list.length", data.doc_list);

              if (data.doc_list.length > 0) {
                console.log("data.doc_list.length", data.doc_list.length);
                _this2.selectedOptions2 = [];
                data.doc_list.forEach(function (element, index) {
                  console.log("index :: ", index);

                  _this2.selectedOptions2.push(element.documentType);
                });
              }
            });
            this.api.getKycDataFetchedInfo().subscribe(function (data) {
              console.log(data);
              _this2.documentForm = _this2.fb.group({
                documentsList: _this2.fb.array([_this2.createItem()]),
                doc_list: data === "DATA FETCH" ? _this2.fb.array([]) : _this2.fb.array([_this2.createDocItem()]),
                id: [""],
                upload: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
              console.log(_this2.documentForm.get("documentName"));
              console.log(_this2.documentForm.value.documentsList[0].documentName);
              console.log("this.documentForm", _this2.documentForm);
              console.log("documentsList", _this2.documentsList);
              console.log("doc_list", _this2.doc_list);

              if (data === "DATA FETCH") {
                _this2.dataFetched = true;
                _this2.dataFetchedValue = data;
              } else {
                _this2.dataFetched = false;
              }
            });
            this.disableNext = true;
          }
        }, {
          key: "inititemrows",
          value: function inititemrows(item) {
            return this.fb.group({
              id: item ? item.id : [""],
              fileUrl: item ? item.fileUrl : [""]
            });
          }
        }, {
          key: "addDocuments",
          value: function addDocuments() {
            this.newOtherPage = false;
            console.log(this.documentForm);
            console.log(this.documentForm.get("documentsList"));
            console.log(this.documentForm.get("documentsList"));
            this.disableNext = true;
            this.documentsList = this.documentForm.get("documentsList");
            console.log(this.doc_list);
            this.documentsList.push(this.createItem());
            this.doc_list.push(this.createDocItem());
          }
        }, {
          key: "createDocItem",
          value: function createDocItem() {
            return this.fb.group({
              documentName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              frontSide: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              backSide: [""],
              others: [""],
              fileUrl: [""]
            });
          }
        }, {
          key: "createItem",
          value: function createItem() {
            return this.fb.group({
              id: [""],
              documentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              documentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "assignOCRValues",
          value: function assignOCRValues(resp) {
            console.log(resp);
            this.dob = resp.dob;
            this.namePancard = resp.namePancard;
            this.panNumber = resp.panNumber;
            this.frontImageArray[0] = resp.imageOCR; //added code

            this.backImageArray[0] = resp.imageOCRBack; //added code

            if (resp.imageOCRBack) {
              this.backImageArray[0] = resp.imageOCRBack;
              this.secondBoxArray[0] = true;
              this.address = resp.address;
              this.addressDisplay = true;
              this.progressValBackArray[0] = 100;
            }

            var hasNonEmptyFields = Object.values(resp).some(function (value) {
              return Boolean(value);
            });
            console.log("hasNonEmptyFields", hasNonEmptyFields);

            if (hasNonEmptyFields) {
              this.documentForm.get("documentName").patchValue("Aadhar card");
              console.log(this.documentForm.get("documentName"));
              this.progressValFrontArray[0] = 100; //this.enableAadharReadOnly = true;

              this.disableNext = true;
              this.pancard = true;
            }
          }
        }, {
          key: "delete",
          value: function _delete(report, value, i) {
            var _this3 = this;

            console.log(report);
            this.docum_name = report.documentName;
            this.customerId = sessionStorage.getItem("customer_id");

            if (value == 2) {
              this.secondBoxArray[i] = false;
              this.addressDisplay = false;
              this.progressValBackArray[i] = 0;
              this.backImageArray[i] = null;
              this.backSelected = null;
              this.document_side = value;
              this.api.deleteCustDoc(this.customerId, this.docum_name, this.document_side).subscribe(function (data) {
                _this3.displayVal1 = false;
              });
            }

            if (value == 3) {
              this.thirdBoxArray[i] = false;
              this.progressValOthersArray[i] = 0;
              this.otherImageArray[i] = null;
              this.othersSelected = null;
              this.document_side = value;
              this.api.deleteCustDoc(this.customerId, this.docum_name, this.document_side).subscribe(function (data) {});
            }

            this.disableNext = false;
          }
        }, {
          key: "deleteOtherDocument",
          value: function deleteOtherDocument(report, i, k) {
            this.docum_name = report.documentName;
            this.customerId = sessionStorage.getItem("customer_id");
            this.newDocumentSide = k + 4;

            if (this.docarray1[i][k]) {
              this.docarray1[i].pop();
              this.otherDocumentArray[i][k] = null;
              console.log("this.otherDocumentArray[i][k] ", this.otherDocumentArray[i][k]);
            } else {
              console.log("this.docarray1", this.docarray1);
            }

            this.api.deleteCustDoc(this.customerId, this.docum_name, this.newDocumentSide).subscribe(function (data) {});
          }
        }, {
          key: "assignName",
          value: function assignName(name) {
            this.name = name.toLowerCase();
          }
        }, {
          key: "addotherpage",
          value: function addotherpage(a) {
            if (this.docarray1[a]) {
              console.log("this.docarray1[a]", this.docarray1[a]);
              console.log("this.docarray1[a]", this.docarray1[a].boxes);
              this.docarray1[a].push(this.inititemrows(""));
            } else {
              var otherArray = [this.inititemrows("")];
              this.docarray1[a] = otherArray;
              this.otherDocumentArray[a] = [];
              this.progressValOtherDocumentArray[a] = [];
            }

            console.log("docarray1", this.docarray1);
          }
        }, {
          key: "createOtherForm",
          value: function createOtherForm(item) {
            return this.fb.group({
              id: [""],
              // documentType: ["", Validators.required],
              fileData: item ? item.fileData : [""],
              fileUrl: item ? item.fileUrl : [""]
            });
          }
        }, {
          key: "triggerSnapshot",
          value: function triggerSnapshot(i) {
            this.trigger.next();
            this.scan1Array[i] = false;
            this.scan2Array[i] = false;
            this.scan3Array[i] = false;
          }
        }, {
          key: "callingBox2",
          value: function callingBox2(i) {
            this.secondBoxArray[i] = true;
            this.disableNext = true; //this.enableAadharReadOnly = false;

            console.log(this.secondBoxArray[i]);
          }
        }, {
          key: "callingBox3",
          value: function callingBox3(i) {
            this.thirdBoxArray[i] = true;
            this.disableNext = true;
            this.newOtherPage = true; //this.enableAadharReadOnly = false;
          }
        }, {
          key: "doOCR",
          value: function doOCR(img, docVal, selectedFile, docSideEnum, i) {
            var _this4 = this;

            this.loader.open(); // :: Verify Pan card ::

            if (this.documentForm.value.documentsList[i].documentName === "Pan card") {
              this.fileService.uploadPan(selectedFile).subscribe(function (res) {
                _this4.loader.close();

                if (typeof res === "object") {
                  console.log("api res -- ", res.data);

                  if (!res.data["name"].value || !res.data["pan"].value) {
                    _this4.snack.open("The document is not a valid Pan card", "Cancel", {
                      duration: 4000,
                      verticalPosition: "top",
                      horizontalPosition: "center"
                    });

                    return;
                  }

                  _this4.nameDoc = res.data["name"].value;

                  _this4.dialogService.confirmationDialog(_this4.nameDoc, _this4.name).subscribe(function (response) {
                    console.log(response);

                    if (response == "No") {
                      _this4.changeValue2_Ocr(docVal, i);
                    }

                    if (response == "Yes") {
                      _this4.nameOnCard[i] = res.data["name"].value;
                      _this4.dobArray[i] = res.data["dob"].value;
                      _this4.idNumberArray[i] = res.data["pan"].value;

                      _this4.openDialogueBoxForOcrDetailsDisplay(_this4.nameOnCard[i], _this4.dobArray[i], _this4.idNumberArray[i], _this4.addressArray[i], _this4.pincode[i], _this4.gender[i], _this4.state[i]);

                      _this4.uploadDoc(img, selectedFile, docVal, docSideEnum, i);
                    }
                  });
                }
              }, function (err) {
                console.log("Something went wrong! Err:: ", err);

                _this4.loader.close();

                _this4.snack.open("The document is not a valid Pan card", "Cancel", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "center"
                });

                return;
              });
            } // :: Verify Passport ::


            if (this.documentForm.value.documentsList[i].documentName == "Passport") {
              this.fileService.uploadPassport(selectedFile).subscribe(function (res) {
                var _a, _b, _c, _d;

                _this4.loader.close();

                if (typeof res === "object") {
                  console.log("api res -- ", res.data);

                  if (!res.data["passport_no"].value) {
                    _this4.snack.open("The document is not a valid Passport", "Cancel", {
                      duration: 4000,
                      verticalPosition: "top",
                      horizontalPosition: "center"
                    });

                    return;
                  }

                  _this4.nameDoc = !!((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a["surname"]) === null || _b === void 0 ? void 0 : _b.value) ? "".concat(res.data["given_name"].value, " ").concat((_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c["surname"]) === null || _d === void 0 ? void 0 : _d.value) : res.data["given_name"].value;

                  _this4.dialogService.confirmationDialog(_this4.nameDoc, _this4.name).subscribe(function (response) {
                    var _a, _b, _c, _d;

                    console.log(response);

                    if (response == "No") {
                      _this4.changeValue2_Ocr(docVal, i);
                    }

                    if (response == "Yes") {
                      // this.nameOnCard[i] = res.data['given_name'].value;
                      _this4.nameOnCard[i] = !!((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a["surname"]) === null || _b === void 0 ? void 0 : _b.value) ? "".concat(res.data["given_name"].value, " ").concat((_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c["surname"]) === null || _d === void 0 ? void 0 : _d.value) : res.data["given_name"].value;
                      _this4.dobArray[i] = res.data["dob"].value;
                      _this4.idNumberArray[i] = res.data["passport_no"].value;
                      _this4.dateOfIssue = res.data["issue_date"].value;
                      _this4.dateOfExpiry = res.data["expiry_date"].value;
                      _this4.gender[i] = res.data["gender"].value;

                      _this4.openDialogueBoxForOcrDetailsDisplay(_this4.nameOnCard[i], _this4.dobArray[i], _this4.idNumberArray[i], _this4.addressArray[i], _this4.pincode[i], _this4.gender[i], _this4.state[i]);

                      _this4.uploadDoc(img, selectedFile, docVal, docSideEnum, i);
                    }
                  });
                }
              }, function (err) {
                console.log("Something went wrong! Err:: ", err);

                _this4.loader.close();

                _this4.snack.open("The document is not a valid Passport", "Cancel", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "center"
                });

                return;
              });
            } // :: Verify Aadhaar Front ::


            if (this.documentForm.value.documentsList[i].documentName == "Aadhar card" && docSideEnum == "1") {
              this.fileService.uploadAadhaarFront(selectedFile).subscribe(function (res) {
                _this4.loader.close();

                if (typeof res === "object") {
                  console.log("api res -- ", res.data);

                  if (!res.data["no"].value) {
                    _this4.snack.open("The document is not a valid Aadhaar card", "Cancel", {
                      duration: 4000,
                      verticalPosition: "top",
                      horizontalPosition: "center"
                    });

                    return;
                  }

                  _this4.nameDoc = res.data["name"].value;

                  _this4.dialogService.confirmationDialog(_this4.nameDoc, _this4.name).subscribe(function (response) {
                    console.log(response);

                    if (response == "No") {
                      _this4.changeValue2_Ocr(docVal, i);
                    }

                    if (response == "Yes") {
                      _this4.nameOnCard[i] = res.data["name"].value;
                      _this4.dobArray[i] = res.data["dob"].value;
                      _this4.idNumberArray[i] = res.data["no"].value;
                      _this4.gender[i] = res.data["gender"].value;

                      _this4.openDialogueBoxForOcrDetailsDisplay(_this4.nameOnCard[i], _this4.dobArray[i], _this4.idNumberArray[i], _this4.addressArray[i], _this4.pincode[i], _this4.gender[i], _this4.state[i]);

                      _this4.uploadDoc(img, selectedFile, docVal, docSideEnum, i);
                    }
                  });
                }
              }, function (err) {
                console.log("Something went wrong! Err:: ", err);

                _this4.loader.close();

                _this4.snack.open("The document is not a valid Aadhaar card", "Cancel", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "center"
                });

                return;
              });
            } // :: Verify Aadhaar Back ::


            if (this.documentForm.value.documentsList[i].documentName == "Aadhar card" && docSideEnum == "2") {
              this.fileService.uploadAadhaarBack(selectedFile).subscribe(function (res) {
                _this4.loader.close();

                if (typeof res === "object") {
                  console.log("api res -- ", res.data);

                  if (!res.data["no"].value) {
                    _this4.snack.open("The document is not a valid Aadhaar card", "Cancel", {
                      duration: 4000,
                      verticalPosition: "top",
                      horizontalPosition: "center"
                    });

                    return;
                  }

                  _this4.dialogService.confirmationDialog(_this4.nameDoc, _this4.name).subscribe(function (response) {
                    console.log(response);

                    if (response == "No") {
                      _this4.changeValue2_Ocr(docVal, i);
                    }

                    if (response == "Yes") {
                      _this4.addressArray[i] = res.data["address"].value;
                      _this4.pincode[i] = res.data["pin"].value;
                      _this4.state[i] = res.data["state"].value;

                      _this4.openDialogueBoxForOcrDetailsDisplay(_this4.nameOnCard[i], _this4.dobArray[i], _this4.idNumberArray[i], _this4.addressArray[i], _this4.pincode[i], _this4.gender[i], _this4.state[i]);

                      _this4.uploadDoc(img, selectedFile, docVal, docSideEnum, i);
                    }
                  });
                }
              }, function (err) {
                console.log("Something went wrong! Err:: ", err);

                _this4.loader.close();

                _this4.snack.open("The document is not a valid Aadhaar card", "Cancel", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "center"
                });

                return;
              });
            }
          }
        }, {
          key: "openDialogueBoxForOcrDetailsDisplay",
          value: function openDialogueBoxForOcrDetailsDisplay(nameOnCard, dobArray, idNumberArray, address, pincode, gender, state) {
            this.openDialog1(nameOnCard, dobArray, idNumberArray, address, pincode, gender, state);
          }
        }, {
          key: "openDialog1",
          value: function openDialog1(nameOnCard, dobArray, idNumberArray, address, pincode, gender, state) {}
        }, {
          key: "handleImage",
          value: function handleImage(webcamImage, i) {
            this.webcamImage = webcamImage;
            this.fun(this.webcamImage, i);
          }
        }, {
          key: "handleImage1",
          value: function handleImage1(webcamImage, i) {
            this.webcamImage1 = webcamImage;
            this.fun1(this.webcamImage1, i);
          }
        }, {
          key: "changeValue2",
          value: function changeValue2(value, i) {
            var _this5 = this;

            this.disableNext = true;

            if (this.selectedDocumentTypes2[i]) {
              this.selectedOptions2 = this.selectedOptions2.filter(function (val) {
                return val !== _this5.selectedDocumentTypes2[i];
              });
            }

            this.selectedDocumentTypes2[i] = value;
            this.selectedOptions2.push(value); // this.documentForm.controls.frontSide.setValue('');

            this.secondBoxArray[i] = false;
            this.thirdBoxArray[i] = false;
            this.frontImageArray[i] = "";
            this.backImageArray[i] = "";
            this.otherImageArray[i] = "";
            this.backSelected = "";
            this.frontSelected = "";
            this.othersSelected = "";
            this.progressValFrontArray[i] = 0;
            this.progressValBackArray[i] = 0;
            this.pancard = false;
            console.log("i=", i);
          }
        }, {
          key: "changeValue2_Ocr",
          value: function changeValue2_Ocr(docVal, i) {
            //this.documentForm.controls.frontSide.setValue('');
            // this.documentForm.reset();
            if (docVal === "frontSide") {
              this.frontImageArray[i] = "";
              this.frontSelected = "";
              this.progressValFrontArray[i] = 0;
            }

            if (docVal === "backSide") {
              this.secondBoxArray[i] = false;
              this.backImageArray[i] = "";
              this.backSelected = "";
              this.progressValBackArray[i] = 0;
            }

            if (docVal === "others") {
              this.thirdBoxArray[i] = false;
              this.otherImageArray[i] = "";
              this.othersSelected = "";
              this.progressValOthersArray[i] = 0; //this.enableAadharReadOnly = true;

              this.disableNext = true;
            }
          }
        }, {
          key: "j",
          value: function j(arg0, _j) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "handleImage2",
          value: function handleImage2(webcamImage, i) {
            console.log(i);
            this.webcamImage2 = webcamImage;
            this.function2(this.webcamImage2, i);
          }
        }, {
          key: "function2",
          value: function function2(webcamImage, i) {
            var _this6 = this;

            console.log(i);
            var cId = this.customerId;
            var uploadData2 = new FormData();
            var data = {
              customerId: this.refreshCustomerId,
              documentName: this.documentForm.value.documentName,
              documentType: "3",
              fileType: webcamImage._mimeType,
              fileName: "doc",
              verificationType: "KYC verification",
              documentSide: 3,
              idNumber: this.panNumber
            };
            console.log(webcamImage.imageAsDataUrl);
            this.otherImageArray[i] = webcamImage.imageAsDataUrl; // this.doOCR(this.imageURL2);

            this.displayVal2 = false;
            var file = this.dataURLtoFile(webcamImage.imageAsDataUrl, "Aadhar");
            uploadData2.append("data", JSON.stringify(data));
            uploadData2.append("file", file);
            this.tokenService.upload(uploadData2).subscribe(function (res) {
              _this6.progressValOthersArray[i] = 100;

              if (res.type === 4) {
                if (res.body) {
                  console.log("res.body.id", res.body.id);

                  _this6.assignIdValues("others", res.body.id);
                }
              }

              _this6.documentForm.get("backSide").patchValue(true);
            }, function (error) {
              if (error.status == 201) {
                _this6.ff = true;

                _this6.documentForm.get("backSide").patchValue(true);

                _this6.shotToast("Document Uploaded!");
              }
            });
          }
        }, {
          key: "triggerObservable",
          get: function get() {
            return this.trigger.asObservable();
          }
        }, {
          key: "getCustomerDocuments",
          value: function getCustomerDocuments(cId) {
            var _this7 = this;

            cId ? this.cId = cId : "";
            console.log(cId);
            this.router.navigate(['/document'], {
              queryParams: {
                customerId: this.cId
              }
            });

            var _loop2 = function _loop2(key) {
              if (Object.prototype.hasOwnProperty.call(_this7.document_type, key)) {
                var element = _this7.document_type[key];
                console.log(element, key, cId);

                _this7.tokenService.getCustomerDocuments(cId, element).subscribe(function (data) {
                  var _a, _b, _c;

                  console.log(key, data, _this7.documentForm);
                  _this7.customerDocs = data;
                  _this7.docuNameArray = ["Aadhar card", "Pan card", "Passport"];
                  console.log(_this7.documentForm.controls.documentsList["controls"]);

                  _this7.documentForm.controls.documentsList["controls"][0].controls.documentName.setValue(_this7.docuNameArray[0]); //this.documentForm.get('documentName').patchValue(this.frontImage.documentName);


                  _this7.doc_name = ["Aadhar card", "Pan card", "Passport"];

                  for (var j = 0; j < ((_a = _this7.customerDocs) === null || _a === void 0 ? void 0 : _a.length); j++) {
                    if (_this7.customerDocs[j]) {
                      console.log(_this7.customerDocs[j].documentName);

                      for (var i = 0; i < 3; i++) {
                        if (_this7.customerDocs[j].documentName == _this7.doc_name[i] && _this7.customerDocs[j].documentSide == 1) {
                          _this7.frontImageArray[i] = _this7.customerDocs[j].fileUrl;
                          _this7.progressValFrontArray[i] = 100;
                          console.log("index", i);
                        }
                      }

                      for (var _i2 = 0; _i2 < 3; _i2++) {
                        if (_this7.customerDocs[j].documentName == _this7.doc_name[_i2] && _this7.customerDocs[j].documentSide == 2) {
                          _this7.backImageArray[_i2] = _this7.customerDocs[j].fileUrl;
                          _this7.progressValBackArray[_i2] = 100;
                          _this7.secondBoxArray[_i2] = true;
                        }
                      }

                      for (var _i3 = 0; _i3 < 3; _i3++) {
                        if (_this7.customerDocs[j].documentName == _this7.doc_name[_i3] && _this7.customerDocs[j].documentSide == 3) {
                          _this7.otherImageArray[_i3] = _this7.customerDocs[j].fileUrl;
                          _this7.progressValOthersArray[_i3] = 100;
                          _this7.thirdBoxArray[_i3] = true;
                        }
                      }

                      for (var _i4 = 0; _i4 < 3; _i4++) {
                        if (_this7.customerDocs[j].documentName == _this7.doc_name[_i4] && _this7.customerDocs[j].documentSide > 3) {
                          _this7.fetchChildIndex = _this7.customerDocs[j].documentSide - 4;

                          if (_this7.progressValOtherDocumentArray[_i4][_this7.fetchChildIndex]) {
                            _this7.progressValOtherDocumentArray[_i4][_this7.fetchChildIndex] = 100;
                          } else {
                            //this.otherDocumentArray[i].splice(this.childindex, 0, this.image);
                            _this7.progressValOtherDocumentArray[_i4][_this7.fetchChildIndex] = 1070;
                          }

                          _this7.newOtherPage = true;

                          if (_this7.docarray1[_i4]) {
                            _this7.docarray1[_i4].push(_this7.inititemrows(""));
                          } else {
                            var otherArray = [_this7.inititemrows("")];
                            _this7.docarray1[_i4] = otherArray;
                            _this7.otherDocumentArray[_i4] = [];
                          }

                          _this7.otherDocumentArray[_i4][_this7.fetchChildIndex] = _this7.customerDocs[j].fileUrl;
                          console.log("this.otherDocumentArray", _this7.otherDocumentArray);
                        }
                      }
                    }

                    _this7.disableNext = false;
                  }

                  if (((_b = _this7.customerDocs) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    _this7.page_id = _this7.ls.getItem("page_id");
                    console.log(_this7.page_id);

                    if (_this7.customerDocs[0].documentName == "Pan card" && _this7.page_id !== 2) {
                      var element2 = document.getElementById("auto_trigger");

                      if (element2) {
                        console.log(element2);
                        element2.click();
                      }

                      _this7.disableNext = false;
                    }

                    (_c = _this7.documentForm.controls.documentsList["controls"][1].controls) === null || _c === void 0 ? void 0 : _c.documentName.setValue(_this7.docuNameArray[1]);

                    if (_this7.customerDocs[0].documentName == "Passport" && _this7.page_id !== 2) {
                      var element3 = document.getElementById("auto_trigger");

                      if (element3) {
                        console.log(element3);
                        element3.click();
                      }

                      _this7.disableNext = false;
                    }

                    _this7.documentForm.controls.documentsList["controls"][2].controls.documentName.setValue(_this7.docuNameArray[2]);

                    if (_this7.frontImage.documentName == "Pan card") {
                      _this7.panNumber = _this7.customerDocs.find(function (item) {
                        return item.documentSide == 2;
                      }).idNumber;
                    }

                    if (_this7.frontImage.documentName == "Aadhar card") {
                      _this7.panNumber = _this7.customerDocs.find(function (item) {
                        return item.documentSide == 1;
                      }).idNumber;
                    }

                    if (_this7.panNumber) {
                      _this7.pancard = true;
                    }

                    if (_this7.frontImage != null) {
                      _this7.progressValFrontArray[0] = 100;
                    }

                    if (_this7.backImage != null) {
                      _this7.progressValBackArray[0] = 100;
                    }

                    if (_this7.otherImage != null) {
                      _this7.progressValOthersArray[0] = 100;
                    }

                    var payload = {
                      documentName: _this7.customerDocs[0].documentName,
                      frontSide: _this7.customerDocs[0].documentName,
                      backSide: _this7.customerDocs[0].documentName
                    };

                    _this7.documentForm.patchValue(payload);

                    console.log(_this7.customerDocs[0].documentName);
                  }

                  _this7.cdr.markForCheck();

                  console.log("end of api");
                });
              }
            };

            for (var key in this.document_type) {
              _loop2(key);
            }
          }
        }, {
          key: "convertBlob",
          value: function convertBlob(docImage) {
            var objectURL = "data:image/jpeg;base64," + docImage;
            var source = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            return source;
          }
        }, {
          key: "scan",
          value: function scan(i) {
            this.scan1Array[i] = true;
            this.scan2Array[i] = false;
            this.scan3Array[i] = false; //this.enableAadharReadOnly = true;

            this.disableNext = false;
          }
        }, {
          key: "scan12",
          value: function scan12(i) {
            this.scan1Array[i] = false;
            this.scan2Array[i] = true;
            this.scan3Array[i] = false; //this.enableAadharReadOnly = true;

            this.disableNext = false;
          }
        }, {
          key: "scan13",
          value: function scan13(i) {
            this.scan1Array[i] = false;
            this.scan2Array[i] = false;
            this.scan3Array[i] = true; //this.enableAadharReadOnly = true;

            this.disableNext = false;
          } // webcam snapshot trigger

        }, {
          key: "fun",
          value: function fun(webcamImage, i) {
            var _this8 = this;

            var cId = this.customerId;
            var uploadData = new FormData();
            var data = {
              customerId: this.refreshCustomerId,
              documentName: this.documentForm.value.documentName,
              documentType: "3",
              fileType: webcamImage._mimeType,
              fileName: "doc",
              verificationType: "KYC verification",
              documentSide: 1,
              idNumber: this.panNumber
            };
            this.frontImageArray[i] = webcamImage.imageAsDataUrl; // this.doOCR(this.imageURL)

            this.displayVal = false;
            var file = this.dataURLtoFile(webcamImage.imageAsDataUrl, "Aadhar");
            uploadData.append("data", JSON.stringify(data));
            uploadData.append("file", file);
            this.tokenService.upload(uploadData).subscribe(function (res) {
              _this8.progressValFrontArray[i] = 100;

              _this8.documentForm.get("frontSide").patchValue(true);
            }, function (error) {
              if (error.status == 201) {
                _this8.bf = true;

                _this8.documentForm.get("frontSide").patchValue(true);

                _this8.shotToast("Document Uploaded!");
              }
            });
          }
        }, {
          key: "fun1",
          value: function fun1(webcamImage, i) {
            var _this9 = this;

            console.log("inside fun1");
            var cId = this.customerId;
            var uploadData1 = new FormData();
            var data = {
              customerId: this.refreshCustomerId,
              documentName: this.documentForm.value.documentName,
              documentType: "3",
              fileType: webcamImage._mimeType,
              fileName: "doc",
              verificationType: "KYC verification",
              documentSide: 2,
              idNumber: this.panNumber
            };
            this.backImageArray[i] = webcamImage.imageAsDataUrl; // this.doOCR(this.imageURL1);

            this.displayVal1 = false;
            var file = this.dataURLtoFile(webcamImage.imageAsDataUrl, "Aadhar");
            uploadData1.append("data", JSON.stringify(data));
            uploadData1.append("file", file);
            this.tokenService.upload(uploadData1).subscribe(function (res) {
              _this9.progressValBackArray[i] = 100;

              if (res.type === 4) {
                if (res.body) {
                  console.log("res.body.id", res.body.id);

                  _this9.assignIdValues("backSide", res.body.id);
                }
              }

              _this9.documentForm.get("backSide").patchValue(true);
            }, function (error) {
              if (error.status == 201) {
                _this9.ff = true;

                _this9.documentForm.get("backSide").patchValue(true);

                _this9.shotToast("Document Uploaded!");
              }
            });
          }
        }, {
          key: "dataURLtoFile",
          value: function dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(","),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }

            return new File([u8arr], filename, {
              type: mime
            });
          }
        }, {
          key: "assign",
          value: function assign(id) {
            this.customerId = id;
          }
        }, {
          key: "onUpload",
          value: function onUpload(event, docVal, docSideEnum, i) {
            var _this10 = this;

            this.newDocumentSide = docSideEnum;
            this.childindex = docSideEnum - 4;
            console.log(event, docVal, docSideEnum);

            if (docVal === "frontSide") {
              this.progressValFrontArray[i] = 0;
            }

            if (docVal === "backSide") {
              this.progressValBackArray[i] = 0;
            }

            if (docVal === "others") {
              this.progressValOthersArray[i] = 0;
            }

            if (docVal === "otherDocument") {
              // this.progressValOtherDocumentArray[i][ this.childindex] = 0;
              if (this.progressValOtherDocumentArray[i][this.childindex]) {
                this.progressValOtherDocumentArray[i][this.childindex] = 0;
              } else {
                var otherArray = [0]; //this.otherDocumentArray[i].splice(this.childindex, 0, this.image);

                this.progressValOtherDocumentArray[i][this.childindex] = 0;
              }
            }

            this.selectedFiles = event.target.files[0];
            var size = event.target.files[0].size;
            this.shotToast("Your file size is ".concat(this.formatBytes(size, 2)));

            if (event.target.files) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);

              reader.onload = function (event) {
                _this10.image = event.target.result;

                if (docVal === "backSide") {
                  _this10.backSelected = _this10.selectedFiles.name; //this.backImageArray[i] = this.image;

                  _this10.doOCR(_this10.image, docVal, _this10.selectedFiles, docSideEnum, i);

                  _this10.displayVal1 = true;
                }

                if (docVal === "frontSide") {
                  _this10.frontSelected = _this10.selectedFiles.name; //this.frontImageArray[i] = this.image;
                  // this.doOCR(this.frontImageArray[i], docVal, this.selectedFiles, docSideEnum, i);

                  _this10.doOCR(_this10.image, docVal, _this10.selectedFiles, docSideEnum, i);

                  _this10.displayVal = true;
                }

                if (docVal === "others") {
                  _this10.othersSelected = _this10.selectedFiles.name; // this.otherImageArray[i] = this.image;

                  console.log("this.otherImageArray[i] ::", _this10.otherImageArray[i]);

                  _this10.doOCR(_this10.image, docVal, _this10.selectedFiles, docSideEnum, i);

                  _this10.displayVal2 = true; // this.documentSide = 1;
                }

                if (docVal === "otherDocument") {
                  _this10.otherDocumentSelected = _this10.selectedFiles.name; // this.otherDocumentArray[this.childindex][i] = this.image;

                  console.log("indexes", i, _this10.otherDocumentArray);

                  if (_this10.otherDocumentArray[i][_this10.childindex]) {
                    _this10.otherDocumentArray[i][_this10.childindex] = _this10.image;
                  } else {
                    var otherArray = [_this10.image]; //this.otherDocumentArray[i].splice(this.childindex, 0, this.image);

                    _this10.otherDocumentArray[i][_this10.childindex] = _this10.image;
                  }

                  console.log("final document", _this10.docarray1);

                  _this10.doOCR(_this10.otherDocumentArray[i][_this10.childindex], docVal, _this10.selectedFiles, docSideEnum, i); //this.displayVal2 = true;

                }
              };
            } // this.uploadDoc(event.target.files[0], this.selectedFiles, docVal, docSideEnum);
            // if(size > 1048576){
            //   this.shotToast(`Your file size is ${this.formatBytes(size,2)}, Kindly Upload below ${this.formatBytes(1048576,2)} file size`);
            // }


            console.log(this.documentForm.valid);
            this.disableNext = false;
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) return "0 Bytes";
            var k = 1024;
            var dm = decimals < 0 ? 0 : decimals;
            var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
          }
        }, {
          key: "uploadDoc",
          value: function uploadDoc(img, url, docVal, documnetSideValue, i) {
            var _this11 = this;

            this.childindex = documnetSideValue - 4;
            console.log("URL ---- ", url);
            var cId = this.customerId;
            var uploadData = new FormData();
            console.log("cId::", this.refreshCustomerId);
            console.log(this.documentForm.value.documentsList[i].documentName);

            if (this.documentForm.value.documentsList[i].documentName === "Aadhar card") {
              this.docType = "6";
            }

            if (this.documentForm.value.documentsList[i].documentName === "Pan card") {
              this.docType = "7";
            }

            if (this.documentForm.value.documentsList[i].documentName === "Passport") {
              this.docType = "8";
            }

            var data = {
              customerId: this.refreshCustomerId,
              //documentName: this.documentForm.value.documentName,
              documentName: this.documentForm.value.documentsList[i].documentName,
              documentType: this.docType,
              fileType: url.type,
              fileName: url.name,
              verificationType: "KYC verification",
              documentSide: documnetSideValue,
              idNumber: this.panNumber,
              name: this.namePancard,
              dob: this.dob
            };
            uploadData.append("data", JSON.stringify(data));
            uploadData.append("file", url);
            console.log("URL -- ", url.name, data, uploadData);
            this.uploadSub = this.tokenService.upload(uploadData).subscribe(function (res) {
              console.log("Response -- ", res);

              if (docVal === "backSide") {
                if (res.type) {
                  if (res.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                    _this11.progressValBackArray[i] = Math.round(100 * (res.loaded / res.total));
                    console.log("uploadProgress", _this11.progressValBackArray[i]);
                    _this11.backImageArray[i] = img;
                  } // else if (res.type == HttpEventType.Response) {
                  //   this.progressValBack = 0;
                  // }

                }
              } else if (docVal === "frontSide") {
                if (res.type) {
                  if (res.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                    _this11.progressValFrontArray[i] = Math.round(100 * (res.loaded / res.total));
                    console.log("uploadProgress", _this11.progressValFrontArray[i]);
                    _this11.frontImageArray[i] = img;
                  } // else if (res.type == HttpEventType.Response) {
                  //   this.progressValFront = 0;
                  // }

                }
              } else if (docVal === "others") {
                if (res.type) {
                  if (res.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                    _this11.progressValOthersArray[i] = Math.round(100 * (res.loaded / res.total));
                    console.log("uploadProgress others", _this11.progressValOthersArray[i]);
                    _this11.otherImageArray[i] = img;
                  }
                } // else if (res.type == HttpEventType.Response) {
                //   this.progressValOthers = 0;
                // }

              } else if (docVal === "otherDocument") {
                if (res.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                  if (_this11.progressValOtherDocumentArray[i][_this11.childindex]) {
                    _this11.progressValOtherDocumentArray[i][_this11.childindex] = Math.round(100 * (res.loaded / res.total));
                  } else {
                    // var otherArray=[0];
                    //this.otherDocumentArray[i].splice(this.childindex, 0, this.image);
                    _this11.progressValOtherDocumentArray[i][_this11.childindex] = Math.round(100 * (res.loaded / res.total));
                  }
                }
              } else {}

              if (res.body) {
                console.log("res.body.id", res.body.id);

                _this11.assignIdValues(docVal, res.body.id); //  console.log( "assign",this.assignIdValues(docVal, res.body.id));


                _this11.documentForm.get(docVal).patchValue(true);

                console.log("this.documentForm.get(docVal)", _this11.documentForm.get(docVal));

                _this11.shotToast("Document Uploaded!");
              }
            }, function (error) {
              console.log("File upload ::", error);

              if (error.status == 201) {
                _this11.documentForm.get(docVal).patchValue(true);

                _this11.shotToast("Document Uploaded!");
              } else {
                if (docVal === "backSide") {
                  _this11.progressValBackArray[i] = 0;
                  _this11.backImageArray[i] = null;
                  _this11.backSelected = null;

                  _this11.shotToast(error.message);
                } else {
                  _this11.progressValFrontArray[i] = 0;
                  _this11.frontImageArray[i] = null;
                  _this11.frontSelected = null;

                  _this11.shotToast(error.message);
                }
              }
            });
          }
        }, {
          key: "assignIdValues",
          value: function assignIdValues(docVal, id) {
            console.log(docVal);

            if (docVal === "backSide") {
              this.backSideId = id;
            }

            if (docVal === "others") {
              this.otherSideId = id;
            }

            if (docVal === "otherDocument") {
              this.otherDocumentSideId = id;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.shareDataService.shareCustomerId(null);
          }
        }, {
          key: "cancelUpload",
          value: function cancelUpload(sideType) {
            this.uploadSub.unsubscribe();
            this.shotToast("Document Uploaded Cancelled!");

            if (sideType == "backSide") {
              this.progressValBackArray[0] = 0;
              this.backImageArray[0] = null;
              this.backSelected = null;
            } else {
              this.progressValFrontArray[0] = 0;
              this.frontImageArray[0] = null;
              this.frontSelected = null;
            }
          }
        }, {
          key: "shotToast",
          value: function shotToast(msg) {
            this.snack.open("".concat(msg), "OK", {
              duration: 6000,
              verticalPosition: "top",
              horizontalPosition: "right"
            });
          }
        }, {
          key: "deleteDocument",
          value: function deleteDocument(report, index) {
            console.log(this.customerId, report, index);
            this.customerId = this.ls.getItem("customerId");
            var deleteRecord = this.documentForm.get("documentsList");
            console.log(deleteRecord);
            deleteRecord.removeAt(index);
            this.api.delCustDoc(this.customerId, report.documentName).subscribe(function (data) {
              console.log("data after delete", data);
            });
          }
        }, {
          key: "back",
          value: function back() {// this.router.navigate([`/cardaccount/documentupload/list/document-details`]);
          }
        }, {
          key: "done",
          value: function done() {
            this.documentForm.reset();
            var dialogRef = this.dialog.open(_sucess_popup_sucess_popup_component__WEBPACK_IMPORTED_MODULE_14__["SucessPopupComponent"], {
              width: "35%",
              backdropClass: "dialog-bg-trans",
              height: "50%",
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("The dialog was closed", result);
            }); // this.router.navigate([`/cardaccount/documentupload/list/document-details`]);
          }
        }]);

        return DocumentUploadFromEmailComponent;
      }();

      DocumentUploadFromEmailComponent.ɵfac = function DocumentUploadFromEmailComponent_Factory(t) {
        return new (t || DocumentUploadFromEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_9__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_12__["AppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_13__["FileUploadService"]));
      };

      DocumentUploadFromEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocumentUploadFromEmailComponent,
        selectors: [["app-document-upload-from-email"]],
        viewQuery: function DocumentUploadFromEmailComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
          }
        },
        decls: 20,
        vars: 3,
        consts: [[1, "matCard"], [1, "uploadField"], [1, "line"], [3, "formGroup"], ["formArrayName", "documentsList", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", "id", "auto_trigger", 3, "disabled", "click"], ["color", "primary"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "click"], ["formArrayName", "documentsList"], [3, "formGroupName"], ["appearance", "none", 1, "formField"], ["formControlName", "documentName", "placeholder", "Choose Document Name", "name", "documentName", 1, "inputMatcard1", 3, "ngClass", "valueChange"], ["value", ""], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "form1"], [1, "flex-grow-2"], [1, "matIcon"], [1, "insertDriveImg"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [1, "dived"], [2, "margin-left", "30%"], [2, "padding-left", "15%"], [1, "Upload", "scanButton", 3, "disabled"], ["type", "file", "class", "changeInput", "accept", "image/*", 3, "change", 4, "ngIf"], ["style", "font-size: 10px;", 4, "ngIf"], ["id", "box"], [1, "insertDrive"], [1, "progressDiv"], [1, "mb-8"], [1, "m-0", "text-right"], [1, "rounded", 2, "height", "6px", 3, "value"], ["id", "row", "class", "sub_div", 3, "click", 4, "ngIf"], ["class", "panCradDiv", 4, "ngIf"], ["id", "row", 3, "click", 4, "ngIf"], ["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutGap", "50px"], ["fxFlex", "25", 4, "ngFor", "ngForOf"], ["id", "row", 4, "ngIf"], [3, "value", "disabled"], ["alt", "", 1, "formImg", 3, "src"], ["type", "file", "accept", "image/*", 1, "changeInput", 3, "change"], [2, "font-size", "10px"], ["mat-flat-button", "", 3, "click"], ["mat-icon-button", "", "color", "primary"], [1, "backIcon", 3, "click"], ["id", "row", 1, "sub_div", 3, "click"], ["mat-raised-button", "", "color", "primary"], [1, "formImg", 3, "src"], [1, "panCradDiv"], ["id", "row", 3, "click"], [1, "button_2"], ["fxFlex", "25"], [1, "Upload", "scanButton"], ["type", "file", "accept", "image/*", "accept", "image/*", 1, "changeInput", 3, "change"], ["id", "row"], [1, "button_3", 3, "click"], [1, "backIcon1", 3, "click"], [3, "height", "width", "trigger", "imageCapture"]],
        template: function DocumentUploadFromEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Document Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocumentUploadFromEmailComponent_div_5_Template, 55, 27, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_Template_button_click_10_listener() {
              return ctx.addDocuments();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "DOCUMENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_Template_button_click_16_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadFromEmailComponent_Template_button_click_18_listener() {
              return ctx.done();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.documentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.documentForm.get("documentsList")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedOptions2.length == 3);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatError"]],
        styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.snapShot[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n.panCradDiv[_ngcontent-%COMP%] {\n  height: 30%;\n  right: 0px;\n  width: 200px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  color: red;\n  float: right;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 30%;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #2680EB;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-bottom: -12px;\n  display: block;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-width: 500px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 10px;\n  width: 100%;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 18px;\n  width: 100%;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.backIcon1[_ngcontent-%COMP%] {\n  color: red;\n  float: none;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n[_nghost-%COMP%]     div.mat-form-field-outline-start {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-gap {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-end {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 24%;\n  padding-right: 24%;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 10px;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n  padding-right: 15%;\n  padding-top: 5%;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  letter-spacing: 0cm;\n}\n\n.matSelect[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  width: 80px;\n  padding-top: 10px;\n  font-weight: lighter;\n  font-size: 10px;\n  letter-spacing: 0cm;\n  color: black;\n  background-color: #f4f8f7;\n}\n\n.dived[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.scanButton[_ngcontent-%COMP%] {\n  width: 80px;\n  display: inline-block;\n  background-color: white;\n  color: blue;\n  border-color: lightgray;\n  margin-left: 5px;\n  border-style: ridge;\n  margin-top: 50px;\n  border-radius: 5px;\n}\n\n.matIcon[_ngcontent-%COMP%] {\n  color: #456efe;\n  display: block;\n  margin: auto;\n  font-size: 30px;\n}\n\n.insertDrive[_ngcontent-%COMP%] {\n  color: #456efe;\n  display: block;\n  margin: auto;\n  font-size: 25px;\n}\n\n.insertDriveImg[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  color: #456efe;\n  display: block;\n  margin: auto;\n  width: 120px;\n  height: 120px;\n  text-align: center;\n}\n\n.flex-grow-2[_ngcontent-%COMP%] {\n  padding: 40px 50px 40px 50px;\n  border: 2px dashed lightgrey;\n  border-radius: 10px;\n  margin-bottom: 5%;\n}\n\n.flex-grow-Upload[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n  margin-bottom: 20px;\n}\n\n.uploadField[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  opacity: 90%;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.close[_ngcontent-%COMP%] {\n  border-style: none;\n  background-color: white;\n  position: relative;\n  top: 10px;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -12%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.insertDrive[_ngcontent-%COMP%] {\n  color: #456efe;\n  display: block;\n  margin: auto;\n  font-size: 25px;\n}\n\n.progressDiv[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  align-self: flex-end;\n}\n\n.progress[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 7px;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  background-color: green;\n  max-height: 100px;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n  .egret-navy .mat-progress-bar-buffer {\n  background-color: lightblue !important;\n}\n\n  .egret-navy .mat-progress-bar-fill::after {\n  background-color: blue !important;\n}\n\n#sides[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n#box[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.Back[_ngcontent-%COMP%] {\n  background-color: gray;\n  color: white;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  position: relative;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  color: #666666;\n}\n\n.docimg[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.sub_div[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-left: 300px;\n}\n\n.button_2[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 600px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  bottom: 100px;\n}\n\n.button_3[_ngcontent-%COMP%] {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG9jdW1lbnQtdXBsb2FkLWZyb20tZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7QUFDM0I7O0FBRUU7RUFDRSx1QkFBdUI7QUFDM0I7O0FBSUU7RUFDRSxjQUFjO0FBRGxCOztBQUlFO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0FBRGhCOztBQUlFO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFEaEI7O0FBSUU7RUFDRSxZQUFZO0VBQ1osV0FBVztBQURmOztBQUlFO0VBQ0UsWUFBWTtBQURoQjs7QUFJRTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRHZCOztBQUlFO0VBQ0UsZ0JBQWdCO0FBRHBCOztBQUlFO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0FBRDFCOztBQUlFO0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUYxQjs7QUFLRTs7RUFFRSxlQUFlO0FBRm5COztBQUtFO0VBQ0UsT0FBTztBQUZYOztBQVFFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFMZjs7QUFRRTtFQUVFLFlBQVk7RUFDWixVQUFVO0FBTmQ7O0FBYUU7RUFFRSxZQUFZO0VBQ1osV0FBVztBQVhmOztBQWlCRTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBZGxCOztBQWlCRTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsY0FBYztBQWRsQjs7QUFpQkU7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBR2hCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0FBbkJmOztBQXNCRTtFQUNFLFlBQVk7RUFJWiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztBQXpCZjs7QUE4QkU7RUFDRSxZQUFZO0VBSVosK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFJaEIsV0FBVztBQXBDZjs7QUF1Q0U7RUFDRSxtQkFBbUI7QUFwQ3ZCOztBQXVDRTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBcENmOztBQXVDRTtFQUdFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBdEN2Qjs7QUF5Q0U7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBdENoQzs7QUF5Q0U7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBdENoQzs7QUF5Q0U7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBdENoQzs7QUF5Q0U7RUFDRSxhQUFhO0VBRWIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7QUF2Q2xDOztBQTBDRTtFQUVFLGFBQWE7RUFFYixTQUFTO0VBQ1QsZUFBZTtBQXpDbkI7O0FBOENFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBM0N0Qjs7QUErQ0U7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBNUNuQjs7QUErQ0U7RUFJRSwrQkFBK0I7QUEvQ25DOztBQWtERTtFQUNFLFlBQVk7QUEvQ2hCOztBQW1ERTtFQUVFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBakR2Qjs7QUFvREU7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQW9DO0FBakR4Qzs7QUFvREU7RUFDRSxpQkFBaUI7QUFqRHJCOztBQXFERTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx1QkFBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBbER0Qjs7QUFxREU7RUFDRSxjQUF3QjtFQUN4QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFsRG5COztBQXNERTtFQUNFLGNBQXdCO0VBQ3hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQW5EbkI7O0FBc0RFO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQXdCO0VBQ3hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFuRHRCOztBQXdERTtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBRW5CLGlCQUFpQjtBQXREckI7O0FBeURFO0VBS0UsaUJBQWlCO0FBMURyQjs7QUE2REU7RUFDRSw2QkFBNkI7QUExRGpDOztBQTZERTtFQUNFLGFBQWE7RUFDYixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQW1CO0VBQ25CLHVCQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLFdBQVc7RUFFWCxjQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUEzRHZCOztBQThERTtFQUVFLGdCQUFnQjtBQTVEcEI7O0FBK0RFO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBNURwQjs7QUFpRUU7Ozs7RUFJRSxlQUFlO0FBOURuQjs7QUFpRUU7RUFDRSxZQUFZO0FBOURoQjs7QUFpRUU7RUFDRSx5QkFBb0M7QUE5RHhDOztBQWlFRTtFQUNFLFlBQVk7RUFDWixjQUF1QjtBQTlEM0I7O0FBeUVFO0VBQ0Usb0NBQStDO0VBQy9DLFdBQVc7QUF0RWY7O0FBNEVFO0VBQ0UsY0FBYztBQXpFbEI7O0FBb0ZFO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQWpGdkI7O0FBb0ZFO0VBQ0UsT0FBTztBQWpGWDs7QUFvRkU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBakZ2Qjs7QUFvRkU7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQWpGdEI7O0FBb0ZFO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBakZoQjs7QUFvRkU7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0FBakZiOztBQW9GRTtFQUVFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFsRnZCOztBQXFGRTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUFtQztFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBbEZ2Qjs7QUFzRkU7RUFDRSxjQUF3QjtFQUN4QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFuRm5COztBQXNGRTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFuRnhCOztBQXNGRTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBbkZsQjs7QUFzRkU7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUliLGlDQUFpQztBQXRGckM7O0FBeUZFO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtFQXRGM0I7QUFDRjs7QUF5RkU7RUFHRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBeEZyQjs7QUE0RkU7RUFDRSxjQUFjO0FBekZsQjs7QUE0RkU7RUFDRSxnQ0FBMEM7QUF6RjlDOztBQTRGRTtFQUNFLGNBQXdCO0VBQ3hCLHlCQUFtQztBQXpGdkM7O0FBNEZFO0VBRUUsc0NBQXNDO0FBMUYxQzs7QUE2RkU7RUFDRSxpQ0FBaUM7QUExRnJDOztBQTZGRTtFQUNFLFlBQVk7QUExRmhCOztBQWdHRTtFQUNFLGFBQWE7QUE3RmpCOztBQWdHRTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBN0ZoQjs7QUFpR0U7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7QUE5RnRCOztBQWlHRTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBOUZ0Qjs7QUFpR0U7RUFHRSxjQUFjO0FBaEdsQjs7QUFtR0U7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFoR3JCOztBQW1HRTtFQUNFLHFCQUFxQjtBQWhHekI7O0FBb0dFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFqR2Y7O0FBb0dFO0VBQ0Usa0JBQWtCO0FBakd0Qjs7QUFvR0U7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFqR2pCOztBQXFHRTtFQUNFLGtCQUFrQjtFQUVsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0FBbkdoQiIsImZpbGUiOiJkb2N1bWVudC11cGxvYWQtZnJvbS1lbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5zbmFwU2hvdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLnBhbkNyYWREaXYge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmFja0ljb24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXNpYy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuICAubWFpbi1oZWFkIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC10YWItZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbnRhaW5lciAqIHtcclxuICAgIC8vIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpLFxyXG4gIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLy8gICAuZmxleC1jb250YWluZXIgOm50aC1jaGlsZCg0KSB7XHJcbiAgLy8gICAgIGhlaWdodDogMTAwJTtcclxuICAvLyAgIH1cclxuICAuZm9ybUZpZWxkMSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1GaWVsZCB7XHJcbiAgICAvLyB3aWR0aDoyMDBweDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgXHJcbiAgICAvLyAgIGdhcDogMjBweDtcclxuICAgIC8vIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1GaWVsZDIge1xyXG4gICAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIC8vICAgZ2FwOiAyMHB4O1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBcclxuICAjcm93IHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgY29sb3I6ICMyNjgwRUI7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1oaW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dE1hdGNhcmQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRNYXRjYXJkMSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIC8vIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0TWF0Y2FyZDIge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMnB4O1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2tJY29uMSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dENsYXNzIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgZGl2Lm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgICBib3JkZXItY29sb3I6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAuZm9ybTEge1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctbGVmdDogMjQlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjQlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXRDYXJkIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIH1cclxuICBcclxuICAuZmxleC1ncm93LTEge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtbGFiZWwge1xyXG4gICAgLy8gIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBjbTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdFNlbGVjdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBjbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0OCwgMjQ3KTtcclxuICB9XHJcbiAgXHJcbiAgLmRpdmVkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2NhbkJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdEljb24ge1xyXG4gICAgY29sb3I6IHJnYig2OSwgMTEwLCAyNTQpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5pbnNlcnREcml2ZSB7XHJcbiAgICBjb2xvcjogcmdiKDY5LCAxMTAsIDI1NCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmluc2VydERyaXZlSW1nIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYig2OSwgMTEwLCAyNTQpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWdyb3ctMiB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDUwcHggNDBweCA1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDgsIDI0Nyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtZ3Jvdy1VcGxvYWQge1xyXG4gICAgLy8gcGFkZGluZzogMjVweCAzNXB4IDI1cHggMzVweDtcclxuICAgIC8vIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyZXk7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ4LCAyNDcpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbGlnbm1lbnQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5lIHtcclxuICAgIGJvcmRlcjogdGhpY2s7XHJcbiAgICAvKiBoZWlnaHQ6IDNweDsgKi9cclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLyogYm9yZGVyLXdpZHRoOiAzcHg7ICovXHJcbiAgICBib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICAvLyB3aWR0aDogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWRGaWVsZCB7XHJcbiAgICAvLyBvcGFjaXR5OiA5MCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgY29sb3I6ICMzNzQ2NjQ7XHJcbiAgICBvcGFjaXR5OiA5MCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4gIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuICAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbiAgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcmlmaWNhdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogcmdiKDQyLCA4OSwgMjMxKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gLm1hdC1pbmstYmFye1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgICAgYm90dG9tOiAwO1xyXG4gIC8vICAgICBoZWlnaHQ6IDJweDtcclxuICAvLyAgICAgdHJhbnNpdGlvbjogNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xyXG4gIC8vICAgICBoZWlnaHQ6IDRweDtcclxuICAvLyAgICAgY29sb3I6XHJcbiAgLy8gfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIC8vIHdpZHRoOiAyMXBjICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC10YWItbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIG1hdC1vcHRpb257XHJcbiAgLy8gICB3aWR0aDogMjBweDtcclxuICAvLyB9XHJcbiAgLy8gLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgLy8gICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIC8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAvLyAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmUge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgZmlndXJlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICB9XHJcbiAgXHJcbiAgZmlndXJlIGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuQmFjayB7XHJcbiAgXHJcbiAgICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMiU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAuTmV4dCB7XHJcbiAgICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTMlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaW5zZXJ0RHJpdmUge1xyXG4gICAgY29sb3I6IHJnYig2OSwgMTEwLCAyNTQpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc0RpdiB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikgKTtcclxuICAgIC8vZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybUltZyB7XHJcbiAgICAvLyAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIC8vICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wRG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig2NiwgMTM0LCAyNDQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xyXG4gICAgY29sb3I6IHJnYig2NiwgMTM0LCAyNDQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuZWdyZXQtbmF2eSAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjYjNkOWZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuZWdyZXQtbmF2eSAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIG1hdC1oaW50e1xyXG4gIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gfVxyXG4gICNib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLkJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmNoYW5nZUlucHV0IHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLlVwbG9hZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYztcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gIH1cclxuICBcclxuICAuZG9jaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuZXJyYmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc3ViX2RpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25fMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjAwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3R0b206IDEwMHB4O1xyXG4gICAgLy9oZWlnaHQ6MTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25fMyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL21hcmdpbi1sZWZ0Ojg1MHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgLy9oZWlnaHQ6MTAwcHg7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentUploadFromEmailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-document-upload-from-email',
            templateUrl: './document-upload-from-email.component.html',
            styleUrls: ['./document-upload-from-email.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_9__["LocalStoreService"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]
          }, {
            type: app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_12__["AppLoaderService"]
          }, {
            type: app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_13__["FileUploadService"]
          }];
        }, {
          progressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "lsHn":
    /*!****************************************************************************************!*\
      !*** ./src/app/views/document-upload-from-email/document-upload-from-email.routing.ts ***!
      \****************************************************************************************/

    /*! exports provided: DocumentUploadFromEmailRoutes */

    /***/
    function lsHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentUploadFromEmailRoutes", function () {
        return DocumentUploadFromEmailRoutes;
      });
      /* harmony import */


      var _document_upload_from_email_document_upload_from_email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./document-upload-from-email/document-upload-from-email.component */
      "kJIm");

      var DocumentUploadFromEmailRoutes = [{
        path: '',
        component: _document_upload_from_email_document_upload_from_email_component__WEBPACK_IMPORTED_MODULE_0__["DocumentUploadFromEmailComponent"]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-document-upload-from-email-document-upload-from-email-module-es5.js.map