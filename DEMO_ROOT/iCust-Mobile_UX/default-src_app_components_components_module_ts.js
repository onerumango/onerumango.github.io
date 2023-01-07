"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

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

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 64662);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);
/* harmony import */ var _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-photo/avatar-photo.component */ 77964);
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch/branch.component */ 6156);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ 51006);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ 29055);
/* harmony import */ var _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-slots/time-slots.component */ 19023);












let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__.BranchComponent,
            _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__.AvatarPhotoComponent,
            _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__.TimeSlotsComponent,
            _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent,
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent
        ],
        exports: [
            _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__.BranchComponent,
            _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__.AvatarPhotoComponent,
            _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__.TimeSlotsComponent,
            _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent,
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ],
        entryComponents: [
            _branch_branch_component__WEBPACK_IMPORTED_MODULE_3__.BranchComponent,
            _avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_2__.AvatarPhotoComponent,
            _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent,
            _time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__.TimeSlotsComponent,
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent
        ]
    })
], ComponentsModule);



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
                state: "/forex-transaction"
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

/***/ 18077:
/*!****************************************!*\
  !*** ./src/app/pipes/currency.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyPipe": () => (/* binding */ CurrencyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);



let CurrencyPipe = class CurrencyPipe {
    transform(code, format = 'narrow', locale) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.getCurrencySymbol)(code, format, locale);
    }
};
CurrencyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'currencySymbol'
    })
], CurrencyPipe);



/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency.pipe */ 18077);
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-filter.pipe */ 8572);





let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe, _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchFilterPipe],
        exports: [
            _currency_pipe__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe,
            _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchFilterPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ],
    })
], PipesModule);



/***/ }),

/***/ 8572:
/*!*********************************************!*\
  !*** ./src/app/pipes/search-filter.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFilterPipe": () => (/* binding */ SearchFilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let SearchFilterPipe = class SearchFilterPipe {
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (data) {
            return JSON.stringify(data).toLowerCase().includes(args);
        });
    }
};
SearchFilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'searchFilter'
    })
], SearchFilterPipe);



/***/ }),

/***/ 63614:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".circle {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle img {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n.circle .initials {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQURSIiwiZmlsZSI6ImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbml0aWFscyB7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICA6IDE5cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjYyNXB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".footer-custom-icon {\n  position: absolute !important;\n  top: -7px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-appt {\n  position: absolute !important;\n  top: -6px !important;\n  left: 0px !important;\n  width: 75px !important;\n  height: 75px !important;\n}\n\n.footer-custom-icon-small {\n  position: absolute !important;\n  top: 0px !important;\n  left: 0px !important;\n  width: 60px !important;\n  height: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWN1c3RvbS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IC03cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWN1c3RvbS1pY29uLWFwcHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogLTZweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItY3VzdG9tLWljb24tc21hbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 26022:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "div[scrollx=true] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\ndiv[scrollx=true]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] .scroll-item {\n  flex: 0 0 auto;\n}\n.mt-5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNHLGFBQUE7QUFFUDtBQUFLO0VBQ0UsY0FBQTtBQUVQO0FBRUU7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUFDSCIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbc2Nyb2xseD10cnVlXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICAuc2Nyb2xsLWl0ZW0ge1xyXG4gICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubXQtNXtcclxuICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 2178:
/*!********************************************************************************!*\
  !*** ./src/app/components/avatar-photo/avatar-photo.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"circle\" [ngStyle]=\"{'background-color':  circleColor }\">\r\n    <img *ngIf=\"!showInitials\" src=\"{{photoUrl}}\">\r\n\r\n    <div *ngIf=\"showInitials\" class=\"initials\">\r\n        {{ initials }}\r\n    </div>\r\n</div>";

/***/ }),

/***/ 21757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"footer pb-0\">\r\n  <ul>\r\n    <li (click)=\"dashboardPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/dashboard' ? 'active ' : ''\">\r\n        <img src=\"assets/images/home-normal.svg\" class=\"w-100 normal footer-custom-icon-small\" />\r\n        <img src=\"assets/images/home-dark.svg\" class=\"w-100 hover footer-custom-icon-small\" />\r\n        <!-- <span><i class=\"fas fa-home\"></i></span>\r\n          <p>Home</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"transactionPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/transaction' ? 'active ' : ''\">\r\n        <img src=\"assets/images/my-trans-normal.svg\" class=\"w-100 normal footer-custom-icon\" />\r\n        <img src=\"assets/images/my-trans.svg\" class=\"w-100 hover footer-custom-icon\" />\r\n        <!-- <span>\r\n          <i class=\"fas fa-money-bill-wave\"></i>\r\n          <img class=\"foo_icon\" src=\"assets/images/footer/transaction-icon.png\" />\r\n        </span>\r\n        <p>My Transaction</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"appointmentPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/appointment' ? 'active ' : ''\">\r\n        <img src=\"assets/images/appt-his-normal.svg\" class=\"w-100 normal footer-custom-icon-appt\" />\r\n        <img src=\"assets/images/appt-his.svg\" class=\"w-100 hover footer-custom-icon-appt\" />\r\n        <!-- <span>\r\n          <i class=\"far fa-clock\"></i>\r\n        </span>\r\n        <p>Appointment History</p> -->\r\n      </a>\r\n    </li>\r\n    <li (click)=\"profilePage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/profile' ? 'active ' : ''\">\r\n        <img src=\"assets/images/profile-normal.svg\" class=\"w-100 normal footer-custom-icon-small\" />\r\n        <img src=\"assets/images/profile-dark.svg\" class=\"w-100 hover footer-custom-icon-small\" />\r\n        <!-- <span>\r\n          <i class=\"far fa-user-circle\"></i>\r\n        </span>\r\n        <p>Profile</p> -->\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";

/***/ }),

/***/ 85582:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"padding: 4% 0 1%\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModel()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar\r\n      placeholder=\"Search...\"\r\n      [(ngModel)]=\"filterTerm\"\r\n      animated=\"false\"\r\n    ></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!-- <ion-list-header>\r\n    <ion-label>Popular Service</ion-label>\r\n  </ion-list-header>\r\n  <div class=\"container\">\r\n    <div class=\"scroll\" scrollX=\"true\">\r\n      <ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-chip *ngFor=\"let item of items | searchFilter:filterTerm\" color=\"secondary\" (click)=\"openToast(item.title)\">\r\n            <ion-icon color=\"primary\" name=\"trending-up-outline\"></ion-icon>\r\n            <ion-label>{{ item.title }}</ion-label>\r\n          </ion-chip>\r\n        </ion-item>\r\n      </ion-row>\r\n    </div>\r\n</div> -->\r\n  <ion-list>\r\n    <ion-list-header lines=\"inset\">\r\n      <ion-label>Quick Services</ion-label>\r\n    </ion-list-header>\r\n    <ion-item\r\n      *ngFor=\"let item of trendingRecords | searchFilter: filterTerm\"\r\n      (click)=\"openPage(item)\"\r\n    >\r\n      <ion-label color=\"primary\">\r\n        <h1>{{ item.name }}</h1>\r\n      </ion-label>\r\n      <ion-icon name=\"trending-up-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map