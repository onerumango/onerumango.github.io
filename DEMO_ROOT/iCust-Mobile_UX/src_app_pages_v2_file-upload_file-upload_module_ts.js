"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_file-upload_file-upload_module_ts"],{

/***/ 46645:
/*!********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadPage": () => (/* binding */ FileUploadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _file_upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.page.html?ngResource */ 60004);
/* harmony import */ var _file_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload.page.scss?ngResource */ 90283);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







let FileUploadPage = class FileUploadPage {
    constructor(router, api, cdr) {
        this.router = router;
        this.api = api;
        this.cdr = cdr;
        this.isFile = false;
        this.files = [];
        this.isUploading = false;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['dashboard']);
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
                this.fileUpload(file);
            };
        }
        catch (error) {
            this.filename = null;
            this.base64File = null;
        }
    }
    upload() {
        this.isFile = !this.isFile;
    }
    fileUpload(file) {
        this.uploadingFile = file.name;
        this.isUploading = true;
        this.requestSubscription = this.api.uploadAndProgress(file).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                this.uploadSuccess = true;
                this.isUploading = false;
            }
        });
    }
    deleteFile(item) {
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
    }
    cancel(item) {
        this.requestSubscription.unsubscribe();
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
    }
};
FileUploadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
FileUploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-file-upload',
        template: _file_upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_file_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FileUploadPage);



/***/ }),

/***/ 90283:
/*!***********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".file-content-wrapper {\n  margin-top: 160px !important;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.cat-text {\n  color: #8D8D8D !important;\n  font-size: 12px !important;\n  opacity: 100%;\n  margin-bottom: 8px !important;\n  margin-top: -6px !important;\n}\n\nh6.cat-head {\n  color: #000000;\n  font-size: 20px;\n}\n\n.card {\n  width: auto;\n  height: 85px;\n  padding: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.chq-text {\n  color: #000000;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre-line;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.danger {\n  color: #B20000 !important;\n  opacity: 100% !important;\n}\n\nion-progress-bar {\n  --background: #E8E8E8;\n  --progress-background:linear-gradient(90deg, #051A2D, #004C97);\n  height: 8px !important;\n  border-radius: 16px !important;\n}\n\n.file-card {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  width: auto;\n  height: 110px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.file-card .p-1 {\n  height: 80px;\n}\n\n.file-card .pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.file-card .border-end {\n  border-right: 1pt solid #dee2e6 !important;\n}\n\n.file-card p {\n  opacity: 100% !important;\n  color: #707070 !important;\n  font-size: 13px !important;\n}\n\n.file-card .avatar {\n  height: 60px;\n  width: 60px;\n  background: #EDECEC;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n.file-card .avatar .bg-gradient {\n  background-image: #EDECEC !important;\n}\n\n.file-card .avatar img {\n  margin-top: 16px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw4REFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBRUk7RUFDSSwrQkFBQTtBQUFSOztBQUdJO0VBQ0ksMENBQUE7QUFEUjs7QUFJSTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUZSOztBQUtJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhSOztBQUtRO0VBQ0ksb0NBQUE7QUFIWjs7QUFNUTtFQUNJLGdCQUFBO0FBSlo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQVBKIiwiZmlsZSI6ImZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMTYge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNhdC10ZXh0IHtcclxuICAgIGNvbG9yOiAjOEQ4RDhEICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaDYuY2F0LWhlYWQge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYig5OSA5OSA5OSAvIDIwJSkgMHB4IDJweCA4cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jaHEtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTpwcmUtbGluZTtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNCMjAwMDAgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFOEU4RTg7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIGhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMCAxMDAgMTExIC8gMjAlKSAwcHggN3B4IDI5cHggMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAucC0xIHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBiLTMge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlci1lbmQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB0IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0VERUNFQztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC5iZy1ncmFkaWVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICNFREVDRUMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbi5uZXh0IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIC0tY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 60004:
/*!***********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"!isFile\">\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"isFile\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Upload file</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ng-container *ngIf=\"!isFile\">\r\n    <div class=\"file-content-wrapper text-center\">\r\n      <img src=\"assets/icon/v2/no-file-upload.svg\">\r\n      <h6 class=\"cat-head\">Upload File Here</h6>\r\n      <p class=\"cat-text\">Choose your file from gallery</p>\r\n    </div>\r\n\r\n    <div class=\"file-card my-5 mt-16\">\r\n      <div class=\"row justify-content-between pb-3\">\r\n        <div class=\"col-6 align-self-center text-center border-end mt-16\" (click)=\"upload()\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Front</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 align-self-center text-center mt-16\" (click)=\"upload()\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar bg-gradient\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Back</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"isFile\">\r\n    <div class=\"file-card\">\r\n      <div class=\"row justify-content-between pb-3\">\r\n        <div class=\"col-6 align-self-center text-center border-end mt-16\" (click)=\"fileSelect.click();\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Front</p>\r\n            <input [hidden]=\"true\" type=\"file\" id=\"file-input\" (change)=\"onFileSelect($event, 'front')\"\r\n              accept=\"image/png, image/jpeg\" #fileSelect>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 align-self-center text-center mt-16\" (click)=\"fileSelect.click();\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar bg-gradient\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Back</p>\r\n            <input [hidden]=\"true\" type=\"file\" id=\"file-input\" (change)=\"onFileSelect($event, 'back')\"\r\n              accept=\"image/png, image/jpeg\" #fileSelect>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"my-5\">\r\n      <div class=\"card\" *ngFor=\"let item of files; index as i;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <img alt=\"front\" [src]=\"base64File\" width=\"120\" height=\"51\" />\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row justify-content-between\">\r\n              <div class=\"col-9 align-self-center\">\r\n                <h3 class=\"chq-text\">{{item?.name}}</h3>\r\n              </div>\r\n              <div class=\"col-3 align-self-center text-right\">\r\n                <ion-button fill=\"clear\" *ngIf=\"uploadingFile == item.name && isUploading; else uploaded\" (click)=\"cancel(item.name)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"close\" color=\"medium\"></ion-icon>\r\n                </ion-button>\r\n\r\n                <ng-template #uploaded>\r\n                  <mat-icon class=\"danger\" (click)=\"deleteFile(item.name)\">delete</mat-icon>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n\r\n            <ion-progress-bar [value]=\"percentDone\" *ngIf=\"uploadingFile == item.name && isUploading\"></ion-progress-bar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"isFile\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"goBack()\">Upload\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goBack()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_file-upload_file-upload_module_ts.js.map