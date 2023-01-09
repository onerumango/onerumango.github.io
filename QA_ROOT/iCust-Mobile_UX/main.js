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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then((m) => m.LoginPageModule),
    },
    {
        path: 'otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_pages_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/otp/otp.module */ 17631)).then((m) => m.OtpPageModule),
    },
    {
        path: 'changepassword',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("src_app_pages_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/change-password/change-password.module */ 68292)).then((m) => m.ChangePasswordPageModule),
    },
    {
        path: 'internet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_no-internet_no-internet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/no-internet/no-internet.module */ 62692)).then((m) => m.NoInternetPageModule),
    },
    {
        path: 'mpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_mpin_mpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mpin/mpin.module */ 73777)).then(m => m.MpinPageModule)
    },
    {
        path: 'forgotmpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_forgotmpin_forgotmpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgotmpin/forgotmpin.module */ 92135)).then(m => m.ForgotmpinPageModule)
    },
    {
        path: 'setmpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_setmpin_setmpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/setmpin/setmpin.module */ 90933)).then(m => m.SetmpinPageModule)
    },
    {
        path: 'forget-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("src_app_pages_forgett-password_forgett-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgett-password/forgett-password.module */ 4242)).then(m => m.ForgettPasswordPageModule)
    },
    {
        path: 'new-passwordchange',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("src_app_pages_new-passwordchange_new-passwordchange_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/new-passwordchange/new-passwordchange.module */ 31307)).then(m => m.NewPasswordchangePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then((m) => m.SettingsPageModule),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then((m) => m.ProfilePageModule),
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faq/faq.module */ 87119)).then((m) => m.FaqPageModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then((m) => m.DashboardPageModule),
    },
    {
        path: 'transaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("src_app_pages_transaction_transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction/transaction.module */ 66924)).then((m) => m.TransactionPageModule),
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 36868)).then((m) => m.AccountPageModule),
    },
    {
        path: 'loginactivity',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_loginactivity_loginactivity_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/loginactivity/loginactivity.module */ 51278)).then((m) => m.LoginactivityPageModule),
    },
    {
        path: 'token-generation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_token-generation_token-generation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/token-generation/token-generation.module */ 79957)).then((m) => m.TokenGenerationPageModule),
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("src_app_pages_transaction-popup_transaction-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction-popup/transaction-popup.module */ 28886)).then((m) => m.TransactionPopupPageModule),
    },
    {
        path: 'operation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_operation_operation_page_ts"), __webpack_require__.e("src_app_pages_operation_operation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/operation/operation.module */ 74125)).then((m) => m.OperationPageModule),
    },
    {
        path: 'loan-payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_loan-payment_loan-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/loan-payment/loan-payment.module */ 39576)).then((m) => m.LoanPaymentPageModule),
    },
    {
        path: 'forex-transaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_forex-transaction_forex-transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forex-transaction/forex-transaction.module */ 67890)).then((m) => m.ForexTransactionPageModule),
    },
    {
        path: 'currencyconverter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_currencyconverter_currencyconverter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/currencyconverter/currencyconverter.module */ 14750)).then((m) => m.CurrencyconverterPageModule),
    },
    {
        path: 'wallet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_wallet_wallet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/wallet/wallet.module */ 33632)).then((m) => m.WalletModule),
    }, {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/notification.module */ 89770)).then((m) => m.NotificationPageModule),
    }, {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/help/help.module */ 60998)).then((m) => m.HelpPageModule),
    },
    {
        path: 'cashdeposit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("src_app_pages_cashdeposit_cashdeposit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cashdeposit/cashdeposit.module */ 19706)).then((m) => m.CashdepositPageModule),
    },
    {
        path: 'cashwithdrawal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("src_app_pages_cashwithdrawal_cashwithdrawal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cashwithdrawal/cashwithdrawal.module */ 41587)).then((m) => m.CashwithdrawalPageModule),
    },
    {
        path: 'chequewithdrawal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("default-src_app_pages_operation_operation_page_ts"), __webpack_require__.e("src_app_pages_chequewithdrawal_chequewithdrawal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chequewithdrawal/chequewithdrawal.module */ 14314)).then((m) => m.ChequewithdrawalPageModule),
    },
    {
        path: 'chequedeposit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("src_app_pages_chequedeposit_chequedeposit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chequedeposit/chequedeposit.module */ 90427)).then((m) => m.ChequedepositPageModule),
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("default-src_app_pages_appointment_appointment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/appointment/appointment.module */ 43817)).then(m => m.AppointmentPageModule)
    },
    {
        path: 'appointmentpopup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("default-src_app_pages_appointment_appointment_module_ts"), __webpack_require__.e("src_app_pages_appointmentpopup_appointmentpopup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/appointmentpopup/appointmentpopup.module */ 48198)).then(m => m.AppointmentpopupPageModule)
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_mpinotpvalidate_mpinotpvalidate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mpinotpvalidate/mpinotpvalidate.module */ 56166)).then(m => m.MpinotpvalidatePageModule)
    },
    {
        path: 'success-message',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_success-message_success-message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/success-message/success-message.module */ 81178)).then(m => m.SuccessMessagePageModule)
    },
    {
        path: 'unlockapp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_unlockapp_unlockapp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/unlockapp/unlockapp.module */ 12811)).then(m => m.UnlockappPageModule)
    },
    {
        path: 'exchangerate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_exchangerate_exchangerate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exchangerate/exchangerate.module */ 64966)).then(m => m.ExchangeratePageModule)
    },
    {
        path: 'changempin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_changempin_changempin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/changempin/changempin.module */ 23040)).then(m => m.ChangempinPageModule)
    },
    {
        path: 'feedback',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feedback_feedback_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/feedback/feedback.module */ 97792)).then(m => m.FeedbackPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules, useHash: true }),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);
/* harmony import */ var _pages_unlockapp_unlockapp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/unlockapp/unlockapp.page */ 80581);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/data.service */ 52468);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _services_back_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/back-button.service */ 97219);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 29361);

















let AppComponent = class AppComponent {
    constructor(platform, statusBar, api, config, device, dataService, modalCtrl, router, alert, sanitizer, menu, network, cdr, backButtonService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.api = api;
        this.config = config;
        this.device = device;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.alert = alert;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.network = network;
        this.cdr = cdr;
        this.backButtonService = backButtonService;
        this.isFaceId = false;
        this.isFingerPrint = false;
        this.i = 0;
        this.appIsOnline$ = undefined;
        //Check Permission on App Start
        this.device.getPhonePermission();
        this.initializeApp();
        this.platform.resume.subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Resume event detected');
            localStorage.setItem('isShowed', "yes");
        }));
        this.platform.pause.subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Pause event detected');
            localStorage.setItem('isShowed', "no");
        }));
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        this.currentUser = this.dataService.getCurrentUser();
        this.checkInternet().subscribe(isOnline => {
            this.checkInterent = isOnline;
            console.log('interent', this.checkInterent);
            if (this.checkInterent == true) {
                console.log('Internet is working.');
            }
            else {
                console.log('Internet is slow or not working.');
                this.router.navigate(['internet'], { replaceUrl: true });
            }
            this.cdr.markForCheck();
        });
        if (this.platform.is("cordova")) {
            if (this.currentUser !== null) {
                this.getProfilePicture((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId);
                if ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.faceLoginEnable) {
                    this.router.navigate(['login-landing'], { replaceUrl: true });
                    // direct faceid open
                }
                else if ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.fingerprintLoginEnable) {
                    this.router.navigate(['login-landing'], { replaceUrl: true });
                    // direct fingerprint tray open
                }
                else if ((_d = this.currentUser) === null || _d === void 0 ? void 0 : _d.mpinActive) {
                    // direct mpin login
                    this.router.navigate(['login-landing'], { replaceUrl: true });
                }
                else {
                    this.initUserContext();
                    this.router.navigate(['login-landing'], { replaceUrl: true });
                }
            }
            else {
                this.router.navigate(['login'], { replaceUrl: true });
            }
        }
        else {
            if (this.currentUser !== null) {
                this.initUserContext();
                this.getProfilePicture((_e = this.currentUser) === null || _e === void 0 ? void 0 : _e.customerId);
                this.router.navigate(['dashboard'], { replaceUrl: true });
            }
            else {
                this.router.navigate(['home'], { replaceUrl: true });
            }
        }
        this.dataService.getAvatarUrl.subscribe((data) => {
            if (data != null) {
                this.avatar = data;
                this.cdr.markForCheck();
            }
        });
        this.dataService.share.subscribe((data) => {
            if (data) {
                this.getCurrentUser();
                this.cdr.markForCheck();
            }
        });
        this.cdr.markForCheck();
    }
    checkInternet() {
        if (!window || !navigator || !('onLine' in navigator))
            return;
        this.appIsOnline$ = rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable.create(observer => {
            observer.next(true);
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)(true));
        if (this.platform.is('cordova')) {
            // on Device - when platform is cordova
            this.appIsOnline$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.network.onConnect().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)(true)), this.network.onDisconnect().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)(false)));
        }
        else {
            // on Browser - when platform is Browser
            this.appIsOnline$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(navigator.onLine), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)(false)));
        }
        return this.appIsOnline$;
    }
    initUserContext() {
        setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.getCurrentUser();
        }), 1000);
    }
    getCurrentUser() {
        this.currentUser = this.dataService.getCurrentUser();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#3B59FD'); //
            this.backButtonService.init();
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_unlockapp_unlockapp_page__WEBPACK_IMPORTED_MODULE_3__.UnlockappPage,
            });
            yield modal.present();
        });
    }
    toggle() {
        this.menu.toggle('slidingMenu');
    }
    getProfilePicture(customerId) {
        const contentType = 'image/png';
        this.api.getProfileDetails(customerId).subscribe((data) => {
            if ((data === null || data === void 0 ? void 0 : data.profileImage) != null) {
                let objectURL = data.profileImage;
                this.avatar =
                    data.profileImage != 'not_available'
                        ? this.sanitizer.bypassSecurityTrustUrl(objectURL)
                        : undefined;
            }
            else {
                this.avatar = null;
            }
            this.cdr.markForCheck();
        }, (error) => {
            console.log(error);
        });
    }
    goToExchangerate() {
        this.menu.close();
        this.router.navigate(['exchangerate']);
    }
    goToTransaction() {
        this.menu.close();
        this.router.navigate(['transaction']);
    }
    goToAppointment() {
        this.menu.close();
        this.router.navigate(['appointment']);
    }
    goToNotifications() {
        this.menu.close();
        this.router.navigate(['notification']);
    }
    logoutApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let alret = yield this.alert.create({
                header: "Logout",
                subHeader: "Are you sure want to Log out?",
                cssClass: 'logout-alert',
                buttons: [
                    {
                        text: "Logout",
                        cssClass: 'alert-button-confirm',
                        handler: () => {
                            this.goToFeedback();
                            this.menu.close();
                        }
                    },
                    {
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                        text: "Cancel"
                    }
                ],
            });
            yield alret.present();
        });
    }
    goToFeedback() {
        this.router.navigate(['feedback'], { replaceUrl: true });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__.StatusBar },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Config },
    { type: src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_2__.DeviceAccess },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.MenuController },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__.Network },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef },
    { type: _services_back_button_service__WEBPACK_IMPORTED_MODULE_7__.BackButtonService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapmyindia-map-cordova-ionic-beta */ 64540);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _directives_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/directive.module */ 27589);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 82475);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ 83181);













// MAPMYINDIA IMPORT











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_21__.SwiperModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicModule.forRoot({
                rippleEffect: true,
                mode: 'md'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _directives_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera,
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File,
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__.FilePath,
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__.Crop,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions,
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_9__.FingerprintAIO,
            mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__.mmi,
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__.Network,
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_14__.UniqueDeviceID,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 95701:
/*!****************************************************!*\
  !*** ./src/app/directives/auto-focus.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocusDirective": () => (/* binding */ AutoFocusDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/input */ 43365);



let AutoFocusDirective = class AutoFocusDirective {
    constructor(matInput) {
        this.matInput = matInput;
    }
    ngOnInit() {
        setTimeout(() => {
            this.matInput.focus();
        }, 100);
    }
};
AutoFocusDirective.ctorParameters = () => [
    { type: _angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInput }
];
AutoFocusDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
        selector: '[appAutoFocus]'
    })
], AutoFocusDirective);



/***/ }),

/***/ 27589:
/*!************************************************!*\
  !*** ./src/app/directives/directive.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveModule": () => (/* binding */ DirectiveModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _auto_focus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-focus.directive */ 95701);




const directives = [
    _auto_focus_directive__WEBPACK_IMPORTED_MODULE_0__.AutoFocusDirective
];
let DirectiveModule = class DirectiveModule {
};
DirectiveModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [directives],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: directives
    })
], DirectiveModule);



/***/ }),

/***/ 80581:
/*!***************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockappPage": () => (/* binding */ UnlockappPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _unlockapp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unlockapp.page.html?ngResource */ 23685);
/* harmony import */ var _unlockapp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unlockapp.page.scss?ngResource */ 97363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let UnlockappPage = class UnlockappPage {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    confirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
            this.router.navigateByUrl('/securitycenter');
        });
    }
};
UnlockappPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UnlockappPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-unlockapp',
        template: _unlockapp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unlockapp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnlockappPage);



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showMessage/show-message.service */ 31199);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);







// export const API_URL1 = 'http://localhost:1212';
const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BASE_URL;
let ApiService = class ApiService {
    constructor(http, showMessageService) {
        this.http = http;
        this.showMessageService = showMessageService;
        this.shareOtp = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.getOtpToken = this.shareOtp.asObservable();
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.getNavParam = this.paramSource.asObservable();
        //Error Handler
        this.errorHandler = (errorResp) => {
            console.error('Error : ' + errorResp.message);
            console.error('status : ' + errorResp.status);
            this.showMessageService.errorMessage(errorResp.status, errorResp);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorResp.message);
        };
        this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            index: '',
        });
        this.firstTimeLogin = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            firstTimeLogin: '',
        });
    }
    sendNavParam(params) {
        this.paramSource.next(params);
    }
    sendOtp(otp) {
        this.shareOtp.next(otp);
    }
    setIndex(index) {
        this.Index.next(index);
    }
    getIndex() {
        return this.Index.asObservable();
    }
    getOtp(data) {
        return this.http.post(`${API_URL}/rest/otp/generateOtp`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    verifyOtp(data) {
        return this.http.put(`${API_URL}/rest/otp/validateOtp`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    cashWithdrawalSave(data) {
        console.log("enter inside api");
        return this.http.post(`${API_URL}/cash-withdrawal-service`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    cashDepositSave(data) {
        console.log("cashDepositSave----------", data);
        return this.http.post(`${API_URL}/cash-deposit/api`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    chequeWithdrawalSave(data) {
        console.log("enter inside api");
        return this.http.post(`${API_URL}/cheque-withdrawal`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    chequeDepositSave(data) {
        return this.http.post(`${API_URL}/cheque-deposit/api`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    getBranchByCity(city) {
        return this.http.get(`${API_URL}/branch/fetchbranch/${city}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    custpomerDetails(phoneNo) {
        return this.http.get(`${API_URL}/customerdata/getPhoneNo/${phoneNo}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    getCustomerAccounts(phoneNo) {
        return this.http.get(`${API_URL}/customerdata/getPhoneNo/${phoneNo}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    getProfileDetails(customerId) {
        return this.http.get(`${API_URL}/customerdata/getProfileDetails?customerId=${customerId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    accountDropDown(custId) {
        return this.http.get(`${API_URL}/accountdata/account/${custId}`);
    }
    accountBalance(accId) {
        return this.http.get(`${API_URL}/accountdata/accountBalance/${accId}`);
    }
    generateQRCode(data) {
        return this.http.post(`${API_URL}/token/api/qr-code-generator`, data, { responseType: 'blob' });
        // return this.http.get<any>(`${API_URL1}/token/api/fetch-qr-code/${data}`).pipe(catchError(this.errorHandler));
    }
    fetchWalletInfo(customerId) {
        return this.http.get(`${API_URL}/cash-deposit/api/fetchWalletInfo?customerId=${customerId}`);
    }
    appointmentBooking(data) {
        return this.http.put(`${API_URL}/cash-deposit/api/updateScheduledAppointment`, data);
    }
    // updateAppointmentBooking(data: any) {
    //   return this.http.put(`${API_URL}/cash-deposit/api/updateScheduledAppointment`, data,);
    // }
    updateAddToWallet(model) {
        return this.http.put(`${API_URL}/cash-deposit/api/updateAddToWallet`, model);
    }
    saveAccount(data) {
        return this.http.post(`${API_URL}/customerdata/upsertCustomerDetails`, data);
    }
    shareTransactionDetails(data) {
        return this.http.post(`${API_URL}/cash-deposit/api/shareAppointmentInfo`, data);
    }
    getLoanInfo(phoneNumber) {
        return this.http.get(`${API_URL}/customerdata/getPhoneNo/${phoneNumber}`);
    }
    getCurrencyValues() {
        return this.http.get(`${API_URL}/currency`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    gettingAvailableSlots(selectedDate) {
        console.log(selectedDate);
        return this.http.get(`${API_URL}/rest/data/customer/availableslots?scheduledDate=${selectedDate}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    gettingBookedSlots(selectedDate) {
        console.log(selectedDate);
        return this.http.get(`${API_URL}/cash-deposit/api/fetchBookedSlots?transactionDate=${selectedDate}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    getDashboardDataNew(customerId) {
        return this.http.get(`${API_URL}/teller-service/api/mobile/${customerId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    fetchAppointmentInfo(filterOption, formattedFromDate, formattedToDate, customerId, accountNumber) {
        console.log(formattedFromDate);
        var opt;
        if ((customerId != null || customerId != undefined || customerId != '') && ((formattedFromDate == null && formattedToDate == null) && filterOption == null)) {
            console.log("append");
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                .append('customerId', customerId);
        }
        else if (((formattedFromDate != null || formattedFromDate != '') && (formattedToDate != null || formattedToDate != ''))
            && customerId != null && filterOption == null) {
            console.log("append1");
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                .append('customerId', customerId)
                .append('fromDate', formattedFromDate)
                .append('toDate', formattedToDate);
        }
        else if ((customerId != null && filterOption != null && formattedFromDate == null && formattedToDate == null)) {
            console.log("append2");
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                .append('customerId', customerId)
                .append('filterOption', filterOption);
        }
        else {
            console.log("append3");
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                .append('customerId', customerId)
                .append('fromDate', formattedFromDate)
                .append('toDate', formattedToDate)
                .append('filterOption', filterOption);
        }
        console.log(opt);
        return this.http.get(`${API_URL}/cash-deposit/api/fetchAppointmentInfo?${opt}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
        // return this.http.get<any>(`${API_URL}/cash-deposit/api/fetchAppointmentInfo?filterOption=${filterOption}&fromDate=${fromDate}&toDate=${toDate}&customerId=${customerId}&accountNumber=${accountNumber}`).pipe(catchError(this.errorHandler));
    }
    getTransactionByAccountId(accountId, page, formattedFromDate, formattedToDate, size) {
        var params;
        if ((accountId != null || accountId != '' || accountId.length != 0) && page == 0) {
            console.log('only accountId');
            if (formattedFromDate != null && formattedToDate != null) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                    .append('accountNumber', accountId)
                    .append('fromDate', formattedFromDate)
                    .append('toDate', formattedToDate);
            }
            else {
                if (size > 20) {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                        .append('accountNumber', accountId)
                        .append('size', size);
                }
                else {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                        .append('accountNumber', accountId);
                }
            }
        }
        else {
            console.log('accountId and page');
            if (formattedFromDate != null && formattedToDate != null) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                    .append('accountNumber', accountId)
                    .append('page', page)
                    .append('fromDate', formattedFromDate)
                    .append('toDate', formattedToDate);
            }
            else {
                if (size > 20) {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                        .append('accountNumber', accountId)
                        .append('page', page)
                        .append('size', size);
                }
                else {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
                        .append('accountNumber', accountId)
                        .append('page', page);
                }
            }
        }
        return this.http.get(`${API_URL}/cash-deposit/api/fetchTransaction?${params}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    download(model) {
        return this.http.post(`${API_URL}/cash-deposit/api/downloadAppointmentInfo`, model, {
            responseType: 'blob'
        });
    }
    shareStatementEmail(model) {
        return this.http.post(`${API_URL}/cash-deposit/api/shareInfoThroughMail`, model);
    }
    getByTransactionId(transId) {
        return this.http.get(`${API_URL}/cash-deposit/api/fetchByTransId/${transId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    uploadProfilePicture(data) {
        return this.http.post(`${API_URL}/rest/upload/uploadDoc`, data, {
            reportProgress: true,
            observe: "events"
        });
    }
    getNumberOfCrowd(tokenBranch) {
        return this.http.get(`${API_URL}/token/api/fetchTokenCountByBranch?tokenBranch=${tokenBranch}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    setFirstTimeLogin(firstTimeLogin) {
        this.Index.next(firstTimeLogin);
    }
    getFirstTimeLogin() {
        return this.firstTimeLogin.asObservable();
    }
    validatePassword(phoneNumber, password) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
            .append('phoneNumber', phoneNumber)
            .append('password', password);
        return this.http.get(`${API_URL}/customerdata/validateCutomerPassword?${params}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    setMpin(data) {
        return this.http.post(`${API_URL}/customerLogin/generateMpin`, data);
    }
    changeMpin(data) {
        return this.http.post(`${API_URL}/customerLogin/changeMpin`, data);
    }
    authenticateMpin(data) {
        return this.http.post(`${API_URL}/customerLogin/authenticate`, data);
    }
    updateCustomerPassword(model) {
        return this.http.put(`${API_URL}/customerdata/updateCustomerPassword`, model);
    }
    getExchangeRate(country1 = 'INR') {
        let url = 'https://api.exchangerate.host/latest?base=' + country1;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    registerFaceIdORFingerPrint(bioAuthModel) {
        return this.http.post(`${API_URL}/customerdata/updateLoginStatusEnable`, bioAuthModel).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    getChargeDetails(accId) {
        return this.http.get(`${API_URL}/accountdata/getChargeDetails?accountId=${accId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    getCurrencyExRate(baseCurr, selectedCurr) {
        return this.http.get(`${API_URL}/currency-api/fetchExchangeRateForCurrency?currency1=${selectedCurr}&currency2=${baseCurr}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    storeFeedbackInfo(data) {
        return this.http.post(`${API_URL}/customerdata/storeFeedbackInfo`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    uploadProfileImage(data) {
        return this.http.post(`${API_URL}/rest/upload/uploadDoc`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    deleteProfileImage(data) {
        return this.http.delete(`${API_URL}/customerdata/deleteCustDocument?customerId=${data.custId}&id=${data.id}&documentName=Profile&documentType=1`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_0__.ShowMessageService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 97219:
/*!*************************************************!*\
  !*** ./src/app/services/back-button.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonService": () => (/* binding */ BackButtonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);




let BackButtonService = class BackButtonService {
    constructor(platform, router, navControlelr, alertController, toastController) {
        this.platform = platform;
        this.router = router;
        this.navControlelr = navControlelr;
        this.alertController = alertController;
        this.toastController = toastController;
        this.lastTimeBackButtonWasPressed = 0;
        this.timePeriodToAction = 2000;
    }
    init() {
        this.platform.backButton.subscribeWithPriority(10, () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const currentUrl = this.router.url;
            this.withAlert("Do you really want to exit?", () => {
                navigator['app'].exitApp();
            });
            // if (currentUrl === "/dashboard") {
            // this.withAlert("Do you really want to exit?", () => {
            //   navigator['app'].exitApp();
            // });
            // } else {
            //   this.navControlelr.back();
            // }
        }));
    }
    withDoublePress(message, action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const currentTime = new Date().getTime();
            if (currentTime - this.lastTimeBackButtonWasPressed < this.timePeriodToAction) {
                action();
            }
            else {
                const toast = yield this.toastController.create({
                    message: message,
                    duration: this.timePeriodToAction
                });
                yield toast.present();
                this.lastTimeBackButtonWasPressed = currentTime;
            }
        });
    }
    withAlert(message, action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: message,
                buttons: [{
                        text: "Cancel",
                        role: "cancel"
                    },
                    {
                        text: "OK",
                        handler: action
                    }]
            });
            yield alert.present();
        });
    }
};
BackButtonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
BackButtonService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BackButtonService);



/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let DataService = class DataService {
    constructor() {
        this.sendTransactionId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.getTransactionId = this.sendTransactionId.asObservable();
        this.sendAccountInfo = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.getAccountInfo = this.sendAccountInfo.asObservable();
        this.sendAvatarUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.getAvatarUrl = this.sendAvatarUrl.asObservable();
        this.sendAppointmentId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.getAppointmentId = this.sendAppointmentId.asObservable();
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.share = this.isLoggedIn.asObservable();
        this.isAppOpened = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.shareAppState = this.isAppOpened.asObservable();
    }
    shareTransactionId(params) {
        this.sendTransactionId.next(params);
    }
    shareAppointmentId(params) {
        this.sendAppointmentId.next(params);
    }
    shareAccountInfo(params) {
        this.sendAccountInfo.next(params);
    }
    shareAvatarUrl(avatarInfo) {
        this.sendAvatarUrl.next(avatarInfo);
    }
    getCurrentUser() {
        let currentUser = JSON.parse(localStorage.getItem("customer_details"));
        if (currentUser != null) {
            return currentUser;
        }
        else {
            return null;
        }
    }
    getRandomColor(idx) {
        return '#456EFE';
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ 83181);




let DeviceAccess = class DeviceAccess {
    constructor(androidPermissions, uniqueDeviceID) {
        this.androidPermissions = androidPermissions;
        this.uniqueDeviceID = uniqueDeviceID;
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
        this.uniqueDeviceID.get()
            .then((uuid) => {
            const deviceUUID = uuid;
            return deviceUUID || '';
        })
            .catch((error) => {
            return '';
        });
    }
    ;
};
DeviceAccess.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__.AndroidPermissions },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_1__.UniqueDeviceID }
];
DeviceAccess = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DeviceAccess);



/***/ }),

/***/ 31199:
/*!**************************************************************!*\
  !*** ./src/app/services/showMessage/show-message.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowMessageService": () => (/* binding */ ShowMessageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);




let ShowMessageService = class ShowMessageService {
    constructor(toastController, alertController, router) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.errorData = [
            { "code": 400, "message": "Bad Request" },
            { "code": 401, "message": "Unauthorized" },
            { "code": 403, "message": "Forbidden" },
            { "code": 404, "message": "Not Found" },
            { "code": 500, "message": "Internal Server Error" },
            { "code": 502, "message": "Bad Gateway" },
            { "code": 503, "message": "Service Unavailable" },
            { "code": 504, "message": "Gateway Timeout" },
            { "code": 0, "message": "Error" }
        ];
    }
    errorMessage(status, errorResp) {
        var errCode = status.toString();
        var errDesc = errorResp.error.message;
        if (errDesc === null || errDesc === undefined) {
            let i = 0;
            while (i < this.errorData.length) {
                if (this.errorData[i].code === status) {
                    errDesc = this.errorData[i].message;
                }
                i++;
            }
        }
        if (errDesc) {
            this.noNetworkAlert();
        }
    }
    noNetworkAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alert != null) {
                this.alert.dismiss();
            }
            this.alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: "There seems to be a low network coverage area. Please try again later.",
                cssClass: 'logout-alert',
                buttons: [
                    {
                        role: 'Done',
                        cssClass: 'alert-done',
                        text: "Cancel"
                    }
                ],
            });
            yield this.alert.present();
            const { role } = yield this.alert.onDidDismiss();
            if (role == 'Done') {
                this.router.navigate(['login-landing'], { replaceUrl: true });
            }
        });
    }
    presentToast(msg, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 800,
                position: position || 'bottom'
            });
            toast.present();
        });
    }
};
ShowMessageService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ShowMessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ShowMessageService);



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
    BASE_URL: 'http://192.168.0.14:9003/Icust-Digital-Banking',
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
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
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
		"common",
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
module.exports = "ion-content {\n  --ion-background-color: #F4F4F4;\n}\n\nion-avatar {\n  width: 60px !important;\n  height: 60px !important;\n}\n\n.bg-content {\n  background: #F4F4F4;\n}\n\n:host ::ng-deep .searchbar-input-container input {\n  background: none;\n  box-shadow: none;\n  padding-left: 10%;\n}\n\n:host ::ng-deep .searchbar-input-container ion-icon {\n  left: 0;\n}\n\n.version-color {\n  color: #102245;\n  font-size: 12px;\n  font-family: inherit;\n}\n\n:host ::ng-deep ion-segment {\n  --background: white;\n  height: 100%;\n}\n\n:host ::ng-deep ion-segment-button {\n  padding: 4px 0;\n  margin: 0;\n  border-radius: 13px;\n  --background-checked: var(--ion-color-primary) !important;\n  --color-checked: white;\n  --indicator-color: transparent !important;\n}\n\n.profile-pic {\n  border: 5px solid #DEF0FF;\n}\n\n.profile-image {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  height: 4.5rem;\n  width: 4.5rem;\n  border: 5px solid #DEF0FF;\n}\n\n.head-block {\n  height: 100px !important;\n  top: 25px !important;\n}\n\n.headerbar {\n  background: #ffffff;\n  box-shadow: 0 5pt 5pt -2pt rgba(69, 110, 254, 0.1490196078) !important;\n}\n\nion-menu::part(container) {\n  width: 90%;\n  background: #F4F4F4;\n}\n\n.flex-container {\n  display: flex;\n  margin-bottom: 30px;\n  padding-left: 18px;\n}\n\n.username {\n  margin-top: 5px;\n  margin-left: 30px;\n  font-weight: 800;\n  color: #102245;\n}\n\n.mf-30 {\n  margin-left: 30px;\n}\n\n.label {\n  padding-left: 25px;\n  color: #102245;\n}\n\n.mt-18 {\n  margin-top: 18px;\n}\n\n.menu-list {\n  box-shadow: #C9C9C9;\n}\n\n.Item_title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #102245;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxPQUFBO0FBREo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBS0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7QUFISjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFKRjs7QUFPQTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0Esc0VBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xyXG4gIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4udmVyc2lvbi1jb2xvcntcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgaW9uLXNlZ21lbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1waWMge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNERUYwRkY7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNC41cmVtO1xyXG4gIHdpZHRoOiA0LjVyZW07XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI0RFRjBGRjtcclxufVxyXG5cclxuLmhlYWQtYmxvY2sge1xyXG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICB0b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlcmJhciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjNDU2RUZFMjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnU6OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbn1cclxuXHJcbi5tZi0zMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG59XHJcblxyXG4ubXQtMTgge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5tZW51LWxpc3Qge1xyXG4gIGJveC1zaGFkb3c6ICNDOUM5Qzk7XHJcbn1cclxuXHJcbi5JdGVtX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxufSJdfQ== */";

/***/ }),

/***/ 97363:
/*!****************************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".mainDiv {\n  margin-top: 30px;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.selectAccId {\n  width: 100%;\n}\n\n.unlockImg {\n  margin-left: 40%;\n}\n\n.closeIcon {\n  margin-left: 90%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n\n.btnclass {\n  font-size: 12px;\n  width: 140px;\n  height: 44px;\n  margin-left: 15px;\n}\n\n.dateRange {\n  margin-left: 10px;\n}\n\n.dateInput {\n  border: none;\n  width: 350px;\n}\n\n:host(.ion-focused) .item-native {\n  background: none;\n  opacity: var(--background-focused-opacity);\n}\n\n.id-text {\n  margin-left: 20%;\n}\n\n.otp-text {\n  margin-left: 7%;\n}\n\n.inputCardButton {\n  padding-left: 12%;\n  padding-right: 5%;\n}\n\n.inputCardButton ion-button {\n  width: 90%;\n  height: 45px;\n  --background: var(--primary-color);\n}\n\nion-label {\n  color: darkblue;\n  font-size: 20px;\n  margin-left: 20px;\n}\n\nion-row {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubG9ja2FwcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUdBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFPQTtFQUNJLFdBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU1JO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUpSOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7QUFMSiIsImZpbGUiOiJ1bmxvY2thcHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweFxyXG59XHJcblxyXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAvLyAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICMzNDc3QzY7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDoyNHB0O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OjRwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0QWNjSWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51bmxvY2tJbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG5cclxuLmNsb3NlSWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUlO1xyXG59XHJcblxyXG4uYnRuY2xhc3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5kYXRlUmFuZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXRlSW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG46aG9zdCguaW9uLWZvY3VzZWQpIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3BhY2l0eTogdmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpO1xyXG59XHJcblxyXG4uaWQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4ub3RwLXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkQnV0dG9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHhcclxufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" menuId=\"slidingMenu\" swipe-gesture=\"false\">\r\n      <ion-header class=\"headerbar\">\r\n        <ion-toolbar class=\"head-block\">\r\n          <ion-item lines=\"none\">\r\n            <ng-container *ngIf=\"avatar == null || avatar == undefined; else showAvatar\">\r\n              <div class=\"profile-image mx-2\" [style.background]=\"dataService.getRandomColor(i+3)\">\r\n                {{currentUser?.firstName | uppercase | slice:0:1}}{{currentUser?.lastName\r\n                          | uppercase | slice:0:1}}\r\n              </div>\r\n            </ng-container>\r\n            <ng-template #showAvatar>\r\n              <ion-avatar slot=\"start\">\r\n                <img [src]=\"avatar\" alt=\"profile\" class=\"profile-pic\"/>\r\n              </ion-avatar>\r\n            </ng-template>\r\n            <ion-label>\r\n             <h2>{{currentUser?.firstName}}</h2>\r\n             <p><small>{{currentUser?.primaryEmailAdress}}</small></p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list lines=\"none\" class=\"my-3\">\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToTransaction()\">\r\n            <img src=\"assets/images/transaction.svg\" alt=\"MyTransaction\">\r\n            <ion-label class=\"label\">My Transaction<br>\r\n              <small class=\"text-muted\">Quick Modify For Your Appointment</small>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToAppointment()\">\r\n            <img src=\"assets/images/appointment.svg\" alt=\"appointmenthistory\">\r\n            <ion-label class=\"label\">Appointment History <br>\r\n              <small class=\"text-muted\">Overall activity</small>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToExchangerate()\">\r\n            <img src=\"assets/images/exchange-main.svg\" alt=\"foreignexchange\">\r\n            <ion-label class=\"label\">Foreign exchange <br>\r\n              <small class=\"text-muted\">Exchange rate</small>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToNotifications()\">\r\n            <img src=\"assets/images/notification.svg\" alt=\"notification\">\r\n            <ion-label class=\"label\">Notifications <br>\r\n              <small class=\"text-muted\">Change your notification settings</small>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"logoutApp()\">\r\n            <img src=\"assets/images/logout.svg\" alt=\"logout\">\r\n            <ion-label class=\"label\">Logout <br>\r\n              <small class=\"text-muted\">Logout your account</small>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n      </ion-content>\r\n      <ion-footer class=\"ion-padding ion-no-border bg-content\">\r\n          <h6 class=\"app-font version-color\">Ver 0.0.12</h6>\r\n          <p class=\"app-font version-color\">Build 12</p>\r\n      </ion-footer>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";

/***/ }),

/***/ 23685:
/*!****************************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-modal id=\"example-modal\">\r\n  <div class=\"mainDiv\">\r\n    <div>\r\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"next()\" class=\"closeIcon\"></ion-icon>\r\n    </div>\r\n    <div>\r\n      <div class=\"unlockImg\">\r\n        <img src=\"assets/images/unlockId.png\"></div>\r\n      <div>\r\n\r\n      </div>\r\n\r\n      <div>\r\n        <ion-text>\r\n          <h5 class=\"id-text\">Unlock Demobank app</h5>\r\n          <p class=\"otp-text\">Confirm your Fingerprint, Face ID & mPIN\r\n            <span style=\"margin-left:30%\">to quickly Sign in</span></p>\r\n          <!-- <h6>{{customerPhonenum}}</h6> -->\r\n        </ion-text>\r\n      </div>\r\n      <div class=\"inputCardButton\">\r\n        <ion-button expand=\"block\" shape=\"round\" (click)=\"confirm()\">Confirm</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-modal>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map