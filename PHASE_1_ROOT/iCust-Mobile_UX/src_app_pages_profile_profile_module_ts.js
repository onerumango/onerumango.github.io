"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 45642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 67364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 62581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ 61957);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commonservice.service */ 44045);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 82475);

















let ProfilePage = class ProfilePage {
    constructor(api, platform, actionSheetController, sanitizer, cdr, filePath, camera, router, photoService, commonService, dataService, alert, file, crop, toastService) {
        this.api = api;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.filePath = filePath;
        this.camera = camera;
        this.router = router;
        this.photoService = photoService;
        this.commonService = commonService;
        this.dataService = dataService;
        this.alert = alert;
        this.file = file;
        this.crop = crop;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.formData = resp;
            this.commonService.sendProfileInfo(resp);
            this.customerId = resp.customerId;
            this.assign(resp.firstName, resp.middleName, resp.lastName, resp.primaryEmailAdress);
            this.getProfilePicture(resp.customerId);
        });
        this.dataService.getAvatarUrl.subscribe((data) => {
            if (data != null) {
                let objectURL = data;
                this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
                this.cdr.detectChanges();
            }
        });
    }
    assign(firstName, middleName, lastName, email) {
        if (middleName == null) {
            this.fullName = firstName + ' ' + lastName;
        }
        else {
            this.fullName = firstName + ' ' + middleName + ' ' + lastName;
            console.log("full name", this.fullName);
        }
        this.email = email;
    }
    settings() {
        this.router.navigate(['settings']);
    }
    changePassword() {
        this.router.navigate(['changepassword']);
    }
    securityCenter() {
        this.router.navigate(['securitycenter']);
    }
    account() {
        this.router.navigate(['account']);
    }
    notification() {
        this.router.navigate(['notification']);
    }
    menu() {
        this.flag = true;
    }
    getProfilePicture(customerId) {
        this.api.getProfileDetails(customerId)
            .subscribe((data) => {
            console.log('get profile data -- ', data);
            this.profileData = data;
            if (data.profileImage != null) {
                let objectURL = data.profileImage;
                this.image = data.profileImage != "not_available" ? this.sanitizer.bypassSecurityTrustUrl(objectURL) : undefined;
            }
            else {
                this.image = null;
            }
            this.cdr.markForCheck();
        }, (error) => {
            console.log(error);
        });
    }
    cancel() {
        this.flag = false;
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
    openActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.actionSheet = yield this.actionSheetController.create({
                // header: 'Albums',
                // subHeader: 'Subtitle',
                animated: false,
                backdropDismiss: false,
                cssClass: 'custom_action_css',
                mode: 'ios',
                buttons: [{
                        text: 'Take Photo',
                        // icon: 'share',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    }, {
                        text: 'Upload Photo',
                        handler: () => {
                            this.fileInput.nativeElement.click();
                        }
                    }, {
                        text: 'Remove Photo',
                        role: 'destructive',
                        handler: () => {
                            this.removeProfileImage();
                            this.image = null;
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield this.actionSheet.present();
        });
    }
    goToHelp() {
        this.router.navigate(['help']);
    }
    goToFaq() {
        this.router.navigate(['faq']);
    }
    goToWallet() {
        this.router.navigate(['/wallet']);
    }
    handleProfileUpdate(event) {
        var _a;
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            let payload = {
                "documentName": "Profile",
                "documentType": 1,
                "fileType": file === null || file === void 0 ? void 0 : file.type,
                "fileName": file === null || file === void 0 ? void 0 : file.name,
                "customerId": this.customerId
            };
            formData.append('file', file);
            formData.append('data', JSON.stringify(payload));
            (_a = this.actionSheet) === null || _a === void 0 ? void 0 : _a.dismiss();
            this.api.uploadProfileImage(formData).subscribe(resp => {
                console.log(resp);
                this.image = resp.fileUrl;
                localStorage.setItem('profilePicInfo', JSON.stringify(resp));
            }, err => console.log('Error: ', err));
        }
    }
    removeProfileImage() {
        const data = {
            custId: this.customerId,
            documentType: 1,
        };
        this.api.deleteProfileImage(data).subscribe((resp) => {
            console.log('res: ', resp);
        }, (err) => {
            console.log('Error: ', err.status);
            if ((err === null || err === void 0 ? void 0 : err.status) == 200) {
                this.image = null;
                this.toastService.showToast('Profile removed Successfully!');
            }
            else {
                this.toastService.showToast('Profile unable to remove!');
            }
        });
    }
    fileSelected(event) {
        const file = event.target.files ? event.target.files[0] : '';
        this.selectedFile = file;
        let size = event.target.files[0].size;
        this.toastService.showToast(`profile picture will take time to load since the upload file size is ${this.formatBytes(size, 2)}`);
        const formData = new FormData();
        let payload = {
            "documentName": "Profile",
            "documentType": 1,
            "fileType": file.type,
            "fileName": file.name,
            "customerId": this.customerId
        };
        formData.append('file', file);
        formData.append('data', JSON.stringify(payload));
        this.uploadFile(formData);
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
    pickImage(sourceType) {
        const options = {
            quality: 70,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true,
            targetHeight: 350,
            targetWidth: 350,
            cameraDirection: 1
        };
        this.camera.getPicture(options).then((imageData) => {
            console.log(imageData);
            this.crop.crop(imageData, {
                quality: 50, targetHeight: 350,
                targetWidth: 350,
            })
                .then(newImage => {
                console.log('new image path is: ', newImage);
                this.file.resolveLocalFilesystemUrl(newImage).then((entry) => {
                    entry.file(file => {
                        console.log(file);
                        this.filePath.resolveNativePath(newImage)
                            .then(filePath => {
                            console.log("Resolve file", file);
                            this.readFile(file, filePath);
                            console.log("filePath native::", filePath);
                        }).catch(e => console.log(e));
                    });
                });
            }, error => {
                console.error('Error cropping image', error);
            });
        }, (err) => {
            // Handle error
            this.toastService.showToast('Cordova is not available');
        });
    }
    readFile(file, targetUrl) {
        const reader = new FileReader();
        reader.onload = () => {
            const blob = new Blob([reader.result], {
                type: file.type
            });
            console.log("this.read::", file);
            let filename = targetUrl.split("/").pop();
            const formData = new FormData();
            let payload = {
                "documentName": "Profile",
                "documentType": 1,
                "fileType": file.type,
                "fileName": file.name,
                "customerId": this.customerId
            };
            formData.append('file', blob, filename);
            formData.append('data', JSON.stringify(payload));
            this.uploadFile(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    ;
    uploadFile(formData) {
        this.showLoader = true;
        this.api.uploadProfilePicture(formData)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpResponse) {
                let avatarUrl = event.body.fileUrl;
                this.image = avatarUrl;
                this.showLoader = false;
                localStorage.setItem('avatarUrl', avatarUrl);
                this.dataService.shareAvatarUrl(avatarUrl);
                this.toastService.showToast("File Uploaded Successfully!");
            }
            this.cdr.markForCheck();
        }, (err) => {
            this.progress = 0;
            this.showLoader = false;
            this.selectedFile = null;
        });
    }
    goToFeedback() {
        this.router.navigateByUrl("/feedback", { state: { goBack: true } });
    }
    previous() {
        this.router.navigate(['/dashboard']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__.FilePath },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__.Camera },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__.CommonserviceService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__.Crop },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService }
];
ProfilePage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['file',] }]
};
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectionStrategy.OnPush,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 61957:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);



let PhotoService = class PhotoService {
    constructor(camera) {
        this.camera = camera;
        this.photos = [];
        this.PHOTO_STORAGE = "photos";
    }
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then((imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
                // Handle error
            });
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ 84465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 93819);



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showToast(msg) {
        this.myToast = this.toast.create({
            message: msg,
            duration: 3000,
            buttons: [
                {
                    text: 'Dismiss',
                    role: 'cancel',
                    handler: () => { }
                }
            ]
        }).then((toastData) => {
            toastData.present();
        });
    }
    dismissToast() {
        this.myToast = this.toast.dismiss();
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ 62581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #ffffff;\n}\n\n.header {\n  background-color: #456EFE;\n  height: 100px;\n  padding-top: 1px;\n}\n\nh5,\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\np {\n  color: #102245;\n}\n\n.avatar {\n  height: 100%;\n}\n\n.box-with-img {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  float: right;\n  text-align: center;\n  top: -30px;\n}\n\n.previous {\n  margin-right: 20px !important;\n}\n\nion-toolbar {\n  --background: #456EFE;\n  --color: white;\n  --border-color: transparent;\n}\n\n.feedback-icon {\n  margin: 13px 3px 6px 5px;\n  font-size: 25px !important;\n}\n\n.profile-image {\n  font-family: inherit;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  height: 4.5rem;\n  font-size: 35px;\n  width: 100%;\n  height: 100%;\n}\n\n.header h2 {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n\nion-item {\n  --padding-start: 9px !important;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.img-box {\n  height: 130px;\n  width: 130px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.img-box img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.border-white {\n  border-radius: 50%;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border-radius: 50%;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  margin-top: -110px;\n}\n\n.main_content_div {\n  width: 100%;\n  height: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .gradient_div {\n  height: 270px;\n  background: var(--ion-color-primary);\n  padding: 20px;\n  padding-top: 40px;\n  width: 100%;\n}\n\n.main_content_div .gradient_div .abs_round {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  height: 250px;\n  width: 250px;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 99;\n  right: -60px;\n  top: -80px;\n  z-index: 999;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_content_div .gradient_div .flex_header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n\n.main_content_div .gradient_div .flex_header ion-label {\n  color: white;\n  font-family: \"semi-bold\";\n  font-size: 20px;\n}\n\n.main_content_div .gradient_div .flex_header img {\n  position: absolute;\n  right: 0px;\n  z-index: 999;\n}\n\n.main_content_div .container_div {\n  padding: 20px;\n  margin-top: 0px;\n  position: absolute;\n  width: 100%;\n  z-index: 9999;\n}\n\n.main_content_div .container_div .wa-box {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_content_div .container_div .wa-icon-bg {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 10px;\n  position: relative;\n  background: #DFE7F5;\n}\n\n.main_content_div .container_div .wa-img {\n  padding: 10px;\n  text-align: center;\n  margin-left: -6px;\n  margin-top: -6px;\n}\n\n.main_content_div .container_div .wa-ml-15 {\n  margin-left: 15px;\n}\n\n.main_content_div .container_div .white_box {\n  background: white;\n  padding: 16px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_content_div .container_div .white_box .user_back {\n  width: 100px;\n  height: 105px;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 5px solid #f3f3f3;\n  border-radius: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.main_content_div .container_div .white_box .flex_div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\n.main_content_div .container_div .white_box .flex_div ion-label {\n  margin-right: 20px;\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .container_div .white_box .grey_lbl {\n  color: #77869E;\n  font-size: 13px;\n  font-family: \"semi-bold\";\n  margin-bottom: 15px;\n}\n\n.main_content_div .container_div .white_box .grey_box {\n  background: #F8F9F9;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.main_content_div .container_div .title_lbl {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"semi-bold\";\n  margin: 20px 0px;\n}\n\n.main_content_div .container_div .shopping_div {\n  background: white;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_content_div .container_div .shopping_div .color_box {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 10px;\n  position: relative;\n  background: #DFE7F5;\n}\n\n.main_content_div .container_div .shopping_div .color_box img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.main_content_div .container_div .shopping_div .content_div {\n  padding-left: 16px;\n}\n\n.main_content_div .container_div .shopping_div .content_div .name {\n  font-size: 16px;\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  margin-bottom: 3px;\n  color: #102245;\n}\n\n.main_content_div .container_div .shopping_div .content_div .need {\n  font-size: 12px;\n  color: #102245;\n  font-family: \"Montserrat\";\n}\n\n.main_content_div .container_div .shopping_div .content_div .date {\n  font-size: 12px;\n  color: #77869E;\n  font-family: \"Montserrat\";\n}\n\n.main_content_div .container_div .shopping_div .content_div .ask {\n  font-size: 12px;\n  color: #102245;\n  font-family: \"Montserrat\";\n}\n\n.main_content_div .container_div .shopping_div ion-icon {\n  position: absolute;\n  right: 10px;\n  color: #DDDDDD;\n  font-size: 20px;\n  pointer-events: none;\n}\n\n.circular_div {\n  position: relative;\n  border: 5px solid #ffffff;\n}\n\n.circular_div .img1 {\n  position: relative;\n  right: 2px;\n  bottom: 0;\n  top: 1px;\n  width: 50%;\n}\n\n.chevron {\n  color: #000000 !important;\n}\n\n.mt-6 {\n  margin-top: 6px;\n}\n\n.name .text {\n  font-size: 23px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n.file_upload_inp {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,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IjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG5oNSxcclxucCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3gtd2l0aC1pbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAtMzBweDtcclxufVxyXG5cclxuLnByZXZpb3VzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NTZFRkU7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZlZWRiYWNrLWljb24ge1xyXG4gICAgbWFyZ2luOiAxM3B4IDNweCA2cHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlciBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcclxufVxyXG5cclxuLmltZy1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmJvcmRlci13aGl0ZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItYmx1ZSB7XHJcbiAgICAvLyBib3JkZXI6IDdweCBzb2xpZCAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTEwcHg7XHJcbn1cclxuXHJcblxyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmFkaWVudF9kaXYge1xyXG4gICAgICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC8vICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDYwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmFic19yb3VuZCB7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMSwgNzEsIDIwMywgMC41KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNjBweDtcclxuICAgICAgICAgICAgdG9wOiAtODBweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmxleF9oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXJfZGl2IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTtcclxuXHJcbiAgICAgICAgLndhLWJveCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2EtaWNvbi1iZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREZFN0Y1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndhLWltZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2EtbWwtMTUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53aGl0ZV9ib3gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLnVzZXJfYmFjayB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mbGV4X2RpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ncmV5X2xibCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ncmV5X2JveCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOUY5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGVfbGJsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3BwaW5nX2RpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAgICAgICAgIC5jb2xvcl9ib3gge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0RGRTdGNTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uZWVkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMDIyNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc4NjlFO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFzayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEREREREQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNpcmN1bGFyX2RpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xyXG5cclxuICAgIC5pbWcxIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNoZXZyb24ge1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTYge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWxlX3VwbG9hZF9pbnAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 67364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar ion-no-border>\r\n    <ion-icon size=\"large\" name=\"chevron-back-outline\" (click)=\"previous()\" class=\"mt-6\"></ion-icon>\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"mainbackground\">\r\n  <div class=\"header\" style=\"margin-top: 0px !important;\">\r\n  </div>\r\n  <div class=\"flex\">\r\n    <div class=\"border-blue\">\r\n      <div class=\"border-white circular_div\">\r\n        <div class=\"img-box\">\r\n          <ng-container *ngIf=\"image == null || image == undefined; else showAvatar\">\r\n            <div class=\"profile-image\" [style.background]=\"dataService.getRandomColor()\">\r\n              {{currentUser?.firstName | uppercase | slice:0:1}}{{currentUser?.lastName\r\n                | uppercase | slice:0:1}}\r\n            </div>\r\n          </ng-container>\r\n          <ng-template #showAvatar>\r\n            <img [src]=\"image\" alt=\"profile\" />\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"box-with-img\" (click)=\"openActionSheet()\">\r\n          <input type=\"file\" class=\"file_upload_inp\" accept=\"image/png, image/jpeg\" #file (change)=\"handleProfileUpdate($event)\" />\r\n          <img class=\"img1\" id=\"action-sheets-home-page\" src=\"assets/images/photo-camera-interface.svg\" alt=\"Ionic logo\" />\r\n        </div>\r\n      \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"name text-center\">\r\n    <h5 class=\"text\">{{fullName}}</h5>\r\n    <p>{{email}}</p>\r\n  </div>\r\n\r\n\r\n  <!-- <div class=\"container\">\r\n    <div class=\"body\"> -->\r\n  <div class=\"main_content_div\">\r\n    <div class=\"container_div\">\r\n      <div (click)=\"account()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/settings.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Account Settings</ion-label>\r\n          <ion-label class=\"date\">Update and modify your profile</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <div (click)=\"securityCenter()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/security.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Security Center</ion-label>\r\n          <ion-label class=\"date\">Change your password</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n\r\n      <div (click)=\"goToWallet()\" class=\"shopping_div\">\r\n        <div class=\"color_box\">\r\n          <img class=\"icon\" src=\"assets/icon/wallet.svg\" alt=\"Ionic logo\" />\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Wallet</ion-label>\r\n          <ion-label class=\"date\"><small>Quick access for your saved token/ticket</small></ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n\r\n      <ion-item class=\"wa-box\" lines=\"none\" href=\"https://wa.me/15550896558?text=Hi\">\r\n        <div class=\"wa-icon-bg\">\r\n          <ion-avatar slot=\"start\">\r\n            <img class=\"wa-img\" alt=\"wa\" src=\"assets/icon/whatsapp.svg\" />\r\n          </ion-avatar>\r\n        </div>\r\n        <ion-label class=\"wa-ml-15\">\r\n          <h3 class=\"name\">WhatsApp Banking</h3>\r\n          <p class=\"date\"><small>Connect and Interact</small></p>\r\n        </ion-label>\r\n        <ion-icon name=\"chevron-forward-sharp\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <div (click)=\"goToFeedback()\" class=\"shopping_div my-3\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/feedback.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Feedback</ion-label>\r\n          <ion-label class=\"date\">Suggestion</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <!-- <div (click)=\"notification()\" class=\"shopping_div\">\r\n        <div class=\"color_box\">\r\n          <img class=\"icon\" src=\"assets/icon/notification.PNG\" alt=\"Ionic logo\" />\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Notifications</ion-label>\r\n          <ion-label class=\"date\">Change your notification settings</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div> -->\r\n\r\n      <div (click)=\"goToHelp()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/help.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Help</ion-label>\r\n          <ion-label class=\"date\">Need more help</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <div (click)=\"goToFaq()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/faq.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Faq</ion-label>\r\n          <ion-label class=\"date\">Ask your questions.</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <!-- <div (click)=\"logoutApp()\" class=\"shopping_div\">\r\n        <div class=\"color_box\">\r\n          <img class=\"icon logout-icon\" src=\"assets/icon/logout.svg\" alt=\"Ionic logo\" />\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Logout</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div> -->\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!-- </div> -->\r\n  <!-- </div> -->\r\n</ion-content>\r\n<app-footer></app-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map