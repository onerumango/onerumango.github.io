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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/local-store.service */ 69122);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/menu-collapse.directive */ 79511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);







const _c0 = function () { return ["/authorize-modification"]; };
function HeaderComponent_li_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](7, 7, data_r2 == null ? null : data_r2.processingDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("External System Name : ", data_r2 == null ? null : data_r2.externalSysName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("Batch No: ", data_r2 == null ? null : data_r2.batchNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("Currency : ", data_r2 == null ? null : data_r2.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("Process Name : ", data_r2 == null ? null : data_r2.processName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("FileName: ", data_r2 == null ? null : data_r2.fileName, "");
} }
function HeaderComponent_a_173_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_a_173_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r4.notToShowAll = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "View All >");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
const _c1 = function () { return ["/dashboard"]; };
class HeaderComponent {
    constructor(localStoreService, api, router) {
        this.localStoreService = localStoreService;
        this.api = api;
        this.router = router;
        this.notToShowAll = true;
    }
    ngOnInit() {
        this.user = localStorage.getItem("userFromLogin");
        this.department = localStorage.getItem("departmentHeader");
        this.departmentString = this.department.replace(/["]+/g, '');
        this.currentUser = localStorage.getItem("LoggedInUserHeader");
        this.currentUserString = this.currentUser.replace(/["]+/g, '');
        this.getPendingForAuthData();
    }
    openPopUp() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.ddTrigger', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('li').siblings().find('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('.ddParent').toggleClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('actUnread');
        });
    }
    closeAll() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on("click", function (event) {
            var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            }
        });
    }
    close() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.ddCloseTrigger', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
        });
    }
    changeTheme() {
        var lastBg = "";
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.tColor', function (e) {
            e.preventDefault();
            var bgClass = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data("id");
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active').parent().siblings().find('.tColor').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_0__('body').removeClass(lastBg).addClass(bgClass);
            lastBg = bgClass;
            jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
        });
    }
    logOut() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
        this.localStoreService.clear();
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['session/login']);
    }
    changePassword() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
        this.router.navigate(['change-password']);
    }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataFirstError(this.user).subscribe(resp => {
            // console.log(resp);
            this.pendingForAuthData = resp;
            console.log(this.pendingForAuthData);
        });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: HeaderComponent, selectors: [["npr-header"]], decls: 206, vars: 7, consts: [[1, "topBar"], [1, "row", "align-items-center"], [1, "col"], [1, "headerLeftCol"], [1, "row", "g-0", "align-items-center"], [1, "col-auto"], ["menuCollapse", "", 1, "navTrigger", 2, "cursor", "pointer"], [1, "tglLine", "tlTop"], [1, "tglLine", "tlCenter"], [1, "tglLine", "tlBtm"], [1, "logoIconLink", "d-none", "d-md-block", "d-xl-none", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo", 1, "logoIcon"], [1, "searchCol", "d-none"], [1, "searchIcon"], ["src", "assets/images/search-icon.svg", "alt", "...", "width", "13"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "headerRightOptions"], [1, "greet"], [1, "msgDDCol", "ddParent"], [1, "ddTrigger", "actUnread", 2, "cursor", "pointer", 3, "click"], [1, "ddTriggerContent"], ["src", "assets/images/msg-icon.svg", "alt", "..."], [1, "unreadIndicator"], [1, "ddContent"], [1, "ddHeader"], [1, "row"], [1, "xsTitle", "text-uppercase", "bold", "d-inline-block", "vAlignMdl"], [1, "ddCloseTrigger", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/close.svg", "alt", "..."], [1, "ddBody", "px-0"], ["data-mcs-theme", "dark", 1, "ddScroll", "mCustomScrollbar"], [1, "msgList"], [1, "fullLink"], [1, "msgUserImg"], ["src", "assets/images/user-img-03.png", "alt", "..."], [1, "msgContent"], [1, "msgContentTopCol"], [1, "dateTime"], [1, "dCol"], [1, "tCol"], [1, "text-truncate"], [1, "availableStatus", "online"], ["src", "assets/images/user-img-02.png", "alt", "..."], ["src", "assets/images/user-img-04.png", "alt", "..."], [1, "availableStatus"], [1, "viewAllLink"], [1, "notifyDDCol", "ddParent"], ["src", "assets/images/bell-icon.svg", "alt", "..."], ["data-mcs-theme", "dark", 1, "ddScroll"], [4, "ngFor", "ngForOf"], [3, "mouseover", "mouseout"], ["class", "viewAll", 3, "click", 4, "ngIf"], [1, "proDDCol", "ddStyle", "ddParent"], [1, "ddTrigger", 2, "cursor", "pointer", 3, "click"], [1, "userTrigger"], [1, "userImg"], ["src", "assets/images/user.png", "alt", "..."], [1, "d-none", "d-lg-inline-block", "userName", "text-truncate"], [1, "ddOptions"], [1, "themeColorsCol"], [1, "themeText"], ["data-id", "theme1", 1, "tColor", "theme1", "active", 3, "click"], ["data-id", "theme2", 1, "tColor", "theme2", 3, "click"], [2, "cursor", "pointer", 3, "click"], [1, "ddIcon"], ["src", "assets/images/gear-icon.svg", "alt", "..."], [1, "ddLinkText"], ["src", "assets/images/logout-icon.svg", "alt", "...", 1, "ml-3"], [1, "fullLink", 3, "routerLink"], [1, "d-block", "themeColor"], [1, "lightColor"], [1, "viewAll", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](28, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_a_click_31_listener() { return ctx.openPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](34, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_a_click_42_listener() { return ctx.closeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](48, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](50, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](55, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](57, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](58, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](59, "Vasiliki Kalogeraki");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](60, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](61, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](63, "Hello! Good Morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](65, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](66, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](67, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](69, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](70, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](71, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](72, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](74, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](75, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](76, "Angelos George");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](78, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](80, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](82, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](83, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](84, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](87, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](88, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](89, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](90, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](91, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](92, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](93, "A. Mused");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](94, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](95, "offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](97, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](99, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](100, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](101, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](102, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](104, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](105, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](106, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](107, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](108, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](109, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](110, "Angelos George");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](111, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](112, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](114, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](116, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](117, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](118, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](119, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](120, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](121, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](122, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](123, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](124, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](125, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](126, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](127, "Vasiliki Kalogeraki");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](128, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](129, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](131, "Hello! Good Morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](133, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](134, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](135, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](136, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](137, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](138, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](139, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](140, "8/18/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](141, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](142, "3:20am");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](143, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](144, "Angelos George");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](145, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](146, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](148, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](149, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](150, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](151, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](153, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](154, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_a_click_154_listener() { return ctx.openPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](155, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](156, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](157, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](158, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](159, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](160, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](161, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](162, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](163, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](164, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](165, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_a_click_165_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](166, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](167, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](168, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](169, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](170, HeaderComponent_li_170_Template, 18, 11, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](171, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](172, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("mouseover", function HeaderComponent_Template_a_mouseover_172_listener() { return ctx.changeText2 = true; })("mouseout", function HeaderComponent_Template_a_mouseout_172_listener() { return ctx.changeText2 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](173, HeaderComponent_a_173_Template, 2, 0, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](175, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](176, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_a_click_176_listener() { return ctx.openPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](177, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](178, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](179, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](180, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](182, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](183, "ul", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](185, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](186, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](187, " Themes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](188, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](190, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_span_click_190_listener() { return ctx.changeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](192, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_span_click_192_listener() { return ctx.changeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](195, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_a_click_195_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](196, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](197, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](198, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](199, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](201, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function HeaderComponent_Template_a_click_201_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](202, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](203, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](204, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](205, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("Department: ", ctx.departmentString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("Last logged in : ", ctx.currentUserString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.pendingForAuthData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.notToShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.user);
    } }, directives: [_directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_3__.MenuCollapseDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".viewAll[_ngcontent-%COMP%] {\n  color: #1bcd9d;\n  font-weight: 600;\n  padding-right: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdBbGwge1xyXG4gICAgY29sb3I6ICMxYmNkOWQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogNzBweDtcclxuICB9Il19 */"] });


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
LayoutComponent.??fac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
LayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: LayoutComponent, selectors: [["npr-layout"]], decls: 6, vars: 0, consts: [[1, "pageContent"], [1, "pageContentMain"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "npr-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "npr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-malihu-scrollbar */ 87210);
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
SharedComponentsModule.??fac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
SharedComponentsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule,
            ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_7__.MalihuScrollbarModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](SharedComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule, ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_7__.MalihuScrollbarModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by */ 34770);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 31600);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ 82119);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-malihu-scrollbar */ 87210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/dropdown.directive */ 43998);
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/dropdown-link.directive */ 97333);
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/dropdown-anchor.directive */ 82459);














const _c0 = function () { return ["/roles/list"]; };
const _c1 = function (a0) { return { "active": a0 }; };
function SidenavComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r1.handleActiveClass("roles")));
} }
const _c2 = function () { return ["/users"]; };
function SidenavComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r2.handleActiveClass("users")));
} }
const _c3 = function () { return ["/audit-logs"]; };
const _c4 = function () { return ["active"]; };
function SidenavComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Audit Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4));
} }
const _c5 = function () { return ["/security-policy"]; };
function SidenavComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Security Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4));
} }
const _c6 = function () { return ["/authorize-cash-payment"]; };
function SidenavComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Authorize Cash Payments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c6))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r5.handleActiveClass("authorize-cash-payment")));
} }
const _c7 = "/system-param-maintenance/transaction-code-summary";
const _c8 = function () { return [_c7]; };
function SidenavComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Transaction Code Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r6.handleActiveClass("transaction-code")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c8));
} }
const _c9 = "/system-param-maintenance/global-acc-maintenance-summary";
const _c10 = function () { return [_c9]; };
function SidenavComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Global Account Restriction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r7.handleActiveClass("global-acc-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c10));
} }
const _c11 = "/system-param-maintenance/user-gl-acc-maintenance-summary";
const _c12 = function () { return [_c11]; };
function SidenavComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " User Account Restriction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r8.handleActiveClass("user-gl-acc-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c12));
} }
const _c13 = "/system-param-maintenance/dept-id-maintenance-summary";
const _c14 = function () { return [_c13]; };
function SidenavComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Department ID Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r9.handleActiveClass("dept-id-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c14));
} }
const _c15 = function () { return ["/email-management"]; };
function SidenavComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Email-Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r10.handleActiveClass("email-management")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c15));
} }
const _c16 = function () { return ["/addSystem/summary"]; };
function SidenavComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Add System");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c16))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r11.handleActiveClass("addSystem")));
} }
const _c17 = function () { return ["/rule-translation/summary"]; };
function SidenavComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Rule Translation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c17))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r12.handleActiveClass("rule-translation")));
} }
const _c18 = function () { return ["/createrule/list"]; };
function SidenavComponent_li_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Create Rule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c18))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r13.handleActiveClass("createrule")));
} }
const _c19 = function () { return ["/rule-mapping/summary"]; };
function SidenavComponent_li_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Rule Mapping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c19))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r14.handleActiveClass("rule-mapping")));
} }
const _c20 = function () { return ["/external-system/extSys-summary"]; };
function SidenavComponent_li_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "External System");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r15.handleActiveClass("extSys")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c20));
} }
const _c21 = function () { return ["/external-system/processCodeMapping"]; };
function SidenavComponent_li_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Process Code Mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r16.handleActiveClass("processCodeMapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c21));
} }
const _c22 = function () { return ["/excel-mapping"]; };
function SidenavComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Template Mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](2, _c1, ctx_r17.handleActiveClass("excel-mapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c22));
} }
const _c23 = function () { return ["/file-upload/upload-excel"]; };
function SidenavComponent_li_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Upload Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c4))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c23));
} }
const _c24 = function () { return ["/file-upload/authorize_excel"]; };
function SidenavComponent_li_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Authorize Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r19.handleActiveClass("authorize_excel")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c24));
} }
const _c25 = function () { return ["/file-upload/rejection_queue"]; };
function SidenavComponent_li_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Rejection Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r20.handleActiveClass("rejection_queue")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c25));
} }
const _c26 = function () { return ["/authorize-modification"]; };
function SidenavComponent_li_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Authorize Modification");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r21.handleActiveClass("authorize-modification")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c26));
} }
const _c27 = function () { return ["/external-system/treasuryReference"]; };
function SidenavComponent_li_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Treasury Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r22.handleActiveClass("treasuryReference")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c27));
} }
const _c28 = function () { return ["/process-monitoring"]; };
function SidenavComponent_li_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Process Monitoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r23.handleActiveClass("process-monitoring")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c28));
} }
const _c29 = function () { return ["/customer-search"]; };
function SidenavComponent_li_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Customer Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c29))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r24.handleActiveClass("customer-search")));
} }
const _c30 = function () { return ["/initiate-account-closure"]; };
function SidenavComponent_li_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Initiate Account Closure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c30))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r25.handleActiveClass("initiate-account-closure")));
} }
const _c31 = function () { return ["/process-account-closure"]; };
function SidenavComponent_li_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Process Account Closure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c31))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r26.handleActiveClass("process-account-closure")));
} }
const _c32 = "/account-closure-maintenance/account-closure-summary";
const _c33 = function () { return [_c32]; };
function SidenavComponent_li_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Account Closure Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c33))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r27.handleActiveClass("account-closure-maintenance")));
} }
const _c34 = function () { return ["/charge-maintainence"]; };
function SidenavComponent_li_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Charge Maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](2, _c34))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r28.handleActiveClass("charge-maintainence")));
} }
const _c35 = function () { return ["/dashboard"]; };
class SidenavComponent {
    constructor(layoutService, roleService, location, mScrollbarService, cdr) {
        this.layoutService = layoutService;
        this.roleService = roleService;
        this.location = location;
        this.mScrollbarService = mScrollbarService;
        this.cdr = cdr;
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
        this.newRoleScreenPerm = [''];
        this.screendata = [''];
        this.screenpermissions = [];
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
        this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    }
    ngOnInit() {
        setTimeout(() => {
            this.EnablescreenPermissions();
        }, 500);
        // this.getRoleScreen();
        this.roleName = sessionStorage.getItem('user_role');
        this.screenpermission = localStorage.getItem('userPermissions');
        this.screenwisePermissions.subscribe(message => this.screenpermissions = message);
        this.getRoleScreen();
        this.roleName = sessionStorage.getItem('user_role');
        this.screenpermission = localStorage.getItem('userPermissions');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.roleService.fetchScreenData().subscribe(data => {
                this.screendata = data;
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
        console.log("methods are ", permissionlist);
        this.screenwisePermissions.next(permissionlist);
        this.screenwisePermissions.subscribe(message => this.screenpermissions = message);
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
    toggleNav(e) {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.sMenuLink > a').on("click", this.toggle);
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
SidenavComponent.??fac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef)); };
SidenavComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: SidenavComponent, selectors: [["npr-sidenav"]], hostBindings: function SidenavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resolveWindow"]);
    } }, decls: 93, vars: 34, consts: [["malihu-scrollbar", ""], ["sideMenu", ""], [1, "navOverlay"], [1, "sidebarCol"], [1, "sidebarLogo"], [3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "sidebarNavCol", "mCustomScrollbar"], ["appDropdown", "", 1, "sidebarNav"], [1, "navLbl"], [1, "navItem"], [1, "navLink", 3, "routerLink", "routerLinkActive"], [1, "navIcon"], ["src", "assets/images/home.svg", "alt", "..."], [1, "navText"], ["class", "navItem", 4, "ngIf"], ["appDropdownLink", "", "routerLinkActive", "open", 1, "navItem", "sMenuLink"], ["appDropdownToggle", "", 1, "navLink"], ["src", "assets/images/transaction.svg", "alt", "..."], [1, "submenuColMain"], ["appDropdown", "", 1, "subMenuCol"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngIf"], ["src", "assets/images/add-system.svg", "alt", "..."], ["src", "assets/images/external-system.svg", "alt", "..."], ["src", "assets/images/upload-excel.svg", "alt", "..."], ["src", "assets/images/customer-search.svg", "alt", "..."], ["src", "assets/images/inititate-account.svg", "alt", "..."], [1, "navLink", 3, "routerLink", "ngClass"], ["src", "assets/images/role.svg", "alt", "..."], ["src", "assets/images/user.svg", "alt", "..."], ["src", "assets/images/aduit.svg", "alt", "..."], ["src", "assets/images/security.svg", "alt", "..."], ["appDropdownLink", "", "routerLinkActive", "open"], [1, "subMenuLink", 3, "routerLink", "ngClass"], [1, "subMenuLink", 3, "ngClass", "routerLink"], [1, "subMenuLink", 3, "routerLinkActive", "routerLink"], [1, "subMenuLink", 3, "routerLinkActive", "ngClass", "routerLink"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](10, "System Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](17, SidenavComponent_li_17_Template, 6, 5, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](18, SidenavComponent_li_18_Template, 6, 5, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](19, SidenavComponent_li_19_Template, 6, 4, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](20, SidenavComponent_li_20_Template, 6, 4, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](26, "System Param Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](29, SidenavComponent_li_29_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](30, SidenavComponent_li_30_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](31, SidenavComponent_li_31_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](32, SidenavComponent_li_32_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](33, SidenavComponent_li_33_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](34, SidenavComponent_li_34_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](35, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](40, "System Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](42, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](43, SidenavComponent_li_43_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](44, SidenavComponent_li_44_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](45, SidenavComponent_li_45_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](46, SidenavComponent_li_46_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](49, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](50, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](51, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](52, "File Upload Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](54, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](55, SidenavComponent_li_55_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](56, SidenavComponent_li_56_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](57, SidenavComponent_li_57_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](58, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](59, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](60, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](61, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](62, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](63, "File upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](65, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](66, SidenavComponent_li_66_Template, 3, 4, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](67, SidenavComponent_li_67_Template, 3, 7, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](68, SidenavComponent_li_68_Template, 3, 7, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](69, SidenavComponent_li_69_Template, 3, 7, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](70, SidenavComponent_li_70_Template, 3, 7, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](71, SidenavComponent_li_71_Template, 3, 7, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](72, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](73, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](74, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](75, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](76, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](77, "Account Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](79, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](80, SidenavComponent_li_80_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](81, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](82, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](83, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](84, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](85, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](86, "Account Closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](87, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](88, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](89, SidenavComponent_li_89_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](90, SidenavComponent_li_90_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](91, SidenavComponent_li_91_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](92, SidenavComponent_li_92_Template, 3, 5, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](31, _c35));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](32, _c35))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](33, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Roles") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Users") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Audit Logs") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Security Policy") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Authorize Cash Payments") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Transaction Code Maintenance") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Global Account Restriction") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("User Account Restriction") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Department ID Maintenance") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Email-Management") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Add System") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Rule translation") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Create Rule") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Rule Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("External System") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Process Code Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Template Mapping") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Upload Excel") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Authorize Excel") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Rejection Queue") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Authorize Modification") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Treasury Reference") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Process Monitoring") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Customer Search") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Initiate Account Closure") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Process Account Closure") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Account Closure Maintenance") > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Charge Maintenance") > -1);
    } }, directives: [ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__.AppDropdownDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownLinkDirective, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownAnchorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass], styles: ["a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({ transform: 'translateY(-100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({ transform: 'translateY(0%)' }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({ transform: 'translateY(-100%)' }))
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
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
DropdownAnchorDirective.??fac = function DropdownAnchorDirective_Factory(t) { return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownLinkDirective)); };
DropdownAnchorDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: DropdownAnchorDirective, selectors: [["", "appDropdownToggle", ""]], hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ 43998);



class DropdownLinkDirective {
    constructor(nav, el, renderer) {
        this.el = el;
        this.renderer = renderer;
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
DropdownLinkDirective.??fac = function DropdownLinkDirective_Factory(t) { return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.AppDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
DropdownLinkDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({ type: DropdownLinkDirective, selectors: [["", "appDropdownLink", ""]], hostVars: 2, hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("activeSMenu", ctx.open);
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
AppDropdownDirective.??fac = function AppDropdownDirective_Factory(t) { return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
AppDropdownDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({ type: AppDropdownDirective, selectors: [["", "appDropdown", ""]] });


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
MenuCollapseDirective.??fac = function MenuCollapseDirective_Factory(t) { return new (t || MenuCollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
MenuCollapseDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: MenuCollapseDirective, selectors: [["", "menuCollapse", ""]], hostBindings: function MenuCollapseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MenuCollapseDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
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
SharedDirectivesModule.??fac = function SharedDirectivesModule_Factory(t) { return new (t || SharedDirectivesModule)(); };
SharedDirectivesModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: SharedDirectivesModule });
SharedDirectivesModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](SharedDirectivesModule, { declarations: [_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.MenuCollapseDirective,
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
NprModule.??fac = function NprModule_Factory(t) { return new (t || NprModule)(); };
NprModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: NprModule });
NprModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule,
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule
        ], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](NprModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);





class LayoutService {
    constructor(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
        this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
        this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
        this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
        this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
        this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.searchOpen$ = this._searchOpen.asObservable();
        this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
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
LayoutService.??fac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver)); };
LayoutService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: LayoutService, factory: LayoutService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_npr_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@npr/components/layout/layout.component */ 15070);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 87618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'session',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("src_app_views_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/auth/login/login.module */ 33794)).then(m => m.LoginModule),
    },
    {
        path: 'forget-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_forget-password_forget-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/forget-password/forget-password.module */ 82352)).then(m => m.ForgetPasswordModule),
    }, {
        path: '',
        component: src_npr_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_dashboard_dashboard-analytics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard-analytics.module */ 11164)).then(m => m.DashboardAnalyticsModule),
            }, {
                path: 'roles',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_roles_roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/roles/roles.module */ 57445)).then(m => m.RolesModule),
            }, {
                path: 'addSystem',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/addSystem/add-System/add-System.module */ 21067)).then(m => m.AddSystemModule),
            },
            {
                path: 'addSystem/summary',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/addSystem/add-System/add-System.module */ 21067)).then(m => m.AddSystemModule),
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
                path: 'process-monitoring',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_process-monitoring_process-monitoring_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/process-monitoring/process-monitoring.module */ 63420)).then(m => m.ProcessMonitoringModule),
            }, {
                path: 'security-policy',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_security-policy_security-policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/security-policy/security-policy.module */ 88185)).then(m => m.SecurityPolicyModule),
            }, {
                path: 'createrule',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule_rule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/rule/rule.module */ 11784)).then(m => m.RuleModule),
            }, {
                path: 'external-system',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/file-upload-maintenance/file-upload-maintenance.module */ 99776)).then(m => m.FileUploadMaintenanceModule),
            }, {
                path: 'system-param-maintenance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_system-param-maintenance_system-param-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/system-param-maintenance/system-param-maintenance.module */ 76464)).then(m => m.SystemParamMaintenanceModule),
            }, {
                path: 'file-upload',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap_fesm2015_ng-bootstrap_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_file-upload_file-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/file-upload/file-upload.module */ 9775)).then(m => m.FileUploadModule),
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
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/email-management/email-management.module */ 81089)).then(m => m.EmailManagementModule),
            },
            {
                path: 'email-management/create',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/email-management/email-management.module */ 81089)).then(m => m.EmailManagementModule),
            }, {
                path: 'customer-search',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap_fesm2015_ng-bootstrap_mjs"), __webpack_require__.e("src_app_views_customer-search_customer-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/customer-search/customer-search.module */ 9208)).then(m => m.CustomerSearchModule),
            },
            {
                path: 'customer-search/accountBlocking',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap_fesm2015_ng-bootstrap_mjs"), __webpack_require__.e("src_app_views_customer-search_customer-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/customer-search/customer-search.module */ 9208)).then(m => m.CustomerSearchModule),
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
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("src_app_views_excel-mapping_excel-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/excel-mapping/excel-mapping.module */ 18745)).then(m => m.ExcelMappingModule),
            }, {
                path: 'rule-mapping',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-mapping_rule-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/rule-mapping/rule-mapping.module */ 8690)).then(m => m.RuleMappingModule),
            },
            {
                path: 'charge-maintainence',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_charge-maintainenece_charge-maintainenece_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/charge-maintainenece/charge-maintainenece.module */ 90988)).then(m => m.ChargeMaintaineneceModule),
            },
            {
                path: 'rule-translation',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-translation_rule-translation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/rule-translation/rule-translation.module */ 80646)).then(m => m.RuleTranslationModule),
            }, {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_rxjs__esm2015_internal_observab-7042fc"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2015_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/users/users.module */ 51557)).then(m => m.UsersModule),
            },
            {
                path: 'authorize-cash-payment',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_authorize-cash-payment_authorize-cash-payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/authorize-cash-payment/authorize-cash-payments.module */ 96653)).then(m => m.AuthorizeCashPaymentsModule),
            },
        ]
    }, {
        path: '**',
        redirectTo: 'dashboard'
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
                // preloadingStrategy: PreloadAllModules,
                useHash: true,
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'corrected',
                anchorScrolling: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


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
        // this.setTimeout();
        // this.userInactive.subscribe(() => this.logout());}
        this.renderer = renderer;
        this.platform = platform;
        this.document = document;
        this.route = route;
        this.router = router;
        this.title = "Median";
        this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // setTimeout() {
        //   this.userActivity = setTimeout(
        //     () => this.userInactive.next(undefined),
        //     600 * 1000
        //   );
    }
    logout() {
        if (localStorage.getItem("userFromLogin")) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Session Expired", "Kindly Login to continue.");
        }
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/session/login']);
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "router-outlet");
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
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ providers: [], imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
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
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: "root" });


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
            fcyvariance: '',
            fcypercenatage: '',
            userName: '',
            password: '',
            port: '',
            ipAddress: '',
            sftpRequired: '',
            path: '',
            mandatoryFieldImposed: '',
            treasuryrefRequired: '',
            wuFile: '',
            verifiedOnce: ''
        });
        // -- Sytstem Param Maintenance  --
        // 1. Transaction Code Maintenance
        this.transactionCodeSummryData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            userID: '',
            creatorDtStamp: '',
            creatorId: '',
            modNo: '',
            recordStatus: '',
            verifiedStatus: '',
            verifiedBy: '',
            verifiedOnce: '',
            verifiedTime: '',
            formValues: []
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
            extCode: '',
            processName: '',
            extSysName: '',
            authStatus: '',
        });
        // this._baseURL = AppConstants.baseURL + '/role';
        this._baseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles' + '/fetchAllRolesSummary';
        this._fmosbaseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles';
    }
    getAllExtSys() {
        return this.http.get(`${this.uriForExt}` + '/extsysdata');
    }
    fetchnewscreenlabels() {
        return this.http.get(`${this._fmosbaseURL}` + '/fetchTabLabelAndScreen');
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
        return this.http.get(`${this.ext}` + '/getExt');
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
    fetchMedUser(userId) {
        return this.http.get(`${API_URL}/login/getUserByUserId/${userId}`);
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
        return this.http.get(`${median}/config/getSummaryForTransactionCodeMapping`);
    }
    saveTrnCodeMaster(master) {
        return this.http.post(`${median}/config/saveTrnMaster`, master);
    }
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
        this.transactionCodeSummryData.next(summaryData);
    }
    getSummaryDataTransactionCode() {
        return this.transactionCodeSummryData.asObservable();
    }
    deleteRow(id) {
        return this.http.delete(`${API_URL}/config/deleteRow/${id}`);
    }
    deleteUserData(UserId) {
        return this.http.delete(`${API_URL}/config/deleteWholeRecord/${UserId}`);
    }
    onClckOfAuthTransactionCode(userId, userIdLoggedIn) {
        return this.http.get(`${API_URL}/config/verify/${userId}/${userIdLoggedIn}`);
    }
    onclickOfCloseTransactionCode(userId, userIdLoggedIn) {
        return this.http.get(`${API_URL}/config/close/${userId}/${userIdLoggedIn}`);
    }
    onclickOfReopenTransactionCode(userId, userIdLoggedIn) {
        return this.http.get(`${API_URL}/config/reOpen/${userId}/${userIdLoggedIn}`);
    }
    updateAuditData(master) {
        return this.http.put(`${API_URL}/config/modifyMaster`, master);
    }
    updateTransactionCode(trnData, loggedInuser) {
        return this.http.put(`${API_URL}/config/modify/${loggedInuser}`, trnData);
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
        return this.http.get(`${this._baseURL}`);
    }
    getAllUsersListService() {
        return this.http.get(`${this.API_URL}/users/getAllUsers`);
    }
    // audit Logs
    getAllAuditData() {
        return this.http.get(`${this.API_URL}` + '/auditLogs/getAllAuditLogs');
    }
    getAllAuditDataByDate(from, to) {
        return this.http.get(`${this.API_URL}/dataauditsList/${from}/${to}`);
    }
    // 2. Global GI/ACC Maintenance
    getGlData() {
        return this.http.get(`${median}/config/globalsaveGlData`);
    }
    getAccData() {
        return this.http.get(`${median}/config/getAccData`);
    }
    deleteGlData(row, UserId) {
        return this.http.post(`${median}/config/deletegGlData/${UserId}`, row);
    }
    deleteAcData(row, UserId) {
        return this.http.post(`${median}/config/deleteAcData/${UserId}`, row);
    }
    saveGlCodeData(trnData, userId) {
        return this.http.post(`${median}/config/globalsaveGl/${userId}`, trnData);
    }
    saveAccountCodeData(trnData, userId) {
        return this.http.post(`${median}/config/gsaveActClass/${userId}`, trnData);
    }
    // 3. User GL Maintenance
    getUserIdGlData(UserId) {
        return this.http.get(`${API_URL}/config/getGlData/${UserId}`);
    }
    getUserIdAccData(UserId) {
        return this.http.get(`${API_URL}/config/getAccData/${UserId}`);
    }
    saveuserGlCode(trnData, userId, permission) {
        return this.http.post(`${API_URL}/config/saveGl/${userId}/${permission}`, trnData);
    }
    saveAccountClassCode(trnData, userId, permission) {
        return this.http.post(`${API_URL}/config/saveActClass/${userId}/${permission}`, trnData);
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
    getProcessNamesBasedOnExtSysNameService(extSysName) {
        return this.http.get(`${API_URL}/excelDataProcessing/getProcessCodeByExtSysName/${extSysName}`);
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
        return this.http.get(`${this.excelmap}/fetchAllMappingData/`);
    }
    getExcelMappingDataforEdit(extSysCode, processName, extSys) {
        return this.http.get(`${this.excelmap}/getExcelMappingInfo?extSysCode=${extSysCode}&processName=${processName}&extSys=${extSys}`);
    }
    getAllExtsysNameAndProcessCodeOnAuthStatus() {
        return this.http.get(`${this.uriForExt}/gettingExtsysNameAndProcessCodeOnAuthStatus`);
    }
    getAllExtCode() {
        return this.http.get(`${this.uriForExt}` + '/getAllExtCode');
    }
    getProcessNameByExtSysCode(extSysCode) {
        return this.http.get(`${this.uriForExt}/processCodeByExtCode/${extSysCode}`);
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
    closingProcessCodeRecord(extSysName, userIdLoggedIn) {
        return this.http.get(`${this.uriForExt}/close/${extSysName}/${userIdLoggedIn}`);
    }
    reopeningProcessCodeRecord(extSysName, userIdLoggedIn) {
        return this.http.get(`${this.uriForExt}/reOpen/${extSysName}/${userIdLoggedIn}`);
    }
    authProcessCodeRecord(extSysName, userIdLoggedIn) {
        return this.http.get(`${this.uriForExt}/verify/${extSysName}/${userIdLoggedIn}`);
    }
    deleteProcessRecord(extSysName, userIdLoggedIn) {
        return this.http.delete(`${this.uriForExt}/${extSysName}/${userIdLoggedIn}`, { responseType: 'text' });
    }
    setCustomerSearch(data) {
        this.customerSearch.next(data);
    }
    getCustomerSearch() {
        return this.customerSearch.asObservable();
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
ApiService.??fac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ApiService, factory: ApiService.??fac, providedIn: 'root' });


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
JwtAuthService.??fac = function JwtAuthService_Factory(t) { return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_local_store_service__WEBPACK_IMPORTED_MODULE_0__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
JwtAuthService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjectable"]({ token: JwtAuthService, factory: JwtAuthService.??fac, providedIn: "root" });


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
LocalStoreService.??fac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
LocalStoreService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.??fac, providedIn: 'root' });


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
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.getNavParam = this.paramSource.asObservable();
        this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/role';
        this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles';
        this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
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
    }
    fetchNewRolePermissions(userIdLoggedIn) {
        this.http.get(`${this._fmosbaseURL}/allRolePermissionForUser/${userIdLoggedIn}`).subscribe(data => {
            this.storeuserpermissions = data;
            localStorage.setItem('userPermissions', JSON.stringify(this.storeuserpermissions));
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
RoleService.??fac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RoleService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: RoleService, factory: RoleService.??fac, providedIn: 'root' });


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
    //MEDIAN_URL: 'http://10.127.43.228:8080/median',
    //ACC_CLOSER_URL: 'http://10.127.43.228:8080/medianAccountClosure'//account closer new
    //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2.2',
    //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianAccountClosure'//account closer new
    // MEDIAN_URL: 'https://10.137.145.90:8443/medianv2.2',
    //ACC_CLOSER_URL: 'https://10.137.145.90:8443/medianAccountClosure'//account closer new
    //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2',
    //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianv2'//account closer new
    // MEDIAN_URL: 'http://localhost:9191', // phase2 for local testing
    // ACC_CLOSER_URL: 'http://localhost:9192'//account closer for local testing
    //  MEDIAN_URL: 'http://localhost:9192', // phase2 for local testing
    // ACC_CLOSER_URL: 'http://localhost:9191'//account closer for local testing
    MEDIAN_URL: 'http://192.168.0.14:8082/medianv2',
    ACC_CLOSER_URL: 'http://192.168.0.14:8082/medianAccountClosure'
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