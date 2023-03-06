"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 44421:
/*!*****************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccountComponent": () => (/* binding */ AddAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-account.component.html?ngResource */ 93915);
/* harmony import */ var _add_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-account.component.scss?ngResource */ 64034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);









let AddAccountComponent = class AddAccountComponent {
    constructor(modalCtr, formBuilder, apiService, shareDataService, toastService) {
        this.modalCtr = modalCtr;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.shareDataService = shareDataService;
        this.toastService = toastService;
        this.account_option = ['Internal', 'Other Bank'];
        this.selectedItem = "Internal";
        this.isSubmitted = false;
    }
    ngOnInit() {
        var _a;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.buildForm();
        (_a = this.accountForm.get('transferType')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(val => {
            var _a;
            if (val === 'Internal') {
                (_a = this.accountForm.get('bankCode')) === null || _a === void 0 ? void 0 : _a.patchValue("");
                this.accountForm.get('bankCode').clearValidators(); // 6. Clear All Validators
                this.accountForm.get('bankCode').updateValueAndValidity();
            }
            else {
                this.accountForm.get('bankCode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]); // Set Required Validator
                this.accountForm.get('bankCode').updateValueAndValidity();
            }
        });
    }
    buildForm() {
        var _a, _b, _c;
        this.accountForm = this.formBuilder.group({
            customerId: [(_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            transferType: [this.selectedItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            accountCurrency: [(_c = (_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.currencyCode) !== null && _c !== void 0 ? _c : 'INR', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            customerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            bankCode: [''],
            customerNickName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    get errorControl() {
        return this.accountForm.controls;
    }
    submit() {
        this.isSubmitted = true;
        if (!this.accountForm.valid) {
            return false;
        }
        else {
            console.log(this.accountForm.value);
            this.apiService.addNewAccountToDisburse(this.accountForm.value).subscribe(res => {
                console.log(res);
                if (res.status == 200) {
                    this.close();
                    this.toastService.showToast(res === null || res === void 0 ? void 0 : res.message);
                }
                else {
                    this.toastService.showToast(res === null || res === void 0 ? void 0 : res.message);
                }
            }, (err) => {
                this.toastService.showToast(err);
            });
        }
    }
    close() {
        this.modalCtr.dismiss(null);
    }
};
AddAccountComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
AddAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-account',
        template: _add_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddAccountComponent);



/***/ }),

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

/***/ 6156:
/*!*******************************************************!*\
  !*** ./src/app/components/branch/branch.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchComponent": () => (/* binding */ BranchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _branch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch.component.html?ngResource */ 82598);
/* harmony import */ var _branch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch.component.scss?ngResource */ 47092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.component */ 51006);







let BranchComponent = class BranchComponent {
    constructor(apiService, modalController) {
        this.apiService = apiService;
        this.modalController = modalController;
        this.branchData = [];
        this.typesMap = {};
        this.typesList = [];
        this.typesSelectOptions = [];
        this.markers = [];
        this.infoWindows = [];
    }
    ngOnInit() {
        this.getBankBranches();
        this.branchFlag = localStorage.getItem('BranchFlag');
        this.accBranch = localStorage.getItem('AccBranch');
        console.log(this.branchFlag);
    }
    getBankBranches() {
        this.apiService.getBranchByCity("Bangalore")
            .subscribe((data) => {
            this.branchData = data;
            console.log(this.branchData);
            for (let i = 0; i <= this.branchData.length; i++) {
                this.apiService.getNumberOfCrowd(this.branchData[i].branchName)
                    .subscribe((data) => {
                    console.log(this.branchData[i].branchName);
                    this.branchData[i].tokenCount = data.tokenCount;
                    console.log(this.branchData);
                }, (err) => {
                    console.log("error coming alert");
                    this.branchData[i].tokenCount = 0;
                });
            }
            if (this.branchFlag == 'false') {
                console.log("ifff");
                data.forEach((element, index) => {
                    if (data[index].branchName == this.accBranch)
                        data.splice(index, 1);
                });
                console.log(this.branchData);
            }
        });
    }
    presentMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent,
                cssClass: 'my-custom-class',
                id: "mapModal",
                swipeToClose: true,
                presentingElement: yield this.modalController.getTop()
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log("Data", data);
            if (data) {
                this.dismiss(data);
            }
        });
    }
    dismiss(location) {
        console.log(location);
        localStorage.setItem("location", location);
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'data': location
        }, "", "branchModal");
    }
    close() {
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.selectedLocation = null;
    }
};
BranchComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
BranchComponent.propDecorators = {
    gmap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['mapContainer', { static: false },] }]
};
BranchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-branch',
        template: _branch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_branch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BranchComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 64662);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction-date/transaction-date.component */ 19693);
/* harmony import */ var _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-account/add-account.component */ 44421);
/* harmony import */ var _directives_directive_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../directives/directive.module */ 27589);




















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [
            _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__.BranchComponent,
            _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__.AvatarPhotoComponent,
            _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__.TimeSlotsComponent,
            _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent,
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
            _download_download_component__WEBPACK_IMPORTED_MODULE_7__.DownloadComponent,
            _alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_9__.AlertInternetComponent,
            _denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_10__.DenominationSlideComponent,
            _transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_12__.TransactionDateComponent,
            _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_13__.AddAccountComponent
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
            _denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_10__.DenominationSlideComponent,
            _transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_12__.TransactionDateComponent,
            _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_13__.AddAccountComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _directives_directive_module__WEBPACK_IMPORTED_MODULE_14__.DirectiveModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_8__.SharedMaterialModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__.Ng2SearchPipeModule
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
                denom_key: 2000
            },
            {
                key: "five_hundred",
                value: 500,
                denom_key: 500
            }, {
                key: "two_hundred",
                value: 200,
                denom_key: 200
            }, {
                key: "one_hundred",
                value: 100,
                denom_key: 100
            }, {
                key: "fifty",
                value: 50,
                denom_key: 50
            }, {
                key: "twenty",
                value: 20,
                denom_key: 20
            }, {
                key: "ten",
                value: 10,
                denom_key: 10
            }, {
                key: "one",
                value: 1,
                denom_key: 1
            },
        ];
        this.total = 0;
        this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.denomData = [];
        this.showMore = false;
        this.icon_arrow_svg = 'assets/icon/arrow.svg';
    }
    ngOnInit() {
        this.buildDenomForm();
        let data = JSON.parse(localStorage.getItem(this.unique_key)) || null;
        if (this.denomData != null) {
            this.populateDenomination();
            this.calculateTotalAmount();
        }
        else {
            this.denominationForm.patchValue(data === null || data === void 0 ? void 0 : data.data);
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
        if (this.unique_key == 'viewRef' || this.unique_key == 'dynamicViewRef') {
            this.parentRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'cashViewRef') {
            this.cashDepositRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'chwViewRef') {
            this.chwViewRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'loanViewRef') {
            this.loanViewRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'loanDsbViewRef') {
            this.loanDsbViewRef.remove(this.unique_key);
        }
    }
    populateDenomination() {
        this.denomination_keys.forEach((key, i) => {
            var _a;
            for (let index = 0; index < this.denomData.length; index++) {
                const denomItem = this.denomData[index];
                if (denomItem.denominationKey === key.denom_key) {
                    (_a = this.denominationForm.get(key === null || key === void 0 ? void 0 : key.key)) === null || _a === void 0 ? void 0 : _a.patchValue(denomItem === null || denomItem === void 0 ? void 0 : denomItem.denominationValue);
                }
            }
        });
    }
    saveDenom() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let final = [
            {
                denominationKey: 2000,
                denominationValue: +((_a = this.denominationForm.get('two_thousand')) === null || _a === void 0 ? void 0 : _a.value)
            },
            {
                denominationKey: 500,
                denominationValue: +((_b = this.denominationForm.get('five_hundred')) === null || _b === void 0 ? void 0 : _b.value)
            },
            {
                denominationKey: 200,
                denominationValue: +((_c = this.denominationForm.get('two_hundred')) === null || _c === void 0 ? void 0 : _c.value)
            },
            {
                denominationKey: 100,
                denominationValue: +((_d = this.denominationForm.get('one_hundred')) === null || _d === void 0 ? void 0 : _d.value)
            },
            {
                denominationKey: 50,
                denominationValue: +((_e = this.denominationForm.get('fifty')) === null || _e === void 0 ? void 0 : _e.value)
            },
            {
                denominationKey: 20,
                denominationValue: +((_f = this.denominationForm.get('twenty')) === null || _f === void 0 ? void 0 : _f.value)
            },
            {
                denominationKey: 10,
                denominationValue: +((_g = this.denominationForm.get('ten')) === null || _g === void 0 ? void 0 : _g.value)
            },
            {
                denominationKey: 1,
                denominationValue: +((_h = this.denominationForm.get('one')) === null || _h === void 0 ? void 0 : _h.value)
            }
        ];
        let denomPayload = {
            title: this.unique_key,
            total: this.total,
            denomination: final,
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

/***/ 51006:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component.html?ngResource */ 55706);
/* harmony import */ var _map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss?ngResource */ 54325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var _services_maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/maps.service */ 18798);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapmyindia-map-cordova-ionic-beta */ 64540);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__);









let MapComponent = class MapComponent {
    constructor(modalController, geolocation, apiService, _mapsService, _element) {
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.apiService = apiService;
        this._mapsService = _mapsService;
        this._element = _element;
        this.branchData = [];
        this.typesMap = {};
        this.typesList = [];
        this.typesSelectOptions = [];
        this.markers = [];
        this.infoWindows = [];
        this.center = [];
        this.map = new mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__.mmi();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.setupMap();
        // this.getLocation();
    }
    getBankBranches() {
        this.apiService.getBranchByCity('Bangalore').subscribe((data) => {
            this.branchData = data;
            this.getMarkers();
        });
    }
    // getLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(this.showPosition);
    //   }
    // }
    // showPosition(position) {
    //   console.log("postion", position.coords.latitude, position.coords.longitude);
    //   this.center = [position.coords.latitude, position.coords.longitude];
    //   console.log(this.center);
    // }
    setupMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.map.loadMaps(this.gmap.nativeElement, {
                key: '1d833ae339c7284f8104fc7482107c66',
                zoomControl: true,
                hybrid: true,
                center: [28.549948, 77.268241],
                zoom: 10,
                location: { control: true, initial: true, bounds: true },
            });
            this.getBankBranches();
        });
    }
    getMarkers() {
        for (let _i = 0; _i <= this.branchData.length; _i++) {
            // Commented google map settings
            // this.setupMarker();
            var cont = `<div><p style=\"font-size: 25px;text-transform: capitalize;color: #121111;font-weight: 800;\">${this.branchData[_i].branchName}</p>` +
                `<p style=\"\"><span style=\"font-size: 13px;text-transform: capitalize;color: #ccc;\">Branch Code</span> <span style=\"color: #a9a9a9;font-size: 16px;font-weight: 800;text-transform: uppercase;\">${this.branchData[_i].branchCode}</span></p>` +
                `<p style=\"font-family: inherit;font-style: inherit;text-align: left;text-transform: capitalize;\">${this.branchData[_i].address}</p>` +
                `<button style=\"border: 2px solid #456EFE; border-radius: 50px;width: 100px !important;height: 24px !important;\">SELECT</button></div>`;
            let mrker_arr = [
                [
                    this.branchData[_i].lattitude,
                    this.branchData[_i].longitude,
                    {
                        popup: cont,
                        event: [
                            'click',
                            (e) => {
                                this.selectedLocation = this.branchData[_i].branchName;
                            },
                        ],
                    },
                ],
            ];
            this.map.marker(mrker_arr, {
                iconUrl: 'assets/icon/map.png',
                iconSize: [36, 51],
                popupAnchor: [3, 290],
                draggable: false,
                fitbounds: true,
                cluster: true,
            });
        }
    }
    focusMarker(type, index) {
        const marker = type.markers[index];
        marker.setAnimation(google.maps.Animation.BOUNCE);
        marker.map.setZoom(17);
        marker.map.panTo(marker.position);
        setTimeout(() => {
            marker.setAnimation(null);
        }, 2000);
    }
    setUpInfoWindow(location, marker) {
        const infowindow = new google.maps.InfoWindow({
            content: `
        <div class="info_window_container">
          <ion-item detail="false" lines="none">
           <ion-badge slot="end">22 KM Away</ion-badge>
          </ion-item>
          <h4>${location.branchName}</h4>
          Branch Code : ${location.branchCode}
          <p>${location.address}</p>
          <ion-chip color="primary" onClick="close(location)">
           <ion-label color="primary">SELECT</ion-label>
          </ion-chip>
        </div>
      `,
        });
        this.infoWindows = [...this.infoWindows, infowindow];
        marker.addListener('click', () => {
            console.log('Clicked');
            this.infoWindows.forEach((infoWindow) => infoWindow.close());
            infowindow.open(this.map, marker);
            this.markerActive = location.id;
            this.selectedLocation = location;
            const element = this._element.nativeElement.getElementsByClassName(String(location.id))[0];
            if (element) {
                element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        });
        return infowindow;
    }
    onClick(event) {
        // this.selectedLocation = 'bangalore';
        console.log(event, this.selectedLocation);
        if (event.target.innerText == 'SELECT') {
            this.dismiss(this.selectedLocation);
            return;
        }
        else {
            return;
        }
    }
    // UNUSED METHOD FOR TEMP GOOGLEMAP END
    dismiss(location) {
        let data = {
            branchName: location,
        };
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss(data);
    }
    close() {
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.selectedLocation = null;
    }
};
MapComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_maps_service__WEBPACK_IMPORTED_MODULE_4__.MapsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef }
];
MapComponent.propDecorators = {
    gmap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['mapContainer', { static: true },] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['click', ['$event'],] }]
};
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-map',
        template: _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



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
                state: "/forextransaction"
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

/***/ 19023:
/*!***************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSlotsComponent": () => (/* binding */ TimeSlotsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _time_slots_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-slots.component.html?ngResource */ 97882);
/* harmony import */ var _time_slots_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-slots.component.scss?ngResource */ 94258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);








let TimeSlotsComponent = class TimeSlotsComponent {
    constructor(modalCtr, datepipe, navPramas, api) {
        this.modalCtr = modalCtr;
        this.datepipe = datepipe;
        this.navPramas = navPramas;
        this.api = api;
        this.slots = [];
        this.TimeSolts = [];
        this.dateCollection = [];
        this.exclude_past_time = [];
    }
    ngOnInit() {
        this.callingTimeslots();
        this.canceledAppointment = localStorage.getItem("canceledAppointment");
        let date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        let date1 = this.datepipe.transform(date, 'yyyy-MM-dd');
        this.loadtimeSlots(date1);
    }
    // -- Converts 24 Hr format to 24 Hr format
    convertTime12to24(time12h) {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}:${minutes}`;
    }
    loadtimeSlots(date) {
        this.callingTimeslots();
        this.isLoading = false;
        let date2 = date.split("-").reverse().join("-");
        const selectedDate = this.date.split('T')[0];
        const dt = new Date();
        const currentDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().length < 2 ? '0' + (dt.getMonth() + 1) : (dt.getMonth() + 1)}-${dt.getDate().toString().length < 2 ? ('0' + dt.getDate()) : dt.getDate()}`;
        const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
        if (new Date(selectedDate) <= new Date(currentDate)) {
            this.TimeSolts.forEach((ele, i) => {
                const time = ele.time.split(":")[0].length < 2 ? '0' + ele.time : ele.time;
                if (time < currentTime) {
                    this.TimeSolts[i].available = false;
                    this.TimeSolts[i].booked = true;
                }
            });
        }
        this.api.gettingBookedSlots(date2).subscribe(bookedResp => {
            if (this.canceledAppointment) {
                bookedResp = bookedResp.filter(item => item != this.canceledAppointment);
            }
            const newFormatBookedSlots = bookedResp && bookedResp.map(time => this.convertTime12to24(time));
            newFormatBookedSlots && newFormatBookedSlots.forEach(element => {
                const index = this.TimeSolts.map(x => x.time).indexOf(element);
                if (index > -1) {
                    this.TimeSolts[index].available = false;
                    this.TimeSolts[index].booked = true;
                }
            });
        });
        // this.exclude_past_time = this.TimeSolts.filter(item => item?.time > currentTime && !item.booked);
    }
    onSelectiongTimeSlots(event, time) {
        console.log(time);
        this.selected = time;
    }
    onSelectTime1(time, i, event) {
        console.log(i, time, event);
        this.selected = event.target.textContent;
        this.count++;
        if (this.count > 1) {
            this.dateCollection = [];
            console.log(this.TimeSolts, !this.TimeSolts[i].selected);
        }
        console.log("Time", time, i);
        this.TimeSolts[i].selected = !this.TimeSolts[i].selected;
        this.TimeSolts[i].available = !this.TimeSolts[i].available;
        console.log(this.TimeSolts[i].selected);
        const index = this.dateCollection.indexOf(time);
        console.log("index", this.dateCollection);
        this.TimeSolts.forEach((element, i) => {
            console.log(this.TimeSolts, i, element.time);
        });
        if (index > -1 && !this.TimeSolts[i].selected) {
            console.log("in if");
            this.dateCollection.splice(index, 1);
        }
        else if (index == -1 && this.TimeSolts[i].selected) {
            console.log("in else");
            this.TimeSolts.forEach((element, i) => {
                if (!element.booked && element.time == time) {
                    this.TimeSolts[i].available = false;
                }
                else if (!element.booked && element.time != time) {
                    this.TimeSolts[i].available = true;
                }
            });
            this.dateCollection = [];
            this.dateCollection.push(time);
            console.log(this.dateCollection);
        }
    }
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_2__(time, "hh:mm A").format("hh:mm A");
        return formatted;
    }
    close() {
        this.modalCtr.dismiss(null);
    }
    done() {
        this.modalCtr.dismiss(this.selected);
    }
    callingTimeslots() {
        this.TimeSolts = [
            {
                "time": "00:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "04:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "07:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "08:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "11:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:55",
                "available": true,
                "selected": false,
                "booked": false
            },
        ];
    }
};
TimeSlotsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
TimeSlotsComponent.propDecorators = {
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
TimeSlotsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-time-slots',
        template: _time_slots_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_time_slots_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimeSlotsComponent);



/***/ }),

/***/ 19693:
/*!***************************************************************************!*\
  !*** ./src/app/components/transaction-date/transaction-date.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionDateComponent": () => (/* binding */ TransactionDateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transaction_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-date.component.html?ngResource */ 69798);
/* harmony import */ var _transaction_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-date.component.scss?ngResource */ 27320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);








class CustomDateAdapter extends _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__.MomentDateAdapter {
    getDayOfWeekNames(style) {
        return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
}
let TransactionDateComponent = class TransactionDateComponent {
    constructor(modalCtr, datepipe) {
        this.modalCtr = modalCtr;
        this.datepipe = datepipe;
        // minDate = new Date();
        this.maxDate = new Date(2050, 11, 31);
        this.disableWeekendsFilter = (d) => {
            let day = new Date(d);
            return (day.getDay() !== 0 && day.getDay() !== 6);
        };
    }
    ngOnInit() {
        console.log(this.date);
        this.selected = this.date ? this.date : new Date();
        console.log(this.selected);
    }
    disableFuture() {
        return (date) => {
            let day = new Date(date);
            console.log(day);
            return (day.getDay() !== 0 && day.getDay() !== 6 ? '' : 'special-date');
        };
    }
    close() {
        this.modalCtr.dismiss();
    }
    done() {
        const convertedDate = this.datepipe.transform(this.selected, 'yyyy-MM-dd');
        this.modalCtr.dismiss(convertedDate);
    }
};
TransactionDateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe }
];
TransactionDateComponent.propDecorators = {
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
TransactionDateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-transaction-date',
        template: _transaction_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.DateAdapter,
                useClass: CustomDateAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_LOCALE],
            },
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_FORMATS,
                useValue: {
                    parse: {
                        dateInput: ['l', 'LL'],
                    },
                    display: {
                        dateInput: 'L',
                        monthYearLabel: 'MMMM YYYY',
                        dateA11yLabel: 'L',
                        monthYearA11yLabel: 'MMMM YYYY',
                    },
                },
            },
        ],
        styles: [_transaction_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionDateComponent);



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
        declarations: [
            _currency_pipe__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe,
            _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchFilterPipe
        ],
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

/***/ 18798:
/*!******************************************!*\
  !*** ./src/app/services/maps.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsService": () => (/* binding */ MapsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps */ 68223);



let MapsService = class MapsService {
    constructor() {
        this.clientKey = 'AIzaSyAHnMnRdGyN-tZr3rn9ugPJBEfaPgqHGWk';
    }
    getGoogleMaps() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loader) {
                this.loader = new google_maps__WEBPACK_IMPORTED_MODULE_1__.Loader(this.clientKey);
            }
            if (!this.googleMaps) {
                this.googleMaps = yield this.loader.load();
            }
            return this.googleMaps;
        });
    }
};
MapsService.ctorParameters = () => [];
MapsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MapsService);



/***/ }),

/***/ 84465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 93819);



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showToast(msg) {
        this.myToast = this.toast.create({
            message: msg,
            duration: 3000,
            buttons: [
                {
                    text: 'Dismiss',
                    role: 'cancel',
                    handler: () => { }
                }
            ]
        }).then((toastData) => {
            toastData.present();
        });
    }
    dismissToast() {
        this.myToast = this.toast.dismiss();
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ 68223:
/*!****************************************************!*\
  !*** ./node_modules/google-maps/lib/esm/loader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
class Loader {
  constructor(apiKey = null, options = {}) {
    this.apiKey = apiKey;
    this.options = options;
    if (typeof window === 'undefined') {
      throw new Error('google-maps is supported only in browser environment');
    }
  }
  load() {
    if (typeof this.api !== 'undefined') {
      return Promise.resolve(this.api);
    }
    if (typeof this.loader !== 'undefined') {
      return this.loader;
    }
    window[Loader.CALLBACK_NAME] = () => {
      this.api = window['google'];
      if (typeof this.resolve === 'undefined') {
        throw new Error('Should not happen');
      }
      this.resolve(this.api);
    };
    window['gm_authFailure'] = () => {
      if (typeof this.reject === 'undefined') {
        throw new Error('Should not happen');
      }
      this.reject(new Error('google-maps: authentication error'));
    };
    return this.loader = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      const script = document.createElement('script');
      script.src = this.createUrl();
      script.async = true;
      script.onerror = e => reject(e);
      document.head.appendChild(script);
    });
  }
  createUrl() {
    const parameters = [`callback=${Loader.CALLBACK_NAME}`];
    if (this.apiKey) {
      parameters.push(`key=${this.apiKey}`);
    }
    for (let name in this.options) {
      if (this.options.hasOwnProperty(name)) {
        let value = this.options[name];
        if (name === 'version') {
          name = 'v';
        }
        if (name === 'libraries') {
          value = value.join(',');
        }
        parameters.push(`${name}=${value}`);
      }
    }
    return `https://maps.googleapis.com/maps/api/js?${parameters.join('&')}`;
  }
}
Loader.CALLBACK_NAME = '_dk_google_maps_loader_cb';

/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */
  static filter(items, term) {
    const /** @type {?} */toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */
    function checkInside(item, term) {
      for (let /** @type {?} */property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }
        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    }
    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};
Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
class Ng2SearchPipeModule {}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 64034:
/*!******************************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".example-right-align {\n  text-align: right;\n}\n\n.currency-card {\n  width: auto;\n  height: 42px;\n  color: #FFFFFF !important;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 0px;\n}\n\n.currency-link {\n  left: 0;\n  top: 16px;\n  right: 0;\n  bottom: 6px;\n  position: relative;\n  text-decoration: underline !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n\nion-item.exchange::part(native) {\n  height: 65px;\n  background: #F2F2F2;\n}\n\nion-item.txn::part(native) {\n  height: 65px;\n}\n\n.suffix-icon {\n  margin-top: -14px;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\n.remark-field {\n  margin-top: 25px;\n  border: 1px solid #dee2e6;\n  border-radius: 16px;\n  height: 100px;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.suffix-ion-icon {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  top: 10px;\n}\n\n.suffix-ion-icon-total {\n  position: relative;\n  bottom: 0;\n  right: 32px;\n  top: 10px;\n}\n\nion-segment {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  height: 50px !important;\n}\n\nion-segment-button {\n  --background-checked: linear-gradient(90deg, #051A2D, #004C97) !important;\n}\n\n.file-text {\n  color: #004C97;\n}\n\n.account-group {\n  background: #F2F2F2;\n  padding: 10px;\n  border-radius: 16px;\n}\n\n.lbl-title {\n  color: #102245;\n  font-size: 11px;\n}\n\n.lbl-header {\n  color: #004C97;\n  font-size: 16px;\n}\n\n.lbl-content {\n  color: #262831;\n  font-size: 12px;\n}\n\n.currency-label {\n  width: 43px;\n  height: 26px;\n  background: rgba(0, 76, 151, 0.1411764706);\n  border: 1pt solid #004C97;\n  margin: 0px;\n  display: inline-grid;\n  padding: 5px;\n  color: #004C97;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #B20000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLHNEQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUlBOztFQUVJLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUFESjs7QUFLQTtFQUNJLHNCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFGSjs7QUFLQTtFQUNJLGdHQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlFQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJLDRCQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6ImFkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jdXJyZW5jeS1jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxpbmsge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb2wtNiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LnRyYW5zcG9wb3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24taXRlbS5leGNoYW5nZTo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnR4bjo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLnN1ZmZpeC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci50cmFucy1wb3A6OnBhcnQoY29udGVudCkge1xyXG4gICAgLS13aWR0aDogMjc1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIC0tb2Zmc2V0LXg6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAtLW9mZnNldC15OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxyXG4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZW1hcmstZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAxNXB4ICMwMDAwMDAxNyk7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24tdG90YWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbGUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuXHJcbi5hY2NvdW50LWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLmxibC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmxibC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMwMDRDOTc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5sYmwtY29udGVudCB7XHJcbiAgICBjb2xvcjogIzI2MjgzMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxhYmVsIHtcclxuICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCA3NiwgMTUxLCAwLjE0MTE3NjQ3MDYpO1xyXG4gICAgYm9yZGVyOiAxcHQgc29saWQgIzAwNEM5NztcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ubmV4dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmNhbmNlbCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjQjIwMDAwO1xyXG59Il19 */";

/***/ }),

/***/ 63614:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".circle {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle img {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n.circle .initials {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQURSIiwiZmlsZSI6ImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbml0aWFscyB7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICA6IDE5cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjYyNXB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 47092:
/*!********************************************************************!*\
  !*** ./src/app/components/branch/branch.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #051A2D;\n  color: #ffffff;\n}\n\n.toolbar-content {\n  background: #051A2D;\n  height: 330px;\n  border-bottom-left-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n\nion-item.search {\n  --background: #000000 !important;\n  --color: #fffff;\n}\n\nion-item::part(native) {\n  border-radius: 6px;\n  height: auto;\n}\n\nion-card {\n  height: auto;\n  min-height: 1000px;\n  margin-top: -156px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  border-radius: 12px;\n}\n\nion-input.custom {\n  --background: #000000;\n  --color: #fff;\n  --placeholder-color: #ffffff;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 30px;\n  --placeholder-opacity: 1;\n  --padding-top: 10px;\n  text-transform: capitalize;\n}\n\nion-button.next {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n  float: right;\n  width: 90px;\n  height: 30px;\n  font-size: 12px !important;\n  font-weight: 100 !important;\n  text-transform: capitalize !important;\n}\n\n.title-branch {\n  color: #004C97 !important;\n}\n\n.text-center {\n  color: #B1B1B1;\n  padding: 10px 0 20px 0;\n}\n\n.chip-custom {\n  background: #FFF7E3;\n  padding: 16px;\n  margin-left: 36px !important;\n  margin-top: -5px;\n}\n\nion-chip.chip-outline {\n  border-radius: 5px;\n  border-style: unset;\n}\n\n.content-branch {\n  white-space: normal !important;\n  color: #707070;\n  opacity: 100%;\n  font-size: 12px;\n}\n\nion-item::part(native) {\n  padding-inline-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5jaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU1BO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0dBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFISjs7QUFNQTtFQUNJLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDSCwwQkFBQTtFQUNHLDJCQUFBO0VBQ0EscUNBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtBQUpKIiwiZmlsZSI6ImJyYW5jaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4kd2lkdGg6IDQwMDtcclxuJGNpcmNsZS1zaXplOiA1MDtcclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzA1MUEyRDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udG9vbGJhci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMwNTFBMkQ7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5pb24taXRlbS5zZWFyY2gge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTU2cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG5pb24taW5wdXQuY3VzdG9tIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDMwcHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ubmV4dCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcblx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUtYnJhbmNoe1xyXG4gICAgY29sb3I6ICMwMDRDOTcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgY29sb3I6ICNCMUIxQjE7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG4uY2hpcC1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjdFMztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuaW9uLWNoaXAuY2hpcC1vdXRsaW5lIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1zdHlsZTogdW5zZXQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWJyYW5jaCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OjBweDtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 24869:
/*!********************************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".denomination-slide {\n  background: #F3F3F3;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #484848;\n  margin-top: -4px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  position: relative;\n}\n\n.denom-count {\n  color: #484848;\n  font-size: 10px;\n}\n\n.denom-sub {\n  color: #6c757d;\n  font-size: 8px;\n}\n\n.white-box {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  margin-left: 46%;\n  z-index: 1;\n  position: relative;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbm9taW5hdGlvbi1zbGlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZGVub21pbmF0aW9uLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbm9taW5hdGlvbi1zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gICAgLy8gei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kZW5vbS1jb3VudCB7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmRlbm9tLXN1YiB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4ud2hpdGUtYm94IHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NiU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn0iXX0= */";

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

/***/ 54325:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#map {\n  width: 100%;\n  height: 100vh;\n}\n\nion-content {\n  --background: rgb(0 0 0 / 9%);\n}\n\n.leaflet-popup-content p {\n  margin: 11px 0 !important;\n}\n\n.map_marker {\n  position: relative;\n  width: 34px;\n  height: 48px;\n}\n\n.head-map {\n  z-index: -1;\n  position: inherit;\n  margin-top: 0px;\n}\n\nion-fab-button.back {\n  --background: #FFFEFE;\n  --color: #004C97;\n}\n\nion-fab-button.search {\n  --background: #FFFEFE;\n  --color: #000000;\n}\n\n/*marker text span css*/\n\n.info_window_container {\n  padding: 1rem;\n  overflow: scroll;\n}\n\n.info_window_container p {\n  font-size: 1.4rem;\n}\n\n.info_window_container h4 {\n  text-transform: capitalize;\n  font-size: 1.8rem;\n  margin: 1rem 0rem;\n}\n\n.info_window_container h5,\n.info_window_container span {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.3;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin: 0.2rem 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQSx1QkFBQTs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBRkoiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcblxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMTFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXBfbWFya2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uaGVhZC1tYXAge1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24uYmFja3tcclxuICAtLWJhY2tncm91bmQ6ICNGRkZFRkU7XHJcbiAgLS1jb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24uc2VhcmNoe1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRkVGRTtcclxuICAtLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4vKm1hcmtlciB0ZXh0IHNwYW4gY3NzKi9cclxuXHJcbi5pbmZvX3dpbmRvd19jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICB9XHJcblxyXG4gIGg1LFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwLjJyZW0gMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 26022:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "div[scrollx=true] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\ndiv[scrollx=true]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] .scroll-item {\n  flex: 0 0 auto;\n}\n.mt-5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNHLGFBQUE7QUFFUDtBQUFLO0VBQ0UsY0FBQTtBQUVQO0FBRUU7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUFDSCIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbc2Nyb2xseD10cnVlXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICAuc2Nyb2xsLWl0ZW0ge1xyXG4gICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubXQtNXtcclxuICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 94258:
/*!****************************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --note_border_color: #000;\n}\n\n.time_slot_title {\n  padding-left: 0;\n}\n\n.header_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.selectedTime {\n  background-color: #F3F3F3;\n  padding: 10px;\n  font-size: 16px;\n  border: 2px solid #fff;\n  box-shadow: 0 3pt 15pt rgba(0, 0, 0, 0.031372549);\n  border-radius: 7px;\n}\n\n.bookedSlot {\n  pointer-events: none;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  background-color: #F3F3F3;\n  color: #B20000;\n  height: 40px;\n  margin: 7px 0;\n}\n\n.availableSlot {\n  background-color: #fff !important;\n  cursor: pointer;\n  color: black !important;\n  font-weight: 900;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0pt 3pt 10pt rgba(0, 0, 0, 0.0509803922);\n  height: 40px;\n  margin: 7px 0;\n}\n\n.selectedClass {\n  pointer-events: none;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  height: 40px;\n  margin: 7px 0;\n  color: #f7f7f7 !important;\n  background-image: linear-gradient(91deg, #051A2D, #004C97) !important;\n  color: #fff;\n}\n\n.note_sec {\n  display: flex;\n  flex-direction: column;\n  margin: 16px 0;\n}\n\n.note_sec ion-icon {\n  height: 20px;\n  width: 20px;\n  transform: scale(2);\n  margin-right: 7px;\n}\n\n.note_sec ion-icon.small {\n  transform: scale(1);\n  width: 15px;\n}\n\n.note_sec ion-text {\n  font-size: 12px;\n}\n\n.btn_content {\n  display: flex;\n  justify-content: center;\n}\n\nion-footer .footer_btn {\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  --background: linear-gradient(91deg, #051A2D, #004C97);\n  text-transform: capitalize;\n}\n\nion-footer .footer_btn.cancel {\n  --background: #fff;\n  color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtc2xvdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxRUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUZJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSU47O0FBREU7RUFDRSxlQUFBO0FBR0o7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFTiIsImZpbGUiOiJ0aW1lLXNsb3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tbm90ZV9ib3JkZXJfY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi50aW1lX3Nsb3RfdGl0bGUge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWRUaW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgMTVwdCAjMDAwMDAwMDg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uYm9va2VkU2xvdCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XHJcbiAgY29sb3I6ICNCMjAwMDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbn1cclxuXHJcbi5hdmFpbGFibGVTbG90IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDBwdCAzcHQgMTBwdCAjMDAwMDAwMEQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbn1cclxuXHJcbi5zZWxlY3RlZENsYXNzIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbiAgY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTFkZWcsICMwNTFBMkQsICMwMDRDOTcpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ub3RlX3NlYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgJi5zbWFsbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIC5mb290ZXJfYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTFkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAmLmNhbmNlbCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 27320:
/*!****************************************************************************************!*\
  !*** ./src/app/components/transaction-date/transaction-date.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #051A2D;\n  --color:#ffffff;\n  margin-bottom: -1px;\n}\n\n:host > * .calendar-days-of-week {\n  --background: #051A2D !important;\n  --border-bottom-left-radius: 10px !important;\n  --border-bottom-right-radius: 10px !important;\n}\n\n:host > * .calendar-action-buttons {\n  --background: #051A2D !important;\n}\n\n:host > * .calendar-action-buttons {\n  --color: #ffffff !important;\n}\n\n::ng-deep .mat-calendar-table-header-divider::after {\n  background-color: black;\n}\n\nion-footer .footer_btn {\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  --background: linear-gradient(91deg, #051A2D, #004C97);\n  text-transform: capitalize;\n}\n\nion-footer .footer_btn.cancel {\n  --background: #fff;\n  color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksZ0NBQUE7RUFDSCw0Q0FBQTtFQUNHLDZDQUFBO0FBQUo7O0FBR0E7RUFDSSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7QUFBSjs7QUFFQTtFQUNBLHVCQUFBO0FBQ0E7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQUFSOztBQUVRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQVoiLCJmaWxlIjoidHJhbnNhY3Rpb24tZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzA1MUEyRDtcclxuICAgIC0tY29sb3I6I2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcblxyXG59XHJcblxyXG46aG9zdCA+ICogLmNhbGVuZGFyLWRheXMtb2Ytd2VlayB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNTFBMkQgIWltcG9ydGFudDtcclxuXHQtLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgPiAqIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNTFBMkQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgPiAqIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICAuZm9vdGVyX2J0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MWRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgICAgICYuY2FuY2VsIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzExMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19 */";

/***/ }),

/***/ 93915:
/*!******************************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"time_slot_title\">\r\n      <ion-text class=\"header_title\">\r\n        <div>Add Account</div>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"accountForm\" novalidate>\r\n\r\n\r\n    <p class=\"txn-lbl\">Transfer To</p>\r\n    <mat-radio-group color=\"primary\" class=\"full-width my-2\" formControlName=\"transferType\" [(ngModel)]=\"selectedItem\">\r\n      <mat-radio-button *ngFor=\"let option of account_option\" [value]=\"option\" class=\"mx-3\">\r\n        {{option}}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n      <mat-label>Account Number</mat-label>\r\n      <input matInput placeholder=\"Account Number\" formControlName=\"accountNumber\" numbersOnly>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n      <mat-label>Customer Name</mat-label>\r\n      <input matInput placeholder=\"Customer Name\" formControlName=\"customerName\" appAlphabetOnly>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\" *ngIf=\"selectedItem != 'Internal'\">\r\n      <mat-label>Bank Code</mat-label>\r\n      <input matInput placeholder=\"Bank Code\" formControlName=\"bankCode\" trim>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n      <mat-label>Customer Nickname</mat-label>\r\n      <input matInput placeholder=\"Customer Nickname\" formControlName=\"customerNickName\" appAlphabetOnly>\r\n    </mat-form-field>\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" [disabled]=\"accountForm.invalid\" (click)=\"submit()\">\r\n          Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"cancel\" (click)=\"close()\">Cancel</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ }),

/***/ 2178:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"circle\" [ngStyle]=\"{'background-color':  circleColor }\">\r\n    <img *ngIf=\"!showInitials\" src=\"{{photoUrl}}\">\r\n\r\n    <div *ngIf=\"showInitials\" class=\"initials\">\r\n        {{ initials }}\r\n    </div>\r\n</div>";

/***/ }),

/***/ 82598:
/*!********************************************************************!*\
  !*** ./src/app/components/branch/branch.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"toolbar-content\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"close()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"pl-1\">Nearest Branch</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"clear\" style=\" text-transform: capitalize !important;\" (click)=\"presentMap()\">\r\n          <ion-icon name=\"map\"></ion-icon> &nbsp; Map\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"ion-padding mb-4\">\r\n      <ion-item fill=\"outline\" class=\"search\">\r\n        <ion-input type=\"search\" placeholder=\"search\" class=\"custom\" [(ngModel)]=\"term\"></ion-input>\r\n        <ion-icon name=\"search\" slot=\"end\" style=\"color:#ffffff\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <ion-card>\r\n    <div class=\"my-2\">\r\n      <ng-container *ngIf=\"branchData.length != 0; else showNoBranch\">\r\n      <ion-item *ngFor=\"let branch of branchData | filter:term; let i=index\">\r\n        <ion-label class=\"mx-3\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-8\">\r\n              <h2> \r\n                <ion-icon slot=\"icon-only\" src=\"assets/icon/dot.svg\"></ion-icon> \r\n                <span class=\"mx-2 title-branch\">{{ branch?.branchName }}</span>\r\n              </h2>\r\n            </div>\r\n            <div class=\"col-4 align-self-end\">\r\n              <ion-button shape=\"round\" size=\"small\" class=\"next\"  (click)=\"dismiss(branch)\">Select</ion-button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <ion-chip class=\"chip-custom\" [outline]=\"true\">\r\n              <span style=\"color:#D68C00;opacity: 51%;\">Current Crowds : </span>\r\n              <span class=\"mx-2\" style=\"color:#D68C00\">{{ branch?.tokenCount }}</span></ion-chip>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <p class=\"content-branch mx-4\">{{ branch?.address }}</p>\r\n            </div>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ng-container>\r\n    <ng-template #showNoBranch>\r\n      <p>No Branch Available!</p>\r\n    </ng-template>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <div class=\"text-center\">\r\n    <ion-text>More</ion-text>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 76634:
/*!********************************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"denomination-slide\">\r\n  <form *ngIf=\"denominationForm\" [formGroup]=\"denominationForm\">\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">2000 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"two_thousand\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">500 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"five_hundred\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my1\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">200 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"two_hundred\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">100 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"one_hundred\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">50 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"fifty\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">20 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"twenty\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">10 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"ten\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">1 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"one\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-3\">\r\n      <mat-label>Denomination Total</mat-label>\r\n      <input matInput type=\"text\" [value]=\"total\" readonly=\"true\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n<div class=\"white-box\" (click)=\"remove_me()\">\r\n  <img [src]=\"icon_arrow_svg\" class=\"arrow-icon\">\r\n</div>\r\n";

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

/***/ 55706:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"row justify-content-between head-map\">\r\n    <div class=\"col-3\">\r\n      <ion-fab style=\"left:30px;top:30px;\">\r\n        <ion-fab-button (click)=\"close()\" class=\"back\">\r\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n\r\n    <div class=\"col-3\">\r\n      <ion-fab style=\"top:30px;right:30px;\">\r\n        <ion-fab-button class=\"search\">\r\n          <ion-icon name=\"search\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n  </div>\r\n\r\n  <div #mapContainer id=\"map\"></div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 85582:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"padding: 4% 0 1%\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModel()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar\r\n      placeholder=\"Search...\"\r\n      [(ngModel)]=\"filterTerm\"\r\n      animated=\"false\"\r\n    ></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!-- <ion-list-header>\r\n    <ion-label>Popular Service</ion-label>\r\n  </ion-list-header>\r\n  <div class=\"container\">\r\n    <div class=\"scroll\" scrollX=\"true\">\r\n      <ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-chip *ngFor=\"let item of items | searchFilter:filterTerm\" color=\"secondary\" (click)=\"openToast(item.title)\">\r\n            <ion-icon color=\"primary\" name=\"trending-up-outline\"></ion-icon>\r\n            <ion-label>{{ item.title }}</ion-label>\r\n          </ion-chip>\r\n        </ion-item>\r\n      </ion-row>\r\n    </div>\r\n</div> -->\r\n  <ion-list>\r\n    <ion-list-header lines=\"inset\">\r\n      <ion-label>Quick Services</ion-label>\r\n    </ion-list-header>\r\n    <ion-item\r\n      *ngFor=\"let item of trendingRecords | searchFilter: filterTerm\"\r\n      (click)=\"openPage(item)\"\r\n    >\r\n      <ion-label color=\"primary\">\r\n        <h1>{{ item.name }}</h1>\r\n      </ion-label>\r\n      <ion-icon name=\"trending-up-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ }),

/***/ 97882:
/*!****************************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"time_slot_title\">\r\n      <ion-text class=\"header_title\">\r\n        <div>Select Time</div>\r\n        <button class=\"selectedTime\">{{ date |  date:'d MMM y' }}</button>\r\n        <!-- <button class=\"selectedTime\" *ngIf=\"selected != null\">{{ selected }}</button> -->\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"isLoading\"></ion-progress-bar>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 px-2\" *ngFor=\"let slot of TimeSolts;let i=index\">\r\n      <ion-chip\r\n        [ngClass]=\"{'bookedSlot': slot.booked, 'availableSlot' : slot.available,'selectedClass': dateCollection.indexOf(slot.time)!=-1}\"\r\n        (click)=\"onSelectTime1(slot.time,i,$event)\">\r\n        <ion-label style=\"font-size: 16px; white-space: nowrap;\"> \r\n          {{format24HrsTo12Hrs(slot.time)}}\r\n        </ion-label>\r\n      </ion-chip>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"note_sec\">\r\n    <div class=\"text-primary mb-3\">Note:</div>\r\n    <div class=\"d-flex justify-content-between align-items-center\">\r\n      <div class=\"px-1 d-flex align-items-center\">\r\n        <ion-icon class=\"small\" src=\"/assets/icon/v2/Exclusion_6.svg\"></ion-icon>\r\n        <ion-text>Available</ion-text>\r\n      </div>\r\n      <div class=\"px-1 d-flex align-items-center\">\r\n        <ion-icon src=\"/assets/icon/v2/Exclusion_5.svg\"></ion-icon>\r\n        <ion-text>Selected</ion-text>\r\n      </div>\r\n      <div class=\"px-1 d-flex align-items-center\">\r\n        <ion-icon src=\"/assets/icon/v2/Exclusion_3.svg\"></ion-icon>\r\n        <ion-text>Already Booked</ion-text>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div class=\"row p-3\">\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" [disabled]=\"!selected\" class=\"footer_btn\" (click)=\"done()\">Submit</ion-button>\r\n    </div>\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" class=\"footer_btn cancel\" (click)=\"close()\">Back</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 69798:
/*!****************************************************************************************!*\
  !*** ./src/app/components/transaction-date/transaction-date.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\" color=\"light\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Select Date</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  [fullscreen]=\"true\">\r\n  <mat-calendar \r\n  startView=\"month\"\r\n  [(selected)]=\"selected\" [dateFilter]=\"disableWeekendsFilter\" [minDate]=\"minDate\" [maxDate]=\"maxDate\"\r\n  [dateClass]=\"disableFuture()\">\r\n  </mat-calendar>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"row p-3\">\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" [disabled]=\"!selected\" class=\"footer_btn\" (click)=\"done()\">Submit</ion-button>\r\n    </div>\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" class=\"footer_btn cancel\" (click)=\"close()\">Back</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map