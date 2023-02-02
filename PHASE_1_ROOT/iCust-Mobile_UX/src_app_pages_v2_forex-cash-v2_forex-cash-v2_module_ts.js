"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_forex-cash-v2_forex-cash-v2_module_ts"],{

/***/ 18109:
/*!************************************************************************!*\
  !*** ./src/app/pages/v2/forex-cash-v2/forex-cash-v2-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexCashV2PageRoutingModule": () => (/* binding */ ForexCashV2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-cash-v2.page */ 23342);




const routes = [
    {
        path: '',
        component: _forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_0__.ForexCashV2Page
    }
];
let ForexCashV2PageRoutingModule = class ForexCashV2PageRoutingModule {
};
ForexCashV2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForexCashV2PageRoutingModule);



/***/ }),

/***/ 34538:
/*!****************************************************************!*\
  !*** ./src/app/pages/v2/forex-cash-v2/forex-cash-v2.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexCashV2PageModule": () => (/* binding */ ForexCashV2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forex_cash_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-cash-v2-routing.module */ 18109);
/* harmony import */ var _forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-cash-v2.page */ 23342);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-material-extensions/select-country */ 96631);











let ForexCashV2PageModule = class ForexCashV2PageModule {
};
ForexCashV2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _forex_cash_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForexCashV2PageRoutingModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__.NgxFlagPickerModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_10__.MatSelectCountryModule
        ],
        declarations: [_forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_1__.ForexCashV2Page],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], ForexCashV2PageModule);



/***/ }),

/***/ 23342:
/*!**************************************************************!*\
  !*** ./src/app/pages/v2/forex-cash-v2/forex-cash-v2.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexCashV2Page": () => (/* binding */ ForexCashV2Page),
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forex_cash_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-cash-v2.page.html?ngResource */ 72069);
/* harmony import */ var _forex_cash_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-cash-v2.page.scss?ngResource */ 89169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../token-v2/token-v2.page */ 68106);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/denomination-slide/denomination-slide.component */ 9340);
/* harmony import */ var _currencyconverter_currencyconverter_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../currencyconverter/currencyconverter.page */ 62802);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 53298);





















const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
let ForexCashV2Page = class ForexCashV2Page {
    constructor(router, formBuilder, api, toastCtrl, toastService, modalController, datepipe, loading, shareDataService, loadingController, cdr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.toastService = toastService;
        this.modalController = modalController;
        this.datepipe = datepipe;
        this.loading = loading;
        this.shareDataService = shareDataService;
        this.loadingController = loadingController;
        this.cdr = cdr;
        this.animationState = 'out';
        this.selectedCountryCodeForexTrans = '';
        this.selectedCountryCode = '';
        this.isShow = true;
        this.toggle = false;
        this.frmToggle = false;
        this.ftmToggle = false;
        this.flag = true;
        this.editMode = false;
        this.currencies = [];
        this.chargeAmount = 0;
        this.isFrmClosed = false;
        this.amountOfDenomination = 0;
        this.amountOfTotalDenomination = 0;
        this.isShowDenomError = false;
        this.isShowDenomPayRecError = false;
        this.isOpen = false;
        this.isShowRepError = false;
        this.homeIconToggle = false;
        this.repFG = this.formBuilder.group({
            personName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10)]],
            repdocumentId: [''],
            repdocumentNumber: [''],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.formInit();
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log("Values?", this.routerData);
            this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        }
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        console.log(this.currencies);
        if (this.editMode) {
            const select_forex_countryCode = this.currencies.filter((i) => { var _a, _b; return i.currencyCode === ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.forexTransCurrency); });
            const select_countryCode = this.currencies.filter((i) => { var _a, _b; return i.currencyCode === ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.forexTransCurrency); });
            this.selectedCountryCodeForexTrans = select_forex_countryCode[0].countryCode.toLowerCase();
            this.selectedCountryCode = select_countryCode[0].countryCode.toLowerCase();
            const data = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data;
            console.log("REP", data === null || data === void 0 ? void 0 : data.representativeInfo);
            let deposit_type = (data === null || data === void 0 ? void 0 : data.representativeInfo.length) != 0 ? 'representative' : 'self';
            this.depositType = deposit_type;
            (_c = this.form.get('depositType')) === null || _c === void 0 ? void 0 : _c.patchValue(deposit_type);
            if (deposit_type == 'representative') {
                this.form.addControl('representativeInfo', this.repFG);
                this.form.get('representativeInfo').get('personName').patchValue((_e = (_d = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.personName);
                this.form.get('representativeInfo').get('phoneNo').patchValue((_g = (_f = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.phoneNo);
                this.form.get('representativeInfo').get('repdocumentId').patchValue((_j = (_h = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.documentId);
                this.form.get('representativeInfo').get('repdocumentNumber').patchValue((_l = (_k = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.documentNumber);
            }
            else {
                this.form.removeControl('representativeInfo');
            }
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "USD");
            this.selectedCurrency = countryCode[0];
            this.depositType = 'self';
            (_m = this.form.get('depositType')) === null || _m === void 0 ? void 0 : _m.patchValue('self');
        }
        this.loadData();
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
            console.log(data);
            this.api.getNumberOfCrowd(this.accountInfo.accountBranch)
                .subscribe((data1) => {
                this.tokenCount = data1.tokenCount || '0';
            });
        });
        this.form.get('forexAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        this.form.get('forexTransAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.forexTButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        this.form.get('forexTransCurrency').valueChanges.subscribe(val => {
            if (val) {
                const countryCode = this.currencies.filter((i) => i.currencyCode === val);
                this.selectedCountryCode = countryCode[0].countryCode.toLowerCase();
            }
        });
        this.form.get('forexAmount').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(res => res > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)())
            .subscribe(res => {
            this.updateTransAmount();
        });
        let today = new Date().toISOString();
        this.form.get('transactionDate').patchValue(today);
        console.log(this.form.value);
    }
    formInit() {
        this.form = this.formBuilder.group({
            transactionId: [''],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            productCode: ['FTX', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            forexTransType: ['sale', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            forexCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            forexAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            exchangeRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            totalChargeAmount: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            documentId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            documentNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            depositType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            forexTransCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            forexTransAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            totalTransactionAmount: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            // Audit log keys not required 
            totalAmount: [''],
            createdBy: [''],
            createdTime: [''],
            modifiedBy: [''],
            modifiedTime: [''],
            recordStatus: [''],
            authStatus: [''],
            version: [''],
        });
    }
    keyPressMob(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber)
            .subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter(card => card.status === "APPROVED");
            this.customerDetails = resp;
            this.upsertAccount(resp);
        }, (err) => {
            this.loading.dismiss();
        });
    }
    onScreenRefresh() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        if (this.editMode) {
            const select_forex_countryCode = this.currencies.filter((i) => { var _a, _b; return i.currencyCode === ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.forexTransCurrency); });
            const select_countryCode = this.currencies.filter((i) => { var _a, _b; return i.currencyCode === ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.forexTransCurrency); });
            this.selectedCountryCodeForexTrans = select_forex_countryCode[0].countryCode.toLowerCase();
            this.selectedCountryCode = select_countryCode[0].countryCode.toLowerCase();
            const data = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data;
            console.log("data?.representativeInfo", data === null || data === void 0 ? void 0 : data.representativeInfo);
            let deposit_type = (data === null || data === void 0 ? void 0 : data.representativeInfo.length) != 0 ? 'representative' : 'self';
            this.depositType = deposit_type;
            (_c = this.form.get('depositType')) === null || _c === void 0 ? void 0 : _c.patchValue(deposit_type);
            (_d = this.form.get('forexTransType')) === null || _d === void 0 ? void 0 : _d.patchValue(data === null || data === void 0 ? void 0 : data.forexTransType);
            if (deposit_type == 'representative') {
                this.form.addControl('representativeInfo', this.repFG);
                this.form.get('representativeInfo').get('personName').patchValue((_f = (_e = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.personName);
                this.form.get('representativeInfo').get('phoneNo').patchValue((_h = (_g = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.phoneNo);
                this.form.get('representativeInfo').get('repdocumentId').patchValue((_k = (_j = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.documentId);
                this.form.get('representativeInfo').get('repdocumentNumber').patchValue((_m = (_l = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.documentNumber);
            }
            else {
                this.form.removeControl('representativeInfo');
            }
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "USD");
            this.selectedCurrency = countryCode[0];
            this.depositType = 'self';
            (_o = this.form.get('depositType')) === null || _o === void 0 ? void 0 : _o.patchValue('self');
        }
        this.loadData();
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
            console.log(data);
            this.api.getNumberOfCrowd(this.accountInfo.accountBranch)
                .subscribe((data1) => {
                this.tokenCount = data1.tokenCount || '0';
            });
        });
        this.form.get('forexAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        this.form.get('forexTransAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.forexTButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        this.form.get('forexTransCurrency').valueChanges.subscribe(val => {
            if (val) {
                const countryCode = this.currencies.filter((i) => i.currencyCode === val);
                this.selectedCountryCode = countryCode[0].countryCode.toLowerCase();
            }
        });
    }
    screenOneValidation() {
        var _a, _b, _c, _d, _e, _f;
        let disable;
        if (((_a = this.form.get('forexCurrency')) === null || _a === void 0 ? void 0 : _a.valid) &&
            ((_b = this.form.get('forexAmount')) === null || _b === void 0 ? void 0 : _b.valid) &&
            ((_c = this.form.get('forexTransCurrency')) === null || _c === void 0 ? void 0 : _c.valid) &&
            ((_d = this.form.get('forexTransAmount')) === null || _d === void 0 ? void 0 : _d.valid) &&
            ((_e = this.form.get('documentId')) === null || _e === void 0 ? void 0 : _e.valid) &&
            ((_f = this.form.get('documentNumber')) === null || _f === void 0 ? void 0 : _f.valid)) {
            disable = false;
        }
        else {
            disable = true;
        }
        return disable;
    }
    screenTwoValidation() {
        var _a, _b, _c;
        let disable;
        if (((_a = this.form.get('transactionBranch')) === null || _a === void 0 ? void 0 : _a.valid) &&
            ((_b = this.form.get('transactionDate')) === null || _b === void 0 ? void 0 : _b.valid) &&
            ((_c = this.form.get('transactionTime')) === null || _c === void 0 ? void 0 : _c.valid)) {
            disable = false;
        }
        else {
            disable = true;
        }
        return disable;
    }
    screenDynamicControlValidation() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let disable;
        if (((_a = this.form.get('transactionBranch')) === null || _a === void 0 ? void 0 : _a.valid) &&
            ((_b = this.form.get('transactionDate')) === null || _b === void 0 ? void 0 : _b.valid) &&
            ((_c = this.form.get('transactionTime')) === null || _c === void 0 ? void 0 : _c.valid) &&
            ((_e = (_d = this.form.get('representativeInfo')) === null || _d === void 0 ? void 0 : _d.get('personName')) === null || _e === void 0 ? void 0 : _e.valid) &&
            ((_g = (_f = this.form.get('representativeInfo')) === null || _f === void 0 ? void 0 : _f.get('phoneNo')) === null || _g === void 0 ? void 0 : _g.valid) &&
            ((_j = (_h = this.form.get('representativeInfo')) === null || _h === void 0 ? void 0 : _h.get('repdocumentId')) === null || _j === void 0 ? void 0 : _j.valid) &&
            ((_l = (_k = this.form.get('representativeInfo')) === null || _k === void 0 ? void 0 : _k.get('repdocumentNumber')) === null || _l === void 0 ? void 0 : _l.valid)) {
            disable = false;
        }
        else {
            disable = true;
        }
        return disable;
    }
    getHomeBranch() {
        var _a, _b, _c, _d, _e;
        this.homeIconToggle = !this.homeIconToggle;
        if (this.homeIconToggle) {
            (_a = this.form.get('transactionBranch')) === null || _a === void 0 ? void 0 : _a.patchValue((_c = (_b = this.customerDetails) === null || _b === void 0 ? void 0 : _b.custAccount[0]) === null || _c === void 0 ? void 0 : _c.accountBranch);
        }
        else {
            (_d = this.form.get('transactionBranch')) === null || _d === void 0 ? void 0 : _d.patchValue("");
        }
        console.log("Clicked", (_e = this.form.get('transactionBranch')) === null || _e === void 0 ? void 0 : _e.value);
    }
    createComponent() {
        this.viewRef.clear();
        this.dynamicViewRef.clear();
        let childComponentRef = this.viewRef.createComponent(src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_9__.DenominationSlideComponent);
        let childComponent = childComponentRef.instance;
        childComponent.unique_key = "viewRef";
        childComponent.parentRef = this;
    }
    removeDynamicComponent() {
        this.viewRef.clear();
    }
    createComponentOne() {
        this.dynamicViewRef.clear();
        this.viewRef.clear();
        let childComponentRef = this.dynamicViewRef.createComponent(src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_9__.DenominationSlideComponent);
        let childComponent = childComponentRef.instance;
        childComponent.unique_key = "dynamicViewRef";
        childComponent.parentRef = this;
    }
    removeDynamicComponentOne() {
        this.dynamicViewRef.clear();
    }
    upsertAccount(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, "narrow");
        if (this.editMode) {
            const data = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data;
            (_b = this.form.get('forexTransType')) === null || _b === void 0 ? void 0 : _b.patchValue(data === null || data === void 0 ? void 0 : data.forexTransType);
            (_c = this.form.get('forexCurrency')) === null || _c === void 0 ? void 0 : _c.patchValue(data === null || data === void 0 ? void 0 : data.forexCurrency);
            (_d = this.form.get('forexAmount')) === null || _d === void 0 ? void 0 : _d.patchValue(data === null || data === void 0 ? void 0 : data.forexAmount);
            (_e = this.form.get('forexTransCurrency')) === null || _e === void 0 ? void 0 : _e.patchValue(data === null || data === void 0 ? void 0 : data.forexTransCurrency);
            (_f = this.form.get('forexTransAmount')) === null || _f === void 0 ? void 0 : _f.patchValue(data === null || data === void 0 ? void 0 : data.forexTransAmount);
            (_g = this.form.get('documentId')) === null || _g === void 0 ? void 0 : _g.patchValue(data === null || data === void 0 ? void 0 : data.documentId);
            (_h = this.form.get('documentNumber')) === null || _h === void 0 ? void 0 : _h.patchValue(data === null || data === void 0 ? void 0 : data.documentNumber);
            this.form.get('transactionBranch').patchValue(data === null || data === void 0 ? void 0 : data.transactionBranch);
            this.form.get('transactionDate').patchValue(data === null || data === void 0 ? void 0 : data.transactionDate);
            this.form.get('transactionTime').patchValue(data === null || data === void 0 ? void 0 : data.transactionTime);
            this.form.get('remarks').patchValue(data === null || data === void 0 ? void 0 : data.remarks);
            this.getChargeDetails();
        }
        else {
            this.accountflag = this.users.length == 1 ? true : false;
            this.selectedCountryCode = this.selectedCurrency.countryCode.toLowerCase();
            (_j = this.form.get('forexCurrency')) === null || _j === void 0 ? void 0 : _j.patchValue(this.selectedCurrency.currencyCode);
            this.form.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        }
        this.cdr.markForCheck();
    }
    getChargeDetails() {
        this.api.getChargeDetails(this.accountInfo.accountId).subscribe(resp => {
            var _a, _b;
            this.chargeAmount = (_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount;
            this.form.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
        }, err => console.log('Error: ', err));
    }
    get f() { return this.form.controls; }
    compareWith(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    goToCurrencyConverter() {
        this.router.navigate(['currencyconverter']);
    }
    onCountrySelected(e) {
        console.log(e);
    }
    openPopup() {
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_5__.TimeSlotsComponent,
            componentProps: {
                date: this.form.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                if (res.data != null) {
                    console.log(res);
                    this.form.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
    selectForexCurrencyCode(e) {
        var _a;
        console.log(typeof e);
        if (typeof e !== "undefined") {
            const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode === e);
            this.selectedCountryCodeForexTrans = filteredCurrency[0].countryCode.toLowerCase();
            this.cdr.markForCheck();
        }
        else {
            return;
        }
    }
    selectCurrencyCode(e) {
        var _a, _b, _c, _d;
        console.log(typeof e);
        if (typeof e !== "undefined") {
            const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode === e);
            this.selectedCountryCode = filteredCurrency[0].countryCode.toLowerCase();
            this.cdr.markForCheck();
            let fromCurrency = (_b = this.form.get('forexCurrency')) === null || _b === void 0 ? void 0 : _b.value;
            let toCurrency = (_c = this.form.get('forexTransCurrency')) === null || _c === void 0 ? void 0 : _c.value;
            let get_amount = Number((_d = this.form.get('forexAmount')) === null || _d === void 0 ? void 0 : _d.value);
            if (fromCurrency != undefined && toCurrency != undefined && get_amount != undefined) {
                this.getExChangeRate(this.form.get('forexCurrency').value, filteredCurrency[0].currencyCode);
            }
        }
        else {
            return;
        }
    }
    getExChangeRate(fromCurr, toCurr) {
        console.log("fromCurr, tocurr", fromCurr, toCurr);
        // this.api.getNativeExchangeRate(fromCurr, toCurr).subscribe((res: any) => {
        //   const rate = this.form.get('forexTransType').value == 'sale' ? res[0].sellRate : res[0].buyRate;
        //   console.log("Rate?", rate);
        //   this.form.get('exchangeRate').patchValue(rate);
        //   let updatedAmount: number = (Number(this.form.get('forexAmount')?.value) * Number(this.form.get('exchangeRate')?.value)) + this.chargeAmount;
        //   if (!isNaN(Number(updatedAmount))) {
        //     console.log(Number(updatedAmount));
        //     this.form.get('forexTransAmount').patchValue(updatedAmount);
        //     // this.form.get('totalTransactionAmount').patchValue(updatedAmount);
        //     this.cdr.markForCheck();
        //   }
        // });
        this.updateTransAmount();
    }
    updateTransAmount() {
        // let updatedAmount: number = (Number(this.form.get('forexAmount')?.value) * Number(this.form.get('exchangeRate')?.value)) + this.chargeAmount;
        // if (!isNaN(Number(updatedAmount))) {
        //   console.log(Number(updatedAmount));
        //   this.convert();
        //   this.form.get('forexTransAmount').patchValue(updatedAmount);
        //   this.cdr.markForCheck();
        // }
        this.convert();
    }
    convert() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            let fromCurrency = (_a = this.form.get('forexCurrency')) === null || _a === void 0 ? void 0 : _a.value;
            let toCurrency = (_b = this.form.get('forexTransCurrency')) === null || _b === void 0 ? void 0 : _b.value;
            let get_amount = Number((_c = this.form.get('forexAmount')) === null || _c === void 0 ? void 0 : _c.value);
            if (fromCurrency != undefined && toCurrency != undefined && get_amount != undefined) {
                const loading = yield this.loadingController.create({
                    message: 'Fetching exchange rate'
                });
                loading.present();
                this.api.fetchRatesByExternal(fromCurrency, toCurrency, get_amount)
                    .subscribe(data => {
                    var _a;
                    console.log("Sync ", data);
                    if (data === null || data === void 0 ? void 0 : data.success) {
                        loading.dismiss();
                        this.form.get('exchangeRate').patchValue((_a = data === null || data === void 0 ? void 0 : data.info) === null || _a === void 0 ? void 0 : _a.rate);
                        this.form.get('forexTransAmount').patchValue(data === null || data === void 0 ? void 0 : data.result);
                    }
                    else {
                        loading.dismiss();
                    }
                }, err => {
                    loading.dismiss();
                });
            }
        });
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            this.showToast();
        }
        else {
            return;
        }
    }
    showToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Transaction Amount should not exceed than Account Balance',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
    enableDisableAction(type) {
        switch (type) {
            case 'FRM':
                this.toggleFrm();
                break;
            case 'FTM':
                this.toggleFtm();
                break;
            default:
                console.log("No such type exists!");
                break;
        }
    }
    toggleFrm() {
        this.frmToggle = !this.frmToggle;
        this.animationState = this.animationState === 'out' ? 'in' : 'out';
        this.createComponent();
    }
    toggleFtm() {
        this.ftmToggle = !this.ftmToggle;
        this.animationState = this.animationState === 'out' ? 'in' : 'out';
        this.createComponentOne();
    }
    goToNextPage() {
        var _a, _b;
        let dataOne = JSON.parse(localStorage.getItem('viewRef')) || null;
        let dataTwo = JSON.parse(localStorage.getItem('dynamicViewRef')) || null;
        if (dataOne != null && dataOne.total != 0) {
            if (Number((_a = this.form.get('forexAmount')) === null || _a === void 0 ? void 0 : _a.value) != Number(dataOne.total)) {
                this.isShowDenomError = true;
                this.toastService.showToast("Denomination total should match with the Pay/Receive currency amount!");
                return;
            }
            else {
                this.isShowDenomError = false;
                this.flag = false;
            }
        }
        else if (dataTwo != null && dataTwo.total != 0) {
            if (Number((_b = this.form.get('forexTransAmount')) === null || _b === void 0 ? void 0 : _b.value) != Number(dataOne.total)) {
                this.isShowDenomError = true;
                this.toastService.showToast("Denomination total should match with the Pay/Receive currency amount!");
                return;
            }
            else {
                this.isShowDenomError = false;
                this.flag = false;
            }
        }
        else {
            this.flag = false;
        }
    }
    goToPreviousPage() {
        this.flag = true;
    }
    goBack() {
        this.router.navigate(['dashboard']);
    }
    openModalCurrency() {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            let payload = {
                fromCurrency: (_a = this.form.get('forexCurrency')) === null || _a === void 0 ? void 0 : _a.value,
                toCurrency: (_b = this.form.get('forexTransCurrency')) === null || _b === void 0 ? void 0 : _b.value,
                amount: (_c = this.form.get('forexAmount')) === null || _c === void 0 ? void 0 : _c.value,
                exchangeRate: (_d = this.form.get('exchangeRate')) === null || _d === void 0 ? void 0 : _d.value,
                total: (_e = this.form.get('forexTransAmount')) === null || _e === void 0 ? void 0 : _e.value,
            };
            const modal = yield this.modalController.create({
                component: _currencyconverter_currencyconverter_page__WEBPACK_IMPORTED_MODULE_10__.CurrencyconverterPage,
                componentProps: {
                    model_data: payload
                }
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    console.log('Modal Data : ' + modelData);
                }
            });
            return yield modal.present();
        });
    }
    submit(form) {
        var _a, _b, _c, _d, _e;
        form.transactionDate.toString();
        console.log(form.transactionDate);
        var date = new Date(form.transactionDate);
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        form.accountCurrency = ((_a = this.accountDetails) === null || _a === void 0 ? void 0 : _a.accountCurrency) || "";
        form.customerId = this.customerId;
        if (this.editMode) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        if (this.depositType == 'representative') {
            form.representativeInfo = [{
                    phoneNo: (_b = this.form.get('representativeInfo').get('phoneNo')) === null || _b === void 0 ? void 0 : _b.value,
                    personName: (_c = this.form.get('representativeInfo').get('personName')) === null || _c === void 0 ? void 0 : _c.value,
                    documentId: (_d = this.form.get('representativeInfo').get('repdocumentId')) === null || _d === void 0 ? void 0 : _d.value,
                    documentNumber: (_e = this.form.get('representativeInfo').get('repdocumentNumber')) === null || _e === void 0 ? void 0 : _e.value
                }];
        }
        else {
            form.representativeInfo = [];
        }
        form.isMobileTrans = true;
        console.log(form);
        if (this.editMode) {
            this.api.appointmentBooking(form).subscribe(resp => {
                this.transactionId = resp.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                if (resp === 200 || resp !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.form.reset();
                    this.onClick(resp);
                }
            });
        }
        else {
            this.api.cashDepositSave(form).subscribe((resp) => {
                this.transactionId = resp.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                if (resp === 200 || resp !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.form.reset();
                    this.onClick(resp);
                }
            });
        }
    }
    segmentChanged(e) {
        if (e == 'representative') {
            this.form.addControl('representativeInfo', this.repFG);
        }
        else {
            this.form.removeControl('representativeInfo');
        }
        console.log(this.form.value);
    }
    goToHomepage() {
        this.router.navigate(['/dashboard']);
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_7__.TokenV2Page,
                componentProps: {
                    value: event,
                },
            });
            modal.onDidDismiss().then((res) => {
                this.routerData = res;
                console.log("Getting Back Data", this.routerData);
                this.flag = true;
                this.onScreenRefresh();
            });
            return yield modal.present();
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_6__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    let branch = modelData.data;
                    this.tokenCount = modelData.data.data.tokenCount;
                    this.form.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
    }
    remove(view) {
        console.log("view disiss?", view);
        let data = JSON.parse(localStorage.getItem(view)) || null;
        console.log("Data??", data);
        if (view == 'viewRef') {
            this.viewRef.clear();
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                console.log(this.form.value);
            }
        }
        else {
            this.dynamicViewRef.clear();
            if (data != null && data.total != 0) {
                this.denomAmountPayAndRecValidation(data.total);
                console.log(this.form.value);
            }
        }
    }
    denomAmountValidation(amount) {
        var _a;
        if (Number((_a = this.form.get('forexAmount')) === null || _a === void 0 ? void 0 : _a.value) != Number(amount)) {
            this.isShowDenomError = true;
            this.toastService.showToast("Denomination total should match with the Pay/Receive currency amount");
        }
        else {
            this.isShowDenomError = false;
        }
        this.cdr.markForCheck();
    }
    denomAmountPayAndRecValidation(amount) {
        var _a;
        if (Number((_a = this.form.get('forexTransAmount')) === null || _a === void 0 ? void 0 : _a.value) != Number(amount)) {
            this.isShowDenomPayRecError = true;
            this.toastService.showToast("Denomination total should match with the Pay/Receive currency amount");
        }
        else {
            this.isShowDenomPayRecError = false;
        }
        this.cdr.markForCheck();
    }
    // Only Integer Numbers
    keyPressNumbers(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        }
        else {
            return true;
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        localStorage.removeItem("viewRef");
        localStorage.removeItem("dynamicViewRef");
    }
};
ForexCashV2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ToastController },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.LoadingController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef }
];
ForexCashV2Page.propDecorators = {
    denomButtonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ["denom", { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef },] }],
    forexTButtonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ["forexT", { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef },] }],
    viewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['dynamic', { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef },] }],
    dynamicViewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['dynamicForex', { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef },] }],
    amountEnterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['amountEnterInput', { static: false },] }]
};
ForexCashV2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-forex-cash-v2',
        template: _forex_cash_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.style)({ height: '0px' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.transition)('false <=> true', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.animate)(500)])
            ])
        ],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_FORMATS, useValue: MY_FORMATS },
        ],
        styles: [_forex_cash_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForexCashV2Page);



/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Fetching data.......',
                duration: 2500,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 89169:
/*!***************************************************************************!*\
  !*** ./src/app/pages/v2/forex-cash-v2/forex-cash-v2.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".example-right-align {\n  text-align: right;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-suffix.denomination-action {\n  top: -3px !important;\n}\n\n.currency-card {\n  width: auto;\n  height: 42px;\n  color: #FFFFFF !important;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 0px;\n}\n\n.currency-link {\n  left: 0;\n  top: 16px;\n  right: 0;\n  bottom: 6px;\n  position: relative;\n  text-decoration: underline !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n  text-align: center;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n\nion-item.exchange::part(native) {\n  height: 65px;\n  background: #F2F2F2;\n}\n\nion-item.txn::part(native) {\n  height: 65px;\n}\n\n.suffix-icon {\n  margin-top: -14px;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\n.remark-field {\n  margin-top: 25px;\n  border: 1px solid #dee2e6;\n  border-radius: 16px;\n  height: 100px;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.suffix-ion-icon {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  top: 10px;\n}\n\n.suffix-ion-icon-total {\n  position: relative;\n  bottom: 0;\n  right: 32px;\n  top: 10px;\n}\n\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.tta {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.excg {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.ttc {\n  background: #F2F2F2 !important;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\nion-segment {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  height: 50px !important;\n}\n\nion-segment-button {\n  --background-checked: linear-gradient(90deg, #051A2D, #004C97) !important;\n}\n\n.file-text {\n  color: #004C97;\n}\n\n.file-upload-container {\n  width: auto;\n  height: 100px;\n  border: 1px solid #ffffff;\n  background: #F8F8F8;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n  border-radius: 16px;\n}\n\n.file-upload-container .file-content {\n  margin-top: 6%;\n}\n\n.file-upload-container .file-img {\n  width: 25px;\n  height: 25px;\n}\n\nion-item.item-textarea {\n  --min-height: 100px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #B20000;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmV4LWNhc2gtdjIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHYyXFxmb3JleC1jYXNoLXYyXFxmb3JleC1jYXNoLXYyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FDQUo7O0FER0E7RUFDSSxzREFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURJQTs7RUFFSSxnQ0FBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FDREo7O0FES0E7RUFDSSxzQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRko7O0FES0E7RUFDSSxvQkFBQTtBQ0ZKOztBREtBO0VBQ0ksNEJBQUE7QUNGSjs7QURLQTtFQUNJLDhCQUFBO0FDRko7O0FES0E7RUFDSSw4QkFBQTtBQ0ZKOztBREtBO0VBQ0ksOEJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURLQTtFQUNJLGdHQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLHlFQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0FDRko7O0FESUk7RUFDSSxjQUFBO0FDRlI7O0FES0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0hSOztBRFlBO0VBQ0ksbUJBQUE7QUNUSjs7QURZQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQ1RKOztBRFlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDVEo7O0FEWUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNUSiIsImZpbGUiOiJmb3JleC1jYXNoLXYyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1zdWZmaXguZGVub21pbmF0aW9uLWFjdGlvbiB7XHJcbiAgICB0b3A6IC0zcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWNhcmQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uY3VycmVuY3ktbGluayB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNvbC02IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQudHJhbnNwb3BvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1pdGVtLmV4Y2hhbmdlOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxufVxyXG5cclxuaW9uLWl0ZW0udHhuOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uc3VmZml4LWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVyLnRyYW5zLXBvcDo6cGFydChjb250ZW50KSB7XHJcbiAgICAtLXdpZHRoOiAyNzVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1vZmZzZXQteDogLTEwcHggIWltcG9ydGFudDtcclxuICAgIC8vIC0tb2Zmc2V0LXk6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci50cmFucy1wb3AsXHJcbi5wb3BvdmVyLWFycm93OjphZnRlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDRDOTcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbWFyay1maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDE1cHggIzAwMDAwMDE3KTtcclxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1ZmZpeC1pb24taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLnN1ZmZpeC1pb24taWNvbi10b3RhbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMzJweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQudHRhIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLmV4Y2cge1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQudHRjIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTIge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLXRleHQge1xyXG4gICAgY29sb3I6ICMwMDRDOTc7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggMTVweCAjMDAwMDAwMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgICAuZmlsZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGlvbi1pdGVtLmV4Y2hhbmdlLml0ZW0tZmlsbC1vdXRsaW5lIHtcclxuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5pb24taXRlbS5pdGVtLXRleHRhcmVhIHtcclxuICAgIC0tbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ubmV4dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmNhbmNlbCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjQjIwMDAwO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmJhY2sge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59IiwiLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3VmZml4LmRlbm9taW5hdGlvbi1hY3Rpb24ge1xuICB0b3A6IC0zcHggIWltcG9ydGFudDtcbn1cblxuLmN1cnJlbmN5LWNhcmQge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA0MnB4O1xuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY3VycmVuY3ktbGluayB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IC02cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sLTYge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA2cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQudHJhbnNwb3BvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taXRlbS5leGNoYW5nZTo6cGFydChuYXRpdmUpIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xufVxuXG5pb24taXRlbS50eG46OnBhcnQobmF0aXZlKSB7XG4gIGhlaWdodDogNjVweDtcbn1cblxuLnN1ZmZpeC1pY29uIHtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbmlvbi1wb3BvdmVyLnRyYW5zLXBvcDo6cGFydChjb250ZW50KSB7XG4gIC0td2lkdGg6IDI3NXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgLS1vZmZzZXQteDogLTEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxuLnBvcG92ZXItYXJyb3c6OmFmdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5yZW1hcmstZmllbGQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDkwMTk2MDc4NCkpO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zdWZmaXgtaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLnN1ZmZpeC1pb24taWNvbi10b3RhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMzJweDtcbiAgdG9wOiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQudHRhIHtcbiAgYmFja2dyb3VuZDogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQuZXhjZyB7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjIgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLnR0YyB7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjIgIWltcG9ydGFudDtcbn1cblxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5NykgIWltcG9ydGFudDtcbn1cblxuLmZpbGUtdGV4dCB7XG4gIGNvbG9yOiAjMDA0Qzk3O1xufVxuXG4uZmlsZS11cGxvYWQtY29udGFpbmVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOTAxOTYwNzg0KSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uZmlsZS11cGxvYWQtY29udGFpbmVyIC5maWxlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA2JTtcbn1cbi5maWxlLXVwbG9hZC1jb250YWluZXIgLmZpbGUtaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSB7XG4gIC0tbWluLWhlaWdodDogMTAwcHg7XG59XG5cbmlvbi1idXR0b24ubmV4dCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XG4gIC0tY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1idXR0b24uY2FuY2VsIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogI0IyMDAwMDtcbn1cblxuaW9uLWJ1dHRvbi5iYWNrIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 72069:
/*!***************************************************************************!*\
  !*** ./src/app/pages/v2/forex-cash-v2/forex-cash-v2.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Cash Forex Transaction</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\" overflow-scroll=\"true\" class=\"ion-padding\" force-overscroll=\"true\">\r\n  <form [formGroup]=\"form\" *ngIf=\"form\">\r\n    <h5>Transaction type</h5>\r\n    <mat-radio-group color=\"primary\" formControlName=\"forexTransType\">\r\n      <mat-radio-button value=\"purchase\">Purchase</mat-radio-button>\r\n      <mat-radio-button value=\"sale\" class=\"mx-3\">Sale</mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n    <!-- <mat-select-country style=\"width: 100%;\" appearance=\"outline\" label=\"Country\" \r\n      [countries]=\"currencies\"\r\n      (onCountrySelected)=\"onCountrySelected($event)\">\r\n    </mat-select-country> -->\r\n\r\n    <mat-form-field class=\"full-width my-3\" appearance=\"outline\" style=\"width: 100%;\">\r\n      <mat-label position=\"floating\" class=\"t-20\">Forex Currency</mat-label>\r\n      <mat-select [(ngModel)]=\"forexCurrency\" (ngModelChange)=\"selectForexCurrencyCode($event)\"\r\n        [ngModelOptions]=\"{standalone: true}\" formControlName=\"forexCurrency\">\r\n        <mat-select-trigger class=\"selection-text\">\r\n          <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCodeForexTrans\" [showFlags]=\"isShow\"\r\n            [showLabels]=\"!isShow\" [showArrow]=\"!isShow\" slot=\"start\">\r\n          </ngx-flag-picker>\r\n          <span class=\"selection-text\">\r\n            {{ form.get('forexCurrency')?.value }}\r\n          </span>\r\n        </mat-select-trigger>\r\n\r\n        <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\r\n          {{currency.currencyCode}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <div class=\"denom-group\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-3\">\r\n        <mat-label>Forex Amount</mat-label>\r\n        <input matInput placeholder=\"Amount\" #myRef [(ngModel)]=\"forexAmount\" type=\"text\" min=\"1\"\r\n          (keypress)=\"keyPressNumbers($event)\" (keyup)=\"numberOnlyValidation($event)\" formControlName=\"forexAmount\">\r\n        <button mat-button matSuffix [ngClass]=\"form.get('forexAmount')?.value ? 'active-bg' : 'inactive-bg'\"\r\n          class=\"action-button\" #denom (click)=\"enableDisableAction('FRM')\">\r\n          Denomination\r\n        </button>\r\n      </mat-form-field>\r\n      <mat-error style=\"margin-top: -16px;margin-left: 5px;\" *ngIf=\"isShowDenomError\">\r\n        Denomination total should match with the forex currency amount\r\n      </mat-error>\r\n      <div class=\"my-1\">\r\n        <ng-template #dynamic></ng-template>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <mat-form-field class=\"full-width\" appearance=\"outline\" class=\"my-3\" style=\"width: 100%;\">\r\n      <mat-label>{{ form.get('forexTransType').value == 'purchase' ? 'Pay Currency' : 'Receive Currency' }}</mat-label>\r\n      <mat-select [(ngModel)]=\"forexTransCurrency\" [ngModelOptions]=\"{standalone: true}\"\r\n        formControlName=\"forexTransCurrency\" (ngModelChange)=\"selectCurrencyCode($event)\">\r\n        <mat-select-trigger class=\"selection-text\">\r\n          <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showFlags]=\"isShow\"\r\n            [showLabels]=\"!isShow\" [showArrow]=\"!isShow\" slot=\"start\">\r\n          </ngx-flag-picker>\r\n          <span class=\"selection-text\">\r\n            {{ form.get('forexTransCurrency')?.value }}\r\n          </span>\r\n        </mat-select-trigger>\r\n\r\n        <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\r\n          {{currency.currencyCode}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <div class=\"denom-group\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-3\">\r\n        <mat-label>{{ form.get('forexTransType').value == 'purchase' ? 'Pay Amount' : 'Receive Amount' }}</mat-label>\r\n        <input matInput type=\"text\" formControlName=\"forexTransAmount\" readonly=\"true\">\r\n        <button mat-button matSuffix [ngClass]=\"form.get('forexTransAmount')?.value ? 'active-bg' : 'inactive-bg'\"\r\n          class=\"action-button\" (click)=\"enableDisableAction('FTM')\" #forexT>\r\n          Denomination\r\n        </button>\r\n      </mat-form-field>\r\n      <mat-error style=\"margin-top: -16px;margin-left: 5px;\" *ngIf=\"isShowDenomPayRecError\">\r\n        Denomination total should match with the\r\n        {{ form.get('forexTransType').value == 'purchase' ? 'Pay Amount' : 'Receive Amount' }}\r\n      </mat-error>\r\n      <div class=\"my-1\">\r\n        <ng-template #dynamicForex></ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"group-field\">\r\n\r\n      <mat-form-field appearance=\"outline\" class=\"excg full-width\">\r\n        <mat-label>Exchange Rate</mat-label>\r\n        <input matInput placeholder=\"Exchange Rate\" readonly=\"true\" formControlName=\"exchangeRate\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"currency-card secondary\">\r\n        <a class=\"currency-link\" (click)=\"openModalCurrency()\">Check the Currency Converter</a>\r\n      </div>\r\n      <mat-hint>\r\n        <img src=\"assets/icon/error.svg\" class=\"small-info\">\r\n        <small> “Exchange rate may be changed at the time of transaction”</small>\r\n      </mat-hint>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-4\">\r\n      <mat-label>Document ID</mat-label>\r\n      <mat-select matNativeControl required formControlName=\"documentId\">\r\n        <mat-option value=\"passport\">Passport</mat-option>\r\n        <mat-option value=\"visa\">Visa</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n      <mat-label>Document Number</mat-label>\r\n      <input matInput placeholder=\"Document Number*\" type=\"number\" formControlName=\"documentNumber\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"file-upload-container\">\r\n      <div class=\"file-content text-center\">\r\n        <ion-icon src=\"assets/icon/fileicon.svg\" class=\"file-img\"></ion-icon>\r\n        <p class=\"file-text my-1\">File Upload</p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"flag\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"goToNextPage()\" [disabled]=\"screenOneValidation()\">Next\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"cancel\" (click)=\"goToHomepage()\">Cancel</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToPreviousPage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Cash Forex Transaction</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\" overflow-scroll=\"true\" class=\"ion-padding\" force-overscroll=\"true\">\r\n  <form *ngIf=\"form\" [formGroup]=\"form\">\r\n    <div class=\"group-field\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n        <mat-label>Transaction Branch</mat-label>\r\n        <input matInput placeholder=\"Transaction Branch\" formControlName=\"transactionBranch\">\r\n        <img [src]=\"homeIconToggle ? 'assets/icon/dark-home.svg' : 'assets/icon/home-branch.svg'\" matSuffix\r\n          class=\"suffix-icon\" (click)=\"getHomeBranch()\">\r\n      </mat-form-field>\r\n      <div class=\"currency-card secondary\">\r\n        <a class=\"currency-link\" (click)=\"presentModal()\">Click here to find the nearest branch</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-10 my-3\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Transaction Date</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" formControlName=\"transactionDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n            <img src=\"assets/icon/calendar.svg\" matDatepickerToggleIcon class=\"suffix-icon\">\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Time Slot</mat-label>\r\n          <input matInput placeholder=\"Time\" formControlName=\"transactionTime\" readonly=\"true\">\r\n          <img src=\"assets/icon/timer.svg\" matSuffix class=\"suffix-icon\" (click)=\"openPopup()\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-5 my-4\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"ttc full-width\">\r\n          <mat-label>Total Charge Amount</mat-label>\r\n          <input matInput readonly=\"true\" formControlName=\"totalChargeAmount\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"tta full-width\">\r\n          <mat-label>Total Transaction Amount</mat-label>\r\n          <input matInput [readonly]=\"true\" formControlName=\"totalTransactionAmount\">\r\n          <img src=\"assets/icon/info.svg\" matSuffix class=\"suffix-icon\" id=\"bottom-start\">\r\n          <ion-popover mode=\"ios\" size=\"auto\" arrow=\"true\" trigger=\"bottom-start\" side=\"bottom\" alignment=\"center\"\r\n            class=\"trans-pop\" reference=\"bottom-start\">\r\n            <ng-template>\r\n              <ion-content class=\"ion-padding transpopover\">\r\n                <p>Forex Amount: {{ form.get('forexCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ forexAmount }} </p>\r\n                <p>Total Charge Amount:{{ form.get('forexCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ form.get('totalChargeAmount')?.value }}</p>\r\n                <hr style=\"background: #ffffff;\">\r\n                <p>Forex Transaction Amount: {{ form.get('forexCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ form.get('forexTransAmount')?.value }}</p>\r\n              </ion-content>\r\n            </ng-template>\r\n          </ion-popover>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"remark-field t-15\">\r\n      <ion-item>\r\n        <ion-textarea [autoGrow]=\"true\" formControlName=\"remarks\" placeholder=\"Remarks\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n    </div>\r\n\r\n\r\n    <ion-segment mode=\"ios\" style=\"margin-top: 35px;\" [value]=\"depositType == 'self' ? 'self' : 'representative'\"\r\n      [(ngModel)]=\"depositType\" (ngModelChange)=\"segmentChanged($event)\" [ngModelOptions]=\"{standalone: true}\">\r\n      <ion-segment-button value=\"self\">\r\n        <ion-label>Self</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"representative\">\r\n        <ion-label>Representative</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ng-container *ngIf=\"depositType == 'representative'\">\r\n      <div formGroupName=\"representativeInfo\">\r\n        <ion-item fill=\"outline\" class=\"my-3\">\r\n          <ion-label position=\"floating\" style=\"font-size: 12px;\">Representative Name</ion-label>\r\n          <ion-input formControlName=\"personName\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item fill=\"outline\" class=\"\">\r\n          <ion-label position=\"floating\" style=\"font-size: 12px;\">Mobile No</ion-label>\r\n          <ion-input formControlName=\"phoneNo\" type=\"tel\" maxlength=\"10\" (keypress)=\"keyPressMob($event)\"></ion-input>\r\n        </ion-item>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n          <mat-label>Document ID</mat-label>\r\n          <mat-select matNativeControl formControlName=\"repdocumentId\">\r\n            <mat-option value=\"passport\">Passport</mat-option>\r\n            <mat-option value=\"visa\">Visa</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <ion-item fill=\"outline\" class=\"\">\r\n          <ion-label position=\"floating\" style=\"font-size: 12px;\">Document Number*</ion-label>\r\n          <ion-input formControlName=\"repdocumentNumber\"></ion-input>\r\n        </ion-item>\r\n\r\n        <mat-error style=\"margin-top: 7px;margin-left: 5px;\" *ngIf=\"isShowRepError\">\r\n          Please fill all information for representative!\r\n        </mat-error>\r\n\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <div class=\"file-upload-container my-2\" *ngIf=\"depositType !== 'self'\">\r\n      <div class=\"file-content text-center\">\r\n        <ion-icon src=\"assets/icon/fileicon.svg\" class=\"file-img\"></ion-icon>\r\n        <p class=\"file-text my-1\">File Upload</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"!flag\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\"\r\n          [disabled]=\"depositType !== 'self' ? screenDynamicControlValidation() : screenTwoValidation()\"\r\n          (click)=\"submit(form.value)\">Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goToPreviousPage()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_forex-cash-v2_forex-cash-v2_module_ts.js.map