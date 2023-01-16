"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 67173:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 29610);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 36868:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 67173);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 29610);







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 29610:
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage),
/* harmony export */   "Option": () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 96216);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 77110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commonservice.service */ 44045);









let AccountPage = class AccountPage {
    constructor(popoverCtrl, toastCtrl, router, fb, actionSheetController, commonService, api, cdr) {
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.fb = fb;
        this.actionSheetController = actionSheetController;
        this.commonService = commonService;
        this.api = api;
        this.cdr = cdr;
        this.option = new Option();
    }
    ngOnInit() {
        this.kycVerificationForm = this.fb.group({
            prefix: [""],
            primaryEmailAdress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            firstName: [""],
            lastName: [""],
            middleName: [""],
            customer_id: [""],
            panNumber: [""],
            accountId: [""],
            communicationAddress: this.fb.group({
                addressType: ["communication"],
                address1: [""],
                address2: [""],
                city: [""],
                zipCode: [""],
                country: [""],
            }),
        });
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.getAccDetails();
    }
    getAccDetails() {
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            console.log('backend resp in account', resp);
            console.log(resp.userAddress[0]);
            this.assignAddress(resp.userAddress[0], resp);
            this.address = resp.userAddress[0];
            this.cdr.detectChanges();
            this.cdr.markForCheck();
            this.savingAccountFun(resp.custAccount);
            this.formData = resp;
            console.log(this.formData);
        });
    }
    assignAddress(address, form) {
        console.log(form);
        this.communicationAdress = address.address1 + ", " + address.address2 + ", " + address.city + ", " + address.zipCode + " ," + address.country;
        if (form.middleName != null) {
            this.holderName = form.firstName + " " + form.middleName + " " + form.lastName;
        }
        else {
            this.holderName = form.firstName + " " + form.lastName;
        }
        this.option.address = this.communicationAdress;
        this.kycVerificationForm.get('primaryEmailAdress').setValue(form.primaryEmailAdress);
        this.kycVerificationForm.get('phoneNumber').setValue(form.phoneNumber);
        this.kycVerificationForm.get('firstName').setValue(this.holderName);
        this.kycVerificationForm.get('panNumber').setValue(form.panNumber);
        this.kycVerificationForm.get('communicationAddress').setValue({
            addressType: "communication",
            address1: address.address1,
            address2: address.address2,
            city: address.city,
            zipCode: address.zipCode,
            country: address.country
        });
    }
    onSubmitTemplateBased() {
        console.log(this.kycVerificationForm);
    }
    setCustVerificationValues(data) {
        this.kycVerificationForm.patchValue(data.customerInfoList[0]);
        if (data.userAddress.length == 2) {
            this.kycVerificationForm.get("communicationAddress").patchValue(data.customerInfoList[0].userAddress[0]);
        }
        else {
            console.log("Else");
            this.kycVerificationForm.get("communicationAddress").patchValue(data.customerInfoList[0].userAddress[0]);
        }
    }
    savingAccountFun(filteredResponseSavingAccount) {
        this.users = filteredResponseSavingAccount.map(a => a.accountId);
        this.option.defaultId = this.users ? this.users[0] : null;
        console.log(this.option.defaultId);
        // this.formData.controls.accountNumber.setValue(defaultId);
    }
    saveAccount(data) {
        let userAddress = [];
        userAddress.push(this.kycVerificationForm.value.communicationAddress);
        let payload = {
            // prefix: this.kycVerificationForm.value.prefix,
            primaryEmailAdress: this.kycVerificationForm.value.primaryEmailAdress,
            phoneNumber: this.kycVerificationForm.value.phoneNumber,
            firstName: this.kycVerificationForm.value.firstName,
            // firstName: this.formData.firstName,
            lastName: this.kycVerificationForm.value.lastName,
            // middleName: this.kycVerificationForm.value.middleName,
            customer_id: this.kycVerificationForm.value.customer_id,
            // nationality: this.kycVerificationForm.value.nationality,
            userAddress: userAddress,
        };
        console.log(payload);
        console.log(data);
        this.api.saveAccount(data).subscribe((resp) => {
            console.log('backend resp in account', resp);
            this.formData = resp;
            this.cdr.detectChanges();
            this.cdr.markForCheck();
            if (resp) {
                this.previous1();
                this.openToast();
            }
        });
    }
    openActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Albums',
                // subHeader: 'Subtitle',
                animated: false,
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: [{
                        text: 'Edit',
                        // icon: 'share',
                        handler: () => {
                            this.edit();
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Share  Account Details',
                        // icon: 'arrow-dropright-circle',
                        handler: () => {
                            console.log('Play clicked');
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
            yield actionSheet.present();
        });
    }
    edit() {
        this.flag = true;
    }
    test() {
        console.log("eneter inside save method");
    }
    previous() {
        this.router.navigate(['/profile']);
    }
    previous1() {
        this.flag = false;
    }
    openToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Saved Successfully',
                duration: 5000,
                position: 'middle'
            });
            toast.present();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__.CommonserviceService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-account',
        template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);

class Option {
}


/***/ }),

/***/ 77110:
/*!************************************************************!*\
  !*** ./src/app/pages/account/account.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  --background: #ecf3f2;\n  height: 88.5px;\n  padding-top: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  color: black;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nimg.icon {\n  width: 32px;\n}\n\n::ng-deep .wider-popover-account {\n  --width: 100%;\n  --max-width: 100%;\n  --offset-x: -12px;\n}\n\nion-icon {\n  font-size: x-large;\n  color: black;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.box {\n  border-style: ridge;\n  width: 95%;\n  height: 16pt;\n  background-color: white;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  font-size: 15px;\n  color: #111;\n}\n\n.box4 {\n  background-color: white;\n  font-size: 18px;\n  border: none;\n  margin-top: -2%;\n  font-family: \"Montserrat\" !important;\n  font-weight: bolder;\n  opacity: 100%;\n  color: #111;\n}\n\n.box1 {\n  border: 1px solid #456efe;\n  width: 95%;\n  height: 55px;\n  background-color: white;\n  font-size: 15px;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\n.error {\n  color: red;\n}\n\nion-label {\n  color: #102245;\n  font-size: 16pt;\n  font-family: \"Montserrat\" !important;\n  margin-bottom: 13pt;\n}\n\nion-input {\n  color: black !important;\n  font-size: 16pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  margin-top: 13pt;\n}\n\nion-footer {\n  margin-bottom: 0px;\n}\n\n.name {\n  flex-grow: 1;\n  display: flex;\n  padding: 22px;\n}\n\nion-item-divider {\n  margin: 0 auto;\n  width: 90%;\n  background-color: #fff;\n  border-bottom: 1px solid #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUlFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0FBUEY7O0FBVUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVdBO0VBSUUseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBTUEsZUFBQTtBQWpCRjs7QUFvQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQ0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxVQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFFQSxxQ0FBQTtFQUdBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usa0JBQUE7QUFyQkY7O0FBOEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBM0JGOztBQThCQTtFQUVFLGNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQTVCRiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG4gIGhlaWdodDogODguNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pbWcuaWNvbiB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAud2lkZXItcG9wb3Zlci1hY2NvdW50IHtcclxuICAtLXdpZHRoOiAxMDAlO1xyXG4gIC0tbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC0tb2Zmc2V0LXg6IC0xMnB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgLy8gYm9yZGVyLXdpZHRoOiAxcHQ7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvLyBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDE2cHQ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vIGJvcmRlci1jb2xvcjojNDU2RUZFO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAvLyBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIGNvbG9yOiAjMTExO1xyXG59XHJcblxyXG4uYm94NCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAtMiU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IC0zJTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgY29sb3I6ICMxMTE7XHJcbn1cclxuXHJcbi5ib3gxIHtcclxuICAvLyBib3JkZXItd2lkdGg6IDFwdDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ1NmVmZTtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogNTVweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy8gIGJvcmRlci1jb2xvcjo7XHJcbiAgLy8gYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIC8vIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIC8vIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gbWFyZ2luLWxlZnQ6MTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B0O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxuXHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDEzcHQ7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLy8gaW9uLWJ1dHRvbntcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyB9XHJcblxyXG4ubmFtZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMjJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgLy8gbWFyZ2luOjIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xyXG59Il19 */";

/***/ }),

/***/ 96216:
/*!************************************************************!*\
  !*** ./src/app/pages/account/account.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"previous()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header_title\">Account Settings</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openActionSheet()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!flag\">\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\home.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: 100%; margin-left: 10pt; padding-right: 0\">\r\n        <div style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \">\r\n          Account Number\r\n        </div>\r\n        <div style=\"\r\n            font-size: 16px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #111;\r\n          \">\r\n          <ion-select class=\"box\" disabled [interfaceOptions]=\"{'cssClass': 'wider-popover-account'}\" ngDefaultControl\r\n            [(ngModel)]=\"option.defaultId\" #defaultId style=\"\r\n              font-size: 18px !important;\r\n              border-bottom: none;\r\n              opacity: 100%;\r\n              padding-left: 0;\r\n            \">\r\n            <ion-select-option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\blueCamera.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \">\r\n          Account Holder's Name\r\n        </div>\r\n        <div style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \">\r\n          {{formData?.firstName}} {{formData?.middleName}}\r\n          {{formData?.lastName}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\location.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \">\r\n          Communication Address\r\n        </div>\r\n        <div class=\"box4\">{{option.address}}</div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\phoneNumber.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \">\r\n          Mobile Number\r\n        </div>\r\n        <div style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \">\r\n          {{formData?.phoneNumber}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\email.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \">\r\n          Email Id\r\n        </div>\r\n        <div style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \">\r\n          {{formData?.primaryEmailAdress}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\pan.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \">\r\n          PAN Number\r\n        </div>\r\n        <!-- <div  *ngFor=\"let id of formData?.custIdProofs;let i=index\"> -->\r\n        <div style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \">\r\n          {{formData?.panNumber}}\r\n        </div>\r\n        <!-- </div> -->\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"previous1()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header_title\">Account Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"flag\">\r\n  <form [formGroup]=\"kycVerificationForm\" (ngSubmit)=\"onSubmitTemplateBased()\">\r\n    <div class=\"inputCard\" readonly>\r\n      <ion-label style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \">Account Number</ion-label>\r\n      <ion-select class=\"box\" interface=\"popover\" ngDefaultControl [(ngModel)]=\"option.defaultId\" #defaultId\r\n        [interfaceOptions]=\"{'cssClass': 'wider-popover-account'}\" [ngModelOptions]=\"{standalone: true}\"\r\n        style=\"font-weight: bolder\">\r\n        <ion-select-option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \">Account Holder's Name</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"firstName\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n        <!-- {{formData?.firstName}} {{formData?.lastName}} -->\r\n      </ion-input>\r\n      <div class=\"error\"\r\n        *ngIf=\"kycVerificationForm.get('firstName').invalid || kycVerificationForm.get('firstName').touched\">\r\n        Enter Account Holder Name.\r\n      </div>\r\n      <!-- <small *ngIf=\"kycVerificationForm.get('firstName').invalid && (kycVerificationForm.get('firstName').dirty ||kycVerificationForm.get('firstName').touched )\">\r\n                <small *ngIf=\"(kycVerificationForm.get('firstName')).errors?.required\">Name is required</small>\r\n             -->\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \">Communication Address</ion-label>\r\n      <!-- <ion-textarea style=\"font-family: 'Montserrat' !important;\" class=\"box1\" \r\n                [(ngModel)]=option.address [ngModelOptions]=\"{standalone: true}\" value=\"option.address\">\r\n                 \r\n                </ion-textarea> -->\r\n      <ion-input class=\"box\" formArrayName=\"communicationAddress\" [value]=\"option.address\">\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div class=\"inputCard\">\r\n      <ion-label style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \">Mobile Number</ion-label>\r\n      <ion-input class=\"box1\" maxlength=\"10\" formControlName=\"phoneNumber\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n      </ion-input>\r\n      <div class=\"error\" *ngIf=\"kycVerificationForm.get('phoneNumber').hasError('pattern')\">\r\n        Phone number must be 10 digits.\r\n      </div>\r\n      <div class=\"error\" *ngIf=\"kycVerificationForm.get('phoneNumber').hasError('required')\">\r\n        phone number is Required!\r\n      </div>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \">Email Id</ion-label>\r\n      <ion-input class=\"box1\" formControlName=\"primaryEmailAdress\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n        <!-- {{formData?.primaryEmailAdress}} -->\r\n      </ion-input>\r\n      <div class=\"error\" *ngIf=\"kycVerificationForm.get('primaryEmailAdress').hasError('pattern')\">\r\n        Please enter valid email address!\r\n      </div>\r\n      <div class=\"error\" *ngIf=\"kycVerificationForm.get('primaryEmailAdress').hasError('required')\">\r\n        email address is Required!\r\n      </div>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \">PAN Number</ion-label>\r\n      <ion-input class=\"box1\" formControlName=\"panNumber\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-button expand=\"block\" shape=\"round\" style=\"\r\n          width: 95%;\r\n          padding-left: 5%;\r\n          margin-top: 28px;\r\n          height: 50px;\r\n          margin-bottom: 28px;\r\n        \" [disabled]=\"kycVerificationForm.invalid\" (click)=\"saveAccount(kycVerificationForm.value)\">Save Changes\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map