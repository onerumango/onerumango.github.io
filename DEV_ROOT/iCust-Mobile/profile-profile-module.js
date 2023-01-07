(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "/s3u":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "dTEF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"]; });


const Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "wzPO")).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "2g2N":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showToast(msg) {
        this.myToast = this.toast.create({
            message: msg,
            duration: 3000
        }).then((toastData) => {
            toastData.present();
        });
    }
    dismissToast() {
        this.myToast = this.toast.dismiss();
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "3mz4":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "6/gD":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ "/s3u");
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ "YwB3");



//import { Filesystem, Directory } from '@capacitor/filesystem';

let PhotoService = class PhotoService {
    // public photos: Photo1[] = [];
    constructor() {
        this.photos = [];
        this.PHOTO_STORAGE = "photos";
    }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 100
            });
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"].set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.photos)
            });
        });
    }
};
PhotoService.ctorParameters = () => [];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ "8r/t":
/*!*************************************************!*\
  !*** ./src/app/views/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "wuQf");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "JYPC");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        providers: [
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "FUe0":
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/*! exports provided: Capacitor, CapacitorException, CapacitorPlatforms, ExceptionCode, Plugins, WebPlugin, WebView, addPlatform, registerPlugin, registerWebPlugin, setPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorException", function() { return CapacitorException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorPlatforms", function() { return CapacitorPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionCode", function() { return ExceptionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlatform", function() { return addPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return registerPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlatform", function() { return setPlatform; });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "IBS7":
/*!*************************************************!*\
  !*** ./src/app/views/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ioncontent {\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(2px);\n  color: grey;\n  --overflow: hidden;\n}\n\n.pix {\n  background-image: linear-gradient(to left, #456EFE, #456EFE, #CEFFF8);\n  height: 140px;\n  cursor: pointer;\n  position: relative;\n  opacity: 90%;\n}\n\n.header-container {\n  position: relative;\n}\n\n.img {\n  width: 99pt;\n  height: 100pt;\n  border-radius: 100%;\n  cursor: pointer;\n  position: absolute;\n  left: 50%;\n  bottom: -40px;\n  transform: translateX(-50%);\n  margin: 0px;\n  border: 6px solid white;\n}\n\n.img1 {\n  cursor: pointer;\n  position: absolute;\n  left: 58%;\n  /* bottom: -20px; */\n  bottom: -43px;\n  margin: 0px;\n}\n\n.text {\n  display: block;\n  margin-top: 60px;\n  text-align: center;\n  color: #102245;\n  font-size: 16pt;\n  font-family: \"Montserrat\" !important;\n  font-weight: bold;\n}\n\n.text1 {\n  text-align: center;\n  display: block;\n  font-family: \"Montserrat\" !important;\n  color: #102245;\n  font-size: 12pt;\n}\n\n.box {\n  display: flex;\n  padding: 10px;\n  border-width: 1pt;\n  border-style: solid;\n  border-radius: 20px;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n  background-color: white;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  margin: 16pt 16pt 0 16pt;\n}\n\ndiv .inputCard {\n  display: flex;\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\n.name {\n  flex-grow: 1;\n  font-size: 15pt;\n  font-family: \"Montserrat\" !important;\n  align-self: center;\n}\n\n.name1 {\n  display: block;\n  font-size: 9pt;\n  font-family: \"Montserrat\" !important;\n  font-weight: 100;\n  opacity: 50%;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button {\n  display: flex;\n  height: -moz-fit-content;\n  height: fit-content;\n  align-self: center;\n}\n\nion-tab-bar {\n  padding-left: 20px;\n  padding-bottom: 25px;\n  box-shadow: 0pt 3pt 5pt;\n  border-radius: 30pt 30pt 0pt 0pt;\n  width: 95%;\n  background-color: #FFFFFF;\n  opacity: 100%;\n}\n\nion-tab-button {\n  --color: var(--ion-color-medium);\n  font-size: large;\n  padding-top: 1%;\n}\n\n.ioncontent {\n  height: 500%;\n}\n\n.bottomMenu {\n  padding: 10px;\n  border-width: 1pt;\n  border: white;\n  border-radius: 30px;\n  box-shadow: 0 3pt 5pt 2pt #D3D3D3;\n  border: 3px solid white;\n  background-color: white;\n  margin: 16pt 16pt 0 16pt;\n  justify-content: center;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\nhr.solid {\n  border-top: 2px solid #bbb;\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.item {\n  align-items: center;\n  display: grid;\n  justify-content: center;\n  padding: 9px;\n  color: black;\n  font-size: 16pt;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n}\n\n.backcard {\n  padding: 9px;\n  font-size: larger;\n  color: black;\n  padding: 10px;\n  border-width: 1pt;\n  border: white;\n  border-radius: 30px;\n  box-shadow: 0 3pt 5pt 2pt #D3D3D3;\n  border: 3px solid white;\n  background-color: white;\n  margin: 16pt 16pt 0 16pt;\n  justify-content: center;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  text-align: center;\n  font-family: \"Montserrat\" !important;\n  font-weight: bold;\n  font-size: 16pt;\n}\n\n.logout-icon {\n  width: 55px;\n  height: 55px;\n  background: #f0f8ff;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFNRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXZCRjs7QUEwQkE7RUFFRSxxRUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLGtCQUFBO0FBeEJGOztBQTJCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBeEJGOztBQTJCQTtFQU1FLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBN0JGOztBQWlDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FBOUJGOztBQWlDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUE5QkY7O0FBaUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUdBLG1CQUFBO0VBR0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUVBLHVCQUFBO0VBRUEsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQXBDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBQUE7QUF2Q0Y7O0FBMENBO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBeENGOztBQWlEQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFLQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWxERjs7QUFzREE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FBbkRGOztBQXVEQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQXBERjs7QUF1REE7RUFDRSxnQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQXJERjs7QUF5REE7RUFDRSxZQUFBO0FBdERGOztBQXlEQTtFQUVFLGFBQUE7RUFDQSxpQkFBQTtFQU1BLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFFQSx1QkFBQTtFQUdBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQS9ERjs7QUFrRUE7RUFFRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFoRUY7O0FBbUVBO0VBRUUsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FBakVGOztBQW9FQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7RUFNQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTNFRjs7QUE4RUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUEzRUYiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjYWN0aW9uLXNoZWV0LWhvbWUtcGFnZSB7ICBcclxuLy8gICAuaW9uLW1kLXNoYXJlIHsgIFxyXG4vLyAgICAgY29sb3I6ICNFRDQyNDg7ICBcclxuLy8gICB9ICBcclxuLy8gICAuaW9uLW1kLWFycm93LWRyb3ByaWdodC1jaXJjbGUgeyAgXHJcbi8vICAgICBjb2xvcjogIzUwOEFFNDsgIFxyXG4vLyAgIH0gIFxyXG4vLyAgIC5pb24tbWQtaGVhcnQtb3V0bGluZSB7ICBcclxuLy8gICAgIGNvbG9yOiAjMzFENTVGOyAgXHJcbi8vICAgfSAgXHJcbi8vICAgLmFjdGlvbi1zaGVldC1jYW5jZWwgaW9uLWljb24sICBcclxuLy8gICAuYWN0aW9uLXNoZWV0LWRlc3RydWN0aXZlIGlvbi1pY29uIHsgIFxyXG4vLyAgICAgY29sb3I6ICM3NTc1NzU7ICBcclxuLy8gICB9ICBcclxuLy8gfSAgXHJcbi8vIDpyb290IHtcclxuLy8gICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4vLyAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbi8vIH1cclxuXHJcbi5pb25jb250ZW50IHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9iYWNrZ3JvdW5kL2ltYWdlLmpwZycpO1xyXG4gIC8vIHdpZHRoOiAxMDB2dztcclxuICAvLyBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAtd2Via2l0LWZpbHRlcjogYmx1cigycHgpO1xyXG4gIC1tb3otZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgLW8tZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgLW1zLWZpbHRlcjogYmx1cigycHgpO1xyXG4gIGZpbHRlcjogYmx1cigycHgpO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBpeCB7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiM0NTZFRkUgO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNDU2RUZFLCAjNDU2RUZFLCAjQ0VGRkY4KTtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3BhY2l0eTogOTAlO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICB3aWR0aDogOTlwdDtcclxuICBoZWlnaHQ6IDEwMHB0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAtNDBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5pbWcxIHtcclxuICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGxlZnQ6IDYwJTtcclxuICAvLyBib3R0b206IC0xOTBweDtcclxuICAvLyBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDU4JTtcclxuICAvKiBib3R0b206IC0yMHB4OyAqL1xyXG4gIGJvdHRvbTogLTQzcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgLy8gYm9yZGVyOjZweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItd2lkdGg6IDFwdDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAvLyB3aWR0aDogOTUlO1xyXG4gIC8vIGhlaWdodDogNzdwdDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vYm9yZGVyLWNvbG9yOiM0NTZFRkU7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gIG1hcmdpbjogMTZwdCAxNnB0IDAgMTZwdDtcclxuXHJcblxyXG59XHJcblxyXG5kaXYgLmlucHV0Q2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAvLyBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIC8vIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDhweDtcclxuICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLy8gbWFyZ2luLWxlZnQ6MHB0O1xyXG5cclxuLm5hbWUxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDlwdDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBvcGFjaXR5OiA1MCU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHQ7XHJcblxyXG4gIC8vIG1hcmdpbi10b3A6OHB0O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmlvbi10YWItYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB0IDNwdCA1cHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBwdCAzMHB0IDBwdCAwcHQ7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAvLyAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcblxyXG59XHJcblxyXG4uaW9uY29udGVudCB7XHJcbiAgaGVpZ2h0OiA1MDAlO1xyXG59XHJcblxyXG4uYm90dG9tTWVudSB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB0O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8vIHdpZHRoOiA5NSU7XHJcbiAgLy8gaGVpZ2h0OiA3N3B0O1xyXG4gIGJvcmRlcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3gtc2hhZG93OiAwIDNwdCA1cHQgMnB0ICNEM0QzRDM7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vYm9yZGVyLWNvbG9yOiM0NTZFRkU7XHJcblxyXG4gIG1hcmdpbjogMTZwdCAxNnB0IDAgMTZwdDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbmhyLnNvbGlkIHtcclxuXHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNiYmI7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDlweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNnB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhY2tjYXJkIHtcclxuICBwYWRkaW5nOiA5cHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB0O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8vIHdpZHRoOiA5NSU7XHJcbiAgLy8gaGVpZ2h0OiA3N3B0O1xyXG4gIGJvcmRlcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3gtc2hhZG93OiAwIDNwdCA1cHQgMnB0ICNEM0QzRDM7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vYm9yZGVyLWNvbG9yOiM0NTZFRkU7XHJcblxyXG4gIG1hcmdpbjogMTZwdCAxNnB0IDAgMTZwdDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHQ7XHJcbn1cclxuXHJcbi5sb2dvdXQtaWNvbiB7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMGY4ZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "JYPC":
/*!***********************************************!*\
  !*** ./src/app/views/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "nMOV");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "IBS7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/photo.service */ "6/gD");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/commonservice.service */ "wss1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");














let ProfilePage = class ProfilePage {
    constructor(api, platform, actionSheetController, sanitizer, cdr, camera, router, photoService, commonService, dataService, alert, toastService) {
        this.api = api;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.camera = camera;
        this.router = router;
        this.photoService = photoService;
        this.commonService = commonService;
        this.dataService = dataService;
        this.alert = alert;
        this.toastService = toastService;
        this.options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    ngOnInit() {
        this.phoneNumber = localStorage.getItem('PhoneNumLogin');
        console.log("phoneNumber", this.phoneNumber);
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            console.log('backend resp in home', resp);
            this.formData = resp;
            console.log('form :: ', this.formData);
            this.commonService.sendProfileInfo(resp);
            this.customerId = resp.customerId;
            this.assign(resp.firstName, resp.middleName, resp.lastName, resp.primaryEmailAdress);
            this.getProfilePicture(resp.customerId);
        });
        this.dataService.getAvatarUrl.subscribe(data => {
            if (data != null) {
                this.image = data;
                this.cdr.markForCheck();
            }
        });
    }
    assign(firstName, middleName, lastName, email) {
        if (middleName == null) {
            this.fullName = firstName + ' ' + lastName;
        }
        else {
            this.fullName = firstName + ' ' + middleName + ' ' + lastName;
            console.log("full name", this.fullName);
        }
        this.email = email;
    }
    settings() {
        this.router.navigate(['change-password']);
    }
    account() {
        this.router.navigate(['account']);
    }
    menu() {
        this.flag = true;
        //  document.body.style.backgroundColor = "yellow";
        //  document.getElementById("pix").style.mask="yellow"
        // document.getElementById("form").style.backgroundColor="yellow"
        // document.getElementById("name").style.backgroundColor="yellow"
    }
    getProfilePicture(customerId) {
        this.api.getProfileDetails(customerId)
            .subscribe((data) => {
            this.profileData = data;
            if (data.profileImage != null) {
                let objectURL = data.profileImage;
                this.image = data.profileImage != "not_available" ? this.sanitizer.bypassSecurityTrustUrl(objectURL) : undefined;
                ;
            }
            else {
                this.image = null;
            }
            this.cdr.markForCheck();
        }, (error) => {
            console.log(error);
        });
    }
    getRandomColor(idx) {
        var col0 = '#0d856b';
        var col1 = '#d66f1b';
        var col2 = '#9f52e7';
        var col3 = '#e9318d';
        var col4 = '#1175a3';
        var col5 = '#e93131';
        var col6 = '#2316d3';
        var col7 = '#f557f5';
        var col8 = '#d6c31b';
        var col9 = '#40d61b';
        if ((idx % 10) == 0)
            return col0;
        if ((idx % 10) == 1)
            return col1;
        if ((idx % 10) == 2)
            return col2;
        if ((idx % 10) == 3)
            return col3;
        if ((idx % 10) == 4)
            return col4;
        if ((idx % 10) == 5)
            return col5;
        if ((idx % 10) == 6)
            return col6;
        if ((idx % 10) == 7)
            return col7;
        if ((idx % 10) == 8)
            return col8;
        if ((idx % 10) == 9)
            return col9;
        return '#d86315';
        // var randomColor = Math.floor(Math.random()*16777215).toString(16);
        // return '#' + randomColor.slice(-6);
        // var randomColor = Math.floor(0x1000000 * Math.random()).toString(16);
        // return '#' + ('000000' + randomColor).slice(-6);
    }
    cancel() {
        this.flag = false;
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
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
                        text: 'Take Photo',
                        // icon: 'share',
                        handler: () => {
                            this.takePicture();
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Upload photo',
                        // icon: 'arrow-dropright-circle',
                        handler: () => {
                            // this.takePhoto(0);
                            this.fileInput.nativeElement.click();
                        }
                    }, {
                        text: 'Remove',
                        role: 'destructive',
                        // icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
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
    goToHelp() {
        this.router.navigate(['help']);
    }
    goToFaq() {
        this.router.navigate(['faq']);
    }
    fileSelected(event) {
        const file = event.target.files ? event.target.files[0] : '';
        this.selectedFile = file;
        let size = event.target.files[0].size;
        this.toastService.showToast(`profile picture will take time to load since the upload file size is ${this.formatBytes(size, 2)}`);
        this.uploadFile(file);
    }
    formatBytes(bytes, decimals) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    uploadFile(file) {
        this.showLoader = true;
        const formData = new FormData();
        let payload = {
            "documentName": "Profile",
            "documentType": 1,
            "fileType": file.type,
            "fileName": file.name,
            "customerId": this.customerId
        };
        formData.append('file', file);
        formData.append('data', JSON.stringify(payload));
        this.api.uploadProfilePicture(formData)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpResponse"]) {
                let avatarUrl = event.body.fileUrl;
                this.showLoader = false;
                localStorage.setItem('avatarUrl', avatarUrl);
                this.dataService.shareAvatarUrl(avatarUrl);
                this.toastService.showToast("File Uploaded Successfully!");
            }
            this.cdr.markForCheck();
        }, (err) => {
            this.progress = 0;
            this.showLoader = false;
            this.selectedFile = null;
        });
    }
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        console.log(options);
        this.camera.getPicture(options).then((imageData) => {
            this.currentImage = 'data:image/jpeg;base64,' + imageData;
            console.log(this.currentImage);
        }, (err) => {
            // Handle error
            console.log("Camera issue:" + err);
        });
    }
    takePhoto(sourceType) {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.currentImage = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
    logoutApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alret = yield this.alert.create({
                subHeader: "Do you want to Sign Out",
                buttons: [
                    {
                        text: "Yes",
                        handler: () => {
                            this.logOut();
                        }
                    },
                    {
                        text: "No"
                    }
                ],
            });
            yield alret.present();
        });
    }
    logOut() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]).then(_ => {
            window.location.reload();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"] },
    { type: src_app_services_commonservice_service__WEBPACK_IMPORTED_MODULE_10__["CommonserviceService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"] }
];
ProfilePage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['file',] }]
};
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "YwB3":
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "3mz4");
/* empty/unused harmony star reexport */
const Storage = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Storage', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "srMn")).then(m => new m.StorageWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "a/9d":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
Camera.ɵfac = function Camera_Factory(t) { return ɵCamera_BaseFactory(t || Camera); };
Camera.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Camera, factory: function (t) { return Camera.ɵfac(t); } });
var ɵCamera_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Camera);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Camera, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FtZXJhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtBQUMxQixJQUFDLDZEQUFZLENBQUE7QUFBQyxJQUNiLDZEQUFRLENBQUE7QUFBQyxJQUNULGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0FBQ3ZCLElBQUMsK0NBQVEsQ0FBQTtBQUFDLElBQ1QsNkNBQUcsQ0FBQTtBQUNMLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7QUFDcEIsSUFBQywrQ0FBVyxDQUFBO0FBQUMsSUFDWiwyQ0FBSyxDQUFBO0FBQUMsSUFDTixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtBQUM1QixJQUFDLHlFQUFnQixDQUFBO0FBQUMsSUFDakIsNkRBQU0sQ0FBQTtBQUFDLElBQ1AsK0VBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQU1YO0FBTkQsV0FBWSxxQkFBcUI7QUFDaEMsSUFBQyx5RUFBWSxDQUFBO0FBQUMsSUFDYiw2RUFBVSxDQUFBO0FBQUMsSUFDWCw2RUFBVSxDQUFBO0FBQUMsSUFDWCwrRUFBVyxDQUFBO0FBQUMsSUFDWiwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0FBQ3BCLElBQUMseUNBQVEsQ0FBQTtBQUFDLElBQ1QsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQUNEO0FBSVEsSUFpRG9CLDBCQUFpQjtBQUFDO0FBRTlCO0FBR0ssUUFKbkI7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLHFCQUFlLEdBQUc7QUFDcEIsWUFBSSxnS0FBZ0s7QUFDcEssWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFlBQUksNEVBQTRFO0FBQ2hGLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLDBEQUEwRDtBQUM5RCxZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGtCQUFZLEdBQUc7QUFDakIsWUFBSSxnQ0FBZ0M7QUFDcEMsWUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLFlBQUksK0JBQStCO0FBQ25DLFlBQUksR0FBRyxFQUFFLENBQUM7QUFDVixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSxlQUFTLEdBQUc7QUFDZCxZQUFJLHdHQUF3RztBQUM1RyxZQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsWUFBSSxzREFBc0Q7QUFDMUQsWUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLFlBQUksMkNBQTJDO0FBQy9DLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSx1QkFBaUIsR0FBRztBQUN0QixZQUFJLDJFQUEyRTtBQUMvRSxZQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25CLFlBQUksK0JBQStCO0FBQ25DLFlBQUksTUFBTSxFQUFFLENBQUM7QUFDYixZQUFJLDhFQUE4RTtBQUNsRixZQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLDJCQUFxQixHQUFHO0FBQzFCLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFlBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsWUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNsQixZQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGVBQVMsR0FBRztBQUNkLFlBQUksaUNBQWlDO0FBQ3JDLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxZQUFJLGtDQUFrQztBQUN0QyxZQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBT25CLDJCQUFVLGFBQUMsT0FBdUI7QUFLUyxJQU8zQyx3QkFBTztBQUk0QztBQUFrQztBQUE2QztBQUEyQztBQUFxRTswQ0E3Rm5QLFVBQVU7Ozs7OzBCQUNMO0FBQUMsaUJBL0tQO0FBQUUsRUErSzBCLGlCQUFpQjtBQUM1QyxTQURZLE1BQU07QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSSxcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgSlBFRyA9IDAsXG4gIFBORyxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQSxcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTSxcbn1cblxuZXhwb3J0IGVudW0gUG9wb3ZlckFycm93RGlyZWN0aW9uIHtcbiAgQVJST1dfVVAgPSAxLFxuICBBUlJPV19ET1dOLFxuICBBUlJPV19MRUZULFxuICBBUlJPV19SSUdIVCxcbiAgQVJST1dfQU5ZLFxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlQsXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAcHJlbWllciBjYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXG4gICAqL1xuICBEZXN0aW5hdGlvblR5cGUgPSB7XG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xuICAgIERBVEFfVVJMOiAwLFxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cbiAgICBGSUxFX1VSSTogMSxcbiAgICAvKiogUmV0dXJuIG5hdGl2ZSB1cmkgKGVnLiBhc3NldC1saWJyYXJ5Oi8vLi4uIGZvciBpT1MpICovXG4gICAgTkFUSVZFX1VSSTogMixcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIEVuY29kaW5nVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIEpQRUc6IDAsXG4gICAgLyoqIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIFBORzogMSxcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBQSE9UT0xJQlJBUlkgZm9yIEFuZHJvaWQpICovXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cbiAgICBDQU1FUkE6IDEsXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUG9wb3ZlckFycm93RGlyZWN0aW9uID0ge1xuICAgIEFSUk9XX1VQOiAxLFxuICAgIEFSUk9XX0RPV046IDIsXG4gICAgQVJST1dfTEVGVDogNCxcbiAgICBBUlJPV19SSUdIVDogOCxcbiAgICBBUlJPV19BTlk6IDE1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlIGEgcGljdHVyZSBvciB2aWRlbywgb3IgbG9hZCBvbmUgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEsIG9yIHRoZSBpbWFnZSBmaWxlIFVSSSwgZGVwZW5kaW5nIG9uIGNhbWVyYU9wdGlvbnMsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGludGVybWVkaWF0ZSBpbWFnZSBmaWxlcyB0aGF0IGFyZSBrZXB0IGluIHRlbXBvcmFyeSBzdG9yYWdlIGFmdGVyIGNhbGxpbmcgY2FtZXJhLmdldFBpY3R1cmUuXG4gICAqIEFwcGxpZXMgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBDYW1lcmEuc291cmNlVHlwZSBlcXVhbHMgQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSBhbmQgdGhlIENhbWVyYS5kZXN0aW5hdGlvblR5cGUgZXF1YWxzIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "dTEF":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "nMOV":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"header-container\">\r\n  <div class=\"pix\" id=\"pix\"></div>\r\n      <ion-avatar>\r\n        <ng-container *ngIf=\"image == null || image == undefined; else showAvatar\">\r\n          <h1 class=\"img\" [style.background]=\"getRandomColor(i+3)\" style=\"text-align: center; font-size: 50px; padding-top: 30px;\">\r\n            {{formData?.firstName | uppercase | slice:0:1}}{{formData?.lastName | uppercase | slice:0:1}}</h1>\r\n        </ng-container>\r\n        <ng-template #showAvatar>\r\n          <img class=\"img\" [src]=\"image\" alt=\"\" >\r\n        </ng-template>\r\n      </ion-avatar>\r\n  <img class=\"img1\" id=\"action-sheets-home-page\" src=\"assets\\icon\\camera.PNG\" alt=\"Ionic logo\" (click)=\"openActionSheet()\">\r\n \r\n\r\n</div>\r\n\r\n<div id=\"name\">\r\n  <span class=\"text\">{{fullName}}</span>\r\n  <span class=\"text1\">{{email}}</span>\r\n</div>\r\n\r\n<ion-progress-bar [value]=\"progress\" *ngIf=\"showLoader\"></ion-progress-bar>\r\n<ion-content>\r\n\r\n  \r\n \r\n  <form id=\"form\" style=\"margin-top: 20px; margin-bottom: 50px;\">\r\n   \r\n    <div class=\"inputCard\">\r\n      <div class=\"box\" readonly>\r\n        <img class=\"icon\" src=\"assets\\icon\\settings.PNG\" alt=\"Ionic logo\">\r\n        <div class=\"name\">\r\n          <div style=\"width: fit-content;margin-left: 10pt;\">\r\n            <div>Account Settings</div>\r\n            <div style=\"font-size: 9pt;font-family: 'Montserrat' !important;font-weight:100;opacity: 50%;\">Update and\r\n              modify your profile.</div>\r\n          </div>\r\n        </div>\r\n        <img class=\"button\" src=\"assets\\icon\\click.PNG\" alt=\"Ionic logo\"  (click)=\"account()\">\r\n       \r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"inputCard\">\r\n      <div class=\"box\" readonly>\r\n        <img class=\"icon\" src=\"assets\\icon\\security.PNG\" alt=\"Ionic logo\">\r\n        <div class=\"name\">\r\n          <div style=\"width: fit-content;margin-left: 10pt;\">\r\n            <div>Security Center</div>\r\n            <div style=\"font-size: 9pt;font-family: 'Montserrat' !important;font-weight:100;opacity: 50%;\">Change Your Password</div>\r\n          </div>\r\n        </div>\r\n        <img class=\"button\" src=\"assets\\icon\\click.PNG\" alt=\"Ionic logo\" (click)=\"settings()\">\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <div class=\"box\" readonly>\r\n        <img class=\"icon\" src=\"assets\\icon\\notification.PNG\" alt=\"Ionic logo\">\r\n        <div class=\"name\">\r\n          <div style=\"width: fit-content;margin-left: 10pt;\">\r\n            <div>Notifications</div>\r\n            <div style=\"font-size: 9pt;font-family: 'Montserrat' !important;font-weight:100;opacity: 50%;\">Change Your notification settings.</div>\r\n          </div>\r\n        </div>\r\n        <img class=\"button\" src=\"assets\\icon\\click.PNG\" alt=\"Ionic logo\">\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <div class=\"box\" readonly>\r\n        <img class=\"icon\" src=\"assets\\icon\\help.PNG\" alt=\"Ionic logo\">\r\n        <div class=\"name\">\r\n          <div style=\"width: fit-content;margin-left: 10pt;\">\r\n            <div>Help</div>\r\n            <div style=\"font-size: 9pt;font-family: 'Montserrat' !important;font-weight:100;opacity: 50%;\">Need more help</div>\r\n          </div>\r\n        </div>\r\n        <img class=\"button\" src=\"assets\\icon\\click.PNG\" alt=\"Ionic logo\" (click)=\"goToHelp()\">\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <div class=\"box\" readonly>\r\n        <img class=\"icon\" src=\"assets\\icon\\faq.PNG\" alt=\"Ionic logo\">\r\n        <div class=\"name\">\r\n          <div style=\"width: fit-content;margin-left: 10pt;\">\r\n            <div>Faq</div>\r\n            <div style=\"font-size: 9pt;font-family: 'Montserrat' !important;font-weight:100;opacity: 50%;\">Ask your questions.</div>\r\n          </div>\r\n        </div>\r\n        <img class=\"button\" src=\"assets\\icon\\click.PNG\" alt=\"Ionic logo\" (click)=\"goToFaq()\">\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"inputCard\">\r\n      <div class=\"box\" readonly>\r\n        <img class=\"icon logout-icon\" src=\"assets\\icon\\logout.png\" alt=\"Ionic logo\">\r\n        <div class=\"name\">\r\n          <div style=\"width: fit-content;margin-left: 10pt;\">\r\n            <div>Logout</div>\r\n          </div>\r\n        </div>\r\n        <img class=\"button\" src=\"assets\\icon\\click.PNG\" alt=\"Ionic logo\" (click)=\"logoutApp()\">\r\n      </div>\r\n\r\n    </div>\r\n \r\n  </form>\r\n  \r\n  <input type=\"file\" accept=\"image/*\" #file style=\"display: none;\" (change)=\"fileSelected($event)\">\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "wuQf":
/*!*********************************************************!*\
  !*** ./src/app/views/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "JYPC");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map