"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_kyc-video_kyc-video_module_ts"],{

/***/ 69004:
/*!****************************************************************!*\
  !*** ./src/app/pages/v2/kyc-video/kyc-video-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycVideoPageRoutingModule": () => (/* binding */ KycVideoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _kyc_video_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-video.page */ 70052);




const routes = [
    {
        path: '',
        component: _kyc_video_page__WEBPACK_IMPORTED_MODULE_0__.KycVideoPage
    }
];
let KycVideoPageRoutingModule = class KycVideoPageRoutingModule {
};
KycVideoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KycVideoPageRoutingModule);



/***/ }),

/***/ 49056:
/*!********************************************************!*\
  !*** ./src/app/pages/v2/kyc-video/kyc-video.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycVideoPageModule": () => (/* binding */ KycVideoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _kyc_video_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-video-routing.module */ 69004);
/* harmony import */ var _kyc_video_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-video.page */ 70052);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);











let KycVideoPageModule = class KycVideoPageModule {
};
KycVideoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
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
            _kyc_video_routing_module__WEBPACK_IMPORTED_MODULE_0__.KycVideoPageRoutingModule
        ],
        declarations: [_kyc_video_page__WEBPACK_IMPORTED_MODULE_1__.KycVideoPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe]
    })
], KycVideoPageModule);



/***/ }),

/***/ 70052:
/*!******************************************************!*\
  !*** ./src/app/pages/v2/kyc-video/kyc-video.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycVideoPage": () => (/* binding */ KycVideoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _kyc_video_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-video.page.html?ngResource */ 98255);
/* harmony import */ var _kyc_video_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-video.page.scss?ngResource */ 74609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _kyc_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kyc-video.service */ 39562);
/* harmony import */ var src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/transaction-date/transaction-date.component */ 19693);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var _kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kyc-branch/kyc-branch.service */ 8813);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../token-v2/token-v2.page */ 68106);
/* harmony import */ var src_app_components_kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/kyc-modal/kyc-modal.component */ 56215);














let KycVideoPage = class KycVideoPage {
    constructor(fb, router, modalCtrl, _location, videoService, branchService, datePipe) {
        this.fb = fb;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this._location = _location;
        this.videoService = videoService;
        this.branchService = branchService;
        this.datePipe = datePipe;
        // svg icons links
        this.deleteIcon = 'assets/icon/delete.svg';
        this.editIcon = 'assets/icon/edit.svg';
        // selected value of segment tab
        this.selectedTab = 'BASIC-INFO';
        this.buttonDisabled = true;
        this.toggleArr = [
            {
                id: 1,
                checked: true,
                name: 'Auto',
            },
            {
                id: 2,
                checked: false,
                name: 'Manual',
            },
        ];
        this.scheduleButtonDisable = true;
    }
    ngOnInit() {
        this.createForm();
        this.buildScheduleForm();
        this.permanentAddress = this.fb.group({});
    }
    ionViewWillEnter() {
        this.openDialog();
    }
    createForm() {
        this.basicInfoForm = this.fb.group({
            customerId: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            middleName: [''],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            maritalStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            nationality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            residenceType: [''],
            primaryEmailAdress: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
                ],
            ],
            phoneNumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
            ],
            userAddress: this.fb.array([this.addAddressForm('Communication')]),
        });
    }
    get userAddresses() {
        return this.basicInfoForm.get('userAddress');
    }
    addAddressForm(addressType) {
        return this.fb.group({
            addressType: [addressType],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            residenceType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
    }
    onClick(evt) {
        if (evt.value == 'No') {
            this.userAddresses.push(this.addAddressForm('Permanent'));
        }
        else {
            this.userAddresses.removeAt(1);
        }
    }
    // form builder for schedule appointment
    buildScheduleForm() {
        this.scheduleForm = this.fb.group({
            scheduleDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            timeSlot: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
    }
    // time slots
    openTimeSlot() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_4__.TimeSlotsComponent,
                componentProps: {
                    date: this.scheduleForm.value.scheduleDate,
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                this.scheduleForm.get('timeSlot').setValue(res === null || res === void 0 ? void 0 : res.data.form);
                this.selectedData = res === null || res === void 0 ? void 0 : res.data.payload;
                console.log(this.scheduleForm);
            });
            return yield modal.present();
        });
    }
    getBasicInfo(event) {
        console.log('output from getBasicInfo() of kyc-video: ', event);
        if (event) {
            this.selectedTab = 'SCHEDULE';
            this.scheduleButtonDisable = false;
            this.basicInfoData = event;
            this.customerId = this.basicInfoData.customerId;
        }
    }
    goToNextTab(selectedTab) {
        console.log(selectedTab);
        let payload = {
            phoneNumber: this.basicInfoForm.value.phoneNumber,
            primaryEmailAdress: this.basicInfoForm.value.primaryEmailAdress,
        };
        this.videoService.fetchCustomerDetails(payload).subscribe((res) => {
            console.log(res);
            if (res) {
                this.saveCustomerData();
                this.selectedTab = 'SCHEDULE';
                this.scheduleButtonDisable = false;
            }
            else {
                this.selectedTab = 'SCHEDULE';
            }
        });
    }
    saveCustomerData() {
        let payload = this.basicInfoForm.value;
        payload.verificationType = 'KYC';
        console.log(payload);
        this.videoService.upsertCustomer(payload).subscribe((res) => {
            this.customerId = res.customerId;
            this.basicInfoForm.get('customerId').setValue(res.customerId);
        });
    }
    goToPrevious(selectedTab) {
        this.selectedTab = selectedTab;
    }
    backToDashboard() {
        this.router.navigate(['dashboard']);
    }
    goBack() {
        this._location.back();
    }
    finish() {
        console.log('called');
        this.icustCustVideoVerifyDto = this.basicInfoData;
        let date = this.scheduleForm.get('scheduleDate').value;
        let format = this.datePipe.transform(date, 'yyyy-MM-dd');
        this.icustCustVideoVerifyDto.scheduledDate = format;
        this.icustCustVideoVerifyDto.scheduledTime = this.selectedData;
        this.icustCustVideoVerifyDto.tellerId = 1;
        this.icustCustVideoVerifyDto.loggedInUser = 1;
        console.log(this.icustCustVideoVerifyDto);
        this.videoService
            .saveCustBasicInfoData(this.icustCustVideoVerifyDto)
            .subscribe((data) => {
            console.log(data);
            if (data) {
                this.branchService
                    .updateKycStatusByCustId(this.customerId, 'INITIATED', '')
                    .subscribe((res) => {
                    if (res) {
                        this.openScheduleModal(data);
                    }
                });
            }
        });
    }
    openScheduleModal(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_6__.TokenV2Page,
                componentProps: {
                    scheduleInfo: data,
                    screen: 'mobile-kyc',
                    screenType: 'video',
                    txntitle: 'KYC Video Verification',
                },
            });
            modal.onDidDismiss().then((res) => {
                this.router.navigate(['kyc']);
            });
            return yield modal.present();
        });
    }
    openDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_7__.KycModalComponent,
                componentProps: {
                    screen: 'video',
                },
            });
            modal.onDidDismiss().then((res) => {
                var _a;
                console.log('Getting Back Data', res);
                this.basicInfoData = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.customerData;
            });
            return yield modal.present();
        });
    }
    datePopup() {
        this.modalCtrl
            .create({
            component: src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_3__.TransactionDateComponent,
        })
            .then((modalResp) => {
            modalResp.present();
            modalResp.onDidDismiss().then((res) => {
                console.log(res, 'after dismiss');
                this.scheduleForm.get('scheduleDate').setValue(res === null || res === void 0 ? void 0 : res.data);
            });
        });
    }
};
KycVideoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _kyc_video_service__WEBPACK_IMPORTED_MODULE_2__.VideoService },
    { type: _kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_5__.BranchService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe }
];
KycVideoPage.propDecorators = {
    defaultValues: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
KycVideoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-kyc-video',
        template: _kyc_video_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [_kyc_video_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KycVideoPage);



/***/ }),

/***/ 39562:
/*!*********************************************************!*\
  !*** ./src/app/pages/v2/kyc-video/kyc-video.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "VideoService": () => (/* binding */ VideoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
let VideoService = class VideoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    fetchCustomerDetails(payload) {
        return this.httpClient.post(`${API_URL}/customerdata/phoneNoEmailIdExists`, payload);
    }
    upsertCustomer(data) {
        return this.httpClient.post(`${API_URL}/customerdata/upsertCustomerDetails`, data);
    }
    updateKyc(kycDetails) {
        return this.httpClient
            .post(`${API_URL}/customerdata/saveRekycOrAcceptInfo`, kycDetails);
    }
    saveCustBasicInfoData(icustCustVideoVerifyDto) {
        return this.httpClient.post(`${API_URL}/icust-video-verify/save`, icustCustVideoVerifyDto);
    }
};
VideoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
VideoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], VideoService);



/***/ }),

/***/ 74609:
/*!*******************************************************************!*\
  !*** ./src/app/pages/v2/kyc-video/kyc-video.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --display: flex !important;\n  --align-items: center;\n  --justify-content: space-between;\n  --color: #004c97;\n  --width: 100%;\n}\n\nion-content ion-segment {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  justify-content: space-between;\n  height: 56px;\n  padding: 5px;\n}\n\nion-content ion-segment .segment-button-checked {\n  background: #d6dbea;\n  color: #004385;\n}\n\nion-content ion-segment ion-segment-button {\n  color: #8a8989;\n  height: 22.6px;\n  padding: 1px 4px;\n  text-transform: capitalize;\n}\n\nion-content ion-segment ion-segment-button ion-label {\n  font-size: 12.5px;\n}\n\nion-content .SCHEDULE-container mat-form-field {\n  width: 100%;\n  height: 60px;\n  border-radius: 12px;\n  padding-bottom: 0;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  margin-bottom: 13px;\n  color: #8a8989;\n}\n\nion-content .SCHEDULE-container mat-form-field mat-label {\n  color: #8a8989;\n}\n\nion-content .SCHEDULE-container .calendar-icon {\n  margin-top: -15px;\n}\n\nion-content .SCHEDULE-container ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\nion-content .SCHEDULE-container ::ng-deep .mat-form-field-wrapper .mat-form-field-infix {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content ::ng-deep .mat-form-field-appearance-outline.mat-form-field-disabled,\nion-content ::ng-deep .mat-form-field-outline {\n  opacity: 0;\n}\n\nion-button.submit {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.timer-icon {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\nion-grid.grid-margin {\n  margin: 6px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt5Yy12aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBOUJGOztBQW1DRTtFQWxDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUlBLCtDQUFBO0VBSUEsbUJBQUE7RUE0QkUsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTlCSjs7QUFnQ0k7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUE5Qk47O0FBaUNJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBL0JOOztBQWlDTTtFQUNFLGlCQUFBO0FBL0JSOztBQXFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQTFESiwrQ0FBQTtFQTRESSxtQkFBQTtFQUNBLGNBQUE7QUFuQ047O0FBcUNNO0VBQ0UsY0FBQTtBQW5DUjs7QUFzQ0k7RUFDRSxpQkFBQTtBQXBDTjs7QUF3Q007RUFDRSxpQkFBQTtBQXRDUjs7QUF3Q1E7RUFqRk4sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE0Q0Y7O0FBOENFOztFQUVFLFVBQUE7QUE1Q0o7O0FBZ0RBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0FBN0NGOztBQWdEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQTdDRjs7QUErQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBNUNGOztBQThDQTtFQUNFLHNCQUFBO0FBM0NGIiwiZmlsZSI6Imt5Yy12aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbGwgdmFyaWFibGVzIGFuZCByZS11c2FibGUgY29tcG9uZW50cyBkZWZpbmVkIGhlcmUuLi5cclxuXHJcbiRNQi1pbnB1dC1maWVsZDogMTVweDtcclxuJGlucHV0LWZpZWxkLWJnLWNvbG9yOiAjZmNmY2ZjO1xyXG4kaW5wdXQtZmllbGQtdGV4dC1jb2xvcjogIzU0NTQ1NDtcclxuXHJcbkBtaXhpbiBhbGlnbm1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5AbWl4aW4gYnRuLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNSwgMjYsIDQ1KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MWRlZyxcclxuICAgIHJnYmEoNSwgMjYsIDQ1LCAxKSAwJSxcclxuICAgIHJnYmEoMCwgNzYsIDE1MSwgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbi8vc3R5bGluZyBjb2RlIGdvZXMgaGVyZS4uLlxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIC0tYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtLWNvbG9yOiAjMDA0Yzk3O1xyXG4gIC0td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAvLyBzZWdtZW50IHN0eWxpbmdcclxuICBpb24tc2VnbWVudCB7XHJcbiAgICBAaW5jbHVkZSBhbGlnbm1lbnQ7XHJcbiAgICBAaW5jbHVkZSBzaGFkb3c7XHJcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Q2ZGJlYTtcclxuICAgICAgY29sb3I6ICMwMDQzODU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgY29sb3I6ICM4YTg5ODk7XHJcbiAgICAgIGhlaWdodDogMjIuNnB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHggNHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5TQ0hFRFVMRS1jb250YWluZXIge1xyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgQGluY2x1ZGUgc2hhZG93O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzhhODk4OTtcclxuXHJcbiAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM4YTg5ODk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYWxlbmRhci1pY29uIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9cclxuXHJcbiAgLy8gKioqIFRvIHJlbW92ZSB0aGUgb3V0bGluZSBmcm9tIHRoZSBpbnB1dCBmaWVsZCBvZiBtYXQtZm9ybS1maWVsZCAqKipcclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQsXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uLnN1Ym1pdCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCwgIzAwNGM5Nyk7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5iYWNrIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbWVyLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmlvbi1ncmlkLmdyaWQtbWFyZ2luIHtcclxuICBtYXJnaW46IDZweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 98255:
/*!*******************************************************************!*\
  !*** ./src/app/pages/v2/kyc-video/kyc-video.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          style=\"color: #004c97\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-text>KYC Screening | Video Verification</ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <!-- segment containing three sections -->\r\n  <ion-segment [(ngModel)]=\"selectedTab\">\r\n    <ion-segment-button value=\"BASIC-INFO\">\r\n      <ion-label>Basic Information</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"SCHEDULE\" [disabled]=\"scheduleButtonDisable\">\r\n      <ion-label>Schedule Appointment</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- ***BASIC INFORMATION***  -->\r\n  <!-- Displays when Basic Information tab is selected -->\r\n  <app-basic-info\r\n    *ngIf=\"selectedTab === 'BASIC-INFO'\"\r\n    [defaultValues]=\"basicInfoData\"\r\n    screenType =\"video\"\r\n    (emitData)=\"getBasicInfo($event)\"\r\n  ></app-basic-info>\r\n\r\n  <!-- *** Schedule Appointment *** -->\r\n  <!-- This section is displayed when Schedule Appointment Tab is selected... -->\r\n  <ion-grid\r\n    class=\"SCHEDULE-container grid-margin\"\r\n    *ngIf=\"selectedTab === 'SCHEDULE' && scheduleForm\"\r\n    [formGroup]=\"scheduleForm\"\r\n  >\r\n    <mat-form-field\r\n      class=\"full-width\"\r\n      appearance=\"outline\"\r\n      class=\"input-field-cont\"\r\n    >\r\n      <mat-label>Select a date</mat-label>\r\n      <input matInput formControlName=\"scheduleDate\" readonly />\r\n      <span matSuffix>\r\n        <mat-datepicker-toggle>\r\n          <img\r\n            src=\"assets/icon/calendar.svg\"\r\n            matDatepickerToggleIcon\r\n            class=\"calendar-icon\"\r\n            (click)=\"datePopup()\"\r\n          />\r\n        </mat-datepicker-toggle>\r\n      </span>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field\r\n      class=\"full-width\"\r\n      appearance=\"outline\"\r\n      class=\"input-field-cont\"\r\n    >\r\n      <mat-label>Time Slot</mat-label>\r\n      <input\r\n        type=\"text\"\r\n        matInput\r\n        class=\"alignment\"\r\n        formControlName=\"timeSlot\"\r\n      />\r\n      <span matSuffix (click)=\"openTimeSlot()\"\r\n        ><img src=\"assets/icon/timer.svg\" alt=\"\" class=\"timer-icon\"\r\n      /></span>\r\n    </mat-form-field>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"selectedTab == 'SCHEDULE'\">\r\n  <ion-toolbar style=\"background: transparent !important\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button\r\n          shape=\"round\"\r\n          class=\"back\"\r\n          (click)=\"goToPrevious('BASIC-INFO')\"\r\n          >Back</ion-button\r\n        >\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button\r\n          shape=\"round\"\r\n          class=\"submit\"\r\n          [disabled]=\"scheduleForm.invalid\"\r\n          (click)=\"finish()\"\r\n        >\r\n          Finish\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_kyc-video_kyc-video_module_ts.js.map