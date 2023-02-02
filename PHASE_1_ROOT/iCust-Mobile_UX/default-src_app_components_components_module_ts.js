"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 77964:
/*!*******************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarPhotoComponent": () => (/* binding */ AvatarPhotoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _avatar_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-photo.component.html?ngResource */ 2178);
/* harmony import */ var _avatar_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar-photo.component.scss?ngResource */ 63614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AvatarPhotoComponent = class AvatarPhotoComponent {
    constructor() {
        this.showInitials = false;
        this.colors = [
            '#24CCA7',
            '#24CCA7',
            '#24CCA7',
            '#24CCA7',
        ];
    }
    ngOnInit() {
        if (!this.photoUrl) {
            this.showInitials = true;
            this.createInititals();
            const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
            this.circleColor = this.colors[randomIndex];
        }
    }
    createInititals() {
        let names = this.name.split(' '), initials = names[0].substring(0, 1).toUpperCase();
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        this.initials = initials;
        console.log("this.name", this.name);
        console.log("this.initials", this.initials);
    }
};
AvatarPhotoComponent.propDecorators = {
    photoUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AvatarPhotoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-avatar-photo',
        template: _avatar_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_avatar_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AvatarPhotoComponent);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 64662);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);
/* harmony import */ var _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-photo/avatar-photo.component */ 77964);
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch/branch.component */ 6156);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ 51006);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ 29055);
/* harmony import */ var _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-slots/time-slots.component */ 19023);
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./download/download.component */ 51022);
/* harmony import */ var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared-material.module */ 84390);
/* harmony import */ var _alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert-internet/alert-internet.component */ 82014);
/* harmony import */ var _denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./denomination-slide/denomination-slide.component */ 9340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__.BranchComponent,
            _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__.AvatarPhotoComponent,
            _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__.TimeSlotsComponent,
            _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent,
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
            _download_download_component__WEBPACK_IMPORTED_MODULE_7__.DownloadComponent,
            _alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_9__.AlertInternetComponent,
            _denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_10__.DenominationSlideComponent
        ],
        exports: [
            _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__.BranchComponent,
            _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__.AvatarPhotoComponent,
            _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__.TimeSlotsComponent,
            _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent,
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
            _download_download_component__WEBPACK_IMPORTED_MODULE_7__.DownloadComponent,
            _alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_9__.AlertInternetComponent,
            _denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_10__.DenominationSlideComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_8__.SharedMaterialModule
        ],
    })
], ComponentsModule);



/***/ }),

/***/ 9340:
/*!*******************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DenominationSlideComponent": () => (/* binding */ DenominationSlideComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _denomination_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./denomination-slide.component.html?ngResource */ 76634);
/* harmony import */ var _denomination_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denomination-slide.component.scss?ngResource */ 24869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);





let DenominationSlideComponent = class DenominationSlideComponent {
    constructor(fb) {
        this.fb = fb;
        this.denomination_keys = [{
                key: "two_thousand",
                value: 2000,
            },
            {
                key: "five_hundred",
                value: 500,
            }, {
                key: "two_hundred",
                value: 200,
            }, {
                key: "one_hundred",
                value: 100,
            }, {
                key: "fifty",
                value: 50,
            }, {
                key: "twenty",
                value: 20,
            }, {
                key: "ten",
                value: 10,
            }, {
                key: "one",
                value: 1,
            },
        ];
        this.total = 0;
        this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.buildDenomForm();
        let data = JSON.parse(localStorage.getItem(this.unique_key)) || null;
        if (data != null) {
            this.denominationForm.patchValue(data.data);
            this.calculateTotalAmount();
        }
        this.denominationForm.valueChanges.subscribe(val => {
            let sum = 0;
            Object.keys(this.denominationForm.controls).forEach(key => {
                var _a;
                for (let index = 0; index < this.denomination_keys.length; index++) {
                    const denomItem = this.denomination_keys[index];
                    if (denomItem.key == key) {
                        sum += denomItem.value * Number((_a = this.denominationForm.get(`${key}`)) === null || _a === void 0 ? void 0 : _a.value);
                    }
                }
            });
            this.total = sum;
            this.saveDenom();
        });
    }
    buildDenomForm() {
        this.denominationForm = this.fb.group({
            two_thousand: '',
            five_hundred: '',
            two_hundred: '',
            one_hundred: '',
            fifty: '',
            twenty: '',
            ten: '',
            one: '',
        });
    }
    calculateTotalAmount() {
        let sum = 0;
        Object.keys(this.denominationForm.controls).forEach(key => {
            var _a;
            for (let index = 0; index < this.denomination_keys.length; index++) {
                const denomItem = this.denomination_keys[index];
                if (denomItem.key == key) {
                    sum += denomItem.value * Number((_a = this.denominationForm.get(`${key}`)) === null || _a === void 0 ? void 0 : _a.value);
                }
            }
        });
        this.total = sum;
    }
    remove_me() {
        this.parentRef.remove(this.unique_key);
    }
    saveDenom() {
        let denomPayload = {
            title: this.unique_key,
            total: this.total,
            data: this.denominationForm.value
        };
        localStorage.setItem(this.unique_key, JSON.stringify(denomPayload));
    }
    ngOnDestroy() {
        this.saveDenom();
    }
};
DenominationSlideComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
DenominationSlideComponent.propDecorators = {
    amountEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    denomArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isFrmOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isFtmOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DenominationSlideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-denomination-slide',
        template: _denomination_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_denomination_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DenominationSlideComponent);



/***/ }),

/***/ 51022:
/*!***********************************************************!*\
  !*** ./src/app/components/download/download.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadComponent": () => (/* binding */ DownloadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _download_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.component.html?ngResource */ 31363);
/* harmony import */ var _download_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.component.scss?ngResource */ 95938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let DownloadComponent = class DownloadComponent {
    constructor(_formBuilder, modalCtrl) {
        this._formBuilder = _formBuilder;
        this.modalCtrl = modalCtrl;
        this.selectedOption = '1';
        this.selectedFileExt = '1';
    }
    ngOnInit() {
        this.downloadForm = this._formBuilder.group({
            transaction: ['1'],
            fileExtention: ['1']
        });
    }
    cancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm() {
        this.modalCtrl.dismiss(this.downloadForm.value);
    }
};
DownloadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
DownloadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-download',
        template: _download_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_download_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DownloadComponent);



/***/ }),

/***/ 64662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 21757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 5721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
        this.url1 = "";
    }
    ngOnInit() {
        this.url1 = this.router.url;
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    transactionPage() {
        this.router.navigate(['transaction']);
    }
    appointmentPage() {
        this.router.navigate(['appointment']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    settingsPage() {
        this.router.navigate(['settings']);
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 29055:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.html?ngResource */ 85582);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 26022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let SearchComponent = class SearchComponent {
    constructor(modalController, toastController, router) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.router = router;
        this.items = [];
        this.trendingRecords = [{
                id: 1,
                name: "Cash Withdrawal",
                state: "/cashwithdrawal"
            }, {
                id: 2,
                name: "Cash Deposit",
                state: "/cashdeposit"
            }, {
                id: 3,
                name: "Cheque Deposit",
                state: "/chequedeposit"
            }, {
                id: 4,
                name: "Cheque Withdrawal",
                state: "/chequewithdrawal"
            }, {
                id: 5,
                name: "Forex Transaction",
                state: "/forex-transaction"
            }, {
                id: 6,
                name: "Loan Payment",
                state: "/loan-payment"
            }
        ];
    }
    ngOnInit() { }
    closeModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(close);
        });
    }
    openPage(item) {
        this.router.navigate([`${item.state}`]).then(_ => {
            this.closeModel();
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-search',
        template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchComponent);



/***/ }),

/***/ 18077:
/*!****************************************!*\
  !*** ./src/app/pipes/currency.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyPipe": () => (/* binding */ CurrencyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);



let CurrencyPipe = class CurrencyPipe {
    transform(code, format = 'narrow', locale) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.getCurrencySymbol)(code, format, locale);
    }
};
CurrencyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'currencySymbol'
    })
], CurrencyPipe);



/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency.pipe */ 18077);
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-filter.pipe */ 8572);





let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe, _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchFilterPipe],
        exports: [
            _currency_pipe__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe,
            _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchFilterPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ],
    })
], PipesModule);



/***/ }),

/***/ 8572:
/*!*********************************************!*\
  !*** ./src/app/pipes/search-filter.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFilterPipe": () => (/* binding */ SearchFilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let SearchFilterPipe = class SearchFilterPipe {
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (data) {
            return JSON.stringify(data).toLowerCase().includes(args);
        });
    }
};
SearchFilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'searchFilter'
    })
], SearchFilterPipe);



/***/ }),

/***/ 63614:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".circle {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle img {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n.circle .initials {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcYXZhdGFyLXBob3RvXFxhdmF0YXItcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNEUiIsImZpbGUiOiJhdmF0YXItcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoICAgICAgICA6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5pdGlhbHMge1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0ICAgOiAxOXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI2MjVweDtcclxuICAgIH1cclxufSIsIi5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNpcmNsZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uY2lyY2xlIC5pbml0aWFscyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yNjI1cHg7XG59Il19 */";

/***/ }),

/***/ 24869:
/*!********************************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".denomination-slide {\n  background: #F3F3F3;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #484848;\n  margin-top: -25px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  position: relative;\n}\n\n.denom-count {\n  color: #484848;\n  font-size: 10px;\n}\n\n.denom-sub {\n  color: #6c757d;\n  font-size: 8px;\n}\n\n.white-box {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  margin-left: 46%;\n  z-index: 1;\n  position: relative;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbm9taW5hdGlvbi1zbGlkZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGVub21pbmF0aW9uLXNsaWRlXFxkZW5vbWluYXRpb24tc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUVBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FKIiwiZmlsZSI6ImRlbm9taW5hdGlvbi1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW5vbWluYXRpb24tc2xpZGUge1xyXG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICAvLyB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRlbm9tLWNvdW50IHtcclxuICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZGVub20tc3ViIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuXHJcbi53aGl0ZS1ib3gge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ2JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuXHJcbn0iLCIuZGVub21pbmF0aW9uLXNsaWRlIHtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kZW5vbS1jb3VudCB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kZW5vbS1zdWIge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi53aGl0ZS1ib3gge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQ2JTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 95938:
/*!************************************************************************!*\
  !*** ./src/app/components/download/download.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.main {\n  padding: 10px;\n}\n\n::ng-deep .wider-popover {\n  --width: 82%;\n  --max-width: 82%;\n  --offset-x: -5px;\n}\n\n.selectAccId {\n  width: 100%;\n}\n\n.closeIcon {\n  margin-left: 55%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n\n.custom-btn {\n  height: 50px;\n}\n\n.dateRange {\n  margin-left: 10px;\n}\n\n.dateInput {\n  border: none;\n  width: 350px;\n}\n\n:host(.ion-focused) .item-native {\n  background: none;\n  opacity: var(--background-focused-opacity);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkb3dubG9hZFxcZG93bmxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSwwQ0FBQTtBQ0FKIiwiZmlsZSI6ImRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogIzM0NzdDNjtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcbi5tYWlue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC53aWRlci1wb3BvdmVyIHtcclxuICAgIC0td2lkdGg6IDgyJTtcclxuICAgIC0tbWF4LXdpZHRoOiA4MiU7XHJcbiAgICAtLW9mZnNldC14OiAtNXB4O1xyXG59XHJcblxyXG4uc2VsZWN0QWNjSWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jbG9zZUljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1JTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC01JVxyXG59XHJcblxyXG4uY3VzdG9tLWJ0biB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5kYXRlUmFuZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXRlSW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG46aG9zdCguaW9uLWZvY3VzZWQpIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3BhY2l0eTogdmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpO1xyXG59IiwiLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICMzNDc3QzY7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tYWluIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuOjpuZy1kZWVwIC53aWRlci1wb3BvdmVyIHtcbiAgLS13aWR0aDogODIlO1xuICAtLW1heC13aWR0aDogODIlO1xuICAtLW9mZnNldC14OiAtNXB4O1xufVxuXG4uc2VsZWN0QWNjSWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsb3NlSWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1NSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogLTUlO1xufVxuXG4uY3VzdG9tLWJ0biB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmRhdGVSYW5nZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMzUwcHg7XG59XG5cbjpob3N0KC5pb24tZm9jdXNlZCkgLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogdmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpO1xufSJdfQ== */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".footer-custom-icon {\n  position: absolute !important;\n  top: -7px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-appt {\n  position: absolute !important;\n  top: -6px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-small {\n  position: absolute !important;\n  top: 0px !important;\n  left: 0px !important;\n  width: 60px !important;\n  height: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1jdXN0b20taWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3Rlci1jdXN0b20taWNvbi1hcHB0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IC02cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWN1c3RvbS1pY29uLXNtYWxsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIuZm9vdGVyLWN1c3RvbS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTdweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXItY3VzdG9tLWljb24tYXBwdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC02cHggIWltcG9ydGFudDtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLWN1c3RvbS1pY29uLXNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 26022:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "div[scrollx=true] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\ndiv[scrollx=true]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] .scroll-item {\n  flex: 0 0 auto;\n}\n.mt-5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDRyxhQUFBO0FDRVA7QURBSztFQUNFLGNBQUE7QUNFUDtBREVFO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0FDQ0giLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2W3Njcm9sbHg9dHJ1ZV0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgLnNjcm9sbC1pdGVtIHtcclxuICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm10LTV7XHJcbiAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH0iLCJkaXZbc2Nyb2xseD10cnVlXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuZGl2W3Njcm9sbHg9dHJ1ZV06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmRpdltzY3JvbGx4PXRydWVdIC5zY3JvbGwtaXRlbSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4ubXQtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 2178:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"circle\" [ngStyle]=\"{'background-color':  circleColor }\">\r\n    <img *ngIf=\"!showInitials\" src=\"{{photoUrl}}\">\r\n\r\n    <div *ngIf=\"showInitials\" class=\"initials\">\r\n        {{ initials }}\r\n    </div>\r\n</div>";

/***/ }),

/***/ 76634:
/*!********************************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"denomination-slide\">\r\n  <form *ngIf=\"denominationForm\" [formGroup]=\"denominationForm\">\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">2000 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"two_thousand\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">500 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"five_hundred\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my1\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">200 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"two_hundred\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">100 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"one_hundred\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">50 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"fifty\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">20 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"twenty\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">10 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"ten\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">1 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"one\"></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-3\">\r\n      <mat-label>Denomination Total</mat-label>\r\n      <input matInput type=\"text\" [value]=\"total\" readonly=\"true\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n<div class=\"white-box\" (click)=\"remove_me()\">\r\n  <img src=\"assets/icon/arrow.svg\" class=\"arrow-icon\">\r\n</div>\r\n";

/***/ }),

/***/ 31363:
/*!************************************************************************!*\
  !*** ./src/app/components/download/download.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n  <ion-toolbar>\r\n    <ion-title>Download</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"cancel()\">\r\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"main\">\r\n    <form *ngIf=\"downloadForm\" [formGroup]=\"downloadForm\">\r\n      <div class=\"my-2\">\r\n       \r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Duration</mat-label>\r\n          <mat-select disableRipple formControlName=\"transaction\">\r\n            <mat-option value=\"1\">Recent Transaction</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Format</mat-label>\r\n          <mat-select disableRipple formControlName=\"fileExtention\">\r\n            <mat-option value=\"1\">PDF</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button shape=\"round\" (click)=\"confirm()\">Download</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button shape=\"round\" color=\"danger\" (click)=\"cancel()\">Cancle</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 21757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"footer pb-0\">\r\n  <ul>\r\n    <li (click)=\"dashboardPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/dashboard' ? 'active ' : ''\">\r\n        <img src=\"assets/images/home-normal.svg\" class=\"w-100 normal footer-custom-icon-small\" />\r\n        <img src=\"assets/images/home-dark.svg\" class=\"w-100 hover footer-custom-icon-small\" />\r\n        <!-- <span><i class=\"fas fa-home\"></i></span>\r\n          <p>Home</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"transactionPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/transaction' ? 'active ' : ''\">\r\n        <img src=\"assets/images/my-trans-normal.svg\" class=\"w-100 normal footer-custom-icon\" />\r\n        <img src=\"assets/images/my-trans.svg\" class=\"w-100 hover footer-custom-icon\" />\r\n        <!-- <span>\r\n          <i class=\"fas fa-money-bill-wave\"></i>\r\n          <img class=\"foo_icon\" src=\"assets/images/footer/transaction-icon.png\" />\r\n        </span>\r\n        <p>My Transaction</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"appointmentPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/appointment' ? 'active ' : ''\">\r\n        <img src=\"assets/images/appt-his-normal.svg\" class=\"w-100 normal footer-custom-icon-appt\" />\r\n        <img src=\"assets/images/appt-his.svg\" class=\"w-100 hover footer-custom-icon-appt\" />\r\n        <!-- <span>\r\n          <i class=\"far fa-clock\"></i>\r\n        </span>\r\n        <p>Appointment History</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"profilePage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/profile' ? 'active ' : ''\">\r\n        <img src=\"assets/images/profile-normal.svg\" class=\"w-100 normal footer-custom-icon-small\" />\r\n        <img src=\"assets/images/profile-dark.svg\" class=\"w-100 hover footer-custom-icon-small\" />\r\n        <!-- <span>\r\n          <i class=\"far fa-user-circle\"></i>\r\n        </span>\r\n        <p>Profile</p> -->\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";

/***/ }),

/***/ 85582:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"padding: 4% 0 1%\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModel()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar\r\n      placeholder=\"Search...\"\r\n      [(ngModel)]=\"filterTerm\"\r\n      animated=\"false\"\r\n    ></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!-- <ion-list-header>\r\n    <ion-label>Popular Service</ion-label>\r\n  </ion-list-header>\r\n  <div class=\"container\">\r\n    <div class=\"scroll\" scrollX=\"true\">\r\n      <ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-chip *ngFor=\"let item of items | searchFilter:filterTerm\" color=\"secondary\" (click)=\"openToast(item.title)\">\r\n            <ion-icon color=\"primary\" name=\"trending-up-outline\"></ion-icon>\r\n            <ion-label>{{ item.title }}</ion-label>\r\n          </ion-chip>\r\n        </ion-item>\r\n      </ion-row>\r\n    </div>\r\n</div> -->\r\n  <ion-list>\r\n    <ion-list-header lines=\"inset\">\r\n      <ion-label>Quick Services</ion-label>\r\n    </ion-list-header>\r\n    <ion-item\r\n      *ngFor=\"let item of trendingRecords | searchFilter: filterTerm\"\r\n      (click)=\"openPage(item)\"\r\n    >\r\n      <ion-label color=\"primary\">\r\n        <h1>{{ item.name }}</h1>\r\n      </ion-label>\r\n      <ion-icon name=\"trending-up-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map