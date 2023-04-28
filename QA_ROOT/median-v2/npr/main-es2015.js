(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 69239:
/*!********************************************************!*\
  !*** ./src/@npr/components/header/header.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 31600);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ 92038);
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ 62259);
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ 43440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/local-store.service */ 69122);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/user.service */ 98613);
/* harmony import */ var _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/menu-collapse.directive */ 79511);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-ng-autocomplete */ 42255);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);














function HeaderComponent_ng_template_14_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "a", 79);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", item_r5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function HeaderComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HeaderComponent_ng_template_14_a_0_Template, 1, 1, "a", 78);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.screenpermissions[0] !== "");
} }
function HeaderComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 79);
} if (rf & 2) {
    const notFound_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", notFound_r8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
const _c0 = "/system-param-maintenance/transaction-code-summary";
const _c1 = function () { return [_c0]; };
function HeaderComponent_li_180_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_li_180_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const data_r9 = ctx_r13.$implicit; const i_r10 = ctx_r13.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.getRecords($event, data_r9, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("UserId:", data_r9.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Version:", data_r9.version, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("RecordStatus:", data_r9.recordStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("verifiedTime:", data_r9.verifiedTime, "");
} }
function HeaderComponent_li_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HeaderComponent_li_180_div_1_Template, 18, 6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r10 == 0 || i_r10 == 1 || i_r10 == 2 || i_r10 == 3 || i_r10 == 4 || ctx_r4.pendingReq);
} }
const _c2 = function () { return ["/dashboard"]; };
class HeaderComponent {
    constructor(localStoreService, api, router, userApi) {
        this.localStoreService = localStoreService;
        this.api = api;
        this.router = router;
        this.userApi = userApi;
        this.notToShowAll2 = true;
        this.unAUthorizedUsers = [];
        this.pendingReq = false;
        this.seenData = [];
        this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject([]);
        this.keyword = 'name';
    }
    selectEvent(item) {
        if (item === 'Roles') {
            this.router.navigate(['/roles/list']);
        }
        if (item == 'Users') {
            this.router.navigate(['/users']);
        }
        if (item === 'Audit Logs') {
            this.router.navigate(['/audit-logs']);
        }
        if (item === 'Security Policy') {
            this.router.navigate(['/security-policy/summary']);
        }
        if (item === 'Authorize Cash Payments') {
            this.router.navigate(['/authorize-cash-payment']);
        }
        if (item === 'Transaction Code Maintenance') {
            this.router.navigate(['/system-param-maintenance/transaction-code-summary']);
        }
        if (item === 'Global Account Restriction') {
            this.router.navigate(['/system-param-maintenance/global-acc-maintenance-summary']);
        }
        if (item === 'User Account Restriction') {
            this.router.navigate(['/system-param-maintenance/user-gl-acc-maintenance-summary']);
        }
        if (item === 'Department ID Maintenance') {
            this.router.navigate(['/system-param-maintenance/dept-id-maintenance-summary']);
        }
        if (item === 'Email-Management') {
            this.router.navigate(['/email-management']);
        }
        if (item === 'Add System') {
            this.router.navigate(['/addSystem/summary']);
        }
        if (item === 'Rule translation') {
            this.router.navigate(['/rule-translation/summary']);
        }
        if (item === 'Create Rule') {
            this.router.navigate(['/createrule/list']);
        }
        if (item === 'Rule Mapping') {
            this.router.navigate(['/rule-mapping/summary']);
        }
        if (item === 'External System') {
            this.router.navigate(['/external-system/extSys-summary']);
        }
        if (item === 'Process Code Mapping') {
            this.router.navigate(['/external-system/processCodeMapping']);
        }
        if (item === 'Template Mapping') {
            this.router.navigate(['/excel-mapping']);
        }
        if (item === 'Upload Excel') {
            this.router.navigate(['/file-upload/upload-excel']);
        }
        if (item === 'Authorize Excel') {
            this.router.navigate(['/file-upload/authorize_excel']);
        }
        if (item === 'Rejection Queue') {
            this.router.navigate(['/file-upload/rejection_queue']);
        }
        if (item === 'Authorize Modification') {
            this.router.navigate(['/authorize-modification']);
        }
        if (item === 'Treasury Reference') {
            this.router.navigate(['/external-system/treasuryReference']);
        }
        if (item === 'Process Monitoring') {
            this.router.navigate(['/process-monitoring']);
        }
        if (item === 'Customer Search') {
            this.router.navigate(['/customer-search']);
        }
        if (item === 'Initiate Account Closure') {
            this.router.navigate(['/initiate-account-closure']);
        }
        if (item === 'Process Account Closure') {
            this.router.navigate(['/process-account-closure']);
        }
        if (item === 'Account Closure Maintenance') {
            this.router.navigate(['/account-closure-maintenance/account-closure-summary']);
        }
        if (item === 'Profile') {
            this.router.navigate(['/profile']);
        }
        if (item === 'Change Password') {
            this.router.navigate(['/change-password']);
        }
        if (item === 'Logout') {
            this.router.navigate(['/session/login']);
        }
    }
    onChangeSearch(search) {
        if (search.length >= 1) {
            this.enablescreenPermissions(search.charAt(0).toUpperCase());
        }
        else {
            this.screenpermissions = [""];
        }
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
        // do something
    }
    ngOnInit() {
        this.user = localStorage.getItem("userFromLogin");
        this.user1 = localStorage.getItem("userobj");
        this.user_id = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
        this.department = localStorage.getItem("departmentHeader");
        this.departmentString = this.department.replace(/["]+/g, '');
        this.currentUser = localStorage.getItem("LoggedInUserHeader");
        this.currentUserString = this.currentUser.replace(/["]+/g, '');
        if (this.currentUserString === 'null') {
            this.currentUserString = '';
        }
        this.getPendingForAuthData();
        //  this.getAllUsers();
        this.getTransactionCodeSummary();
        this.initTheme(localStorage.getItem('SELECTED_THEME') || 'theme1');
        this.getProfileImage(this.user_id);
        this.getUser();
    }
    enablescreenPermissions(inputValue) {
        let userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
        let permissionlist = [];
        // console.log(userPermissions,"UserPermission");
        if (userPermissions) {
            let labelsdata = userPermissions.labels;
            labelsdata.sort((a, b) => a.labelId - b.labelId);
            let screensdata = userPermissions.screenAndPermissionsDTO;
            // let viewindex = labelsdata.findIndex(function (item) { return item.labelName.toLowerCase() == 'view' });;
            //  console.log(viewindex,"ViewIndex");
            for (let i = 0; i < screensdata.length; i++) {
                let data = screensdata[i].permissions.toString();
                // console.log(data,"Data");
                // console.log(data.charAt(viewindex),"DataIndex");
                for (let m = 0; m < labelsdata.length; m++) {
                    // console.log(m + " " + labelsdata[m].labelId + " " + labelsdata[m].labelName,"Index");
                    if (data.charAt(m) == 1 || data.charAt(m) == "1") {
                        // console.log("If condition");
                        permissionlist.push(screensdata[i].screenName);
                        break;
                    }
                }
            } //for loop endng
        } //if
        // console.log("methods are ", permissionlist);
        this.screenwisePermissions.next(permissionlist);
        this.screenwisePermissions.subscribe(message => this.screenpermissions = message);
        console.log("screen permissions final", this.screenpermissions);
        // 
        const defaultOptions = ['Profile', 'Change Password', 'Logout'];
        this.screenpermissions = [...defaultOptions, ...this.screenpermissions.filter(permission => permission && permission.includes(inputValue))];
    }
    getUser() {
        this.api.fetchMedUser(JSON.parse(this.user1).userId).subscribe((response) => {
            console.log(response);
            this.initTheme(response.screenThemeSelected);
        });
    }
    pendingRequestViewAll() {
        this.pendingReq = !this.pendingReq;
    }
    openPopUp() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.ddTrigger', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('li').siblings().find('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('.ddParent').toggleClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('actUnread');
        });
    }
    // onClickProfile(){
    //   this.router.navigate(['profile']);
    // }
    onClickProfile() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: ' Do you want to view the profile? ',
            showCancelButton: true,
            confirmButtonColor: '#E6224A',
            cancelButtonColor: '#011945',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES',
            icon: 'question'
        }).then((result => {
            if (result.isConfirmed == true) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
                this.router.navigate(['profile']);
            }
        }));
    }
    close() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on("click", '.ddCloseTrigger', function (event) {
            var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            }
        });
    }
    closeAll() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.ddCloseTrigger', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
        });
    }
    initTheme(bgClass) {
        var lastBg = bgClass === "theme2" ? "theme2" : "theme1";
        jquery__WEBPACK_IMPORTED_MODULE_0__('body').removeClass(lastBg).addClass(bgClass);
        this.lastBg = bgClass;
        jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
        ;
        if (bgClass === "theme1") {
            console.log(jquery__WEBPACK_IMPORTED_MODULE_0__('#themeChangeRadio:nth-child(1)'));
            jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme1"]').addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme2"]').removeClass('active');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme1"]').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme2"]').addClass('active');
        }
    }
    changeTheme(value) {
        // 
        var lastBg = this.lastBg;
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.tColor', function (e) {
            e.preventDefault();
            var bgClass = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data("id");
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active').parent().siblings().find('.tColor').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_0__('body').removeClass(lastBg).addClass(bgClass);
            localStorage.setItem('SELECTED_THEME', bgClass);
            lastBg = bgClass;
            jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
        });
        this.saveTheme(value);
    }
    saveTheme(theme) {
        this.userApi.saveTheme(JSON.parse(this.user1).userId, theme).subscribe(resp => {
            console.log(resp);
            if (resp === 'Saved successfully') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Theme changed successfully", icon: 'success' });
            }
        }, error => {
            if (error.error.text === 'Saved successfully') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Theme changed successfully", icon: 'success' });
            }
        });
    }
    logOut() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: 'You are trying to Logout. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#E6224A',
            cancelButtonColor: '#011945',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'CANCEL',
            confirmButtonText: 'YES',
            icon: 'info'
        }).then((result => {
            if (result.isConfirmed == true) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
                this.localStoreService.clear();
                sessionStorage.clear();
                localStorage.clear();
                window.location.reload();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Logout Successfully",
                    icon: 'success'
                });
                this.router.navigate(['session/login']);
            }
        }));
        // $(".ddParent").removeClass("actDD");
        // this.localStoreService.clear();
        // sessionStorage.clear();
        // localStorage.clear();
        // this.router.navigate(['session/login']);
    }
    onSelectFile(event) {
        console.log(event, "Event");
        if (event.target.files && event.target.files[0]) {
            this.profilePicture = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                console.log("Profile Image Test:: ", reader.result);
                this.url = event.target.result;
                console.log(this.url, "URL");
            };
        }
        if (this.profilePicture) {
            console.log(this.profilePicture);
            let profileUpload = {};
            profileUpload.fileType = this.profilePicture.type;
            profileUpload.fileName = this.profilePicture.name;
            profileUpload.userId = this.user_id;
            console.log(profileUpload);
            const uploadData = new FormData();
            uploadData.append('data', JSON.stringify(profileUpload));
            uploadData.append('file', this.profilePicture);
            this.api.uploadDocument(uploadData).subscribe((response) => {
                console.log(response);
            });
        }
    }
    getProfileImage(user_id) {
        this.api.getCustomerDocuments(user_id).subscribe((data) => {
            console.log("data ::", data);
            if (data) {
                this.profileId = data.id;
                this.url = data.fileUrl;
            }
        });
    }
    delete() {
        this.url = null;
    }
    changePassword() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: 'Do you need to change the password? ',
            showCancelButton: true,
            confirmButtonColor: '#E6224A',
            cancelButtonColor: '#011945',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES',
            icon: 'question'
        }).then((result => {
            if (result.isConfirmed == true) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
                this.router.navigate(['change-password']);
            }
        }));
    }
    //   $(".ddParent").removeClass("actDD");
    //   this.router.navigate(['change-password']);
    // }
    // getAllUsers() {
    //   this.api.getAllUsersListService().subscribe((resp:any) => {
    //       this.allUsersList = resp;
    //       for(let i = 0;i<=this.allUsersList.length;i++){
    //         if(this.allUsersList[i].verifiedStatus == 'U'){
    //         }
    //       }
    //     });
    // }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataFirstError(this.user).subscribe(resp => {
            // console.log(resp);
            this.pendingForAuthData = resp;
            console.log(this.pendingForAuthData);
        });
    }
    getTransactionCodeSummary() {
        this.api.gettingTransactionCodeSummary().subscribe(resp => {
            var _a;
            this.transactionCodeData = resp.result;
            console.log(this.transactionCodeData, "Transaction Code Data");
            for (let i = 0; i <= this.transactionCodeData.length; i++) {
                // console.log("Looooppppp")
                if (((_a = this.transactionCodeData[i]) === null || _a === void 0 ? void 0 : _a.verifiedStatus) == 'U') {
                    // console.log("UnAUthorized");
                    this.unAUthorizedUsers.push(this.transactionCodeData[i]);
                }
                // console.log(this.unAUthorizedUsers);
            }
        });
        // Observable
        //   .interval(2*60*1000)
        //   .timeInterval()
        //   .mergeMap(() => this.api.gettingTransactionCodeSummary()
        //   .subscribe(data => {
        //       console.log(data);
        //   }));
    }
    getNotifyCount(i) {
        console.log(this.seenData);
        if (this.seenData != 0) {
            // console.log("Seen Data POP",i);
            // this.unAUthorizedUsers.removeAt(i);
            this.unAUthorizedUsers.splice(i, 1);
            // delete this.unAUthorizedUsers[i];
            // console.log(this.unAUthorizedUsers);
        }
    }
    getRecords(event, data, index) {
        const userID = data.userId;
        console.log(index, "Index");
        this.api.gettingTransactionDatabyID(data.userId).subscribe(trndataResp => {
            this.transactionDataResp = trndataResp;
            console.log("this.transactionDataResp", this.transactionDataResp);
            //  this.unAUthorizedUsers=this.unAUthorizedUsers.length-1;
            this.seenData.push(this.transactionDataResp);
            // console.log(this.seenData);
            if (this.seenData) {
                // console.log("Seen Data Present");
                this.getNotifyCount(index);
            }
            if (this.transactionDataResp) {
                this.api.setSummaryDataTransactionCode({
                    userID: data.userId,
                    creatorDtStamp: data.creatorDtStamp,
                    creatorId: data.creatorId,
                    modNo: data.modNo,
                    recordStatus: data.recordStatus,
                    verifiedStatus: data.verifiedStatus,
                    verifiedBy: data.verifiedBy,
                    verifiedOnce: data.verifiedOnce,
                    verifiedTime: data.verifiedTime,
                    formValues: this.transactionDataResp
                });
                this.router.navigate(["/system-param-maintenance/transaction-code-edit"]);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UsersService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["npr-header"]], decls: 229, vars: 13, consts: [[1, "topBar"], [1, "row", "align-items-center"], [1, "col"], [1, "headerLeftCol"], [1, "row", "g-0", "align-items-center"], [1, "col-auto", 2, "display", "flex", "gap", "20px"], ["menuCollapse", "", 1, "navTrigger", 2, "cursor", "pointer"], [1, "tglLine", "tlTop"], [1, "tglLine", "tlCenter"], [1, "tglLine", "tlBtm"], [1, "ng-autocomplete", 2, "width", "210px"], ["placeholder", "search", "historyIdentifier", "screenpermissions", "id", "searchNavAutocomplete", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["src", "assets/images/customer-search.svg", "alt", "...", 2, "position", "relative", "top", "-50%", "left", "5px", "z-index", "1000"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-auto"], [1, "logoIconLink", "d-none", "d-md-block", "d-xl-none", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo", 1, "logoIcon"], [1, "searchCol", "d-none"], [1, "searchIcon"], ["src", "assets/images/search-icon.svg", "alt", "...", "width", "13"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "headerRightOptions"], [1, "greet"], [1, "msgDDCol", "ddParent"], [1, "ddTrigger", "actUnread", 2, "cursor", "pointer", 3, "click"], [1, "ddTriggerContent"], ["src", "assets/images/msg-icon.svg", "alt", "..."], [1, "unreadIndicator"], [1, "ddContent"], [1, "ddHeader"], [1, "row"], [1, "xsTitle", "text-uppercase", "bold", "d-inline-block", "vAlignMdl"], [1, "ddCloseTrigger", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/close.svg", "alt", "..."], [1, "ddBody", "px-0"], ["data-mcs-theme", "dark", 1, "ddScroll", "mCustomScrollbar"], [1, "msgList"], [1, "fullLink"], [1, "msgUserImg"], ["src", "assets/images/user-img-03.png", "alt", "..."], [1, "msgContent"], [1, "msgContentTopCol"], [1, "dateTime"], [1, "dCol"], [1, "tCol"], [1, "text-truncate"], [1, "availableStatus", "online"], ["src", "assets/images/user-img-02.png", "alt", "..."], ["src", "assets/images/user-img-04.png", "alt", "..."], [1, "availableStatus"], [1, "viewAllLink"], ["src", "assets/images/bell-icon.svg", "alt", "...", 1, "marginRight"], [1, "notification-number", "mat-bg-warn"], [4, "ngFor", "ngForOf"], [1, "viewAll", 3, "click"], [1, "proDDCol", "ddStyle", "ddParent"], [1, "ddTrigger", 2, "cursor", "pointer", 3, "click"], [1, "userTrigger"], [1, "userImg"], [3, "src"], [1, "d-none", "d-lg-inline-block", "userName", "text-truncate"], [1, "ddOptions"], [1, "themeColorsCol"], [1, "themeText"], ["id", "themeChangeRadio"], ["data-id", "theme1", 1, "tColor", "theme1", 3, "click"], ["data-id", "theme2", 1, "tColor", "theme2", 3, "click"], ["for", "fileInput", 1, "profileButton"], [1, "profileIcon"], ["aria-hidden", "true", 1, "fa", "fa-user-o"], [1, "ddIcon", 3, "click"], [1, "background"], [2, "cursor", "pointer", 3, "click"], [1, "ddIcon"], ["src", "assets/images/gear-icon.svg", "alt", "..."], [1, "ddLinkText"], ["src", "assets/images/logout-icon.svg", "alt", "...", 1, "ml-3"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [4, "ngIf"], [3, "routerLink", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ng-autocomplete", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selected", function HeaderComponent_Template_ng_autocomplete_selected_12_listener($event) { return ctx.selectEvent($event); })("inputChanged", function HeaderComponent_Template_ng_autocomplete_inputChanged_12_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function HeaderComponent_Template_ng_autocomplete_inputFocused_12_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, HeaderComponent_ng_template_14_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, HeaderComponent_ng_template_16_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_39_listener() { return ctx.openPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_50_listener() { return ctx.closeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](58, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Vasiliki Kalogeraki");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Hello! Good Morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](73, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](75, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Angelos George");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](92, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "A. Mused");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, "offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](107, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](109, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118, "Angelos George");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](122, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](124, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](126, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](131, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](135, "Vasiliki Kalogeraki");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](139, "Hello! Good Morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](141, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](143, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](152, "Angelos George");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](156, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_162_listener() { return ctx.openPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](164, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](167, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](173, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_175_listener() { return ctx.closeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](176, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](180, HeaderComponent_li_180_Template, 2, 1, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](181, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_182_listener() { return ctx.pendingRequestViewAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_186_listener() { return ctx.openPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](189, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](193, "ul", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](199, " Themes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_201_listener() { return ctx.closeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](202, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "ul", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_205_listener() { return ctx.changeTheme("theme1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_207_listener() { return ctx.changeTheme("theme2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](209, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](211, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](212, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](213, "\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_214_listener() { return ctx.onClickProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](215, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](216, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_218_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](219, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](220, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_224_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](225, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](226, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](228, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.screenpermissions)("searchKeyword", ctx.keyword)("itemTemplate", _r0)("notFoundTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Department: ", ctx.departmentString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Last logged in : ", ctx.currentUserString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.unAUthorizedUsers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.unAUthorizedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.pendingReq ? "View Less" : "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.url ? ctx.url : "assets/images/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.user);
    } }, directives: [_directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_8__.MenuCollapseDirective, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__.AutocompleteComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink], styles: [".viewAll[_ngcontent-%COMP%] {\n  color: #1bcd9d;\n  font-weight: 600;\n  padding-right: 70px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\nprofileIcon[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 2px;\n}\n\n.profileButton[_ngcontent-%COMP%]:hover {\n  color: var(--primaryColor);\n}\n\n.profileLinkText[_ngcontent-%COMP%]:hover {\n  color: var(--primaryColor);\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  margin-left: 20px;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%]     .autocomplete-container   .input-container   input {\n  display: block;\n  padding-left: 32px;\n}\n\n.marginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0FBRUo7O0FBQUU7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsMEJBQUE7QUFHRjs7QUFEQTtFQUNFLDBCQUFBO0FBSUY7O0FBREE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0MsaUJBQUE7QUFJSDs7QUFEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZFO0VBQ0Usa0JBQUE7QUFLSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld0FsbCB7XHJcbiAgICBjb2xvcjogIzFiY2Q5ZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICAjZmlsZUlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgcHJvZmlsZUljb257XHJcbiAgaGVpZ2h0OjJweDtcclxuICB3aWR0aDogMnB4O1xyXG5cclxufVxyXG4ucHJvZmlsZUJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxufVxyXG4ucHJvZmlsZUxpbmtUZXh0OmhvdmVye1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG59XHJcblxyXG5idXR0b24sIGlucHV0LCBvcHRncm91cCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uZy1hdXRvY29tcGxldGUgOjpuZy1kZWVwIC5hdXRvY29tcGxldGUtY29udGFpbmVyIDo6bmctZGVlcCAuaW5wdXQtY29udGFpbmVyIDo6bmctZGVlcCBpbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gIH1cclxuICAubWFyZ2luUmlnaHR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 15070:
/*!********************************************************!*\
  !*** ./src/@npr/components/layout/layout.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": function() { return /* binding */ LayoutComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 47200);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 69239);









let LayoutComponent = class LayoutComponent {
    constructor(cd, router, document) {
        this.cd = cd;
        this.router = router;
        this.document = document;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        /**
         * Enable Scrolling to specific parts of the page using the Router
         */
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Scroll), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(e => {
        });
    }
};
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["npr-layout"]], decls: 6, vars: 0, consts: [[1, "pageContent"], [1, "pageContentMain"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "npr-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "npr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()
], LayoutComponent);



/***/ }),

/***/ 51457:
/*!*********************************************************!*\
  !*** ./src/@npr/components/shared-components.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentsModule": function() { return /* binding */ SharedComponentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-ng-autocomplete */ 42255);
/* harmony import */ var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-malihu-scrollbar */ 87210);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/shared-directives.module */ 19836);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 69239);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ 15070);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav/sidenav.component */ 47200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);













const components = [
    _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
    _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent
];
class SharedComponentsModule {
}
SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
SharedComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutocompleteLibModule,
            ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutocompleteLibModule, ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent] }); })();


/***/ }),

/***/ 47200:
/*!**********************************************************!*\
  !*** ./src/@npr/components/sidenav/sidenav.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": function() { return /* binding */ SidenavComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by */ 34770);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 31600);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ 82119);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-malihu-scrollbar */ 87210);
/* harmony import */ var _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/menu-collapse.directive */ 79511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/dropdown.directive */ 43998);
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/dropdown-link.directive */ 97333);
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/dropdown-anchor.directive */ 82459);















const _c0 = function (a0) { return { "active": a0 }; };
function SidenavComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "System Maintenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r1.handleActiveClass("roles") || ctx_r1.handleActiveClass("users") || ctx_r1.handleActiveClass("audit-logs") || ctx_r1.handleActiveClass("security-policy")));
} }
const _c1 = function () { return ["/roles/list"]; };
const _c2 = function (a0) { return { "iconActive": a0 }; };
function SidenavComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r2.handleActiveClass("roles")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r2.handleActiveClass("roles")));
} }
const _c3 = function () { return ["/users"]; };
function SidenavComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r3.handleActiveClass("users")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r3.handleActiveClass("users")));
} }
const _c4 = function () { return ["/audit-logs"]; };
function SidenavComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Audit Logs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r4.handleActiveClass("audit-logs")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r4.handleActiveClass("audit-logs")));
} }
const _c5 = function () { return ["/security-policy/summary"]; };
function SidenavComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Security Policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r5.handleActiveClass("security-policy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r5.handleActiveClass("security-policy")));
} }
function SidenavComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "System Parameter Maintenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r6.handleActiveClass("authorize-cash-payment") || ctx_r6.handleActiveClass("transaction-code") || ctx_r6.handleActiveClass("global-acc-maintenance") || ctx_r6.handleActiveClass("user-gl-acc-maintenance") || ctx_r6.handleActiveClass("dept-id-maintenance") || ctx_r6.handleActiveClass("email-management")));
} }
const _c6 = function () { return ["/authorize-cash-payment"]; };
function SidenavComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Authorize Cash Payments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c6))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r7.handleActiveClass("authorize-cash-payment")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r7.handleActiveClass("authorize-cash-payment")));
} }
const _c7 = "/system-param-maintenance/transaction-code-summary";
const _c8 = function () { return [_c7]; };
function SidenavComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Transaction Code Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r8.handleActiveClass("transaction-code")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r8.handleActiveClass("transaction-code")));
} }
const _c9 = "/system-param-maintenance/global-acc-maintenance-summary";
const _c10 = function () { return [_c9]; };
function SidenavComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Global Account Restriction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r9.handleActiveClass("global-acc-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r9.handleActiveClass("global-acc-maintenance")));
} }
const _c11 = "/system-param-maintenance/user-gl-acc-maintenance-summary";
const _c12 = function () { return [_c11]; };
function SidenavComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " User Account Restriction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r10.handleActiveClass("user-gl-acc-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r10.handleActiveClass("user-gl-acc-maintenance")));
} }
const _c13 = "/system-param-maintenance/dept-id-maintenance-summary";
const _c14 = function () { return [_c13]; };
function SidenavComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Department ID Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r11.handleActiveClass("dept-id-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r11.handleActiveClass("dept-id-maintenance")));
} }
const _c15 = function () { return ["/email-management"]; };
function SidenavComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Email-Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r12.handleActiveClass("email-management")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c15));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r12.handleActiveClass("email-management")));
} }
function SidenavComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "System Interface");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r13.handleActiveClass("addSystem") || ctx_r13.handleActiveClass("rule-translation") || ctx_r13.handleActiveClass("createrule") || ctx_r13.handleActiveClass("rule-mapping")));
} }
const _c16 = function () { return ["/addSystem/summary"]; };
function SidenavComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Add System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c16))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r14.handleActiveClass("addSystem")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r14.handleActiveClass("addSystem")));
} }
const _c17 = function () { return ["/rule-translation/summary"]; };
function SidenavComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Rule Translation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c17))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r15.handleActiveClass("rule-translation")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r15.handleActiveClass("rule-translation")));
} }
const _c18 = function () { return ["/createrule/list"]; };
function SidenavComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Create Rule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c18))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r16.handleActiveClass("createrule")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r16.handleActiveClass("createrule")));
} }
const _c19 = function () { return ["/rule-mapping/summary"]; };
function SidenavComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Rule Mapping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c19))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r17.handleActiveClass("rule-mapping")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r17.handleActiveClass("rule-mapping")));
} }
function SidenavComponent_a_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "File Upload Maintenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r18.handleActiveClass("extSys") || ctx_r18.handleActiveClass("processCodeMapping") || ctx_r18.handleActiveClass("excel-mapping")));
} }
const _c20 = function () { return ["/external-system/extSys-summary"]; };
function SidenavComponent_li_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "External System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r19.handleActiveClass("extSys")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c20));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r19.handleActiveClass("extSys")));
} }
const _c21 = function () { return ["/external-system/processCodeMapping"]; };
function SidenavComponent_li_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process Code Mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r20.handleActiveClass("processCodeMapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c21));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r20.handleActiveClass("processCodeMapping")));
} }
const _c22 = function () { return ["/excel-mapping"]; };
function SidenavComponent_li_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Template Mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r21.handleActiveClass("excel-mapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c22));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r21.handleActiveClass("excel-mapping")));
} }
function SidenavComponent_a_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "File upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r22.handleActiveClass("file-upload") || ctx_r22.handleActiveClass("authorize-modification") || ctx_r22.handleActiveClass("treasuryReference") || ctx_r22.handleActiveClass("process-monitoring")));
} }
const _c23 = function () { return ["active"]; };
const _c24 = function () { return ["/file-upload/upload-excel"]; };
function SidenavComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Upload Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c23))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c24));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c2, ctx_r23.handleActiveClass("Upload Excel")));
} }
const _c25 = function () { return ["/external-system/treasuryReference"]; };
function SidenavComponent_li_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Treasury Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r24.handleActiveClass("treasuryReference")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c25));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r24.handleActiveClass("treasuryReference")));
} }
const _c26 = function () { return ["/file-upload/authorize_excel"]; };
function SidenavComponent_li_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Authorize Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r25.handleActiveClass("authorize_excel")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c26));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r25.handleActiveClass("authorize_excel")));
} }
const _c27 = function () { return ["/file-upload/rejection_queue"]; };
function SidenavComponent_li_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Rejection Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r26.handleActiveClass("rejection_queue")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c27));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r26.handleActiveClass("rejection_queue")));
} }
const _c28 = function () { return ["/authorize-modification"]; };
function SidenavComponent_li_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Authorize Modification");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r27.handleActiveClass("authorize-modification")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c28));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r27.handleActiveClass("authorize-modification")));
} }
const _c29 = function () { return ["/process-monitoring"]; };
function SidenavComponent_li_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process Monitoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r28.handleActiveClass("process-monitoring")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c29));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r28.handleActiveClass("process-monitoring")));
} }
function SidenavComponent_a_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Account Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r29.handleActiveClass("customer-search")));
} }
const _c30 = function () { return ["/customer-search"]; };
function SidenavComponent_li_67_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_li_67_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r38.FunctionAccountBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Customer Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c30))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r30.handleActiveClass("customer-search")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r30.handleActiveClass("customer-search")));
} }
function SidenavComponent_a_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Amount Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r31.handleActiveClass("amount-block")));
} }
const _c31 = function () { return ["/amount-block"]; };
function SidenavComponent_li_72_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_li_72_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r40.FunctionAmountBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Customer Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c31))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r32.handleActiveClass("amount-block")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r32.handleActiveClass("amount-block")));
} }
function SidenavComponent_a_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Account Closure");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r33.handleActiveClass("initiate-account-closure") || ctx_r33.handleActiveClass("process-account-closure") || ctx_r33.handleActiveClass("account-closure-maintenance") || ctx_r33.handleActiveClass("charge-maintainence")));
} }
const _c32 = function () { return ["/initiate-account-closure"]; };
function SidenavComponent_li_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Initiate Account Closure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c32))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r34.handleActiveClass("initiate-account-closure")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r34.handleActiveClass("initiate-account-closure")));
} }
const _c33 = function () { return ["/process-account-closure"]; };
function SidenavComponent_li_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Process Account Closure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c33))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r35.handleActiveClass("process-account-closure")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r35.handleActiveClass("process-account-closure")));
} }
const _c34 = "/account-closure-maintenance/account-closure-summary";
const _c35 = function () { return [_c34]; };
function SidenavComponent_li_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Account Closure Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c35))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r36.handleActiveClass("account-closure-maintenance")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r36.handleActiveClass("account-closure-maintenance")));
} }
const _c36 = function () { return ["/charge-maintainence"]; };
function SidenavComponent_li_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Charge Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c36))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r37.handleActiveClass("charge-maintainence")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r37.handleActiveClass("charge-maintainence")));
} }
const _c37 = function () { return ["/dashboard"]; };
const _c38 = function () { return ["/sql-data"]; };
class SidenavComponent {
    constructor(layoutService, roleService, location, mScrollbarService, cdr, el, renderer) {
        this.layoutService = layoutService;
        this.roleService = roleService;
        this.location = location;
        this.mScrollbarService = mScrollbarService;
        this.cdr = cdr;
        this.el = el;
        this.renderer = renderer;
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
        this.newRoleScreenPerm = [''];
        this.screendata = [''];
        this.screenpermissions = [];
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
        this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    }
    ngOnInit() {
        setTimeout(() => {
            this.EnablescreenPermissions();
            const resizeObserver = new ResizeObserver(entries => {
                this.sidebarHeight = entries[0].target.clientHeight;
                const hideScrollbar = this.shouldHideSideScroll();
                if (this.isScrollbarHidden === hideScrollbar)
                    return;
                this.isScrollbarHidden = hideScrollbar;
                this.toggleSideScrollbar(this.shouldHideSideScroll());
            });
            resizeObserver.observe(document.getElementById('mCSB_2_container'));
            window.addEventListener('resize', () => {
                const hideScrollbar = this.shouldHideSideScroll();
                if (this.isScrollbarHidden === hideScrollbar)
                    return;
                this.isScrollbarHidden = hideScrollbar;
                this.toggleSideScrollbar(this.shouldHideSideScroll());
            });
        }, 500);
        // this.getRoleScreen();
        // start observing a DOM node    
        this.roleName = sessionStorage.getItem('user_role');
        this.screenpermission = localStorage.getItem('userPermissions');
        this.screenwisePermissions.subscribe(message => this.screenpermissions = message);
        this.getRoleScreen();
        this.roleName = sessionStorage.getItem('user_role');
        this.screenpermission = localStorage.getItem('userPermissions');
        this.layoutService.share.subscribe(val => {
            if (val) {
                this.lastValue = val;
            }
        });
    }
    onResize(event) {
        this.mScrollbarService.initScrollbar('#sideMenu', {
            axis: 'y',
            theme: 'inset-3',
            scrollButtons: { enable: false },
            scrollbarPosition: 'outside',
            autoHideScrollbar: true,
            alwaysShowScrollbar: 2,
            setHeight: 900
        });
    }
    ngAfterViewInit() {
        this.mScrollbarService.initScrollbar('#sideMenu', {
            axis: 'y',
            theme: 'inset-3',
            scrollButtons: { enable: false },
            scrollbarPosition: 'outside',
            autoHideScrollbar: true,
            alwaysShowScrollbar: 2,
            setHeight: 900
        });
    }
    getRoleScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.roleService.fetchScreenData().subscribe(data => {
                this.screendata = data;
                this.screendata.push('amount block');
                // console.log(data);
                // console.log(this.screendata);
                this.screendata.forEach(element => {
                    //admin
                    if (element === 'Dashboard') {
                        //  const rolescreen = true;
                        this.dashboardscreen = true;
                        // console.log('rolescreen', rolescreen)
                    }
                    if (element === 'Roles') {
                        //  const rolescreen = true;
                        this.rolescreen = true;
                        // console.log('rolescreen', rolescreen)
                    }
                    if (element == 'Users') {
                        this.userScreen = true;
                    }
                    if (element === 'Audit Logs') {
                        this.auditScreen = true;
                    }
                    if (element === 'Password Policy') {
                        this.passPolicy = true;
                    }
                    if (element === 'GlobalCodeMaintenance') {
                        this.gcode = true;
                    }
                    if (element === 'UserCodeMaintenance') {
                        this.ucode = true;
                    }
                    if (element === 'Department Id Maintenance') {
                        this.deptcodeMaint = true;
                    }
                    if (element === 'Transaction Code Maint') {
                        this.trncodeMaint = true;
                    }
                    if (element === 'AcumenJournal') {
                        this.acumenjournal = true;
                    }
                    if (element === 'Process Monitoring') {
                        this.processMonitor = true;
                    }
                    if (element === 'External Systems') {
                        this.extSystem = true;
                    }
                    if (element === 'Process Code Mapping') {
                        this.processCodeMapping = true;
                    }
                    if (element === 'Excel Mapping') {
                        this.excelMapping = true;
                    }
                    if (element === 'Upload Excel') {
                        this.uploadExcel = true;
                    }
                    if (element === 'Process Excel') {
                        this.processExcel = true;
                    }
                    if (element === 'Modify Excel') {
                        this.modifyExcel = true;
                    }
                    if (element === 'Authorize Modifications') {
                        this.authModification = true;
                    }
                    if (element === 'Customer search') {
                        this.customerSearch = true;
                    }
                    //code maintenance
                    if (element === 'Email-Management') {
                        this.emailManagement = true;
                    }
                    //account closer
                    if (element === 'Initiate Account Closure') {
                        this.initialAccountCloser = true;
                    }
                    if (element === 'Process Account Closure') {
                        this.ProcessAccountCloser = true;
                    }
                    if (element === 'Acc Closure Maintenance') {
                        this.acClosermaint = true;
                    }
                    if (element === 'Charge Maintenance') {
                        this.chargeMaintenance = true;
                    }
                });
                this.cdr.markForCheck();
            });
        });
    }
    onMouseEnter() {
        this.layoutService.collapseOpenSidenav();
    }
    EnablescreenPermissions() {
        let userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
        let permissionlist = [];
        console.log(userPermissions, "UserPermission");
        if (userPermissions) {
            let labelsdata = userPermissions.labels;
            labelsdata.sort((a, b) => a.labelId - b.labelId);
            let screensdata = userPermissions.screenAndPermissionsDTO;
            // let viewindex = labelsdata.findIndex(function (item) { return item.labelName.toLowerCase() == 'view' });;
            //  console.log(viewindex,"ViewIndex");
            for (let i = 0; i < screensdata.length; i++) {
                let data = screensdata[i].permissions.toString();
                // console.log(data,"Data");
                // console.log(data.charAt(viewindex),"DataIndex");
                for (let m = 0; m < labelsdata.length; m++) {
                    // console.log(m + " " + labelsdata[m].labelId + " " + labelsdata[m].labelName,"Index");
                    if (data.charAt(m) == 1 || data.charAt(m) == "1") {
                        // console.log("If condition");
                        permissionlist.push(screensdata[i].screenName);
                        break;
                    }
                }
            } //for loop endng
        } //if
        // console.log("methods are ", permissionlist);
        this.screenwisePermissions.next(permissionlist);
        this.screenwisePermissions.subscribe(message => this.screenpermissions = message);
        this.screenpermissions.push("Amount Block");
        console.log("screen permissions final", this.screenpermissions);
    }
    onMouseLeave() {
        this.layoutService.collapseCloseSidenav();
    }
    handleActiveClass(item) {
        let relativePath = this.location.path();
        // console.log(relativePath);
        return relativePath.includes(item);
    }
    FunctionAccountBlock() {
        localStorage.setItem("link", "Account_Block");
    }
    FunctionAmountBlock() {
        localStorage.setItem("link", "Amount_Block");
    }
    shouldHideSideScroll() {
        return window.innerHeight > 512 && this.sidebarHeight < 512;
    }
    toggleSideScrollbar(shouldHide) {
        try {
            console.log(`shouldhide = ${shouldHide}`);
            document.getElementsByClassName('mCSB_draggerContainer')[0].style.display = shouldHide ? "none" : "block";
        }
        catch (error) { }
    }
    toggleNav() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.lastValue).find('ul.subMenuCol').slideUp();
        let el = this.el.nativeElement.querySelector(".activeSMenu");
        if (el) {
            this.renderer.removeClass(el, 'activeSMenu');
        }
    }
    toggle() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').siblings().removeClass('activeSMenu');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').siblings().find('ul.subMenuCol').slideUp();
        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').toggleClass('activeSMenu');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').find('ul.subMenuCol').slideToggle();
    }
    ngOnDestroy() {
        // this.mScrollbarService.destroy('#sideMenu');
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_12__.MalihuScrollbarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2)); };
SidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["npr-sidenav"]], hostBindings: function SidenavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, decls: 81, vars: 52, consts: [["malihu-scrollbar", ""], ["sideMenu", ""], ["menuCollapse", "", 1, "navOverlay"], [1, "sidebarCol"], [1, "sidebarLogo"], [3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo", 2, "max-width", "200px"], [1, "sidebarNavCol", "mCustomScrollbar"], ["appDropdown", "", 1, "sidebarNav"], ["routerLinkActive", "open", 1, "navItem", 3, "click"], [1, "navLink", 3, "routerLink", "ngClass"], [1, "navIcon"], ["src", "assets/images/home.svg", "alt", "..."], [1, "navText"], ["appDropdownLink", "", "routerLinkActive", "open", 1, "navItem", "sMenuLink"], ["appDropdownToggle", "", "class", "navLink", 3, "ngClass", 4, "ngIf"], [1, "submenuColMain"], ["appDropdown", "", 1, "subMenuCol"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngIf"], ["appDropdownLink", "", "routerLinkActive", "open"], [1, "subMenuLink", 3, "routerLink", "ngClass"], [1, "customListIcon", "banzpayIcon", 3, "ngClass"], ["appDropdownToggle", "", 1, "navLink", 3, "ngClass"], ["src", "assets/images/security.svg", "alt", "..."], [1, "customListIcon", "roleIcon", 3, "ngClass"], [1, "customListIcon", "userIcon", 3, "ngClass"], [1, "customListIcon", "auditIcon", 3, "ngClass"], [1, "customListIcon", "securityIcon", 3, "ngClass"], ["src", "assets/images/transaction.svg", "alt", "..."], [1, "customListIcon", "authorizeIcon", 3, "ngClass"], [1, "subMenuLink", 3, "ngClass", "routerLink"], [1, "customListIcon", "transactionIcon", 3, "ngClass"], [1, "customListIcon", "globalIcon", 3, "ngClass"], [1, "customListIcon", "userGlIcon", 3, "ngClass"], [1, "customListIcon", "departmentIcon", 3, "ngClass"], [1, "customListIcon", "emailIcon", 3, "ngClass"], ["src", "assets/images/add-system.svg", "alt", "..."], [1, "customListIcon", "addSysIcon", 3, "ngClass"], [1, "customListIcon", "translationIcon", 3, "ngClass"], [1, "customListIcon", "ruleIcon", 3, "ngClass"], [1, "customListIcon", "mappingIcon", 3, "ngClass"], ["src", "assets/images/external-system.svg", "alt", "..."], [1, "customListIcon", "externalSystemIcon", 3, "ngClass"], [1, "customListIcon", "processCodeMappingIcon", 3, "ngClass"], [1, "customListIcon", "templateMappingIcon", 3, "ngClass"], ["src", "assets/images/upload-excel.svg", "alt", "..."], [1, "subMenuLink", 3, "routerLinkActive", "routerLink"], [1, "customListIcon", "uploadIcon", 3, "ngClass"], [1, "subMenuLink", 3, "routerLinkActive", "ngClass", "routerLink"], [1, "customListIcon", "tresuryIcon", 3, "ngClass"], [1, "customListIcon", "rejectionIcon", 3, "ngClass"], [1, "customListIcon", "authorizeModificationIcon", 3, "ngClass"], [1, "customListIcon", "processMonitoringIcon", 3, "ngClass"], ["src", "assets/images/customer-search.svg", "alt", "..."], [1, "subMenuLink", 3, "routerLink", "ngClass", "click"], [1, "customListIcon", "customerSearchIcon", 3, "ngClass"], ["src", "assets/images/cash-stack.svg", "alt", "..."], [1, "customListIcon", "amountBlockIcon", 3, "ngClass"], ["src", "assets/images/inititate-account.svg", "alt", "..."], [1, "customListIcon", "initiateIcon", 3, "ngClass"], [1, "customListIcon", "processAccountClosureIcon", 3, "ngClass"], [1, "customListIcon", "accountClosureIcon", 3, "ngClass"], [1, "customListIcon", "chargeIcon", 3, "ngClass"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_10_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SidenavComponent_a_17_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SidenavComponent_li_20_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SidenavComponent_li_21_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, SidenavComponent_li_22_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, SidenavComponent_li_23_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, SidenavComponent_a_25_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SidenavComponent_li_28_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SidenavComponent_li_29_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, SidenavComponent_li_30_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SidenavComponent_li_31_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SidenavComponent_li_32_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, SidenavComponent_li_33_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, SidenavComponent_a_35_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SidenavComponent_li_38_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, SidenavComponent_li_39_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, SidenavComponent_li_40_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, SidenavComponent_li_41_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Banzpay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, SidenavComponent_a_47_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, SidenavComponent_li_50_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, SidenavComponent_li_51_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, SidenavComponent_li_52_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, SidenavComponent_a_54_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, SidenavComponent_li_57_Template, 4, 7, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, SidenavComponent_li_58_Template, 4, 10, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, SidenavComponent_li_59_Template, 4, 10, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, SidenavComponent_li_60_Template, 4, 10, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, SidenavComponent_li_61_Template, 4, 10, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, SidenavComponent_li_62_Template, 4, 10, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, SidenavComponent_a_64_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, SidenavComponent_li_67_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, SidenavComponent_a_69_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, SidenavComponent_li_72_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, SidenavComponent_a_74_Template, 5, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, SidenavComponent_li_77_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, SidenavComponent_li_78_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, SidenavComponent_li_79_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, SidenavComponent_li_80_Template, 4, 8, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](43, _c37));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](44, _c37))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](45, _c0, ctx.handleActiveClass("dashboard")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Roles") > -1 || ctx.screenpermissions.indexOf("Users") > -1 || ctx.screenpermissions.indexOf("Audit Logs") > -1 || ctx.screenpermissions.indexOf("Security Policy") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Roles") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Users") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Audit Logs") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Security Policy") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Cash Payments") > -1 || ctx.screenpermissions.indexOf("Transaction Code Maintenance") > -1 || ctx.screenpermissions.indexOf("Global Account Restriction") > -1 || ctx.screenpermissions.indexOf("User Account Restriction") > -1 || ctx.screenpermissions.indexOf("Department ID Maintenance") > -1 || ctx.screenpermissions.indexOf("Email-Management") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Cash Payments") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Transaction Code Maintenance") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Global Account Restriction") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("User Account Restriction") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Department ID Maintenance") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Email-Management") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Add System") > -1 || ctx.screenpermissions.indexOf("Rule translation") > -1 || ctx.screenpermissions.indexOf("Create Rule") > -1 || ctx.screenpermissions.indexOf("Rule Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Add System") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Rule translation") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Create Rule") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Rule Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](47, _c38))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](48, _c0, ctx.handleActiveClass("sql-data")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](50, _c2, ctx.handleActiveClass("sql-data")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("External System") > -1 || ctx.screenpermissions.indexOf("Process Code Mapping") > -1 || ctx.screenpermissions.indexOf("Template Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("External System") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Code Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Template Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Upload Excel") > -1 || ctx.screenpermissions.indexOf("Treasury Reference") > -1 || ctx.screenpermissions.indexOf("Authorize Excel") > -1 || ctx.screenpermissions.indexOf("Rejection Queue") > -1 || ctx.screenpermissions.indexOf("Authorize Modification") > -1 || ctx.screenpermissions.indexOf("Process Monitoring") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Upload Excel") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Treasury Reference") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Excel") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Rejection Queue") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Modification") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Monitoring") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Customer Search") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Customer Search") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Amount Block") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Amount Block") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Initiate Account Closure") > -1 || ctx.screenpermissions.indexOf("Process Account Closure") > -1 || ctx.screenpermissions.indexOf("Account Closure Maintenance") > -1 || ctx.screenpermissions.indexOf("Charge Maintenance") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Initiate Account Closure") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Account Closure") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Account Closure Maintenance") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Charge Maintenance") > -1);
    } }, directives: [ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_12__.MalihuScrollbarDirective, _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_4__.MenuCollapseDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__.AppDropdownDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownLinkDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_7__.DropdownAnchorDirective], styles: ["a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({ transform: 'translateY(-100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({ transform: 'translateY(0%)' }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({ transform: 'translateY(-100%)' }))
                ])
            ])
        ] } });


/***/ }),

/***/ 82459:
/*!**********************************************************!*\
  !*** ./src/@npr/directives/dropdown-anchor.directive.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownAnchorDirective": function() { return /* binding */ DropdownAnchorDirective; }
/* harmony export */ });
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-link.directive */ 97333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class DropdownAnchorDirective {
    constructor(navlink, el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) { return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownLinkDirective), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
DropdownAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownAnchorDirective, selectors: [["", "appDropdownToggle", ""]], hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 97333:
/*!********************************************************!*\
  !*** ./src/@npr/directives/dropdown-link.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownLinkDirective": function() { return /* binding */ DropdownLinkDirective; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 31600);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ 43998);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ 82119);




class DropdownLinkDirective {
    constructor(nav, el, renderer, layoutService) {
        this.el = el;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.nav = nav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
        const hostElem = this.el.nativeElement;
        if (value) {
            this.nav.closeOtherLinks(this);
            jquery__WEBPACK_IMPORTED_MODULE_0__(hostElem).find('ul.subMenuCol').slideDown();
        }
        let part = this.el.nativeElement.querySelector('ul.subMenuCol');
        this.renderer.setStyle(part, 'display', 'none');
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.open = !this.open;
        let part = this.el.nativeElement.querySelector('ul.subMenuCol');
        this.layoutService.content.next(this.el.nativeElement);
        const hostElem = this.el.nativeElement;
        if (this.open) {
            this.renderer.setStyle(part, 'display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_0__(hostElem).find('ul.subMenuCol').slideDown();
        }
        else {
            this.renderer.setStyle(part, 'display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_0__(hostElem).find('ul.subMenuCol').slideUp();
        }
    }
}
DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) { return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.AppDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService)); };
DropdownLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DropdownLinkDirective, selectors: [["", "appDropdownLink", ""]], hostVars: 2, hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("activeSMenu", ctx.open);
    } }, inputs: { group: "group", open: "open" } });


/***/ }),

/***/ 43998:
/*!***************************************************!*\
  !*** ./src/@npr/directives/dropdown.directive.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDropdownDirective": function() { return /* binding */ AppDropdownDirective; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class AppDropdownDirective {
    constructor(router, el, renderer) {
        this.router = router;
        this.el = el;
        this.renderer = renderer;
        this.navlinks = [];
    }
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link !== openLink) {
                link.open = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    getUrl() {
        return this.router.url;
    }
    ngOnInit() {
        this._router = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe((event) => {
            this.navlinks.forEach((link) => {
                if (link.group) {
                    const routeUrl = this.getUrl();
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            });
        });
    }
}
AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) { return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
AppDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AppDropdownDirective, selectors: [["", "appDropdown", ""]] });


/***/ }),

/***/ 79511:
/*!********************************************************!*\
  !*** ./src/@npr/directives/menu-collapse.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuCollapseDirective": function() { return /* binding */ MenuCollapseDirective; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class MenuCollapseDirective {
    constructor(document) {
        this.document = document;
        this.expanded = false;
    }
    onClick(e) {
        this.toggleCollapse();
    }
    toggleCollapse() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.document.body.classList.add('activeNav');
        }
        else {
            this.document.body.classList.remove('activeNav');
        }
    }
}
MenuCollapseDirective.ɵfac = function MenuCollapseDirective_Factory(t) { return new (t || MenuCollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
MenuCollapseDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MenuCollapseDirective, selectors: [["", "menuCollapse", ""]], hostBindings: function MenuCollapseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCollapseDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 19836:
/*!*********************************************************!*\
  !*** ./src/@npr/directives/shared-directives.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDirectivesModule": function() { return /* binding */ SharedDirectivesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-collapse.directive */ 79511);
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-anchor.directive */ 82459);
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-link.directive */ 97333);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.directive */ 43998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






const directives = [
    _menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.MenuCollapseDirective,
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.AppDropdownDirective,
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective,
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective,
];
class SharedDirectivesModule {
}
SharedDirectivesModule.ɵfac = function SharedDirectivesModule_Factory(t) { return new (t || SharedDirectivesModule)(); };
SharedDirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedDirectivesModule });
SharedDirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedDirectivesModule, { declarations: [_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.MenuCollapseDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.AppDropdownDirective,
        _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective,
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.MenuCollapseDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.AppDropdownDirective,
        _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective,
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective] }); })();


/***/ }),

/***/ 55114:
/*!********************************!*\
  !*** ./src/@npr/npr.module.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NprModule": function() { return /* binding */ NprModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared-components.module */ 51457);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/shared-directives.module */ 19836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class NprModule {
}
NprModule.ɵfac = function NprModule_Factory(t) { return new (t || NprModule)(); };
NprModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NprModule });
NprModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule,
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule
        ], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NprModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule], exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule] }); })();


/***/ }),

/***/ 82119:
/*!*********************************************!*\
  !*** ./src/@npr/services/layout.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": function() { return /* binding */ LayoutService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);





class LayoutService {
    constructor(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.share = this.content.asObservable();
        this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
        this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
        this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
        this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
        this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
        this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.searchOpen$ = this._searchOpen.asObservable();
        this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
        this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
        this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
        this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
        this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
        this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
        this.isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);
        this.isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);
    }
    openQuickpanel() {
        this._quickpanelOpenSubject.next(true);
    }
    closeQuickpanel() {
        this._quickpanelOpenSubject.next(false);
    }
    openSidenav() {
        this._sidenavOpenSubject.next(true);
    }
    closeSidenav() {
        this._sidenavOpenSubject.next(false);
    }
    collapseSidenav() {
        this._sidenavCollapsedSubject.next(true);
    }
    expandSidenav() {
        this._sidenavCollapsedSubject.next(false);
    }
    collapseOpenSidenav() {
        this._sidenavCollapsedOpenSubject.next(true);
    }
    collapseCloseSidenav() {
        this._sidenavCollapsedOpenSubject.next(false);
    }
    openConfigpanel() {
        this._configpanelOpenSubject.next(true);
    }
    closeConfigpanel() {
        this._configpanelOpenSubject.next(false);
    }
    openSearch() {
        this._searchOpen.next(true);
    }
    closeSearch() {
        this._searchOpen.next(false);
    }
    enableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'true'
            }
        });
    }
    disableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'false'
            }
        });
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver)); };
LayoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 34770:
/*!************************************!*\
  !*** ./src/@npr/utils/track-by.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trackByRoute": function() { return /* binding */ trackByRoute; },
/* harmony export */   "trackById": function() { return /* binding */ trackById; },
/* harmony export */   "trackByKey": function() { return /* binding */ trackByKey; },
/* harmony export */   "trackByValue": function() { return /* binding */ trackByValue; },
/* harmony export */   "trackByLabel": function() { return /* binding */ trackByLabel; }
/* harmony export */ });
function trackByRoute(index, item) {
    return item.route;
}
function trackById(index, item) {
    return item.id;
}
function trackByKey(index, item) {
    return item.key;
}
function trackByValue(index, value) {
    return value;
}
function trackByLabel(index, value) {
    return value.label;
}


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_npr_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@npr/components/layout/layout.component */ 15070);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 87618);
/* harmony import */ var _shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'session',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_views_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/auth/login/login.module */ 33794)).then(m => m.LoginModule),
    },
    {
        path: 'forget-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_forget-password_forget-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/forget-password/forget-password.module */ 82352)).then(m => m.ForgetPasswordModule),
    }, {
        path: '',
        component: src_npr_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_dashboard_dashboard-analytics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard-analytics.module */ 11164)).then(m => m.DashboardAnalyticsModule),
            }, {
                path: 'roles',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_roles_roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/roles/roles.module */ 57445)).then(m => m.RolesModule),
            }, {
                path: 'addSystem',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/addSystem/add-System/add-System.module */ 21067)).then(m => m.AddSystemModule),
            },
            {
                path: 'addSystem/summary',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/addSystem/add-System/add-System.module */ 21067)).then(m => m.AddSystemModule),
            },
            {
                path: 'audit-logs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_audit-logs_audit-logs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/audit-logs/audit-logs.module */ 46847)).then(m => m.AuditLogsModule),
            },
            {
                path: 'change-password',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/change-password/change-password.module */ 87015)).then(m => m.ChangePasswordModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/profile/profile.module */ 38323)).then(m => m.ProfileModule),
            },
            {
                path: 'process-monitoring',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_process-monitoring_process-monitoring_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/process-monitoring/process-monitoring.module */ 63420)).then(m => m.ProcessMonitoringModule),
            }, {
                path: 'security-policy',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_security-policy_security-policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/security-policy/security-policy.module */ 88185)).then(m => m.SecurityPolicyModule),
            },
            // {
            //   path: 'summary',
            //   loadChildren: () => import('./views/security-policy/security-policy.module').then(m => m.SecurityPolicyModule),
            // },
            {
                path: 'createrule',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule_rule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/rule/rule.module */ 11784)).then(m => m.RuleModule),
            }, {
                path: 'external-system',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/file-upload-maintenance/file-upload-maintenance.module */ 99776)).then(m => m.FileUploadMaintenanceModule),
            }, {
                path: 'system-param-maintenance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_system-param-maintenance_system-param-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/system-param-maintenance/system-param-maintenance.module */ 76464)).then(m => m.SystemParamMaintenanceModule),
            }, {
                path: 'file-upload',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_file-upload_file-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/file-upload/file-upload.module */ 9775)).then(m => m.FileUploadModule),
            }, {
                path: 'process-account-closure',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("src_app_views_process-account-closure_process-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/process-account-closure/process-account-closure.module */ 39382)).then(m => m.ProcessAccountClosureModule),
            }, {
                path: 'new-external-system',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_new-external-system_new-external-system_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/new-external-system/new-external-system.module */ 66679)).then(m => m.NewExternalSystemModule),
            }, {
                path: 'initiate-account-closure',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/initiate-account-closure/initiate-account-closure.module */ 69628)).then(m => m.InitiateAccountClosureModule),
            },
            {
                path: 'initiate-account-closure/create',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/initiate-account-closure/initiate-account-closure.module */ 69628)).then(m => m.InitiateAccountClosureModule),
            }, {
                path: 'email-management',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/email-management/email-management.module */ 81089)).then(m => m.EmailManagementModule),
            },
            {
                path: 'email-management/create',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/email-management/email-management.module */ 81089)).then(m => m.EmailManagementModule),
            }, {
                path: 'customer-search',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("default-src_app_views_customer-search_customer-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/customer-search/customer-search.module */ 9208)).then(m => m.CustomerSearchModule),
            },
            {
                path: 'authorize-modification',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_authorize-modification_authorize-modification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/authorize-modification/authorize-modification.module */ 49136)).then(m => m.AuthorizeModificationModule),
            }, {
                path: 'account-closure-maintenance',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/account-closure-maintenance/account-closure-maintenance.module */ 95521)).then(m => m.AccountClosureMaintenanceModule),
            },
            {
                path: 'account-closure-maintenance/account-closure-summary',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/account-closure-maintenance/account-closure-maintenance.module */ 95521)).then(m => m.AccountClosureMaintenanceModule),
            }, {
                path: 'excel-mapping',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("src_app_views_excel-mapping_excel-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/excel-mapping/excel-mapping.module */ 18745)).then(m => m.ExcelMappingModule),
            }, {
                path: 'rule-mapping',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-mapping_rule-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/rule-mapping/rule-mapping.module */ 8690)).then(m => m.RuleMappingModule),
            },
            {
                path: 'charge-maintainence',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_charge-maintainenece_charge-maintainenece_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/charge-maintainenece/charge-maintainenece.module */ 90988)).then(m => m.ChargeMaintaineneceModule),
            },
            {
                path: 'rule-translation',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-translation_rule-translation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/rule-translation/rule-translation.module */ 80646)).then(m => m.RuleTranslationModule),
            }, {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/users/users.module */ 51557)).then(m => m.UsersModule),
            },
            {
                path: 'authorize-cash-payment',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_authorize-cash-payment_authorize-cash-payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/authorize-cash-payment/authorize-cash-payments.module */ 96653)).then(m => m.AuthorizeCashPaymentsModule),
            },
            {
                path: 'sql-data',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("src_app_views_banzpay_banzpay-sql-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/banzpay/banzpay-sql-data.module */ 37158)).then(m => m.BanzpaySqlDataModule),
            },
            {
                path: 'amount-block',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("default-src_app_views_customer-search_customer-search_module_ts"), __webpack_require__.e("src_app_views_amount-block_amount-block_amount-block_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/amount-block/amount-block/amount-block.module */ 35612)).then(m => m.AmountBlockModule),
            },
            {
                path: 'accountBlocking',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_account-blocking_account-block_account-block_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/account-blocking/account-block/account-block.module */ 2991)).then(m => m.AccountBlockModule),
            },
        ]
    }, {
        path: '**',
        redirectTo: 'dashboard'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivateGuard], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                // preloadingStrategy: PreloadAllModules,
                useHash: true,
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'corrected',
                anchorScrolling: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);






class AppComponent {
    constructor(renderer, platform, document, route, router) {
        this.renderer = renderer;
        this.platform = platform;
        this.document = document;
        this.route = route;
        this.router = router;
        this.title = "Median";
        this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.SESSION_TIMEOUT_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds
        this.changeTheme();
        this.setTimeout();
        this.userInactive.subscribe(() => this.logout());
    }
    onResize(event) {
        this.document.body.classList.remove('activeNav');
    }
    setTimeout() {
        clearTimeout(this.userActivity);
        this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.SESSION_TIMEOUT_DURATION);
    }
    logout() {
        if (localStorage.getItem("userFromLogin")) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Session Expired", "Kindly Login to continue.");
        }
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
        this.router.navigate(['/session/login']);
    }
    refreshUserState() {
        this.setTimeout();
    }
    onUpdateStorage() {
        const getOtpClicked = localStorage.getItem("getOtpClicked");
        if (getOtpClicked === 'true') {
            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['/session/login']);
        }
    }
    changeTheme() {
        let lastBg = "";
        $(document).on('click', '.tColor', (e) => {
            e.preventDefault();
            const bgClass = $(this).data("id");
            $(this).addClass('active').parent().siblings().find('.tColor').removeClass('active');
            $('body').removeClass(lastBg).addClass(bgClass);
            lastBg = bgClass;
            $('.ddParent').removeClass('actDD');
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousemove", function AppComponent_mousemove_HostBindingHandler() { return ctx.refreshUserState(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("click", function AppComponent_click_HostBindingHandler() { return ctx.refreshUserState(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown", function AppComponent_keydown_HostBindingHandler() { return ctx.refreshUserState(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("storage", function AppComponent_storage_HostBindingHandler() { return ctx.onUpdateStorage(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 0, consts: [[3, "resize"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _npr_npr_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@npr/npr.module */ 55114);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var ngx_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dialogs */ 36247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            // Npr
            _npr_npr_module__WEBPACK_IMPORTED_MODULE_2__.NprModule,
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule,
            ngx_dialogs__WEBPACK_IMPORTED_MODULE_9__.NgxDialogsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        // Npr
        _npr_npr_module__WEBPACK_IMPORTED_MODULE_2__.NprModule,
        ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule,
        ngx_dialogs__WEBPACK_IMPORTED_MODULE_9__.NgxDialogsModule] }); })();


/***/ }),

/***/ 3118:
/*!***********************************************!*\
  !*** ./src/app/shared/config/app.constant.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": function() { return /* binding */ AppConstants; }
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);

class AppConstants {
    /*
    *Base URL is not used anywhere so dont change it and dont delete it
    */
    static get baseURL() {
        return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL;
    }
    static get acctCloserUrl() {
        return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.ACC_CLOSER_URL;
    }
}


/***/ }),

/***/ 87618:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/jwt-auth.service */ 79389);





class AuthGuard {
    constructor(router, jwtAuth) {
        this.router = router;
        this.jwtAuth = jwtAuth;
    }
    canActivate(route, state) {
        return this._check();
    }
    _check() {
        // Check the authentication status
        return this.jwtAuth.check()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((authenticated) => {
            console.log("check status", authenticated);
            // If the user is not authenticated...
            if (!authenticated) {
                // Redirect to the sign-in page
                localStorage.clear();
                sessionStorage.clear();
                this.router.navigate(["session/login"]);
                // Prevent the access
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
            }
            // Allow the access
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 50215:
/*!*******************************************************!*\
  !*** ./src/app/shared/guards/can-deactivate.guard.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanDeactivateGuard": function() { return /* binding */ CanDeactivateGuard; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class CanDeactivateGuard {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.exitWithoutChange = false;
    }
    canDeactivate(component) {
        return component.canExit ? component.canExit() : true;
    }
}
CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
CanDeactivateGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35383:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/fmosNewRolePermissions.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fmosscreenlabels": function() { return /* binding */ fmosscreenlabels; },
/* harmony export */   "RolePermissions": function() { return /* binding */ RolePermissions; },
/* harmony export */   "permissionsLabels": function() { return /* binding */ permissionsLabels; }
/* harmony export */ });
class fmosscreenlabels {
    constructor() {
        this.exist = true;
    }
}
class RolePermissions {
}
class permissionsLabels {
}


/***/ }),

/***/ 94761:
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "median": function() { return /* binding */ median; },
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/app.constant */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






// import { User } from "src/app/views/users/users.dto";
const median = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
class ApiService {
    constructor(http) {
        this.http = http;
        this.uriForExt = median + '/extsys';
        this.ext = median + '/excelExt';
        this.excelmap = median + '/excelmap';
        this.uriForMap = median + '/excelmap';
        this.dashboardapi = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/dashboard';
        this.API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        this.processCodeMappingObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            id: '',
            extSysCode: '',
            extSysName: '',
            commChannel: '',
            creatorDtStamp: '',
            creatorId: '',
            destination: '',
            destinationTag: '',
            dtdFile: '',
            errDirectoryName: '',
            errQueueName: '',
            errSchemaName: '',
            errXsltName: '',
            extSysTag: '',
            formatType: '',
            isDestNode: '',
            isExtSysNode: '',
            isModuleNode: '',
            isProcessNode: '',
            isServiceNode: '',
            latestAmendNo: '',
            messageType: '',
            moduleCode: '',
            moduleTag: '',
            msgDuplication: '',
            processCode: '',
            processTag: '',
            recordStatus: '',
            reqDirectoryName: '',
            reqQueueName: '',
            reqSchemaName: '',
            reqXsltName: '',
            requestTag: '',
            respDirectoryName: '',
            respQueueName: '',
            respSchemaName: '',
            respXsltName: '',
            responseTag: '',
            serviceCode: '',
            serviceTag: '',
            updatedAt: '',
            verifiedEver: '',
            verifierDtStamp: '',
            verifierId: '',
            xsdFile: '',
            authStatus: '',
            updatedBy: '',
            fristTimeAuth: '',
            versionNo: '',
            maxUploadLimit: '',
            fileName: '',
            bdav: '',
            backDateAllow: '',
            futureDateAllow: '',
            fdav: '',
            acft: '',
            autoUpload: '',
            filePath: '',
            fCYRateVariance: '',
            fCYPercentage: '',
            sftpRequired: '',
            sftpIpaddress: '',
            sftpPassword: '',
            sftpPath: '',
            sftpPort: '',
            sftpUsername: '',
            mandatoryFieldImposed: '',
            treasuryrefRequired: '',
            wuFile: '',
            verifiedOnce: ''
        });
        // -- Sytstem Param Maintenance  --
        // 1. Transaction Code Maintenance
        this.transactionCodeSummryData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            userId: '',
            creatorDtStamp: '',
            creatorId: '',
            modNo: '',
            recordStatus: '',
            verifiedStatus: '',
            verifiedBy: '',
            verifiedOnce: '',
            verifiedTime: '',
            medTransCode: []
        });
        this.globalGccSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            globalGlCodeId: '',
            medGlobalGlCodeDetails: [],
            permission: '',
            recordStatus: '',
            modNo: '',
            activeTab: '',
        });
        this.globalAccSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            globalGlCodeId: '',
            medGlobalGlCodeDetails: [],
            permission: '',
            recordStatus: '',
            modNo: '',
            activeTab: ''
        });
        this.userGCCSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            userGlCodeId: '',
            medUserGlCodeDetails: [],
            permission: '',
            recordStatus: '',
            versionNo: '',
            activeTab: ''
        });
        this.userACCSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            userAccClassId: '',
            medUserAccountClassDetails: [],
            permission: '',
            recordStatus: '',
            versionNo: '',
            activeTab: ''
        });
        this.homeactiveTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            activeTab: '',
        });
        this.profileactiveTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            activeTab: '',
        });
        //File upload end
        // External System
        this.externalSystemData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            department: '',
            extSysCode: '',
            extSysName: '',
            modifiedBy: '',
            modifiedTime: '',
            recordStatus: '',
            verifiedOnce: '',
            version: '',
        });
        this.securityDetailsEdit = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            createdBy: '',
            createdDate: '',
            isActive: '',
            maxInvLogins: '',
            maxPswdLength: '',
            minPswdLength: '',
            modifiedBy: '',
            modifiedTime: '',
            notifyPasswordExpiryInDays: '',
            pswdComplexLcase: '',
            pswdComplexNum: '',
            pswdComplexSplc: '',
            pswdComplexUcase: '',
            pswdExpiry: '',
            pswdReuseAft: '',
            recordStatus: '',
            version: ''
        });
        this.customerSearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            firstName: '',
            customerNumber: '',
            accountNumber: '',
            mobileNo: '',
            lastName: '',
            customerName: '',
            branchCode: '',
            nationalId: '',
            email: ''
        });
        this.AccountBlocking = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            exit: '',
        });
        this.CustomerSearchFormValues = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            firstName: '',
            customerNumber: '',
            accountNumber: '',
            mobileNo: '',
            lastName: '',
            customerName: '',
            branchCode: '',
            nationalId: '',
        });
        // Excel Mapping
        this.excelSummaryObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            extSysCode: '',
            processName: '',
            extSys: '',
            authStatus: '',
            currency: '',
            sheetNumber: ''
        });
        // this._baseURL = AppConstants.baseURL + '/role';
        this._baseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/medRoles' + '/fetchAllRolesSummary';
        this._fmosbaseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/medRoles';
    }
    getAllExtSys() {
        return this.http.get(`${this.uriForExt}` + `/extsysdata?pageNo=${0}&pageSize=${1000}`);
    }
    fetchnewscreenlabels() {
        return this.http.get(`${this._fmosbaseURL}` + '/fetchTabLabelAndScreen');
    }
    uploadDocument(uploadData) {
        return this.http.post(`${API_URL}/users/uploadProfileImage`, uploadData);
    }
    getCustomerDocuments(user_id) {
        return this.http.get(`${API_URL}/users/getProfileImage?userId=${user_id}`);
    }
    changePasswordService(obj) {
        return this.http.post(`${API_URL}/login/changePassword/`, obj);
    }
    getProcessCode() {
        return this.processCodeMappingObject.asObservable();
    }
    setProcessCodeData(processCode) {
        this.processCodeMappingObject.next(processCode);
    }
    getAllExt() {
        return this.http.get(`${this.ext}` + `/getExt?pageNo=${0}&pageSize=${1000}`);
    }
    // getAllAuthExt(): Observable<any> {
    //   return this.http.get(`${this.uriForExt}` + `/getAllAuthExtCode`);
    // }
    getAllAuthExt() {
        return this.http.get(`${this.ext}` + `/gettingExtsysCodeonAuthSatus`);
    }
    modifyExtSysService(modifyextSys) {
        return this.http.put(`${this.uriForExt}` + `/modifyextSys`, modifyextSys);
    }
    getMonitorData() {
        return this.http.get(`${API_URL}/excelDataForProcessScreeen/getMonitorData`);
    }
    getData() {
        // //console.log(this.http.get(`${this.dashboardapi}/dashboardchartdata`));
        return this.http.get(`${this.dashboardapi}/dashboardchartdata`);
    }
    createExtSys(extSys) {
        return this.http.post(`${this.uriForExt}` + '/createExtSys', extSys);
    }
    updateExtSys(extSys) {
        return this.http.put(`${this.uriForExt}` + '/modifyextSys', extSys);
    }
    fetchMedUser(userId) {
        return this.http.get(`${API_URL}/login/getUserByUserId/${userId}`);
    }
    fetchAutoPassword(userId) {
        return this.http.post(`${API_URL}/login/autoGeneratePassword?userId=${userId}`, userId);
    }
    fetchSecurityPolicyService() {
        return this.http.get(`${API_URL}/securityPolicy/fetch`);
    }
    accountBlock(data) {
        return this.http.post(`${API_URL}/api/blockCustAcc`, data);
    }
    getAuthorizedExt() {
        return this.http.get(`${this.ext}/gettingExtsysCodeonAuthSatus`);
    }
    getOtp(login) {
        return this.http.post(`${API_URL}/login/otp`, login);
    }
    loginService(login) {
        return this.http.post(`${API_URL}/login/credentials`, login);
    }
    gettingTransactionCodeSummary() {
        return this.http.get(`${median}/config/getSummaryForTransactionCodeMapping?pageNo=${0}&pageSize=${5000}`);
    }
    // saveTrnCodeMaster(master): Observable<any> {
    //   return this.http.post<boolean>(`${median}/config/saveTrnMaster`, master);
    // }
    saveTrnCode(trnData, userId, loggedInuser) {
        return this.http.post(`${median}/config/saveTrn/${userId}/${loggedInuser}`, trnData);
    }
    getUserName() {
        return this.http.get(`${median}/config/getAllUsername`);
    }
    gettingTransactionDatabyID(UserId) {
        return this.http.get(`${API_URL}/config/getTrnData/${UserId}`);
    }
    setSummaryDataTransactionCode(summaryData) {
        console.log(summaryData);
        this.transactionCodeSummryData.next(summaryData);
    }
    getSummaryDataTransactionCode() {
        return this.transactionCodeSummryData.asObservable();
    }
    setGlobalGccSummary(summaryData) {
        this.globalGccSummary.next(summaryData);
    }
    setHomeactiveTab(homeActive) {
        this.homeactiveTab.next(homeActive);
    }
    getHomeactiveTab() {
        return this.homeactiveTab.asObservable();
    }
    setProfileactiveTab(profileActive) {
        this.profileactiveTab.next(profileActive);
    }
    getProfileactiveTab() {
        return this.profileactiveTab.asObservable();
    }
    getGlobalGccSummary() {
        return this.globalGccSummary.asObservable();
    }
    setGlobalAccSummary(summaryData) {
        console.log(summaryData);
        this.globalAccSummary.next(summaryData);
    }
    getGlobalAccSummary() {
        return this.globalAccSummary.asObservable();
    }
    setUserGCCSummary(summaryData) {
        this.userGCCSummary.next(summaryData);
    }
    getuserGCCSummary() {
        return this.userGCCSummary.asObservable();
    }
    setUserACCSummary(summaryData) {
        this.userACCSummary.next(summaryData);
    }
    getuserACCSummary() {
        return this.userACCSummary.asObservable();
    }
    deleteRow(id, loggedInUser) {
        return this.http.delete(`${API_URL}/config/deleteRow/${id}?loggedInUser=${loggedInUser}`);
    }
    deleteuserGLRow(id) {
        return this.http.delete(`${API_URL}/userAccGL/deleteAccountDetailByIdRow/${id}`);
    }
    deleteuserAccountClassRow(id) {
        return this.http.delete(`${API_URL}/userAccGL/deleteAccountDetailByIdRow/${id}`);
    }
    deleteglobalGCRow(id) {
        return this.http.delete(`${API_URL}/globalAccGL/deletegGlDetailByIdRow/${id}`);
    }
    deleteUserData(UserId) {
        return this.http.delete(`${API_URL}/config/deleteWholeRecord/${UserId}`);
    }
    deleteTransactionData(UserId, loggedInUser) {
        return this.http.delete(`${API_URL}/config/deleteWholeRecord/${UserId}?loggedInUser=${loggedInUser}`);
    }
    onClckOfAuthTransactionCode(operation, MedTransOperationData) {
        return this.http.put(`${API_URL}/config/${operation}`, MedTransOperationData);
    }
    onclickOfCloseTransactionCode(operation, MedTransOperationData) {
        return this.http.put(`${API_URL}/config/${operation}`, MedTransOperationData);
    }
    onclickOfReopenTransactionCode(operation, MedTransOperationData) {
        return this.http.put(`${API_URL}/config/${operation}`, MedTransOperationData);
    }
    updateAuditData(master) {
        return this.http.put(`${API_URL}/config/modifyMaster`, master);
    }
    updateTransactionCode(trnData, userId, loggedInuser) {
        return this.http.put(`${API_URL}/config/modify/${userId}/${loggedInuser}`, trnData);
    }
    todayUploadedBatches(userName) {
        return this.http.get(`${this.dashboardapi}/getUploadBatches/${userName}`);
    }
    getChartDetails() {
        return this.http.get(`${this.dashboardapi}/dashboardchartdata`);
    }
    pendingUnauthorizeBatches(userName) {
        return this.http.get(`${this.dashboardapi}/getPendingBatches/${userName}`);
    }
    authorizedBatchesByuser(userName) {
        return this.http.get(`${this.dashboardapi}/getAuthorizedBatches/${userName}`);
    }
    getAllRoles() {
        // return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this._baseURL}?pageNo=${0}&pageSize=${1000}`);
    }
    getAllUsersListService() {
        return this.http.get(`${this.API_URL}/users/getAllUsers?pageNo=${0}&pageSize=${1000}`);
    }
    // audit Logs
    getAllAuditData() {
        return this.http.get(`${this.API_URL}` + `/auditLogs/getAllAuditLogs?pageNo=${0}&pageSize=${1000}&sortBy=${'creatorDtStamp'}`);
    }
    getAllAuditDataByDate(from, to) {
        return this.http.get(`${this.API_URL}/dataauditsList/${from}/${to}`);
    }
    // 2. Global GI/ACC Maintenance
    getGlData(type) {
        return this.http.get(`${median}/globalAccGL/getAllGlobalGlData/${type}`);
    }
    onClckOfOperationGlobal(operation, userIdLoggedIn, data) {
        return this.http.put(`${API_URL}/globalAccGL/globalgl/${operation}/${userIdLoggedIn} `, data);
    }
    onClckOfOperationACC(operation, userIdLoggedIn, data) {
        return this.http.put(`${API_URL}/globalAccGL/globalgl/${operation}/${userIdLoggedIn}`, data);
    }
    onClckOfOperationGCCUser(operation, userIdLoggedIn, data) {
        return this.http.put(`${API_URL}/userAccGL/userGl/${operation}/${userIdLoggedIn}   `, data);
    }
    onClckOfOperationACCUser(operation, userIdLoggedIn, data) {
        return this.http.put(`${API_URL}/userAccGL/userGl/${operation}/${userIdLoggedIn} `, data);
    }
    getAccData(type) {
        return this.http.get(`${median}/globalAccGL/getAllGlobalGlData/${type}`);
    }
    deleteGlData(row, UserId) {
        return this.http.post(`${median}/config/deletegGlData/${UserId}`, row);
    }
    deleteAcData(row, UserId) {
        return this.http.post(`${median}/config/deleteAcData/${UserId}`, row);
    }
    saveGlCodeData(trnData, userId) {
        return this.http.post(`${median}/globalAccGL/globalsaveGl/${userId}`, trnData);
    }
    deleteUserGCC(userGlCodeId, userId) {
        return this.http.delete(`${API_URL}/userAccGL/deleteUserGlData/${userGlCodeId}`);
    }
    deleteUserACC(userAccClassId, userId) {
        return this.http.delete(`${API_URL}/userAccGL/deleteUserGlData/${userAccClassId}`);
    }
    deleteGCCuserdata(id) {
        return this.http.delete(`${API_URL}/globalAccGL/deletegGlDetailById/${id}`);
    }
    deleteACCuserdata(id) {
        return this.http.delete(`${API_URL}/deletegGlDetailById/${id}`);
    }
    updateGlCodeData(updatData, operation, userIdLoggedIn) {
        return this.http.put(`${median}/globalAccGL/globalgl/${operation}/${userIdLoggedIn} `, updatData);
    }
    updateACCCodeData(updatData, operation, userIdLoggedIn) {
        return this.http.put(`${median}/globalAccGL/globalgl/${operation}/${userIdLoggedIn} `, updatData);
    }
    updateUserGlCodeData(updatData, operation, userIdLoggedIn) {
        return this.http.put(`${median}/userAccGL/userGl/${operation}/${userIdLoggedIn}`, updatData);
    }
    updateUserACCCodeData(updatData, operation, userIdLoggedIn) {
        return this.http.put(`${median}/userAccGL/userGl/${operation}/${userIdLoggedIn}`, updatData);
    }
    saveAccountCodeData(trnData, userId) {
        return this.http.post(`${median}/globalAccGL/globalsaveGl/${userId}`, trnData);
    }
    // 3. User GL Maintenance
    getUserIdGlData(UserId, type) {
        return this.http.get(`${API_URL}/userAccGL/getGlData/${UserId}/${type}`);
    }
    getUserIdAccData(UserId, type) {
        return this.http.get(`${API_URL}/userAccGL/getGlData/${UserId}/${type}`);
    }
    saveuserGlCode(trnData, userId, permission) {
        return this.http.post(`${API_URL}/userAccGL/saveGl/${userId}/${permission}`, trnData);
    }
    saveAccountClassCode(trnData, userId, permission) {
        return this.http.post(`${API_URL}/userAccGL/saveGl/${userId}/${permission}`, trnData);
    }
    deleteAcDataUser(row, UserId) {
        return this.http.post(`${API_URL}/config/deleteAccountData/${UserId}`, row);
    }
    deleteGlDataUser(row, UserId) {
        return this.http.post(`${API_URL}/config/deleteUserGlData/${UserId}`, row);
    }
    //File upload start
    getAuditLogService(excelDataProcessingReqDTO, user_id) {
        return this.http.post(`${API_URL}/excelDataProcessing/getExcelDataProcessingAuditLog/${user_id}`, excelDataProcessingReqDTO);
    }
    showDetailServiceInExcelDataProcessing(excelDataProcessingReqDTO, user_id) {
        // return this.http.post(
        //   `${API_URL}/excelDataProcessing/showDetails/${user_id}`,
        //   excelDataProcessingReqDTO
        // );
        return this.http.post(`${API_URL}/excelDataProcessing/uploadExcelFile/${user_id}`, excelDataProcessingReqDTO);
    }
    getAllExtSysNamesService(userId) {
        return this.http.get(`${API_URL}/excelDataProcessing/getAllExtSysNames/${userId}`);
    }
    getUploadPermission(extSysName, processName) {
        return this.http.get(`${API_URL}/excelDataProcessing/getUploadPermission/${extSysName}/${processName}`);
    }
    getProcessNamesBasedOnExtSysNameService(extSysCode) {
        return this.http.get(`${API_URL}/excelDataProcessing/getProcessCodeByExtSysName?extSysCode=${extSysCode}`);
    }
    getAllTransactionCode(user_id) {
        return this.http.get(`${API_URL}/config/getTrnData/${user_id}`);
    }
    processDataService(modalProcessDataReqDTO, userName, remarks) {
        // return this.http.post<boolean>(
        //   `${API_URL}/excelDataForProcessScreeen/processData/${userName}/${remarks}`,
        //   modalProcessDataReqDTO
        // );
        return this.http.post(`${API_URL}/excelDataForProcessScreeen/processExcelData/${userName}/${remarks}`, modalProcessDataReqDTO);
    }
    test(userid) {
        // return this.http.get<any>(`${API_URL}/excelDataProcessing/t`);
        return this.http.get(`${API_URL}/excelDataProcessing/get/${userid}`);
    }
    showDetailServiceInExcelDataWithFile(file, extSysNameData, processNameData, filename) {
        // return this.http.post(
        //   `${API_URL}/excelDataProcessing/getExcelFile`,file
        const formdata = new FormData();
        formdata.append('file', file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${API_URL}/excelDataProcessing/getExcelFile/${extSysNameData}/${processNameData}/${filename}`, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    }
    rejectCallApi(deUploadReqDTO, authorizer, rejectReason) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/reject/${authorizer}/${rejectReason}`, deUploadReqDTO);
    }
    approveDetailsData(deUploadReqDTO, authorizer) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/doFirstLevelAuthorization/${authorizer}`, deUploadReqDTO);
    }
    processDeUploadt(deUploadReqDTO, user_id) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/processDeUpload/${user_id}`, deUploadReqDTO);
    }
    getFirstAndSecondAuthAuditService(getDetailsQueryToggleReqDTO) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/getFirstAndSecondLevelAuthAuditLog/`, getDetailsQueryToggleReqDTO);
    }
    sendUpdatedDataToDetailsData(modifiedDetailsDataReqDTO, userName) {
        return this.http.post(`${API_URL}/dataModificationDetails/saveAndUpdateDetails/${userName}`, modifiedDetailsDataReqDTO);
    }
    queryDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/getDetailsDataByToggleQuery`, getDetailsQueryToggleReqDTO);
    }
    getDetailsListServiceFirst() {
        return this.http.get(`${API_URL}/excelDataAuthFirst/getExcelDetail`);
    }
    getPendingForAuthDataFirst(userId) {
        return this.http.get(`${API_URL}/excelDataAuthFirst/getPendingAuth/${userId}`);
    }
    getAuditDataOfDetailsRecord(detailsDto) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/getAuditLogOfDetailRecord/`, detailsDto);
    }
    queryFailedDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
        return this.http.post(`${API_URL}/dataModificationDetails/getDetailsDataByToggleQuery`, getDetailsQueryToggleReqDTO);
    }
    getPendingForAuthDataForModification(user_id) {
        return this.http.get(`${API_URL}/dataModificationDetails/getPendingAuth/${user_id}`);
    }
    excelModifyAuthorization(PendingForAuthDetailsDTOList, user) {
        return this.http.post(`${API_URL}/dataModificationDetails/sendforAuth/${user}`, PendingForAuthDetailsDTOList);
    }
    getFailedDetailsListService() {
        return this.http.get(`${API_URL}/dataModificationDetails/getFailedDetailsList`);
    }
    authorizeSecondLevel(pendingForAuthDetailsListAll, authorizer) {
        return this.http.post(`${API_URL}/excelDataAuthSecond/doSecondLevelAuthorization/${authorizer}`, pendingForAuthDetailsListAll);
    }
    getSecondLevelAuthDetailsData() {
        return this.http.get(`${API_URL}/excelDataAuthSecond/getSecondAuthDetailsData`);
    }
    // queryDetailsDataByParamServiceSecond(
    //   getDetailsQueryToggleReqDTO: GetDetailsQueryToggleReqDTO
    // ) {
    //   return this.http.post<PendingForAuthDetailsDTO>(
    //     `${API_URL}/excelDataAuthSecond/getDetailsDataByToggleQuery`,
    //     getDetailsQueryToggleReqDTO
    //   );
    // }
    queryDetailsDataByParamServiceSecond(batchNo) {
        return this.http.get(`${API_URL}` + `/excelDataAuthSecond/getUploadDetailsData?batchNo=${batchNo}`);
    }
    // queryDetailsDataByParamServiceSecond1(
    //   batchNo: GetDetailsQueryToggleReqDTO
    // ) {
    //   return this.http.post<PendingForAuthDetailsDTO>(
    //     `${API_URL}/excelDataAuthSecond/getUploadDetailsData/${batchNo}`,
    //   );
    // }
    processDeUpload(deUploadReqDTO, user_id) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/processDeUpload/${user_id}`, deUploadReqDTO);
    }
    getPendingForAuthDataFirstError(userId) {
        return this.http.get(`${API_URL}/dataModificationDetails/getPendingAuth/${userId}`);
    }
    getAllDept() {
        return this.http.get(`${this.ext}` + '/getAllAuthDepts');
    }
    saveExternalSystem(customer) {
        return this.http.post(`${this.ext}` + `/create`, customer);
    }
    setExternalSystemSummry(summaryData) {
        this.externalSystemData.next(summaryData);
    }
    getExternalSystemSummry() {
        return this.externalSystemData.asObservable();
    }
    updateexternalSystemEdit(formData) {
        return this.http.put(`${this.ext}` + `/update`, formData);
    }
    // authorizingTheRecord(formData: object, name: string) {
    //   return this.http.put(`${this.ext}` + `/authorizetherecord/${name}`, formData)
    // }
    authorizingTheRecord(extsobj, name) {
        return this.http.put(`${this.uriForExt}` + `/authorizetherecordOfExteranlSystem/${name}`, extsobj);
    }
    authorizingTheRecordExternal(extsobj, name) {
        return this.http.put(`${this.ext}` + `/authorizetherecord/${name}`, extsobj);
    }
    closingTheRecord(formData) {
        return this.http.put(`${this.ext}` + `/toClosingTheRecord`, formData);
    }
    reopeningTheRecord(formData) {
        return this.http.put(`${this.ext}` + `/reopeningTheRecord`, formData);
    }
    onClickOfDeleteOfUpdateExcel(formData) {
        return this.http.put(`${this.ext}` + `/delete`, formData);
    }
    fetchingBatchNo() {
        return this.http.get(`${API_URL}/medUpload/getModule`);
    }
    getMappingSummary() {
        return this.http.get(`${this.excelmap}/fetchAllMappingData?pageNo=${0}&pageSize=${1000}`);
    }
    getExcelMappingDataforEdit(extSysCode, processName, extSys) {
        return this.http.get(`${this.excelmap}/getExcelMappingInfo?extSysCode=${extSysCode}&processName=${processName}&extSys=${extSys}`);
    }
    getTemplateMappingDataforEdit(externalSystem, processCode, currency, sheetNumber) {
        return this.http.get(`${this.excelmap}/fetchExcelMapping?externalSystem=${externalSystem}&processCode=${processCode}&currency=${currency}&sheetNumber=${sheetNumber}`);
    }
    deleteTemplateMapping(externalSystem, processCode, currency, sheetNumber) {
        return this.http.delete(`${this.excelmap}/deleteMapping?externalSystem=${externalSystem}&processCode=${processCode}&currency=${currency}&sheetNumber=${sheetNumber}`);
    }
    getAllExtsysNameAndProcessCodeOnAuthStatus() {
        return this.http.get(`${this.uriForExt}/getAllExternalSystemMap`);
    }
    getAllExtsysNameOnAuthStatus() {
        return this.http.get(`${this.uriForExt}/getAllExternalSystem`);
    }
    getAllExtCode() {
        return this.http.get(`${this.uriForExt}` + '/getAllExtCode');
    }
    getProcessNameByExtSysCode(extSysCode) {
        return this.http.get(`${this.uriForExt}/getAllProcessCodeForExternalSystem/${extSysCode}`);
    }
    getExtSysNameByExtSysCode(extSysCode) {
        return this.http.get(`${this.uriForMap}/getExtsysByExtCode/${extSysCode}`, { responseType: 'text' });
    }
    columnData(formData, extSys, processName, headerRepeated, startingRow, extCode, currency, userId, sheetNumber) {
        return this.http.post(`${this.excelmap}/postColumnMapping/${extSys}/${processName}/${headerRepeated}/${startingRow}/${extCode}/${currency}/${userId}/${sheetNumber}`, formData);
    }
    fetchAllName(externalSystem, processCode, ccy) {
        return this.http.get(`${this.uriForMap}/fetchAllName/${externalSystem}/${processCode}/${ccy}`);
    }
    getCurrencyOnExtNameAndProcssCode(extSysCode, processCode, extNameValue) {
        return this.http.get(`${this.uriForMap}/gettingCurrency/${extSysCode}/${processCode}/${extNameValue}`);
    }
    setexcelSummaryData(excelsummary) {
        this.excelSummaryObject.next(excelsummary);
    }
    getexcelSummaryData() {
        return this.excelSummaryObject.asObservable();
    }
    getAllMappingByExtSysAndProcessCode(externalSystem, processCode, ccy, sheetNumber) {
        return this.http.get(`${this.uriForMap}/fetchAllMapping/${externalSystem}/${processCode}/${ccy}/${sheetNumber}`);
    }
    updateMappingData(model, extNameValue, processCode, extSysCode, starting, isChecked, modifiedBy, ccy, sheetNumber) {
        return this.http.put(`${this.uriForMap}/updateMapping/${extNameValue}/${processCode}/${extSysCode}/${starting}/${isChecked}/${modifiedBy}/${ccy}/${sheetNumber}`, model);
    }
    deleteMappingRow(id) {
        return this.http.delete(`${this.uriForMap}/deleteMappingRow/${id}`);
    }
    onAuthorizingTheRecordOfExcelMApping(model, extNameValue, processCode, extSysCode, userId, ccy) {
        return this.http.put(`${this.uriForMap}/authOfRecord/${extNameValue}/${processCode}/${extSysCode}/${userId}/${ccy}`, model);
    }
    excelMappingAuditLog(model, operation) {
        return this.http.put(`${this.uriForMap}/excelMapping/${operation}`, model);
    }
    createTemplateMap(obj) {
        return this.http.post(`${API_URL}/excelmap/createExcelMapping`, obj);
    }
    onClcikOFCloseOfUpdateExcelMApping(model, extNameValue, processCode, extSysCode, ccy) {
        return this.http.put(`${this.uriForMap}/closeOfRecord/${extNameValue}/${processCode}/${extSysCode}/${ccy}`, model);
    }
    onClcikOfReopenOfUpdateExcelMapping(model, extNameValue, processCode, extSysCode, ccy) {
        return this.http.put(`${this.uriForMap}/reOpenOfRecord/${extNameValue}/${processCode}/${extSysCode}/${ccy}`, model);
    }
    sendingBatchNumber(batchNo) {
        console.log(batchNo);
        return this.http.get(`${API_URL}/medUpload/get/${batchNo}`);
    }
    closingProcessCodeRecord(obj) {
        return this.http.put(`${this.uriForExt}/close`, obj);
    }
    reopeningProcessCodeRecord(obj) {
        return this.http.put(`${this.uriForExt}/reOpen`, obj);
    }
    authProcessCodeRecord(obj) {
        return this.http.put(`${this.uriForExt}/authorize`, obj);
    }
    deleteProcessRecord(extSysName, processCode, userIdLoggedIn) {
        return this.http.delete(`${this.uriForExt}/${extSysName}/${processCode}/${userIdLoggedIn}`, { responseType: 'text' });
    }
    setCustomerSearch(data) {
        this.customerSearch.next(data);
    }
    getCustomerSearch() {
        return this.customerSearch.asObservable();
    }
    setSecurityPolicy(data) {
        this.securityDetailsEdit.next(data);
    }
    getsecurityDetailsEdit() {
        return this.securityDetailsEdit.asObservable();
    }
    setAccountBlocking(data) {
        this.AccountBlocking.next(data);
    }
    getAccountBlocking() {
        return this.AccountBlocking.asObservable();
    }
    setCustomerSearchValues(data) {
        this.CustomerSearchFormValues.next(data);
    }
    getCustomerSearchValues() {
        return this.CustomerSearchFormValues.asObservable();
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79389:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/jwt-auth.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEMO_TOKEN": function() { return /* binding */ DEMO_TOKEN; },
/* harmony export */   "DEMO_USER": function() { return /* binding */ DEMO_USER; },
/* harmony export */   "JwtAuthService": function() { return /* binding */ JwtAuthService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 75428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-store.service */ 69122);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);






const DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlBSQUJIQVQiLCJ1c2VySWQiOjEsInRlbGxlck5hbWUiOiJQUkFCSEFUIEsifQ.QwgZI9XZtYS6OUJLL1vlEHBi6KLCSgv7O10Kqi-uY_4";
const DEMO_USER = {
    "userName": "PRABHAT",
    "userId": 1,
    "tellerName": "PRABHAT K"
};
class JwtAuthService {
    constructor(ls, http, router, route) {
        this.ls = ls;
        this.http = http;
        this.router = router;
        this.route = route;
        this.user = {};
        this.user$ = (new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.user));
        this.JWT_TOKEN = "token";
        this.APP_USER = "ICUST_USER";
    }
    /**
   * Setter & getter for access token
   */
    set accessToken(token) {
        localStorage.setItem('accessToken', token);
    }
    get accessToken() {
        var _a;
        return (_a = localStorage.getItem('accessToken')) !== null && _a !== void 0 ? _a : '';
    }
    signin() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ token: DEMO_TOKEN, user: DEMO_USER })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            this.setUserAndToken(res.token, res.user, !!res);
            this.signingIn = true;
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
        }));
    }
    /*
      checkTokenIsValid is called inside constructor of
      shared/components/layouts/admin-layout/admin-layout.component.ts
    */
    checkTokenIsValid() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(DEMO_USER)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((profile) => {
            this.setUserAndToken(this.getJwtToken(), profile, true);
            this.signingIn = false;
            return profile;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(error);
        }));
    }
    signout() {
        this.ls.clear();
        sessionStorage.clear();
        localStorage.removeItem('userFromLogin');
        localStorage.clear();
        this.signingIn = false;
        this.router.navigate(["/login"]);
    }
    isLoggedIn() {
        return !!this.getJwtToken();
    }
    getJwtToken() {
        return this.ls.getItem(this.JWT_TOKEN);
    }
    getUser() {
        return this.ls.getItem(this.APP_USER);
    }
    setUserAndToken(token, user, isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this.token = token;
        this.accessToken = token;
        this.user = user;
        this.user$.next(user);
        this.ls.setItem(this.JWT_TOKEN, token);
        this.ls.setItem(this.APP_USER, user);
        // sessionStorage.clear();
    }
    check() {
        if (sessionStorage.getItem('user_id') != null || sessionStorage.getItem('user_id') === '') {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
        }
    }
    encodeData(data) {
        return btoa(data);
    }
    decodeData(data) {
        console.log("data decr", data);
        let user = atob(data);
        console.log("decr", user);
        return JSON.parse(user);
    }
    getEncryptedToken() {
        let user = this.getUser();
        let encodedUser = this.encodeData(user);
        return encodedUser;
    }
}
JwtAuthService.ɵfac = function JwtAuthService_Factory(t) { return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_0__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
JwtAuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: JwtAuthService, factory: JwtAuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 69122:
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStoreService": function() { return /* binding */ LocalStoreService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LocalStoreService {
    constructor() {
        this.ls = window.localStorage;
    }
    setItem(key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    }
    getItem(key) {
        const value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return null;
        }
    }
    clear() {
        this.ls.clear();
    }
    removeItem(key) {
        this.ls.removeItem(key);
    }
    getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}
LocalStoreService.ɵfac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
LocalStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77382:
/*!*************************************************!*\
  !*** ./src/app/shared/services/role.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": function() { return /* binding */ RoleService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/fmosNewRolePermissions */ 35383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);

//import { AppConstants } from 'app/config/app.constant';





class RoleService {
    constructor(http) {
        this.http = http;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
        this.tabData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.screenLabelList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels());
        this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        this.screenpermissions = [];
        //public screenLabelList = new BehaviorSubject([]);
        this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.httpHeader = { header: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-type': 'application/json' }) };
        this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            index: '',
        });
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.getNavParam = this.paramSource.asObservable();
        this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/role';
        this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/medRoles';
        this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
    }
    setIndexValue(index) {
        this.Index.next(index);
    }
    getIndexValue() {
        return this.Index.asObservable();
    }
    sendNavParam(params) {
        this.paramSource.next(params);
    }
    createRoles(role) {
        // return this.http.delete(`${this._baseURL}/${userId}/${userIdLoggedIn}`, { responseType: 'text' });
        return this.http.post(`${this._baseURL}` + '/createRole', role);
    }
    getRoleByRoleName(roleName) {
        return this.http.get(`${this._baseURL}/${roleName}`);
    }
    getAllRoles() {
        //return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this.baseURL}` + '/users' + '/getAllAuthRole');
    }
    getAllDept() {
        //return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this.baseURL}` + '/users' + '/getAllAuthDepts');
    }
    getAllRolesSummary() {
        //return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this._fmosbaseURL}` + '/fetchAllRolesSummary');
    }
    fetchAllAuthRoles() {
        return this.http.get(`${this._baseURL}` + '/fetchAuthRoles');
    }
    modifyRoleService(modifyRole) {
        return this.http.put(`${this._baseURL}` + `/modifyRole`, modifyRole);
    }
    newmodifyRoleService(modifyRole) {
        return this.http.put(`${this._fmosbaseURL}` + `/modifyRole`, modifyRole);
    }
    verifyRole(roleName, userIdLoggedIn) {
        // return this.http.get(`${this._baseURL}/${roleName}/${userIdLoggedIn}`);
        return this.http.get(`${this._fmosbaseURL}/authorize/${roleName}/${userIdLoggedIn}`);
    }
    deleteRole(roleName, userIdLoggedIn) {
        return this.http.delete(`${this._fmosbaseURL}/${roleName}/${userIdLoggedIn}`, { responseType: 'text' });
    }
    closelockRecord(roleName, userIdLoggedIn) {
        return this.http.get(`${this._fmosbaseURL}/close/${roleName}/${userIdLoggedIn}`);
    }
    reopenRecord(roleName, userIdLoggedIn) {
        return this.http.get(`${this._fmosbaseURL}/reopen/${roleName}/${userIdLoggedIn}`);
    }
    //permission
    getAllPermission() {
        return this.http.get(`${this._baseURL}` + '/permission');
    }
    fetchScreenData() {
        const userIdLoggedIn = localStorage.getItem('userFromLogin');
        return this.http.get(`${this._fmosbaseURL}/allScreenUser/${userIdLoggedIn}`);
    }
    fetchnewscreenlabels() {
        return this.http.get(`${this._fmosbaseURL}` + '/fetchTabLabelAndScreen');
    }
    createnewrole(roledata) {
        console.log(roledata);
        return this.http.post(`${this._fmosbaseURL}` + '/saveRoleDetails', roledata);
    }
    fetchfmosroles() {
        const userIdLoggedIn = localStorage.getItem('userFromLogin');
        return this.http.get(`${this._fmosbaseURL}/allRolePermissionForUser/${userIdLoggedIn}`);
    }
    fetchScreenPermissions(screenName) {
        let userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
        console.log('scr', screenName, userPermissions);
        let labellist = [];
        this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        if (userPermissions) {
            let labelList = userPermissions.labels;
            if (labelList) {
                labelList.sort((a, b) => a.labelId - b.labelId);
            }
            let permissionList = userPermissions.screenAndPermissionsDTO;
            console.log(permissionList);
            if (permissionList) {
                let idexist = permissionList.findIndex(function (item) { return item.screenName.toLowerCase() == screenName.toLowerCase(); });
                if (idexist >= 0) {
                    let rolelist = permissionList[idexist];
                    let screenvisibility = rolelist.permissions.toString();
                    for (let i = 0; i < screenvisibility.length; i++) {
                        if (screenvisibility.charAt(i) == 1) {
                            labelList[i].exist = true;
                            labelList[i].labellowercase = labelList[i].labelName.toLowerCase();
                            labellist.push(labelList[i]);
                            this.screenData[labelList[i].labellowercase] = labelList[i];
                        }
                    } //for loop endng
                } //if screen data exist
            } //if permission list exist
        } //if permissions exist
        console.log('scr', this.screenData);
        this.screenLabelList.next(this.screenData);
        console.log('scr', this.screenLabelList);
    }
    fetchNewRolePermissions(userIdLoggedIn) {
        this.http.get(`${this._fmosbaseURL}/allRolePermissionForUser/${userIdLoggedIn}`).subscribe(data => {
            this.storeuserpermissions = data;
            localStorage.setItem('userPermissions', JSON.stringify(this.storeuserpermissions));
            console.log(this.storeuserpermissions);
        });
    }
    //dynamic roles
    fetchdynamicrolesdata(roleName) {
        return this.http.get(`${this._fmosbaseURL}/fetchRoleData/${roleName}`);
    }
    //end of dynamic roles
    preparingrolesdata(data) {
        let arrayC = [];
        let arrayB = data.screenDto;
        let labelsarray = data.labelDto;
        let permissionsarray = data.permissionDto;
        //fetch screens for tabs
        data.tabDto.forEach(function (element) {
            let screen = [];
            let screenslist = [];
            //fetching screen list 
            arrayB.forEach((items) => {
                if (element.tabId == items.screensId.tabId) {
                    let idexist = permissionsarray.findIndex(function (item) { return item.permissionId.screenId == items.screensId.screenId; });
                    screen.push(items.screenName);
                    screenslist.push({ screenname: items.screenName, screenid: items.screensId.screenId, permission: permissionsarray[idexist].permissions });
                }
            });
            //end of fetching screen list
            //fetching labels for screen
            let screenvisibility = element.visibility.toString();
            let label = [];
            let labellist = [];
            for (let i = 0; i < screenvisibility.length; i++) {
                if (screenvisibility.charAt(i) == 1) {
                    label.push(labelsarray[i].labelName);
                    labellist.push(labelsarray[i]);
                }
            }
            //end of fetching labels for screen
            arrayC.push({ tabname: element.tabName, screens: screen, screenlist: screenslist, labels: label, labelslist: labellist });
        });
        this.tabData.next(arrayC);
    }
    EnablescreenPermissions() {
        console.log(localStorage.getItem('userPermissions'));
        let userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
        console.log(userPermissions);
        let permissionlist = [];
        if (userPermissions) {
            let labelsdata = userPermissions.labels;
            labelsdata.sort((a, b) => a.labelId - b.labelId);
            let screensdata = userPermissions.screenAndPermissionsDTO;
            let viewindex = labelsdata.findIndex(function (item) { return item.labelName.toLowerCase() == 'view'; });
            ;
            for (let i = 0; i < screensdata.length; i++) {
                let data = screensdata[i].permissions.toString();
                if (data.charAt(viewindex) == 1 || data.charAt(viewindex) == "1") {
                    permissionlist.push(screensdata[i].screenName);
                }
            } //for loop endng
        } //if
        //console.log("methods are ",permissionlist);
        this.screenwisePermissions.next(permissionlist);
        this.screenwisePermissions.subscribe(message => this.screenpermissions = message);
        // console.log("screen permissions final", this.screenpermissions);
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98613:
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "rolepermission": function() { return /* binding */ rolepermission; },
/* harmony export */   "UsersService": function() { return /* binding */ UsersService; }
/* harmony export */ });
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);




const API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
const rolepermission = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/rolePermission';
//export const rolepermission1 = AppConstants.baseURL + '/fmsRoles';
//export const API_URL = 'http://192.168.0.142:8010';
//export const API_URL = 'http://localhost:8010';
//export const API_URL = 'http://192.168.0.113:8010';
class UsersService {
    constructor(http) {
        this.http = http;
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
        this.getNavParam = this.paramSource.asObservable();
        this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
            index: '',
        });
    }
    sendNavParam(params) {
        this.paramSource.next(params);
    }
    setIndexValue(index) {
        this.Index.next(index);
    }
    getIndexValue() {
        return this.Index.asObservable();
    }
    getRoleScreenPermission(userId, screenName, roleName) {
        return this.http.get(`${rolepermission}/getRolePermission/${userId}/${screenName}/${roleName}`);
    }
    getUserAuditService(userId) {
        return this.http.get(`${API_URL}/users/getModifiedUser/${userId}`);
    }
    getUserObjModified(userId) {
        return this.http.get(`${API_URL}/users/getModifiedUser/${userId}`);
    }
    createUserService(user) {
        return this.http.post(`${API_URL}/users/createUser`, user);
    }
    modifyUserService(user) {
        return this.http.post(`${API_URL}/users/modifyUser`, user);
    }
    uploadDocument(uploadData) {
        return this.http.post(`${API_URL}/users/uploadProfileImage`, uploadData);
    }
    getCustomerDocuments(userId) {
        return this.http.get(`${API_URL}/users/getProfileImage?userId=${userId}`);
    }
    deleteProfileImage(userId) {
        return this.http.delete(`${API_URL}/users/deleteProfileImage/${userId}`);
    }
    getAllUsersListService() {
        return this.http.get(`${API_URL}/users/getAllUsers`);
    }
    getAllRoleNameService() {
        return this.http.get(`${API_URL}/users/getAllRoleNames`);
    }
    getAllRoleNameServiceU() {
        return this.http.get(`${API_URL}/users/getAllRoleNamesU`);
    }
    getAllAuthRole() {
        return this.http.get(`${API_URL}/medRoles/fetchAllRolesSummary`);
    }
    // audit log starts
    onClickOfAuthOfUsers(authUser) {
        return this.http.get(`${API_URL}/users/getAllRoleNames`);
    }
    onClickOfOpenOfUsers() {
    }
    // Audit log  ends for User creatrion
    // -------------------User Modification-------------
    // audit log for User Modification Starts
    onClickOfAuthOfModifyUsers(obj) {
        return this.http.put(`${API_URL}/users/authorizeUser`, obj);
    }
    onClickOfCloseOfModifyUsers(authDto) {
        return this.http.put(`${API_URL}/users/closeUser`, authDto);
    }
    onClickOfReopenOfModifyUser(authDto) {
        return this.http.put(`${API_URL}/users/reopenUser`, authDto);
    }
    onClickOfDeleteOfModifyUser(userobjForDelete) {
        return this.http.delete(`${API_URL}/users/deleteUser/${userobjForDelete}`);
    }
    statusChangeUser(user_id) {
        return this.http.get(`${API_URL}/users/statusUser/${user_id}`);
    }
    refreshGl() {
        return this.http.get(`${API_URL}/refxch`);
    }
    saveTheme(userId, theme) {
        return this.http.put(`${API_URL}/users/updateTheme/${userId}/${theme}`, userId);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
const environment = {
    production: true,
    // MEDIAN_URL: 'http://10.127.43.228:8080/median',
    // ACC_CLOSER_URL: 'http://10.127.43.228:8080/medianAccountClosure'//account closer new
    //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2.2',
    //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianAccountClosure'//account closer new
    // MEDIAN_URL: 'https://10.137.145.90:8443/medianv2.2',
    //ACC_CLOSER_URL: 'https://10.137.145.90:8443/medianAccountClosure'//account closer new
    // MEDIAN_URL: 'https://10.137.160.96:8443/medianv2',
    // ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianv2'//account closer new
    //Currently Using Ports 
    MEDIAN_URL: 'http://192.168.0.14:9004/medianv2',
    //  MEDIAN_URL : 'http://localhost:9191',
    //ACC_CLOSER_URL: 'http://localhost:9192'
    // MEDIAN_URL: 'http://192.168.0.14:9003/medianBanzpay',
    // ACC_CLOSER_URL: 'http://192.168.0.9003/medianAccountClosure'
    //  MEDIAN_URL: 'http://192.168.0.14:8082/medianv2',
    //  MEDIAN_URL: 'http://192.168.0.14:9003/medianv2',
    //ACC_CLOSER_URL: 'http://localhost:9191'
    ACC_CLOSER_URL: 'http://192.168.0.14:9004/medianv2'
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map