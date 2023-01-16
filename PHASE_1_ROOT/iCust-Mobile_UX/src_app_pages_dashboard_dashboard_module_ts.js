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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 73890);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 27791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/search/search.component */ 29055);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_app_components_alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/alert-internet/alert-internet.component */ 82014);










// import Swiper core and required modules




let DashboardPage = class DashboardPage {
    constructor(router, api, modalCtrl, sanitizer, cdr, platform, dataService, alert, modalController, menu) {
        this.router = router;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.platform = platform;
        this.dataService = dataService;
        this.alert = alert;
        this.modalController = modalController;
        this.menu = menu;
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
    }
    ngOnInit() {
        var _a, _b, _c;
        this.currentUser = this.dataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = localStorage.getItem('customer_id');
        let isOpenTray = localStorage.getItem('isShowed');
        this.isFaceId = ((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.faceLoginEnable) ? true : false;
        this.isFingerPrint = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.fingerprintLoginEnable) ? true : false;
        this.mpinActive = ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.mpinActive) ? true : false;
        this.platform.ready().then(() => {
            if (this.platform.is("android")) {
                this.isAndroid = true;
            }
            if (this.platform.is('ios') || this.platform.is("iphone") || this.platform.is("ipad")) {
                this.isAndroid = false;
            }
        });
        // install Swiper modules
        swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_5__.A11y]);
        localStorage.setItem('slideNo', '0');
        var customerDetails = JSON.parse(localStorage.getItem('customer_details'));
        this.getCustomerAccounts();
        this.accountType = customerDetails.accountType;
        this.emailAddress = customerDetails.primaryEmailAdress;
        this.dataService.getAvatarUrl.subscribe((data) => {
            if (data != null) {
                this.image = data;
                this.cdr.markForCheck();
            }
        });
        setTimeout(() => {
            this.isLoading = false;
            if (this.platform.is("cordova")) {
                if (this.openUnlockTray() == true && (isOpenTray == "no" || isOpenTray == null || isOpenTray == undefined || isOpenTray == "")) {
                    this.modal.present();
                    localStorage.setItem('isShowed', "yes");
                }
            }
        }, 2000);
        this.cdr.markForCheck();
    }
    ionViewWillEnter() {
        this.cardInfoInterval = setInterval(() => this.getCustomerAccounts(), 3 * 1000);
    }
    getCustomerAccounts() {
        this.api.getCustomerAccounts(this.phoneNumber).subscribe((resp) => {
            var _a, _b;
            console.log('backend resp in home', resp);
            resp.custAccount = resp.custAccount.filter((card) => card.status === 'APPROVED');
            this.cards = resp.custAccount;
            localStorage.setItem('cardData', JSON.stringify(resp.custAccount));
            this.cards = resp.custAccount;
            localStorage.setItem('loginRespAccountId', (_b = (_a = this.cards) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.accountId);
            this.dataService.shareAccountInfo(this.cards[0]);
            this.getProfilePicture(this.customerId);
            this.cdr.markForCheck();
        }, (err) => {
            console.log(err);
        });
    }
    openNoInternet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_7__.AlertInternetComponent,
                cssClass: 'small-modal'
            });
            modal.present();
        });
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss("", 'confirm');
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
    searchModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent,
            });
            return yield modal.present();
        });
    }
    goToCashWithdrawal() {
        this.router.navigate(['cashwithdrawal']);
    }
    goToCashDeposit() {
        this.router.navigate(['cashdeposit']);
    }
    goToChequeDeposit() {
        this.router.navigate(['chequedeposit']);
    }
    goToChequeWithdrawal() {
        this.router.navigate(['chequewithdrawal']);
    }
    goToForexTransaction() {
        this.router.navigate(['forex-transaction']);
    }
    goToLoanPayment() {
        this.router.navigate(['loan-payment']);
    }
    goToUtilityPayment() {
        this.router.navigate(['utility-payment']);
    }
    goToDepositTopUp() {
        this.router.navigate(['deposit-topup']);
    }
    getAccountNumber(info) {
        console.log('number');
        this.dataService.shareAccountInfo(info);
        this.router.navigate(['/transaction']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    goToAccountSettings() {
        console.log('settings');
        this.router.navigate(['account']);
    }
    ionViewWillLeave() {
        clearInterval(this.cardInfoInterval);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController }
];
DashboardPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['modal',] }],
    sidemenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [src_app_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent,] }],
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['swiper', { static: false },] }]
};
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 27791:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/**\n * Swiper 8.4.5\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 21, 2022\n */\n@font-face {\n  font-family: swiper-icons;\n  src: url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color:#007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide, .swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight, .swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 0.3s opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination, .swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 0.2s transform, 0.2s top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 0.2s transform, 0.2s left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 0.2s transform, 0.2s right;\n}\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite, .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-vertical, .swiper-vertical > .swiper-pagination-progressbar {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\nion-header {\n  background: transparent !important;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-content {\n  --background: #FFFFFF;\n}\n.head-title {\n  margin-top: 12px !important;\n  margin-bottom: 0px !important;\n  margin-left: 12px;\n}\n.card_slider {\n  display: flex;\n  flex-direction: column-reverse;\n}\n:host ::ng-deep .swiper-slide {\n  left: 10%;\n}\n:host ::ng-deep .swiper-slide .card_div {\n  height: 165px;\n  transform: translateY(5%);\n}\n:host ::ng-deep .swiper-slide-active {\n  width: 80% !important;\n}\n:host ::ng-deep .swiper-slide-active .card_div {\n  height: 180px;\n  transform: translateY(0);\n}\n:host ::ng-deep .swiper-slide-prev .card_div {\n  background: linear-gradient(180deg, #AF1084, #D000E2 110%);\n}\n:host ::ng-deep .swiper-slide-next .card_div {\n  background: linear-gradient(180deg, #032AFF, #D000E2 110%);\n}\n:host ::ng-deep .swiper-pagination {\n  padding-top: 2%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active,\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet {\n  background-color: #FD0208 !important;\n}\n:host ::ng-deep .search_bar {\n  padding: 0;\n  margin: 4% 0;\n}\n:host ::ng-deep .search_bar.ios {\n  left: 15%;\n  transform: translateX(-50%);\n}\n.card-logo {\n  width: 100px !important;\n}\n.header .title {\n  display: flex;\n  align-items: center;\n}\n.header .title span.sidenav_icon {\n  color: #999;\n  text-align: center;\n  font-size: xx-large;\n}\n.header .title .name {\n  top: 0 !important;\n  margin-left: -30px !important;\n  font-weight: 700 !important;\n}\n.header .profile-pic {\n  height: 40px;\n  width: 40px;\n  border: 5px solid #DEF0FF;\n}\n.transactionlist ion-grid {\n  padding: 0;\n}\n.main_container_div ion-label {\n  display: block;\n}\n.call-box {\n  margin-top: 30px;\n}\n.country-box {\n  cursor: pointer;\n}\n.country-box:hover {\n  box-shadow: 0px 0px 3px 0px #CCC;\n}\n.avatar {\n  height: 100%;\n}\n.textCard {\n  margin-left: 5%;\n  margin-top: 5%;\n  text-align: left;\n}\n.all_transactions {\n  font-size: 18px;\n  font-weight: 700;\n}\n.transactionCards {\n  box-shadow: 0pt 3pt 6pt rgba(0, 0, 0, 0.0901960784);\n  border-radius: 10pt;\n  background-color: #fffefe;\n  text-align: center;\n  width: 95%;\n  height: 110px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n  margin: 5px auto;\n}\n.initial-avatar {\n  /* Center the content */\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  /* Colors */\n  color: #fff;\n  /* Rounded border */\n  border-radius: 50%;\n  height: 2.5rem;\n  width: 2.5rem;\n  float: right;\n  border: 5px solid #DEF0FF;\n}\n.grid_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n.grid-icon {\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  margin-top: 5px;\n}\n.card_div {\n  width: 100%;\n  border-radius: 10px;\n  background-image: linear-gradient(180deg, rgb(255, 3, 3) 0%, rgb(208, 0, 226) 110%);\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  transition: background-image 0.32s;\n}\n.card_div img {\n  width: 60px;\n}\n.card_div .card_no {\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.card_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.card_div .flex_div ion-label {\n  color: white;\n  font-size: 13px;\n  letter-spacing: 0.6px;\n}\n.card_div .bottom_abs {\n  width: 260px;\n  height: 200px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  bottom: -145px;\n}\n.card_div .side_abs {\n  height: 243px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  right: -80px;\n  top: -25px;\n  transform: rotate(45deg);\n}\n.settingicon {\n  color: white;\n  font-size: x-large;\n  float: right;\n}\n.card_title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.menuicon {\n  color: #999;\n}\n.menuicon .toggle_menu_icon {\n  height: 22px;\n  width: 22px;\n  padding: 0 15px;\n}\n.Item_title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #102245;\n}\n.profile-image {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  height: 4.5rem;\n  width: 4.5rem;\n}\n.headerbar {\n  box-shadow: 0 5pt 5pt -2pt rgba(69, 110, 254, 0.1490196078) !important;\n}\nion-menu::part(container) {\n  width: 90%;\n  padding-top: 60px;\n  background-color: white !important;\n  margin-bottom: 50px;\n  background: #F4F4F4;\n}\n.flex-container {\n  display: flex;\n  margin-bottom: 30px;\n  padding-left: 18px;\n}\n.username {\n  margin-top: 5px;\n  margin-left: 30px;\n  font-weight: 800;\n  color: #102245;\n}\n.mf-30 {\n  margin-left: 30px;\n}\n.label {\n  padding-left: 25px;\n  color: #102245;\n}\n.mt-18 {\n  margin-top: 18px;\n}\n.menu-list {\n  box-shadow: #C9C9C9;\n}\nion-content {\n  --ion-background-color: #F4F4F4;\n}\n.mainDiv {\n  margin-top: 30px;\n}\n.unlockImg {\n  margin-left: 40%;\n}\n.closeIcon {\n  margin-left: 90%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n.btnclass {\n  font-size: 12px;\n  width: 140px;\n  height: 44px;\n  margin-left: 15px;\n}\n.id-text {\n  margin-left: 20%;\n}\n.otp-text {\n  margin-left: 7%;\n}\n.inputCardButton {\n  padding-left: 12%;\n  padding-right: 5%;\n}\n.inputCardButton ion-button {\n  width: 90%;\n  height: 45px;\n  --background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXHN3aXBlclxcc3dpcGVyLm1pbi5jc3MiLCJkYXNoYm9hcmQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcc3dpcGVyXFxtb2R1bGVzXFxwYWdpbmF0aW9uXFxwYWdpbmF0aW9uLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQVcseUJBQUE7RUFBeUIsNnJFQUFBO0VBQTZyRSxnQkFBQTtFQUFnQixrQkFBQTtBQ0lqdkU7QURKbXdFO0VBQU0sNEJBQUE7QUNPendFO0FEUHN5RTtFQUFRLGlCQUFBO0VBQWlCLGtCQUFBO0VBQWtCLGtCQUFBO0VBQWtCLGdCQUFBO0VBQWdCLGdCQUFBO0VBQWdCLFVBQUE7RUFBVSxVQUFBO0FDaUI3NEU7QURqQnU1RTtFQUFpQyxzQkFBQTtBQ3FCeDdFO0FEckI4OEU7RUFBZ0Isa0JBQUE7RUFBa0IsV0FBQTtFQUFXLFlBQUE7RUFBWSxVQUFBO0VBQVUsYUFBQTtFQUFhLDhCQUFBO0VBQThCLHVCQUFBO0FDK0I1akY7QUQvQm1sRjtFQUE4QyxpQ0FBQTtBQ21Dam9GO0FEbkNncUY7RUFBdUIsbUJBQUE7QUN1Q3ZyRjtBRHZDMHNGO0VBQXVDLG1CQUFBO0FDMkNqdkY7QUQzQ293RjtFQUFjLGNBQUE7RUFBYyxXQUFBO0VBQVcsWUFBQTtFQUFZLGtCQUFBO0VBQWtCLDhCQUFBO0FDbUR6MEY7QURuRHUyRjtFQUE4QixrQkFBQTtBQ3VEcjRGO0FEdkR1NUY7RUFBb0QsWUFBQTtBQzJEMzhGO0FEM0R1OUY7RUFBbUMsdUJBQUE7RUFBdUIsc0NBQUE7QUNnRWpoRztBRGhFc2pHO0VBQXNDLHdCQUFBO0VBQXdCLG1DQUFBO0VBQW1DLDJCQUFBO0FDc0V2cEc7QUR0RWtyRztFQUFzRCxtQkFBQTtBQzBFeHVHO0FEMUUydkc7RUFBeVEsNEJBQUE7QUM4RXBnSDtBRDlFZ2lIO0VBQXNMLGtCQUFB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cGVyIDguNC41XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIyIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDIxLCAyMDIyXG4gKi9cblxuQGZvbnQtZmFjZXtmb250LWZhbWlseTpzd2lwZXItaWNvbnM7c3JjOnVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9OnJvb3R7LS1zd2lwZXItdGhlbWUtY29sb3I6IzAwN2FmZn0uc3dpcGVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nOjA7ei1pbmRleDoxfS5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uc3dpcGVyLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7ZGlzcGxheTpmbGV4O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO2JveC1zaXppbmc6Y29udGVudC1ib3h9LnN3aXBlci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsLnN3aXBlci13cmFwcGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsMCwwKX0uc3dpcGVyLXBvaW50ZXItZXZlbnRze3RvdWNoLWFjdGlvbjpwYW4teX0uc3dpcGVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci12ZXJ0aWNhbHt0b3VjaC1hY3Rpb246cGFuLXh9LnN3aXBlci1zbGlkZXtmbGV4LXNocmluazowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm19LnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmt7dmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1hdXRvaGVpZ2h0LC5zd2lwZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRle2hlaWdodDphdXRvfS5zd2lwZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXJ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHR9LnN3aXBlci1iYWNrZmFjZS1oaWRkZW4gLnN3aXBlci1zbGlkZXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItM2QsLnN3aXBlci0zZC5zd2lwZXItY3NzLW1vZGUgLnN3aXBlci13cmFwcGVye3BlcnNwZWN0aXZlOjEyMDBweH0uc3dpcGVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci0zZCAuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3d7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b217YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye292ZXJmbG93OmF1dG87c2Nyb2xsYmFyLXdpZHRoOm5vbmU7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmV9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRle3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0IHN0YXJ0fS5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnl9LnN3aXBlci12ZXJ0aWNhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eSBtYW5kYXRvcnl9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtjb250ZW50OicnO2ZsZXgtc2hyaW5rOjA7b3JkZXI6OTk5OX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxke21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDoxcHg7d2lkdGg6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWJsb2NrLXN0YXJ0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXt3aWR0aDoxMDAlO21pbi13aWR0aDoxcHg7aGVpZ2h0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpfS5zd2lwZXItY2VudGVyZWQ+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246Y2VudGVyIGNlbnRlcn0iLCJAaW1wb3J0IFwifnN3aXBlci9jc3NcIjtcclxuQGltcG9ydCBcIn5zd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZF9zbGlkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIC5zd2lwZXItc2xpZGUge1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuXHJcbiAgICAgICAgLmNhcmRfZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjVweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLmNhcmRfZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3dpcGVyLXNsaWRlLXByZXYge1xyXG4gICAgICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNBRjEwODQsICNEMDAwRTIgMTEwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zd2lwZXItc2xpZGUtbmV4dCB7XHJcbiAgICAgICAgLmNhcmRfZGl2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAzMkFGRiwgI0QwMDBFMiAxMTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcblxyXG4gICAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLFxyXG4gICAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkQwMjA4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2hfYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogNCUgMDtcclxuXHJcbiAgICAgICAgJi5pb3Mge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWlubGluZS1zdGFydDogLTEzM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtbG9nbyB7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc3Bhbi5zaWRlbmF2X2ljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcGljIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI0RFRjBGRjtcclxuICAgIH1cclxufVxyXG5cclxuLnRyYW5zYWN0aW9ubGlzdCB7XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm1haW5fY29udGFpbmVyX2RpdiB7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYWxsLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY291bnRyeS1ib3gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY291bnRyeS1ib3g6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4ICNDQ0M7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGV4dENhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYWxsX3RyYW5zYWN0aW9ucyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb25DYXJkcyB7XHJcbiAgICBib3gtc2hhZG93OiAwcHQgM3B0IDZwdCAjMDAwMDAwMTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbi5pbml0aWFsLWF2YXRhciB7XHJcbiAgICAvKiBDZW50ZXIgdGhlIGNvbnRlbnQgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLyogQ29sb3JzICovXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLyogUm91bmRlZCBib3JkZXIgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNERUYwRkY7XHJcbn1cclxuXHJcbi5ncmlkX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWljb24ge1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmRfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMywgMywgMSkgMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMjA4LCAwLCAyMjYsIDEpIDExMCUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuMzJzO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfbm8ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXhfZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tX2FicyB7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0xNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZV9hYnMge1xyXG4gICAgICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI0M3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC04MHB4O1xyXG4gICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2V0dGluZ2ljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZF90aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVudWljb24ge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgLnRvZ2dsZV9tZW51X2ljb24ge1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5JdGVtX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgICB3aWR0aDogNC41cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyYmFyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICM0NTZFRkUyNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudTo6cGFydChjb250YWluZXIpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbn1cclxuXHJcbi5tZi0zMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG59XHJcblxyXG4ubXQtMTgge1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxufVxyXG5cclxuLm1lbnUtbGlzdCB7XHJcbiAgICBib3gtc2hhZG93OiAjQzlDOUM5O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xyXG59XHJcblxyXG4vLyBNb2RhbCBTQ1NTXHJcbi5tYWluRGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHhcclxufVxyXG5cclxuLnVubG9ja0ltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcblxyXG4uY2xvc2VJY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbn1cclxuXHJcbi5idG5jbGFzcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmlkLXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLm90cC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxufVxyXG5cclxuLmlucHV0Q2FyZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB9XHJcbn0iLCIuc3dpcGVyLXBhZ2luYXRpb257cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7dHJhbnNpdGlvbjouM3Mgb3BhY2l0eTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3otaW5kZXg6MTB9LnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbntvcGFjaXR5OjB9LnN3aXBlci1wYWdpbmF0aW9uLWRpc2FibGVkPi5zd2lwZXItcGFnaW5hdGlvbiwuc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tZGlzYWJsZWR7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbCwuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbntib3R0b206MTBweDtsZWZ0OjA7d2lkdGg6MTAwJX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje292ZXJmbG93OmhpZGRlbjtmb250LXNpemU6MH0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7dHJhbnNmb3JtOnNjYWxlKC4zMyk7cG9zaXRpb246cmVsYXRpdmV9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXt0cmFuc2Zvcm06c2NhbGUoMSl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWlue3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXZ7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXZ7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0e3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0e3RyYW5zZm9ybTpzY2FsZSguMzMpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7d2lkdGg6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXdpZHRoLHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1zaXplLDhweCkpO2hlaWdodDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaGVpZ2h0LHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1zaXplLDhweCkpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWluYWN0aXZlLWNvbG9yLCMwMDApO29wYWNpdHk6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWluYWN0aXZlLW9wYWNpdHksIC4yKX1idXR0b24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2hhZG93Om5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtjdXJzb3I6cG9pbnRlcn0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0Om9ubHktY2hpbGR7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtvcGFjaXR5OnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1vcGFjaXR5LCAxKTtiYWNrZ3JvdW5kOnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpfS5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLC5zd2lwZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7cmlnaHQ6MTBweDt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsLTUwJSwwKX0uc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LC5zd2lwZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXZlcnRpY2FsLWdhcCw2cHgpIDA7ZGlzcGxheTpibG9ja30uc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDo4cHh9LnN3aXBlci1wYWdpbmF0aW9uLXZlcnRpY2FsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHRvcH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCwuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjAgdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWhvcml6b250YWwtZ2FwLDRweCl9LnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYywuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3tsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aGl0ZS1zcGFjZTpub3dyYXB9LnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LC5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0fS5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItcnRsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0fS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjI1KTtwb3NpdGlvbjphYnNvbHV0ZX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcix2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH0uc3dpcGVyLXJ0bCAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9LnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhciwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbCwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGV7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbCwuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcnt3aWR0aDo0cHg7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowfS5zd2lwZXItcGFnaW5hdGlvbi1sb2Nre2Rpc3BsYXk6bm9uZX0iXX0= */";

/***/ }),

/***/ 73890:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n      <ion-button class=\"menuicon\">\r\n        <ion-icon src=\"assets/icon/hamburger-menu.svg\" class=\"toggle_menu_icon\"></ion-icon>\r\n      </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>Hi {{currentUser?.firstName}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"searchModal()\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ng-container *ngIf=\"isLoading\">\r\n    <div class=\"container\">\r\n      <ion-slides mode=\"ios\" pager=\"true\" scrollbar=\"false\" class=\"card_slider\" [options]=\"slideCardOpts\">\r\n        <ion-slide>\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <ion-list-header>\r\n      <ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text>\r\n    </ion-list-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ng-container>\r\n  <div class=\"body\">\r\n    <swiper (slideChangeTransitionEnd)=\"trans($event)\" #swiperVirtualRef [slidesPerView]=\"1\" [spaceBetween]=\"50\"\r\n      [pagination]=\"{ type: 'fraction' }\" [virtual]=\"true\" slideActiveClass=\"swiper-active whyWouldIuseCustomClass\"\r\n      [centeredSlides]=\"true\" [navigation]=\"true\">\r\n      <ng-template swiperSlide *ngFor=\"let card of cards; index as i\"></ng-template>\r\n    </swiper>\r\n\r\n    <ng-container *ngIf=\"!isLoading\">\r\n      <!-- CARD SLIDER START -->\r\n      <div class=\"main_container_div\">\r\n        <swiper [config]=\"config\" class=\"card_slider\" (slideChange)=\"onSlideChange($event)\" (swiper)=\"onSwiper($event)\">\r\n          <ng-template swiperSlide *ngFor=\"let card of cards; index as i\">\r\n            <div class=\"card_div\" (click)=\"getAccountNumber(card)\">\r\n              <div class=\"card_title\">\r\n                <div class=\"bank_logo\">\r\n                  <img src=\"assets/images/card-logo.svg\" class=\"card-logo\" />\r\n                </div>\r\n                <div class=\"setting_ico text-right\"(click)=\"goToAccountSettings(); $event.stopPropagation()\">\r\n                  <ion-icon name=\"settings-outline\" class=\"settingicon\"></ion-icon>\r\n                </div>\r\n              </div>\r\n\r\n              <ion-label class=\"card_no\"></ion-label>\r\n              <div class=\"flex_div mt-4\">\r\n                <ion-label> {{ card?.accountType + ' Account' }}</ion-label>\r\n                <ion-label>Account Balance</ion-label>\r\n              </div>\r\n              <div class=\"flex_div\">\r\n                <ion-label> {{ card?.accountId }}</ion-label>\r\n                <ion-label> {{ card?.accountCurrency | currencySymbol }} {{ card?.amount |\r\n                number: '1.'}}</ion-label>\r\n              </div>\r\n              <div class=\"side_abs\"></div>\r\n              <div class=\"bottom_abs\"></div>\r\n            </div>\r\n          </ng-template>\r\n        </swiper>\r\n      </div>\r\n      <!-- CARD SLIDER END -->\r\n      <div class=\"head-title\">\r\n        <div class=\"container all_transactions\">All Transactions</div>\r\n      </div>\r\n      <div class=\"transactionlist\">\r\n        <div class=\"container\">\r\n\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToCashWithdrawal()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/cash-withdrawal.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cash Withdrawal</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToCashDeposit()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/piggy-bank.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cash Deposit</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToChequeDeposit()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/cheque-deposit.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cheque Deposit</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToChequeWithdrawal()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/cheque-withdrawal.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cheque Withdrawal</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToForexTransaction()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/forex.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Forex Transaction</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToLoanPayment()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/loan-signing.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Loan Payment</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToUtilityPayment()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/bill-payment.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Utility Bill Payment</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToDepositTopUp()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/top-up.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Deposit Top Up</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col></ion-col>\r\n            </ion-row>\r\n\r\n          </ion-grid>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n\r\n<ion-modal id=\"example-modal\" #modal trigger=\"open-custom-dialog\" (willDismiss)=\"onWillDismiss($event)\" [backdropDismiss]=\"false\">\r\n  <ng-template>\r\n    <div class=\"wrapper\">\r\n      <div class=\"mainDiv\">\r\n        <div>\r\n          <ion-icon name=\"close\" slot=\"end\" class=\"closeIcon\" (click)=\"cancel()\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <div class=\"unlockImg\">\r\n            <img src=\"assets/images/unlockId.png\"></div>\r\n          <div>\r\n\r\n          </div>\r\n\r\n          <div>\r\n            <ion-text>\r\n              <h5 class=\"id-text\">Unlock Demobank app</h5>\r\n              <p class=\"otp-text\">Confirm your Fingerprint, Face ID & mPIN\r\n                <span style=\"margin-left:30%\">to quickly Sign in</span></p>\r\n            </ion-text>\r\n          </div>\r\n          <div class=\"inputCardButton\">\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"confirm()\">Confirm</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map