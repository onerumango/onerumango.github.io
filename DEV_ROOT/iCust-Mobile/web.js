(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "srMn":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/web.js ***!
  \*********************************************************/
/*! exports provided: StorageWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageWeb", function() { return StorageWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class StorageWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super(...arguments);
        this.group = 'CapacitorStorage';
    }
    async configure({ group }) {
        if (typeof group === 'string') {
            this.group = group;
        }
    }
    async get(options) {
        const value = this.impl.getItem(this.applyPrefix(options.key));
        return { value };
    }
    async set(options) {
        this.impl.setItem(this.applyPrefix(options.key), options.value);
    }
    async remove(options) {
        this.impl.removeItem(this.applyPrefix(options.key));
    }
    async keys() {
        const keys = this.rawKeys().map(k => k.substring(this.prefix.length));
        return { keys };
    }
    async clear() {
        for (const key of this.rawKeys()) {
            this.impl.removeItem(key);
        }
    }
    async migrate() {
        var _a;
        const migrated = [];
        const existing = [];
        const oldprefix = '_cap_';
        const keys = Object.keys(this.impl).filter(k => k.indexOf(oldprefix) === 0);
        for (const oldkey of keys) {
            const key = oldkey.substring(oldprefix.length);
            const value = (_a = this.impl.getItem(oldkey)) !== null && _a !== void 0 ? _a : '';
            const { value: currentValue } = await this.get({ key });
            if (typeof currentValue === 'string') {
                existing.push(key);
            }
            else {
                await this.set({ key, value });
                migrated.push(key);
            }
        }
        return { migrated, existing };
    }
    async removeOld() {
        const oldprefix = '_cap_';
        const keys = Object.keys(this.impl).filter(k => k.indexOf(oldprefix) === 0);
        for (const oldkey of keys) {
            this.impl.removeItem(oldkey);
        }
    }
    get impl() {
        return window.localStorage;
    }
    get prefix() {
        return this.group === 'NativeStorage' ? '' : `${this.group}.`;
    }
    rawKeys() {
        return Object.keys(this.impl).filter(k => k.indexOf(this.prefix) === 0);
    }
    applyPrefix(key) {
        return this.prefix + key;
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "wzPO":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
/*! exports provided: CameraWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraWeb", function() { return CameraWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "dTEF");


class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async getPhoto(options) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos) {
                this.fileInputExperience(options, resolve);
            }
            else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
                let actionSheet = document.querySelector('pwa-action-sheet');
                if (!actionSheet) {
                    actionSheet = document.createElement('pwa-action-sheet');
                    document.body.appendChild(actionSheet);
                }
                actionSheet.header = options.promptLabelHeader || 'Photo';
                actionSheet.cancelable = false;
                actionSheet.options = [
                    { title: options.promptLabelPhoto || 'From Photos' },
                    { title: options.promptLabelPicture || 'Take Picture' },
                ];
                actionSheet.addEventListener('onSelection', async (e) => {
                    const selection = e.detail;
                    if (selection === 0) {
                        this.fileInputExperience(options, resolve);
                    }
                    else {
                        this.cameraExperience(options, resolve, reject);
                    }
                });
            }
            else {
                this.cameraExperience(options, resolve, reject);
            }
        });
    }
    async cameraExperience(options, resolve, reject) {
        if (customElements.get('pwa-camera-modal')) {
            const cameraModal = document.createElement('pwa-camera-modal');
            document.body.appendChild(cameraModal);
            try {
                await cameraModal.componentOnReady();
                cameraModal.addEventListener('onPhoto', async (e) => {
                    const photo = e.detail;
                    if (photo === null) {
                        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                    }
                    else if (photo instanceof Error) {
                        reject(photo);
                    }
                    else {
                        resolve(await this._getCameraPhoto(photo, options));
                    }
                    cameraModal.dismiss();
                    document.body.removeChild(cameraModal);
                });
                cameraModal.present();
            }
            catch (e) {
                this.fileInputExperience(options, resolve);
            }
        }
        else {
            console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.`);
            this.fileInputExperience(options, resolve);
        }
    }
    fileInputExperience(options, resolve) {
        let input = document.querySelector('#_capacitor-camera-input');
        const cleanup = () => {
            var _a;
            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        };
        if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            input.hidden = true;
            document.body.appendChild(input);
            input.addEventListener('change', (_e) => {
                const file = input.files[0];
                let format = 'jpeg';
                if (file.type === 'image/png') {
                    format = 'png';
                }
                else if (file.type === 'image/gif') {
                    format = 'gif';
                }
                if (options.resultType === 'dataUrl' ||
                    options.resultType === 'base64') {
                    const reader = new FileReader();
                    reader.addEventListener('load', () => {
                        if (options.resultType === 'dataUrl') {
                            resolve({
                                dataUrl: reader.result,
                                format,
                            });
                        }
                        else if (options.resultType === 'base64') {
                            const b64 = reader.result.split(',')[1];
                            resolve({
                                base64String: b64,
                                format,
                            });
                        }
                        cleanup();
                    });
                    reader.readAsDataURL(file);
                }
                else {
                    resolve({
                        webPath: URL.createObjectURL(file),
                        format: format,
                    });
                    cleanup();
                }
            });
        }
        input.accept = 'image/*';
        input.capture = true;
        if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos ||
            options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
            input.capture = 'user';
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
            input.capture = 'environment';
        }
        input.click();
    }
    _getCameraPhoto(photo, options) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            const format = photo.type.split('/')[1];
            if (options.resultType === 'uri') {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format,
                    saved: false,
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = () => {
                    const r = reader.result;
                    if (options.resultType === 'dataUrl') {
                        resolve({
                            dataUrl: r,
                            format: format,
                            saved: false,
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format,
                            saved: false,
                        });
                    }
                };
                reader.onerror = e => {
                    reject(e);
                };
            }
        });
    }
    async checkPermissions() {
        if (typeof navigator === 'undefined' || !navigator.permissions) {
            throw this.unavailable('Permissions API not available in this browser');
        }
        try {
            // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
            // the specific permissions that are supported varies among browsers that implement the
            // permissions API, so we need a try/catch in case 'camera' is invalid
            const permission = await window.navigator.permissions.query({
                name: 'camera',
            });
            return {
                camera: permission.state,
                photos: 'granted',
            };
        }
        catch (_a) {
            throw this.unavailable('Camera permissions are not available in this browser');
        }
    }
    async requestPermissions() {
        throw this.unimplemented('Not implemented on web.');
    }
}
const Camera = new CameraWeb();

//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web.js.map