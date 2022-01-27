(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-home-home-module~views-others-others-module~views-sessions-sessions-module"],{

/***/ "kA6c":
/*!***********************************************!*\
  !*** ./src/app/views/home/account.service.ts ***!
  \***********************************************/
/*! exports provided: API_URL, AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/app.constant */ "ngOV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




const API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].baseURL;
const tabsActive = ['AES', 'AES_SUM'];
class AccountService {
    constructor() {
        this.tabsKey = [];
        this.categories = [
            {
                id: 1,
                title: 'Application Entry Stage',
                state: 'application/list',
                icon: 'account_balance_wallet',
                type: 'dropDown',
                isActive: true,
                tooltip: 'Item',
                isOpen: "false",
                submenu: [
                    {
                        id: 111,
                        title: 'Summary',
                        type: 'link',
                        state: 'application/list',
                        isActive: true,
                        account_tiles: [
                            {
                                id: 1111,
                                title: '1. Account Details',
                                content: "Details such as Branch name, account number, etc. which uniquely identify a bank account are added",
                                percentage: 0,
                                status: '',
                                state: 'application/create-customer-account',
                                avatar: "assets/images/svg/Group 673.svg",
                                isActive: false,
                            }, {
                                id: 1112,
                                title: '2. Customer Information Details',
                                content: "All the primary information about the customers account is captured",
                                percentage: 0,
                                status: '',
                                state: 'application/customer-information',
                                avatar: "assets/images/svg/undraw_personal_information_re_vw8a.svg",
                                isActive: false,
                            }, {
                                id: 1113,
                                title: '3. Mandate Details',
                                content: "Mode of operation, Signatory details of the customer is added",
                                percentage: 0,
                                status: '',
                                state: 'application/mandate',
                                avatar: "assets/images/svg/undraw_Terms_re_6ak4.svg",
                                isActive: false,
                            }, {
                                id: 1114,
                                title: '4. Account Service',
                                content: "Information on the customers Account Statement, Passbook, Cheque Books are added.",
                                percentage: 0,
                                status: '',
                                state: 'application/account-service',
                                avatar: "assets/images/svg/undraw_opinion_dxp8.svg",
                                isActive: false,
                            }, {
                                id: 1115,
                                title: '5. Nominee Details',
                                content: "Details such as name, relation address of the nominee is added.",
                                percentage: 0,
                                status: '',
                                state: 'application/nominee',
                                avatar: "assets/images/svg/Group 47.svg",
                                isActive: false,
                            },
                        ]
                    },
                    {
                        id: 112,
                        title: 'Account Details',
                        type: 'link',
                        isActive: true,
                        state: 'application/create-customer-account',
                    }, {
                        id: 113,
                        title: 'Customer Information Details',
                        type: 'link',
                        state: 'application/customer-information',
                        isActive: false,
                    },
                    {
                        id: 114,
                        title: 'Mandate Details',
                        type: 'link',
                        state: 'application/mandate',
                        isActive: false,
                    }, {
                        id: 115,
                        title: 'Account Service',
                        type: 'link',
                        state: 'application/account-service',
                        isActive: false,
                    }, {
                        id: 116,
                        title: 'Nominee Details',
                        type: 'link',
                        state: 'application/nominee',
                        isActive: false,
                    }
                ]
            }, {
                id: 2,
                title: 'Limit Entry Stage',
                state: 'application/limit-entry-stage',
                icon: 'credit_card',
                isOpen: "false",
                isActive: true,
                type: 'dropDown',
                submenu: [
                    {
                        id: 211,
                        title: 'Summary',
                        type: 'link',
                        state: 'application/limit-entry-stage/list',
                        isActive: true,
                    }, {
                        id: 212,
                        title: 'Secured Overdraft Details',
                        type: 'link',
                        state: 'application/limit-entry-stage/secured-draft',
                        isActive: false,
                    }, {
                        id: 213,
                        title: 'Unsecured Overdraft Details',
                        type: 'link',
                        state: 'application/limit-entry-stage/unsecured-draft',
                        isActive: false,
                    }, {
                        id: 214,
                        title: 'Financial Details',
                        type: 'link',
                        state: 'application/limit-entry-stage/financial-details',
                        isActive: false,
                    },
                ]
            }, {
                id: 3,
                title: 'Application Enrichment',
                state: 'application/create-customer-account',
                icon: 'style',
                isOpen: "false",
                isActive: false,
                type: 'dropDown',
                submenu: [
                    {
                        id: 311,
                        title: 'Summary',
                        type: 'link',
                        state: 'application/enrichment/list',
                        isActive: false,
                    }, {
                        id: 312,
                        title: 'Interest Details',
                        type: 'link',
                        state: 'application/enrichment/interest',
                        isActive: false,
                    }, {
                        id: 313,
                        title: 'Charge Details',
                        type: 'link',
                        state: 'application/enrichment/charge',
                        isActive: false,
                    },
                ]
            }, {
                id: 4,
                title: 'Application Assessment',
                state: 'create-customer-account',
                icon: 'assessment',
                isOpen: "false",
                type: 'dropDown',
                isActive: false,
                submenu: [
                    {
                        id: 411,
                        title: 'Summary',
                        type: 'link',
                        state: 'application/assessment/list',
                        isActive: false,
                    }, {
                        id: 412,
                        title: 'Qualitative Scoreboard',
                        type: 'link',
                        state: 'application/assessment/qualitative',
                        isActive: false,
                    }, {
                        id: 413,
                        title: 'Assessment Report',
                        type: 'link',
                        state: 'application/assessment/report',
                        isActive: false,
                    },
                ]
            }, {
                id: 5,
                title: 'Funding Stage',
                state: 'create-customer-account',
                icon: 'card_membership',
                isOpen: "false",
                isActive: false,
                type: 'dropDown',
                submenu: [
                    {
                        id: 511,
                        title: 'Summary',
                        type: 'link',
                        state: 'application/funding/list',
                        isActive: false,
                    }, {
                        id: 512,
                        title: 'Initial Funding Stage',
                        type: 'link',
                        state: 'application/funding/details',
                        isActive: false,
                    },
                ]
            }, {
                id: 6,
                title: 'Approval Stage',
                state: 'create-customer-account',
                icon: 'done_all',
                isOpen: "false",
                isActive: false,
                type: 'dropDown',
                submenu: [
                    {
                        id: 611,
                        title: 'Summary',
                        type: 'link',
                        isActive: false,
                        state: 'application/approval/list',
                    }, {
                        id: 612,
                        title: 'Approval Details',
                        isActive: false,
                        type: 'link',
                        state: 'application/approval/details',
                    },
                ]
            }, {
                id: 7,
                title: 'Digital Signing',
                state: 'create-customer-account',
                icon: 'web_asset',
                isOpen: "false",
                type: 'dropDown',
                isActive: false,
                submenu: [
                    {
                        id: 711,
                        title: 'Summary',
                        type: 'link',
                        isActive: false,
                        state: 'application/digital-sign/home',
                    }, {
                        id: 712,
                        title: 'Digital Signing',
                        type: 'link',
                        isActive: false,
                        state: 'application/digital-sign/options',
                    },
                ]
            },
        ];
        this.accountItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.categories);
        this.accountItems$ = this.accountItems.asObservable();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~views-home-home-module~views-others-others-module~views-sessions-sessions-module-es2015.js.map