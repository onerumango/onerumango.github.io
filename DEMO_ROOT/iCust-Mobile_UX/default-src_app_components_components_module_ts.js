"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 44421:
/*!*****************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccountComponent": () => (/* binding */ AddAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-account.component.html?ngResource */ 93915);
/* harmony import */ var _add_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-account.component.scss?ngResource */ 64034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);









let AddAccountComponent = class AddAccountComponent {
    constructor(modalCtr, formBuilder, apiService, shareDataService, toastService) {
        this.modalCtr = modalCtr;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.shareDataService = shareDataService;
        this.toastService = toastService;
        this.account_option = ['Internal', 'Other Bank'];
        this.selectedItem = "Internal";
        this.isSubmitted = false;
    }
    ngOnInit() {
        var _a;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.buildForm();
        (_a = this.accountForm.get('transferType')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(val => {
            var _a;
            if (val === 'Internal') {
                (_a = this.accountForm.get('bankCode')) === null || _a === void 0 ? void 0 : _a.patchValue("");
                this.accountForm.get('bankCode').clearValidators(); // 6. Clear All Validators
                this.accountForm.get('bankCode').updateValueAndValidity();
            }
            else {
                this.accountForm.get('bankCode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]); // Set Required Validator
                this.accountForm.get('bankCode').updateValueAndValidity();
            }
        });
    }
    buildForm() {
        var _a, _b, _c;
        this.accountForm = this.formBuilder.group({
            customerId: [(_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            transferType: [this.selectedItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            accountCurrency: [(_c = (_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.currencyCode) !== null && _c !== void 0 ? _c : 'INR', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            customerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            bankCode: [''],
            customerNickName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    get errorControl() {
        return this.accountForm.controls;
    }
    submit() {
        this.isSubmitted = true;
        if (!this.accountForm.valid) {
            return false;
        }
        else {
            console.log(this.accountForm.value);
            this.apiService.addNewAccountToDisburse(this.accountForm.value).subscribe(res => {
                console.log(res);
                if (res.status == 200) {
                    this.close();
                    this.toastService.showToast(res === null || res === void 0 ? void 0 : res.message);
                }
                else {
                    this.toastService.showToast(res === null || res === void 0 ? void 0 : res.message);
                }
            }, (err) => {
                this.toastService.showToast(err);
            });
        }
    }
    close() {
        this.modalCtr.dismiss(null);
    }
};
AddAccountComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
AddAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-account',
        template: _add_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddAccountComponent);



/***/ }),

/***/ 82628:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/appointment-schedule-modal/appointment-schedule-modal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentScheduleModalComponent": () => (/* binding */ AppointmentScheduleModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appointment_schedule_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-schedule-modal.component.html?ngResource */ 6426);
/* harmony import */ var _appointment_schedule_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment-schedule-modal.component.scss?ngResource */ 85710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let AppointmentScheduleModalComponent = class AppointmentScheduleModalComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
AppointmentScheduleModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AppointmentScheduleModalComponent.propDecorators = {
    scheduleInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AppointmentScheduleModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-appointment-schedule-modal',
        template: _appointment_schedule_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appointment_schedule_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppointmentScheduleModalComponent);



/***/ }),

/***/ 77964:
/*!*******************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarPhotoComponent": () => (/* binding */ AvatarPhotoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _avatar_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-photo.component.html?ngResource */ 2178);
/* harmony import */ var _avatar_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar-photo.component.scss?ngResource */ 63614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AvatarPhotoComponent = class AvatarPhotoComponent {
    constructor() {
        this.showInitials = false;
        this.colors = [
            '#24CCA7',
            '#24CCA7',
            '#24CCA7',
            '#24CCA7',
        ];
    }
    ngOnInit() {
        if (!this.photoUrl) {
            this.showInitials = true;
            this.createInititals();
            const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
            this.circleColor = this.colors[randomIndex];
        }
    }
    createInititals() {
        let names = this.name.split(' '), initials = names[0].substring(0, 1).toUpperCase();
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        this.initials = initials;
        console.log("this.name", this.name);
        console.log("this.initials", this.initials);
    }
};
AvatarPhotoComponent.propDecorators = {
    photoUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AvatarPhotoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-avatar-photo',
        template: _avatar_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_avatar_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AvatarPhotoComponent);



/***/ }),

/***/ 5816:
/*!***************************************************************!*\
  !*** ./src/app/components/basic-info/basic-info.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInfoComponent": () => (/* binding */ BasicInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-info.component.html?ngResource */ 96204);
/* harmony import */ var _basic_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info.component.scss?ngResource */ 77760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_pages_v2_kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/v2/kyc-branch/kyc-branch.service */ 8813);
/* harmony import */ var _duplication_duplication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../duplication/duplication.component */ 10473);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rekyc-popup/rekyc-popup.component */ 65573);
/* harmony import */ var _otp_verification_popup_otp_verification_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../otp-verification-popup/otp-verification-popup.component */ 6987);
/* harmony import */ var src_app_services_mock_service_city_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mock-service/city-service */ 74104);
/* harmony import */ var src_app_services_mock_service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mock-service/state-service */ 93580);
/* harmony import */ var src_app_services_mock_service_country_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/mock-service/country-service */ 97902);
/* harmony import */ var src_app_services_static_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/static-data-service */ 27804);
/* harmony import */ var src_app_components_kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/kyc-modal/kyc-modal.component */ 56215);
/* harmony import */ var _transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../transaction-date/transaction-date.component */ 19693);


















let BasicInfoComponent = class BasicInfoComponent {
    constructor(fb, _location, branchService, fetchCustomers, modalCtrl, cityService, stateService, countryService, staticDataService) {
        this.fb = fb;
        this._location = _location;
        this.branchService = branchService;
        this.fetchCustomers = fetchCustomers;
        this.modalCtrl = modalCtrl;
        this.cityService = cityService;
        this.stateService = stateService;
        this.countryService = countryService;
        this.staticDataService = staticDataService;
        this.emitData = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.deleteIcon = 'assets/icon/delete.svg';
        this.editIcon = 'assets/icon/edit.svg';
        this.emailVerified = false;
        this.mobileVerified = false;
        this.cityArr = [];
        this.countryArr = [];
        this.stateArr = [];
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
    }
    ngOnChanges(changes) {
        if (this.defaultValues && this.basicInfoForm) {
            this.basicInfoForm.patchValue(this.defaultValues);
        }
    }
    ngOnInit() {
        this.createForm();
        ;
        this.getPrefixData();
        this.getGenderData();
        this.getMaritalStatus();
        this.getNationalityData();
        this.getResidenceData();
        this.getCountry();
        this.getState();
        this.getCity();
    }
    autoManualToggle(event) {
        console.log(event);
        if (event == 'Manual') {
            this.openKycModal(false);
        }
        else {
            this.openKycModal(true);
        }
    }
    openKycModal(isAutoSelected) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_components_kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_11__.KycModalComponent,
                componentProps: {
                    isAutoSelected: isAutoSelected
                }
            });
            return yield modal.present();
        });
    }
    createForm() {
        this.basicInfoForm = this.fb.group({
            userImg: [''],
            prefix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            customerId: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            middleName: [''],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            maritalStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            nationality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            primaryEmailAdress: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
                ],
            ],
            phoneNumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
            ],
            userAddress: this.fb.array([this.addAddressForm('Communication')]),
        });
        if (this.defaultValues) {
            this.basicInfoForm.patchValue(this.defaultValues);
        }
        this.basicInfoForm
            .get('primaryEmailAdress')
            .valueChanges.subscribe((res) => {
            if (res) {
                this.emailVerified = false;
            }
        });
        this.basicInfoForm.get('phoneNumber').valueChanges.subscribe((res) => {
            if (res) {
                this.mobileVerified = false;
            }
        });
    }
    get userAddresses() {
        return this.basicInfoForm.get('userAddress');
    }
    addAddressForm(addressType) {
        return this.fb.group({
            addressType: [addressType],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            address2: [''],
            residenceType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
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
    goBack() {
        this._location.back();
    }
    saveCustomerData() {
        let payload = Object.assign({}, this.basicInfoForm.value);
        payload.verificationType = 'KYC';
        delete payload.dateOfBirth;
        console.log(payload);
        this.branchService.upsertCustomer(payload).subscribe((res) => {
            if (res && res.kycReference) {
                localStorage.setItem('kycRef', res.kycReference);
                this.emitData.emit(res);
            }
        });
    }
    fetchDataUsingCIF(value) {
        this.fetchCustomers.getCustomerInfo(value).subscribe(res => {
            console.log(res === null || res === void 0 ? void 0 : res.customerInfoList[0]);
            this.customerData = res === null || res === void 0 ? void 0 : res.customerInfoList[0];
            this.basicInfoForm.patchValue(this.customerData);
        });
    }
    fetchStateAndCity(zip, index) {
        const formCtrl = this.userAddresses.at(index);
        if (!formCtrl.get('country').value) {
            return;
        }
        this.branchService.fetchStateCityByZipcode(formCtrl.get('country').value, zip).subscribe((res) => {
            formCtrl.get('state').setValue(res === null || res === void 0 ? void 0 : res.stateName);
            formCtrl.get('city').setValue(res === null || res === void 0 ? void 0 : res.cityName);
        });
    }
    datePopup() {
        this.modalCtrl
            .create({
            component: _transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_12__.TransactionDateComponent,
            componentProps: {
                screenType: 'basicInfo'
            }
        })
            .then((modalResp) => {
            modalResp.present();
            modalResp.onDidDismiss().then((res) => {
                console.log(res, 'after dismiss');
                this.basicInfoForm.get('dateOfBirth').setValue(res === null || res === void 0 ? void 0 : res.data);
            });
        });
    }
    openSuccessDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_5__.RekycPopupComponent,
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                this.saveCustomerData();
            });
            return yield modal.present();
        });
    }
    openDuplicationDiaglogue(customerData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _duplication_duplication_component__WEBPACK_IMPORTED_MODULE_4__.DuplicationComponent,
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
    goToNextTab(selectedTab) {
        console.log(selectedTab);
        if (selectedTab === 'BASIC-INFO' && !localStorage.getItem('kycRef')) {
            let payload = {
                phoneNumber: this.basicInfoForm.value.phoneNumber,
                primaryEmailAdress: this.basicInfoForm.value.primaryEmailAdress,
            };
            this.branchService.fetchCustomerDetails(payload).subscribe((res) => {
                var _a, _b;
                console.log(res);
                if (res.data != null && (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.emailPresent) == true || ((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.phoneNumberPresent) == true)) {
                    this.openDuplicationDiaglogue(res.data);
                }
                else {
                    this.saveCustomerData();
                }
            });
        }
        else {
            this.saveCustomerData();
        }
    }
    openOtpModal(source_key, source_value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _otp_verification_popup_otp_verification_popup_component__WEBPACK_IMPORTED_MODULE_6__.OtpVerificationPopup,
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
    getPrefixData() {
        this.staticDataService.prefixData().subscribe(res => this.prefixArr = res);
    }
    getGenderData() {
        this.staticDataService.genderData().subscribe(res => {
            this.genderArr = res;
        });
    }
    getMaritalStatus() {
        this.staticDataService.maritalStatusData().subscribe(res => this.maritalStatusArr = res);
    }
    getNationalityData() {
        this.staticDataService.nationalityData().subscribe(res => this.nationalityArr = res);
    }
    getResidenceData() {
        this.staticDataService.residenceData().subscribe(res => this.residenceTypeArr = res);
    }
    getCity() {
        this.cityService.loadCity().subscribe(res => {
            this.cityArr = res;
        });
    }
    getState() {
        this.stateService.loadState().subscribe(res => {
            this.stateArr = res;
        });
    }
    getCountry() {
        this.countryService.loadCountry().subscribe(res => {
            this.countryArr = res;
        });
    }
    onFileSelected(e) {
        const file = e.target.files[0];
        const fReader = new FileReader();
        fReader.readAsDataURL(file);
        fReader.onloadend = (_event) => {
            let filename = file.name;
            let base64File = _event.target.result;
            this.basicInfoForm.get('userImg').patchValue(base64File);
        };
    }
};
BasicInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.Location },
    { type: src_app_pages_v2_kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_3__.BranchService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: src_app_services_mock_service_city_service__WEBPACK_IMPORTED_MODULE_7__.CityService },
    { type: src_app_services_mock_service_state_service__WEBPACK_IMPORTED_MODULE_8__.StateService },
    { type: src_app_services_mock_service_country_service__WEBPACK_IMPORTED_MODULE_9__.CountryService },
    { type: src_app_services_static_data_service__WEBPACK_IMPORTED_MODULE_10__.StaticDataService }
];
BasicInfoComponent.propDecorators = {
    emitData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output }],
    defaultValues: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    screenType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
BasicInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-basic-info',
        template: _basic_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_basic_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BasicInfoComponent);



/***/ }),

/***/ 6156:
/*!*******************************************************!*\
  !*** ./src/app/components/branch/branch.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchComponent": () => (/* binding */ BranchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _branch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch.component.html?ngResource */ 82598);
/* harmony import */ var _branch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch.component.scss?ngResource */ 47092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.component */ 51006);







let BranchComponent = class BranchComponent {
    constructor(apiService, modalController) {
        this.apiService = apiService;
        this.modalController = modalController;
        this.branchData = [];
        this.branchDataFiltered = [];
        this.typesMap = {};
        this.typesList = [];
        this.typesSelectOptions = [];
        this.markers = [];
        this.infoWindows = [];
    }
    ngOnInit() {
        this.getBankBranches();
        this.branchFlag = localStorage.getItem('BranchFlag');
        this.accBranch = localStorage.getItem('AccBranch');
        console.log(this.branchFlag);
    }
    getBankBranches() {
        this.apiService.getBranchByCity("Bangalore")
            .subscribe((data) => {
            this.branchData = data;
            this.branchDataFiltered = this.branchData;
            console.log('filtered-> ', this.branchDataFiltered);
            console.log(this.branchData);
            for (let i = 0; i <= this.branchData.length; i++) {
                this.apiService.getNumberOfCrowd(this.branchData[i].branchName)
                    .subscribe((data) => {
                    console.log(this.branchData[i].branchName);
                    this.branchData[i].tokenCount = data.tokenCount;
                    console.log(this.branchData);
                }, (err) => {
                    console.log("error coming alert");
                    this.branchData[i].tokenCount = 0;
                });
            }
            if (this.branchFlag == 'false') {
                console.log("ifff");
                data.forEach((element, index) => {
                    if (data[index].branchName == this.accBranch)
                        data.splice(index, 1);
                });
                console.log(this.branchData);
            }
            this.branchDataFiltered = this.branchData;
            console.log('original->', this.branchData);
            console.log('filtered-> ', this.branchDataFiltered);
        });
    }
    filterBranch(event) {
        if (!!event.target.value) {
            this.branchDataFiltered = this.branchData.filter(branch => branch.branchName.toLowerCase().startsWith(event.target.value.toLowerCase()));
        }
        else {
            this.branchDataFiltered = this.branchData;
        }
    }
    presentMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent,
                cssClass: 'my-custom-class',
                id: "mapModal",
                swipeToClose: true,
                presentingElement: yield this.modalController.getTop()
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log("Data", data);
            if (data) {
                this.dismiss(data);
            }
        });
    }
    dismiss(location) {
        console.log(location);
        localStorage.setItem("location", location);
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'data': location
        }, "", "branchModal");
    }
    close() {
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.selectedLocation = null;
    }
};
BranchComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
BranchComponent.propDecorators = {
    gmap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['mapContainer', { static: false },] }]
};
BranchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-branch',
        template: _branch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_branch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BranchComponent);



/***/ }),

/***/ 85652:
/*!*********************************************************************!*\
  !*** ./src/app/components/capture-image/capture-image.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureImageComponent": () => (/* binding */ CaptureImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _capture_image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture-image.component.html?ngResource */ 77138);
/* harmony import */ var _capture_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture-image.component.scss?ngResource */ 96394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ 99788);







let CaptureImageComponent = class CaptureImageComponent {
    constructor(modalController, preview) {
        this.modalController = modalController;
        this.preview = preview;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.sysImage = '';
        this.img = '';
        this.isVisible = true;
        this.isDone = false;
    }
    ngOnInit() {
        this.startPreview();
    }
    captureImg(webcamImage) {
        this.webcamImage = webcamImage;
        this.sysImage = webcamImage.imageAsDataUrl;
        console.info('got webcam image', this.sysImage);
        this.isDone = true;
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
        this.preview.stopCamera();
        this.modalController.dismiss();
    }
    closeModal() {
        let data = this.img;
        this.modalController.dismiss(data);
    }
    startPreview() {
        if (window.confirm('Do you want to start camera?')) {
            const cameraPreviewOpts = {
                x: 5,
                y: 210,
                width: window.screen.width,
                height: window.screen.height / 3,
                camera: 'front',
                alpha: 1,
            };
            this.preview.startCamera(cameraPreviewOpts).then((res) => { }, (err) => {
                alert(JSON.stringify(err));
            });
        }
    }
    capturePreview() {
        if (window.confirm('Do you want to capture image?')) {
            const pictureOpts = {
                quality: 100,
            };
            // take a picture
            this.preview.takePicture(pictureOpts).then((imageData) => {
                this.isVisible = false;
                this.img = 'data:image/jpg;base64,' + imageData;
                this.preview.stopCamera();
            });
        }
    }
};
CaptureImageComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__.CameraPreview }
];
CaptureImageComponent.propDecorators = {
    screenData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CaptureImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-capture-image',
        template: _capture_image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_capture_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CaptureImageComponent);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 64662);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar-photo/avatar-photo.component */ 77964);
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch/branch.component */ 6156);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ 51006);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ 29055);
/* harmony import */ var _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-slots/time-slots.component */ 19023);
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./download/download.component */ 51022);
/* harmony import */ var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared-material.module */ 84390);
/* harmony import */ var _alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alert-internet/alert-internet.component */ 82014);
/* harmony import */ var _denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./denomination-slide/denomination-slide.component */ 9340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transaction-date/transaction-date.component */ 19693);
/* harmony import */ var _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-account/add-account.component */ 44421);
/* harmony import */ var _directives_directive_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/directive.module */ 27589);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kyc-modal/kyc-modal.component */ 56215);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _duplication_duplication_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./duplication/duplication.component */ 10473);
/* harmony import */ var _verification_done_verification_done_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./verification-done/verification-done.component */ 86848);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-webcam */ 19839);
/* harmony import */ var _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./capture-image/capture-image.component */ 85652);
/* harmony import */ var _otp_verification_popup_otp_verification_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./otp-verification-popup/otp-verification-popup.component */ 6987);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-otp-input */ 2981);
/* harmony import */ var _rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rekyc-popup/rekyc-popup.component */ 65573);
/* harmony import */ var _scan_doc_scan_doc_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scan-doc/scan-doc.component */ 15408);
/* harmony import */ var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./basic-info/basic-info.component */ 5816);
/* harmony import */ var ngx_document_scanner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-document-scanner */ 20890);
/* harmony import */ var _appointment_schedule_modal_appointment_schedule_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appointment-schedule-modal/appointment-schedule-modal.component */ 82628);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angularx-qrcode */ 30165);
/* harmony import */ var _fingerprint_scan_fingerprint_scan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fingerprint-scan/fingerprint-scan.component */ 27038);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout */ 77114);
/* harmony import */ var _kyc_modal_customer_manual_verification_customer_manual_verification_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kyc-modal/customer-manual-verification/customer-manual-verification.component */ 14212);
/* harmony import */ var _crop_crop_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./crop/crop.component */ 4720);
/* harmony import */ var _kyc_modal_customer_auto_verification_customer_auto_verification_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./kyc-modal/customer-auto-verification/customer-auto-verification.component */ 85827);





































// import { CustomerAutoVerificationComponent } from './kyc-modal/customer-auto-verification/customer-auto-verification.component';



const declaration = [
    _branch_branch_component__WEBPACK_IMPORTED_MODULE_2__.BranchComponent,
    _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_1__.AvatarPhotoComponent,
    _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_5__.TimeSlotsComponent,
    _map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent,
    _search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent,
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
    _download_download_component__WEBPACK_IMPORTED_MODULE_6__.DownloadComponent,
    _alert_internet_alert_internet_component__WEBPACK_IMPORTED_MODULE_8__.AlertInternetComponent,
    _denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_9__.DenominationSlideComponent,
    _transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_11__.TransactionDateComponent,
    _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_12__.AddAccountComponent,
    _kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_14__.KycModalComponent,
    _duplication_duplication_component__WEBPACK_IMPORTED_MODULE_15__.DuplicationComponent,
    _verification_done_verification_done_component__WEBPACK_IMPORTED_MODULE_16__.VerificationDoneComponent,
    _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_17__.CaptureImageComponent,
    _otp_verification_popup_otp_verification_popup_component__WEBPACK_IMPORTED_MODULE_18__.OtpVerificationPopup,
    _rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_19__.RekycPopupComponent,
    _scan_doc_scan_doc_component__WEBPACK_IMPORTED_MODULE_20__.ScanDocComponent,
    _appointment_schedule_modal_appointment_schedule_modal_component__WEBPACK_IMPORTED_MODULE_22__.AppointmentScheduleModalComponent,
    _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_21__.BasicInfoComponent,
    _fingerprint_scan_fingerprint_scan_component__WEBPACK_IMPORTED_MODULE_23__.FingerprintScanComponent,
    _kyc_modal_customer_auto_verification_customer_auto_verification_component__WEBPACK_IMPORTED_MODULE_26__.CustomerAutoVerificationComponent,
    _kyc_modal_customer_manual_verification_customer_manual_verification_component__WEBPACK_IMPORTED_MODULE_24__.CustomerManualVerificationComponent,
    _crop_crop_component__WEBPACK_IMPORTED_MODULE_25__.CropComponent
];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.NgModule)({
        declarations: declaration,
        exports: declaration,
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
            // PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__.FlexLayoutModule,
            _directives_directive_module__WEBPACK_IMPORTED_MODULE_13__.DirectiveModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
            _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_7__.SharedMaterialModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__.Ng2SearchPipeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_34__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIconModule,
            ngx_webcam__WEBPACK_IMPORTED_MODULE_36__.WebcamModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_37__.NgOtpInputModule,
            ngx_document_scanner__WEBPACK_IMPORTED_MODULE_38__.NgxDocumentScannerModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_39__.QRCodeModule,
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_28__.CUSTOM_ELEMENTS_SCHEMA],
    })
], ComponentsModule);



/***/ }),

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

/***/ 9340:
/*!*******************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DenominationSlideComponent": () => (/* binding */ DenominationSlideComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _denomination_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./denomination-slide.component.html?ngResource */ 76634);
/* harmony import */ var _denomination_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denomination-slide.component.scss?ngResource */ 24869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);





let DenominationSlideComponent = class DenominationSlideComponent {
    constructor(fb) {
        this.fb = fb;
        this.denomination_keys = [{
                key: "two_thousand",
                value: 2000,
                denom_key: 2000
            },
            {
                key: "five_hundred",
                value: 500,
                denom_key: 500
            }, {
                key: "two_hundred",
                value: 200,
                denom_key: 200
            }, {
                key: "one_hundred",
                value: 100,
                denom_key: 100
            }, {
                key: "fifty",
                value: 50,
                denom_key: 50
            }, {
                key: "twenty",
                value: 20,
                denom_key: 20
            }, {
                key: "ten",
                value: 10,
                denom_key: 10
            }, {
                key: "one",
                value: 1,
                denom_key: 1
            },
        ];
        this.total = 0;
        this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.emitTotalValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.denomData = [];
        this.showMore = false;
        this.icon_arrow_svg = 'assets/icon/arrow.svg';
    }
    ngOnInit() {
        this.buildDenomForm();
        let data = JSON.parse(localStorage.getItem(this.unique_key)) || null;
        if (this.denomData != null) {
            this.populateDenomination();
            this.calculateTotalAmount();
        }
        else {
            this.denominationForm.patchValue(data === null || data === void 0 ? void 0 : data.data);
        }
        this.denominationForm.valueChanges.subscribe(val => {
            let sum = 0;
            Object.keys(this.denominationForm.controls).forEach(key => {
                var _a;
                for (let index = 0; index < this.denomination_keys.length; index++) {
                    const denomItem = this.denomination_keys[index];
                    if (denomItem.key == key) {
                        sum += denomItem.value * Number((_a = this.denominationForm.get(`${key}`)) === null || _a === void 0 ? void 0 : _a.value);
                    }
                }
            });
            this.total = sum;
            this.emitTotalValue.emit(this.total);
            this.saveDenom();
        });
    }
    buildDenomForm() {
        this.denominationForm = this.fb.group({
            two_thousand: '',
            five_hundred: '',
            two_hundred: '',
            one_hundred: '',
            fifty: '',
            twenty: '',
            ten: '',
            one: '',
        });
    }
    calculateTotalAmount() {
        let sum = 0;
        Object.keys(this.denominationForm.controls).forEach(key => {
            var _a;
            for (let index = 0; index < this.denomination_keys.length; index++) {
                const denomItem = this.denomination_keys[index];
                if (denomItem.key == key) {
                    sum += denomItem.value * Number((_a = this.denominationForm.get(`${key}`)) === null || _a === void 0 ? void 0 : _a.value);
                }
            }
        });
        this.total = sum;
    }
    remove_me() {
        if (this.unique_key == 'viewRef' || this.unique_key == 'dynamicViewRef') {
            this.parentRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'cashViewRef') {
            this.cashDepositRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'chwViewRef') {
            this.chwViewRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'loanViewRef') {
            this.loanViewRef.remove(this.unique_key);
        }
        else if (this.unique_key == 'loanDsbViewRef') {
            this.loanDsbViewRef.remove(this.unique_key);
        }
    }
    populateDenomination() {
        this.denomination_keys.forEach((key, i) => {
            var _a;
            for (let index = 0; index < this.denomData.length; index++) {
                const denomItem = this.denomData[index];
                if (denomItem.denominationKey === key.denom_key) {
                    (_a = this.denominationForm.get(key === null || key === void 0 ? void 0 : key.key)) === null || _a === void 0 ? void 0 : _a.patchValue(denomItem === null || denomItem === void 0 ? void 0 : denomItem.denominationValue);
                }
            }
        });
    }
    saveDenom() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let final = [
            {
                denominationKey: 2000,
                denominationValue: +((_a = this.denominationForm.get('two_thousand')) === null || _a === void 0 ? void 0 : _a.value)
            },
            {
                denominationKey: 500,
                denominationValue: +((_b = this.denominationForm.get('five_hundred')) === null || _b === void 0 ? void 0 : _b.value)
            },
            {
                denominationKey: 200,
                denominationValue: +((_c = this.denominationForm.get('two_hundred')) === null || _c === void 0 ? void 0 : _c.value)
            },
            {
                denominationKey: 100,
                denominationValue: +((_d = this.denominationForm.get('one_hundred')) === null || _d === void 0 ? void 0 : _d.value)
            },
            {
                denominationKey: 50,
                denominationValue: +((_e = this.denominationForm.get('fifty')) === null || _e === void 0 ? void 0 : _e.value)
            },
            {
                denominationKey: 20,
                denominationValue: +((_f = this.denominationForm.get('twenty')) === null || _f === void 0 ? void 0 : _f.value)
            },
            {
                denominationKey: 10,
                denominationValue: +((_g = this.denominationForm.get('ten')) === null || _g === void 0 ? void 0 : _g.value)
            },
            {
                denominationKey: 1,
                denominationValue: +((_h = this.denominationForm.get('one')) === null || _h === void 0 ? void 0 : _h.value)
            }
        ];
        let denomPayload = {
            title: this.unique_key,
            total: this.total,
            denomination: final,
            data: this.denominationForm.value
        };
        localStorage.setItem(this.unique_key, JSON.stringify(denomPayload));
    }
    ngOnDestroy() {
        this.saveDenom();
    }
};
DenominationSlideComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
DenominationSlideComponent.propDecorators = {
    amountEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    denomArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isFrmOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isFtmOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    emitTotalValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DenominationSlideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-denomination-slide',
        template: _denomination_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_denomination_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DenominationSlideComponent);



/***/ }),

/***/ 51022:
/*!***********************************************************!*\
  !*** ./src/app/components/download/download.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadComponent": () => (/* binding */ DownloadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _download_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.component.html?ngResource */ 31363);
/* harmony import */ var _download_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.component.scss?ngResource */ 95938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let DownloadComponent = class DownloadComponent {
    constructor(_formBuilder, modalCtrl) {
        this._formBuilder = _formBuilder;
        this.modalCtrl = modalCtrl;
        this.selectedOption = '1';
        this.selectedFileExt = '1';
    }
    ngOnInit() {
        this.downloadForm = this._formBuilder.group({
            transaction: ['1'],
            fileExtention: ['1']
        });
    }
    cancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm() {
        this.modalCtrl.dismiss(this.downloadForm.value);
    }
};
DownloadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
DownloadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-download',
        template: _download_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_download_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DownloadComponent);



/***/ }),

/***/ 10473:
/*!*****************************************************************!*\
  !*** ./src/app/components/duplication/duplication.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuplicationComponent": () => (/* binding */ DuplicationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _duplication_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duplication.component.html?ngResource */ 61891);
/* harmony import */ var _duplication_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duplication.component.scss?ngResource */ 70658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_v2_kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/v2/kyc-branch/kyc-branch.service */ 8813);
/* harmony import */ var _rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rekyc-popup/rekyc-popup.component */ 65573);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);









let DuplicationComponent = class DuplicationComponent {
    constructor(modalCtrl, fb, branchService, apiService) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.branchService = branchService;
        this.apiService = apiService;
        this.firstScreen = true;
        this.relationshipArr = [];
    }
    ngOnInit() {
        this.buildDuplicationForm();
        console.log(this.customerData);
        this.getRelationshipTypeArr();
    }
    buildDuplicationForm() {
        this.duplicationForm = this.fb.group({
            phoneNumberChecked: [false],
            emailChecked: [false],
            relationship: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    closeModal(message) {
        this.modalCtrl.dismiss(message);
    }
    onNext(isReKyc) {
        this.firstScreen = false;
        this.customerData.reKyc = isReKyc;
    }
    onBack() {
        this.firstScreen = true;
    }
    onSubmit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        //payload for accept Re-kyc api
        var payload = {
            phoneNumber: (_a = this.customerData) === null || _a === void 0 ? void 0 : _a.phoneNumber,
            primaryEmailAdress: (_b = this.customerData) === null || _b === void 0 ? void 0 : _b.primaryEmailAdress,
            address: (_c = this.customerData) === null || _c === void 0 ? void 0 : _c.address,
            relationship: (_e = (_d = this.duplicationForm) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.relationshipType,
            remarks: (_g = (_f = this.duplicationForm) === null || _f === void 0 ? void 0 : _f.value) === null || _g === void 0 ? void 0 : _g.remark,
            isReKyc: (_h = this.customerData) === null || _h === void 0 ? void 0 : _h.reKyc,
        };
        // this.branchService.updateKyc(payload).subscribe((resp) => {
        //   if (resp.status == 200) {
        //     if (this.customerData?.reKyc == true) {
        //       this.closeModal(this.customerData);
        //     } else {
        this.closeModal(this.customerData);
        //     }
        //   }
        // });
    }
    openDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _rekyc_popup_rekyc_popup_component__WEBPACK_IMPORTED_MODULE_3__.RekycPopupComponent,
                backdropDismiss: true,
                cssClass: "dup-modal",
                componentProps: {
                    data: '',
                },
            });
            return yield modal.present();
        });
    }
    getRelationshipTypeArr() {
        this.apiService.getDropDownValues("relationship_type").subscribe(res => {
            this.relationshipArr = res;
        });
    }
};
DuplicationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_pages_v2_kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_2__.BranchService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService }
];
DuplicationComponent.propDecorators = {
    customerData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
DuplicationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-duplication',
        template: _duplication_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_duplication_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DuplicationComponent);



/***/ }),

/***/ 27038:
/*!***************************************************************************!*\
  !*** ./src/app/components/fingerprint-scan/fingerprint-scan.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintScanComponent": () => (/* binding */ FingerprintScanComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fingerprint_scan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fingerprint-scan.component.html?ngResource */ 8698);
/* harmony import */ var _fingerprint_scan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fingerprint-scan.component.scss?ngResource */ 25383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let FingerprintScanComponent = class FingerprintScanComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss();
    }
};
FingerprintScanComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
FingerprintScanComponent.propDecorators = {
    screenData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FingerprintScanComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fingerprint-scan',
        template: _fingerprint_scan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fingerprint_scan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FingerprintScanComponent);



/***/ }),

/***/ 64662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 21757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 5721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
        this.url1 = "";
    }
    ngOnInit() {
        this.url1 = this.router.url;
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    transactionPage() {
        this.router.navigate(['transaction']);
    }
    appointmentPage() {
        this.router.navigate(['appointment']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    settingsPage() {
        this.router.navigate(['settings']);
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 85827:
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/kyc-modal/customer-auto-verification/customer-auto-verification.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerAutoVerificationComponent": () => (/* binding */ CustomerAutoVerificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customer_auto_verification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-auto-verification.component.html?ngResource */ 8465);
/* harmony import */ var _customer_auto_verification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-auto-verification.component.scss?ngResource */ 91242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fingerprint_scan_fingerprint_scan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fingerprint-scan/fingerprint-scan.component */ 27038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../capture-image/capture-image.component */ 85652);







let CustomerAutoVerificationComponent = class CustomerAutoVerificationComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.enableSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.irisData = {
            title: 'Scan Irish',
            desc: 'Place the Irish and scan to proceed',
        };
        this.faceData = {
            title: 'Scan Face ID',
            desc: 'Place the face and scan to proceed',
        };
        this.front_data = {
            title: 'frontScan',
            desc: 'front scanned',
        };
        this.back_data = {
            title: 'Backscan',
            desc: 'back scanned',
        };
        this.fingerPrintData = {
            title: 'Scan fingerprint',
            desc: 'place the finger and scan to proceed',
        };
        this.docArr = ['Aadhar Card', 'Pan Card', 'Passport'];
    }
    ngOnInit() { }
    verificationMethodToggle(evt) {
        console.log(evt);
        if (!this.documentName || !this.documentNumber) {
            return;
        }
        // if ((!this.documentName_rekyc || !this.documentNumber_rekyc)) {
        //   return;
        // }
        if (evt == 'otp') {
            this.isOtp = true;
            this.isBiometric = false;
        }
        else {
            this.isOtp = false;
            this.isBiometric = true;
        }
    }
    openFingerPrint(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _fingerprint_scan_fingerprint_scan_component__WEBPACK_IMPORTED_MODULE_2__.FingerprintScanComponent,
                backdropDismiss: true,
                componentProps: {
                    screenData: data,
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
            });
            return yield modal.present();
        });
    }
    openScanner(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (data == 'irisData') {
                this.scannedItem = 'iris';
            }
            else {
                this.scannedItem = 'face';
            }
            let modal = yield this.modalController.create({
                component: _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_3__.CaptureImageComponent,
                backdropDismiss: true,
                componentProps: {
                    scanObject: this.scannedItem
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
            });
            return yield modal.present();
        });
    }
    valid(value) {
        if (this.otpValue.toString().length == 6) {
            console.log("calling");
            this.enableSubmit.emit(true);
        }
    }
};
CustomerAutoVerificationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
CustomerAutoVerificationComponent.propDecorators = {
    enableSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
CustomerAutoVerificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-customer-auto-verification',
        template: _customer_auto_verification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customer_auto_verification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerAutoVerificationComponent);



/***/ }),

/***/ 14212:
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/kyc-modal/customer-manual-verification/customer-manual-verification.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerManualVerificationComponent": () => (/* binding */ CustomerManualVerificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customer_manual_verification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-manual-verification.component.html?ngResource */ 62515);
/* harmony import */ var _customer_manual_verification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-manual-verification.component.scss?ngResource */ 43369);
/* harmony import */ var _kyc_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kyc-modal.component.scss?ngResource */ 93895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../capture-image/capture-image.component */ 85652);
/* harmony import */ var _scan_doc_scan_doc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scan-doc/scan-doc.component */ 15408);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../file-upload.service */ 4761);
/* harmony import */ var _crop_crop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../crop/crop.component */ 4720);
/* harmony import */ var src_app_services_static_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/static-data-service */ 27804);















let CustomerManualVerificationComponent = class CustomerManualVerificationComponent {
    constructor(router, api, cdr, modalController, snack, http, fileService, staticDataService) {
        this.router = router;
        this.api = api;
        this.cdr = cdr;
        this.modalController = modalController;
        this.snack = snack;
        this.http = http;
        this.fileService = fileService;
        this.staticDataService = staticDataService;
        this.isFrontDocUploaded = false;
        this.isBackDocUploaded = false;
        this.isAuto_rekyc = true;
        this.isFile = false;
        this.files = [];
        this.isUploading = false;
        this.isUploaded = false;
        this.isScanned = false;
        this.back = false;
        this.front = false;
        this.emitAadharData = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.emitfrontFile = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.emitisUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.irisData = {
            title: 'Scan Irish',
            desc: 'Place the Irish and scan to proceed',
        };
        this.faceData = {
            title: 'Scan Face ID',
            desc: 'Place the face and scan to proceed',
        };
        this.front_data = {
            title: 'frontScan',
            desc: 'front scanned',
        };
        this.back_data = {
            title: 'Backscan',
            desc: 'back scanned',
        };
        this.fingerPrintData = {
            title: 'Scan fingerprint',
            desc: 'place the finger and scan to proceed',
        };
        this.docArr = [];
        this.disableSubmit = true;
        this.UploadData = ["Front Uploded", "Back Uploded"];
    }
    ngOnInit() {
        this.getDocumentName();
    }
    onFileSelect(e, side) {
        try {
            const file = e.target.files[0];
            const fReader = new FileReader();
            fReader.readAsDataURL(file);
            fReader.onloadend = (_event) => {
                this.filename = file.name;
                this.base64File = _event.target.result;
                console.log(this.filename);
                this.files.push(file);
                console.log("name: ", file);
                console.log(side);
                this.openDocuemntCropModal(file);
                if (side == "Front") {
                    this.isFrontDocUploaded = true;
                    this.frontImg = fReader.result;
                    this.fileService.readAadharData(file, side.toLowerCase()).subscribe(res => {
                        var _a, _b, _c, _d, _e;
                        console.log(res);
                        let name = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.name.value.split(" ");
                        let data = { firstName: name[0], lastName: name[name.length - 1], dateOfBirth: (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.dob.value, gender: ((_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.gender.value.charAt(0).toUpperCase()) + ((_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.gender.value.slice(1)), documentNumber: (_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.no.value };
                        this.aadharData = Object.assign(Object.assign({}, this.aadharData), data);
                        console.log(this.aadharData);
                        this.front = true;
                        this.emitAadharData.emit(this.aadharData);
                    });
                }
                else if (side == "Back") {
                    this.isBackDocUploaded = true;
                    this.backImg = fReader.result;
                    this.fileService.readAadharDataBack(file, side.toLowerCase()).subscribe(res => {
                        var _a, _b, _c;
                        console.log(res);
                        let dataBack = { userAddress: [{ address1: (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.address.value, address2: '', zipCode: (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.pin.value, country: '', state: (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.state.value, city: '' }] };
                        this.aadharData = Object.assign(Object.assign({}, this.aadharData), dataBack);
                        console.log(this.aadharData);
                        this.back = true;
                        this.emitAadharData.emit(this.aadharData);
                        if (this.front == true && this.back == true) {
                            this.emitisUploaded.emit(true);
                        }
                    });
                }
                if (this.isFrontDocUploaded && this.isBackDocUploaded) {
                    localStorage.setItem("UploadedDocument", JSON.stringify({ documentName: this.DocumentId, documentNumber: this.aadharData.documentNumber, frontSide: this.frontImg, backSide: this.backImg }));
                }
                this.fileUpload(file);
            };
        }
        catch (error) {
            this.filename = null;
            this.base64File = null;
        }
    }
    fileUpload(file) {
        this.isUploading = true;
        this.requestSubscription = this.api
            .uploadAndProgress(file)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpEventType.UploadProgress) {
                this.percentDone = Math.round((100 * event.loaded) / event.total);
                this.isUploaded = true;
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpResponse) {
                this.percentDone = 0;
                this.isUploading = false;
                this.cdr.markForCheck();
            }
        });
    }
    deleteFile(item) {
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
        this.isBackDocUploaded = false;
        this.isFrontDocUploaded = false;
    }
    cancel(item) {
        this.requestSubscription.unsubscribe();
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
    }
    gotobasicScreen() {
        this.router.navigate['basicscreen'];
    }
    closeModal() {
        if (this.isedit == true) {
            this.modalController.dismiss({ customerData: this.customerData });
            return;
        }
        if (this.isupload == true) {
            this.modalController.dismiss({ customerData: this.aadharData });
        }
        this.modalController.dismiss();
    }
    upload_doc(value) {
        if (value == 'upload' && this.DocumentId) {
            this.isupload = true;
            this.isscan = false;
            this.files = [];
        }
    }
    scan_doc(value) {
        if (value == 'scan' && this.DocumentId) {
            this.isupload = false;
            this.isscan = true;
            this.files = [];
        }
    }
    openScanner(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_4__.CaptureImageComponent,
                backdropDismiss: true,
                componentProps: {
                    screenData: data,
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
            });
            return yield modal.present();
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
    openDocScan(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _scan_doc_scan_doc_component__WEBPACK_IMPORTED_MODULE_5__.ScanDocComponent,
                backdropDismiss: true,
                componentProps: {
                    screenData: data,
                },
            });
            modal.onDidDismiss().then((res) => {
                var _a;
                console.log('Getting Back Data', res);
                this.emitisUploaded.emit(true);
                this.scanImage = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.resImage;
                this.openDocuemntCropModal(this.DataURIToBlob(this.scanImage));
            });
            return yield modal.present();
        });
    }
    openDocuemntCropModal(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _crop_crop_component__WEBPACK_IMPORTED_MODULE_7__.CropComponent,
                componentProps: {
                    file: file
                }
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
                let fr = new FileReader();
                fr.readAsDataURL(res === null || res === void 0 ? void 0 : res.data);
                fr.onload = (_event) => {
                    this.cropImage = this.cropImage = fr.result;
                };
            });
            return yield modal.present();
        });
    }
    getDocumentName() {
        this.staticDataService.documentType().subscribe(res => {
            this.docArr = res;
            console.log(res);
        });
    }
};
CustomerManualVerificationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _file_upload_service__WEBPACK_IMPORTED_MODULE_6__.FileUploadService },
    { type: src_app_services_static_data_service__WEBPACK_IMPORTED_MODULE_8__.StaticDataService }
];
CustomerManualVerificationComponent.propDecorators = {
    emitAadharData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    emitfrontFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    emitisUploaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
CustomerManualVerificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-customer-manual-verification",
        template: _customer_manual_verification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customer_manual_verification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _kyc_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], CustomerManualVerificationComponent);



/***/ }),

/***/ 4761:
/*!*************************************************************!*\
  !*** ./src/app/components/kyc-modal/file-upload.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let FileUploadService = class FileUploadService {
    constructor(http) {
        this.http = http;
    }
    readAadharData(file, side) {
        // create form data
        const formData = new FormData();
        // store form name as File
        formData.append('File', file, file.name);
        return this.http.post(`https://nationalapi.docsumo.com/api/v1/national/extract/?side=front&save_data=false&return_redacted=false&fraud_check=true`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'X-API-KEY': 'vpVmVFN6XoTdOQnJOaQvQIKrTl18036KiHQjBTyCZlxYDtneD1e6MZMOwmYo',
            }),
        });
    }
    readAadharDataBack(file, side) {
        // create form data
        const formData = new FormData();
        // store form name as File
        formData.append('File', file, file.name);
        return this.http.post(`https://nationalapi.docsumo.com/api/v1/national/extract/?side=back&save_data=false&return_redacted=false&fraud_check=true`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'X-API-KEY': 'vpVmVFN6XoTdOQnJOaQvQIKrTl18036KiHQjBTyCZlxYDtneD1e6MZMOwmYo',
            }),
        });
    }
};
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FileUploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], FileUploadService);



/***/ }),

/***/ 56215:
/*!*************************************************************!*\
  !*** ./src/app/components/kyc-modal/kyc-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycModalComponent": () => (/* binding */ KycModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _kyc_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-modal.component.html?ngResource */ 39037);
/* harmony import */ var _kyc_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-modal.component.scss?ngResource */ 93895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _duplication_duplication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../duplication/duplication.component */ 10473);








let KycModalComponent = class KycModalComponent {
    constructor(router, api, 
    // private cdr: ChangeDetectorRef,
    modalController) {
        this.router = router;
        this.api = api;
        this.modalController = modalController;
        this.isFile = false;
        this.files = [];
        this.disableSubmit = true;
        this.customerArr = [
            {
                id: 1,
                checked: true,
                name: 'New Customer',
            },
            {
                id: 2,
                checked: false,
                name: 'Existing Customer',
            },
        ];
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
        this.docArr = ['Aadhar Card', 'Pan Card', 'Passport'];
        this.options = [
            {
                id: 1,
                checked: false,
                name: 'OTP',
            },
            {
                id: 2,
                checked: false,
                name: 'Biometric',
            },
        ];
        this.isExistingCustomer = false;
        this.isAuto = true;
        this.selectedTab1 = 'new_customer';
    }
    ngOnInit() {
        // this.isAuto ??= this.isAutoSelected
        // if(this.isAutoSelected == false){
        //   this.toggleArr.map(toggle =>{
        //     toggle.checked = !toggle.checked
        //   })
        // }
        console.log(this.isAutoSelected);
        console.log(this.screen);
    }
    CustomerType(value) {
        // this.isExistingCustomer = event;
        this.isAuto = true;
        this.customerId = "";
        if (value == 'Existing Customer') {
            this.isExistingCustomer = true;
        }
        else {
            this.isExistingCustomer = false;
        }
        this.documentName = '';
        this.documentNumber = '';
        this.otpValue = '';
        this.isOtp = false;
        this.isBiometric = false;
        this.isupload = false;
        this.isscan = false;
        this.isrekyc = false;
        this.isedit = false;
    }
    autoManualToggle(value) {
        if (value == "Auto") {
            this.isAuto = true;
            this.isUploaded = false;
        }
        else {
            this.isAuto = false;
            this.isUploaded = false;
        }
    }
    verificationMethodToggle(evt) {
        console.log(evt);
        if (!this.documentName || !this.documentNumber) {
            return;
        }
        // if ((!this.documentName_rekyc || !this.documentNumber_rekyc)) {
        //   return;
        // }
        if (evt == 'otp') {
            this.isOtp = true;
            this.isBiometric = false;
        }
        else {
            this.isOtp = false;
            this.isBiometric = true;
        }
    }
    radioButtonChange(evt) {
        console.log(evt);
    }
    Rekyc(value) {
        if (value == 'Re-kyc' && this.customerId) {
            this.isrekyc = true;
            this.isedit = false;
        }
    }
    edit_info(value) {
        if (value == 'edit' && this.customerId) {
            this.isrekyc = false;
            this.isedit = true;
        }
    }
    gotobasicScreen() {
        this.router.navigate['basicscreen'];
    }
    closeModal() {
        if (this.isedit == true) {
            this.modalController.dismiss({ customerData: this.customerData });
            return;
        }
        if (!this.isAuto && !this.isedit) {
            this.modalController.dismiss({ customerData: this.aadharData });
            return;
        }
        this.modalController.dismiss({ customerData: this.aadharData });
    }
    backModal() {
        this.modalController.dismiss();
    }
    openDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _duplication_duplication_component__WEBPACK_IMPORTED_MODULE_3__.DuplicationComponent,
                backdropDismiss: true,
                cssClass: 'dup-modal',
                componentProps: {
                    data: '',
                },
            });
            modal.onDidDismiss().then((res) => {
                console.log('Getting Back Data', res);
            });
            return yield modal.present();
        });
    }
    getCustomerDetails() {
        this.isUploaded = true;
        this.api.getCustomerInfo(this.customerId).subscribe((res) => {
            console.log(res === null || res === void 0 ? void 0 : res.customerInfoList[0]);
            this.customerData = res === null || res === void 0 ? void 0 : res.customerInfoList[0];
        });
    }
    validateForm(event) {
        this.disableSubmit = !event;
    }
    getAadharData(event) {
        console.log(event);
        this.aadharData = event;
    }
    getData(event) {
        console.log("calling");
        console.log(event);
        this.isUploaded = event;
    }
    updateEnableSubmit(evt) {
        this.isUploaded = evt;
    }
};
KycModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
KycModalComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    screen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isAutoSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
KycModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-kyc-modal',
        template: _kyc_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_kyc_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KycModalComponent);



/***/ }),

/***/ 51006:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component.html?ngResource */ 55706);
/* harmony import */ var _map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss?ngResource */ 54325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var _services_maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/maps.service */ 18798);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapmyindia-map-cordova-ionic-beta */ 64540);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__);









let MapComponent = class MapComponent {
    constructor(modalController, geolocation, apiService, _mapsService, _element) {
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.apiService = apiService;
        this._mapsService = _mapsService;
        this._element = _element;
        this.branchData = [];
        this.typesMap = {};
        this.typesList = [];
        this.typesSelectOptions = [];
        this.markers = [];
        this.infoWindows = [];
        this.center = [];
        this.map = new mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__.mmi();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.setupMap();
        // this.getLocation();
    }
    getBankBranches() {
        this.apiService.getBranchByCity('Bangalore').subscribe((data) => {
            this.branchData = data;
            this.getMarkers();
        });
    }
    // getLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(this.showPosition);
    //   }
    // }
    // showPosition(position) {
    //   console.log("postion", position.coords.latitude, position.coords.longitude);
    //   this.center = [position.coords.latitude, position.coords.longitude];
    //   console.log(this.center);
    // }
    setupMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.map.loadMaps(this.gmap.nativeElement, {
                key: '1d833ae339c7284f8104fc7482107c66',
                zoomControl: true,
                hybrid: true,
                center: [28.549948, 77.268241],
                zoom: 10,
                location: { control: true, initial: true, bounds: true },
            });
            this.getBankBranches();
        });
    }
    getMarkers() {
        for (let _i = 0; _i <= this.branchData.length; _i++) {
            // Commented google map settings
            // this.setupMarker();
            var cont = `<div><p style=\"font-size: 25px;text-transform: capitalize;color: #121111;font-weight: 800;\">${this.branchData[_i].branchName}</p>` +
                `<p style=\"\"><span style=\"font-size: 13px;text-transform: capitalize;color: #ccc;\">Branch Code</span> <span style=\"color: #a9a9a9;font-size: 16px;font-weight: 800;text-transform: uppercase;\">${this.branchData[_i].branchCode}</span></p>` +
                `<p style=\"font-family: inherit;font-style: inherit;text-align: left;text-transform: capitalize;\">${this.branchData[_i].address}</p>` +
                `<button style=\"border: 2px solid #456EFE; border-radius: 50px;width: 100px !important;height: 24px !important;\">SELECT</button></div>`;
            let mrker_arr = [
                [
                    this.branchData[_i].lattitude,
                    this.branchData[_i].longitude,
                    {
                        popup: cont,
                        event: [
                            'click',
                            (e) => {
                                this.selectedLocation = this.branchData[_i].branchName;
                            },
                        ],
                    },
                ],
            ];
            this.map.marker(mrker_arr, {
                iconUrl: 'assets/icon/map.png',
                iconSize: [36, 51],
                popupAnchor: [3, 290],
                draggable: false,
                fitbounds: true,
                cluster: true,
            });
        }
    }
    focusMarker(type, index) {
        const marker = type.markers[index];
        marker.setAnimation(google.maps.Animation.BOUNCE);
        marker.map.setZoom(17);
        marker.map.panTo(marker.position);
        setTimeout(() => {
            marker.setAnimation(null);
        }, 2000);
    }
    setUpInfoWindow(location, marker) {
        const infowindow = new google.maps.InfoWindow({
            content: `
        <div class="info_window_container">
          <ion-item detail="false" lines="none">
           <ion-badge slot="end">22 KM Away</ion-badge>
          </ion-item>
          <h4>${location.branchName}</h4>
          Branch Code : ${location.branchCode}
          <p>${location.address}</p>
          <ion-chip color="primary" onClick="close(location)">
           <ion-label color="primary">SELECT</ion-label>
          </ion-chip>
        </div>
      `,
        });
        this.infoWindows = [...this.infoWindows, infowindow];
        marker.addListener('click', () => {
            console.log('Clicked');
            this.infoWindows.forEach((infoWindow) => infoWindow.close());
            infowindow.open(this.map, marker);
            this.markerActive = location.id;
            this.selectedLocation = location;
            const element = this._element.nativeElement.getElementsByClassName(String(location.id))[0];
            if (element) {
                element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        });
        return infowindow;
    }
    onClick(event) {
        // this.selectedLocation = 'bangalore';
        console.log(event, this.selectedLocation);
        if (event.target.innerText == 'SELECT') {
            this.dismiss(this.selectedLocation);
            return;
        }
        else {
            return;
        }
    }
    // UNUSED METHOD FOR TEMP GOOGLEMAP END
    dismiss(location) {
        let data = {
            branchName: location,
        };
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss(data);
    }
    close() {
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.selectedLocation = null;
    }
};
MapComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_maps_service__WEBPACK_IMPORTED_MODULE_4__.MapsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef }
];
MapComponent.propDecorators = {
    gmap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['mapContainer', { static: true },] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['click', ['$event'],] }]
};
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-map',
        template: _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



/***/ }),

/***/ 6987:
/*!***************************************************************************************!*\
  !*** ./src/app/components/otp-verification-popup/otp-verification-popup.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationPopup": () => (/* binding */ OtpVerificationPopup)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _otp_verification_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verification-popup.component.html?ngResource */ 36386);
/* harmony import */ var _otp_verification_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verification-popup.component.scss?ngResource */ 14757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_v2_kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/v2/kyc-branch/kyc-branch.service */ 8813);







let OtpVerificationPopup = class OtpVerificationPopup {
    constructor(fb, modalController, branchService) {
        this.fb = fb;
        this.modalController = modalController;
        this.branchService = branchService;
        this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: true,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                width: '60px',
                height: '60px',
            },
        };
        this.disableProceed = true;
    }
    ngOnInit() {
        this.otpForm = this.fb.group({
            phoneNo: [''],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    back() {
        this.modalController.dismiss();
    }
    resendOtp() {
        let payload = {
            source: 'customer',
            source_key: 'mobile',
            source_value: this.Mnumber,
        };
        this.branchService.getOtp(payload).subscribe((res) => {
            console.log(res);
        });
    }
    onOtpChange(otp) {
        console.log(otp);
        this.otp = otp;
        if (otp.length == 6) {
            this.disableProceed = false;
        }
        else {
            this.disableProceed = true;
        }
    }
    verifyOtp() {
        console.log(this.otpForm);
        let payload = {
            otp: this.otp,
            sourceKey: 'mobile',
            sourceValue: this.Mnumber,
        };
        this.branchService.verifyOtp(payload).subscribe((res) => {
            console.log(res);
            this.modalController.dismiss({ otp: this.otp });
        });
    }
};
OtpVerificationPopup.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_pages_v2_kyc_branch_kyc_branch_service__WEBPACK_IMPORTED_MODULE_2__.BranchService }
];
OtpVerificationPopup.propDecorators = {
    Mnumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
OtpVerificationPopup = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-otp-verification-popup',
        template: _otp_verification_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_verification_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpVerificationPopup);



/***/ }),

/***/ 65573:
/*!*****************************************************************!*\
  !*** ./src/app/components/rekyc-popup/rekyc-popup.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RekycPopupComponent": () => (/* binding */ RekycPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rekyc_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rekyc-popup.component.html?ngResource */ 79311);
/* harmony import */ var _rekyc_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rekyc-popup.component.scss?ngResource */ 28871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let RekycPopupComponent = class RekycPopupComponent {
    constructor(modalctrl) {
        this.modalctrl = modalctrl;
    }
    ngOnInit() { }
    closeModal() {
        this.modalctrl.dismiss();
    }
};
RekycPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
RekycPopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-rekyc-popup',
        template: _rekyc_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rekyc_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RekycPopupComponent);



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

/***/ 29055:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.html?ngResource */ 85582);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 26022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let SearchComponent = class SearchComponent {
    constructor(modalController, toastController, router) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.router = router;
        this.items = [];
        this.trendingRecords = [{
                id: 1,
                name: "Cash Withdrawal",
                state: "/cashwithdrawal"
            }, {
                id: 2,
                name: "Cash Deposit",
                state: "/cashdeposit"
            }, {
                id: 3,
                name: "Cheque Deposit",
                state: "/chequedeposit"
            }, {
                id: 4,
                name: "Cheque Withdrawal",
                state: "/chequewithdrawal"
            }, {
                id: 5,
                name: "Forex Transaction",
                state: "/forextransaction"
            }, {
                id: 6,
                name: "Loan Payment",
                state: "/loan-payment"
            }
        ];
    }
    ngOnInit() { }
    closeModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(close);
        });
    }
    openPage(item) {
        this.router.navigate([`${item.state}`]).then(_ => {
            this.closeModel();
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-search',
        template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchComponent);



/***/ }),

/***/ 19023:
/*!***************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSlotsComponent": () => (/* binding */ TimeSlotsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _time_slots_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-slots.component.html?ngResource */ 97882);
/* harmony import */ var _time_slots_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-slots.component.scss?ngResource */ 94258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);








let TimeSlotsComponent = class TimeSlotsComponent {
    constructor(modalCtr, datepipe, navPramas, api) {
        this.modalCtr = modalCtr;
        this.datepipe = datepipe;
        this.navPramas = navPramas;
        this.api = api;
        this.slots = [];
        this.TimeSolts = [];
        this.dateCollection = [];
        this.exclude_past_time = [];
    }
    ngOnInit() {
        console.log(this.date);
        this.callingTimeslots();
        this.canceledAppointment = localStorage.getItem("canceledAppointment");
        let date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        // let date1 = this.datepipe.transform(date, 'yyyy-MM-dd');
        this.loadtimeSlots(date);
    }
    // -- Converts 24 Hr format to 24 Hr format
    convertTime12to24(time12h) {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}:${minutes}`;
    }
    loadtimeSlots(date) {
        this.callingTimeslots();
        this.isLoading = false;
        let date2 = date.split("-").reverse().join("-");
        console.log(date, date2);
        // const selectedDate = this.date.split('T')[0];
        const dt = new Date();
        const currentDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().length < 2 ? '0' + (dt.getMonth() + 1) : (dt.getMonth() + 1)}-${dt.getDate().toString().length < 2 ? ('0' + dt.getDate()) : dt.getDate()}`;
        const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
        console.log("date", date);
        let today = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        console.log("today", today);
        if (today == date) {
            this.exclude_past_time = this.TimeSolts.filter(item => (item === null || item === void 0 ? void 0 : item.time) > currentTime);
        }
        else {
            this.exclude_past_time = this.TimeSolts;
        }
        console.log(this.exclude_past_time);
        if (new Date(date) <= new Date(currentDate)) {
            this.exclude_past_time.forEach((ele, i) => {
                const time = ele.time.split(":")[0].length < 2 ? '0' + ele.time : ele.time;
                if (time < currentTime) {
                    this.exclude_past_time[i].available = false;
                    this.exclude_past_time[i].booked = true;
                }
            });
        }
        this.api.gettingBookedSlots(date2).subscribe(bookedResp => {
            if (this.canceledAppointment) {
                bookedResp = bookedResp.filter(item => item != this.canceledAppointment);
            }
            const newFormatBookedSlots = bookedResp && bookedResp.map(time => this.convertTime12to24(time));
            newFormatBookedSlots && newFormatBookedSlots.forEach(element => {
                const index = this.exclude_past_time.map(x => x.time).indexOf(element);
                if (index > -1) {
                    this.exclude_past_time[index].available = false;
                    this.exclude_past_time[index].booked = true;
                }
            });
        });
        // this.exclude_past_time = this.exclude_past_time.filter(item => item?.time > currentTime && !item.booked);
    }
    onSelectiongTimeSlots(event, time) {
        console.log(time);
        this.selected = time;
    }
    onSelectTime1(time, i, event) {
        console.log(i, time, event);
        this.selected = event.target.textContent;
        this.count++;
        if (this.count > 1) {
            this.dateCollection = [];
            console.log(this.exclude_past_time, !this.exclude_past_time[i].selected);
        }
        console.log("Time", time, i);
        this.exclude_past_time[i].selected = !this.exclude_past_time[i].selected;
        this.exclude_past_time[i].available = !this.exclude_past_time[i].available;
        console.log(this.exclude_past_time[i].selected);
        const index = this.dateCollection.indexOf(time);
        console.log("index", this.dateCollection);
        this.exclude_past_time.forEach((element, i) => {
            console.log(this.exclude_past_time, i, element.time);
        });
        if (index > -1 && !this.exclude_past_time[i].selected) {
            console.log("in if");
            this.dateCollection.splice(index, 1);
        }
        else if (index == -1 && this.exclude_past_time[i].selected) {
            console.log("in else");
            this.exclude_past_time.forEach((element, i) => {
                if (!element.booked && element.time == time) {
                    this.exclude_past_time[i].available = false;
                }
                else if (!element.booked && element.time != time) {
                    this.exclude_past_time[i].available = true;
                }
            });
            this.dateCollection = [];
            this.dateCollection.push(time);
            console.log(this.dateCollection);
        }
    }
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_2__(time, "hh:mm A").format("hh:mm A");
        return formatted;
    }
    close() {
        this.modalCtr.dismiss(null);
    }
    done() {
        let data = {
            form: this.selected,
            payload: this.dateCollection
        };
        this.modalCtr.dismiss(data);
    }
    callingTimeslots() {
        this.TimeSolts = [
            {
                "time": "00:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "04:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "07:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "08:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "11:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:55",
                "available": true,
                "selected": false,
                "booked": false
            },
        ];
    }
};
TimeSlotsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
TimeSlotsComponent.propDecorators = {
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
TimeSlotsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-time-slots',
        template: _time_slots_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_time_slots_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimeSlotsComponent);



/***/ }),

/***/ 19693:
/*!***************************************************************************!*\
  !*** ./src/app/components/transaction-date/transaction-date.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionDateComponent": () => (/* binding */ TransactionDateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transaction_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-date.component.html?ngResource */ 69798);
/* harmony import */ var _transaction_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-date.component.scss?ngResource */ 27320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);








class CustomDateAdapter extends _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__.MomentDateAdapter {
    getDayOfWeekNames(style) {
        return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
}
let TransactionDateComponent = class TransactionDateComponent {
    constructor(modalCtr, datepipe) {
        this.modalCtr = modalCtr;
        this.datepipe = datepipe;
        this.minDate = new Date();
        this.maxDate = new Date(2050, 11, 31);
        this.minDateDOB = new Date(1900, 11, 31);
        this.maxDateDOB = new Date();
        this.disableWeekendsFilter = (d) => {
            let day = new Date(d);
            return (day.getDay() !== 0 && day.getDay() !== 6);
        };
        // disableFuture() {
        //   return (date: Date): MatCalendarCellCssClasses => {
        //     let day = new Date(date);
        //     console.log(day)
        //     console.log(day.getDay());
        //     const d = new Date();
        //     let year = d.getFullYear();
        //     return ((day.getDay() == 0 || day.getDay() == 6) && Number(day.getFullYear()) == Number(year) ? 'special-date' : '');
        //     // return (day.getDay() !== 0 && day.getDay() !== 6 ? '' : 'special-date');
        //   };
        // }
        this.dateClass = (date, view) => {
            const cellDate = new Date(date);
            if (view === "month") {
                const highlightDate = cellDate.getDay() == 0 || cellDate.getDay() == 6;
                return highlightDate ? "special-date" : "";
            }
            return "";
        };
    }
    ngOnInit() {
        console.log(this.date);
        this.selected = this.date ? this.date : new Date();
        console.log(this.selected);
    }
    close() {
        this.modalCtr.dismiss();
    }
    done() {
        const convertedDate = this.datepipe.transform(this.selected, 'yyyy-MM-dd');
        this.modalCtr.dismiss(convertedDate);
    }
};
TransactionDateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe }
];
TransactionDateComponent.propDecorators = {
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    screenType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
TransactionDateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-transaction-date',
        template: _transaction_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.DateAdapter,
                useClass: CustomDateAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_LOCALE],
            },
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_FORMATS,
                useValue: {
                    parse: {
                        dateInput: ['l', 'LL'],
                    },
                    display: {
                        dateInput: 'L',
                        monthYearLabel: 'MMMM YYYY',
                        dateA11yLabel: 'L',
                        monthYearA11yLabel: 'MMMM YYYY',
                    },
                },
            },
        ],
        styles: [_transaction_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionDateComponent);



/***/ }),

/***/ 86848:
/*!*****************************************************************************!*\
  !*** ./src/app/components/verification-done/verification-done.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationDoneComponent": () => (/* binding */ VerificationDoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verification_done_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-done.component.html?ngResource */ 11883);
/* harmony import */ var _verification_done_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification-done.component.scss?ngResource */ 17394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let VerificationDoneComponent = class VerificationDoneComponent {
    constructor(modal) {
        this.modal = modal;
        this.doneIcon = 'assets/icon/doneCheck.svg';
    }
    ngOnInit() { }
    close() {
        this.modal.dismiss();
    }
};
VerificationDoneComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
VerificationDoneComponent.propDecorators = {
    kycReference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
VerificationDoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-verification-done',
        template: _verification_done_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verification_done_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerificationDoneComponent);



/***/ }),

/***/ 86176:
/*!***************************************!*\
  !*** ./src/app/config/db.constant.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "staticData": () => (/* binding */ staticData)
/* harmony export */ });
class staticData {
}
staticData.prefix = ["Mr", "Ms", "Mrs"];
staticData.gender = ["Male", "Female", "Other"];
staticData.nationality = ["Indian", "American", "African", "Chinese", "Japanese", "British", "Russian", "Australian"];
staticData.maritalStatus = ["Single", "Married", "Divorced"];
staticData.residenceType = ["Permanent", "Citizen", "Non-Citizen"];
staticData.documentType = ["Pan card", "Aadhar card", "Passport"];
staticData.relationshipType = ["Father", "Brother", "Mother", "Sister", "Spouse"];


/***/ }),

/***/ 8813:
/*!***********************************************************!*\
  !*** ./src/app/pages/v2/kyc-branch/kyc-branch.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 99726:
/*!***************************************!*\
  !*** ./src/app/services/data/city.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityData": () => (/* binding */ CityData)
/* harmony export */ });
class CityData {
}


/***/ }),

/***/ 28310:
/*!******************************************!*\
  !*** ./src/app/services/data/country.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryData": () => (/* binding */ CountryData)
/* harmony export */ });
class CountryData {
}


/***/ }),

/***/ 39211:
/*!****************************************!*\
  !*** ./src/app/services/data/state.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateData": () => (/* binding */ StateData)
/* harmony export */ });
class StateData {
}


/***/ }),

/***/ 18798:
/*!******************************************!*\
  !*** ./src/app/services/maps.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsService": () => (/* binding */ MapsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps */ 68223);



let MapsService = class MapsService {
    constructor() {
        this.clientKey = 'AIzaSyAHnMnRdGyN-tZr3rn9ugPJBEfaPgqHGWk';
    }
    getGoogleMaps() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loader) {
                this.loader = new google_maps__WEBPACK_IMPORTED_MODULE_1__.Loader(this.clientKey);
            }
            if (!this.googleMaps) {
                this.googleMaps = yield this.loader.load();
            }
            return this.googleMaps;
        });
    }
};
MapsService.ctorParameters = () => [];
MapsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MapsService);



/***/ }),

/***/ 74104:
/*!*******************************************************!*\
  !*** ./src/app/services/mock-service/city-service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityService": () => (/* binding */ CityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _data_city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/city */ 99726);






let CityService = class CityService extends _data_city__WEBPACK_IMPORTED_MODULE_0__.CityData {
    constructor(http) {
        super();
        this.http = http;
    }
    loadCity() {
        if (this.cities) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.cities);
        }
        else {
            return this.getCities();
        }
    }
    getCities() {
        return this.http
            .get("assets/json/city.json")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.processData, this));
    }
    processData(data) {
        this.cities = data;
        return this.cities;
    }
};
CityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
CityService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], CityService);



/***/ }),

/***/ 97902:
/*!**********************************************************!*\
  !*** ./src/app/services/mock-service/country-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _data_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/country */ 28310);






let CountryService = class CountryService extends _data_country__WEBPACK_IMPORTED_MODULE_0__.CountryData {
    constructor(http) {
        super();
        this.http = http;
    }
    loadCountry() {
        if (this.countries) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.countries);
        }
        else {
            return this.getCountries();
        }
    }
    getCountries() {
        return this.http
            .get("assets/json/country.json")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.processData, this));
    }
    processData(data) {
        this.countries = data;
        return this.countries;
    }
};
CountryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
CountryService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], CountryService);



/***/ }),

/***/ 93580:
/*!********************************************************!*\
  !*** ./src/app/services/mock-service/state-service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _data_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/state */ 39211);






let StateService = class StateService extends _data_state__WEBPACK_IMPORTED_MODULE_0__.StateData {
    constructor(http) {
        super();
        this.http = http;
    }
    loadState() {
        if (this.states) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.states);
        }
        else {
            return this.getStates();
        }
    }
    getStates() {
        return this.http
            .get("assets/json/state.json")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.processData, this));
    }
    processData(data) {
        this.states = data;
        return this.states;
    }
};
StateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
StateService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], StateService);



/***/ }),

/***/ 27804:
/*!*************************************************!*\
  !*** ./src/app/services/static-data-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DB_Data": () => (/* binding */ DB_Data),
/* harmony export */   "StaticDataService": () => (/* binding */ StaticDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _config_db_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/db.constant */ 86176);




const DB_Data = _config_db_constant__WEBPACK_IMPORTED_MODULE_0__.staticData;
let StaticDataService = class StaticDataService {
    prefixData() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(DB_Data.prefix);
    }
    genderData() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(DB_Data.gender);
    }
    maritalStatusData() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(DB_Data.maritalStatus);
    }
    nationalityData() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(DB_Data.nationality);
    }
    residenceData() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(DB_Data.residenceType);
    }
    documentType() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(DB_Data.documentType);
    }
    relationshipType() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(DB_Data.relationshipType);
    }
};
StaticDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], StaticDataService);



/***/ }),

/***/ 68223:
/*!****************************************************!*\
  !*** ./node_modules/google-maps/lib/esm/loader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
class Loader {
  constructor(apiKey = null, options = {}) {
    this.apiKey = apiKey;
    this.options = options;

    if (typeof window === 'undefined') {
      throw new Error('google-maps is supported only in browser environment');
    }
  }

  load() {
    if (typeof this.api !== 'undefined') {
      return Promise.resolve(this.api);
    }

    if (typeof this.loader !== 'undefined') {
      return this.loader;
    }

    window[Loader.CALLBACK_NAME] = () => {
      this.api = window['google'];

      if (typeof this.resolve === 'undefined') {
        throw new Error('Should not happen');
      }

      this.resolve(this.api);
    };

    window['gm_authFailure'] = () => {
      if (typeof this.reject === 'undefined') {
        throw new Error('Should not happen');
      }

      this.reject(new Error('google-maps: authentication error'));
    };

    return this.loader = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      const script = document.createElement('script');
      script.src = this.createUrl();
      script.async = true;

      script.onerror = e => reject(e);

      document.head.appendChild(script);
    });
  }

  createUrl() {
    const parameters = [`callback=${Loader.CALLBACK_NAME}`];

    if (this.apiKey) {
      parameters.push(`key=${this.apiKey}`);
    }

    for (let name in this.options) {
      if (this.options.hasOwnProperty(name)) {
        let value = this.options[name];

        if (name === 'version') {
          name = 'v';
        }

        if (name === 'libraries') {
          value = value.join(',');
        }

        parameters.push(`${name}=${value}`);
      }
    }

    return `https://maps.googleapis.com/maps/api/js?${parameters.join('&')}`;
  }

}
Loader.CALLBACK_NAME = '_dk_google_maps_loader_cb';

/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 64034:
/*!******************************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".example-right-align {\n  text-align: right;\n}\n\n.currency-card {\n  width: auto;\n  height: 42px;\n  color: #FFFFFF !important;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 0px;\n}\n\n.currency-link {\n  left: 0;\n  top: 16px;\n  right: 0;\n  bottom: 6px;\n  position: relative;\n  text-decoration: underline !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n\nion-item.exchange::part(native) {\n  height: 65px;\n  background: #F2F2F2;\n}\n\nion-item.txn::part(native) {\n  height: 65px;\n}\n\n.suffix-icon {\n  margin-top: -14px;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\n.remark-field {\n  margin-top: 25px;\n  border: 1px solid #dee2e6;\n  border-radius: 16px;\n  height: 100px;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.suffix-ion-icon {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  top: 10px;\n}\n\n.suffix-ion-icon-total {\n  position: relative;\n  bottom: 0;\n  right: 32px;\n  top: 10px;\n}\n\nion-segment {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  height: 50px !important;\n}\n\nion-segment-button {\n  --background-checked: linear-gradient(90deg, #051A2D, #004C97) !important;\n}\n\n.file-text {\n  color: #004C97;\n}\n\n.account-group {\n  background: #F2F2F2;\n  padding: 10px;\n  border-radius: 16px;\n}\n\n.lbl-title {\n  color: #102245;\n  font-size: 11px;\n}\n\n.lbl-header {\n  color: #004C97;\n  font-size: 16px;\n}\n\n.lbl-content {\n  color: #262831;\n  font-size: 12px;\n}\n\n.currency-label {\n  width: 43px;\n  height: 26px;\n  background: rgba(0, 76, 151, 0.1411764706);\n  border: 1pt solid #004C97;\n  margin: 0px;\n  display: inline-grid;\n  padding: 5px;\n  color: #004C97;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #B20000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLHNEQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUlBOztFQUVJLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUFESjs7QUFLQTtFQUNJLHNCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFGSjs7QUFLQTtFQUNJLGdHQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlFQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJLDRCQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6ImFkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jdXJyZW5jeS1jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxpbmsge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb2wtNiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LnRyYW5zcG9wb3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24taXRlbS5leGNoYW5nZTo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnR4bjo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLnN1ZmZpeC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci50cmFucy1wb3A6OnBhcnQoY29udGVudCkge1xyXG4gICAgLS13aWR0aDogMjc1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIC0tb2Zmc2V0LXg6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAtLW9mZnNldC15OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxyXG4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZW1hcmstZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAxNXB4ICMwMDAwMDAxNyk7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24tdG90YWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbGUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuXHJcbi5hY2NvdW50LWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLmxibC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmxibC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMwMDRDOTc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5sYmwtY29udGVudCB7XHJcbiAgICBjb2xvcjogIzI2MjgzMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxhYmVsIHtcclxuICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCA3NiwgMTUxLCAwLjE0MTE3NjQ3MDYpO1xyXG4gICAgYm9yZGVyOiAxcHQgc29saWQgIzAwNEM5NztcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ubmV4dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmNhbmNlbCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjQjIwMDAwO1xyXG59Il19 */";

/***/ }),

/***/ 85710:
/*!************************************************************************************************************!*\
  !*** ./src/app/components/appointment-schedule-modal/appointment-schedule-modal.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = ".link {\n  color: #000000;\n  font-size: 24px;\n  font-weight: 800;\n  text-align: center;\n}\n\n.ref-num {\n  text-align: center;\n  color: #6E6E6E;\n  margin-top: 20px;\n}\n\n.ref-num .ref-txt {\n  color: #004C97;\n}\n\n.date-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n\n.date-div .date {\n  color: #004C97;\n  font-size: smaller;\n}\n\n.succss-img {\n  text-align: center;\n  margin-top: 100px;\n}\n\nion-button.next {\n  width: 55%;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LXNjaGVkdWxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFJO0VBQ0MsY0FBQTtBQUVMOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUM7RUFDRyxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdKIiwiZmlsZSI6ImFwcG9pbnRtZW50LXNjaGVkdWxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmt7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJlZi1udW17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzZFNkU2RTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgLnJlZi10eHR7XHJcbiAgICAgY29sb3I6ICMwMDRDOTc7IFxyXG4gICAgfVxyXG59XHJcbi5kYXRlLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgIC5kYXRle1xyXG4gICAgICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIH1cclxufVxyXG4uc3VjY3NzLWltZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbiBpb24tYnV0dG9uLm5leHQge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkLCAjMDA0Yzk3KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 63614:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".circle {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle img {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n.circle .initials {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQURSIiwiZmlsZSI6ImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbml0aWFscyB7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICA6IDE5cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjYyNXB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 77760:
/*!****************************************************************************!*\
  !*** ./src/app/components/basic-info/basic-info.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --display: flex !important;\n  --align-items: center;\n  --justify-content: space-between;\n  --color: #004c97;\n  --width: 100%;\n}\n\nion-button.next {\n  width: 100px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.cancel {\n  width: 100px;\n  --background: #ffffff;\n  --color: #b20000;\n}\n\nion-button.back {\n  width: 100px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.BI-container {\n  height: 170px;\n}\n\n.BI-container .BI-top-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.BI-container .BI-top-section .img-container {\n  width: 141.3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: 1px solid #d5d5d5;\n  border-radius: 15px;\n  background-color: #ececec;\n  height: 140px;\n}\n\n.BI-container .BI-top-section .img-container img {\n  height: 80px;\n  width: 80px;\n}\n\n.BI-container .BI-top-section .img-container .icons {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 60px;\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  padding: 5px 7px;\n  border-bottom-left-radius: 9px;\n}\n\n.BI-container .BI-top-section .right-top-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between !important;\n  align-items: flex-end;\n  align-content: space-between;\n  flex-direction: column;\n  height: 100%;\n}\n\n.BI-container .BI-top-section .right-top-section ::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  display: flex !important;\n}\n\n.BI-container .BI-top-section .right-top-section .auto-manual-toggle-group {\n  background: #f3f3f3 0% 0% no-repeat padding-box;\n  border-radius: 8px !important;\n  opacity: 1;\n  width: 160px;\n  height: 51px;\n  margin-bottom: 25px;\n}\n\n.BI-container .BI-top-section .right-top-section .auto-manual-toggle {\n  width: 100px !important;\n  color: #6e6e6e !important;\n  font: medium poppins !important;\n}\n\n.BI-container .BI-top-section .right-top-section .mat-button-toggle-checked {\n  background-color: #004c97 !important;\n  color: white !important;\n  border-radius: 8px !important;\n}\n\n.BI-container .BI-top-section .right-top-section .input-field-cont {\n  border-radius: 12px;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  padding-bottom: 0;\n}\n\n.BI-container .BI-top-section .right-top-section .input-field-cont ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n.BI-mid-section {\n  margin-top: 30px;\n  width: 100%;\n}\n\n.BI-mid-section mat-form-field {\n  width: 100%;\n  border-radius: 12px;\n  padding-bottom: 0;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  margin-bottom: 13px;\n  color: #8a8989;\n}\n\n.BI-mid-section mat-form-field mat-label {\n  color: #8a8989;\n}\n\n.BI-mid-section mat-form-field .mat-select-arrow-wrapper {\n  color: #8a8989;\n}\n\n.BI-mid-section .verify-btn-disable {\n  color: red;\n  padding: 15px 32px;\n  border-radius: 7px;\n  color: #292d32;\n}\n\n.BI-mid-section ::ng-deep .mat-form-field-flex {\n  align-items: center;\n}\n\n.BI-mid-section .verify-btn-enable {\n  background: rgb(5, 26, 45);\n  background: linear-gradient(91deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n  padding: 15px 32px;\n  border-radius: 7px;\n  color: #e7e7e7;\n}\n\n.BI-mid-section ::ng-deep .mat-form-field-flex {\n  align-items: center;\n}\n\n.BI-mid-section ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n.BI-mid-section ::ng-deep .mat-form-field-wrapper .mat-form-field-infix {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.BI-mid-section ::ng-deep .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0.16em;\n}\n\n.BI-mid-section .ml-name,\n.BI-mid-section .DOB-gender,\n.BI-mid-section .marital-nat {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.BI-mid-section .ml-name mat-form-field,\n.BI-mid-section .DOB-gender mat-form-field,\n.BI-mid-section .marital-nat mat-form-field {\n  width: 49%;\n}\n\n.BI-mid-section .email {\n  width: 100%;\n  display: flex;\n}\n\n.BI-address-section {\n  margin-top: 20px;\n}\n\n.BI-address-section .comm-add {\n  margin-top: 30px;\n  width: 100%;\n}\n\n.BI-address-section .comm-add ion-text {\n  margin-bottom: 30px;\n}\n\n.BI-address-section .comm-add mat-form-field {\n  width: 100%;\n  border-radius: 12px;\n  padding-bottom: 0;\n  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);\n  margin-bottom: 13px;\n  color: #8a8989;\n}\n\n.BI-address-section .comm-add mat-form-field mat-label {\n  color: #8a8989;\n}\n\n.BI-address-section .comm-add mat-form-field .mat-select-arrow-wrapper {\n  color: #8a8989;\n}\n\n.BI-address-section ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n.BI-address-section ::ng-deep .mat-form-field-wrapper .mat-form-field-infix {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.BI-address-section .state-city {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.BI-address-section .state-city mat-form-field {\n  width: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBN0JGOztBQWdDQTtFQUNFLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0FBN0JGOztBQWdDQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBN0JGOztBQWdDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQTdCRjs7QUFpQ0E7RUFDRSxhQUFBO0FBOUJGOztBQWtDRTtFQXhEQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQXdERSw4QkFBQTtFQUNBLFlBQUE7QUE5Qko7O0FBZ0NJO0VBQ0UsY0FBQTtFQTlESixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQThESSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUE1Qk47O0FBNkJNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUEzQlI7O0FBOEJNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQTdFTixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQTZFTSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQTFCUjs7QUE4Qkk7RUF4RkYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF3RkkseUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBMUJOOztBQTRCTTtFQUNFLHdCQUFBO0FBMUJSOztBQTZCTTtFQUNFLCtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTNCUjs7QUE4Qk07RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUE1QlI7O0FBK0JNO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBN0JSOztBQWdDTTtFQUNFLG1CQUFBO0VBcEhOLCtDQUFBO0VBc0hNLGlCQUFBO0FBOUJSOztBQWdDUTtFQUNFLGlCQUFBO0FBOUJWOztBQXNDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQW5DRjs7QUFxQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQXhJRiwrQ0FBQTtFQTBJRSxtQkFBQTtFQUNBLGNBQUE7QUFuQ0o7O0FBcUNJO0VBQ0UsY0FBQTtBQW5DTjs7QUFzQ0k7RUFDRSxjQUFBO0FBcENOOztBQXVDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXJDSjs7QUF3Q0U7RUFDRSxtQkFBQTtBQXRDSjs7QUF5Q0U7RUF4SkEsMEJBQUE7RUFDQSwyRUFBQTtFQXlKRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXRDSjs7QUF5Q0U7RUFDRSxtQkFBQTtBQXZDSjs7QUEyQ0k7RUFDRSxpQkFBQTtBQXpDTjs7QUEyQ007RUFyTEosYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE2SUY7O0FBMENJO0VBQ0UsV0FBQTtBQXhDTjs7QUE0Q0U7OztFQTlMQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQWdNRSw4QkFBQTtFQUNBLFdBQUE7QUF4Q0o7O0FBMENJOzs7RUFDRSxVQUFBO0FBdENOOztBQTBDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBeENKOztBQTZDQTtFQUNFLGdCQUFBO0FBMUNGOztBQTJDRTtFQUtFLGdCQUFBO0VBQ0EsV0FBQTtBQTdDSjs7QUF3Q0k7RUFDRSxtQkFBQTtBQXRDTjs7QUE0Q0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQXhOSiwrQ0FBQTtFQTBOSSxtQkFBQTtFQUNBLGNBQUE7QUExQ047O0FBNENNO0VBQ0UsY0FBQTtBQTFDUjs7QUE2Q007RUFDRSxjQUFBO0FBM0NSOztBQWlESTtFQUNFLGlCQUFBO0FBL0NOOztBQWlETTtFQWpQSixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW1NRjs7QUFrREU7RUF2UEEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF1UEUsOEJBQUE7RUFDQSxXQUFBO0FBOUNKOztBQWdESTtFQUNFLFVBQUE7QUE5Q04iLCJmaWxlIjoiYmFzaWMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFsbCB2YXJpYWJsZXMgYW5kIHJlLXVzYWJsZSBjb21wb25lbnRzIGRlZmluZWQgaGVyZS4uLlxyXG5cclxuJE1CLWlucHV0LWZpZWxkOiAxNXB4O1xyXG4kaW5wdXQtZmllbGQtYmctY29sb3I6ICNmY2ZjZmM7XHJcbiRpbnB1dC1maWVsZC10ZXh0LWNvbG9yOiAjNTQ1NDU0O1xyXG5cclxuQG1peGluIGFsaWdubWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBidG4tZ3JhZGllbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYig1LCAyNiwgNDUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkxZGVnLFxyXG4gICAgcmdiYSg1LCAyNiwgNDUsIDEpIDAlLFxyXG4gICAgcmdiYSgwLCA3NiwgMTUxLCAxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLy9zdHlsaW5nIGNvZGUgZ29lcyBoZXJlLi4uXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAtLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLS1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLS1jb2xvcjogIzAwNGM5NztcclxuICAtLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLm5leHQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCwgIzAwNGM5Nyk7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5jYW5jZWwge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1jb2xvcjogI2IyMDAwMDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5iYWNrIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIEJBU0lDIElORk9STUFUSU9OIGNvbnRlbnRzIHN0eWxpbmdcclxuLkJJLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuXHJcblxyXG5cclxuICAuQkktdG9wLXNlY3Rpb24ge1xyXG4gICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDE0MS4zcHg7XHJcbiAgICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNWQ1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb25zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgcmlnaHQ6IDNweDtcclxuICAgICAgICBAaW5jbHVkZSBhbGlnbm1lbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXRvcC1zZWN0aW9uIHtcclxuICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF1dG8tbWFudWFsLXRvZ2dsZS1ncm91cCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdXRvLW1hbnVhbC10b2dnbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNmU2ZTZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udDogbWVkaXVtIHBvcHBpbnMgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTcgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LWZpZWxkLWNvbnQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtaWQgc2VjdGlvbiBzdHlsaW5nLi4uXHJcbi5CSS1taWQtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBAaW5jbHVkZSBzaGFkb3c7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgY29sb3I6ICM4YTg5ODk7XHJcblxyXG4gICAgbWF0LWxhYmVsIHtcclxuICAgICAgY29sb3I6ICM4YTg5ODk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgICAgIGNvbG9yOiAjOGE4OTg5O1xyXG4gICAgfVxyXG4gIH1cclxuICAudmVyaWZ5LWJ0bi1kaXNhYmxlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBjb2xvcjogIzI5MmQzMjtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnZlcmlmeS1idG4tZW5hYmxlIHtcclxuICAgIEBpbmNsdWRlIGJ0bi1ncmFkaWVudDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGNvbG9yOiAjZTdlN2U3O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1zdWZmaXh7XHJcbiAgICAgIHRvcDogMC4xNmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1sLW5hbWUsXHJcbiAgLkRPQi1nZW5kZXIsXHJcbiAgLm1hcml0YWwtbmF0IHtcclxuICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDQ5JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lbWFpbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBhZGRyZXNzIHNlY3Rpb24gc3R5bGluZy4uXHJcbi5CSS1hZGRyZXNzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLmNvbW0tYWRkIHtcclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgY29sb3I6ICM4YTg5ODk7XHJcblxyXG4gICAgICBtYXQtbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjOGE4OTg5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuICAgICAgICBjb2xvcjogIzhhODk4OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgIEBpbmNsdWRlIGFsaWdubWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0YXRlLWNpdHkge1xyXG4gICAgQGluY2x1ZGUgYWxpZ25tZW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogNDklO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 47092:
/*!********************************************************************!*\
  !*** ./src/app/components/branch/branch.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #051A2D;\n  color: #ffffff;\n}\n\n.toolbar-content {\n  background: #051A2D;\n  height: 330px;\n  border-bottom-left-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n\nion-item.search {\n  --background: #000000 !important;\n  --color: #fffff;\n}\n\nion-item::part(native) {\n  border-radius: 6px;\n  height: auto;\n}\n\nion-card {\n  height: auto;\n  min-height: 1000px;\n  margin-top: -175px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  border-radius: 12px;\n}\n\nion-input.custom {\n  --background: #000000;\n  --color: #fff;\n  --placeholder-color: #ffffff;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 30px;\n  --placeholder-opacity: 1;\n  --padding-top: 10px;\n  text-transform: capitalize;\n}\n\nion-button.next {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n  float: right;\n  width: 90px;\n  height: 30px;\n  font-size: 12px !important;\n  font-weight: 100 !important;\n  text-transform: capitalize !important;\n}\n\n.title-branch {\n  color: #004C97 !important;\n}\n\n.text-center {\n  color: #B1B1B1;\n  padding: 10px 0 20px 0;\n}\n\n.chip-custom {\n  background: #FFF7E3;\n  padding: 16px;\n  margin-left: 36px !important;\n  margin-top: -5px;\n}\n\nion-chip.chip-outline {\n  border-radius: 5px;\n  border-style: unset;\n}\n\n.content-branch {\n  white-space: normal !important;\n  color: #707070;\n  opacity: 100%;\n  font-size: 12px;\n}\n\nion-item::part(native) {\n  padding-inline-start: 0px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5jaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU1BO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0dBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFISjs7QUFNQTtFQUNJLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDSCwwQkFBQTtFQUNHLDJCQUFBO0VBQ0EscUNBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFKSiIsImZpbGUiOiJicmFuY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuJHdpZHRoOiA0MDA7XHJcbiRjaXJjbGUtc2l6ZTogNTA7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNTFBMkQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnRvb2xiYXItY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDUxQTJEO1xyXG4gICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VhcmNoIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmO1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3NXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuaW9uLWlucHV0LmN1c3RvbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzMHB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLm5leHQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xyXG4gICAgLS1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxlLWJyYW5jaHtcclxuICAgIGNvbG9yOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIGNvbG9yOiAjQjFCMUIxO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLmNoaXAtY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY3RTM7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuXHJcbmlvbi1jaGlwLmNoaXAtb3V0bGluZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHVuc2V0O1xyXG59XHJcblxyXG4uY29udGVudC1icmFuY2gge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMjZweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDowcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 96394:
/*!**********************************************************************************!*\
  !*** ./src/app/components/capture-image/capture-image.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.oval-wrapper {\n  text-align: center;\n  background-image: url(\"/assets/camera_overlay_oval.svg\");\n  width: 320px;\n  height: 430px;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n}\n\n.capture-circle {\n  height: 120px;\n  width: 120px;\n  text-align: center;\n  border: 15px solid #e9ecf5;\n  border-radius: 50%;\n  position: relative;\n}\n\n.scan-img {\n  height: 50px;\n  width: 50px;\n  position: relative;\n  top: 23%;\n}\n\n.scan-div {\n  display: flex;\n  justify-content: center;\n}\n\n.demo {\n  margin-left: 90px;\n}\n\n.btn-footer {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcHR1cmUtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx3REFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQUZBO0VBQ0Usa0NBQUE7QUFLRiIsImZpbGUiOiJjYXB0dXJlLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5uZXh0IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkLCAjMDA0Yzk3KTtcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmJhY2sge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92YWwtd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvY2FtZXJhX292ZXJsYXlfb3ZhbC5zdmdcIik7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNhcHR1cmUtY2lyY2xlIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNlOWVjZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2Nhbi1pbWcge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMyU7XHJcbn1cclxuLnNjYW4tZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZW1vIHtcclxuICBtYXJnaW4tbGVmdDogOTBweDtcclxufVxyXG4uYnRuLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 50617:
/*!****************************************************************!*\
  !*** ./src/app/components/crop/crop.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9wLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 24869:
/*!********************************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".denomination-slide {\n  background: #F3F3F3;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #484848;\n  margin-top: -4px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  position: relative;\n}\n\n.denom-count {\n  color: #484848;\n  font-size: 10px;\n}\n\n.denom-sub {\n  color: #6c757d;\n  font-size: 8px;\n}\n\n.white-box {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  margin-left: 46%;\n  z-index: 1;\n  position: relative;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbm9taW5hdGlvbi1zbGlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZGVub21pbmF0aW9uLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbm9taW5hdGlvbi1zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gICAgLy8gei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kZW5vbS1jb3VudCB7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmRlbm9tLXN1YiB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4ud2hpdGUtYm94IHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NiU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 95938:
/*!************************************************************************!*\
  !*** ./src/app/components/download/download.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.main {\n  padding: 10px;\n}\n\n::ng-deep .wider-popover {\n  --width: 82%;\n  --max-width: 82%;\n  --offset-x: -5px;\n}\n\n.selectAccId {\n  width: 100%;\n}\n\n.closeIcon {\n  margin-left: 55%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n\n.custom-btn {\n  height: 50px;\n}\n\n.dateRange {\n  margin-left: 10px;\n}\n\n.dateInput {\n  border: none;\n  width: 350px;\n}\n\n:host(.ion-focused) .item-native {\n  background: none;\n  opacity: var(--background-focused-opacity);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUFBSiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICMzNDc3QzY7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG4ubWFpbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAud2lkZXItcG9wb3ZlciB7XHJcbiAgICAtLXdpZHRoOiA4MiU7XHJcbiAgICAtLW1heC13aWR0aDogODIlO1xyXG4gICAgLS1vZmZzZXQteDogLTVweDtcclxufVxyXG5cclxuLnNlbGVjdEFjY0lkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2xvc2VJY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSVcclxufVxyXG5cclxuLmN1c3RvbS1idG4ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZGF0ZVJhbmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZUlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuOmhvc3QoLmlvbi1mb2N1c2VkKSAuaXRlbS1uYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG9wYWNpdHk6IHZhcigtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5KTtcclxufSJdfQ== */";

/***/ }),

/***/ 70658:
/*!******************************************************************************!*\
  !*** ./src/app/components/duplication/duplication.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "table {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.icon {\n  color: #000000;\n}\n\n.title-div {\n  margin-bottom: -20px;\n}\n\n.cust-data {\n  margin: 0px;\n  color: #00000F;\n  font-size: 14px;\n}\n\n.mobile-num {\n  color: \"#B20000\";\n}\n\ntd,\nth {\n  border: none !important;\n  text-align: left;\n  padding: 8px;\n}\n\nth.semi:after {\n  content: \":\";\n  float: right;\n}\n\nth.semi {\n  color: #051A2D;\n}\n\n.content-bg {\n  background: #f3f3f3 0% 0% no-repeat padding-box !important;\n  border: 8px solid #ffffff !important;\n  border-radius: 21px !important;\n  margin-top: 20px;\n}\n\nion-button.next {\n  width: 120px;\n  height: 40px;\n  margin-top: 30px;\n  font-size: 10px;\n  text-transform: capitalize;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.accept {\n  width: 120px;\n  height: 40px;\n  margin-top: 30px;\n  font-size: 10px;\n  text-transform: capitalize;\n  --background: #ffffff;\n  --color: #004B96 !important;\n}\n\nion-button.cancel {\n  width: 120px;\n  height: 40px;\n  margin-top: 30px;\n  font-size: 10px;\n  text-transform: capitalize;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.back {\n  width: 120px;\n  height: 40px;\n  margin-top: 30px;\n  font-size: 10px;\n  text-transform: capitalize;\n  --background: #ffffff;\n  --color: #B20000 !important;\n}\n\n:host::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  background: #fffefe 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.0901960784);\n  border: none;\n}\n\n:host::ng-deep .mat-form-field-outline-start,\n:host::ng-deep .mat-form-field-outline-end,\n:host::ng-deep .mat-form-field-outline-gap {\n  border: none !important;\n}\n\n:host::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 12px 0px 12px 0px;\n}\n\n:host::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0;\n}\n\n:host::ng-deep .mat-form-field-infix {\n  border-top: 8px solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1cGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBR0E7O0VBRUUsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSwwREFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTs7O0VBR0UsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUY7O0FBQ0E7RUFDRSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQ0FBQTtBQUVGIiwiZmlsZSI6ImR1cGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pY29ue1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxufVxyXG4udGl0bGUtZGl2e1xyXG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG59XHJcblxyXG4uY3VzdC1kYXRhe1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDBGO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1vYmlsZS1udW17XHJcbiAgY29sb3I6JyNCMjAwMDAnXHJcbn1cclxuXHJcblxyXG5cclxudGQsXHJcbnRoIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuXHJcbnRoLnNlbWk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiOlwiO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG50aC5zZW1pe1xyXG4gIGNvbG9yOiAjMDUxQTJEO1xyXG59XHJcblxyXG4uY29udGVudC1iZyB7XHJcbiAgYmFja2dyb3VuZDogI2YzZjNmMyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3ggIWltcG9ydGFudDtcclxuICBib3JkZXI6IDhweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7ICBcclxuICBib3JkZXItcmFkaXVzOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5uZXh0IHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkLCAjMDA0Yzk3KTtcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1idXR0b24uYWNjZXB0e1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tY29sb3I6ICMwMDRCOTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5jYW5jZWwge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1jb2xvcjogI0IyMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZlZmUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzAwMDAwMDE3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQsXHJcbjpob3N0OjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCxcclxuOmhvc3Q6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDEycHggMHB4IDEycHggMHB4O1xyXG59XHJcblxyXG46aG9zdDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59Il19 */";

/***/ }),

/***/ 25383:
/*!****************************************************************************************!*\
  !*** ./src/app/components/fingerprint-scan/fingerprint-scan.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.capture-circle {\n  height: 120px;\n  width: 120px;\n  text-align: center;\n  border: 15px solid #E9ECF5;\n  border-radius: 50%;\n  position: relative;\n}\n\n.scan-img {\n  height: 50px;\n  width: 50px;\n  position: relative;\n  top: 23%;\n}\n\n.scan-div {\n  display: flex;\n  justify-content: center;\n}\n\n.demo {\n  margin-left: 90px;\n}\n\n.btn-footer {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmdlcnByaW50LXNjYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGtDQUFBO0FBS0oiLCJmaWxlIjoiZmluZ2VycHJpbnQtc2Nhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ubmV4dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCwgIzAwNGM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uLmJhY2sge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcHR1cmUtY2lyY2xle1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMTVweCBzb2xpZCAjRTlFQ0Y1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zY2FuLWltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMyU7XHJcbn1cclxuLnNjYW4tZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZW1ve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHhcclxufVxyXG4uYnRuLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltYWdle1xyXG59Il19 */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".footer-custom-icon {\n  position: absolute !important;\n  top: -7px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-appt {\n  position: absolute !important;\n  top: -6px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-small {\n  position: absolute !important;\n  top: 0px !important;\n  left: 0px !important;\n  width: 60px !important;\n  height: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWN1c3RvbS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWN1c3RvbS1pY29uLWFwcHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogLTZweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItY3VzdG9tLWljb24tc21hbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 91242:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/kyc-modal/customer-auto-verification/customer-auto-verification.component.scss?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".segment-button-checked {\n  background-color: #d6dbea !important;\n  color: #ffffff;\n  border: 2px solid #3c75ae;\n}\n\n.verification_section .fingerscan {\n  padding: 5px 5px 5px 5px;\n}\n\n.verification_section .fingerscan .fingerprint_label {\n  margin-left: 28%;\n}\n\n.verification_section .irish {\n  padding: 5px 5px 5px 5px;\n}\n\n.verification_section .irish .irish_label {\n  margin-left: 28%;\n}\n\n.verification_section .facescan {\n  padding: 5px 5px 5px 5px;\n}\n\n.verification_section .facescan .facescan_label {\n  margin-left: 28%;\n}\n\n.new_cust {\n  width: 50%;\n  color: black;\n}\n\n.exist_cust {\n  color: black;\n}\n\n.uploadDocType {\n  margin-left: 120px;\n  height: min-content;\n}\n\n.uploadDocType .segment-button-checked {\n  background-color: #004385 !important;\n  color: #ffffff;\n  border: 2px solid #3c75ae;\n}\n\n.auto {\n  max-height: 74%;\n  max-width: 46%;\n}\n\n.otp_field {\n  border: 2px hidden gray;\n  box-shadow: 2px 2px 2px 2px rgb(184, 178, 178);\n  border-radius: 10px;\n  margin-top: 20px;\n  margin-left: 20%;\n}\n\n.mat-tab-nav-bar {\n  border-bottom: none;\n}\n\n.mat-tab-header {\n  border-bottom: none;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n::ng-deep .mat-ink-bar {\n  height: 4px;\n  top: 8px;\n  border-radius: 10px;\n}\n\n::ng-deep .mat-tab-header {\n  border: none;\n}\n\n.auto-manual-toggle-group {\n  background: #f3f3f3 0% 0% no-repeat padding-box;\n  padding: 3px;\n  border-radius: 12px !important;\n  opacity: 1;\n  width: 100%;\n}\n\n.auto-manual-toggle {\n  color: #ffffff !important;\n  font: medium poppins !important;\n}\n\n::ng-deep .mat-button-toggle-label-content {\n  color: black;\n}\n\n.mat-button-toggle-checked {\n  background-color: #d6dbea !important;\n  color: rgba(0, 0, 0, 0) !important;\n  border-radius: 12px !important;\n  border: 1px solid #004c97;\n  width: 100%;\n}\n\n.AutomanualToggle .auto-manual-toggle-group {\n  background: #f3f3f3 0% 0% no-repeat padding-box;\n  border: 1px solid #004c97;\n  border-radius: 12px !important;\n  opacity: 1;\n}\n\n.AutomanualToggle .auto-manual-toggle {\n  width: 100px !important;\n  color: #6e6e6e !important;\n  font: medium poppins !important;\n}\n\n.AutomanualToggle .mat-button-toggle-checked {\n  background-color: #004c97 !important;\n  color: white !important;\n  border-radius: 12px !important;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-around;\n  padding-top: 18px;\n}\n\n.customerHeading {\n  display: flex;\n  height: 50px;\n  align-items: center;\n}\n\n::ng-deep .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-outer-circle {\n  border-color: #004385 !important;\n  /* Sets outer circle & click effect color */\n}\n\n::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #004385 !important;\n  /* Sets inner circle color */\n}\n\nmat-card.otpandbioclass {\n  border-radius: 12px;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.0901960784);\n}\n\n.widthclass {\n  display: inline-block;\n  width: 45%;\n}\n\n.margin {\n  margin-right: 30px;\n}\n\n.otpclass {\n  margin-left: 16px;\n}\n\n.bioclass {\n  margin-left: 16px;\n}\n\ninput::placeholder {\n  text-transform: capitalize;\n  letter-spacing: 7.2px;\n  text-align: center;\n}\n\n.customerHeading2 {\n  margin-top: 10px;\n}\n\n.customerHeading3 {\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.choose {\n  padding-left: 10px;\n  margin-right: 10%;\n}\n\n.ion_radio_cards {\n  margin-top: 10px;\n  width: 100%;\n  margin-left: -20px;\n  margin-right: 10px;\n}\n\n.card1 {\n  border-radius: 15px;\n  width: 200px;\n  box-shadow: rgba(0, 0, 0, 0.0705882353);\n  border: 1px solid grey;\n}\n\n.card2 {\n  border-radius: 15px;\n  width: 200px;\n  box-shadow: rgba(0, 0, 0, 0.0705882353);\n  border: 1px solid grey;\n}\n\n.new_manual[_ngcontent-nkd-c420] {\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-right: 3px;\n}\n\n.file-content-wrapper {\n  margin-top: 160px !important;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.cat-text {\n  color: #8d8d8d !important;\n  font-size: 12px !important;\n  opacity: 100%;\n  margin-bottom: 8px !important;\n  margin-top: -6px !important;\n}\n\nh6.cat-head {\n  color: #000000;\n  font-size: 20px;\n}\n\n.card {\n  width: auto;\n  height: 85px;\n  padding: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.chq-text {\n  color: #000000;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre-line;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.danger {\n  color: #b20000 !important;\n  opacity: 100% !important;\n}\n\nion-progress-bar {\n  --background: #e8e8e8;\n  --progress-background: linear-gradient(90deg, #051a2d, #004c97);\n  height: 8px !important;\n  border-radius: 16px !important;\n}\n\n.file-card {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  width: auto;\n  height: 110px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.file-card .p-1 {\n  height: 80px;\n}\n\n.file-card .pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.file-card .border-end {\n  border-right: 1pt solid #dee2e6 !important;\n}\n\n.file-card p {\n  opacity: 100% !important;\n  color: #707070 !important;\n  font-size: 13px !important;\n}\n\n.file-card .avatar {\n  height: 60px;\n  width: 60px;\n  background: #edecec;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n.file-card .avatar .bg-gradient {\n  background-image: #edecec !important;\n}\n\n.file-card .avatar img {\n  margin-top: 16px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.widthForMat {\n  width: 93%;\n  margin-top: 20px;\n}\n\n.btns {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin-left: 10px;\n  margin-top: 80px;\n}\n\n.btns .btns1 {\n  padding: 12px 28px;\n  width: 48%;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 35px;\n  background: rgb(5, 26, 45);\n  background: linear-gradient(148deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n}\n\n.btns .btns2 {\n  padding: 12px 28px;\n  width: 48%;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 35px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.15);\n  color: black;\n}\n\n.move_toggle .auto-manual-toggle-group {\n  background: #f3f3f3 0% 0% no-repeat padding-box;\n  border: 1px solid #004c97;\n  border-radius: 12px !important;\n  opacity: 1;\n}\n\n.move_toggle .auto-manual-toggle {\n  width: 100px !important;\n  color: #6e6e6e !important;\n  font: medium poppins !important;\n}\n\n.move_toggle .mat-button-toggle-checked {\n  background-color: #004c97 !important;\n  color: white !important;\n  border-radius: 12px !important;\n}\n\n.on-icon {\n  display: flex;\n}\n\nion-toolbar {\n  --display: flex !important;\n  --align-items: center;\n  --justify-content: space-between;\n  --color: #004c97;\n  --width: 100%;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #b20000;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.full-width90.m-2 {\n  margin-left: 10px;\n  box-shadow: #707070;\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.card-biometric {\n  margin-right: 20px;\n  margin-top: 20px;\n  border-radius: 16px;\n}\n\n.card-biometric .biometric-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.card-biometric .biometric-div .fingerPrint {\n  color: #004c97;\n  font-size: 12px;\n}\n\n.card-biometric .biometric-div .irishText {\n  color: #707070;\n  font-size: 12px;\n}\n\n.card-biometric .biometric-div .faceScan {\n  color: #707070;\n  font-size: 12px;\n}\n\n.card-biometric .biometric-div .verticalLine {\n  border: 1px rgba(0, 0, 0, 0.0901960784) solid;\n}\n\n.bioclass {\n  margin-left: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWF1dG8tdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBSUEseUJBQUE7QUFGSjs7QUFNSTtFQUNFLHdCQUFBO0FBSE47O0FBSU07RUFDRSxnQkFBQTtBQUZSOztBQUtJO0VBQ0Usd0JBQUE7QUFITjs7QUFJTTtFQUNFLGdCQUFBO0FBRlI7O0FBS0k7RUFDRSx3QkFBQTtBQUhOOztBQUlNO0VBQ0UsZ0JBQUE7QUFGUjs7QUFPRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBSko7O0FBVUU7RUFDRSxZQUFBO0FBUEo7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBT0k7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQVBOOztBQVVFO0VBRUUsZUFBQTtFQUNBLGNBQUE7QUFSSjs7QUFlRTtFQUNFLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFaSjs7QUFjRTtFQUNFLG1CQUFBO0FBWEo7O0FBYUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVZKOztBQVlFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVdFO0VBQ0UsWUFBQTtBQVJKOztBQWVFO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVpKOztBQWVFO0VBRUUseUJBQUE7RUFDQSwrQkFBQTtBQWJKOztBQWdCRTtFQUNFLFlBQUE7QUFiSjs7QUFnQkU7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFpQkk7RUFDRSwrQ0FBQTtFQUVBLHlCQUFBO0VBRUEsOEJBQUE7RUFFQSxVQUFBO0FBakJOOztBQW9CSTtFQUNFLHVCQUFBO0VBRUEseUJBQUE7RUFFQSwrQkFBQTtBQXBCTjs7QUF1Qkk7RUFDRSxvQ0FBQTtFQUVBLHVCQUFBO0VBRUEsOEJBQUE7QUF2Qk47O0FBMkJFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUF4Qko7O0FBMEJFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXZCSjs7QUEyQkU7O0VBSUUsZ0NBQUE7RUFDQSwyQ0FBQTtBQTFCSjs7QUE0QkU7RUFDRSxvQ0FBQTtFQUNBLDRCQUFBO0FBekJKOztBQTJCRTtFQUNFLG1CQUFBO0VBQ0Esb0RBQUE7QUF4Qko7O0FBMkJFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBeEJKOztBQTBCRTtFQUNFLGtCQUFBO0FBdkJKOztBQXlCRTtFQUNFLGlCQUFBO0FBdEJKOztBQXdCRTtFQUNFLGlCQUFBO0FBckJKOztBQXdCRTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxnQkFBQTtBQXJCSjs7QUF1QkU7RUFDRSxhQUFBO0VBR0EsbUJBQUE7QUF0Qko7O0FBd0JFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBckJKOztBQXVCRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUFwQko7O0FBc0JFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtBQW5CSjs7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBc0JFO0VBQ0UsNEJBQUE7QUFuQko7O0FBc0JFO0VBQ0UsZ0JBQUE7QUFuQko7O0FBc0JFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBbkJKOztBQXNCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBbkJKOztBQXNCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQW5CSjs7QUFzQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQW5CSjs7QUFzQkU7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBbkJKOztBQXNCRTtFQUNFLHFCQUFBO0VBQ0EsK0RBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBbkJKOztBQXNCRTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbkJKOztBQXFCSTtFQUNFLFlBQUE7QUFuQk47O0FBc0JJO0VBQ0UsK0JBQUE7QUFwQk47O0FBdUJJO0VBQ0UsMENBQUE7QUFyQk47O0FBd0JJO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBdEJOOztBQXlCSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF2Qk47O0FBeUJNO0VBQ0Usb0NBQUE7QUF2QlI7O0FBMEJNO0VBQ0UsZ0JBQUE7QUF4QlI7O0FBNkJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0FBMUJKOztBQTZCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQTFCSjs7QUE2QkU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUExQko7O0FBOEJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTNCSjs7QUE0Qkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEVBQUE7QUExQk47O0FBZ0NJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQTlCTjs7QUFrQ0k7RUFDRSwrQ0FBQTtFQUVBLHlCQUFBO0VBRUEsOEJBQUE7RUFFQSxVQUFBO0FBbENOOztBQXFDSTtFQUNFLHVCQUFBO0VBRUEseUJBQUE7RUFFQSwrQkFBQTtBQXJDTjs7QUEwQ0k7RUFDRSxvQ0FBQTtFQUVBLHVCQUFBO0VBRUEsOEJBQUE7QUExQ047O0FBOENFO0VBQ0UsYUFBQTtBQTNDSjs7QUE2Q0U7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUExQ0o7O0FBNkNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0FBMUNKOztBQTZDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQTFDSjs7QUE2Q0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUExQ0o7O0FBNENFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQXpDSjs7QUE0Q0U7RUFDRSxzQkFBQTtBQXpDSjs7QUE0Q0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF6Q0o7O0FBMkNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQXpDTjs7QUEyQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXpDUjs7QUEyQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXpDUjs7QUEyQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXpDUjs7QUEyQ007RUFDRSw2Q0FBQTtBQXpDUjs7QUE2Q0U7RUFDRSxpQkFBQTtBQTFDSiIsImZpbGUiOiJjdXN0b21lci1hdXRvLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmRiZWEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLy8gYm9yZGVyLWNvbG9yOiAjM0M3NUFFO1xyXG4gICAgLy8gYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2M3NWFlO1xyXG4gIH1cclxuIFxyXG4gIC52ZXJpZmljYXRpb25fc2VjdGlvbiB7XHJcbiAgICAuZmluZ2Vyc2NhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgICAgLmZpbmdlcnByaW50X2xhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXJpc2gge1xyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICAgIC5pcmlzaF9sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZhY2VzY2FuIHtcclxuICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgICAuZmFjZXNjYW5fbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm5ld19jdXN0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC8vIC5uZXdfY3VzdDp2aXNpdGVke1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICBcclxuICAvLyB9XHJcbiAgLmV4aXN0X2N1c3Qge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAudXBsb2FkRG9jVHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Mzg1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAvLyBib3JkZXItY29sb3I6ICMzQzc1QUU7XHJcbiAgICAgIC8vIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2M3NWFlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYXV0byB7XHJcbiAgICAvLyB3aWR0aDogNDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDc0JTtcclxuICAgIG1heC13aWR0aDogNDYlO1xyXG4gIH1cclxuICAvLyAubWFudWFsIHtcclxuICAvLyB3aWR0aDo0MHB4O1xyXG4gIC8vIG1heC1oZWlnaHQ6IDc0JTtcclxuICAvLyBtYXgtd2lkdGg6NDYlO1xyXG4gIC8vIH1cclxuICAub3RwX2ZpZWxkIHtcclxuICAgIGJvcmRlcjogMnB4IGhpZGRlbiBncmF5O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYigxODQsIDE3OCwgMTc4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgLm1hdC10YWItbmF2LWJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxuICAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWluay1iYXIge1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLy9cclxuICAvLy9cclxuICBcclxuICAuYXV0by1tYW51YWwtdG9nZ2xlLWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYXV0by1tYW51YWwtdG9nZ2xlIHtcclxuICAgIC8vIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQ6IG1lZGl1bSBwb3BwaW5zICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmRiZWEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDRjOTc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLkF1dG9tYW51YWxUb2dnbGUge1xyXG4gICAgLmF1dG8tbWFudWFsLXRvZ2dsZS1ncm91cCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA0Yzk3O1xyXG4gIFxyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXV0by1tYW51YWwtdG9nZ2xlIHtcclxuICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgIGNvbG9yOiAjNmU2ZTZlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgIGZvbnQ6IG1lZGl1bSBwb3BwaW5zICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTcgIWltcG9ydGFudDtcclxuICBcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgfVxyXG4gIC5jdXN0b21lckhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDotMTRweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwXHJcbiAgICAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkXHJcbiAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcclxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDQzODUgIWltcG9ydGFudDtcclxuICAgIC8qIFNldHMgb3V0ZXIgY2lyY2xlICYgY2xpY2sgZWZmZWN0IGNvbG9yICovXHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQzODUgIWltcG9ydGFudDtcclxuICAgIC8qIFNldHMgaW5uZXIgY2lyY2xlIGNvbG9yICovXHJcbiAgfVxyXG4gIG1hdC1jYXJkLm90cGFuZGJpb2NsYXNzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDE3O1xyXG4gIH1cclxuICBcclxuICAud2lkdGhjbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuICAubWFyZ2luIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLm90cGNsYXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuICAuYmlvY2xhc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA3LjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbWVySGVhZGluZzIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmN1c3RvbWVySGVhZGluZzMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAuY2hvb3NlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIH1cclxuICBcclxuICAuaW9uX3JhZGlvX2NhcmRzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmNhcmQxIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMTI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIH1cclxuICAuY2FyZDIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAxMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgfVxyXG4gIC5uZXdfbWFudWFsW19uZ2NvbnRlbnQtbmtkLWM0MjBdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuICBcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2ZpbGUgdXBsb2FkIGNzc1xyXG4gIC5maWxlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubXQtMTYge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhdC10ZXh0IHtcclxuICAgIGNvbG9yOiAjOGQ4ZDhkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC02cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaDYuY2F0LWhlYWQge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYig5OSA5OSA5OSAvIDIwJSkgMHB4IDJweCA4cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaHEtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjYjIwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1wcm9ncmVzcy1iYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gICAgaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGUtY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMTAwIDEwMCAxMTEgLyAyMCUpIDBweCA3cHggMjlweCAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgLnAtMSB7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5wYi0zIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5ib3JkZXItZW5kIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHQgc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2VkZWNlYztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBcclxuICAgICAgLmJnLWdyYWRpZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAjZWRlY2VjICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b24ubmV4dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCwgIzAwNGM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uLmJhY2sge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAud2lkdGhGb3JNYXQge1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC8vLy8vL1xyXG4gIC8vLyBidXR0b25zXHJcbiAgLmJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgLmJ0bnMxIHtcclxuICAgICAgcGFkZGluZzogMTJweCAyOHB4O1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYig1LCAyNiwgNDUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMTQ4ZGVnLFxyXG4gICAgICAgIHJnYmEoNSwgMjYsIDQ1LCAxKSAwJSxcclxuICAgICAgICByZ2JhKDAsIDc2LCAxNTEsIDEpIDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC5idG5zMiB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjhweDtcclxuICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLm1vdmVfdG9nZ2xlIHtcclxuICAgIC5hdXRvLW1hbnVhbC10b2dnbGUtZ3JvdXAge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwNGM5NztcclxuICBcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmF1dG8tbWFudWFsLXRvZ2dsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgICBjb2xvcjogIzZlNmU2ZSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgICBmb250OiBtZWRpdW0gcG9wcGlucyAhaW1wb3J0YW50O1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDotNTRweDtcclxuICAgICAgLy8gbWFyZ2luLXRvcDoycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTcgIWltcG9ydGFudDtcclxuICBcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm9uLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC0tY29sb3I6ICMwMDRjOTc7XHJcbiAgICAtLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uLm5leHQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbi5jYW5jZWwge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogI2IyMDAwMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbi5iYWNrIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGg5MC5tLTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAjNzA3MDcwO1xyXG4gIH1cclxuICBcclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1iaW9tZXRyaWMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgXHJcbiAgICAuYmlvbWV0cmljLWRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIC5maW5nZXJQcmludCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDRjOTc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pcmlzaFRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuZmFjZVNjYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAudmVydGljYWxMaW5lIHtcclxuICAgICAgICBib3JkZXI6IDFweCAjMDAwMDAwMTcgc29saWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJpb2NsYXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */";

/***/ }),

/***/ 43369:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/kyc-modal/customer-manual-verification/customer-manual-verification.component.scss?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1tYW51YWwtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 93895:
/*!**************************************************************************!*\
  !*** ./src/app/components/kyc-modal/kyc-modal.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".segment-button-checked {\n  background-color: #d6dbea !important;\n  color: #ffffff;\n  border: 2px solid #3c75ae;\n}\n\n.verification_section .fingerscan {\n  padding: 5px 5px 5px 5px;\n}\n\n.verification_section .fingerscan .fingerprint_label {\n  margin-left: 28%;\n}\n\n.verification_section .irish {\n  padding: 5px 5px 5px 5px;\n}\n\n.verification_section .irish .irish_label {\n  margin-left: 28%;\n}\n\n.verification_section .facescan {\n  padding: 5px 5px 5px 5px;\n}\n\n.verification_section .facescan .facescan_label {\n  margin-left: 28%;\n}\n\n.new_cust {\n  width: 50%;\n  color: black;\n}\n\n.exist_cust {\n  color: black;\n}\n\n.uploadDocType {\n  margin-left: 120px;\n  height: min-content;\n}\n\n.uploadDocType .segment-button-checked {\n  background-color: #004385 !important;\n  color: #ffffff;\n  border: 2px solid #3c75ae;\n}\n\n.auto {\n  max-height: 74%;\n  max-width: 46%;\n}\n\n.otp_field {\n  border: 2px hidden gray;\n  box-shadow: 2px 2px 2px 2px rgb(184, 178, 178);\n  border-radius: 10px;\n  margin-top: 20px;\n  margin-left: 20%;\n}\n\n.mat-tab-nav-bar {\n  border-bottom: none;\n}\n\n.mat-tab-header {\n  border-bottom: none;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n::ng-deep .mat-ink-bar {\n  height: 4px;\n  top: 8px;\n  border-radius: 10px;\n}\n\n::ng-deep .mat-tab-header {\n  border: none;\n}\n\n.auto-manual-toggle-group {\n  background: #f3f3f3 0% 0% no-repeat padding-box;\n  padding: 3px;\n  border-radius: 12px !important;\n  opacity: 1;\n  width: 100%;\n}\n\n.auto-manual-toggle {\n  color: #ffffff !important;\n  font: medium poppins !important;\n}\n\n::ng-deep .mat-button-toggle-label-content {\n  color: black;\n}\n\n.mat-button-toggle-checked {\n  background-color: #d6dbea !important;\n  color: rgba(0, 0, 0, 0) !important;\n  border-radius: 12px !important;\n  border: 1px solid #004c97;\n  width: 100%;\n}\n\n.AutomanualToggle .auto-manual-toggle-group {\n  background: #f3f3f3 0% 0% no-repeat padding-box;\n  border: 1px solid #004c97;\n  border-radius: 12px !important;\n  opacity: 1;\n}\n\n.AutomanualToggle .auto-manual-toggle {\n  width: 100px !important;\n  color: #6e6e6e !important;\n  font: medium poppins !important;\n}\n\n.AutomanualToggle .mat-button-toggle-checked {\n  background-color: #004c97 !important;\n  color: white !important;\n  border-radius: 12px !important;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-around;\n  padding-top: 18px;\n}\n\n.customerHeading {\n  display: flex;\n  height: 50px;\n  align-items: center;\n}\n\n::ng-deep .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-outer-circle {\n  border-color: #004385 !important;\n  /* Sets outer circle & click effect color */\n}\n\n::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #004385 !important;\n  /* Sets inner circle color */\n}\n\nmat-card.otpandbioclass {\n  border-radius: 12px;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.0901960784);\n}\n\n.widthclass {\n  display: inline-block;\n  width: 45%;\n}\n\n.margin {\n  margin-right: 30px;\n}\n\n.otpclass {\n  margin-left: 16px;\n}\n\n.bioclass {\n  margin-left: 16px;\n}\n\ninput::placeholder {\n  text-transform: capitalize;\n  letter-spacing: 7.2px;\n  text-align: center;\n}\n\n.customerHeading2 {\n  margin-top: 10px;\n}\n\n.customerHeading3 {\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.choose {\n  padding-left: 10px;\n  margin-right: 10%;\n}\n\n.ion_radio_cards {\n  margin-top: 10px;\n  width: 100%;\n  margin-left: -20px;\n  margin-right: 10px;\n}\n\n.card1 {\n  border-radius: 15px;\n  width: 200px;\n  box-shadow: rgba(0, 0, 0, 0.0705882353);\n  border: 1px solid grey;\n}\n\n.card2 {\n  border-radius: 15px;\n  width: 200px;\n  box-shadow: rgba(0, 0, 0, 0.0705882353);\n  border: 1px solid grey;\n}\n\n.new_manual[_ngcontent-nkd-c420] {\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-right: 3px;\n}\n\n.file-content-wrapper {\n  margin-top: 160px !important;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.cat-text {\n  color: #8d8d8d !important;\n  font-size: 12px !important;\n  opacity: 100%;\n  margin-bottom: 8px !important;\n  margin-top: -6px !important;\n}\n\nh6.cat-head {\n  color: #000000;\n  font-size: 20px;\n}\n\n.card {\n  width: auto;\n  height: 85px;\n  padding: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.chq-text {\n  color: #000000;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre-line;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.danger {\n  color: #b20000 !important;\n  opacity: 100% !important;\n}\n\nion-progress-bar {\n  --background: #e8e8e8;\n  --progress-background: linear-gradient(90deg, #051a2d, #004c97);\n  height: 8px !important;\n  border-radius: 16px !important;\n}\n\n.file-card {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  width: auto;\n  height: 110px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.file-card .p-1 {\n  height: 80px;\n}\n\n.file-card .pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.file-card .border-end {\n  border-right: 1pt solid #dee2e6 !important;\n}\n\n.file-card p {\n  opacity: 100% !important;\n  color: #707070 !important;\n  font-size: 13px !important;\n}\n\n.file-card .avatar {\n  height: 60px;\n  width: 60px;\n  background: #edecec;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n.file-card .avatar .bg-gradient {\n  background-image: #edecec !important;\n}\n\n.file-card .avatar img {\n  margin-top: 16px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.widthForMat {\n  width: 93%;\n  margin-top: 20px;\n}\n\n.btns {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin-left: 10px;\n  margin-top: 80px;\n}\n\n.btns .btns1 {\n  padding: 12px 28px;\n  width: 48%;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 35px;\n  background: rgb(5, 26, 45);\n  background: linear-gradient(148deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n}\n\n.btns .btns2 {\n  padding: 12px 28px;\n  width: 48%;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 35px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.15);\n  color: black;\n}\n\n.move_toggle .auto-manual-toggle-group {\n  background: #f3f3f3 0% 0% no-repeat padding-box;\n  border: 1px solid #004c97;\n  border-radius: 12px !important;\n  opacity: 1;\n}\n\n.move_toggle .auto-manual-toggle {\n  width: 100px !important;\n  color: #6e6e6e !important;\n  font: medium poppins !important;\n}\n\n.move_toggle .mat-button-toggle-checked {\n  background-color: #004c97 !important;\n  color: white !important;\n  border-radius: 12px !important;\n}\n\n.on-icon {\n  display: flex;\n}\n\nion-toolbar {\n  --display: flex !important;\n  --align-items: center;\n  --justify-content: space-between;\n  --color: #004c97;\n  --width: 100%;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #b20000;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.full-width90.m-2 {\n  margin-left: 10px;\n  box-shadow: #707070;\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.card-biometric {\n  margin-right: 20px;\n  margin-top: 20px;\n  border-radius: 16px;\n}\n\n.card-biometric .biometric-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.card-biometric .biometric-div .fingerPrint {\n  color: #004c97;\n  font-size: 12px;\n}\n\n.card-biometric .biometric-div .irishText {\n  color: #707070;\n  font-size: 12px;\n}\n\n.card-biometric .biometric-div .faceScan {\n  color: #707070;\n  font-size: 12px;\n}\n\n.card-biometric .biometric-div .verticalLine {\n  border: 1px rgba(0, 0, 0, 0.0901960784) solid;\n}\n\n.bioclass {\n  margin-left: -8px;\n}\n\nh3 {\n  font-size: 15px;\n}\n\n.toggle-customer-details {\n  padding-top: 10px;\n}\n\nion-button.man {\n  float: right;\n  --background: #004385;\n  --color: #ffffff;\n  --border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt5Yy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUlBLHlCQUFBO0FBSEY7O0FBNkJFO0VBQ0Usd0JBQUE7QUExQko7O0FBMkJJO0VBQ0UsZ0JBQUE7QUF6Qk47O0FBNEJFO0VBQ0Usd0JBQUE7QUExQko7O0FBMkJJO0VBQ0UsZ0JBQUE7QUF6Qk47O0FBNEJFO0VBQ0Usd0JBQUE7QUExQko7O0FBMkJJO0VBQ0UsZ0JBQUE7QUF6Qk47O0FBOEJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUEzQkY7O0FBaUNBO0VBQ0UsWUFBQTtBQTlCRjs7QUFnQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBN0JGOztBQThCRTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUdBLHlCQUFBO0FBOUJKOztBQWlDQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0FBL0JGOztBQXNDQTtFQUNFLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFuQ0Y7O0FBcUNBO0VBQ0UsbUJBQUE7QUFsQ0Y7O0FBb0NBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFqQ0Y7O0FBMENBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQXZDRjs7QUF5Q0E7RUFDRSxZQUFBO0FBdENGOztBQTZDQTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUExQ0Y7O0FBNkNBO0VBRUUseUJBQUE7RUFDQSwrQkFBQTtBQTNDRjs7QUE4Q0E7RUFDRSxZQUFBO0FBM0NGOztBQThDQTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQTNDRjs7QUErQ0U7RUFDRSwrQ0FBQTtFQUVBLHlCQUFBO0VBRUEsOEJBQUE7RUFFQSxVQUFBO0FBL0NKOztBQWtERTtFQUNFLHVCQUFBO0VBRUEseUJBQUE7RUFFQSwrQkFBQTtBQWxESjs7QUFxREU7RUFDRSxvQ0FBQTtFQUVBLHVCQUFBO0VBRUEsOEJBQUE7QUFyREo7O0FBeURBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUF0REY7O0FBd0RBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXJERjs7QUF5REE7O0VBSUUsZ0NBQUE7RUFDQSwyQ0FBQTtBQXhERjs7QUEwREE7RUFDRSxvQ0FBQTtFQUNBLDRCQUFBO0FBdkRGOztBQXlEQTtFQUNFLG1CQUFBO0VBQ0Esb0RBQUE7QUF0REY7O0FBeURBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBdERGOztBQXdEQTtFQUNFLGtCQUFBO0FBckRGOztBQXVEQTtFQUNFLGlCQUFBO0FBcERGOztBQXNEQTtFQUNFLGlCQUFBO0FBbkRGOztBQXNEQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQW5ERjs7QUFzREE7RUFDRSxnQkFBQTtBQW5ERjs7QUFxREE7RUFDRSxhQUFBO0VBR0EsbUJBQUE7QUFwREY7O0FBc0RBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQW5ERjs7QUFzREE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBbkRGOztBQXFEQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUFsREY7O0FBb0RBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtBQWpERjs7QUFtREE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFoREY7O0FBb0RBO0VBQ0UsNEJBQUE7QUFqREY7O0FBb0RBO0VBQ0UsZ0JBQUE7QUFqREY7O0FBb0RBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBakRGOztBQW9EQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBakRGOztBQW9EQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWpERjs7QUFvREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQWpERjs7QUFvREE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBakRGOztBQW9EQTtFQUNFLHFCQUFBO0VBQ0EsK0RBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBakRGOztBQW9EQTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBakRGOztBQW1ERTtFQUNFLFlBQUE7QUFqREo7O0FBb0RFO0VBQ0UsK0JBQUE7QUFsREo7O0FBcURFO0VBQ0UsMENBQUE7QUFuREo7O0FBc0RFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBcERKOztBQXVERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFyREo7O0FBdURJO0VBQ0Usb0NBQUE7QUFyRE47O0FBd0RJO0VBQ0UsZ0JBQUE7QUF0RE47O0FBMkRBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0FBeERGOztBQTJEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQXhERjs7QUEyREE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUF4REY7O0FBNERBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXpERjs7QUEwREU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEVBQUE7QUF4REo7O0FBOERFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQTVESjs7QUFnRUU7RUFDRSwrQ0FBQTtFQUVBLHlCQUFBO0VBRUEsOEJBQUE7RUFFQSxVQUFBO0FBaEVKOztBQW1FRTtFQUNFLHVCQUFBO0VBRUEseUJBQUE7RUFFQSwrQkFBQTtBQW5FSjs7QUF3RUU7RUFDRSxvQ0FBQTtFQUVBLHVCQUFBO0VBRUEsOEJBQUE7QUF4RUo7O0FBNEVBO0VBQ0UsYUFBQTtBQXpFRjs7QUEyRUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUF4RUY7O0FBMkVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0FBeEVGOztBQTJFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXhFRjs7QUEyRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUF4RUY7O0FBMEVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQXZFRjs7QUEwRUE7RUFDRSxzQkFBQTtBQXZFRjs7QUEwRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF2RUY7O0FBeUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQXZFSjs7QUF5RUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXZFTjs7QUF5RUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXZFTjs7QUF5RUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXZFTjs7QUF5RUk7RUFDRSw2Q0FBQTtBQXZFTjs7QUEyRUE7RUFDRSxpQkFBQTtBQXhFRjs7QUEwRUE7RUFDRSxlQUFBO0FBdkVGOztBQXlFQTtFQUNFLGlCQUFBO0FBdEVGOztBQXdFQTtFQUNJLFlBQUE7RUFDRixxQkFBQTtFQUNBLGdCQUFBO0VBQ0MscUJBQUE7QUFyRUgiLCJmaWxlIjoia3ljLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL25ld1xyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGJlYSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIC8vIGJvcmRlci1jb2xvcjogIzNDNzVBRTtcclxuICAvLyBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuXHJcbiAgYm9yZGVyOiAycHggc29saWQgIzNjNzVhZTtcclxufVxyXG4vLyBpb24tc2VnbWVudCB7XHJcbi8vICAgbWF4LXdpZHRoOiA0NiU7XHJcbi8vICAgbWF4LWhlaWdodDogNzQlO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbi8vIH1cclxuLy8gfVxyXG4vLyBpb24tc2VnbWVudC1idXR0b24ge1xyXG4vLyAgIHBhZGRpbmc6IDRweCAwO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4vLyAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiNENkRCRUEgIWltcG9ydGFudDtcclxuLy8gICAvKiAtLWNvbG9yOiAjM0M3NUFFOyAqL1xyXG4vLyAgIC8vIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XHJcbi8vICAgLy8gLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjM0M3NUFFO1xyXG4vLyB9XHJcbi8vIC5leGlzdGluZ19zZWN0aW9ue1xyXG4vLyAgIGlvbi1pbnB1dHtcclxuLy8gICAgIHdpZHRoOjQwMHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6MDtcclxuXHJcbi8vICAgfVxyXG4vLyB9XHJcbi52ZXJpZmljYXRpb25fc2VjdGlvbiB7XHJcbiAgLmZpbmdlcnNjYW4ge1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgLmZpbmdlcnByaW50X2xhYmVsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgIH1cclxuICB9XHJcbiAgLmlyaXNoIHtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgIC5pcmlzaF9sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mYWNlc2NhbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICAuZmFjZXNjYW5fbGFiZWwge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5ld19jdXN0IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4vLyAubmV3X2N1c3Q6dmlzaXRlZHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG5cclxuLy8gfVxyXG4uZXhpc3RfY3VzdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi51cGxvYWREb2NUeXBlIHtcclxuICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Mzg1ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vIGJvcmRlci1jb2xvcjogIzNDNzVBRTtcclxuICAgIC8vIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNjNzVhZTtcclxuICB9XHJcbn1cclxuLmF1dG8ge1xyXG4gIC8vIHdpZHRoOiA0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDc0JTtcclxuICBtYXgtd2lkdGg6IDQ2JTtcclxufVxyXG4vLyAubWFudWFsIHtcclxuLy8gd2lkdGg6NDBweDtcclxuLy8gbWF4LWhlaWdodDogNzQlO1xyXG4vLyBtYXgtd2lkdGg6NDYlO1xyXG4vLyB9XHJcbi5vdHBfZmllbGQge1xyXG4gIGJvcmRlcjogMnB4IGhpZGRlbiBncmF5O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2IoMTg0LCAxNzgsIDE3OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuLm1hdC10YWItbmF2LWJhciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubWF0LXRhYi1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4vLyAubWF0LWluay1iYXJ7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICBmbGV4LXNocmluazogMDtcclxuLy8gICB0b3A6IDBweDtcclxuLy8gfVxyXG46Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcclxuICBoZWlnaHQ6IDRweDtcclxuICB0b3A6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vL1xyXG4vLy9cclxuXHJcbi5hdXRvLW1hbnVhbC10b2dnbGUtZ3JvdXAge1xyXG4gIGJhY2tncm91bmQ6ICNmM2YzZjMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmF1dG8tbWFudWFsLXRvZ2dsZSB7XHJcbiAgLy8gd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBmb250OiBtZWRpdW0gcG9wcGlucyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmRiZWEgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDRjOTc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5BdXRvbWFudWFsVG9nZ2xlIHtcclxuICAuYXV0by1tYW51YWwtdG9nZ2xlLWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDRjOTc7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuYXV0by1tYW51YWwtdG9nZ2xlIHtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGNvbG9yOiAjNmU2ZTZlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgZm9udDogbWVkaXVtIHBvcHBpbnMgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTcgIWltcG9ydGFudDtcclxuXHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwYWRkaW5nLXRvcDogMThweDtcclxufVxyXG4uY3VzdG9tZXJIZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi1sZWZ0Oi0xNHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXBcclxuICAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkXHJcbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXHJcbi5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICBib3JkZXItY29sb3I6ICMwMDQzODUgIWltcG9ydGFudDtcclxuICAvKiBTZXRzIG91dGVyIGNpcmNsZSAmIGNsaWNrIGVmZmVjdCBjb2xvciAqL1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Mzg1ICFpbXBvcnRhbnQ7XHJcbiAgLyogU2V0cyBpbm5lciBjaXJjbGUgY29sb3IgKi9cclxufVxyXG5tYXQtY2FyZC5vdHBhbmRiaW9jbGFzcyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDE3O1xyXG59XHJcblxyXG4ud2lkdGhjbGFzcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5vdHBjbGFzcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuLmJpb2NsYXNzIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBsZXR0ZXItc3BhY2luZzogNy4ycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY3VzdG9tZXJIZWFkaW5nMiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY3VzdG9tZXJIZWFkaW5nMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jaG9vc2Uge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmlvbl9yYWRpb19jYXJkcyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jYXJkMSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm94LXNoYWRvdzogIzAwMDAwMDEyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuLmNhcmQyIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3gtc2hhZG93OiAjMDAwMDAwMTI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG4ubmV3X21hbnVhbFtfbmdjb250ZW50LW5rZC1jNDIwXSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9maWxlIHVwbG9hZCBjc3NcclxuLmZpbGUtY29udGVudC13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAxNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMTYge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXQtdGV4dCB7XHJcbiAgY29sb3I6ICM4ZDhkOGQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaDYuY2F0LWhlYWQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogODVweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYig5OSA5OSA5OSAvIDIwJSkgMHB4IDJweCA4cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNocS10ZXh0IHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgY29sb3I6ICNiMjAwMDAgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1wcm9ncmVzcy1iYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCwgIzAwNGM5Nyk7XHJcbiAgaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IHJnYigxMDAgMTAwIDExMSAvIDIwJSkgMHB4IDdweCAyOXB4IDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAucC0xIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcblxyXG4gIC5wYi0zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWVuZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFwdCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRlY2VjO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLmJnLWdyYWRpZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogI2VkZWNlYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uLm5leHQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGhGb3JNYXQge1xyXG4gIHdpZHRoOiA5MyU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4vLy8vLy9cclxuLy8vIGJ1dHRvbnNcclxuLmJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIC5idG5zMSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI4cHg7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNSwgMjYsIDQ1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTQ4ZGVnLFxyXG4gICAgICByZ2JhKDUsIDI2LCA0NSwgMSkgMCUsXHJcbiAgICAgIHJnYmEoMCwgNzYsIDE1MSwgMSkgMTAwJVxyXG4gICAgKTtcclxuICB9XHJcbiAgLmJ0bnMyIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjhweDtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbi5tb3ZlX3RvZ2dsZSB7XHJcbiAgLmF1dG8tbWFudWFsLXRvZ2dsZS1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA0Yzk3O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmF1dG8tbWFudWFsLXRvZ2dsZSB7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICBjb2xvcjogIzZlNmU2ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgIGZvbnQ6IG1lZGl1bSBwb3BwaW5zICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDotNTRweDtcclxuICAgIC8vIG1hcmdpbi10b3A6MnB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGM5NyAhaW1wb3J0YW50O1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5vbi1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAtLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLS1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLS1jb2xvcjogIzAwNGM5NztcclxuICAtLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLm5leHQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uY2FuY2VsIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yOiAjYjIwMDAwO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmJhY2sge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG4uZnVsbC13aWR0aDkwLm0tMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogIzcwNzA3MDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWJpb21ldHJpYyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgLmJpb21ldHJpYy1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuZmluZ2VyUHJpbnQge1xyXG4gICAgICBjb2xvcjogIzAwNGM5NztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmlyaXNoVGV4dCB7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZVNjYW4ge1xyXG4gICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnZlcnRpY2FsTGluZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4ICMwMDAwMDAxNyBzb2xpZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJpb2NsYXNzIHtcclxuICBtYXJnaW4tbGVmdDogLThweDtcclxufVxyXG5oM3tcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnRvZ2dsZS1jdXN0b21lci1kZXRhaWxze1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbmlvbi1idXR0b24ubWFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAtLWJhY2tncm91bmQ6ICMwMDQzODU7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIFxyXG4gIH1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 54325:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#map {\n  width: 100%;\n  height: 100vh;\n}\n\nion-content {\n  --background: rgb(0 0 0 / 9%);\n}\n\n.leaflet-popup-content p {\n  margin: 11px 0 !important;\n}\n\n.map_marker {\n  position: relative;\n  width: 34px;\n  height: 48px;\n}\n\n.head-map {\n  z-index: -1;\n  position: inherit;\n  margin-top: 0px;\n}\n\nion-fab-button.back {\n  --background: #FFFEFE;\n  --color: #004C97;\n}\n\nion-fab-button.search {\n  --background: #FFFEFE;\n  --color: #000000;\n}\n\n/*marker text span css*/\n\n.info_window_container {\n  padding: 1rem;\n  overflow: scroll;\n}\n\n.info_window_container p {\n  font-size: 1.4rem;\n}\n\n.info_window_container h4 {\n  text-transform: capitalize;\n  font-size: 1.8rem;\n  margin: 1rem 0rem;\n}\n\n.info_window_container h5,\n.info_window_container span {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.3;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin: 0.2rem 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQSx1QkFBQTs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBRkoiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gOSUpO1xyXG59XHJcblxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMTFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXBfbWFya2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uaGVhZC1tYXAge1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24uYmFja3tcclxuICAtLWJhY2tncm91bmQ6ICNGRkZFRkU7XHJcbiAgLS1jb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24uc2VhcmNoe1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRkVGRTtcclxuICAtLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4vKm1hcmtlciB0ZXh0IHNwYW4gY3NzKi9cclxuXHJcbi5pbmZvX3dpbmRvd19jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICB9XHJcblxyXG4gIGg1LFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwLjJyZW0gMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 14757:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/otp-verification-popup/otp-verification-popup.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = ".otp-auth {\n  color: #000000;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.otp-msg {\n  color: #B1B1B1;\n}\n\n.resend {\n  color: #004C97;\n  padding-top: 12px;\n}\n\n.form-box {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.btn-prcs {\n  padding: 0 16px;\n}\n\n.btn-prcs ion-button.process {\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n  height: 50px;\n  margin-top: -100px;\n  text-transform: capitalize;\n}\n\n::ng-deep .ng-otp-input-wrapper .ng-star-inserted {\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC12ZXJpZmljYXRpb24tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0g7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSkE7RUFDSSxzREFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFNSjs7QUFGQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFLRiIsImZpbGUiOiJvdHAtdmVyaWZpY2F0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cC1hdXRoe1xyXG4gICBjb2xvcjojMDAwMDAwO1xyXG4gICBmb250LXNpemU6IDI0cHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLm90cC1tc2d7XHJcbiAgICBjb2xvcjogI0IxQjFCMTtcclxufVxyXG4ucmVzZW5ke1xyXG4gICAgY29sb3I6ICMwMDRDOTc7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweFxyXG59XHJcbi5mb3JtLWJveHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4tcHJjc3tcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuaW9uLWJ1dHRvbi5wcm9jZXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkLCAjMDA0Yzk3KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctb3RwLWlucHV0LXdyYXBwZXIgLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 28871:
/*!******************************************************************************!*\
  !*** ./src/app/components/rekyc-popup/rekyc-popup.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".contain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n}\n\nimg {\n  width: 187px;\n  height: 187px;\n}\n\nion-button.next {\n  width: 90%;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n  margin-bottom: 10px;\n}\n\nion-footer {\n  position: relative;\n  order: 1;\n  width: 100%;\n  display: flex;\n  z-index: 10;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n\n.rekyc {\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.exist {\n  opacity: 100%;\n  font-family: poppins;\n  color: gainsboro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJla3ljLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlOOztBQUZFO0VBQ0UsY0FBQTtFQUVBLGlCQUFBO0VBQ0UsZUFBQTtBQUlOOztBQUZFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJyZWt5Yy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxODdweDtcclxuICAgIGhlaWdodDogMTg3cHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ubmV4dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1mb290ZXJ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3JkZXI6IDE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIC5yZWt5Y3tcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICAvLyBvcGFjaXR5OjEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuZXhpc3R7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6cG9wcGlucztcclxuICAgIGNvbG9yOmdhaW5zYm9ybztcclxuICBcclxuICB9Il19 */";

/***/ }),

/***/ 57616:
/*!************************************************************************!*\
  !*** ./src/app/components/scan-doc/scan-doc.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".row {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.capture {\n  margin-bottom: 15px;\n}\n\n.row {\n  padding: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4tZG9jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKIiwiZmlsZSI6InNjYW4tZG9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uY2FwdHVyZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnJvd3tcclxuICAgIHBhZGRpbmc6IDM2cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 26022:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "div[scrollx=true] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\ndiv[scrollx=true]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] .scroll-item {\n  flex: 0 0 auto;\n}\n.mt-5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNHLGFBQUE7QUFFUDtBQUFLO0VBQ0UsY0FBQTtBQUVQO0FBRUU7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUFDSCIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbc2Nyb2xseD10cnVlXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICAuc2Nyb2xsLWl0ZW0ge1xyXG4gICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubXQtNXtcclxuICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 94258:
/*!****************************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --note_border_color: #000;\n}\n\n.time_slot_title {\n  padding-left: 0;\n}\n\n.header_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.selectedTime {\n  background-color: #F3F3F3;\n  padding: 10px;\n  font-size: 16px;\n  border: 2px solid #fff;\n  box-shadow: 0 3pt 15pt rgba(0, 0, 0, 0.031372549);\n  border-radius: 7px;\n}\n\n.bookedSlot {\n  pointer-events: none;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  background-color: #F3F3F3;\n  color: #B20000;\n  height: 40px;\n  margin: 7px 0;\n}\n\n.availableSlot {\n  background-color: #fff !important;\n  cursor: pointer;\n  color: black !important;\n  font-weight: 900;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0pt 3pt 10pt rgba(0, 0, 0, 0.0509803922);\n  height: 40px;\n  margin: 7px 0;\n}\n\n.selectedClass {\n  pointer-events: none;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  height: 40px;\n  margin: 7px 0;\n  color: #f7f7f7 !important;\n  background-image: linear-gradient(91deg, #051A2D, #004C97) !important;\n  color: #fff;\n}\n\n.note_sec {\n  display: flex;\n  flex-direction: column;\n  margin: 16px 0;\n}\n\n.note_sec ion-icon {\n  height: 20px;\n  width: 20px;\n  transform: scale(2);\n  margin-right: 7px;\n}\n\n.note_sec ion-icon.small {\n  transform: scale(1);\n  width: 15px;\n}\n\n.note_sec ion-text {\n  font-size: 12px;\n}\n\n.btn_content {\n  display: flex;\n  justify-content: center;\n}\n\nion-footer .footer_btn {\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  --background: linear-gradient(91deg, #051A2D, #004C97);\n  text-transform: capitalize;\n}\n\nion-footer .footer_btn.cancel {\n  --background: #fff;\n  color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtc2xvdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxRUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUZJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSU47O0FBREU7RUFDRSxlQUFBO0FBR0o7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFTiIsImZpbGUiOiJ0aW1lLXNsb3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tbm90ZV9ib3JkZXJfY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi50aW1lX3Nsb3RfdGl0bGUge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWRUaW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgMTVwdCAjMDAwMDAwMDg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uYm9va2VkU2xvdCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XHJcbiAgY29sb3I6ICNCMjAwMDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbn1cclxuXHJcbi5hdmFpbGFibGVTbG90IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDBwdCAzcHQgMTBwdCAjMDAwMDAwMEQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbn1cclxuXHJcbi5zZWxlY3RlZENsYXNzIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbiAgY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTFkZWcsICMwNTFBMkQsICMwMDRDOTcpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ub3RlX3NlYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgJi5zbWFsbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIC5mb290ZXJfYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTFkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAmLmNhbmNlbCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 27320:
/*!****************************************************************************************!*\
  !*** ./src/app/components/transaction-date/transaction-date.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #051A2D;\n  --color:#ffffff;\n  margin-bottom: -1px;\n}\n\n:host > * .calendar-days-of-week {\n  --background: #051A2D !important;\n  --border-bottom-left-radius: 10px !important;\n  --border-bottom-right-radius: 10px !important;\n}\n\n:host > * .calendar-action-buttons {\n  --background: #051A2D !important;\n}\n\n:host > * .calendar-action-buttons {\n  --color: #ffffff !important;\n}\n\n::ng-deep .mat-calendar-table-header-divider::after {\n  background-color: black;\n}\n\nion-footer .footer_btn {\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  --background: linear-gradient(91deg, #051A2D, #004C97);\n  text-transform: capitalize;\n}\n\nion-footer .footer_btn.cancel {\n  --background: #fff;\n  color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksZ0NBQUE7RUFDSCw0Q0FBQTtFQUNHLDZDQUFBO0FBQUo7O0FBR0E7RUFDSSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7QUFBSjs7QUFFQTtFQUNBLHVCQUFBO0FBQ0E7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQUFSOztBQUVRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQVoiLCJmaWxlIjoidHJhbnNhY3Rpb24tZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzA1MUEyRDtcclxuICAgIC0tY29sb3I6I2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcblxyXG59XHJcblxyXG46aG9zdCA+ICogLmNhbGVuZGFyLWRheXMtb2Ytd2VlayB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNTFBMkQgIWltcG9ydGFudDtcclxuXHQtLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgPiAqIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNTFBMkQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgPiAqIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICAuZm9vdGVyX2J0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MWRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgICAgICYuY2FuY2VsIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzExMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19 */";

/***/ }),

/***/ 17394:
/*!******************************************************************************************!*\
  !*** ./src/app/components/verification-done/verification-done.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n}\n.container .mid-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  justify-content: center;\n  margin-top: calc(50vh - 50%);\n}\n.container .mid-section ion-icon {\n  height: 150px;\n  width: 150px;\n}\n.container .mid-section .heading {\n  font-size: 22px;\n  font-weight: 700;\n}\n.container .mid-section .sub-heading {\n  font-size: 15px;\n  line-height: 1.4;\n  color: #b1b1b1;\n  width: 80%;\n  text-align: center;\n  margin-top: 10px;\n}\n.container .btn {\n  width: 90%;\n  margin-bottom: 25px;\n  padding: 12px 28px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 35px;\n  color: #f0f8ff;\n  background: rgb(5, 26, 45);\n  background: linear-gradient(148deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi1kb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBZEUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFjQSxzQkFBQTtFQUNBLGFBQUE7QUFaRjtBQWNFO0VBbkJBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBbUJFLHVCQUFBO0VBQ0EsNEJBQUE7QUFWSjtBQVlJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFWTjtBQWFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBWE47QUFhSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVhOO0FBY0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQTNDRiwwQkFBQTtFQUNBLDRFQUFBO0FBZ0NGIiwiZmlsZSI6InZlcmlmaWNhdGlvbi1kb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnRuLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNSwgMjYsIDQ1KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDhkZWcsXHJcbiAgICByZ2JhKDUsIDI2LCA0NSwgMSkgMCUsXHJcbiAgICByZ2JhKDAsIDc2LCAxNTEsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBAaW5jbHVkZSBhbGlnbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIC5taWQtc2VjdGlvbiB7XHJcbiAgICBAaW5jbHVkZSBhbGlnbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gNTAlKTtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICAgIC5zdWItaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgY29sb3I6ICNiMWIxYjE7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgY29sb3I6ICNmMGY4ZmY7XHJcbiAgICBAaW5jbHVkZSBidG4tZ3JhZGllbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 93915:
/*!******************************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"time_slot_title\">\r\n      <ion-text class=\"header_title\">\r\n        <div>Add Account</div>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"accountForm\" novalidate>\r\n\r\n\r\n    <p class=\"txn-lbl\">Transfer To</p>\r\n    <mat-radio-group color=\"primary\" class=\"full-width my-2\" formControlName=\"transferType\" [(ngModel)]=\"selectedItem\">\r\n      <mat-radio-button *ngFor=\"let option of account_option\" [value]=\"option\" class=\"mx-3\">\r\n        {{option}}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n      <mat-label>Account Number</mat-label>\r\n      <input matInput placeholder=\"Account Number\" formControlName=\"accountNumber\" numbersOnly>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n      <mat-label>Customer Name</mat-label>\r\n      <input matInput placeholder=\"Customer Name\" formControlName=\"customerName\" appAlphabetOnly>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\" *ngIf=\"selectedItem != 'Internal'\">\r\n      <mat-label>Bank Code</mat-label>\r\n      <input matInput placeholder=\"Bank Code\" formControlName=\"bankCode\" trim>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n      <mat-label>Customer Nickname</mat-label>\r\n      <input matInput placeholder=\"Customer Nickname\" formControlName=\"customerNickName\" appAlphabetOnly>\r\n    </mat-form-field>\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" [disabled]=\"accountForm.invalid\" (click)=\"submit()\">\r\n          Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"cancel\" (click)=\"close()\">Cancel</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ }),

/***/ 6426:
/*!************************************************************************************************************!*\
  !*** ./src/app/components/appointment-schedule-modal/appointment-schedule-modal.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"contain\">\r\n    <div class=\"succss-img\">\r\n      <img src=\"assets/images/kycDone.svg\" />\r\n    </div>\r\n    <h2 class=\"link\">Your appointment link is active</h2>\r\n    <div class=\"ref-num\">\r\n      KYC Reference Number:\r\n      <span class=\"ref-txt\"> {{ scheduleInfo?.kycReference }}</span>\r\n    </div>\r\n    <div class=\"date-div\">\r\n      <span class=\"date\">\r\n        Date selected: {{ scheduleInfo?.dateSelected }}\r\n      </span>\r\n      <span class=\"date\"> Time slot: {{ scheduleInfo?.timeSlot }} </span>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <qrcode [qrdata]=\"scheduleInfo.url\" [width]=\"250\"></qrcode>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border text-center\">\r\n  <ion-button shape=\"round\" class=\"next\" (click)=\"dismissModal()\"\r\n    >Done\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 2178:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"circle\" [ngStyle]=\"{'background-color':  circleColor }\">\r\n    <img *ngIf=\"!showInitials\" src=\"{{photoUrl}}\">\r\n\r\n    <div *ngIf=\"showInitials\" class=\"initials\">\r\n        {{ initials }}\r\n    </div>\r\n</div>";

/***/ }),

/***/ 96204:
/*!****************************************************************************!*\
  !*** ./src/app/components/basic-info/basic-info.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid\r\n  class=\"BI-container my-3\"\r\n  *ngIf=\"basicInfoForm\"\r\n  [formGroup]=\"basicInfoForm\"\r\n>\r\n  <!-- top part -->\r\n  <!-- BEGIN:TOP ROW -->\r\n  <div class=\"row BI-top-section\">\r\n    <div class=\"col-6\">\r\n      <div class=\"img-container\">\r\n        <!-- <img src=\"assets/images/no-image.png\" alt=\"No image available...\" /> -->\r\n        <input type=\"file\" [hidden]=\"true\" #fileSelect formControlName=\"userImg\" (change)=\"onFileSelected($event)\"/>\r\n        <img\r\n          [src]=\"\r\n          basicInfoForm.get('userImg')?.value != ''\r\n              ? basicInfoForm.get('userImg')?.value\r\n              : 'assets/images/userImage.png'\r\n          \"\r\n          alt=\"No image available...\"\r\n        />\r\n        <div class=\"icons\">\r\n          <ion-icon [src]=\"editIcon\" (click)=\"fileSelect.click()\"></ion-icon>\r\n          <ion-icon [src]=\"deleteIcon\" (click)=\"basicInfoForm.get('userImg').setValue('')\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"right-top-section\">\r\n        <mat-button-toggle-group\r\n          class=\"auto-manual-toggle-group\"\r\n          (change)=\"autoManualToggle($event.value)\"\r\n          [style]=\"screenType == 'branch' ? 'visibility: visible;':'visibility: hidden;'\"\r\n        >\r\n          <mat-button-toggle\r\n            *ngFor=\"let option of toggleArr; let i = index\"\r\n            color=\"primary\"\r\n            [checked]=\"option.checked\"\r\n            [value]=\"option.name\"\r\n            class=\"auto-manual-toggle\"\r\n            >{{ option.name }}\r\n          </mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n\r\n        <mat-form-field\r\n          class=\"full-width\"\r\n          appearance=\"outline\"\r\n          class=\"input-field-cont\"\r\n          style=\"display: flex;\"\r\n        >\r\n          <mat-label>CIF Number </mat-label>\r\n          <input\r\n            type=\"number\"\r\n            matInput\r\n            formControlName=\"customerId\"\r\n            (change)=\"fetchDataUsingCIF($event.target.value)\"\r\n          />\r\n          <img\r\n          src=\"assets/icon/search.svg\"\r\n        />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END:TOP ROW -->\r\n\r\n  <!-- mid section i/p fields... -->\r\n  <ion-row class=\"BI-mid-section\">\r\n    <mat-form-field\r\n      class=\"full-width\"\r\n      appearance=\"outline\"\r\n      class=\"input-field-cont\"\r\n    >\r\n      <mat-label>Prefix</mat-label>\r\n      <mat-select formControlName=\"prefix\">\r\n        <mat-option *ngFor=\"let prefix of prefixArr\" [value]=\"prefix\">{{prefix}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field\r\n      class=\"full-width\"\r\n      appearance=\"outline\"\r\n      class=\"input-field-cont\"\r\n    >\r\n      <mat-label>First Name</mat-label>\r\n      <input\r\n        type=\"text\"\r\n        matInput\r\n        appAlphabetOnly\r\n        maxlength=\"15\"\r\n        class=\"alignment\"\r\n        formControlName=\"firstName\"\r\n      />\r\n    </mat-form-field>\r\n\r\n    <div class=\"ml-name\">\r\n      <mat-form-field\r\n        class=\"full-width\"\r\n        appearance=\"outline\"\r\n        class=\"input-field-cont\"\r\n      >\r\n        <mat-label>Middle Name </mat-label>\r\n        <input\r\n          type=\"text\"\r\n          matInput\r\n          appAlphabetOnly\r\n          maxlength=\"15\"\r\n          class=\"alignment\"\r\n          formControlName=\"middleName\"\r\n        />\r\n      </mat-form-field>\r\n\r\n      <mat-form-field\r\n        class=\"full-width\"\r\n        appearance=\"outline\"\r\n        class=\"input-field-cont\"\r\n      >\r\n        <mat-label>Last Name</mat-label>\r\n        <input\r\n          type=\"text\"\r\n          matInput\r\n          appAlphabetOnly\r\n          maxlength=\"15\"\r\n          class=\"alignment\"\r\n          formControlName=\"lastName\"\r\n        />\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"DOB-gender\">\r\n      <mat-form-field\r\n      class=\"full-width\"\r\n      appearance=\"outline\"\r\n      class=\"input-field-cont\"\r\n    >\r\n      <mat-label>Date Of Birth</mat-label>\r\n      <input matInput formControlName=\"dateOfBirth\" readonly />\r\n      <span matSuffix>\r\n        <mat-datepicker-toggle>\r\n          <img\r\n            src=\"assets/icon/calendar.svg\"\r\n            matDatepickerToggleIcon\r\n            class=\"calendar-icon\"\r\n            (click)=\"datePopup()\"\r\n          />\r\n        </mat-datepicker-toggle>\r\n      </span>\r\n    </mat-form-field>\r\n\r\n      <mat-form-field\r\n        class=\"full-width\"\r\n        appearance=\"outline\"\r\n        class=\"input-field-cont\"\r\n      >\r\n        <mat-label>Gender</mat-label>\r\n        <mat-select formControlName=\"gender\">\r\n          <mat-option *ngFor=\"let gender of genderArr\" [value]=\"gender\">{{gender}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"marital-nat\">\r\n      <mat-form-field\r\n        class=\"full-width\"\r\n        appearance=\"outline\"\r\n        class=\"input-field-cont\"\r\n      >\r\n        <mat-label>Marital Status</mat-label>\r\n        <mat-select formControlName=\"maritalStatus\">\r\n          <mat-option *ngFor=\"let maritalStatus of maritalStatusArr\" [value]=\"maritalStatus\">{{maritalStatus}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field\r\n        class=\"full-width\"\r\n        appearance=\"outline\"\r\n        class=\"input-field-cont\"\r\n      >\r\n        <mat-label>Nationality</mat-label>\r\n        <mat-select formControlName=\"nationality\">\r\n          <mat-option *ngFor=\"let nationality of nationalityArr\" [value]=\"nationality\">{{nationality}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\" class=\"emailField\">\r\n      <mat-label>Email</mat-label>\r\n      <input matInput formControlName=\"primaryEmailAdress\" />\r\n      <button\r\n        *ngIf=\"!emailVerified; else showEmailSuccess\"\r\n        matSuffix\r\n        (click)=\"getOtp('email', basicInfoForm.get('primaryEmailAdress').value)\"\r\n        class=\"verify-btn\"\r\n        [ngClass]=\"\r\n          basicInfoForm.get('primaryEmailAdress').invalid\r\n            ? 'verify-btn-disable'\r\n            : 'verify-btn-enable'\r\n        \"\r\n      >\r\n        Verify\r\n      </button>\r\n      <ng-template #showEmailSuccess>\r\n        <ion-icon\r\n          matSuffix\r\n          size=\"large\"\r\n          name=\"checkmark-circle-outline\"\r\n          class=\"succss-btn\"\r\n          style=\"color: green;\"\r\n        ></ion-icon>\r\n      </ng-template>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field\r\n      appearance=\"outline\"\r\n      class=\"full-width\"\r\n      class=\"mobileNumberField\"\r\n    >\r\n      <mat-label>Mobile Number</mat-label>\r\n      <input\r\n        matInput\r\n        formControlName=\"phoneNumber\"\r\n        numbersOnly\r\n        maxlength=\"10\"\r\n      />\r\n      <button\r\n        *ngIf=\"!mobileVerified; else showSuccess\"\r\n        matSuffix\r\n        class=\"verify-btn\"\r\n        (click)=\"getOtp('mobile', basicInfoForm.get('phoneNumber').value)\"\r\n        [ngClass]=\"\r\n          basicInfoForm.get('phoneNumber').invalid\r\n            ? 'verify-btn-disable'\r\n            : 'verify-btn-enable'\r\n        \"\r\n      >\r\n        Verify\r\n      </button>\r\n      <ng-template #showSuccess>\r\n        <ion-icon\r\n          matSuffix\r\n          size=\"large\"\r\n          name=\"checkmark-circle-outline\"\r\n          class=\"succss-btn\"\r\n          style=\"color: green;\"\r\n        ></ion-icon>\r\n      </ng-template>\r\n    </mat-form-field>\r\n  </ion-row>\r\n\r\n  <!-- Address section👇👇👇 -->\r\n  <ion-row class=\"BI-address-section\">\r\n    <ion-text\r\n      >Is your Permanent Address is same as Communication Address?</ion-text\r\n    >\r\n    <mat-radio-group (change)=\"onClick($event)\">\r\n      <mat-radio-button value=\"Yes\" [checked]=\"true\">Yes </mat-radio-button>\r\n      <mat-radio-button value=\"No\" class=\"mx-4\">No </mat-radio-button>\r\n    </mat-radio-group>\r\n    <ng-container\r\n      *ngFor=\"let userAddress of userAddresses.controls; let i = index\"\r\n    >\r\n      <div class=\"comm-add\" [formGroup]=\"userAddress\">\r\n        <h6>{{ i == 0 ? \"Communication Address\" : \"Permanent Address\" }}</h6>\r\n        <mat-form-field\r\n          class=\"full-width\"\r\n          appearance=\"outline\"\r\n          class=\"input-field-cont\"\r\n        >\r\n          <mat-label>AddressLine1  </mat-label>\r\n          <input\r\n            type=\"text\"\r\n            matInput\r\n            appAlphabetOnly\r\n            class=\"alignment\"\r\n            formControlName=\"address1\"\r\n          />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field\r\n          class=\"full-width\"\r\n          appearance=\"outline\"\r\n          class=\"input-field-cont\"\r\n        >\r\n          <mat-label>AddressLine2  </mat-label>\r\n          <input\r\n            type=\"text\"\r\n            matInput\r\n            appAlphabetOnly\r\n            class=\"alignment\"\r\n            formControlName=\"address2\"\r\n          />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field\r\n          class=\"full-width\"\r\n          appearance=\"outline\"\r\n          class=\"input-field-cont\"\r\n        >\r\n          <mat-label>Residence Type </mat-label>\r\n          <mat-select formControlName=\"residenceType\">\r\n            <mat-option *ngFor=\"let residenceType of residenceTypeArr\" [value]=\"residenceType\">{{residenceType}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field\r\n          class=\"full-width\"\r\n          appearance=\"outline\"\r\n          class=\"input-field-cont\"\r\n        >\r\n          <mat-label>Country </mat-label>\r\n          <mat-select formControlName=\"country\">\r\n            <mat-option *ngFor=\"let country of countryArr\" [value]=\"country.countryName\">{{country.countryName}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field\r\n          class=\"full-width\"\r\n          appearance=\"outline\"\r\n          class=\"input-field-cont\"\r\n          style=\"\"\r\n        >\r\n            <mat-label>Zip Code </mat-label>\r\n\r\n          <input\r\n            type=\"text\"\r\n            matInput\r\n            numbersOnly\r\n            minlength=\"5\"\r\n            maxlength=\"10\"\r\n            class=\"alignment\"\r\n            formControlName=\"zipCode\"\r\n            (change)=\"fetchStateAndCity($event.target.value,i)\"\r\n          />\r\n\r\n          <img\r\n          src=\"assets/icon/search.svg\"\r\n        />\r\n\r\n        </mat-form-field>\r\n\r\n        <div class=\"state-city\">\r\n          <mat-form-field\r\n            class=\"full-width\"\r\n            appearance=\"outline\"\r\n            class=\"input-field-cont\"\r\n          >\r\n            <mat-label>State </mat-label>\r\n            <mat-select formControlName=\"state\">\r\n              <mat-option *ngFor=\"let state of stateArr\" [value]=\"state.stateName\">{{state.stateName}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field\r\n            class=\"full-width\"\r\n            appearance=\"outline\"\r\n            class=\"input-field-cont\"\r\n          >\r\n            <mat-label>City </mat-label>\r\n            <mat-select formControlName=\"city\">\r\n              <mat-option *ngFor=\"let city of cityArr\" [value]=\"city.cityName\">{{city.cityName}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </ion-row>\r\n\r\n  <!-- buttons -->\r\n  <div class=\"row h-50 my-4\">\r\n    <div class=\"col-6\">\r\n      <ion-button shape=\"round\" class=\"back\" (click)=\"goBack()\"\r\n        >Back</ion-button\r\n      >\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <ion-button\r\n        shape=\"round\"\r\n        class=\"next float-right\"\r\n        [disabled]=\"basicInfoForm.invalid\"\r\n        (click)=\"goToNextTab('BASIC-INFO')\"\r\n      >\r\n        Next\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 82598:
/*!********************************************************************!*\
  !*** ./src/app/components/branch/branch.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"toolbar-content\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"close()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"pl-1\">Nearest Branch</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"clear\" style=\" text-transform: capitalize !important;\" (click)=\"presentMap()\">\r\n          <ion-icon name=\"map\"></ion-icon> &nbsp; Map\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"ion-padding pt-0 mb-4\">\r\n      <ion-item fill=\"outline\" class=\"search\">\r\n        <ion-input type=\"search\" placeholder=\"search\" class=\"custom\" (input)=\"filterBranch($event)\" [(ngModel)]=\"term\"></ion-input>\r\n        <ion-icon name=\"search\" slot=\"end\" style=\"color:#ffffff\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <ion-card>\r\n    <div class=\"my-2\">\r\n      <ng-container *ngIf=\"branchDataFiltered.length != 0; else showNoBranch\">\r\n      <ion-item *ngFor=\"let branch of branchDataFiltered; let i=index\">\r\n        <ion-label class=\"mx-3\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-8\">\r\n              <h2> \r\n                <ion-icon slot=\"icon-only\" src=\"assets/icon/dot.svg\"></ion-icon> \r\n                <span class=\"mx-2 title-branch\">{{ branch?.branchName }}</span>\r\n              </h2>\r\n            </div>\r\n            <div class=\"col-4 align-self-end\">\r\n              <ion-button shape=\"round\" size=\"small\" class=\"next\"  (click)=\"dismiss(branch)\">Select</ion-button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <ion-chip class=\"chip-custom\" [outline]=\"true\">\r\n              <span style=\"color:#D68C00;opacity: 51%;\">Current Crowds : </span>\r\n              <span class=\"mx-2\" style=\"color:#D68C00\">{{ branch?.tokenCount }}</span></ion-chip>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <p class=\"content-branch mx-4\">{{ branch?.address }}</p>\r\n            </div>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ng-container>\r\n    <ng-template #showNoBranch>\r\n      <p>No Branch Available!</p>\r\n    </ng-template>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <div class=\"text-center\">\r\n    <ion-text>More</ion-text>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 77138:
/*!**********************************************************************************!*\
  !*** ./src/app/components/capture-image/capture-image.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"text-center\">\r\n      <img src=\"assets/images/Demobank.svg\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"text-center ion-padding\">\r\n  <!-- <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon\r\n            slot=\"icon-only\"\r\n            name=\"chevron-back-outline\"\r\n            class=\"back-nav-color\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <span>\r\n        <img src=\"assets/images/Demobank.svg\" class=\"demo\" />\r\n      </span>\r\n    </ion-toolbar>\r\n  </section> -->\r\n  <div class=\"text-center\">\r\n    <h2> Scan {{ scanObject == 'face' ? 'Face ID' : 'Iris' }}</h2>\r\n    <p style=\"color: '#B1B1B1'\">Place the {{ scanObject == 'face' ? 'face' : 'iris' }} and scan to proceed</p>\r\n  </div>\r\n\r\n  <!-- <div class=\"oval-wrapper\"> -->\r\n\r\n  <!-- </div> -->\r\n  <!-- <ng-container\r\n    *ngIf=\"!error && !isDone && 'webcamImage == null'; else showImg\"\r\n  >\r\n    <webcam\r\n      [height]=\"430\"\r\n      [width]=\"900\"\r\n      [trigger]=\"invokeObservable\"\r\n      (imageCapture)=\"captureImg($event)\"\r\n      (initError)=\"handleInitError($event)\"\r\n    ></webcam>\r\n  </ng-container>\r\n  <ng-template #showImg>\r\n    <img [src]=\"webcamImage?.imageAsDataUrl\" />\r\n  </ng-template> -->\r\n\r\n  <!-- <ng-template>\r\n    <img [src]=\"img\">\r\n  </ng-template> -->\r\n\r\n  <ng-container *ngIf=\"img\" style=\"height: 400px; width: 300px;\">\r\n    <img [src]=\"img\"  style=\"height: 400px; width: 300px;\"/>\r\n  </ng-container>\r\n\r\n  <div class=\"scan-div\">\r\n    <div class=\"capture-circle\" (click)=\"capturePreview()\" style=\"margin-top: 400px;\" *ngIf=\"isVisible\">\r\n      <img src=\"assets/images/scan-img.png\" class=\"scan-img\"  />\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"btn-footer\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"closeModal()\"\r\n          >Done\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"back()\"\r\n          >Back</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 15487:
/*!****************************************************************!*\
  !*** ./src/app/components/crop/crop.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ngx-doc-scanner \r\n            *ngIf=\"file\"\r\n               [file]=\"file\"\r\n               [config]=\"config\"\r\n               (editResult)=\"editResult($event)\"\r\n               (exitEditor)=\"exitEditor($event)\"\r\n               (error)=\"onError($event)\"\r\n               (processing)=\"editorState($event)\"\r\n               >\r\n</ngx-doc-scanner>";

/***/ }),

/***/ 76634:
/*!********************************************************************************************!*\
  !*** ./src/app/components/denomination-slide/denomination-slide.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"denomination-slide\">\r\n  <form *ngIf=\"denominationForm\" [formGroup]=\"denominationForm\">\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">2000 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"two_thousand\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">500 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"five_hundred\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my1\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">200 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"two_hundred\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">100 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"one_hundred\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">50 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"fifty\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">20 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"twenty\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">10 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"ten\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 align-self-center\">\r\n            <span class=\"denom-count\">1 <span class=\"denom-sub\">x</span> </span>\r\n          </div>\r\n          <div class=\"col-7 align-self-center\">\r\n            <ion-input style=\"background: #ffffff;border-radius: 5px;\" formControlName=\"one\"\r\n            numbersOnly></ion-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-3\">\r\n      <mat-label>Denomination Total</mat-label>\r\n      <input matInput type=\"text\" [value]=\"total\" readonly=\"true\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n<div class=\"white-box\" (click)=\"remove_me()\">\r\n  <img [src]=\"icon_arrow_svg\" class=\"arrow-icon\">\r\n</div>\r\n";

/***/ }),

/***/ 31363:
/*!************************************************************************!*\
  !*** ./src/app/components/download/download.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n  <ion-toolbar>\r\n    <ion-title>Download</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"cancel()\">\r\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"main\">\r\n    <form *ngIf=\"downloadForm\" [formGroup]=\"downloadForm\">\r\n      <div class=\"my-2\">\r\n       \r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Duration</mat-label>\r\n          <mat-select disableRipple formControlName=\"transaction\">\r\n            <mat-option value=\"1\">Recent Transaction</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Format</mat-label>\r\n          <mat-select disableRipple formControlName=\"fileExtention\">\r\n            <mat-option value=\"1\">PDF</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button shape=\"round\" (click)=\"confirm()\">Download</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button shape=\"round\" color=\"danger\" (click)=\"cancel()\">Cancle</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 61891:
/*!******************************************************************************!*\
  !*** ./src/app/components/duplication/duplication.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content >\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"title-div\">\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\" class=\"icon\"></ion-icon>\r\n      </ion-button>\r\n      <p class=\"cust-data\">Customer Data Deduplication !</p>\r\n  </div>\r\n  <form *ngIf=\"duplicationForm\" [formGroup]=\"duplicationForm\">\r\n  <div *ngIf=\"firstScreen; else showNext\" class=\"content-bg\">\r\n    <div>\r\n      <table>\r\n        <tr>\r\n          <th></th>\r\n          <th class=\"semi\">Name</th>\r\n          <td>Abhishek Thakur</td>\r\n        </tr>\r\n        <tr>\r\n          <th ><ion-checkbox  formControlName=\"phoneNumberChecked\"></ion-checkbox></th>\r\n          <th class=\"semi\">Mobile Number</th>\r\n          <td [ngStyle]=\"{'color':customerData?.phoneNumberPresent ? '#B20000' : ''}\">{{customerData?.phoneNumber}} <span *ngIf=\"customerData?.phoneNumberPresent\"><ion-icon name=\"information-circle\"></ion-icon></span></td>\r\n        </tr>\r\n        <tr>\r\n          <th><ion-checkbox *ngIf=\"customerData?.emailPresent\" formControlName=\"emailChecked\"></ion-checkbox></th>\r\n          <th class=\"semi\">Email</th>\r\n          <td [ngStyle]=\"{'color':customerData?.emailPresent ? '#B20000' : ''}\">{{customerData?.primaryEmailAdress}}<span *ngIf=\"customerData?.emailPresent\"><ion-icon name=\"information-circle\"></ion-icon></span></td>\r\n        </tr>\r\n        <tr>\r\n          <th></th>\r\n          <th class=\"semi\">Address</th>\r\n          <td>{{customerData?.address}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" class=\"pb-2\" style=\"justify-content: space-evenly !important; width: 100%; margin: 0px auto;\">\r\n      <div>\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"onNext(true)\" [disabled]=\"duplicationForm.get('emailChecked').value != true && duplicationForm.get('phoneNumberChecked').value != true\" style=\"width: 102px;\"> Re-kYC </ion-button>\r\n      </div>\r\n      <div>\r\n        <ion-button shape=\"round\" class=\"accept\" (click)=\"onNext(false)\" [disabled]=\"duplicationForm.get('emailChecked').value != true && duplicationForm.get('phoneNumberChecked').value != true\" style=\"width: 102px;\">Accept</ion-button>\r\n      </div>\r\n      <div>\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"closeModal('close')\" style=\"width: 102px;\">Cancel</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #showNext>\r\n    <div class=\"content-bg\">\r\n    <table>\r\n      <tr  *ngIf=\"duplicationForm.get('phoneNumberChecked').value == true\">\r\n        <!-- <th><ion-checkbox checked=\"true\"></ion-checkbox></th> -->\r\n        <th class=\"semi\">Mobile Number</th>\r\n        <td style=\"color: '#B20000';\">{{customerData?.phoneNumber}} <span><ion-icon name=\"information-circle\" class=\"mobile-num\"></ion-icon></span></td>\r\n      </tr>\r\n      <tr *ngIf=\"duplicationForm.get('phoneNumberChecked').value == true\">\r\n        <!-- <th><ion-checkbox checked=\"true\"></ion-checkbox></th> -->\r\n        <th class=\"semi\">Email</th>\r\n        <td style=\"color: '#B20000';\">{{customerData?.primaryEmailAdress}} <span><ion-icon name=\"information-circle\"></ion-icon></span></td>\r\n      </tr>\r\n    </table>\r\n      <div class=\"p-2\">\r\n        <mat-form-field *ngIf=\"!customerData.reKyc\" appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Relationship</mat-label>\r\n          <mat-select formControlName=\"relationship\">\r\n            <mat-option *ngFor=\"let relation of relationshipArr\" [value]=\"relation\">{{relation}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label >Remarks</mat-label>\r\n          <textarea matInput name=\"remark\" formControlName=\"remark\" rows=\"5\" class=\"txt-area\"> </textarea>\r\n        </mat-form-field>\r\n      </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" class=\"pb-2\">\r\n      <div>\r\n        <ion-button shape=\"round\" class=\"cancel\" (click)=\"onSubmit()\" [disabled]=\"customerData.reKyc ? duplicationForm.get('remark').invalid:  duplicationForm.invalid\">Submit</ion-button>\r\n      </div>\r\n      <div>\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"onBack()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </ng-template>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 8698:
/*!****************************************************************************************!*\
  !*** ./src/app/components/fingerprint-scan/fingerprint-scan.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"closeModal()\">\r\n          <ion-icon\r\n            slot=\"icon-only\"\r\n            name=\"chevron-back-outline\"\r\n            class=\"back-nav-color\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <span>\r\n        <img src=\"assets/images/Demobank.svg\" class=\"demo\" />\r\n      </span>\r\n    </ion-toolbar>\r\n  </section>\r\n  <div class=\"text-center\">\r\n    <h2>{{ screenData?.title }}</h2>\r\n    <p>{{ screenData?.desc }}</p>\r\n    <img src=\"assets/fingerscan_new.png\" style=\"margin-left: 14px;\r\n    width: 391px;\r\n    height: 564px;\" />\r\n    <img src=\"assets/finger_scan.png\" style=\"margin-top: -83px;\r\n    margin-left: 2px;\r\n    width: 120px;\"/>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"btn-footer\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\"\r\n          >Done\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"closeModal()\"\r\n          >Back</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 21757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"footer pb-0\">\r\n  <ul>\r\n    <li (click)=\"dashboardPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/dashboard' ? 'active ' : ''\">\r\n        <img src=\"assets/images/home-normal.svg\" class=\"w-100 normal footer-custom-icon-small\" />\r\n        <img src=\"assets/images/home-dark.svg\" class=\"w-100 hover footer-custom-icon-small\" />\r\n        <!-- <span><i class=\"fas fa-home\"></i></span>\r\n          <p>Home</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"transactionPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/transaction' ? 'active ' : ''\">\r\n        <img src=\"assets/images/my-trans-normal.svg\" class=\"w-100 normal footer-custom-icon\" />\r\n        <img src=\"assets/images/my-trans.svg\" class=\"w-100 hover footer-custom-icon\" />\r\n        <!-- <span>\r\n          <i class=\"fas fa-money-bill-wave\"></i>\r\n          <img class=\"foo_icon\" src=\"assets/images/footer/transaction-icon.png\" />\r\n        </span>\r\n        <p>My Transaction</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"appointmentPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/appointment' ? 'active ' : ''\">\r\n        <img src=\"assets/images/appt-his-normal.svg\" class=\"w-100 normal footer-custom-icon-appt\" />\r\n        <img src=\"assets/images/appt-his.svg\" class=\"w-100 hover footer-custom-icon-appt\" />\r\n        <!-- <span>\r\n          <i class=\"far fa-clock\"></i>\r\n        </span>\r\n        <p>Appointment History</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"profilePage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/profile' ? 'active ' : ''\">\r\n        <img src=\"assets/images/profile-normal.svg\" class=\"w-100 normal footer-custom-icon-small\" />\r\n        <img src=\"assets/images/profile-dark.svg\" class=\"w-100 hover footer-custom-icon-small\" />\r\n        <!-- <span>\r\n          <i class=\"far fa-user-circle\"></i>\r\n        </span>\r\n        <p>Profile</p> -->\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 8465:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/kyc-modal/customer-auto-verification/customer-auto-verification.component.html?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container>\r\n  <!-- *ngIf=\"(!isExistingCustomer || (isExistingCustomer && isrekyc)) && isAuto\" class=\"\" -->\r\n<mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n  <mat-label>Document Name</mat-label>\r\n  <mat-select\r\n    matNativeControl\r\n    required\r\n    [(ngModel)]=\"documentName\"\r\n    #docName=\"ngModel\"\r\n    disableOptionCentering\r\n  >\r\n    <mat-option *ngFor=\"let doc of docArr\" [value]=\"doc\">{{\r\n      doc\r\n    }}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\">\r\n  <mat-label>Document Number</mat-label>\r\n  <input\r\n    matInput\r\n    placeholder=\"Document Number*\"\r\n    type=\"number\"\r\n    matNativeControl\r\n    required\r\n    [(ngModel)]=\"documentNumber\"\r\n    #docNumber=\"ngModel\"\r\n  />\r\n  <!-- (keyup)=\"onKeyUp1()\" -->\r\n</mat-form-field>\r\n<div class=\"my-2\">\r\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n    <div fxFlex=\"50\">\r\n      <mat-card\r\n        class=\"otpandbioclass\"\r\n        (click)=\"verificationMethodToggle('otp')\"\r\n      >\r\n        <div fxLayout=\"row\" fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around center\">\r\n          <div fxFlex=\"50\">\r\n              <img\r\n                [src]=\"\r\n                  isOtp && documentName && documentNumber\r\n                    ? 'assets/Ellipse 161.png'\r\n                    : 'assets/Ellipse 132.png'\r\n                \"\r\n                alt=\"Ionic logo\"\r\n\r\n\r\n              />\r\n          </div>\r\n          <div fxFlex=\"50\">\r\n            <span>OTP</span>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\">\r\n      <mat-card\r\n        class=\"otpandbioclass\"\r\n        (click)=\"verificationMethodToggle('biometric')\"\r\n      >\r\n        <div fxLayout=\"row\" fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around center\">\r\n          <div fxFlex=\"50\">\r\n              <img\r\n                [src]=\"\r\n                  isBiometric && documentName && documentNumber\r\n                    ? 'assets/Ellipse 161.png'\r\n                    : 'assets/Ellipse 132.png'\r\n                \"\r\n                alt=\"Ionic logo\"\r\n\r\n              />\r\n          </div>\r\n          <div fxFlex=\"50\">\r\n            <span>Biometric</span>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"isOtp\">\r\n  <h3>Enter OTP to Verify</h3>\r\n  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n    <input\r\n      matInput\r\n      placeholder=\"ENTER OTP\"\r\n      numbersOnly\r\n      [(ngModel)]=\"otpValue\"\r\n      #otp=\"ngModel\"\r\n      maxlength=\"6\"\r\n      (keyup)=\"valid($event)\"\r\n    />\r\n  </mat-form-field>\r\n  <div style=\"color:#004C97;text-align: center;\">Resend code</div>\r\n</div>\r\n<mat-card *ngIf=\"isBiometric\" class=\"card-biometric\">\r\n  <div class=\"biometric-div\">\r\n    <div (click)=\"openFingerPrint(fingerPrintData)\">\r\n      <img src=\"assets\\images\\kycfingerprint.svg\" alt=\"\" />\r\n      <h6 class=\"fingerPrint\">Fingerprint</h6>\r\n    </div>\r\n    <div class=\"verticalLine\"></div>\r\n    <div (click)=\"openScanner('irisData')\">\r\n      <img src=\"assets\\images\\kycIrish.svg\" alt=\"\" />\r\n      <h6 class=\"irishText\">Iris</h6>\r\n    </div>\r\n    <div class=\"verticalLine\"></div>\r\n    <div (click)=\"openScanner('faceData')\">\r\n      <img src=\"assets\\images\\kycFacescan.svg\" />\r\n      <h6 class=\"faceScan\">Face Scan</h6>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n</ng-container>\r\n";

/***/ }),

/***/ 62515:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/kyc-modal/customer-manual-verification/customer-manual-verification.component.html?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n<!-- *ngIf=\"(!isExistingCustomer || (isExistingCustomer && isrekyc)) && !isAuto\" -->\r\n<!-- class=\"my-3\" -->\r\n<mat-form-field appearance=\"outline\" class=\"full-width\">\r\n  <mat-label>Document Name</mat-label>\r\n  <mat-select matNativeControl required [(ngModel)]=\"DocumentId\">\r\n    <mat-option *ngFor=\"let doc of docArr\" [value]=\"doc\">{{\r\n      doc\r\n    }}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n<div class=\"verify\">verifications methods</div>\r\n<div class=\"my-2\">\r\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n    <div fxFlex=\"50\">\r\n      <mat-card\r\n        class=\"otpandbioclass\"\r\n        (click)=\"scan_doc('scan')\"\r\n      >\r\n        <div fxLayout=\"row\" fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around center\">\r\n          <div fxFlex=\"50\">\r\n            <!-- <mat-icon> -->\r\n              <img\r\n                [src]=\"\r\n                  isscan && DocumentId\r\n                    ? 'assets/Ellipse 161.png'\r\n                    : 'assets/Ellipse 132.png'\r\n                \"\r\n                alt=\"Ionic logo\"\r\n\r\n              />\r\n            <!-- </mat-icon> -->\r\n          </div>\r\n          <div fxFlex=\"50\">\r\n            <span>Scan</span>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\">\r\n      <mat-card\r\n        class=\"otpandbioclass\"\r\n        (click)=\"upload_doc('upload')\"\r\n      >\r\n        <div fxLayout=\"row\" fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around center\">\r\n          <div fxFlex=\"50\">\r\n            <!-- <mat-icon> -->\r\n              <img\r\n                [src]=\"\r\n                  isupload && DocumentId\r\n                    ? 'assets/Ellipse 161.png'\r\n                    : 'assets/Ellipse 132.png'\r\n                \"\r\n                alt=\"Ionic logo\"\r\n              />\r\n            <!-- </mat-icon> -->\r\n          </div>\r\n          <div fxFlex=\"50\">\r\n            <span>Upload</span>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- upload photo -->\r\n<div *ngIf=\"isupload && !isscan\" class=\"widthForMat\">\r\n  <div class=\"file-card\">\r\n    <div class=\"row justify-content-between pb-3\">\r\n      <div\r\n        class=\"col-6 align-self-center text-center border-end mt-16\"\r\n        (click)=\"fileSelect.click()\"\r\n      >\r\n        <div class=\"p-1\">\r\n          <div class=\"avatar\" [style]=\"!isFrontDocUploaded ? '':'background: #00846140'\">\r\n            <img [src]=\"!isFrontDocUploaded ? 'assets/icon/v2/upload-icon.svg':'assets/icon/v2/uploaded-icon-green.svg'\" />\r\n          </div>\r\n          <p>Front</p>\r\n          <input\r\n            [hidden]=\"true\"\r\n            type=\"file\"\r\n            id=\"file-input\"\r\n            (change)=\"onFileSelect($event, 'Front')\"\r\n            accept=\"image/png, image/jpeg\"\r\n            #fileSelect\r\n          />\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"col-6 align-self-center text-center mt-16\"\r\n        (click)=\"backSelect.click()\"\r\n      >\r\n        <div class=\"p-1\">\r\n          <div class=\"avatar bg-gradient\" [style]=\"!isBackDocUploaded ? '':'background: #00846140'\">\r\n            <img [src]=\"!isBackDocUploaded ? 'assets/icon/v2/upload-icon.svg':'assets/icon/v2/uploaded-icon-green.svg'\" />\r\n          </div>\r\n          <p>Back</p>\r\n          <input\r\n            [hidden]=\"true\"\r\n            type=\"file\"\r\n            id=\"file-input\"\r\n            (change)=\"onFileSelect($event, 'Back')\"\r\n            accept=\"image/png, image/jpeg\"\r\n            #backSelect\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- </ng-container> -->\r\n\r\n  <ng-container>\r\n    <div class=\"my-5\">\r\n      <div class=\"card\" *ngFor=\"let item of files; index as i\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <img\r\n              alt=\"front\"\r\n              [src]=\"i == 0 ? frontImg : backImg\"\r\n              width=\"120\"\r\n              height=\"51\"\r\n            />\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row justify-content-between\">\r\n              <div class=\"col-9 align-self-center\">\r\n                <h3 class=\"chq-text\">{{UploadData[i]}}</h3>\r\n\r\n              </div>\r\n              <div class=\"col-3 align-self-center text-right\">\r\n                <ion-button\r\n                  fill=\"clear\"\r\n                  *ngIf=\"\r\n                    uploadingFile == item.name && isUploading;\r\n                    else uploaded\r\n                  \"\r\n                  (click)=\"cancel(item.name)\"\r\n                >\r\n                  <ion-icon\r\n                    slot=\"icon-only\"\r\n                    name=\"close\"\r\n                    color=\"medium\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n\r\n                <ng-template #uploaded>\r\n                  <mat-icon class=\"danger\" (click)=\"deleteFile(item.name)\"\r\n                    >delete</mat-icon\r\n                  >\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n\r\n            <ion-progress-bar\r\n              [value]=\"percentDone\"\r\n              *ngIf=\"uploadingFile == item.name && isUploading\"\r\n            ></ion-progress-bar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"!isupload && isscan\" class=\"widthForMat\">\r\n  <div class=\"file-card\">\r\n    <div class=\"row justify-content-between pb-3\">\r\n      <div\r\n        class=\"col-6 align-self-center text-center border-end mt-16\"\r\n        (click)=\"openDocScan(front_data)\"\r\n      >\r\n        <div class=\"p-1\">\r\n          <div class=\"avatar\">\r\n            <img src=\"assets/scan_front.png\" style=\"margin-top: 0px\" />\r\n          </div>\r\n          <p>Front</p>\r\n          <input\r\n            [hidden]=\"true\"\r\n            type=\"file\"\r\n            id=\"file-input\"\r\n            (change)=\"onFileSelect($event, 'front')\"\r\n            accept=\"image/png, image/jpeg\"\r\n            #fileSelect\r\n          />\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"col-6 align-self-center text-center mt-16\"\r\n        (click)=\"openDocScan(back_data)\"\r\n      >\r\n        <div class=\"p-1\">\r\n          <div class=\"avatar bg-gradient\">\r\n            <img src=\"assets/scan_back.png\" style=\"margin-top: 0px\" />\r\n          </div>\r\n          <p>Back</p>\r\n          <input\r\n            [hidden]=\"true\"\r\n            type=\"file\"\r\n            id=\"file-input\"\r\n            (change)=\"onFileSelect($event, 'back')\"\r\n            accept=\"image/png, image/jpeg\"\r\n            #fileSelect\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- </ng-container> -->\r\n\r\n  <ng-container>\r\n    <div class=\"my-5\">\r\n      <div class=\"card\" *ngFor=\"let item of files; index as i\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <img\r\n              alt=\"front\"\r\n              [src]=\"i == 0 ? frontImg : backImg\"\r\n              width=\"120\"\r\n              height=\"51\"\r\n            />\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row justify-content-between\">\r\n              <div class=\"col-9 align-self-center\">\r\n                <h3 class=\"chq-text\">{{ item?.name }}</h3>\r\n              </div>\r\n              <div class=\"col-3 align-self-center text-right\">\r\n                <ion-button\r\n                  fill=\"clear\"\r\n                  *ngIf=\"\r\n                    uploadingFile == item.name && isUploading;\r\n                    else uploaded\r\n                  \"\r\n                  (click)=\"cancel(item.name)\"\r\n                >\r\n                  <ion-icon\r\n                    slot=\"icon-only\"\r\n                    name=\"close\"\r\n                    color=\"medium\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n\r\n                <ng-template #uploaded>\r\n                  <mat-icon class=\"danger\" (click)=\"deleteFile(item.name)\"\r\n                    >delete</mat-icon\r\n                  >\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <ion-progress-bar\r\n              [value]=\"percentDone\"\r\n              *ngIf=\"uploadingFile == item.name && isUploading\"\r\n            ></ion-progress-bar>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n\r\n<mat-icon>trip_origin</mat-icon>\r\n";

/***/ }),

/***/ 39037:
/*!**************************************************************************!*\
  !*** ./src/app/components/kyc-modal/kyc-modal.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          style=\"color: #004c97\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>KYC Screening</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\r\n  <!-- toggle button new customer existing customer -->\r\n<ng-container *ngIf=\"screen == 'branch' ; else showVideo\">\r\n  <mat-button-toggle-group\r\n    class=\"auto-manual-toggle-group\"\r\n    (change)=\"CustomerType($event.value)\"\r\n  >\r\n    <mat-button-toggle\r\n      *ngFor=\"let option of customerArr; let i = index\"\r\n      color=\"primary\"\r\n      [checked]=\"option.checked\"\r\n      [value]=\"option.name\"\r\n      class=\"auto-manual-toggle\"\r\n      >{{ option.name }}\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <ng-container *ngIf=\"isExistingCustomer\">\r\n    <div class=\"heading2\">\r\n      <h3>Customer Details</h3>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"CIF number*\"\r\n        type=\"number\"\r\n        [(ngModel)]=\"customerId\"\r\n        #cif=\"ngModel\"\r\n        (change)=\"getCustomerDetails()\"\r\n      />\r\n    </mat-form-field>\r\n\r\n    <div class=\"customerHeading3\">\r\n      <div class=\"choose\">choose the process</div>\r\n    </div>\r\n    <div class=\"my-2\">\r\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n        <div fxFlex=\"50\">\r\n          <mat-card\r\n            class=\"otpandbioclass\"\r\n            (click)=\"Rekyc('Re-kyc')\"\r\n          >\r\n            <div fxLayout=\"row\" fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around center\">\r\n              <div fxFlex=\"50\">\r\n                <!-- <mat-icon> -->\r\n                  <img\r\n                  [src]=\"\r\n                  isrekyc && customerId\r\n                    ? 'assets/Ellipse 161.png'\r\n                    : 'assets/Ellipse 132.png'\r\n                \"\r\n                    alt=\"Ionic logo\"\r\n                    style=\"margin-top: -3px;\"\r\n\r\n                  />\r\n                <!-- </mat-icon> -->\r\n              </div>\r\n              <div fxFlex=\"50\">\r\n                <span>Re-kyc</span>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex=\"50\">\r\n          <mat-card\r\n            class=\"otpandbioclass\"\r\n            (click)=\"edit_info('edit')\"\r\n          >\r\n            <div fxLayout=\"row\" fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around center\">\r\n              <div fxFlex=\"50\">\r\n                <!-- <mat-icon> -->\r\n                  <img\r\n                  class=\"grid-icon\"\r\n                  [src]=\"\r\n                    isedit && customerId ? 'assets/Ellipse 161.png' : 'assets/Ellipse 132.png'\r\n                  \"\r\n                  alt=\"Ionic logo\"\r\n                  style=\"margin-top: -3px;\"\r\n                />\r\n                <!-- </mat-icon> -->\r\n              </div>\r\n              <div fxFlex=\"50\">\r\n                <span>edit</span>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n <!--////////// existing customer/////////// -->\r\n <ng-container *ngIf=\"!isExistingCustomer || (isExistingCustomer && isrekyc)\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"toggle-customer-details\">\r\n    <h3>Customer Details</h3>\r\n    <div class=\"move_toggle\">\r\n      <mat-button-toggle-group\r\n        class=\"auto-manual-toggle-group\"\r\n        (change)=\"autoManualToggle($event.value)\"\r\n      >\r\n        <mat-button-toggle\r\n          *ngFor=\"let option of toggleArr; let i = index\"\r\n          color=\"primary\"\r\n          [checked]=\"option.checked\"\r\n          [value]=\"option.name\"\r\n          class=\"auto-manual-toggle\"\r\n          >{{ option.name }}\r\n        </mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </div>\r\n  </div>\r\n  <app-customer-auto-verification *ngIf=\"isAuto\"\r\n  (updateValidation)=\"validateForm($event)\"\r\n  (enableSubmit)=\"updateEnableSubmit($event)\"></app-customer-auto-verification>\r\n  <!-- <ng-template #showManual> -->\r\n    <app-customer-manual-verification *ngIf=\"!isAuto\"\r\n      (updateValidation)=\"validateForm($event)\"\r\n      (emitAadharData)= \"getAadharData($event)\"\r\n      (emitisUploaded)=\"getData($event)\"\r\n    ></app-customer-manual-verification>\r\n\r\n </ng-container>\r\n</ng-container>\r\n<ng-template #showVideo>\r\n  <div class=\"row\">\r\n <div class=\"col-8\">\r\n      <div class=\"customerHeading2\">Customer Details</div>\r\n     </div>\r\n     <div class=\"col-4\">\r\n      <ion-button class=\"man\">manual</ion-button>\r\n     </div>\r\n  </div>\r\n  <app-customer-manual-verification\r\n  (updateValidation)=\"validateForm($event)\"\r\n  (emitAadharData)= \"getAadharData($event)\"\r\n  (emitisUploaded)=\"getData($event)\"\r\n    ></app-customer-manual-verification>\r\n</ng-template>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar style=\"background: transparent !important\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"closeModal()\" [disabled]=\"!isUploaded \"\r\n          >Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"backModal()\"\r\n          >Skip</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 55706:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"row justify-content-between head-map\">\r\n    <div class=\"col-3\">\r\n      <ion-fab style=\"left:30px;top:30px;\">\r\n        <ion-fab-button (click)=\"close()\" class=\"back\">\r\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n\r\n    <div class=\"col-3\">\r\n      <ion-fab style=\"top:30px;right:30px;\">\r\n        <ion-fab-button class=\"search\">\r\n          <ion-icon name=\"search\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n  </div>\r\n\r\n  <div #mapContainer id=\"map\"></div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 36386:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/otp-verification-popup/otp-verification-popup.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"form-box\">\r\n    <section>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button fill=\"clear\" (click)=\"back()\">\r\n            <ion-icon\r\n              slot=\"icon-only\"\r\n              name=\"chevron-back-outline\"\r\n              class=\"back-nav-color\"\r\n            ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </section>\r\n    <div>\r\n      <form\r\n        *ngIf=\"otpForm\"\r\n        [formGroup]=\"otpForm\"\r\n        class=\"form_container\"\r\n        novalidate\r\n      >\r\n        <div class=\"otp-box\">\r\n          <ion-text>\r\n            <h4 class=\"otp-auth\">OTP Authentication</h4>\r\n            <p class=\"otp-msg\">An authentication code has been sent to</p>\r\n            <p>{{Mnumber}}</p>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <ng-otp-input\r\n          [formCtrl]=\"otp\"\r\n          (onInputChange)=\"onOtpChange($event)\"\r\n          [config]=\"config\"\r\n        ></ng-otp-input>\r\n        <ion-row class=\"ion-justify-content-around\">\r\n          <ion-col>\r\n            <div class=\"resend\" (click)=\"resendOtp()\">Resend code</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n    <div class=\"btn-prcs\">\r\n      <ion-button\r\n        class=\"process\"\r\n        expand=\"full\"\r\n        shape=\"round\"\r\n        (click)=\"verifyOtp()\"\r\n        [disabled]=\"disableProceed\"\r\n      >\r\n        Process\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 79311:
/*!******************************************************************************!*\
  !*** ./src/app/components/rekyc-popup/rekyc-popup.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"contain\">\r\n    <div>\r\n      <img src=\"assets/images/tick.png\">\r\n    </div>\r\n    <div class=\"rekyc\">Re-KYC verification has been send</div>\r\n    <div class=\"exist\">to the existing customer</div>\r\n    </div>\r\n</ion-content>\r\n\r\n    <ion-footer class=\"ion-no-border\">\r\n          \r\n            <ion-button shape=\"round\" class=\"next\" (click)=\"closeModal()\"\r\n              >Done\r\n            </ion-button>\r\n\r\n    </ion-footer>\r\n";

/***/ }),

/***/ 52585:
/*!************************************************************************!*\
  !*** ./src/app/components/scan-doc/scan-doc.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ngx-doc-scanner \r\n     *ngIf=\"image\"\r\n     [file]=\"image\"\r\n     [config]=\"config\">\r\n     (editResult)=\"editResult($event)\"\r\n     (exitEditor)=\"exitEditor($event)\"\r\n     (error)=\"onError($event)\"\r\n     (processing)=\"editorState($event)\"\r\n</ngx-doc-scanner>\r\n<input type=\"file\" (change)=\"uploadImg($event)\">\r\n<img *ngIf=\"image\" [src]=\"selectedImage\"/> -->\r\n<ion-content>\r\n  <ng-container\r\n    *ngIf=\"!error && !isDone && 'webcamImage == null'; else showImg\"\r\n  >\r\n    <webcam\r\n      [trigger]=\"invokeObservable\"\r\n      (imageCapture)=\"captureImg($event)\"\r\n      (initError)=\"handleInitError($event)\"\r\n    ></webcam>\r\n  </ng-container>\r\n  <ng-template #showImg>\r\n    <!-- <img [src]=\"webcamImage?.imageAsDataUrl\" /> -->\r\n    <ngx-doc-scanner \r\n            *ngIf=\"file\"\r\n               [file]=\"file\"\r\n               [config]=\"config\"\r\n               (editResult)=\"editResult($event)\"\r\n               (exitEditor)=\"exitEditor($event)\"\r\n               (error)=\"onError($event)\"\r\n               (processing)=\"editorState($event)\"\r\n               >\r\n</ngx-doc-scanner>\r\n  </ng-template>\r\n  <!-- <div class=\"scan-div\">\r\n     <div class=\"capture-circle\" (click)=\"getSnapshot()\">\r\n       <img src=\"assets/images/scan-img.png\" class=\"scan-img\"/>\r\n     </div>\r\n   </div> -->\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"btn-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"retake\" *ngIf=\"isDone\" (click)=\"retake()\">\r\n        <img src=\"assets/retake.png\" alt=\"\" />\r\n      </div>\r\n      <div class=\"capture\" (click)=\"getSnapshot()\">\r\n        <img src=\"assets/capture.png\" alt=\"\" style=\"margin-top: -36px;\"/>\r\n      </div>\r\n      <div *ngIf=\"isDone\" (click)=\"onSubmit()\">\r\n        <img src=\"assets/submit.png\" alt=\"\" />\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 85582:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"padding: 4% 0 1%\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModel()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar\r\n      placeholder=\"Search...\"\r\n      [(ngModel)]=\"filterTerm\"\r\n      animated=\"false\"\r\n    ></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!-- <ion-list-header>\r\n    <ion-label>Popular Service</ion-label>\r\n  </ion-list-header>\r\n  <div class=\"container\">\r\n    <div class=\"scroll\" scrollX=\"true\">\r\n      <ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-chip *ngFor=\"let item of items | searchFilter:filterTerm\" color=\"secondary\" (click)=\"openToast(item.title)\">\r\n            <ion-icon color=\"primary\" name=\"trending-up-outline\"></ion-icon>\r\n            <ion-label>{{ item.title }}</ion-label>\r\n          </ion-chip>\r\n        </ion-item>\r\n      </ion-row>\r\n    </div>\r\n</div> -->\r\n  <ion-list>\r\n    <ion-list-header lines=\"inset\">\r\n      <ion-label>Quick Services</ion-label>\r\n    </ion-list-header>\r\n    <ion-item\r\n      *ngFor=\"let item of trendingRecords | searchFilter: filterTerm\"\r\n      (click)=\"openPage(item)\"\r\n    >\r\n      <ion-label color=\"primary\">\r\n        <h1>{{ item.name }}</h1>\r\n      </ion-label>\r\n      <ion-icon name=\"trending-up-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ }),

/***/ 97882:
/*!****************************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"time_slot_title\">\r\n      <ion-text class=\"header_title\">\r\n        <div>Select Time</div>\r\n        <button class=\"selectedTime\">{{ date |  date:'d MMM y' }}</button>\r\n        <!-- <button class=\"selectedTime\" *ngIf=\"selected != null\">{{ selected }}</button> -->\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"isLoading\"></ion-progress-bar>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 px-2\" *ngFor=\"let slot of exclude_past_time;let i=index\">\r\n      <ion-chip\r\n        [ngClass]=\"{'bookedSlot': slot.booked, 'availableSlot' : slot.available,'selectedClass': dateCollection.indexOf(slot.time)!=-1}\"\r\n        (click)=\"onSelectTime1(slot.time,i,$event)\">\r\n        <ion-label style=\"font-size: 16px; white-space: nowrap;\"> \r\n          {{format24HrsTo12Hrs(slot.time)}}\r\n        </ion-label>\r\n      </ion-chip>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"note_sec\">\r\n    <div class=\"text-primary mb-3\">Note:</div>\r\n    <div class=\"d-flex justify-content-between align-items-center\">\r\n      <div class=\"px-1 d-flex align-items-center\">\r\n        <ion-icon class=\"small\" src=\"/assets/icon/v2/Exclusion_6.svg\"></ion-icon>\r\n        <ion-text>Available</ion-text>\r\n      </div>\r\n      <div class=\"px-1 d-flex align-items-center\">\r\n        <ion-icon src=\"/assets/icon/v2/Exclusion_5.svg\"></ion-icon>\r\n        <ion-text>Selected</ion-text>\r\n      </div>\r\n      <div class=\"px-1 d-flex align-items-center\">\r\n        <ion-icon src=\"/assets/icon/v2/Exclusion_3.svg\"></ion-icon>\r\n        <ion-text>Already Booked</ion-text>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div class=\"row p-3\">\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" [disabled]=\"!selected\" class=\"footer_btn\" (click)=\"done()\">Submit</ion-button>\r\n    </div>\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" class=\"footer_btn cancel\" (click)=\"close()\">Back</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 69798:
/*!****************************************************************************************!*\
  !*** ./src/app/components/transaction-date/transaction-date.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\" color=\"light\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Select Date</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  [fullscreen]=\"true\">\r\n  <mat-calendar\r\n  startView=\"month\"\r\n  [(selected)]=\"selected\" [dateFilter]=\"screenType == 'basicInfo' ? '': disableWeekendsFilter\" [minDate]=\"screenType == 'basicInfo' ? minDateDOB  : minDate\" [maxDate]=\"screenType == 'basicInfo' ? maxDateDOB  : maxDate\"\r\n  [dateClass]=\"dateClass\">\r\n  </mat-calendar>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"row p-3\">\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" [disabled]=\"!selected\" class=\"footer_btn\" (click)=\"done()\">Submit</ion-button>\r\n    </div>\r\n    <div class=\"col-6 btn_content\">\r\n      <ion-button shape=\"round\" class=\"footer_btn cancel\" (click)=\"close()\">Back</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 11883:
/*!******************************************************************************************!*\
  !*** ./src/app/components/verification-done/verification-done.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"container\">\r\n    <ion-row class=\"mid-section\">\r\n      <ion-icon [src]=\"doneIcon\"></ion-icon>\r\n      <ng-container *ngIf=\"!kycReference; else showKyc\">\r\n        <ion-text class=\"heading\">Verification Completed</ion-text>\r\n        <ion-text class=\"sub-heading\"\r\n          >Your Verification process has been completed successfully</ion-text\r\n        >\r\n      </ng-container>\r\n\r\n      <ng-template #showKyc>\r\n        <ion-text class=\"heading\"> KYC Verification is completed! </ion-text>\r\n        <ion-text class=\"sub-heading\">\r\n          KYC Reference Number: <span style=\"color:#004C97;\">{{kycReference}}</span>\r\n        </ion-text>\r\n      </ng-template>\r\n    </ion-row>\r\n    <button class=\"btn\" (click)=\"close()\">Done</button>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 37413:
/*!*******************************************!*\
  !*** @angular/flex-layout/_private-utils ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INLINE": () => (/* binding */ INLINE),
/* harmony export */   "LAYOUT_VALUES": () => (/* binding */ LAYOUT_VALUES),
/* harmony export */   "applyCssPrefixes": () => (/* binding */ applyCssPrefixes),
/* harmony export */   "buildLayoutCSS": () => (/* binding */ buildLayoutCSS),
/* harmony export */   "extendObject": () => (/* binding */ extendObject),
/* harmony export */   "isFlowHorizontal": () => (/* binding */ isFlowHorizontal),
/* harmony export */   "validateValue": () => (/* binding */ validateValue),
/* harmony export */   "validateWrapValue": () => (/* binding */ validateWrapValue)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 */
function applyCssPrefixes(target) {
  var _a;

  for (let key in target) {
    let value = (_a = target[key]) !== null && _a !== void 0 ? _a : '';

    switch (key) {
      case 'display':
        if (value === 'flex') {
          target['display'] = ['-webkit-flex', 'flex'];
        } else if (value === 'inline-flex') {
          target['display'] = ['-webkit-inline-flex', 'inline-flex'];
        } else {
          target['display'] = value;
        }

        break;

      case 'align-items':
      case 'align-self':
      case 'align-content':
      case 'flex':
      case 'flex-basis':
      case 'flex-flow':
      case 'flex-grow':
      case 'flex-shrink':
      case 'flex-wrap':
      case 'justify-content':
        target['-webkit-' + key] = value;
        break;

      case 'flex-direction':
        target['-webkit-flex-direction'] = value;
        target['flex-direction'] = value;
        break;

      case 'order':
        target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
        break;
    }
  }

  return target;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const INLINE = 'inline';
const LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 */

function buildLayoutCSS(value) {
  let [direction, wrap, isInline] = validateValue(value);
  return buildCSS(direction, wrap, isInline);
}
/**
  * Validate the value to be one of the acceptable value options
  * Use default fallback of 'row'
  */


function validateValue(value) {
  var _a;

  value = (_a = value === null || value === void 0 ? void 0 : value.toLowerCase()) !== null && _a !== void 0 ? _a : '';
  let [direction, wrap, inline] = value.split(' '); // First value must be the `flex-direction`

  if (!LAYOUT_VALUES.find(x => x === direction)) {
    direction = LAYOUT_VALUES[0];
  }

  if (wrap === INLINE) {
    wrap = inline !== INLINE ? inline : '';
    inline = INLINE;
  }

  return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 */


function isFlowHorizontal(value) {
  let [flow] = validateValue(value);
  return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 */


function validateWrapValue(value) {
  if (!!value) {
    switch (value.toLowerCase()) {
      case 'reverse':
      case 'wrap-reverse':
      case 'reverse-wrap':
        value = 'wrap-reverse';
        break;

      case 'no':
      case 'none':
      case 'nowrap':
        value = 'nowrap';
        break;
      // All other values fallback to 'wrap'

      default:
        value = 'wrap';
        break;
    }
  }

  return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 */


function buildCSS(direction, wrap = null, inline = false) {
  return {
    display: inline ? 'inline-flex' : 'flex',
    'box-sizing': 'border-box',
    'flex-direction': direction,
    'flex-wrap': wrap || null
  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */


function extendObject(dest, ...sources) {
  if (dest == null) {
    throw TypeError('Cannot convert undefined or null to object');
  }

  for (let source of sources) {
    if (source != null) {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
  }

  return dest;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 36639:
/*!*********************************!*\
  !*** @angular/flex-layout/core ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREAKPOINT": () => (/* binding */ BREAKPOINT),
/* harmony export */   "BREAKPOINTS": () => (/* binding */ BREAKPOINTS),
/* harmony export */   "BREAKPOINT_PRINT": () => (/* binding */ BREAKPOINT_PRINT),
/* harmony export */   "BROWSER_PROVIDER": () => (/* binding */ BROWSER_PROVIDER),
/* harmony export */   "BaseDirective2": () => (/* binding */ BaseDirective2),
/* harmony export */   "BreakPointRegistry": () => (/* binding */ BreakPointRegistry),
/* harmony export */   "CLASS_NAME": () => (/* binding */ CLASS_NAME),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "DEFAULT_BREAKPOINTS": () => (/* binding */ DEFAULT_BREAKPOINTS),
/* harmony export */   "DEFAULT_CONFIG": () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   "LAYOUT_CONFIG": () => (/* binding */ LAYOUT_CONFIG),
/* harmony export */   "MediaChange": () => (/* binding */ MediaChange),
/* harmony export */   "MediaMarshaller": () => (/* binding */ MediaMarshaller),
/* harmony export */   "MediaObserver": () => (/* binding */ MediaObserver),
/* harmony export */   "MediaTrigger": () => (/* binding */ MediaTrigger),
/* harmony export */   "ORIENTATION_BREAKPOINTS": () => (/* binding */ ORIENTATION_BREAKPOINTS),
/* harmony export */   "PrintHook": () => (/* binding */ PrintHook),
/* harmony export */   "SERVER_TOKEN": () => (/* binding */ SERVER_TOKEN),
/* harmony export */   "ScreenTypes": () => (/* binding */ ScreenTypes),
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder),
/* harmony export */   "StyleUtils": () => (/* binding */ StyleUtils),
/* harmony export */   "StylesheetMap": () => (/* binding */ StylesheetMap),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "mergeAlias": () => (/* binding */ mergeAlias),
/* harmony export */   "removeStyles": () => (/* binding */ removeStyles),
/* harmony export */   "sortAscendingPriority": () => (/* binding */ sortAscendingPriority),
/* harmony export */   "sortDescendingPriority": () => (/* binding */ sortDescendingPriority),
/* harmony export */   "validateBasis": () => (/* binding */ validateBasis),
/* harmony export */   "ɵMatchMedia": () => (/* binding */ MatchMedia),
/* harmony export */   "ɵMockMatchMedia": () => (/* binding */ MockMatchMedia),
/* harmony export */   "ɵMockMatchMediaProvider": () => (/* binding */ MockMatchMediaProvider),
/* harmony export */   "ɵmultiply": () => (/* binding */ multiply)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 73066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var _angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/_private-utils */ 37413);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 83910);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 */

function removeStyles(_document, platformId) {
  return () => {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId)) {
      const elements = Array.from(_document.querySelectorAll(`[class*=${CLASS_NAME}]`)); // RegExp constructor should only be used if passing a variable to the constructor.
      // When using static regular expression it is more performant to use reg exp literal.
      // This is also needed to provide Safari 9 compatibility, please see
      // https://stackoverflow.com/questions/37919802 for more discussion.

      const classRegex = /\bflex-layout-.+?\b/g;
      elements.forEach(el => {
        el.classList.contains(`${CLASS_NAME}ssr`) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
      });
    }
  };
}
/**
 *  Provider to remove SSR styles on the browser
 */


const BROWSER_PROVIDER = {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_BOOTSTRAP_LISTENER,
  useFactory: removeStyles,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID],
  multi: true
};
const CLASS_NAME = 'flex-layout-';
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * *****************************************************************
 * Define module for common Angular Layout utilities
 * *****************************************************************
 */

class CoreModule {}

CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};

CoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [BROWSER_PROVIDER]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [BROWSER_PROVIDER]
    }]
  }], null, null);
})();
/**
 * Class instances emitted [to observers] for each mql notification
 */


class MediaChange {
  /**
   * @param matches whether the mediaQuery is currently activated
   * @param mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
   * @param mqAlias e.g. gt-sm, md, gt-lg
   * @param suffix e.g. GtSM, Md, GtLg
   * @param priority the priority of activation for the given breakpoint
   */
  constructor(matches = false, mediaQuery = 'all', mqAlias = '', suffix = '', priority = 0) {
    this.matches = matches;
    this.mediaQuery = mediaQuery;
    this.mqAlias = mqAlias;
    this.suffix = suffix;
    this.priority = priority;
    this.property = '';
  }
  /** Create an exact copy of the MediaChange */


  clone() {
    return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */


class StylesheetMap {
  constructor() {
    this.stylesheet = new Map();
  }
  /**
   * Add an individual style to an HTML element
   */


  addStyleToElement(element, style, value) {
    const stylesheet = this.stylesheet.get(element);

    if (stylesheet) {
      stylesheet.set(style, value);
    } else {
      this.stylesheet.set(element, new Map([[style, value]]));
    }
  }
  /**
   * Clear the virtual stylesheet
   */


  clearStyles() {
    this.stylesheet.clear();
  }
  /**
   * Retrieve a given style for an HTML element
   */


  getStyleForElement(el, styleName) {
    const styles = this.stylesheet.get(el);
    let value = '';

    if (styles) {
      const style = styles.get(styleName);

      if (typeof style === 'number' || typeof style === 'string') {
        value = style + '';
      }
    }

    return value;
  }

}

StylesheetMap.ɵfac = function StylesheetMap_Factory(t) {
  return new (t || StylesheetMap)();
};

StylesheetMap.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StylesheetMap,
  factory: StylesheetMap.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StylesheetMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_CONFIG = {
  addFlexToParent: true,
  addOrientationBps: false,
  disableDefaultBps: false,
  disableVendorPrefixes: false,
  serverLoaded: false,
  useColumnBasisZero: true,
  printWithBreakpoints: [],
  mediaTriggerAutoRestore: true,
  ssrObserveBreakpoints: [],
  // This is disabled by default because otherwise the multiplier would
  // run for all users, regardless of whether they're using this feature.
  // Instead, we disable it by default, which requires this ugly cast.
  multiplier: undefined,
  defaultUnit: 'px',
  detectLayoutDisplay: false
};
const LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Flex Layout token, config options for the library', {
  providedIn: 'root',
  factory: () => DEFAULT_CONFIG
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
 */

const SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('FlexLayoutServerLoaded', {
  providedIn: 'root',
  factory: () => false
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Flex Layout token, collect all breakpoints into one provider', {
  providedIn: 'root',
  factory: () => null
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 */

function mergeAlias(dest, source) {
  var _a;

  dest = (_a = dest === null || dest === void 0 ? void 0 : dest.clone()) !== null && _a !== void 0 ? _a : new MediaChange();

  if (source) {
    dest.mqAlias = source.alias;
    dest.mediaQuery = source.mediaQuery;
    dest.suffix = source.suffix;
    dest.priority = source.priority;
  }

  return dest;
}
/** A class that encapsulates CSS style generation for common directives */


class StyleBuilder {
  constructor() {
    /** Whether to cache the generated output styles */
    this.shouldCache = true;
  }
  /**
   * Run a side effect computation given the input string and the computed styles
   * from the build task and the host configuration object
   * NOTE: This should be a no-op unless an algorithm is provided in a subclass
   */


  sideEffect(_input, _styles, _parent) {}

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class StyleUtils {
  constructor(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
    this._serverStylesheet = _serverStylesheet;
    this._serverModuleLoaded = _serverModuleLoaded;
    this._platformId = _platformId;
    this.layoutConfig = layoutConfig;
  }
  /**
   * Applies styles given via string pair or object map to the directive element
   */


  applyStyleToElement(element, style, value = null) {
    let styles = {};

    if (typeof style === 'string') {
      styles[style] = value;
      style = styles;
    }

    styles = this.layoutConfig.disableVendorPrefixes ? style : (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.applyCssPrefixes)(style);

    this._applyMultiValueStyleToElement(styles, element);
  }
  /**
   * Applies styles given via string pair or object map to the directive's element
   */


  applyStyleToElements(style, elements = []) {
    const styles = this.layoutConfig.disableVendorPrefixes ? style : (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.applyCssPrefixes)(style);
    elements.forEach(el => {
      this._applyMultiValueStyleToElement(styles, el);
    });
  }
  /**
   * Determine the DOM element's Flexbox flow (flex-direction)
   *
   * Check inline style first then check computed (stylesheet) style
   */


  getFlowDirection(target) {
    const query = 'flex-direction';
    let value = this.lookupStyle(target, query);
    const hasInlineValue = this.lookupInlineStyle(target, query) || (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)(this._platformId) && this._serverModuleLoaded ? value : '';
    return [value || 'row', hasInlineValue];
  }

  hasWrap(target) {
    const query = 'flex-wrap';
    return this.lookupStyle(target, query) === 'wrap';
  }
  /**
   * Find the DOM element's raw attribute value (if any)
   */


  lookupAttributeValue(element, attribute) {
    var _a;

    return (_a = element.getAttribute(attribute)) !== null && _a !== void 0 ? _a : '';
  }
  /**
   * Find the DOM element's inline style value (if any)
   */


  lookupInlineStyle(element, styleName) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) ? element.style.getPropertyValue(styleName) : getServerStyle(element, styleName);
  }
  /**
   * Determine the inline or inherited CSS style
   * NOTE: platform-server has no implementation for getComputedStyle
   */


  lookupStyle(element, styleName, inlineOnly = false) {
    let value = '';

    if (element) {
      let immediateValue = value = this.lookupInlineStyle(element, styleName);

      if (!immediateValue) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId)) {
          if (!inlineOnly) {
            value = getComputedStyle(element).getPropertyValue(styleName);
          }
        } else {
          if (this._serverModuleLoaded) {
            value = this._serverStylesheet.getStyleForElement(element, styleName);
          }
        }
      }
    } // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
    //       in which case getComputedStyle() should determine a valid value.


    return value ? value.trim() : '';
  }
  /**
   * Applies the styles to the element. The styles object map may contain an array of values
   * Each value will be added as element style
   * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
   */


  _applyMultiValueStyleToElement(styles, element) {
    Object.keys(styles).sort().forEach(key => {
      const el = styles[key];
      const values = Array.isArray(el) ? el : [el];
      values.sort();

      for (let value of values) {
        value = value ? value + '' : '';

        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) || !this._serverModuleLoaded) {
          (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) ? element.style.setProperty(key, value) : setServerStyle(element, key, value);
        } else {
          this._serverStylesheet.addStyleToElement(element, key, value);
        }
      }
    });
  }

}

StyleUtils.ɵfac = function StyleUtils_Factory(t) {
  return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG));
};

StyleUtils.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StyleUtils,
  factory: StyleUtils.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleUtils, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: StylesheetMap
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [SERVER_TOKEN]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();

function getServerStyle(element, styleName) {
  var _a;

  const styleMap = readStyleAttribute(element);
  return (_a = styleMap[styleName]) !== null && _a !== void 0 ? _a : '';
}

function setServerStyle(element, styleName, styleValue) {
  styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const styleMap = readStyleAttribute(element);
  styleMap[styleName] = styleValue !== null && styleValue !== void 0 ? styleValue : '';
  writeStyleAttribute(element, styleMap);
}

function writeStyleAttribute(element, styleMap) {
  let styleAttrValue = '';

  for (const key in styleMap) {
    const newValue = styleMap[key];

    if (newValue) {
      styleAttrValue += `${key}:${styleMap[key]};`;
    }
  }

  element.setAttribute('style', styleAttrValue);
}

function readStyleAttribute(element) {
  const styleMap = {};
  const styleAttribute = element.getAttribute('style');

  if (styleAttribute) {
    const styleList = styleAttribute.split(/;+/g);

    for (let i = 0; i < styleList.length; i++) {
      const style = styleList[i].trim();

      if (style.length > 0) {
        const colonIndex = style.indexOf(':');

        if (colonIndex === -1) {
          throw new Error(`Invalid CSS style: ${style}`);
        }

        const name = style.substr(0, colonIndex).trim();
        styleMap[name] = style.substr(colonIndex + 1).trim();
      }
    }
  }

  return styleMap;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** HOF to sort the breakpoints by descending priority */


function sortDescendingPriority(a, b) {
  const priorityA = a ? a.priority || 0 : 0;
  const priorityB = b ? b.priority || 0 : 0;
  return priorityB - priorityA;
}
/** HOF to sort the breakpoints by ascending priority */


function sortAscendingPriority(a, b) {
  const pA = a.priority || 0;
  const pB = b.priority || 0;
  return pA - pB;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */


class MatchMedia {
  constructor(_zone, _platformId, _document) {
    this._zone = _zone;
    this._platformId = _platformId;
    this._document = _document;
    /** Initialize source with 'all' so all non-responsive APIs trigger style updates */

    this.source = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(new MediaChange(true));
    this.registry = new Map();
    this.pendingRemoveListenerFns = [];
    this._observable$ = this.source.asObservable();
  }
  /**
   * Publish list of all current activations
   */


  get activations() {
    const results = [];
    this.registry.forEach((mql, key) => {
      if (mql.matches) {
        results.push(key);
      }
    });
    return results;
  }
  /**
   * For the specified mediaQuery?
   */


  isActive(mediaQuery) {
    var _a;

    const mql = this.registry.get(mediaQuery);
    return (_a = mql === null || mql === void 0 ? void 0 : mql.matches) !== null && _a !== void 0 ? _a : this.registerQuery(mediaQuery).some(m => m.matches);
  }
  /**
   * External observers can watch for all (or a specific) mql changes.
   * Typically used by the MediaQueryAdaptor; optionally available to components
   * who wish to use the MediaMonitor as mediaMonitor$ observable service.
   *
   * Use deferred registration process to register breakpoints only on subscription
   * This logic also enforces logic to register all mediaQueries BEFORE notify
   * subscribers of notifications.
   */


  observe(mqList, filterOthers = false) {
    if (mqList && mqList.length) {
      const matchMedia$ = this._observable$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(change => !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1));

      const registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
        const matches = this.registerQuery(mqList);

        if (matches.length) {
          const lastChange = matches.pop();
          matches.forEach(e => {
            observer.next(e);
          });
          this.source.next(lastChange); // last match is cached
        }

        observer.complete();
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(registration$, matchMedia$);
    }

    return this._observable$;
  }
  /**
   * Based on the BreakPointRegistry provider, register internal listeners for each unique
   * mediaQuery. Each listener emits specific MediaChange data to observers
   */


  registerQuery(mediaQuery) {
    const list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
    const matches = [];
    buildQueryCss(list, this._document);
    list.forEach(query => {
      const onMQLEvent = e => {
        this._zone.run(() => this.source.next(new MediaChange(e.matches, query)));
      };

      let mql = this.registry.get(query);

      if (!mql) {
        mql = this.buildMQL(query);
        mql.addListener(onMQLEvent);
        this.pendingRemoveListenerFns.push(() => mql.removeListener(onMQLEvent));
        this.registry.set(query, mql);
      }

      if (mql.matches) {
        matches.push(new MediaChange(true, query));
      }
    });
    return matches;
  }

  ngOnDestroy() {
    let fn;

    while (fn = this.pendingRemoveListenerFns.pop()) {
      fn();
    }
  }
  /**
   * Call window.matchMedia() to build a MediaQueryList; which
   * supports 0..n listeners for activation/deactivation
   */


  buildMQL(query) {
    return constructMql(query, (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId));
  }

}

MatchMedia.ɵfac = function MatchMedia_Factory(t) {
  return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

MatchMedia.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MatchMedia,
  factory: MatchMedia.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatchMedia, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 */


const ALL_STYLES = {};
/**
 * For Webkit engines that only trigger the MediaQueryList Listener
 * when there is at least one CSS selector for the respective media query.
 *
 * @param mediaQueries
 * @param _document
 */

function buildQueryCss(mediaQueries, _document) {
  const list = mediaQueries.filter(it => !ALL_STYLES[it]);

  if (list.length > 0) {
    const query = list.join(', ');

    try {
      const styleEl = _document.createElement('style');

      styleEl.setAttribute('type', 'text/css');

      if (!styleEl.styleSheet) {
        const cssText = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${query} {.fx-query-test{ }}
`;
        styleEl.appendChild(_document.createTextNode(cssText));
      }

      _document.head.appendChild(styleEl); // Store in private global registry


      list.forEach(mq => ALL_STYLES[mq] = styleEl);
    } catch (e) {
      console.error(e);
    }
  }
}

function buildMockMql(query) {
  const et = new EventTarget();
  et.matches = query === 'all' || query === '';
  et.media = query;

  et.addListener = () => {};

  et.removeListener = () => {};

  et.addEventListener = () => {};

  et.dispatchEvent = () => false;

  et.onchange = null;
  return et;
}

function constructMql(query, isBrowser) {
  const canListen = isBrowser && !!window.matchMedia('all').addListener;
  return canListen ? window.matchMedia(query) : buildMockMql(query);
}
/**
 * NOTE: Smaller ranges have HIGHER priority since the match is more specific
 */


const DEFAULT_BREAKPOINTS = [{
  alias: 'xs',
  mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.98px)',
  priority: 1000
}, {
  alias: 'sm',
  mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.98px)',
  priority: 900
}, {
  alias: 'md',
  mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.98px)',
  priority: 800
}, {
  alias: 'lg',
  mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.98px)',
  priority: 700
}, {
  alias: 'xl',
  mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.98px)',
  priority: 600
}, {
  alias: 'lt-sm',
  overlapping: true,
  mediaQuery: 'screen and (max-width: 599.98px)',
  priority: 950
}, {
  alias: 'lt-md',
  overlapping: true,
  mediaQuery: 'screen and (max-width: 959.98px)',
  priority: 850
}, {
  alias: 'lt-lg',
  overlapping: true,
  mediaQuery: 'screen and (max-width: 1279.98px)',
  priority: 750
}, {
  alias: 'lt-xl',
  overlapping: true,
  priority: 650,
  mediaQuery: 'screen and (max-width: 1919.98px)'
}, {
  alias: 'gt-xs',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 600px)',
  priority: -950
}, {
  alias: 'gt-sm',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 960px)',
  priority: -850
}, {
  alias: 'gt-md',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 1280px)',
  priority: -750
}, {
  alias: 'gt-lg',
  overlapping: true,
  mediaQuery: 'screen and (min-width: 1920px)',
  priority: -650
}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/* tslint:disable */

const HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.98px)';
const HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.98px)';
const TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)';
const TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)';
const WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
const WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
const ScreenTypes = {
  'HANDSET': `${HANDSET_PORTRAIT}, ${HANDSET_LANDSCAPE}`,
  'TABLET': `${TABLET_PORTRAIT} , ${TABLET_LANDSCAPE}`,
  'WEB': `${WEB_PORTRAIT}, ${WEB_LANDSCAPE} `,
  'HANDSET_PORTRAIT': `${HANDSET_PORTRAIT}`,
  'TABLET_PORTRAIT': `${TABLET_PORTRAIT} `,
  'WEB_PORTRAIT': `${WEB_PORTRAIT}`,
  'HANDSET_LANDSCAPE': `${HANDSET_LANDSCAPE}`,
  'TABLET_LANDSCAPE': `${TABLET_LANDSCAPE}`,
  'WEB_LANDSCAPE': `${WEB_LANDSCAPE}`
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 */

const ORIENTATION_BREAKPOINTS = [{
  'alias': 'handset',
  priority: 2000,
  'mediaQuery': ScreenTypes.HANDSET
}, {
  'alias': 'handset.landscape',
  priority: 2000,
  'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE
}, {
  'alias': 'handset.portrait',
  priority: 2000,
  'mediaQuery': ScreenTypes.HANDSET_PORTRAIT
}, {
  'alias': 'tablet',
  priority: 2100,
  'mediaQuery': ScreenTypes.TABLET
}, {
  'alias': 'tablet.landscape',
  priority: 2100,
  'mediaQuery': ScreenTypes.TABLET_LANDSCAPE
}, {
  'alias': 'tablet.portrait',
  priority: 2100,
  'mediaQuery': ScreenTypes.TABLET_PORTRAIT
}, {
  'alias': 'web',
  priority: 2200,
  'mediaQuery': ScreenTypes.WEB,
  overlapping: true
}, {
  'alias': 'web.landscape',
  priority: 2200,
  'mediaQuery': ScreenTypes.WEB_LANDSCAPE,
  overlapping: true
}, {
  'alias': 'web.portrait',
  priority: 2200,
  'mediaQuery': ScreenTypes.WEB_PORTRAIT,
  overlapping: true
}];
const ALIAS_DELIMITERS = /(\.|-|_)/g;

function firstUpperCase(part) {
  let first = part.length > 0 ? part.charAt(0) : '';
  let remainder = part.length > 1 ? part.slice(1) : '';
  return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param name Text to UpperCamelCase
 */


function camelCase(name) {
  return name.replace(ALIAS_DELIMITERS, '|').split('|').map(firstUpperCase).join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 */


function validateSuffixes(list) {
  list.forEach(bp => {
    if (!bp.suffix) {
      bp.suffix = camelCase(bp.alias); // create Suffix value based on alias

      bp.overlapping = !!bp.overlapping; // ensure default value
    }
  });
  return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 */


function mergeByAlias(defaults, custom = []) {
  const dict = {};
  defaults.forEach(bp => {
    dict[bp.alias] = bp;
  }); // Merge custom breakpoints

  custom.forEach(bp => {
    if (dict[bp.alias]) {
      (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.extendObject)(dict[bp.alias], bp);
    } else {
      dict[bp.alias] = bp;
    }
  });
  return validateSuffixes(Object.keys(dict).map(k => dict[k]));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 */


const BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Token (@angular/flex-layout) Breakpoints', {
  providedIn: 'root',
  factory: () => {
    const breakpoints = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(BREAKPOINT);
    const layoutConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(LAYOUT_CONFIG);
    const bpFlattenArray = [].concat.apply([], (breakpoints || []).map(v => Array.isArray(v) ? v : [v]));
    const builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
    return mergeByAlias(builtIns, bpFlattenArray);
  }
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */

class BreakPointRegistry {
  constructor(list) {
    /**
     * Memoized BreakPoint Lookups
     */
    this.findByMap = new Map();
    this.items = [...list].sort(sortAscendingPriority);
  }
  /**
   * Search breakpoints by alias (e.g. gt-xs)
   */


  findByAlias(alias) {
    return !alias ? null : this.findWithPredicate(alias, bp => bp.alias === alias);
  }

  findByQuery(query) {
    return this.findWithPredicate(query, bp => bp.mediaQuery === query);
  }
  /**
   * Get all the breakpoints whose ranges could overlapping `normal` ranges;
   * e.g. gt-sm overlaps md, lg, and xl
   */


  get overlappings() {
    return this.items.filter(it => it.overlapping);
  }
  /**
   * Get list of all registered (non-empty) breakpoint aliases
   */


  get aliases() {
    return this.items.map(it => it.alias);
  }
  /**
   * Aliases are mapped to properties using suffixes
   * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
   * for property layoutGtSM.
   */


  get suffixes() {
    return this.items.map(it => {
      var _a;

      return (_a = it === null || it === void 0 ? void 0 : it.suffix) !== null && _a !== void 0 ? _a : '';
    });
  }
  /**
   * Memoized lookup using custom predicate function
   */


  findWithPredicate(key, searchFn) {
    var _a;

    let response = this.findByMap.get(key);

    if (!response) {
      response = (_a = this.items.find(searchFn)) !== null && _a !== void 0 ? _a : null;
      this.findByMap.set(key, response);
    }

    return response !== null && response !== void 0 ? response : null;
  }

}

BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) {
  return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BREAKPOINTS));
};

BreakPointRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BreakPointRegistry,
  factory: BreakPointRegistry.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BreakPointRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [BREAKPOINTS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const PRINT = 'print';
const BREAKPOINT_PRINT = {
  alias: PRINT,
  mediaQuery: PRINT,
  priority: 1000
};
/**
 * PrintHook - Use to intercept print MediaQuery activations and force
 *             layouts to render with the specified print alias/breakpoint
 *
 * Used in MediaMarshaller and MediaObserver
 */

class PrintHook {
  constructor(breakpoints, layoutConfig, _document) {
    this.breakpoints = breakpoints;
    this.layoutConfig = layoutConfig;
    this._document = _document; // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
    //  and `afterprint` event listeners.

    this.registeredBeforeAfterPrintHooks = false; // isPrintingBeforeAfterEvent is used to track if we are printing from within
    // a `beforeprint` event handler. This prevents the typical `stopPrinting`
    // form `interceptEvents` so that printing is not stopped while the dialog
    // is still open. This is an extension of the `isPrinting` property on
    // browsers which support `beforeprint` and `afterprint` events.

    this.isPrintingBeforeAfterEvent = false;
    this.beforePrintEventListeners = [];
    this.afterPrintEventListeners = [];
    this.formerActivations = null; // Is this service currently in print mode

    this.isPrinting = false;
    this.queue = new PrintQueue();
    this.deactivations = [];
  }
  /** Add 'print' mediaQuery: to listen for matchMedia activations */


  withPrintQuery(queries) {
    return [...queries, PRINT];
  }
  /** Is the MediaChange event for any 'print' @media */


  isPrintEvent(e) {
    return e.mediaQuery.startsWith(PRINT);
  }
  /** What is the desired mqAlias to use while printing? */


  get printAlias() {
    var _a;

    return [...((_a = this.layoutConfig.printWithBreakpoints) !== null && _a !== void 0 ? _a : [])];
  }
  /** Lookup breakpoints associated with print aliases. */


  get printBreakPoints() {
    return this.printAlias.map(alias => this.breakpoints.findByAlias(alias)).filter(bp => bp !== null);
  }
  /** Lookup breakpoint associated with mediaQuery */


  getEventBreakpoints({
    mediaQuery
  }) {
    const bp = this.breakpoints.findByQuery(mediaQuery);
    const list = bp ? [...this.printBreakPoints, bp] : this.printBreakPoints;
    return list.sort(sortDescendingPriority);
  }
  /** Update event with printAlias mediaQuery information */


  updateEvent(event) {
    var _a;

    let bp = this.breakpoints.findByQuery(event.mediaQuery);

    if (this.isPrintEvent(event)) {
      // Reset from 'print' to first (highest priority) print breakpoint
      bp = this.getEventBreakpoints(event)[0];
      event.mediaQuery = (_a = bp === null || bp === void 0 ? void 0 : bp.mediaQuery) !== null && _a !== void 0 ? _a : '';
    }

    return mergeAlias(event, bp);
  } // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
  // trigger print styles synchronously and apply proper layout styles.
  // It is a noop if the hooks have already been registered or if the document's
  // `defaultView` is not available.


  registerBeforeAfterPrintHooks(target) {
    // `defaultView` may be null when rendering on the server or in other contexts.
    if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
      return;
    }

    this.registeredBeforeAfterPrintHooks = true;

    const beforePrintListener = () => {
      // If we aren't already printing, start printing and update the styles as
      // if there was a regular print `MediaChange`(from matchMedia).
      if (!this.isPrinting) {
        this.isPrintingBeforeAfterEvent = true;
        this.startPrinting(target, this.getEventBreakpoints(new MediaChange(true, PRINT)));
        target.updateStyles();
      }
    };

    const afterPrintListener = () => {
      // If we aren't already printing, start printing and update the styles as
      // if there was a regular print `MediaChange`(from matchMedia).
      this.isPrintingBeforeAfterEvent = false;

      if (this.isPrinting) {
        this.stopPrinting(target);
        target.updateStyles();
      }
    }; // Could we have teardown logic to remove if there are no print listeners being used?


    this._document.defaultView.addEventListener('beforeprint', beforePrintListener);

    this._document.defaultView.addEventListener('afterprint', afterPrintListener);

    this.beforePrintEventListeners.push(beforePrintListener);
    this.afterPrintEventListeners.push(afterPrintListener);
  }
  /**
   * Prepare RxJS tap operator with partial application
   * @return pipeable tap predicate
   */


  interceptEvents(target) {
    return event => {
      if (this.isPrintEvent(event)) {
        if (event.matches && !this.isPrinting) {
          this.startPrinting(target, this.getEventBreakpoints(event));
          target.updateStyles();
        } else if (!event.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent) {
          this.stopPrinting(target);
          target.updateStyles();
        }

        return;
      }

      this.collectActivations(target, event);
    };
  }
  /** Stop mediaChange event propagation in event streams */


  blockPropagation() {
    return event => {
      return !(this.isPrinting || this.isPrintEvent(event));
    };
  }
  /**
   * Save current activateBreakpoints (for later restore)
   * and substitute only the printAlias breakpoint
   */


  startPrinting(target, bpList) {
    this.isPrinting = true;
    this.formerActivations = target.activatedBreakpoints;
    target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
  }
  /** For any print de-activations, reset the entire print queue */


  stopPrinting(target) {
    target.activatedBreakpoints = this.deactivations;
    this.deactivations = [];
    this.formerActivations = null;
    this.queue.clear();
    this.isPrinting = false;
  }
  /**
   * To restore pre-Print Activations, we must capture the proper
   * list of breakpoint activations BEFORE print starts. OnBeforePrint()
   * is supported; so 'print' mediaQuery activations are used as a fallback
   * in browsers without `beforeprint` support.
   *
   * >  But activated breakpoints are deactivated BEFORE 'print' activation.
   *
   * Let's capture all de-activations using the following logic:
   *
   *  When not printing:
   *    - clear cache when activating non-print breakpoint
   *    - update cache (and sort) when deactivating
   *
   *  When printing:
   *    - sort and save when starting print
   *    - restore as activatedTargets and clear when stop printing
   */


  collectActivations(target, event) {
    if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
      if (!this.isPrintingBeforeAfterEvent) {
        // Only clear deactivations if we aren't printing from a `beforeprint` event.
        // Otherwise, this will clear before `stopPrinting()` is called to restore
        // the pre-Print Activations.
        this.deactivations = [];
        return;
      }

      if (!event.matches) {
        const bp = this.breakpoints.findByQuery(event.mediaQuery); // Deactivating a breakpoint

        if (bp) {
          const hasFormerBp = this.formerActivations && this.formerActivations.includes(bp);
          const wasActivated = !this.formerActivations && target.activatedBreakpoints.includes(bp);
          const shouldDeactivate = hasFormerBp || wasActivated;

          if (shouldDeactivate) {
            this.deactivations.push(bp);
            this.deactivations.sort(sortDescendingPriority);
          }
        }
      }
    }
  }
  /** Teardown logic for the service. */


  ngOnDestroy() {
    if (this._document.defaultView) {
      this.beforePrintEventListeners.forEach(l => this._document.defaultView.removeEventListener('beforeprint', l));
      this.afterPrintEventListeners.forEach(l => this._document.defaultView.removeEventListener('afterprint', l));
    }
  }

}

PrintHook.ɵfac = function PrintHook_Factory(t) {
  return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

PrintHook.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PrintHook,
  factory: PrintHook.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintHook, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BreakPointRegistry
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [LAYOUT_CONFIG]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})(); // ************************************************************************
// Internal Utility class 'PrintQueue'
// ************************************************************************

/**
 * Utility class to manage print breakpoints + activatedBreakpoints
 * with correct sorting WHILE printing
 */


class PrintQueue {
  constructor() {
    /** Sorted queue with prioritized print breakpoints */
    this.printBreakpoints = [];
  }

  addPrintBreakpoints(bpList) {
    bpList.push(BREAKPOINT_PRINT);
    bpList.sort(sortDescendingPriority);
    bpList.forEach(bp => this.addBreakpoint(bp));
    return this.printBreakpoints;
  }
  /** Add Print breakpoint to queue */


  addBreakpoint(bp) {
    if (!!bp) {
      const bpInList = this.printBreakpoints.find(it => it.mediaQuery === bp.mediaQuery);

      if (bpInList === undefined) {
        // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
        // register as highest priority in the queue
        this.printBreakpoints = isPrintBreakPoint(bp) ? [bp, ...this.printBreakpoints] : [...this.printBreakpoints, bp];
      }
    }
  }
  /** Restore original activated breakpoints and clear internal caches */


  clear() {
    this.printBreakpoints = [];
  }

} // ************************************************************************
// Internal Utility methods
// ************************************************************************

/** Only support intercept queueing if the Breakpoint is a print @media query */


function isPrintBreakPoint(bp) {
  var _a;

  return (_a = bp === null || bp === void 0 ? void 0 : bp.mediaQuery.startsWith(PRINT)) !== null && _a !== void 0 ? _a : false;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * MediaMarshaller - register responsive values from directives and
 *                   trigger them based on media query events
 */


class MediaMarshaller {
  constructor(matchMedia, breakpoints, hook) {
    this.matchMedia = matchMedia;
    this.breakpoints = breakpoints;
    this.hook = hook;
    this._useFallbacks = true;
    this._activatedBreakpoints = [];
    this.elementMap = new Map();
    this.elementKeyMap = new WeakMap();
    this.watcherMap = new WeakMap(); // special triggers to update elements

    this.updateMap = new WeakMap(); // callback functions to update styles

    this.clearMap = new WeakMap(); // callback functions to clear styles

    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.observeActivations();
  }

  get activatedAlias() {
    var _a, _b;

    return (_b = (_a = this.activatedBreakpoints[0]) === null || _a === void 0 ? void 0 : _a.alias) !== null && _b !== void 0 ? _b : '';
  }

  set activatedBreakpoints(bps) {
    this._activatedBreakpoints = [...bps];
  }

  get activatedBreakpoints() {
    return [...this._activatedBreakpoints];
  }

  set useFallbacks(value) {
    this._useFallbacks = value;
  }
  /**
   * Update styles on breakpoint activates or deactivates
   * @param mc
   */


  onMediaChange(mc) {
    const bp = this.findByQuery(mc.mediaQuery);

    if (bp) {
      mc = mergeAlias(mc, bp);
      const bpIndex = this.activatedBreakpoints.indexOf(bp);

      if (mc.matches && bpIndex === -1) {
        this._activatedBreakpoints.push(bp);

        this._activatedBreakpoints.sort(sortDescendingPriority);

        this.updateStyles();
      } else if (!mc.matches && bpIndex !== -1) {
        // Remove the breakpoint when it's deactivated
        this._activatedBreakpoints.splice(bpIndex, 1);

        this._activatedBreakpoints.sort(sortDescendingPriority);

        this.updateStyles();
      }
    }
  }
  /**
   * initialize the marshaller with necessary elements for delegation on an element
   * @param element
   * @param key
   * @param updateFn optional callback so that custom bp directives don't have to re-provide this
   * @param clearFn optional callback so that custom bp directives don't have to re-provide this
   * @param extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
   */


  init(element, key, updateFn, clearFn, extraTriggers = []) {
    initBuilderMap(this.updateMap, element, key, updateFn);
    initBuilderMap(this.clearMap, element, key, clearFn);
    this.buildElementKeyMap(element, key);
    this.watchExtraTriggers(element, key, extraTriggers);
  }
  /**
   * get the value for an element and key and optionally a given breakpoint
   * @param element
   * @param key
   * @param bp
   */


  getValue(element, key, bp) {
    const bpMap = this.elementMap.get(element);

    if (bpMap) {
      const values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);

      if (values) {
        return values.get(key);
      }
    }

    return undefined;
  }
  /**
   * whether the element has values for a given key
   * @param element
   * @param key
   */


  hasValue(element, key) {
    const bpMap = this.elementMap.get(element);

    if (bpMap) {
      const values = this.getActivatedValues(bpMap, key);

      if (values) {
        return values.get(key) !== undefined || false;
      }
    }

    return false;
  }
  /**
   * Set the value for an input on a directive
   * @param element the element in question
   * @param key the type of the directive (e.g. flex, layout-gap, etc)
   * @param bp the breakpoint suffix (empty string = default)
   * @param val the value for the breakpoint
   */


  setValue(element, key, val, bp) {
    var _a;

    let bpMap = this.elementMap.get(element);

    if (!bpMap) {
      bpMap = new Map().set(bp, new Map().set(key, val));
      this.elementMap.set(element, bpMap);
    } else {
      const values = ((_a = bpMap.get(bp)) !== null && _a !== void 0 ? _a : new Map()).set(key, val);
      bpMap.set(bp, values);
      this.elementMap.set(element, bpMap);
    }

    const value = this.getValue(element, key);

    if (value !== undefined) {
      this.updateElement(element, key, value);
    }
  }
  /** Track element value changes for a specific key */


  trackValue(element, key) {
    return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(v => v.element === element && v.key === key));
  }
  /** update all styles for all elements on the current breakpoint */


  updateStyles() {
    this.elementMap.forEach((bpMap, el) => {
      const keyMap = new Set(this.elementKeyMap.get(el));
      let valueMap = this.getActivatedValues(bpMap);

      if (valueMap) {
        valueMap.forEach((v, k) => {
          this.updateElement(el, k, v);
          keyMap.delete(k);
        });
      }

      keyMap.forEach(k => {
        valueMap = this.getActivatedValues(bpMap, k);

        if (valueMap) {
          const value = valueMap.get(k);
          this.updateElement(el, k, value);
        } else {
          this.clearElement(el, k);
        }
      });
    });
  }
  /**
   * clear the styles for a given element
   * @param element
   * @param key
   */


  clearElement(element, key) {
    const builders = this.clearMap.get(element);

    if (builders) {
      const clearFn = builders.get(key);

      if (!!clearFn) {
        clearFn();
        this.subject.next({
          element,
          key,
          value: ''
        });
      }
    }
  }
  /**
   * update a given element with the activated values for a given key
   * @param element
   * @param key
   * @param value
   */


  updateElement(element, key, value) {
    const builders = this.updateMap.get(element);

    if (builders) {
      const updateFn = builders.get(key);

      if (!!updateFn) {
        updateFn(value);
        this.subject.next({
          element,
          key,
          value
        });
      }
    }
  }
  /**
   * release all references to a given element
   * @param element
   */


  releaseElement(element) {
    const watcherMap = this.watcherMap.get(element);

    if (watcherMap) {
      watcherMap.forEach(s => s.unsubscribe());
      this.watcherMap.delete(element);
    }

    const elementMap = this.elementMap.get(element);

    if (elementMap) {
      elementMap.forEach((_, s) => elementMap.delete(s));
      this.elementMap.delete(element);
    }
  }
  /**
   * trigger an update for a given element and key (e.g. layout)
   * @param element
   * @param key
   */


  triggerUpdate(element, key) {
    const bpMap = this.elementMap.get(element);

    if (bpMap) {
      const valueMap = this.getActivatedValues(bpMap, key);

      if (valueMap) {
        if (key) {
          this.updateElement(element, key, valueMap.get(key));
        } else {
          valueMap.forEach((v, k) => this.updateElement(element, k, v));
        }
      }
    }
  }
  /** Cross-reference for HTMLElement with directive key */


  buildElementKeyMap(element, key) {
    let keyMap = this.elementKeyMap.get(element);

    if (!keyMap) {
      keyMap = new Set();
      this.elementKeyMap.set(element, keyMap);
    }

    keyMap.add(key);
  }
  /**
   * Other triggers that should force style updates:
   * - directionality
   * - layout changes
   * - mutationobserver updates
   */


  watchExtraTriggers(element, key, triggers) {
    if (triggers && triggers.length) {
      let watchers = this.watcherMap.get(element);

      if (!watchers) {
        watchers = new Map();
        this.watcherMap.set(element, watchers);
      }

      const subscription = watchers.get(key);

      if (!subscription) {
        const newSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(...triggers).subscribe(() => {
          const currentValue = this.getValue(element, key);
          this.updateElement(element, key, currentValue);
        });
        watchers.set(key, newSubscription);
      }
    }
  }
  /** Breakpoint locator by mediaQuery */


  findByQuery(query) {
    return this.breakpoints.findByQuery(query);
  }
  /**
   * get the fallback breakpoint for a given element, starting with the current breakpoint
   * @param bpMap
   * @param key
   */


  getActivatedValues(bpMap, key) {
    for (let i = 0; i < this.activatedBreakpoints.length; i++) {
      const activatedBp = this.activatedBreakpoints[i];
      const valueMap = bpMap.get(activatedBp.alias);

      if (valueMap) {
        if (key === undefined || valueMap.has(key) && valueMap.get(key) != null) {
          return valueMap;
        }
      }
    } // On the server, we explicitly have an "all" section filled in to begin with.
    // So we don't need to aggressively find a fallback if no explicit value exists.


    if (!this._useFallbacks) {
      return undefined;
    }

    const lastHope = bpMap.get('');
    return key === undefined || lastHope && lastHope.has(key) ? lastHope : undefined;
  }
  /**
   * Watch for mediaQuery breakpoint activations
   */


  observeActivations() {
    const queries = this.breakpoints.items.map(bp => bp.mediaQuery);
    this.hook.registerBeforeAfterPrintHooks(this);
    this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(this.hook.interceptEvents(this)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
  }

}

MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) {
  return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PrintHook));
};

MediaMarshaller.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaMarshaller,
  factory: MediaMarshaller.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaMarshaller, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MatchMedia
    }, {
      type: BreakPointRegistry
    }, {
      type: PrintHook
    }];
  }, null);
})();

function initBuilderMap(map, element, key, input) {
  var _a;

  if (input !== undefined) {
    const oldMap = (_a = map.get(element)) !== null && _a !== void 0 ? _a : new Map();
    oldMap.set(key, input);
    map.set(element, oldMap);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    this.elementRef = elementRef;
    this.styleBuilder = styleBuilder;
    this.styler = styler;
    this.marshal = marshal;
    this.DIRECTIVE_KEY = '';
    this.inputs = [];
    /** The most recently used styles for the builder */

    this.mru = {};
    this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Cache map for style computation */

    this.styleCache = new Map();
  }
  /** Access to host element's parent DOM node */


  get parentElement() {
    return this.elementRef.nativeElement.parentElement;
  }
  /** Access to the HTMLElement for the directive */


  get nativeElement() {
    return this.elementRef.nativeElement;
  }
  /** Access to the activated value for the directive */


  get activatedValue() {
    return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
  }

  set activatedValue(value) {
    this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
  }
  /** For @Input changes */


  ngOnChanges(changes) {
    Object.keys(changes).forEach(key => {
      if (this.inputs.indexOf(key) !== -1) {
        const bp = key.split('.').slice(1).join('.');
        const val = changes[key].currentValue;
        this.setValue(val, bp);
      }
    });
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
    this.marshal.releaseElement(this.nativeElement);
  }
  /** Register with central marshaller service */


  init(extraTriggers = []) {
    this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
  }
  /** Add styles to the element using predefined style builder */


  addStyles(input, parent) {
    const builder = this.styleBuilder;
    const useCache = builder.shouldCache;
    let genStyles = this.styleCache.get(input);

    if (!genStyles || !useCache) {
      genStyles = builder.buildStyles(input, parent);

      if (useCache) {
        this.styleCache.set(input, genStyles);
      }
    }

    this.mru = Object.assign({}, genStyles);
    this.applyStyleToElement(genStyles);
    builder.sideEffect(input, genStyles, parent);
  }
  /** Remove generated styles from an element using predefined style builder */


  clearStyles() {
    Object.keys(this.mru).forEach(k => {
      this.mru[k] = '';
    });
    this.applyStyleToElement(this.mru);
    this.mru = {};
    this.currentValue = undefined;
  }
  /** Force trigger style updates on DOM element */


  triggerUpdate() {
    this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
  }
  /**
   * Determine the DOM element's Flexbox flow (flex-direction).
   *
   * Check inline style first then check computed (stylesheet) style.
   * And optionally add the flow value to element's inline style.
   */


  getFlexFlowDirection(target, addIfMissing = false) {
    if (target) {
      const [value, hasInlineValue] = this.styler.getFlowDirection(target);

      if (!hasInlineValue && addIfMissing) {
        const style = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_2__.buildLayoutCSS)(value);
        const elements = [target];
        this.styler.applyStyleToElements(style, elements);
      }

      return value.trim();
    }

    return 'row';
  }

  hasWrap(target) {
    return this.styler.hasWrap(target);
  }
  /** Applies styles given via string pair or object map to the directive element */


  applyStyleToElement(style, value, element = this.nativeElement) {
    this.styler.applyStyleToElement(element, style, value);
  }

  setValue(val, bp) {
    this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
  }

  updateWithValue(input) {
    if (this.currentValue !== input) {
      this.addStyles(input);
      this.currentValue = input;
    }
  }

}

BaseDirective2.ɵfac = function BaseDirective2_Factory(t) {
  return new (t || BaseDirective2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MediaMarshaller));
};

BaseDirective2.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: BaseDirective2,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseDirective2, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: StyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */


class MockMatchMedia extends MatchMedia {
  constructor(_zone, _platformId, _document, _breakpoints) {
    super(_zone, _platformId, _document);
    this._breakpoints = _breakpoints;
    this.autoRegisterQueries = true; // Used for testing BreakPoint registrations

    this.useOverlaps = false; // Allow fallback to overlapping mediaQueries
  }
  /** Easy method to clear all listeners for all mediaQueries */


  clearAll() {
    this.registry.forEach(mql => {
      mql.destroy();
    });
    this.registry.clear();
    this.useOverlaps = false;
  }
  /** Feature to support manual, simulated activation of a mediaQuery. */


  activate(mediaQuery, useOverlaps = this.useOverlaps) {
    mediaQuery = this._validateQuery(mediaQuery);

    if (useOverlaps || !this.isActive(mediaQuery)) {
      this._deactivateAll();

      this._registerMediaQuery(mediaQuery);

      this._activateWithOverlaps(mediaQuery, useOverlaps);
    }

    return this.hasActivated;
  }
  /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */


  _validateQuery(queryOrAlias) {
    var _a;

    const bp = this._breakpoints.findByAlias(queryOrAlias);

    return (_a = bp === null || bp === void 0 ? void 0 : bp.mediaQuery) !== null && _a !== void 0 ? _a : queryOrAlias;
  }
  /**
   * Manually onMediaChange any overlapping mediaQueries to simulate
   * similar functionality in the window.matchMedia()
   */


  _activateWithOverlaps(mediaQuery, useOverlaps) {
    var _a;

    if (useOverlaps) {
      const bp = this._breakpoints.findByQuery(mediaQuery);

      const alias = (_a = bp === null || bp === void 0 ? void 0 : bp.alias) !== null && _a !== void 0 ? _a : 'unknown'; // Simulate activation of overlapping lt-<XXX> ranges

      switch (alias) {
        case 'lg':
          this._activateByAlias(['lt-xl']);

          break;

        case 'md':
          this._activateByAlias(['lt-xl', 'lt-lg']);

          break;

        case 'sm':
          this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md']);

          break;

        case 'xs':
          this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md', 'lt-sm']);

          break;
      } // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges


      switch (alias) {
        case 'xl':
          this._activateByAlias(['gt-lg', 'gt-md', 'gt-sm', 'gt-xs']);

          break;

        case 'lg':
          this._activateByAlias(['gt-md', 'gt-sm', 'gt-xs']);

          break;

        case 'md':
          this._activateByAlias(['gt-sm', 'gt-xs']);

          break;

        case 'sm':
          this._activateByAlias(['gt-xs']);

          break;
      }
    } // Activate last since the responsiveActivation is watching *this* mediaQuery


    return this._activateByQuery(mediaQuery);
  }
  /**
   *
   */


  _activateByAlias(aliases) {
    const activate = alias => {
      var _a;

      const bp = this._breakpoints.findByAlias(alias);

      this._activateByQuery((_a = bp === null || bp === void 0 ? void 0 : bp.mediaQuery) !== null && _a !== void 0 ? _a : alias);
    };

    aliases.forEach(activate);
  }
  /**
   *
   */


  _activateByQuery(mediaQuery) {
    if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
      this._registerMediaQuery(mediaQuery);
    }

    const mql = this.registry.get(mediaQuery);

    if (mql && !this.isActive(mediaQuery)) {
      this.registry.set(mediaQuery, mql.activate());
    }

    return this.hasActivated;
  }
  /** Deactivate all current MQLs and reset the buffer */


  _deactivateAll() {
    this.registry.forEach(it => {
      it.deactivate();
    });
    return this;
  }
  /** Insure the mediaQuery is registered with MatchMedia */


  _registerMediaQuery(mediaQuery) {
    if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
      this.registerQuery(mediaQuery);
    }
  }
  /**
   * Call window.matchMedia() to build a MediaQueryList; which
   * supports 0..n listeners for activation/deactivation
   */


  buildMQL(query) {
    return new MockMediaQueryList(query);
  }

  get hasActivated() {
    return this.activations.length > 0;
  }

}

MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) {
  return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry));
};

MockMatchMedia.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MockMatchMedia,
  factory: MockMatchMedia.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MockMatchMedia, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }, {
      type: BreakPointRegistry
    }];
  }, null);
})();
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */


class MockMediaQueryList extends EventTarget {
  constructor(_mediaQuery) {
    super();
    this._mediaQuery = _mediaQuery;
    this._isActive = false;
    this._listeners = [];
    this.onchange = null;
  }

  get matches() {
    return this._isActive;
  }

  get media() {
    return this._mediaQuery;
  }
  /**
   * Destroy the current list by deactivating the
   * listeners and clearing the internal list
   */


  destroy() {
    this.deactivate();
    this._listeners = [];
  }
  /** Notify all listeners that 'matches === TRUE' */


  activate() {
    if (!this._isActive) {
      this._isActive = true;

      this._listeners.forEach(callback => {
        const cb = callback;
        cb.call(this, {
          matches: this.matches,
          media: this.media
        });
      });
    }

    return this;
  }
  /** Notify all listeners that 'matches === false' */


  deactivate() {
    if (this._isActive) {
      this._isActive = false;

      this._listeners.forEach(callback => {
        const cb = callback;
        cb.call(this, {
          matches: this.matches,
          media: this.media
        });
      });
    }

    return this;
  }
  /** Add a listener to our internal list to activate later */


  addListener(listener) {
    if (this._listeners.indexOf(listener) === -1) {
      this._listeners.push(listener);
    }

    if (this._isActive) {
      const cb = listener;
      cb.call(this, {
        matches: this.matches,
        media: this.media
      });
    }
  }
  /** Don't need to remove listeners in the testing environment */


  removeListener(_) {}

  dispatchEvent(_) {
    return false;
  }

}
/**
 * Pre-configured provider for MockMatchMedia
 */


const MockMatchMediaProvider = {
  provide: MatchMedia,
  useClass: MockMatchMedia
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Wraps the provided value in an array, unless the provided value is an array. */

function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
 * if a mediaQuery is currently activated.
 *
 * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
 * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
 * in 1 event notification. The reported activations will be sorted in descending priority order.
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * Note: Developers should note that only mediaChange activations (not de-activations)
 *       are announced by the MediaObserver.
 *
 *  @usage
 *
 *  // RxJS
 *  import { filter } from 'rxjs/operators';
 *  import { MediaObserver } from '@angular/flex-layout';
 *
 *  @Component({ ... })
 *  export class AppComponent {
 *    status: string = '';
 *
 *    constructor(mediaObserver: MediaObserver) {
 *      const media$ = mediaObserver.asObservable().pipe(
 *        filter((changes: MediaChange[]) => true)   // silly noop filter
 *      );
 *
 *      media$.subscribe((changes: MediaChange[]) => {
 *        let status = '';
 *        changes.forEach( change => {
 *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
 *        });
 *        this.status = status;
 *     });
 *
 *    }
 *  }
 */


class MediaObserver {
  constructor(breakpoints, matchMedia, hook) {
    this.breakpoints = breakpoints;
    this.matchMedia = matchMedia;
    this.hook = hook;
    /** Filter MediaChange notifications for overlapping breakpoints */

    this.filterOverlaps = false;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this._media$ = this.watchActivations();
  }
  /**
   * Completes the active subject, signalling to all complete for all
   * MediaObserver subscribers
   */


  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  } // ************************************************
  // Public Methods
  // ************************************************

  /**
   * Observe changes to current activation 'list'
   */


  asObservable() {
    return this._media$;
  }
  /**
   * Allow programmatic query to determine if one or more media query/alias match
   * the current viewport size.
   * @param value One or more media queries (or aliases) to check.
   * @returns Whether any of the media queries match.
   */


  isActive(value) {
    const aliases = splitQueries(coerceArray(value));
    return aliases.some(alias => {
      const query = toMediaQuery(alias, this.breakpoints);
      return query !== null && this.matchMedia.isActive(query);
    });
  } // ************************************************
  // Internal Methods
  // ************************************************

  /**
   * Register all the mediaQueries registered in the BreakPointRegistry
   * This is needed so subscribers can be auto-notified of all standard, registered
   * mediaQuery activations
   */


  watchActivations() {
    const queries = this.breakpoints.items.map(bp => bp.mediaQuery);
    return this.buildObservable(queries);
  }
  /**
   * Only pass/announce activations (not de-activations)
   *
   * Since multiple-mediaQueries can be activation in a cycle,
   * gather all current activations into a single list of changes to observers
   *
   * Inject associated (if any) alias information into the MediaChange event
   * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
   * - Exclude print activations that do not have an associated mediaQuery
   *
   * NOTE: the raw MediaChange events [from MatchMedia] do not
   *       contain important alias information; as such this info
   *       must be injected into the MediaChange
   */


  buildObservable(mqList) {
    const hasChanges = changes => {
      const isValidQuery = change => change.mediaQuery.length > 0;

      return changes.filter(isValidQuery).length > 0;
    };

    const excludeOverlaps = changes => {
      return !this.filterOverlaps ? changes : changes.filter(change => {
        var _a;

        const bp = this.breakpoints.findByQuery(change.mediaQuery);
        return (_a = bp === null || bp === void 0 ? void 0 : bp.overlapping) !== null && _a !== void 0 ? _a : true;
      });
    };

    const ignoreDuplicates = (previous, current) => {
      if (previous.length !== current.length) {
        return false;
      }

      const previousMqs = previous.map(mc => mc.mediaQuery);
      const currentMqs = new Set(current.map(mc => mc.mediaQuery));
      const difference = new Set(previousMqs.filter(mq => !currentMqs.has(mq)));
      return difference.size === 0;
    };
    /**
     */


    return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(change => change.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(0, rxjs__WEBPACK_IMPORTED_MODULE_10__.asapScheduler), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.findAllActivations())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(excludeOverlaps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(hasChanges), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(ignoreDuplicates), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroyed$));
  }
  /**
   * Find all current activations and prepare single list of activations
   * sorted by descending priority.
   */


  findAllActivations() {
    const mergeMQAlias = change => {
      const bp = this.breakpoints.findByQuery(change.mediaQuery);
      return mergeAlias(change, bp);
    };

    const replaceWithPrintAlias = change => this.hook.isPrintEvent(change) ? this.hook.updateEvent(change) : change;

    return this.matchMedia.activations.map(query => new MediaChange(true, query)).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
  }

}

MediaObserver.ɵfac = function MediaObserver_Factory(t) {
  return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PrintHook));
};

MediaObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaObserver,
  factory: MediaObserver.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BreakPointRegistry
    }, {
      type: MatchMedia
    }, {
      type: PrintHook
    }];
  }, null);
})();
/**
 * Find associated breakpoint (if any)
 */


function toMediaQuery(query, locator) {
  var _a, _b;

  const bp = (_a = locator.findByAlias(query)) !== null && _a !== void 0 ? _a : locator.findByQuery(query);
  return (_b = bp === null || bp === void 0 ? void 0 : bp.mediaQuery) !== null && _b !== void 0 ? _b : null;
}
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */


function splitQueries(queries) {
  return queries.flatMap(query => query.split(',')).map(query => query.trim());
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class
 */


class MediaTrigger {
  constructor(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
    this.breakpoints = breakpoints;
    this.matchMedia = matchMedia;
    this.layoutConfig = layoutConfig;
    this._platformId = _platformId;
    this._document = _document;
    this.hasCachedRegistryMatches = false;
    this.originalActivations = [];
    this.originalRegistry = new Map();
  }
  /**
   * Manually activate range of breakpoints
   * @param list array of mediaQuery or alias strings
   */


  activate(list) {
    list = list.map(it => it.trim()); // trim queries

    this.saveActivations();
    this.deactivateAll();
    this.setActivations(list);
    this.prepareAutoRestore();
  }
  /**
   * Restore original, 'real' breakpoints and emit events
   * to trigger stream notification
   */


  restore() {
    if (this.hasCachedRegistryMatches) {
      const extractQuery = change => change.mediaQuery;

      const list = this.originalActivations.map(extractQuery);

      try {
        this.deactivateAll();
        this.restoreRegistryMatches();
        this.setActivations(list);
      } finally {
        this.originalActivations = [];

        if (this.resizeSubscription) {
          this.resizeSubscription.unsubscribe();
        }
      }
    }
  } // ************************************************
  // Internal Methods
  // ************************************************

  /**
   * Whenever window resizes, immediately auto-restore original
   * activations (if we are simulating activations)
   */


  prepareAutoRestore() {
    const isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) && this._document;

    const enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;

    if (enableAutoRestore) {
      const resize$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1));
      this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
    }
  }
  /**
   * Notify all matchMedia subscribers of de-activations
   *
   * Note: we must force 'matches' updates for
   *       future matchMedia::activation lookups
   */


  deactivateAll() {
    const list = this.currentActivations;
    this.forceRegistryMatches(list, false);
    this.simulateMediaChanges(list, false);
  }
  /**
   * Cache current activations as sorted, prioritized list of MediaChanges
   */


  saveActivations() {
    if (!this.hasCachedRegistryMatches) {
      const toMediaChange = query => new MediaChange(true, query);

      const mergeMQAlias = change => {
        const bp = this.breakpoints.findByQuery(change.mediaQuery);
        return mergeAlias(change, bp);
      };

      this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
      this.cacheRegistryMatches();
    }
  }
  /**
   * Force set manual activations for specified mediaQuery list
   */


  setActivations(list) {
    if (!!this.originalRegistry) {
      this.forceRegistryMatches(list, true);
    }

    this.simulateMediaChanges(list);
  }
  /**
   * For specified mediaQuery list manually simulate activations or deactivations
   */


  simulateMediaChanges(queries, matches = true) {
    const toMediaQuery = query => {
      const locator = this.breakpoints;
      const bp = locator.findByAlias(query) || locator.findByQuery(query);
      return bp ? bp.mediaQuery : query;
    };

    const emitChangeEvent = query => this.emitChangeEvent(matches, query);

    queries.map(toMediaQuery).forEach(emitChangeEvent);
  }
  /**
   * Replace current registry with simulated registry...
   * Note: this is required since MediaQueryList::matches is 'readOnly'
   */


  forceRegistryMatches(queries, matches) {
    const registry = new Map();
    queries.forEach(query => {
      registry.set(query, {
        matches
      });
    });
    this.matchMedia.registry = registry;
  }
  /**
   * Save current MatchMedia::registry items.
   */


  cacheRegistryMatches() {
    const target = this.originalRegistry;
    target.clear();
    this.matchMedia.registry.forEach((value, key) => {
      target.set(key, value);
    });
    this.hasCachedRegistryMatches = true;
  }
  /**
   * Restore original, 'true' registry
   */


  restoreRegistryMatches() {
    const target = this.matchMedia.registry;
    target.clear();
    this.originalRegistry.forEach((value, key) => {
      target.set(key, value);
    });
    this.originalRegistry.clear();
    this.hasCachedRegistryMatches = false;
  }
  /**
   * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
   */


  emitChangeEvent(matches, query) {
    this.matchMedia.source.next(new MediaChange(matches, query));
  }

  get currentActivations() {
    return this.matchMedia.activations;
  }

}

MediaTrigger.ɵfac = function MediaTrigger_Factory(t) {
  return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

MediaTrigger.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaTrigger,
  factory: MediaTrigger.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BreakPointRegistry
    }, {
      type: MatchMedia
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [LAYOUT_CONFIG]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
* The flex API permits 3 or 1 parts of the value:
*    - `flex-grow flex-shrink flex-basis`, or
*    - `flex-basis`
*/


function validateBasis(basis, grow = '1', shrink = '1') {
  let parts = [grow, shrink, basis];
  let j = basis.indexOf('calc');

  if (j > 0) {
    parts[2] = _validateCalcValue(basis.substring(j).trim());
    let matches = basis.substr(0, j).trim().split(' ');

    if (matches.length == 2) {
      parts[0] = matches[0];
      parts[1] = matches[1];
    }
  } else if (j == 0) {
    parts[2] = _validateCalcValue(basis.trim());
  } else {
    let matches = basis.split(' ');
    parts = matches.length === 3 ? matches : [grow, shrink, basis];
  }

  return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 */


function _validateCalcValue(calc) {
  return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

const MULTIPLIER_SUFFIX = 'x';

function multiply(value, multiplier) {
  if (multiplier === undefined) {
    return value;
  }

  const transformValue = possibleValue => {
    const numberValue = +possibleValue.slice(0, -MULTIPLIER_SUFFIX.length);

    if (value.endsWith(MULTIPLIER_SUFFIX) && !isNaN(numberValue)) {
      return `${numberValue * multiplier.value}${multiplier.unit}`;
    }

    return value;
  };

  return value.includes(' ') ? value.split(' ').map(transformValue).join(' ') : transformValue(value);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 13338:
/*!*************************************!*\
  !*** @angular/flex-layout/extended ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassDirective": () => (/* binding */ ClassDirective),
/* harmony export */   "DefaultClassDirective": () => (/* binding */ DefaultClassDirective),
/* harmony export */   "DefaultImgSrcDirective": () => (/* binding */ DefaultImgSrcDirective),
/* harmony export */   "DefaultShowHideDirective": () => (/* binding */ DefaultShowHideDirective),
/* harmony export */   "DefaultStyleDirective": () => (/* binding */ DefaultStyleDirective),
/* harmony export */   "ExtendedModule": () => (/* binding */ ExtendedModule),
/* harmony export */   "ImgSrcDirective": () => (/* binding */ ImgSrcDirective),
/* harmony export */   "ImgSrcStyleBuilder": () => (/* binding */ ImgSrcStyleBuilder),
/* harmony export */   "ShowHideDirective": () => (/* binding */ ShowHideDirective),
/* harmony export */   "ShowHideStyleBuilder": () => (/* binding */ ShowHideStyleBuilder),
/* harmony export */   "StyleDirective": () => (/* binding */ StyleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 36639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class ImgSrcStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(url) {
    return {
      'content': url ? `url(${url})` : ''
    };
  }

}

ImgSrcStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵImgSrcStyleBuilder_BaseFactory;
  return function ImgSrcStyleBuilder_Factory(t) {
    return (ɵImgSrcStyleBuilder_BaseFactory || (ɵImgSrcStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder)))(t || ImgSrcStyleBuilder);
  };
}();

ImgSrcStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ImgSrcStyleBuilder,
  factory: ImgSrcStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class ImgSrcDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = 'img-src';
    this.defaultSrc = '';
    this.styleCache = imgSrcCache;
    this.init();
    this.setValue(this.nativeElement.getAttribute('src') || '', '');

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId) && this.serverModuleLoaded) {
      this.nativeElement.setAttribute('src', '');
    }
  }

  set src(val) {
    this.defaultSrc = val;
    this.setValue(this.defaultSrc, '');
  }
  /**
   * Use the [responsively] activated input value to update
   * the host img src attribute or assign a default `img.src=''`
   * if the src has not been defined.
   *
   * Do nothing to standard `<img src="">` usages, only when responsive
   * keys are present do we actually call `setAttribute()`
   */


  updateWithValue(value) {
    const url = value || this.defaultSrc;

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId) && this.serverModuleLoaded) {
      this.addStyles(url);
    } else {
      this.nativeElement.setAttribute('src', url);
    }
  }

}

ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) {
  return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN));
};

ImgSrcDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: ImgSrcDirective,
  inputs: {
    src: "src"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: ImgSrcStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }];
  }, {
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['src']
    }]
  });
})();

const imgSrcCache = new Map();
const inputs$3 = ['src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl', 'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl', 'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'];
const selector$3 = `
  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],
  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],
  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]
`;
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */

class DefaultImgSrcDirective extends ImgSrcDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }

}

DefaultImgSrcDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultImgSrcDirective_BaseFactory;
  return function DefaultImgSrcDirective_Factory(t) {
    return (ɵDefaultImgSrcDirective_BaseFactory || (ɵDefaultImgSrcDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective)))(t || DefaultImgSrcDirective);
  };
}();

DefaultImgSrcDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultImgSrcDirective,
  selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
  inputs: {
    "src.xs": "src.xs",
    "src.sm": "src.sm",
    "src.md": "src.md",
    "src.lg": "src.lg",
    "src.xl": "src.xl",
    "src.lt-sm": "src.lt-sm",
    "src.lt-md": "src.lt-md",
    "src.lt-lg": "src.lt-lg",
    "src.lt-xl": "src.lt-xl",
    "src.gt-xs": "src.gt-xs",
    "src.gt-sm": "src.gt-sm",
    "src.gt-md": "src.gt-md",
    "src.gt-lg": "src.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultImgSrcDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ClassDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
    super(elementRef, null, styler, marshal);
    this.ngClassInstance = ngClassInstance;
    this.DIRECTIVE_KEY = 'ngClass';

    if (!this.ngClassInstance) {
      // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
      // the same host element; since the responsive variations may be defined...
      this.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass(iterableDiffers, keyValueDiffers, elementRef, renderer2);
    }

    this.init();
    this.setValue('', '');
  }
  /**
   * Capture class assignments so we cache the default classes
   * which are merged with activated styles and used as fallbacks.
   */


  set klass(val) {
    this.ngClassInstance.klass = val;
    this.setValue(val, '');
  }

  updateWithValue(value) {
    this.ngClassInstance.ngClass = value;
    this.ngClassInstance.ngDoCheck();
  } // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************

  /**
   * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
   */


  ngDoCheck() {
    this.ngClassInstance.ngDoCheck();
  }

}

ClassDirective.ɵfac = function ClassDirective_Factory(t) {
  return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, 10));
};

ClassDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: ClassDirective,
  inputs: {
    klass: ["class", "klass"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClassDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }]
    }];
  }, {
    klass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['class']
    }]
  });
})();

const inputs$2 = ['ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl', 'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl', 'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'];
const selector$2 = `
  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],
  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],
  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]
`;
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */

class DefaultClassDirective extends ClassDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }

}

DefaultClassDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultClassDirective_BaseFactory;
  return function DefaultClassDirective_Factory(t) {
    return (ɵDefaultClassDirective_BaseFactory || (ɵDefaultClassDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultClassDirective)))(t || DefaultClassDirective);
  };
}();

DefaultClassDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultClassDirective,
  selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
  inputs: {
    ngClass: "ngClass",
    "ngClass.xs": "ngClass.xs",
    "ngClass.sm": "ngClass.sm",
    "ngClass.md": "ngClass.md",
    "ngClass.lg": "ngClass.lg",
    "ngClass.xl": "ngClass.xl",
    "ngClass.lt-sm": "ngClass.lt-sm",
    "ngClass.lt-md": "ngClass.lt-md",
    "ngClass.lt-lg": "ngClass.lt-lg",
    "ngClass.lt-xl": "ngClass.lt-xl",
    "ngClass.gt-xs": "ngClass.gt-xs",
    "ngClass.gt-sm": "ngClass.gt-sm",
    "ngClass.gt-md": "ngClass.gt-md",
    "ngClass.gt-lg": "ngClass.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultClassDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ShowHideStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(show, parent) {
    const shouldShow = show === 'true';
    return {
      'display': shouldShow ? parent.display || (parent.isServer ? 'initial' : '') : 'none'
    };
  }

}

ShowHideStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵShowHideStyleBuilder_BaseFactory;
  return function ShowHideStyleBuilder_Factory(t) {
    return (ɵShowHideStyleBuilder_BaseFactory || (ɵShowHideStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder)))(t || ShowHideStyleBuilder);
  };
}();

ShowHideStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShowHideStyleBuilder,
  factory: ShowHideStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class ShowHideDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.layoutConfig = layoutConfig;
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = 'show-hide';
    /** Original DOM Element CSS display style */

    this.display = '';
    this.hasLayout = false;
    this.hasFlexChild = false;
  } // *********************************************
  // Lifecycle Methods
  // *********************************************


  ngAfterViewInit() {
    this.trackExtraTriggers();
    const children = Array.from(this.nativeElement.children);

    for (let i = 0; i < children.length; i++) {
      if (this.marshal.hasValue(children[i], 'flex')) {
        this.hasFlexChild = true;
        break;
      }
    }

    if (DISPLAY_MAP.has(this.nativeElement)) {
      this.display = DISPLAY_MAP.get(this.nativeElement);
    } else {
      this.display = this.getDisplayStyle();
      DISPLAY_MAP.set(this.nativeElement, this.display);
    }

    this.init(); // set the default to show unless explicitly overridden

    const defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');

    if (defaultValue === undefined || defaultValue === '') {
      this.setValue(true, '');
    } else {
      this.triggerUpdate();
    }
  }
  /**
   * On changes to any @Input properties...
   * Default to use the non-responsive Input value ('fxShow')
   * Then conditionally override with the mq-activated Input's current value
   */


  ngOnChanges(changes) {
    Object.keys(changes).forEach(key => {
      if (this.inputs.indexOf(key) !== -1) {
        const inputKey = key.split('.');
        const bp = inputKey.slice(1).join('.');
        const inputValue = changes[key].currentValue;
        let shouldShow = inputValue !== '' ? inputValue !== 0 ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(inputValue) : false : true;

        if (inputKey[0] === 'fxHide') {
          shouldShow = !shouldShow;
        }

        this.setValue(shouldShow, bp);
      }
    });
  } // *********************************************
  // Protected methods
  // *********************************************

  /**
   *  Watch for these extra triggers to update fxShow, fxHide stylings
   */


  trackExtraTriggers() {
    this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
    ['layout', 'layout-align'].forEach(key => {
      this.marshal.trackValue(this.nativeElement, key).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.triggerUpdate.bind(this));
    });
  }
  /**
   * Override accessor to the current HTMLElement's `display` style
   * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
   * unless it was already explicitly specified inline or in a CSS stylesheet.
   */


  getDisplayStyle() {
    return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? 'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
  }
  /** Validate the visibility value and then update the host's inline display style */


  updateWithValue(value = true) {
    if (value === '') {
      return;
    }

    const isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId);
    this.addStyles(value ? 'true' : 'false', {
      display: this.display,
      isServer
    });

    if (isServer && this.serverModuleLoaded) {
      this.nativeElement.style.setProperty('display', '');
    }

    this.marshal.triggerUpdate(this.parentElement, 'layout-gap');
  }

}

ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) {
  return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN));
};

ShowHideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: ShowHideDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: ShowHideStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }];
  }, null);
})();

const DISPLAY_MAP = new WeakMap();
const inputs$1 = ['fxShow', 'fxShow.print', 'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl', 'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl', 'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg', 'fxHide', 'fxHide.print', 'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl', 'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl', 'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'];
const selector$1 = `
  [fxShow], [fxShow.print],
  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],
  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],
  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],
  [fxHide], [fxHide.print],
  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],
  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],
  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]
`;
/**
 * 'show' Layout API directive
 */

class DefaultShowHideDirective extends ShowHideDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }

}

DefaultShowHideDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultShowHideDirective_BaseFactory;
  return function DefaultShowHideDirective_Factory(t) {
    return (ɵDefaultShowHideDirective_BaseFactory || (ɵDefaultShowHideDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultShowHideDirective)))(t || DefaultShowHideDirective);
  };
}();

DefaultShowHideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultShowHideDirective,
  selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
  inputs: {
    fxShow: "fxShow",
    "fxShow.print": "fxShow.print",
    "fxShow.xs": "fxShow.xs",
    "fxShow.sm": "fxShow.sm",
    "fxShow.md": "fxShow.md",
    "fxShow.lg": "fxShow.lg",
    "fxShow.xl": "fxShow.xl",
    "fxShow.lt-sm": "fxShow.lt-sm",
    "fxShow.lt-md": "fxShow.lt-md",
    "fxShow.lt-lg": "fxShow.lt-lg",
    "fxShow.lt-xl": "fxShow.lt-xl",
    "fxShow.gt-xs": "fxShow.gt-xs",
    "fxShow.gt-sm": "fxShow.gt-sm",
    "fxShow.gt-md": "fxShow.gt-md",
    "fxShow.gt-lg": "fxShow.gt-lg",
    fxHide: "fxHide",
    "fxHide.print": "fxHide.print",
    "fxHide.xs": "fxHide.xs",
    "fxHide.sm": "fxHide.sm",
    "fxHide.md": "fxHide.md",
    "fxHide.lg": "fxHide.lg",
    "fxHide.xl": "fxHide.xl",
    "fxHide.lt-sm": "fxHide.lt-sm",
    "fxHide.lt-md": "fxHide.lt-md",
    "fxHide.lt-lg": "fxHide.lt-lg",
    "fxHide.lt-xl": "fxHide.lt-xl",
    "fxHide.gt-xs": "fxHide.gt-xs",
    "fxHide.gt-sm": "fxHide.gt-sm",
    "fxHide.gt-md": "fxHide.gt-md",
    "fxHide.gt-lg": "fxHide.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultShowHideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** NgStyle allowed inputs */


class NgStyleKeyValue {
  constructor(key, value, noQuotes = true) {
    this.key = key;
    this.value = value;
    this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
    this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
    this.value = this.value.replace(/;/, '');
  }

}

function getType(target) {
  let what = typeof target;

  if (what === 'object') {
    return target.constructor === Array ? 'array' : target.constructor === Set ? 'set' : 'object';
  }

  return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 */


function buildRawList(source, delimiter = ';') {
  return String(source).trim().split(delimiter).map(val => val.trim()).filter(val => val !== '');
}
/** Convert array of key:value strings to a iterable map object */


function buildMapFromList$1(styles, sanitize) {
  const sanitizeValue = it => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }

    return it;
  };

  return styles.map(stringToKeyValue).filter(entry => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}
/** Convert Set<string> or raw Object to an iterable NgStyleMap */


function buildMapFromSet(source, sanitize) {
  let list = [];

  if (getType(source) === 'set') {
    source.forEach(entry => list.push(entry));
  } else {
    Object.keys(source).forEach(key => {
      list.push(`${key}:${source[key]}`);
    });
  }

  return buildMapFromList$1(list, sanitize);
}
/** Convert 'key:value' -> [key, value] */


function stringToKeyValue(it) {
  const [key, ...vals] = it.split(':');
  return new NgStyleKeyValue(key, vals.join(':'));
}
/** Convert [ [key,value] ] -> { key : value } */


function keyValuesToMap(map, entry) {
  if (!!entry.key) {
    map[entry.key] = entry.value;
  }

  return map;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class StyleDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
    var _a;

    super(elementRef, null, styler, marshal);
    this.sanitizer = sanitizer;
    this.ngStyleInstance = ngStyleInstance;
    this.DIRECTIVE_KEY = 'ngStyle';

    if (!this.ngStyleInstance) {
      // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
      // defined on the same host element; since the responsive variations may be defined...
      this.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle(elementRef, differs, renderer2);
    }

    this.init();
    const styles = (_a = this.nativeElement.getAttribute('style')) !== null && _a !== void 0 ? _a : '';
    this.fallbackStyles = this.buildStyleMap(styles);
    this.isServer = serverLoaded && (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(platformId);
  }
  /** Add generated styles */


  updateWithValue(value) {
    const styles = this.buildStyleMap(value);
    this.ngStyleInstance.ngStyle = Object.assign(Object.assign({}, this.fallbackStyles), styles);

    if (this.isServer) {
      this.applyStyleToElement(styles);
    }

    this.ngStyleInstance.ngDoCheck();
  }
  /** Remove generated styles */


  clearStyles() {
    this.ngStyleInstance.ngStyle = this.fallbackStyles;
    this.ngStyleInstance.ngDoCheck();
  }
  /**
   * Convert raw strings to ngStyleMap; which is required by ngStyle
   * NOTE: Raw string key-value pairs MUST be delimited by `;`
   *       Comma-delimiters are not supported due to complexities of
   *       possible style values such as `rgba(x,x,x,x)` and others
   */


  buildStyleMap(styles) {
    // Always safe-guard (aka sanitize) style property values
    const sanitizer = val => {
      var _a;

      return (_a = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.STYLE, val)) !== null && _a !== void 0 ? _a : '';
    };

    if (styles) {
      switch (getType(styles)) {
        case 'string':
          return buildMapFromList(buildRawList(styles), sanitizer);

        case 'array':
          return buildMapFromList(styles, sanitizer);

        case 'set':
          return buildMapFromSet(styles, sanitizer);

        default:
          return buildMapFromSet(styles, sanitizer);
      }
    }

    return {};
  } // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************

  /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */


  ngDoCheck() {
    this.ngStyleInstance.ngDoCheck();
  }

}

StyleDirective.ɵfac = function StyleDirective_Factory(t) {
  return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

StyleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: StyleDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();

const inputs = ['ngStyle', 'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl', 'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl', 'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'];
const selector = `
  [ngStyle],
  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],
  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],
  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]
`;
/**
 * Directive to add responsive support for ngStyle.
 *
 */

class DefaultStyleDirective extends StyleDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }

}

DefaultStyleDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultStyleDirective_BaseFactory;
  return function DefaultStyleDirective_Factory(t) {
    return (ɵDefaultStyleDirective_BaseFactory || (ɵDefaultStyleDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultStyleDirective)))(t || DefaultStyleDirective);
  };
}();

DefaultStyleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultStyleDirective,
  selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
  inputs: {
    ngStyle: "ngStyle",
    "ngStyle.xs": "ngStyle.xs",
    "ngStyle.sm": "ngStyle.sm",
    "ngStyle.md": "ngStyle.md",
    "ngStyle.lg": "ngStyle.lg",
    "ngStyle.xl": "ngStyle.xl",
    "ngStyle.lt-sm": "ngStyle.lt-sm",
    "ngStyle.lt-md": "ngStyle.lt-md",
    "ngStyle.lt-lg": "ngStyle.lt-lg",
    "ngStyle.lt-xl": "ngStyle.lt-xl",
    "ngStyle.gt-xs": "ngStyle.gt-xs",
    "ngStyle.gt-sm": "ngStyle.gt-sm",
    "ngStyle.gt-md": "ngStyle.gt-md",
    "ngStyle.gt-lg": "ngStyle.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultStyleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();
/** Build a styles map from a list of styles, while sanitizing bad values first */


function buildMapFromList(styles, sanitize) {
  const sanitizeValue = it => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }

    return it;
  };

  return styles.map(stringToKeyValue).filter(entry => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */

class ExtendedModule {}

ExtendedModule.ɵfac = function ExtendedModule_Factory(t) {
  return new (t || ExtendedModule)();
};

ExtendedModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ExtendedModule,
  declarations: [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective],
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
  exports: [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective]
});
ExtendedModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExtendedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 55434:
/*!*********************************!*\
  !*** @angular/flex-layout/flex ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFlexAlignDirective": () => (/* binding */ DefaultFlexAlignDirective),
/* harmony export */   "DefaultFlexDirective": () => (/* binding */ DefaultFlexDirective),
/* harmony export */   "DefaultFlexOffsetDirective": () => (/* binding */ DefaultFlexOffsetDirective),
/* harmony export */   "DefaultFlexOrderDirective": () => (/* binding */ DefaultFlexOrderDirective),
/* harmony export */   "DefaultLayoutAlignDirective": () => (/* binding */ DefaultLayoutAlignDirective),
/* harmony export */   "DefaultLayoutDirective": () => (/* binding */ DefaultLayoutDirective),
/* harmony export */   "DefaultLayoutGapDirective": () => (/* binding */ DefaultLayoutGapDirective),
/* harmony export */   "FlexAlignDirective": () => (/* binding */ FlexAlignDirective),
/* harmony export */   "FlexAlignStyleBuilder": () => (/* binding */ FlexAlignStyleBuilder),
/* harmony export */   "FlexDirective": () => (/* binding */ FlexDirective),
/* harmony export */   "FlexFillDirective": () => (/* binding */ FlexFillDirective),
/* harmony export */   "FlexFillStyleBuilder": () => (/* binding */ FlexFillStyleBuilder),
/* harmony export */   "FlexModule": () => (/* binding */ FlexModule),
/* harmony export */   "FlexOffsetDirective": () => (/* binding */ FlexOffsetDirective),
/* harmony export */   "FlexOffsetStyleBuilder": () => (/* binding */ FlexOffsetStyleBuilder),
/* harmony export */   "FlexOrderDirective": () => (/* binding */ FlexOrderDirective),
/* harmony export */   "FlexOrderStyleBuilder": () => (/* binding */ FlexOrderStyleBuilder),
/* harmony export */   "FlexStyleBuilder": () => (/* binding */ FlexStyleBuilder),
/* harmony export */   "LayoutAlignDirective": () => (/* binding */ LayoutAlignDirective),
/* harmony export */   "LayoutAlignStyleBuilder": () => (/* binding */ LayoutAlignStyleBuilder),
/* harmony export */   "LayoutDirective": () => (/* binding */ LayoutDirective),
/* harmony export */   "LayoutGapDirective": () => (/* binding */ LayoutGapDirective),
/* harmony export */   "LayoutGapStyleBuilder": () => (/* binding */ LayoutGapStyleBuilder),
/* harmony export */   "LayoutStyleBuilder": () => (/* binding */ LayoutStyleBuilder)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 36639);
/* harmony import */ var _angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/_private-utils */ 37413);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85921);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class LayoutStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, {
    display
  }) {
    const css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.buildLayoutCSS)(input);
    return Object.assign(Object.assign({}, css), {
      display: display === 'none' ? display : css.display
    });
  }

}

LayoutStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵLayoutStyleBuilder_BaseFactory;
  return function LayoutStyleBuilder_Factory(t) {
    return (ɵLayoutStyleBuilder_BaseFactory || (ɵLayoutStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LayoutStyleBuilder)))(t || LayoutStyleBuilder);
  };
}();

LayoutStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LayoutStyleBuilder,
  factory: LayoutStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const inputs$6 = ['fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md', 'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md', 'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm', 'fxLayout.gt-md', 'fxLayout.gt-lg'];
const selector$6 = `
  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],
  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],
  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],
  [fxLayout.gt-md], [fxLayout.gt-lg]
`;
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */

class LayoutDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal, _config) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this._config = _config;
    this.DIRECTIVE_KEY = 'layout';
    this.init();
  }

  updateWithValue(input) {
    var _a;

    const detectLayoutDisplay = this._config.detectLayoutDisplay;
    const display = detectLayoutDisplay ? this.styler.lookupStyle(this.nativeElement, 'display') : '';
    this.styleCache = (_a = cacheMap.get(display)) !== null && _a !== void 0 ? _a : new Map();
    cacheMap.set(display, this.styleCache);

    if (this.currentValue !== input) {
      this.addStyles(input, {
        display
      });
      this.currentValue = input;
    }
  }

}

LayoutDirective.ɵfac = function LayoutDirective_Factory(t) {
  return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};

LayoutDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: LayoutDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: LayoutStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();

class DefaultLayoutDirective extends LayoutDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$6;
  }

}

DefaultLayoutDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultLayoutDirective_BaseFactory;
  return function DefaultLayoutDirective_Factory(t) {
    return (ɵDefaultLayoutDirective_BaseFactory || (ɵDefaultLayoutDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultLayoutDirective)))(t || DefaultLayoutDirective);
  };
}();

DefaultLayoutDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultLayoutDirective,
  selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]],
  inputs: {
    fxLayout: "fxLayout",
    "fxLayout.xs": "fxLayout.xs",
    "fxLayout.sm": "fxLayout.sm",
    "fxLayout.md": "fxLayout.md",
    "fxLayout.lg": "fxLayout.lg",
    "fxLayout.xl": "fxLayout.xl",
    "fxLayout.lt-sm": "fxLayout.lt-sm",
    "fxLayout.lt-md": "fxLayout.lt-md",
    "fxLayout.lt-lg": "fxLayout.lt-lg",
    "fxLayout.lt-xl": "fxLayout.lt-xl",
    "fxLayout.gt-xs": "fxLayout.gt-xs",
    "fxLayout.gt-sm": "fxLayout.gt-sm",
    "fxLayout.gt-md": "fxLayout.gt-md",
    "fxLayout.gt-lg": "fxLayout.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultLayoutDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$6,
      inputs: inputs$6
    }]
  }], null, null);
})();

const cacheMap = new Map();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const CLEAR_MARGIN_CSS = {
  'margin-left': null,
  'margin-right': null,
  'margin-top': null,
  'margin-bottom': null
};

class LayoutGapStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  constructor(_styler, _config) {
    super();
    this._styler = _styler;
    this._config = _config;
  }

  buildStyles(gapValue, parent) {
    if (gapValue.endsWith(GRID_SPECIFIER)) {
      gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
      gapValue = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(gapValue, this._config.multiplier); // Add the margin to the host element

      return buildGridMargin(gapValue, parent.directionality);
    } else {
      return {};
    }
  }

  sideEffect(gapValue, _styles, parent) {
    const items = parent.items;

    if (gapValue.endsWith(GRID_SPECIFIER)) {
      gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
      gapValue = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(gapValue, this._config.multiplier); // For each `element` children, set the padding

      const paddingStyles = buildGridPadding(gapValue, parent.directionality);

      this._styler.applyStyleToElements(paddingStyles, parent.items);
    } else {
      gapValue = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(gapValue, this._config.multiplier);
      gapValue = this.addFallbackUnit(gapValue);
      const lastItem = items.pop(); // For each `element` children EXCEPT the last,
      // set the margin right/bottom styles...

      const gapCss = buildGapCSS(gapValue, parent);

      this._styler.applyStyleToElements(gapCss, items); // Clear all gaps for all visible elements


      this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
    }
  }

  addFallbackUnit(value) {
    return !isNaN(+value) ? `${value}${this._config.defaultUnit}` : value;
  }

}

LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) {
  return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};

LayoutGapStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LayoutGapStyleBuilder,
  factory: LayoutGapStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutGapStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();

const inputs$5 = ['fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md', 'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md', 'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm', 'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'];
const selector$5 = `
  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],
  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],
  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],
  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]
`;
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */

class LayoutGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.zone = zone;
    this.directionality = directionality;
    this.styleUtils = styleUtils;
    this.layout = 'row'; // default flex-direction

    this.DIRECTIVE_KEY = 'layout-gap';
    this.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    const extraTriggers = [this.directionality.change, this.observerSubject.asObservable()];
    this.init(extraTriggers);
    this.marshal.trackValue(this.nativeElement, 'layout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
  }
  /** Special accessor to query for all child 'element' nodes regardless of type, class, etc */


  get childrenNodes() {
    const obj = this.nativeElement.children;
    const buffer = []; // iterate backwards ensuring that length is an UInt32

    for (let i = obj.length; i--;) {
      buffer[i] = obj[i];
    }

    return buffer;
  } // *********************************************
  // Lifecycle Methods
  // *********************************************


  ngAfterContentInit() {
    this.buildChildObservable();
    this.triggerUpdate();
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    if (this.observer) {
      this.observer.disconnect();
    }
  } // *********************************************
  // Protected methods
  // *********************************************

  /**
   * Cache the parent container 'flex-direction' and update the 'margin' styles
   */


  onLayoutChange(matcher) {
    const layout = matcher.value; // Make sure to filter out 'wrap' option

    const direction = layout.split(' ');
    this.layout = direction[0];

    if (!_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_VALUES.find(x => x === this.layout)) {
      this.layout = 'row';
    }

    this.triggerUpdate();
  }
  /**
   *
   */


  updateWithValue(value) {
    // Gather all non-hidden Element nodes
    const items = this.childrenNodes.filter(el => el.nodeType === 1 && this.willDisplay(el)).sort((a, b) => {
      const orderA = +this.styler.lookupStyle(a, 'order');
      const orderB = +this.styler.lookupStyle(b, 'order');

      if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
        return 0;
      } else {
        return orderA > orderB ? 1 : -1;
      }
    });

    if (items.length > 0) {
      const directionality = this.directionality.value;
      const layout = this.layout;

      if (layout === 'row' && directionality === 'rtl') {
        this.styleCache = layoutGapCacheRowRtl;
      } else if (layout === 'row' && directionality !== 'rtl') {
        this.styleCache = layoutGapCacheRowLtr;
      } else if (layout === 'column' && directionality === 'rtl') {
        this.styleCache = layoutGapCacheColumnRtl;
      } else if (layout === 'column' && directionality !== 'rtl') {
        this.styleCache = layoutGapCacheColumnLtr;
      }

      this.addStyles(value, {
        directionality,
        items,
        layout
      });
    }
  }
  /** We need to override clearStyles because in most cases mru isn't populated */


  clearStyles() {
    const gridMode = Object.keys(this.mru).length > 0;
    const childrenStyle = gridMode ? 'padding' : getMarginType(this.directionality.value, this.layout); // If there are styles on the parent remove them

    if (gridMode) {
      super.clearStyles();
    } // Then remove the children styles too


    this.styleUtils.applyStyleToElements({
      [childrenStyle]: ''
    }, this.childrenNodes);
  }
  /** Determine if an element will show or hide based on current activation */


  willDisplay(source) {
    const value = this.marshal.getValue(source, 'show-hide');
    return value === true || value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none';
  }

  buildChildObservable() {
    this.zone.runOutsideAngular(() => {
      if (typeof MutationObserver !== 'undefined') {
        this.observer = new MutationObserver(mutations => {
          const validatedChanges = it => {
            return it.addedNodes && it.addedNodes.length > 0 || it.removedNodes && it.removedNodes.length > 0;
          }; // update gap styles only for child 'added' or 'removed' events


          if (mutations.some(validatedChanges)) {
            this.observerSubject.next();
          }
        });
        this.observer.observe(this.nativeElement, {
          childList: true
        });
      }
    });
  }

}

LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) {
  return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

LayoutGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: LayoutGapDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: LayoutGapStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

class DefaultLayoutGapDirective extends LayoutGapDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$5;
  }

}

DefaultLayoutGapDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultLayoutGapDirective_BaseFactory;
  return function DefaultLayoutGapDirective_Factory(t) {
    return (ɵDefaultLayoutGapDirective_BaseFactory || (ɵDefaultLayoutGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective)))(t || DefaultLayoutGapDirective);
  };
}();

DefaultLayoutGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultLayoutGapDirective,
  selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]],
  inputs: {
    fxLayoutGap: "fxLayoutGap",
    "fxLayoutGap.xs": "fxLayoutGap.xs",
    "fxLayoutGap.sm": "fxLayoutGap.sm",
    "fxLayoutGap.md": "fxLayoutGap.md",
    "fxLayoutGap.lg": "fxLayoutGap.lg",
    "fxLayoutGap.xl": "fxLayoutGap.xl",
    "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm",
    "fxLayoutGap.lt-md": "fxLayoutGap.lt-md",
    "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg",
    "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl",
    "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs",
    "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm",
    "fxLayoutGap.gt-md": "fxLayoutGap.gt-md",
    "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultLayoutGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$5,
      inputs: inputs$5
    }]
  }], null, null);
})();

const layoutGapCacheRowRtl = new Map();
const layoutGapCacheColumnRtl = new Map();
const layoutGapCacheRowLtr = new Map();
const layoutGapCacheColumnLtr = new Map();
const GRID_SPECIFIER = ' grid';

function buildGridPadding(value, directionality) {
  const [between, below] = value.split(' ');
  const bottom = below !== null && below !== void 0 ? below : between;
  let paddingRight = '0px',
      paddingBottom = bottom,
      paddingLeft = '0px';

  if (directionality === 'rtl') {
    paddingLeft = between;
  } else {
    paddingRight = between;
  }

  return {
    'padding': `0px ${paddingRight} ${paddingBottom} ${paddingLeft}`
  };
}

function buildGridMargin(value, directionality) {
  const [between, below] = value.split(' ');
  const bottom = below !== null && below !== void 0 ? below : between;

  const minus = str => `-${str}`;

  let marginRight = '0px',
      marginBottom = minus(bottom),
      marginLeft = '0px';

  if (directionality === 'rtl') {
    marginLeft = minus(between);
  } else {
    marginRight = minus(between);
  }

  return {
    'margin': `0px ${marginRight} ${marginBottom} ${marginLeft}`
  };
}

function getMarginType(directionality, layout) {
  switch (layout) {
    case 'column':
      return 'margin-bottom';

    case 'column-reverse':
      return 'margin-top';

    case 'row':
      return directionality === 'rtl' ? 'margin-left' : 'margin-right';

    case 'row-reverse':
      return directionality === 'rtl' ? 'margin-right' : 'margin-left';

    default:
      return directionality === 'rtl' ? 'margin-left' : 'margin-right';
  }
}

function buildGapCSS(gapValue, parent) {
  const key = getMarginType(parent.directionality, parent.layout);
  const margins = Object.assign({}, CLEAR_MARGIN_CSS);
  margins[key] = gapValue;
  return margins;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FlexStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  constructor(layoutConfig) {
    super();
    this.layoutConfig = layoutConfig;
  }

  buildStyles(input, parent) {
    let [grow, shrink, ...basisParts] = input.split(' ');
    let basis = basisParts.join(' '); // The flex-direction of this element's flex container. Defaults to 'row'.

    const direction = parent.direction.indexOf('column') > -1 ? 'column' : 'row';
    const max = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(direction) ? 'max-width' : 'max-height';
    const min = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(direction) ? 'min-width' : 'min-height';
    const hasCalc = String(basis).indexOf('calc') > -1;
    const usingCalc = hasCalc || basis === 'auto';
    const isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
    const hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 || String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
    let isValue = hasCalc || hasUnits;
    grow = grow == '0' ? 0 : grow;
    shrink = shrink == '0' ? 0 : shrink; // make box inflexible when shrink and grow are both zero
    // should not set a min when the grow is zero
    // should not set a max when the shrink is zero

    const isFixed = !grow && !shrink;
    let css = {}; // flex-basis allows you to specify the initial/starting main-axis size of the element,
    // before anything else is computed. It can either be a percentage or an absolute value.
    // It is, however, not the breaking point for flex-grow/shrink properties
    //
    // flex-grow can be seen as this:
    //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
    //   1: (Default value). Stretch; will be the same size to all other flex items on
    //       the same row since they have a default value of 1.
    //   ≥2 (integer n): Stretch. Will be n times the size of other elements
    //      with 'flex-grow: 1' on the same row.
    // Use `null` to clear existing styles.

    const clearStyles = {
      'max-width': null,
      'max-height': null,
      'min-width': null,
      'min-height': null
    };

    switch (basis || '') {
      case '':
        const useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
        basis = direction === 'row' ? '0%' : useColumnBasisZero ? '0.000000001px' : 'auto';
        break;

      case 'initial': // default

      case 'nogrow':
        grow = 0;
        basis = 'auto';
        break;

      case 'grow':
        basis = '100%';
        break;

      case 'noshrink':
        shrink = 0;
        basis = 'auto';
        break;

      case 'auto':
        break;

      case 'none':
        grow = 0;
        shrink = 0;
        basis = 'auto';
        break;

      default:
        // Defaults to percentage sizing unless `px` is explicitly set
        if (!isValue && !isPercent && !isNaN(basis)) {
          basis = basis + '%';
        } // Fix for issue 280


        if (basis === '0%') {
          isValue = true;
        }

        if (basis === '0px') {
          basis = '0%';
        } // fix issue #5345


        if (hasCalc) {
          css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
            'flex-grow': grow,
            'flex-shrink': shrink,
            'flex-basis': isValue ? basis : '100%'
          });
        } else {
          css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
            'flex': `${grow} ${shrink} ${isValue ? basis : '100%'}`
          });
        }

        break;
    }

    if (!(css['flex'] || css['flex-grow'])) {
      if (hasCalc) {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex-grow': grow,
          'flex-shrink': shrink,
          'flex-basis': basis
        });
      } else {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex': `${grow} ${shrink} ${basis}`
        });
      }
    } // Fix for issues 277, 534, and 728


    if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
      css[min] = isFixed || isValue && grow ? basis : null;
      css[max] = isFixed || !usingCalc && shrink ? basis : null;
    } // Fix for issue 528


    if (!css[min] && !css[max]) {
      if (hasCalc) {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex-grow': grow,
          'flex-shrink': shrink,
          'flex-basis': basis
        });
      } else {
        css = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(clearStyles, {
          'flex': `${grow} ${shrink} ${basis}`
        });
      }
    } else {
      // Fix for issue 660
      if (parent.hasWrap) {
        css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ? hasCalc ? css[max] : `${grow} ${shrink} ${css[max]}` : hasCalc ? css[min] : `${grow} ${shrink} ${css[min]}`;
      }
    }

    return (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(css, {
      'box-sizing': 'border-box'
    });
  }

}

FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) {
  return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};

FlexStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexStyleBuilder,
  factory: FlexStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();

const inputs$4 = ['fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md', 'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md', 'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm', 'fxFlex.gt-md', 'fxFlex.gt-lg'];
const selector$4 = `
  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],
  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],
  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],
  [fxFlex.gt-md], [fxFlex.gt-lg]
`;
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */

class FlexDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.layoutConfig = layoutConfig;
    this.marshal = marshal;
    this.DIRECTIVE_KEY = 'flex';
    this.direction = undefined;
    this.wrap = undefined;
    this.flexGrow = '1';
    this.flexShrink = '1';
    this.init();
  }

  get shrink() {
    return this.flexShrink;
  }

  set shrink(value) {
    this.flexShrink = value || '1';
    this.triggerReflow();
  }

  get grow() {
    return this.flexGrow;
  }

  set grow(value) {
    this.flexGrow = value || '1';
    this.triggerReflow();
  }

  ngOnInit() {
    if (this.parentElement) {
      this.marshal.trackValue(this.parentElement, 'layout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
      this.marshal.trackValue(this.nativeElement, 'layout-align').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.triggerReflow.bind(this));
    }
  }
  /**
   * Caches the parent container's 'flex-direction' and updates the element's style.
   * Used as a handler for layout change events from the parent flex container.
   */


  onLayoutChange(matcher) {
    const layout = matcher.value;
    const layoutParts = layout.split(' ');
    this.direction = layoutParts[0];
    this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
    this.triggerUpdate();
  }
  /** Input to this is exclusively the basis input value */


  updateWithValue(value) {
    const addFlexToParent = this.layoutConfig.addFlexToParent !== false;

    if (this.direction === undefined) {
      this.direction = this.getFlexFlowDirection(this.parentElement, addFlexToParent);
    }

    if (this.wrap === undefined) {
      this.wrap = this.hasWrap(this.parentElement);
    }

    const direction = this.direction;
    const isHorizontal = direction.startsWith('row');
    const hasWrap = this.wrap;

    if (isHorizontal && hasWrap) {
      this.styleCache = flexRowWrapCache;
    } else if (isHorizontal && !hasWrap) {
      this.styleCache = flexRowCache;
    } else if (!isHorizontal && hasWrap) {
      this.styleCache = flexColumnWrapCache;
    } else if (!isHorizontal && !hasWrap) {
      this.styleCache = flexColumnCache;
    }

    const basis = String(value).replace(';', '');
    const parts = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis)(basis, this.flexGrow, this.flexShrink);
    this.addStyles(parts.join(' '), {
      direction,
      hasWrap
    });
  }
  /** Trigger a style reflow, usually based on a shrink/grow input event */


  triggerReflow() {
    const activatedValue = this.activatedValue;

    if (activatedValue !== undefined) {
      const parts = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis)(activatedValue + '', this.flexGrow, this.flexShrink);
      this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
    }
  }

}

FlexDirective.ɵfac = function FlexDirective_Factory(t) {
  return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

FlexDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexDirective,
  inputs: {
    shrink: ["fxShrink", "shrink"],
    grow: ["fxGrow", "grow"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }, {
      type: FlexStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    shrink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['fxShrink']
    }],
    grow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['fxGrow']
    }]
  });
})();

class DefaultFlexDirective extends FlexDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$4;
  }

}

DefaultFlexDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexDirective_BaseFactory;
  return function DefaultFlexDirective_Factory(t) {
    return (ɵDefaultFlexDirective_BaseFactory || (ɵDefaultFlexDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexDirective)))(t || DefaultFlexDirective);
  };
}();

DefaultFlexDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexDirective,
  selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]],
  inputs: {
    fxFlex: "fxFlex",
    "fxFlex.xs": "fxFlex.xs",
    "fxFlex.sm": "fxFlex.sm",
    "fxFlex.md": "fxFlex.md",
    "fxFlex.lg": "fxFlex.lg",
    "fxFlex.xl": "fxFlex.xl",
    "fxFlex.lt-sm": "fxFlex.lt-sm",
    "fxFlex.lt-md": "fxFlex.lt-md",
    "fxFlex.lt-lg": "fxFlex.lt-lg",
    "fxFlex.lt-xl": "fxFlex.lt-xl",
    "fxFlex.gt-xs": "fxFlex.gt-xs",
    "fxFlex.gt-sm": "fxFlex.gt-sm",
    "fxFlex.gt-md": "fxFlex.gt-md",
    "fxFlex.gt-lg": "fxFlex.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      inputs: inputs$4,
      selector: selector$4
    }]
  }], null, null);
})();

const flexRowCache = new Map();
const flexColumnCache = new Map();
const flexRowWrapCache = new Map();
const flexColumnWrapCache = new Map();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class FlexOrderStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(value) {
    return {
      order: value && parseInt(value, 10) || ''
    };
  }

}

FlexOrderStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵFlexOrderStyleBuilder_BaseFactory;
  return function FlexOrderStyleBuilder_Factory(t) {
    return (ɵFlexOrderStyleBuilder_BaseFactory || (ɵFlexOrderStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder)))(t || FlexOrderStyleBuilder);
  };
}();

FlexOrderStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexOrderStyleBuilder,
  factory: FlexOrderStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOrderStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const inputs$3 = ['fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md', 'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md', 'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm', 'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'];
const selector$3 = `
  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],
  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],
  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],
  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]
`;
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */

class FlexOrderDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'flex-order';
    this.styleCache = flexOrderCache;
    this.init();
  }

}

FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) {
  return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

FlexOrderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexOrderDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOrderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: FlexOrderStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

const flexOrderCache = new Map();

class DefaultFlexOrderDirective extends FlexOrderDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }

}

DefaultFlexOrderDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexOrderDirective_BaseFactory;
  return function DefaultFlexOrderDirective_Factory(t) {
    return (ɵDefaultFlexOrderDirective_BaseFactory || (ɵDefaultFlexOrderDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective)))(t || DefaultFlexOrderDirective);
  };
}();

DefaultFlexOrderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexOrderDirective,
  selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]],
  inputs: {
    fxFlexOrder: "fxFlexOrder",
    "fxFlexOrder.xs": "fxFlexOrder.xs",
    "fxFlexOrder.sm": "fxFlexOrder.sm",
    "fxFlexOrder.md": "fxFlexOrder.md",
    "fxFlexOrder.lg": "fxFlexOrder.lg",
    "fxFlexOrder.xl": "fxFlexOrder.xl",
    "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm",
    "fxFlexOrder.lt-md": "fxFlexOrder.lt-md",
    "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg",
    "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl",
    "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs",
    "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm",
    "fxFlexOrder.gt-md": "fxFlexOrder.gt-md",
    "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexOrderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FlexOffsetStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  constructor(_config) {
    super();
    this._config = _config;
  }

  buildStyles(offset, parent) {
    offset || (offset = '0');
    offset = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])(offset, this._config.multiplier);
    const isPercent = String(offset).indexOf('%') > -1;
    const isPx = String(offset).indexOf('px') > -1;

    if (!isPx && !isPercent && !isNaN(+offset)) {
      offset = `${offset}%`;
    }

    const horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
    const styles = (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(parent.layout) ? {
      [horizontalLayoutKey]: offset
    } : {
      'margin-top': offset
    };
    return styles;
  }

}

FlexOffsetStyleBuilder.ɵfac = function FlexOffsetStyleBuilder_Factory(t) {
  return new (t || FlexOffsetStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG));
};

FlexOffsetStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexOffsetStyleBuilder,
  factory: FlexOffsetStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOffsetStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();

const inputs$2 = ['fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md', 'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md', 'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm', 'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'];
const selector$2 = `
  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],
  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],
  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],
  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]
`;
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */

class FlexOffsetDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, directionality, styleBuilder, marshal, styler) {
    super(elRef, styleBuilder, styler, marshal);
    this.directionality = directionality;
    this.DIRECTIVE_KEY = 'flex-offset';
    this.init([this.directionality.change]); // Parent DOM `layout-gap` with affect the nested child with `flex-offset`

    if (this.parentElement) {
      this.marshal.trackValue(this.parentElement, 'layout-gap').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.triggerUpdate.bind(this));
    }
  } // *********************************************
  // Protected methods
  // *********************************************

  /**
   * Using the current fxFlexOffset value, update the inline CSS
   * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
   *       otherwise `margin-top` is used for the offset.
   */


  updateWithValue(value = '') {
    // The flex-direction of this element's flex container. Defaults to 'row'.
    const layout = this.getFlexFlowDirection(this.parentElement, true);
    const isRtl = this.directionality.value === 'rtl';

    if (layout === 'row' && isRtl) {
      this.styleCache = flexOffsetCacheRowRtl;
    } else if (layout === 'row' && !isRtl) {
      this.styleCache = flexOffsetCacheRowLtr;
    } else if (layout === 'column' && isRtl) {
      this.styleCache = flexOffsetCacheColumnRtl;
    } else if (layout === 'column' && !isRtl) {
      this.styleCache = flexOffsetCacheColumnLtr;
    }

    this.addStyles(value + '', {
      layout,
      isRtl
    });
  }

}

FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) {
  return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils));
};

FlexOffsetDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexOffsetDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexOffsetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality
    }, {
      type: FlexOffsetStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }];
  }, null);
})();

class DefaultFlexOffsetDirective extends FlexOffsetDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }

}

DefaultFlexOffsetDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexOffsetDirective_BaseFactory;
  return function DefaultFlexOffsetDirective_Factory(t) {
    return (ɵDefaultFlexOffsetDirective_BaseFactory || (ɵDefaultFlexOffsetDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective)))(t || DefaultFlexOffsetDirective);
  };
}();

DefaultFlexOffsetDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexOffsetDirective,
  selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]],
  inputs: {
    fxFlexOffset: "fxFlexOffset",
    "fxFlexOffset.xs": "fxFlexOffset.xs",
    "fxFlexOffset.sm": "fxFlexOffset.sm",
    "fxFlexOffset.md": "fxFlexOffset.md",
    "fxFlexOffset.lg": "fxFlexOffset.lg",
    "fxFlexOffset.xl": "fxFlexOffset.xl",
    "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm",
    "fxFlexOffset.lt-md": "fxFlexOffset.lt-md",
    "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg",
    "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl",
    "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs",
    "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm",
    "fxFlexOffset.gt-md": "fxFlexOffset.gt-md",
    "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexOffsetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();

const flexOffsetCacheRowRtl = new Map();
const flexOffsetCacheColumnRtl = new Map();
const flexOffsetCacheRowLtr = new Map();
const flexOffsetCacheColumnLtr = new Map();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class FlexAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    input = input || 'stretch';
    const styles = {}; // Cross-axis

    switch (input) {
      case 'start':
        styles['align-self'] = 'flex-start';
        break;

      case 'end':
        styles['align-self'] = 'flex-end';
        break;

      default:
        styles['align-self'] = input;
        break;
    }

    return styles;
  }

}

FlexAlignStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵFlexAlignStyleBuilder_BaseFactory;
  return function FlexAlignStyleBuilder_Factory(t) {
    return (ɵFlexAlignStyleBuilder_BaseFactory || (ɵFlexAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder)))(t || FlexAlignStyleBuilder);
  };
}();

FlexAlignStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexAlignStyleBuilder,
  factory: FlexAlignStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexAlignStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const inputs$1 = ['fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md', 'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md', 'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm', 'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'];
const selector$1 = `
  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],
  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],
  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],
  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]
`;
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */

class FlexAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'flex-align';
    this.styleCache = flexAlignCache;
    this.init();
  }

}

FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) {
  return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

FlexAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexAlignDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: FlexAlignStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

const flexAlignCache = new Map();

class DefaultFlexAlignDirective extends FlexAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }

}

DefaultFlexAlignDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultFlexAlignDirective_BaseFactory;
  return function DefaultFlexAlignDirective_Factory(t) {
    return (ɵDefaultFlexAlignDirective_BaseFactory || (ɵDefaultFlexAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective)))(t || DefaultFlexAlignDirective);
  };
}();

DefaultFlexAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultFlexAlignDirective,
  selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]],
  inputs: {
    fxFlexAlign: "fxFlexAlign",
    "fxFlexAlign.xs": "fxFlexAlign.xs",
    "fxFlexAlign.sm": "fxFlexAlign.sm",
    "fxFlexAlign.md": "fxFlexAlign.md",
    "fxFlexAlign.lg": "fxFlexAlign.lg",
    "fxFlexAlign.xl": "fxFlexAlign.xl",
    "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm",
    "fxFlexAlign.lt-md": "fxFlexAlign.lt-md",
    "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg",
    "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl",
    "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs",
    "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm",
    "fxFlexAlign.gt-md": "fxFlexAlign.gt-md",
    "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFlexAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const FLEX_FILL_CSS = {
  'margin': 0,
  'width': '100%',
  'height': '100%',
  'min-width': '100%',
  'min-height': '100%'
};

class FlexFillStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(_input) {
    return FLEX_FILL_CSS;
  }

}

FlexFillStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵFlexFillStyleBuilder_BaseFactory;
  return function FlexFillStyleBuilder_Factory(t) {
    return (ɵFlexFillStyleBuilder_BaseFactory || (ɵFlexFillStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder)))(t || FlexFillStyleBuilder);
  };
}();

FlexFillStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FlexFillStyleBuilder,
  factory: FlexFillStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexFillStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */


class FlexFillDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.styleCache = flexFillCache;
    this.addStyles('');
  }

}

FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) {
  return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

FlexFillDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FlexFillDirective,
  selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexFillDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: `[fxFill], [fxFlexFill]`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: FlexFillStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

const flexFillCache = new Map();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class LayoutAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(align, parent) {
    const css = {},
          [mainAxis, crossAxis] = align.split(' '); // Main axis

    switch (mainAxis) {
      case 'center':
        css['justify-content'] = 'center';
        break;

      case 'space-around':
        css['justify-content'] = 'space-around';
        break;

      case 'space-between':
        css['justify-content'] = 'space-between';
        break;

      case 'space-evenly':
        css['justify-content'] = 'space-evenly';
        break;

      case 'end':
      case 'flex-end':
        css['justify-content'] = 'flex-end';
        break;

      case 'start':
      case 'flex-start':
      default:
        css['justify-content'] = 'flex-start'; // default main axis

        break;
    } // Cross-axis


    switch (crossAxis) {
      case 'start':
      case 'flex-start':
        css['align-items'] = css['align-content'] = 'flex-start';
        break;

      case 'center':
        css['align-items'] = css['align-content'] = 'center';
        break;

      case 'end':
      case 'flex-end':
        css['align-items'] = css['align-content'] = 'flex-end';
        break;

      case 'space-between':
        css['align-content'] = 'space-between';
        css['align-items'] = 'stretch';
        break;

      case 'space-around':
        css['align-content'] = 'space-around';
        css['align-items'] = 'stretch';
        break;

      case 'baseline':
        css['align-content'] = 'stretch';
        css['align-items'] = 'baseline';
        break;

      case 'stretch':
      default:
        // 'stretch'
        css['align-items'] = css['align-content'] = 'stretch'; // default cross axis

        break;
    }

    return (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.extendObject)(css, {
      'display': parent.inline ? 'inline-flex' : 'flex',
      'flex-direction': parent.layout,
      'box-sizing': 'border-box',
      'max-width': crossAxis === 'stretch' ? !(0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(parent.layout) ? '100%' : null : null,
      'max-height': crossAxis === 'stretch' ? (0,_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.isFlowHorizontal)(parent.layout) ? '100%' : null : null
    });
  }

}

LayoutAlignStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵLayoutAlignStyleBuilder_BaseFactory;
  return function LayoutAlignStyleBuilder_Factory(t) {
    return (ɵLayoutAlignStyleBuilder_BaseFactory || (ɵLayoutAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder)))(t || LayoutAlignStyleBuilder);
  };
}();

LayoutAlignStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LayoutAlignStyleBuilder,
  factory: LayoutAlignStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutAlignStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const inputs = ['fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md', 'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md', 'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm', 'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'];
const selector = `
  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],
  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],
  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],
  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]
`;
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 *  @see https://css-tricks.com/almanac/properties/j/justify-content/
 *  @see https://css-tricks.com/almanac/properties/a/align-items/
 *  @see https://css-tricks.com/almanac/properties/a/align-content/
 */

class LayoutAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'layout-align';
    this.layout = 'row'; // default flex-direction

    this.inline = false; // default inline value

    this.init();
    this.marshal.trackValue(this.nativeElement, 'layout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
  } // *********************************************
  // Protected methods
  // *********************************************

  /**
   *
   */


  updateWithValue(value) {
    const layout = this.layout || 'row';
    const inline = this.inline;

    if (layout === 'row' && inline) {
      this.styleCache = layoutAlignHorizontalInlineCache;
    } else if (layout === 'row' && !inline) {
      this.styleCache = layoutAlignHorizontalCache;
    } else if (layout === 'row-reverse' && inline) {
      this.styleCache = layoutAlignHorizontalRevInlineCache;
    } else if (layout === 'row-reverse' && !inline) {
      this.styleCache = layoutAlignHorizontalRevCache;
    } else if (layout === 'column' && inline) {
      this.styleCache = layoutAlignVerticalInlineCache;
    } else if (layout === 'column' && !inline) {
      this.styleCache = layoutAlignVerticalCache;
    } else if (layout === 'column-reverse' && inline) {
      this.styleCache = layoutAlignVerticalRevInlineCache;
    } else if (layout === 'column-reverse' && !inline) {
      this.styleCache = layoutAlignVerticalRevCache;
    }

    this.addStyles(value, {
      layout,
      inline
    });
  }
  /**
   * Cache the parent container 'flex-direction' and update the 'flex' styles
   */


  onLayoutChange(matcher) {
    const layoutKeys = matcher.value.split(' ');
    this.layout = layoutKeys[0];
    this.inline = matcher.value.includes('inline');

    if (!_angular_flex_layout_private_utils__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_VALUES.find(x => x === this.layout)) {
      this.layout = 'row';
    }

    this.triggerUpdate();
  }

}

LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) {
  return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

LayoutAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: LayoutAlignDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: LayoutAlignStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

class DefaultLayoutAlignDirective extends LayoutAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }

}

DefaultLayoutAlignDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultLayoutAlignDirective_BaseFactory;
  return function DefaultLayoutAlignDirective_Factory(t) {
    return (ɵDefaultLayoutAlignDirective_BaseFactory || (ɵDefaultLayoutAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective)))(t || DefaultLayoutAlignDirective);
  };
}();

DefaultLayoutAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DefaultLayoutAlignDirective,
  selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]],
  inputs: {
    fxLayoutAlign: "fxLayoutAlign",
    "fxLayoutAlign.xs": "fxLayoutAlign.xs",
    "fxLayoutAlign.sm": "fxLayoutAlign.sm",
    "fxLayoutAlign.md": "fxLayoutAlign.md",
    "fxLayoutAlign.lg": "fxLayoutAlign.lg",
    "fxLayoutAlign.xl": "fxLayoutAlign.xl",
    "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
    "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
    "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
    "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
    "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
    "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
    "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
    "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultLayoutAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();

const layoutAlignHorizontalCache = new Map();
const layoutAlignVerticalCache = new Map();
const layoutAlignHorizontalRevCache = new Map();
const layoutAlignVerticalRevCache = new Map();
const layoutAlignHorizontalInlineCache = new Map();
const layoutAlignVerticalInlineCache = new Map();
const layoutAlignHorizontalRevInlineCache = new Map();
const layoutAlignVerticalRevInlineCache = new Map();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const ALL_DIRECTIVES = [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */

class FlexModule {}

FlexModule.ɵfac = function FlexModule_Factory(t) {
  return new (t || FlexModule)();
};

FlexModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FlexModule,
  declarations: [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective],
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule],
  exports: [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective]
});
FlexModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlexModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 98616:
/*!*********************************!*\
  !*** @angular/flex-layout/grid ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultGridAlignColumnsDirective": () => (/* binding */ DefaultGridAlignColumnsDirective),
/* harmony export */   "DefaultGridAlignDirective": () => (/* binding */ DefaultGridAlignDirective),
/* harmony export */   "DefaultGridAlignRowsDirective": () => (/* binding */ DefaultGridAlignRowsDirective),
/* harmony export */   "DefaultGridAreaDirective": () => (/* binding */ DefaultGridAreaDirective),
/* harmony export */   "DefaultGridAreasDirective": () => (/* binding */ DefaultGridAreasDirective),
/* harmony export */   "DefaultGridAutoDirective": () => (/* binding */ DefaultGridAutoDirective),
/* harmony export */   "DefaultGridColumnDirective": () => (/* binding */ DefaultGridColumnDirective),
/* harmony export */   "DefaultGridColumnsDirective": () => (/* binding */ DefaultGridColumnsDirective),
/* harmony export */   "DefaultGridGapDirective": () => (/* binding */ DefaultGridGapDirective),
/* harmony export */   "DefaultGridRowDirective": () => (/* binding */ DefaultGridRowDirective),
/* harmony export */   "DefaultGridRowsDirective": () => (/* binding */ DefaultGridRowsDirective),
/* harmony export */   "GridAlignColumnsDirective": () => (/* binding */ GridAlignColumnsDirective),
/* harmony export */   "GridAlignColumnsStyleBuilder": () => (/* binding */ GridAlignColumnsStyleBuilder),
/* harmony export */   "GridAlignDirective": () => (/* binding */ GridAlignDirective),
/* harmony export */   "GridAlignRowsDirective": () => (/* binding */ GridAlignRowsDirective),
/* harmony export */   "GridAlignRowsStyleBuilder": () => (/* binding */ GridAlignRowsStyleBuilder),
/* harmony export */   "GridAlignStyleBuilder": () => (/* binding */ GridAlignStyleBuilder),
/* harmony export */   "GridAreaDirective": () => (/* binding */ GridAreaDirective),
/* harmony export */   "GridAreaStyleBuilder": () => (/* binding */ GridAreaStyleBuilder),
/* harmony export */   "GridAreasDirective": () => (/* binding */ GridAreasDirective),
/* harmony export */   "GridAreasStyleBuiler": () => (/* binding */ GridAreasStyleBuiler),
/* harmony export */   "GridAutoDirective": () => (/* binding */ GridAutoDirective),
/* harmony export */   "GridAutoStyleBuilder": () => (/* binding */ GridAutoStyleBuilder),
/* harmony export */   "GridColumnDirective": () => (/* binding */ GridColumnDirective),
/* harmony export */   "GridColumnStyleBuilder": () => (/* binding */ GridColumnStyleBuilder),
/* harmony export */   "GridColumnsDirective": () => (/* binding */ GridColumnsDirective),
/* harmony export */   "GridColumnsStyleBuilder": () => (/* binding */ GridColumnsStyleBuilder),
/* harmony export */   "GridGapDirective": () => (/* binding */ GridGapDirective),
/* harmony export */   "GridGapStyleBuilder": () => (/* binding */ GridGapStyleBuilder),
/* harmony export */   "GridModule": () => (/* binding */ GridModule),
/* harmony export */   "GridRowDirective": () => (/* binding */ GridRowDirective),
/* harmony export */   "GridRowStyleBuilder": () => (/* binding */ GridRowStyleBuilder),
/* harmony export */   "GridRowsDirective": () => (/* binding */ GridRowsDirective),
/* harmony export */   "GridRowsStyleBuilder": () => (/* binding */ GridRowsStyleBuilder)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 36639);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const ROW_DEFAULT = 'stretch';
const COL_DEFAULT = 'stretch';

class GridAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return buildCss$2(input || ROW_DEFAULT);
  }

}

GridAlignStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAlignStyleBuilder_BaseFactory;
  return function GridAlignStyleBuilder_Factory(t) {
    return (ɵGridAlignStyleBuilder_BaseFactory || (ɵGridAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder)))(t || GridAlignStyleBuilder);
  };
}();

GridAlignStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAlignStyleBuilder,
  factory: GridAlignStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-align';
    this.styleCache = alignCache;
    this.init();
  }

}

GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) {
  return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAlignDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAlignStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

const alignCache = new Map();
const inputs$a = ['gdGridAlign', 'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl', 'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl', 'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'];
const selector$a = `
  [gdGridAlign],
  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],
  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],
  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]
`;
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 *  @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 *  @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */

class DefaultGridAlignDirective extends GridAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$a;
  }

}

DefaultGridAlignDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAlignDirective_BaseFactory;
  return function DefaultGridAlignDirective_Factory(t) {
    return (ɵDefaultGridAlignDirective_BaseFactory || (ɵDefaultGridAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective)))(t || DefaultGridAlignDirective);
  };
}();

DefaultGridAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAlignDirective,
  selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
  inputs: {
    gdGridAlign: "gdGridAlign",
    "gdGridAlign.xs": "gdGridAlign.xs",
    "gdGridAlign.sm": "gdGridAlign.sm",
    "gdGridAlign.md": "gdGridAlign.md",
    "gdGridAlign.lg": "gdGridAlign.lg",
    "gdGridAlign.xl": "gdGridAlign.xl",
    "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
    "gdGridAlign.lt-md": "gdGridAlign.lt-md",
    "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
    "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
    "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
    "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
    "gdGridAlign.gt-md": "gdGridAlign.gt-md",
    "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$a,
      inputs: inputs$a
    }]
  }], null, null);
})();

function buildCss$2(align = '') {
  const css = {},
        [rowAxis, columnAxis] = align.split(' '); // Row axis

  switch (rowAxis) {
    case 'end':
      css['justify-self'] = 'end';
      break;

    case 'center':
      css['justify-self'] = 'center';
      break;

    case 'stretch':
      css['justify-self'] = 'stretch';
      break;

    case 'start':
      css['justify-self'] = 'start';
      break;

    default:
      css['justify-self'] = ROW_DEFAULT; // default row axis

      break;
  } // Column axis


  switch (columnAxis) {
    case 'end':
      css['align-self'] = 'end';
      break;

    case 'center':
      css['align-self'] = 'center';
      break;

    case 'stretch':
      css['align-self'] = 'stretch';
      break;

    case 'start':
      css['align-self'] = 'start';
      break;

    default:
      css['align-self'] = COL_DEFAULT; // default column axis

      break;
  }

  return css;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_MAIN$1 = 'start';
const DEFAULT_CROSS$1 = 'stretch';

class GridAlignColumnsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    return buildCss$1(input || `${DEFAULT_MAIN$1} ${DEFAULT_CROSS$1}`, parent.inline);
  }

}

GridAlignColumnsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAlignColumnsStyleBuilder_BaseFactory;
  return function GridAlignColumnsStyleBuilder_Factory(t) {
    return (ɵGridAlignColumnsStyleBuilder_BaseFactory || (ɵGridAlignColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder)))(t || GridAlignColumnsStyleBuilder);
  };
}();

GridAlignColumnsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAlignColumnsStyleBuilder,
  factory: GridAlignColumnsStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridAlignColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-align-columns';
    this._inline = false;
    this.init();
  }

  get inline() {
    return this._inline;
  }

  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  } // *********************************************
  // Protected methods
  // *********************************************


  updateWithValue(value) {
    this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }

}

GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) {
  return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridAlignColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAlignColumnsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAlignColumnsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();

const alignColumnsCache = new Map();
const alignColumnsInlineCache = new Map();
const inputs$9 = ['gdAlignColumns', 'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md', 'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm', 'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl', 'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md', 'gdAlignColumns.gt-lg'];
const selector$9 = `
  [gdAlignColumns],
  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],
  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],
  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],
  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],
  [gdAlignColumns.gt-lg]
`;
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */

class DefaultGridAlignColumnsDirective extends GridAlignColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$9;
  }

}

DefaultGridAlignColumnsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAlignColumnsDirective_BaseFactory;
  return function DefaultGridAlignColumnsDirective_Factory(t) {
    return (ɵDefaultGridAlignColumnsDirective_BaseFactory || (ɵDefaultGridAlignColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective)))(t || DefaultGridAlignColumnsDirective);
  };
}();

DefaultGridAlignColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAlignColumnsDirective,
  selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
  inputs: {
    gdAlignColumns: "gdAlignColumns",
    "gdAlignColumns.xs": "gdAlignColumns.xs",
    "gdAlignColumns.sm": "gdAlignColumns.sm",
    "gdAlignColumns.md": "gdAlignColumns.md",
    "gdAlignColumns.lg": "gdAlignColumns.lg",
    "gdAlignColumns.xl": "gdAlignColumns.xl",
    "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
    "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
    "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
    "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
    "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
    "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
    "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
    "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$9,
      inputs: inputs$9
    }]
  }], null, null);
})();

function buildCss$1(align, inline) {
  const css = {},
        [mainAxis, crossAxis] = align.split(' '); // Main axis

  switch (mainAxis) {
    case 'center':
      css['align-content'] = 'center';
      break;

    case 'space-around':
      css['align-content'] = 'space-around';
      break;

    case 'space-between':
      css['align-content'] = 'space-between';
      break;

    case 'space-evenly':
      css['align-content'] = 'space-evenly';
      break;

    case 'end':
      css['align-content'] = 'end';
      break;

    case 'start':
      css['align-content'] = 'start';
      break;

    case 'stretch':
      css['align-content'] = 'stretch';
      break;

    default:
      css['align-content'] = DEFAULT_MAIN$1; // default main axis

      break;
  } // Cross-axis


  switch (crossAxis) {
    case 'start':
      css['align-items'] = 'start';
      break;

    case 'center':
      css['align-items'] = 'center';
      break;

    case 'end':
      css['align-items'] = 'end';
      break;

    case 'stretch':
      css['align-items'] = 'stretch';
      break;

    default:
      // 'stretch'
      css['align-items'] = DEFAULT_CROSS$1; // default cross axis

      break;
  }

  css['display'] = inline ? 'inline-grid' : 'grid';
  return css;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_MAIN = 'start';
const DEFAULT_CROSS = 'stretch';

class GridAlignRowsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    return buildCss(input || `${DEFAULT_MAIN} ${DEFAULT_CROSS}`, parent.inline);
  }

}

GridAlignRowsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAlignRowsStyleBuilder_BaseFactory;
  return function GridAlignRowsStyleBuilder_Factory(t) {
    return (ɵGridAlignRowsStyleBuilder_BaseFactory || (ɵGridAlignRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder)))(t || GridAlignRowsStyleBuilder);
  };
}();

GridAlignRowsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAlignRowsStyleBuilder,
  factory: GridAlignRowsStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridAlignRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-align-rows';
    this._inline = false;
    this.init();
  }

  get inline() {
    return this._inline;
  }

  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  } // *********************************************
  // Protected methods
  // *********************************************


  updateWithValue(value) {
    this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }

}

GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) {
  return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridAlignRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAlignRowsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAlignRowsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();

const alignRowsCache = new Map();
const alignRowsInlineCache = new Map();
const inputs$8 = ['gdAlignRows', 'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md', 'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm', 'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl', 'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md', 'gdAlignRows.gt-lg'];
const selector$8 = `
  [gdAlignRows],
  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],
  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],
  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],
  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],
  [gdAlignRows.gt-lg]
`;
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */

class DefaultGridAlignRowsDirective extends GridAlignRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$8;
  }

}

DefaultGridAlignRowsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAlignRowsDirective_BaseFactory;
  return function DefaultGridAlignRowsDirective_Factory(t) {
    return (ɵDefaultGridAlignRowsDirective_BaseFactory || (ɵDefaultGridAlignRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective)))(t || DefaultGridAlignRowsDirective);
  };
}();

DefaultGridAlignRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAlignRowsDirective,
  selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
  inputs: {
    gdAlignRows: "gdAlignRows",
    "gdAlignRows.xs": "gdAlignRows.xs",
    "gdAlignRows.sm": "gdAlignRows.sm",
    "gdAlignRows.md": "gdAlignRows.md",
    "gdAlignRows.lg": "gdAlignRows.lg",
    "gdAlignRows.xl": "gdAlignRows.xl",
    "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
    "gdAlignRows.lt-md": "gdAlignRows.lt-md",
    "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
    "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
    "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
    "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
    "gdAlignRows.gt-md": "gdAlignRows.gt-md",
    "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$8,
      inputs: inputs$8
    }]
  }], null, null);
})();

function buildCss(align, inline) {
  const css = {},
        [mainAxis, crossAxis] = align.split(' '); // Main axis

  switch (mainAxis) {
    case 'center':
    case 'space-around':
    case 'space-between':
    case 'space-evenly':
    case 'end':
    case 'start':
    case 'stretch':
      css['justify-content'] = mainAxis;
      break;

    default:
      css['justify-content'] = DEFAULT_MAIN; // default main axis

      break;
  } // Cross-axis


  switch (crossAxis) {
    case 'start':
    case 'center':
    case 'end':
    case 'stretch':
      css['justify-items'] = crossAxis;
      break;

    default:
      // 'stretch'
      css['justify-items'] = DEFAULT_CROSS; // default cross axis

      break;
  }

  css['display'] = inline ? 'inline-grid' : 'grid';
  return css;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE$7 = 'auto';

class GridAreaStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return {
      'grid-area': input || DEFAULT_VALUE$7
    };
  }

}

GridAreaStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAreaStyleBuilder_BaseFactory;
  return function GridAreaStyleBuilder_Factory(t) {
    return (ɵGridAreaStyleBuilder_BaseFactory || (ɵGridAreaStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder)))(t || GridAreaStyleBuilder);
  };
}();

GridAreaStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAreaStyleBuilder,
  factory: GridAreaStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridAreaDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'grid-area';
    this.styleCache = gridAreaCache;
    this.init();
  }

}

GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) {
  return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridAreaDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAreaDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: GridAreaStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

const gridAreaCache = new Map();
const inputs$7 = ['gdArea', 'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl', 'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl', 'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'];
const selector$7 = `
  [gdArea],
  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],
  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],
  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]
`;
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */

class DefaultGridAreaDirective extends GridAreaDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$7;
  }

}

DefaultGridAreaDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAreaDirective_BaseFactory;
  return function DefaultGridAreaDirective_Factory(t) {
    return (ɵDefaultGridAreaDirective_BaseFactory || (ɵDefaultGridAreaDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective)))(t || DefaultGridAreaDirective);
  };
}();

DefaultGridAreaDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAreaDirective,
  selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
  inputs: {
    gdArea: "gdArea",
    "gdArea.xs": "gdArea.xs",
    "gdArea.sm": "gdArea.sm",
    "gdArea.md": "gdArea.md",
    "gdArea.lg": "gdArea.lg",
    "gdArea.xl": "gdArea.xl",
    "gdArea.lt-sm": "gdArea.lt-sm",
    "gdArea.lt-md": "gdArea.lt-md",
    "gdArea.lt-lg": "gdArea.lt-lg",
    "gdArea.lt-xl": "gdArea.lt-xl",
    "gdArea.gt-xs": "gdArea.gt-xs",
    "gdArea.gt-sm": "gdArea.gt-sm",
    "gdArea.gt-md": "gdArea.gt-md",
    "gdArea.gt-lg": "gdArea.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$7,
      inputs: inputs$7
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE$6 = 'none';
const DELIMETER = '|';

class GridAreasStyleBuiler extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    const areas = (input || DEFAULT_VALUE$6).split(DELIMETER).map(v => `"${v.trim()}"`);
    return {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-template-areas': areas.join(' ')
    };
  }

}

GridAreasStyleBuiler.ɵfac = /* @__PURE__ */function () {
  let ɵGridAreasStyleBuiler_BaseFactory;
  return function GridAreasStyleBuiler_Factory(t) {
    return (ɵGridAreasStyleBuiler_BaseFactory || (ɵGridAreasStyleBuiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler)))(t || GridAreasStyleBuiler);
  };
}();

GridAreasStyleBuiler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAreasStyleBuiler,
  factory: GridAreasStyleBuiler.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasStyleBuiler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridAreasDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'grid-areas';
    this._inline = false;
    this.init();
  }

  get inline() {
    return this._inline;
  }

  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  } // *********************************************
  // Protected methods
  // *********************************************


  updateWithValue(value) {
    this.styleCache = this.inline ? areasInlineCache : areasCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }

}

GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) {
  return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridAreasDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAreasDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: GridAreasStyleBuiler
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();

const areasCache = new Map();
const areasInlineCache = new Map();
const inputs$6 = ['gdAreas', 'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl', 'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl', 'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'];
const selector$6 = `
  [gdAreas],
  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],
  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],
  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]
`;
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */

class DefaultGridAreasDirective extends GridAreasDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$6;
  }

}

DefaultGridAreasDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAreasDirective_BaseFactory;
  return function DefaultGridAreasDirective_Factory(t) {
    return (ɵDefaultGridAreasDirective_BaseFactory || (ɵDefaultGridAreasDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective)))(t || DefaultGridAreasDirective);
  };
}();

DefaultGridAreasDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAreasDirective,
  selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
  inputs: {
    gdAreas: "gdAreas",
    "gdAreas.xs": "gdAreas.xs",
    "gdAreas.sm": "gdAreas.sm",
    "gdAreas.md": "gdAreas.md",
    "gdAreas.lg": "gdAreas.lg",
    "gdAreas.xl": "gdAreas.xl",
    "gdAreas.lt-sm": "gdAreas.lt-sm",
    "gdAreas.lt-md": "gdAreas.lt-md",
    "gdAreas.lt-lg": "gdAreas.lt-lg",
    "gdAreas.lt-xl": "gdAreas.lt-xl",
    "gdAreas.gt-xs": "gdAreas.gt-xs",
    "gdAreas.gt-sm": "gdAreas.gt-sm",
    "gdAreas.gt-md": "gdAreas.gt-md",
    "gdAreas.gt-lg": "gdAreas.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreasDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$6,
      inputs: inputs$6
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE$5 = 'initial';

class GridAutoStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    let [direction, dense] = (input || DEFAULT_VALUE$5).split(' ');

    if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
      direction = 'row';
    }

    dense = dense === 'dense' && direction !== 'dense' ? ' dense' : '';
    return {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-auto-flow': direction + dense
    };
  }

}

GridAutoStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridAutoStyleBuilder_BaseFactory;
  return function GridAutoStyleBuilder_Factory(t) {
    return (ɵGridAutoStyleBuilder_BaseFactory || (ɵGridAutoStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder)))(t || GridAutoStyleBuilder);
  };
}();

GridAutoStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridAutoStyleBuilder,
  factory: GridAutoStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridAutoDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this._inline = false;
    this.DIRECTIVE_KEY = 'grid-auto';
    this.init();
  }

  get inline() {
    return this._inline;
  }

  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  } // *********************************************
  // Protected methods
  // *********************************************


  updateWithValue(value) {
    this.styleCache = this.inline ? autoInlineCache : autoCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }

}

GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) {
  return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridAutoDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridAutoDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridAutoStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();

const autoCache = new Map();
const autoInlineCache = new Map();
const inputs$5 = ['gdAuto', 'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl', 'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl', 'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'];
const selector$5 = `
  [gdAuto],
  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],
  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],
  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]
`;
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */

class DefaultGridAutoDirective extends GridAutoDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$5;
  }

}

DefaultGridAutoDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridAutoDirective_BaseFactory;
  return function DefaultGridAutoDirective_Factory(t) {
    return (ɵDefaultGridAutoDirective_BaseFactory || (ɵDefaultGridAutoDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective)))(t || DefaultGridAutoDirective);
  };
}();

DefaultGridAutoDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridAutoDirective,
  selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
  inputs: {
    gdAuto: "gdAuto",
    "gdAuto.xs": "gdAuto.xs",
    "gdAuto.sm": "gdAuto.sm",
    "gdAuto.md": "gdAuto.md",
    "gdAuto.lg": "gdAuto.lg",
    "gdAuto.xl": "gdAuto.xl",
    "gdAuto.lt-sm": "gdAuto.lt-sm",
    "gdAuto.lt-md": "gdAuto.lt-md",
    "gdAuto.lt-lg": "gdAuto.lt-lg",
    "gdAuto.lt-xl": "gdAuto.lt-xl",
    "gdAuto.gt-xs": "gdAuto.gt-xs",
    "gdAuto.gt-sm": "gdAuto.gt-sm",
    "gdAuto.gt-md": "gdAuto.gt-md",
    "gdAuto.gt-lg": "gdAuto.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAutoDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$5,
      inputs: inputs$5
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE$4 = 'auto';

class GridColumnStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return {
      'grid-column': input || DEFAULT_VALUE$4
    };
  }

}

GridColumnStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridColumnStyleBuilder_BaseFactory;
  return function GridColumnStyleBuilder_Factory(t) {
    return (ɵGridColumnStyleBuilder_BaseFactory || (ɵGridColumnStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder)))(t || GridColumnStyleBuilder);
  };
}();

GridColumnStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridColumnStyleBuilder,
  factory: GridColumnStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridColumnDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-column';
    this.styleCache = columnCache;
    this.init();
  }

}

GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) {
  return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridColumnDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridColumnDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridColumnStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

const columnCache = new Map();
const inputs$4 = ['gdColumn', 'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl', 'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl', 'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'];
const selector$4 = `
  [gdColumn],
  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],
  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],
  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]
`;
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */

class DefaultGridColumnDirective extends GridColumnDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$4;
  }

}

DefaultGridColumnDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridColumnDirective_BaseFactory;
  return function DefaultGridColumnDirective_Factory(t) {
    return (ɵDefaultGridColumnDirective_BaseFactory || (ɵDefaultGridColumnDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective)))(t || DefaultGridColumnDirective);
  };
}();

DefaultGridColumnDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridColumnDirective,
  selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
  inputs: {
    gdColumn: "gdColumn",
    "gdColumn.xs": "gdColumn.xs",
    "gdColumn.sm": "gdColumn.sm",
    "gdColumn.md": "gdColumn.md",
    "gdColumn.lg": "gdColumn.lg",
    "gdColumn.xl": "gdColumn.xl",
    "gdColumn.lt-sm": "gdColumn.lt-sm",
    "gdColumn.lt-md": "gdColumn.lt-md",
    "gdColumn.lt-lg": "gdColumn.lt-lg",
    "gdColumn.lt-xl": "gdColumn.lt-xl",
    "gdColumn.gt-xs": "gdColumn.gt-xs",
    "gdColumn.gt-sm": "gdColumn.gt-sm",
    "gdColumn.gt-md": "gdColumn.gt-md",
    "gdColumn.gt-lg": "gdColumn.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$4,
      inputs: inputs$4
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE$3 = 'none';
const AUTO_SPECIFIER$1 = '!';

class GridColumnsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE$3;
    let auto = false;

    if (input.endsWith(AUTO_SPECIFIER$1)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
      auto = true;
    }

    const css = {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-auto-columns': '',
      'grid-template-columns': ''
    };
    const key = auto ? 'grid-auto-columns' : 'grid-template-columns';
    css[key] = input;
    return css;
  }

}

GridColumnsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridColumnsStyleBuilder_BaseFactory;
  return function GridColumnsStyleBuilder_Factory(t) {
    return (ɵGridColumnsStyleBuilder_BaseFactory || (ɵGridColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder)))(t || GridColumnsStyleBuilder);
  };
}();

GridColumnsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridColumnsStyleBuilder,
  factory: GridColumnsStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-columns';
    this._inline = false;
    this.init();
  }

  get inline() {
    return this._inline;
  }

  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  } // *********************************************
  // Protected methods
  // *********************************************


  updateWithValue(value) {
    this.styleCache = this.inline ? columnsInlineCache : columnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }

}

GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) {
  return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridColumnsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridColumnsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();

const columnsCache = new Map();
const columnsInlineCache = new Map();
const inputs$3 = ['gdColumns', 'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl', 'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl', 'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'];
const selector$3 = `
  [gdColumns],
  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],
  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],
  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]
`;
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */

class DefaultGridColumnsDirective extends GridColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }

}

DefaultGridColumnsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridColumnsDirective_BaseFactory;
  return function DefaultGridColumnsDirective_Factory(t) {
    return (ɵDefaultGridColumnsDirective_BaseFactory || (ɵDefaultGridColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective)))(t || DefaultGridColumnsDirective);
  };
}();

DefaultGridColumnsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridColumnsDirective,
  selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
  inputs: {
    gdColumns: "gdColumns",
    "gdColumns.xs": "gdColumns.xs",
    "gdColumns.sm": "gdColumns.sm",
    "gdColumns.md": "gdColumns.md",
    "gdColumns.lg": "gdColumns.lg",
    "gdColumns.xl": "gdColumns.xl",
    "gdColumns.lt-sm": "gdColumns.lt-sm",
    "gdColumns.lt-md": "gdColumns.lt-md",
    "gdColumns.lt-lg": "gdColumns.lt-lg",
    "gdColumns.lt-xl": "gdColumns.lt-xl",
    "gdColumns.gt-xs": "gdColumns.gt-xs",
    "gdColumns.gt-sm": "gdColumns.gt-sm",
    "gdColumns.gt-md": "gdColumns.gt-md",
    "gdColumns.gt-lg": "gdColumns.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE$2 = '0';

class GridGapStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    return {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-gap': input || DEFAULT_VALUE$2
    };
  }

}

GridGapStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridGapStyleBuilder_BaseFactory;
  return function GridGapStyleBuilder_Factory(t) {
    return (ɵGridGapStyleBuilder_BaseFactory || (ɵGridGapStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridGapStyleBuilder)))(t || GridGapStyleBuilder);
  };
}();

GridGapStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridGapStyleBuilder,
  factory: GridGapStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = 'grid-gap';
    this._inline = false;
    this.init();
  }

  get inline() {
    return this._inline;
  }

  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  } // *********************************************
  // Protected methods
  // *********************************************


  updateWithValue(value) {
    this.styleCache = this.inline ? gapInlineCache : gapCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }

}

GridGapDirective.ɵfac = function GridGapDirective_Factory(t) {
  return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridGapDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: GridGapStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();

const gapCache = new Map();
const gapInlineCache = new Map();
const inputs$2 = ['gdGap', 'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl', 'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl', 'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'];
const selector$2 = `
  [gdGap],
  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],
  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],
  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]
`;
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */

class DefaultGridGapDirective extends GridGapDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }

}

DefaultGridGapDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridGapDirective_BaseFactory;
  return function DefaultGridGapDirective_Factory(t) {
    return (ɵDefaultGridGapDirective_BaseFactory || (ɵDefaultGridGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridGapDirective)))(t || DefaultGridGapDirective);
  };
}();

DefaultGridGapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridGapDirective,
  selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
  inputs: {
    gdGap: "gdGap",
    "gdGap.xs": "gdGap.xs",
    "gdGap.sm": "gdGap.sm",
    "gdGap.md": "gdGap.md",
    "gdGap.lg": "gdGap.lg",
    "gdGap.xl": "gdGap.xl",
    "gdGap.lt-sm": "gdGap.lt-sm",
    "gdGap.lt-md": "gdGap.lt-md",
    "gdGap.lt-lg": "gdGap.lt-lg",
    "gdGap.lt-xl": "gdGap.lt-xl",
    "gdGap.gt-xs": "gdGap.gt-xs",
    "gdGap.gt-sm": "gdGap.gt-sm",
    "gdGap.gt-md": "gdGap.gt-md",
    "gdGap.gt-lg": "gdGap.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridGapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE$1 = 'auto';

class GridRowStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input) {
    return {
      'grid-row': input || DEFAULT_VALUE$1
    };
  }

}

GridRowStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridRowStyleBuilder_BaseFactory;
  return function GridRowStyleBuilder_Factory(t) {
    return (ɵGridRowStyleBuilder_BaseFactory || (ɵGridRowStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowStyleBuilder)))(t || GridRowStyleBuilder);
  };
}();

GridRowStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridRowStyleBuilder,
  factory: GridRowStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridRowDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-row';
    this.styleCache = rowCache;
    this.init();
  }

}

GridRowDirective.ɵfac = function GridRowDirective_Factory(t) {
  return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridRowDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridRowDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridRowStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, null);
})();

const rowCache = new Map();
const inputs$1 = ['gdRow', 'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl', 'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl', 'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'];
const selector$1 = `
  [gdRow],
  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],
  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],
  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]
`;
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */

class DefaultGridRowDirective extends GridRowDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }

}

DefaultGridRowDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridRowDirective_BaseFactory;
  return function DefaultGridRowDirective_Factory(t) {
    return (ɵDefaultGridRowDirective_BaseFactory || (ɵDefaultGridRowDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowDirective)))(t || DefaultGridRowDirective);
  };
}();

DefaultGridRowDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridRowDirective,
  selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
  inputs: {
    gdRow: "gdRow",
    "gdRow.xs": "gdRow.xs",
    "gdRow.sm": "gdRow.sm",
    "gdRow.md": "gdRow.md",
    "gdRow.lg": "gdRow.lg",
    "gdRow.xl": "gdRow.xl",
    "gdRow.lt-sm": "gdRow.lt-sm",
    "gdRow.lt-md": "gdRow.lt-md",
    "gdRow.lt-lg": "gdRow.lt-lg",
    "gdRow.lt-xl": "gdRow.lt-xl",
    "gdRow.gt-xs": "gdRow.gt-xs",
    "gdRow.gt-sm": "gdRow.gt-sm",
    "gdRow.gt-md": "gdRow.gt-md",
    "gdRow.gt-lg": "gdRow.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DEFAULT_VALUE = 'none';
const AUTO_SPECIFIER = '!';

class GridRowsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE;
    let auto = false;

    if (input.endsWith(AUTO_SPECIFIER)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
      auto = true;
    }

    const css = {
      'display': parent.inline ? 'inline-grid' : 'grid',
      'grid-auto-rows': '',
      'grid-template-rows': ''
    };
    const key = auto ? 'grid-auto-rows' : 'grid-template-rows';
    css[key] = input;
    return css;
  }

}

GridRowsStyleBuilder.ɵfac = /* @__PURE__ */function () {
  let ɵGridRowsStyleBuilder_BaseFactory;
  return function GridRowsStyleBuilder_Factory(t) {
    return (ɵGridRowsStyleBuilder_BaseFactory || (ɵGridRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder)))(t || GridRowsStyleBuilder);
  };
}();

GridRowsStyleBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GridRowsStyleBuilder,
  factory: GridRowsStyleBuilder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsStyleBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class GridRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = 'grid-rows';
    this._inline = false;
    this.init();
  }

  get inline() {
    return this._inline;
  }

  set inline(val) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val);
  } // *********************************************
  // Protected methods
  // *********************************************


  updateWithValue(value) {
    this.styleCache = this.inline ? rowsInlineCache : rowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }

}

GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) {
  return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller));
};

GridRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: GridRowsDirective,
  inputs: {
    inline: ["gdInline", "inline"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: GridRowsStyleBuilder
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils
    }, {
      type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gdInline']
    }]
  });
})();

const rowsCache = new Map();
const rowsInlineCache = new Map();
const inputs = ['gdRows', 'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl', 'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl', 'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'];
const selector = `
  [gdRows],
  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],
  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],
  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]
`;
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */

class DefaultGridRowsDirective extends GridRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }

}

DefaultGridRowsDirective.ɵfac = /* @__PURE__ */function () {
  let ɵDefaultGridRowsDirective_BaseFactory;
  return function DefaultGridRowsDirective_Factory(t) {
    return (ɵDefaultGridRowsDirective_BaseFactory || (ɵDefaultGridRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective)))(t || DefaultGridRowsDirective);
  };
}();

DefaultGridRowsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DefaultGridRowsDirective,
  selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
  inputs: {
    gdRows: "gdRows",
    "gdRows.xs": "gdRows.xs",
    "gdRows.sm": "gdRows.sm",
    "gdRows.md": "gdRows.md",
    "gdRows.lg": "gdRows.lg",
    "gdRows.xl": "gdRows.xl",
    "gdRows.lt-sm": "gdRows.lt-sm",
    "gdRows.lt-md": "gdRows.lt-md",
    "gdRows.lt-lg": "gdRows.lt-lg",
    "gdRows.lt-xl": "gdRows.lt-xl",
    "gdRows.gt-xs": "gdRows.gt-xs",
    "gdRows.gt-sm": "gdRows.gt-sm",
    "gdRows.gt-md": "gdRows.gt-md",
    "gdRows.gt-lg": "gdRows.gt-lg"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */

class GridModule {}

GridModule.ɵfac = function GridModule_Factory(t) {
  return new (t || GridModule)();
};

GridModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: GridModule,
  declarations: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective],
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
  exports: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective]
});
GridModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 77114:
/*!****************************!*\
  !*** @angular/flex-layout ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREAKPOINT": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT),
/* harmony export */   "BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS),
/* harmony export */   "BREAKPOINT_PRINT": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT_PRINT),
/* harmony export */   "BROWSER_PROVIDER": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BROWSER_PROVIDER),
/* harmony export */   "BaseDirective2": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2),
/* harmony export */   "BreakPointRegistry": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BreakPointRegistry),
/* harmony export */   "CLASS_NAME": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME),
/* harmony export */   "ClassDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ClassDirective),
/* harmony export */   "CoreModule": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "DEFAULT_BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_BREAKPOINTS),
/* harmony export */   "DEFAULT_CONFIG": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG),
/* harmony export */   "DefaultClassDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultClassDirective),
/* harmony export */   "DefaultFlexAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexAlignDirective),
/* harmony export */   "DefaultFlexDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective),
/* harmony export */   "DefaultFlexOffsetDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexOffsetDirective),
/* harmony export */   "DefaultFlexOrderDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexOrderDirective),
/* harmony export */   "DefaultGridAlignColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAlignColumnsDirective),
/* harmony export */   "DefaultGridAlignDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAlignDirective),
/* harmony export */   "DefaultGridAlignRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAlignRowsDirective),
/* harmony export */   "DefaultGridAreaDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAreaDirective),
/* harmony export */   "DefaultGridAreasDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAreasDirective),
/* harmony export */   "DefaultGridAutoDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridAutoDirective),
/* harmony export */   "DefaultGridColumnDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridColumnDirective),
/* harmony export */   "DefaultGridColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridColumnsDirective),
/* harmony export */   "DefaultGridGapDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridGapDirective),
/* harmony export */   "DefaultGridRowDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridRowDirective),
/* harmony export */   "DefaultGridRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.DefaultGridRowsDirective),
/* harmony export */   "DefaultImgSrcDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultImgSrcDirective),
/* harmony export */   "DefaultLayoutAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective),
/* harmony export */   "DefaultLayoutDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective),
/* harmony export */   "DefaultLayoutGapDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective),
/* harmony export */   "DefaultShowHideDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultShowHideDirective),
/* harmony export */   "DefaultStyleDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultStyleDirective),
/* harmony export */   "ExtendedModule": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule),
/* harmony export */   "FlexAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexAlignDirective),
/* harmony export */   "FlexAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexAlignStyleBuilder),
/* harmony export */   "FlexDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexDirective),
/* harmony export */   "FlexFillDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillDirective),
/* harmony export */   "FlexFillStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillStyleBuilder),
/* harmony export */   "FlexLayoutModule": () => (/* binding */ FlexLayoutModule),
/* harmony export */   "FlexModule": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule),
/* harmony export */   "FlexOffsetDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOffsetDirective),
/* harmony export */   "FlexOffsetStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOffsetStyleBuilder),
/* harmony export */   "FlexOrderDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOrderDirective),
/* harmony export */   "FlexOrderStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOrderStyleBuilder),
/* harmony export */   "FlexStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexStyleBuilder),
/* harmony export */   "GridAlignColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignColumnsDirective),
/* harmony export */   "GridAlignColumnsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignColumnsStyleBuilder),
/* harmony export */   "GridAlignDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignDirective),
/* harmony export */   "GridAlignRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignRowsDirective),
/* harmony export */   "GridAlignRowsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignRowsStyleBuilder),
/* harmony export */   "GridAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAlignStyleBuilder),
/* harmony export */   "GridAreaDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreaDirective),
/* harmony export */   "GridAreaStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreaStyleBuilder),
/* harmony export */   "GridAreasDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreasDirective),
/* harmony export */   "GridAreasStyleBuiler": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAreasStyleBuiler),
/* harmony export */   "GridAutoDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAutoDirective),
/* harmony export */   "GridAutoStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridAutoStyleBuilder),
/* harmony export */   "GridColumnDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnDirective),
/* harmony export */   "GridColumnStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnStyleBuilder),
/* harmony export */   "GridColumnsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnsDirective),
/* harmony export */   "GridColumnsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridColumnsStyleBuilder),
/* harmony export */   "GridGapDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridGapDirective),
/* harmony export */   "GridGapStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridGapStyleBuilder),
/* harmony export */   "GridModule": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule),
/* harmony export */   "GridRowDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowDirective),
/* harmony export */   "GridRowStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowStyleBuilder),
/* harmony export */   "GridRowsDirective": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowsDirective),
/* harmony export */   "GridRowsStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridRowsStyleBuilder),
/* harmony export */   "ImgSrcDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ImgSrcDirective),
/* harmony export */   "ImgSrcStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ImgSrcStyleBuilder),
/* harmony export */   "LAYOUT_CONFIG": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG),
/* harmony export */   "LayoutAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutAlignDirective),
/* harmony export */   "LayoutAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutAlignStyleBuilder),
/* harmony export */   "LayoutDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutDirective),
/* harmony export */   "LayoutGapDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutGapDirective),
/* harmony export */   "LayoutGapStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutGapStyleBuilder),
/* harmony export */   "LayoutStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutStyleBuilder),
/* harmony export */   "MediaChange": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaChange),
/* harmony export */   "MediaMarshaller": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller),
/* harmony export */   "MediaObserver": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaObserver),
/* harmony export */   "MediaTrigger": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaTrigger),
/* harmony export */   "ORIENTATION_BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.ORIENTATION_BREAKPOINTS),
/* harmony export */   "PrintHook": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.PrintHook),
/* harmony export */   "SERVER_TOKEN": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN),
/* harmony export */   "ScreenTypes": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.ScreenTypes),
/* harmony export */   "ShowHideDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ShowHideDirective),
/* harmony export */   "ShowHideStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ShowHideStyleBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "StyleDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.StyleDirective),
/* harmony export */   "StyleUtils": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils),
/* harmony export */   "StylesheetMap": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StylesheetMap),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "coerceArray": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.coerceArray),
/* harmony export */   "mergeAlias": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.mergeAlias),
/* harmony export */   "removeStyles": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.removeStyles),
/* harmony export */   "sortAscendingPriority": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.sortAscendingPriority),
/* harmony export */   "sortDescendingPriority": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.sortDescendingPriority),
/* harmony export */   "validateBasis": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis),
/* harmony export */   "ɵMatchMedia": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMatchMedia"]),
/* harmony export */   "ɵMockMatchMedia": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMockMatchMedia"]),
/* harmony export */   "ɵMockMatchMediaProvider": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMockMatchMediaProvider"]),
/* harmony export */   "ɵmultiply": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵmultiply"])
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 36639);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 55434);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/grid */ 98616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Current version of Angular Flex-Layout. */

const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.Version('14.0.0-beta.41');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */

class FlexLayoutModule {
  constructor(serverModuleLoaded, platformId) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(platformId) && !serverModuleLoaded) {
      console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
    }
  }
  /**
   * Initialize the FlexLayoutModule with a set of config options,
   * which sets the corresponding tokens accordingly
   */


  static withConfig(configOptions, // tslint:disable-next-line:max-line-length
  breakpoints = []) {
    return {
      ngModule: FlexLayoutModule,
      providers: configOptions.serverLoaded ? [{
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG,
        useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG), configOptions)
      }, {
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }, {
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN,
        useValue: true
      }] : [{
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG,
        useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG), configOptions)
      }, {
        provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }]
    };
  }

}

FlexLayoutModule.ɵfac = function FlexLayoutModule_Factory(t) {
  return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID));
};

FlexLayoutModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: FlexLayoutModule,
  imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule],
  exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]
});
FlexLayoutModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](FlexLayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule],
      exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 19839:
/*!*********************************************************!*\
  !*** ./node_modules/ngx-webcam/fesm2015/ngx-webcam.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamComponent": () => (/* binding */ WebcamComponent),
/* harmony export */   "WebcamImage": () => (/* binding */ WebcamImage),
/* harmony export */   "WebcamInitError": () => (/* binding */ WebcamInitError),
/* harmony export */   "WebcamMirrorProperties": () => (/* binding */ WebcamMirrorProperties),
/* harmony export */   "WebcamModule": () => (/* binding */ WebcamModule),
/* harmony export */   "WebcamUtil": () => (/* binding */ WebcamUtil)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);




/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */

const _c0 = ["video"];
const _c1 = ["canvas"];

function WebcamComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.rotateVideoInput(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

class WebcamImage {
  constructor(imageAsDataUrl, mimeType, imageData) {
    this._mimeType = null;
    this._imageAsBase64 = null;
    this._imageAsDataUrl = null;
    this._imageData = null;
    this._mimeType = mimeType;
    this._imageAsDataUrl = imageAsDataUrl;
    this._imageData = imageData;
  }
  /**
   * Extracts the Base64 data out of the given dataUrl.
   * @param dataUrl the given dataUrl
   * @param mimeType the mimeType of the data
   */


  static getDataFromDataUrl(dataUrl, mimeType) {
    return dataUrl.replace(`data:${mimeType};base64,`, '');
  }
  /**
   * Get the base64 encoded image data
   * @returns base64 data of the image
   */


  get imageAsBase64() {
    return this._imageAsBase64 ? this._imageAsBase64 : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
  }
  /**
   * Get the encoded image as dataUrl
   * @returns the dataUrl of the image
   */


  get imageAsDataUrl() {
    return this._imageAsDataUrl;
  }
  /**
   * Get the ImageData object associated with the canvas' 2d context.
   * @returns the ImageData of the canvas's 2d context.
   */


  get imageData() {
    return this._imageData;
  }

}

class WebcamUtil {
  /**
   * Lists available videoInput devices
   * @returns a list of media device info.
   */
  static getAvailableVideoInputs() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return Promise.reject('enumerateDevices() not supported.');
    }

    return new Promise((resolve, reject) => {
      navigator.mediaDevices.enumerateDevices().then(devices => {
        resolve(devices.filter(device => device.kind === 'videoinput'));
      }).catch(err => {
        reject(err.message || err);
      });
    });
  }

}

class WebcamComponent {
  constructor() {
    /** Defines the max width of the webcam area in px */
    this.width = 640;
    /** Defines the max height of the webcam area in px */

    this.height = 480;
    /** Defines base constraints to apply when requesting video track from UserMedia */

    this.videoOptions = WebcamComponent.DEFAULT_VIDEO_OPTIONS;
    /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */

    this.allowCameraSwitch = true;
    /** Flag to control whether an ImageData object is stored into the WebcamImage object. */

    this.captureImageData = false;
    /** The image type to use when capturing snapshots */

    this.imageType = WebcamComponent.DEFAULT_IMAGE_TYPE;
    /** The image quality to use when capturing snapshots (number between 0 and 1) */

    this.imageQuality = WebcamComponent.DEFAULT_IMAGE_QUALITY;
    /** EventEmitter which fires when an image has been captured */

    this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */

    this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the webcam video was clicked */

    this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the active deviceId after the active video device was switched */

    this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** available video devices */

    this.availableVideoInputs = [];
    /** Indicates whether the video device is ready to be switched */

    this.videoInitialized = false;
    /** Index of active video in availableVideoInputs */

    this.activeVideoInputIndex = -1;
    /** MediaStream object in use for streaming UserMedia data */

    this.mediaStream = null;
    /** width and height of the active video stream */

    this.activeVideoSettings = null;
  }
  /**
   * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
   */


  set trigger(trigger) {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    } // Subscribe to events from this Observable to take snapshots


    this.triggerSubscription = trigger.subscribe(() => {
      this.takeSnapshot();
    });
  }
  /**
   * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
   * @param switchCamera Indicates which webcam to switch to
   *   true: cycle forwards through available webcams
   *   false: cycle backwards through available webcams
   *   string: activate the webcam with the given id
   */


  set switchCamera(switchCamera) {
    if (this.switchCameraSubscription) {
      this.switchCameraSubscription.unsubscribe();
    } // Subscribe to events from this Observable to switch video device


    this.switchCameraSubscription = switchCamera.subscribe(value => {
      if (typeof value === 'string') {
        // deviceId was specified
        this.switchToVideoInput(value);
      } else {
        // direction was specified
        this.rotateVideoInput(value !== false);
      }
    });
  }
  /**
   * Get MediaTrackConstraints to request streaming the given device
   * @param deviceId
   * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
   * @returns
   */


  static getMediaConstraintsForDevice(deviceId, baseMediaTrackConstraints) {
    const result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;

    if (deviceId) {
      result.deviceId = {
        exact: deviceId
      };
    }

    return result;
  }
  /**
   * Tries to harvest the deviceId from the given mediaStreamTrack object.
   * Browsers populate this object differently; this method tries some different approaches
   * to read the id.
   * @param mediaStreamTrack
   * @returns deviceId if found in the mediaStreamTrack
   */


  static getDeviceIdFromMediaStreamTrack(mediaStreamTrack) {
    if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
      return mediaStreamTrack.getSettings().deviceId;
    } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
      const deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
      return WebcamComponent.getValueFromConstrainDOMString(deviceIdObj);
    }
  }
  /**
   * Tries to harvest the facingMode from the given mediaStreamTrack object.
   * Browsers populate this object differently; this method tries some different approaches
   * to read the value.
   * @param mediaStreamTrack
   * @returns facingMode if found in the mediaStreamTrack
   */


  static getFacingModeFromMediaStreamTrack(mediaStreamTrack) {
    if (mediaStreamTrack) {
      if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
        return mediaStreamTrack.getSettings().facingMode;
      } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
        const facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
        return WebcamComponent.getValueFromConstrainDOMString(facingModeConstraint);
      }
    }
  }
  /**
   * Determines whether the given mediaStreamTrack claims itself as user facing
   * @param mediaStreamTrack
   */


  static isUserFacing(mediaStreamTrack) {
    const facingMode = WebcamComponent.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
    return facingMode ? 'user' === facingMode.toLowerCase() : false;
  }
  /**
   * Extracts the value from the given ConstrainDOMString
   * @param constrainDOMString
   */


  static getValueFromConstrainDOMString(constrainDOMString) {
    if (constrainDOMString) {
      if (constrainDOMString instanceof String) {
        return String(constrainDOMString);
      } else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
        return String(constrainDOMString[0]);
      } else if (typeof constrainDOMString === 'object') {
        if (constrainDOMString['exact']) {
          return String(constrainDOMString['exact']);
        } else if (constrainDOMString['ideal']) {
          return String(constrainDOMString['ideal']);
        }
      }
    }

    return null;
  }

  ngAfterViewInit() {
    this.detectAvailableDevices().then(() => {
      // start video
      this.switchToVideoInput(null);
    }).catch(err => {
      this.initError.next({
        message: err
      }); // fallback: still try to load webcam, even if device enumeration failed

      this.switchToVideoInput(null);
    });
  }

  ngOnDestroy() {
    this.stopMediaTracks();
    this.unsubscribeFromSubscriptions();
  }
  /**
   * Takes a snapshot of the current webcam's view and emits the image as an event
   */


  takeSnapshot() {
    // set canvas size to actual video size
    const _video = this.nativeVideoElement;
    const dimensions = {
      width: this.width,
      height: this.height
    };

    if (_video.videoWidth) {
      dimensions.width = _video.videoWidth;
      dimensions.height = _video.videoHeight;
    }

    const _canvas = this.canvas.nativeElement;
    _canvas.width = dimensions.width;
    _canvas.height = dimensions.height; // paint snapshot image to canvas

    const context2d = _canvas.getContext('2d');

    context2d.drawImage(_video, 0, 0); // read canvas content as image

    const mimeType = this.imageType ? this.imageType : WebcamComponent.DEFAULT_IMAGE_TYPE;
    const quality = this.imageQuality ? this.imageQuality : WebcamComponent.DEFAULT_IMAGE_QUALITY;

    const dataUrl = _canvas.toDataURL(mimeType, quality); // get the ImageData object from the canvas' context.


    let imageData = null;

    if (this.captureImageData) {
      imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
    }

    this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
  }
  /**
   * Switches to the next/previous video device
   * @param forward
   */


  rotateVideoInput(forward) {
    if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
      const increment = forward ? 1 : this.availableVideoInputs.length - 1;
      const nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
      this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
    }
  }
  /**
   * Switches the camera-view to the specified video device
   */


  switchToVideoInput(deviceId) {
    this.videoInitialized = false;
    this.stopMediaTracks();
    this.initWebcam(deviceId, this.videoOptions);
  }
  /**
   * Event-handler for video resize event.
   * Triggers Angular change detection so that new video dimensions get applied
   */


  videoResize() {// here to trigger Angular change detection
  }

  get videoWidth() {
    const videoRatio = this.getVideoAspectRatio();
    return Math.min(this.width, this.height * videoRatio);
  }

  get videoHeight() {
    const videoRatio = this.getVideoAspectRatio();
    return Math.min(this.height, this.width / videoRatio);
  }

  get videoStyleClasses() {
    let classes = '';

    if (this.isMirrorImage()) {
      classes += 'mirrored ';
    }

    return classes.trim();
  }

  get nativeVideoElement() {
    return this.video.nativeElement;
  }
  /**
   * Returns the video aspect ratio of the active video stream
   */


  getVideoAspectRatio() {
    // calculate ratio from video element dimensions if present
    const videoElement = this.nativeVideoElement;

    if (videoElement.videoWidth && videoElement.videoWidth > 0 && videoElement.videoHeight && videoElement.videoHeight > 0) {
      return videoElement.videoWidth / videoElement.videoHeight;
    } // nothing present - calculate ratio based on width/height params


    return this.width / this.height;
  }
  /**
   * Init webcam live view
   */


  initWebcam(deviceId, userVideoTrackConstraints) {
    const _video = this.nativeVideoElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // merge deviceId -> userVideoTrackConstraints
      const videoTrackConstraints = WebcamComponent.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
      navigator.mediaDevices.getUserMedia({
        video: videoTrackConstraints
      }).then(stream => {
        this.mediaStream = stream;
        _video.srcObject = stream;

        _video.play();

        this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
        const activeDeviceId = WebcamComponent.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
        this.cameraSwitched.next(activeDeviceId); // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
        // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.

        this.detectAvailableDevices().then(() => {
          this.activeVideoInputIndex = activeDeviceId ? this.availableVideoInputs.findIndex(mediaDeviceInfo => mediaDeviceInfo.deviceId === activeDeviceId) : -1;
          this.videoInitialized = true;
        }).catch(() => {
          this.activeVideoInputIndex = -1;
          this.videoInitialized = true;
        });
      }).catch(err => {
        this.initError.next({
          message: err.message,
          mediaStreamError: err
        });
      });
    } else {
      this.initError.next({
        message: 'Cannot read UserMedia from MediaDevices.'
      });
    }
  }

  getActiveVideoTrack() {
    return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
  }

  isMirrorImage() {
    if (!this.getActiveVideoTrack()) {
      return false;
    } // check for explicit mirror override parameter


    {
      let mirror = 'auto';

      if (this.mirrorImage) {
        if (typeof this.mirrorImage === 'string') {
          mirror = String(this.mirrorImage).toLowerCase();
        } else {
          // WebcamMirrorProperties
          if (this.mirrorImage.x) {
            mirror = this.mirrorImage.x.toLowerCase();
          }
        }
      }

      switch (mirror) {
        case 'always':
          return true;

        case 'never':
          return false;
      }
    } // default: enable mirroring if webcam is user facing

    return WebcamComponent.isUserFacing(this.getActiveVideoTrack());
  }
  /**
   * Stops all active media tracks.
   * This prevents the webcam from being indicated as active,
   * even if it is no longer used by this component.
   */


  stopMediaTracks() {
    if (this.mediaStream && this.mediaStream.getTracks) {
      // pause video to prevent mobile browser freezes
      this.nativeVideoElement.pause(); // getTracks() returns all media tracks (video+audio)

      this.mediaStream.getTracks().forEach(track => track.stop());
    }
  }
  /**
   * Unsubscribe from all open subscriptions
   */


  unsubscribeFromSubscriptions() {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    }

    if (this.switchCameraSubscription) {
      this.switchCameraSubscription.unsubscribe();
    }
  }
  /**
   * Reads available input devices
   */


  detectAvailableDevices() {
    return new Promise((resolve, reject) => {
      WebcamUtil.getAvailableVideoInputs().then(devices => {
        this.availableVideoInputs = devices;
        resolve(devices);
      }).catch(err => {
        this.availableVideoInputs = [];
        reject(err);
      });
    });
  }

}

WebcamComponent.DEFAULT_VIDEO_OPTIONS = {
  facingMode: 'environment'
};
WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;

WebcamComponent.ɵfac = function WebcamComponent_Factory(t) {
  return new (t || WebcamComponent)();
};

WebcamComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WebcamComponent,
  selectors: [["webcam"]],
  viewQuery: function WebcamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    }
  },
  inputs: {
    width: "width",
    height: "height",
    videoOptions: "videoOptions",
    allowCameraSwitch: "allowCameraSwitch",
    mirrorImage: "mirrorImage",
    captureImageData: "captureImageData",
    imageType: "imageType",
    imageQuality: "imageQuality",
    trigger: "trigger",
    switchCamera: "switchCamera"
  },
  outputs: {
    imageCapture: "imageCapture",
    initError: "initError",
    imageClick: "imageClick",
    cameraSwitched: "cameraSwitched"
  },
  decls: 6,
  vars: 7,
  consts: [[1, "webcam-wrapper", 3, "click"], ["autoplay", "", "muted", "", "playsinline", "", 3, "width", "height", "resize"], ["video", ""], ["class", "camera-switch", 3, "click", 4, "ngIf"], [3, "width", "height"], ["canvas", ""], [1, "camera-switch", 3, "click"]],
  template: function WebcamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_Template_div_click_0_listener() {
        return ctx.imageClick.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function WebcamComponent_Template_video_resize_1_listener() {
        return ctx.videoResize();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebcamComponent_div_3_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.videoStyleClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowCameraSwitch && ctx.availableVideoInputs.length > 1 && ctx.videoInitialized);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:#0000002e}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'webcam',
      template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
      styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scaleX(-1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper .camera-switch:hover{background-color:#0000002e}\n"]
    }]
  }], null, {
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    videoOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowCameraSwitch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mirrorImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    captureImageData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    initError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    imageClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cameraSwitched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    video: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['video', {
        static: true
      }]
    }],
    canvas: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['canvas', {
        static: true
      }]
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    switchCamera: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const COMPONENTS = [WebcamComponent];

class WebcamModule {}

WebcamModule.ɵfac = function WebcamModule_Factory(t) {
  return new (t || WebcamModule)();
};

WebcamModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: WebcamModule,
  declarations: [WebcamComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  exports: [WebcamComponent]
});
WebcamModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [COMPONENTS],
      exports: [COMPONENTS]
    }]
  }], null, null);
})();

class WebcamInitError {
  constructor() {
    this.message = null;
    this.mediaStreamError = null;
  }

}

class WebcamMirrorProperties {}
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map