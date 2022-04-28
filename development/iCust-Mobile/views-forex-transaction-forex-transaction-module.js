(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forex-transaction-forex-transaction-module"],{

/***/ "0j1Q":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forex-transaction/forex-transaction.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=flag>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Forex Transaction</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-content *ngIf=flag>\r\n   \r\n    <div>\r\n    <form  [formGroup]=\"forexForm\">\r\n    <div class=\"inputCard\">\r\n    <ion-label>Account Number*</ion-label>\r\n    <!-- <ion-input class=\"box\"></ion-input> -->\r\n    <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"accountNumber\" ngDefaultControl>\r\n      <ion-select-option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</ion-select-option>\r\n    </ion-select>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"accountBalance\" ngDefaultControl style=\"font-size: 14px;\">Account Balance : $12,09,89</ion-label>   \r\n      </div>\r\n \r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Transaction Type*</ion-label>\r\n        <ion-radio-group formControlName=\"transactionType\" ngDefaultControl>\r\n          <ion-row >\r\n            <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                    <ion-label position=\"start\">Buy</ion-label>\r\n                    <ion-radio mode=\"md\" item-left value=\"buy\" ></ion-radio>\r\n               </ion-item>\r\n             </ion-col>\r\n        \r\n            <ion-col>\r\n                <ion-item lines=\"none\">\r\n                    <ion-label>Sell</ion-label>\r\n                    <ion-radio mode=\"md\" item-left value=\"sell\"></ion-radio>\r\n               </ion-item>\r\n            </ion-col>\r\n        \r\n           \r\n        \r\n        </ion-row>\r\n        </ion-radio-group>\r\n</div>\r\n<div class=\"inputCard\">\r\n<ion-label>Transaction Currency*</ion-label>\r\n</div>\r\n<div class=\"box7\">\r\n  \r\n  <ion-card class=\"box\">\r\n    <ion-row>\r\n      <ion-col style=\"width: 10%;\">\r\n          <ngx-flag-picker\r\n          [selectedCountryCode]=\"selectedCountryCode\"\r\n          [showFlags]=\"isShow\"\r\n          [showLabels]=\"!isShow\"\r\n          [showArrow]=\"!isShow\">\r\n        </ngx-flag-picker>\r\n       </ion-col>\r\n      <ion-col style=\"width: 20%;\">\r\n          <ion-select [compareWith]=\"compareWith\" (ionChange)=\"selectCurrencyCode($event)\" style=\"font-size: large;margin-left: -40%;\">\r\n            <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\" >\r\n           {{user.currency + ' : ' + user.countryName}}\r\n            </ion-select-option>\r\n            </ion-select>\r\n      </ion-col>\r\n     </ion-row>\r\n   </ion-card>\r\n  </div>\r\n    <!-- <div class=\"inputCard\">\r\n    <ion-label>Transaction Currency</ion-label>\r\n    <ion-input class=\"box\">\r\n    <ngx-flag-picker\r\n    [selectedCountryCode]=\"selectedCountryCode\"\r\n    showFlags=\"isShow\"\r\n    showArrow=\"!isShow\"\r\n    [countryCodes]=\"countryCodes\"\r\n    (changedCountryCode)=\"changeSelectedCountryCode($event)\">\r\n  </ngx-flag-picker>\r\n</ion-input>\r\n    </div> -->\r\n<!--     \r\n    <div class=\"inputCard\">\r\n      <ion-label>Transaction Currency</ion-label>\r\n      <!-- <ion-select [compareWith]=\"compareWith\" class=\"box\">\r\n      <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">\r\n      \r\n      </ion-select-option>\r\n      </ion-select> -->\r\n      <!-- <ngx-flag-picker  -->\r\n      <!-- [selectedCountryCode]=\"selectedCountryCode\"\r\n      [countryCodes]=\"countryCodes\"\r\n    \r\n      (changedCountryCode)=\"changeSelectedCountryCode($event)\"> -->\r\n    <!-- </ngx-flag-picker>\r\n   \r\n  </div> -->\r\n\r\n    <div class=\"inputCard\">\r\n      <ion-label>Fx Amount*</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"fxAmount\" ngDefaultControl></ion-input> \r\n      </div>\r\n    \r\n  <div  class=\"ion-padding-top\">\r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;\"\r\n    (click)=\"next()\">Next</ion-button>\r\n    </div>\r\n    \r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black\"\r\n    (click)=\"previous1()\">Cancel</ion-button>\r\n    </div>\r\n    </div>\r\n    \r\n    </form>\r\n    </div>\r\n \r\n    </ion-content>\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-header *ngIf=!flag>\r\n      <ion-toolbar>  \r\n        <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n        <span class=\"text\">Forex Transaction</span>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content *ngIf=!flag>\r\n     <div>\r\n      <form [formGroup]=\"forexForm\">\r\n      <div class=\"inputCard\">\r\n      <ion-label>Negotiated Rate*</ion-label>\r\n      <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"negotiatedRate\" ngDefaultControl>\r\n        <ion-select-option *ngFor=\"let user of negotiated\" [value]=\"user\">{{user}}</ion-select-option>\r\n      </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"exchangeRate\" ngDefaultControl>Exchange Rate : $12,09,89</ion-label>   \r\n        </div>\r\n   \r\n  \r\n        <div style=\"margin-left: 19px;margin-top: 19px;margin-right: 19px\">\r\n          <ion-label>Do you wish to perform this transaction in your branch?</ion-label>\r\n          <!-- <ion-label></ion-label> -->\r\n          <ion-radio-group formControlName=\"trasactionBranchFlag\" ngDefaultControl>\r\n            <ion-row >\r\n              <ion-col>\r\n                   <ion-item lines=\"none\">\r\n                      <ion-label position=\"start\">Yes</ion-label>\r\n                      <ion-radio mode=\"md\" item-left value=\"yes\"></ion-radio>\r\n                 </ion-item>\r\n               </ion-col>\r\n          \r\n              <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                      <ion-label>No</ion-label>\r\n                      <ion-radio mode=\"md\" item-left value=\"no\"></ion-radio>\r\n                 </ion-item>\r\n              </ion-col>\r\n          \r\n             \r\n          \r\n          </ion-row>\r\n          </ion-radio-group>\r\n  </div>\r\n\r\n  <div class=\"inputCard\">\r\n    <ion-router-link (click)=\"presentModal()\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n    </div>\r\n  \r\n      <div class=\"inputCard\">\r\n      <ion-label>Charges*</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"charges\" ngDefaultControl></ion-input>\r\n      \r\n      </div>\r\n    \r\n      <div class=\"inputCard\">\r\n        <ion-label>Remarks</ion-label>\r\n        \r\n          <ion-textarea class=\"box1\" formControlName=\"remark\" ngDefaultControl></ion-textarea>\r\n      \r\n        </div>\r\n      \r\n    <div  class=\"ion-padding-top\">\r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;\" (click)=\"save(forexForm.value)\"\r\n     >Save</ion-button>\r\n      </div>\r\n      \r\n      <div >\r\n      <ion-button shape=\"round\"  fill=\"clear\"  style=\"width: 95%;\"  (click)=\"previous()\" style=\"color: black;\">Back</ion-button>\r\n      </div>\r\n      </div>\r\n      \r\n      </form>\r\n      </div>\r\n   \r\n      </ion-content>\r\n    ");

/***/ }),

/***/ "FktE":
/*!*******************************************************************!*\
  !*** ./src/app/views/forex-transaction/forex-transaction.page.ts ***!
  \*******************************************************************/
/*! exports provided: ForexTransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForexTransactionPage", function() { return ForexTransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forex_transaction_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forex-transaction.page.html */ "0j1Q");
/* harmony import */ var _forex_transaction_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forex-transaction.page.scss */ "JEDz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/branch/branch.component */ "z5an");








let ForexTransactionPage = class ForexTransactionPage {
    // changeSelectedCountryCode(value: string): void {
    //   this.selectedCountryCode = value;
    // }
    constructor(fb, router, modalController) {
        this.fb = fb;
        this.router = router;
        this.modalController = modalController;
        this.flag = true;
        this.users = ['789045667', '8789977889'];
        this.negotiated = ['0.98', '78.90'];
        this.isShow = true;
        this.currencyList = [
            'BG',
            'BN'
        ];
        this.selectedCountryCode = 'us';
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
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountBalance: ['$12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            fxAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            negotiatedRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            exchangeRate: ['$12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            trasactionBranchFlag: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            charges: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
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
        this.router.navigate(['tabs']);
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_7__["BranchComponent"],
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
};
ForexTransactionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
ForexTransactionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forex-transaction',
        template: _raw_loader_forex_transaction_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forex_transaction_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForexTransactionPage);



/***/ }),

/***/ "JEDz":
/*!*********************************************************************!*\
  !*** ./src/app/views/forex-transaction/forex-transaction.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.box {\n  border-width: thin;\n  width: 95%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box1 {\n  margin-top: 10px;\n  border-width: thin;\n  border-radius: 20px;\n  width: 95%;\n  height: 100px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputRemarks {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n  border-radius: 10px !important;\n  background-color: #f4f7f8;\n}\n\n.inputCard1 ion-label {\n  font-size: 14px;\n  color: black;\n  opacity: 75%;\n}\n\n.inputCard1 .input {\n  font-weight: bold;\n  opacity: 100%;\n}\n\n.labelCard {\n  color: gray;\n  font-size: 14px;\n}\n\n.searchbar {\n  border-radius: 10%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: blue;\n}\n\n.inputCard ion-item ion-label {\n  color: gray;\n}\n\n.inputCard ion-item {\n  margin-left: 0px;\n}\n\nion-textarea {\n  height: 500px;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #466ffe;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\n.boxDrop {\n  display: inline-block;\n  width: 95%;\n  height: 55px;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inputCard5 {\n  padding-top: 5%;\n  padding-left: 5%;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JleC10cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSyxvQ0FBQTtFQUNELDZDQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQU1BLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUZBQUE7RUFDQSwrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFQSjs7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUZBQUE7RUFDSiwrQkFBQTtBQVJKOztBQXFCSTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFzQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFuQlI7O0FBdUJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFLQSx5QkFBQTtBQXhCUjs7QUEyQlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF4Qlo7O0FBMkJRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBeEJaOztBQTBCSTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBdkJKOztBQTBCSTtFQUNBLGtCQUFBO0FBdkJKOztBQXlCSTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQXRCSjs7QUF3Qkk7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFFQSxxQ0FBQTtFQUVBLG9DQUFBO0VBQ0Esb0NBQUE7QUF2Qko7O0FBeUJJO0VBQ0QsY0FBQTtFQUNDLGVBQUE7RUFDQSxvQ0FBQTtFQUNDLFlBQUE7QUF0Qkw7O0FBeUJJO0VBQ0EsV0FBQTtBQXRCSjs7QUF5Qkk7RUFDSSxXQUFBO0FBdEJSOztBQXdCSTtFQUNJLGdCQUFBO0FBckJSOztBQXdCSTtFQUNJLGFBQUE7QUFyQlI7O0FBdUJJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQXBCUjs7QUF1Qkk7RUFFSSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFyQk47O0FBdUJJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBcEJSOztBQXdCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFyQlI7O0FBdUJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBcEJSOztBQXNCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFuQlI7O0FBc0JRO0VBQ0ksZ0JBQUE7QUFuQlo7O0FBdUJRO0VBQ0ksY0FBQTtFQUNELGtDQUFBO0FBcEJYOztBQXNCQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFwQko7O0FBMEJRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUF2Qlo7O0FBMkJVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXhCWjs7QUEwQlU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF2Qlo7O0FBMEJTO0VBQ0csYUFBQTtBQXZCWiIsImZpbGUiOiJmb3JleC10cmFuc2FjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG4gIH1cclxuLmJveCB7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gXHJcbiAgICAvLyBCbHVyOjZwdDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMCA1cHQgMC41cHQgI0QzRDNEMztcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggI0QzRDNEMztcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gICAgLy8gb3BhY2l0eTogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgfVxyXG4gICAgLmJveDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgICAgLy8gYm9yZGVyLXN0eWxlOiB0aGluO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgICAgICAgLy8gYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgIC8vIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgIC8vIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIC8vIGRpdiB7XHJcbiAgICAvLyAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXHJcbiAgICAvLyAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXHJcbiAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICBcclxuICAgIC5pbnB1dENhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgLy8gb3BhY2l0eTogNTAlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuaW5wdXRSZW1hcmtze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAuaW5wdXRDYXJkMXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAvLyBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDQsMjQ3LDI0OCk7XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0Q2FyZDEgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDc1JTtcclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRDYXJkMSAuaW5wdXR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIC5sYWJlbENhcmR7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnNlYXJjaGJhcntcclxuICAgIGJvcmRlci1yYWRpdXM6MTAlXHJcbiAgICB9XHJcbiAgICAudW5kZXJsaW5lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgb3BhY2l0eTogNzUlO1xyXG5cclxuICAgIH1cclxuICAgIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuaW5wdXRDYXJkIGlvbi1pdGVtIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjogIGdyYXk7XHJcbiAgICB9XHJcbiAgICAuaW5wdXRDYXJkIGlvbi1pdGVte1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGlvbi10ZXh0YXJlYXtcclxuICAgICAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIGNvbG9yOnJnYig3MCwxMTEsMjU0KTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICBcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGNvbG9yOnJnYig3MCwxMTEsMjU0KTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuY2FuY2VsY2FyZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0NCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgLmlvbi1wYWRkaW5nLXRvcDJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgIH1cclxuICAgIC5iYWNrY2FyZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0NyU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmlvbi1wYWRkaW5nLXRvcHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICAgICAgICB9XHJcbi5ib3hEcm9we1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAvLzogO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbiAgICAgICAgbmd4LWZsYWctcGlja2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3g3e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dENhcmQ1e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICBmb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSJdfQ== */");

/***/ }),

/***/ "NRsS":
/*!*********************************************************************!*\
  !*** ./src/app/views/forex-transaction/forex-transaction.module.ts ***!
  \*********************************************************************/
/*! exports provided: ForexTransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForexTransactionPageModule", function() { return ForexTransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forex_transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forex-transaction-routing.module */ "PTQx");
/* harmony import */ var _forex_transaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forex-transaction.page */ "FktE");
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ "09Zs");








let ForexTransactionPageModule = class ForexTransactionPageModule {
};
ForexTransactionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forex_transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForexTransactionPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__["NgxFlagPickerModule"],
        ],
        declarations: [_forex_transaction_page__WEBPACK_IMPORTED_MODULE_6__["ForexTransactionPage"]]
    })
], ForexTransactionPageModule);



/***/ }),

/***/ "PTQx":
/*!*****************************************************************************!*\
  !*** ./src/app/views/forex-transaction/forex-transaction-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ForexTransactionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForexTransactionPageRoutingModule", function() { return ForexTransactionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forex_transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forex-transaction.page */ "FktE");




const routes = [
    {
        path: '',
        component: _forex_transaction_page__WEBPACK_IMPORTED_MODULE_3__["ForexTransactionPage"]
    }
];
let ForexTransactionPageRoutingModule = class ForexTransactionPageRoutingModule {
};
ForexTransactionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForexTransactionPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-forex-transaction-forex-transaction-module.js.map