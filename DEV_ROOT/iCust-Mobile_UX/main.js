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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/auth.guard */ 55826);




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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then((m) => m.LoginPageModule),
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_mpin_mpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mpin/mpin.module */ 73777)).then((m) => m.MpinPageModule),
    },
    {
        path: 'forgotmpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_forgotmpin_forgotmpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgotmpin/forgotmpin.module */ 92135)).then((m) => m.ForgotmpinPageModule),
    },
    {
        path: 'setmpin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_setmpin_setmpin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/setmpin/setmpin.module */ 90933)).then((m) => m.SetmpinPageModule),
    },
    {
        path: 'forget-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_pages_login_login_page_ts"), __webpack_require__.e("src_app_pages_forgett-password_forgett-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgett-password/forgett-password.module */ 4242)).then((m) => m.ForgettPasswordPageModule),
    },
    {
        path: 'new-passwordchange',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("src_app_pages_new-passwordchange_new-passwordchange_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/new-passwordchange/new-passwordchange.module */ 31307)).then((m) => m.NewPasswordchangePageModule),
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then((m) => m.SettingsPageModule),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then((m) => m.ProfilePageModule),
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faq/faq.module */ 87119)).then((m) => m.FaqPageModule),
    },
    {
        path: 'dashboard',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then((m) => m.DashboardPageModule),
    },
    {
        path: 'transaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_loading_service_ts-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("src_app_pages_transaction_transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction/transaction.module */ 66924)).then((m) => m.TransactionPageModule),
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 36868)).then((m) => m.AccountPageModule),
    },
    {
        path: 'loginactivity',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_loginactivity_loginactivity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/loginactivity/loginactivity.module */ 51278)).then((m) => m.LoginactivityPageModule),
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("src_app_pages_transaction-popup_transaction-popup_module_ts-src_app_services_toast_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction-popup/transaction-popup.module */ 28886)).then((m) => m.TransactionPopupPageModule),
    },
    {
        path: 'operation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_operation_operation_page_ts"), __webpack_require__.e("src_app_pages_operation_operation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/operation/operation.module */ 74125)).then((m) => m.OperationPageModule),
    },
    {
        path: 'currencyconverter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_currencyconverter_currencyconverter_page_ts"), __webpack_require__.e("src_app_pages_currencyconverter_currencyconverter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/currencyconverter/currencyconverter.module */ 14750)).then((m) => m.CurrencyconverterPageModule),
    },
    {
        path: 'wallet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts"), __webpack_require__.e("src_app_pages_wallet_wallet_module_ts-src_app_services_toast_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/wallet/wallet.module */ 33632)).then((m) => m.WalletModule),
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/notification.module */ 89770)).then((m) => m.NotificationPageModule),
    },
    {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/help/help.module */ 60998)).then((m) => m.HelpPageModule),
    },
    {
        path: 'login-landing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-landing_login-landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-landing/login-landing.module */ 60676)).then((m) => m.LoginLandingPageModule),
    },
    {
        path: 'daterange',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("src_app_pages_daterange_daterange_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/daterange/daterange.module */ 87349)).then((m) => m.DaterangePageModule),
    },
    {
        path: 'appointment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_loading_service_ts-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("default-src_app_pages_appointment_appointment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/appointment/appointment.module */ 43817)).then((m) => m.AppointmentPageModule),
    },
    {
        path: 'appointmentpopup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts"), __webpack_require__.e("default-src_app_pages_daterange_daterange_page_ts"), __webpack_require__.e("default-src_app_services_loading_service_ts-src_app_services_trxn-pdf-doc-download_service_ts"), __webpack_require__.e("default-src_app_pages_appointment_appointment_module_ts"), __webpack_require__.e("src_app_pages_appointmentpopup_appointmentpopup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/appointmentpopup/appointmentpopup.module */ 48198)).then((m) => m.AppointmentpopupPageModule),
    },
    {
        path: 'securitycenter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_securitycenter_securitycenter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/securitycenter/securitycenter.module */ 50936)).then((m) => m.SecuritycenterPageModule),
    },
    {
        path: 'faceidrecognition',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faceidrecognition_faceidrecognition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faceidrecognition/faceidrecognition.module */ 4051)).then((m) => m.FaceidrecognitionPageModule),
    },
    {
        path: 'fingerprint',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fingerprint_fingerprint_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fingerprint/fingerprint.module */ 82006)).then((m) => m.FingerprintPageModule),
    },
    {
        path: 'success-message',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_success-message_success-message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/success-message/success-message.module */ 81178)).then((m) => m.SuccessMessagePageModule),
    },
    {
        path: 'exchangerate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_exchangerate_exchangerate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exchangerate/exchangerate.module */ 64966)).then((m) => m.ExchangeratePageModule),
    },
    {
        path: 'changempin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_pages_setmpin_setmpin_page_ts"), __webpack_require__.e("src_app_pages_changempin_changempin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/changempin/changempin.module */ 23040)).then((m) => m.ChangempinPageModule),
    },
    {
        path: 'feedback',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feedback_feedback_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/feedback/feedback.module */ 97792)).then((m) => m.FeedbackPageModule),
    },
    // NEW ROUTES
    {
        path: 'forextransaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_currencyconverter_currencyconverter_page_ts"), __webpack_require__.e("default-src_app_pages_v2_forex-cash-v2_forex-cash-v2_page_ts"), __webpack_require__.e("src_app_pages_v2_forex-cash-v2_forex-cash-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/forex-cash-v2/forex-cash-v2.module */ 34538)).then((m) => m.ForexCashV2PageModule),
    },
    {
        path: 'token-v2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("src_app_pages_token-v2_token-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/token-v2/token-v2.module */ 43218)).then((m) => m.TokenV2PageModule),
    },
    {
        path: 'cashwithdrawal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_currencyconverter_currencyconverter_page_ts"), __webpack_require__.e("default-src_app_pages_v2_forex-cash-v2_forex-cash-v2_page_ts"), __webpack_require__.e("src_app_pages_v2_cash-withdraw-v2_cash-withdraw-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/cash-withdraw-v2/cash-withdraw-v2.module */ 18646)).then((m) => m.CashWithdrawV2PageModule),
    },
    {
        path: 'cashdeposit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_currencyconverter_currencyconverter_page_ts"), __webpack_require__.e("default-src_app_pages_v2_forex-cash-v2_forex-cash-v2_page_ts"), __webpack_require__.e("src_app_pages_v2_cash-deposit-v2_cash-deposit-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/cash-deposit-v2/cash-deposit-v2.module */ 72251)).then((m) => m.CashDepositV2PageModule),
    },
    {
        path: 'loanrepayment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_v2_loan-repayment-v2_loan-repayment-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/loan-repayment-v2/loan-repayment-v2.module */ 71610)).then((m) => m.LoanRepaymentV2PageModule),
    },
    {
        path: 'loandisbursement',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_currencyconverter_currencyconverter_page_ts"), __webpack_require__.e("default-src_app_pages_v2_forex-cash-v2_forex-cash-v2_page_ts"), __webpack_require__.e("src_app_pages_v2_loan-disbursement-v2_loan-disbursement-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/loan-disbursement-v2/loan-disbursement-v2.module */ 45406)).then((m) => m.LoanDisbursementV2PageModule),
    },
    {
        path: 'chequedeposit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chequedeposit_chequedeposit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chequedeposit/chequedeposit.module */ 90427)).then((m) => m.ChequedepositPageModule),
    },
    {
        path: 'chequewithdrawal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("default-src_app_pages_appointmentpopup_appointmentpopup_page_ts"), __webpack_require__.e("default-src_app_pages_operation_operation_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chequewithdrawal_chequewithdrawal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chequewithdrawal/chequewithdrawal.module */ 14314)).then((m) => m.ChequewithdrawalPageModule),
    },
    {
        path: 'file-upload',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("src_app_pages_v2_file-upload_file-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/file-upload/file-upload.module */ 73942)).then((m) => m.FileUploadPageModule),
    },
    {
        path: 'scan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("src_app_pages_v2_scan_scan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/scan/scan.module */ 78192)).then((m) => m.ScanPageModule),
    },
    {
        path: 'cheque-deposit-v2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_v2_cheque-deposit-v2_cheque-deposit-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/cheque-deposit-v2/cheque-deposit-v2.module */ 66931)).then((m) => m.ChequeDepositV2PageModule),
    },
    {
        path: 'cheque-withdrawal-v2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_v2_cheque-withdrawal-v2_cheque-withdrawal-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/cheque-withdrawal-v2/cheque-withdrawal-v2.module */ 46513)).then((m) => m.ChequeWithdrawalV2PageModule),
    },
    {
        path: 'kyc',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_v2_kyc_kyc_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/kyc/kyc.module */ 76769)).then((m) => m.KycPageModule),
    },
    {
        path: 'kyc-branch',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_v2_kyc-branch_kyc-branch_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/kyc-branch/kyc-branch.module */ 77401)).then((m) => m.KycBranchPageModule),
    },
    {
        path: 'kyc-video',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_transaction-popup_transaction-popup_page_ts"), __webpack_require__.e("default-src_app_pages_token-v2_token-v2_page_ts"), __webpack_require__.e("default-node_modules_ngx-flag-picker___ivy_ngcc___fesm2015_ngx-flag-picker_js"), __webpack_require__.e("src_app_pages_v2_kyc-video_kyc-video_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/kyc-video/kyc-video.module */ 49056)).then((m) => m.KycVideoPageModule),
    },
    {
        path: 'customer-onboarding',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_v2_customer-onboarding_customer-onboarding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/customer-onboarding/customer-onboarding.module */ 87867)).then((m) => m.CustomerOnboardingPageModule),
    },
    {
        path: 'customer-onboarding-individual',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_v2_customer-onboarding-individual_customer-onboarding-individual_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/customer-onboarding-individual/customer-onboarding-individual.module */ 71524)).then((m) => m.CustomerOnboardingIndividualPageModule),
    },
    {
        path: 'customer-onboarding-corporate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_shared_shared-material_module_ts"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("default-src_app_components_relative-users_relative-users_component_ts"), __webpack_require__.e("default-src_app_services_toast_service_ts-node_modules_angularx-qrcode___ivy_ngcc___fesm2015_-d91662"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_v2_customer-onboarding-corporate_customer-onboarding-corporate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/customer-onboarding-corporate/customer-onboarding-corporate.module */ 69695)).then((m) => m.CustomerOnboardingCorporatePageModule),
    },
    {
        path: 'no-permission',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_v2_no-permission_no-permission_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/v2/no-permission/no-permission.module */ 82963)).then((m) => m.NoPermissionPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules,
                useHash: true,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ 52468);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _services_back_button_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/back-button.service */ 97219);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/token-storage.service */ 11573);
/* harmony import */ var _services_user_roles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user-roles */ 13634);


















let AppComponent = class AppComponent {
    constructor(platform, statusBar, api, config, device, dataService, modalCtrl, router, alert, sanitizer, menu, network, cdr, backButtonService, tokenService) {
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
        this.tokenService = tokenService;
        this.isFaceId = false;
        this.isFingerPrint = false;
        this.i = 0;
        this.appIsOnline$ = undefined;
        this.roles = _services_user_roles__WEBPACK_IMPORTED_MODULE_9__.Roles;
        //Check Permission on App Start
        this.device.getPhonePermission();
        this.initializeApp();
        this.platform.resume.subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Resume event detected');
            localStorage.setItem('isShowed', 'yes');
        }));
        this.platform.pause.subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Pause event detected');
            localStorage.setItem('isShowed', 'no');
        }));
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        this.currentUser = this.tokenService.getUser();
        this.userRole = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.roles[0]) === null || _b === void 0 ? void 0 : _b.name;
        this.customerId = localStorage.getItem('customer_id');
        this.checkInternet().subscribe((isOnline) => {
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
        if (this.platform.is('cordova')) {
            if (this.currentUser !== null) {
                this.getProfilePicture(this.customerId);
                if ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.faceLoginEnable) {
                    this.router.navigate(['login-landing'], { replaceUrl: true });
                    // direct faceid open
                }
                else if ((_d = this.currentUser) === null || _d === void 0 ? void 0 : _d.fingerprintLoginEnable) {
                    this.router.navigate(['login-landing'], { replaceUrl: true });
                    // direct fingerprint tray open
                }
                else if ((_e = this.currentUser) === null || _e === void 0 ? void 0 : _e.mpinActive) {
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
                this.getProfilePicture(this.customerId);
                if (_services_user_roles__WEBPACK_IMPORTED_MODULE_9__.ROLES.includes(this.userRole)) {
                    this.router.navigate(['dashboard'], { replaceUrl: true });
                }
                else {
                    this.router.navigate(['no-permission'], { replaceUrl: true });
                }
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
        this.appIsOnline$ = rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create((observer) => {
            observer.next(true);
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mapTo)(true));
        if (this.platform.is('cordova')) {
            // on Device - when platform is cordova
            this.appIsOnline$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(this.network.onConnect().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mapTo)(true)), this.network.onDisconnect().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mapTo)(false)));
        }
        else {
            // on Browser - when platform is Browser
            this.appIsOnline$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(navigator.onLine), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mapTo)(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mapTo)(false)));
        }
        return this.appIsOnline$;
    }
    initUserContext() {
        setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.getCurrentUser();
        }), 1000);
    }
    getCurrentUser() {
        var _a, _b;
        this.currentUser = this.tokenService.getUser();
        this.userRole = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.roles[0]) === null || _b === void 0 ? void 0 : _b.name;
        this.cdr.markForCheck();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#3B59FD'); //
            this.backButtonService.init();
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
            this.avatar = null;
        });
    }
    goToBranch() {
        this.menu.close();
        this.router.navigate(['branch-list']);
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
    goToFile() {
        this.menu.close();
        this.router.navigate(['file-upload']);
    }
    goToNotifications() {
        this.menu.close();
        this.router.navigate(['notification']);
    }
    goToChqD() {
        localStorage.removeItem('chequeData');
        this.menu.close();
        this.router.navigate(['cheque-deposit-v2']);
    }
    goToChqW() {
        localStorage.removeItem('chequeData');
        this.menu.close();
        this.router.navigate(['cheque-withdrawal-v2']);
    }
    logoutApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let alret = yield this.alert.create({
                header: 'Logout',
                subHeader: 'Are you sure want to Log out?',
                cssClass: 'logout-alert',
                buttons: [
                    {
                        text: 'Logout',
                        cssClass: 'alert-button-confirm',
                        handler: () => {
                            this.goToFeedback();
                            this.menu.close();
                        },
                    },
                    {
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                        text: 'Cancel',
                    },
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Config },
    { type: src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_2__.DeviceAccess },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.MenuController },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__.Network },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef },
    { type: _services_back_button_service__WEBPACK_IMPORTED_MODULE_6__.BackButtonService },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__.TokenStorageService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapmyindia-map-cordova-ionic-beta */ 64540);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _directives_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/directive.module */ 27589);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 82475);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ 83181);
/* harmony import */ var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular-material-extensions/select-country */ 96631);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 96772);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 42697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_document_scanner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-document-scanner */ 20890);
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ 99788);
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/interceptors/auth.interceptor */ 37126);












// MAPMYINDIA IMPORT



















const openCVConfig = {
    openCVDirPath: '/assets/opencv',
};
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_24__.CarouselModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_25__.SwiperModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicModule.forRoot({
                rippleEffect: true,
                mode: 'md',
            }),
            _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_27__.MatSelectCountryModule.forRoot('en'),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _directives_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
            ngx_document_scanner__WEBPACK_IMPORTED_MODULE_29__.NgxDocumentScannerModule.forRoot(openCVConfig),
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera,
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__.SocialSharing,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File,
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__.FilePath,
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__.Crop,
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_16__.Clipboard,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions,
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_9__.FingerprintAIO,
            mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_6__.mmi,
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__.Network,
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_14__.UniqueDeviceID,
            _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_17__.CameraPreview,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HTTP_INTERCEPTORS, useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__.AuthInterceptor, multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 82014:
/*!***********************************************************************!*\
  !*** ./src/app/components/alert-internet/alert-internet.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertInternetComponent": () => (/* binding */ AlertInternetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _alert_internet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-internet.component.html?ngResource */ 48451);
/* harmony import */ var _alert_internet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-internet.component.scss?ngResource */ 36606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let AlertInternetComponent = class AlertInternetComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    confirm() {
        return this.modalCtrl.dismiss(this.name, 'confirm');
    }
};
AlertInternetComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AlertInternetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-alert-internet',
        template: _alert_internet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alert_internet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertInternetComponent);



/***/ }),

/***/ 58584:
/*!******************************************************!*\
  !*** ./src/app/directives/alphaNumeric.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphabetNumericDirective": () => (/* binding */ AlphabetNumericDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let AlphabetNumericDirective = class AlphabetNumericDirective {
    constructor(el) {
        this.el = el;
        this.regexStr = '^[a-zA-Z0-9]*$';
    }
    onKeyPress(event) {
        return new RegExp(this.regexStr).test(event.key);
    }
    blockPaste(event) {
        this.validateFields(event);
    }
    validateFields(event) {
        setTimeout(() => {
            this.el.nativeElement.value = this.el.nativeElement.value
                .replace(/[^a-zA-Z0-9]/g, '')
                .replace(/\s/g, '');
            event.preventDefault();
        }, 100);
    }
};
AlphabetNumericDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
AlphabetNumericDirective.propDecorators = {
    isAlphaNumeric: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onKeyPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keypress', ['$event'],] }],
    blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['paste', ['$event'],] }]
};
AlphabetNumericDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[alphaNumeric]',
    })
], AlphabetNumericDirective);



/***/ }),

/***/ 39982:
/*!*******************************************************!*\
  !*** ./src/app/directives/alphabet-only.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphabetOnlyDirective": () => (/* binding */ AlphabetOnlyDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let AlphabetOnlyDirective = class AlphabetOnlyDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
    onIonInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
};
AlphabetOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
AlphabetOnlyDirective.propDecorators = {
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ion-input', ['$event'],] }],
    onIonInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event'],] }]
};
AlphabetOnlyDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'ion-input[appAlphabetOnly], input[appAlphabetOnly]'
    })
], AlphabetOnlyDirective);



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

/***/ 88544:
/*!*************************************************!*\
  !*** ./src/app/directives/decimal.directive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoDigitDecimaNumberDirective": () => (/* binding */ TwoDigitDecimaNumberDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let TwoDigitDecimaNumberDirective = class TwoDigitDecimaNumberDirective {
    constructor(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d{0,2}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    }
    onKeyDown(event) {
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current = this.el.nativeElement.value;
        const position = this.el.nativeElement.selectionStart;
        const next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
};
TwoDigitDecimaNumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
TwoDigitDecimaNumberDirective.propDecorators = {
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }]
};
TwoDigitDecimaNumberDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appTwoDigitDecimaNumber]'
    })
], TwoDigitDecimaNumberDirective);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _auto_focus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-focus.directive */ 95701);
/* harmony import */ var _separator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./separator.directive */ 80536);
/* harmony import */ var _decimal_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decimal.directive */ 88544);
/* harmony import */ var _alphabet_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alphabet-only.directive */ 39982);
/* harmony import */ var _numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numbers-only.directive */ 96096);
/* harmony import */ var _trim_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trim-input.directive */ 19322);
/* harmony import */ var _special_text_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./special-text.directive */ 49390);
/* harmony import */ var _alphaNumeric_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alphaNumeric.directive */ 58584);











const directives = [
    _auto_focus_directive__WEBPACK_IMPORTED_MODULE_0__.AutoFocusDirective,
    _separator_directive__WEBPACK_IMPORTED_MODULE_1__.SeparatorDirective,
    _decimal_directive__WEBPACK_IMPORTED_MODULE_2__.TwoDigitDecimaNumberDirective,
    _alphabet_only_directive__WEBPACK_IMPORTED_MODULE_3__.AlphabetOnlyDirective,
    _numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__.NumberDirective,
    _trim_input_directive__WEBPACK_IMPORTED_MODULE_5__.TrimInputDirective,
    _special_text_directive__WEBPACK_IMPORTED_MODULE_6__.SpecialTextDirective,
    _alphaNumeric_directive__WEBPACK_IMPORTED_MODULE_7__.AlphabetNumericDirective
];
let DirectiveModule = class DirectiveModule {
};
DirectiveModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [directives],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule
        ],
        exports: directives,
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe,
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_CURRENCY_CODE, useValue: 'INR' }
        ]
    })
], DirectiveModule);



/***/ }),

/***/ 96096:
/*!******************************************************!*\
  !*** ./src/app/directives/numbers-only.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberDirective": () => (/* binding */ NumberDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let NumberDirective = class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
    onIonInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
};
NumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
NumberDirective.propDecorators = {
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ion-input', ['$event'],] }],
    onIonInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event'],] }]
};
NumberDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'ion-input[numbersOnly], input[numbersOnly]'
    })
], NumberDirective);



/***/ }),

/***/ 80536:
/*!***************************************************!*\
  !*** ./src/app/directives/separator.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeparatorDirective": () => (/* binding */ SeparatorDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let SeparatorDirective = class SeparatorDirective {
    constructor(_inputEl) {
        this._inputEl = _inputEl;
    }
    onInput(event) {
        if (this._inputEl.nativeElement.value === '-')
            return;
        let commasRemoved = this._inputEl.nativeElement.value.replace(/,/g, '');
        let toInt;
        let toLocale;
        if (commasRemoved.split('.').length > 1) {
            let decimal = isNaN(parseInt(commasRemoved.split('.')[1])) ? '' : parseInt(commasRemoved.split('.')[1]);
            toInt = parseInt(commasRemoved);
            toLocale = toInt.toLocaleString('en-IN') + '.' + decimal;
        }
        else {
            toInt = parseInt(commasRemoved);
            toLocale = toInt.toLocaleString('en-IN');
        }
        if (toLocale === 'NaN') {
            this._inputEl.nativeElement.value = '';
        }
        else {
            this._inputEl.nativeElement.value = toLocale;
        }
    }
};
SeparatorDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
SeparatorDirective.propDecorators = {
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event'],] }]
};
SeparatorDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'input[separator]',
    })
], SeparatorDirective);



/***/ }),

/***/ 49390:
/*!******************************************************!*\
  !*** ./src/app/directives/special-text.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialTextDirective": () => (/* binding */ SpecialTextDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let SpecialTextDirective = class SpecialTextDirective {
    constructor(el) {
        this.el = el;
        this.regexStr = '^[a-zA-Z ]*$';
    }
    onKeyPress(event) {
        return new RegExp(this.regexStr).test(event.key);
    }
    blockPaste(event) {
        this.validateFields(event);
    }
    validateFields(event) {
        setTimeout(() => {
            this.el.nativeElement.value = this.el.nativeElement.value
                .replace(/[^A-Za-z ]/g, '')
                .replace(/\s/g, '');
            event.preventDefault();
        }, 100);
    }
};
SpecialTextDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
SpecialTextDirective.propDecorators = {
    isAlphaNumeric: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onKeyPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keypress', ['$event'],] }],
    blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['paste', ['$event'],] }]
};
SpecialTextDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[specialText]',
    })
], SpecialTextDirective);



/***/ }),

/***/ 19322:
/*!****************************************************!*\
  !*** ./src/app/directives/trim-input.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrimInputDirective": () => (/* binding */ TrimInputDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let TrimInputDirective = class TrimInputDirective {
    constructor() {
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onInputChange($event) {
        var _a;
        const currentValue = (_a = $event.target) === null || _a === void 0 ? void 0 : _a.value;
        const trimmedValue = currentValue === null || currentValue === void 0 ? void 0 : currentValue.trim();
        this.ngModelChange.emit(trimmedValue);
    }
};
TrimInputDirective.propDecorators = {
    ngModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event'],] }]
};
TrimInputDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        // tslint:disable-next-line: directive-selector
        selector: 'input[trim]'
    })
], TrimInputDirective);



/***/ }),

/***/ 55826:
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);




let AuthGuard = class AuthGuard {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    canActivate(route, state) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.currentUser = this.tokenService.getUser();
            let role = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.roles[0];
            const expectedRole = this.tokenService.getRole();
            if (this.tokenService.isLoggedIn()) {
                if (!expectedRole || expectedRole == (role === null || role === void 0 ? void 0 : role.name)) {
                    return true;
                }
                else {
                    this.router.navigate(['no-permission'], { replaceUrl: true });
                    return false;
                }
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showMessage/show-message.service */ 31199);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);






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
        return this.http.post(`${API_URL}/rest/otp/generateOtp`, data);
    }
    verifyOtp(data) {
        return this.http.put(`${API_URL}/rest/otp/validateOtp`, data);
    }
    cashWithdrawalSave(data) {
        return this.http.post(`${API_URL}/cash-withdrawal-service`, data);
    }
    cashDepositSave(data) {
        return this.http.post(`${API_URL}/cash-deposit/api`, data);
    }
    chequeWithdrawalSave(data) {
        return this.http.post(`${API_URL}/cheque-withdrawal`, data);
    }
    chequeDepositSave(data) {
        return this.http.post(`${API_URL}/cheque-deposit/api`, data);
    }
    getBranchByCity(city) {
        return this.http.get(`${API_URL}/branch/fetchbranch/${city}`);
    }
    custpomerDetails(phoneNo) {
        return this.http.get(`${API_URL}/customerdata/getPhoneNo/${phoneNo}`);
    }
    getCustomerAccounts(phoneNo) {
        return this.http.get(`${API_URL}/customerdata/getPhoneNo/${phoneNo}`);
    }
    getProfileDetails(customerId) {
        return this.http.get(`${API_URL}/customerdata/getProfileDetails?customerId=${customerId}`);
    }
    accountDropDown(custId) {
        return this.http.get(`${API_URL}/accountdata/account/${custId}`);
    }
    accountBalance(accId) {
        return this.http.get(`${API_URL}/accountdata/accountBalance/${accId}`);
    }
    generateQRCode(data) {
        return this.http.post(`${API_URL}/token/api/qr-code-generator`, data, {
            responseType: 'blob',
        });
    }
    fetchWalletInfo(customerId) {
        return this.http.get(`${API_URL}/cash-deposit/api/fetchWalletInfo?customerId=${customerId}`);
    }
    appointmentBooking(data) {
        return this.http.put(`${API_URL}/cash-deposit/api/updateScheduledAppointment`, data);
    }
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
        return this.http.get(`${API_URL}/currency`);
    }
    gettingAvailableSlots(selectedDate) {
        return this.http.get(`${API_URL}/rest/data/customer/availableslots?scheduledDate=${selectedDate}`);
    }
    gettingBookedSlots(selectedDate) {
        return this.http.get(`${API_URL}/cash-deposit/api/fetchBookedSlots?transactionDate=${selectedDate}`);
    }
    getDashboardDataNew(customerId) {
        return this.http.get(`${API_URL}/teller-service/api/mobile/${customerId}`);
    }
    fetchAppointmentInfo(filterOption, formattedFromDate, formattedToDate, customerId, accountNumber) {
        var opt;
        if ((customerId != null || customerId != undefined || customerId != '') &&
            formattedFromDate == null &&
            formattedToDate == null &&
            filterOption == null) {
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().append('customerId', customerId);
        }
        else if ((formattedFromDate != null || formattedFromDate != '') &&
            (formattedToDate != null || formattedToDate != '') &&
            customerId != null &&
            filterOption == null) {
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                .append('customerId', customerId)
                .append('fromDate', formattedFromDate)
                .append('toDate', formattedToDate);
        }
        else if (customerId != null &&
            filterOption != null &&
            formattedFromDate == null &&
            formattedToDate == null) {
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                .append('customerId', customerId)
                .append('filterOption', filterOption);
        }
        else {
            opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                .append('customerId', customerId)
                .append('fromDate', formattedFromDate)
                .append('toDate', formattedToDate)
                .append('filterOption', filterOption);
        }
        return this.http.get(`${API_URL}/cash-deposit/api/fetchAppointmentInfo?${opt}`);
    }
    getTransactionByAccountId(accountId, page, formattedFromDate, formattedToDate, size) {
        var params;
        if ((accountId != null || accountId != '' || accountId.length != 0) &&
            page == 0) {
            console.log('only accountId');
            if (formattedFromDate != null && formattedToDate != null) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                    .append('accountNumber', accountId)
                    .append('fromDate', formattedFromDate)
                    .append('toDate', formattedToDate);
            }
            else {
                if (size > 20) {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                        .append('accountNumber', accountId)
                        .append('size', size);
                }
                else {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().append('accountNumber', accountId);
                }
            }
        }
        else {
            console.log('accountId and page');
            if (formattedFromDate != null && formattedToDate != null) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                    .append('accountNumber', accountId)
                    .append('page', page)
                    .append('fromDate', formattedFromDate)
                    .append('toDate', formattedToDate);
            }
            else {
                if (size > 20) {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                        .append('accountNumber', accountId)
                        .append('page', page)
                        .append('size', size);
                }
                else {
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                        .append('accountNumber', accountId)
                        .append('page', page);
                }
            }
        }
        return this.http.get(`${API_URL}/cash-deposit/api/fetchTransaction?${params}`);
    }
    download(model) {
        return this.http.post(`${API_URL}/cash-deposit/api/downloadAppointmentInfo`, model, {
            responseType: 'blob',
        });
    }
    shareStatementEmail(model) {
        return this.http.post(`${API_URL}/cash-deposit/api/shareInfoThroughMail`, model);
    }
    getByTransactionId(transId) {
        return this.http.get(`${API_URL}/cash-deposit/api/fetchByTransId/${transId}`);
    }
    uploadProfilePicture(data) {
        return this.http.post(`${API_URL}/rest/upload/uploadDoc`, data, {
            reportProgress: true,
            observe: 'events',
        });
    }
    getNumberOfCrowd(tokenBranch) {
        return this.http.get(`${API_URL}/token/api/fetchTokenCountByBranch?tokenBranch=${tokenBranch}`);
    }
    setFirstTimeLogin(firstTimeLogin) {
        this.Index.next(firstTimeLogin);
    }
    getFirstTimeLogin() {
        return this.firstTimeLogin.asObservable();
    }
    validatePassword(loginModel) {
        return this.http.post(`${API_URL}/customerdata/validateCutomerPassword`, loginModel);
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
    resetPassword(model) {
        return this.http.post(`${API_URL}/customerdata/resetCustomerPassword`, model);
    }
    getExchangeRate(currency) {
        let url = 'https://api.exchangerate.host/latest?base=' + currency;
        return this.http.get(url);
    }
    getNativeExchangeRate(fromCurrency, toCurrency) {
        return this.http.get(`${API_URL}/currency-api/fetchExchangeRateForCurrency?currency1=${fromCurrency}&currency2=${toCurrency}`);
    }
    registerFaceIdORFingerPrint(bioAuthModel) {
        return this.http.post(`${API_URL}/customerdata/updateLoginStatusEnable`, bioAuthModel);
    }
    getChargeDetails(accId) {
        return this.http.get(`${API_URL}/accountdata/getChargeDetails?accountId=${accId}`);
    }
    getCurrencyExRate(baseCurr, selectedCurr) {
        return this.http.get(`${API_URL}/currency-api/fetchExchangeRateForCurrency?currency1=${selectedCurr}&currency2=${baseCurr}`);
    }
    storeFeedbackInfo(data) {
        return this.http.post(`${API_URL}/customerdata/storeFeedbackInfo`, data);
    }
    uploadProfileImage(data) {
        return this.http.post(`${API_URL}/rest/upload/uploadDoc`, data);
    }
    deleteProfileImage(data) {
        return this.http.delete(`${API_URL}/customerdata/deleteCustDocument?customerId=${data.custId}&documentType=${data.documentType}`);
    }
    filterAppointment(custId, status) {
        return this.http.get(`${API_URL}/cash-deposit/api/fetchAppointmentInfo?customerId=${custId}&appointmentStatus=${status}`);
    }
    // const endpoint = "https://api.exchangeratesapi.io/latest";
    fetchRatesByExternal(from, to, amount) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('apikey', '8p0w3rAgH0JF11YqJjcQy8F78d29UEAX');
        let url = `https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}`;
        return this.http.get(url, { headers: headers });
    }
    fetchRate(base) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('apikey', '8p0w3rAgH0JF11YqJjcQy8F78d29UEAX');
        let symbols = 'INR,USD';
        let url = `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`;
        return this.http.get(url, { headers: headers });
    }
    getLoanAccounts(phoneNo, module) {
        return this.http.get(`${API_URL}/customerdata/fetchLoanInfo?phoneNumber=${phoneNo}&module=${module}`);
    }
    addNewAccountToDisburse(model) {
        return this.http.post(`${API_URL}/cash-deposit/api/saveDisbursementAccInfo`, model);
    }
    fetchDisbursementAccInfo(customerId) {
        return this.http.get(`${API_URL}/cash-deposit/api/fetchDisbursementAccInfo?customerId=${customerId}`);
    }
    // SIMULATE
    uploadAndProgress(file) {
        console.log(file);
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post('https://file.io', formData, {
            reportProgress: true,
            observe: 'events',
        });
    }
    getCustomerInfo(cifNumber) {
        return this.http.get(`${API_URL}/customerdata/getCustomerInfo?cifNumber=${cifNumber}`);
    }
    getChequeData(file) {
        return this.http.post('http://192.168.0.248:4000/api/scan-cheque', file);
    }
    getBankNameFromIfsc(ifsc) {
        return this.http.get(`https://ifsc.razorpay.com/${ifsc}`);
    }
    getDropDownValues(entityName) {
        return this.http.get(`${API_URL}/rest/data/getMasterData?entityName=${entityName}`);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_0__.ShowMessageService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
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
    formatCurrency(amount, currency) {
        if (amount != null && currency != null && currency.length > 2) {
            console.log("to check?", amount, currency);
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency,
            }).format(amount);
        }
    }
    formatDisplayCurrency(currency) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency,
        });
    }
    getCurrencySymbol(code) {
        let data = {
            AED: 'د.إ',
            AFN: '؋',
            ALL: 'L',
            AMD: '֏',
            ANG: 'ƒ',
            AOA: 'Kz',
            ARS: '$',
            AUD: '$',
            AWG: 'ƒ',
            AZN: '₼',
            BAM: 'KM',
            BBD: '$',
            BDT: '৳',
            BGN: 'лв',
            BHD: '.د.ب',
            BIF: 'FBu',
            BMD: '$',
            BND: '$',
            BOB: '$b',
            BOV: 'BOV',
            BRL: 'R$',
            BSD: '$',
            BTC: '₿',
            BTN: 'Nu.',
            BWP: 'P',
            BYN: 'Br',
            BYR: 'Br',
            BZD: 'BZ$',
            CAD: '$',
            CDF: 'FC',
            CHE: 'CHE',
            CHF: 'CHF',
            CHW: 'CHW',
            CLF: 'CLF',
            CLP: '$',
            CNH: '¥',
            CNY: '¥',
            COP: '$',
            COU: 'COU',
            CRC: '₡',
            CUC: '$',
            CUP: '₱',
            CVE: '$',
            CZK: 'Kč',
            DJF: 'Fdj',
            DKK: 'kr',
            DOP: 'RD$',
            DZD: 'دج',
            EEK: 'kr',
            EGP: '£',
            ERN: 'Nfk',
            ETB: 'Br',
            ETH: 'Ξ',
            EUR: '€',
            FJD: '$',
            FKP: '£',
            GBP: '£',
            GEL: '₾',
            GGP: '£',
            GHC: '₵',
            GHS: 'GH₵',
            GIP: '£',
            GMD: 'D',
            GNF: 'FG',
            GTQ: 'Q',
            GYD: '$',
            HKD: '$',
            HNL: 'L',
            HRK: 'kn',
            HTG: 'G',
            HUF: 'Ft',
            IDR: 'Rp',
            ILS: '₪',
            IMP: '£',
            INR: '₹',
            IQD: 'ع.د',
            IRR: '﷼',
            ISK: 'kr',
            JEP: '£',
            JMD: 'J$',
            JOD: 'JD',
            JPY: '¥',
            KES: 'KSh',
            KGS: 'лв',
            KHR: '៛',
            KMF: 'CF',
            KPW: '₩',
            KRW: '₩',
            KWD: 'KD',
            KYD: '$',
            KZT: '₸',
            LAK: '₭',
            LBP: '£',
            LKR: '₨',
            LRD: '$',
            LSL: 'M',
            LTC: 'Ł',
            LTL: 'Lt',
            LVL: 'Ls',
            LYD: 'LD',
            MAD: 'MAD',
            MDL: 'lei',
            MGA: 'Ar',
            MKD: 'ден',
            MMK: 'K',
            MNT: '₮',
            MOP: 'MOP$',
            MRO: 'UM',
            MRU: 'UM',
            MUR: '₨',
            MVR: 'Rf',
            MWK: 'MK',
            MXN: '$',
            MXV: 'MXV',
            MYR: 'RM',
            MZN: 'MT',
            NAD: '$',
            NGN: '₦',
            NIO: 'C$',
            NOK: 'kr',
            NPR: '₨',
            NZD: '$',
            OMR: '﷼',
            PAB: 'B/.',
            PEN: 'S/.',
            PGK: 'K',
            PHP: '₱',
            PKR: '₨',
            PLN: 'zł',
            PYG: 'Gs',
            QAR: '﷼',
            RMB: '￥',
            RON: 'lei',
            RSD: 'Дин.',
            RUB: '₽',
            RWF: 'R₣',
            SAR: '﷼',
            SBD: '$',
            SCR: '₨',
            SDG: 'ج.س.',
            SEK: 'kr',
            SGD: 'S$',
            SHP: '£',
            SLL: 'Le',
            SOS: 'S',
            SRD: '$',
            SSP: '£',
            STD: 'Db',
            STN: 'Db',
            SVC: '$',
            SYP: '£',
            SZL: 'E',
            THB: '฿',
            TJS: 'SM',
            TMT: 'T',
            TND: 'د.ت',
            TOP: 'T$',
            TRL: '₤',
            TRY: '₺',
            TTD: 'TT$',
            TVD: '$',
            TWD: 'NT$',
            TZS: 'TSh',
            UAH: '₴',
            UGX: 'USh',
            USD: '$',
            UYI: 'UYI',
            UYU: '$U',
            UYW: 'UYW',
            UZS: 'лв',
            VEF: 'Bs',
            VES: 'Bs.S',
            VND: '₫',
            VUV: 'VT',
            WST: 'WS$',
            XAF: 'FCFA',
            XBT: 'Ƀ',
            XCD: '$',
            XOF: 'CFA',
            XPF: '₣',
            XSU: 'Sucre',
            XUA: 'XUA',
            YER: '﷼',
            ZAR: 'R',
            ZMW: 'ZK',
            ZWD: 'Z$',
            ZWL: '$'
        };
        console.log(data[code]);
        return data[code];
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
        this.initPermission();
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
    initPermission() {
        this.androidPermissions
            .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
            .then((result) => console.log('Has permission?', result.hasPermission), (err) => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
        this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.CAMERA,
        ]);
    }
    getDeviceId() {
        this.uniqueDeviceID
            .get()
            .then((uuid) => {
            const deviceUUID = uuid;
            return deviceUUID || '';
        })
            .catch((error) => {
            return '';
        });
    }
};
DeviceAccess.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__.AndroidPermissions },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_1__.UniqueDeviceID }
];
DeviceAccess = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], DeviceAccess);



/***/ }),

/***/ 37126:
/*!***********************************************************!*\
  !*** ./src/app/services/interceptors/auth.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token-storage.service */ 11573);



const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        // const token = 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYWt0aGkiLCJpYXQiOjE2ODc1MTIxNTEsImV4cCI6MjA4NzUxMjE1MX0.4vk7fR51C8qaHfA7rRR20UOliHJdmkcL9_wUOhcc-y7IH0foV9YccxJ6pXYxYCNg';
        if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
            });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], AuthInterceptor);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/alert-internet/alert-internet.component */ 82014);





let ShowMessageService = class ShowMessageService {
    constructor(toastController, modalController, router) {
        this.toastController = toastController;
        this.modalController = modalController;
        this.router = router;
        this.modal = null;
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
        if (status === 0) {
            this.presentToast("Gateway Timeout!");
            // if (this.modal == null) {
            //   return;
            // } else {
            //   return;
            // }
        }
    }
    openNoInternet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: src_app_components_alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_0__.AlertInternetComponent,
                cssClass: 'internet-modal'
            });
            yield this.modal.present();
            const { role } = yield this.modal.onDidDismiss();
            if (role == 'confirm') {
                this.router.navigate(['login-landing'], { replaceUrl: true });
                this.modal = null;
            }
        });
    }
    presentToast(msg, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ShowMessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ShowMessageService);



/***/ }),

/***/ 11573:
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ISLOGGEDIN": () => (/* binding */ ISLOGGEDIN),
/* harmony export */   "TOKEN_KEY": () => (/* binding */ TOKEN_KEY),
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService),
/* harmony export */   "USER_KEY": () => (/* binding */ USER_KEY),
/* harmony export */   "USER_ROLE": () => (/* binding */ USER_ROLE)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ROLE = 'auth-role';
const ISLOGGEDIN = 'isLoggedIn';
let TokenStorageService = class TokenStorageService {
    constructor() {
        this.sessionStore = window.sessionStorage;
    }
    signOut() {
        this.sessionStore.clear();
    }
    saveToken(token) {
        this.sessionStore.removeItem(TOKEN_KEY);
        this.sessionStore.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return this.sessionStore.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        this.sessionStore.removeItem(USER_KEY);
        this.sessionStore.setItem(USER_KEY, JSON.stringify(user));
    }
    saveRole(role) {
        this.sessionStore.removeItem(USER_ROLE);
        this.sessionStore.setItem(USER_ROLE, JSON.stringify(role));
    }
    setLoggedIn(data) {
        this.sessionStore.removeItem(ISLOGGEDIN);
        this.sessionStore.setItem(ISLOGGEDIN, JSON.stringify(data));
    }
    getRole() {
        return JSON.parse(this.sessionStore.getItem(USER_ROLE));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
    isLoggedIn() {
        return !!this.getAuthStatus();
    }
    getAuthStatus() {
        return (this.sessionStore.getItem(TOKEN_KEY) !== null &&
            JSON.parse(this.sessionStore.getItem(ISLOGGEDIN)));
    }
};
TokenStorageService.ctorParameters = () => [];
TokenStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], TokenStorageService);



/***/ }),

/***/ 13634:
/*!****************************************!*\
  !*** ./src/app/services/user-roles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROLES": () => (/* binding */ ROLES),
/* harmony export */   "Roles": () => (/* binding */ Roles)
/* harmony export */ });
var Roles;
(function (Roles) {
    Roles["MOBILE_CUSTOMER"] = "MOBILE_CUSTOMER";
    Roles["MOBILE_AGENT"] = "MOBILE_AGENT";
})(Roles || (Roles = {}));
const ROLES = ['MOBILE_CUSTOMER', 'MOBILE_AGENT'];


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
    BASE_URL: 'http://192.168.0.127:8765',
    microServiceURL: "http://192.168.0.127:8765", // 192.168.1.21
    // BASE_URL: 'http://192.168.0.14:add-prod/Icust-Digital-Banking',
    // BASE_URL: 'http://192.168.0.14:8071/Icust-Digital-Banking',
    // BASE_URL: 'http://192.168.0.14:8071/Icust-Digital-Banking',
    // BASE_URL: 'http://192.168.0.14:8091/Icust-Digital-Banking',
    // BASE_URL: 'http://192.168.0.14:9003/Icust-Digital-Banking',
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
module.exports = "ion-content {\n  --ion-background-color: #f4f4f4;\n}\n\nion-avatar {\n  width: 60px !important;\n  height: 60px !important;\n}\n\n.bg-content {\n  background: #f4f4f4;\n}\n\n:host ::ng-deep .searchbar-input-container input {\n  background: none;\n  box-shadow: none;\n  padding-left: 10%;\n}\n\n:host ::ng-deep .searchbar-input-container ion-icon {\n  left: 0;\n}\n\n.version-color {\n  color: #102245;\n  font-size: 12px;\n  font-family: inherit;\n}\n\n.profile-pic {\n  border: 5px solid #def0ff;\n}\n\n.profile-image {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  height: 4.5rem;\n  width: 4.5rem;\n  border: 5px solid #def0ff;\n}\n\n.head-block {\n  height: 100px !important;\n  top: 25px !important;\n}\n\n.headerbar {\n  background: #ffffff;\n  box-shadow: 0 5pt 5pt -2pt rgba(69, 110, 254, 0.1490196078) !important;\n}\n\nion-menu::part(container) {\n  width: 90%;\n  background: #f4f4f4;\n}\n\n.flex-container {\n  display: flex;\n  margin-bottom: 30px;\n  padding-left: 18px;\n}\n\n.username {\n  margin-top: 5px;\n  margin-left: 30px;\n  font-weight: 800;\n  color: #102245;\n}\n\n.mf-30 {\n  margin-left: 30px;\n}\n\n.label {\n  padding-left: 25px;\n  color: #102245;\n}\n\n.mt-18 {\n  margin-top: 18px;\n}\n\n.menu-list {\n  box-shadow: #c9c9c9;\n}\n\n.Item_title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #102245;\n}\n\n::ng-deep .logout-alert .alert-title.sc-ion-alert-md {\n  padding-left: 0;\n  text-align: center;\n}\n\n::ng-deep .logout-alert button.alert-button.alert-button-cancel {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxPQUFBO0FBREo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLHNFQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUU7RUFDRSxlQUFBO0FBRkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xyXG4gIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4udmVyc2lvbi1jb2xvciB7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWMge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNkZWYwZmY7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNC41cmVtO1xyXG4gIHdpZHRoOiA0LjVyZW07XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2RlZjBmZjtcclxufVxyXG5cclxuLmhlYWQtYmxvY2sge1xyXG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICB0b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlcmJhciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjNDU2ZWZlMjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnU6OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbn1cclxuXHJcbi5tZi0zMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG59XHJcblxyXG4ubXQtMTgge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5tZW51LWxpc3Qge1xyXG4gIGJveC1zaGFkb3c6ICNjOWM5Yzk7XHJcbn1cclxuXHJcbi5JdGVtX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5sb2dvdXQtYWxlcnQge1xyXG4gIC5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBidXR0b24uYWxlcnQtYnV0dG9uLmFsZXJ0LWJ1dHRvbi1jYW5jZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 36606:
/*!************************************************************************************!*\
  !*** ./src/app/components/alert-internet/alert-internet.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".box {\n  width: 60px;\n  height: 60px;\n  background: #FFEDED;\n  color: #FFEDED;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.alert {\n  font-family: inherit;\n}\n\n.no-internet-img {\n  width: 60px;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWludGVybmV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFsZXJ0LWludGVybmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkVERUQ7XHJcbiAgICBjb2xvcjogI0ZGRURFRDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5uby1pbnRlcm5ldC1pbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu\r\n      contentId=\"main-content\"\r\n      type=\"overlay\"\r\n      menuId=\"slidingMenu\"\r\n      swipe-gesture=\"false\"\r\n    >\r\n      <ion-header class=\"headerbar\">\r\n        <ion-toolbar class=\"head-block\">\r\n          <ion-item lines=\"none\">\r\n            <ng-container\r\n              *ngIf=\"avatar == null || avatar == undefined; else showAvatar\"\r\n            >\r\n              <div\r\n                class=\"profile-image mx-2\"\r\n                [style.background]=\"dataService.getRandomColor(i + 3)\"\r\n              >\r\n                {{ currentUser?.firstName | uppercase | slice : 0 : 1\r\n                }}{{ currentUser?.lastName | uppercase | slice : 0 : 1 }}\r\n              </div>\r\n            </ng-container>\r\n            <ng-template #showAvatar>\r\n              <ion-avatar slot=\"start\">\r\n                <img [src]=\"avatar\" alt=\"profile\" class=\"profile-pic\" />\r\n              </ion-avatar>\r\n            </ng-template>\r\n            <ion-label>\r\n              <h2>{{ currentUser?.firstName }} {{ currentUser?.lastName }}</h2>\r\n              <p>\r\n                <small>{{ currentUser?.email }}</small>\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list\r\n          lines=\"none\"\r\n          class=\"my-3\"\r\n          *ngIf=\"userRole == roles.MOBILE_CUSTOMER\"\r\n        >\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToTransaction()\">\r\n            <img src=\"assets/images/transaction.svg\" alt=\"MyTransaction\" />\r\n            <ion-label class=\"label\"\r\n              >My Transaction<br />\r\n              <small class=\"text-muted\"\r\n                >Quick Modify For Your Appointment</small\r\n              >\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToAppointment()\">\r\n            <img src=\"assets/images/appointment.svg\" alt=\"appointmenthistory\" />\r\n            <ion-label class=\"label\"\r\n              >Appointment History <br />\r\n              <small class=\"text-muted\">Overall activity</small>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToExchangerate()\">\r\n            <img src=\"assets/images/exchange-main.svg\" alt=\"foreignexchange\" />\r\n            <ion-label class=\"label\"\r\n              >Foreign exchange <br />\r\n              <small class=\"text-muted\">Exchange rate</small>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"Item_title mt-18\" (click)=\"goToNotifications()\">\r\n            <img src=\"assets/images/notification.svg\" alt=\"notification\" />\r\n            <ion-label class=\"label\"\r\n              >Notifications <br />\r\n              <small class=\"text-muted\"\r\n                >Change your notification settings</small\r\n              >\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-list\r\n          lines=\"none\"\r\n          class=\"my-3\"\r\n          *ngIf=\"\r\n            userRole == roles.MOBILE_CUSTOMER || userRole == roles.MOBILE_AGENT\r\n          \"\r\n        >\r\n          <ion-item class=\"Item_title\" (click)=\"logoutApp()\">\r\n            <img src=\"assets/images/logout.svg\" alt=\"logout\" />\r\n            <ion-label class=\"label\"\r\n              >Logout <br />\r\n              <small class=\"text-muted\">Logout your account</small>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n      <ion-footer class=\"ion-padding ion-no-border bg-content\">\r\n        <h6 class=\"app-font version-color\">Ver 0.0.41</h6>\r\n        <p class=\"app-font version-color\">Build 41</p>\r\n      </ion-footer>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";

/***/ }),

/***/ 48451:
/*!************************************************************************************!*\
  !*** ./src/app/components/alert-internet/alert-internet.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\">\r\n  <div class=\"alert text-center\">\r\n\r\n    <img class=\"no-internet-img\" src=\"assets/images/1226.svg\">\r\n\r\n    <div class=\"title\">\r\n      <h3>Alert</h3>\r\n      <p>There seems to be a low network coverage area. Please try again later.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-button shape=\"round\" expand=\"block\" (click)=\"confirm()\">Done</ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map