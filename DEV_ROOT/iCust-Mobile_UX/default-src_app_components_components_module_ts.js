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
    }
    ngOnInit() {
        this.callingTimeslots();
        console.log("this.date::", this.date);
        let date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        let date1 = this.datepipe.transform(date, 'yyyy-MM-dd');
        this.loadtimeSlots(date1);
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
        this.api.gettingBookedSlots(date2).subscribe(bookedResp => {
            console.log(bookedResp);
            const newFormatBookedSlots = bookedResp.map(time => this.convertTime12to24(time));
            console.log('newFormatBookedSlots ', newFormatBookedSlots);
            newFormatBookedSlots.forEach(element => {
                const index = this.TimeSolts.map(x => x.time).indexOf(element);
                if (index > -1) {
                    this.TimeSolts[index].available = false;
                    this.TimeSolts[index].booked = true;
                }
            });
        });
        // this.api.gettingAvailableSlots(date).subscribe(availableSlotsResp => {
        //   if (availableSlotsResp) {
        //   this.isLoading=false;  
        //   availableSlotsResp.bookedSlots.forEach(element => {
        //     const index = this.TimeSolts.map(x => x.time).indexOf(element);
        //     if (index > -1) {
        //         this.TimeSolts[index].available = false;
        //         this.TimeSolts[index].booked = true;
        //       }
        //   });
        //     // availableSlotsResp.bookedSlots.forEach(element => {
        //     //   const index = this.TimeSolts.map(x => x.time).indexOf(element);
        //     //   if (index > -1) {
        //     //     this.TimeSolts[index].available = false;
        //     //     this.TimeSolts[index].booked = true;
        //     //   }
        //     //   console.log("this.TimeSolts::",this.TimeSolts)
        //     // });
        //   }
        // }, (err) => {
        //   this.isLoading = false;
        // })
    }
    // onSelectTime1(time, i) {
    //   console.log(i);
    //   this.count++;
    //   if (this.count > 1) {
    //     this.dateCollection = [];
    //     console.log(!this.TimeSolts[i].selected);
    //   }
    //   console.log("Time", time, i);
    //   this.TimeSolts[i].selected = !this.TimeSolts[i].selected;
    //   this.TimeSolts[i].available = !this.TimeSolts[i].available;
    //   console.log(this.TimeSolts[i].selected);
    //   const index = this.dateCollection.indexOf(time);
    //   if (index > -1 && !this.TimeSolts[i].selected) {
    //     this.dateCollection.splice(index, 1);
    //   }
    //   else if (index == -1 && this.TimeSolts[i].selected) {
    //     this.dateCollection.push(time);
    //     console.log(this.dateCollection);
    //   }
    // }
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
            console.log(!this.TimeSolts[i].selected);
        }
        console.log("Time", time, i);
        this.TimeSolts[i].selected = !this.TimeSolts[i].selected;
        this.TimeSolts[i].available = !this.TimeSolts[i].available;
        console.log(this.TimeSolts[i].selected);
        const index = this.dateCollection.indexOf(time);
        console.log("index", this.dateCollection);
        this.TimeSolts.forEach((element, i) => {
            // const index = this.dateCollection.indexOf(element.time);
            console.log(this.TimeSolts, i, element.time);
            // if(!element.booked && element.time == time)
            // {
            //    this.TimeSolts[i].available = false;
            // }
            // else if(!element.booked && element.time != time)
            // {
            //    this.TimeSolts[i].available = true;
            // }
            // if (index > -1) {
            //   //this.TimeSolts[index].available = false;
            //   this.TimeSolts[index].booked = false;
            // }
        });
        if (index > -1 && !this.TimeSolts[i].selected) {
            console.log("in if");
            this.dateCollection.splice(index, 1);
        }
        else if (index == -1 && this.TimeSolts[i].selected) {
            console.log("in else");
            this.TimeSolts.forEach((element, i) => {
                // const index = this.dateCollection.indexOf(element.time);
                console.log(this.TimeSolts, i, element.time);
                if (!element.booked && element.time == time) {
                    this.TimeSolts[i].available = false;
                }
                else if (!element.booked && element.time != time) {
                    this.TimeSolts[i].available = true;
                }
                // if (index > -1) {
                //   //this.TimeSolts[index].available = false;
                //   this.TimeSolts[index].booked = false;
                // }
            });
            this.dateCollection = [];
            this.dateCollection.push(time);
            console.log(this.dateCollection);
        }
    }
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_2__(time, "HH:mm").format("LT");
        return formatted;
    }
    close() {
        this.modalCtr.dismiss(null);
    }
    done() {
        this.modalCtr.dismiss(this.selected);
    }
    callingTimeslots() {
        this.TimeSolts = [
            {
                "time": "9:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:55",
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
            }
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

module.exports = ".circle {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle img {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n.circle .initials {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci1waG90by5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcYXZhdGFyLXBob3RvXFxhdmF0YXItcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNEUiIsImZpbGUiOiJhdmF0YXItcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoICAgICAgICA6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5pdGlhbHMge1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0ICAgOiAxOXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI2MjVweDtcclxuICAgIH1cclxufSIsIi5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNpcmNsZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uY2lyY2xlIC5pbml0aWFscyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yNjI1cHg7XG59Il19 */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".footer ul {\n  display: flex;\n  justify-content: space-between;\n}\n.footer ul li .icon {\n  width: 100% !important;\n  height: 100% !important;\n  padding: 0 15px;\n  color: gray;\n}\n.footer ul li .icon.active {\n  color: var(--primary-color);\n}\n.footer ul li .icon span i {\n  font-size: 20px;\n}\n.footer ul li .icon p {\n  font-size: 12px;\n  font-weight: 500;\n}\n.footer-avatar {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREdNO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRFI7QURHUTtFQUNFLDJCQUFBO0FDRFY7QURJUTtFQUNFLGVBQUE7QUNGVjtBREtRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDSFY7QURVQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNQRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICB1bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci1hdmF0YXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn0iLCIuZm9vdGVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvb3RlciB1bCBsaSAuaWNvbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLmZvb3RlciB1bCBsaSAuaWNvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uZm9vdGVyIHVsIGxpIC5pY29uIHNwYW4gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5mb290ZXIgdWwgbGkgLmljb24gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvb3Rlci1hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */";

/***/ }),

/***/ 26022:
/*!********************************************************************!*\
  !*** ./src/app/components/search/search.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "div[scrollx=true] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\ndiv[scrollx=true]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] .scroll-item {\n  flex: 0 0 auto;\n}\n.mt-5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDRyxhQUFBO0FDRVA7QURBSztFQUNFLGNBQUE7QUNFUDtBREVFO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0FDQ0giLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2W3Njcm9sbHg9dHJ1ZV0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgLnNjcm9sbC1pdGVtIHtcclxuICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm10LTV7XHJcbiAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH0iLCJkaXZbc2Nyb2xseD10cnVlXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuZGl2W3Njcm9sbHg9dHJ1ZV06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmRpdltzY3JvbGx4PXRydWVdIC5zY3JvbGwtaXRlbSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4ubXQtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 94258:
/*!****************************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".bookedSlot {\n  background-color: rgb(212, 212, 212) !important;\n  pointer-events: none;\n}\n\n.availableSlot {\n  background-color: #F8F9F9 !important;\n  cursor: pointer;\n  color: black !important;\n  font-weight: 900;\n}\n\n.selectedClass {\n  color: #f7f7f7 !important;\n  background-image: linear-gradient(to right, #FE6700, #FE8430, #FEA96E) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtc2xvdHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRpbWUtc2xvdHNcXHRpbWUtc2xvdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwrQ0FBQTtFQUNBLG9CQUFBO0FDQUY7O0FESUE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLGlGQUFBO0FDREYiLCJmaWxlIjoidGltZS1zbG90cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rZWRTbG90IHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5YzljOWMgLCNjNGM0YzQsI2Y1ZjVmNSkhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKSAhaW1wb3J0YW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC8vIG9wYWNpdHk6IC41ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmFpbGFibGVTbG90IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUY5ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5zZWxlY3RlZENsYXNzIHtcclxuICBjb2xvcjogI2Y3ZjdmNyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZFNjcwMCwgI0ZFODQzMCwgI0ZFQTk2RSkgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcclxufVxyXG4iLCIuYm9va2VkU2xvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKSAhaW1wb3J0YW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmF2YWlsYWJsZVNsb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUY5ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5zZWxlY3RlZENsYXNzIHtcbiAgY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkU2NzAwLCAjRkU4NDMwLCAjRkVBOTZFKSAhaW1wb3J0YW50O1xufSJdfQ== */";

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

module.exports = "<div class=\"footer pb-0\">\r\n  <ul>\r\n    <li (click)=\"dashboardPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/dashboard' ? 'active ' : ''\">\r\n        <!-- <img src=\"/assets/images/menu-home.svg\" class=\"w-100 normal\" />\r\n          <img src=\"/assets/images/footer/Group 711@3x.png\" class=\"w-100 hover\" /> -->\r\n          <span><i class=\"fas fa-home\"></i></span>\r\n          <p>Home</p>\r\n      </a>\r\n    </li>\r\n    <li (click)=\"transactionPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/transaction' ? 'active ' : ''\">\r\n        <!-- <img src=\"/assets/images/footer/Group 707@3x.png\" class=\"w-100 normal\"/>\r\n        <img src=\"/assets/images/wallet-outline.svg\" class=\"w-100 hover\"/> -->\r\n        <span>\r\n          <i class=\"fas fa-money-bill-wave\"></i>\r\n        </span>\r\n        <p>Transactions</p>\r\n      </a>\r\n    </li>\r\n    <li (click)=\"appointmentPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/appointment' ? 'active ' : ''\">\r\n        <!-- <img src=\"/assets/images/footer/Group 707@3x.png\" class=\"w-100 normal\"/>\r\n        <img src=\"/assets/images/wallet-outline.svg\" class=\"w-100 hover\"/> -->\r\n        <span>\r\n          <i class=\"far fa-clock\"></i>\r\n        </span>\r\n        <p>Appointment History</p>\r\n      </a>\r\n    </li>\r\n    <li (click)=\"profilePage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1=='/profile' ? 'active ' : ''\">\r\n        <!-- <img src=\"/assets/images/footer/Group 710@3x.png\" class=\"w-100 normal\" />\r\n        <img src=\"/assets/images/person-circle-outline.svg\" class=\"w-100 hover\" /> -->\r\n        <span>\r\n          <i class=\"far fa-user-circle\"></i>\r\n        </span>\r\n        <p>Profile</p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";

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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\">\r\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n        Close\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"text-center\" size=\"small\">Available Slots</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n      <ion-button fill=\"clear\" size=\"small\" *ngIf=\"selected != null\" (click)=\"done()\"> \r\n        DONE\r\n        <ion-icon slot=\"end\" name=\"checkmark-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- <ion-button (click)=\"close()\">close</ion-button> -->\r\n\r\n  <!-- <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label> -->\r\n\r\n  <!-- [outline]=\"selected===slot ? 'true':'false'\" -->\r\n   <!-- <ion-grid>\r\n    <ion-row class=\"ion-justify-content-evenly\">\r\n      <ion-col size=\"4\"*ngFor=\"let slot of TimeSolts;let i=index;\" >\r\n          <ion-chip [id]=\"i+1\" [color]=\"slot.booked==slot.booked ? 'primary':'' ||slot.available==slot.available ? 'primary':''\" >\r\n              <ion-label (click)=\"onSelectiongTimeSlots($event,slot.time)\">{{format24HrsTo12Hrs(slot.time)}}</ion-label>\r\n              <ion-icon name=\"checkmark-outline\" *ngIf=\"selected==slot.time\"></ion-icon>\r\n              \r\n            \r\n            </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>   -->\r\n  <!-- <ion-grid>\r\n      <ion-row class=\"ion-justify-content-evenly\">\r\n        <ion-col size=\"4\"*ngFor=\"let slot of TimeSolts;let i=index;\" >\r\n            <ion-chip [id]=\"i+1\" [ngClass]=\"{'bookedSlot': slot.booked, 'availableSlot' : slot.available,'selectedClass': dateCollection.indexOf(slot.time)!=-1}\">\r\n                <ion-label (click)=\"onSelectiongTimeSlots($event,slot.time)\" [color]=\"selected==slot.time ? 'primary':''\">{{format24HrsTo12Hrs(slot.time)}}</ion-label>\r\n                <ion-icon name=\"checkmark-outline\" *ngIf=\"selected==slot.time\"></ion-icon>\r\n                \r\n              \r\n              </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid> -->\r\n\r\n\r\n  <!-- new  -->\r\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"isLoading\"></ion-progress-bar>\r\n  <ion-grid>\r\n  \r\n    <ion-row class=\"ion-justify-content-evenly\">\r\n      <ion-col size=\"3\" *ngFor=\"let slot of TimeSolts;let i=index\">\r\n        <ion-chip outline [ngClass]=\"{'bookedSlot': slot.booked, 'availableSlot' : slot.available,'selectedClass': dateCollection.indexOf(slot.time)!=-1}\">\r\n          <ion-label (click)=\"onSelectTime1(slot.time,i,$event)\"><small>{{format24HrsTo12Hrs(slot.time)}}</small></ion-label>\r\n          <ion-icon name=\"checkmark-outline\" *ngIf=\"selected===slot\"></ion-icon>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- <input type=\"text\" hidden > -->\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"selected != null\">\r\n  <ion-toolbar>\r\n    <ion-title>Selected Slot: {{ format24HrsTo12Hrs(selected) }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map