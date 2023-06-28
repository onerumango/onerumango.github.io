"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_scan_scan_module_ts"],{

/***/ 4720:
/*!***************************************************!*\
  !*** ./src/app/components/crop/crop.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 15408:
/*!***********************************************************!*\
  !*** ./src/app/components/scan-doc/scan-doc.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanDocComponent": () => (/* binding */ ScanDocComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scan_doc_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-doc.component.html?ngResource */ 52585);
/* harmony import */ var _scan_doc_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-doc.component.scss?ngResource */ 57616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _crop_crop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crop/crop.component */ 4720);







let ScanDocComponent = class ScanDocComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.sysImage = '';
        this.isDone = false;
        this.config = {
            editorBackgroundColor: '#fafafa',
            buttonThemeColor: 'primary',
            cropToolColor: '#ff4081',
            cropToolShape: 'circle',
            exportImageIcon: 'cloud_download',
        };
    }
    ngOnInit() { }
    uploadImg(event) {
        let selectedFile = event.target.files[0];
        this.image = selectedFile;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);
        fileReader.onload = (_event) => {
            this.selectedImage = fileReader.result;
        };
    }
    captureImg(webcamImage) {
        this.webcamImage = webcamImage;
        this.sysImage = webcamImage.imageAsDataUrl;
        console.info('got webcam image', this.sysImage);
        this.isDone = true;
        this.file = this.DataURIToBlob(this.sysImage);
        // this.openDocuemntCropModal(this.DataURIToBlob(this.sysImage));
    }
    get invokeObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    getSnapshot() {
        this.trigger.next();
    }
    back() {
        this.modalController.dismiss();
    }
    closeModal() {
        this.modalController.dismiss();
    }
    retake() {
        this.webcamImage = null;
        this.sysImage = null;
        this.isDone = false;
    }
    openDocuemntCropModal(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _crop_crop_component__WEBPACK_IMPORTED_MODULE_2__.CropComponent,
                componentProps: {
                    file: file,
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                let fr = new FileReader();
                fr.readAsDataURL(res === null || res === void 0 ? void 0 : res.data);
                fr.onload = (_event) => {
                    this.cropImage = _event.target.result;
                    this.fileUpload(this.cropImage);
                };
            });
            return yield modal.present();
        });
    }
    onSubmit() {
        this.modalController.dismiss({
            resImage: this.sysImage,
            file: this.file
        });
    }
    DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',');
        const byteString = splitDataURI[0].indexOf('base64') >= 0
            ? atob(splitDataURI[1])
            : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i);
        return new Blob([ia], { type: mimeString });
    }
    editResult(event) {
        console.log(event);
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
ScanDocComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ScanDocComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-scan-doc',
        template: _scan_doc_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_doc_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanDocComponent);



/***/ }),

/***/ 60191:
/*!******************************************************!*\
  !*** ./src/app/pages/v2/scan/scan-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageRoutingModule": () => (/* binding */ ScanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.page */ 70424);




const routes = [
    {
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_0__.ScanPage
    }
];
let ScanPageRoutingModule = class ScanPageRoutingModule {
};
ScanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanPageRoutingModule);



/***/ }),

/***/ 78192:
/*!**********************************************!*\
  !*** ./src/app/pages/v2/scan/scan.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageModule": () => (/* binding */ ScanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-routing.module */ 60191);
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.page */ 70424);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);








let ScanPageModule = class ScanPageModule {
};
ScanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
            _scan_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanPageRoutingModule
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_1__.ScanPage]
    })
], ScanPageModule);



/***/ }),

/***/ 70424:
/*!********************************************!*\
  !*** ./src/app/pages/v2/scan/scan.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPage": () => (/* binding */ ScanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.page.html?ngResource */ 68349);
/* harmony import */ var _scan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.page.scss?ngResource */ 79476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_scan_doc_scan_doc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/scan-doc/scan-doc.component */ 15408);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);









let ScanPage = class ScanPage {
    constructor(router, location, modalCtrl, api) {
        this.router = router;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.api = api;
    }
    ngOnInit() { }
    goBack() {
        this.location.back();
    }
    openScanner(side) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_scan_doc_scan_doc_component__WEBPACK_IMPORTED_MODULE_2__.ScanDocComponent,
                backdropDismiss: true,
            });
            modal.onDidDismiss().then((res) => {
                var _a, _b;
                console.log('Getting Back Data', res);
                const fReader = new FileReader();
                fReader.readAsDataURL((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.file);
                fReader.onloadend = (_event) => {
                    if (side == 'front') {
                        this.frontScanImage = _event.target.result;
                    }
                    else {
                        this.backScanImage = _event.target.result;
                    }
                };
                this.readChequeData((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.file);
            });
            return yield modal.present();
        });
    }
    readChequeData(file) {
        const formData = new FormData();
        formData.append('file', file, 'image.jpg');
        this.api.getChequeData(formData).subscribe((res) => {
            let cheque = {};
            res.data.forEach((d) => {
                cheque[d.label] = d.value;
            });
            this.chequeData = cheque;
        });
    }
    DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',');
        const byteString = splitDataURI[0].indexOf('base64') >= 0
            ? atob(splitDataURI[1])
            : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i);
        return new Blob([ia], { type: mimeString });
    }
};
ScanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
ScanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-scan',
        template: _scan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanPage);



/***/ }),

/***/ 50617:
/*!****************************************************************!*\
  !*** ./src/app/components/crop/crop.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9wLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 57616:
/*!************************************************************************!*\
  !*** ./src/app/components/scan-doc/scan-doc.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".row {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.capture {\n  margin-bottom: 15px;\n}\n\n.row {\n  padding: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4tZG9jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKIiwiZmlsZSI6InNjYW4tZG9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uY2FwdHVyZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnJvd3tcclxuICAgIHBhZGRpbmc6IDM2cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 79476:
/*!*********************************************************!*\
  !*** ./src/app/pages/v2/scan/scan.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".card {\n  width: auto;\n  height: 220px;\n  padding: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.title {\n  color: #004C97;\n  text-align: center;\n  margin-top: 16px;\n  font-size: 18px;\n}\n\n.bg-overlay {\n  background: url(\"/assets/images/cheque/bg.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 200px;\n  height: 130px;\n  margin: 0 auto;\n}\n\n.bg-overlay-active {\n  background: url(\"/assets/images/cheque/green-tick.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 200px;\n  height: 130px;\n  margin: 0 auto;\n}\n\n.mat-icon.mt-icon {\n  top: 49px !important;\n  color: #ffffff !important;\n  left: 150px;\n  position: absolute;\n  font-size: 36px;\n  width: 45px;\n  height: 45px;\n}\n\n.page-header.parallax:before {\n  background-color: rgba(0, 76, 151, 0.3137254902) !important;\n}\n\n.page-header.active-parallax:before {\n  background-color: rgba(27, 205, 157, 0.3607843137) !important;\n}\n\n.page-header.parallax:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n  background-color: #fff;\n  opacity: 0.65;\n}\n\n.page-header.active-parallax:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n  background-color: #fff;\n  opacity: 0.65;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksdURBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwyREFBQTtBQUNKOztBQUVBO0VBQ0ksNkRBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic2Nhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDk5IDk5IDk5IC8gMjAlKSAwcHggMnB4IDhweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJnLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVxdWUvYmcuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJnLW92ZXJsYXktYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2hlcXVlL2dyZWVuLXRpY2suc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm1hdC1pY29uLm10LWljb257XHJcbiAgICB0b3A6IDQ5cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIucGFyYWxsYXg6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRDOTc1MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIuYWN0aXZlLXBhcmFsbGF4OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJDRDlENUMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyLnBhcmFsbGF4OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIuYWN0aXZlLXBhcmFsbGF4OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG59Il19 */";

/***/ }),

/***/ 15487:
/*!****************************************************************!*\
  !*** ./src/app/components/crop/crop.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ngx-doc-scanner \r\n            *ngIf=\"file\"\r\n               [file]=\"file\"\r\n               [config]=\"config\"\r\n               (editResult)=\"editResult($event)\"\r\n               (exitEditor)=\"exitEditor($event)\"\r\n               (error)=\"onError($event)\"\r\n               (processing)=\"editorState($event)\"\r\n               >\r\n</ngx-doc-scanner>";

/***/ }),

/***/ 52585:
/*!************************************************************************!*\
  !*** ./src/app/components/scan-doc/scan-doc.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ngx-doc-scanner \r\n     *ngIf=\"image\"\r\n     [file]=\"image\"\r\n     [config]=\"config\">\r\n     (editResult)=\"editResult($event)\"\r\n     (exitEditor)=\"exitEditor($event)\"\r\n     (error)=\"onError($event)\"\r\n     (processing)=\"editorState($event)\"\r\n</ngx-doc-scanner>\r\n<input type=\"file\" (change)=\"uploadImg($event)\">\r\n<img *ngIf=\"image\" [src]=\"selectedImage\"/> -->\r\n<ion-content>\r\n  <ng-container\r\n    *ngIf=\"!error && !isDone && 'webcamImage == null'; else showImg\"\r\n  >\r\n    <webcam\r\n      [trigger]=\"invokeObservable\"\r\n      (imageCapture)=\"captureImg($event)\"\r\n      (initError)=\"handleInitError($event)\"\r\n    ></webcam>\r\n  </ng-container>\r\n  <ng-template #showImg>\r\n    <!-- <img [src]=\"webcamImage?.imageAsDataUrl\" /> -->\r\n    <ngx-doc-scanner \r\n            *ngIf=\"file\"\r\n               [file]=\"file\"\r\n               [config]=\"config\"\r\n               (editResult)=\"editResult($event)\"\r\n               (exitEditor)=\"exitEditor($event)\"\r\n               (error)=\"onError($event)\"\r\n               (processing)=\"editorState($event)\"\r\n               >\r\n</ngx-doc-scanner>\r\n  </ng-template>\r\n  <!-- <div class=\"scan-div\">\r\n     <div class=\"capture-circle\" (click)=\"getSnapshot()\">\r\n       <img src=\"assets/images/scan-img.png\" class=\"scan-img\"/>\r\n     </div>\r\n   </div> -->\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"btn-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"retake\" *ngIf=\"isDone\" (click)=\"retake()\">\r\n        <img src=\"assets/retake.png\" alt=\"\" />\r\n      </div>\r\n      <div class=\"capture\" (click)=\"getSnapshot()\">\r\n        <img src=\"assets/capture.png\" alt=\"\" style=\"margin-top: -36px;\"/>\r\n      </div>\r\n      <div *ngIf=\"isDone\" (click)=\"onSubmit()\">\r\n        <img src=\"assets/submit.png\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 68349:
/*!*********************************************************!*\
  !*** ./src/app/pages/v2/scan/scan.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Scan your cheque</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n\r\n  <div class=\"card\">\r\n    <div class=\"p-1\">\r\n      <div class=\"page-header\" [ngClass]=\"frontScanImage ? 'active-parallax' : 'parallax'\" style=\"\r\n      background-image: url({{frontScanImage}});\r\n      height: 146px;\r\n      width: 100%;\r\n      position: relative;\r\n      background-size: cover;\r\n      background-position: center center;\">\r\n        <div class=\"overlay\">\r\n          <div [ngClass]=\"frontScanImage ? 'bg-overlay-active' : 'bg-overlay'\">\r\n            <mat-icon *ngIf=\"!frontScanImage\" class=\"mt-icon\" (click)=\"openScanner('front')\">photo_camera</mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p class=\"title\">Front</p>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <div class=\"card\">\r\n    <div class=\"p-1\">\r\n      <div class=\"page-header\" [ngClass]=\"backScanImage ? 'active-parallax' : 'parallax'\" style=\"\r\n      background-image: url({{backScanImage}});\r\n      height: 146px;\r\n      width: 100%;\r\n      position: relative;\r\n      background-size: cover;\r\n      background-position: center center;\">\r\n        <div class=\"overlay\">\r\n          <div [ngClass]=\"backScanImage ? 'bg-overlay-active' : 'bg-overlay'\">\r\n            <mat-icon *ngIf=\"!backScanImage\" class=\"mt-icon\" (click)=\"openScanner('back')\">photo_camera</mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p class=\"title\">Back</p>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"frontScanImage || backScanImage\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"goBack()\">Upload\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goBack()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_scan_scan_module_ts.js.map