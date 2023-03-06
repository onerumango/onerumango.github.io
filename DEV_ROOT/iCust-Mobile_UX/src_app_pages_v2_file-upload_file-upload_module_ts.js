(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_file-upload_file-upload_module_ts"],{

/***/ 46645:
/*!********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadPageRoutingModule": () => (/* binding */ FileUploadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _file_upload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.page */ 50473);




const routes = [
    {
        path: '',
        component: _file_upload_page__WEBPACK_IMPORTED_MODULE_0__.FileUploadPage
    }
];
let FileUploadPageRoutingModule = class FileUploadPageRoutingModule {
};
FileUploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FileUploadPageRoutingModule);



/***/ }),

/***/ 73942:
/*!************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadPageModule": () => (/* binding */ FileUploadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload-routing.module */ 46645);
/* harmony import */ var _file_upload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload.page */ 50473);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);








let FileUploadPageModule = class FileUploadPageModule {
};
FileUploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
            _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadPageRoutingModule
        ],
        declarations: [_file_upload_page__WEBPACK_IMPORTED_MODULE_1__.FileUploadPage]
    })
], FileUploadPageModule);



/***/ }),

/***/ 50473:
/*!**********************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadPage": () => (/* binding */ FileUploadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _file_upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.page.html?ngResource */ 60004);
/* harmony import */ var _file_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload.page.scss?ngResource */ 90283);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tesseract.js */ 54389);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_3__);








const worker = (0,tesseract_js__WEBPACK_IMPORTED_MODULE_3__.createWorker)({
    logger: m => console.log(m)
});
let FileUploadPage = class FileUploadPage {
    constructor(router, api, cdr) {
        this.router = router;
        this.api = api;
        this.cdr = cdr;
        this.isFile = false;
        this.files = [];
        this.isUploading = false;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['dashboard']);
    }
    onFileSelect(e, side) {
        try {
            const file = e.target.files[0];
            const fReader = new FileReader();
            fReader.readAsDataURL(file);
            fReader.onloadend = (_event) => {
                this.filename = file.name;
                this.base64File = _event.target.result;
                console.log(this.filename);
                this.files.push(file);
                this.imageParser(file);
                this.fileUpload(file);
            };
        }
        catch (error) {
            this.filename = null;
            this.base64File = null;
        }
    }
    imageParser(image) {
        (() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield worker.load();
            yield worker.loadLanguage('eng');
            yield worker.initialize('eng');
            const { data: { text } } = yield worker.recognize(image);
            this.parsedText = text;
            console.log("Parsed Text", text);
            yield worker.terminate();
        }))();
    }
    upload() {
        this.isFile = !this.isFile;
    }
    fileUpload(file) {
        this.uploadingFile = file.name;
        this.isUploading = true;
        this.requestSubscription = this.api.uploadAndProgress(file).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                this.uploadSuccess = true;
                this.isUploading = false;
            }
        });
    }
    deleteFile(item) {
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
    }
    cancel(item) {
        this.requestSubscription.unsubscribe();
        var index = this.files.indexOf(item);
        this.files.splice(index, 1);
        this.cdr.markForCheck();
    }
};
FileUploadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
FileUploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-file-upload',
        template: _file_upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_file_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FileUploadPage);



/***/ }),

/***/ 96480:
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/***/ ((module) => {

// https://github.com/electron/electron/issues/2288
function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  }

  // Main process
  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to false
  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }
  return false;
}
module.exports = isElectron;

/***/ }),

/***/ 54346:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 58478:
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

void function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  function resolveUrl( /* ...urls */
  ) {
    var numUrls = arguments.length;
    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.");
    }
    var base = document.createElement("base");
    base.href = arguments[0];
    if (numUrls === 1) {
      return base.href;
    }
    var head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    var a = document.createElement("a");
    var resolved;
    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index];
      resolved = a.href;
      base.href = resolved;
    }
    head.removeChild(base);
    return resolved;
  }
  return resolveUrl;
});

/***/ }),

/***/ 92658:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 79717)["default"]);
const createWorker = __webpack_require__(/*! ./createWorker */ 45625);
const recognize = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (image, langs, options) {
    const worker = createWorker(options);
    yield worker.load();
    yield worker.loadLanguage(langs);
    yield worker.initialize(langs);
    return worker.recognize(image).finally( /*#__PURE__*/_asyncToGenerator(function* () {
      yield worker.terminate();
    }));
  });
  return function recognize(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const detect = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (image, options) {
    const worker = createWorker(options);
    yield worker.load();
    yield worker.loadLanguage('osd');
    yield worker.initialize('osd');
    return worker.detect(image).finally( /*#__PURE__*/_asyncToGenerator(function* () {
      yield worker.terminate();
    }));
  });
  return function detect(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
module.exports = {
  recognize,
  detect
};

/***/ }),

/***/ 93488:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/***/ ((module) => {

/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 */
module.exports = {
  TESSERACT_ONLY: 0,
  LSTM_ONLY: 1,
  TESSERACT_LSTM_COMBINED: 2,
  DEFAULT: 3
};

/***/ }),

/***/ 10861:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/***/ ((module) => {

/*
 * PSM = Page Segmentation Mode
 */
module.exports = {
  OSD_ONLY: '0',
  AUTO_OSD: '1',
  AUTO_ONLY: '2',
  AUTO: '3',
  SINGLE_COLUMN: '4',
  SINGLE_BLOCK_VERT_TEXT: '5',
  SINGLE_BLOCK: '6',
  SINGLE_LINE: '7',
  SINGLE_WORD: '8',
  CIRCLE_WORD: '9',
  SINGLE_CHAR: '10',
  SPARSE_TEXT: '11',
  SPARSE_TEXT_OSD: '12'
};

/***/ }),

/***/ 71871:
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const OEM = __webpack_require__(/*! ./OEM */ 93488);
module.exports = {
  defaultOEM: OEM.DEFAULT
};

/***/ }),

/***/ 90715:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {
  /*
   * default path for downloading *.traineddata
   */
  langPath: 'https://tessdata.projectnaptha.com/4.0.0',
  /*
   * Use BlobURL for worker script by default
   * TODO: remove this option
   *
   */
  workerBlobURL: true,
  logger: () => {}
};

/***/ }),

/***/ 86490:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getId = __webpack_require__(/*! ./utils/getId */ 43350);
let jobCounter = 0;
module.exports = ({
  id: _id,
  action,
  payload = {}
}) => {
  let id = _id;
  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }
  return {
    id,
    action,
    payload
  };
};

/***/ }),

/***/ 10365:
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 79717)["default"]);
var _this = this;
const createJob = __webpack_require__(/*! ./createJob */ 86490);
const {
  log
} = __webpack_require__(/*! ./utils/log */ 3374);
const getId = __webpack_require__(/*! ./utils/getId */ 43350);
let schedulerCounter = 0;
module.exports = () => {
  const id = getId('Scheduler', schedulerCounter);
  const workers = {};
  const runningWorkers = {};
  let jobQueue = [];
  schedulerCounter += 1;
  const getQueueLen = () => jobQueue.length;
  const getNumWorkers = () => Object.keys(workers).length;
  const dequeue = () => {
    if (jobQueue.length !== 0) {
      const wIds = Object.keys(workers);
      for (let i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };
  const queue = (action, payload) => new Promise((resolve, reject) => {
    const job = createJob({
      action,
      payload
    });
    jobQueue.push( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (w) {
        jobQueue.shift();
        runningWorkers[w.id] = job;
        try {
          resolve(yield w[action].apply(_this, [...payload, job.id]));
        } catch (err) {
          reject(err);
        } finally {
          delete runningWorkers[w.id];
          dequeue();
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    log(`[${id}]: Add ${job.id} to JobQueue`);
    log(`[${id}]: JobQueue length=${jobQueue.length}`);
    dequeue();
  });
  const addWorker = w => {
    workers[w.id] = w;
    log(`[${id}]: Add ${w.id}`);
    log(`[${id}]: Number of workers=${getNumWorkers()}`);
    dequeue();
    return w.id;
  };
  const addJob = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (action, ...payload) {
      if (getNumWorkers() === 0) {
        throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
      }
      return queue(action, payload);
    });
    return function addJob(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  const terminate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      Object.keys(workers).forEach( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(function* (wid) {
          yield workers[wid].terminate();
        });
        return function (_x3) {
          return _ref4.apply(this, arguments);
        };
      }());
      jobQueue = [];
    });
    return function terminate() {
      return _ref3.apply(this, arguments);
    };
  }();
  return {
    addWorker,
    addJob,
    terminate,
    getQueueLen,
    getNumWorkers
  };
};

/***/ }),

/***/ 45625:
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 79717)["default"]);
const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ 92133);
const circularize = __webpack_require__(/*! ./utils/circularize */ 2752);
const createJob = __webpack_require__(/*! ./createJob */ 86490);
const {
  log
} = __webpack_require__(/*! ./utils/log */ 3374);
const getId = __webpack_require__(/*! ./utils/getId */ 43350);
const {
  defaultOEM
} = __webpack_require__(/*! ./constants/config */ 71871);
const {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  loadImage,
  send
} = __webpack_require__(/*! ./worker/node */ 39664);
let workerCounter = 0;
module.exports = (_options = {}) => {
  const id = getId('Worker', workerCounter);
  const {
    logger,
    errorHandler,
    ...options
  } = resolvePaths({
    ...defaultOptions,
    ..._options
  });
  const resolves = {};
  const rejects = {};
  let worker = spawnWorker(options);
  workerCounter += 1;
  const setResolve = (action, res) => {
    resolves[action] = res;
  };
  const setReject = (action, rej) => {
    rejects[action] = rej;
  };
  const startJob = ({
    id: jobId,
    action,
    payload
  }) => new Promise((resolve, reject) => {
    log(`[${id}]: Start ${jobId}, action=${action}`);
    setResolve(action, resolve);
    setReject(action, reject);
    send(worker, {
      workerId: id,
      jobId,
      action,
      payload
    });
  });
  const load = jobId => startJob(createJob({
    id: jobId,
    action: 'load',
    payload: {
      options
    }
  }));
  const writeText = (path, text, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'writeFile',
      args: [path, text]
    }
  }));
  const readText = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'readFile',
      args: [path, {
        encoding: 'utf8'
      }]
    }
  }));
  const removeFile = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'unlink',
      args: [path]
    }
  }));
  const FS = (method, args, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method,
      args
    }
  }));
  const loadLanguage = (langs = 'eng', jobId) => startJob(createJob({
    id: jobId,
    action: 'loadLanguage',
    payload: {
      langs,
      options
    }
  }));
  const initialize = (langs = 'eng', oem = defaultOEM, jobId) => startJob(createJob({
    id: jobId,
    action: 'initialize',
    payload: {
      langs,
      oem
    }
  }));
  const setParameters = (params = {}, jobId) => startJob(createJob({
    id: jobId,
    action: 'setParameters',
    payload: {
      params
    }
  }));
  const recognize = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (image, opts = {}, jobId) {
      return startJob(createJob({
        id: jobId,
        action: 'recognize',
        payload: {
          image: yield loadImage(image),
          options: opts
        }
      }));
    });
    return function recognize(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  const getPDF = (title = 'Tesseract OCR Result', textonly = false, jobId) => startJob(createJob({
    id: jobId,
    action: 'getPDF',
    payload: {
      title,
      textonly
    }
  }));
  const detect = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (image, jobId) {
      return startJob(createJob({
        id: jobId,
        action: 'detect',
        payload: {
          image: yield loadImage(image)
        }
      }));
    });
    return function detect(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  const terminate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      if (worker !== null) {
        /*
        await startJob(createJob({
          id: jobId,
          action: 'terminate',
        }));
        */
        terminateWorker(worker);
        worker = null;
      }
      return Promise.resolve();
    });
    return function terminate() {
      return _ref3.apply(this, arguments);
    };
  }();
  onMessage(worker, ({
    workerId,
    jobId,
    status,
    action,
    data
  }) => {
    if (status === 'resolve') {
      log(`[${workerId}]: Complete ${jobId}`);
      let d = data;
      if (action === 'recognize') {
        d = circularize(data);
      } else if (action === 'getPDF') {
        d = Array.from({
          ...data,
          length: Object.keys(data).length
        });
      }
      resolves[action]({
        jobId,
        data: d
      });
    } else if (status === 'reject') {
      rejects[action](data);
      if (errorHandler) {
        errorHandler(data);
      } else {
        throw Error(data);
      }
    } else if (status === 'progress') {
      logger(data);
    }
  });
  return {
    id,
    worker,
    setResolve,
    setReject,
    load,
    writeText,
    readText,
    removeFile,
    FS,
    loadLanguage,
    initialize,
    setParameters,
    recognize,
    getPDF,
    detect,
    terminate
  };
};

/***/ }),

/***/ 54389:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ 54346);
const createScheduler = __webpack_require__(/*! ./createScheduler */ 10365);
const createWorker = __webpack_require__(/*! ./createWorker */ 45625);
const Tesseract = __webpack_require__(/*! ./Tesseract */ 92658);
const OEM = __webpack_require__(/*! ./constants/OEM */ 93488);
const PSM = __webpack_require__(/*! ./constants/PSM */ 10861);
const {
  setLogging
} = __webpack_require__(/*! ./utils/log */ 3374);
module.exports = {
  OEM,
  PSM,
  createScheduler,
  createWorker,
  setLogging,
  ...Tesseract
};

/***/ }),

/***/ 2752:
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/***/ ((module) => {

/**
 * In the recognition result of tesseract, there
 * is a deep JSON object for details, it has around
 *
 * The result of dump.js is a big JSON tree
 * which can be easily serialized (for instance
 * to be sent from a webworker to the main app
 * or through Node's IPC), but we want
 * a (circular) DOM-like interface for walking
 * through the data.
 *
 * @fileoverview DOM-like interface for walking through data
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */

module.exports = page => {
  const blocks = [];
  const paragraphs = [];
  const lines = [];
  const words = [];
  const symbols = [];
  page.blocks.forEach(block => {
    block.paragraphs.forEach(paragraph => {
      paragraph.lines.forEach(line => {
        line.words.forEach(word => {
          word.symbols.forEach(sym => {
            symbols.push({
              ...sym,
              page,
              block,
              paragraph,
              line,
              word
            });
          });
          words.push({
            ...word,
            page,
            block,
            paragraph,
            line
          });
        });
        lines.push({
          ...line,
          page,
          block,
          paragraph
        });
      });
      paragraphs.push({
        ...paragraph,
        page,
        block
      });
    });
    blocks.push({
      ...block,
      page
    });
  });
  return {
    ...page,
    blocks,
    paragraphs,
    lines,
    words,
    symbols
  };
};

/***/ }),

/***/ 21347:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isElectron = __webpack_require__(/*! is-electron */ 96480);
module.exports = key => {
  const env = {};
  if (isElectron()) {
    env.type = 'electron';
  } else if (typeof window === 'object') {
    env.type = 'browser';
  } else if (typeof importScripts === 'function') {
    env.type = 'webworker';
  } else if (typeof process === 'object' && "function" === 'function') {
    env.type = 'node';
  }
  if (typeof key === 'undefined') {
    return env;
  }
  return env[key];
};

/***/ }),

/***/ 43350:
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = (prefix, cnt) => `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`;

/***/ }),

/***/ 3374:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

let logging = false;
exports.logging = logging;
exports.setLogging = _logging => {
  logging = _logging;
};
exports.log = (...args) => logging ? console.log.apply(this, args) : null;

/***/ }),

/***/ 92133:
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isBrowser = __webpack_require__(/*! ./getEnvironment */ 21347)('type') === 'browser';
const resolveURL = isBrowser ? __webpack_require__(/*! resolve-url */ 58478) : s => s; // eslint-disable-line

module.exports = options => {
  const opts = {
    ...options
  };
  ['corePath', 'workerPath', 'langPath'].forEach(key => {
    if (typeof options[key] !== 'undefined') {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};

/***/ }),

/***/ 88683:
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const resolveURL = __webpack_require__(/*! resolve-url */ 58478);
const {
  version,
  dependencies
} = __webpack_require__(/*! ../../../package.json */ 94547);
const defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ 90715);

/*
 * Default options for browser worker
 */
module.exports = {
  ...defaultOptions,
  workerPath: typeof process !== 'undefined' && process.env.TESS_ENV === 'development' ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`) : `https://unpkg.com/tesseract.js@v${version}/dist/worker.min.js`,
  /*
   * If browser doesn't support WebAssembly,
   * load ASM version instead
   */
  corePath: `https://unpkg.com/tesseract.js-core@v${dependencies['tesseract.js-core'].substring(1)}/tesseract-core.${typeof WebAssembly === 'object' ? 'wasm' : 'asm'}.js`
};

/***/ }),

/***/ 39664:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
const defaultOptions = __webpack_require__(/*! ./defaultOptions */ 88683);
const spawnWorker = __webpack_require__(/*! ./spawnWorker */ 69690);
const terminateWorker = __webpack_require__(/*! ./terminateWorker */ 47005);
const onMessage = __webpack_require__(/*! ./onMessage */ 29290);
const send = __webpack_require__(/*! ./send */ 78196);
const loadImage = __webpack_require__(/*! ./loadImage */ 75967);
module.exports = {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  send,
  loadImage
};

/***/ }),

/***/ 75967:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 79717)["default"]);
const resolveURL = __webpack_require__(/*! resolve-url */ 58478);

/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */
const readFromBlobOrFile = blob => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    resolve(fileReader.result);
  };
  fileReader.onerror = ({
    target: {
      error: {
        code
      }
    }
  }) => {
    reject(Error(`File could not be read! Code=${code}`));
  };
  fileReader.readAsArrayBuffer(blob);
});

/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */
const loadImage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (image) {
    let data = image;
    if (typeof image === 'undefined') {
      return 'undefined';
    }
    if (typeof image === 'string') {
      // Base64 Image
      if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
        data = atob(image.split(',')[1]).split('').map(c => c.charCodeAt(0));
      } else {
        const resp = yield fetch(resolveURL(image));
        data = yield resp.arrayBuffer();
      }
    } else if (image instanceof HTMLElement) {
      if (image.tagName === 'IMG') {
        data = yield loadImage(image.src);
      }
      if (image.tagName === 'VIDEO') {
        data = yield loadImage(image.poster);
      }
      if (image.tagName === 'CANVAS') {
        yield new Promise(resolve => {
          image.toBlob( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(function* (blob) {
              data = yield readFromBlobOrFile(blob);
              resolve();
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        });
      }
    } else if (image instanceof File || image instanceof Blob) {
      data = yield readFromBlobOrFile(image);
    }
    return new Uint8Array(data);
  });
  return function loadImage(_x) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = loadImage;

/***/ }),

/***/ 29290:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = (worker, handler) => {
  worker.onmessage = ({
    data
  }) => {
    // eslint-disable-line
    handler(data);
  };
};

/***/ }),

/***/ 78196:
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 79717)["default"]);
/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (worker, packet) {
    worker.postMessage(packet);
  });
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 69690:
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/***/ ((module) => {

/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = ({
  workerPath,
  workerBlobURL
}) => {
  let worker;
  if (Blob && URL && workerBlobURL) {
    const blob = new Blob([`importScripts("${workerPath}");`], {
      type: 'application/javascript'
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }
  return worker;
};

/***/ }),

/***/ 47005:
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/***/ ((module) => {

/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = worker => {
  worker.terminate();
};

/***/ }),

/***/ 90283:
/*!***********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".file-content-wrapper {\n  margin-top: 160px !important;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.cat-text {\n  color: #8D8D8D !important;\n  font-size: 12px !important;\n  opacity: 100%;\n  margin-bottom: 8px !important;\n  margin-top: -6px !important;\n}\n\nh6.cat-head {\n  color: #000000;\n  font-size: 20px;\n}\n\n.card {\n  width: auto;\n  height: 85px;\n  padding: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.chq-text {\n  color: #000000;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre-line;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.danger {\n  color: #B20000 !important;\n  opacity: 100% !important;\n}\n\nion-progress-bar {\n  --background: #E8E8E8;\n  --progress-background:linear-gradient(90deg, #051A2D, #004C97);\n  height: 8px !important;\n  border-radius: 16px !important;\n}\n\n.file-card {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  width: auto;\n  height: 110px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.file-card .p-1 {\n  height: 80px;\n}\n\n.file-card .pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.file-card .border-end {\n  border-right: 1pt solid #dee2e6 !important;\n}\n\n.file-card p {\n  opacity: 100% !important;\n  color: #707070 !important;\n  font-size: 13px !important;\n}\n\n.file-card .avatar {\n  height: 60px;\n  width: 60px;\n  background: #EDECEC;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n.file-card .avatar .bg-gradient {\n  background-image: #EDECEC !important;\n}\n\n.file-card .avatar img {\n  margin-top: 16px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw4REFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBRUk7RUFDSSwrQkFBQTtBQUFSOztBQUdJO0VBQ0ksMENBQUE7QUFEUjs7QUFJSTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUZSOztBQUtJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhSOztBQUtRO0VBQ0ksb0NBQUE7QUFIWjs7QUFNUTtFQUNJLGdCQUFBO0FBSlo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQVBKIiwiZmlsZSI6ImZpbGUtdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMTYge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNhdC10ZXh0IHtcclxuICAgIGNvbG9yOiAjOEQ4RDhEICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaDYuY2F0LWhlYWQge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYig5OSA5OSA5OSAvIDIwJSkgMHB4IDJweCA4cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jaHEtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTpwcmUtbGluZTtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNCMjAwMDAgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFOEU4RTg7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIGhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMCAxMDAgMTExIC8gMjAlKSAwcHggN3B4IDI5cHggMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAucC0xIHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBiLTMge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlci1lbmQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB0IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0VERUNFQztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC5iZy1ncmFkaWVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICNFREVDRUMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbi5uZXh0IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIC0tY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 60004:
/*!***********************************************************************!*\
  !*** ./src/app/pages/v2/file-upload/file-upload.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header *ngIf=\"!isFile\">\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"isFile\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Upload file</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ng-container *ngIf=\"!isFile\">\r\n    <div class=\"file-content-wrapper text-center\">\r\n      <img src=\"assets/icon/v2/no-file-upload.svg\">\r\n      <h6 class=\"cat-head\">Upload File Here</h6>\r\n      <p class=\"cat-text\">Choose your file from gallery</p>\r\n    </div>\r\n\r\n    <div class=\"file-card my-5 mt-16\">\r\n      <div class=\"row justify-content-between pb-3\">\r\n        <div class=\"col-6 align-self-center text-center border-end mt-16\" (click)=\"upload()\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Front</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 align-self-center text-center mt-16\" (click)=\"upload()\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar bg-gradient\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Back</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"isFile\">\r\n    <div class=\"file-card\">\r\n      <div class=\"row justify-content-between pb-3\">\r\n        <div class=\"col-6 align-self-center text-center border-end mt-16\" (click)=\"fileSelect.click();\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Front</p>\r\n            <input [hidden]=\"true\" type=\"file\" id=\"file-input\" (change)=\"onFileSelect($event, 'front')\"\r\n              accept=\"image/png, image/jpeg\" #fileSelect>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 align-self-center text-center mt-16\" (click)=\"fileSelect.click();\">\r\n          <div class=\"p-1\">\r\n            <div class=\"avatar bg-gradient\">\r\n              <img src=\"assets/icon/v2/upload-icon.svg\">\r\n            </div>\r\n            <p>Back</p>\r\n            <input [hidden]=\"true\" type=\"file\" id=\"file-input\" (change)=\"onFileSelect($event, 'back')\"\r\n              accept=\"image/png, image/jpeg\" #fileSelect>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"my-5\">\r\n      <div class=\"card\" *ngFor=\"let item of files; index as i;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <img alt=\"front\" [src]=\"base64File\" width=\"120\" height=\"51\" />\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row justify-content-between\">\r\n              <div class=\"col-9 align-self-center\">\r\n                <h3 class=\"chq-text\">{{item?.name}}</h3>\r\n              </div>\r\n              <div class=\"col-3 align-self-center text-right\">\r\n                <ion-button fill=\"clear\" *ngIf=\"uploadingFile == item.name && isUploading; else uploaded\"\r\n                  (click)=\"cancel(item.name)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"close\" color=\"medium\"></ion-icon>\r\n                </ion-button>\r\n\r\n                <ng-template #uploaded>\r\n                  <mat-icon class=\"danger\" (click)=\"deleteFile(item.name)\">delete</mat-icon>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n\r\n            <ion-progress-bar [value]=\"percentDone\"\r\n              *ngIf=\"uploadingFile == item.name && isUploading\"></ion-progress-bar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"isFile\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"goBack()\">Upload\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goBack()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ }),

/***/ 79717:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 94547:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"tesseract.js","version":"2.1.0","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.7.7","@babel/preset-env":"^7.7.7","acorn":"^6.4.0","babel-loader":"^8.0.6","cors":"^2.8.5","eslint":"^5.16.0","eslint-config-airbnb":"^17.1.1","eslint-plugin-import":"^2.19.1","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.17.0","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^5.2.0","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","nyc":"^15.0.0","rimraf":"^2.7.1","wait-on":"^3.3.0","webpack":"^4.41.4","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.10","webpack-dev-middleware":"^3.7.2"},"dependencies":{"bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^2.2.0","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_file-upload_file-upload_module_ts.js.map