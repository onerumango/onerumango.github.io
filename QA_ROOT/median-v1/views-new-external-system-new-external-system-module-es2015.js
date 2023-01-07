(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-new-external-system-new-external-system-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/new-external-system/external-system-new/external-system-new.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/new-external-system/external-system-new/external-system-new.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Outer-div\">\r\n    <div>\r\n        <mat-toolbar class=\"head\">\r\n            <mat-icon>desktop_mac</mat-icon> &nbsp; External Systems\r\n        </mat-toolbar>\r\n    </div>\r\n    <div class=\"btnGoToListClass\">\r\n        <button mat-raised-button color=\"primary\" #topbackbtn [routerLink]=\"'/new-ext/summary'\" (click)=\"goToList()\"\r\n            class=\"btnbackclass\">\r\n            <mat-icon class=\"newIconclass\">list</mat-icon>&nbsp;&nbsp;Back To List\r\n        </button>\r\n    </div>\r\n    <div class=\"tableDiv\">\r\n        <div class=\"fixToScreen\">\r\n            <form [formGroup]=\"ESForm\" (ngSubmit)=\"onFormSubmit(ESForm.value)\">\r\n                <div>\r\n                    <mat-toolbar class=\"subToolbar\">\r\n                        New External System\r\n                    </mat-toolbar>\r\n                    <mat-card class=\"cardStyle\">\r\n                        <mat-card-content>\r\n                            <table>\r\n                                <br>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">External System Code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"externalSystemCode\"\r\n                                                    name=\"externalSystemCode\" formControlName=\"externalSystemCode\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">External System Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"externalSystemName\"\r\n                                                    name=\"externalSystemName\" formControlName=\"externalSystemName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Module Code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select formControlName=\"moduleCodes\"\r\n                                                    (selectionChange)=\"getprocessCode($event.value)\" id=\"moduleCodes\"\r\n                                                    name=\"moduleCodes\" disableOptionCentering>\r\n                                                    <mat-option value=\"-1\">Select</mat-option>\r\n                                                    <mat-option *ngFor=\"let valuee of allCodes\"\r\n                                                        [value]=\"valuee.moduleCode\">\r\n                                                        {{valuee.moduleCode}}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Service Code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select formControlName=\"serviceCode\" id=\"serviceCode\"\r\n                                                    name=\"serviceCode\" disableOptionCentering>\r\n                                                    <mat-option value=\"-1\">Select</mat-option>\r\n                                                    <mat-option *ngFor=\"let valuee of allCodes\"\r\n                                                        [value]=\"valuee.serviceCode\">\r\n                                                        {{valuee.serviceCode}}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Process Code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select formControlName=\"processCodes\" id=\"processCodes\"\r\n                                                    name=\"processCodes\" disableOptionCentering>\r\n                                                    <mat-option *ngFor=\"let valuee of processCode\" [value]=\"valuee\">\r\n                                                        {{valuee}}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Destination</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"destination\"\r\n                                                    name=\"destination\" formControlName=\"destination\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Action</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"action\"\r\n                                                    name=\"action\" formControlName=\"action\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">External System Tag</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"externalSystemTag\"\r\n                                                    name=\"externalSystemTag\" formControlName=\"externalSystemTag\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass divCheckboxClass\">\r\n                                            <mat-hint class=\"labelcss\"> Is External System Node ?</mat-hint><br />\r\n                                            <div class=\"alignheight\">\r\n                                                <mat-checkbox id=\"isExternalSystemNode\" name=\"isExternalSystemNode\"\r\n                                                    formControlName=\"isExternalSystemNode\">\r\n                                                </mat-checkbox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Module Tag</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"moduleTag\"\r\n                                                    name=\"moduleTag\" formControlName=\"moduleTag\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass divCheckboxClass\">\r\n                                            <mat-hint class=\"labelcss\">Is Module Node ?</mat-hint><br />\r\n                                            <div class=\"alignheight\">\r\n                                                <mat-checkbox class=\"example-margin\" id=\"isModuleNode\"\r\n                                                    name=\"isModuleNode\" formControlName=\"isModuleNode\">\r\n                                                </mat-checkbox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Service Tag</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"serviceTag\"\r\n                                                    name=\"serviceTag\" formControlName=\"serviceTag\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass divCheckboxClass\">\r\n                                            <mat-hint class=\"labelcss\">Is Service Node ?</mat-hint><br />\r\n                                            <div class=\"alignheight\">\r\n                                                <mat-checkbox class=\"example-margin\" id=\"isServiceNode\"\r\n                                                    name=\"isServiceNode\" formControlName=\"isServiceNode\">\r\n                                                </mat-checkbox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Process Tag</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"processTag\"\r\n                                                    name=\"processTag\" formControlName=\"processTag\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass divCheckboxClass\">\r\n                                            <mat-hint class=\"labelcss\">Is Process Node ?</mat-hint><br />\r\n                                            <div class=\"alignheight\">\r\n                                                <mat-checkbox class=\"example-margin\" id=\"isProcessNode\"\r\n                                                    name=\"isProcessNode\" formControlName=\"isProcessNode\">\r\n                                                </mat-checkbox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Destination Tag</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"destinationTag\"\r\n                                                    name=\"destinationTag\" formControlName=\"destinationTag\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass divCheckboxClass\">\r\n                                            <mat-hint class=\"labelcss\">Is Destination Node ?</mat-hint><br />\r\n                                            <div class=\"alignheight\">\r\n                                                <mat-checkbox class=\"example-margin\" id=\"isDestinationNode\"\r\n                                                    name=\"isDestinationNode\" formControlName=\"isDestinationNode\">\r\n                                                </mat-checkbox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Message Type</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"messageType\"\r\n                                                    name=\"messageType\" formControlName=\"messageType\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Request Tag</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"requestTag\"\r\n                                                    name=\"requestTag\" formControlName=\"requestTag\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Response Tag</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"responseTag\"\r\n                                                    name=\"responseTag\" formControlName=\"responseTag\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass divCheckboxClass\">\r\n                                            <mat-hint class=\"labelcss\">Message Duplication</mat-hint><br />\r\n                                            <!-- <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"messageDuplication\"\r\n                                                    name=\"messageDuplication\" formControlName=\"messageDuplication\">\r\n                                            </mat-form-field> -->\r\n                                            <div class=\"alignheight\">\r\n                                                <mat-checkbox class=\"example-margin\" id=\"messageDuplication\"\r\n                                                    name=\"messageDuplication\" formControlName=\"messageDuplication\">\r\n                                                </mat-checkbox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Communication Channel</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select formControlName=\"communicationChannel\"\r\n                                                    id=\"communicationChannel\" name=\"communicationChannel\"\r\n                                                    disableOptionCentering>\r\n                                                    <mat-option value=\"EJB\">EJB</mat-option>\r\n                                                    <mat-option value=\"MDB\">MDB</mat-option>\r\n                                                    <mat-option value=\"DIR\">Directory</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Format Type</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"formatType\"\r\n                                                    name=\"formatType\" formControlName=\"formatType\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Request Schema Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"requestSchemaName\"\r\n                                                    name=\"requestSchemaName\" formControlName=\"requestSchemaName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Response Schema Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"responseSchemaName\"\r\n                                                    name=\"responseSchemaName\" formControlName=\"responseSchemaName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Error Schema Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"errorSchemaName\"\r\n                                                    name=\"errorSchemaName\" formControlName=\"errorSchemaName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Request Queue Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"requestQueueName\"\r\n                                                    name=\"requestQueueName\" formControlName=\"requestQueueName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Response Queue Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"responseQueueName\"\r\n                                                    name=\"responseQueueName\" formControlName=\"responseQueueName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Error Queue Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"errorQueueName\"\r\n                                                    name=\"errorQueueName\" formControlName=\"errorQueueName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Request Directory Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\"\r\n                                                    id=\"requestDirectoryName\" name=\"requestDirectoryName\"\r\n                                                    formControlName=\"requestDirectoryName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Response Directory Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\"\r\n                                                    id=\"responseDirectoryName\" name=\"responseDirectoryName\"\r\n                                                    formControlName=\"responseDirectoryName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Error Directory Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"errorDirectoryName\"\r\n                                                    name=\"errorDirectoryName\" formControlName=\"errorDirectoryName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Request Xslt Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"requestXsltName\"\r\n                                                    name=\"requestXsltName\" formControlName=\"requestXsltName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Response Xslt Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"responseXsltName\"\r\n                                                    name=\"responseXsltName\" formControlName=\"responseXsltName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Error Xslt Name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"string\" id=\"errorXsltName\"\r\n                                                    name=\"errorXsltName\" formControlName=\"errorXsltName\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"rightInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Latest Amend Number</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input matInput class=\"fitheight\" type=\"number\" id=\"latestAmendNumber\"\r\n                                                    name=\"latestAmendNumber\" formControlName=\"latestAmendNumber\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <!-- <td>\r\n                                        <div class=\"leftInputClass divCheckboxClass\">\r\n                                            <mat-hint class=\"labelcss\">Error Xslt Name?</mat-hint><br />\r\n                                            <div class=\"alignheight\">\r\n                                                <mat-checkbox class=\"example-margin\" id=\"iserrorXsltName\" name=\"iserrorXsltName\"\r\n                                                    formControlName=\"iserrorXsltName\">\r\n                                                </mat-checkbox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td> -->\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Xsd File Name</mat-hint><br />\r\n                                            <div>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <input matInput class=\"fitheight\" id=\"xsdFileName\"\r\n                                                        name=\"xsdFileName\" formControlName=\"xsdFileName\">\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Xsd File</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input class=\"serif\" [disabled]=\"disableFileUploadInputs()\" type=\"file\"\r\n                                                    (change)=\"handleXsdFileInput($event)\">\r\n                                                <input matInput [disabled]=\"disableFileUploadInputs()\" hidden>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"leftInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Dtd File Name</mat-hint><br />\r\n                                            <div>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <input matInput class=\"fitheight\" id=\"dtdFileName\"\r\n                                                        name=\"dtdFileName\" formControlName=\"dtdFileName\">\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"middleInputClass\">\r\n                                            <mat-hint class=\"labelcss\">Dtd File</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <input type=\"file\" [disabled]=\"disableFileUploadInputs()\" class=\"serif\"\r\n                                                    (change)=\"handleDtdFileInput($event)\">\r\n                                                <input matInput [disabled]=\"disableFileUploadInputs()\" hidden>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n                </div>\r\n                <div class=\"divbtns\">\r\n                    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"saveBtn\">\r\n                        <mat-icon class=\"newIconclass\">{{iconText}}</mat-icon>&nbsp;&nbsp;{{submitText}}\r\n                    </button>&nbsp;\r\n\r\n                    <button type=\"button\" mat-raised-button class=\"btncolor\" color=\"primary\" (click)=\"resetForm()\">\r\n                        <mat-icon class=\"newIconclass\">clear</mat-icon>&nbsp;&nbsp;Clear\r\n                    </button>&nbsp;\r\n\r\n                    <button type=\"button\" [style.visibility]=hide() class=\"btncolor\" mat-raised-button color=\"primary\">\r\n                        <mat-icon class=\"newIconclass\">desktop_mac</mat-icon>&nbsp;&nbsp;{{OpenCloseText}}\r\n                    </button>&nbsp;\r\n\r\n                    <button type=\"button\" [style.visibility]=hide() (click)=\"authrecord()\" class=\"btncolor\"\r\n                        *ngIf=\"ext.verifiedStatus!='A'\" mat-raised-button color=\"primary\">\r\n                        <mat-icon class=\"newIconclass\">check</mat-icon>&nbsp;&nbsp;Authorize\r\n                    </button>&nbsp;\r\n\r\n                    <button type=\"button\" [style.visibility]=hide() class=\"btncolor\" (click)=\"deleteExternalSysById()\"\r\n                        mat-raised-button color=\"primary\">\r\n                        <mat-icon class=\"newIconclass\">delete</mat-icon>&nbsp;&nbsp;Delete\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"audit\">\r\n        <mat-toolbar class=\"subToolbar\">\r\n            Audit Log\r\n        </mat-toolbar>\r\n        <mat-card class=\"cardStyle\">\r\n            <mat-card-content>\r\n                <table class=\"mat-elevation-z0\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <th class=\"tdd\">Verified Status</th>\r\n                            <td class=\"tdd\">\r\n                                <mat-chip>{{ext.verifiedStatus}}</mat-chip>\r\n                            </td>\r\n                            <th class=\"tdd\">Verified Id</th>\r\n                            <td class=\"tdd\">\r\n                                <mat-chip>{{ext.verifierId}}</mat-chip>\r\n                            </td>\r\n                            <th class=\"tdd\">Verified Time Stamp</th>\r\n                            <td class=\"tdd\">\r\n                                <mat-chip>{{ext.verifiedDtStamp}}</mat-chip>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"tdd\">Creator Id</th>\r\n                            <td class=\"tdd\">\r\n                                <mat-chip>{{ext.creatorId}}</mat-chip>\r\n                            </td>\r\n                            <th class=\"tdd\">Creator Time Stamp</th>\r\n                            <td class=\"tdd\">\r\n                                <mat-chip>{{ext.createdDtStamp}}</mat-chip>\r\n                            </td>\r\n                            <th class=\"tdd\">Verified Ever</th>\r\n                            <td class=\"tdd\">\r\n                                <mat-chip>{{ext.verifiedEver}}</mat-chip>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"tdd\">Record status</th>\r\n                            <td class=\"tdd\">\r\n                                <mat-chip>{{ext.recordStatus}}</mat-chip>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/new-external-system/external-system-summary/external-system-summary.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/new-external-system/external-system-summary/external-system-summary.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Outer-div\">\r\n  <mat-toolbar class=\"head\">\r\n    <mat-icon>desktop_mac</mat-icon> &nbsp; External Systems - List\r\n  </mat-toolbar>\r\n  <br>\r\n  <div class=\"Div_card\">\r\n\r\n    <mat-card class=\"tabb\">\r\n\r\n      <div class=\"inputWithIcon inputIconBg\">\r\n        <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Search\" [(ngModel)]=\"searchField\"\r\n          (keyup)=\"applyFilter($event.target.value)\" />\r\n        <i class=\"fa fa-search fa-lg fa-fw\" aria-hidden=\"true\"></i>\r\n        <button *ngIf=\"searchField\" class=\"searchicon\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n          (click)=\"clearSearchField()\">\r\n          <mat-icon class=\"closicon\">close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"externalSystemCode\">\r\n          <th mat-header-cell *matHeaderCellDef> External System Code </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <a [routerLink]=\"['/new-ext/new']\"\r\n              [queryParams]=\"{id: element.externalSystemCode}\">{{element.externalSystemCode}}</a>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"externalSystemName\">\r\n          <th mat-header-cell *matHeaderCellDef>External system Name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.externalSystemName}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"moduleCodes\">\r\n          <th mat-header-cell *matHeaderCellDef> Module Code </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.moduleCodes}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"serviceCode\">\r\n          <th mat-header-cell *matHeaderCellDef> Service Code </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.serviceCode}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"processCodes\">\r\n          <th mat-header-cell *matHeaderCellDef> Process Code </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.processCodes}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Destination\">\r\n          <th mat-header-cell *matHeaderCellDef> Destination </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.Destination}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"action\">\r\n          <th mat-header-cell *matHeaderCellDef> Action </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"creatorId\">\r\n          <th mat-header-cell *matHeaderCellDef> Creator </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.creatorId}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"createdAt\">\r\n          <th mat-header-cell *matHeaderCellDef> Created At </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.createdAt}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"verifierId\">\r\n          <th mat-header-cell *matHeaderCellDef> Verifier </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.verifierId}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"verifiedAt\">\r\n          <th mat-header-cell *matHeaderCellDef> Verified At </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.verifiedAt}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"latestAmendNumber\">\r\n          <th mat-header-cell *matHeaderCellDef> Latest Amend No </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.latestAmendNumber}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"verifiedStatus\">\r\n          <th mat-header-cell *matHeaderCellDef> Verified </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.verifiedStatus}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"verifiedEver\">\r\n          <th mat-header-cell *matHeaderCellDef> Verified Ever </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.verifiedEver}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"recordStatusText\">\r\n          <th mat-header-cell *matHeaderCellDef> Record Status </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.recordStatusText}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"xsdfile\">\r\n          <th mat-header-cell *matHeaderCellDef>Select Download Type</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <div>\r\n              <mat-button-toggle-group #group=\"matButtonToggleGroup\"\r\n                (click)=\"onValChange(group.value,element.externalSystemCode)\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                <mat-button-toggle value=\"xsd\">XSD</mat-button-toggle>\r\n                <mat-button-toggle value=\"dtd\">DTD</mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n            </div>\r\n            <!-- <mat-form-field appearance=\"outline\">\r\n              <mat-select [(ngModel)]=\"selectedValue\" name=\"food\" disableOptionCentering>\r\n                <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                  {{food.viewValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field> -->\r\n            <!-- <mat-radio-group aria-label=\"Select an option\">\r\n              <mat-radio-button value=\"1\">XSD</mat-radio-button>\r\n              <mat-radio-button value=\"2\">DTD</mat-radio-button>\r\n            </mat-radio-group> -->\r\n          </td>\r\n        </ng-container>\r\n        <!-- <ng-container matColumnDef=\"dtdfile\">\r\n          <th mat-header-cell *matHeaderCellDef>Download</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-raised-button color=\"primary\" [disabled]=\"DisableOrNot(element.externalSystemCode)\" class=\"downloadButton\">\r\n              <mat-icon class=\"downloadIcon\">get_app</mat-icon>\r\n            </button>\r\n          </td>\r\n        </ng-container> -->\r\n        <ng-container matColumnDef=\"dtdfile\">\r\n          <th mat-header-cell *matHeaderCellDef>Download</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-raised-button color=\"primary\" [disabled]=\"DisableOrNot(element.externalSystemCode)\"\r\n              class=\"downloadButton\" (click)=\"download(element.externalSystemCode)\">\r\n              <mat-icon class=\"downloadIcon\">get_app</mat-icon>\r\n            </button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n\r\n\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </mat-card>\r\n    <div class=\"Div_btn_new_ex\">\r\n      <button mat-raised-button color=\"primary\" [routerLink]=\"'/new-ext/new'\" class=\"newES\">\r\n        <mat-icon class=\"newIconclass\">desktop_mac</mat-icon>&nbsp;&nbsp;New External system\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v8.19.0
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};

var removeCustomClasses = function removeCustomClasses(elem) {
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });
};

var applyCustomClass = function applyCustomClass(elem, customClass, className) {
  removeCustomClasses(elem);

  if (customClass && customClass[className]) {
    if (typeof customClass[className] !== 'string' && !customClass[className].forEach) {
      return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(customClass[className]), "\""));
    }

    addClass(elem, customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? value + 'px' : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector('.' + className);
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.cancel);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
}; // https://github.com/jkup/focusable/blob/master/index.js

var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  });
  var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    handleJqueryElem(target, param); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  };

  for (var i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } // Custom class


  applyCustomClass(actions, params.customClass, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  if (params.reverseButtons) {
    confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
  }
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params['showC' + buttonType.substring(1) + 'Button'], 'inline-block');
  button.innerHTML = params[buttonType + 'ButtonText']; // Set caption text

  button.setAttribute('aria-label', params[buttonType + 'ButtonAriaLabel']); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params.customClass, buttonType + 'Button');
  addClass(button, params[buttonType + 'ButtonClass']);
}

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = 'grow-' + grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params.customClass, 'container');

  if (params.customContainerClass) {
    // @deprecated
    addClass(container, params.customContainerClass);
  }
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
var renderInput = function renderInput(instance, params) {
  var content = getContent();
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach(function (inputType) {
    var inputClass = swalClasses[inputType];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputType, params.inputAttributes); // set class

    inputContainer.className = inputClass;

    if (rerender) {
      hide(inputContainer);
    }
  });

  if (params.input) {
    if (rerender) {
      showInput(params);
    } // set custom class


    setCustomClass(params);
  }
};

var showInput = function showInput(params) {
  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  var inputContainer = getInputContainer(params.input);
  var input = renderInputType[params.input](inputContainer, params);
  show(input); // input autofocus

  setTimeout(function () {
    focusInput(input);
  });
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setCustomClass = function setCustomClass(params) {
  var inputContainer = getInputContainer(params.input);

  if (params.inputClass) {
    addClass(inputContainer, params.inputClass);
  }

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var getInputContainer = function getInputContainer(inputType) {
  var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getChildByClass(getContent(), inputClass);
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (input, params) {
  setInputPlaceholder(input, params);
  return input;
};

renderInputType.range = function (range, params) {
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (select, params) {
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function (radio) {
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (checkboxContainer, params) {
  var checkbox = getInput(getContent(), 'checkbox');
  checkbox.value = 1;
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  var label = checkboxContainer.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkboxContainer;
};

renderInputType.textarea = function (textarea, params) {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);

  if ('MutationObserver' in window) {
    // #1699
    var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
    var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

    var outputsize = function outputsize() {
      var contentWidth = textarea.offsetWidth + popupPadding;

      if (contentWidth > initialPopupWidth) {
        getPopup().style.width = contentWidth + 'px';
      } else {
        getPopup().style.width = null;
      }
    };

    new MutationObserver(outputsize).observe(textarea, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params.customClass, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params.customClass, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton();
  closeButton.innerHTML = params.closeButtonHtml; // Custom class

  applyCustomClass(closeButton, params.customClass, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the icon with the given type already rendered,
  // apply the custom class without re-rendering the icon

  if (innerParams && params.type === innerParams.type && getIcon()) {
    applyCustomClass(getIcon(), params.customClass, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.type) {
    return;
  }

  adjustSuccessIconBackgoundColor();

  if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
    show(icon); // Custom class

    applyCustomClass(icon, params.customClass, 'icon'); // Animate icon

    toggleClass(icon, "swal2-animate-".concat(params.type, "-icon"), params.animation);
  } else {
    error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params.customClass, 'image');

  if (params.imageClass) {
    addClass(image, params.imageClass);
  }
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params.customClass, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params.customClass, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params.customClass, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  } // CSS animation


  toggleClass(popup, swalClasses.noanimation, !params.animation);
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);

  if (typeof params.onRender === 'function') {
    params.onRender(getPopup());
  }
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: '',
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: '',
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: '',
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: '',
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onOpen: null,
  onRender: null,
  onClose: null,
  onAfterClose: null,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'type', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  customContainerClass: 'customClass',
  confirmButtonClass: 'customClass',
  cancelButtonClass: 'customClass',
  imageClass: 'customClass',
  inputClass: 'customClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated();
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);

  if (!domCache) {
    return null;
  }

  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding + 'px';
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
/* istanbul ignore next */


var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterCloseAndDispose(instance, onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }

  removeBodyClasses();
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function disposeSwal(instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

  delete globalState.keydownHandler;
  delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
}

function close(resolveValue) {
  var popup = getPopup();

  if (!popup || hasClass(popup, swalClasses.hide)) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams) {
    return;
  }

  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);
  handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

  swalPromiseResolve(resolveValue || {});
}

var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
  var container = getContainer(); // If animation is supported, animate

  var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose;

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, isToast(), onAfterClose);
  }
};

var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
  popup.addEventListener(animationEndEvent, function (e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};

var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
  setTimeout(function () {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      onAfterClose();
    }

    if (!getPopup()) {
      disposeSwal(instance);
    }
  });
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
} // @deprecated

function enableConfirmButton() {
  warnAboutDepreation('Swal.enableConfirmButton()', "Swal.getConfirmButton().removeAttribute('disabled')");
  setButtonsDisabled(this, ['confirmButton'], false);
} // @deprecated

function disableConfirmButton() {
  warnAboutDepreation('Swal.disableConfirmButton()', "Swal.getConfirmButton().setAttribute('disabled', '')");
  setButtonsDisabled(this, ['confirmButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  warnAboutDepreation('Swal.getProgressSteps()', "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps");
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  warnAboutDepreation('Swal.setProgressSteps()', 'Swal.update()');
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  renderProgressSteps(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}

function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */


function setParameters(params) {
  setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation);
  validateCustomTargetElement(params); // Replace newlines with <br> in title

  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  init(params);
}

function swalOpenAnimationFinished(popup, container) {
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */


var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

  setScrollingVisibility(container, popup);

  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding);
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (typeof params.onOpen === 'function') {
    setTimeout(function () {
      return params.onOpen(popup);
    });
  }
};

var setScrollingVisibility = function setScrollingVisibility(container, popup) {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished.bind(null, popup, container));
  } else {
    container.style.overflowY = 'auto';
  }
};

var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
  iOSfix();
  IEfix();
  setAriaHidden();

  if (scrollbarPadding) {
    fixScrollbar();
  } // sweetalert2/issues/1247


  setTimeout(function () {
    container.scrollTop = 0;
  });
};

var addClasses = function addClasses(container, popup, params) {
  if (params.animation) {
    addClass(popup, swalClasses.show);
  }

  show(popup);
  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
    handleInputValue(instance, params);
  }
};
var getInputValue = function getInputValue(instance, innerParams) {
  var input = instance.getInput();

  if (!input) {
    return null;
  }

  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);

    case 'radio':
      return getRadioValue(input);

    case 'file':
      return getFileValue(input);

    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

var getCheckboxValue = function getCheckboxValue(input) {
  return input.checked ? 1 : 0;
};

var getRadioValue = function getRadioValue(input) {
  return input.checked ? input.value : null;
};

var getFileValue = function getFileValue(input) {
  return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
};

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};

var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error('Error in inputValue promise: ' + err);
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
  instance.disableButtons();

  if (innerParams.input) {
    handleConfirmWithInput(instance, innerParams);
  } else {
    confirm(instance, innerParams, true);
  }
};
var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
  var inputValue = getInputValue(instance, innerParams);

  if (innerParams.inputValidator) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return innerParams.inputValidator(inputValue, innerParams.validationMessage);
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else {
    confirm(instance, innerParams, inputValue);
  }
};

var succeedWith = function succeedWith(instance, value) {
  instance.closePopup({
    value: value
  });
};

var confirm = function confirm(instance, innerParams, value) {
  if (innerParams.showLoaderOnConfirm) {
    showLoading(); // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    var preConfirmPromise = Promise.resolve().then(function () {
      return innerParams.preConfirm(value, innerParams.validationMessage);
    });
    preConfirmPromise.then(function (preConfirmValue) {
      if (isVisible(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    });
  } else {
    succeedWith(instance, value);
  }
};

var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = function (e) {
      return keydownHandler(instance, e, innerParams, dismissWith);
    };

    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = true;
  }
}; // Focus handling

var setFocus = function setFocus(innerParams, index, increment) {
  var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

  for (var i = 0; i < focusableElements.length; i++) {
    index = index + increment; // rollover to first item

    if (index === focusableElements.length) {
      index = 0; // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }

    return focusableElements[index].focus();
  } // no visible focusable elements, focus the popup


  getPopup().focus();
};
var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
];
var escKeys = ['Escape', 'Esc' // IE11
];

var keydownHandler = function keydownHandler(instance, e, innerParams, dismissWith) {
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  } // ENTER


  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams); // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams); // ARROWS - switch focus between buttons
  } else if (arrowKeys.indexOf(e.key) !== -1) {
    handleArrows(); // ESC
  } else if (escKeys.indexOf(e.key) !== -1) {
    handleEsc(e, innerParams, dismissWith);
  }
};

var handleEnter = function handleEnter(instance, e, innerParams) {
  // #720 #721
  if (e.isComposing) {
    return;
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
      return; // do not submit
    }

    clickConfirm();
    e.preventDefault();
  }
};

var handleTab = function handleTab(e, innerParams) {
  var targetElement = e.target;
  var focusableElements = getFocusableElements();
  var btnIndex = -1;

  for (var i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1);
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1);
  }

  e.stopPropagation();
  e.preventDefault();
};

var handleArrows = function handleArrows() {
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

  if (document.activeElement === confirmButton && isVisible(cancelButton)) {
    cancelButton.focus(); // and vice versa
  } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
    confirmButton.focus();
  }
};

var handleEsc = function handleEsc(e, innerParams, dismissWith) {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

var handlePopupClick = function handlePopupClick(domCache, innerParams, dismissWith) {
  if (innerParams.toast) {
    handleToastClick(domCache, innerParams, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

    handleContainerMousedown(domCache);
    handleModalClick(domCache, innerParams, dismissWith);
  }
};

var handleToastClick = function handleToastClick(domCache, innerParams, dismissWith) {
  // Closing toast by internal click
  domCache.popup.onclick = function () {
    if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
      return;
    }

    dismissWith(DismissReason.close);
  };
};

var ignoreOutsideClick = false;

var handleModalMousedown = function handleModalMousedown(domCache) {
  domCache.popup.onmousedown = function () {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup

      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleContainerMousedown = function handleContainerMousedown(domCache) {
  domCache.container.onmousedown = function () {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleModalClick = function handleModalClick(domCache, innerParams, dismissWith) {
  domCache.container.onclick = function (e) {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }

    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

function _main(userParams) {
  showWarningsForParams(userParams); // Check if there is another Swal closing

  if (getPopup() && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  } // Check if there is a swal disposal defer timer


  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = populateDomCache(this);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  return swalPromise(this, domCache, innerParams);
}

var swalPromise = function swalPromise(instance, domCache, innerParams) {
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var dismissWith = function dismissWith(dismiss) {
      instance.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(instance, resolve);
    setupTimer(globalState, innerParams, dismissWith);

    domCache.confirmButton.onclick = function () {
      return handleConfirmButtonClick(instance, innerParams);
    };

    domCache.cancelButton.onclick = function () {
      return handleCancelButtonClick(instance, dismissWith);
    };

    domCache.closeButton.onclick = function () {
      return dismissWith(DismissReason.close);
    };

    handlePopupClick(domCache, innerParams, dismissWith);
    addKeydownHandler(instance, globalState, innerParams, dismissWith);

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    }

    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

    domCache.container.scrollTop = 0;
  });
};

var populateDomCache = function populateDomCache(instance) {
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
  if (innerParams.timer) {
    globalState$$1.timeout = new Timer(function () {
      dismissWith('timer');
      delete globalState$$1.timeout;
    }, innerParams.timer);
  }
};

var initFocus = function initFocus(domCache, innerParams) {
  if (innerParams.toast) {
    return;
  }

  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }

  if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
    return domCache.cancelButton.focus();
  }

  if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
    return domCache.confirmButton.focus();
  }

  setFocus(innerParams, -1, 1);
};

var blurActiveElement = function blurActiveElement() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

/**
 * Updates popup parameters.
 */

function update(params) {
  var popup = getPopup();

  if (!popup || hasClass(popup, swalClasses.hide)) {
    return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
  }

  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '8.19.0';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}


/***/ }),

/***/ "./src/app/views/new-external-system/external-system-new/external-system-new.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/new-external-system/external-system-new/external-system-new.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.tabb{\r\n  display: block;\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n.mat-header-row {\r\n  width: 100%;\r\n}\r\n.mat-row {\r\n  width: 100%;\r\n}\r\n.Outer-div{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.head{\r\n  background-color: #e6e6e6;\r\n  height: 60px;\r\n}\r\nmat-toolbar {\r\n     height: 40px;\r\n     background-color: #e6e6e6;\r\n  }\r\n.header{\r\n    margin-left: 20px;\r\n    margin-top: 10px;\r\n}\r\n.tablerow{\r\n  width: 100%;\r\n}\r\ntable{\r\n    width: 100%;\r\n}\r\ninput{\r\n    width: 50%;\r\n}\r\n.serif{\r\n    min-width: 50%;\r\n    padding-bottom: 5px;\r\n}\r\nmat-form-field{\r\n    width: 100%;\r\n}\r\n.node{\r\n   \r\n    border-color:#3f51b5;\r\n    color:#3f51b5;\r\n  }\r\n.saveBtn{\r\n    margin-left: 10px;\r\n    background-color:#006699;\r\n}\r\n.labelcss{\r\n  float: left;\r\n  color: black;\r\n  padding-left: 2px;\r\n}\r\n.alignheight{\r\n  height: 40px;\r\n}\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.5em 0px !important;}\r\n/* .alignCheckbox{\r\n  padding-top: 10px;\r\n} */\r\n.alignheight{\r\n  padding-top: 15px;\r\n  -moz-text-align-last:center !important;\r\n       text-align-last:center !important;\r\n}\r\n.fitheight{\r\n  padding-bottom: 5px;\r\n}\r\n::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\r\n  background-color:#006699;\r\n}\r\n.tableDiv{\r\n  padding-top: 55px !important;\r\n  /* background-color: rgb(221, 217, 217) !important; */\r\n}\r\n.divbtns{\r\n  padding-top: 20px;\r\n  padding-bottom: 40px;\r\n  padding-left: 20px;\r\n}\r\n.btncolor{\r\n  background-color:#006699;\r\n}\r\n.tdd{\r\n  text-align: center;\r\n  padding: 010px !important;\r\n  border-top: 1px rgba(0, 0, 0, 0.12) solid;\r\n  border-right: 1px rgba(0, 0, 0, 0.12) solid; \r\n  border-left: 1px rgba(0, 0, 0, 0.12) solid; \r\n  border-bottom: 1px rgba(0, 0, 0, 0.12) solid;\r\n}\r\n.mat-chip{\r\n  background-color: white;\r\n}\r\n.cardStyle{\r\n  box-shadow: 0 0 black;\r\n  border: 1px solid #e6e6e6;\r\n  border-radius: 0px;\r\n}\r\n.audit{\r\n  /* background-color:  rgb(221, 217, 217) !important; */\r\n  padding-bottom: 70px;\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n \r\n }\r\n.btnbackclass{\r\n  background-color:#ce0000 !important;\r\n }\r\n.newIconclass{\r\n  margin-left: -7px !important;\r\n}\r\n.fixToScreen{\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n}\r\n.btnGoToListClass{\r\n  padding-bottom: 10px !important;\r\n  float: right !important;\r\n  padding-right: 2%;\r\n  padding-top: 20px;\r\n}\r\n.leftInputClass{\r\n  padding-left: 10px;\r\n  padding-right: 5px;\r\n}\r\n.rightInputClass{\r\n  padding-left: 5px;\r\n  padding-right: 10px;\r\n}\r\n.middleInputClass{\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n.divCheckboxClass{\r\n  padding-bottom: 25px !important;\r\n}\r\n.subToolbar{\r\n  height: 50px;\r\n  font-size: large;\r\n  background-color: white;\r\n  border: 1px solid #e6e6e6;\r\n  border-bottom: 0px;\r\n}\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbmV3LWV4dGVybmFsLXN5c3RlbS9leHRlcm5hbC1zeXN0ZW0tbmV3L2V4dGVybmFsLXN5c3RlbS1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFHRTtLQUNHLFlBQVk7S0FDWix5QkFBeUI7RUFDNUI7QUFHRjtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLG9CQUFvQjtJQUNwQixhQUFhO0VBQ2Y7QUFDRjtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQSx5REFBeUQsNkJBQTZCLENBQUM7QUFHdkY7O0dBRUc7QUFFSDtFQUNFLGlCQUFpQjtFQUNqQixzQ0FBaUM7T0FBakMsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLHFEQUFxRDtBQUN2RDtBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMsMkNBQTJDO0VBQzNDLDBDQUEwQztFQUMxQyw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7Q0FFbEI7QUFFQTtFQUNDLG1DQUFtQztDQUNwQztBQUVBO0VBQ0MsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ldy1leHRlcm5hbC1zeXN0ZW0vZXh0ZXJuYWwtc3lzdGVtLW5ldy9leHRlcm5hbC1zeXN0ZW0tbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmJ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5PdXRlci1kaXZ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAgXHJcblxyXG4uaGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuXHJcbiAgbWF0LXRvb2xiYXIge1xyXG4gICAgIGhlaWdodDogNDBweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIH1cclxuXHJcblxyXG4uaGVhZGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGFibGVyb3d7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uc2VyaWZ7XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vZGV7XHJcbiAgIFxyXG4gICAgYm9yZGVyLWNvbG9yOiMzZjUxYjU7XHJcbiAgICBjb2xvcjojM2Y1MWI1O1xyXG4gIH1cclxuLnNhdmVCdG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxufVxyXG5cclxuLmxhYmVsY3Nze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmFsaWduaGVpZ2h0e1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC41ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG5cclxuXHJcbi8qIC5hbGlnbkNoZWNrYm94e1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59ICovXHJcblxyXG4uYWxpZ25oZWlnaHR7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OmNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZml0aGVpZ2h0e1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDY2OTk7XHJcbn1cclxuXHJcblxyXG4udGFibGVEaXZ7XHJcbiAgcGFkZGluZy10b3A6IDU1cHggIWltcG9ydGFudDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMTcsIDIxNykgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuXHJcbi5kaXZidG5ze1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmJ0bmNvbG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxufVxyXG5cclxuLnRkZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDEwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSBzb2xpZDtcclxuICBib3JkZXItcmlnaHQ6IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpIHNvbGlkOyBcclxuICBib3JkZXItbGVmdDogMXB4IHJnYmEoMCwgMCwgMCwgMC4xMikgc29saWQ7IFxyXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpIHNvbGlkO1xyXG59XHJcbi5tYXQtY2hpcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmRTdHlsZXtcclxuICBib3gtc2hhZG93OiAwIDAgYmxhY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5hdWRpdHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIyMSwgMjE3LCAyMTcpICFpbXBvcnRhbnQ7ICovXHJcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuIFxyXG4gfVxyXG5cclxuIC5idG5iYWNrY2xhc3N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojY2UwMDAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLm5ld0ljb25jbGFzc3tcclxuICBtYXJnaW4tbGVmdDogLTdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZml4VG9TY3JlZW57XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmJ0bkdvVG9MaXN0Q2xhc3N7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxlZnRJbnB1dENsYXNze1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5yaWdodElucHV0Q2xhc3N7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1pZGRsZUlucHV0Q2xhc3N7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZGl2Q2hlY2tib3hDbGFzc3tcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViVG9vbGJhcntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIGJvcmRlci1ib3R0b206IDBweDtcclxufVxyXG5cclxuICJdfQ== */");

/***/ }),

/***/ "./src/app/views/new-external-system/external-system-new/external-system-new.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/new-external-system/external-system-new/external-system-new.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ExternalSystemNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalSystemNewComponent", function() { return ExternalSystemNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _external_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../external-system.service */ "./src/app/views/new-external-system/external-system.service.ts");
/* harmony import */ var _externalsystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../externalsystem */ "./src/app/views/new-external-system/externalsystem.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





//import Swal from 'sweetalert2';


//import Swal from 'sweetalert2/*/sweetalert2.js';
let ExternalSystemNewComponent = class ExternalSystemNewComponent {
    constructor(formBuilder, externalSysservice, route, router) {
        this.formBuilder = formBuilder;
        this.externalSysservice = externalSysservice;
        this.route = route;
        this.router = router;
        this.dataSaved = false;
        this.externalSysIdUpdate = null;
        this.message = null;
        this.submitText = "Save";
        this.iconText = "save";
        this.OpenCloseText = "Close";
        this.recordStatus = null;
        this.ext = new _externalsystem__WEBPACK_IMPORTED_MODULE_4__["NewExternalSystems"]();
        this.fileToUpload = null;
        this.xsdFile = File;
        this.dtdFile = File;
        this.disableInput = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.externalSysIdUpdate = params["id"];
            console.log("code is : " + this.externalSysIdUpdate);
            if (this.externalSysIdUpdate != null) {
                this.submitText = "Update";
                this.iconText = "edit";
                if (this.recordStatus == 'O') {
                    this.OpenCloseText = "Open";
                }
                else {
                    this.OpenCloseText = "Close";
                }
                this.loadEmployeeToEdit(this.externalSysIdUpdate);
                this.disableInput = true;
            }
            else {
                this.externalSysIdUpdate = null;
                this.submitText = "Save";
                this.iconText = "save";
                this.disableInput = false;
            }
            this.getProcessServiceModule();
        });
        this.ESForm = this.formBuilder.group({
            externalSystemCode: [{ value: '', disabled: this.disableInput }],
            externalSystemName: [''],
            moduleCodes: [''],
            serviceCode: [''],
            processCodes: [''],
            communicationChannel: [''],
            destination: [''],
            action: [''],
            externalSystemTag: [''],
            isExternalSystemNode: [''],
            moduleTag: [''],
            isModuleNode: [''],
            serviceTag: [''],
            isServiceNode: [''],
            processTag: [''],
            isProcessNode: [''],
            destinationTag: [''],
            isDestinationNode: [''],
            messageType: [''],
            requestTag: [''],
            responseTag: [''],
            messageDuplication: [''],
            formatType: [''],
            requestSchemaName: [''],
            responseSchemaName: [''],
            errorSchemaName: [''],
            requestQueueName: [''],
            responseQueueName: [''],
            errorQueueName: [''],
            requestDirectoryName: [''],
            responseDirectoryName: [''],
            errorDirectoryName: [''],
            requestXsltName: [''],
            responseXsltName: [''],
            errorXsltName: [''],
            latestAmendNumber: [''],
            iserrorXsltName: [''],
            dtdFileName: [{ value: '', disabled: this.disableInput }],
            xsdFileName: [{ value: '', disabled: this.disableInput }]
        });
        this.loginUser = localStorage.getItem('userFromLogin');
        // this.userRolesFromLogin = localStorage.getItem('userRolesFromLogin');
    }
    onFormSubmit() {
        this.dataSaved = false;
        const externalS = this.ESForm.value;
        const formData = new FormData();
        formData.append('externalsysData', JSON.stringify(externalS));
        formData.append('xsdfile', this.xsdFile);
        formData.append('dtdfile', this.dtdFile);
        if (this.externalSysIdUpdate == null) {
            console.log("Reached ts page :");
            console.log(formData);
            this.externalSysservice.saveNewExternalSystem(formData).subscribe((response) => {
                console.log("Result of ts page :", response);
                if (response != null) {
                    this.dataSaved = true;
                    this.message = 'Record saved Successfully';
                    this.ESForm.reset();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: this.message,
                        confirmButtonText: 'Go to list',
                    }).then((result) => {
                        if (result.value) {
                            this.router.navigate(['/externalSystem/summary']);
                        }
                    });
                }
                console.log(this.message);
            });
        }
        else {
            externalS.externalSystemCode = this.externalSysIdUpdate;
            externalS.creatorId = this.loginUser;
            this.externalSysservice.updateExternalSystem(externalS).subscribe((response) => {
                console.log("Result of ts page :", response);
                this.dataSaved = true;
                this.message = 'Record Updated Successfully';
                this.externalSysIdUpdate = null;
                this.ESForm.reset();
                if (response != null) {
                    this.dataSaved = true;
                    this.message = 'Record Updated Successfully';
                    this.ESForm.reset();
                    this.title;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: this.title,
                        confirmButtonText: 'Go to list',
                    }).then((result) => {
                        if (result.value) {
                            this.router.navigate(['/externalSystem/summary']);
                        }
                    });
                }
                console.log(this.message);
            });
        }
        // this.CreateEmployee(externalS); 
        this.ESForm.reset();
    }
    loadEmployeeToEdit(externalSystemCode) {
        this.externalSysservice.getExternalSystemById(externalSystemCode).subscribe(externalsystem => {
            this.ext = externalsystem;
            this.getprocessCode(this.ext.moduleCodes);
            console.log(this.ext);
            this.message = null;
            this.dataSaved = false;
            this.externalSysIdUpdate = externalsystem.externalSystemCode;
            this.ESForm.controls['externalSystemCode'].setValue(externalsystem.externalSystemCode);
            this.ESForm.controls['externalSystemName'].setValue(externalsystem.externalSystemName);
            this.ESForm.controls['moduleCodes'].setValue(externalsystem.moduleCodes);
            this.ESForm.controls['serviceCode'].setValue(externalsystem.serviceCode);
            this.ESForm.controls['processCodes'].setValue(externalsystem.processCodes);
            this.ESForm.controls['destination'].setValue(externalsystem.Destination);
            this.ESForm.controls['action'].setValue(externalsystem.action);
            this.ESForm.controls['externalSystemTag'].setValue(externalsystem.externalSystemTag);
            if (externalsystem.isExternalSystemNode == "T" || externalsystem.isExternalSystemNode == "true") {
                this.ESForm.controls['isExternalSystemNode'].setValue("true");
            }
            else {
                this.ESForm.controls['isExternalSystemNode'].setValue(null);
            }
            this.ESForm.controls['moduleTag'].setValue(externalsystem.moduleTag);
            if (externalsystem.isModuleNode == "T" || externalsystem.isModuleNode == "true") {
                this.ESForm.controls['isModuleNode'].setValue("true");
            }
            else {
                this.ESForm.controls['isModuleNode'].setValue(null);
            }
            this.ESForm.controls['serviceTag'].setValue(externalsystem.serviceTag);
            if (externalsystem.isServiceNode == "T" || externalsystem.isServiceNode == "true") {
                this.ESForm.controls['isServiceNode'].setValue("true");
            }
            else {
                this.ESForm.controls['isServiceNode'].setValue(null);
            }
            this.ESForm.controls['processTag'].setValue(externalsystem.processTag);
            if (externalsystem.isProcessNode == "T" || externalsystem.isProcessNode == "true") {
                this.ESForm.controls['isProcessNode'].setValue("true");
            }
            else {
                this.ESForm.controls['isProcessNode'].setValue(null);
            }
            this.ESForm.controls['destinationTag'].setValue(externalsystem.destinationTag);
            if (externalsystem.isDestinationNode == "T" || externalsystem.isDestinationNode == "true") {
                this.ESForm.controls['isDestinationNode'].setValue("true");
            }
            else {
                this.ESForm.controls['isDestinationNode'].setValue(null);
            }
            this.ESForm.controls['messageType'].setValue(externalsystem.messageType);
            this.ESForm.controls['requestTag'].setValue(externalsystem.requestTag);
            this.ESForm.controls['responseTag'].setValue(externalsystem.responseTag);
            // this.ESForm.controls['messageDuplication'].setValue(externalsystem.messageDuplication);
            if (externalsystem.messageDuplication == "T" || externalsystem.messageDuplication == "true") {
                this.ESForm.controls['messageDuplication'].setValue("true");
            }
            else {
                this.ESForm.controls['messageDuplication'].setValue(null);
            }
            this.ESForm.controls['formatType'].setValue(externalsystem.formatType);
            this.ESForm.controls['requestSchemaName'].setValue(externalsystem.requestSchemaName);
            this.ESForm.controls['responseSchemaName'].setValue(externalsystem.responseSchemaName);
            this.ESForm.controls['errorSchemaName'].setValue(externalsystem.errorSchemaName);
            this.ESForm.controls['requestQueueName'].setValue(externalsystem.requestQueueName);
            this.ESForm.controls['responseQueueName'].setValue(externalsystem.responseQueueName);
            this.ESForm.controls['errorQueueName'].setValue(externalsystem.errorQueueName);
            this.ESForm.controls['requestDirectoryName'].setValue(externalsystem.requestDirectoryName);
            this.ESForm.controls['responseDirectoryName'].setValue(externalsystem.responseDirectoryName);
            this.ESForm.controls['errorDirectoryName'].setValue(externalsystem.errorDirectoryName);
            this.ESForm.controls['requestXsltName'].setValue(externalsystem.requestXsltName);
            this.ESForm.controls['responseXsltName'].setValue(externalsystem.responseXsltName);
            this.ESForm.controls['errorXsltName'].setValue(externalsystem.errorXsltName);
            this.ESForm.controls['requestXsltName'].setValue(externalsystem.requestXsltName);
            this.ESForm.controls['responseXsltName'].setValue(externalsystem.responseXsltName);
            this.ESForm.controls['errorXsltName'].setValue(externalsystem.errorXsltName);
            this.recordStatus = externalsystem.recordStatus;
        });
    }
    getProcessServiceModule() {
        this.externalSysservice.getProcessServiceModule().subscribe((data) => {
            console.log(data);
            this.allCodes = data;
            // let list = [];
            // for(let i=0;i<data.length;i++){
            // list.push({module:data[i].moduleCode, service:data[i].serviceCode});
            // }
            // // console.log(typeof(data));
            // this.allCodes = list;
            console.log(this.allCodes);
        });
    }
    hide() {
        if (this.externalSysIdUpdate == null) {
            return 'hidden';
        }
        else {
            return 'visible';
        }
    }
    authrecord() {
        console.log(this.externalSysIdUpdate);
        this.externalSysservice.authorized(this.externalSysIdUpdate, this.loginUser).subscribe((resp) => {
            console.log(resp);
            this.ext = resp;
            if (this.ext == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Not Authorized");
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Record Authorized");
            }
        });
    }
    goToList() {
        this.externalSysIdUpdate == null;
        this.message = null;
        this.dataSaved = false;
    }
    resetForm() {
        this.ESForm.reset();
        this.message = null;
        this.dataSaved = false;
    }
    handleXsdFileInput(event) {
        const xsdfile = event.target.files[0];
        this.xsdFile = xsdfile;
    }
    handleDtdFileInput(event) {
        const dtdfile = event.target.files[0];
        this.dtdFile = dtdfile;
    }
    deleteExternalSysById() {
        console.log("Reached ts page");
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this.externalSysservice.deleteExternalSysById(this.externalSysIdUpdate).subscribe((response) => {
                    console.log(response);
                    if (response === true) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: "Deleted successfully!",
                            confirmButtonText: 'Ok',
                        }).then((value) => {
                            if (value) {
                                this.router.navigate(['/externalSystem/summary']);
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: "Error! Try Again.",
                            confirmButtonText: 'Ok',
                        });
                    }
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                //Nothing
            }
        });
    }
    disableFileUploadInputs() {
        return this.disableInput;
    }
    getprocessCode(moduleCode) {
        console.log("check : ", moduleCode);
        this.externalSysservice.getprocessCode(moduleCode).subscribe((result) => {
            console.log("process code : " + result);
            this.processCode = result;
        });
    }
};
ExternalSystemNewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _external_system_service__WEBPACK_IMPORTED_MODULE_3__["ExternalSystemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ExternalSystemNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-external-system-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./external-system-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/new-external-system/external-system-new/external-system-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./external-system-new.component.css */ "./src/app/views/new-external-system/external-system-new/external-system-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _external_system_service__WEBPACK_IMPORTED_MODULE_3__["ExternalSystemService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ExternalSystemNewComponent);



/***/ }),

/***/ "./src/app/views/new-external-system/external-system-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/new-external-system/external-system-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: externalSystemRoutes, ExternalSystemRoutingModule1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalSystemRoutes", function() { return externalSystemRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalSystemRoutingModule1", function() { return ExternalSystemRoutingModule1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _external_system_summary_external_system_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-system-summary/external-system-summary.component */ "./src/app/views/new-external-system/external-system-summary/external-system-summary.component.ts");
/* harmony import */ var _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-system-new/external-system-new.component */ "./src/app/views/new-external-system/external-system-new/external-system-new.component.ts");



const externalSystemRoutes = [
    {
        path: '',
        component: _external_system_summary_external_system_summary_component__WEBPACK_IMPORTED_MODULE_1__["ExternalSystemSummaryComponent"]
    },
    {
        path: 'summary',
        component: _external_system_summary_external_system_summary_component__WEBPACK_IMPORTED_MODULE_1__["ExternalSystemSummaryComponent"]
    },
    {
        path: 'new',
        component: _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_2__["ExternalSystemNewComponent"]
    }
];
class ExternalSystemRoutingModule1 {
}


/***/ }),

/***/ "./src/app/views/new-external-system/external-system-summary/external-system-summary.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/new-external-system/external-system-summary/external-system-summary.component.css ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .mat-table{\r\n  display: contents;\r\n} */\r\n\r\n.tabb{\r\n  width: 100%;\r\n  box-shadow: 0 0 black;\r\n  border: 1px solid #e6e6e6;\r\n}\r\n\r\n.mat-header-row {\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\nth, td {\r\n  min-height: 100px;\r\n   padding: 0 10px !important;\r\n     border-top: 1px rgba(0, 0, 0, 0.12) solid;\r\n     border-right: 1px rgba(0, 0, 0, 0.12) solid; \r\n     border-left: 1px rgba(0, 0, 0, 0.12) solid; \r\n    }\r\n\r\n.newES{\r\n    margin-left: 1%;\r\n    background-color:#006699;\r\n  }\r\n\r\n.Div_btn_new_ex{\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n.Outer-div{\r\n  /* background-color: rgb(221, 217, 217) !important; */\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.Div_card{\r\n  padding-top: 1%;\r\n  padding-bottom: 3%;\r\n  padding-right: 1%;\r\n  padding-left: 1%;\r\n  /* background-color: rgb(221, 217, 217) !important; */\r\n\r\n}\r\n\r\n.head{\r\n  background-color: #e6e6e6;\r\n  height: 60px;\r\n}\r\n\r\n.downloadButton{\r\n  height: 27px;\r\n  background-color:#006699;\r\n\r\n}\r\n\r\n.esIconclass{\r\n  padding-right: 10px;\r\n}\r\n\r\n.mat-radio-button ~ .mat-radio-button {\r\n  margin-left: 16px;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-container{\r\n  height: 13px;\r\n  width: 13px;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-outer-circle{\r\n  height: 13px;\r\n  width: 13px;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-inner-circle{\r\n  height: 13px;\r\n  width: 13px;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-button .mat-radio-ripple{\r\n  height: 20px; /*double of your required circle radius*/\r\n  width: 20px;  /*double of your required circle radius*/\r\n  left: calc(50% - 10px); /*'10px'-same as your required circle radius*/\r\n  top: calc(50% - 10px); /*'10px'-same as your required circle radius*/\r\n}\r\n\r\n.downloadIcon{\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n/* .selectfilecss{\r\n  width: 30px;\r\n} */\r\n\r\n/* mat-form-field{\r\n  width: 40%;\r\n  vertical-align: middle;\r\n} */\r\n\r\n/* ::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.3em 0px !important;} */\r\n\r\nmat-button-toggle {\r\n  height: 27px;\r\n  font-size: 11px;\r\n}\r\n\r\n.mat-button-toggle-checked {\r\n  background-color:#006699;\r\n  color: white;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:30px !important;padding:0 12px !important}\r\n\r\n.filterClass{\r\n  width: 200px !important;\r\n  border: 1px solid rgb(150, 147, 147) !important;\r\n  height: 30px;\r\n\r\n  margin: 0px; \r\n  padding: 0px; \r\n  width: 100%; \r\n  outline: none; \r\n  height: 30px; \r\n  border-radius: 5px; \r\n}\r\n\r\n.divFilter{\r\n  padding-bottom: 10px !important;\r\n}\r\n\r\n.clearfilter{\r\n  margin-left: 10px;\r\n  background-color:#006699;\r\n}\r\n\r\n.setColor{\r\n  color: rgb(80, 138, 224) !important;\r\n}\r\n\r\n/* .filterTextclass{\r\n  padding-bottom: 10px !important;\r\n} */\r\n\r\n/* .searchinput{\r\n   height: 33px !important;\r\n   position: relative !important;\r\n} */\r\n\r\n.searchicon {\r\n  float: right;\r\n  margin-right: 6px;\r\n  margin-top: -36px;\r\n  position: relative !important;\r\n  z-index: 2;\r\n  color:grey;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.newIconclass{\r\n  margin-left: -7px !important;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  width: 100%;\r\n  height: 33px !important;\r\n  margin: 8px 0;\r\n  outline: none;\r\n  padding: 8px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inputWithIcon input[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n\r\n.inputWithIcon i {\r\n  position: absolute;\r\n  margin-top: -33px !important;\r\n  padding-left: 10px !important;\r\n  color: grey;\r\n}\r\n\r\nth.mat-header-cell{\r\n  text-align: center;\r\n}\r\n\r\ninput:focus, input.form-control:focus {\r\n  outline:none !important;\r\n  outline-width: 0 !important;\r\n  box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  border:1px solid gray;\r\n}\r\n\r\n.closicon{\r\n  padding-left: 10px;\r\n  vertical-align: baseline;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbmV3LWV4dGVybmFsLXN5c3RlbS9leHRlcm5hbC1zeXN0ZW0tc3VtbWFyeS9leHRlcm5hbC1zeXN0ZW0tc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztBQUdGO0VBQ0UsaUJBQWlCO0dBQ2hCLDBCQUEwQjtLQUN4Qix5Q0FBeUM7S0FDekMsMkNBQTJDO0tBQzNDLDBDQUEwQztJQUMzQzs7QUFHSjtJQUNJLGVBQWU7SUFDZix3QkFBd0I7RUFDMUI7O0FBSUY7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscURBQXFEOztBQUV2RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCOztBQUUxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVksRUFBRSx3Q0FBd0M7RUFDdEQsV0FBVyxHQUFHLHdDQUF3QztFQUN0RCxzQkFBc0IsRUFBRSw2Q0FBNkM7RUFDckUscUJBQXFCLEVBQUUsNkNBQTZDO0FBQ3RFOztBQUdBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOztHQUVHOztBQUVIOzs7R0FHRzs7QUFHSCw2RkFBNkY7O0FBRzdGO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBLGtGQUFrRiwyQkFBMkIsQ0FBQyx5QkFBeUI7O0FBR3ZJO0VBQ0UsdUJBQXVCO0VBQ3ZCLCtDQUErQztFQUMvQyxZQUFZOztFQUVaLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTs7R0FFRzs7QUFFSDs7O0dBR0c7O0FBRUg7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ldy1leHRlcm5hbC1zeXN0ZW0vZXh0ZXJuYWwtc3lzdGVtLXN1bW1hcnkvZXh0ZXJuYWwtc3lzdGVtLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYXQtdGFibGV7XHJcbiAgZGlzcGxheTogY29udGVudHM7XHJcbn0gKi9cclxuXHJcbi50YWJie1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCBibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbnRoLCB0ZCB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpIHNvbGlkO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHJnYmEoMCwgMCwgMCwgMC4xMikgc29saWQ7IFxyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSBzb2xpZDsgXHJcbiAgICB9IFxyXG5cclxuXHJcbi5uZXdFU3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxuICB9XHJcblxyXG5cclxuXHJcbi5EaXZfYnRuX25ld19leHtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uT3V0ZXItZGl2e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNywgMjE3KSAhaW1wb3J0YW50OyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uRGl2X2NhcmR7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNywgMjE3KSAhaW1wb3J0YW50OyAqL1xyXG5cclxufVxyXG5cclxuLmhlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5kb3dubG9hZEJ1dHRvbntcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA2Njk5O1xyXG5cclxufVxyXG5cclxuLmVzSWNvbmNsYXNze1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIHdpZHRoOiAxM3B4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgd2lkdGg6IDEzcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8taW5uZXItY2lyY2xle1xyXG4gIGhlaWdodDogMTNweDtcclxuICB3aWR0aDogMTNweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24gLm1hdC1yYWRpby1yaXBwbGV7XHJcbiAgaGVpZ2h0OiAyMHB4OyAvKmRvdWJsZSBvZiB5b3VyIHJlcXVpcmVkIGNpcmNsZSByYWRpdXMqL1xyXG4gIHdpZHRoOiAyMHB4OyAgLypkb3VibGUgb2YgeW91ciByZXF1aXJlZCBjaXJjbGUgcmFkaXVzKi9cclxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpOyAvKicxMHB4Jy1zYW1lIGFzIHlvdXIgcmVxdWlyZWQgY2lyY2xlIHJhZGl1cyovXHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpOyAvKicxMHB4Jy1zYW1lIGFzIHlvdXIgcmVxdWlyZWQgY2lyY2xlIHJhZGl1cyovXHJcbn1cclxuXHJcblxyXG4uZG93bmxvYWRJY29ue1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxufVxyXG5cclxuLyogLnNlbGVjdGZpbGVjc3N7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn0gKi9cclxuXHJcbi8qIG1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSAqL1xyXG5cclxuXHJcbi8qIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuM2VtIDBweCAhaW1wb3J0YW50O30gKi9cclxuXHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZSB7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudHtsaW5lLWhlaWdodDozMHB4ICFpbXBvcnRhbnQ7cGFkZGluZzowIDEycHggIWltcG9ydGFudH1cclxuXHJcblxyXG4uZmlsdGVyQ2xhc3N7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MCwgMTQ3LCAxNDcpICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICBtYXJnaW46IDBweDsgXHJcbiAgcGFkZGluZzogMHB4OyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgb3V0bGluZTogbm9uZTsgXHJcbiAgaGVpZ2h0OiAzMHB4OyBcclxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG59XHJcblxyXG4uZGl2RmlsdGVye1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGVhcmZpbHRlcntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDY2OTk7XHJcbn1cclxuXHJcbi5zZXRDb2xvcntcclxuICBjb2xvcjogcmdiKDgwLCAxMzgsIDIyNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLmZpbHRlclRleHRjbGFzc3tcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4vKiAuc2VhcmNoaW5wdXR7XHJcbiAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuLnNlYXJjaGljb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOmdyZXk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uZXdJY29uY2xhc3N7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5pbnB1dFdpdGhJY29uIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5pbnB1dFdpdGhJY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnB1dFdpdGhJY29uIGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAtMzNweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmNsb3NpY29ue1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/new-external-system/external-system-summary/external-system-summary.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/new-external-system/external-system-summary/external-system-summary.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ExternalSystemSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalSystemSummaryComponent", function() { return ExternalSystemSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _external_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../external-system.service */ "./src/app/views/new-external-system/external-system.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);









let ExternalSystemSummaryComponent = class ExternalSystemSummaryComponent {
    constructor(router, formBuilder, externalsysService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.externalsysService = externalsysService;
        this.AllowDownload = false;
        this.selectedVal = '';
        this.displayedColumns = ['externalSystemCode', 'externalSystemName', 'processCodes', 'creatorId', 'createdAt',
            'verifierId', 'verifiedAt', 'recordStatusText', 'xsdfile', 'dtdfile'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        console.log('component summary loaded.');
        this.dataSource.paginator = this.paginator;
        this.loadAllData();
        this.AllowDownload = false;
        this.selectedVal = '';
        this.dataSource.filterPredicate = function (data, filter) {
            return data.externalSystemCode.toLowerCase().includes(filter);
        };
    }
    loadAllData() {
        this.externalsysService.getExternalSystemList().subscribe((response) => {
            this.dataSource.data = response;
            console.log('data for ext sys' + this.dataSource.data);
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
    }
    onValChange(val, id) {
        this.selectedVal = val;
        this.idToEnable = id;
        this.AllowDownload = true;
    }
    DisableOrNot(checkId) {
        if (checkId == this.idToEnable && this.AllowDownload == true) {
            return false;
        }
        else {
            return true;
        }
    }
    download(element) {
        console.log(this.selectedVal);
        console.log(element);
        console.log("download");
        if (this.selectedVal == 'xsd') {
            this.externalsysService.downloadxsd(element, this.selectedVal).subscribe(response => {
                console.log(response.body);
                if (response.body != "") {
                    console.log(response);
                    //const filename=response.headers.get('filename');
                    const filename = element;
                    console.log(filename);
                    //console.log(filename);
                    // filename='ass';
                    this.saveFilexsd(response.body, filename + '.xsd');
                }
                else {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire("File is not Available for this External System");
                }
            });
        }
        else if (this.selectedVal == 'dtd') {
            this.externalsysService.downloaddtd(element, this.selectedVal).subscribe(response => {
                console.log(response);
                if (response.body != "") {
                    //const filename=response.headers.get('filename');
                    const filename = element;
                    console.log(filename);
                    // filename='ass';
                    this.saveFiledtd(response.body, filename + '.dtd');
                }
                else {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire("File is not Available for this External System");
                }
            });
        }
    }
    saveFilexsd(data, filename) {
        const blob = new Blob([data], { type: 'text/xsd; charset=utf-8' });
        file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](blob, filename);
    }
    saveFiledtd(data, filename) {
        const blob = new Blob([data], { type: 'text/dtd; charset=utf-8' });
        file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](blob, filename);
    }
};
ExternalSystemSummaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _external_system_service__WEBPACK_IMPORTED_MODULE_6__["ExternalSystemService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], ExternalSystemSummaryComponent.prototype, "paginator", void 0);
ExternalSystemSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-external-system-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./external-system-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/new-external-system/external-system-summary/external-system-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./external-system-summary.component.css */ "./src/app/views/new-external-system/external-system-summary/external-system-summary.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _external_system_service__WEBPACK_IMPORTED_MODULE_6__["ExternalSystemService"]])
], ExternalSystemSummaryComponent);



/***/ }),

/***/ "./src/app/views/new-external-system/external-system.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/new-external-system/external-system.service.ts ***!
  \**********************************************************************/
/*! exports provided: ExternalSystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalSystemService", function() { return ExternalSystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");





// import { ExternalSystems } from '../external-system/externalsystem';
// import {ProcessServiceModule} from '../external-system/processServiceModule';


let ExternalSystemService = class ExternalSystemService {
    // private newUrl = 'http://localhost:9800/externalSystem';
    // private newUrlforcodes = 'http://localhost:9800/processServiceModule';
    constructor(http) {
        this.http = http;
        // AppConstants.ba
        this.newUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].MEDIAN_URL;
        this._baseURL = this.newUrl;
        console.log(this._baseURL);
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    getExternalSystemList() {
        return this.http.get(`${this._baseURL}/externalSystem/getAllExternalSystems`);
        //`${API_URL}/users/getModifiedUser/
        //   .pipe(retry(2), catchError(this.handleError))
    }
    // saveNewExternalSystem(newExternalSys: ExternalSystems): Observable<ExternalSystems> {  
    //     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    //     return this.http.post<ExternalSystems>(this.newUrl + '/save/',  newExternalSys, httpOptions);  
    // }
    saveNewExternalSystem(formData) {
        console.log("Reached service.ts page");
        console.log("formData is :" + formData);
        return this.http.post(`${this._baseURL}/externalSystem/save/`, formData);
    }
    getExternalSystemById(externalSystemCode) {
        return this.http.get(`${this._baseURL}/externalSystem/getExternalSystemById/` + externalSystemCode);
    }
    updateExternalSystem(updateExternalSys) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(`${this._baseURL}/update/`, updateExternalSys, httpOptions);
    }
    deleteExternalSysById(externalSystemCode) {
        console.log("Reached service page");
        return this.http.delete(`${this._baseURL}/externalSystem/delete/` + externalSystemCode);
    }
    authorized(externalSysIdUpdate, creatorId) {
        console.log(externalSysIdUpdate);
        console.log(creatorId);
        return this.http.get(`${this._baseURL}/externalSystem/authorize/` + externalSysIdUpdate + '/' + creatorId);
    }
    downloadxsd(filename, extension) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'text/xsd; charset=utf-8');
        return this.http.get(this._baseURL + '/externalSystem/downloadfile/' + filename + "/" + extension, {
            headers: headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    downloaddtd(filename, extension) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'text/xsd; charset=utf-8');
        return this.http.get(this._baseURL + '/externalSystem/downloadfile/' + filename + "/" + extension, {
            headers: headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    getProcessServiceModule() {
        return this.http.get(this._baseURL + '/processServiceModule/getAllProcessServiceModule')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getprocessCode(moduleCode) {
        return this.http.get(this._baseURL + '/processServiceModule/getprocessCode/' + moduleCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
ExternalSystemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ExternalSystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ExternalSystemService);



/***/ }),

/***/ "./src/app/views/new-external-system/externalsystem.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/new-external-system/externalsystem.ts ***!
  \*************************************************************/
/*! exports provided: NewExternalSystems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExternalSystems", function() { return NewExternalSystems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NewExternalSystems {
}


/***/ }),

/***/ "./src/app/views/new-external-system/new-external-system.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/new-external-system/new-external-system.module.ts ***!
  \*************************************************************************/
/*! exports provided: NewExternalSystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExternalSystemModule", function() { return NewExternalSystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _external_system_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./external-system-routing.module */ "./src/app/views/new-external-system/external-system-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _external_system_summary_external_system_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external-system-summary/external-system-summary.component */ "./src/app/views/new-external-system/external-system-summary/external-system-summary.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./external-system-new/external-system-new.component */ "./src/app/views/new-external-system/external-system-new/external-system-new.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

















let NewExternalSystemModule = class NewExternalSystemModule {
};
NewExternalSystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_external_system_summary_external_system_summary_component__WEBPACK_IMPORTED_MODULE_5__["ExternalSystemSummaryComponent"], _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_9__["ExternalSystemNewComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_external_system_routing_module__WEBPACK_IMPORTED_MODULE_3__["externalSystemRoutes"]),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
        ]
    })
], NewExternalSystemModule);



/***/ })

}]);
//# sourceMappingURL=views-new-external-system-new-external-system-module-es2015.js.map