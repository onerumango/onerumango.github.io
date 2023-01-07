(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then((m) => m.LoginPageModule),
    },
    {
        path: 'otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_pages_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/otp/otp.module */ 17631)).then((m) => m.OtpPageModule),
    },
    {
        path: 'forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgotpassword/forgotpassword.module */ 95862)).then((m) => m.ForgotpasswordPageModule),
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then((m) => m.SettingsPageModule),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then((m) => m.ProfilePageModule),
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faq/faq.module */ 87119)).then((m) => m.FaqPageModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_unlockapp_unlockapp_page_ts"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then((m) => m.DashboardPageModule),
    },
    {
        path: 'transaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("src_app_pages_transaction_transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction/transaction.module */ 66924)).then((m) => m.TransactionPageModule),
    },
    {
        path: 'changepassword',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("src_app_pages_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/change-password/change-password.module */ 68292)).then((m) => m.ChangePasswordPageModule),
    },
    {
        path: 'account-edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account-edit_account-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account-edit/account-edit.module */ 60519)).then((m) => m.AccountEditPageModule),
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 36868)).then((m) => m.AccountPageModule),
    },
    {
        path: 'loginactivity',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_loginactivity_loginactivity_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/loginactivity/loginactivity.module */ 51278)).then((m) => m.LoginactivityPageModule),
    },
    {
        path: 'token-generation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_token-generation_token-generation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/token-generation/token-generation.module */ 79957)).then((m) => m.TokenGenerationPageModule),
    },
    {
        path: 'utility-payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_utility-payment_utility-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/utility-payment/utility-payment.module */ 14200)).then((m) => m.UtilityPaymentPageModule),
    },
    {
        path: 'deposit-topup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_deposit-topup_deposit-topup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/deposit-topup/deposit-topup.module */ 9161)).then((m) => m.DepositTopupPageModule),
    },
    {
        path: 'transaction-popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("src_app_pages_transaction-popup_transaction-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction-popup/transaction-popup.module */ 28886)).then((m) => m.TransactionPopupPageModule),
    },
    {
        path: 'operation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_operation_operation_page_ts"), __webpack_require__.e("src_app_pages_operation_operation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/operation/operation.module */ 74125)).then((m) => m.OperationPageModule),
    },
    {
        path: 'loan-payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("src_app_pages_loan-payment_loan-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/loan-payment/loan-payment.module */ 39576)).then((m) => m.LoanPaymentPageModule),
    },
    {
        path: 'forex-transaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_forex-transaction_forex-transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forex-transaction/forex-transaction.module */ 67890)).then((m) => m.ForexTransactionPageModule),
    },
    {
        path: 'currencyconverter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_currencyconverter_currencyconverter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/currencyconverter/currencyconverter.module */ 14750)).then((m) => m.CurrencyconverterPageModule),
    },
    {
        path: 'wallet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_wallet_wallet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/wallet/wallet.module */ 33632)).then((m) => m.WalletModule),
    }, {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/notification.module */ 89770)).then((m) => m.NotificationPageModule),
    }, {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/help/help.module */ 60998)).then((m) => m.HelpPageModule),
    },
    {
        path: 'cashdeposit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("src_app_pages_cashdeposit_cashdeposit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cashdeposit/cashdeposit.module */ 19706)).then((m) => m.CashdepositPageModule),
    },
    {
        path: 'cashwithdrawal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("src_app_pages_cashwithdrawal_cashwithdrawal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cashwithdrawal/cashwithdrawal.module */ 41587)).then((m) => m.CashwithdrawalPageModule),
    },
    {
        path: 'chequewithdrawal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("default-src_app_pages_operation_operation_page_ts"), __webpack_require__.e("src_app_pages_chequewithdrawal_chequewithdrawal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chequewithdrawal/chequewithdrawal.module */ 14314)).then((m) => m.ChequewithdrawalPageModule),
    },
    {
        path: 'chequedeposit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("src_app_pages_chequedeposit_chequedeposit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chequedeposit/chequedeposit.module */ 90427)).then((m) => m.ChequedepositPageModule),
    },
    {
        path: 'login-landing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-landing_login-landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-landing/login-landing.module */ 60676)).then(m => m.LoginLandingPageModule)
    },
    {
        path: 'daterange',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("src_app_pages_daterange_daterange_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/daterange/daterange.module */ 87349)).then(m => m.DaterangePageModule)
    },
    {
        path: 'appointment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("default-src_app_pages_appointment_appointment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/appointment/appointment.module */ 43817)).then(m => m.AppointmentPageModule)
    },
    {
        path: 'appointmentpopup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("default-src_app_pages_appointment_appointment_module_ts"), __webpack_require__.e("src_app_pages_appointmentpopup_appointmentpopup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/appointmentpopup/appointmentpopup.module */ 48198)).then(m => m.AppointmentpopupPageModule)
    },
    {
        path: 'mpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_mpin_mpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mpin/mpin.module */ 73777)).then(m => m.MpinPageModule)
    },
    {
        path: 'forgotmpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_forgotmpin_forgotmpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgotmpin/forgotmpin.module */ 92135)).then(m => m.ForgotmpinPageModule)
    },
    {
        path: 'setmpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_setmpin_setmpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/setmpin/setmpin.module */ 90933)).then(m => m.SetmpinPageModule)
    },
    {
        path: 'forget-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgett-password_forgett-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgett-password/forgett-password.module */ 4242)).then(m => m.ForgettPasswordPageModule)
    },
    {
        path: 'new-passwordchange',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("src_app_pages_new-passwordchange_new-passwordchange_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/new-passwordchange/new-passwordchange.module */ 31307)).then(m => m.NewPasswordchangePageModule)
    },
    {
        path: 'securitycenter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_securitycenter_securitycenter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/securitycenter/securitycenter.module */ 50936)).then(m => m.SecuritycenterPageModule)
    },
    {
        path: 'faceidrecognition',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faceidrecognition_faceidrecognition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faceidrecognition/faceidrecognition.module */ 4051)).then(m => m.FaceidrecognitionPageModule)
    },
    {
        path: 'fingerprint',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fingerprint_fingerprint_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fingerprint/fingerprint.module */ 82006)).then(m => m.FingerprintPageModule)
    },
    {
        path: 'mpinotpvalidate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_mpinotpvalidate_mpinotpvalidate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mpinotpvalidate/mpinotpvalidate.module */ 56166)).then(m => m.MpinotpvalidatePageModule)
    },
    {
        path: 'success-message',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("src_app_pages_success-message_success-message_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/success-message/success-message.module */ 81178)).then(m => m.SuccessMessagePageModule)
    },
    {
        path: 'unlockapp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_unlockapp_unlockapp_page_ts"), __webpack_require__.e("src_app_pages_unlockapp_unlockapp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/unlockapp/unlockapp.module */ 12811)).then(m => m.UnlockappPageModule)
    },
    {
        path: 'exchangerate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_exchangerate_exchangerate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exchangerate/exchangerate.module */ 37637)).then(m => m.ExchangeratePageModule)
    },
    {
        path: 'changempin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_changempin_changempin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/changempin/changempin.module */ 23040)).then(m => m.ChangempinPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 59162);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);








let AppComponent = class AppComponent {
    constructor(platform, statusBar, config, device) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.config = config;
        this.device = device;
        //Check Permission on App Start
        this.device.getPhonePermission();
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#3B59FD'); //
            const mode = this.config.get('mode');
            console.log("Mode", mode);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Config },
    { type: src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_3__.DeviceAccess }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 59162);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 62703);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 75626);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapmyindia-map-cordova-ionic-beta */ 64540);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);













// MAPMYINDIA IMPORT




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_14__.SwiperModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot({
                rippleEffect: true,
                mode: (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.isPlatform)("android") ? 'md' : 'ios'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule
        ],
        providers: [
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar,
            _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera,
            _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__.mmi,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 34910:
/*!***************************************************!*\
  !*** ./src/app/services/device-access.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceAccess": () => (/* binding */ DeviceAccess)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DeviceAccess = class DeviceAccess {
    constructor(androidPermissions) {
        this.androidPermissions = androidPermissions;
    }
    getPhonePermission() {
        this.androidPermissions
            .checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
            .then((res) => {
            if (res.hasPermission) {
                console.log('Has Permission Granted');
            }
            else {
                this.androidPermissions
                    .requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
                    .then((res) => {
                    console.log('Permission Granted', res);
                    // alert('Persmission Granted Please Restart App!');
                })
                    .catch((error) => {
                    console.log('Error in permission', error);
                    // alert('Error! ' + error);
                });
            }
        })
            .catch((error) => {
            console.log('Error in permission', error);
            // alert('Error! ' + error);
        });
    }
    getDeviceId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const info = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getId()).uuid;
            return info || '';
        });
    }
    ;
};
DeviceAccess.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__.AndroidPermissions }
];
DeviceAccess = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DeviceAccess);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    // ICUST_URL: 'http://localhost:1212', // phase2 for local testing
    // ICUST_URL: 'http://192.168.0.14:8081/Icust-Digital-Banking'
    BASE_URL: 'http://192.168.0.14:8081/Icust-Digital-Banking',
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-5b8a1541_js-node_modules_ionic_core_dist_esm_t-8d4d32",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-5b8a1541_js-node_modules_ionic_core_dist_esm_t-8d4d32",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host ::ng-deep .searchbar-input-container input {\n  background: none;\n  box-shadow: none;\n  padding-left: 10%;\n}\n:host ::ng-deep .searchbar-input-container ion-icon {\n  left: 0;\n}\n:host ::ng-deep ion-segment {\n  --background: white;\n  height: 100%;\n}\n:host ::ng-deep ion-segment-button {\n  padding: 4px 0;\n  margin: 0;\n  border-radius: 13px;\n  --background-checked: var(--ion-color-primary) !important;\n  --color-checked: white;\n  --indicator-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxPQUFBO0FDREo7QURNRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FDSkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcclxuICBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgaW9uLXNlZ21lbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlvbi1pY29uIHtcbiAgbGVmdDogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map