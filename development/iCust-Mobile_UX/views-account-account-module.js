(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-account-account-module"],{

/***/ "7yYI":
/*!***********************************************!*\
  !*** ./src/app/views/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage, Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "ASjK");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "OqOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/commonservice.service */ "wss1");









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
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]],
        });
    }
    ngOnInit() {
        this.kycVerificationForm = this.fb.group({
            prefix: [""],
            // firstName: ['',[Validators.required]],
            primaryEmailAdress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
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
        this.phoneNumber = localStorage.getItem('PhoneNumLogin');
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        this.router.navigate(['/tabs/profile']);
    }
    previous1() {
        // this.router.navigate(['account']);
        this.flag = false;
    }
    openToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Saved Successfully',
                duration: 5000,
            });
            toast.present();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_8__["CommonserviceService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);

class Option {
}


/***/ }),

/***/ "ASjK":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/account/account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar  class=\"new-background-color\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\" style=\"margin-left: 2%;\">Account Settings</span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button   (click)=\"openActionSheet()\">\r\n        <!-- <ion-icon slot=\"icon-only\" md=\"ellipsis-vertical\"></ion-icon>\r\n        <ion-icon name=\"more\"></ion-icon> -->\r\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n      \r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!flag\">\r\n \r\n\r\n  <ion-item-divider>\r\n   \r\n      <img class=\"icon\" src=\"assets\\icon\\home.PNG\" alt=\"Ionic logo\">\r\n      <div class=\"name\">\r\n        <div style=\"width:fit-content;margin-left: 10pt;\">\r\n          <div style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Account Number</div>\r\n          <div style=\"font-size:16px;font-family:'Montserrat'!important;font-weight:bolder;opacity:100%;color:#102245;\">\r\n       \r\n            <ion-select\r\n            [compareWith]=\"compareWith\"\r\n            class=\"box\" disabled\r\n            ngDefaultControl  [(ngModel)]=\"option.defaultId\" #defaultId \r\n          >\r\n          <ion-select-option *ngFor=\"let user of users\"  [value]=\"user\"\r\n          >{{user}}</ion-select-option>\r\n          </ion-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n     \r\n\r\n\r\n\r\n  </ion-item-divider>\r\n\r\n  <ion-item-divider>\r\n   \r\n    <img class=\"icon\" src=\"assets\\icon\\blueCamera.PNG\" alt=\"Ionic logo\">\r\n    <div class=\"name\">\r\n      <div style=\"width:fit-content;margin-left: 10pt;\">\r\n        <div style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Account Holder's Name</div>\r\n        <div style=\"font-size:16px;font-family:'Montserrat'!important;font-weight:bolder;opacity:100%;color:#102245;\">\r\n          {{formData?.firstName}} {{formData?.middleName}} {{formData?.lastName}}</div>\r\n      </div>\r\n    </div>\r\n    <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n   \r\n\r\n\r\n\r\n</ion-item-divider>\r\n<ion-item-divider>\r\n   \r\n  <img class=\"icon\" src=\"assets\\icon\\location.PNG\" alt=\"Ionic logo\">\r\n  <div class=\"name\">\r\n    <div style=\"width:fit-content;margin-left: 10pt;\" >\r\n      <div style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">\r\n        Communication Address </div>\r\n      <ion-textarea  class=\"box4\"  [(ngModel)]=option.address [ngModelOptions]=\"{standalone: true}\">\r\n      \r\n        </ion-textarea>\r\n    </div>\r\n  </div>\r\n  <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n \r\n\r\n\r\n\r\n</ion-item-divider>\r\n<ion-item-divider>\r\n   \r\n  <img class=\"icon\" src=\"assets\\icon\\phoneNumber.PNG\" alt=\"Ionic logo\">\r\n  <div class=\"name\">\r\n    <div style=\"width:fit-content;margin-left: 10pt;\">\r\n      <div style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">\r\n        Mobile Number</div>\r\n      <div style=\"font-size:16px;font-family:'Montserrat'!important;font-weight:bolder;opacity:100%;color:#102245;\">\r\n        {{formData?.phoneNumber}}</div>\r\n    </div>\r\n  </div>\r\n  <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n \r\n\r\n\r\n\r\n</ion-item-divider>\r\n<ion-item-divider>\r\n   \r\n  <img class=\"icon\" src=\"assets\\icon\\email.PNG\" alt=\"Ionic logo\">\r\n  <div class=\"name\">\r\n    <div style=\"width:fit-content;margin-left: 10pt;\">\r\n      <div style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Email Id</div>\r\n      <div style=\"font-size:16px;font-family:'Montserrat'!important;font-weight:bolder;opacity:100%;color:#102245;\">\r\n        {{formData?.primaryEmailAdress}}</div>\r\n    </div>\r\n  </div>\r\n  <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n \r\n\r\n\r\n\r\n</ion-item-divider>\r\n<ion-item-divider>\r\n   \r\n  <img class=\"icon\" src=\"assets\\icon\\pan.PNG\" alt=\"Ionic logo\">\r\n  <div class=\"name\">\r\n    <div style=\"width:fit-content;margin-left: 10pt;\" >\r\n      <div style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">PAN Number</div>\r\n      <!-- <div  *ngFor=\"let id of formData?.custIdProofs;let i=index\"> -->\r\n      <div style=\"font-size:12px;font-family:'Montserrat'!important;font-weight:bolder;opacity:100%;color:#102245;\">\r\n        {{formData?.panNumber}}</div>\r\n      <!-- </div> -->\r\n    </div>\r\n  </div>\r\n  <!-- <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\"> -->\r\n \r\n\r\n\r\n\r\n</ion-item-divider>\r\n  </ion-content>\r\n\r\n\r\n\r\n  <ion-header *ngIf=\"flag\">\r\n    <ion-toolbar  class=\"new-background-color\">\r\n      <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n      <span class=\"text\" style=\"margin-left: 2%;\">Account Settings</span>\r\n      <!-- <ion-buttons slot=\"end\">\r\n        <ion-button   (click)=\"openActionSheet()\">\r\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n      \r\n        \r\n        </ion-button>\r\n      </ion-buttons> -->\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content *ngIf=\"flag\">\r\n   <form [formGroup]=\"kycVerificationForm\" (ngSubmit)=\"onSubmitTemplateBased()\">\r\n  \r\n    <!-- <ion-item-divider> -->\r\n     \r\n        <!-- <img class=\"icon\" src=\"assets\\icon\\home.PNG\" alt=\"Ionic logo\"> -->\r\n        \r\n          <!-- <div >\r\n            <div style=\"font-size:16pt;opacity:70%;padding-bottom: 7pt;margin-top:20px;margin-left:10px;font-family:'Montserrat'!important;color:#102245;\">Account Number</div>\r\n            <ion-item class=\"box\">\r\n             <ion-label position=\"floating\"></ion-label>\r\n             \r\n              <ion-input type=\"downArrow\"></ion-input>\r\n              <img class=\"button\" src=\"assets\\icon\\downArrow.PNG\" alt=\"Ionic logo\">\r\n            </ion-item>\r\n            \r\n          <div style=\"font-size:12pt;font-family:'Montserrat'!important;font-weight:bolder;opacity:100%;color:#102245;\">109 0000 889897 87123.</div> -->\r\n          <!-- </div> -->\r\n          <div class=\"inputCard\" readonly>\r\n            <ion-label style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Account Number</ion-label>\r\n            <ion-select\r\n            [compareWith]=\"compareWith\"\r\n            class=\"box\"\r\n            ngDefaultControl  [(ngModel)]=\"option.defaultId\" #defaultId [ngModelOptions]=\"{standalone: true}\"\r\n          >\r\n          <ion-select-option *ngFor=\"let user of users\"  [value]=\"user\"\r\n          >{{user}}</ion-select-option>\r\n          </ion-select>\r\n          \r\n            </div>\r\n            <div class=\"inputCard\">\r\n              <ion-label style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Account Holder's Name</ion-label>\r\n              <ion-input  class=\"box\" formControlName=\"firstName\">\r\n              <!-- <ion-select-option></ion-select-option> -->\r\n              <!-- {{formData?.firstName}} {{formData?.lastName}} -->\r\n              </ion-input>\r\n              <div class=\"error\" *ngIf=\"kycVerificationForm.get('firstName').invalid || kycVerificationForm.get('firstName').touched\">\r\n                Enter Account Holder Name.\r\n              </div>\r\n              <!-- <small *ngIf=\"kycVerificationForm.get('firstName').invalid && (kycVerificationForm.get('firstName').dirty ||kycVerificationForm.get('firstName').touched )\">\r\n                <small *ngIf=\"(kycVerificationForm.get('firstName')).errors?.required\">Name is required</small>\r\n             -->\r\n            </div>\r\n              <div class=\"inputCard\">\r\n                <ion-label style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Communication Address</ion-label>\r\n                <!-- <ion-textarea style=\"font-family: 'Montserrat' !important;\" class=\"box1\" \r\n                [(ngModel)]=option.address [ngModelOptions]=\"{standalone: true}\" value=\"option.address\">\r\n                 \r\n                </ion-textarea> -->\r\n                <ion-input  class=\"box\" formArrayName=\"communicationAddress\" [value]=option.address>\r\n                  </ion-input>\r\n               \r\n                \r\n              \r\n                </div>\r\n       \r\n                <div class=\"inputCard\">\r\n                  <ion-label style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Mobile Number</ion-label>\r\n                  <ion-input  class=\"box1\" maxlength=\"10\" formControlName=\"phoneNumber\">\r\n                  <!-- <ion-select-option></ion-select-option> -->\r\n             \r\n                  </ion-input>\r\n                  <div class=\"error\" *ngIf=\"kycVerificationForm.get('phoneNumber').hasError('pattern')\">\r\n                    Phone number must be 10 digits.\r\n                  </div>\r\n                  <div class=\"error\" *ngIf=\"kycVerificationForm.get('phoneNumber').hasError('required')\">\r\n                    phone number is Required!\r\n                  </div>\r\n                \r\n                  </div>\r\n                  <div class=\"inputCard\">\r\n                    <ion-label style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">Email Id</ion-label>\r\n                    <ion-input  class=\"box1\" formControlName=\"primaryEmailAdress\">\r\n                    <!-- <ion-select-option></ion-select-option> -->\r\n                    <!-- {{formData?.primaryEmailAdress}} -->\r\n                    </ion-input>\r\n                    <div class=\"error\" *ngIf=\"kycVerificationForm.get('primaryEmailAdress').hasError('pattern')\">\r\n                      Please enter valid email address!\r\n                    </div>\r\n                    <div class=\"error\" *ngIf=\"kycVerificationForm.get('primaryEmailAdress').hasError('required')\">\r\n                      email address is Required!\r\n                    </div>\r\n                  \r\n                    </div>\r\n                    <div class=\"inputCard\">\r\n                      <ion-label style=\"font-size:16px;opacity:40%;padding-bottom: 7pt;font-family:'Montserrat'!important;color:#102245;\">PAN Number</ion-label>\r\n                      <ion-input  class=\"box1\" formControlName=\"panNumber\">\r\n                      <!-- <ion-select-option></ion-select-option> -->\r\n                      </ion-input>\r\n                    \r\n                      </div>\r\n                      \r\n             \r\n         \r\n  \r\n                      <div>\r\n                        <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;margin-top:28px;\r\n                        height: 50px;margin-bottom:28px;\" [disabled]=\"kycVerificationForm.invalid\" (click)=\"saveAccount(kycVerificationForm.value)\"\r\n                        >Save Changes</ion-button>\r\n                        </div>\r\n  \r\n                      </form>\r\n    </ion-content>");

/***/ }),

/***/ "OqOQ":
/*!*************************************************!*\
  !*** ./src/app/views/account/account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background:#ECF3F2;\n  height: 88.5px;\n  padding-top: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  color: black;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: black;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.box {\n  border-style: ridge;\n  width: 95%;\n  height: 16pt;\n  background-color: white;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  font-size: 15px;\n}\n\n.box4 {\n  background-color: white;\n  font-size: 16px;\n  border: none;\n  margin-top: -2%;\n  margin-left: -3%;\n  font-family: \"Montserrat\" !important;\n  font-weight: bolder;\n  opacity: 100%;\n  color: #102245;\n}\n\n.box1 {\n  border: 1px solid #456EFE;\n  width: 95%;\n  height: 55px;\n  background-color: white;\n  font-size: 15px;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\n.error {\n  color: red;\n}\n\nion-label {\n  color: #102245;\n  font-size: 16pt;\n  font-family: \"Montserrat\" !important;\n  margin-bottom: 13pt;\n}\n\nion-input {\n  color: black !important;\n  font-size: 16pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  margin-top: 13pt;\n}\n\nion-footer {\n  margin-bottom: 0px;\n}\n\n.name {\n  flex-grow: 1;\n  display: flex;\n  padding: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNDLGlCQUFBO0VBRUQscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFLQTtFQUlLLG1CQUFBO0VBQ0QsVUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFQSjs7QUFXRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXRTtFQUlHLHlCQUFBO0VBQ0QsVUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQU1BLGVBQUE7QUFqQko7O0FBbUJBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBQUE7QUFqQkE7O0FBbUJBO0VBQ0UsVUFBQTtBQWhCRjs7QUFtQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBbUJJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBRUEscUNBQUE7RUFHQSxvQ0FBQTtFQUNBLGdCQUFBO0FBbkJSOztBQXFCUTtFQUNJLGtCQUFBO0FBbEJaOztBQTBCUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQXZCWiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojRUNGM0YyO1xyXG4gICAgaGVpZ2h0Ojg4LjVweDtcclxuICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBcclxufVxyXG5pb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBcclxuIFxyXG59XHJcbi5ib3gge1xyXG4gICAgLy8gYm9yZGVyLXdpZHRoOiAxcHQ7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTZwdDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIC8vIGJvcmRlci1jb2xvcjojNDU2RUZFO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6MTBweDtcclxuICB9XHJcblxyXG4gIC5ib3g0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgb3BhY2l0eToxMDAlO1xyXG4gICAgY29sb3I6IzEwMjI0NTtcclxuICAgIFxyXG4gIH1cclxuICAuYm94MSB7XHJcbiAgICAvLyBib3JkZXItd2lkdGg6IDFwdDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTZFRkU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgLy8gIGJvcmRlci1jb2xvcjo7XHJcbiAgICAvLyBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICAvLyBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgIC8vIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAvLyBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuLmlucHV0Q2FyZHtcclxucGFkZGluZy10b3A6IDclO1xyXG5wYWRkaW5nLWxlZnQ6IDUlO1xyXG5cclxuZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG59XHJcbi5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B0O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxM3B0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tZm9vdGVye1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlvbi1idXR0b257XHJcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgICAgICAvLyAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgXHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjJweDtcclxuICAgICAgICB9XHJcbi8vICAgICAgICAgaW9uLWl0ZW0tZGl2aWRlcntcclxuLy8gbWFyZ2luOjIwcHg7XHJcbi8vICAgICAgICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "Qrwm":
/*!*************************************************!*\
  !*** ./src/app/views/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "eQ5v");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "7yYI");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "eQ5v":
/*!*********************************************************!*\
  !*** ./src/app/views/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "7yYI");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-account-account-module.js.map