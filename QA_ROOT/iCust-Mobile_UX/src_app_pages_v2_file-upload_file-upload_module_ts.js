(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_file-upload_file-upload_module_ts"],{

/***/ 4720:
/*!***************************************************!*\
  !*** ./src/app/components/crop/crop.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropComponent": () => (/* binding */ CropComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _crop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop.component.html?ngResource */ 15487);
/* harmony import */ var _crop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop.component.scss?ngResource */ 50617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let CropComponent = class CropComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.config = {
            editorBackgroundColor: '#fafafa',
            buttonThemeColor: 'primary',
            cropToolColor: '#ff4081',
            cropToolShape: 'circle',
            exportImageIcon: 'cloud_download'
        };
    }
    ngOnInit() {
        console.log();
    }
    editResult(event) {
        console.log(event);
        this.modalCtrl.dismiss(event);
    }
    onError(event) {
        console.log(event);
    }
    editorState(event) {
        console.log(event);
    }
    exitEditor(event) {
        console.log(event);
    }
};
CropComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
CropComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    frontFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CropComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-crop',
        template: _crop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CropComponent);



/***/ }),

/***/ 46645:
/*!********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadPageRoutingModule": () => (/* binding */ FileUploadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _file_upload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.page */ 50473);




const routes = [
    {
        path: '',
        component: _file_upload_page__WEBPACK_IMPORTED_MODULE_0__.FileUploadPage
    }
];
let FileUploadPageRoutingModule = class FileUploadPageRoutingModule {
};
FileUploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FileUploadPageRoutingModule);



/***/ }),

/***/ 73942:
/*!************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadPageModule": () => (/* binding */ FileUploadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload-routing.module */ 46645);
/* harmony import */ var _file_upload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload.page */ 50473);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);








let FileUploadPageModule = class FileUploadPageModule {
};
FileUploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
            _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadPageRoutingModule
        ],
        declarations: [_file_upload_page__WEBPACK_IMPORTED_MODULE_1__.FileUploadPage]
    })
], FileUploadPageModule);



/***/ }),

/***/ 50473:
/*!**********************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadPage": () => (/* binding */ FileUploadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _file_upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.page.html?ngResource */ 60004);
/* harmony import */ var _file_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload.page.scss?ngResource */ 90283);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tesseract.js */ 54389);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_crop_crop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/crop/crop.component */ 4720);
/* harmony import */ var _kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kyc-branch/kyc-branch.service */ 8813);












const worker = (0,tesseract_js__WEBPACK_IMPORTED_MODULE_3__.createWorker)({
    logger: (m) => console.log(m),
});
let FileUploadPage = class FileUploadPage {
    constructor(router, api, cdr, _location, modalCtrl, branchService, toastCtrl) {
        this.router = router;
        this.api = api;
        this.cdr = cdr;
        this._location = _location;
        this.modalCtrl = modalCtrl;
        this.branchService = branchService;
        this.toastCtrl = toastCtrl;
        this.isFile = false;
        this.files = [];
        this.isUploading = false;
    }
    ngOnInit() { }
    goBack() {
        localStorage.setItem('chequeData', JSON.stringify(this.chequeData));
        this._location.back();
    }
    onFileSelect(e, side) {
        try {
            const file = e.target.files[0];
            this.openCropComponent(file);
            // const fReader = new FileReader()
            // fReader.readAsDataURL(file)
            // fReader.onloadend = (_event: any) => {
            //   this.filename = file.name;
            //   this.base64File = _event.target.result;
            //   console.log(this.filename);
            //   this.files.push(file);
            //   this.readChequeData(file);
            //   // this.imageParser(file);
            //   this.fileUpload(file);
            // }
        }
        catch (error) {
            this.filename = null;
            this.base64File = null;
        }
    }
    // imageParser(image: File) {
    //   (async () => {
    //     await worker.load();
    //     await worker.loadLanguage('eng');
    //     await worker.initialize('eng');
    //     const { data: { text } } = await worker.recognize(image);
    //     this.parsedText = text;
    //     console.log("Parsed Text", text);
    //     await worker.terminate();
    //   })();
    // }
    upload() {
        this.isFile = !this.isFile;
    }
    fileUpload(file) {
        this.uploadingFile = file.name;
        this.isUploading = true;
        this.requestSubscription = this.api
            .uploadAndProgress(file)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpEventType.UploadProgress) {
                this.percentDone = Math.round((100 * event.loaded) / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpResponse) {
                this.uploadSuccess = true;
                this.isUploading = false;
            }
        });
    }
    readChequeData(file) {
        const formData = new FormData();
        formData.append('file', file);
        this.api.getChequeData(formData).subscribe((res) => {
            let cheque = {};
            res.data.forEach((d) => {
                cheque[d.label] = d.value;
            });
            this.chequeData = cheque;
            // TODO;
            let chequeNo = this.chequeData['chequeNo'];
            chequeNo = chequeNo.substring(1, chequeNo.length - 1);
            this.chequeData['chequeNo'] = chequeNo;
            this.chequeData['name'] = 'Axis Bank Ltd';
            console.log(this.chequeData);
            const uploadData = new FormData();
            const data = {
                customerId: localStorage.getItem('customer_id'),
                documentName: 'Cheque',
                documentType: 15,
                fileName: file.name,
                verificationType: 'Cheque Withdrawal',
                documentSide: 1,
            };
            uploadData.append('data', JSON.stringify(data));
            uploadData.append('file', file);
            this.branchService.upload(uploadData).subscribe((res) => {
                console.log(res);
            });
        }, err => {
            this.openToast();
        });
    }
    deleteFile(item) {
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
    }
    openToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'unable to read data',
                duration: 5000,
                position: 'middle'
            });
            toast.present();
        });
    }
    cancel(item) {
        this.requestSubscription.unsubscribe();
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
    }
    openCropComponent(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_crop_crop_component__WEBPACK_IMPORTED_MODULE_4__.CropComponent,
                backdropDismiss: true,
                componentProps: {
                    file: file,
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                const fReader = new FileReader();
                fReader.readAsDataURL(res === null || res === void 0 ? void 0 : res.data);
                fReader.onloadend = (_event) => {
                    this.filename = file.name;
                    this.base64File = _event.target.result;
                    console.log(this.filename);
                    this.files.push(file);
                    this.readChequeData(file);
                    // this.imageParser(file);
                    this.fileUpload(file);
                };
            });
            return yield modal.present();
        });
    }
};
FileUploadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_5__.BranchService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController }
];
FileUploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-file-upload',
        template: _file_upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_file_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FileUploadPage);



/***/ }),

/***/ 8813:
/*!***********************************************************!*\
  !*** ./src/app/pages/v2/kyc-branch/kyc-branch.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "BranchService": () => (/* binding */ BranchService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
let BranchService = class BranchService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // SIMULATE
    uploadAndProgress(file) {
        console.log(file);
        var formData = new FormData();
        formData.append('file', file);
        return this.httpClient.post('https://file.io', formData, {
            reportProgress: true,
            observe: 'events',
        });
    }
    fetchCustomerDetails(payload) {
        return this.httpClient.post(`${API_URL}/customerdata/phoneNoEmailIdExists`, payload);
    }
    upsertCustomer(data) {
        return this.httpClient.post(`${API_URL}/customerdata/upsertCustomerDetails`, data);
    }
    updateKyc(kycDetails) {
        return this.httpClient.post(`${API_URL}/customerdata/saveRekycOrAcceptInfo`, kycDetails);
    }
    getOtp(payload) {
        return this.httpClient.post(`${API_URL}/rest/otp/generateOtp`, payload);
    }
    verifyOtp(obj) {
        return this.httpClient.put(`${API_URL}/rest/otp/validateOtp`, obj);
    }
    upload(uploadData) {
        return this.httpClient.post(`${API_URL}/rest/upload/uploadDoc`, uploadData, {
            reportProgress: true,
            observe: 'events',
        });
    }
    deleteCustDoc(customerId, documentName, documentSide) {
        return this.httpClient.delete(`${API_URL}/customerdata/deleteCustDocument?customerId=${customerId}&documentName=${documentName}&documentSide=${documentSide}`);
    }
    saveOrUpdateBio(formData) {
        return this.httpClient.post(`${API_URL}/rest/upload/saveOrUpdateBio`, formData);
    }
    updateKycStatusByCustId(customerId, kycStatus, custStatus) {
        console.log(customerId);
        var data = {
            customerId: +customerId,
            kycStatus: kycStatus,
            custStatus: custStatus,
        };
        return this.httpClient.put(`${API_URL}/customerdata/updateKycStatusByCustomerId`, data);
    }
    fetchStateCityByZipcode(countryName, pincode) {
        return this.httpClient
            .get(`${API_URL}/iccity/fetchCityByCountryAndPincode?countryName=${countryName}&pinCode=${pincode}`);
    }
    fetchCustomerDocuments(customerId, documentType) {
        return this.httpClient.get(`${API_URL}/customerdata/fetchCustomerDocuments?customerId=${customerId}&documentType=${documentType}`);
    }
};
BranchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
BranchService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], BranchService);



/***/ }),

/***/ 58791:
/*!*****************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global module, require */
module.exports = __webpack_require__(/*! ./load-image */ 81823);

__webpack_require__(/*! ./load-image-scale */ 22358);

__webpack_require__(/*! ./load-image-meta */ 59485);

__webpack_require__(/*! ./load-image-fetch */ 49305);

__webpack_require__(/*! ./load-image-exif */ 90289);

__webpack_require__(/*! ./load-image-exif-map */ 20107);

__webpack_require__(/*! ./load-image-iptc */ 31380);

__webpack_require__(/*! ./load-image-iptc-map */ 20919);

__webpack_require__(/*! ./load-image-orientation */ 11767);

/***/ }),

/***/ 20107:
/*!*******************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-exif-map.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Exif tags mapping based on
 * https://github.com/jseidelin/exif-js
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823), __webpack_require__(/*! ./load-image-exif */ 90289)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var ExifMapProto = loadImage.ExifMap.prototype;
  ExifMapProto.tags = {
    // =================
    // TIFF tags (IFD0):
    // =================
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011c: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011a: 'XResolution',
    0x011b: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012d: 'TransferFunction',
    0x013e: 'WhitePoint',
    0x013f: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013b: 'Artist',
    0x8298: 'Copyright',
    0x8769: {
      // ExifIFDPointer
      0x9000: 'ExifVersion',
      // EXIF version
      0xa000: 'FlashpixVersion',
      // Flashpix format version
      0xa001: 'ColorSpace',
      // Color space information tag
      0xa002: 'PixelXDimension',
      // Valid width of meaningful image
      0xa003: 'PixelYDimension',
      // Valid height of meaningful image
      0xa500: 'Gamma',
      0x9101: 'ComponentsConfiguration',
      // Information about channels
      0x9102: 'CompressedBitsPerPixel',
      // Compressed bits per pixel
      0x927c: 'MakerNote',
      // Any desired information written by the manufacturer
      0x9286: 'UserComment',
      // Comments by user
      0xa004: 'RelatedSoundFile',
      // Name of related sound file
      0x9003: 'DateTimeOriginal',
      // Date and time when the original image was generated
      0x9004: 'DateTimeDigitized',
      // Date and time when the image was stored digitally
      0x9290: 'SubSecTime',
      // Fractions of seconds for DateTime
      0x9291: 'SubSecTimeOriginal',
      // Fractions of seconds for DateTimeOriginal
      0x9292: 'SubSecTimeDigitized',
      // Fractions of seconds for DateTimeDigitized
      0x829a: 'ExposureTime',
      // Exposure time (in seconds)
      0x829d: 'FNumber',
      0x8822: 'ExposureProgram',
      // Exposure program
      0x8824: 'SpectralSensitivity',
      // Spectral sensitivity
      0x8827: 'PhotographicSensitivity',
      // EXIF 2.3, ISOSpeedRatings in EXIF 2.2
      0x8828: 'OECF',
      // Optoelectric conversion factor
      0x8830: 'SensitivityType',
      0x8831: 'StandardOutputSensitivity',
      0x8832: 'RecommendedExposureIndex',
      0x8833: 'ISOSpeed',
      0x8834: 'ISOSpeedLatitudeyyy',
      0x8835: 'ISOSpeedLatitudezzz',
      0x9201: 'ShutterSpeedValue',
      // Shutter speed
      0x9202: 'ApertureValue',
      // Lens aperture
      0x9203: 'BrightnessValue',
      // Value of brightness
      0x9204: 'ExposureBias',
      // Exposure bias
      0x9205: 'MaxApertureValue',
      // Smallest F number of lens
      0x9206: 'SubjectDistance',
      // Distance to subject in meters
      0x9207: 'MeteringMode',
      // Metering mode
      0x9208: 'LightSource',
      // Kind of light source
      0x9209: 'Flash',
      // Flash status
      0x9214: 'SubjectArea',
      // Location and area of main subject
      0x920a: 'FocalLength',
      // Focal length of the lens in mm
      0xa20b: 'FlashEnergy',
      // Strobe energy in BCPS
      0xa20c: 'SpatialFrequencyResponse',
      0xa20e: 'FocalPlaneXResolution',
      // Number of pixels in width direction per FPRUnit
      0xa20f: 'FocalPlaneYResolution',
      // Number of pixels in height direction per FPRUnit
      0xa210: 'FocalPlaneResolutionUnit',
      // Unit for measuring the focal plane resolution
      0xa214: 'SubjectLocation',
      // Location of subject in image
      0xa215: 'ExposureIndex',
      // Exposure index selected on camera
      0xa217: 'SensingMethod',
      // Image sensor type
      0xa300: 'FileSource',
      // Image source (3 == DSC)
      0xa301: 'SceneType',
      // Scene type (1 == directly photographed)
      0xa302: 'CFAPattern',
      // Color filter array geometric pattern
      0xa401: 'CustomRendered',
      // Special processing
      0xa402: 'ExposureMode',
      // Exposure mode
      0xa403: 'WhiteBalance',
      // 1 = auto white balance, 2 = manual
      0xa404: 'DigitalZoomRatio',
      // Digital zoom ratio
      0xa405: 'FocalLengthIn35mmFilm',
      0xa406: 'SceneCaptureType',
      // Type of scene
      0xa407: 'GainControl',
      // Degree of overall image gain adjustment
      0xa408: 'Contrast',
      // Direction of contrast processing applied by camera
      0xa409: 'Saturation',
      // Direction of saturation processing applied by camera
      0xa40a: 'Sharpness',
      // Direction of sharpness processing applied by camera
      0xa40b: 'DeviceSettingDescription',
      0xa40c: 'SubjectDistanceRange',
      // Distance to subject
      0xa420: 'ImageUniqueID',
      // Identifier assigned uniquely to each image
      0xa430: 'CameraOwnerName',
      0xa431: 'BodySerialNumber',
      0xa432: 'LensSpecification',
      0xa433: 'LensMake',
      0xa434: 'LensModel',
      0xa435: 'LensSerialNumber'
    },
    0x8825: {
      // GPSInfoIFDPointer
      0x0000: 'GPSVersionID',
      0x0001: 'GPSLatitudeRef',
      0x0002: 'GPSLatitude',
      0x0003: 'GPSLongitudeRef',
      0x0004: 'GPSLongitude',
      0x0005: 'GPSAltitudeRef',
      0x0006: 'GPSAltitude',
      0x0007: 'GPSTimeStamp',
      0x0008: 'GPSSatellites',
      0x0009: 'GPSStatus',
      0x000a: 'GPSMeasureMode',
      0x000b: 'GPSDOP',
      0x000c: 'GPSSpeedRef',
      0x000d: 'GPSSpeed',
      0x000e: 'GPSTrackRef',
      0x000f: 'GPSTrack',
      0x0010: 'GPSImgDirectionRef',
      0x0011: 'GPSImgDirection',
      0x0012: 'GPSMapDatum',
      0x0013: 'GPSDestLatitudeRef',
      0x0014: 'GPSDestLatitude',
      0x0015: 'GPSDestLongitudeRef',
      0x0016: 'GPSDestLongitude',
      0x0017: 'GPSDestBearingRef',
      0x0018: 'GPSDestBearing',
      0x0019: 'GPSDestDistanceRef',
      0x001a: 'GPSDestDistance',
      0x001b: 'GPSProcessingMethod',
      0x001c: 'GPSAreaInformation',
      0x001d: 'GPSDateStamp',
      0x001e: 'GPSDifferential',
      0x001f: 'GPSHPositioningError'
    },
    0xa005: {
      // InteroperabilityIFDPointer
      0x0001: 'InteroperabilityIndex'
    }
  };
  ExifMapProto.stringValues = {
    ExposureProgram: {
      0: 'Undefined',
      1: 'Manual',
      2: 'Normal program',
      3: 'Aperture priority',
      4: 'Shutter priority',
      5: 'Creative program',
      6: 'Action program',
      7: 'Portrait mode',
      8: 'Landscape mode'
    },
    MeteringMode: {
      0: 'Unknown',
      1: 'Average',
      2: 'CenterWeightedAverage',
      3: 'Spot',
      4: 'MultiSpot',
      5: 'Pattern',
      6: 'Partial',
      255: 'Other'
    },
    LightSource: {
      0: 'Unknown',
      1: 'Daylight',
      2: 'Fluorescent',
      3: 'Tungsten (incandescent light)',
      4: 'Flash',
      9: 'Fine weather',
      10: 'Cloudy weather',
      11: 'Shade',
      12: 'Daylight fluorescent (D 5700 - 7100K)',
      13: 'Day white fluorescent (N 4600 - 5400K)',
      14: 'Cool white fluorescent (W 3900 - 4500K)',
      15: 'White fluorescent (WW 3200 - 3700K)',
      17: 'Standard light A',
      18: 'Standard light B',
      19: 'Standard light C',
      20: 'D55',
      21: 'D65',
      22: 'D75',
      23: 'D50',
      24: 'ISO studio tungsten',
      255: 'Other'
    },
    Flash: {
      0x0000: 'Flash did not fire',
      0x0001: 'Flash fired',
      0x0005: 'Strobe return light not detected',
      0x0007: 'Strobe return light detected',
      0x0009: 'Flash fired, compulsory flash mode',
      0x000d: 'Flash fired, compulsory flash mode, return light not detected',
      0x000f: 'Flash fired, compulsory flash mode, return light detected',
      0x0010: 'Flash did not fire, compulsory flash mode',
      0x0018: 'Flash did not fire, auto mode',
      0x0019: 'Flash fired, auto mode',
      0x001d: 'Flash fired, auto mode, return light not detected',
      0x001f: 'Flash fired, auto mode, return light detected',
      0x0020: 'No flash function',
      0x0041: 'Flash fired, red-eye reduction mode',
      0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
      0x0047: 'Flash fired, red-eye reduction mode, return light detected',
      0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
      0x004d: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
      0x004f: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
      0x0059: 'Flash fired, auto mode, red-eye reduction mode',
      0x005d: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
      0x005f: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    },
    SensingMethod: {
      1: 'Undefined',
      2: 'One-chip color area sensor',
      3: 'Two-chip color area sensor',
      4: 'Three-chip color area sensor',
      5: 'Color sequential area sensor',
      7: 'Trilinear sensor',
      8: 'Color sequential linear sensor'
    },
    SceneCaptureType: {
      0: 'Standard',
      1: 'Landscape',
      2: 'Portrait',
      3: 'Night scene'
    },
    SceneType: {
      1: 'Directly photographed'
    },
    CustomRendered: {
      0: 'Normal process',
      1: 'Custom process'
    },
    WhiteBalance: {
      0: 'Auto white balance',
      1: 'Manual white balance'
    },
    GainControl: {
      0: 'None',
      1: 'Low gain up',
      2: 'High gain up',
      3: 'Low gain down',
      4: 'High gain down'
    },
    Contrast: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    Saturation: {
      0: 'Normal',
      1: 'Low saturation',
      2: 'High saturation'
    },
    Sharpness: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    SubjectDistanceRange: {
      0: 'Unknown',
      1: 'Macro',
      2: 'Close view',
      3: 'Distant view'
    },
    FileSource: {
      3: 'DSC'
    },
    ComponentsConfiguration: {
      0: '',
      1: 'Y',
      2: 'Cb',
      3: 'Cr',
      4: 'R',
      5: 'G',
      6: 'B'
    },
    Orientation: {
      1: 'top-left',
      2: 'top-right',
      3: 'bottom-right',
      4: 'bottom-left',
      5: 'left-top',
      6: 'right-top',
      7: 'right-bottom',
      8: 'left-bottom'
    }
  };

  ExifMapProto.getText = function (name) {
    var value = this.get(name);

    switch (name) {
      case 'LightSource':
      case 'Flash':
      case 'MeteringMode':
      case 'ExposureProgram':
      case 'SensingMethod':
      case 'SceneCaptureType':
      case 'SceneType':
      case 'CustomRendered':
      case 'WhiteBalance':
      case 'GainControl':
      case 'Contrast':
      case 'Saturation':
      case 'Sharpness':
      case 'SubjectDistanceRange':
      case 'FileSource':
      case 'Orientation':
        return this.stringValues[name][value];

      case 'ExifVersion':
      case 'FlashpixVersion':
        if (!value) return;
        return String.fromCharCode(value[0], value[1], value[2], value[3]);

      case 'ComponentsConfiguration':
        if (!value) return;
        return this.stringValues[name][value[0]] + this.stringValues[name][value[1]] + this.stringValues[name][value[2]] + this.stringValues[name][value[3]];

      case 'GPSVersionID':
        if (!value) return;
        return value[0] + '.' + value[1] + '.' + value[2] + '.' + value[3];
    }

    return String(value);
  };

  ExifMapProto.getAll = function () {
    var map = {};
    var prop;
    var obj;
    var name;

    for (prop in this) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        obj = this[prop];

        if (obj && obj.getAll) {
          map[this.privateIFDs[prop].name] = obj.getAll();
        } else {
          name = this.tags[prop];
          if (name) map[name] = this.getText(name);
        }
      }
    }

    return map;
  };

  ExifMapProto.getName = function (tagCode) {
    var name = this.tags[tagCode];
    if (typeof name === 'object') return this.privateIFDs[tagCode].name;
    return name;
  } // Extend the map of tag names to tag codes:
  ;

  (function () {
    var tags = ExifMapProto.tags;
    var prop;
    var privateIFD;
    var subTags; // Map the tag names to tags:

    for (prop in tags) {
      if (Object.prototype.hasOwnProperty.call(tags, prop)) {
        privateIFD = ExifMapProto.privateIFDs[prop];

        if (privateIFD) {
          subTags = tags[prop];

          for (prop in subTags) {
            if (Object.prototype.hasOwnProperty.call(subTags, prop)) {
              privateIFD.map[subTags[prop]] = Number(prop);
            }
          }
        } else {
          ExifMapProto.map[tags[prop]] = Number(prop);
        }
      }
    }
  })();
});

/***/ }),

/***/ 90289:
/*!***************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-exif.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView */

/* eslint-disable no-console */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823), __webpack_require__(/*! ./load-image-meta */ 59485)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';
  /**
   * Exif tag map
   *
   * @name ExifMap
   * @class
   * @param {number} tagCode Private IFD tag code
   */

  function ExifMap(tagCode) {
    if (tagCode) {
      Object.defineProperty(this, 'map', {
        value: this.privateIFDs[tagCode].map
      });
      Object.defineProperty(this, 'tags', {
        value: this.tags && this.tags[tagCode] || {}
      });
    }
  }

  ExifMap.prototype.map = {
    Orientation: 0x0112,
    Thumbnail: 0x0201,
    Exif: 0x8769,
    GPSInfo: 0x8825,
    Interoperability: 0xa005
  };
  ExifMap.prototype.privateIFDs = {
    0x8769: {
      name: 'Exif',
      map: {}
    },
    0x8825: {
      name: 'GPSInfo',
      map: {}
    },
    0xa005: {
      name: 'Interoperability',
      map: {}
    }
  };
  /**
   * Retrieves exif tag value
   *
   * @param {number|string} id Exif tag code or name
   * @returns {object} Exif tag value
   */

  ExifMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]];
  };
  /**
   * Returns the Exif Thumbnail data as Blob.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Thumbnail data offset
   * @param {number} length Thumbnail data length
   * @returns {undefined|Blob} Returns the Thumbnail Blob or undefined
   */


  function getExifThumbnail(dataView, offset, length) {
    if (!length || offset + length > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid thumbnail data.');
      return;
    }

    return new Blob([dataView.buffer.slice(offset, offset + length)], {
      type: 'image/jpeg'
    });
  }

  var ExifTagTypes = {
    // byte, 8-bit unsigned int:
    1: {
      getValue: function (dataView, dataOffset) {
        return dataView.getUint8(dataOffset);
      },
      size: 1
    },
    // ascii, 8-bit byte:
    2: {
      getValue: function (dataView, dataOffset) {
        return String.fromCharCode(dataView.getUint8(dataOffset));
      },
      size: 1,
      ascii: true
    },
    // short, 16 bit int:
    3: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint16(dataOffset, littleEndian);
      },
      size: 2
    },
    // long, 32 bit int:
    4: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian);
      },
      size: 4
    },
    // rational = two long values, first is numerator, second is denominator:
    5: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian) / dataView.getUint32(dataOffset + 4, littleEndian);
      },
      size: 8
    },
    // slong, 32 bit signed int:
    9: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian);
      },
      size: 4
    },
    // srational, two slongs, first is numerator, second is denominator:
    10: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian) / dataView.getInt32(dataOffset + 4, littleEndian);
      },
      size: 8
    }
  }; // undefined, 8-bit byte, value depending on field:

  ExifTagTypes[7] = ExifTagTypes[1];
  /**
   * Returns Exif tag value.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {number} offset Tag offset
   * @param {number} type Tag type
   * @param {number} length Tag length
   * @param {boolean} littleEndian Little endian encoding
   * @returns {object} Tag value
   */

  function getExifValue(dataView, tiffOffset, offset, type, length, littleEndian) {
    var tagType = ExifTagTypes[type];
    var tagSize;
    var dataOffset;
    var values;
    var i;
    var str;
    var c;

    if (!tagType) {
      console.log('Invalid Exif data: Invalid tag type.');
      return;
    }

    tagSize = tagType.size * length; // Determine if the value is contained in the dataOffset bytes,
    // or if the value at the dataOffset is a pointer to the actual data:

    dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32(offset + 8, littleEndian) : offset + 8;

    if (dataOffset + tagSize > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid data offset.');
      return;
    }

    if (length === 1) {
      return tagType.getValue(dataView, dataOffset, littleEndian);
    }

    values = [];

    for (i = 0; i < length; i += 1) {
      values[i] = tagType.getValue(dataView, dataOffset + i * tagType.size, littleEndian);
    }

    if (tagType.ascii) {
      str = ''; // Concatenate the chars:

      for (i = 0; i < values.length; i += 1) {
        c = values[i]; // Ignore the terminating NULL byte(s):

        if (c === '\u0000') {
          break;
        }

        str += c;
      }

      return str;
    }

    return values;
  }
  /**
   * Parses Exif tags.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {number} dirOffset Directory offset
   * @param {boolean} littleEndian Little endian encoding
   * @param {ExifMap} tags Map to store parsed exif tags
   * @param {ExifMap} tagOffsets Map to store parsed exif tag offsets
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   * @returns {number} Next directory offset
   */


  function parseExifTags(dataView, tiffOffset, dirOffset, littleEndian, tags, tagOffsets, includeTags, excludeTags) {
    var tagsNumber, dirEndOffset, i, tagOffset, tagNumber, tagValue;

    if (dirOffset + 6 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory offset.');
      return;
    }

    tagsNumber = dataView.getUint16(dirOffset, littleEndian);
    dirEndOffset = dirOffset + 2 + 12 * tagsNumber;

    if (dirEndOffset + 4 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory size.');
      return;
    }

    for (i = 0; i < tagsNumber; i += 1) {
      tagOffset = dirOffset + 2 + 12 * i;
      tagNumber = dataView.getUint16(tagOffset, littleEndian);
      if (includeTags && !includeTags[tagNumber]) continue;
      if (excludeTags && excludeTags[tagNumber] === true) continue;
      tagValue = getExifValue(dataView, tiffOffset, tagOffset, dataView.getUint16(tagOffset + 2, littleEndian), // tag type
      dataView.getUint32(tagOffset + 4, littleEndian), // tag length
      littleEndian);
      tags[tagNumber] = tagValue;

      if (tagOffsets) {
        tagOffsets[tagNumber] = tagOffset;
      }
    } // Return the offset to the next directory:


    return dataView.getUint32(dirEndOffset, littleEndian);
  }
  /**
   * Parses Private IFD tags.
   *
   * @param {object} data Data object to store exif tags and offsets
   * @param {number} tagCode Private IFD tag code
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {boolean} littleEndian Little endian encoding
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   */


  function parseExifPrivateIFD(data, tagCode, dataView, tiffOffset, littleEndian, includeTags, excludeTags) {
    var dirOffset = data.exif[tagCode];

    if (dirOffset) {
      data.exif[tagCode] = new ExifMap(tagCode);

      if (data.exifOffsets) {
        data.exifOffsets[tagCode] = new ExifMap(tagCode);
      }

      parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data.exif[tagCode], data.exifOffsets && data.exifOffsets[tagCode], includeTags && includeTags[tagCode], excludeTags && excludeTags[tagCode]);
    }
  }

  loadImage.parseExifData = function (dataView, offset, length, data, options) {
    if (options.disableExif) {
      return;
    }

    var includeTags = options.includeExifTags;
    var excludeTags = options.excludeExifTags || {
      0x8769: {
        // ExifIFDPointer
        0x927c: true // MakerNote

      }
    };
    var tiffOffset = offset + 10;
    var littleEndian;
    var dirOffset;
    var privateIFDs; // Check for the ASCII code for "Exif" (0x45786966):

    if (dataView.getUint32(offset + 4) !== 0x45786966) {
      // No Exif data, might be XMP data instead
      return;
    }

    if (tiffOffset + 8 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid segment size.');
      return;
    } // Check for the two null bytes:


    if (dataView.getUint16(offset + 8) !== 0x0000) {
      console.log('Invalid Exif data: Missing byte alignment offset.');
      return;
    } // Check the byte alignment:


    switch (dataView.getUint16(tiffOffset)) {
      case 0x4949:
        littleEndian = true;
        break;

      case 0x4d4d:
        littleEndian = false;
        break;

      default:
        console.log('Invalid Exif data: Invalid byte alignment marker.');
        return;
    } // Check for the TIFF tag marker (0x002A):


    if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002a) {
      console.log('Invalid Exif data: Missing TIFF marker.');
      return;
    } // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:


    dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian); // Create the exif object to store the tags:

    data.exif = new ExifMap();

    if (!options.disableExifOffsets) {
      data.exifOffsets = new ExifMap();
      data.exifTiffOffset = tiffOffset;
      data.exifLittleEndian = littleEndian;
    } // Parse the tags of the main image directory and retrieve the
    // offset to the next directory, usually the thumbnail directory:


    dirOffset = parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data.exif, data.exifOffsets, includeTags, excludeTags);

    if (dirOffset && !options.disableExifThumbnail) {
      dirOffset = parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data.exif, data.exifOffsets, includeTags, excludeTags); // Check for JPEG Thumbnail offset:

      if (data.exif[0x0201] && data.exif[0x0202]) {
        data.exif[0x0201] = getExifThumbnail(dataView, tiffOffset + data.exif[0x0201], data.exif[0x0202] // Thumbnail data length
        );
      }
    }

    privateIFDs = Object.keys(data.exif.privateIFDs);
    privateIFDs.forEach(function (tagCode) {
      parseExifPrivateIFD(data, tagCode, dataView, tiffOffset, littleEndian, includeTags, excludeTags);
    });
  }; // Registers the Exif parser for the APP1 JPEG meta data segment:


  loadImage.metaDataParsers.jpeg[0xffe1].push(loadImage.parseExifData);
  loadImage.exifWriters = {
    // Orientation writer:
    0x0112: function (buffer, data, value) {
      var view = new DataView(buffer, data.exifOffsets[0x0112] + 8, 2);
      view.setUint16(0, value, data.exifLittleEndian);
      return buffer;
    }
  };

  loadImage.writeExifData = function (buffer, data, id, value) {
    loadImage.exifWriters[data.exif.map[id]](buffer, data, value);
  };

  loadImage.ExifMap = ExifMap; // Adds the following properties to the parseMetaData callback data:
  // - exif: The parsed Exif tags
  // - exifOffsets: The parsed Exif tag offsets
  // - exifTiffOffset: TIFF header offset (used for offset pointers)
  // - exifLittleEndian: little endian order if true, big endian if false
  // Adds the following options to the parseMetaData method:
  // - disableExif: Disables Exif parsing when true.
  // - disableExifThumbnail: Disables parsing of Thumbnail data when true.
  // - disableExifOffsets: Disables storing Exif tag offsets when true.
  // - includeExifTags: A map of Exif tags to include for parsing.
  // - excludeExifTags: A map of Exif tags to exclude from parsing.
});

/***/ }),

/***/ 49305:
/*!****************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-fetch.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Fetch
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2017, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  if (typeof fetch !== 'undefined' && typeof Request !== 'undefined') {
    loadImage.fetchBlob = function (url, callback, options) {
      fetch(new Request(url, options)).then(function (response) {
        return response.blob();
      }).then(callback).catch(function (err) {
        callback(null, err);
      });
    };
  } else if ( // Check for XHR2 support:
  typeof XMLHttpRequest !== 'undefined' && typeof ProgressEvent !== 'undefined') {
    loadImage.fetchBlob = function (url, callback, options) {
      // eslint-disable-next-line no-param-reassign
      options = options || {};
      var req = new XMLHttpRequest();
      req.open(options.method || 'GET', url);

      if (options.headers) {
        Object.keys(options.headers).forEach(function (key) {
          req.setRequestHeader(key, options.headers[key]);
        });
      }

      req.withCredentials = options.credentials === 'include';
      req.responseType = 'blob';

      req.onload = function () {
        callback(req.response);
      };

      req.onerror = req.onabort = req.ontimeout = function (err) {
        callback(null, err);
      };

      req.send(options.body);
    };
  }
});

/***/ }),

/***/ 20919:
/*!*******************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-iptc-map.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image IPTC Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * Copyright 2018, Dave Bevan
 *
 * IPTC tags mapping based on
 * https://iptc.org/standards/photo-metadata
 * https://exiftool.org/TagNames/IPTC.html
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823), __webpack_require__(/*! ./load-image-iptc */ 31380)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var IptcMapProto = loadImage.IptcMap.prototype;
  IptcMapProto.tags = {
    0: 'ApplicationRecordVersion',
    3: 'ObjectTypeReference',
    4: 'ObjectAttributeReference',
    5: 'ObjectName',
    7: 'EditStatus',
    8: 'EditorialUpdate',
    10: 'Urgency',
    12: 'SubjectReference',
    15: 'Category',
    20: 'SupplementalCategories',
    22: 'FixtureIdentifier',
    25: 'Keywords',
    26: 'ContentLocationCode',
    27: 'ContentLocationName',
    30: 'ReleaseDate',
    35: 'ReleaseTime',
    37: 'ExpirationDate',
    38: 'ExpirationTime',
    40: 'SpecialInstructions',
    42: 'ActionAdvised',
    45: 'ReferenceService',
    47: 'ReferenceDate',
    50: 'ReferenceNumber',
    55: 'DateCreated',
    60: 'TimeCreated',
    62: 'DigitalCreationDate',
    63: 'DigitalCreationTime',
    65: 'OriginatingProgram',
    70: 'ProgramVersion',
    75: 'ObjectCycle',
    80: 'Byline',
    85: 'BylineTitle',
    90: 'City',
    92: 'Sublocation',
    95: 'State',
    100: 'CountryCode',
    101: 'Country',
    103: 'OriginalTransmissionReference',
    105: 'Headline',
    110: 'Credit',
    115: 'Source',
    116: 'CopyrightNotice',
    118: 'Contact',
    120: 'Caption',
    121: 'LocalCaption',
    122: 'Writer',
    125: 'RasterizedCaption',
    130: 'ImageType',
    131: 'ImageOrientation',
    135: 'LanguageIdentifier',
    150: 'AudioType',
    151: 'AudioSamplingRate',
    152: 'AudioSamplingResolution',
    153: 'AudioDuration',
    154: 'AudioOutcue',
    184: 'JobID',
    185: 'MasterDocumentID',
    186: 'ShortDocumentID',
    187: 'UniqueDocumentID',
    188: 'OwnerID',
    200: 'ObjectPreviewFileFormat',
    201: 'ObjectPreviewFileVersion',
    202: 'ObjectPreviewData',
    221: 'Prefs',
    225: 'ClassifyState',
    228: 'SimilarityIndex',
    230: 'DocumentNotes',
    231: 'DocumentHistory',
    232: 'ExifCameraInfo',
    255: 'CatalogSets'
  };
  IptcMapProto.stringValues = {
    10: {
      0: '0 (reserved)',
      1: '1 (most urgent)',
      2: '2',
      3: '3',
      4: '4',
      5: '5 (normal urgency)',
      6: '6',
      7: '7',
      8: '8 (least urgent)',
      9: '9 (user-defined priority)'
    },
    75: {
      a: 'Morning',
      b: 'Both Morning and Evening',
      p: 'Evening'
    },
    131: {
      L: 'Landscape',
      P: 'Portrait',
      S: 'Square'
    }
  };

  IptcMapProto.getText = function (id) {
    var value = this.get(id);
    var tagCode = this.map[id];
    var stringValue = this.stringValues[tagCode];
    if (stringValue) return stringValue[value];
    return String(value);
  };

  IptcMapProto.getAll = function () {
    var map = {};
    var prop;
    var name;

    for (prop in this) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        name = this.tags[prop];
        if (name) map[name] = this.getText(name);
      }
    }

    return map;
  };

  IptcMapProto.getName = function (tagCode) {
    return this.tags[tagCode];
  } // Extend the map of tag names to tag codes:
  ;

  (function () {
    var tags = IptcMapProto.tags;
    var map = IptcMapProto.map || {};
    var prop; // Map the tag names to tags:

    for (prop in tags) {
      if (Object.prototype.hasOwnProperty.call(tags, prop)) {
        map[tags[prop]] = Number(prop);
      }
    }
  })();
});

/***/ }),

/***/ 31380:
/*!***************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-iptc.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image IPTC Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * Copyright 2018, Dave Bevan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823), __webpack_require__(/*! ./load-image-meta */ 59485)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';
  /**
   * IPTC tag map
   *
   * @name IptcMap
   * @class
   */

  function IptcMap() {}

  IptcMap.prototype.map = {
    ObjectName: 5
  };
  IptcMap.prototype.types = {
    0: 'Uint16',
    // ApplicationRecordVersion
    200: 'Uint16',
    // ObjectPreviewFileFormat
    201: 'Uint16',
    // ObjectPreviewFileVersion
    202: 'binary' // ObjectPreviewData

  };
  /**
   * Retrieves IPTC tag value
   *
   * @param {number|string} id IPTC tag code or name
   * @returns {object} IPTC tag value
   */

  IptcMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]];
  };
  /**
   * Retrieves string for the given DataView and range
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Offset start
   * @param {number} length Offset length
   * @returns {string} String value
   */


  function getStringValue(dataView, offset, length) {
    var outstr = '';
    var end = offset + length;

    for (var n = offset; n < end; n += 1) {
      outstr += String.fromCharCode(dataView.getUint8(n));
    }

    return outstr;
  }
  /**
   * Retrieves tag value for the given DataView and range
   *
   * @param {number} tagCode Private IFD tag code
   * @param {IptcMap} map IPTC tag map
   * @param {DataView} dataView Data view interface
   * @param {number} offset Range start
   * @param {number} length Range length
   * @returns {object} Tag value
   */


  function getTagValue(tagCode, map, dataView, offset, length) {
    if (map.types[tagCode] === 'binary') {
      return new Blob([dataView.buffer.slice(offset, offset + length)]);
    }

    if (map.types[tagCode] === 'Uint16') {
      return dataView.getUint16(offset);
    }

    return getStringValue(dataView, offset, length);
  }
  /**
   * Combines IPTC value with existing ones.
   *
   * @param {object} value Existing IPTC field value
   * @param {object} newValue New IPTC field value
   * @returns {object} Resulting IPTC field value
   */


  function combineTagValues(value, newValue) {
    if (value === undefined) return newValue;

    if (value instanceof Array) {
      value.push(newValue);
      return value;
    }

    return [value, newValue];
  }
  /**
   * Parses IPTC tags.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} segmentOffset Segment offset
   * @param {number} segmentLength Segment length
   * @param {object} data Data export object
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   */


  function parseIptcTags(dataView, segmentOffset, segmentLength, data, includeTags, excludeTags) {
    var value, tagSize, tagCode;
    var segmentEnd = segmentOffset + segmentLength;
    var offset = segmentOffset;

    while (offset < segmentEnd) {
      if (dataView.getUint8(offset) === 0x1c && // tag marker
      dataView.getUint8(offset + 1) === 0x02 // record number, only handles v2
      ) {
        tagCode = dataView.getUint8(offset + 2);

        if ((!includeTags || includeTags[tagCode]) && (!excludeTags || !excludeTags[tagCode])) {
          tagSize = dataView.getInt16(offset + 3);
          value = getTagValue(tagCode, data.iptc, dataView, offset + 5, tagSize);
          data.iptc[tagCode] = combineTagValues(data.iptc[tagCode], value);

          if (data.iptcOffsets) {
            data.iptcOffsets[tagCode] = offset;
          }
        }
      }

      offset += 1;
    }
  }
  /**
   * Tests if field segment starts at offset.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Segment offset
   * @returns {boolean} True if '8BIM<EOT><EOT>' exists at offset
   */


  function isSegmentStart(dataView, offset) {
    return dataView.getUint32(offset) === 0x3842494d && // Photoshop segment start
    dataView.getUint16(offset + 4) === 0x0404 // IPTC segment start
    ;
  }
  /**
   * Returns header length.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Segment offset
   * @returns {number} Header length
   */


  function getHeaderLength(dataView, offset) {
    var length = dataView.getUint8(offset + 7);
    if (length % 2 !== 0) length += 1; // Check for pre photoshop 6 format

    if (length === 0) {
      // Always 4
      length = 4;
    }

    return length;
  }

  loadImage.parseIptcData = function (dataView, offset, length, data, options) {
    if (options.disableIptc) {
      return;
    }

    var markerLength = offset + length;

    while (offset + 8 < markerLength) {
      if (isSegmentStart(dataView, offset)) {
        var headerLength = getHeaderLength(dataView, offset);
        var segmentOffset = offset + 8 + headerLength;

        if (segmentOffset > markerLength) {
          // eslint-disable-next-line no-console
          console.log('Invalid IPTC data: Invalid segment offset.');
          break;
        }

        var segmentLength = dataView.getUint16(offset + 6 + headerLength);

        if (offset + segmentLength > markerLength) {
          // eslint-disable-next-line no-console
          console.log('Invalid IPTC data: Invalid segment size.');
          break;
        } // Create the iptc object to store the tags:


        data.iptc = new IptcMap();

        if (!options.disableIptcOffsets) {
          data.iptcOffsets = new IptcMap();
        }

        parseIptcTags(dataView, segmentOffset, segmentLength, data, options.includeIptcTags, options.excludeIptcTags || {
          202: true
        } // ObjectPreviewData
        );
        return;
      } // eslint-disable-next-line no-param-reassign


      offset += 1;
    }
  }; // Registers this IPTC parser for the APP13 JPEG meta data segment:


  loadImage.metaDataParsers.jpeg[0xffed].push(loadImage.parseIptcData);
  loadImage.IptcMap = IptcMap; // Adds the following properties to the parseMetaData callback data:
  // - iptc: The iptc tags, parsed by the parseIptcData method
  // Adds the following options to the parseMetaData method:
  // - disableIptc: Disables IPTC parsing when true.
  // - disableIptcOffsets: Disables storing IPTC tag offsets when true.
  // - includeIptcTags: A map of IPTC tags to include for parsing.
  // - excludeIptcTags: A map of IPTC tags to exclude from parsing.
});

/***/ }),

/***/ 59485:
/*!***************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-meta.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Meta
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Image meta data handling implementation
 * based on the help and contribution of
 * Achim Stöhr.
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView, Uint8Array */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var hasblobSlice = typeof Blob !== 'undefined' && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

  loadImage.blobSlice = hasblobSlice && function () {
    var slice = this.slice || this.webkitSlice || this.mozSlice;
    return slice.apply(this, arguments);
  };

  loadImage.metaDataParsers = {
    jpeg: {
      0xffe1: [],
      // APP1 marker
      0xffed: [] // APP13 marker

    }
  }; // Parses image meta data and calls the callback with an object argument
  // with the following properties:
  // * imageHead: The complete image head as ArrayBuffer (Uint8Array for IE10)
  // The options argument accepts an object and supports the following
  // properties:
  // * maxMetaDataSize: Defines the maximum number of bytes to parse.
  // * disableImageHead: Disables creating the imageHead property.

  loadImage.parseMetaData = function (file, callback, options, data) {
    // eslint-disable-next-line no-param-reassign
    options = options || {}; // eslint-disable-next-line no-param-reassign

    data = data || {};
    var that = this; // 256 KiB should contain all EXIF/ICC/IPTC segments:

    var maxMetaDataSize = options.maxMetaDataSize || 262144;
    var noMetaData = !(typeof DataView !== 'undefined' && file && file.size >= 12 && file.type === 'image/jpeg' && loadImage.blobSlice);

    if (noMetaData || !loadImage.readFile(loadImage.blobSlice.call(file, 0, maxMetaDataSize), function (e) {
      if (e.target.error) {
        // FileReader error
        // eslint-disable-next-line no-console
        console.log(e.target.error);
        callback(data);
        return;
      } // Note on endianness:
      // Since the marker and length bytes in JPEG files are always
      // stored in big endian order, we can leave the endian parameter
      // of the DataView methods undefined, defaulting to big endian.


      var buffer = e.target.result;
      var dataView = new DataView(buffer);
      var offset = 2;
      var maxOffset = dataView.byteLength - 4;
      var headLength = offset;
      var markerBytes;
      var markerLength;
      var parsers;
      var i; // Check for the JPEG marker (0xffd8):

      if (dataView.getUint16(0) === 0xffd8) {
        while (offset < maxOffset) {
          markerBytes = dataView.getUint16(offset); // Search for APPn (0xffeN) and COM (0xfffe) markers,
          // which contain application-specific meta-data like
          // Exif, ICC and IPTC data and text comments:

          if (markerBytes >= 0xffe0 && markerBytes <= 0xffef || markerBytes === 0xfffe) {
            // The marker bytes (2) are always followed by
            // the length bytes (2), indicating the length of the
            // marker segment, which includes the length bytes,
            // but not the marker bytes, so we add 2:
            markerLength = dataView.getUint16(offset + 2) + 2;

            if (offset + markerLength > dataView.byteLength) {
              // eslint-disable-next-line no-console
              console.log('Invalid meta data: Invalid segment size.');
              break;
            }

            parsers = loadImage.metaDataParsers.jpeg[markerBytes];

            if (parsers && !options.disableMetaDataParsers) {
              for (i = 0; i < parsers.length; i += 1) {
                parsers[i].call(that, dataView, offset, markerLength, data, options);
              }
            }

            offset += markerLength;
            headLength = offset;
          } else {
            // Not an APPn or COM marker, probably safe to
            // assume that this is the end of the meta data
            break;
          }
        } // Meta length must be longer than JPEG marker (2)
        // plus APPn marker (2), followed by length bytes (2):


        if (!options.disableImageHead && headLength > 6) {
          if (buffer.slice) {
            data.imageHead = buffer.slice(0, headLength);
          } else {
            // Workaround for IE10, which does not yet
            // support ArrayBuffer.slice:
            data.imageHead = new Uint8Array(buffer).subarray(0, headLength);
          }
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Invalid JPEG file: Missing JPEG marker.');
      }

      callback(data);
    }, 'readAsArrayBuffer')) {
      callback(data);
    }
  }; // Replaces the image head of a JPEG blob with the given one.
  // Calls the callback with the new Blob:


  loadImage.replaceHead = function (blob, head, callback) {
    loadImage.parseMetaData(blob, function (data) {
      callback(new Blob([head, loadImage.blobSlice.call(blob, data.imageHead.byteLength)], {
        type: 'image/jpeg'
      }));
    }, {
      maxMetaDataSize: 256,
      disableMetaDataParsers: true
    });
  };

  var originalTransform = loadImage.transform;

  loadImage.transform = function (img, options, callback, file, data) {
    if (loadImage.hasMetaOption(options)) {
      loadImage.parseMetaData(file, function (data) {
        originalTransform.call(loadImage, img, options, callback, file, data);
      }, options, data);
    } else {
      originalTransform.apply(loadImage, arguments);
    }
  };
});

/***/ }),

/***/ 11767:
/*!**********************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-orientation.js ***!
  \**********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Orientation
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823), __webpack_require__(/*! ./load-image-scale */ 22358), __webpack_require__(/*! ./load-image-meta */ 59485)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var originalHasCanvasOption = loadImage.hasCanvasOption;
  var originalHasMetaOption = loadImage.hasMetaOption;
  var originalTransformCoordinates = loadImage.transformCoordinates;
  var originalGetTransformedOptions = loadImage.getTransformedOptions;

  (function () {
    // black 2x1 JPEG, with the following meta information set:
    // - EXIF Orientation: 6 (Rotated 90° CCW)
    var testImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
    var img = document.createElement('img');

    img.onload = function () {
      // Check if browser supports automatic image orientation:
      loadImage.orientation = img.width === 1 && img.height === 2;
    };

    img.src = testImageURL;
  })(); // Determines if the target image should be a canvas element:


  loadImage.hasCanvasOption = function (options) {
    return !!options.orientation === true && !loadImage.orientation || options.orientation > 1 && options.orientation < 9 || originalHasCanvasOption.call(loadImage, options);
  }; // Determines if meta data should be loaded automatically:


  loadImage.hasMetaOption = function (options) {
    return options && options.orientation === true && !loadImage.orientation || originalHasMetaOption.call(loadImage, options);
  }; // Transform image orientation based on
  // the given EXIF orientation option:


  loadImage.transformCoordinates = function (canvas, options) {
    originalTransformCoordinates.call(loadImage, canvas, options);
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var styleWidth = canvas.style.width;
    var styleHeight = canvas.style.height;
    var orientation = options.orientation;

    if (!(orientation > 1 && orientation < 9)) {
      return;
    }

    if (orientation > 4) {
      canvas.width = height;
      canvas.height = width;
      canvas.style.width = styleHeight;
      canvas.style.height = styleWidth;
    }

    switch (orientation) {
      case 2:
        // horizontal flip
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        break;

      case 3:
        // 180° rotate left
        ctx.translate(width, height);
        ctx.rotate(Math.PI);
        break;

      case 4:
        // vertical flip
        ctx.translate(0, height);
        ctx.scale(1, -1);
        break;

      case 5:
        // vertical flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.scale(1, -1);
        break;

      case 6:
        // 90° rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(0, -height);
        break;

      case 7:
        // horizontal flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(width, -height);
        ctx.scale(-1, 1);
        break;

      case 8:
        // 90° rotate left
        ctx.rotate(-0.5 * Math.PI);
        ctx.translate(-width, 0);
        break;
    }
  }; // Transforms coordinate and dimension options
  // based on the given orientation option:


  loadImage.getTransformedOptions = function (img, opts, data) {
    var options = originalGetTransformedOptions.call(loadImage, img, opts);
    var orientation = options.orientation;
    var newOptions;
    var i;

    if (orientation === true) {
      if (loadImage.orientation) {
        // Browser supports automatic image orientation
        return options;
      }

      orientation = data && data.exif && data.exif.get('Orientation');
    }

    if (!(orientation > 1 && orientation < 9)) {
      return options;
    }

    newOptions = {};

    for (i in options) {
      if (Object.prototype.hasOwnProperty.call(options, i)) {
        newOptions[i] = options[i];
      }
    }

    newOptions.orientation = orientation;

    switch (orientation) {
      case 2:
        // horizontal flip
        newOptions.left = options.right;
        newOptions.right = options.left;
        break;

      case 3:
        // 180° rotate left
        newOptions.left = options.right;
        newOptions.top = options.bottom;
        newOptions.right = options.left;
        newOptions.bottom = options.top;
        break;

      case 4:
        // vertical flip
        newOptions.top = options.bottom;
        newOptions.bottom = options.top;
        break;

      case 5:
        // vertical flip + 90 rotate right
        newOptions.left = options.top;
        newOptions.top = options.left;
        newOptions.right = options.bottom;
        newOptions.bottom = options.right;
        break;

      case 6:
        // 90° rotate right
        newOptions.left = options.top;
        newOptions.top = options.right;
        newOptions.right = options.bottom;
        newOptions.bottom = options.left;
        break;

      case 7:
        // horizontal flip + 90 rotate right
        newOptions.left = options.bottom;
        newOptions.top = options.right;
        newOptions.right = options.top;
        newOptions.bottom = options.left;
        break;

      case 8:
        // 90° rotate left
        newOptions.left = options.bottom;
        newOptions.top = options.left;
        newOptions.right = options.top;
        newOptions.bottom = options.right;
        break;
    }

    if (newOptions.orientation > 4) {
      newOptions.maxWidth = options.maxHeight;
      newOptions.maxHeight = options.maxWidth;
      newOptions.minWidth = options.minHeight;
      newOptions.minHeight = options.minWidth;
      newOptions.sourceWidth = options.sourceHeight;
      newOptions.sourceHeight = options.sourceWidth;
    }

    return newOptions;
  };
});

/***/ }),

/***/ 22358:
/*!****************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-scale.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Scaling
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ 81823)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var originalTransform = loadImage.transform;

  loadImage.transform = function (img, options, callback, file, data) {
    originalTransform.call(loadImage, loadImage.scale(img, options, data), options, callback, file, data);
  }; // Transform image coordinates, allows to override e.g.
  // the canvas orientation based on the orientation option,
  // gets canvas, options passed as arguments:


  loadImage.transformCoordinates = function () {}; // Returns transformed options, allows to override e.g.
  // maxWidth, maxHeight and crop options based on the aspectRatio.
  // gets img, options passed as arguments:


  loadImage.getTransformedOptions = function (img, options) {
    var aspectRatio = options.aspectRatio;
    var newOptions;
    var i;
    var width;
    var height;

    if (!aspectRatio) {
      return options;
    }

    newOptions = {};

    for (i in options) {
      if (Object.prototype.hasOwnProperty.call(options, i)) {
        newOptions[i] = options[i];
      }
    }

    newOptions.crop = true;
    width = img.naturalWidth || img.width;
    height = img.naturalHeight || img.height;

    if (width / height > aspectRatio) {
      newOptions.maxWidth = height * aspectRatio;
      newOptions.maxHeight = height;
    } else {
      newOptions.maxWidth = width;
      newOptions.maxHeight = width / aspectRatio;
    }

    return newOptions;
  }; // Canvas render method, allows to implement a different rendering algorithm:


  loadImage.renderImageToCanvas = function (canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, options) {
    var ctx = canvas.getContext('2d');

    if (options.imageSmoothingEnabled === false) {
      ctx.imageSmoothingEnabled = false;
    } else if (options.imageSmoothingQuality) {
      ctx.imageSmoothingQuality = options.imageSmoothingQuality;
    }

    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    return canvas;
  }; // Determines if the target image should be a canvas element:


  loadImage.hasCanvasOption = function (options) {
    return options.canvas || options.crop || !!options.aspectRatio;
  }; // Scales and/or crops the given image (img or canvas HTML element)
  // using the given options.
  // Returns a canvas object if the browser supports canvas
  // and the hasCanvasOption method returns true or a canvas
  // object is passed as image, else the scaled image:


  loadImage.scale = function (img, options, data) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    var canvas = document.createElement('canvas');
    var useCanvas = img.getContext || loadImage.hasCanvasOption(options) && canvas.getContext;
    var width = img.naturalWidth || img.width;
    var height = img.naturalHeight || img.height;
    var destWidth = width;
    var destHeight = height;
    var maxWidth;
    var maxHeight;
    var minWidth;
    var minHeight;
    var sourceWidth;
    var sourceHeight;
    var sourceX;
    var sourceY;
    var pixelRatio;
    var downsamplingRatio;
    var tmp;
    /**
     * Scales up image dimensions
     */

    function scaleUp() {
      var scale = Math.max((minWidth || destWidth) / destWidth, (minHeight || destHeight) / destHeight);

      if (scale > 1) {
        destWidth *= scale;
        destHeight *= scale;
      }
    }
    /**
     * Scales down image dimensions
     */


    function scaleDown() {
      var scale = Math.min((maxWidth || destWidth) / destWidth, (maxHeight || destHeight) / destHeight);

      if (scale < 1) {
        destWidth *= scale;
        destHeight *= scale;
      }
    }

    if (useCanvas) {
      // eslint-disable-next-line no-param-reassign
      options = loadImage.getTransformedOptions(img, options, data);
      sourceX = options.left || 0;
      sourceY = options.top || 0;

      if (options.sourceWidth) {
        sourceWidth = options.sourceWidth;

        if (options.right !== undefined && options.left === undefined) {
          sourceX = width - sourceWidth - options.right;
        }
      } else {
        sourceWidth = width - sourceX - (options.right || 0);
      }

      if (options.sourceHeight) {
        sourceHeight = options.sourceHeight;

        if (options.bottom !== undefined && options.top === undefined) {
          sourceY = height - sourceHeight - options.bottom;
        }
      } else {
        sourceHeight = height - sourceY - (options.bottom || 0);
      }

      destWidth = sourceWidth;
      destHeight = sourceHeight;
    }

    maxWidth = options.maxWidth;
    maxHeight = options.maxHeight;
    minWidth = options.minWidth;
    minHeight = options.minHeight;

    if (useCanvas && maxWidth && maxHeight && options.crop) {
      destWidth = maxWidth;
      destHeight = maxHeight;
      tmp = sourceWidth / sourceHeight - maxWidth / maxHeight;

      if (tmp < 0) {
        sourceHeight = maxHeight * sourceWidth / maxWidth;

        if (options.top === undefined && options.bottom === undefined) {
          sourceY = (height - sourceHeight) / 2;
        }
      } else if (tmp > 0) {
        sourceWidth = maxWidth * sourceHeight / maxHeight;

        if (options.left === undefined && options.right === undefined) {
          sourceX = (width - sourceWidth) / 2;
        }
      }
    } else {
      if (options.contain || options.cover) {
        minWidth = maxWidth = maxWidth || minWidth;
        minHeight = maxHeight = maxHeight || minHeight;
      }

      if (options.cover) {
        scaleDown();
        scaleUp();
      } else {
        scaleUp();
        scaleDown();
      }
    }

    if (useCanvas) {
      pixelRatio = options.pixelRatio;

      if (pixelRatio > 1) {
        canvas.style.width = destWidth + 'px';
        canvas.style.height = destHeight + 'px';
        destWidth *= pixelRatio;
        destHeight *= pixelRatio;
        canvas.getContext('2d').scale(pixelRatio, pixelRatio);
      }

      downsamplingRatio = options.downsamplingRatio;

      if (downsamplingRatio > 0 && downsamplingRatio < 1 && destWidth < sourceWidth && destHeight < sourceHeight) {
        while (sourceWidth * downsamplingRatio > destWidth) {
          canvas.width = sourceWidth * downsamplingRatio;
          canvas.height = sourceHeight * downsamplingRatio;
          loadImage.renderImageToCanvas(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height, options);
          sourceX = 0;
          sourceY = 0;
          sourceWidth = canvas.width;
          sourceHeight = canvas.height; // eslint-disable-next-line no-param-reassign

          img = document.createElement('canvas');
          img.width = sourceWidth;
          img.height = sourceHeight;
          loadImage.renderImageToCanvas(img, canvas, 0, 0, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight, options);
        }
      }

      canvas.width = destWidth;
      canvas.height = destHeight;
      loadImage.transformCoordinates(canvas, options);
      return loadImage.renderImageToCanvas(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight, options);
    }

    img.width = destWidth;
    img.height = destHeight;
    return img;
  };
});

/***/ }),

/***/ 81823:
/*!**********************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, webkitURL, module */
;

(function ($) {
  'use strict';
  /**
   * Loads an image for a given File object.
   * Invokes the callback with an img or optional canvas element
   * (if supported by the browser) as parameter:.
   *
   * @param {File|Blob|string} file File or Blob object or image URL
   * @param {Function} [callback] Image load event callback
   * @param {object} [options] Options object
   * @returns {HTMLImageElement|HTMLCanvasElement|FileReader} image object
   */

  function loadImage(file, callback, options) {
    var img = document.createElement('img');
    var url;
    /**
     * Callback for the fetchBlob call.
     *
     * @param {Blob} blob Blob object
     * @param {Error} err Error object
     */

    function fetchBlobCallback(blob, err) {
      if (err) console.log(err); // eslint-disable-line no-console

      if (blob && loadImage.isInstanceOf('Blob', blob)) {
        // eslint-disable-next-line no-param-reassign
        file = blob;
        url = loadImage.createObjectURL(file);
      } else {
        url = file;

        if (options && options.crossOrigin) {
          img.crossOrigin = options.crossOrigin;
        }
      }

      img.src = url;
    }

    img.onerror = function (event) {
      return loadImage.onerror(img, event, file, url, callback, options);
    };

    img.onload = function (event) {
      return loadImage.onload(img, event, file, url, callback, options);
    };

    if (typeof file === 'string') {
      if (loadImage.hasMetaOption(options)) {
        loadImage.fetchBlob(file, fetchBlobCallback, options);
      } else {
        fetchBlobCallback();
      }

      return img;
    } else if (loadImage.isInstanceOf('Blob', file) || // Files are also Blob instances, but some browsers
    // (Firefox 3.6) support the File API but not Blobs:
    loadImage.isInstanceOf('File', file)) {
      url = loadImage.createObjectURL(file);

      if (url) {
        img.src = url;
        return img;
      }

      return loadImage.readFile(file, function (e) {
        var target = e.target;

        if (target && target.result) {
          img.src = target.result;
        } else if (callback) {
          callback(e);
        }
      });
    }
  } // The check for URL.revokeObjectURL fixes an issue with Opera 12,
  // which provides URL.createObjectURL but doesn't properly implement it:


  var urlAPI = $.createObjectURL && $ || $.URL && URL.revokeObjectURL && URL || $.webkitURL && webkitURL;
  /**
   * Helper function to revoke an object URL
   *
   * @param {string} url Blob Object URL
   * @param {object} [options] Options object
   */

  function revokeHelper(url, options) {
    if (url && url.slice(0, 5) === 'blob:' && !(options && options.noRevoke)) {
      loadImage.revokeObjectURL(url);
    }
  } // Determines if meta data should be loaded automatically.
  // Requires the load image meta extension to load meta data.


  loadImage.hasMetaOption = function (options) {
    return options && options.meta;
  }; // If the callback given to this function returns a blob, it is used as image
  // source instead of the original url and overrides the file argument used in
  // the onload and onerror event callbacks:


  loadImage.fetchBlob = function (url, callback) {
    callback();
  };

  loadImage.isInstanceOf = function (type, obj) {
    // Cross-frame instanceof check
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  };

  loadImage.transform = function (img, options, callback, file, data) {
    callback(img, data);
  };

  loadImage.onerror = function (img, event, file, url, callback, options) {
    revokeHelper(url, options);

    if (callback) {
      callback.call(img, event);
    }
  };

  loadImage.onload = function (img, event, file, url, callback, options) {
    revokeHelper(url, options);

    if (callback) {
      loadImage.transform(img, options, callback, file, {
        originalWidth: img.naturalWidth || img.width,
        originalHeight: img.naturalHeight || img.height
      });
    }
  };

  loadImage.createObjectURL = function (file) {
    return urlAPI ? urlAPI.createObjectURL(file) : false;
  };

  loadImage.revokeObjectURL = function (url) {
    return urlAPI ? urlAPI.revokeObjectURL(url) : false;
  }; // Loads a given File object via FileReader interface,
  // invokes the callback with the event object (load or error).
  // The result can be read via event.target.result:


  loadImage.readFile = function (file, callback, method) {
    if ($.FileReader) {
      var fileReader = new FileReader();
      fileReader.onload = fileReader.onerror = callback; // eslint-disable-next-line no-param-reassign

      method = method || 'readAsDataURL';

      if (fileReader[method]) {
        fileReader[method](file);
        return fileReader;
      }
    }

    return false;
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return loadImage;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' && window || this);

/***/ }),

/***/ 96480:
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/***/ ((module) => {

// https://github.com/electron/electron/issues/2288
function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  } // Main process


  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true;
  } // Detect the user agent when the `nodeIntegration` option is set to false


  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}

module.exports = isElectron;

/***/ }),

/***/ 54346:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 58478:
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)
void function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  function
    /* ...urls */
  resolveUrl() {
    var numUrls = arguments.length;

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.");
    }

    var base = document.createElement("base");
    base.href = arguments[0];

    if (numUrls === 1) {
      return base.href;
    }

    var head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    var a = document.createElement("a");
    var resolved;

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index];
      resolved = a.href;
      base.href = resolved;
    }

    head.removeChild(base);
    return resolved;
  }

  return resolveUrl;
});

/***/ }),

/***/ 92658:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const createWorker = __webpack_require__(/*! ./createWorker */ 45625);

const recognize = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (image, langs, options) {
    const worker = createWorker(options);
    yield worker.load();
    yield worker.loadLanguage(langs);
    yield worker.initialize(langs);
    return worker.recognize(image).finally( /*#__PURE__*/_asyncToGenerator(function* () {
      yield worker.terminate();
    }));
  });

  return function recognize(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

const detect = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (image, options) {
    const worker = createWorker(options);
    yield worker.load();
    yield worker.loadLanguage('osd');
    yield worker.initialize('osd');
    return worker.detect(image).finally( /*#__PURE__*/_asyncToGenerator(function* () {
      yield worker.terminate();
    }));
  });

  return function detect(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  recognize,
  detect
};

/***/ }),

/***/ 93488:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/***/ ((module) => {

/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 */
module.exports = {
  TESSERACT_ONLY: 0,
  LSTM_ONLY: 1,
  TESSERACT_LSTM_COMBINED: 2,
  DEFAULT: 3
};

/***/ }),

/***/ 10861:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/***/ ((module) => {

/*
 * PSM = Page Segmentation Mode
 */
module.exports = {
  OSD_ONLY: '0',
  AUTO_OSD: '1',
  AUTO_ONLY: '2',
  AUTO: '3',
  SINGLE_COLUMN: '4',
  SINGLE_BLOCK_VERT_TEXT: '5',
  SINGLE_BLOCK: '6',
  SINGLE_LINE: '7',
  SINGLE_WORD: '8',
  CIRCLE_WORD: '9',
  SINGLE_CHAR: '10',
  SPARSE_TEXT: '11',
  SPARSE_TEXT_OSD: '12'
};

/***/ }),

/***/ 71871:
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const OEM = __webpack_require__(/*! ./OEM */ 93488);

module.exports = {
  defaultOEM: OEM.DEFAULT
};

/***/ }),

/***/ 90715:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {
  /*
   * default path for downloading *.traineddata
   */
  langPath: 'https://tessdata.projectnaptha.com/4.0.0',

  /*
   * Use BlobURL for worker script by default
   * TODO: remove this option
   *
   */
  workerBlobURL: true,
  logger: () => {}
};

/***/ }),

/***/ 20230:
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/languages.js ***!
  \**************************************************************/
/***/ ((module) => {

/*
 * languages with existing tesseract traineddata
 * https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
 */

/**
 * @typedef {object} Languages
 * @property {string} AFR Afrikaans
 * @property {string} AMH Amharic
 * @property {string} ARA Arabic
 * @property {string} ASM Assamese
 * @property {string} AZE Azerbaijani
 * @property {string} AZE_CYRL Azerbaijani - Cyrillic
 * @property {string} BEL Belarusian
 * @property {string} BEN Bengali
 * @property {string} BOD Tibetan
 * @property {string} BOS Bosnian
 * @property {string} BUL Bulgarian
 * @property {string} CAT Catalan; Valencian
 * @property {string} CEB Cebuano
 * @property {string} CES Czech
 * @property {string} CHI_SIM Chinese - Simplified
 * @property {string} CHI_TRA Chinese - Traditional
 * @property {string} CHR Cherokee
 * @property {string} CYM Welsh
 * @property {string} DAN Danish
 * @property {string} DEU German
 * @property {string} DZO Dzongkha
 * @property {string} ELL Greek, Modern (1453-)
 * @property {string} ENG English
 * @property {string} ENM English, Middle (1100-1500)
 * @property {string} EPO Esperanto
 * @property {string} EST Estonian
 * @property {string} EUS Basque
 * @property {string} FAS Persian
 * @property {string} FIN Finnish
 * @property {string} FRA French
 * @property {string} FRK German Fraktur
 * @property {string} FRM French, Middle (ca. 1400-1600)
 * @property {string} GLE Irish
 * @property {string} GLG Galician
 * @property {string} GRC Greek, Ancient (-1453)
 * @property {string} GUJ Gujarati
 * @property {string} HAT Haitian; Haitian Creole
 * @property {string} HEB Hebrew
 * @property {string} HIN Hindi
 * @property {string} HRV Croatian
 * @property {string} HUN Hungarian
 * @property {string} IKU Inuktitut
 * @property {string} IND Indonesian
 * @property {string} ISL Icelandic
 * @property {string} ITA Italian
 * @property {string} ITA_OLD Italian - Old
 * @property {string} JAV Javanese
 * @property {string} JPN Japanese
 * @property {string} KAN Kannada
 * @property {string} KAT Georgian
 * @property {string} KAT_OLD Georgian - Old
 * @property {string} KAZ Kazakh
 * @property {string} KHM Central Khmer
 * @property {string} KIR Kirghiz; Kyrgyz
 * @property {string} KOR Korean
 * @property {string} KUR Kurdish
 * @property {string} LAO Lao
 * @property {string} LAT Latin
 * @property {string} LAV Latvian
 * @property {string} LIT Lithuanian
 * @property {string} MAL Malayalam
 * @property {string} MAR Marathi
 * @property {string} MKD Macedonian
 * @property {string} MLT Maltese
 * @property {string} MSA Malay
 * @property {string} MYA Burmese
 * @property {string} NEP Nepali
 * @property {string} NLD Dutch; Flemish
 * @property {string} NOR Norwegian
 * @property {string} ORI Oriya
 * @property {string} PAN Panjabi; Punjabi
 * @property {string} POL Polish
 * @property {string} POR Portuguese
 * @property {string} PUS Pushto; Pashto
 * @property {string} RON Romanian; Moldavian; Moldovan
 * @property {string} RUS Russian
 * @property {string} SAN Sanskrit
 * @property {string} SIN Sinhala; Sinhalese
 * @property {string} SLK Slovak
 * @property {string} SLV Slovenian
 * @property {string} SPA Spanish; Castilian
 * @property {string} SPA_OLD Spanish; Castilian - Old
 * @property {string} SQI Albanian
 * @property {string} SRP Serbian
 * @property {string} SRP_LATN Serbian - Latin
 * @property {string} SWA Swahili
 * @property {string} SWE Swedish
 * @property {string} SYR Syriac
 * @property {string} TAM Tamil
 * @property {string} TEL Telugu
 * @property {string} TGK Tajik
 * @property {string} TGL Tagalog
 * @property {string} THA Thai
 * @property {string} TIR Tigrinya
 * @property {string} TUR Turkish
 * @property {string} UIG Uighur; Uyghur
 * @property {string} UKR Ukrainian
 * @property {string} URD Urdu
 * @property {string} UZB Uzbek
 * @property {string} UZB_CYRL Uzbek - Cyrillic
 * @property {string} VIE Vietnamese
 * @property {string} YID Yiddish
 */

/**
  * @type {Languages}
  */
module.exports = {
  AFR: 'afr',
  AMH: 'amh',
  ARA: 'ara',
  ASM: 'asm',
  AZE: 'aze',
  AZE_CYRL: 'aze_cyrl',
  BEL: 'bel',
  BEN: 'ben',
  BOD: 'bod',
  BOS: 'bos',
  BUL: 'bul',
  CAT: 'cat',
  CEB: 'ceb',
  CES: 'ces',
  CHI_SIM: 'chi_sim',
  CHI_TRA: 'chi_tra',
  CHR: 'chr',
  CYM: 'cym',
  DAN: 'dan',
  DEU: 'deu',
  DZO: 'dzo',
  ELL: 'ell',
  ENG: 'eng',
  ENM: 'enm',
  EPO: 'epo',
  EST: 'est',
  EUS: 'eus',
  FAS: 'fas',
  FIN: 'fin',
  FRA: 'fra',
  FRK: 'frk',
  FRM: 'frm',
  GLE: 'gle',
  GLG: 'glg',
  GRC: 'grc',
  GUJ: 'guj',
  HAT: 'hat',
  HEB: 'heb',
  HIN: 'hin',
  HRV: 'hrv',
  HUN: 'hun',
  IKU: 'iku',
  IND: 'ind',
  ISL: 'isl',
  ITA: 'ita',
  ITA_OLD: 'ita_old',
  JAV: 'jav',
  JPN: 'jpn',
  KAN: 'kan',
  KAT: 'kat',
  KAT_OLD: 'kat_old',
  KAZ: 'kaz',
  KHM: 'khm',
  KIR: 'kir',
  KOR: 'kor',
  KUR: 'kur',
  LAO: 'lao',
  LAT: 'lat',
  LAV: 'lav',
  LIT: 'lit',
  MAL: 'mal',
  MAR: 'mar',
  MKD: 'mkd',
  MLT: 'mlt',
  MSA: 'msa',
  MYA: 'mya',
  NEP: 'nep',
  NLD: 'nld',
  NOR: 'nor',
  ORI: 'ori',
  PAN: 'pan',
  POL: 'pol',
  POR: 'por',
  PUS: 'pus',
  RON: 'ron',
  RUS: 'rus',
  SAN: 'san',
  SIN: 'sin',
  SLK: 'slk',
  SLV: 'slv',
  SPA: 'spa',
  SPA_OLD: 'spa_old',
  SQI: 'sqi',
  SRP: 'srp',
  SRP_LATN: 'srp_latn',
  SWA: 'swa',
  SWE: 'swe',
  SYR: 'syr',
  TAM: 'tam',
  TEL: 'tel',
  TGK: 'tgk',
  TGL: 'tgl',
  THA: 'tha',
  TIR: 'tir',
  TUR: 'tur',
  UIG: 'uig',
  UKR: 'ukr',
  URD: 'urd',
  UZB: 'uzb',
  UZB_CYRL: 'uzb_cyrl',
  VIE: 'vie',
  YID: 'yid'
};

/***/ }),

/***/ 86490:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getId = __webpack_require__(/*! ./utils/getId */ 43350);

let jobCounter = 0;

module.exports = ({
  id: _id,
  action,
  payload = {}
}) => {
  let id = _id;

  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }

  return {
    id,
    action,
    payload
  };
};

/***/ }),

/***/ 10365:
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

var _this = this;

const createJob = __webpack_require__(/*! ./createJob */ 86490);

const {
  log
} = __webpack_require__(/*! ./utils/log */ 3374);

const getId = __webpack_require__(/*! ./utils/getId */ 43350);

let schedulerCounter = 0;

module.exports = () => {
  const id = getId('Scheduler', schedulerCounter);
  const workers = {};
  const runningWorkers = {};
  let jobQueue = [];
  schedulerCounter += 1;

  const getQueueLen = () => jobQueue.length;

  const getNumWorkers = () => Object.keys(workers).length;

  const dequeue = () => {
    if (jobQueue.length !== 0) {
      const wIds = Object.keys(workers);

      for (let i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };

  const queue = (action, payload) => new Promise((resolve, reject) => {
    const job = createJob({
      action,
      payload
    });
    jobQueue.push( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (w) {
        jobQueue.shift();
        runningWorkers[w.id] = job;

        try {
          resolve(yield w[action].apply(_this, [...payload, job.id]));
        } catch (err) {
          reject(err);
        } finally {
          delete runningWorkers[w.id];
          dequeue();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    log(`[${id}]: Add ${job.id} to JobQueue`);
    log(`[${id}]: JobQueue length=${jobQueue.length}`);
    dequeue();
  });

  const addWorker = w => {
    workers[w.id] = w;
    log(`[${id}]: Add ${w.id}`);
    log(`[${id}]: Number of workers=${getNumWorkers()}`);
    dequeue();
    return w.id;
  };

  const addJob = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (action, ...payload) {
      if (getNumWorkers() === 0) {
        throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
      }

      return queue(action, payload);
    });

    return function addJob(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  const terminate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      Object.keys(workers).forEach( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(function* (wid) {
          yield workers[wid].terminate();
        });

        return function (_x3) {
          return _ref4.apply(this, arguments);
        };
      }());
      jobQueue = [];
    });

    return function terminate() {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    addWorker,
    addJob,
    terminate,
    getQueueLen,
    getNumWorkers
  };
};

/***/ }),

/***/ 45625:
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ 92133);

const circularize = __webpack_require__(/*! ./utils/circularize */ 2752);

const createJob = __webpack_require__(/*! ./createJob */ 86490);

const {
  log
} = __webpack_require__(/*! ./utils/log */ 3374);

const getId = __webpack_require__(/*! ./utils/getId */ 43350);

const {
  defaultOEM
} = __webpack_require__(/*! ./constants/config */ 71871);

const {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  loadImage,
  send
} = __webpack_require__(/*! ./worker/node */ 39664);

let workerCounter = 0;

module.exports = (_options = {}) => {
  const id = getId('Worker', workerCounter);
  const {
    logger,
    errorHandler,
    ...options
  } = resolvePaths({ ...defaultOptions,
    ..._options
  });
  const resolves = {};
  const rejects = {};
  let worker = spawnWorker(options);
  workerCounter += 1;

  const setResolve = (action, res) => {
    resolves[action] = res;
  };

  const setReject = (action, rej) => {
    rejects[action] = rej;
  };

  const startJob = ({
    id: jobId,
    action,
    payload
  }) => new Promise((resolve, reject) => {
    log(`[${id}]: Start ${jobId}, action=${action}`);
    setResolve(action, resolve);
    setReject(action, reject);
    send(worker, {
      workerId: id,
      jobId,
      action,
      payload
    });
  });

  const load = jobId => startJob(createJob({
    id: jobId,
    action: 'load',
    payload: {
      options
    }
  }));

  const writeText = (path, text, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'writeFile',
      args: [path, text]
    }
  }));

  const readText = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'readFile',
      args: [path, {
        encoding: 'utf8'
      }]
    }
  }));

  const removeFile = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'unlink',
      args: [path]
    }
  }));

  const FS = (method, args, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method,
      args
    }
  }));

  const loadLanguage = (langs = 'eng', jobId) => startJob(createJob({
    id: jobId,
    action: 'loadLanguage',
    payload: {
      langs,
      options
    }
  }));

  const initialize = (langs = 'eng', oem = defaultOEM, jobId) => startJob(createJob({
    id: jobId,
    action: 'initialize',
    payload: {
      langs,
      oem
    }
  }));

  const setParameters = (params = {}, jobId) => startJob(createJob({
    id: jobId,
    action: 'setParameters',
    payload: {
      params
    }
  }));

  const recognize = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (image, opts = {}, jobId) {
      return startJob(createJob({
        id: jobId,
        action: 'recognize',
        payload: {
          image: yield loadImage(image),
          options: opts
        }
      }));
    });

    return function recognize(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const getPDF = (title = 'Tesseract OCR Result', textonly = false, jobId) => startJob(createJob({
    id: jobId,
    action: 'getPDF',
    payload: {
      title,
      textonly
    }
  }));

  const detect = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (image, jobId) {
      return startJob(createJob({
        id: jobId,
        action: 'detect',
        payload: {
          image: yield loadImage(image)
        }
      }));
    });

    return function detect(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  const terminate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      if (worker !== null) {
        /*
        await startJob(createJob({
          id: jobId,
          action: 'terminate',
        }));
        */
        terminateWorker(worker);
        worker = null;
      }

      return Promise.resolve();
    });

    return function terminate() {
      return _ref3.apply(this, arguments);
    };
  }();

  onMessage(worker, ({
    workerId,
    jobId,
    status,
    action,
    data
  }) => {
    if (status === 'resolve') {
      log(`[${workerId}]: Complete ${jobId}`);
      let d = data;

      if (action === 'recognize') {
        d = circularize(data);
      } else if (action === 'getPDF') {
        d = Array.from({ ...data,
          length: Object.keys(data).length
        });
      }

      resolves[action]({
        jobId,
        data: d
      });
    } else if (status === 'reject') {
      rejects[action](data);

      if (errorHandler) {
        errorHandler(data);
      } else {
        throw Error(data);
      }
    } else if (status === 'progress') {
      logger({ ...data,
        userJobId: jobId
      });
    }
  });
  return {
    id,
    worker,
    setResolve,
    setReject,
    load,
    writeText,
    readText,
    removeFile,
    FS,
    loadLanguage,
    initialize,
    setParameters,
    recognize,
    getPDF,
    detect,
    terminate
  };
};

/***/ }),

/***/ 54389:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ 54346);

const createScheduler = __webpack_require__(/*! ./createScheduler */ 10365);

const createWorker = __webpack_require__(/*! ./createWorker */ 45625);

const Tesseract = __webpack_require__(/*! ./Tesseract */ 92658);

const languages = __webpack_require__(/*! ./constants/languages */ 20230);

const OEM = __webpack_require__(/*! ./constants/OEM */ 93488);

const PSM = __webpack_require__(/*! ./constants/PSM */ 10861);

const {
  setLogging
} = __webpack_require__(/*! ./utils/log */ 3374);

module.exports = {
  languages,
  OEM,
  PSM,
  createScheduler,
  createWorker,
  setLogging,
  ...Tesseract
};

/***/ }),

/***/ 2752:
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/***/ ((module) => {

/**
 * In the recognition result of tesseract, there
 * is a deep JSON object for details, it has around
 *
 * The result of dump.js is a big JSON tree
 * which can be easily serialized (for instance
 * to be sent from a webworker to the main app
 * or through Node's IPC), but we want
 * a (circular) DOM-like interface for walking
 * through the data.
 *
 * @fileoverview DOM-like interface for walking through data
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
module.exports = page => {
  const blocks = [];
  const paragraphs = [];
  const lines = [];
  const words = [];
  const symbols = [];
  page.blocks.forEach(block => {
    block.paragraphs.forEach(paragraph => {
      paragraph.lines.forEach(line => {
        line.words.forEach(word => {
          word.symbols.forEach(sym => {
            symbols.push({ ...sym,
              page,
              block,
              paragraph,
              line,
              word
            });
          });
          words.push({ ...word,
            page,
            block,
            paragraph,
            line
          });
        });
        lines.push({ ...line,
          page,
          block,
          paragraph
        });
      });
      paragraphs.push({ ...paragraph,
        page,
        block
      });
    });
    blocks.push({ ...block,
      page
    });
  });
  return { ...page,
    blocks,
    paragraphs,
    lines,
    words,
    symbols
  };
};

/***/ }),

/***/ 21347:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isElectron = __webpack_require__(/*! is-electron */ 96480);

module.exports = key => {
  const env = {};

  if (typeof WorkerGlobalScope !== 'undefined') {
    env.type = 'webworker';
  } else if (isElectron()) {
    env.type = 'electron';
  } else if (typeof window === 'object') {
    env.type = 'browser';
  } else if (typeof process === 'object' && "function" === 'function') {
    env.type = 'node';
  }

  if (typeof key === 'undefined') {
    return env;
  }

  return env[key];
};

/***/ }),

/***/ 43350:
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = (prefix, cnt) => `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`;

/***/ }),

/***/ 3374:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

let logging = false;
exports.logging = logging;

exports.setLogging = _logging => {
  logging = _logging;
};

exports.log = (...args) => logging ? console.log.apply(this, args) : null;

/***/ }),

/***/ 92133:
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isBrowser = __webpack_require__(/*! ./getEnvironment */ 21347)('type') === 'browser';
const resolveURL = isBrowser ? __webpack_require__(/*! resolve-url */ 58478) : s => s; // eslint-disable-line

module.exports = options => {
  const opts = { ...options
  };
  ['corePath', 'workerPath', 'langPath'].forEach(key => {
    if (typeof options[key] !== 'undefined') {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};

/***/ }),

/***/ 88683:
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const resolveURL = __webpack_require__(/*! resolve-url */ 58478);

const {
  version,
  dependencies
} = __webpack_require__(/*! ../../../package.json */ 94547);

const defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ 90715);
/*
 * Default options for browser worker
 */


module.exports = { ...defaultOptions,
  workerPath: typeof process !== 'undefined' && process.env.TESS_ENV === 'development' ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`) : `https://unpkg.com/tesseract.js@v${version}/dist/worker.min.js`,

  /*
   * If browser doesn't support WebAssembly,
   * load ASM version instead
   */
  corePath: `https://unpkg.com/tesseract.js-core@v${dependencies['tesseract.js-core'].substring(1)}/tesseract-core.${typeof WebAssembly === 'object' ? 'wasm' : 'asm'}.js`
};

/***/ }),

/***/ 39664:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
const defaultOptions = __webpack_require__(/*! ./defaultOptions */ 88683);

const spawnWorker = __webpack_require__(/*! ./spawnWorker */ 69690);

const terminateWorker = __webpack_require__(/*! ./terminateWorker */ 47005);

const onMessage = __webpack_require__(/*! ./onMessage */ 29290);

const send = __webpack_require__(/*! ./send */ 78196);

const loadImage = __webpack_require__(/*! ./loadImage */ 75967);

module.exports = {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  send,
  loadImage
};

/***/ }),

/***/ 75967:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const resolveURL = __webpack_require__(/*! resolve-url */ 58478);

const blueimpLoadImage = __webpack_require__(/*! blueimp-load-image */ 58791);
/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */


const readFromBlobOrFile = blob => new Promise((resolve, reject) => {
  const fileReader = new FileReader();

  fileReader.onload = () => {
    resolve(fileReader.result);
  };

  fileReader.onerror = ({
    target: {
      error: {
        code
      }
    }
  }) => {
    reject(Error(`File could not be read! Code=${code}`));
  };

  fileReader.readAsArrayBuffer(blob);
});

const fixOrientationFromUrlOrBlobOrFile = blob => new Promise(resolve => {
  blueimpLoadImage(blob, img => img.toBlob(resolve), {
    orientation: true,
    canvas: true
  });
});
/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */


const loadImage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (image) {
    let data = image;

    if (typeof image === 'undefined') {
      return 'undefined';
    }

    if (typeof image === 'string') {
      if (image.endsWith('.pbm')) {
        const resp = yield fetch(resolveURL(image));
        data = yield resp.arrayBuffer();
      } else {
        let img = image; // If not Base64 Image

        if (!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
          img = resolveURL(image);
        }

        data = yield readFromBlobOrFile(yield fixOrientationFromUrlOrBlobOrFile(img));
      }
    } else if (image instanceof HTMLElement) {
      if (image.tagName === 'IMG') {
        data = yield loadImage(image.src);
      }

      if (image.tagName === 'VIDEO') {
        data = yield loadImage(image.poster);
      }

      if (image.tagName === 'CANVAS') {
        yield new Promise(resolve => {
          image.toBlob( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(function* (blob) {
              data = yield readFromBlobOrFile(blob);
              resolve();
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        });
      }
    } else if (image instanceof File || image instanceof Blob) {
      let img = image;

      if (!image.name.endsWith('.pbm')) {
        img = yield fixOrientationFromUrlOrBlobOrFile(img);
      }

      data = yield readFromBlobOrFile(img);
    }

    return new Uint8Array(data);
  });

  return function loadImage(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = loadImage;

/***/ }),

/***/ 29290:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = (worker, handler) => {
  worker.onmessage = ({
    data
  }) => {
    // eslint-disable-line
    handler(data);
  };
};

/***/ }),

/***/ 78196:
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (worker, packet) {
    worker.postMessage(packet);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 69690:
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/***/ ((module) => {

/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = ({
  workerPath,
  workerBlobURL
}) => {
  let worker;

  if (Blob && URL && workerBlobURL) {
    const blob = new Blob([`importScripts("${workerPath}");`], {
      type: 'application/javascript'
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }

  return worker;
};

/***/ }),

/***/ 47005:
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/***/ ((module) => {

/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = worker => {
  worker.terminate();
};

/***/ }),

/***/ 50617:
/*!****************************************************************!*\
  !*** ./src/app/components/crop/crop.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9wLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 90283:
/*!***********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".file-content-wrapper {\n  margin-top: 160px !important;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.cat-text {\n  color: #8D8D8D !important;\n  font-size: 12px !important;\n  opacity: 100%;\n  margin-bottom: 8px !important;\n  margin-top: -6px !important;\n}\n\nh6.cat-head {\n  color: #000000;\n  font-size: 20px;\n}\n\n.card {\n  width: auto;\n  height: 85px;\n  padding: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.chq-text {\n  color: #000000;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre-line;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.danger {\n  color: #B20000 !important;\n  opacity: 100% !important;\n}\n\nion-progress-bar {\n  --background: #E8E8E8;\n  --progress-background:linear-gradient(90deg, #051A2D, #004C97);\n  height: 8px !important;\n  border-radius: 16px !important;\n}\n\n.file-card {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  width: auto;\n  height: 110px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.file-card .p-1 {\n  height: 80px;\n}\n\n.file-card .pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.file-card .border-end {\n  border-right: 1pt solid #dee2e6 !important;\n}\n\n.file-card p {\n  opacity: 100% !important;\n  color: #707070 !important;\n  font-size: 13px !important;\n}\n\n.file-card .avatar {\n  height: 60px;\n  width: 60px;\n  background: #EDECEC;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n.file-card .avatar .bg-gradient {\n  background-image: #EDECEC !important;\n}\n\n.file-card .avatar img {\n  margin-top: 16px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw4REFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBRUk7RUFDSSwrQkFBQTtBQUFSOztBQUdJO0VBQ0ksMENBQUE7QUFEUjs7QUFJSTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUZSOztBQUtJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhSOztBQUtRO0VBQ0ksb0NBQUE7QUFIWjs7QUFNUTtFQUNJLGdCQUFBO0FBSlo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQVBKIiwiZmlsZSI6ImZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMTYge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNhdC10ZXh0IHtcclxuICAgIGNvbG9yOiAjOEQ4RDhEICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaDYuY2F0LWhlYWQge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYig5OSA5OSA5OSAvIDIwJSkgMHB4IDJweCA4cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jaHEtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTpwcmUtbGluZTtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNCMjAwMDAgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFOEU4RTg7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIGhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMCAxMDAgMTExIC8gMjAlKSAwcHggN3B4IDI5cHggMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAucC0xIHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBiLTMge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlci1lbmQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB0IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0VERUNFQztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC5iZy1ncmFkaWVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICNFREVDRUMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbi5uZXh0IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIC0tY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 15487:
/*!****************************************************************!*\
  !*** ./src/app/components/crop/crop.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngx-doc-scanner \r\n            *ngIf=\"file\"\r\n               [file]=\"file\"\r\n               [config]=\"config\"\r\n               (editResult)=\"editResult($event)\"\r\n               (exitEditor)=\"exitEditor($event)\"\r\n               (error)=\"onError($event)\"\r\n               (processing)=\"editorState($event)\"\r\n               >\r\n</ngx-doc-scanner>";

/***/ }),

/***/ 60004:
/*!***********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header *ngIf=\"!isFile\">\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"isFile\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Upload file</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ng-container *ngIf=\"!isFile\">\r\n    <div class=\"file-content-wrapper text-center\">\r\n      <img src=\"assets/icon/v2/no-file-upload.svg\">\r\n      <h6 class=\"cat-head\">Upload File Here</h6>\r\n      <p class=\"cat-text\">Choose your file from gallery</p>\r\n    </div>\r\n\r\n    <div class=\"file-card my-5 mt-16\">\r\n      <div class=\"row justify-content-between pb-3\">\r\n        <div class=\"col-6 align-self-center text-center border-end mt-16\" (click)=\"upload()\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Front</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 align-self-center text-center mt-16\" (click)=\"upload()\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar bg-gradient\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Back</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"isFile\">\r\n    <div class=\"file-card\">\r\n      <div class=\"row justify-content-between pb-3\">\r\n        <div class=\"col-6 align-self-center text-center border-end mt-16\" (click)=\"fileSelect.click();\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Front</p>\r\n            <input [hidden]=\"true\" type=\"file\" id=\"file-input\" (change)=\"onFileSelect($event, 'front')\"\r\n              accept=\"image/png, image/jpeg\" #fileSelect>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 align-self-center text-center mt-16\" (click)=\"fileSelect.click();\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar bg-gradient\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Back</p>\r\n            <input [hidden]=\"true\" type=\"file\" id=\"file-input\" (change)=\"onFileSelect($event, 'back')\"\r\n              accept=\"image/png, image/jpeg\" #fileSelect>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"my-5\">\r\n      <div class=\"card\" *ngFor=\"let item of files; index as i;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <img alt=\"front\" [src]=\"base64File\" width=\"120\" height=\"51\" />\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row justify-content-between\">\r\n              <div class=\"col-9 align-self-center\">\r\n                <h3 class=\"chq-text\">{{item?.name}}</h3>\r\n              </div>\r\n              <div class=\"col-3 align-self-center text-right\">\r\n                <ion-button fill=\"clear\" *ngIf=\"uploadingFile == item.name && isUploading; else uploaded\"\r\n                  (click)=\"cancel(item.name)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"close\" color=\"medium\"></ion-icon>\r\n                </ion-button>\r\n\r\n                <ng-template #uploaded>\r\n                  <mat-icon class=\"danger\" (click)=\"deleteFile(item.name)\">delete</mat-icon>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n\r\n            <ion-progress-bar [value]=\"percentDone\"\r\n              *ngIf=\"uploadingFile == item.name && isUploading\"></ion-progress-bar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"isFile\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"goBack()\" [disabled]=\"!chequeData\">Upload\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goBack()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ }),

/***/ 21778:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 94547:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"tesseract.js","version":"2.1.5","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.7.7","@babel/preset-env":"^7.7.7","acorn":"^6.4.0","babel-loader":"^8.1.0","cors":"^2.8.5","eslint":"^7.2.0","eslint-config-airbnb-base":"^14.2.0","eslint-plugin-import":"^2.22.1","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^8.1.3","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^2.7.1","wait-on":"^3.3.0","webpack":"^4.44.2","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.12","webpack-dev-middleware":"^3.7.2"},"dependencies":{"blueimp-load-image":"^3.0.0","bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","jpeg-autorotate":"^7.1.1","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^2.2.0","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_file-upload_file-upload_module_ts.js.map