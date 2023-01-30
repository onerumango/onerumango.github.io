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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
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

module.exports = ".circle {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle img {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n.circle .initials {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQURSIiwiZmlsZSI6ImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbml0aWFscyB7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICA6IDE5cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjYyNXB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 24869:
/*!********************************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".denomination-slide {\n  background: #F3F3F3;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #484848;\n  margin-top: -25px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  position: relative;\n}\n\n.denom-count {\n  color: #484848;\n  font-size: 10px;\n}\n\n.denom-sub {\n  color: #6c757d;\n  font-size: 8px;\n}\n\n.white-box {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  margin-left: 46%;\n  z-index: 1;\n  position: relative;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbm9taW5hdGlvbi1zbGlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZGVub21pbmF0aW9uLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbm9taW5hdGlvbi1zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxuICAgIC8vIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGVub20tY291bnQge1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5kZW5vbS1zdWIge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuLndoaXRlLWJveCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDYlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG5cclxufSJdfQ== */";

/***/ }),

/***/ 95938:
/*!************************************************************************!*\
  !*** ./src/app/components/download/download.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.main {\n  padding: 10px;\n}\n\n::ng-deep .wider-popover {\n  --width: 82%;\n  --max-width: 82%;\n  --offset-x: -5px;\n}\n\n.selectAccId {\n  width: 100%;\n}\n\n.closeIcon {\n  margin-left: 55%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n\n.custom-btn {\n  height: 50px;\n}\n\n.dateRange {\n  margin-left: 10px;\n}\n\n.dateInput {\n  border: none;\n  width: 350px;\n}\n\n:host(.ion-focused) .item-native {\n  background: none;\n  opacity: var(--background-focused-opacity);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUFBSiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICMzNDc3QzY7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG4ubWFpbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAud2lkZXItcG9wb3ZlciB7XHJcbiAgICAtLXdpZHRoOiA4MiU7XHJcbiAgICAtLW1heC13aWR0aDogODIlO1xyXG4gICAgLS1vZmZzZXQteDogLTVweDtcclxufVxyXG5cclxuLnNlbGVjdEFjY0lkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2xvc2VJY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSVcclxufVxyXG5cclxuLmN1c3RvbS1idG4ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZGF0ZVJhbmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZUlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuOmhvc3QoLmlvbi1mb2N1c2VkKSAuaXRlbS1uYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG9wYWNpdHk6IHZhcigtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5KTtcclxufSJdfQ== */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".footer-custom-icon {\n  position: absolute !important;\n  top: -7px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-appt {\n  position: absolute !important;\n  top: -6px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-small {\n  position: absolute !important;\n  top: 0px !important;\n  left: 0px !important;\n  width: 60px !important;\n  height: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWN1c3RvbS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWN1c3RvbS1pY29uLWFwcHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogLTZweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItY3VzdG9tLWljb24tc21hbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 26022:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "div[scrollx=true] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\ndiv[scrollx=true]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] .scroll-item {\n  flex: 0 0 auto;\n}\n.mt-5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNHLGFBQUE7QUFFUDtBQUFLO0VBQ0UsY0FBQTtBQUVQO0FBRUU7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUFDSCIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbc2Nyb2xseD10cnVlXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICAuc2Nyb2xsLWl0ZW0ge1xyXG4gICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubXQtNXtcclxuICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfSJdfQ== */";

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