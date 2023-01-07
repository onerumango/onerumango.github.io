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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 67364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 62581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ 61957);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonservice.service */ 44045);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);














let ProfilePage = class ProfilePage {
    constructor(api, platform, actionSheetController, sanitizer, cdr, camera, router, photoService, commonService, dataService, alert, toastService) {
        this.api = api;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.camera = camera;
        this.router = router;
        this.photoService = photoService;
        this.commonService = commonService;
        this.dataService = dataService;
        this.alert = alert;
        this.toastService = toastService;
        this.options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.isDevice = this.platform.is('cordova');
        console.log("phoneNumber", this.phoneNumber);
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            console.log('backend resp in home', resp);
            this.formData = resp;
            console.log('form :: ', this.formData);
            this.commonService.sendProfileInfo(resp);
            this.customerId = resp.customerId;
            this.assign(resp.firstName, resp.middleName, resp.lastName, resp.primaryEmailAdress);
            this.getProfilePicture(resp.customerId);
        });
        this.dataService.getAvatarUrl.subscribe(data => {
            if (data != null) {
                this.image = data;
                this.cdr.markForCheck();
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
        //  document.body.style.backgroundColor = "yellow";
        //  document.getElementById("pix").style.mask="yellow"
        // document.getElementById("form").style.backgroundColor="yellow"
        // document.getElementById("name").style.backgroundColor="yellow"
    }
    handleProfileUpdate(event) {
        const file = event.target.files[0];
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
        this.api.uploadProfileImage(formData).subscribe(resp => {
            console.log(resp);
            this.image = resp.fileUrl;
            this.actionSheet.dismiss();
            localStorage.setItem('profilePicInfo', JSON.stringify(resp));
        }, err => console.log('Error: ', err));
    }
    getProfilePicture(customerId) {
        this.api.getProfileDetails(customerId)
            .subscribe((data) => {
            this.profileData = data;
            if (data.profileImage != null) {
                let objectURL = data.profileImage;
                this.image = data.profileImage != "not_available" ? this.sanitizer.bypassSecurityTrustUrl(objectURL) : undefined;
                ;
            }
            else {
                this.image = null;
            }
            this.cdr.markForCheck();
        }, (error) => {
            console.log(error);
        });
    }
    getRandomColor(idx) {
        var col0 = '#0d856b';
        var col1 = '#d66f1b';
        var col2 = '#9f52e7';
        var col3 = '#e9318d';
        var col4 = '#1175a3';
        var col5 = '#e93131';
        var col6 = '#2316d3';
        var col7 = '#f557f5';
        var col8 = '#d6c31b';
        var col9 = '#40d61b';
        if ((idx % 10) == 0)
            return col0;
        if ((idx % 10) == 1)
            return col1;
        if ((idx % 10) == 2)
            return col2;
        if ((idx % 10) == 3)
            return col3;
        if ((idx % 10) == 4)
            return col4;
        if ((idx % 10) == 5)
            return col5;
        if ((idx % 10) == 6)
            return col6;
        if ((idx % 10) == 7)
            return col7;
        if ((idx % 10) == 8)
            return col8;
        if ((idx % 10) == 9)
            return col9;
        return '#d86315';
        // var randomColor = Math.floor(Math.random()*16777215).toString(16);
        // return '#' + randomColor.slice(-6);
        // var randomColor = Math.floor(0x1000000 * Math.random()).toString(16);
        // return '#' + ('000000' + randomColor).slice(-6);
    }
    cancel() {
        this.flag = false;
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
    openActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.actionSheet = yield this.actionSheetController.create({
                // header: 'Albums',
                // subHeader: 'Subtitle',
                animated: false,
                backdropDismiss: false,
                cssClass: 'custom_action_css',
                mode: 'ios',
                buttons: this.isDevice ?
                    [
                        {
                            text: 'Take Photo',
                            // icon: 'share',
                            handler: () => {
                                this.takePicture();
                                console.log('Share clicked');
                            }
                        }, {
                            text: 'Upload Photo',
                            handler: () => {
                                // this.takePhoto(0);
                                this.actionSheet.dismiss();
                                setTimeout(() => {
                                    this.fileInput.nativeElement.click();
                                }, 500);
                            }
                        }, {
                            text: 'Remove Photo',
                            role: 'destructive',
                            // icon: 'trash',
                            handler: () => {
                                this.removeProfileImage();
                                this.image = null;
                                console.log('Delete clicked');
                            }
                        }, {
                            text: 'Cancel',
                            // icon: 'close',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                    :
                        [{
                                text: 'Upload Photo',
                                handler: () => {
                                    // this.takePhoto(0);
                                    this.actionSheet.dismiss();
                                    setTimeout(() => {
                                        this.fileInput.nativeElement.click();
                                    }, 500);
                                }
                            }, {
                                text: 'Remove Photo',
                                role: 'destructive',
                                // icon: 'trash',
                                handler: () => {
                                    this.removeProfileImage();
                                    this.image = null;
                                    console.log('Delete clicked');
                                }
                            }, {
                                text: 'Cancel',
                                // icon: 'close',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Cancel clicked');
                                }
                            }]
            });
            this.actionSheet.present();
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
    fileSelected(event) {
        const file = event.target.files ? event.target.files[0] : '';
        this.selectedFile = file;
        let size = event.target.files[0].size;
        this.toastService.showToast(`profile picture will take time to load since the upload file size is ${this.formatBytes(size, 2)}`);
        this.uploadFile(file);
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
    uploadFile(file) {
        this.showLoader = true;
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
        this.api.uploadProfilePicture(formData)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpResponse) {
                let avatarUrl = event.body.fileUrl;
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
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        console.log(options);
        this.camera.getPicture(options).then((imageData) => {
            this.currentImage = 'data:image/jpeg;base64,' + imageData;
            console.log(this.currentImage);
        }, (err) => {
            // Handle error
            console.log("Camera issue:" + err);
        });
    }
    removeProfileImage() {
        const profilePicInfo = JSON.parse(localStorage.getItem('profilePicInfo'));
        const data = {
            custId: this.profileData.customerId,
            id: profilePicInfo.id,
        };
        this.api.deleteProfileImage(data).subscribe(resp => {
            console.log(resp);
            this.image = null;
        }, err => console.log('Error: ', err));
    }
    takePhoto(sourceType) {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.currentImage = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
    // async logoutApp() {
    //   let alret = await this.alert.create({
    //     subHeader: "Do you want to Sign Out",
    //     buttons: [
    //       {
    //         text: "Yes",
    //         handler: () => {
    //           this.logOut();
    //         }
    //       },
    //       {
    //         text: "No"
    //       }
    //     ],
    //   });
    //   await alret.present();
    // }
    goToFeedback() {
        this.router.navigateByUrl("/feedback", { state: { goBack: true } });
    }
    previous() {
        this.router.navigate(['/dashboard']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__.CommonserviceService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService }
];
ProfilePage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['file',] }]
};
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
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
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);



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
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera }
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

module.exports = "ion-content {\n  --background: #ffffff;\n}\n\n.header {\n  background-color: #456EFE;\n  height: 100px;\n  padding-top: 1px;\n}\n\n.avatar {\n  height: 100%;\n}\n\n.box-with-img {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  float: right;\n  text-align: center;\n  top: -30px;\n}\n\n.previous {\n  margin-right: 20px !important;\n}\n\nion-toolbar {\n  --background: #456EFE;\n  --color: white;\n  --border-color: transparent;\n}\n\n.feedback-icon {\n  margin: 13px 3px 6px 5px;\n  font-size: 25px !important;\n}\n\n.profile-image {\n  font-family: inherit;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  height: 4.5rem;\n  font-size: 35px;\n  width: 100%;\n  height: 100%;\n}\n\n.header h2 {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.img-box {\n  height: 130px;\n  width: 130px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.border-white {\n  border-radius: 50%;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border-radius: 50%;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  margin-top: -110px;\n}\n\n.main_content_div {\n  width: 100%;\n  height: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .gradient_div {\n  height: 270px;\n  background: var(--ion-color-primary);\n  padding: 20px;\n  padding-top: 40px;\n  width: 100%;\n}\n\n.main_content_div .gradient_div .abs_round {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  height: 250px;\n  width: 250px;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 99;\n  right: -60px;\n  top: -80px;\n  z-index: 999;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_content_div .gradient_div .flex_header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n\n.main_content_div .gradient_div .flex_header ion-label {\n  color: white;\n  font-family: \"semi-bold\";\n  font-size: 20px;\n}\n\n.main_content_div .gradient_div .flex_header img {\n  position: absolute;\n  right: 0px;\n  z-index: 999;\n}\n\n.main_content_div .container_div {\n  padding: 20px;\n  margin-top: 0px;\n  position: absolute;\n  width: 100%;\n  z-index: 9999;\n}\n\n.main_content_div .container_div .white_box {\n  background: white;\n  padding: 16px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_content_div .container_div .white_box .user_back {\n  width: 100px;\n  height: 105px;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 5px solid #f3f3f3;\n  border-radius: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.main_content_div .container_div .white_box .flex_div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\n.main_content_div .container_div .white_box .flex_div ion-label {\n  margin-right: 20px;\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .container_div .white_box .grey_lbl {\n  color: #77869E;\n  font-size: 13px;\n  font-family: \"semi-bold\";\n  margin-bottom: 15px;\n}\n\n.main_content_div .container_div .white_box .grey_box {\n  background: #F8F9F9;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.main_content_div .container_div .title_lbl {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"semi-bold\";\n  margin: 20px 0px;\n}\n\n.main_content_div .container_div .shopping_div {\n  background: white;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_content_div .container_div .shopping_div .color_box {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 10px;\n  position: relative;\n  background: #DFE7F5;\n}\n\n.main_content_div .container_div .shopping_div .color_box img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.main_content_div .container_div .shopping_div .content_div {\n  padding-left: 16px;\n}\n\n.main_content_div .container_div .shopping_div .content_div .name {\n  font-size: 16px;\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  margin-bottom: 3px;\n  color: #102245;\n}\n\n.main_content_div .container_div .shopping_div .content_div .need {\n  font-size: 12px;\n  color: #102245;\n  font-family: \"Montserrat\";\n}\n\n.main_content_div .container_div .shopping_div .content_div .date {\n  font-size: 12px;\n  color: #77869E;\n  font-family: \"Montserrat\";\n}\n\n.main_content_div .container_div .shopping_div .content_div .ask {\n  font-size: 12px;\n  color: #102245;\n  font-family: \"Montserrat\";\n}\n\n.main_content_div .container_div .shopping_div ion-icon {\n  position: absolute;\n  right: 10px;\n  color: #DDDDDD;\n  font-size: 20px;\n  pointer-events: none;\n}\n\n.circular_div {\n  position: relative;\n  border: 5px solid #ffffff;\n}\n\n.circular_div .img1 {\n  position: relative;\n  right: 2px;\n  bottom: 0;\n  top: 1px;\n  width: 50%;\n}\n\n.chevron {\n  color: #000000 !important;\n}\n\n.mt-6 {\n  margin-top: 6px;\n}\n\n.name .text {\n  font-size: 23px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n.file_upload_inp {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFoQmhCOztBQWtCZ0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFoQnBCOztBQW9CWTtFQUNJLGtCQUFBO0FBbEJoQjs7QUFvQmdCO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFsQnBCOztBQXFCZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBbkJwQjs7QUFzQmdCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQXBCcEI7O0FBdUJnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFyQnBCOztBQXlCWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUF2QmhCOztBQTZCQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUExQko7O0FBNEJJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBMUJSOztBQThCQTtFQUNJLHlCQUFBO0FBM0JKOztBQThCQTtFQUNJLGVBQUE7QUEzQko7O0FBK0JJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUE1QlI7O0FBZ0NBO0VBQ0ksYUFBQTtBQTdCSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm94LXdpdGgtaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogLTMwcHg7XHJcbn1cclxuXHJcbi5wcmV2aW91cyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDU2RUZFO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mZWVkYmFjay1pY29uIHtcclxuICAgIG1hcmdpbjogMTNweCAzcHggNnB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYm9yZGVyLXdoaXRlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmJvcmRlci1ibHVlIHtcclxuICAgIC8vIGJvcmRlcjogN3B4IHNvbGlkICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xMTBweDtcclxufVxyXG5cclxuXHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyYWRpZW50X2RpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNjBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuYWJzX3JvdW5kIHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSgxLCA3MSwgMjAzLCAwLjUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgcmlnaHQ6IC02MHB4O1xyXG4gICAgICAgICAgICB0b3A6IC04MHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mbGV4X2hlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcl9kaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICAgICAgICAud2hpdGVfYm94IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC51c2VyX2JhY2sge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZmxleF9kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JleV9sYmwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JleV9ib3gge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y4RjlGOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlX2xibCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaG9wcGluZ19kaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgICAgICAgICAuY29sb3JfYm94IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNERkU3RjU7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudF9kaXYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmVlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hc2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjREREREREO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaXJjdWxhcl9kaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcclxuXHJcbiAgICAuaW1nMSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGV2cm9uIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsZV91cGxvYWRfaW5wIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */";

/***/ }),

/***/ 67364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar ion-no-border>\r\n    <ion-icon size=\"large\" name=\"chevron-back-outline\" (click)=\"previous()\" class=\"mt-6\"></ion-icon>\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"mainbackground\">\r\n\r\n  <div class=\"header\" style=\"margin-top: 0px !important;\">\r\n  </div>\r\n  <div class=\"flex\">\r\n    <div class=\"border-blue\">\r\n      <div class=\"border-white circular_div\">\r\n        <div class=\"img-box\">\r\n          <ng-container *ngIf=\"image == null || image == undefined; else showAvatar\">\r\n            <div class=\"profile-image\" [style.background]=\"getRandomColor(i+3)\">\r\n              {{currentUser?.firstName | uppercase | slice:0:1}}{{currentUser?.lastName\r\n                | uppercase | slice:0:1}}\r\n            </div>\r\n          </ng-container>\r\n          <ng-template #showAvatar>\r\n            <img [src]=\"image\" alt=\"profile\" style=\"height: 100%;\" />\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"box-with-img\" (click)=\"openActionSheet()\">\r\n          <input type=\"file\" class=\"file_upload_inp\" accept=\"image/png, image/jpeg\" #file (change)=\"handleProfileUpdate($event)\" />\r\n          <img class=\"img1\" id=\"action-sheets-home-page\" src=\"assets/images/photo-camera-interface.svg\" alt=\"Ionic logo\" />\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"name text-center\">\r\n    <h3 class=\"text\">{{fullName}}</h3>\r\n    <p class=\"text1\">{{email}}</p>\r\n  </div>\r\n\r\n\r\n  <!-- <div class=\"container\">\r\n    <div class=\"body\"> -->\r\n  <div class=\"main_content_div\">\r\n    <div class=\"container_div\">\r\n      <div (click)=\"account()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/settings.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Account Settings</ion-label>\r\n          <ion-label class=\"date\">Update and modify your profile</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <div (click)=\"securityCenter()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/security.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Security Center</ion-label>\r\n          <ion-label class=\"date\">Change your password</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n      <div (click)=\"goToHelp()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/help.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Help</ion-label>\r\n          <ion-label class=\"need\">Need more help</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <div (click)=\"goToWallet()\" class=\"shopping_div\">\r\n        <div class=\"color_box\">\r\n          <img class=\"icon\" src=\"assets/icon/wallet.svg\" alt=\"Ionic logo\" />\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Wallet</ion-label>\r\n          <ion-label class=\"date\">Quick access for your saved token/ticket</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n      <div (click)=\"goToFeedback()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/feedback.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Feedback</ion-label>\r\n          <ion-label class=\"date\">Suggestion</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <!-- <div (click)=\"notification()\" class=\"shopping_div\">\r\n        <div class=\"color_box\">\r\n          <img class=\"icon\" src=\"assets/icon/notification.PNG\" alt=\"Ionic logo\" />\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Notifications</ion-label>\r\n          <ion-label class=\"date\">Change your notification settings</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div> -->\r\n\r\n      <div (click)=\"goToFaq()\" class=\"shopping_div\">\r\n        <div class=\"\">\r\n          <img src=\"assets/icon/faq.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Faq</ion-label>\r\n          <ion-label class=\"ask\">Ask your questions.</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div>\r\n\r\n      <!-- <div (click)=\"logoutApp()\" class=\"shopping_div\">\r\n        <div class=\"color_box\">\r\n          <img class=\"icon logout-icon\" src=\"assets/icon/logout.svg\" alt=\"Ionic logo\" />\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <ion-label class=\"name\">Logout</ion-label>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\" class=\"chevron\"></ion-icon>\r\n      </div> -->\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!-- </div> -->\r\n  <!-- </div> -->\r\n</ion-content>\r\n<app-footer></app-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map