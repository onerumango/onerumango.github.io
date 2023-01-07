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
        this.kycVerificationForm = this.fb.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]],
            //   dob: [null, [Validators.required]],
            //   email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            //   password: [null, [Validators.required, Validators.minLength(6)]],
            //   confirmPassword: [null, [Validators.required]],
        });
    }
    ngOnInit() {
        this.kycVerificationForm = this.fb.group({
            prefix: [""],
            // firstName: ['',[Validators.required]],
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
        //   this.kycVerificationForm.controls.communicationAddress.setValue({
        //     addressType: "communication",
        //     address1: address.address1,
        //     address2: address.address2,
        //     city: address.city,
        //     zipCode: address.zipCode,
        //     country: address.country
        // });
    }
    onSubmitTemplateBased() {
        console.log(this.kycVerificationForm);
    }
    setCustVerificationValues(data) {
        this.kycVerificationForm.patchValue(data.customerInfoList[0]);
        if (data.userAddress.length == 2) {
            console.log("if");
            // this.kycVerificationForm.addControl("permanentAddress", this.permanentAddress);
            // this.kycVerificationForm.get("isAddressSame").patchValue(this.array[1].name);
            this.kycVerificationForm.get("communicationAddress").patchValue(data.customerInfoList[0].userAddress[0]);
            // this.kycVerificationForm.get("permanentAddress").patchValue(data.customerInfoList[0].userAddress[1]);
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
        // this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
        //   console.log('backend resp in account', resp);
        //   this.cdr.detectChanges();
        //   this.cdr.markForCheck();
        //   this.formData=resp;
        //   console.log(this.formData);
        //  })
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
    // presentPopover(myEvent) {
    //   let popover = this.popoverCtrl.create();
    //   popover.present({
    //     ev: myEvent
    //   });
    // }
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
        // this.router.navigate(['account']);
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

module.exports = ".new-background-color {\n  --background: #ecf3f2;\n  height: 88.5px;\n  padding-top: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  color: black;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nimg.icon {\n  width: 32px;\n}\n\nion-icon {\n  font-size: x-large;\n  color: black;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.box {\n  border-style: ridge;\n  width: 95%;\n  height: 16pt;\n  background-color: white;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  font-size: 15px;\n  color: #111;\n}\n\n.box4 {\n  background-color: white;\n  font-size: 18px;\n  border: none;\n  margin-top: -2%;\n  font-family: \"Montserrat\" !important;\n  font-weight: bolder;\n  opacity: 100%;\n  color: #111;\n}\n\n.box1 {\n  border: 1px solid #456efe;\n  width: 95%;\n  height: 55px;\n  background-color: white;\n  font-size: 15px;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\n.error {\n  color: red;\n}\n\nion-label {\n  color: #102245;\n  font-size: 16pt;\n  font-family: \"Montserrat\" !important;\n  margin-bottom: 13pt;\n}\n\nion-input {\n  color: black !important;\n  font-size: 16pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  margin-top: 13pt;\n}\n\nion-footer {\n  margin-bottom: 0px;\n}\n\n.name {\n  flex-grow: 1;\n  display: flex;\n  padding: 22px;\n}\n\nion-item-divider {\n  margin: 0 auto;\n  width: 90%;\n  background-color: #fff;\n  border-bottom: 1px solid #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcYWNjb3VudFxcYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFJRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNMRjs7QURPQTtFQUlFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQU1BLGVBQUE7QUNiRjs7QURlQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxVQUFBO0FDWkY7O0FEZUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUNaRjs7QURlQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUVBLHFDQUFBO0VBR0Esb0NBQUE7RUFDQSxnQkFBQTtBQ2ZGOztBRGlCQTtFQUNFLGtCQUFBO0FDZEY7O0FEc0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDbkJGOztBRHFCQTtFQUVFLGNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ25CRiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG4gIGhlaWdodDogODguNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbmltZy5pY29uIHtcclxuICB3aWR0aDogMzJweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uYm94IHtcclxuICAvLyBib3JkZXItd2lkdGg6IDFwdDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcbiAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogMTZwdDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy8gYm9yZGVyLWNvbG9yOiM0NTZFRkU7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgY29sb3I6ICMxMTE7XHJcbn1cclxuXHJcbi5ib3g0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IC0yJTtcclxuICAvLyBtYXJnaW4tbGVmdDogLTMlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBjb2xvcjogIzExMTtcclxufVxyXG4uYm94MSB7XHJcbiAgLy8gYm9yZGVyLXdpZHRoOiAxcHQ7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvLyBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NTZlZmU7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vICBib3JkZXItY29sb3I6O1xyXG4gIC8vIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAvLyBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAvLyBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgZm9udC1zaXplOiAxNnB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEzcHQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB0O1xyXG5cclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTNwdDtcclxufVxyXG5pb24tZm9vdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLy8gaW9uLWJ1dHRvbntcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyB9XHJcblxyXG4ubmFtZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMjJweDtcclxufVxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAvLyBtYXJnaW46MjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbn1cclxuIiwiLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xuICBoZWlnaHQ6IDg4LjVweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pbWcuaWNvbiB7XG4gIHdpZHRoOiAzMnB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5ib3gge1xuICBib3JkZXItc3R5bGU6IHJpZGdlO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDE2cHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4uYm94NCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogLTIlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgb3BhY2l0eTogMTAwJTtcbiAgY29sb3I6ICMxMTE7XG59XG5cbi5ib3gxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ1NmVmZTtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaW5wdXRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMxMDIyNDU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEzcHQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxM3B0O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubmFtZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcbn0iXX0= */";

/***/ }),

/***/ 96216:
/*!************************************************************!*\
  !*** ./src/app/pages/account/account.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\" style=\"margin-left: 2%; font-weight: bold\"\r\n      >Account Settings</span\r\n    >\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openActionSheet()\">\r\n        <!-- <ion-icon slot=\"icon-only\" md=\"ellipsis-vertical\"></ion-icon>\r\n        <ion-icon name=\"more\"></ion-icon> -->\r\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!flag\">\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\home.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: 100%; margin-left: 10pt; padding-right: 0\">\r\n        <div\r\n          style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          Account Number\r\n        </div>\r\n        <div\r\n          style=\"\r\n            font-size: 16px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #111;\r\n          \"\r\n        >\r\n          <ion-select\r\n            [compareWith]=\"compareWith\"\r\n            class=\"box\"\r\n            disabled\r\n            ngDefaultControl\r\n            [(ngModel)]=\"option.defaultId\"\r\n            #defaultId\r\n            style=\"\r\n              font-size: 18px !important;\r\n              border-bottom: none;\r\n              opacity: 100%;\r\n              padding-left: 0;\r\n            \"\r\n          >\r\n            <ion-select-option *ngFor=\"let user of users\" [value]=\"user\"\r\n              >{{user}}</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\blueCamera.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div\r\n          style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          Account Holder's Name\r\n        </div>\r\n        <div\r\n          style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          {{formData?.firstName}} {{formData?.middleName}}\r\n          {{formData?.lastName}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\location.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div\r\n          style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          Communication Address\r\n        </div>\r\n        <div class=\"box4\">{{option.address}}</div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\phoneNumber.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div\r\n          style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          Mobile Number\r\n        </div>\r\n        <div\r\n          style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          {{formData?.phoneNumber}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\email.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div\r\n          style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          Email Id\r\n        </div>\r\n        <div\r\n          style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          {{formData?.primaryEmailAdress}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n  <ion-item-divider>\r\n    <img class=\"icon\" src=\"assets\\icon\\pan.PNG\" alt=\"Ionic logo\" />\r\n    <div class=\"name\">\r\n      <div style=\"width: fit-content; margin-left: 10pt\">\r\n        <div\r\n          style=\"\r\n            font-size: 16px;\r\n            opacity: 90%;\r\n            padding-bottom: 7pt;\r\n            font-family: 'Montserrat' !important;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          PAN Number\r\n        </div>\r\n        <!-- <div  *ngFor=\"let id of formData?.custIdProofs;let i=index\"> -->\r\n        <div\r\n          style=\"\r\n            font-size: 18px;\r\n            font-family: 'Montserrat' !important;\r\n            font-weight: bolder;\r\n            opacity: 100%;\r\n            color: #0b1c3f;\r\n          \"\r\n        >\r\n          {{formData?.panNumber}}\r\n        </div>\r\n        <!-- </div> -->\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n  </ion-item-divider>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\" style=\"margin-left: 2%; font-weight: bold\"\r\n      >Account Settings</span\r\n    >\r\n    <!-- <ion-buttons slot=\"end\">\r\n        <ion-button   (click)=\"openActionSheet()\">\r\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n      \r\n        \r\n        </ion-button>\r\n      </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"flag\">\r\n  <form [formGroup]=\"kycVerificationForm\" (ngSubmit)=\"onSubmitTemplateBased()\">\r\n    <!-- <ion-item-divider> -->\r\n\r\n    <!-- <img class=\"icon\" src=\"assets\\icon\\home.PNG\" alt=\"Ionic logo\"> -->\r\n\r\n    <!-- <div >\r\n            <div style=\"font-size:16pt;opacity:70%;padding-bottom: 7pt;margin-top:20px;margin-left:10px;font-family:'Montserrat'!important;color:#0b1c3f;\">Account Number</div>\r\n            <ion-item class=\"box\">\r\n             <ion-label position=\"floating\"></ion-label>\r\n             \r\n              <ion-input type=\"downArrow\"></ion-input>\r\n              <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\">\r\n            </ion-item>\r\n            \r\n          <div style=\"font-size:12pt;font-family:'Montserrat'!important;font-weight:bolder;opacity:100%;color:#0b1c3f;\">109 0000 889897 87123.</div> -->\r\n    <!-- </div> -->\r\n    <div class=\"inputCard\" readonly>\r\n      <ion-label\r\n        style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \"\r\n        >Account Number</ion-label\r\n      >\r\n      <ion-select\r\n        [compareWith]=\"compareWith\"\r\n        class=\"box\"\r\n        ngDefaultControl\r\n        [(ngModel)]=\"option.defaultId\"\r\n        #defaultId\r\n        [ngModelOptions]=\"{standalone: true}\"\r\n        style=\"font-weight: bolder\"\r\n      >\r\n        <ion-select-option *ngFor=\"let user of users\" [value]=\"user\"\r\n          >{{user}}</ion-select-option\r\n        >\r\n      </ion-select>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label\r\n        style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \"\r\n        >Account Holder's Name</ion-label\r\n      >\r\n      <ion-input class=\"box\" formControlName=\"firstName\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n        <!-- {{formData?.firstName}} {{formData?.lastName}} -->\r\n      </ion-input>\r\n      <div\r\n        class=\"error\"\r\n        *ngIf=\"kycVerificationForm.get('firstName').invalid || kycVerificationForm.get('firstName').touched\"\r\n      >\r\n        Enter Account Holder Name.\r\n      </div>\r\n      <!-- <small *ngIf=\"kycVerificationForm.get('firstName').invalid && (kycVerificationForm.get('firstName').dirty ||kycVerificationForm.get('firstName').touched )\">\r\n                <small *ngIf=\"(kycVerificationForm.get('firstName')).errors?.required\">Name is required</small>\r\n             -->\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label\r\n        style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \"\r\n        >Communication Address</ion-label\r\n      >\r\n      <!-- <ion-textarea style=\"font-family: 'Montserrat' !important;\" class=\"box1\" \r\n                [(ngModel)]=option.address [ngModelOptions]=\"{standalone: true}\" value=\"option.address\">\r\n                 \r\n                </ion-textarea> -->\r\n      <ion-input\r\n        class=\"box\"\r\n        formArrayName=\"communicationAddress\"\r\n        [value]=\"option.address\"\r\n      >\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div class=\"inputCard\">\r\n      <ion-label\r\n        style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \"\r\n        >Mobile Number</ion-label\r\n      >\r\n      <ion-input class=\"box1\" maxlength=\"10\" formControlName=\"phoneNumber\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n      </ion-input>\r\n      <div\r\n        class=\"error\"\r\n        *ngIf=\"kycVerificationForm.get('phoneNumber').hasError('pattern')\"\r\n      >\r\n        Phone number must be 10 digits.\r\n      </div>\r\n      <div\r\n        class=\"error\"\r\n        *ngIf=\"kycVerificationForm.get('phoneNumber').hasError('required')\"\r\n      >\r\n        phone number is Required!\r\n      </div>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label\r\n        style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \"\r\n        >Email Id</ion-label\r\n      >\r\n      <ion-input class=\"box1\" formControlName=\"primaryEmailAdress\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n        <!-- {{formData?.primaryEmailAdress}} -->\r\n      </ion-input>\r\n      <div\r\n        class=\"error\"\r\n        *ngIf=\"kycVerificationForm.get('primaryEmailAdress').hasError('pattern')\"\r\n      >\r\n        Please enter valid email address!\r\n      </div>\r\n      <div\r\n        class=\"error\"\r\n        *ngIf=\"kycVerificationForm.get('primaryEmailAdress').hasError('required')\"\r\n      >\r\n        email address is Required!\r\n      </div>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label\r\n        style=\"\r\n          font-size: 16px;\r\n          opacity: 90%;\r\n          padding-bottom: 7pt;\r\n          font-family: 'Montserrat' !important;\r\n          color: #0b1c3f;\r\n        \"\r\n        >PAN Number</ion-label\r\n      >\r\n      <ion-input class=\"box1\" formControlName=\"panNumber\">\r\n        <!-- <ion-select-option></ion-select-option> -->\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-button\r\n        expand=\"block\"\r\n        shape=\"round\"\r\n        style=\"\r\n          width: 95%;\r\n          padding-left: 5%;\r\n          margin-top: 28px;\r\n          height: 50px;\r\n          margin-bottom: 28px;\r\n        \"\r\n        [disabled]=\"kycVerificationForm.invalid\"\r\n        (click)=\"saveAccount(kycVerificationForm.value)\"\r\n        >Save Changes</ion-button\r\n      >\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map