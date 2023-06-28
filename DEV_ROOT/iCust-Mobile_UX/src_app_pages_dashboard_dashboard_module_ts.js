"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 76446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 99366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 76446);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 45642);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);










let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 76446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 73890);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 27791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/search/search.component */ 29055);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_app_components_alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/alert-internet/alert-internet.component */ 82014);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/token-storage.service */ 11573);
/* harmony import */ var src_app_services_user_roles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user-roles */ 13634);
/* harmony import */ var src_app_services_mock_service_profile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/mock-service/profile-service */ 40296);
/* harmony import */ var src_app_services_retail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/retail.service */ 92284);









// import Swiper core and required modules









let DashboardPage = class DashboardPage {
    constructor(router, api, retailService, modalCtrl, sanitizer, cdr, platform, dataService, modalController, menu, tokenService, profileMockService) {
        this.router = router;
        this.api = api;
        this.retailService = retailService;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.platform = platform;
        this.dataService = dataService;
        this.modalController = modalController;
        this.menu = menu;
        this.tokenService = tokenService;
        this.profileMockService = profileMockService;
        this.config = {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
            pagination: true,
            scrollbar: { draggable: true },
            centeredSlides: true,
        };
        this.slideIndex = 0;
        this.cards = [];
        this.isLoading = true;
        this.isFaceId = false;
        this.isFingerPrint = false;
        this.mpinActive = false;
        this.isAndroid = false;
        this.permission_services = [];
        this.roles = src_app_services_user_roles__WEBPACK_IMPORTED_MODULE_9__.Roles;
        this.view_access_by_role = [];
        this.permissions = [];
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.currentUser = this.tokenService.getUser();
        this.userRole = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.roles[0]) === null || _b === void 0 ? void 0 : _b.name;
        this.permission_services = (_e = (_d = (_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.roles[0]) === null || _d === void 0 ? void 0 : _d.screens[0]) === null || _e === void 0 ? void 0 : _e.children;
        this.getScreenPrivilege();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = localStorage.getItem('customer_id');
        let isOpenTray = localStorage.getItem('isShowed');
        this.isFaceId = ((_f = this.currentUser) === null || _f === void 0 ? void 0 : _f.faceLoginEnable) ? true : false;
        this.isFingerPrint = ((_g = this.currentUser) === null || _g === void 0 ? void 0 : _g.fingerprintLoginEnable)
            ? true
            : false;
        this.mpinActive = ((_h = this.currentUser) === null || _h === void 0 ? void 0 : _h.mpinActive) ? true : false;
        this.platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.isAndroid = true;
            }
            if (this.platform.is('ios') ||
                this.platform.is('iphone') ||
                this.platform.is('ipad')) {
                this.isAndroid = false;
            }
        });
        // install Swiper modules
        swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_5__.A11y]);
        localStorage.setItem('slideNo', '0');
        var customerDetails = JSON.parse(localStorage.getItem('customer_details'));
        if (this.userRole === this.roles.MOBILE_CUSTOMER) {
            this.getCustomerAccounts();
        }
        else {
            this.getGreet();
        }
        this.accountType = customerDetails === null || customerDetails === void 0 ? void 0 : customerDetails.accountType;
        this.emailAddress = customerDetails === null || customerDetails === void 0 ? void 0 : customerDetails.primaryEmailAdress;
        this.dataService.getAvatarUrl.subscribe((data) => {
            if (data != null) {
                this.image = data;
                this.cdr.markForCheck();
            }
        });
        setTimeout(() => {
            this.isLoading = false;
            if (this.platform.is('cordova')) {
                if (this.openUnlockTray() == true &&
                    (isOpenTray == 'no' ||
                        isOpenTray == null ||
                        isOpenTray == undefined ||
                        isOpenTray == '')) {
                    this.modal.present();
                    localStorage.setItem('isShowed', 'yes');
                }
            }
        }, 2000);
        this.cdr.markForCheck();
    }
    getScreenPrivilege() {
        this.profileMockService.getProfileInfo().subscribe((res) => {
            console.log(res);
            this.view_access_by_role = res;
            let permissionFilter = [];
            this.permission_services.map((item) => {
                this.view_access_by_role.map((item2) => {
                    if ((item === null || item === void 0 ? void 0 : item.screenName) === (item2 === null || item2 === void 0 ? void 0 : item2.screenName)) {
                        permissionFilter.push(item2);
                    }
                });
            });
            this.permissions = permissionFilter;
            this.permissions.sort((s1, s2) => {
                return (s1 === null || s1 === void 0 ? void 0 : s1.order) - (s2 === null || s2 === void 0 ? void 0 : s2.order);
            });
            this.cdr.markForCheck();
        });
    }
    getGreet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.displayUser = yield this.getGreeting();
        });
    }
    getGreeting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            var today = new Date();
            var curHr = today.getHours();
            if (curHr < 12) {
                console.log('Good Morning');
                return `Good Morning!`;
            }
            else if (curHr < 18) {
                console.log('Good Afternoon');
                return `Good Afternoon!`;
            }
            else {
                console.log('Good Evening');
                return `Good Evening!`;
            }
        });
    }
    ionViewWillEnter() {
        // this.cardInfoInterval = setInterval(() => this.getCustomerAccounts(), 3 * 1000);
    }
    ionViewDidEnter() {
        this.getCountries();
        this.getBranch();
    }
    getCustomerAccounts() {
        // BYPASS CODE TOBE REMOVED
        let cardItems = JSON.parse(localStorage.getItem('ACCOUNT'));
        this.cards = cardItems === null || cardItems === void 0 ? void 0 : cardItems.accountInfo;
        localStorage.setItem('cardData', JSON.stringify(this.cards));
        this.dataService.shareAccountInfo(this.cards[0]);
        this.cdr.markForCheck();
        // TO BE REMOVED
        // this.api.getCustomerAccounts(this.phoneNumber).subscribe(
        //   (resp: any) => {
        //     console.log('backend resp in home', resp);
        //     resp.custAccount = resp.custAccount.filter(
        //       (card: any) => card.status === 'APPROVED'
        //     );
        //     this.cards = resp.custAccount;
        //     localStorage.setItem('cardData', JSON.stringify(resp.custAccount));
        //     this.cards = resp.custAccount;
        //     localStorage.setItem('loginRespAccountId', this.cards?.[0]?.accountId);
        //     this.dataService.shareAccountInfo(this.cards[0]);
        //     this.getProfilePicture(this.customerId);
        //     this.cdr.markForCheck();
        //   },
        //   (err: any) => {
        //     console.log(err);
        //     this.cards = [];
        //   }
        // );
    }
    openNoInternet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_7__.AlertInternetComponent,
                cssClass: 'small-modal',
            });
            modal.present();
        });
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss('', 'confirm');
    }
    onSwiper(i) {
        let index = i.realIndex;
        this.dataService.shareAccountInfo(this.cards[index]);
    }
    onSlideChange(i) {
        let index = i[0].realIndex;
        this.dataService.shareAccountInfo(this.cards[index]);
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.router.navigate(['/securitycenter']);
        }
    }
    openUnlockTray() {
        let isOpen = false;
        if (this.isAndroid) {
            if (this.mpinActive == true && this.isFingerPrint == true) {
                isOpen = false;
            }
            else {
                isOpen = true;
            }
        }
        else {
            if (this.mpinActive == true && this.isFaceId == true) {
                isOpen = false;
            }
            else {
                isOpen = true;
            }
        }
        return isOpen;
    }
    getProfilePicture(customerId) {
        const contentType = 'image/png';
        this.api.getProfileDetails(customerId).subscribe((data) => {
            this.cdr.markForCheck();
            this.profileData = data;
            // console.log(' profile Image', this.profileData.profileImage.fileUrl);
            if ((data === null || data === void 0 ? void 0 : data.profileImage) != null) {
                let objectURL = data.profileImage;
                this.image =
                    data.profileImage != 'not_available'
                        ? this.sanitizer.bypassSecurityTrustUrl(objectURL)
                        : undefined;
            }
            else {
                this.image = null;
            }
            this.cdr.markForCheck();
        }, (error) => {
            console.log(error);
        });
    }
    getCountries() {
        this.retailService.getCurrencies().subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.statusCode) == 200) {
                localStorage.setItem('COUNTRIES', JSON.stringify(res === null || res === void 0 ? void 0 : res.data));
            }
            else {
            }
        });
    }
    getBranch() {
        this.retailService.getBranch().subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.statusCode) == 200) {
                localStorage.setItem('BRANCHES', JSON.stringify(res === null || res === void 0 ? void 0 : res.data));
            }
            else {
            }
        });
    }
    searchModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent,
            });
            return yield modal.present();
        });
    }
    goToService(item) {
        this.router.navigate([item === null || item === void 0 ? void 0 : item.route]);
    }
    goToCashWithdrawal() {
        this.router.navigate(['cashwithdrawal']);
    }
    goToCashDeposit() {
        this.router.navigate(['cashdeposit']);
    }
    goToChequeDeposit() {
        this.router.navigate(['cheque-deposit-v2']);
    }
    goToChequeWithdrawal() {
        this.router.navigate(['cheque-withdrawal-v2']);
    }
    goToForexTransaction() {
        this.router.navigate(['forextransaction']);
    }
    goToLoanRePayment() {
        this.router.navigate(['loanrepayment']);
    }
    goToLoanDisbursement() {
        this.router.navigate(['loandisbursement']);
    }
    goToUtilityPayment() {
        this.router.navigate(['utility-payment']);
    }
    goToDepositTopUp() {
        this.router.navigate(['deposit-topup']);
    }
    /**
     * Kyc branch Route
     */
    goToKycBranch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['kyc']);
        });
    }
    goToOnboarding() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['customer-onboarding']);
        });
    }
    getAccountNumber(info) {
        console.log('number');
        this.dataService.shareAccountInfo(info);
        this.router.navigate(['/transaction']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    trans(evt) { }
    goToAccountSettings() {
        console.log('settings');
        this.router.navigate(['account']);
    }
    ionViewWillLeave() {
        clearInterval(this.cardInfoInterval);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_services_retail_service__WEBPACK_IMPORTED_MODULE_11__.RetailService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.MenuController },
    { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__.TokenStorageService },
    { type: src_app_services_mock_service_profile_service__WEBPACK_IMPORTED_MODULE_10__.ProfileService }
];
DashboardPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['modal',] }],
    sidemenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: [src_app_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent,] }],
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['swiper', { static: false },] }]
};
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



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

/***/ 8575:
/*!***********************************************!*\
  !*** ./src/app/services/data/profile-data.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileData": () => (/* binding */ ProfileData)
/* harmony export */ });
class ProfileData {
}


/***/ }),

/***/ 40296:
/*!**********************************************************!*\
  !*** ./src/app/services/mock-service/profile-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _data_profile_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/profile-data */ 8575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);






let ProfileService = class ProfileService extends _data_profile_data__WEBPACK_IMPORTED_MODULE_0__.ProfileData {
    constructor(http) {
        super();
        this.http = http;
    }
    getProfileInfo() {
        if (this.screen_privilege) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.screen_privilege);
        }
        else {
            return this.getProfile();
        }
    }
    getProfile() {
        return this.http
            .get("assets/json/profile.json")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.processData, this));
    }
    processData(data) {
        this.screen_privilege = data;
        return this.screen_privilege;
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], ProfileService);



/***/ }),

/***/ 92284:
/*!********************************************!*\
  !*** ./src/app/services/retail.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetailService": () => (/* binding */ RetailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage.service */ 11573);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





let RetailService = class RetailService {
    constructor(httpClient, tokenService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.basePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.microServiceURL;
    }
    getCurrencies() {
        return this.httpClient.get(`${this.basePath}/icCurrency`);
    }
    getBranch() {
        return this.httpClient.get(`${this.basePath}/branch`);
    }
    createAppointment(payload) {
        return this.httpClient.post(`${this.basePath}/transaction/scheduleAppointment`, payload);
    }
    getTransactionDetailsById(transId) {
        return this.httpClient.get(`${this.basePath}/fetchByTransId/${transId}`);
    }
    generateQRCode(payload) {
        return this.httpClient.post(`${this.basePath}/token/qr-code-generator`, payload, {
            responseType: 'blob',
        });
    }
    addToWallet(payload) {
        return this.httpClient.put(`${this.basePath}/token/updateAddToWallet`, payload);
    }
};
RetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService }
];
RetailService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], RetailService);



/***/ }),

/***/ 27791:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/**\n * Swiper 8.4.5\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 21, 2022\n */\n@font-face {\n  font-family: swiper-icons;\n  src: url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color:#007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide, .swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight, .swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 0.3s opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination, .swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 0.2s transform, 0.2s top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 0.2s transform, 0.2s left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 0.2s transform, 0.2s right;\n}\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite, .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-vertical, .swiper-vertical > .swiper-pagination-progressbar {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\nion-header {\n  background: transparent !important;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-content {\n  --background: #ffffff;\n}\n.head-title {\n  margin-top: 12px !important;\n  margin-bottom: 0px !important;\n  margin-left: 12px;\n}\n.card_slider {\n  display: flex;\n  flex-direction: column-reverse;\n}\n:host ::ng-deep .swiper-slide {\n  left: 10%;\n}\n:host ::ng-deep .swiper-slide .card_div {\n  height: 165px;\n  transform: translateY(5%);\n}\n:host ::ng-deep .swiper-slide-active {\n  width: 80% !important;\n}\n:host ::ng-deep .swiper-slide-active .card_div {\n  height: 180px;\n  transform: translateY(0);\n}\n:host ::ng-deep .swiper-slide-prev .card_div {\n  background: linear-gradient(180deg, #af1084, #d000e2 110%);\n}\n:host ::ng-deep .swiper-slide-next .card_div {\n  background: linear-gradient(180deg, #032aff, #d000e2 110%);\n}\n:host ::ng-deep .swiper-pagination {\n  padding-top: 2%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active,\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet {\n  background-color: #fd0208 !important;\n}\n:host ::ng-deep .search_bar {\n  padding: 0;\n  margin: 4% 0;\n}\n:host ::ng-deep .search_bar.ios {\n  left: 15%;\n  transform: translateX(-50%);\n}\n.card-logo {\n  width: 100px !important;\n}\n.header .title {\n  display: flex;\n  align-items: center;\n}\n.header .title span.sidenav_icon {\n  color: #999;\n  text-align: center;\n  font-size: xx-large;\n}\n.header .title .name {\n  top: 0 !important;\n  margin-left: -30px !important;\n  font-weight: 700 !important;\n}\n.header .profile-pic {\n  height: 40px;\n  width: 40px;\n  border: 5px solid #def0ff;\n}\n.transactionlist ion-grid {\n  padding: 0;\n}\n.main_container_div ion-label {\n  display: block;\n}\n.call-box {\n  margin-top: 30px;\n}\n.country-box {\n  cursor: pointer;\n}\n.country-box:hover {\n  box-shadow: 0px 0px 3px 0px #ccc;\n}\n.avatar {\n  height: 100%;\n}\n.textCard {\n  margin-left: 5%;\n  margin-top: 5%;\n  text-align: left;\n}\n.all_transactions {\n  font-size: 18px;\n  font-weight: 700;\n}\n.transactionCards {\n  box-shadow: 0pt 3pt 6pt rgba(0, 0, 0, 0.0901960784);\n  border-radius: 10pt;\n  background-color: #fffefe;\n  text-align: center;\n  width: 95%;\n  height: 110px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n  margin: 5px auto;\n}\n.initial-avatar {\n  /* Center the content */\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  /* Colors */\n  color: #fff;\n  /* Rounded border */\n  border-radius: 50%;\n  height: 2.5rem;\n  width: 2.5rem;\n  float: right;\n  border: 5px solid #def0ff;\n}\n.grid_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n.grid-icon {\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  margin-top: 5px;\n}\n.card_div {\n  width: 100%;\n  border-radius: 10px;\n  background-image: linear-gradient(180deg, rgb(255, 3, 3) 0%, rgb(208, 0, 226) 110%);\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  transition: background-image 0.32s;\n}\n.card_div img {\n  width: 60px;\n}\n.card_div .card_no {\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.card_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.card_div .flex_div ion-label {\n  color: white;\n  font-size: 13px;\n  letter-spacing: 0.6px;\n}\n.card_div .bottom_abs {\n  width: 260px;\n  height: 200px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  bottom: -145px;\n}\n.card_div .side_abs {\n  height: 243px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  right: -80px;\n  top: -25px;\n  transform: rotate(45deg);\n}\n.settingicon {\n  color: white;\n  font-size: x-large;\n  float: right;\n}\n.card_title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.menuicon {\n  color: #999;\n}\n.menuicon .toggle_menu_icon {\n  height: 22px;\n  width: 22px;\n  padding: 0 15px;\n}\n.Item_title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #102245;\n}\n.profile-image {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  height: 4.5rem;\n  width: 4.5rem;\n}\n.headerbar {\n  box-shadow: 0 5pt 5pt -2pt rgba(69, 110, 254, 0.1490196078) !important;\n}\nion-menu::part(container) {\n  width: 90%;\n  padding-top: 60px;\n  background-color: white !important;\n  margin-bottom: 50px;\n  background: #f4f4f4;\n}\n.flex-container {\n  display: flex;\n  margin-bottom: 30px;\n  padding-left: 18px;\n}\n.username {\n  margin-top: 5px;\n  margin-left: 30px;\n  font-weight: 800;\n  color: #102245;\n}\n.mf-30 {\n  margin-left: 30px;\n}\n.label {\n  padding-left: 25px;\n  color: #102245;\n}\n.mt-18 {\n  margin-top: 18px;\n}\n.menu-list {\n  box-shadow: #c9c9c9;\n}\nion-content {\n  --ion-background-color: #f4f4f4;\n}\n.mainDiv {\n  margin-top: 30px;\n}\n.unlockImg {\n  margin-left: 40%;\n}\n.closeIcon {\n  margin-left: 90%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n.btnclass {\n  font-size: 12px;\n  width: 140px;\n  height: 44px;\n  margin-left: 15px;\n}\n.id-text {\n  margin-left: 20%;\n}\n.otp-text {\n  margin-left: 7%;\n}\n.inputCardButton {\n  padding-left: 12%;\n  padding-right: 5%;\n}\n.inputCardButton ion-button {\n  width: 90%;\n  height: 45px;\n  --background: var(--primary-color);\n}\n.custom-shape-divider-bottom-1616223506 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n  transform: rotate(180deg);\n  background: linear-gradient(45deg, #456efe, #3953e7) !important;\n}\n.custom-shape-divider-bottom-1616223506 svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 100px;\n  transform: rotateY(180deg);\n}\n.custom-shape-divider-bottom-1616223506 .shape-fill {\n  fill: rgba(255, 255, 255, 0.2);\n}\n.right-bottom-bg {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 150px;\n  z-index: -1;\n}\n.card-bg {\n  height: 150px;\n}\n.greet {\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 300;\n}\nion-card {\n  margin: 12px 14px;\n}\nion-chip {\n  --color: #ff9800;\n}\nion-avatar {\n  width: 50px;\n  height: 50px;\n  border: 2px solid white;\n}\nion-item {\n  --background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXHN3aXBlclxcc3dpcGVyLm1pbi5jc3MiLCJkYXNoYm9hcmQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcc3dpcGVyXFxtb2R1bGVzXFxwYWdpbmF0aW9uXFxwYWdpbmF0aW9uLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQVcseUJBQUE7RUFBeUIsNnJFQUFBO0VBQTZyRSxnQkFBQTtFQUFnQixrQkFBQTtBQ0lqdkU7QURKbXdFO0VBQU0sNEJBQUE7QUNPendFO0FEUHN5RTtFQUFRLGlCQUFBO0VBQWlCLGtCQUFBO0VBQWtCLGtCQUFBO0VBQWtCLGdCQUFBO0VBQWdCLGdCQUFBO0VBQWdCLFVBQUE7RUFBVSxVQUFBO0FDaUI3NEU7QURqQnU1RTtFQUFpQyxzQkFBQTtBQ3FCeDdFO0FEckI4OEU7RUFBZ0Isa0JBQUE7RUFBa0IsV0FBQTtFQUFXLFlBQUE7RUFBWSxVQUFBO0VBQVUsYUFBQTtFQUFhLDhCQUFBO0VBQThCLHVCQUFBO0FDK0I1akY7QUQvQm1sRjtFQUE4QyxpQ0FBQTtBQ21Dam9GO0FEbkNncUY7RUFBdUIsbUJBQUE7QUN1Q3ZyRjtBRHZDMHNGO0VBQXVDLG1CQUFBO0FDMkNqdkY7QUQzQ293RjtFQUFjLGNBQUE7RUFBYyxXQUFBO0VBQVcsWUFBQTtFQUFZLGtCQUFBO0VBQWtCLDhCQUFBO0FDbUR6MEY7QURuRHUyRjtFQUE4QixrQkFBQTtBQ3VEcjRGO0FEdkR1NUY7RUFBb0QsWUFBQTtBQzJEMzhGO0FEM0R1OUY7RUFBbUMsdUJBQUE7RUFBdUIsc0NBQUE7QUNnRWpoRztBRGhFc2pHO0VBQXNDLHdCQUFBO0VBQXdCLG1DQUFBO0VBQW1DLDJCQUFBO0FDc0V2cEc7QUR0RWtyRztFQUFzRCxtQkFBQTtBQzBFeHVHO0FEMUUydkc7RUFBeVEsNEJBQUE7QUM4RXBnSDtBRDlFZ2lIO0VBQXNMLGtCQUFB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QSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLCtEQUFBO0FBMlJGO0FBeFJBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUEyUkY7QUF4UkE7RUFDRSw4QkFBQTtBQTJSRjtBQXhSQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTJSRjtBQXhSQTtFQUNFLGFBQUE7QUEyUkY7QUF4UkE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQTJSRjtBQXhSQTtFQUNFLGlCQUFBO0FBMlJGO0FBeFJBO0VBQ0UsZ0JBQUE7QUEyUkY7QUF4UkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBMlJGO0FBeFJBO0VBQ0UsNkJBQUE7QUEyUkYiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDguNC41XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIyIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDIxLCAyMDIyXG4gKi9cblxuQGZvbnQtZmFjZXtmb250LWZhbWlseTpzd2lwZXItaWNvbnM7c3JjOnVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9OnJvb3R7LS1zd2lwZXItdGhlbWUtY29sb3I6IzAwN2FmZn0uc3dpcGVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nOjA7ei1pbmRleDoxfS5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uc3dpcGVyLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7ZGlzcGxheTpmbGV4O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO2JveC1zaXppbmc6Y29udGVudC1ib3h9LnN3aXBlci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsLnN3aXBlci13cmFwcGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsMCwwKX0uc3dpcGVyLXBvaW50ZXItZXZlbnRze3RvdWNoLWFjdGlvbjpwYW4teX0uc3dpcGVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci12ZXJ0aWNhbHt0b3VjaC1hY3Rpb246cGFuLXh9LnN3aXBlci1zbGlkZXtmbGV4LXNocmluazowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm19LnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmt7dmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1hdXRvaGVpZ2h0LC5zd2lwZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRle2hlaWdodDphdXRvfS5zd2lwZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXJ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHR9LnN3aXBlci1iYWNrZmFjZS1oaWRkZW4gLnN3aXBlci1zbGlkZXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItM2QsLnN3aXBlci0zZC5zd2lwZXItY3NzLW1vZGUgLnN3aXBlci13cmFwcGVye3BlcnNwZWN0aXZlOjEyMDBweH0uc3dpcGVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci0zZCAuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3d7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b217YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye292ZXJmbG93OmF1dG87c2Nyb2xsYmFyLXdpZHRoOm5vbmU7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmV9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRle3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0IHN0YXJ0fS5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnl9LnN3aXBlci12ZXJ0aWNhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eSBtYW5kYXRvcnl9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtjb250ZW50OicnO2ZsZXgtc2hyaW5rOjA7b3JkZXI6OTk5OX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxke21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDoxcHg7d2lkdGg6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWJsb2NrLXN0YXJ0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXt3aWR0aDoxMDAlO21pbi13aWR0aDoxcHg7aGVpZ2h0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpfS5zd2lwZXItY2VudGVyZWQ+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246Y2VudGVyIGNlbnRlcn0iLCJAaW1wb3J0IFwifnN3aXBlci9jc3NcIjtcclxuQGltcG9ydCBcIn5zd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZF9zbGlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgbGVmdDogMTAlO1xyXG5cclxuICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgIGhlaWdodDogMTY1cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNhcmRfZGl2IHtcclxuICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZS1wcmV2IHtcclxuICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNhZjEwODQsICNkMDAwZTIgMTEwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlLW5leHQge1xyXG4gICAgLmNhcmRfZGl2IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAzMmFmZiwgI2QwMDBlMiAxMTAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcblxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUsXHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMDIwOCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaF9iYXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogNCUgMDtcclxuXHJcbiAgICAmLmlvcyB7XHJcbiAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAvLyBtYXJnaW4taW5saW5lLXN0YXJ0OiAtMTMzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1sb2dvIHtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHNwYW4uc2lkZW5hdl9pY29uIHtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTMwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtcGljIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2RlZjBmZjtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbmxpc3Qge1xyXG4gIGlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbl9jb250YWluZXJfZGl2IHtcclxuICAvLyBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FsbC1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWJveCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY291bnRyeS1ib3g6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCAjY2NjO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0Q2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hbGxfdHJhbnNhY3Rpb25zIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uQ2FyZHMge1xyXG4gIGJveC1zaGFkb3c6IDBwdCAzcHQgNnB0ICMwMDAwMDAxNztcclxuICBib3JkZXItcmFkaXVzOiAxMHB0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuLmluaXRpYWwtYXZhdGFyIHtcclxuICAvKiBDZW50ZXIgdGhlIGNvbnRlbnQgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC8qIENvbG9ycyAqL1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNkZWYwZmY7XHJcbn1cclxuXHJcbi5ncmlkX3RpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWljb24ge1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2FyZF9kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogMTgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxODBkZWcsXHJcbiAgICByZ2JhKDI1NSwgMywgMywgMSkgMCUsXHJcbiAgICByZ2JhKDIwOCwgMCwgMjI2LCAxKSAxMTAlXHJcbiAgKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zMnM7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkX25vIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZsZXhfZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3R0b21fYWJzIHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXHJcbiAgICAgIHRyYW5zcGFyZW50XHJcbiAgICApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTE0NXB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGVfYWJzIHtcclxuICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjQzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXHJcbiAgICAgIHRyYW5zcGFyZW50XHJcbiAgICApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtODBweDtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2V0dGluZ2ljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZF90aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lbnVpY29uIHtcclxuICBjb2xvcjogIzk5OTtcclxuXHJcbiAgLnRvZ2dsZV9tZW51X2ljb24ge1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uSXRlbV90aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNC41cmVtO1xyXG4gIHdpZHRoOiA0LjVyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJiYXIge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICM0NTZlZmUyNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudTo6cGFydChjb250YWluZXIpIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbn1cclxuXHJcbi5tZi0zMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG59XHJcblxyXG4ubXQtMTgge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5tZW51LWxpc3Qge1xyXG4gIGJveC1zaGFkb3c6ICNjOWM5Yzk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4vLyBNb2RhbCBTQ1NTXHJcbi5tYWluRGl2IHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udW5sb2NrSW1nIHtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcblxyXG4uY2xvc2VJY29uIHtcclxuICBtYXJnaW4tbGVmdDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAtNSU7XHJcbn1cclxuXHJcbi5idG5jbGFzcyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pZC10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4ub3RwLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA3JTtcclxufVxyXG5cclxuLmlucHV0Q2FyZEJ1dHRvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBR0VOVCBCQU5ORVIgU1RBUlRcclxuLmN1c3RvbS1zaGFwZS1kaXZpZGVyLWJvdHRvbS0xNjE2MjIzNTA2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0NTZlZmUsICMzOTUzZTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tc2hhcGUtZGl2aWRlci1ib3R0b20tMTYxNjIyMzUwNiBzdmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogY2FsYygxMDAlICsgMS4zcHgpO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5jdXN0b20tc2hhcGUtZGl2aWRlci1ib3R0b20tMTYxNjIyMzUwNiAuc2hhcGUtZmlsbCB7XHJcbiAgZmlsbDogI2ZmZmZmZjMzO1xyXG59XHJcblxyXG4ucmlnaHQtYm90dG9tLWJnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNhcmQtYmcge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5ncmVldCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW46IDEycHggMTRweDtcclxufVxyXG5cclxuaW9uLWNoaXAge1xyXG4gIC0tY29sb3I6ICNmZjk4MDA7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vICAgQUdFTlQgQkFOTkVSIEVORFxyXG4iLCIuc3dpcGVyLXBhZ2luYXRpb257cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7dHJhbnNpdGlvbjouM3Mgb3BhY2l0eTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3otaW5kZXg6MTB9LnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbntvcGFjaXR5OjB9LnN3aXBlci1wYWdpbmF0aW9uLWRpc2FibGVkPi5zd2lwZXItcGFnaW5hdGlvbiwuc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tZGlzYWJsZWR7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbCwuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbntib3R0b206MTBweDtsZWZ0OjA7d2lkdGg6MTAwJX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje292ZXJmbG93OmhpZGRlbjtmb250LXNpemU6MH0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7dHJhbnNmb3JtOnNjYWxlKC4zMyk7cG9zaXRpb246cmVsYXRpdmV9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXt0cmFuc2Zvcm06c2NhbGUoMSl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWlue3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXZ7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXZ7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0e3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0e3RyYW5zZm9ybTpzY2FsZSguMzMpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7d2lkdGg6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXdpZHRoLHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1zaXplLDhweCkpO2hlaWdodDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaGVpZ2h0LHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1zaXplLDhweCkpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWluYWN0aXZlLWNvbG9yLCMwMDApO29wYWNpdHk6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWluYWN0aXZlLW9wYWNpdHksIC4yKX1idXR0b24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2hhZG93Om5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtjdXJzb3I6cG9pbnRlcn0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0Om9ubHktY2hpbGR7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtvcGFjaXR5OnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1vcGFjaXR5LCAxKTtiYWNrZ3JvdW5kOnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpfS5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLC5zd2lwZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7cmlnaHQ6MTBweDt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsLTUwJSwwKX0uc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LC5zd2lwZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXZlcnRpY2FsLWdhcCw2cHgpIDA7ZGlzcGxheTpibG9ja30uc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDo4cHh9LnN3aXBlci1wYWdpbmF0aW9uLXZlcnRpY2FsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHRvcH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCwuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjAgdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWhvcml6b250YWwtZ2FwLDRweCl9LnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYywuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3tsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aGl0ZS1zcGFjZTpub3dyYXB9LnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LC5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0fS5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItcnRsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0fS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjI1KTtwb3NpdGlvbjphYnNvbHV0ZX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcix2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH0uc3dpcGVyLXJ0bCAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9LnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhciwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbCwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGV7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbCwuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcnt3aWR0aDo0cHg7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowfS5zd2lwZXItcGFnaW5hdGlvbi1sb2Nre2Rpc3BsYXk6bm9uZX0iXX0= */";

/***/ }),

/***/ 73890:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button class=\"menuicon\">\r\n          <ion-icon\r\n            src=\"assets/icon/hamburger-menu.svg\"\r\n            class=\"toggle_menu_icon\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>Hi {{currentUser?.firstName}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"searchModal()\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ng-container *ngIf=\"isLoading\">\r\n    <div class=\"container\">\r\n      <ion-slides\r\n        mode=\"ios\"\r\n        pager=\"true\"\r\n        scrollbar=\"false\"\r\n        class=\"card_slider\"\r\n        [options]=\"slideCardOpts\"\r\n      >\r\n        <ion-slide>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <ion-list-header>\r\n      <ion-skeleton-text\r\n        [animated]=\"true\"\r\n        style=\"width: 80px\"\r\n      ></ion-skeleton-text>\r\n    </ion-list-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-skeleton-text\r\n            [animated]=\"true\"\r\n            style=\"width: 100%; height: 150px\"\r\n          ></ion-skeleton-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ng-container>\r\n  <div class=\"body\">\r\n    <swiper\r\n      (slideChangeTransitionEnd)=\"trans($event)\"\r\n      #swiperVirtualRef\r\n      [slidesPerView]=\"1\"\r\n      [spaceBetween]=\"50\"\r\n      [pagination]=\"{ type: 'fraction' }\"\r\n      [virtual]=\"true\"\r\n      slideActiveClass=\"swiper-active whyWouldIuseCustomClass\"\r\n      [centeredSlides]=\"true\"\r\n      [navigation]=\"true\"\r\n    >\r\n      <ng-template\r\n        swiperSlide\r\n        *ngFor=\"let card of cards; index as i\"\r\n      ></ng-template>\r\n    </swiper>\r\n\r\n    <ng-container *ngIf=\"!isLoading\">\r\n      <ng-container *ngIf=\"userRole === roles.MOBILE_CUSTOMER; else showAgentBanner\">\r\n        <!-- CARD SLIDER START -->\r\n        <div class=\"main_container_div\">\r\n          <swiper\r\n            [config]=\"config\"\r\n            class=\"card_slider\"\r\n            (slideChange)=\"onSlideChange($event)\"\r\n            (swiper)=\"onSwiper($event)\"\r\n          >\r\n            <ng-template swiperSlide *ngFor=\"let card of cards; index as i\">\r\n              <div class=\"card_div\" (click)=\"getAccountNumber(card)\">\r\n                <div class=\"card_title\">\r\n                  <div class=\"bank_logo\">\r\n                    <img src=\"assets/images/card-logo.svg\" class=\"card-logo\" />\r\n                  </div>\r\n                  <div\r\n                    class=\"setting_ico text-right\"\r\n                    (click)=\"goToAccountSettings(); $event.stopPropagation()\"\r\n                  >\r\n                    <ion-icon\r\n                      name=\"settings-outline\"\r\n                      class=\"settingicon\"\r\n                    ></ion-icon>\r\n                  </div>\r\n                </div>\r\n\r\n                <ion-label class=\"card_no\"></ion-label>\r\n                <div class=\"flex_div mt-4\">\r\n                  <ion-label> {{ card?.accountType + ' Account' }}</ion-label>\r\n                  <ion-label>Account Balance</ion-label>\r\n                </div>\r\n                <div class=\"flex_div\">\r\n                  <ion-label> {{ card?.accountId }}</ion-label>\r\n                  <ion-label>\r\n                    {{ card?.accountCurrency | currencySymbol }} {{ card?.accountBalance\r\n                    | number: '1.'}}</ion-label\r\n                  >\r\n                </div>\r\n                <div class=\"side_abs\"></div>\r\n                <div class=\"bottom_abs\"></div>\r\n              </div>\r\n            </ng-template>\r\n          </swiper>\r\n        </div>\r\n        <!-- CARD SLIDER END -->\r\n      </ng-container>\r\n      <ng-template #showAgentBanner>\r\n        <!-- Agent banner start -->\r\n        <ion-card class=\"card-bg\">\r\n          <div class=\"custom-shape-divider-bottom-1616223506\">\r\n            <svg\r\n              data-name=\"Layer 1\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 1200 120\"\r\n              preserveAspectRatio=\"none\"\r\n            >\r\n              <path\r\n                d=\"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z\"\r\n                class=\"shape-fill\"\r\n              ></path>\r\n            </svg>\r\n          </div>\r\n          <!-- (click)=\"profilePage()\"  -->\r\n          <ion-item button lines=\"none\" detail=\"false\">\r\n            <ion-avatar slot=\"start\">\r\n              <ng-container\r\n                *ngIf=\"avatarUrl == 'not_available'; else showAvatar\"\r\n              >\r\n                <app-photo [name]=\"username\"></app-photo>\r\n              </ng-container>\r\n              <ng-template #showAvatar>\r\n                <img\r\n                  [src]=\"avatarUrl\"\r\n                  alt=\"profile\"\r\n                  onerror=\"this.onerror=null;this.src='assets/images/loading.gif';\"\r\n                />\r\n              </ng-template>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3 style=\"font-size: 15px; font-weight: 600; color: #ffffff\">\r\n                <ng-container *ngIf=\"currentUser; else noUser\">\r\n                  Hello, {{currentUser?.firstName}}!,\r\n                </ng-container>\r\n                <ng-template #noUser> Loading... </ng-template>\r\n              </h3>\r\n              <p\r\n                style=\"\r\n                  font-size: 14px;\r\n                  font-weight: 200;\r\n                  font-style: italic;\r\n                  color: #ffffff;\r\n                \"\r\n              >\r\n                {{displayUser}}\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n        <!-- Agent banner end -->\r\n      </ng-template>\r\n\r\n      <div class=\"head-title\">\r\n        <div class=\"container all_transactions\">All Transactions</div>\r\n      </div>\r\n      <div class=\"transactionlist\">\r\n        <div class=\"container\">\r\n            <ion-row>\r\n              <ion-col\r\n                sizeLg=\"4\"\r\n                sizeMd=\"4\"\r\n                sizeXs=\"4\"\r\n                *ngFor=\"let item of permissions; let i=index\"\r\n              >\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToService(item)\">\r\n                    <img\r\n                      class=\"grid-icon\"\r\n                      [src]=\"item?.icon\"\r\n                      alt=\"Ionic logo\"\r\n                    />\r\n                    <p class=\"grid_title\">{{item?.screenName}}</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n\r\n<ion-modal\r\n  id=\"example-modal\"\r\n  #modal\r\n  trigger=\"open-custom-dialog\"\r\n  (willDismiss)=\"onWillDismiss($event)\"\r\n  [backdropDismiss]=\"false\"\r\n>\r\n  <ng-template>\r\n    <div class=\"wrapper\">\r\n      <div class=\"mainDiv\">\r\n        <div>\r\n          <ion-icon\r\n            name=\"close\"\r\n            slot=\"end\"\r\n            class=\"closeIcon\"\r\n            (click)=\"cancel()\"\r\n          ></ion-icon>\r\n        </div>\r\n        <div>\r\n          <div class=\"unlockImg\">\r\n            <img src=\"assets/images/unlockId.png\" />\r\n          </div>\r\n          <div></div>\r\n\r\n          <div>\r\n            <ion-text>\r\n              <h5 class=\"id-text\">Unlock Demobank app</h5>\r\n              <p class=\"otp-text\">\r\n                Confirm your Fingerprint, Face ID & mPIN\r\n                <span style=\"margin-left: 30%\">to quickly Sign in</span>\r\n              </p>\r\n            </ion-text>\r\n          </div>\r\n          <div class=\"inputCardButton\">\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"confirm()\"\r\n              >Confirm</ion-button\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map