"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forex-transaction_forex-transaction_module_ts"],{

/***/ 78199:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexTransactionPageRoutingModule": () => (/* binding */ ForexTransactionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forex_transaction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-transaction.page */ 20741);




const routes = [
    {
        path: '',
        component: _forex_transaction_page__WEBPACK_IMPORTED_MODULE_0__.ForexTransactionPage
    }
];
let ForexTransactionPageRoutingModule = class ForexTransactionPageRoutingModule {
};
ForexTransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForexTransactionPageRoutingModule);



/***/ }),

/***/ 67890:
/*!*********************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexTransactionPageModule": () => (/* binding */ ForexTransactionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forex_transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-transaction-routing.module */ 78199);
/* harmony import */ var _forex_transaction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-transaction.page */ 20741);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ 96801);








let ForexTransactionPageModule = class ForexTransactionPageModule {
};
ForexTransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forex_transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForexTransactionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__.NgxFlagPickerModule,
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
        declarations: [_forex_transaction_page__WEBPACK_IMPORTED_MODULE_1__.ForexTransactionPage]
    })
], ForexTransactionPageModule);



/***/ }),

/***/ 20741:
/*!*******************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexTransactionPage": () => (/* binding */ ForexTransactionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forex_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-transaction.page.html?ngResource */ 206);
/* harmony import */ var _forex_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-transaction.page.scss?ngResource */ 88991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ 52468);













let ForexTransactionPage = class ForexTransactionPage {
    // changeSelectedCountryCode(value: string): void {
    //   this.selectedCountryCode = value;
    // }
    constructor(fb, api, loading, router, modalController, dataService) {
        this.fb = fb;
        this.api = api;
        this.loading = loading;
        this.router = router;
        this.modalController = modalController;
        this.dataService = dataService;
        this.flag = true;
        this.accountCurrencyFlag = 'in';
        this.submitted = true;
        this.submitted1 = true;
        this.users = [];
        this.negotiated = ['0.98', '78.90'];
        this.isShow = true;
        this.currencyList = [
            'BG',
            'BN'
        ];
        this.selectedCountryCode = 'in';
        this.countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];
        this.minDate = new Date().toISOString();
        this.maxDate = "2025";
        this.countries = [
            { code: 'AF', countryName: 'AFGHANISTAN', currency: 'AFN', currencyName: 'Afghani' },
            { code: 'AL', countryName: 'ALBANIA', currency: 'ALL', currencyName: 'Lek' },
            { code: 'DZ', countryName: 'ALGERIA', currency: 'DZD', currencyName: 'Algerian Dinar' },
            { code: 'AS', countryName: 'AMERICAN SAMOA', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'AD', countryName: 'ANDORRA ', currency: 'EUR', currencyName: 'Euro' },
            { code: 'AO', countryName: 'ANGOLA', currency: 'AOA', currencyName: 'Kwanza' },
            { code: 'AI', countryName: 'ANGUILLA', currency: 'XCD', currencyName: 'East Carribbean Dollar' },
            { code: 'AG', countryName: 'ANTIGUA AND BARBUDA', currency: 'XCD', currencyName: 'East Carribean Dollar' },
            { code: 'AR', countryName: 'ARGENTINA', currency: 'ARS', currencyName: 'Argentine Peso' },
            { code: 'AM', countryName: 'ARMENIA', currency: 'AMD', currencyName: 'Armenian Dram' },
            { code: 'AW', countryName: 'ARUBA', currency: 'AWG', currencyName: 'Aruban Guilder' },
            { code: 'AU', countryName: 'AUSTRALIA', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'AT', countryName: 'AUSTRIA', currency: 'EUR', currencyName: 'Euro' },
            { code: 'AZ', countryName: 'AZERBAIJAN', currency: 'AZM', currencyName: 'Azerbaijanian Manat' },
            { code: 'BS', countryName: 'BAHAMAS', currency: 'BSD', currencyName: 'Bahamian Dollar' },
            { code: 'BH', countryName: 'BAHRAIN', currency: 'BHD', currencyName: 'Bahraini Dinar' },
            { code: 'BD', countryName: 'BANGLADESH', currency: 'BDT', currencyName: 'Taka' },
            { code: 'BB', countryName: 'BARBADOS', currency: 'BBD', currencyName: 'Barbados Dollar' },
            { code: 'BY', countryName: 'BELARUS', currency: 'BYR', currencyName: 'Belarussian Ruble' },
            { code: 'BE', countryName: 'BELGIUM', currency: 'EUR', currencyName: 'Euro' },
            { code: 'BZ', countryName: 'BELIZE', currency: 'BZD', currencyName: 'Belize Dollar' },
            { code: 'BJ', countryName: 'BENIN', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'BM', countryName: 'BERMUDA', currency: 'BMD', currencyName: 'Bermudian Dollar' },
            { code: 'BT', countryName: 'BHUTAN', currency: 'INR', currencyName: 'Indian Rupee' },
            { code: 'BT', countryName: 'BHUTAN', currency: 'BTN', currencyName: 'Ngultrum' },
            { code: 'BO', countryName: 'BOLIVIA', currency: 'BOB', currencyName: 'Boliviano' },
            { code: 'BO', countryName: 'BOLIVIA', currency: 'BOV', currencyName: 'Mvdol' },
            { code: 'BA', countryName: 'BOSNIA AND HERZEGOVINA', currency: 'BAM', currencyName: 'Convertible Marks' },
            { code: 'BW', countryName: 'BOTSWANA', currency: 'BWP', currencyName: 'Pula' },
            { code: 'BV', countryName: 'BOUVET ISLAND', currency: 'NOK', currencyName: 'Norvegian Krone' },
            { code: 'BR', countryName: 'BRAZIL', currency: 'BRL', currencyName: 'Brazilian Real' },
            { code: 'IO', countryName: 'BRITISH INDIAN OCEAN TERRITORY', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'BN', countryName: 'BRUNEI DARUSSALAM', currency: 'BND', currencyName: 'Brunei Dollar' },
            { code: 'BG', countryName: 'BULGARIA', currency: 'BGN', currencyName: 'Bulgarian Lev' },
            { code: 'BF', countryName: 'BURKINA FASO', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'BI', countryName: 'BURUNDI', currency: 'BIF', currencyName: 'Burundi Franc' },
            { code: 'KH', countryName: 'CAMBODIA', currency: 'KHR', currencyName: 'Riel' },
            { code: 'CM', countryName: 'CAMEROON', currency: 'XAF', currencyName: 'CFA Franc BEAC' },
            { code: 'CA', countryName: 'CANADA', currency: 'CAD', currencyName: 'Canadian Dollar' },
            { code: 'CV', countryName: 'CAPE VERDE', currency: 'CVE', currencyName: 'Cape Verde Escudo' },
            { code: 'KY', countryName: 'CAYMAN ISLANDS', currency: 'KYD', currencyName: 'Cayman Islands Dollar' },
            { code: 'CF', countryName: 'CENTRAL AFRICAN REPUBLIC', currency: 'XAF', currencyName: 'CFA Franc BEAC' },
            { code: 'TD', countryName: 'CHAD', currency: 'XAF', currencyName: 'CFA Franc BEAC' },
            { code: 'CL', countryName: 'CHILE', currency: 'CLP', currencyName: 'Chilean Peso' },
            { code: 'CL', countryName: 'CHILE', currency: 'CLF', currencyName: 'Unidades de fomento' },
            { code: 'CN', countryName: 'CHINA', currency: 'CNY', currencyName: 'Yuan Renminbi' },
            { code: 'CX', countryName: 'CHRISTMAS ISLAND', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'CC', countryName: 'COCOS (KEELING) ISLANDS', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'CO', countryName: 'COLOMBIA', currency: 'COP', currencyName: 'Colombian Peso' },
            { code: 'CO', countryName: 'COLOMBIA', currency: 'COU', currencyName: 'Unidad de Valor Real' },
            { code: 'KM', countryName: 'COMOROS', currency: 'KMF', currencyName: 'Comoro Franc' },
            { code: 'CG', countryName: 'CONGO', currency: 'XAF', currencyName: 'CFA Franc BEAC' },
            { code: 'CD', countryName: 'CONGO, THE DEMOCRATIC REPUBLIC OF', currency: 'CDF', currencyName: 'Franc Congolais' },
            { code: 'CK', countryName: 'COOK ISLANDS', currency: 'NZD', currencyName: 'New Zealand Dollar' },
            { code: 'CR', countryName: 'COSTA RICA', currency: 'CRC', currencyName: 'Costa Rican Colon' },
            { code: 'CI', countryName: 'COTE DIVOIRE', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'HR', countryName: 'CROATIA', currency: 'HRK', currencyName: 'Croatian kuna' },
            { code: 'CU', countryName: 'CUBA', currency: 'CUP', currencyName: 'Cuban Peso' },
            { code: 'CY', countryName: 'CYPRUS', currency: 'CYP', currencyName: 'Cyprus Pound' },
            { code: 'CZ', countryName: 'CZECH REPUBLIC', currency: 'CZK', currencyName: 'Czech Koruna' },
            { code: 'DK', countryName: 'DENMARK', currency: 'DKK', currencyName: 'Danish Krone' },
            { code: 'DJ', countryName: 'DJIBOUTI', currency: 'DJF', currencyName: 'Djibouti Franc' },
            { code: 'DM', countryName: 'DOMINICA', currency: 'XCD', currencyName: 'East Caribbean Dollar' },
            { code: 'DO', countryName: 'DOMINICAN REPUBLIC', currency: 'DOP', currencyName: 'Dominican Peso' },
            { code: 'EC', countryName: 'ECUADOR', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'EG', countryName: 'EGYPT', currency: 'EGP', currencyName: 'Egyptian Pound' },
            { code: 'SV', countryName: 'EL SALVADOR', currency: 'SVC', currencyName: 'El Salvador Colon' },
            { code: 'SV', countryName: 'EL SALVADOR', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'GQ', countryName: 'EQUATORIAL GUINEA', currency: 'XAF', currencyName: 'CFA Franc BEAC' },
            { code: 'ER', countryName: 'ERITREA', currency: 'ERN', currencyName: 'Nakfa' },
            { code: 'EE', countryName: 'ESTONIA', currency: 'EEK', currencyName: 'Kroon' },
            { code: 'ET', countryName: 'ETHIOPIA', currency: 'ETB', currencyName: 'Ethiopian Birr' },
            { code: 'FK', countryName: 'FALKLAND ISLANDS (MALVINAS)', currency: 'FKP', currencyName: 'Falkland Islands Pound' },
            { code: 'FO', countryName: 'FAROE ISLANDS', currency: 'DKK', currencyName: 'Danish Krone' },
            { code: 'FJ', countryName: 'FIJI', currency: 'FJD', currencyName: 'Fiji Dollar' },
            { code: 'FI', countryName: 'FINLAND ', currency: 'EUR', currencyName: 'Euro' },
            { code: 'FR', countryName: 'FRANCE', currency: 'EUR', currencyName: 'Euro' },
            { code: 'GF', countryName: 'FRENCH GUIANA ', currency: 'EUR', currencyName: 'Euro' },
            { code: 'PF', countryName: 'FRENCH POLYNESIA', currency: 'XPF', currencyName: 'CFP Franc' },
            { code: 'TF', countryName: 'FRENCH SOUTHERN TERRITORIES', currency: 'EUR', currencyName: 'Euro' },
            { code: 'GA', countryName: 'GABON', currency: 'XAF', currencyName: 'CFA Franc BEAC' },
            { code: 'GM', countryName: 'GAMBIA', currency: 'GMD', currencyName: 'Dalasi' },
            { code: 'GE', countryName: 'GEORGIA', currency: 'GEL', currencyName: 'Lari' },
            { code: 'DE', countryName: 'GERMANY', currency: 'EUR', currencyName: 'Euro' },
            { code: 'GH', countryName: 'GHANA', currency: 'GHC', currencyName: 'Cedi' },
            { code: 'GI', countryName: 'GIBRALTAR', currency: 'GIP', currencyName: 'Gibraltar Pound' },
            { code: 'GR', countryName: 'GREECE', currency: 'EUR', currencyName: 'Euro' },
            { code: 'GL', countryName: 'GREENLAND', currency: 'DKK', currencyName: 'Danish Krone' },
            { code: 'GD', countryName: 'GRENADA', currency: 'XCD', currencyName: 'East Caribbean Dollar' },
            { code: 'GP', countryName: 'GUADELOUPE', currency: 'EUR', currencyName: 'Euro' },
            { code: 'GU', countryName: 'GUAM', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'GT', countryName: 'GUATEMALA', currency: 'GTQ', currencyName: 'Quetzal' },
            { code: 'GN', countryName: 'GUINEA', currency: 'GNF', currencyName: 'Guinea Franc' },
            { code: 'GW', countryName: 'GUINEA-BISSAU', currency: 'GWP', currencyName: 'Guinea-Bissau Peso' },
            { code: 'GW', countryName: 'GUINEA-BISSAU', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'GY', countryName: 'GUYANA', currency: 'GYD', currencyName: 'Guyana Dollar' },
            { code: 'HT', countryName: 'HAITI', currency: 'HTG', currencyName: 'Gourde' },
            { code: 'HT', countryName: 'HAITI', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'HM', countryName: 'HEARD ISLAND AND MCDONALD ISLANDS', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'VA', countryName: 'HOLY SEE (VATICAN CITY STATE)', currency: 'EUR', currencyName: 'Euro' },
            { code: 'HN', countryName: 'HONDURAS', currency: 'HNL', currencyName: 'Lempira' },
            { code: 'HK', countryName: 'HONG KONG', currency: 'HKD', currencyName: 'Hong Kong Dollar' },
            { code: 'HU', countryName: 'HUNGARY', currency: 'HUF', currencyName: 'Forint' },
            { code: 'IS', countryName: 'ICELAND', currency: 'ISK', currencyName: 'Iceland Krona' },
            { code: 'IN', countryName: 'INDIA', currency: 'INR', currencyName: 'Indian Rupee' },
            { code: 'ID', countryName: 'INDONESIA', currency: 'IDR', currencyName: 'Rupiah' },
            { code: 'IR', countryName: 'IRAN, ISLAMIC REPUBLIC OF', currency: 'IRR', currencyName: 'Iranian Rial' },
            { code: 'IQ', countryName: 'IRAQ', currency: 'IQD', currencyName: 'Iraqi Dinar' },
            { code: 'IE', countryName: 'IRELAND', currency: 'EUR', currencyName: 'Euro' },
            { code: 'IL', countryName: 'ISRAEL', currency: 'ILS', currencyName: 'New Israeli Sheqel' },
            { code: 'IT', countryName: 'ITALY', currency: 'EUR', currencyName: 'Euro' },
            { code: 'JM', countryName: 'JAMAICA', currency: 'JMD', currencyName: 'Jamaican Dollar' },
            { code: 'JP', countryName: 'JAPAN', currency: 'JPY', currencyName: 'Yen' },
            { code: 'JO', countryName: 'JORDAN', currency: 'JOD', currencyName: 'Jordanian Dinar' },
            { code: 'KZ', countryName: 'KAZAKHSTAN', currency: 'KZT', currencyName: 'Tenge' },
            { code: 'KE', countryName: 'KENYA', currency: 'KES', currencyName: 'Kenyan Shilling' },
            { code: 'KI', countryName: 'KIRIBATI', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'KP', countryName: 'KOREA, DEMOCRATIC PEOPLES REPUBLIC OF', currency: 'KPW', currencyName: 'North Korean Won' },
            { code: 'KR', countryName: 'KOREA, REPUBLIC OF', currency: 'KRW', currencyName: 'Won' },
            { code: 'KW', countryName: 'KUWAIT', currency: 'KWD', currencyName: 'Kuwaiti Dinar' },
            { code: 'KG', countryName: 'KYRGYZSTAN', currency: 'KGS', currencyName: 'Som' },
            { code: 'LA', countryName: 'LAO PEOPLES DEMOCRATIC REPUBLIC', currency: 'LAK', currencyName: 'Kip' },
            { code: 'LV', countryName: 'LATVIA', currency: 'LVL', currencyName: 'Latvian Lats' },
            { code: 'LB', countryName: 'LEBANON', currency: 'LBP', currencyName: 'Lebanese Pound' },
            { code: 'LS', countryName: 'LESOTHO', currency: 'ZAR', currencyName: 'Rand' },
            { code: 'LS', countryName: 'LESOTHO', currency: 'LSL', currencyName: 'Loti' },
            { code: 'LR', countryName: 'LIBERIA', currency: 'LRD', currencyName: 'Liberian Dollar' },
            { code: 'LY', countryName: 'LIBYAN ARAB JAMAHIRIYA', currency: 'LYD', currencyName: 'Lybian Dinar' },
            { code: 'LI', countryName: 'LIECHTENSTEIN', currency: 'CHF', currencyName: 'Swiss Franc' },
            { code: 'LT', countryName: 'LITHUANIA', currency: 'LTL', currencyName: 'Lithuanian Litas' },
            { code: 'LU', countryName: 'LUXEMBOURG', currency: 'EUR', currencyName: 'Euro' },
            { code: 'MO', countryName: 'MACAO', currency: 'MOP', currencyName: 'Pataca' },
            { code: 'MK', countryName: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', currency: 'MKD', currencyName: 'Denar' },
            { code: 'MG', countryName: 'MADAGASCAR', currency: 'MGA', currencyName: 'Ariary' },
            { code: 'MG', countryName: 'MADAGASCAR', currency: 'MGF', currencyName: 'Malagasy Franc' },
            { code: 'MW', countryName: 'MALAWI', currency: 'MWK', currencyName: 'Kwacha' },
            { code: 'MY', countryName: 'MALAYSIA', currency: 'MYR', currencyName: 'Malaysian Ringgit' },
            { code: 'MV', countryName: 'MALDIVES', currency: 'MVR', currencyName: 'Rufiyaa' },
            { code: 'ML', countryName: 'MALI', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'MT', countryName: 'MALTA', currency: 'MTL', currencyName: 'Maltese Lira' },
            { code: 'MH', countryName: 'MARSHALL ISLANDS', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'MQ', countryName: 'MARTINIQUE', currency: 'EUR', currencyName: 'Euro' },
            { code: 'MR', countryName: 'MAURITANIA', currency: 'MRO', currencyName: 'Ouguiya' },
            { code: 'MU', countryName: 'MAURITIUS', currency: 'MUR', currencyName: 'Mauritius Rupee' },
            { code: 'YT', countryName: 'MAYOTTE', currency: 'EUR', currencyName: 'Euro' },
            { code: 'MX', countryName: 'MEXICO', currency: 'MXN', currencyName: 'Mexican Peso' },
            { code: 'MX', countryName: 'MEXICO', currency: 'MXV', currencyName: 'Mexican Unidad de Inversion (UDI)' },
            { code: 'FM', countryName: 'MICRONESIA, FEDERATED STATES OF', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'MD', countryName: 'MOLDOVA, REPUBLIC OF', currency: 'MDL', currencyName: 'Moldovan Leu' },
            { code: 'MC', countryName: 'MONACO', currency: 'EUR', currencyName: 'Euro' },
            { code: 'MN', countryName: 'MONGOLIA', currency: 'MNT', currencyName: 'Tugrik' },
            { code: 'MS', countryName: 'MONTSERRAT', currency: 'XCD', currencyName: 'East Caribbean Dollar' },
            { code: 'MA', countryName: 'MOROCCO', currency: 'MAD', currencyName: 'Moroccan Dirham' },
            { code: 'MZ', countryName: 'MOZAMBIQUE', currency: 'MZM', currencyName: 'Metical' },
            { code: 'MM', countryName: 'MYANMAR', currency: 'MMK', currencyName: 'Kyat' },
            { code: 'NA', countryName: 'NAMIBIA', currency: 'ZAR', currencyName: 'Rand' },
            { code: 'NA', countryName: 'NAMIBIA', currency: 'NAD', currencyName: 'Namibia Dollar' },
            { code: 'NR', countryName: 'NAURU', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'NP', countryName: 'NEPAL', currency: 'NPR', currencyName: 'Nepalese Rupee' },
            { code: 'NL', countryName: 'NETHERLANDS', currency: 'EUR', currencyName: 'Euro' },
            { code: 'AN', countryName: 'NETHERLANDS ANTILLES', currency: 'ANG', currencyName: 'Netherlands Antillan Guilder' },
            { code: 'NC', countryName: 'NEW CALEDONIA', currency: 'XPF', currencyName: 'CFP Franc' },
            { code: 'NZ', countryName: 'NEW ZEALAND', currency: 'NZD', currencyName: 'New Zealand Dollar' },
            { code: 'NI', countryName: 'NICARAGUA', currency: 'NIO', currencyName: 'Cordoba Oro' },
            { code: 'NE', countryName: 'NIGER', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'NG', countryName: 'NIGERIA', currency: 'NGN', currencyName: 'Naira' },
            { code: 'NU', countryName: 'NIUE', currency: 'NZD', currencyName: 'New Zealand Dollar' },
            { code: 'NF', countryName: 'NORFOLK ISLAND', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'MP', countryName: 'NORTHERN MARIANA ISLANDS', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'NO', countryName: 'NORWAY', currency: 'NOK', currencyName: 'Norwegian Krone' },
            { code: 'OM', countryName: 'OMAN', currency: 'OMR', currencyName: 'Rial Omani' },
            { code: 'PK', countryName: 'PAKISTAN', currency: 'PKR', currencyName: 'Pakistan Rupee' },
            { code: 'PW', countryName: 'PALAU', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'PA', countryName: 'PANAMA', currency: 'PAB', currencyName: 'Balboa' },
            { code: 'PA', countryName: 'PANAMA', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'PG', countryName: 'PAPUA NEW GUINEA', currency: 'PGK', currencyName: 'Kina' },
            { code: 'PY', countryName: 'PARAGUAY', currency: 'PYG', currencyName: 'Guarani' },
            { code: 'PE', countryName: 'PERU', currency: 'PEN', currencyName: 'Nuevo Sol' },
            { code: 'PH', countryName: 'PHILIPPINES', currency: 'PHP', currencyName: 'Philippine Peso' },
            { code: 'PN', countryName: 'PITCAIRN', currency: 'NZD', currencyName: 'New Zealand Dollar' },
            { code: 'PL', countryName: 'POLAND', currency: 'PLN', currencyName: 'Zloty' },
            { code: 'PT', countryName: 'PORTUGAL', currency: 'EUR', currencyName: 'Euro' },
            { code: 'PR', countryName: 'PUERTO RICO', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'QA', countryName: 'QATAR', currency: 'QAR', currencyName: 'Qatari Rial' },
            { code: 'RE', countryName: 'REUNION', currency: 'EUR', currencyName: 'Euro' },
            { code: 'RO', countryName: 'ROMANIA', currency: 'ROL', currencyName: 'Leu' },
            { code: 'RU', countryName: 'RUSSIAN FEDERATION', currency: 'RUR', currencyName: 'Russian Ruble' },
            { code: 'RU', countryName: 'RUSSIAN FEDERATION', currency: 'RUB', currencyName: 'Russian Ruble' },
            { code: 'RW', countryName: 'RWANDA', currency: 'RWF', currencyName: 'Rwanda Franc' },
            { code: 'SH', countryName: 'SAINT HELENA', currency: 'SHP', currencyName: 'Saint Helena Pound' },
            { code: 'KN', countryName: 'SAINT KITTS AND NEVIS', currency: 'XCD', currencyName: 'East Caribbean Dollar' },
            { code: 'LC', countryName: 'SAINT LUCIA', currency: 'XCD', currencyName: 'East Caribbean Dollar' },
            { code: 'PM', countryName: 'SAINT PIERRE AND MIQUELON', currency: 'EUR', currencyName: 'Euro' },
            { code: 'VC', countryName: 'SAINT VINCENT AND THE GRENADINES', currency: 'XCD', currencyName: 'East Caribbean Dollar' },
            { code: 'WS', countryName: 'SAMOA', currency: 'WST', currencyName: 'Tala' },
            { code: 'SM', countryName: 'SAN MARINO', currency: 'EUR', currencyName: 'Euro' },
            { code: 'ST', countryName: 'SAO TOME AND PRINCIPE', currency: 'STD', currencyName: 'Dobra' },
            { code: 'SA', countryName: 'SAUDI ARABIA', currency: 'SAR', currencyName: 'Saudi Riyal' },
            { code: 'SN', countryName: 'SENEGAL', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'CS', countryName: 'SERBIA & MONTENEGRO', currency: 'EUR', currencyName: 'Euro' },
            { code: 'CS', countryName: 'SERBIA & MONTENEGRO', currency: 'CSD', currencyName: 'Serbian Dinar' },
            { code: 'SC', countryName: 'SEYCHELLES', currency: 'SCR', currencyName: 'Seychelles Rupee' },
            { code: 'SL', countryName: 'SIERRA LEONE', currency: 'SLL', currencyName: 'Leone' },
            { code: 'SG', countryName: 'SINGAPORE', currency: 'SGD', currencyName: 'Singapore Dollar' },
            { code: 'SK', countryName: 'SLOVAKIA', currency: 'SKK', currencyName: 'Slovak Koruna' },
            { code: 'SI', countryName: 'SLOVENIA', currency: 'SIT', currencyName: 'Tolar' },
            { code: 'SB', countryName: 'SOLOMON ISLANDS', currency: 'SBD', currencyName: 'Solomon Islands Dollar' },
            { code: 'SO', countryName: 'SOMALIA', currency: 'SOS', currencyName: 'Somali Shilling' },
            { code: 'ZA', countryName: 'SOUTH AFRICA', currency: 'ZAR', currencyName: 'Rand' },
            { code: 'ES', countryName: 'SPAIN', currency: 'EUR', currencyName: 'Euro' },
            { code: 'LK', countryName: 'SRI LANKA', currency: 'LKR', currencyName: 'Sri Lanka Rupee' },
            { code: 'SD', countryName: 'SUDAN', currency: 'SDD', currencyName: 'Sudanese Dinar' },
            { code: 'SR', countryName: 'SURINAME', currency: 'SRD', currencyName: 'Suriname Dollar' },
            { code: 'SJ', countryName: 'SVALBARD AND JAN MAYEN', currency: 'NOK', currencyName: 'Norwegian Krone' },
            { code: 'SZ', countryName: 'SWAZILAND', currency: 'SZL', currencyName: 'Lilangeni' },
            { code: 'SE', countryName: 'SWEDEN', currency: 'SEK', currencyName: 'Swedish Krona' },
            { code: 'CH', countryName: 'SWITZERLAND', currency: 'CHF', currencyName: 'Swiss Franc' },
            { code: 'SY', countryName: 'SYRIAN ARAB REPUBLIC', currency: 'SYP', currencyName: 'Syrian Pound' },
            { code: 'TW', countryName: 'TAIWAN, PROVINCE OF CHINA', currency: 'TWD', currencyName: 'New Taiwan Dollar' },
            { code: 'TJ', countryName: 'TAJIKISTAN', currency: 'TJS', currencyName: 'Somoni' },
            { code: 'TZ', countryName: 'TANZANIA, UNITED REPUBLIC OF', currency: 'TZS', currencyName: 'Tanzanian Shilling' },
            { code: 'TH', countryName: 'THAILAND', currency: 'THB', currencyName: 'Baht' },
            { code: 'TL', countryName: 'TIMOR-LESTE', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'TG', countryName: 'TOGO', currency: 'XOF', currencyName: 'CFA Franc BCEAO' },
            { code: 'TK', countryName: 'TOKELAU', currency: 'NZD', currencyName: 'New Zealand Dollar' },
            { code: 'TO', countryName: 'TONGA', currency: 'TOP', currencyName: 'Pa�anga' },
            { code: 'TT', countryName: 'TRINIDAD AND TOBAGO', currency: 'TTD', currencyName: 'Trinidad and Tobago Dollar' },
            { code: 'TN', countryName: 'TUNISIA', currency: 'TND', currencyName: 'Tunisian Dinar' },
            { code: 'TR', countryName: 'TURKEY', currency: 'TRL', currencyName: 'Turkish Lira' },
            { code: 'TM', countryName: 'TURKMENISTAN', currency: 'TMM', currencyName: 'Manat' },
            { code: 'TC', countryName: 'TURKS AND CAICOS ISLANDS', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'TV', countryName: 'TUVALU', currency: 'AUD', currencyName: 'Australian Dollar' },
            { code: 'UG', countryName: 'UGANDA', currency: 'UGX', currencyName: 'Uganda Shilling' },
            { code: 'UA', countryName: 'UKRAINE', currency: 'UAH', currencyName: 'Hryvnia' },
            { code: 'AE', countryName: 'UNITED ARAB EMIRATES', currency: 'AED', currencyName: 'UAE Dirham' },
            { code: 'GB', countryName: 'UNITED KINGDOM', currency: 'GBP', currencyName: 'Pound Sterling' },
            { code: 'US', countryName: 'UNITED STATES', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'US', countryName: 'UNITED STATES', currency: 'USS', currencyName: 'US Dollar (Same day)' },
            { code: 'US', countryName: 'UNITED STATES', currency: 'USN', currencyName: 'US Dollar (Next day)' },
            { code: 'UM', countryName: 'UNITED STATES MINOR OUTLYING ISLANDS', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'UY', countryName: 'URUGUAY', currency: 'UYU', currencyName: 'Peso Uruguayo' },
            { code: 'UZ', countryName: 'UZBEKISTAN', currency: 'UZS', currencyName: 'Uzbekistan Sum' },
            { code: 'VU', countryName: 'VANUATU', currency: 'VUV', currencyName: 'Vatu' },
            { code: 'VE', countryName: 'VENEZUELA', currency: 'VEB', currencyName: 'Bolivar' },
            { code: 'VN', countryName: 'VIET NAM', currency: 'VND', currencyName: 'Dong' },
            { code: 'VG', countryName: 'VIRGIN ISLANDS, BRITISH', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'VI', countryName: 'VIRGIN ISLANDS, U.S.', currency: 'USD', currencyName: 'US Dollar' },
            { code: 'WF', countryName: 'WALLIS AND FUTUNA', currency: 'XPF', currencyName: 'CFP Franc' },
            { code: 'EH', countryName: 'WESTERN SAHARA', currency: 'MAD', currencyName: 'Moroccan Dirham' },
            { code: 'YE', countryName: 'YEMEN', currency: 'YER', currencyName: 'Yemeni Rial' },
            { code: 'ZM', countryName: 'ZAMBIA', currency: 'ZMK', currencyName: 'Kwacha' },
            { code: 'ZW', countryName: 'ZIMBABWE', currency: 'ZWD', currencyName: 'Zimbabwe Dollar' },
        ];
    }
    ngOnInit() {
        var _a;
        this.currentUser = this.dataService.getCurrentUser();
        console.log(this.currentUser);
        const dt = new Date();
        this.minDate = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + (dt.getDate() < 10 ? ('0' + dt.getDate()) : dt.getDate());
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log('>>get router data -- :', this.routerData);
        }
        this.forexForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            productCode: ['FTX', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountCurrency: [(_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.currencyCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionType: ['buy', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            narrative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            denomination: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            totalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
        });
        this.forexForm.get('branchFlag').valueChanges.subscribe(val => {
            localStorage.setItem("BranchFlag", val);
            this.brnflg = val;
            if (this.brnflg == false && val == false) {
                this.forexForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                this.nearestBrn = false;
                this.accBranch = localStorage.getItem("AccBranch");
                this.forexForm.controls.transactionBranch.patchValue(this.accBranch);
            }
            if (this.brnflg == true && val == false) {
                this.forexForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.loadData();
        let today = new Date().toISOString();
        this.forexForm.get('transactionDate').patchValue(today);
    }
    trnBrn(trnBrn) {
        throw new Error('Method not implemented.');
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter((card) => card.status === 'APPROVED');
            this.resp = resp;
            console.log('backend resp in home', resp);
            this.users = resp.custAccount;
            this.forexForm.get('accountNumber').patchValue(this.users[0].accountId);
            this.forexForm.get('accountBranch').patchValue(resp.custAccount[0].accountBranch);
            this.currentBalance = this.users[0].amount;
            this.selectedCountryCode = resp.countryCode.toLowerCase();
            this.transactionCurrencyModel = resp.currencyCode;
            this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.getCurrencySymbol)(resp.custAccount[0].accountCurrency, 'narrow');
            this.api.getChargeDetails(this.forexForm.get('accountNumber').value).subscribe(resp => {
                var _a;
                console.log('getChargeDetails', resp);
                this.chargeAmount = ((_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount) || '';
                this.forexForm.get('totalChargeAmount').patchValue(this.chargeAmount);
            }, err => console.log('Error: ', err));
        }, (err) => {
            this.loading.dismiss();
        });
    }
    handleExchangeRate(event) {
        this.forexForm.get('totalTransactionAmount').patchValue(Number(event.target.value) + this.chargeAmount);
    }
    validateDisablebutton(button) {
        this.forexForm.valueChanges.subscribe(v => {
            // console.log("v:: ", v);
            if (button === 'disable1') {
                if (v.accountBranch != '' &&
                    v.accountNumber != '' &&
                    v.transactionCurrency != '' &&
                    v.transactionAmount != 0) {
                    this.submitted = false;
                }
                else {
                    this.submitted = true;
                }
            }
            if (button === 'disable2') {
                if (v.transactionBranch != '' &&
                    v.transactionDate != '' &&
                    v.transactionTime != '' &&
                    v.accountNo != '') {
                    this.submitted1 = false;
                }
                else {
                    this.submitted1 = true;
                }
            }
        });
        if (this.routerData) {
            this.submitted1 = false;
        }
    }
    accountEvent(event) {
        console.log('events::', event);
        console.log('events details::', event.detail);
        console.log('event', event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
            this.currentBalance = accbal.amount;
        });
    }
    // compareWith(o1: User, o2: User) {
    //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
    // }
    // isShow : boolean = true;
    // selectedCountryCode = 'ad';
    // // countryCodes = ['ad', 'ae', 'af', 'ag', 'al', 'ai'];
    selectCurrencyCode(code) {
        var _a;
        //console.log(code);
        console.log(code);
        const currencyCode = code.detail.value.currency;
        this.selectedCountryCode = code.detail.value.code.toLowerCase();
        localStorage.setItem("Transaction_Currency", code.target.value.currency);
        localStorage.setItem("Account_Currency", this.forexForm.value.accountCurrency);
        console.log(this.selectedCountryCode);
        if (this.routerData) {
            this.selectedCountryCode =
                this.routerData.data.transactionCurrency.toLowerCase();
            this.forexForm.controls.transactionCurrency.patchValue(this.routerData.data.transactionCurrency);
        }
        if (this.selectedCountryCode && !((_a = this.forexForm.get('accountCurrency')) === null || _a === void 0 ? void 0 : _a.value.toLowerCase().includes(this.selectedCountryCode))) {
            this.api.getCurrencyExRate(this.forexForm.get('accountCurrency').value, currencyCode).subscribe(resp => {
                var _a, _b;
                console.log(resp);
                this.exchangeRateInfo = resp;
                const transactionType = this.forexForm.get('transactionType').value;
                if (transactionType) {
                    if (transactionType === 'buy') {
                        this.forexForm.get('exchangeRate').patchValue((_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.buyRate);
                    }
                    if (transactionType === 'sell') {
                        this.forexForm.get('exchangeRate').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.sellRate);
                    }
                }
            }, err => console.log('Error: ', err));
        }
    }
    changeTransactionType(event) {
        var _a, _b, _c, _d;
        const transactionType = this.forexForm.get('transactionType').value;
        if (transactionType && this.exchangeRateInfo) {
            if (transactionType === 'buy') {
                this.forexForm.get('exchangeRate').patchValue((_b = (_a = this.exchangeRateInfo) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.buyRate);
            }
            if (transactionType === 'sell') {
                this.forexForm.get('exchangeRate').patchValue((_d = (_c = this.exchangeRateInfo) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.sellRate);
            }
        }
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
    }
    next() {
        const accBranch = this.resp.custAccount.find(obj => obj.accountId == this.forexForm.get('accountNumber').value).accountBranch;
        this.forexForm.get('transactionBranch').patchValue(accBranch);
        this.flag = false;
    }
    previous() {
        this.flag = true;
    }
    save(fb) {
        console.log(fb);
        this.router.navigate(['token-generation']);
        //  this.router.navigate(['loan-payment']);
    }
    openPopup() {
        console.log('popup');
        this.modalController
            .create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_3__.TimeSlotsComponent,
            componentProps: {
                date: this.forexForm.get('transactionDate').value,
            },
        })
            .then((modalResp) => {
            modalResp.present();
            modalResp.onDidDismiss().then((res) => {
                if (res.data != null) {
                    console.log(res);
                    this.forexForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_2__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                var _a;
                if (modelData !== null) {
                    let branch = modelData.data;
                    console.log('Modal Data for branch: ', modelData.data);
                    this.forexForm.patchValue({
                        transactionBranch: (_a = modelData.data) === null || _a === void 0 ? void 0 : _a.branchName
                    });
                }
            });
            return yield modal.present();
        });
    }
    currencyScreen() {
        var _a;
        // this.router.navigate(['/currencyconverter']);
        this.router.navigateByUrl('/currencyconverter', {
            state: {
                data: {
                    amount: this.forexForm.get('transactionAmount').value,
                    transType: this.forexForm.get('transactionType').value,
                    exchangeRate: this.forexForm.get('exchangeRate').value,
                    fromCurrencyFlag: this.accountCurrencyFlag,
                    toCurrencyFlag: this.selectedCountryCode,
                    fromCurrency: this.forexForm.get('accountCurrency').value,
                    toCurrency: (_a = this.forexForm.get('transactionCurrency').value) === null || _a === void 0 ? void 0 : _a.currency,
                }
            },
        });
    }
};
ForexTransactionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService }
];
ForexTransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-forex-transaction',
        template: _forex_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forex_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForexTransactionPage);



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

/***/ 88991:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box1 {\n  font-weight: bold;\n  margin-top: 10px;\n  border-width: thin;\n  border-radius: 20px;\n  padding: 0 21px;\n  width: 100%;\n  height: 135px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.ion_col {\n  display: flex;\n  align-items: center;\n  margin: 20px;\n}\n\n.ion_col:first-child {\n  margin: 20px 0;\n}\n\n.ion_col ion-input {\n  font-weight: 600;\n  padding: 0 21px !important;\n}\n\n.inputRemarks {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n  border-radius: 10px !important;\n  background-color: rgb(244, 247, 248);\n}\n\n.inputCard1 ion-label {\n  font-size: 14px;\n  color: black;\n  opacity: 75%;\n}\n\n.inputCard1 .input {\n  font-weight: bold;\n  opacity: 100%;\n}\n\n.labelCard {\n  color: gray;\n  font-size: 14px;\n}\n\n.searchbar {\n  border-radius: 10%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\nion-select {\n  font-size: large;\n  font-weight: bold;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  padding: 0 20px !important;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-size: 16px;\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: blue;\n}\n\n.inputCard ion-item ion-label {\n  color: gray;\n}\n\n.inputCard ion-label {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\n.inputCard ion-item {\n  margin-left: 0px;\n}\n\n.inputCard .box {\n  margin: 10px 0;\n}\n\nion-textarea {\n  height: 500px;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\n.trans_branch {\n  padding-left: 5%;\n  padding-top: 8%;\n  padding-right: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\n.boxDrop {\n  display: inline-block;\n  width: 95%;\n  height: 55px;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.inputCard5 {\n  padding-top: 5%;\n  padding-left: 5%;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.box7 {\n  padding-top: 0%;\n}\n\n.box7 ion-card {\n  margin-left: 0;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  padding: 0 !important;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  padding: 0 20px !important;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.total_trans_row {\n  position: relative;\n  width: 100%;\n}\n\n.total_trans_row .info_btn {\n  position: absolute;\n  right: 8%;\n  top: 50%;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmV4LXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBT0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxRkFBQTtFQUlBLGlEQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQVRGOztBQVdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxxRkFBQTtFQUlBLGlEQUFBO0FBYkY7O0FBeUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF0QkY7O0FBeUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXRCSjs7QUF1Qkk7RUFDRSxjQUFBO0FBckJOOztBQXVCRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFyQko7O0FBd0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBckJGOztBQXdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBS0Esb0NBQUE7QUF6QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBeEJGOztBQTBCQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQXZCRjs7QUF5QkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQXRCRjs7QUF3QkE7RUFDRSxrQkFBQTtBQXJCRjs7QUF1QkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCRjs7QUFzQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBbkJGOztBQXFCQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFHQSxvQ0FBQTtBQXBCRjs7QUFzQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQW5CRjs7QUFxQkE7RUFDRSxXQUFBO0FBbEJGOztBQW9CQTtFQUNFLFdBQUE7QUFqQkY7O0FBb0JFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBakJKOztBQW1CRTtFQUNFLGdCQUFBO0FBakJKOztBQW1CRTtFQUNFLGNBQUE7QUFqQko7O0FBb0JBO0VBQ0UsYUFBQTtBQWpCRjs7QUFtQkE7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQWhCRjs7QUFrQkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBZkY7O0FBaUJBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFiRjs7QUFlQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFaRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVZGOztBQWFBO0VBQ0UsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQVZGOztBQVlBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQVZGOztBQWFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFJQSxxQkFBQTtBQWJGOztBQWlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWlCQTtFQUNFLGFBQUE7QUFkRjs7QUFnQkE7RUFDRSxlQUFBO0FBYkY7O0FBa0JFO0VBQ0UsY0FBQTtBQWhCSjs7QUFrQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFoQko7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFqQkY7O0FBa0JFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQWhCSjs7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFoQko7O0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBbEJGOztBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBakJKIiwiZmlsZSI6ImZvcmV4LXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cclxufVxyXG4uZm9yZXhfaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDAgMjFweCAhaW1wb3J0YW50O1xyXG4gIC8vIEJsdXI6NnB0O1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgMCA1cHQgMC41cHQgI0QzRDNEMztcclxuICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICNEM0QzRDM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG59XHJcbi5ib3gxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAvLyBib3JkZXItc3R5bGU6IHRoaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAwIDIxcHg7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTM1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIG9wYWNpdHk6IDUwJTtcclxuICAvLyBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAvLyBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuLy8gZGl2IHtcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xyXG4vLyAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXHJcbi8vICAgfVxyXG5cclxuLmlucHV0Q2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgLy8gb3BhY2l0eTogNTAlO1xyXG59XHJcbiAgLmlvbl9jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMCAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5pbnB1dFJlbWFya3Mge1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkMSB7XHJcbiAgcGFkZGluZy10b3A6IDclO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgLy8gZm9udC1zaXplOiAwLjllbTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0NywgMjQ4KTtcclxufVxyXG4uaW5wdXRDYXJkMSBpb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcbi5pbnB1dENhcmQxIC5pbnB1dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG4ubGFiZWxDYXJkIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnNlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDc1JTtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcbi5pbnB1dENhcmQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4uaW5wdXRDYXJkIHtcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICAuYm94IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbi50cmFuc19icmFuY2gge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlXHJcbn1cclxuLmNhbmNlbGNhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmlvbi1wYWRkaW5nLXRvcDIge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbi5iYWNrY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDclO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDMlO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG59XHJcbi5ib3hEcm9wIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgLy86IDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbm5neC1mbGFnLXBpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAvLyBwYWRkaW5nLXRvcDogMTRweDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pbnB1dENhcmQ1IHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJveDcge1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmN1cnJlbmN5X3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLnRvdGFsX3RyYW5zX3JvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5pbmZvX2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogOCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 206:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Forex Transaction</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <form [formGroup]=\"forexForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select class=\"box\" mode=\"ios\" formControlName=\"accountNumber\" ngDefaultControl\r\n          (ionChange)=\"accountEvent($event)\">\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"accountBalance\" ngDefaultControl>Account\r\n          Balance : {{curr}} {{currentBalance}}</ion-label>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" ngDefaultControl>Holder Name : {{ currentUser?.firstName }}</ion-label>\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Currency : {{ currentUser?.currencyCode }}</ion-label>\r\n        <!-- <div class=\"box7\">\r\n          <ion-label>Account Currency</ion-label>\r\n          <ion-card class=\"box\">\r\n            <div class=\"currency_row\">\r\n              <ngx-flag-picker [selectedCountryCode]=\"accountCurrencyFlag\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\">\r\n              </ngx-flag-picker>\r\n              <ion-input placeholder=\"Account Currency\" formControlName=\"accountCurrency\" readonly>\r\n              </ion-input>\r\n            </div>\r\n          </ion-card>\r\n        </div> -->\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Account Branch*</ion-label>\r\n        <ion-input class=\"box\" placeholder=\"Account Branch\" formControlName=\"accountBranch\" ngDefaultControl readonly>\r\n        </ion-input>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Transaction Type*</ion-label>\r\n        <ion-radio-group formControlName=\"transactionType\" (ionChange)=\"changeTransactionType($event)\" ngDefaultControl>\r\n          <ion-row>\r\n            <div class=\"ion_col\">\r\n              <ion-radio mode=\"md\" item-left value=\"buy\"></ion-radio> &nbsp;&nbsp;\r\n              <ion-label position=\"start\">Buy</ion-label>\r\n            </div>\r\n\r\n            <div class=\"ion_col\">\r\n              <ion-radio mode=\"md\" item-left value=\"sell\"></ion-radio> &nbsp;&nbsp;\r\n              <ion-label>Sell</ion-label>\r\n            </div>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n\r\n        <div class=\"box7\">\r\n          <ion-card class=\"box\">\r\n            <div class=\"currency_row\">\r\n              <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\">\r\n              </ngx-flag-picker>\r\n              <ion-select mode=\"ios\" placeholder=\"Transaction Currency\" formControlName=\"transactionCurrency\"\r\n                [placeholder]=\"transactionCurrencyModel\" [compareWith]=\"compareWith\"\r\n                (ionChange)=\"selectCurrencyCode($event)\">\r\n                <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">\r\n                  {{user.currency}}\r\n                  <!-- {{user.currency + ' : ' + user.countryName}} -->\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"inputCard\">\r\n    <ion-label>Transaction Currency</ion-label>\r\n    <ion-input class=\"box\">\r\n    <ngx-flag-picker\r\n    [selectedCountryCode]=\"selectedCountryCode\"\r\n    showFlags=\"isShow\"\r\n    showArrow=\"!isShow\"\r\n    [countryCodes]=\"countryCodes\"\r\n    (changedCountryCode)=\"changeSelectedCountryCode($event)\">\r\n  </ngx-flag-picker>\r\n</ion-input>\r\n    </div> -->\r\n      <!--     \r\n    <div class=\"inputCard\">\r\n      <ion-label>Transaction Currency</ion-label>\r\n       <ion-select [compareWith]=\"compareWith\" class=\"box\">\r\n      <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">\r\n      \r\n      </ion-select-option>\r\n      </ion-select> -->\r\n      <!-- <ngx-flag-picker  -->\r\n      <!-- [selectedCountryCode]=\"selectedCountryCode\"\r\n      [countryCodes]=\"countryCodes\"\r\n    \r\n      (changedCountryCode)=\"changeSelectedCountryCode($event)\"> -->\r\n      <!-- </ngx-flag-picker>\r\n   \r\n  </div> -->\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-input class=\"box\" placeholder=\"Fx Amount\" formControlName=\"transactionAmount\" (keyup)=\"handleExchangeRate($event)\" ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\"\r\n        *ngIf=\"selectedCountryCode && !forexForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-router-link (click)=\"currencyScreen()\" class=\"underline\">Check the Currency Converter</ion-router-link>\r\n      </div>\r\n      <div class=\"inputCard\"\r\n        *ngIf=\"selectedCountryCode && !forexForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-input class=\"box\" placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-input class=\"box\" placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard total_trans_row\">\r\n        <ion-input class=\"box\" placeholder=\"Total Transaction Amount\" formControlName=\"totalTransactionAmount\"\r\n          ngDefaultControl></ion-input>\r\n        <span class=\"info_btn\">i</span>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\"\r\n          [disabled]=\"validateDisablebutton('disable1') || submitted ||   transactionAmount > currentBalance\"\r\n          (click)=\"next()\"\r\n          >Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"previous1()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\">Forex Transaction</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"forexForm\">\r\n\r\n\r\n      <div class=\"trans_branch\">\r\n        <ion-label>Do you wish to perform this transaction in your branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group formControlName=\"trasactionBranch\" ngDefaultControl>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-router-link (click)=\"presentModal()\" [hidden]=\"forexForm.get('trasactionBranch').value\"\r\n          class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n      </div>\r\n\r\n    \r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input\r\n              appearence=\"none\"\r\n              formControlName=\"transactionBranch\"\r\n              [readonly]=\"forexForm.get('branchFlag').value ? true : false\"\r\n            >\r\n            </ion-input>\r\n            <ion-icon\r\n              *ngIf=\"forexForm.get('branchFlag').value == true\"\r\n              name=\"home-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              *ngIf=\"forexForm.get('branchFlag').value == false\"\r\n              name=\"navigate-circle-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note\r\n          style=\"color: red; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"\r\n        >\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" \r\n                  displayFormat=\"DDD. MMM DD, YY\" \r\n                  [showDefaultTitle]=\"true\" \r\n                  #datetime>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-card class=\"box ml-0\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" placeholder=\"Time Slot\" [readonly]=\"true\"></ion-input>\r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-textarea placeholder=\"Remark\" class=\"box1\" formControlName=\"remarks\" ngDefaultControl></ion-textarea>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" \r\n          (click)=\"save(forexForm.value)\"\r\n          [disabled]=\"validateDisablebutton('disable2') || submitted1\"\r\n          >Save</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button shape=\"round\" fill=\"clear\" (click)=\"previous()\" style=\"color: black\">Back</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forex-transaction_forex-transaction_module_ts.js.map