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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forex_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-transaction.page.html?ngResource */ 206);
/* harmony import */ var _forex_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-transaction.page.scss?ngResource */ 88991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);








let ForexTransactionPage = class ForexTransactionPage {
    // changeSelectedCountryCode(value: string): void {
    //   this.selectedCountryCode = value;
    // }
    constructor(fb, router, modalController) {
        this.fb = fb;
        this.router = router;
        this.modalController = modalController;
        this.flag = true;
        this.accountCurrencyFlag = 'in';
        this.users = ['789045667', '8789977889'];
        this.negotiated = ['0.98', '78.90'];
        this.isShow = true;
        this.currencyList = [
            'BG',
            'BN'
        ];
        this.selectedCountryCode = 'in';
        this.countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];
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
        this.forexForm = this.fb.group({
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            accountCurrency: ['INR', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            accountBalance: ['$12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            transactionType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            fxAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            trasactionBranchFlag: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            timeSlot: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        console.log(this.forexForm.value);
        console.log(this.countries);
    }
    // compareWith(o1: User, o2: User) {
    //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
    // }
    // isShow : boolean = true;
    // selectedCountryCode = 'ad';
    // // countryCodes = ['ad', 'ae', 'af', 'ag', 'al', 'ai'];
    selectCurrencyCode(code) {
        //console.log(code);
        console.log(code.detail.value.code);
        this.selectedCountryCode = code.detail.value.code.toLowerCase();
        localStorage.setItem("Transaction_Currency", code.target.value.currency);
        localStorage.setItem("Account_Currency", this.forexForm.value.accountCurrency);
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
    }
    next() {
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
    previous1() {
        this.router.navigate(['dashboard']);
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_2__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    let branch = modelData.data;
                    console.log('Modal Data for branch: ', modelData.data);
                    this.forexForm.patchValue({
                        transactionBranch: modelData.data['data'].address
                    });
                }
            });
            return yield modal.present();
        });
    }
    currencyScreen() {
        this.router.navigate(['/currencyconverter']);
    }
};
ForexTransactionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ForexTransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forex-transaction',
        template: _forex_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forex_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForexTransactionPage);



/***/ }),

/***/ 88991:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  padding: 0 21px !important;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box1 {\n  font-weight: bold;\n  margin-top: 10px;\n  border-width: thin;\n  border-radius: 20px;\n  padding: 0 21px;\n  width: 100%;\n  height: 135px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.ion_col {\n  display: flex;\n  align-items: center;\n  margin: 20px;\n}\n\n.ion_col:first-child {\n  margin: 20px 0;\n}\n\n.ion_col ion-input {\n  font-weight: 600;\n  padding: 0 21px !important;\n}\n\n.inputRemarks {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n  border-radius: 10px !important;\n  background-color: rgb(244, 247, 248);\n}\n\n.inputCard1 ion-label {\n  font-size: 14px;\n  color: black;\n  opacity: 75%;\n}\n\n.inputCard1 .input {\n  font-weight: bold;\n  opacity: 100%;\n}\n\n.labelCard {\n  color: gray;\n  font-size: 14px;\n}\n\n.searchbar {\n  border-radius: 10%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 20px;\n}\n\nion-select {\n  font-size: large;\n  font-weight: bold;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  padding: 0 20px !important;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-size: 16px;\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: blue;\n}\n\n.inputCard ion-item ion-label {\n  color: gray;\n}\n\n.inputCard ion-label {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n}\n\n.inputCard ion-item {\n  margin-left: 0px;\n}\n\nion-textarea {\n  height: 500px;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\n.trans_branch {\n  padding-left: 5%;\n  padding-top: 8%;\n  padding-right: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\n.boxDrop {\n  display: inline-block;\n  width: 95%;\n  height: 55px;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.inputCard5 {\n  padding-top: 5%;\n  padding-left: 5%;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.box7 {\n  padding-top: 0%;\n}\n\n.box7 ion-card {\n  margin-left: 0;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  padding: 0 !important;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  padding: 0 20px !important;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmV4LXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGZvcmV4LXRyYW5zYWN0aW9uXFxmb3JleC10cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLDZDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLDBCQUFBO0VBSUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxxRkFBQTtFQUlBLGlEQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ1JGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxxRkFBQTtFQUlBLGlEQUFBO0FDWkY7O0FEd0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNyQkY7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ3JCSjs7QURzQkk7RUFDRSxjQUFBO0FDcEJOOztBRHNCRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNwQko7O0FEdUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBS0Esb0NBQUE7QUN4QkY7O0FEMEJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDdkJGOztBRHlCQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ3RCRjs7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ3JCRjs7QUR1QkE7RUFDRSxrQkFBQTtBQ3BCRjs7QURzQkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNuQkY7O0FEcUJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ2xCRjs7QURvQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBR0Esb0NBQUE7QUNuQkY7O0FEcUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUNsQkY7O0FEb0JBO0VBQ0UsV0FBQTtBQ2pCRjs7QURtQkE7RUFDRSxXQUFBO0FDaEJGOztBRG1CRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2hCSjs7QURrQkU7RUFDRSxnQkFBQTtBQ2hCSjs7QURtQkE7RUFDRSxhQUFBO0FDaEJGOztBRGtCQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDZkY7O0FEaUJBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ2JGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURjQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNYRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1RGOztBRFlBO0VBQ0UsZ0JBQUE7QUNURjs7QURZQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQ1RGOztBRFdBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFJQSxxQkFBQTtBQ1pGOztBRGdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGFBQUE7QUNiRjs7QURlQTtFQUNFLGVBQUE7QUNaRjs7QURpQkU7RUFDRSxjQUFBO0FDZko7O0FEaUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDZko7O0FEbUJBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNoQkY7O0FEaUJFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQ2ZKOztBRGlCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2ZKIiwiZmlsZSI6ImZvcmV4LXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cclxufVxyXG4uZm9yZXhfaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjFweCAhaW1wb3J0YW50O1xyXG4gIC8vIEJsdXI6NnB0O1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgMCA1cHQgMC41cHQgI0QzRDNEMztcclxuICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICNEM0QzRDM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG59XHJcbi5ib3gxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAvLyBib3JkZXItc3R5bGU6IHRoaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAwIDIxcHg7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTM1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIG9wYWNpdHk6IDUwJTtcclxuICAvLyBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAvLyBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuLy8gZGl2IHtcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xyXG4vLyAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXHJcbi8vICAgfVxyXG5cclxuLmlucHV0Q2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgLy8gb3BhY2l0eTogNTAlO1xyXG59XHJcbiAgLmlvbl9jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMCAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5pbnB1dFJlbWFya3Mge1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkMSB7XHJcbiAgcGFkZGluZy10b3A6IDclO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgLy8gZm9udC1zaXplOiAwLjllbTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0NywgMjQ4KTtcclxufVxyXG4uaW5wdXRDYXJkMSBpb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcbi5pbnB1dENhcmQxIC5pbnB1dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG4ubGFiZWxDYXJkIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnNlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4uaW5wdXRDYXJkIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuLmlucHV0Q2FyZCB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuaW9uLXRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG4udHJhbnNfYnJhbmNoIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JVxyXG59XHJcbi5jYW5jZWxjYXJkIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pb24tcGFkZGluZy10b3AyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4uYmFja2NhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ3JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxufVxyXG4uYm94RHJvcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIC8vOiA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG5uZ3gtZmxhZy1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiA0JTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uaW5wdXRDYXJkNSB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ib3g3IHtcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiA1JTtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jdXJyZW5jeV9yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXG59XG5cbi5mb3JleF9oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3gge1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIHBhZGRpbmc6IDAgMjFweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcpO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuXG4uYm94MSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMjFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTM1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNyk7XG59XG5cbi5pbnB1dENhcmQge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG4uaW9uX2NvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5pb25fY29sOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uaW9uX2NvbCBpb24taW5wdXQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwIDIxcHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0UmVtYXJrcyB7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmlucHV0Q2FyZDEge1xuICBwYWRkaW5nLXRvcDogNyU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ3LCAyNDgpO1xufVxuXG4uaW5wdXRDYXJkMSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogNzUlO1xufVxuXG4uaW5wdXRDYXJkMSAuaW5wdXQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmxhYmVsQ2FyZCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zZWFyY2hiYXIge1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHQ7XG4gIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMxMDIyNDU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDc1JTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5pbnB1dENhcmQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5pbnB1dENhcmQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuLmlucHV0Q2FyZCBpb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbi50cmFuc19icmFuY2gge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG4uY2FuY2VsY2FyZCB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcDIge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5iYWNrY2FyZCB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA0NyU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG59XG5cbi5ib3hEcm9wIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xufVxuXG5uZ3gtZmxhZy1waWNrZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnB1dENhcmQ1IHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG5mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ib3g3IHtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuLmJveDcgaW9uLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5ib3g3IC5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVuY3lfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY3VycmVuY3lfcm93IGlvbi1zZWxlY3Qge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcbn1cbi5jdXJyZW5jeV9yb3cgaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG59Il19 */";

/***/ }),

/***/ 206:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Forex Transaction</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <form [formGroup]=\"forexForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          formControlName=\"accountNumber\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user\"\r\n            >{{user}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label\r\n          position=\"stacked\"\r\n          class=\"labelCard\"\r\n          formControlName=\"accountBalance\"\r\n          ngDefaultControl\r\n          >Account Balance : $12,09,89</ion-label\r\n        >\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label\r\n          position=\"stacked\"\r\n          class=\"labelCard\"\r\n          formControlName=\"holderName\"\r\n          ngDefaultControl\r\n          >Holder Name : Manoj</ion-label\r\n        >\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard\">\r\n        <div class=\"box7\">\r\n          <ion-label>Account Currency</ion-label>\r\n          <ion-card class=\"box\">\r\n            <div class=\"currency_row\">\r\n              <ngx-flag-picker\r\n                [selectedCountryCode]=\"accountCurrencyFlag\"\r\n                [showFlags]=\"isShow\"\r\n                [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\"\r\n              >\r\n              </ngx-flag-picker>\r\n              <ion-input\r\n                placeholder=\"Account Currency\"\r\n                formControlName=\"accountCurrency\"\r\n                readonly\r\n              >\r\n              </ion-input>\r\n            </div>\r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Account Branch*</ion-label>\r\n        <ion-input\r\n            class=\"box\"\r\n            placeholder=\"Account Branch\"\r\n            formControlName=\"accountBranch\"\r\n            ngDefaultControl\r\n         >   \r\n      </ion-input>\r\n    </div>\r\n\r\n      \r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Transaction Type*</ion-label>\r\n        <ion-radio-group formControlName=\"transactionType\" ngDefaultControl>\r\n          <ion-row>\r\n              <div class=\"ion_col\">\r\n                <ion-radio mode=\"md\" item-left value=\"buy\"></ion-radio> &nbsp;&nbsp;\r\n                <ion-label position=\"start\">Buy</ion-label>                \r\n              </div>\r\n\r\n              <div class=\"ion_col\">\r\n                <ion-radio mode=\"md\" item-left value=\"sell\"></ion-radio> &nbsp;&nbsp;\r\n                <ion-label>Sell</ion-label>                \r\n              </div>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n\r\n        <div class=\"box7\">\r\n          <ion-card class=\"box\">\r\n            <div class=\"currency_row\">\r\n              <ngx-flag-picker\r\n                [selectedCountryCode]=\"selectedCountryCode\"\r\n                [showFlags]=\"isShow\"\r\n                [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\"\r\n              >\r\n              </ngx-flag-picker>\r\n              <ion-select\r\n              placeholder=\"Transaction Currency\"\r\n                [compareWith]=\"compareWith\"\r\n                (ionChange)=\"selectCurrencyCode($event)\"\r\n              >\r\n                <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">\r\n                  {{user.currency}}\r\n                  <!-- {{user.currency + ' : ' + user.countryName}} -->\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"inputCard\">\r\n    <ion-label>Transaction Currency</ion-label>\r\n    <ion-input class=\"box\">\r\n    <ngx-flag-picker\r\n    [selectedCountryCode]=\"selectedCountryCode\"\r\n    showFlags=\"isShow\"\r\n    showArrow=\"!isShow\"\r\n    [countryCodes]=\"countryCodes\"\r\n    (changedCountryCode)=\"changeSelectedCountryCode($event)\">\r\n  </ngx-flag-picker>\r\n</ion-input>\r\n    </div> -->\r\n      <!--     \r\n    <div class=\"inputCard\">\r\n      <ion-label>Transaction Currency</ion-label>\r\n      <!-- <ion-select [compareWith]=\"compareWith\" class=\"box\">\r\n      <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">\r\n      \r\n      </ion-select-option>\r\n      </ion-select> -->\r\n      <!-- <ngx-flag-picker  -->\r\n      <!-- [selectedCountryCode]=\"selectedCountryCode\"\r\n      [countryCodes]=\"countryCodes\"\r\n    \r\n      (changedCountryCode)=\"changeSelectedCountryCode($event)\"> -->\r\n      <!-- </ngx-flag-picker>\r\n   \r\n  </div> -->\r\n\r\n      <div class=\"inputCard\">        \r\n        <ion-input\r\n          class=\"box\"\r\n          placeholder=\"Fx Amount\"\r\n          formControlName=\"fxAmount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\" *ngIf=\"selectedCountryCode && !forexForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-router-link (click)=\"currencyScreen()\" class=\"underline\"\r\n          >Check the Currency Converter</ion-router-link\r\n        >\r\n      </div>\r\n      <div class=\"inputCard\" *ngIf=\"selectedCountryCode && !forexForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">        \r\n        <ion-input\r\n          class=\"box\"\r\n          placeholder=\"Exchange Rate\"\r\n          formControlName=\"exchangeRate\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-input\r\n          class=\"box\"\r\n          placeholder=\"Total Charge Amount\"\r\n          formControlName=\"totalChargeAmount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-input\r\n          class=\"box\"\r\n          placeholder=\"Total Transaction Amoount\"\r\n          formControlName=\"totalTransactionAmount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"next()\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"previous1()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\">Forex Transaction</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"forexForm\">\r\n     \r\n\r\n      <div class=\"trans_branch\">\r\n        <ion-label\r\n          >Do you wish to perform this transaction in your branch?</ion-label\r\n        >\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group\r\n          formControlName=\"trasactionBranchFlag\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-row>\r\n            <div class=\"ion_col\">\r\n              <ion-radio mode=\"md\" item-left value=\"yes\"></ion-radio> &nbsp;&nbsp;\r\n              <ion-label position=\"start\">Yes</ion-label>\r\n            </div> \r\n\r\n            <div class=\"ion_col\">\r\n              <ion-radio mode=\"md\" item-left value=\"no\"></ion-radio> &nbsp;&nbsp;\r\n              <ion-label>No</ion-label>                \r\n          </div>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-router-link (click)=\"presentModal()\" class=\"underline\"\r\n          >Click here to find nearest branch</ion-router-link\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard\">   \r\n        <ion-input\r\n        placeholder=\"Transaction Branch \"\r\n          class=\"box\"\r\n          formControlName=\"transactionBranch\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">   \r\n        <ion-input\r\n        placeholder=\"Transaction Date \"\r\n          class=\"box\"\r\n          formControlName=\"transactionDate\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">   \r\n        <ion-input\r\n        placeholder=\"Timeslot \"\r\n          class=\"box\"\r\n          formControlName=\"timeSlot\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">        \r\n        <ion-textarea\r\n        placeholder=\"Remark\"\r\n          class=\"box1\"\r\n          formControlName=\"remark\"\r\n          ngDefaultControl\r\n        ></ion-textarea>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            (click)=\"save(forexForm.value)\"\r\n            >Save</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            (click)=\"previous()\"\r\n            style=\"color: black\"\r\n            >Back</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forex-transaction_forex-transaction_module_ts.js.map