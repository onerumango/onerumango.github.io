(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "rp8y":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/finger-print-capture.service.ts ***!
  \*****************************************************************/
/*! exports provided: FingerPrintCaptureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerPrintCaptureService", function() { return FingerPrintCaptureService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









const baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DESKTOP_URL;
class FingerPrintCaptureService {
    constructor(http, snack) {
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
                }
                else {
                    callback(status);
                }
            };
            xhr.send();
        };
    }
    userDataService(data) {
        this.userData.next(data);
    }
    /* NOTE:
    biometric call type: webapi
    lisence: used 60 free trail version
    desc: currently using this service for finger print capturing
     */
    CallingSGIFPGetData() {
        return this.http.get('http://localhost:8000/SGIFPCapture')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((result) => {
            console.log('result-->', result);
            return result;
        }));
    }
    handleError(arg0, arg1) {
        throw new Error('Method not implemented.');
    }
    /* NOTE:
    biometric call type: registered device service
    lisence: paid
    desc: currently not using this service
     */
    rdservice() {
        var port;
        var urlStr = '';
        urlStr = 'http://localhost:11100/';
        this.getJSON_rd(urlStr, function (err, data) {
            if (err != null) {
                alert('Something went wrong: ' + err);
            }
            else {
                alert('Response:-' + String(data));
            }
        });
    }
    saveBiometric(capFingerPrint, fingerName, cId, screen) {
        return this.http.post(`${baseUrl}/rest/upload/saveOrUpdateBio/${fingerName}/${cId}/${screen}`, capFingerPrint);
    }
    errorCodeService(errorCode) {
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
        this.snack.open(`${error}`, 'OK', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
    }
    getCustInfoByFp(page, size, fingerIndex) {
        var params;
        console.log(`fingerIndex ${fingerIndex} and page ${page}`);
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('fingerIndex', fingerIndex); //.append('page', page);
        return this.http.get(`${baseUrl}/rest/upload/getCustomerDataByFp?${params}`);
    }
    getCustInfoByCustomerId(customerId) {
        var params;
        console.log(`customerId ${customerId}`);
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('customerId', customerId);
        return this.http.get(`${baseUrl}/rest/upload/getCustomerDataByFp?${params}`);
    }
    /* To-Do: https api capture */
    CallingSGIFPCapture() {
        console.log(" in service ");
        return this.http.get('https://localhost:8443/SGIFPCapture')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((result) => {
            console.log('result-->', result);
            return result;
        }));
    }
    /* To-Do: https api capture */
    CallingSGIFPMatch(templeData1, templeData2) {
        var secuLicc = "ae7VmpMA9ZwEGVYVr1LMWrqjCEx+eFmya9VX0v+vNfQ=";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('template1', templeData1)
            .append('template2', templeData2);
        //  .append('licstr',secuLicc);
        //  .append('licstr',secuLicc);
        // http://localhost:8000/SGIMatchScore
        return this.http.post(`https://localhost:8443/SGIMatchScore`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((result) => {
            // console.log('result-->', result)
            return result;
        }));
    }
}
FingerPrintCaptureService.ɵfac = function FingerPrintCaptureService_Factory(t) { return new (t || FingerPrintCaptureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
FingerPrintCaptureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FingerPrintCaptureService, factory: FingerPrintCaptureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerPrintCaptureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map