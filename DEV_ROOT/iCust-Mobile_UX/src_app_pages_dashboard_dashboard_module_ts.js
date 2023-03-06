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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/search/search.component */ 29055);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_app_components_alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/alert-internet/alert-internet.component */ 82014);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);









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
        // this.cardInfoInterval = setInterval(() => this.getCustomerAccounts(), 3 * 1000);
    }
    ionViewDidEnter() {
        this.getCountries();
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
    getCountries() {
        this.api.getCurrencyValues().subscribe((res) => {
            localStorage.setItem('COUNTRIES', JSON.stringify(res));
            // TODO LATER
            // let countryItems: any = [];
            // for (let index = 0; index < res.length; index++) {
            //   const data = res[index];
            //   let item = {
            //     name: data.countryName,
            //     alpha2Code: data.countryCode,
            //     alpha3Code: data.currencyCode,
            //     numericCode: '276'
            //   }
            //   countryItems.push(item);
            // }
            // localStorage.setItem('COUNTRIES_NEW', JSON.stringify(countryItems));
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

module.exports = "/**\n * Swiper 8.4.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: January 30, 2023\n */\n@font-face {\n  font-family: swiper-icons;\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color:#007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide, .swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight, .swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 0.3s opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination, .swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 0.2s transform, 0.2s top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 0.2s transform, 0.2s left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 0.2s transform, 0.2s right;\n}\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite, .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-vertical, .swiper-vertical > .swiper-pagination-progressbar {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\nion-header {\n  background: transparent !important;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-content {\n  --background: #FFFFFF;\n}\n.head-title {\n  margin-top: 12px !important;\n  margin-bottom: 0px !important;\n  margin-left: 12px;\n}\n.card_slider {\n  display: flex;\n  flex-direction: column-reverse;\n}\n:host ::ng-deep .swiper-slide {\n  left: 10%;\n}\n:host ::ng-deep .swiper-slide .card_div {\n  height: 165px;\n  transform: translateY(5%);\n}\n:host ::ng-deep .swiper-slide-active {\n  width: 80% !important;\n}\n:host ::ng-deep .swiper-slide-active .card_div {\n  height: 180px;\n  transform: translateY(0);\n}\n:host ::ng-deep .swiper-slide-prev .card_div {\n  background: linear-gradient(180deg, #AF1084, #D000E2 110%);\n}\n:host ::ng-deep .swiper-slide-next .card_div {\n  background: linear-gradient(180deg, #032AFF, #D000E2 110%);\n}\n:host ::ng-deep .swiper-pagination {\n  padding-top: 2%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active,\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet {\n  background-color: #FD0208 !important;\n}\n:host ::ng-deep .search_bar {\n  padding: 0;\n  margin: 4% 0;\n}\n:host ::ng-deep .search_bar.ios {\n  left: 15%;\n  transform: translateX(-50%);\n}\n.card-logo {\n  width: 100px !important;\n}\n.header .title {\n  display: flex;\n  align-items: center;\n}\n.header .title span.sidenav_icon {\n  color: #999;\n  text-align: center;\n  font-size: xx-large;\n}\n.header .title .name {\n  top: 0 !important;\n  margin-left: -30px !important;\n  font-weight: 700 !important;\n}\n.header .profile-pic {\n  height: 40px;\n  width: 40px;\n  border: 5px solid #DEF0FF;\n}\n.transactionlist ion-grid {\n  padding: 0;\n}\n.main_container_div ion-label {\n  display: block;\n}\n.call-box {\n  margin-top: 30px;\n}\n.country-box {\n  cursor: pointer;\n}\n.country-box:hover {\n  box-shadow: 0px 0px 3px 0px #CCC;\n}\n.avatar {\n  height: 100%;\n}\n.textCard {\n  margin-left: 5%;\n  margin-top: 5%;\n  text-align: left;\n}\n.all_transactions {\n  font-size: 18px;\n  font-weight: 700;\n}\n.transactionCards {\n  box-shadow: 0pt 3pt 6pt rgba(0, 0, 0, 0.0901960784);\n  border-radius: 10pt;\n  background-color: #fffefe;\n  text-align: center;\n  width: 95%;\n  height: 110px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n  margin: 5px auto;\n}\n.initial-avatar {\n  /* Center the content */\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  /* Colors */\n  color: #fff;\n  /* Rounded border */\n  border-radius: 50%;\n  height: 2.5rem;\n  width: 2.5rem;\n  float: right;\n  border: 5px solid #DEF0FF;\n}\n.grid_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n.grid-icon {\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  margin-top: 5px;\n}\n.card_div {\n  width: 100%;\n  border-radius: 10px;\n  background-image: linear-gradient(180deg, rgb(255, 3, 3) 0%, rgb(208, 0, 226) 110%);\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  transition: background-image 0.32s;\n}\n.card_div img {\n  width: 60px;\n}\n.card_div .card_no {\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.card_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.card_div .flex_div ion-label {\n  color: white;\n  font-size: 13px;\n  letter-spacing: 0.6px;\n}\n.card_div .bottom_abs {\n  width: 260px;\n  height: 200px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  bottom: -145px;\n}\n.card_div .side_abs {\n  height: 243px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  right: -80px;\n  top: -25px;\n  transform: rotate(45deg);\n}\n.settingicon {\n  color: white;\n  font-size: x-large;\n  float: right;\n}\n.card_title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.menuicon {\n  color: #999;\n}\n.menuicon .toggle_menu_icon {\n  height: 22px;\n  width: 22px;\n  padding: 0 15px;\n}\n.Item_title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #102245;\n}\n.profile-image {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  height: 4.5rem;\n  width: 4.5rem;\n}\n.headerbar {\n  box-shadow: 0 5pt 5pt -2pt rgba(69, 110, 254, 0.1490196078) !important;\n}\nion-menu::part(container) {\n  width: 90%;\n  padding-top: 60px;\n  background-color: white !important;\n  margin-bottom: 50px;\n  background: #F4F4F4;\n}\n.flex-container {\n  display: flex;\n  margin-bottom: 30px;\n  padding-left: 18px;\n}\n.username {\n  margin-top: 5px;\n  margin-left: 30px;\n  font-weight: 800;\n  color: #102245;\n}\n.mf-30 {\n  margin-left: 30px;\n}\n.label {\n  padding-left: 25px;\n  color: #102245;\n}\n.mt-18 {\n  margin-top: 18px;\n}\n.menu-list {\n  box-shadow: #C9C9C9;\n}\nion-content {\n  --ion-background-color: #F4F4F4;\n}\n.mainDiv {\n  margin-top: 30px;\n}\n.unlockImg {\n  margin-left: 40%;\n}\n.closeIcon {\n  margin-left: 90%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n.btnclass {\n  font-size: 12px;\n  width: 140px;\n  height: 44px;\n  margin-left: 15px;\n}\n.id-text {\n  margin-left: 20%;\n}\n.otp-text {\n  margin-left: 7%;\n}\n.inputCardButton {\n  padding-left: 12%;\n  padding-right: 5%;\n}\n.inputCardButton ion-button {\n  width: 90%;\n  height: 45px;\n  --background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXHN3aXBlclxcc3dpcGVyLm1pbi5jc3MiLCJkYXNoYm9hcmQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcc3dpcGVyXFxtb2R1bGVzXFxwYWdpbmF0aW9uXFxwYWdpbmF0aW9uLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQVcseUJBQUE7RUFBeUIsNnJFQUFBO0VBQTZyRSxnQkFBQTtFQUFnQixrQkFBQTtBQ0lqdkU7QURKbXdFO0VBQU0sNEJBQUE7QUNPendFO0FEUHN5RTtFQUFRLGlCQUFBO0VBQWlCLGtCQUFBO0VBQWtCLGtCQUFBO0VBQWtCLGdCQUFBO0VBQWdCLGdCQUFBO0VBQWdCLFVBQUE7RUFBVSxVQUFBO0FDaUI3NEU7QURqQnU1RTtFQUFpQyxzQkFBQTtBQ3FCeDdFO0FEckI4OEU7RUFBZ0Isa0JBQUE7RUFBa0IsV0FBQTtFQUFXLFlBQUE7RUFBWSxVQUFBO0VBQVUsYUFBQTtFQUFhLDhCQUFBO0VBQThCLHVCQUFBO0FDK0I1akY7QUQvQm1sRjtFQUE4QyxpQ0FBQTtBQ21Dam9GO0FEbkNncUY7RUFBdUIsbUJBQUE7QUN1Q3ZyRjtBRHZDMHNGO0VBQXVDLG1CQUFBO0FDMkNqdkY7QUQzQ293RjtFQUFjLGNBQUE7RUFBYyxXQUFBO0VBQVcsWUFBQTtFQUFZLGtCQUFBO0VBQWtCLDhCQUFBO0FDbUR6MEY7QURuRHUyRjtFQUE4QixrQkFBQTtBQ3VEcjRGO0FEdkR1NUY7RUFBb0QsWUFBQTtBQzJEMzhGO0FEM0R1OUY7RUFBbUMsdUJBQUE7RUFBdUIsc0NBQUE7QUNnRWpoRztBRGhFc2pHO0VBQXNDLHdCQUFBO0VBQXdCLG1DQUFBO0VBQW1DLDJCQUFBO0FDc0V2cEc7QUR0RWtyRztFQUFzRCxtQkFBQTtBQzBFeHVHO0FEMUUydkc7RUFBeVEsNEJBQUE7QUM4RXBnSDtBRDlFZ2lIO0VBQXNMLGtCQUFB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Ii8qKlxuICogU3dpcGVyIDguNC43XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIzIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IEphbnVhcnkgMzAsIDIwMjNcbiAqL1xuXG5AZm9udC1mYWNle2ZvbnQtZmFtaWx5OnN3aXBlci1pY29ucztzcmM6dXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH06cm9vdHstLXN3aXBlci10aGVtZS1jb2xvcjojMDA3YWZmfS5zd2lwZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MDt6LWluZGV4OjF9LnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5OmZsZXg7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dpcGVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwwLDApfS5zd2lwZXItcG9pbnRlci1ldmVudHN7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItcG9pbnRlci1ldmVudHMuc3dpcGVyLXZlcnRpY2Fse3RvdWNoLWFjdGlvbjpwYW4teH0uc3dpcGVyLXNsaWRle2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybX0uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFua3t2aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWF1dG9oZWlnaHQsLnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGV7aGVpZ2h0OmF1dG99LnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlcnthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodH0uc3dpcGVyLWJhY2tmYWNlLWhpZGRlbiAuc3dpcGVyLXNsaWRle3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci0zZCwuc3dpcGVyLTNkLnN3aXBlci1jc3MtbW9kZSAuc3dpcGVyLXdyYXBwZXJ7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwuc3dpcGVyLTNkIC5zd2lwZXItd3JhcHBlcnt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTB9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvd3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7b3ZlcmZsb3c6YXV0bztzY3JvbGxiYXItd2lkdGg6bm9uZTstbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQgc3RhcnR9LnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeX0uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeX0uc3dpcGVyLWNlbnRlcmVkPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle2NvbnRlbnQ6Jyc7ZmxleC1zaHJpbms6MDtvcmRlcjo5OTk5fS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjFweDt3aWR0aDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZHttYXJnaW4tYmxvY2stc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle3dpZHRoOjEwMCU7bWluLXdpZHRoOjFweDtoZWlnaHQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZXtzY3JvbGwtc25hcC1hbGlnbjpjZW50ZXIgY2VudGVyO3Njcm9sbC1zbmFwLXN0b3A6YWx3YXlzfSIsIkBpbXBvcnQgXCJ+c3dpcGVyL2Nzc1wiO1xyXG5AaW1wb3J0IFwifnN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5jYXJkX3NsaWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG5cclxuICAgICAgICAuY2FyZF9kaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2NXB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNSUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAuY2FyZF9kaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zd2lwZXItc2xpZGUtcHJldiB7XHJcbiAgICAgICAgLmNhcmRfZGl2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0FGMTA4NCwgI0QwMDBFMiAxMTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN3aXBlci1zbGlkZS1uZXh0IHtcclxuICAgICAgICAuY2FyZF9kaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDMyQUZGLCAjRDAwMEUyIDExMCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuXHJcbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUsXHJcbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRDAyMDggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaF9iYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiA0JSAwO1xyXG5cclxuICAgICAgICAmLmlvcyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4taW5saW5lLXN0YXJ0OiAtMTMzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1sb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBzcGFuLnNpZGVuYXZfaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1waWMge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjREVGMEZGO1xyXG4gICAgfVxyXG59XHJcblxyXG4udHJhbnNhY3Rpb25saXN0IHtcclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFpbl9jb250YWluZXJfZGl2IHtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLmNhbGwtYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWJveCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWJveDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI0NDQztcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0Q2FyZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hbGxfdHJhbnNhY3Rpb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbkNhcmRzIHtcclxuICAgIGJveC1zaGFkb3c6IDBwdCAzcHQgNnB0ICMwMDAwMDAxNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuLmluaXRpYWwtYXZhdGFyIHtcclxuICAgIC8qIENlbnRlciB0aGUgY29udGVudCAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvKiBDb2xvcnMgKi9cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAvKiBSb3VuZGVkIGJvcmRlciAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0RFRjBGRjtcclxufVxyXG5cclxuLmdyaWRfdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmdyaWQtaWNvbiB7XHJcbiAgICB3aWR0aDogMzNweDtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuXHJcblxyXG4uY2FyZF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAzLCAzLCAxKSAwJSxcclxuICAgICAgICAgICAgcmdiYSgyMDgsIDAsIDIyNiwgMSkgMTEwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zMnM7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9ubyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxleF9kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b21fYWJzIHtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTE0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlX2FicyB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjQzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTgwcHg7XHJcbiAgICAgICAgdG9wOiAtMjVweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZXR0aW5naWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJkX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tZW51aWNvbiB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuXHJcbiAgICAudG9nZ2xlX21lbnVfaWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLkl0ZW1fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQuNXJlbTtcclxuICAgIHdpZHRoOiA0LjVyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJiYXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgIzQ1NkVGRTI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxufVxyXG5cclxuLm1mLTMwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbn1cclxuXHJcbi5tdC0xOCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcblxyXG4ubWVudS1saXN0IHtcclxuICAgIGJveC1zaGFkb3c6ICNDOUM5Qzk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XHJcbn1cclxuXHJcbi8vIE1vZGFsIFNDU1NcclxuLm1haW5EaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweFxyXG59XHJcblxyXG4udW5sb2NrSW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuXHJcbi5jbG9zZUljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxufVxyXG5cclxuLmJ0bmNsYXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uaWQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4ub3RwLXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkQnV0dG9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxufSIsIi5zd2lwZXItcGFnaW5hdGlvbntwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOi4zcyBvcGFjaXR5O3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7ei1pbmRleDoxMH0uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVue29wYWNpdHk6MH0uc3dpcGVyLXBhZ2luYXRpb24tZGlzYWJsZWQ+LnN3aXBlci1wYWdpbmF0aW9uLC5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1kaXNhYmxlZHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cywuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9ue2JvdHRvbToxMHB4O2xlZnQ6MDt3aWR0aDoxMDAlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTowfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW57dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldnt0cmFuc2Zvcm06c2NhbGUoLjY2KX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldnt0cmFuc2Zvcm06c2NhbGUoLjMzKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHR7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHR7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt3aWR0aDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtd2lkdGgsdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXNpemUsOHB4KSk7aGVpZ2h0OnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1oZWlnaHQsdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXNpemUsOHB4KSk7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtY29sb3IsIzAwMCk7b3BhY2l0eTp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtb3BhY2l0eSwgLjIpfWJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2N1cnNvcjpwb2ludGVyfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQ6b25seS1jaGlsZHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle29wYWNpdHk6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LW9wYWNpdHksIDEpO2JhY2tncm91bmQ6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSl9LnN3aXBlci1wYWdpbmF0aW9uLXZlcnRpY2FsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tyaWdodDoxMHB4O3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwtNTAlLDApfS5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e21hcmdpbjp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtdmVydGljYWwtZ2FwLDZweCkgMDtkaXNwbGF5OmJsb2NrfS5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYywuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3t0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjhweH0uc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCwuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wfS5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LC5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46MCB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaG9yaXpvbnRhbC1nYXAsNHB4KX0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljLC5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQsLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnR9LnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1ydGw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHR9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wfS5zd2lwZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSwuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZXt3aWR0aDoxMDAlO2hlaWdodDo0cHg7bGVmdDowO3RvcDowfS5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXZlcnRpY2FsLC5zd2lwZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye3dpZHRoOjRweDtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjB9LnN3aXBlci1wYWdpbmF0aW9uLWxvY2t7ZGlzcGxheTpub25lfSJdfQ== */";

/***/ }),

/***/ 73890:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button class=\"menuicon\">\r\n          <ion-icon src=\"assets/icon/hamburger-menu.svg\" class=\"toggle_menu_icon\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>Hi {{currentUser?.firstName}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"searchModal()\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ng-container *ngIf=\"isLoading\">\r\n    <div class=\"container\">\r\n      <ion-slides mode=\"ios\" pager=\"true\" scrollbar=\"false\" class=\"card_slider\" [options]=\"slideCardOpts\">\r\n        <ion-slide>\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <ion-list-header>\r\n      <ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text>\r\n    </ion-list-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ng-container>\r\n  <div class=\"body\">\r\n    <swiper (slideChangeTransitionEnd)=\"trans($event)\" #swiperVirtualRef [slidesPerView]=\"1\" [spaceBetween]=\"50\"\r\n      [pagination]=\"{ type: 'fraction' }\" [virtual]=\"true\" slideActiveClass=\"swiper-active whyWouldIuseCustomClass\"\r\n      [centeredSlides]=\"true\" [navigation]=\"true\">\r\n      <ng-template swiperSlide *ngFor=\"let card of cards; index as i\"></ng-template>\r\n    </swiper>\r\n\r\n    <ng-container *ngIf=\"!isLoading\">\r\n      <!-- CARD SLIDER START -->\r\n      <div class=\"main_container_div\">\r\n        <swiper [config]=\"config\" class=\"card_slider\" (slideChange)=\"onSlideChange($event)\" (swiper)=\"onSwiper($event)\">\r\n          <ng-template swiperSlide *ngFor=\"let card of cards; index as i\">\r\n            <div class=\"card_div\" (click)=\"getAccountNumber(card)\">\r\n              <div class=\"card_title\">\r\n                <div class=\"bank_logo\">\r\n                  <img src=\"assets/images/card-logo.svg\" class=\"card-logo\" />\r\n                </div>\r\n                <div class=\"setting_ico text-right\" (click)=\"goToAccountSettings(); $event.stopPropagation()\">\r\n                  <ion-icon name=\"settings-outline\" class=\"settingicon\"></ion-icon>\r\n                </div>\r\n              </div>\r\n\r\n              <ion-label class=\"card_no\"></ion-label>\r\n              <div class=\"flex_div mt-4\">\r\n                <ion-label> {{ card?.accountType + ' Account' }}</ion-label>\r\n                <ion-label>Account Balance</ion-label>\r\n              </div>\r\n              <div class=\"flex_div\">\r\n                <ion-label> {{ card?.accountId }}</ion-label>\r\n                <ion-label> {{ card?.accountCurrency | currencySymbol }} {{ card?.amount |\r\n                  number: '1.'}}</ion-label>\r\n              </div>\r\n              <div class=\"side_abs\"></div>\r\n              <div class=\"bottom_abs\"></div>\r\n            </div>\r\n          </ng-template>\r\n        </swiper>\r\n      </div>\r\n      <!-- CARD SLIDER END -->\r\n      <div class=\"head-title\">\r\n        <div class=\"container all_transactions\">All Transactions</div>\r\n      </div>\r\n      <div class=\"transactionlist\">\r\n        <div class=\"container\">\r\n\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToCashWithdrawal()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/cash-withdrawal.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cash Withdrawal</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToCashDeposit()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/piggy-bank.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cash Deposit</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToChequeDeposit()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/cheque-deposit.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cheque Deposit</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToChequeWithdrawal()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/cheque-withdrawal.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Cheque Withdrawal</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToForexTransaction()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/forex.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Forex Transaction</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToLoanDisbursement()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/loan-signing.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Loan Disbursement</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToLoanRePayment()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/loan-signing.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Loan Repayment</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToUtilityPayment()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/bill-payment.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Utility Bill Payment</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col>\r\n                <div class=\"col_4\">\r\n                  <div class=\"transactionCards\" (click)=\"goToDepositTopUp()\">\r\n                    <img class=\"grid-icon\" src=\"assets/icon/top-up.png\" alt=\"Ionic logo\" />\r\n                    <p class=\"grid_title\">Deposit Top Up</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n\r\n          </ion-grid>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n\r\n<ion-modal id=\"example-modal\" #modal trigger=\"open-custom-dialog\" (willDismiss)=\"onWillDismiss($event)\"\r\n  [backdropDismiss]=\"false\">\r\n  <ng-template>\r\n    <div class=\"wrapper\">\r\n      <div class=\"mainDiv\">\r\n        <div>\r\n          <ion-icon name=\"close\" slot=\"end\" class=\"closeIcon\" (click)=\"cancel()\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <div class=\"unlockImg\">\r\n            <img src=\"assets/images/unlockId.png\">\r\n          </div>\r\n          <div>\r\n\r\n          </div>\r\n\r\n          <div>\r\n            <ion-text>\r\n              <h5 class=\"id-text\">Unlock Demobank app</h5>\r\n              <p class=\"otp-text\">Confirm your Fingerprint, Face ID & mPIN\r\n                <span style=\"margin-left:30%\">to quickly Sign in</span>\r\n              </p>\r\n            </ion-text>\r\n          </div>\r\n          <div class=\"inputCardButton\">\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"confirm()\">Confirm</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map