"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_customer-onboarding-individual_customer-onboarding-individual_module_ts"],{

/***/ 41254:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding-individual/customer-onboarding-individual-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerOnboardingIndividualPageRoutingModule": () => (/* binding */ CustomerOnboardingIndividualPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _customer_onboarding_individual_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-onboarding-individual.page */ 98412);




const routes = [
    {
        path: '',
        component: _customer_onboarding_individual_page__WEBPACK_IMPORTED_MODULE_0__.CustomerOnboardingIndividualPage
    }
];
let CustomerOnboardingIndividualPageRoutingModule = class CustomerOnboardingIndividualPageRoutingModule {
};
CustomerOnboardingIndividualPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerOnboardingIndividualPageRoutingModule);



/***/ }),

/***/ 71524:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding-individual/customer-onboarding-individual.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerOnboardingIndividualPageModule": () => (/* binding */ CustomerOnboardingIndividualPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _customer_onboarding_individual_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-onboarding-individual-routing.module */ 41254);
/* harmony import */ var _customer_onboarding_individual_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-onboarding-individual.page */ 98412);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);










let CustomerOnboardingIndividualPageModule = class CustomerOnboardingIndividualPageModule {
};
CustomerOnboardingIndividualPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_customer_onboarding_individual_page__WEBPACK_IMPORTED_MODULE_1__.CustomerOnboardingIndividualPage],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_3__.DirectiveModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__.SharedMaterialModule,
            _customer_onboarding_individual_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerOnboardingIndividualPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ]
    })
], CustomerOnboardingIndividualPageModule);



/***/ }),

/***/ 98412:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding-individual/customer-onboarding-individual.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerOnboardingIndividualPage": () => (/* binding */ CustomerOnboardingIndividualPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customer_onboarding_individual_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-onboarding-individual.page.html?ngResource */ 64519);
/* harmony import */ var _customer_onboarding_individual_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-onboarding-individual.page.scss?ngResource */ 8604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ 39021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/image-popup/image-popup.component */ 40851);
/* harmony import */ var src_app_components_sign_pad_sign_pad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/sign-pad/sign-pad.component */ 46226);
/* harmony import */ var src_app_components_verification_modal_verification_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/verification-modal/verification-modal.component */ 49241);











// import { ModalController } from '@ionic/angular';

let CustomerOnboardingIndividualPage = class CustomerOnboardingIndividualPage {
    constructor(router, _location, fb, modalCtrl) {
        this.router = router;
        this._location = _location;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.infoIcon = 'assets/icon/infoIcon-green.svg';
        this.isKycStatusVisible = false;
        this.isSignatureDone = false;
        this.SegmentTabsValues = _store__WEBPACK_IMPORTED_MODULE_2__.Store.segmentButtons;
        this.options = ['Rich', 'Poor'];
    }
    ngOnInit() {
        this.selectedTab = this.SegmentTabsValues[0].val;
        this.buildDocumentUploadForm();
    }
    toggleKycStatusComponent() {
        this.isKycStatusVisible = !this.isKycStatusVisible;
    }
    /**
     * CATEGORY form of OTHER INFO segment tab
     */
    buildDocumentUploadForm() {
        this.CategoryForm = this.fb.group({
            categories: this.fb.array([this.createCategoryItem()]),
        });
    }
    createCategoryItem() {
        return this.fb.group({
            customerCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    categories() {
        return this.CategoryForm.get('categories');
    }
    addCategoryItem() {
        this.categories().push(this.createCategoryItem());
    }
    removeCategoryItem(index) {
        this.categories().removeAt(index);
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    getSelectedImage() {
        if (this.selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(this.selectedFile);
            reader.onload = () => {
                return reader.result;
            };
        }
        return '';
    }
    openImagePopUp(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedFile = event.target.files[0];
            const fReader = new FileReader();
            fReader.readAsDataURL(this.selectedFile);
            fReader.onloadend = (_event) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                let filename = this.selectedFile.name;
                let base64File = _event.target.result;
                // let base64File = await new Promise((resolve) => {
                //   _event.target.onloadend = () => resolve(_event.target.result);
                // });
                console.log('Uploaded File name: ', filename);
                try {
                    let modal = yield this.modalCtrl.create({
                        component: src_app_components_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__.ImagePopupComponent,
                        componentProps: {
                            image: base64File,
                            imgTitle: filename
                        },
                    });
                    modal.onDidDismiss().then((res) => {
                    });
                    return yield modal.present();
                }
                catch (error) {
                    console.error('File upload error:', error);
                }
            });
        });
    }
    // MANDATE POPUP
    openDigitalSignPad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_sign_pad_sign_pad_component__WEBPACK_IMPORTED_MODULE_4__.SignPadComponent,
                componentProps: {},
            });
            modal.onDidDismiss().then(() => {
                this.isSignatureDone = true;
            });
            return yield modal.present();
        });
    }
    deleteSign() {
        this.isSignatureDone = false;
    }
    goBack() {
        this._location.back();
    }
    ionViewWillEnter() {
        this.openDialog();
    }
    openDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_verification_modal_verification_modal_component__WEBPACK_IMPORTED_MODULE_5__.VerificationModalComponent,
                componentProps: {
                    data: '',
                    screen: 'individual',
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                // if (res?.data?.customerData) {
                //   // this.basicInfoForm.patchValue(res?.data?.customerData);
                //   this.basicInfoData = res?.data?.customerData;
                // }
            });
            return yield modal.present();
        });
    }
    /**
     * Got to previous tab in segment menu
     * @param index number of the tab as per it is mapped in the store.ts
     */
    goToPreviousTab(index) {
        if (index !== 0)
            this.selectedTab = this.SegmentTabsValues[index - 1].val;
    }
};
CustomerOnboardingIndividualPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController }
];
CustomerOnboardingIndividualPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['fileInput',] }]
};
CustomerOnboardingIndividualPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-customer-onboarding-individual',
        template: _customer_onboarding_individual_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customer_onboarding_individual_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerOnboardingIndividualPage);



/***/ }),

/***/ 39021:
/*!******************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding-individual/store.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
class Store {
}
Store.segmentButtons = [
    {
        idx: 0,
        title: 'Primary Information',
        val: 'PRIMARY-INFO'
    },
    {
        idx: 1,
        title: 'Proof Of Identity',
        val: 'POI'
    },
    {
        idx: 2,
        title: 'Other Information',
        val: 'OTHER-INFO'
    },
    {
        idx: 3,
        title: 'Professional Information',
        val: 'PROF-INFO'
    },
    {
        idx: 4,
        title: 'Financial Details',
        val: 'FIN-DETAILS'
    },
    {
        idx: 5,
        title: 'Mandate',
        val: 'MANDATE'
    }
];


/***/ }),

/***/ 8604:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding-individual/customer-onboarding-individual.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --display: flex !important;\n  --align-items: center;\n  --justify-content: space-between;\n  --color: #004c97;\n  --width: 100%;\n}\n\n.kyc-status {\n  position: absolute;\n  top: 80px;\n  right: 6px;\n  z-index: 1000 !important;\n}\n\nion-button.next {\n  width: 100px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.cancel {\n  width: 100px;\n  --background: #ffffff;\n  --color: #b20000;\n}\n\nion-button.back {\n  width: 100px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\nion-content ion-segment {\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  width: auto;\n  padding: 2px;\n}\n\nion-content ion-segment .segment-button-checked {\n  background: #d6dbea;\n  color: #004385;\n}\n\nion-content ion-segment ion-segment-button {\n  color: #8a8989;\n  height: 22.6px;\n  padding: 1px 4px;\n  text-transform: capitalize;\n}\n\nion-content ion-segment ion-segment-button ion-label {\n  font-size: 12.5px;\n}\n\nion-content .OTHER-INFO-container ion-row .OI-box {\n  height: 200px;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  padding: 14px;\n  margin-top: 12px;\n}\n\nion-content .OTHER-INFO-container ion-row .OI-box .category-inp {\n  margin-top: 15px;\n}\n\nion-content .OTHER-INFO-container ion-row .OI-box .category-inp mat-form-field {\n  width: 100%;\n  border-radius: 12px;\n  padding-bottom: 0;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  margin-bottom: 13px;\n  color: #8a8989;\n}\n\nion-content .OTHER-INFO-container ion-row .OI-box .category-inp mat-form-field mat-label {\n  color: #8a8989;\n}\n\nion-content .OTHER-INFO-container ion-row .OI-box .category-inp mat-form-field .mat-select-arrow-wrapper {\n  color: #8a8989;\n}\n\nion-content .OTHER-INFO-container ion-row .OI-box .category-inp .fileUploadField button {\n  background: rgb(5, 26, 45);\n  background: linear-gradient(91deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n  border-radius: 11px;\n  height: 40px;\n  width: 100px;\n  color: #ffffff;\n}\n\nion-content .OTHER-INFO-container ion-row .OI-box .category-inp .fileUploadField ::ng-deep .mat-form-field-flex {\n  align-items: center;\n}\n\nion-content .OTHER-INFO-container ion-footer {\n  position: fixed;\n  bottom: 0;\n  width: 90%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .OTHER-INFO-container ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\nion-content .OTHER-INFO-container ::ng-deep .mat-form-field-wrapper .mat-form-field-infix {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .MANDATE-container {\n  margin-top: 45px;\n}\n\nion-content .MANDATE-container .card {\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  padding: 6px;\n  height: 300px;\n  width: 250px;\n}\n\nion-content .MANDATE-container .card .upload-icon-img {\n  border-radius: 15px;\n  background: #f3f3f3;\n  padding: 55px;\n  position: relative;\n}\n\nion-content .MANDATE-container .card .btns {\n  width: 95%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .MANDATE-container .card .btns .btn1 {\n  background: rgb(5, 26, 45);\n  background: linear-gradient(91deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n  padding: 10px 20px;\n  border-radius: 15px;\n  color: #ffffff;\n}\n\nion-content .MANDATE-container .card .btns .btn2 {\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  padding: 10px 20px;\n  border-radius: 15px;\n  color: #004c97;\n  background: #ffffff;\n}\n\nion-content .MANDATE-container .card .icons {\n  position: absolute;\n  top: 12px;\n  z-index: 1000;\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .MANDATE-container .card .icons .tick {\n  margin-left: 10px;\n}\n\nion-content .MANDATE-container .card .icons .delete {\n  background: #ffffff;\n}\n\nion-content .MANDATE-container ion-footer {\n  position: fixed;\n  bottom: 0;\n  width: 90%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.segment-scrollable {\n  overflow-x: hidden !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-disabled,\n::ng-deep .mat-form-field-outline {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLW9uYm9hcmRpbmctaW5kaXZpZHVhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBeEJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUF4QkY7O0FBNEJFO0VBcERBLCtDQUFBO0VBSUEsbUJBQUE7RUFvREUsV0FBQTtFQUNBLFlBQUE7QUExQko7O0FBMkJJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBekJOOztBQTRCSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQTFCTjs7QUE0Qk07RUFDRSxpQkFBQTtBQTFCUjs7QUFtQ007RUFDRSxhQUFBO0VBaEZOLCtDQUFBO0VBSUEsbUJBQUE7RUErRU0sYUFBQTtFQUNBLGdCQUFBO0FBakNSOztBQW1DUTtFQUNFLGdCQUFBO0FBakNWOztBQW1DVTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBNUZWLCtDQUFBO0VBOEZVLG1CQUFBO0VBQ0EsY0FBQTtBQWpDWjs7QUFtQ1k7RUFDRSxjQUFBO0FBakNkOztBQW9DWTtFQUNFLGNBQUE7QUFsQ2Q7O0FBdUNZO0VBbkdWLDBCQUFBO0VBQ0EsMkVBQUE7RUFvR1ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFwQ2Q7O0FBc0NZO0VBQ0UsbUJBQUE7QUFwQ2Q7O0FBMENJO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQW5JSixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTRGRjs7QUEyQ007RUFDRSxpQkFBQTtBQXpDUjs7QUEyQ1E7RUE1SU4sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFvR0Y7O0FBOENFO0VBQ0UsZ0JBQUE7QUE1Q0o7O0FBNkNJO0VBaEpGLCtDQUFBO0VBSUEsbUJBQUE7RUErSUksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBM0NOOztBQTZDTTtFQW5KSixtQkFBQTtFQXVKTSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQTdDUjs7QUFnRE07RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUF4S04sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF3S00sOEJBQUE7QUE1Q1I7O0FBOENRO0VBOUpOLDBCQUFBO0VBQ0EsMkVBQUE7RUErSlEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUEzQ1Y7O0FBNkNRO0VBNUtOLCtDQUFBO0VBOEtRLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUEzQ1Y7O0FBK0NNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUEvTE4sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUErTE0sOEJBQUE7QUEzQ1I7O0FBNkNRO0VBQ0UsaUJBQUE7QUEzQ1Y7O0FBNkNRO0VBQ0UsbUJBQUE7QUEzQ1Y7O0FBK0NJO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQS9NSixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW1LRjs7QUFrREE7RUFDRSw2QkFBQTtBQS9DRjs7QUFvREE7O0VBRUUsVUFBQTtBQWpERiIsImZpbGUiOiJjdXN0b21lci1vbmJvYXJkaW5nLWluZGl2aWR1YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmV1c2FibGUgc3R5bGluZyBwcm9wZXJ0aWVzXHJcbkBtaXhpbiBhbGlnbm1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5AbWl4aW4gYnRuLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNSwgMjYsIDQ1KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MWRlZyxcclxuICAgIHJnYmEoNSwgMjYsIDQ1LCAxKSAwJSxcclxuICAgIHJnYmEoMCwgNzYsIDE1MSwgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEhlcmUgd2UgZ28gd2l0aCB0aGUgYWxsIHRoZSBzdHlsaW5nLi5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIC0tYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtLWNvbG9yOiAjMDA0Yzk3O1xyXG4gIC0td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5reWMtc3RhdHVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIHJpZ2h0OiA2cHg7XHJcbiAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLm5leHQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCwgIzAwNGM5Nyk7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5jYW5jZWwge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1jb2xvcjogI2IyMDAwMDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5iYWNrIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBpb24tc2VnbWVudCB7XHJcbiAgICAvLyBAaW5jbHVkZSBhbGlnbm1lbnQ7XHJcbiAgICBAaW5jbHVkZSBzaGFkb3c7XHJcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkNmRiZWE7XHJcbiAgICAgIGNvbG9yOiAjMDA0Mzg1O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiAjOGE4OTg5O1xyXG4gICAgICBoZWlnaHQ6IDIyLjZweDtcclxuICAgICAgcGFkZGluZzogMXB4IDRweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTIuNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAqKiogT1RIRVIgSU5GTyBzdHlsaW5nICoqKlxyXG4gIC5PVEhFUi1JTkZPLWNvbnRhaW5lciB7XHJcbiAgICAvL2hlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIC5PSS1ib3gge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5cclxuICAgICAgICAuY2F0ZWdvcnktaW5wIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNoYWRvdztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICM4YTg5ODk7XHJcblxyXG4gICAgICAgICAgICBtYXQtbGFiZWwge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGE4OTg5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzhhODk4OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5maWxlVXBsb2FkRmllbGQge1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGJ0bi1ncmFkaWVudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tZm9vdGVyIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gKioqTUFOREFURSBzdHlsaW5nLi4uKioqXHJcbiAgLk1BTkRBVEUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcclxuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cztcclxuICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcblxyXG4gICAgICAudXBsb2FkLWljb24taW1nIHtcclxuICAgICAgICAvLyBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICAgICAgcGFkZGluZzogNTVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idG5zIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLmJ0bjEge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYnRuLWdyYWRpZW50O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuMiB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDRjOTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb25ze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIC50aWNre1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxldGV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWZvb3RlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gdG8gaGlkZSB0aGUgb3ZlcmZsb3dlZCBzY3JvbGxiYXIgaW4gc2VnbWVudCBtZW51XHJcbi5zZWdtZW50LXNjcm9sbGFibGUge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAqKiogVG8gcmVtb3ZlIHRoZSBvdXRsaW5lIGZyb20gdGhlIGlucHV0IGZpZWxkIG9mIG1hdC1mb3JtLWZpZWxkICoqKlxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQsXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 64519:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding-individual/customer-onboarding-individual.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          style=\"color: #004c97\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-text>Individual Customer Onboarding</ion-text>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleKycStatusComponent()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          [src]=\"infoIcon\"\r\n          style=\"color: #004c97\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <app-kyc-status\r\n    class=\"kyc-status\"\r\n    *ngIf=\"isKycStatusVisible\"\r\n  ></app-kyc-status>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <!-- segment containing three sections -->\r\n  <ion-segment [(ngModel)]=\"selectedTab\" scrollable>\r\n    <ion-segment-button *ngFor=\"let tab of SegmentTabsValues\" [value]=\"tab.val\">\r\n      <ion-label>{{tab.title}}</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- ***PRIMARY INFORMATION***  -->\r\n  <!-- Displays when Primary Information tab is selected -->\r\n\r\n  <app-basic-info\r\n    *ngIf='selectedTab == \"PRIMARY-INFO\"'\r\n    screenType=\"individual\"\r\n  ></app-basic-info>\r\n\r\n\r\n  <app-professional-information\r\n    *ngIf='selectedTab == \"PROF-INFO\"'\r\n  ></app-professional-information>\r\n  <app-financial-details\r\n    *ngIf='selectedTab == \"FIN-DETAILS\"'\r\n  ></app-financial-details>\r\n\r\n  <!-- ***PROOF OF IDENTITY***  -->\r\n  <!-- Displays when Proof Of Identity tab is selected -->\r\n\r\n  <app-document-upload *ngIf='selectedTab == \"POI\"'></app-document-upload>\r\n\r\n  <!-- ***OTHER INFORMATION***  -->\r\n  <!-- Displays when Other Information tab is selected -->\r\n\r\n  <ion-grid *ngIf='selectedTab == \"OTHER-INFO\"' class=\"OTHER-INFO-container\">\r\n    <form [formGroup]=\"CategoryForm\">\r\n      <ion-row\r\n        formArrayName=\"categories\"\r\n        *ngFor=\"let category of categories().controls; let categoryIndex = index; let last = last\"\r\n      >\r\n        <div [formGroup]=\"category\" class=\"OI-box\">\r\n          <div\r\n            style=\"\r\n              margin-bottom: 5px;\r\n              display: flex;\r\n              justify-content: space-between;\r\n              align-items: center;\r\n            \"\r\n          >\r\n            <span class=\"\">\r\n              {{ categoryIndex == 0 ? \"Category\" : \"Category \" + categoryIndex\r\n              }}\r\n            </span>\r\n\r\n            <!-- delete icon appeared on the card when user click on `Add Category` button -->\r\n            <img\r\n              src=\"assets/images/document/delete.svg\"\r\n              [style]=\"categoryIndex == 0 ? 'visibility: hidden;':'visibility: visible;'\"\r\n              (click)=\"removeCategoryItem(categoryIndex)\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"category-inp\">\r\n            <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n              <mat-label>Customer Category</mat-label>\r\n              <mat-select\r\n                [(value)]=\"customerCategorySelectedOption\"\r\n                formControlName=\"customerCategory\"\r\n              >\r\n                <mat-option *ngFor=\"let option of options\" [value]=\"option\"\r\n                  >{{ option }}</mat-option\r\n                >\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field\r\n              appearance=\"outline\"\r\n              class=\"full-width\"\r\n              class=\"fileUploadField\"\r\n            >\r\n              <mat-label>File Upload</mat-label>\r\n              <input matInput readonly formControlName=\"fileName\" />\r\n              <input\r\n                type=\"file\"\r\n                [hidden]=\"true\"\r\n                #fileUpload\r\n                (change)=\"openImagePopUp($event)\"\r\n              />\r\n              <button matSuffix (click)=\"fileUpload.click()\">Choose</button>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"add-del-btn\"\r\n          style=\"\r\n            margin-top: 25px;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            width: 100%;\r\n            border-radius: 15px;\r\n          \"\r\n          *ngIf=\"last\"\r\n        >\r\n          <button\r\n            mat-raised-button\r\n            type=\"button\"\r\n            (click)=\"addCategoryItem()\"\r\n            style=\"\r\n              text-decoration: underline;\r\n              background: transparent;\r\n              width: 100%;\r\n              border-radius: 15px;\r\n              color: #004c97;\r\n            \"\r\n          >\r\n            + Add Customer Category\r\n          </button>\r\n        </div>\r\n      </ion-row>\r\n    </form>\r\n    <ion-footer>\r\n      <ion-toolbar class=\"btn-footer\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-6\">\r\n            <ion-button shape=\"round\" class=\"back\" (click)=\"goToPreviousTab(2)\"\r\n              >Back</ion-button\r\n            >\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <ion-button shape=\"round\" class=\"next\">Next </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\"></div>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </ion-grid>\r\n\r\n  <!-- ***MANDATE***  -->\r\n  <!-- Displays when Mandate tab is selected -->\r\n\r\n  <ion-grid *ngIf='selectedTab == \"MANDATE\"' class=\"MANDATE-container\">\r\n    <div class=\"card\">\r\n      <div class=\"icons\" *ngIf=\"isSignatureDone\">\r\n        <img src=\"assets/images/document/tick.svg\" class=\"tick\" />\r\n        <img\r\n          src=\"assets/images/document/delete.svg\"\r\n          class=\"delete\"\r\n          (click)=\"deleteSign()\"\r\n        />\r\n      </div>\r\n\r\n      <img\r\n        [src]=\"isSignatureDone ? 'assets/images/sign.svg' : 'assets/images/document/upload-icon.svg'\"\r\n        alt=\"\"\r\n        class=\"upload-icon-img\"\r\n      />\r\n      <div class=\"btns\">\r\n        <button class=\"btn1\" (click)=\"openDigitalSignPad()\">\r\n          Digital Sign\r\n        </button>\r\n        <button class=\"btn2\">Upload</button>\r\n      </div>\r\n    </div>\r\n    <ion-footer>\r\n      <ion-toolbar class=\"btn-footer\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-6\">\r\n            <ion-button shape=\"round\" class=\"back\" (click)=\"goToPreviousTab(5)\"\r\n              >Back</ion-button\r\n            >\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <ion-button shape=\"round\" class=\"next\">Next </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\"></div>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_customer-onboarding-individual_customer-onboarding-individual_module_ts.js.map