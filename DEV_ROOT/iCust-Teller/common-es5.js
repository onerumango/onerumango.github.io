(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "rp8y":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/finger-print-capture.service.ts ***!
      \*****************************************************************/

    /*! exports provided: FingerPrintCaptureService */

    /***/
    function rp8y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FingerPrintCaptureService", function () {
        return FingerPrintCaptureService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DESKTOP_URL;

      var FingerPrintCaptureService = /*#__PURE__*/function () {
        function FingerPrintCaptureService(http, snack) {
          _classCallCheck(this, FingerPrintCaptureService);

          this.http = http;
          this.snack = snack;
          this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');

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
          key: "userDataService",
          value: function userDataService(data) {
            this.userData.next(data);
          }
          /* NOTE:
          biometric call type: webapi
          lisence: used 60 free trail version
          desc: currently using this service for finger print capturing
           */

        }, {
          key: "CallingSGIFPGetData",
          value: function CallingSGIFPGetData() {
            return this.http.get('http://localhost:8000/SGIFPCapture').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log('result-->', result);
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
            this.getJSON_rd(urlStr, function (err, data) {
              if (err != null) {
                alert('Something went wrong: ' + err);
              } else {
                alert('Response:-' + String(data));
              }
            });
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId, screen) {
            return this.http.post("".concat(baseUrl, "/rest/upload/saveOrUpdateBio/").concat(fingerName, "/").concat(cId, "/").concat(screen), capFingerPrint);
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
            var params;
            console.log("fingerIndex ".concat(fingerIndex, " and page ").concat(page));
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('fingerIndex', fingerIndex); //.append('page', page);

            return this.http.get("".concat(baseUrl, "/rest/upload/getCustomerDataByFp?").concat(params));
          }
        }, {
          key: "getCustInfoByCustomerId",
          value: function getCustInfoByCustomerId(customerId) {
            var params;
            console.log("customerId ".concat(customerId));
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('customerId', customerId);
            return this.http.get("".concat(baseUrl, "/rest/upload/getCustomerDataByFp?").concat(params));
          }
          /* To-Do: https api capture */

        }, {
          key: "CallingSGIFPCapture",
          value: function CallingSGIFPCapture() {
            console.log(" in service ");
            return this.http.get('https://localhost:8443/SGIFPCapture').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log('result-->', result);
              return result;
            }));
          }
          /* To-Do: https api capture */

        }, {
          key: "CallingSGIFPMatch",
          value: function CallingSGIFPMatch(templeData1, templeData2) {
            var secuLicc = "ae7VmpMA9ZwEGVYVr1LMWrqjCEx+eFmya9VX0v+vNfQ=";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('template1', templeData1).append('template2', templeData2); //  .append('licstr',secuLicc);
            //  .append('licstr',secuLicc);
            // http://localhost:8000/SGIMatchScore

            return this.http.post("https://localhost:8443/SGIMatchScore", params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              // console.log('result-->', result)
              return result;
            }));
          }
        }]);

        return FingerPrintCaptureService;
      }();

      FingerPrintCaptureService.ɵfac = function FingerPrintCaptureService_Factory(t) {
        return new (t || FingerPrintCaptureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      FingerPrintCaptureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FingerPrintCaptureService,
        factory: FingerPrintCaptureService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerPrintCaptureService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map