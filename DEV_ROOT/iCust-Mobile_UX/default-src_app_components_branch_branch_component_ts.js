"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_branch_branch_component_ts"],{

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
            for (let i = 0; i <= this.branchData.length - 1; i++) {
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
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 75626);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _services_maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/maps.service */ 18798);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapmyindia-map-cordova-ionic-beta */ 64540);
/* harmony import */ var mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__);









let MapComponent = class MapComponent {
    constructor(modalController, geolocation, apiService, _mapsService, _element, maps) {
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.apiService = apiService;
        this._mapsService = _mapsService;
        this._element = _element;
        this.maps = maps;
        this.branchData = [];
        this.typesMap = {};
        this.typesList = [];
        this.typesSelectOptions = [];
        this.markers = [];
        this.infoWindows = [];
    }
    ngOnInit() {
        this.setupMap();
        this.getBankBranches();
    }
    ionViewWillEnter() { }
    getBankBranches() {
        this.apiService.getBranchByCity('Bangalore').subscribe((data) => {
            this.branchData = data;
            this.getMarkers();
        });
    }
    setupMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.map = new mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__.mmi();
            this.map.loadMaps(this.gmap.nativeElement, {
                key: '1d833ae339c7284f8104fc7482107c66',
                zoom: 5,
                location: { control: true, initial: true, bounds: true },
            });
            //  Commented google map init
            // const styledMapType = [
            //   {
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#f5f5f5"
            //       }
            //     ]
            //   },
            //   {
            //     "elementType": "labels.icon",
            //     "stylers": [
            //       {
            //         "visibility": "off"
            //       }
            //     ]
            //   },
            //   {
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#616161"
            //       }
            //     ]
            //   },
            //   {
            //     "elementType": "labels.text.stroke",
            //     "stylers": [
            //       {
            //         "color": "#f5f5f5"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "administrative.land_parcel",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#bdbdbd"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#eeeeee"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#757575"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi.park",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#cadaca"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi.park",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#9e9e9e"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#ffffff"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.arterial",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#757575"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.highway",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#dadada"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.highway",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#616161"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.local",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#9e9e9e"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "transit.line",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#e5e5e5"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "transit.station",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#eeeeee"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "water",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#d2e6e8"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "water",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#9e9e9e"
            //       }
            //     ]
            //   }
            // ] as google.maps.MapOptions['styles'];
            // this.google = await this._mapsService.getGoogleMaps();
            // const latLng = new google.maps.LatLng(12.9716, 77.5946);
            // this.map = new this.google.maps.Map(this.gmap.nativeElement, {
            //   center: latLng,
            //   zoom: 14,
            //   styles: styledMapType,
            //   mapTypeControl: true,
            //   mapTypeControlOptions: {
            //     style: this.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            //   }
            // });
        });
    }
    getMarkers() {
        for (let _i = 0; _i < this.branchData.length; _i++) {
            if (_i > 0) {
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
                this.maps.marker(mrker_arr, {
                    iconUrl: 'assets/icon/map.png',
                    iconSize: [36, 51],
                    popupAnchor: [0, -16],
                    draggable: false,
                    fitbounds: true,
                    cluster: true,
                });
            }
        }
    }
    // UNUSED METHOD FOR TEMP GOOGLEMAP START
    setupMarker(location) {
        const svgIcon = {
            path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
            fillColor: '#4a4a4a',
            fillOpacity: 0.9,
            scale: 0.8,
            strokeWeight: 0,
        };
        const mrkr = new this.google.maps.Marker({
            position: new this.google.maps.LatLng(Number(location.lattitude), Number(location.longitude)),
            label: {
                text: location.branchName,
                fontSize: '1.6rem',
                fontWeight: '400',
                fontFamily: "'PlantinMTPro', 'Times New Roman', 'Times', 'Baskerville', 'Georgia', serif",
            },
            map: this.map,
            icon: svgIcon,
        });
        this.markers = [...this.markers, mrkr];
        this.setUpInfoWindow(location, mrkr);
        return mrkr;
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
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _services_maps_service__WEBPACK_IMPORTED_MODULE_4__.MapsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },
    { type: mapmyindia_map_cordova_ionic_beta__WEBPACK_IMPORTED_MODULE_5__.mmi }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuY2guY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 54325:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#map {\n  width: 100%;\n  height: 100vh;\n}\n\n.leaflet-popup-content p {\n  margin: 11px 0 !important;\n}\n\n.map_marker {\n  position: relative;\n  width: 34px;\n  height: 48px;\n}\n\n/*marker text span css*/\n\n.info_window_container {\n  padding: 1rem;\n  overflow: scroll;\n}\n\n.info_window_container p {\n  font-size: 1.4rem;\n}\n\n.info_window_container h4 {\n  text-transform: capitalize;\n  font-size: 1.8rem;\n  margin: 1rem 0rem;\n}\n\n.info_window_container h5,\n.info_window_container span {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.3;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin: 0.2rem 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcbWFwXFxtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQSx1QkFBQTs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVFO0VBQ0UsaUJBQUE7QUNBSjs7QURHRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElFOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDRkoiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudCBwIHtcclxuICBtYXJnaW46IDExcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFwX21hcmtlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLyptYXJrZXIgdGV4dCBzcGFuIGNzcyovXHJcblxyXG4uaW5mb193aW5kb3dfY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDByZW07XHJcbiAgfVxyXG5cclxuICBoNSxcclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMC4ycmVtIDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xuICBtYXJnaW46IDExcHggMCAhaW1wb3J0YW50O1xufVxuXG4ubWFwX21hcmtlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLyptYXJrZXIgdGV4dCBzcGFuIGNzcyovXG4uaW5mb193aW5kb3dfY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5pbmZvX3dpbmRvd19jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmluZm9fd2luZG93X2NvbnRhaW5lciBoNCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luOiAxcmVtIDByZW07XG59XG4uaW5mb193aW5kb3dfY29udGFpbmVyIGg1LFxuLmluZm9fd2luZG93X2NvbnRhaW5lciBzcGFuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMC4ycmVtIDAgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 82598:
/*!********************************************************************!*\
  !*** ./src/app/components/branch/branch.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Nearest Branch</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentMap()\">\r\n        <ion-icon slot=\"start\" name=\"map-outline\"></ion-icon> MAP\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ng-container *ngIf=\"branchData.length > 0; else showNoBranch\">\r\n    <ion-list>\r\n    <ion-item *ngFor=\"let branch of branchData; let i=index\">\r\n      <ion-avatar slot=\"start\">\r\n        <app-avatar-photo [name]=\"branch?.branchName\"></app-avatar-photo> \r\n      </ion-avatar>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <ion-text color=\"primary\">\r\n          <h3>{{ branch?.branchName }}</h3>\r\n        </ion-text>\r\n        <p><small>{{ branch?.address }}</small></p>\r\n        <p><small>Number of Crowds : {{ branch?.tokenCount }}</small></p>\r\n      </ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"dismiss(branch)\">SELECT</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n  </ng-container>\r\n  <ng-template #showNoBranch>\r\n    <p>No Branch Available!</p>\r\n  </ng-template>\r\n\r\n</ion-content>";

/***/ }),

/***/ 55706:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"text-center\">Map</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapContainer id=\"map\"></div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_branch_branch_component_ts.js.map