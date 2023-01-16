(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"], {
    /***/
    "kA6c":
    /*!***********************************************!*\
      !*** ./src/app/views/home/account.service.ts ***!
      \***********************************************/

    /*! exports provided: API_URL, AccountService */

    /***/
    function kA6c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/config/app.constant */
      "ngOV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].baseURL;
      var tabsActive = ['AES', 'AES_SUM'];

      var AccountService = function AccountService() {
        _classCallCheck(this, AccountService);

        this.tabsKey = [];
        this.categories = [{
          id: 1,
          title: 'Application Entry Stage',
          state: 'application/list',
          icon: 'account_balance_wallet',
          type: 'dropDown',
          isActive: true,
          tooltip: 'Item',
          isOpen: "false",
          submenu: [{
            id: 111,
            title: 'Summary',
            type: 'link',
            state: 'application/list',
            isActive: true,
            account_tiles: [{
              id: 1111,
              title: '1. Account Details',
              content: "Details such as Branch name, account number, etc. which uniquely identify a bank account are added",
              percentage: 0,
              status: '',
              state: 'application/create-customer-account',
              avatar: "assets/images/svg/Group 673.svg",
              isActive: false
            }, {
              id: 1112,
              title: '2. Customer Information Details',
              content: "All the primary information about the customers account is captured",
              percentage: 0,
              status: '',
              state: 'application/customer-information',
              avatar: "assets/images/svg/undraw_personal_information_re_vw8a.svg",
              isActive: false
            }, {
              id: 1113,
              title: '3. Mandate Details',
              content: "Mode of operation, Signatory details of the customer is added",
              percentage: 0,
              status: '',
              state: 'application/mandate',
              avatar: "assets/images/svg/undraw_Terms_re_6ak4.svg",
              isActive: false
            }, {
              id: 1114,
              title: '4. Account Service',
              content: "Information on the customers Account Statement, Passbook, Cheque Books are added.",
              percentage: 0,
              status: '',
              state: 'application/account-service',
              avatar: "assets/images/svg/undraw_opinion_dxp8.svg",
              isActive: false
            }, {
              id: 1115,
              title: '5. Nominee Details',
              content: "Details such as name, relation address of the nominee is added.",
              percentage: 0,
              status: '',
              state: 'application/nominee',
              avatar: "assets/images/svg/Group 47.svg",
              isActive: false
            }]
          }, {
            id: 112,
            title: 'Account Details',
            type: 'link',
            isActive: true,
            state: 'application/create-customer-account'
          }, {
            id: 113,
            title: 'Customer Information Details',
            type: 'link',
            state: 'application/customer-information',
            isActive: false
          }, {
            id: 114,
            title: 'Mandate Details',
            type: 'link',
            state: 'application/mandate',
            isActive: false
          }, {
            id: 115,
            title: 'Account Service',
            type: 'link',
            state: 'application/account-service',
            isActive: false
          }, {
            id: 116,
            title: 'Nominee Details',
            type: 'link',
            state: 'application/nominee',
            isActive: false
          }]
        }, {
          id: 2,
          title: 'Limit Entry Stage',
          state: 'application/limit-entry-stage',
          icon: 'credit_card',
          isOpen: "false",
          isActive: true,
          type: 'dropDown',
          submenu: [{
            id: 211,
            title: 'Summary',
            type: 'link',
            state: 'application/limit-entry-stage/list',
            isActive: true
          }, {
            id: 212,
            title: 'Secured Overdraft Details',
            type: 'link',
            state: 'application/limit-entry-stage/secured-draft',
            isActive: false
          }, {
            id: 213,
            title: 'Unsecured Overdraft Details',
            type: 'link',
            state: 'application/limit-entry-stage/unsecured-draft',
            isActive: false
          }, {
            id: 214,
            title: 'Financial Details',
            type: 'link',
            state: 'application/limit-entry-stage/financial-details',
            isActive: false
          }]
        }, {
          id: 3,
          title: 'Application Enrichment',
          state: 'application/create-customer-account',
          icon: 'style',
          isOpen: "false",
          isActive: false,
          type: 'dropDown',
          submenu: [{
            id: 311,
            title: 'Summary',
            type: 'link',
            state: 'application/enrichment/list',
            isActive: false
          }, {
            id: 312,
            title: 'Interest Details',
            type: 'link',
            state: 'application/enrichment/interest',
            isActive: false
          }, {
            id: 313,
            title: 'Charge Details',
            type: 'link',
            state: 'application/enrichment/charge',
            isActive: false
          }]
        }, {
          id: 4,
          title: 'Application Assessment',
          state: 'create-customer-account',
          icon: 'assessment',
          isOpen: "false",
          type: 'dropDown',
          isActive: false,
          submenu: [{
            id: 411,
            title: 'Summary',
            type: 'link',
            state: 'application/assessment/list',
            isActive: false
          }, {
            id: 412,
            title: 'Qualitative Scoreboard',
            type: 'link',
            state: 'application/assessment/qualitative',
            isActive: false
          }, {
            id: 413,
            title: 'Assessment Report',
            type: 'link',
            state: 'application/assessment/report',
            isActive: false
          }]
        }, {
          id: 5,
          title: 'Funding Stage',
          state: 'create-customer-account',
          icon: 'card_membership',
          isOpen: "false",
          isActive: false,
          type: 'dropDown',
          submenu: [{
            id: 511,
            title: 'Summary',
            type: 'link',
            state: 'application/funding/list',
            isActive: false
          }, {
            id: 512,
            title: 'Initial Funding Stage',
            type: 'link',
            state: 'application/funding/details',
            isActive: false
          }]
        }, {
          id: 6,
          title: 'Approval Stage',
          state: 'create-customer-account',
          icon: 'done_all',
          isOpen: "false",
          isActive: false,
          type: 'dropDown',
          submenu: [{
            id: 611,
            title: 'Summary',
            type: 'link',
            isActive: false,
            state: 'application/approval/list'
          }, {
            id: 612,
            title: 'Approval Details',
            isActive: false,
            type: 'link',
            state: 'application/approval/details'
          }]
        }, {
          id: 7,
          title: 'Digital Signing',
          state: 'create-customer-account',
          icon: 'web_asset',
          isOpen: "false",
          type: 'dropDown',
          isActive: false,
          submenu: [{
            id: 711,
            title: 'Summary',
            type: 'link',
            isActive: false,
            state: 'application/digital-sign/home'
          }, {
            id: 712,
            title: 'Digital Signing',
            type: 'link',
            isActive: false,
            state: 'application/digital-sign/options'
          }]
        }];
        this.accountItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.categories);
        this.accountItems$ = this.accountItems.asObservable();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      };

      AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || AccountService)();
      };

      AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountService,
        factory: AccountService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "rp8y":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/finger-print-capture.service.ts ***!
      \*****************************************************************/

    /*! exports provided: API_URL, FingerPrintCaptureService */

    /***/
    function rp8y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FingerPrintCaptureService", function () {
        return FingerPrintCaptureService;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var app_config_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/config/app.constant */
      "ngOV");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL;
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }),
        mode: 'no-cors'
      };

      var FingerPrintCaptureService = /*#__PURE__*/function () {
        function FingerPrintCaptureService(http, snack) {
          _classCallCheck(this, FingerPrintCaptureService);

          this.http = http;
          this.snack = snack;

          this.getJSON_rd = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('RDSERVICE', url, true);
            xhr.responseType = 'text';

            xhr.onload = function () {
              var status = xhr.status;

              if (status == 200) {
                callback(null, xhr.response);
              } else {
                callback(status);
              }
            };

            xhr.send();
          };
        }

        _createClass(FingerPrintCaptureService, [{
          key: "CallingSGIFPGetData1",
          value: function CallingSGIFPGetData1() {
            // var uri = "http://localhost:8000/SGIFPCapture";
            // var xmlhttp = new XMLHttpRequest();
            // xmlhttp.setRequestHeader('X-PINGOTHER', 'pingpong');
            // xmlhttp.setRequestHeader('Content-Type', 'application/json');
            // xmlhttp.onreadystatechange = function () {
            //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //     var fpobject = JSON.parse(xmlhttp.responseText);
            //     console.log("fpobject :: ", fpobject);
            //     // successCall(fpobject);
            //   }
            //   else if (xmlhttp.status == 404) {
            //     // failCall(xmlhttp.status)
            //   }
            // }
            // xmlhttp.onerror = function () {
            //   // failCall(xmlhttp.status);
            // }
            // xmlhttp.open("POST", uri, true);
            // xmlhttp.send();
            return this.http.get("http://localhost:8000/SGIFPCapture"); //8443
          }
          /* To-Do: Localhost api */

        }, {
          key: "CallingSGIFPGetData",
          value: function CallingSGIFPGetData() {
            return this.http.get('http://localhost:8000/SGIFPCapture').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              console.log('result-->', result);
              return result;
            }));
          }
          /* To-Do: https api capture */

        }, {
          key: "CallingSGIFPCapture",
          value: function CallingSGIFPCapture() {
            console.log(" in service ");
            return this.http.get('https://localhost:8443/SGIFPCapture').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              console.log('result-->', result);
              return result;
            }));
          }
        }, {
          key: "callingSGIFPCaptureFromJava",
          value: function callingSGIFPCaptureFromJava() {
            console.log(" in service ");
            return this.http.get("".concat(API_URL, "/fingerPrintCapture/captureFingerPrint")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              console.log('result-->', result);
              return result;
            }));
          }
          /* To-Do: https api capture */

        }, {
          key: "CallingSGIFPMatch",
          value: function CallingSGIFPMatch(templeData1, templeData2) {
            var secuLicc = "ae7VmpMA9ZwEGVYVr1LMWrqjCEx+eFmya9VX0v+vNfQ=";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('template1', templeData1).append('template2', templeData2); //  .append('licstr',secuLicc);
            //  .append('licstr',secuLicc);
            // http://localhost:8000/SGIMatchScore

            return this.http.post("https://localhost:8443/SGIMatchScore", params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              // console.log('result-->', result)
              return result;
            }));
          }
        }, {
          key: "matchCapturedFp",
          value: function matchCapturedFp(fpId, capturedData) {
            console.log('in finger print match service');
            return this.http.post("".concat(API_URL, "/rest/upload/getRegisteredCustomerData/").concat(fpId), capturedData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              // console.log('result-->', result)
              return result;
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(arg0, arg1) {
            throw new Error('Method not implemented.');
          }
          /* NOTE:
          biometric call type: registered device service
          lisence: paid
          desc: currently not using this service
           */

        }, {
          key: "rdservice",
          value: function rdservice() {
            var port;
            var urlStr = '';
            urlStr = 'http://localhost:11100/';
            console.log(" in service ");
            return this.http.get("http://localhost:11100/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              console.log('result-->', result);
              return result;
            }));
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId, screen) {
            return this.http.post("".concat(API_URL, "/rest/upload/saveOrUpdateBio/").concat(fingerName, "/").concat(cId, "/").concat(screen), capFingerPrint);
          }
        }, {
          key: "errorCodeService",
          value: function errorCodeService(errorCode) {
            var error = '';

            if (errorCode == 1) {
              error = 'Creation failed : A driver is missing/not correctly configured';
            }

            if (errorCode == 3) {
              error = 'Please check again. Either driver is corrupted or Device is not connected';
            }

            if (errorCode == 2) {
              error = 'Function failed ';
            }

            if (errorCode == 51) {
              error = 'System file load failure';
            }

            if (errorCode == 52) {
              error = 'Sensor chip initialization failed';
            }

            if (errorCode == 53) {
              error = 'Sensor line dropped';
            }

            if (errorCode == 54) {
              error = 'Timeout/Failed to scan. Clean your fingers and try again';
            }

            if (errorCode == 103 || errorCode == 104 || errorCode == 106) {
              error = 'Match failed , try again';
            }

            console.log('error :: ', error);
            this.snack.open("".concat(error), 'OK', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });
          }
        }, {
          key: "getCustInfoByFp",
          value: function getCustInfoByFp(page, size, fingerIndex) {
            var params; // if ((fingerIndex != 0) && page == 0) {
            //   console.log('only fingerIndex')
            //   params = new HttpParams().append('fingerIndex', fingerIndex);
            // } else {

            console.log("fingerIndex ".concat(fingerIndex, " and page ").concat(page));
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('fingerIndex', fingerIndex); //.append('page', page);
            // }

            return this.http.get("".concat(API_URL, "/rest/upload/getCustomerDataByFp?").concat(params));
          }
        }]);

        return FingerPrintCaptureService;
      }();

      FingerPrintCaptureService.ɵfac = function FingerPrintCaptureService_Factory(t) {
        return new (t || FingerPrintCaptureService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      FingerPrintCaptureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: FingerPrintCaptureService,
        factory: FingerPrintCaptureService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FingerPrintCaptureService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e-es5.js.map