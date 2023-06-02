"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_kyc-branch_kyc-branch_module_ts"],{

/***/ 90643:
/*!******************************************************************!*\
  !*** ./src/app/pages/v2/kyc-branch/kyc-branch-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycBranchPageRoutingModule": () => (/* binding */ KycBranchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _kyc_branch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-branch.page */ 33594);




const routes = [
    {
        path: '',
        component: _kyc_branch_page__WEBPACK_IMPORTED_MODULE_0__.KycBranchPage
    }
];
let KycBranchPageRoutingModule = class KycBranchPageRoutingModule {
};
KycBranchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KycBranchPageRoutingModule);



/***/ }),

/***/ 77401:
/*!**********************************************************!*\
  !*** ./src/app/pages/v2/kyc-branch/kyc-branch.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycBranchPageModule": () => (/* binding */ KycBranchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _kyc_branch_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-branch-routing.module */ 90643);
/* harmony import */ var _kyc_branch_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-branch.page */ 33594);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);











let KycBranchPageModule = class KycBranchPageModule {
};
KycBranchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__.NgxFlagPickerModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_3__.DirectiveModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__.SharedMaterialModule,
            _kyc_branch_routing_module__WEBPACK_IMPORTED_MODULE_0__.KycBranchPageRoutingModule,
        ],
        declarations: [_kyc_branch_page__WEBPACK_IMPORTED_MODULE_1__.KycBranchPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA],
    })
], KycBranchPageModule);



/***/ }),

/***/ 33594:
/*!********************************************************!*\
  !*** ./src/app/pages/v2/kyc-branch/kyc-branch.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycBranchPage": () => (/* binding */ KycBranchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _kyc_branch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-branch.page.html?ngResource */ 11818);
/* harmony import */ var _kyc_branch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-branch.page.scss?ngResource */ 91890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _kyc_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kyc-branch.service */ 8813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_components_duplication_duplication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/duplication/duplication.component */ 10473);
/* harmony import */ var src_app_components_otp_verification_popup_otp_verification_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/otp-verification-popup/otp-verification-popup.component */ 6987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var src_app_components_rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/rekyc-popup/rekyc-popup.component */ 65573);
/* harmony import */ var src_app_components_verification_done_verification_done_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/verification-done/verification-done.component */ 86848);
/* harmony import */ var src_app_components_capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/capture-image/capture-image.component */ 85652);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../token-v2/token-v2.page */ 68106);
/* harmony import */ var src_app_services_static_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/static-data-service */ 27804);
/* harmony import */ var src_app_components_verification_modal_verification_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/verification-modal/verification-modal.component */ 49241);



















let KycBranchPage = class KycBranchPage {
    constructor(fb, router, modalCtrl, _location, branchService, cdr, snack, staticDataService) {
        this.fb = fb;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this._location = _location;
        this.branchService = branchService;
        this.cdr = cdr;
        this.snack = snack;
        this.staticDataService = staticDataService;
        // svg icons links
        this.deleteIcon = 'assets/icon/delete.svg';
        this.editIcon = 'assets/icon/edit.svg';
        this.faceScanIcon = 'assets/icon/faceScan.svg';
        this.fingerScanIcon = 'assets/icon/fingerPrintScan.svg';
        this.irisScanIcon = 'assets/icon/irisScan.svg';
        // selected value of segment tab
        this.selectedTab = 'BASIC-INFO';
        this.isUploading = false;
        this.documentButtonDisabled = true;
        this.verificationButtonDisabled = true;
        this.mobileVerified = false;
        this.emailVerified = false;
        this.fingerPrintVerified = false;
        this.documentSide = [6, 7, 8];
    }
    ngOnChanges(changes) {
        if (this.retainValues && this.documentUploadForm) {
            this.documentUploadForm.patchValue(this.retainValues);
        }
    }
    ngOnInit() {
        this.buildDocumentUploadForm();
        this.buildVerificationForm();
        this.getDocumentName();
        this.permanentAddress = this.fb.group({});
    }
    ionViewWillEnter() {
        this.openDialog();
    }
    buildVerificationForm() {
        this.verificationForm = this.fb.group({
            irisScan: [''],
            faceScan: [''],
        });
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    // DOCUMENTS
    buildDocumentUploadForm() {
        this.documentUploadForm = this.fb.group({
            documents: this.fb.array([this.createDocumentItem()]),
        });
        if (this.retainValues) {
            this.basicInfoForm.patchValue(this.retainValues);
        }
    }
    documents() {
        return this.documentUploadForm.get('documents');
    }
    createDocumentItem() {
        return this.fb.group({
            documentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            documentNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            phoneNumber: [''],
            verifiedMobileNumber: [''],
            pages: this.fb.array([this.addNewPage(0), this.addNewPage(1)]),
        });
    }
    addDocumentItem() {
        this.documents().push(this.createDocumentItem());
    }
    removeDocumentItem(index) {
        this.documents().removeAt(index);
    }
    documentPages(index) {
        return this.documents().at(index).get('pages');
    }
    getDocumentName() {
        this.staticDataService.documentType().subscribe(res => {
            this.documentArr = res;
            console.log(res);
        });
    }
    addNewPage(side) {
        return this.fb.group({
            id: [],
            fileUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            documentSide: [side, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            documentTitle: [this.getPageName(side), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            scan: [false],
            isUploaded: [false],
        });
    }
    getPageName(side) {
        switch (side) {
            case 0:
                return 'Front';
            case 1:
                return 'Back';
            default:
                return 'Other';
        }
    }
    addDocumentPage(docIndex) {
        let pagesLength = this.documents().at(docIndex).get('pages');
        console.log(pagesLength);
        let count = pagesLength.length;
        this.documentPages(docIndex).push(this.addNewPage(count++));
    }
    removeDocumentPage(index, pageIndex) {
        if (this.documentPages(index).controls[pageIndex].get('documentTitle').value != 'Other') {
            this.documentPages(index).controls[pageIndex].get('fileUrl').setValue('');
            return;
        }
        this.documentPages(index).removeAt(pageIndex);
    }
    goToNextTab(selectedTab) {
        console.log(selectedTab);
        if (selectedTab === 'BASIC-INFO') {
            let payload = {
                phoneNumber: this.basicInfoForm.value.phoneNumber,
                primaryEmailAdress: this.basicInfoForm.value.primaryEmailAdress,
            };
            this.branchService.fetchCustomerDetails(payload).subscribe((res) => {
                console.log(res);
                if (res.data != null) {
                    this.openDuplicationDiaglogue(res.data);
                }
                else {
                    this.saveCustomerData();
                }
            });
        }
        else {
            this.selectedTab = 'VERIFICATION';
            this.verificationButtonDisabled = false;
        }
    }
    saveCustomerData() {
        let payload = this.basicInfoForm.value;
        payload.verificationType = 'KYC';
        console.log(payload);
        this.branchService.upsertCustomer(payload).subscribe((res) => {
            this.customerId = res.customerId;
            this.selectedTab = 'DOCUMENTS';
        });
    }
    goToPrevious(selectedTab) {
        this.selectedTab = selectedTab;
    }
    submit() {
        this.branchService
            .updateKycStatusByCustId(this.customerId, 'INITIATED', '')
            .subscribe((res) => {
            if (res) {
                this.openSuccesfullScreen(res);
            }
        });
    }
    getBasicInfo(event) {
        if (event) {
            this.selectedTab = 'DOCUMENTS';
            this.documentButtonDisabled = false;
            this.basicInfoData = event;
            this.customerId = this.basicInfoData.customerId;
            if (this.basicInfoData.customerId) {
                setTimeout(() => {
                    this.getCustomerDocuments();
                }, 100);
            }
        }
    }
    openSuccesfullScreen(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_8__.TokenV2Page,
                componentProps: {
                    scheduleInfo: data,
                    screenType: 'branch',
                    screen: 'mobile-kyc',
                    txntitle: 'KYC Branch Screening',
                },
            });
            modal.onDidDismiss().then((res) => {
                this.router.navigate(['kyc']);
            });
            return yield modal.present();
        });
    }
    openDuplicationDiaglogue(customerData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_duplication_duplication_component__WEBPACK_IMPORTED_MODULE_3__.DuplicationComponent,
                backdropDismiss: true,
                cssClass: 'dup-modal',
                componentProps: {
                    customerData: customerData,
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                if (res.data != 'close') {
                    if (res.data.reKyc == true) {
                        this.openSuccessDialog();
                    }
                    else {
                        this.saveCustomerData();
                    }
                }
            });
            return yield modal.present();
        });
    }
    openSuccessDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_5__.RekycPopupComponent,
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                this.saveCustomerData();
            });
            return yield modal.present();
        });
    }
    openDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_verification_modal_verification_modal_component__WEBPACK_IMPORTED_MODULE_10__.VerificationModalComponent,
                componentProps: {
                    data: '',
                    screen: 'branch',
                },
            });
            modal.onDidDismiss().then((res) => {
                var _a, _b;
                console.log('Getting Back Data', res);
                if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.customerData) {
                    // this.basicInfoForm.patchValue(res?.data?.customerData);
                    this.basicInfoData = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.customerData;
                }
            });
            return yield modal.present();
        });
    }
    patchUploadedDocument(data) {
        if (data) {
            data === null || data === void 0 ? void 0 : data.map((doc, index) => {
                this.documents().at(0).patchValue(doc);
                index == 0 ?
                    this.documentPages(0)
                        .at(0)
                        .get('fileUrl')
                        .patchValue(doc === null || doc === void 0 ? void 0 : doc.fileUrl) :
                    this.documentPages(0)
                        .at(1)
                        .get('fileUrl')
                        .patchValue(doc === null || doc === void 0 ? void 0 : doc.fileUrl);
            });
        }
    }
    openVerificationDone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_verification_done_verification_done_component__WEBPACK_IMPORTED_MODULE_6__.VerificationDoneComponent,
                componentProps: {},
            });
            modal.onDidDismiss().then(res => {
                this.fingerPrintVerified = true;
            });
            return yield modal.present();
        });
    }
    openCamera(scanType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (scanType == 'FACE') {
                this.scannedItem = 'face';
            }
            else {
                this.scannedItem = 'iris';
            }
            let modal = yield this.modalCtrl.create({
                component: src_app_components_capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_7__.CaptureImageComponent,
                componentProps: {
                    scanObject: this.scannedItem
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back open Camera Data', res);
                if (scanType == 'FACE') {
                    this.faceImage = res.data;
                    this.scannedItem = 'face';
                }
                else {
                    this.irisImage = res.data;
                    this.scannedItem = 'iris';
                }
                const uploadData = new FormData();
                const file = this.DataURIToBlob(res.data);
                uploadData.append('file', file, 'image.jpg');
                uploadData.append('figName', scanType);
                uploadData.append('customerId', this.customerId);
                uploadData.append('verify', 'kyc-verification');
                this.branchService.saveOrUpdateBio(uploadData).subscribe((res) => {
                    this.snack.open(` ${scanType} Saved Successfully!`, 'OK', {
                        duration: 4000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right',
                    });
                });
                // console.log(this.verificationForm);
            });
            return yield modal.present();
        });
    }
    onFileSelect(e, docside, documentIndex, index, documentName) {
        console.log('index', index);
        this.selectedIndex = index;
        const file = e.target.files[0];
        const fReader = new FileReader();
        fReader.readAsDataURL(file);
        fReader.onloadend = (_event) => {
            let filename = file.name;
            let base64File = _event.target.result;
            // this.uploadDoc(base64File);
            this.documentPages(documentIndex)
                .at(index)
                .get('fileUrl')
                .patchValue(base64File);
            this.fileUpload(file, documentIndex, index, base64File);
            console.log(filename);
        };
        this.selectedFiles = e.target.files[0];
        let size = e.target.files[0].size;
        this.shotToast(`Your file size is ${this.formatBytes(size, 2)}`);
        if (size > 1048576) {
            this.shotToast(`Your file size is ${this.formatBytes(size, 2)}, Kindly Upload below ${this.formatBytes(1048576, 2)} file size`);
        }
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (event) => {
            this.image = reader.result;
        };
        let docType;
        const uploadData = new FormData();
        if (documentName === 'Aadhar card') {
            docType = '6';
        }
        else if (documentName === 'Pan card') {
            docType = '7';
        }
        else if (documentName === 'Passport') {
            docType = '8';
        }
        const data = {
            customerId: this.customerId
                ? this.customerId
                : localStorage.getItem('customer_id'),
            documentName: this.documents().at(documentIndex).get('documentName').value,
            documentType: docType,
            fileType: this.selectedFiles.type,
            fileName: this.selectedFiles.name,
            verificationType: 'KYC verification',
            documentSide: this.documentPages(documentIndex).at(index).get('documentSide').value + 1,
            idNumber: '',
            name: '',
            dob: '',
        };
        uploadData.append('data', JSON.stringify(data));
        uploadData.append('file', this.selectedFiles);
        this.branchService.upload(uploadData).subscribe((res) => {
            console.log(res);
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
    formatBytes(bytes, decimals) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    fileUpload(file, documentIndex, index, base64File) {
        this.uploadingFile = file.name;
        this.isUploading = true;
        this.requestSubscription = this.branchService
            .uploadAndProgress(file)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpEventType.UploadProgress) {
                this.percentDone = Math.round((100 * event.loaded) / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpResponse) {
                this.uploadSuccess = true;
                this.percentDone = 0;
                this.isUploading = false;
                console.log(this.documents());
                this.documentPages(documentIndex)
                    .at(index)
                    .get('fileUrl')
                    .patchValue(base64File);
                this.cdr.markForCheck();
            }
        });
    }
    // for Document upload
    shotToast(msg) {
        this.snack.open(`${msg}`, 'OK', {
            duration: 6000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
        });
    }
    //----------__________----------__________----------__________----------__________
    backToDashboard() {
        this.router.navigate(['dashboard']);
    }
    goBack() {
        this._location.back();
    }
    openOtpModal(source_key, source_value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_otp_verification_popup_otp_verification_popup_component__WEBPACK_IMPORTED_MODULE_4__.OtpVerificationPopup,
                componentProps: {
                    Mnumber: source_value,
                    screen: 'branch',
                },
            });
            modal.onDidDismiss().then((res) => {
                var _a;
                console.log('Getting Back Data', res);
                if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.otp) {
                    if (source_key == 'mobile') {
                        this.mobileVerified = true;
                    }
                    else {
                        this.emailVerified = true;
                    }
                }
            });
            return yield modal.present();
        });
    }
    getOtp(source_key, source_value) {
        let payload = {
            source: 'customer',
            source_key: source_key,
            source_value: source_value,
        };
        this.branchService.getOtp(payload).subscribe((res) => {
            this.openOtpModal(source_key, source_value);
        });
    }
    getCustomerDocuments() {
        this.documentSide.map(doc => {
            this.branchService.fetchCustomerDocuments(this.basicInfoData.customerId, doc).subscribe((res) => {
                console.log(res);
                if (res) {
                    let frontArray = res.filter(r => (r.verificationType =  true && (r === null || r === void 0 ? void 0 : r.documentSide) == 1));
                    let backArray = res.filter(r => (r.verificationType =  true && (r === null || r === void 0 ? void 0 : r.documentSide) == 2));
                    this.patchUploadedDocument([frontArray.at(-1), backArray.at(-1)]);
                }
            });
        });
    }
};
KycBranchPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.Location },
    { type: _kyc_branch_service__WEBPACK_IMPORTED_MODULE_2__.BranchService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar },
    { type: src_app_services_static_data_service__WEBPACK_IMPORTED_MODULE_9__.StaticDataService }
];
KycBranchPage.propDecorators = {
    retainValues: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input }]
};
KycBranchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-kyc-branch',
        template: _kyc_branch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_kyc_branch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KycBranchPage);



/***/ }),

/***/ 91890:
/*!*********************************************************************!*\
  !*** ./src/app/pages/v2/kyc-branch/kyc-branch.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --display: flex !important;\n  --align-items: center;\n  --justify-content: space-between;\n  --color: #004c97;\n  --width: 100%;\n}\n\nion-button.next {\n  width: 100px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.cancel {\n  width: 100px;\n  --background: #ffffff;\n  --color: #b20000;\n}\n\nion-button.back {\n  width: 100px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\nion-content ion-segment {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  padding: 2px;\n}\n\nion-content ion-segment .segment-button-checked {\n  background: #d6dbea;\n  color: #004385;\n}\n\nion-content ion-segment ion-segment-button {\n  color: #8a8989;\n  height: 22.6px;\n  padding: 1px 4px;\n  text-transform: capitalize;\n}\n\nion-content ion-segment ion-segment-button ion-label {\n  font-size: 12.5px;\n}\n\nion-content .DOC-container {\n  height: auto;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  padding: 10px;\n}\n\nion-content .DOC-container .cardContainer {\n  width: 100%;\n  height: inherit;\n}\n\nion-content .DOC-container .cardContainer .card {\n  border: none;\n}\n\nion-content .DOC-container .cardContainer .card .top-cont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n\nion-content .DOC-container .cardContainer .card .top-cont button {\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  background: transparent;\n  color: #b20000;\n}\n\nion-content .DOC-container .cardContainer .card .input-fields {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\nion-content .DOC-container .cardContainer .card .input-fields mat-form-field {\n  width: 48%;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n\nion-content .DOC-container .cardContainer .card .input-fields mat-form-field mat-label {\n  color: #8a8989;\n}\n\nion-content .DOC-container .cardContainer .card .input-fields mat-form-field .mat-select-arrow-wrapper {\n  color: #8a8989;\n}\n\nion-content .DOC-container .cardContainer .card ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\nion-content .DOC-container .cardContainer .card ::ng-deep .mat-form-field-wrapper .mat-form-field-infix {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .DOC-container .cardContainer .DOC-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 25px;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .inside-cont {\n  background-color: #f3f3f3;\n  width: 48%;\n  margin-top: 7px;\n  padding: 6px 0px 6px 6px;\n  border-radius: 20px;\n  height: 160px;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .inside-cont ng-container .card1 {\n  background-color: rgba(255, 255, 255, 0) !important;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .inside-cont ng-container .card1 .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .inside-cont ng-container .card1 .btns .scan-btn {\n  width: 50px;\n  background: rgb(5, 26, 45) !important;\n  background: linear-gradient(91deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%) !important;\n  border-radius: 15px;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .inside-cont ng-container .card1 .btns .mat-mini-fab.mat-primary {\n  background: rgb(5, 26, 45);\n  background: linear-gradient(91deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n}\n\nion-content .DOC-container .cardContainer .DOC-box .icon-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .back-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .card-btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: -21px;\n  margin-top: 7px;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .card-btns ion-button.next {\n  width: 80px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  border-radius: 15px;\n  --color: #ffffff;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .card-btns ion-button.back {\n  width: 80px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #c20000 !important;\n  border-radius: 15px;\n  margin-right: 10px;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .card-plus {\n  width: 50%;\n  height: 160px;\n  background-color: #f3f3f3;\n  border-radius: 15px;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .add-del-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  width: 50px;\n}\n\nion-content .DOC-container .cardContainer .DOC-box .line {\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n  opacity: 1;\n}\n\nion-content .succss-btn {\n  color: green;\n}\n\nion-content .VERIFICATION-Container .scan-container .scan {\n  height: 180px;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  border-radius: 20px;\n  padding: 3px;\n  margin-top: 15px;\n}\n\nion-content .VERIFICATION-Container .scan-container .scan .top {\n  width: 100%;\n  height: 140px;\n  background-color: #F3F3F3;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 10px;\n}\n\nion-content .VERIFICATION-Container .scan-container .scan .top .captured-image {\n  height: 90px;\n  width: 90px;\n}\n\nion-content .VERIFICATION-Container .scan-container .scan .top .scan-label {\n  margin-top: 10px;\n  font-size: 12px;\n  color: #8a8989;\n}\n\nion-content .VERIFICATION-Container .scan-container .scan .scan-btn {\n  color: #004C97;\n  font-size: 14px;\n}\n\nion-content ::ng-deep .mat-form-field-appearance-outline.mat-form-field-disabled,\nion-content ::ng-deep .mat-form-field-outline {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt5Yy1icmFuY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUE5QkY7O0FBbUNFO0VBckRBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBSUEsK0NBQUE7RUFJQSxtQkFBQTtFQStDRSxZQUFBO0FBOUJKOztBQStCSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQTdCTjs7QUFnQ0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUE5Qk47O0FBZ0NNO0VBQ0UsaUJBQUE7QUE5QlI7O0FBc0NFO0VBQ0UsWUFBQTtFQXpFRiwrQ0FBQTtFQUlBLG1CQUFBO0VBd0VFLGFBQUE7QUFwQ0o7O0FBc0NJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFwQ047O0FBc0NNO0VBQ0UsWUFBQTtBQXBDUjs7QUFzQ1E7RUEzRk4sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUEyRlEsOEJBQUE7RUFDQSxtQkFBQTtBQWxDVjs7QUFvQ1U7RUExRlIsK0NBQUE7RUFJQSxtQkFBQTtFQXlGVSx1QkFBQTtFQUNBLGNBQUE7QUFsQ1o7O0FBc0NRO0VBeEdOLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBd0dRLDZCQUFBO0VBQ0EsV0FBQTtBQWxDVjs7QUFvQ1U7RUFDRSxVQUFBO0VBeEdWLCtDQUFBO0VBMEdVLG1CQUFBO0FBbENaOztBQW9DWTtFQUNFLGNBQUE7QUFsQ2Q7O0FBcUNZO0VBQ0UsY0FBQTtBQW5DZDs7QUF5Q1U7RUFDRSxpQkFBQTtBQXZDWjs7QUF5Q1k7RUFoSVYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEwRkY7O0FBMkNNO0VBdklKLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBdUlNLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdkNSOztBQXlDUTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXZDVjs7QUEwQ1k7RUFDRSxtREFBQTtBQXhDZDs7QUEyQ2M7RUExSlosYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFrSEY7O0FBeUNnQjtFQUNFLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLHNGQUFBO0VBS0EsbUJBQUE7QUEzQ2xCOztBQThDZ0I7RUExSmQsMEJBQUE7RUFDQSwyRUFBQTtBQStHRjs7QUFrRFE7RUFoTE4sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFpSUY7O0FBaURRO0VBcExOLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBcUxRLHNCQUFBO0FBOUNWOztBQWlEUTtFQTFMTixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQTBMUSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTdDVjs7QUErQ1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBekxWLG1CQUFBO0VBMkxVLGdCQUFBO0FBN0NaOztBQWdEVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQWxNVixtQkFBQTtFQW9NVSxrQkFBQTtBQTlDWjs7QUFrRFE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBM01SLG1CQUFBO0VBNk1RLGdCQUFBO0VBdk5SLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBd0tGOztBQWlEUTtFQTNOTixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQTJOUSxnQkFBQTtFQUNBLFdBQUE7QUE3Q1Y7O0FBZ0RRO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0FBOUNWOztBQW1ERTtFQUNFLFlBQUE7QUFqREo7O0FBdURNO0VBQ0UsYUFBQTtFQTFPTiwrQ0FBQTtFQU5BLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBaVBNLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQW5EUjs7QUFxRFE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUE3UFIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUE2UFEsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFqRFY7O0FBbURVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFqRFo7O0FBbURVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWpEWjs7QUFvRFE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWxEVjs7QUEyREU7O0VBRUUsVUFBQTtBQXpESiIsImZpbGUiOiJreWMtYnJhbmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFsbCB2YXJpYWJsZXMgYW5kIHJlLXVzYWJsZSBjb21wb25lbnRzIGRlZmluZWQgaGVyZS4uLlxyXG5cclxuJE1CLWlucHV0LWZpZWxkOiAxNXB4O1xyXG4kaW5wdXQtZmllbGQtYmctY29sb3I6ICNmY2ZjZmM7XHJcbiRpbnB1dC1maWVsZC10ZXh0LWNvbG9yOiAjNTQ1NDU0O1xyXG5cclxuQG1peGluIGFsaWdubWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBidG4tZ3JhZGllbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYig1LCAyNiwgNDUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkxZGVnLFxyXG4gICAgcmdiYSg1LCAyNiwgNDUsIDEpIDAlLFxyXG4gICAgcmdiYSgwLCA3NiwgMTUxLCAxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLy9zdHlsaW5nIGNvZGUgZ29lcyBoZXJlLi4uXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgLS1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC0tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC0tY29sb3I6ICMwMDRjOTc7XHJcbiAgLS13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5uZXh0IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uY2FuY2VsIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tY29sb3I6ICNiMjAwMDA7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLy8gc2VnbWVudCBzdHlsaW5nXHJcbiAgaW9uLXNlZ21lbnQge1xyXG4gICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgQGluY2x1ZGUgc2hhZG93O1xyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Q2ZGJlYTtcclxuICAgICAgY29sb3I6ICMwMDQzODU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgY29sb3I6ICM4YTg5ODk7XHJcbiAgICAgIGhlaWdodDogMjIuNnB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHggNHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBET0NVTUVOVCBUYWIgc3R5bGluZyBzdGFydHMgaGVyZS4uLlxyXG5cclxuICAuRE9DLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBAaW5jbHVkZSBzaGFkb3c7XHJcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAuY2FyZENvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAudG9wLWNvbnQge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2IyMDAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dC1maWVsZHMge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNoYWRvdztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICAgICAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM4YTg5ODk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGE4OTg5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuRE9DLWJveCB7XHJcbiAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgLmluc2lkZS1jb250IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDBweCA2cHggNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcblxyXG4gICAgICAgICAgbmctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLmNhcmQxIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIC8vIGhlaWdodDogMTQwcHg7XHJcblxyXG4gICAgICAgICAgICAgIC5idG5zIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2Nhbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDUsIDI2LCA0NSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIDkxZGVnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJnYmEoNSwgMjYsIDQ1LCAxKSAwJSxcclxuICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDc2LCAxNTEsIDEpIDEwMCVcclxuICAgICAgICAgICAgICAgICAgKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xyXG4gICAgICAgICAgICAgICAgICBAaW5jbHVkZSBidG4tZ3JhZGllbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2stbGFiZWwge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG5cclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1idG5zIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuXHJcbiAgICAgICAgICBpb24tYnV0dG9uLm5leHQge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCwgIzAwNGM5Nyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW9uLWJ1dHRvbi5iYWNrIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjYzIwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXBsdXMge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBAaW5jbHVkZSBhbGlnbm1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkLWRlbC1idG4ge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc3VjY3NzLWJ0bntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gIC8vIHZlcmlmaWNhdGlvbiB0YWIgc3R5bGluZyBnb2VzIGhlcmUuLi5cclxuICAuVkVSSUZJQ0FUSU9OLUNvbnRhaW5lcntcclxuICAgIC5zY2FuLWNvbnRhaW5lcntcclxuICAgICAgLnNjYW57XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XHJcbiAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgIC50b3B7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAgIC5jYXB0dXJlZC1pbWFnZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zY2FuLWxhYmVse1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOGE4OTg5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Nhbi1idG57XHJcbiAgICAgICAgICBjb2xvcjogIzAwNEM5NztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyAqKiogVG8gcmVtb3ZlIHRoZSBvdXRsaW5lIGZyb20gdGhlIGlucHV0IGZpZWxkIG9mIG1hdC1mb3JtLWZpZWxkICoqKlxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCxcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 11818:
/*!*********************************************************************!*\
  !*** ./src/app/pages/v2/kyc-branch/kyc-branch.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          style=\"color: #004c97\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-text>KYC Screening | Branch Screening</ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <!-- segment containing three sections -->\r\n  <ion-segment [(ngModel)]=\"selectedTab\">\r\n    <ion-segment-button value=\"BASIC-INFO\">\r\n      <ion-label>Basic Information</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"DOCUMENTS\" [disabled]=\"documentButtonDisabled\">\r\n      <ion-label>Documents</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"VERIFICATION\" [disabled]=\"verificationButtonDisabled\">\r\n      <ion-label>Verification</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- ***BASIC INFORMATION***  -->\r\n  <!-- Displays when Basic Information tab is selected -->\r\n\r\n    <app-basic-info *ngIf=\"selectedTab === 'BASIC-INFO'\" [defaultValues]=\"basicInfoData\" (emitData)=\"getBasicInfo($event)\" screenType=\"branch\"></app-basic-info>\r\n\r\n  <!-- *** DOCUMENTS *** -->\r\n  <!-- This section is displayed when Document Tab is selected... -->\r\n  <ion-grid class=\"DOC-container my-3\" *ngIf=\"selectedTab === 'DOCUMENTS'\">\r\n    <form\r\n      *ngIf=\"documentUploadForm\"\r\n      [formGroup]=\"documentUploadForm\"\r\n    >\r\n      <ion-row\r\n        class=\"cardContainer\"\r\n        formArrayName=\"documents\"\r\n        *ngFor=\"let document of documents().controls; let documentIndex = index\"\r\n      >\r\n        <div class=\"card\" [formGroup]=\"document\">\r\n          <div class=\"top-cont my-2\">\r\n            <span class=\"card-title\">\r\n              {{ documentIndex == 0 ? \"Primary Document\" : \"Document -\" +\r\n              documentIndex }}\r\n            </span>\r\n            <button\r\n              mat-raised-button\r\n              type=\"button\"\r\n              color=\"light\"\r\n              class=\"danger\"\r\n              [disabled]=\"documentIndex == 0\"\r\n              [style]=\"documentIndex == 0 ? 'visibility: hidden;':'visibility: visible;'\"\r\n              (click)=\"removeDocumentItem(documentIndex)\"\r\n            >\r\n              Delete\r\n            </button>\r\n          </div>\r\n\r\n          <!--  -->\r\n          <div class=\"input-fields my-2\" style=\"display: flex; flex-wrap: wrap; align-items: flex-start; margin-top: 10px;\">\r\n\r\n            <mat-form-field\r\n              class=\"full-width\"\r\n              appearance=\"outline\"\r\n              class=\"input-field-cont\"\r\n            >\r\n              <mat-label>Document Name</mat-label>\r\n              <mat-select formControlName=\"documentName\">\r\n                <mat-option *ngFor=\"let document of documentArr\" [value]=\"document\">{{ document}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field\r\n              class=\"full-width\"\r\n              appearance=\"outline\"\r\n              class=\"input-field-cont\"\r\n            >\r\n              <mat-label>Document Number </mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                class=\"alignment\"\r\n                formControlName=\"documentNumber\"\r\n                alphaNumeric\r\n                maxlength=\"20\"\r\n              />\r\n            </mat-form-field>\r\n\r\n            <mat-form-field  class=\"full-width\"\r\n            appearance=\"outline\" style=\"margin-top: 18px; flex: 1;\"\r\n            class=\"input-field-cont\" *ngIf=\"document.get('documentName').value == 'Aadhar card'\">\r\n              <mat-label>Verified Mobile Number</mat-label>\r\n                <input\r\n                  matInput\r\n                  formControlName=\"phoneNumber\"\r\n                  numbersOnly\r\n                  maxlength=\"10\"\r\n                />\r\n            </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <!--  -->\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            formArrayName=\"pages\"\r\n            fxLayoutGap=\"10px\"\r\n            class=\"DOC-box\"\r\n          >\r\n            <div\r\n              class=\"inside-cont\"\r\n              *ngFor=\"\r\n              let page of documentPages(documentIndex).controls;\r\n              let pageIndex = index\r\n            \"\r\n            >\r\n              <ng-container [formGroupName]=\"pageIndex\">\r\n                <div class=\"card1\">\r\n                  <div class=\"document-wrapper\">\r\n                    <div class=\"flex row\">\r\n                      <div class=\"col-6\">\r\n                        <ng-container *ngIf=\"page.get('fileUrl')?.value != ''\" >\r\n                          <img src=\"assets/images/document/tick.svg\" />\r\n                        </ng-container>\r\n                        <!--  -->\r\n\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <ng-container *ngIf=\"(page.get('fileUrl')?.value != '') ||(page.get('documentTitle').value == 'Other') \">\r\n                          <img src=\"assets/images/document/delete.svg\"  (click)=\"removeDocumentPage(documentIndex,pageIndex)\" style=\"margin-left: 40px;\"/>\r\n                        </ng-container>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <input\r\n                      type=\"file\"\r\n                      [hidden]=\"true\"\r\n                      #fileSelect\r\n                      (change)=\"onFileSelect($event,page.get('documentTitle')?.value, documentIndex, pageIndex ,document.controls.documentName.value)\"\r\n\r\n                    />\r\n                    <div\r\n                      fxLayout=\"column\"\r\n                      fxLayoutAlign=\"center center\"\r\n                      fxLayoutGap=\"4px\"\r\n                      class=\"back-label\"\r\n                      (click)=\"fileSelect.click()\"\r\n                    >\r\n                      <div class=\"document-image mt-4\">\r\n                        <img\r\n                          style=\"height: 70px;\"\r\n                          [src]=\"\r\n                          page.get('fileUrl')?.value != ''\r\n                          ? page.get('fileUrl')?.value\r\n                            : 'assets/images/document/upload-icon.svg'\r\n                        \"\r\n                        />\r\n                      </div>\r\n                      <span style=\"color: #051a2d83; margin-top: 9px;\"\r\n                        >{{document.get('documentName').value + \" \" + page.get(\"documentTitle\")?.value }}</span\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    class=\"document-footer mt-12\"\r\n                    *ngIf=\"page.get('isUploaded')?.value\"\r\n                  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6\">\r\n                        <ion-button shape=\"round\" class=\"next\"\r\n                          >Scan\r\n                        </ion-button>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <ion-button shape=\"round\" class=\"back\"\r\n                          >Upload</ion-button\r\n                        >\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"card-plus text-center\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <button\r\n                    mat-icon-button\r\n                    (click)=\"addDocumentPage(documentIndex)\"\r\n                  >\r\n                    <mat-icon class=\"icon\">add</mat-icon>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <button\r\n                    mat-button\r\n                    (click)=\"addDocumentPage(documentIndex)\"\r\n\r\n                  >\r\n                    Add Other Page\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!--  -->\r\n          <div\r\n            class=\"add-del-btn\"\r\n            style=\"\r\n              margin-top: 25px;\r\n              display: flex;\r\n              justify-content: space-between;\r\n              width: 100%;\r\n              border-radius: 15px;\r\n            \"\r\n          >\r\n            <button\r\n              mat-raised-button\r\n              type=\"button\"\r\n              (click)=\"addDocumentItem()\"\r\n              style=\"\r\n                text-decoration: underline;\r\n                background: transparent;\r\n                width: 100%;\r\n                border-radius: 15px;\r\n                color: #004c97;\r\n              \"\r\n            >\r\n              Add Document\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <hr class=\"line\" />\r\n      </ion-row>\r\n\r\n      <div class=\"row h-50 my-4\">\r\n        <div class=\"col-6\">\r\n          <ion-button\r\n            shape=\"round\"\r\n            class=\"back\"\r\n            (click)=\"goToPrevious('BASIC-INFO')\"\r\n          >\r\n            Back\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <ion-button\r\n            shape=\"round\"\r\n            class=\"next float-right\"\r\n            (click)=\"goToNextTab('DOCUMENTS')\"\r\n            [disabled]=\"documentUploadForm.invalid\"\r\n          >\r\n            Next\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ion-grid>\r\n\r\n  <ion-grid class= \"VERIFICATION-Container my-3\" *ngIf=\"selectedTab === 'VERIFICATION'\">\r\n\r\n    <div class=\"scan-container\">\r\n      <div class=\"scan\">\r\n        <div class=\"top\" >\r\n\r\n          <div class=\"flex row\">\r\n            <div class=\"col-6\">\r\n              <ng-container *ngIf=\"fingerPrintVerified\" >\r\n                <ion-icon src=\"assets/images/document/tick.svg\" style=\"margin-right: 150px;\"></ion-icon>\r\n              </ng-container>\r\n              <!--  -->\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <ng-container *ngIf=\"fingerPrintVerified\">\r\n                <ion-icon src=\"assets/images/document/delete.svg\" (click)=\"fingerPrintVerified = false\" style=\"margin-left: 140px;\"></ion-icon>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n\r\n          <ion-icon [src]=\"fingerScanIcon\" style=\"height: 80px; width: 80px;\"></ion-icon>\r\n          <p class=\"scan-label\">Fingerprint Scan</p>\r\n        </div>\r\n        <div class=\"scan-btn\" (click)=\"openVerificationDone()\">Scan</div>\r\n      </div>\r\n\r\n      <div class=\"scan\">\r\n        <div class=\"top\">\r\n          <div class=\"flex row\">\r\n            <div class=\"col-6\">\r\n              <ng-container *ngIf=\"irisImage\" >\r\n                <ion-icon src=\"assets/images/document/tick.svg\" style=\"margin-right: 150px;\"></ion-icon>\r\n              </ng-container>\r\n              <!--  -->\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <ng-container *ngIf=\"irisImage\">\r\n                <ion-icon src=\"assets/images/document/delete.svg\"  (click)=\"irisImage = null\" style=\"margin-left: 140px;\"></ion-icon>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n          <img [src]=\"irisImage ||irisScanIcon\" class=\"captured-image\"/>\r\n          <p class=\"scan-label\">Iris Scan</p>\r\n        </div>\r\n        <div class=\"scan-btn\" (click)=\"openCamera('IRIS')\">Scan</div>\r\n\r\n      </div>\r\n\r\n      <div class=\"scan\">\r\n        <div class=\"top\">\r\n          <div class=\"flex row\">\r\n            <div class=\"col-6\">\r\n              <ng-container *ngIf=\"faceImage\" >\r\n                <ion-icon src=\"assets/images/document/tick.svg\" style=\"margin-right: 150px;\"></ion-icon>\r\n              </ng-container>\r\n              <!--  -->\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <ng-container *ngIf=\"faceImage\">\r\n                <ion-icon src=\"assets/images/document/delete.svg\"  (click)=\"faceImage = null\" style=\"margin-left: 140px;\"></ion-icon>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n          <img [src]=\"faceImage || faceScanIcon\" class=\"captured-image\"/>\r\n          <p class=\"scan-label\">Face Scan</p>\r\n        </div>\r\n        <div class=\"scan-btn\" (click)=\"openCamera('FACE')\">Scan</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row h-50 my-4\">\r\n      <div class=\"col-6\">\r\n        <ion-button\r\n          shape=\"round\"\r\n          class=\"back\"\r\n          (click)=\"goToPrevious('DOCUMENTS')\"\r\n          >Back</ion-button\r\n        >\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next float-right\" (click)=\"submit()\" [disabled]=\"!faceImage && !irisImage && !fingerPrintVerified\"\r\n          >Submit</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_kyc-branch_kyc-branch_module_ts.js.map