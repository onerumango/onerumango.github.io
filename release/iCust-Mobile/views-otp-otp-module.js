(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-otp-otp-module"],{

/***/ "5eHb":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js ***!
  \*********************************************************************/
/*! exports provided: BasePortalHost, ComponentPortal, DefaultGlobalConfig, DefaultNoAnimationsGlobalConfig, DefaultNoComponentGlobalConfig, Overlay, OverlayContainer, OverlayRef, TOAST_CONFIG, Toast, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastNoAnimation, ToastNoAnimationModule, ToastPackage, ToastRef, ToastrComponentlessModule, ToastrModule, ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGlobalConfig", function() { return DefaultGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNoAnimationsGlobalConfig", function() { return DefaultNoAnimationsGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNoComponentGlobalConfig", function() { return DefaultNoComponentGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG", function() { return TOAST_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function() { return ToastContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function() { return ToastContainerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastInjector", function() { return ToastInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimation", function() { return ToastNoAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimationModule", function() { return ToastNoAnimationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPackage", function() { return ToastPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastRef", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponentlessModule", function() { return ToastrComponentlessModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = ["toast-component", ""];
function Toast_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Toast_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function Toast_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
} }
function Toast_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Toast_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r1.options.titleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.duplicatesCount);
} }
function Toast_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r2.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function Toast_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r3.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", ctx_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.message, " ");
} }
function Toast_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", ctx_r4.width + "%");
} }
function ToastNoAnimation_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToastNoAnimation_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
} }
function ToastNoAnimation_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r1.options.titleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.duplicatesCount);
} }
function ToastNoAnimation_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r2.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function ToastNoAnimation_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r3.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", ctx_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.message, " ");
} }
function ToastNoAnimation_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", ctx_r4.width + "%");
} }
class ToastContainerDirective {
    constructor(el) {
        this.el = el;
    }
    getContainerElement() {
        return this.el.nativeElement;
    }
}
ToastContainerDirective.??fac = function ToastContainerDirective_Factory(t) { return new (t || ToastContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ToastContainerDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: ToastContainerDirective, selectors: [["", "toastContainer", ""]], exportAs: ["toastContainer"] });
ToastContainerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastContainerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[toastContainer]',
                exportAs: 'toastContainer'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class ToastContainerModule {
}
ToastContainerModule.??fac = function ToastContainerModule_Factory(t) { return new (t || ToastContainerModule)(); };
ToastContainerModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ToastContainerModule });
ToastContainerModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ToastContainerModule, { declarations: [ToastContainerDirective], exports: [ToastContainerDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastContainerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [ToastContainerDirective],
                exports: [ToastContainerDirective]
            }]
    }], null, null); })();

/**
 * Everything a toast needs to launch
 */
class ToastPackage {
    constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toastRef.afterClosed().subscribe(() => {
            this._onAction.complete();
            this._onTap.complete();
        });
    }
    /** Fired on click */
    triggerTap() {
        this._onTap.next();
        if (this.config.tapToDismiss) {
            this._onTap.complete();
        }
    }
    onTap() {
        return this._onTap.asObservable();
    }
    /** available for use in custom toast */
    triggerAction(action) {
        this._onAction.next(action);
    }
    onAction() {
        return this._onAction.asObservable();
    }
}
const DefaultNoComponentGlobalConfig = {
    maxOpened: 0,
    autoDismiss: false,
    newestOnTop: true,
    preventDuplicates: false,
    countDuplicates: false,
    resetTimeoutOnDuplicate: false,
    includeTitleDuplicates: false,
    iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
    },
    // Individual
    closeButton: false,
    disableTimeOut: false,
    timeOut: 5000,
    extendedTimeOut: 1000,
    enableHtml: false,
    progressBar: false,
    toastClass: 'ngx-toastr',
    positionClass: 'toast-top-right',
    titleClass: 'toast-title',
    messageClass: 'toast-message',
    easing: 'ease-in',
    easeTime: 300,
    tapToDismiss: true,
    onActivateTick: false,
    progressAnimation: 'decreasing',
};
const TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ToastConfig');

/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
class ComponentPortal {
    constructor(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    attach(host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    }
    /** Detach this portal from its host */
    detach() {
        const host = this._attachedHost;
        if (host) {
            this._attachedHost = undefined;
            return host.detach();
        }
    }
    /** Whether this portal is attached to a host. */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 */
class BasePortalHost {
    attach(portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    }
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = undefined;
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = undefined;
        }
    }
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
}

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
class DomPortalHost extends BasePortalHost {
    constructor(_hostDomElement, _componentFactoryResolver, _appRef) {
        super();
        this._hostDomElement = _hostDomElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    attachComponentPortal(portal, newestOnTop) {
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        let componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(() => {
            this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    }
    /** Gets the root HTMLElement for an instantiated component. */
    _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
    }
}

/** Container inside which all toasts will render. */
class OverlayContainer {
    constructor(_document) {
        this._document = _document;
    }
    ngOnDestroy() {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    }
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    getContainerElement() {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    _createContainer() {
        const container = this._document.createElement('div');
        container.classList.add('overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    }
}
OverlayContainer.??fac = function OverlayContainer_Factory(t) { return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
OverlayContainer.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ factory: function OverlayContainer_Factory() { return new OverlayContainer(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
OverlayContainer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
    constructor(_portalHost) {
        this._portalHost = _portalHost;
    }
    attach(portal, newestOnTop = true) {
        return this._portalHost.attach(portal, newestOnTop);
    }
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    detach() {
        return this._portalHost.detach();
    }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
class Overlay {
    constructor(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._document = _document;
        // Namespace panes by overlay container
        this._paneElements = new Map();
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    create(positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    }
    getPaneElement(positionClass = '', overlayContainer) {
        if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    _createPaneElement(positionClass, overlayContainer) {
        const pane = this._document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        pane.classList.add('toast-container');
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    }
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    }
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    _createOverlayRef(pane) {
        return new OverlayRef(this._createPortalHost(pane));
    }
}
Overlay.??fac = function Overlay_Factory(t) { return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
Overlay.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ factory: function Overlay_Factory() { return new Overlay(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: Overlay, providedIn: "root" });
Overlay.ctorParameters = () => [
    { type: OverlayContainer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Overlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: OverlayContainer }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * Reference to a toast opened via the Toastr service.
 */
class ToastRef {
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Count of duplicates of this toast */
        this.duplicatesCount = 0;
        /** Subject for notifying the user that the toast has finished closing. */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** triggered when toast is activated */
        this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** notifies the toast that it should close before the timeout */
        this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** notifies the toast that it should reset the timeouts */
        this._resetTimeout = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** notifies the toast that it should count a duplicate toast */
        this._countDuplicate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    manualClose() {
        this._manualClose.next();
        this._manualClose.complete();
    }
    manualClosed() {
        return this._manualClose.asObservable();
    }
    timeoutReset() {
        return this._resetTimeout.asObservable();
    }
    countDuplicate() {
        return this._countDuplicate.asObservable();
    }
    /**
     * Close the toast.
     */
    close() {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._manualClose.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
        this._resetTimeout.complete();
        this._countDuplicate.complete();
    }
    /** Gets an observable that is notified when the toast is finished closing. */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    isInactive() {
        return this._activate.isStopped;
    }
    activate() {
        this._activate.next();
        this._activate.complete();
    }
    /** Gets an observable that is notified when the toast has started opening. */
    afterActivate() {
        return this._activate.asObservable();
    }
    /** Reset the toast timouts and count duplicates */
    onDuplicate(resetTimeout, countDuplicate) {
        if (resetTimeout) {
            this._resetTimeout.next();
        }
        if (countDuplicate) {
            this._countDuplicate.next(++this.duplicatesCount);
        }
    }
}
/** Custom injector type specifically for instantiating components with a toast. */
class ToastInjector {
    constructor(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    get(token, notFoundValue, flags) {
        if (token === ToastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue, flags);
    }
}

class ToastrService {
    constructor(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        this.toastrConfig = Object.assign(Object.assign({}, token.default), token.config);
        if (token.config.iconClasses) {
            this.toastrConfig.iconClasses = Object.assign(Object.assign({}, token.default.iconClasses), token.config.iconClasses);
        }
    }
    /** show toast */
    show(message, title, override = {}, type = '') {
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /** show successful toast */
    success(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.success || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /** show error toast */
    error(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.error || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /** show info toast */
    info(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.info || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /** show warning toast */
    warning(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.warning || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * Remove all or a single toast by id
     */
    clear(toastId) {
        // Call every toastRef manualClose function
        for (const toast of this.toasts) {
            if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                }
            }
            else {
                toast.toastRef.manualClose();
            }
        }
    }
    /**
     * Remove and destroy a single toast by id
     */
    remove(toastId) {
        const found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            const p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    }
    /**
     * Determines if toast message is already shown
     */
    findDuplicate(title = '', message = '', resetOnDuplicate, countDuplicates) {
        const { includeTitleDuplicates } = this.toastrConfig;
        for (const toast of this.toasts) {
            const hasDuplicateTitle = includeTitleDuplicates && toast.title === title;
            if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
                toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
                return toast;
            }
        }
        return null;
    }
    /** create a clone of global config and apply individual settings */
    applyConfig(override = {}) {
        return Object.assign(Object.assign({}, this.toastrConfig), override);
    }
    /**
     * Find toast object by id
     */
    _findToast(toastId) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    }
    /**
     * Determines the need to run inside angular's zone then builds the toast
     */
    _preBuildNotification(toastType, message, title, config) {
        if (config.onActivateTick) {
            return this.ngZone.run(() => this._buildNotification(toastType, message, title, config));
        }
        return this._buildNotification(toastType, message, title, config);
    }
    /**
     * Creates and attaches toast data to component
     * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
     */
    _buildNotification(toastType, message, title, config) {
        if (!config.toastComponent) {
            throw new Error('toastComponent required');
        }
        // max opened and auto dismiss = true
        // if timeout = 0 resetting it would result in setting this.hideTime = Date.now(). Hence, we only want to reset timeout if there is
        // a timeout at all
        const duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);
        if (((this.toastrConfig.includeTitleDuplicates && title) || message) &&
            this.toastrConfig.preventDuplicates &&
            duplicate !== null) {
            return duplicate;
        }
        this.previousToastMessage = message;
        let keepInactive = false;
        if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
            }
        }
        const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        let sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, message);
        }
        const toastRef = new ToastRef(overlayRef);
        const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        const toastInjector = new ToastInjector(toastPackage, this._injector);
        const component = new ComponentPortal(config.toastComponent, toastInjector);
        const portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        toastRef.componentInstance = portal.instance;
        const ins = {
            toastId: this.index,
            title: title || '',
            message: message || '',
            toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal,
        };
        if (!keepInactive) {
            this.currentlyActive = this.currentlyActive + 1;
            setTimeout(() => {
                ins.toastRef.activate();
            });
        }
        this.toasts.push(ins);
        return ins;
    }
}
ToastrService.??fac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](TOAST_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ToastrService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ factory: function ToastrService_Factory() { return new ToastrService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](TOAST_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ToastrService, providedIn: "root" });
ToastrService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [TOAST_CONFIG,] }] },
    { type: Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [TOAST_CONFIG]
            }] }, { type: Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();

class Toast {
    constructor(toastrService, toastPackage, ngZone) {
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.ngZone = ngZone;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = {
            value: 'inactive',
            params: {
                easeTime: this.toastPackage.config.easeTime,
                easing: 'ease-in'
            }
        };
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
            this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
            this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
            this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(count => {
            this.duplicatesCount = count;
        });
    }
    /** hides component when waiting to be displayed */
    get displayStyle() {
        if (this.state.value === 'inactive') {
            return 'none';
        }
        return;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    }
    /**
     * activates toast and sets timeout
     */
    activateToast() {
        this.state = Object.assign(Object.assign({}, this.state), { value: 'active' });
        if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
            this.outsideTimeout(() => this.remove(), this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.outsideInterval(() => this.updateProgress(), 10);
            }
        }
    }
    /**
     * updates progress bar width
     */
    updateProgress() {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        const now = new Date().getTime();
        const remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    }
    resetTimeout() {
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = Object.assign(Object.assign({}, this.state), { value: 'active' });
        this.outsideTimeout(() => this.remove(), this.originalTimeout);
        this.options.timeOut = this.originalTimeout;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(() => this.updateProgress(), 10);
        }
    }
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove() {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = Object.assign(Object.assign({}, this.state), { value: 'removed' });
        this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime);
    }
    tapToast() {
        if (this.state.value === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    }
    stickAround() {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    }
    delayedHideToast() {
        if ((this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut') ||
            this.options.extendedTimeOut === 0 ||
            this.state.value === 'removed') {
            return;
        }
        this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(() => this.updateProgress(), 10);
        }
    }
    outsideTimeout(func, timeout) {
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(() => (this.timeout = setTimeout(() => this.runInsideAngular(func), timeout)));
        }
        else {
            this.timeout = setTimeout(() => func(), timeout);
        }
    }
    outsideInterval(func, timeout) {
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(() => (this.intervalId = setInterval(() => this.runInsideAngular(func), timeout)));
        }
        else {
            this.intervalId = setInterval(() => func(), timeout);
        }
    }
    runInsideAngular(func) {
        if (this.ngZone) {
            this.ngZone.run(() => func());
        }
        else {
            func();
        }
    }
}
Toast.??fac = function Toast_Factory(t) { return new (t || Toast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
Toast.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Toast, selectors: [["", "toast-component", ""]], hostVars: 5, hostBindings: function Toast_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Toast_click_HostBindingHandler() { return ctx.tapToast(); })("mouseenter", function Toast_mouseenter_HostBindingHandler() { return ctx.stickAround(); })("mouseleave", function Toast_mouseleave_HostBindingHandler() { return ctx.delayedHideToast(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????syntheticHostProperty"]("@flyInOut", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.toastClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx.displayStyle);
    } }, attrs: _c0, decls: 5, vars: 5, consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alertdialog", "aria-live", "polite", 3, "innerHTML"], ["role", "alertdialog", "aria-live", "polite"], [1, "toast-progress"]], template: function Toast_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, Toast_button_0_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Toast_div_1_Template, 3, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Toast_div_2_Template, 1, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, Toast_div_3_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, Toast_div_4_Template, 2, 2, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.options.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.message && ctx.options.enableHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.message && !ctx.options.enableHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.options.progressBar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });
Toast.ctorParameters = () => [
    { type: ToastrService },
    { type: ToastPackage },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
Toast.propDecorators = {
    toastClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['@flyInOut',] }],
    displayStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }],
    tapToast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    stickAround: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
    delayedHideToast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Toast, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[toast-component]',
                template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alertdialog" aria-live="polite"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alertdialog" aria-live="polite"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
                    ])
                ],
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ToastrService }, { type: ToastPackage }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@flyInOut']
        }], displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
        }], tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();

const DefaultGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), { toastComponent: Toast });
class ToastrModule {
    static forRoot(config = {}) {
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastrModule.??fac = function ToastrModule_Factory(t) { return new (t || ToastrModule)(); };
ToastrModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ToastrModule });
ToastrModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ToastrModule, { declarations: function () { return [Toast]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [Toast]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastrModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [Toast],
                exports: [Toast],
                entryComponents: [Toast]
            }]
    }], null, null); })();
class ToastrComponentlessModule {
    static forRoot(config = {}) {
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoComponentGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastrComponentlessModule.??fac = function ToastrComponentlessModule_Factory(t) { return new (t || ToastrComponentlessModule)(); };
ToastrComponentlessModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ToastrComponentlessModule });
ToastrComponentlessModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ToastrComponentlessModule, { imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastrComponentlessModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
            }]
    }], null, null); })();

class ToastNoAnimation {
    constructor(toastrService, toastPackage, appRef) {
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
            this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
            this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
            this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(count => {
            this.duplicatesCount = count;
        });
    }
    /** hides component when waiting to be displayed */
    get displayStyle() {
        if (this.state === 'inactive') {
            return 'none';
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    }
    /**
     * activates toast and sets timeout
     */
    activateToast() {
        this.state = 'active';
        if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
            this.timeout = setTimeout(() => {
                this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(() => this.updateProgress(), 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    }
    /**
     * updates progress bar width
     */
    updateProgress() {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        const now = new Date().getTime();
        const remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    }
    resetTimeout() {
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = 'active';
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
        this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
    }
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
    }
    tapToast() {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    }
    stickAround() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    }
    delayedHideToast() {
        if ((this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut') ||
            this.options.extendedTimeOut === 0 ||
            this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
    }
}
ToastNoAnimation.??fac = function ToastNoAnimation_Factory(t) { return new (t || ToastNoAnimation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"])); };
ToastNoAnimation.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ToastNoAnimation, selectors: [["", "toast-component", ""]], hostVars: 4, hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToastNoAnimation_click_HostBindingHandler() { return ctx.tapToast(); })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler() { return ctx.stickAround(); })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler() { return ctx.delayedHideToast(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.toastClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx.displayStyle);
    } }, attrs: _c0, decls: 5, vars: 5, consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]], template: function ToastNoAnimation_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.options.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.message && ctx.options.enableHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.message && !ctx.options.enableHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.options.progressBar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
ToastNoAnimation.ctorParameters = () => [
    { type: ToastrService },
    { type: ToastPackage },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
];
ToastNoAnimation.propDecorators = {
    toastClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    displayStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }],
    tapToast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    stickAround: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
    delayedHideToast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastNoAnimation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[toast-component]',
                template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert" aria-live="polite"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert" aria-live="polite"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `
            }]
    }], function () { return [{ type: ToastrService }, { type: ToastPackage }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }]; }, { toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
        }], tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();
const DefaultNoAnimationsGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), { toastComponent: ToastNoAnimation });
class ToastNoAnimationModule {
    static forRoot(config = {}) {
        return {
            ngModule: ToastNoAnimationModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoAnimationsGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastNoAnimationModule.??fac = function ToastNoAnimationModule_Factory(t) { return new (t || ToastNoAnimationModule)(); };
ToastNoAnimationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ToastNoAnimationModule });
ToastNoAnimationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ToastNoAnimationModule, { declarations: function () { return [ToastNoAnimation]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [ToastNoAnimation]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastNoAnimationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [ToastNoAnimation],
                exports: [ToastNoAnimation],
                entryComponents: [ToastNoAnimation]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-toastr.js.map

/***/ }),

/***/ "94sN":
/*!***************************************!*\
  !*** ./src/app/views/otp/otp.page.ts ***!
  \***************************************/
/*! exports provided: verifyotpModel, OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyotpModel", function() { return verifyotpModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./otp.page.html */ "I3M3");
/* harmony import */ var _otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp.page.scss */ "Q9Ht");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.page */ "Klcu");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










class verifyotpModel {
}
let OtpPage = class OtpPage {
    constructor(cdk, router, fb, api, toastr, toastCtrl) {
        this.cdk = cdk;
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toastr = toastr;
        this.toastCtrl = toastCtrl;
        this.otpValue = null;
        this.otpValid = false;
        this.verifyOtpModel = new verifyotpModel();
        this.oTpModel = new _login_login_page__WEBPACK_IMPORTED_MODULE_7__["otpModel"]();
    }
    ngOnInit() {
        this.otpForm = this.fb.group({
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.PhoneNumLogin = localStorage.getItem('PhoneNumLogin');
        console.log(localStorage.getItem('PhoneNumLogin'));
        this.api.getOtpToken.subscribe(otp => {
            console.log("Subject otp", otp);
            if (otp.length === 6) {
                this.otpToken = otp;
                console.log("this is otpToken", this.otpToken);
                this.otpForm.get('otp').patchValue(this.otpToken);
                this.openToast1("OTP auto populated successfully!");
            }
        });
    }
    numberOnly(event) {
        console.log("event", event);
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    getOtp() {
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = this.PhoneNumLogin;
        console.log("model", this.oTpModel);
        this.api.getOtp(this.oTpModel).subscribe(otpResp => {
            console.log("Response Success", otpResp);
            this.otpResponse = otpResp;
            /* Added validation for un-registered mobile nummber is entered */
            console.log(this.otpResponse);
            if (this.otpResponse.otpVal.userId === "New Customer" || (this.otpResponse.otpVal.userId === '' && this.otpResponse.otpVal.userId === null)) {
                this.cdk.detectChanges();
                // this.userResp = true;
            }
            else {
                // this.otpResponse.otpVal.userId !='' && this.otpResponse.otpVal.userId!=null && 
                console.log('in else');
                this.openToast1('OTP has been sent again');
                this.router.navigateByUrl('/otp');
                if (otpResp && otpResp.otpVal && otpResp.otpVal.token) {
                    this.otpForm.get('otp').patchValue(otpResp.otpVal.token);
                    this.openToast1("OTP auto populated successfully!");
                }
            }
        }, error => {
            console.log('error :: ', error);
            this.openToast1('Failed to send OTP');
        });
        // this.router.navigateByUrl('/otp');
    }
    // customerPhonenum(arg0: string, customerPhonenum: any) {
    // throw new Error('Method not implemented.');
    //}
    validateOtp(otpValue) {
        console.log("Phonenumber for OTP", otpValue, otpValue.otp, this.otpToken);
        console.log(otpValue.otp);
        this.verifyOtpModel.sourceKey = 'mobile';
        this.verifyOtpModel.sourceValue = this.PhoneNumLogin;
        this.verifyOtpModel.otp = otpValue.otp;
        this.verifyOtpModel.type = '';
        console.log("model", this.verifyOtpModel);
        this.api.verifyOtp(this.verifyOtpModel).subscribe(otpResp => {
            console.log("Response Success", otpResp);
            this.otpResponse = otpResp;
            /* Validation resp */
            if (this.otpResponse.userId !== '' || this.otpResponse.userId !== null) {
                // this.router.navigateByUrl('/others/services');
                this.goToCashWithdrawal(this.otpForm);
            }
            else {
                this.router.navigateByUrl('/login');
            }
        }, (err) => {
            console.log(err);
            this.openToast();
            //this.toastr.error('');
        });
    }
    goBack() {
        console.log("go back button");
        this.router.navigateByUrl('/login');
    }
    goToCashWithdrawal(otpForm) {
        // console.log(loginForm.value.otp);
        console.log(otpForm.customerPhonenum);
        otpForm.customerPhonenum = localStorage.getItem('PhoneNumLogin');
        console.log(otpForm.customerPhonenum);
        this.api.custpomerDetails(otpForm.customerPhonenum).subscribe((resp) => {
            console.log('backend resp', resp);
            if (resp != null) {
                localStorage.setItem('firstName', resp.firstName);
                sessionStorage.setItem('customer_id', resp.customerId);
                // localStorage.setItem('customer_details', resp);
                localStorage.setItem('customer_details', JSON.stringify(resp));
                this.router.navigate(['tabs']);
            }
        });
        // this.router.navigate(['tabs']);
    }
    openToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Please enter the valid OTP Number',
                duration: 5000
            });
            toast.present();
        });
    }
    openToast1(errorMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 5000
            });
            toast.present();
        });
    }
};
OtpPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] }
];
OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OtpPage);



/***/ }),

/***/ "CVe6":
/*!*****************************************!*\
  !*** ./src/app/views/otp/otp.module.ts ***!
  \*****************************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-routing.module */ "jbGL");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "94sN");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








//import { NumberDirective } from './numbers-only.directive';
//import { NumbersOnlyDirective } from './numbers-only.directive';
//import { NumbersOnlyDirective } from './numbers-only.directive';
let OtpPageModule = class OtpPageModule {
};
OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]],
        providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]]
    })
], OtpPageModule);



/***/ }),

/***/ "I3M3":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/otp/otp.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <!-- <div class=\"float-right-lg\"> -->\r\n    <div class=\"top-right-quarter-circle\"></div>\r\n  <!-- </div> -->\r\n  \r\n \r\n    <form *ngIf=\"otpForm\" [formGroup]=\"otpForm\"  novalidate style=\"height: 890px;\">\r\n      <div class=\"login-logo\">\r\n        <img src=\"assets\\images\\BL1.png\" alt=\"Ionic logo\">\r\n      </div>\r\n    <div style=\"padding-top: -60%;\">\r\n\r\n    \r\n      <div class=\"titleCard\">\r\n        <ion-text>\r\n          <h2 style=\"color:black\">Sign In</h2>\r\n          <h5 style=\"color: gray;\">Enter your details to get started</h5>\r\n        </ion-text>\r\n      </div>\r\n    \r\n    \r\n      <!-- <div class=\"inputCard\" >\r\n       <ion-label position=\"floating\">Phone number</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"phoneNo\"></ion-input>\r\n    </div> -->\r\n    \r\n    <div class=\"inputCard\">\r\n      <ion-label position=\"floating\">OTP</ion-label>\r\n       <ion-input class=\"box\" formControlName=\"otp\" (keypress)=\"numberOnly($event)\" numbersOnly minLength = \"6\"  maxLength = \"6\"></ion-input>\r\n    </div>\r\n    \r\n    <div class=\"inputCardButton\">\r\n      <!-- <ion-button expand=\"block\" shape=\"round\" (click) =\"getOtp(loginForm.value)\"\r\n      >Continue</ion-button> -->\r\n      <ion-button expand=\"block\" shape=\"round\" (click) =\"validateOtp(otpForm.value) \"\r\n      >Log In</ion-button>\r\n      <!-- (click)=\"goToCashWithdrawal(loginForm.value)\" ;goToCashWithdrawal(otpForm.value)-->\r\n    </div>\r\n    \r\n    <div class=\"inputCardButton1\">\r\n      <!-- <ion-button expand=\"block\" shape=\"round\" (click) =\"getOtp(loginForm.value)\"\r\n      >Continue</ion-button> -->\r\n      <ion-button expand=\"block\" shape=\"round\" (click) =\"goBack() \"\r\n      >Go Back</ion-button>\r\n      <!-- (click)=\"goToCashWithdrawal(loginForm.value)\" ;goToCashWithdrawal(otpForm.value)-->\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <p style=\"padding-left: 20%;display: inline;\">Didn't Received your OTP? </p>\r\n      <p (click) =\"getOtp()\"   style=\"display: inline; font-weight: bolder; cursor: pointer;\">Resend</p>\r\n  \r\n    </div>\r\n  </div>\r\n    </form> <div class=\"top-left-quarter-circle\"></div>\r\n  </ion-content>\r\n  \r\n\r\n");

/***/ }),

/***/ "Q9Ht":
/*!*****************************************!*\
  !*** ./src/app/views/otp/otp.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.maincard {\n  background-color: white;\n}\n\n.box {\n  border-color: #403E39;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  width: 85%;\n  height: 45px;\n}\n\n.inputCard {\n  padding-top: 3%;\n  padding-left: 10%;\n}\n\n.inputCardButton {\n  padding-top: 16%;\n  padding-left: 10%;\n}\n\n.inputCardButton1 {\n  padding-top: 6%;\n  padding-left: 10%;\n}\n\n.titleCard {\n  padding-left: 5%;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 190px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.top-right-quarter-circle {\n  width: 300px;\n  height: 290px;\n  margin-top: -30%;\n  margin-left: 50%;\n  border-radius: 250px 0 250px 250px;\n  background-color: #d8d8d8;\n}\n\n.top-left-quarter-circle {\n  width: 200px;\n  height: 160px;\n  margin-top: -20%;\n  border-radius: 0 300px 0 0;\n  background-color: #d8d8d8;\n}\n\nion-button {\n  width: 85%;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFRCxrQkFBQTtFQUNDLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQUdFO0VBQ0MsdUJBQUE7QUFBSDs7QUFHRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBRUg7O0FBQUU7RUFFSSxnQkFBQTtBQUVOOztBQUFFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0QsZ0JBQUE7RUFDQSxnQkFBQTtFQUVDLGtDQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSwwQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdKIiwiZmlsZSI6Im90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLm1haW5jYXJke1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MDNFMzk7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgIFxyXG4gIH1cclxuICAuaW5wdXRDYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmRCdXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDogMTYlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmRCdXR0b24xe1xyXG4gICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIH1cclxuICAudGl0bGVDYXJkXHJcbiAge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICAubG9naW4tbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1sb2dvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG4gIH1cclxuICBcclxuICAuZmllbGRDYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuIFxyXG4udG9wLXJpZ2h0LXF1YXJ0ZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjkwcHg7XHJcbiAgIG1hcmdpbi10b3A6IC0zMCU7XHJcbiAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjUwcHggMCAyNTBweCAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICB9XHJcbiAgLnRvcC1sZWZ0LXF1YXJ0ZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDMwMHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "jbGL":
/*!*************************************************!*\
  !*** ./src/app/views/otp/otp-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function() { return OtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp.page */ "94sN");




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtpPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-otp-otp-module.js.map