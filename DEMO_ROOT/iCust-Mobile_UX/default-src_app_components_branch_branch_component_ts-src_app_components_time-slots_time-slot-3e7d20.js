"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20"],{

/***/ 6156:
/*!*******************************************************!*\
  !*** ./src/app/components/branch/branch.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchComponent": () => (/* binding */ BranchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _branch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch.component.html?ngResource */ 82598);
/* harmony import */ var _branch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch.component.scss?ngResource */ 47092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.component */ 51006);







let BranchComponent = class BranchComponent {
    constructor(apiService, modalController) {
        this.apiService = apiService;
        this.modalController = modalController;
        this.branchData = [];
        this.typesMap = {};
        this.typesList = [];
        this.typesSelectOptions = [];
        this.markers = [];
        this.infoWindows = [];
    }
    ngOnInit() {
        this.getBankBranches();
        this.branchFlag = localStorage.getItem('BranchFlag');
        this.accBranch = localStorage.getItem('AccBranch');
        console.log(this.branchFlag);
    }
    getBankBranches() {
        this.apiService.getBranchByCity("Bangalore")
            .subscribe((data) => {
            this.branchData = data;
            console.log(this.branchData);
            for (let i = 0; i <= this.branchData.length; i++) {
                this.apiService.getNumberOfCrowd(this.branchData[i].branchName)
                    .subscribe((data) => {
                    console.log(this.branchData[i].branchName);
                    this.branchData[i].tokenCount = data.tokenCount;
                    console.log(this.branchData);
                }, (err) => {
                    console.log("error coming alert");
                    this.branchData[i].tokenCount = 0;
                });
            }
            if (this.branchFlag == 'false') {
                console.log("ifff");
                data.forEach((element, index) => {
                    if (data[index].branchName == this.accBranch)
                        data.splice(index, 1);
                });
                console.log(this.branchData);
            }
        });
    }
    presentMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent,
                cssClass: 'my-custom-class',
                id: "mapModal",
                swipeToClose: true,
                presentingElement: yield this.modalController.getTop()
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log("Data", data);
            if (data) {
                this.dismiss(data);
            }
        });
    }
    dismiss(location) {
        console.log(location);
        localStorage.setItem("location", location);
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'data': location
        }, "", "branchModal");
    }
    close() {
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.selectedLocation = null;
    }
};
BranchComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
BranchComponent.propDecorators = {
    gmap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['mapContainer', { static: false },] }]
};
BranchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-branch',
        template: _branch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_branch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BranchComponent);



/***/ }),

/***/ 51006:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component.html?ngResource */ 55706);
/* harmony import */ var _map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss?ngResource */ 54325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var _services_maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/maps.service */ 18798);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapmyindia-map-cordova-ionic-beta */ 64540);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__);









let MapComponent = class MapComponent {
    constructor(modalController, geolocation, apiService, _mapsService, _element) {
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.apiService = apiService;
        this._mapsService = _mapsService;
        this._element = _element;
        this.branchData = [];
        this.typesMap = {};
        this.typesList = [];
        this.typesSelectOptions = [];
        this.markers = [];
        this.infoWindows = [];
        this.center = [];
        this.map = new mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__.mmi();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.setupMap();
        this.getLocation();
    }
    getBankBranches() {
        this.apiService.getBranchByCity('Bangalore').subscribe((data) => {
            this.branchData = data;
            this.getMarkers();
        });
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
    }
    showPosition(position) {
        console.log("postion", position.coords.latitude, position.coords.longitude);
        this.center = [position.coords.latitude, position.coords.longitude];
        console.log(this.center);
    }
    setupMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.getLocation();
            console.log("center test 1", this.center);
            console.log("center test 2", [10.6500315, 78.9919185]);
            this.map.loadMaps(this.gmap.nativeElement, {
                key: '1d833ae339c7284f8104fc7482107c66',
                zoom: 5,
                zoomControl: true,
                hybrid: true,
                center: [10.6500315, 78.9919185],
                location: { control: true, initial: true, bounds: true },
            });
            this.getBankBranches();
        });
    }
    getMarkers() {
        for (let _i = 0; _i <= this.branchData.length; _i++) {
            // Commented google map settings
            // this.setupMarker();
            var cont = `<div><p style=\"font-size: 25px;text-transform: capitalize;color: #121111;font-weight: 800;\">${this.branchData[_i].branchName}</p>` +
                `<p style=\"\"><span style=\"font-size: 13px;text-transform: capitalize;color: #ccc;\">Branch Code</span> <span style=\"color: #a9a9a9;font-size: 16px;font-weight: 800;text-transform: uppercase;\">${this.branchData[_i].branchCode}</span></p>` +
                `<p style=\"font-family: inherit;font-style: inherit;text-align: left;text-transform: capitalize;\">${this.branchData[_i].address}</p>` +
                `<button style=\"border: 2px solid #456EFE; border-radius: 50px;width: 100px !important;height: 24px !important;\">SELECT</button></div>`;
            let mrker_arr = [
                [
                    this.branchData[_i].lattitude,
                    this.branchData[_i].longitude,
                    {
                        popup: cont,
                        event: [
                            'click',
                            (e) => {
                                this.selectedLocation = this.branchData[_i].branchName;
                            },
                        ],
                    },
                ],
            ];
            this.map.marker(mrker_arr, {
                iconUrl: 'assets/icon/map.png',
                iconSize: [36, 51],
                popupAnchor: [0, -16],
                draggable: false,
                fitbounds: true,
                cluster: true,
            });
        }
    }
    focusMarker(type, index) {
        const marker = type.markers[index];
        marker.setAnimation(google.maps.Animation.BOUNCE);
        marker.map.setZoom(17);
        marker.map.panTo(marker.position);
        setTimeout(() => {
            marker.setAnimation(null);
        }, 2000);
    }
    setUpInfoWindow(location, marker) {
        const infowindow = new google.maps.InfoWindow({
            content: `
        <div class="info_window_container">
          <ion-item detail="false" lines="none">
           <ion-badge slot="end">22 KM Away</ion-badge>
          </ion-item>
          <h4>${location.branchName}</h4>
          Branch Code : ${location.branchCode}
          <p>${location.address}</p>
          <ion-chip color="primary" onClick="close(location)">
           <ion-label color="primary">SELECT</ion-label>
          </ion-chip>
        </div>
      `,
        });
        this.infoWindows = [...this.infoWindows, infowindow];
        marker.addListener('click', () => {
            console.log('Clicked');
            this.infoWindows.forEach((infoWindow) => infoWindow.close());
            infowindow.open(this.map, marker);
            this.markerActive = location.id;
            this.selectedLocation = location;
            const element = this._element.nativeElement.getElementsByClassName(String(location.id))[0];
            if (element) {
                element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        });
        return infowindow;
    }
    onClick(event) {
        // this.selectedLocation = 'bangalore';
        console.log(event, this.selectedLocation);
        if (event.target.innerText == 'SELECT') {
            this.dismiss(this.selectedLocation);
            return;
        }
        else {
            return;
        }
    }
    // UNUSED METHOD FOR TEMP GOOGLEMAP END
    dismiss(location) {
        let data = {
            branchName: location,
        };
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss(data);
    }
    close() {
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.selectedLocation = null;
    }
};
MapComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_maps_service__WEBPACK_IMPORTED_MODULE_4__.MapsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef }
];
MapComponent.propDecorators = {
    gmap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['mapContainer', { static: true },] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['click', ['$event'],] }]
};
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-map',
        template: _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



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
        this.canceledAppointment = localStorage.getItem("canceledAppointment");
        console.log(this.canceledAppointment);
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
        const selectedDate = this.date.split('T')[0];
        console.log(selectedDate);
        const dt = new Date();
        const currentDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().length < 2 ? '0' + (dt.getMonth() + 1) : (dt.getMonth() + 1)}-${dt.getDate().toString().length < 2 ? ('0' + dt.getDate()) : dt.getDate()}`;
        console.log({ currentDate });
        const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
        if (new Date(selectedDate) <= new Date(currentDate)) {
            this.TimeSolts.forEach((ele, i) => {
                const time = ele.time.split(":")[0].length < 2 ? '0' + ele.time : ele.time;
                if (time < currentTime) {
                    // console.log(ele.time, i);
                    this.TimeSolts[i].available = false;
                    this.TimeSolts[i].booked = true;
                }
            });
        }
        this.api.gettingBookedSlots(date2).subscribe(bookedResp => {
            console.log(bookedResp, this.canceledAppointment);
            if (this.canceledAppointment) {
                bookedResp = bookedResp.filter(item => item != this.canceledAppointment);
            }
            const newFormatBookedSlots = bookedResp && bookedResp.map(time => this.convertTime12to24(time));
            console.log('newFormatBookedSlots ', newFormatBookedSlots);
            newFormatBookedSlots && newFormatBookedSlots.forEach(element => {
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
            console.log(this.TimeSolts, !this.TimeSolts[i].selected);
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
                // console.log(this.TimeSolts, i, element.time);
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
        var formatted = moment__WEBPACK_IMPORTED_MODULE_2__(time, "hh:mm A").format("hh:mm A");
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
                "time": "00:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "00:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "01:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "02:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "03:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "04:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "04:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "05:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "06:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "07:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "07:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "08:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "08:55",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:05",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:10",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:15",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:20",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:35",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:45",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:50",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "09:55",
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
            },
            {
                "time": "17:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "17:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "18:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "18:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "19:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "19:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "20:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "20:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "21:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "21:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "22:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "22:55",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:05",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:10",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:15",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:20",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:25",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:30",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:35",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:40",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "23:45",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:50",
                "available": true,
                "selected": false,
                "booked": false
            }, {
                "time": "23:55",
                "available": true,
                "selected": false,
                "booked": false
            },
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

/***/ 18798:
/*!******************************************!*\
  !*** ./src/app/services/maps.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsService": () => (/* binding */ MapsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps */ 68223);



let MapsService = class MapsService {
    constructor() {
        this.clientKey = 'AIzaSyAHnMnRdGyN-tZr3rn9ugPJBEfaPgqHGWk';
    }
    getGoogleMaps() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loader) {
                this.loader = new google_maps__WEBPACK_IMPORTED_MODULE_1__.Loader(this.clientKey);
            }
            if (!this.googleMaps) {
                this.googleMaps = yield this.loader.load();
            }
            return this.googleMaps;
        });
    }
};
MapsService.ctorParameters = () => [];
MapsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MapsService);



/***/ }),

/***/ 68223:
/*!****************************************************!*\
  !*** ./node_modules/google-maps/lib/esm/loader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
class Loader {
  constructor(apiKey = null, options = {}) {
    this.apiKey = apiKey;
    this.options = options;

    if (typeof window === 'undefined') {
      throw new Error('google-maps is supported only in browser environment');
    }
  }

  load() {
    if (typeof this.api !== 'undefined') {
      return Promise.resolve(this.api);
    }

    if (typeof this.loader !== 'undefined') {
      return this.loader;
    }

    window[Loader.CALLBACK_NAME] = () => {
      this.api = window['google'];

      if (typeof this.resolve === 'undefined') {
        throw new Error('Should not happen');
      }

      this.resolve(this.api);
    };

    window['gm_authFailure'] = () => {
      if (typeof this.reject === 'undefined') {
        throw new Error('Should not happen');
      }

      this.reject(new Error('google-maps: authentication error'));
    };

    return this.loader = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      const script = document.createElement('script');
      script.src = this.createUrl();
      script.async = true;

      script.onerror = e => reject(e);

      document.head.appendChild(script);
    });
  }

  createUrl() {
    const parameters = [`callback=${Loader.CALLBACK_NAME}`];

    if (this.apiKey) {
      parameters.push(`key=${this.apiKey}`);
    }

    for (let name in this.options) {
      if (this.options.hasOwnProperty(name)) {
        let value = this.options[name];

        if (name === 'version') {
          name = 'v';
        }

        if (name === 'libraries') {
          value = value.join(',');
        }

        parameters.push(`${name}=${value}`);
      }
    }

    return `https://maps.googleapis.com/maps/api/js?${parameters.join('&')}`;
  }

}
Loader.CALLBACK_NAME = '_dk_google_maps_loader_cb';

/***/ }),

/***/ 47092:
/*!********************************************************************!*\
  !*** ./src/app/components/branch/branch.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-item::part(native) {\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5jaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoiYnJhbmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 54325:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#map {\n  width: 100%;\n  height: 100vh;\n}\n\n.leaflet-popup-content p {\n  margin: 11px 0 !important;\n}\n\n.map_marker {\n  position: relative;\n  width: 34px;\n  height: 48px;\n}\n\n/*marker text span css*/\n\n.info_window_container {\n  padding: 1rem;\n  overflow: scroll;\n}\n\n.info_window_container p {\n  font-size: 1.4rem;\n}\n\n.info_window_container h4 {\n  text-transform: capitalize;\n  font-size: 1.8rem;\n  margin: 1rem 0rem;\n}\n\n.info_window_container h5,\n.info_window_container span {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.3;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin: 0.2rem 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBLHVCQUFBOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUU7RUFDRSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFGSiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMTFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXBfbWFya2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4vKm1hcmtlciB0ZXh0IHNwYW4gY3NzKi9cclxuXHJcbi5pbmZvX3dpbmRvd19jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICB9XHJcblxyXG4gIGg1LFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwLjJyZW0gMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 94258:
/*!****************************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".bookedSlot {\n  background-color: rgb(212, 212, 212) !important;\n  pointer-events: none;\n}\n\n.availableSlot {\n  background-color: #F8F9F9 !important;\n  cursor: pointer;\n  color: black !important;\n  font-weight: 900;\n}\n\n.selectedClass {\n  color: #f7f7f7 !important;\n  background-image: linear-gradient(to right, #FE6700, #FE8430, #FEA96E) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtc2xvdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwrQ0FBQTtFQUNBLG9CQUFBO0FBQUY7O0FBSUE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGlGQUFBO0FBREYiLCJmaWxlIjoidGltZS1zbG90cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rZWRTbG90IHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5YzljOWMgLCNjNGM0YzQsI2Y1ZjVmNSkhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKSAhaW1wb3J0YW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC8vIG9wYWNpdHk6IC41ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmFpbGFibGVTbG90IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUY5ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5zZWxlY3RlZENsYXNzIHtcclxuICBjb2xvcjogI2Y3ZjdmNyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZFNjcwMCwgI0ZFODQzMCwgI0ZFQTk2RSkgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcclxufSJdfQ== */";

/***/ }),

/***/ 82598:
/*!********************************************************************!*\
  !*** ./src/app/components/branch/branch.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Nearest Branch</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentMap()\">\r\n        <ion-icon slot=\"start\" name=\"map-outline\"></ion-icon> MAP\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ng-container *ngIf=\"branchData.length != 0; else showNoBranch\">\r\n    <ion-list>\r\n    <ion-item *ngFor=\"let branch of branchData; let i=index\">\r\n      <ion-avatar slot=\"start\">\r\n        <app-avatar-photo [name]=\"branch?.branchName\"></app-avatar-photo> \r\n      </ion-avatar>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <ion-text color=\"primary\">\r\n          <h3>{{ branch?.branchName }}</h3>\r\n        </ion-text>\r\n        <p><small>{{ branch?.address }}</small></p>\r\n        <p><small>Number of Crowds : {{ branch?.tokenCount }}</small></p>\r\n      </ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"dismiss(branch)\">SELECT</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n  </ng-container>\r\n  <ng-template #showNoBranch>\r\n    <p>No Branch Available!</p>\r\n  </ng-template>\r\n\r\n</ion-content>";

/***/ }),

/***/ 55706:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"text-center\">Map</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapContainer id=\"map\"></div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 97882:
/*!****************************************************************************!*\
  !*** ./src/app/components/time-slots/time-slots.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\">\r\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n        Close\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"text-center\" size=\"small\">Available Slots</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" size=\"small\" *ngIf=\"selected != null\" (click)=\"done()\">\r\n        DONE\r\n        <ion-icon slot=\"end\" name=\"checkmark-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <!-- <ion-button (click)=\"close()\">close</ion-button> -->\r\n\r\n  <!-- <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label> -->\r\n\r\n  <!-- [outline]=\"selected===slot ? 'true':'false'\" -->\r\n  <!-- <ion-grid>\r\n    <ion-row class=\"ion-justify-content-evenly\">\r\n      <ion-col size=\"4\"*ngFor=\"let slot of TimeSolts;let i=index;\" >\r\n          <ion-chip [id]=\"i+1\" [color]=\"slot.booked==slot.booked ? 'primary':'' ||slot.available==slot.available ? 'primary':''\" >\r\n              <ion-label (click)=\"onSelectiongTimeSlots($event,slot.time)\">{{format24HrsTo12Hrs(slot.time)}}</ion-label>\r\n              <ion-icon name=\"checkmark-outline\" *ngIf=\"selected==slot.time\"></ion-icon>\r\n              \r\n            \r\n            </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>   -->\r\n  <!-- <ion-grid>\r\n      <ion-row class=\"ion-justify-content-evenly\">\r\n        <ion-col size=\"4\"*ngFor=\"let slot of TimeSolts;let i=index;\" >\r\n            <ion-chip [id]=\"i+1\" [ngClass]=\"{'bookedSlot': slot.booked, 'availableSlot' : slot.available,'selectedClass': dateCollection.indexOf(slot.time)!=-1}\">\r\n                <ion-label (click)=\"onSelectiongTimeSlots($event,slot.time)\" [color]=\"selected==slot.time ? 'primary':''\">{{format24HrsTo12Hrs(slot.time)}}</ion-label>\r\n                <ion-icon name=\"checkmark-outline\" *ngIf=\"selected==slot.time\"></ion-icon>\r\n                \r\n              \r\n              </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid> -->\r\n\r\n\r\n  <!-- new  -->\r\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"isLoading\"></ion-progress-bar>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-3\" *ngFor=\"let slot of TimeSolts;let i=index\">\r\n      <ion-chip outline\r\n        [ngClass]=\"{'bookedSlot': slot.booked, 'availableSlot' : slot.available,'selectedClass': dateCollection.indexOf(slot.time)!=-1}\"\r\n        (click)=\"onSelectTime1(slot.time,i,$event)\">\r\n        <ion-label style=\"font-size: 8px;\">\r\n          {{format24HrsTo12Hrs(slot.time)}}\r\n        </ion-label>\r\n        <ion-icon name=\"checkmark-outline\" *ngIf=\"selected===slot\"></ion-icon>\r\n      </ion-chip>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <input type=\"text\" hidden > -->\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"selected != null\">\r\n  <ion-toolbar>\r\n    <ion-title>Selected Slot: {{ selected }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_branch_branch_component_ts-src_app_components_time-slots_time-slot-3e7d20.js.map