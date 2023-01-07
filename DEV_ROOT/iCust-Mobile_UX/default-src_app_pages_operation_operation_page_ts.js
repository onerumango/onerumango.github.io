"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_operation_operation_page_ts"],{

/***/ 97329:
/*!***************************************************!*\
  !*** ./src/app/pages/operation/operation.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationPage": () => (/* binding */ OperationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _operation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation.page.html?ngResource */ 45974);
/* harmony import */ var _operation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operation.page.scss?ngResource */ 87642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);






let OperationPage = class OperationPage {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
        this.transactionAmount = "10,000";
        this.accountBranch = "Loita street";
        this.flag = true;
        this.users = ['789045667', '8789977889'];
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
        // compareWith(o1: User, o2: User) {
        //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
        // }
        this.isShow = true;
        this.selectedCountryCode = 'ad';
    }
    ngOnInit() {
        this.slideOneForm = this.fb.group({
            accountNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
        console.log(this.slideOneForm.value);
        console.log(this.countries);
    }
    // countryCodes = ['ad', 'ae', 'af', 'ag', 'al', 'ai'];
    selectCurrencyCode(code) {
        //console.log(code);
        console.log(code.detail.value.code);
        this.selectedCountryCode = code.detail.value.code.toLowerCase();
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
    }
    goToHomepage() {
        this.router.navigate(['dashboard']);
    }
    goToNextPage(fb) {
        this.flag = false;
    }
    goToPreviousPage() {
        this.flag = true;
    }
    goToNextScreen(form) {
        console.log("form", form);
        this.router.navigate(['token-generation']);
    }
};
OperationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
OperationPage.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
OperationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-operation',
        template: _operation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_operation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OperationPage);



/***/ }),

/***/ 87642:
/*!****************************************************************!*\
  !*** ./src/app/pages/operation/operation.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.box {\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box3 {\n  border-width: thin;\n  width: 95%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box1 {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n  width: 93%;\n  height: 55px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  margin-left: 2%;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard2 {\n  padding-top: 3%;\n  padding-left: 3%;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.labelCard {\n  color: gray;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n  padding-left: 4%;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n  padding-left: 3%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat-SemiBold\" !important;\n  font-size: 14pt;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: blue;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxvcGVyYXRpb25cXG9wZXJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNELDZDQUFBO0FDQ0Q7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSxpREFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxxRkFBQTtFQUNBLGlEQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0ZOOztBREtJO0VBQ0UsYUFBQTtBQ0ZOOztBRElDO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0FDSEw7O0FES0M7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQztFQUVDLGdCQUFBO0FDSEY7O0FES0M7RUFDSSxXQUFBO0FDRkw7O0FETUM7RUFDRywwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtFO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBREtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUU7RUFDRixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREE7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUU7RUFDRixxQkFBQTtBQ0NBOztBREdHO0VBSUQseUJBQUE7QUNIRjs7QURnQkE7RUFDRSw2Q0FBQTtFQUNBLGVBQUE7QUNiRjs7QURlQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNaRjs7QURlQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ1pGOztBRGVDO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0FDWkY7O0FEY0U7RUFDRSxjQUFBO0VBQ0Msb0NBQUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtBQ1hOOztBRGFFO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNWTjs7QURhRTtFQUNFLGNBQUE7RUFDRCxrQ0FBQTtBQ1ZIOztBRFlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSxxQkFBQTtBQ1hKOztBRGNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGFDO0VBQ0ssbUJBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNYTjs7QURjRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDWEo7O0FEYUU7RUFDRSxZQUFBO0FDVko7O0FEWUU7RUFDSSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNUSjs7QURXRTtFQUNFLGFBQUE7QUNSSiIsImZpbGUiOiJvcGVyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG59XHJcbi5ib3gge1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgXHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgfVxyXG4gIC5ib3gzIHtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIFxyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5ib3gxIHtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gXHJcbiAgICAuY2hlcXVlQ2FyZHtcclxuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgIH1cclxuICBcclxuICAgIGZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAuaW5wdXRDYXJkMXtcclxuICAgIC8vICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgLy8gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiB9XHJcbiAuaW5wdXRDYXJkMntcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5cclxuIC50ZXh0Q2FyZHtcclxuICAvLyBwYWRkaW5nLXRvcDogLTYlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuIC5sYWJlbENhcmR7XHJcbiAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgLy9mb250LXNpemU6IDIwcHg7XHJcbiB9XHJcblxyXG4gLnVuZGVybGluZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgfVxyXG4gIC5pb24tcGFkZGluZy10b3B7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgfVxyXG5cclxuICAuaW9uLXBhZGRpbmctdG9wMntcclxuICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIC5jYW5jZWxjYXJke1xyXG5wYWRkaW5nLXRvcDogOCU7XHJcbnBhZGRpbmctbGVmdDogNDQlO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5iYWNrY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgIHBhZGRpbmctbGVmdDogNDclO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgLmljb25kYXRle1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIH1cclxuIFxyXG4gICBpb24tc2VhcmNoYmFyIHtcclxuICAvLyAgdHJhbnNmb3JtOiBzY2FsZVkoMS41KTtcclxuICAvLyAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIC8vICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gXHJcbiAgICBcclxuIH1cclxuXHJcbi8vIC5zYy1pb24tc2VhcmNoYmFyLW1ke1xyXG4vLyAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4vLyB9XHJcbi8vICAuc2VhcmNoYmFyLWlucHV0IHtcclxuLy8gICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuLy8gICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuaW9uLXNlbGVjdHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcbmlvbi10ZXh0e1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcbiBpb24taW5wdXQge1xyXG4gIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IzEwMjI0NTtcclxuICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgb3BhY2l0eTogNzUlO1xyXG4gIH1cclxuICBpb24tYmFjay1idXR0b257XHJcbiAgICAgIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuIFxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxuICAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxufVxyXG4gIG5neC1mbGFnLXBpY2tlcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA0JTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG4gIC5ib3g3e1xyXG4gICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgfVxyXG4gLmJhY2tJY29ue1xyXG4gICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAvLyBjb2xvcjogYmx1ZTtcclxuICAgICAgY29sb3I6cmdiKDcwLDExMSwyNTQpO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIFxyXG4gIH1cclxuICAuaW9uY29udGVudHtcclxuICAgIGhlaWdodDogMTEwJTtcclxuICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICB9XHJcbiAgLmlvbmNvbnRlbnQxe1xyXG4gICAgaGVpZ2h0OiAxMzUlO1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBmb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAvLyAgIC5pb25jb250ZW50e1xyXG4gIC8vICAgICBoZWlnaHQ6IDEzMCU7XHJcbiAgLy8gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC5pb25jb250ZW50MXtcclxuICAvLyAgICAgaGVpZ2h0OiAxNjUlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cbn1cblxuLmJveCB7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3KTtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuXG4uYm94MyB7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcpO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuXG4uYm94MSB7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcbiAgd2lkdGg6IDkzJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmNoZXF1ZUNhcmQge1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuXG5mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnB1dENhcmQxIHtcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uaW5wdXRDYXJkMiB7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbn1cblxuLnRleHRDYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmxhYmVsQ2FyZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogMyU7XG59XG5cbi5pb24tcGFkZGluZy10b3AyIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2FuY2VsY2FyZCB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJhY2tjYXJkIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDQ3JTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaWNvbmRhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuaW9uLXRleHQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiA3NSU7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB0O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzEwMjI0NTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3BhY2l0eTogNzUlO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcbn1cblxubmd4LWZsYWctcGlja2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYm94NyB7XG4gIHBhZGRpbmctdG9wOiAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJhY2tJY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pb25jb250ZW50IHtcbiAgaGVpZ2h0OiAxMTAlO1xuICBtYXJnaW4tdG9wOiAtMyU7XG59XG5cbi5pb25jb250ZW50MSB7XG4gIGhlaWdodDogMTM1JTtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";

/***/ }),

/***/ 45974:
/*!****************************************************************!*\
  !*** ./src/app/pages/operation/operation.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=flag>\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToLogin()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"accountNo\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</ion-select-option>\r\n        </ion-select>\r\n        </div>\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" class=\"labelCard\" style=\"font-size: 14px;\">Account Balance : $12,09,89</ion-label>   \r\n          </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency</ion-label>\r\n        </div>\r\n        <div class=\"box7\">\r\n          \r\n          <ion-card class=\"box\">\r\n            <ion-row>\r\n              <ion-col style=\"width: 10%;\">\r\n                  <ngx-flag-picker\r\n                  [selectedCountryCode]=\"selectedCountryCode\"\r\n                  [showFlags]=\"isShow\"\r\n                  [showLabels]=\"!isShow\"\r\n                  [showArrow]=\"!isShow\">\r\n                </ngx-flag-picker>\r\n               </ion-col>\r\n              <ion-col style=\"width: 20%;\">\r\n                  <ion-select [compareWith]=\"compareWith\" (ionChange)=\"selectCurrencyCode($event)\" style=\"font-size: large;margin-left: -40%;\">\r\n                    <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\" >\r\n                   {{user.currency + ' : ' + user.countryName}}\r\n                    </ion-select-option>\r\n                    </ion-select>\r\n              </ion-col>\r\n             </ion-row>\r\n           </ion-card>\r\n          </div>\r\n\r\n      <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\">Transaction Amount</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"amount\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" >Account Branch</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"accountBranch\"></ion-input>\r\n      </div>\r\n<div class=\"ion-padding-top\">\r\n  <div>\r\n    <ion-button  expand=\"block\" shape=\"round\"(click)=\"goToNextPage()\" style=\"width: 95%;\">Next</ion-button>\r\n  </div>\r\n\r\n  <div>\r\n    <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black;\"\r\n    (click)=\"goToHomepage()\">Cancel</ion-button>\r\n</div>\r\n</div>\r\n     \r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=!flag>\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=!flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n        <div class=\"textCard\">\r\n          <ion-text>\r\n            <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <div class=\"inputCard2\">\r\n          <ion-radio-group>\r\n            <ion-row>\r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n               <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n               </ion-item>\r\n              </ion-col>\r\n  \r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n               <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n               </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-radio-group>\r\n       </div>\r\n\r\n       <div class=\"inputCard2\">\r\n          <ion-router-link href=\"#\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n       </div><br>\r\n  \r\n       <div class=\"inputCard2\">\r\n        <ion-label style=\"padding-left: 5%;\">Transaction Branch</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-searchbar appearence=\"none\"></ion-searchbar>\r\n        </ion-card>\r\n             \r\n          \r\n       </div>\r\n\r\n      <div class=\"inputCard2\">\r\n\r\n          <ion-label style=\"padding-left: 5%;\">Transaction date</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n              <ion-datetime displayFormat=\"DDD. MMM DD, YY\" placeholder=\"Select date\" formControlName=\"transactionDate\" >\r\n              </ion-datetime>\r\n         <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n\r\n         </ion-item> \r\n     </ion-card>\r\n     </div>\r\n    \r\n\r\n     <div class=\"inputCard2\">\r\n       <ion-label style=\"padding-left: 5%;\">Time Slot</ion-label>\r\n     <ion-card class=\"box\">\r\n       <ion-item  lines=\"none\">\r\n        <ion-datetime displayFormat=\"h:mm A\"  placeholder=\"Select date\" formControlName=\"transactionTime\"></ion-datetime>\r\n        <ion-icon name=\"alarm-outline\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n     </ion-card>\r\n     </div> \r\n\r\n     <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n      <ion-label position=\"stacked\">Remark</ion-label>\r\n      <ion-input class=\"chequeCard\" formControlName=\"accountNo\" ></ion-input>\r\n     </div>\r\n\r\n\r\n     <div class=\"ion-padding-top\">\r\n    <div *ngIf=\"title =='Cash Withdrawal' || title =='Cash Deposit'\" >\r\n      <ion-button  expand=\"block\" shape=\"round\" (click)=\"goToNextScreen(slideOneForm.value)\">Next</ion-button>\r\n    </div>\r\n\r\n  <div *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\" >\r\n    <ion-button  expand=\"block\" shape=\"round\">Save</ion-button>\r\n  </div>\r\n \r\n    <div>\r\n      <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black;\"\r\n(click)=\"goToPreviousPage()\">Back</ion-button>\r\n     \r\n  </div>\r\n</div>\r\n    \r\n    \r\n   \r\n  </form>\r\n</div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_operation_operation_page_ts.js.map