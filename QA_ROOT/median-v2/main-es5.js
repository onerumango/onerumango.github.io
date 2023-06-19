(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    69239:
    /*!********************************************************!*\
      !*** ./src/@npr/components/header/header.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      31600);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      92038);
      /* harmony import */


      var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/add/operator/debounceTime */
      62259);
      /* harmony import */


      var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/add/operator/distinctUntilChanged */
      43440);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/local-store.service */
      69122);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      98613);
      /* harmony import */


      var _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../directives/menu-collapse.directive */
      79511);
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      42255);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function HeaderComponent_ng_template_13_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "a", 75);
        }

        if (rf & 2) {
          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", item_r5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        }
      }

      function HeaderComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HeaderComponent_ng_template_13_a_0_Template, 1, 1, "a", 74);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.screenpermissions[0] !== "");
        }
      }

      function HeaderComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 75);
        }

        if (rf & 2) {
          var notFound_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", notFound_r8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        }
      }

      var _c0 = "/system-param-maintenance/transaction-code-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      function HeaderComponent_li_173_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_li_173_div_1_Template_div_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            var data_r9 = ctx_r13.$implicit;
            var i_r10 = ctx_r13.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r12.getRecords($event, data_r9, i_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" UserId:", data_r9.userId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Version:", data_r9.version, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("RecordStatus:", data_r9.recordStatus, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("verifiedTime:", data_r9.verifiedTime, "");
        }
      }

      function HeaderComponent_li_173_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HeaderComponent_li_173_div_1_Template, 18, 6, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r10 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r10 == 0 || i_r10 == 1 || i_r10 == 2 || i_r10 == 3 || i_r10 == 4 || ctx_r4.pendingReq);
        }
      }

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(localStoreService, api, router, userApi) {
          _classCallCheck(this, _HeaderComponent);

          this.localStoreService = localStoreService;
          this.api = api;
          this.router = router;
          this.userApi = userApi;
          this.notToShowAll2 = true;
          this.unAUthorizedUsers = [];
          this.pendingReq = false;
          this.seenData = [];
          this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject([]);
          this.keyword = 'name';
        }

        _createClass(_HeaderComponent, [{
          key: "selectEvent",
          value: function selectEvent(item) {
            var _this = this;

            if (item == "Customer Search") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Amount Block Or Account Block',
                showCancelButton: true,
                confirmButtonText: 'Amount Block',
                cancelButtonText: 'Account Block'
              }).then(function (result) {
                console.log(result);

                if (result.isConfirmed) {
                  console.log("account_blocking");

                  _this.router.navigateByUrl("/accountBlocking");
                } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason.cancel) {
                  console.log("anount-blocking");

                  _this.router.navigateByUrl("/amount-block");
                }
              });
            }

            if (item === 'Roles') {
              this.router.navigate(['/roles/list']);
            }

            if (item == 'Users') {
              this.router.navigate(['/users']);
            }

            if (item === 'Audit Logs') {
              this.router.navigate(['/audit-logs']);
            }

            if (item === 'Security Policy') {
              this.router.navigate(['/security-policy/summary']);
            }

            if (item === 'Authorize Cash Payments') {
              this.router.navigate(['/authorize-cash-payment']);
            }

            if (item === 'Transaction Code Maintenance') {
              this.router.navigate(['/system-param-maintenance/transaction-code-summary']);
            }

            if (item === 'Global Account Restriction') {
              this.router.navigate(['/system-param-maintenance/global-acc-maintenance-summary']);
            }

            if (item === 'User Account Restriction') {
              this.router.navigate(['/system-param-maintenance/user-gl-acc-maintenance-summary']);
            }

            if (item === 'Department ID Maintenance') {
              this.router.navigate(['/system-param-maintenance/dept-id-maintenance-summary']);
            }

            if (item === 'Email-Management') {
              this.router.navigate(['/email-management']);
            }

            if (item === 'Add System') {
              this.router.navigate(['/addSystem/summary']);
            }

            if (item === 'Rule translation') {
              this.router.navigate(['/rule-translation/summary']);
            }

            if (item === 'Create Rule') {
              this.router.navigate(['/createrule/list']);
            }

            if (item === 'Rule Mapping') {
              this.router.navigate(['/rule-mapping/summary']);
            }

            if (item === 'External System') {
              this.router.navigate(['/external-system/extSys-summary']);
            }

            if (item === 'Process Code Mapping') {
              this.router.navigate(['/external-system/processCodeMapping']);
            }

            if (item === 'Template Mapping') {
              this.router.navigate(['/excel-mapping']);
            }

            if (item === 'Upload Excel') {
              this.router.navigate(['/file-upload/upload-excel']);
            }

            if (item === 'Authorize Excel') {
              this.router.navigate(['/file-upload/authorize_excel']);
            }

            if (item === 'Rejection Queue') {
              this.router.navigate(['/file-upload/rejection_queue']);
            }

            if (item === 'Authorize Modification') {
              this.router.navigate(['/authorize-modification']);
            }

            if (item === 'Treasury Reference') {
              this.router.navigate(['/external-system/treasuryReference']);
            }

            if (item === 'Process Monitoring') {
              this.router.navigate(['/process-monitoring']);
            }

            if (item === 'Customer Search') {
              this.router.navigate(['/customer-search']);
            }

            if (item === 'Initiate Account Closure') {
              this.router.navigate(['/initiate-account-closure']);
            }

            if (item === 'Process Account Closure') {
              this.router.navigate(['/process-account-closure']);
            }

            if (item === 'Account Closure Maintenance') {
              this.router.navigate(['/account-closure-maintenance/account-closure-summary']);
            }

            if (item === 'Profile') {
              this.router.navigate(['/profile']);
            }

            if (item === 'Change Password') {
              this.router.navigate(['/change-password']);
            }

            if (item === 'Logout') {
              this.router.navigate(['/session/login']);
            }
          }
        }, {
          key: "onChangeSearch",
          value: function onChangeSearch(search) {
            if (search.length >= 1) {
              this.enablescreenPermissions(search.charAt(0).toUpperCase());
            } else {
              this.screenpermissions = [""];
            } // fetch remote data from here
            // And reassign the 'data' which is binded to 'data' property.

          }
        }, {
          key: "onFocused",
          value: function onFocused(e) {// do something
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = localStorage.getItem("userFromLogin");
            this.user1 = localStorage.getItem("userobj");
            this.user_id = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
            this.department = localStorage.getItem("departmentHeader");
            this.departmentString = this.department.replace(/["]+/g, '');
            this.currentUser = localStorage.getItem("LoggedInUserHeader");
            this.currentUserString = this.currentUser.replace(/["]+/g, '');

            if (this.currentUserString === 'null') {
              this.currentUserString = '';
            }

            this.getPendingForAuthData(); //  this.getAllUsers();

            this.getTransactionCodeSummary();
            this.initTheme(localStorage.getItem('SELECTED_THEME') || 'theme1');
            this.getProfileImage(this.user_id);
            this.getUser();
          }
        }, {
          key: "enablescreenPermissions",
          value: function enablescreenPermissions(inputValue) {
            var _this2 = this;

            var userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
            var permissionlist = []; // console.log(userPermissions,"UserPermission");

            if (userPermissions) {
              var labelsdata = userPermissions.labels;
              labelsdata.sort(function (a, b) {
                return a.labelId - b.labelId;
              });
              var screensdata = userPermissions.screenAndPermissionsDTO; // let viewindex = labelsdata.findIndex(function (item) { return item.labelName.toLowerCase() == 'view' });;
              //  console.log(viewindex,"ViewIndex");

              for (var i = 0; i < screensdata.length; i++) {
                var data = screensdata[i].permissions.toString(); // console.log(data,"Data");
                // console.log(data.charAt(viewindex),"DataIndex");

                for (var m = 0; m < labelsdata.length; m++) {
                  // console.log(m + " " + labelsdata[m].labelId + " " + labelsdata[m].labelName,"Index");
                  if (data.charAt(m) == 1 || data.charAt(m) == "1") {
                    // console.log("If condition");
                    permissionlist.push(screensdata[i].screenName);
                    break;
                  }
                }
              } //for loop endng

            } //if
            // console.log("methods are ", permissionlist);


            this.screenwisePermissions.next(permissionlist);
            this.screenwisePermissions.subscribe(function (message) {
              return _this2.screenpermissions = message;
            });
            console.log("screen permissions final", this.screenpermissions); // 

            var defaultOptions = ['Profile', 'Change Password', 'Logout'];
            this.screenpermissions = [].concat(defaultOptions, _toConsumableArray(this.screenpermissions.filter(function (permission) {
              return permission && permission.includes(inputValue);
            })));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this3 = this;

            this.api.fetchMedUser(JSON.parse(this.user1).userId).subscribe(function (response) {
              console.log(response);

              _this3.initTheme(response.screenThemeSelected);
            });
          }
        }, {
          key: "pendingRequestViewAll",
          value: function pendingRequestViewAll() {
            this.pendingReq = !this.pendingReq;
          }
        }, {
          key: "openPopUp",
          value: function openPopUp() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.ddTrigger', function (e) {
              jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
              jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('li').siblings().find('.ddParent').removeClass('actDD');
              jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('.ddParent').toggleClass('actDD');
              jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('actUnread');
            });
          } // onClickProfile(){
          //   this.router.navigate(['profile']);
          // }

        }, {
          key: "onClickProfile",
          value: function onClickProfile() {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: ' Do you want to view the profile? ',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'question'
            }).then(function (result) {
              if (result.isConfirmed == true) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");

                _this4.router.navigate(['profile']);
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(document).on("click", '.ddCloseTrigger', function (event) {
              var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent");

              if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
              }
            });
          }
        }, {
          key: "closeAll",
          value: function closeAll() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.ddCloseTrigger', function (e) {
              jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            });
          }
        }, {
          key: "initTheme",
          value: function initTheme(bgClass) {
            var lastBg = bgClass === "theme2" ? "theme2" : "theme1";
            jquery__WEBPACK_IMPORTED_MODULE_0__('body').removeClass(lastBg).addClass(bgClass);
            this.lastBg = bgClass;
            jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
            ;

            if (bgClass === "theme1") {
              console.log(jquery__WEBPACK_IMPORTED_MODULE_0__('#themeChangeRadio:nth-child(1)'));
              jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme1"]').addClass('active');
              jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme2"]').removeClass('active');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme1"]').removeClass('active');
              jquery__WEBPACK_IMPORTED_MODULE_0__('[data-id="theme2"]').addClass('active');
            }
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(value) {
            // 
            var lastBg = this.lastBg;
            jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.tColor', function (e) {
              //e.preventDefault();
              var bgClass = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data("id");
              jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active').parent().siblings().find('.tColor').removeClass('active');
              jquery__WEBPACK_IMPORTED_MODULE_0__('body').removeClass(lastBg).addClass(bgClass);
              localStorage.setItem('SELECTED_THEME', bgClass);
              lastBg = bgClass;
              jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
            });
            this.saveTheme(value);
          }
        }, {
          key: "saveTheme",
          value: function saveTheme(theme) {
            this.userApi.saveTheme(JSON.parse(this.user1).userId, theme).subscribe(function (resp) {
              console.log(resp);

              if (resp === 'Saved successfully') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: "Theme changed successfully",
                  icon: 'success'
                });
                window.location.reload();
              }
            }, function (error) {
              window.location.reload();

              if (error.error.text === 'Saved successfully') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: "Theme changed successfully",
                  icon: 'success'
                });
              }
            });
          }
        }, {
          key: "logOut",
          value: function logOut() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: 'You are trying to Logout. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'CANCEL',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              _this5.router.navigate(['session/login']);

              if (result.isConfirmed == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: "Logout Successfully",
                  icon: 'success'
                }).then(function (res) {
                  jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");

                  _this5.localStoreService.clear();

                  sessionStorage.clear();
                  localStorage.clear(); // this.router.navigate(['session/login']);

                  window.location.reload();
                });
              }
            }); // $(".ddParent").removeClass("actDD");
            // this.localStoreService.clear();
            // sessionStorage.clear();
            // localStorage.clear();
            // this.router.navigate(['session/login']);
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event) {
            var _this6 = this;

            console.log(event, "Event");

            if (event.target.files && event.target.files[0]) {
              this.profilePicture = event.target.files[0];
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                console.log("Profile Image Test:: ", reader.result);
                _this6.url = event.target.result;
                console.log(_this6.url, "URL");
              };
            }

            if (this.profilePicture) {
              console.log(this.profilePicture);
              var profileUpload = {};
              profileUpload.fileType = this.profilePicture.type;
              profileUpload.fileName = this.profilePicture.name;
              profileUpload.userId = this.user_id;
              console.log(profileUpload);
              var uploadData = new FormData();
              uploadData.append('data', JSON.stringify(profileUpload));
              uploadData.append('file', this.profilePicture);
              this.api.uploadDocument(uploadData).subscribe(function (response) {
                console.log(response);
              });
            }
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(user_id) {
            var _this7 = this;

            this.api.getCustomerDocuments(user_id).subscribe(function (data) {
              console.log("data ::", data);

              if (data) {
                _this7.profileId = data.id;
                _this7.url = data.fileUrl;
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            this.url = null;
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this8 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: 'Do you need to change the password? ',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'question'
            }).then(function (result) {
              if (result.isConfirmed == true) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");

                _this8.router.navigate(['change-password']);
              }
            });
          } //   $(".ddParent").removeClass("actDD");
          //   this.router.navigate(['change-password']);
          // }
          // getAllUsers() {
          //   this.api.getAllUsersListService().subscribe((resp:any) => {
          //       this.allUsersList = resp;
          //       for(let i = 0;i<=this.allUsersList.length;i++){
          //         if(this.allUsersList[i].verifiedStatus == 'U'){
          //         }
          //       }
          //     });
          // }

        }, {
          key: "getPendingForAuthData",
          value: function getPendingForAuthData() {
            var _this9 = this;

            this.api.getPendingForAuthDataFirstError(this.user).subscribe(function (resp) {
              // console.log(resp);
              _this9.pendingForAuthData = resp;
              console.log(_this9.pendingForAuthData);
            });
          }
        }, {
          key: "getTransactionCodeSummary",
          value: function getTransactionCodeSummary() {
            var _this10 = this;

            this.api.gettingTransactionCodeSummary().subscribe(function (resp) {
              var _a;

              _this10.transactionCodeData = resp.result;
              console.log(_this10.transactionCodeData, "Transaction Code Data");

              for (var i = 0; i <= _this10.transactionCodeData.length; i++) {
                // console.log("Looooppppp")
                if (((_a = _this10.transactionCodeData[i]) === null || _a === void 0 ? void 0 : _a.verifiedStatus) == 'U') {
                  // console.log("UnAUthorized");
                  _this10.unAUthorizedUsers.push(_this10.transactionCodeData[i]);
                } // console.log(this.unAUthorizedUsers);

              }
            }); // Observable
            //   .interval(2*60*1000)
            //   .timeInterval()
            //   .mergeMap(() => this.api.gettingTransactionCodeSummary()
            //   .subscribe(data => {
            //       console.log(data);
            //   }));
          }
        }, {
          key: "getNotifyCount",
          value: function getNotifyCount(i) {
            console.log(this.seenData);

            if (this.seenData != 0) {
              // console.log("Seen Data POP",i);
              // this.unAUthorizedUsers.removeAt(i);
              this.unAUthorizedUsers.splice(i, 1); // delete this.unAUthorizedUsers[i];
              // console.log(this.unAUthorizedUsers);
            }
          }
        }, {
          key: "getRecords",
          value: function getRecords(event, data, index) {
            var _this11 = this;

            var userID = data.userId;
            console.log(index, "Index");
            this.api.gettingTransactionDatabyID(data.userId).subscribe(function (trndataResp) {
              _this11.transactionDataResp = trndataResp;
              console.log("this.transactionDataResp", _this11.transactionDataResp); //  this.unAUthorizedUsers=this.unAUthorizedUsers.length-1;

              _this11.seenData.push(_this11.transactionDataResp); // console.log(this.seenData);


              if (_this11.seenData) {
                // console.log("Seen Data Present");
                _this11.getNotifyCount(index);
              }

              if (_this11.transactionDataResp) {
                _this11.api.setSummaryDataTransactionCode({
                  userID: data.userId,
                  creatorDtStamp: data.creatorDtStamp,
                  creatorId: data.creatorId,
                  modNo: data.modNo,
                  recordStatus: data.recordStatus,
                  verifiedStatus: data.verifiedStatus,
                  verifiedBy: data.verifiedBy,
                  verifiedOnce: data.verifiedOnce,
                  verifiedTime: data.verifiedTime,
                  formValues: _this11.transactionDataResp
                });

                _this11.router.navigate(["/system-param-maintenance/transaction-code-edit"]);
              }
            });
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UsersService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["npr-header"]],
        decls: 224,
        vars: 11,
        consts: [[1, "topBar"], [1, "row", "align-items-center"], [1, "col"], [1, "headerLeftCol"], [1, "row", "g-0", "align-items-center"], [1, "col-auto", 2, "display", "flex", "gap", "20px"], ["menuCollapse", "", 1, "navTrigger", 2, "cursor", "pointer"], [1, "tglLine", "tlTop"], [1, "tglLine", "tlCenter"], [1, "tglLine", "tlBtm"], [1, "ng-autocomplete"], ["placeholder", "search", "historyIdentifier", "screenpermissions", "id", "searchNavAutocomplete", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["src", "assets/images/customer-search.svg", "alt", "...", 1, "search_icon"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-auto"], [1, "headerRightOptions"], [1, "greet"], [1, "msgDDCol", "ddParent"], [1, "ddTrigger", "actUnread", 2, "cursor", "pointer", 3, "click"], [1, "ddTriggerContent"], ["src", "assets/images/msg-icon.svg", "alt", "..."], [1, "unreadIndicator"], [1, "ddContent"], [1, "ddHeader"], [1, "row"], [1, "xsTitle", "text-uppercase", "bold", "d-inline-block", "vAlignMdl"], [1, "ddCloseTrigger", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/close.svg", "alt", "..."], [1, "ddBody", "px-0"], ["data-mcs-theme", "dark", 1, "ddScroll", "mCustomScrollbar"], [1, "msgList"], [1, "fullLink"], [1, "msgUserImg"], ["src", "assets/images/user-img-03.png", "alt", "..."], [1, "msgContent"], [1, "msgContentTopCol"], [1, "dateTime"], [1, "dCol"], [1, "tCol"], [1, "text-truncate"], [1, "availableStatus", "online"], ["src", "assets/images/user-img-02.png", "alt", "..."], ["src", "assets/images/user-img-04.png", "alt", "..."], [1, "availableStatus"], [1, "viewAllLink"], ["src", "assets/images/bell-icon.svg", "alt", "...", 1, "marginRight"], [1, "notification-number", "mat-bg-warn"], [4, "ngFor", "ngForOf"], [1, "viewAll", 3, "click"], [1, "proDDCol", "ddStyle", "ddParent"], [1, "ddTrigger", 2, "cursor", "pointer", 3, "click"], [1, "userTrigger"], [1, "userImg"], ["src", "assets/images/user.png", "alt", "..."], [1, "d-none", "d-lg-inline-block", "userName", "text-truncate"], [1, "dropdownclass"], ["alt", "", 3, "src"], [1, "ddOptions"], [1, "themeColorsCol"], [1, "themeText"], ["id", "themeChangeRadio"], ["data-id", "theme1", 1, "tColor", "theme1", 3, "click"], ["data-id", "theme2", 1, "tColor", "theme2", 3, "click"], ["for", "fileInput", 1, "profileButton"], [1, "profileIcon"], ["aria-hidden", "true", 1, "fa", "fa-user-o"], [1, "ddIcon", 3, "click"], [1, "background"], [2, "cursor", "pointer", 3, "click"], [1, "ddIcon"], ["src", "assets/images/gear-icon.svg", "alt", "..."], [1, "ddLinkText"], ["src", "assets/images/logout-icon.svg", "alt", "...", 1, "ml-3"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [4, "ngIf"], [3, "routerLink", "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ng-autocomplete", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selected", function HeaderComponent_Template_ng_autocomplete_selected_11_listener($event) {
              return ctx.selectEvent($event);
            })("inputChanged", function HeaderComponent_Template_ng_autocomplete_inputChanged_11_listener($event) {
              return ctx.onChangeSearch($event);
            })("inputFocused", function HeaderComponent_Template_ng_autocomplete_inputFocused_11_listener($event) {
              return ctx.onFocused($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, HeaderComponent_ng_template_15_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_43_listener() {
              return ctx.closeAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Vasiliki Kalogeraki");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Hello! Good Morning");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](66, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](83, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](85, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "A. Mused");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96, "offline");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](100, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](115, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](117, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](119, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, "Vasiliki Kalogeraki");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Hello! Good Morning");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](134, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](136, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](147, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](148, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](149, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](152, "View All");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_155_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](157, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](160, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](166, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](167, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_168_listener() {
              return ctx.closeAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](169, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](173, HeaderComponent_li_173_Template, 2, 1, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "a", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_175_listener() {
              return ctx.pendingRequestViewAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](176);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_179_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](181, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](182, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](184);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](186, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "ul", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](193, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](194, " Themes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_196_listener() {
              return ctx.closeAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](197, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "ul", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_200_listener() {
              return ctx.changeTheme("theme1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_202_listener() {
              return ctx.changeTheme("theme2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](203, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "label", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](207, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](208, "\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](209, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_209_listener() {
              return ctx.onClickProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](210, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](211, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_213_listener() {
              return ctx.changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](215, "img", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](216, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](217, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](219, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_219_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](221, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](222, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](223, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.screenpermissions)("searchKeyword", ctx.keyword)("itemTemplate", _r0)("notFoundTemplate", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Department: ", ctx.departmentString, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Last logged in : ", ctx.currentUserString, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](131);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.unAUthorizedUsers.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.unAUthorizedUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.pendingReq ? "View Less" : "View All");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", "assets/images/caret-btm.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_8__.MenuCollapseDirective, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__.AutocompleteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
        styles: [".viewAll[_ngcontent-%COMP%] {\n  color: #1bcd9d;\n  font-weight: 600;\n  padding-right: 70px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\nprofileIcon[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 2px;\n}\n\n.profileButton[_ngcontent-%COMP%]:hover {\n  color: var(--primaryColor);\n}\n\n.profileLinkText[_ngcontent-%COMP%]:hover {\n  color: var(--primaryColor);\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  margin-left: 20px;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%] {\n  width: 210px;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%]   img.search_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  transform: translateY(-50%);\n  z-index: 4;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%]     .autocomplete-container   .input-container   input {\n  display: block;\n  padding-left: 32px;\n}\n\n  .theme2 .ng-autocomplete   .autocomplete-container   .input-container   input {\n  border: 1px solid #7b7b86 !important;\n}\n\n.marginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0UsMEJBQUE7QUFJRjs7QUFGQTtFQUNFLDBCQUFBO0FBS0Y7O0FBRkE7Ozs7O0VBS0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUlKOztBQURBO0VBU0Usb0NBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdBbGwge1xyXG4gIGNvbG9yOiAjMWJjZDlkO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1yaWdodDogNzBweDtcclxufVxyXG4jZmlsZUlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbnByb2ZpbGVJY29uIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogMnB4O1xyXG59XHJcbi5wcm9maWxlQnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxufVxyXG4ucHJvZmlsZUxpbmtUZXh0OmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxub3B0Z3JvdXAsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uZy1hdXRvY29tcGxldGUge1xyXG4gIHdpZHRoOiAyMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbWcuc2VhcmNoX2ljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5hdXRvY29tcGxldGUtY29udGFpbmVyIDo6bmctZGVlcCAuaW5wdXQtY29udGFpbmVyIDo6bmctZGVlcCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICB9XHJcbn1cclxuOjpuZy1kZWVwXHJcbiAgLnRoZW1lMlxyXG4gIC5uZy1hdXRvY29tcGxldGVcclxuICA6Om5nLWRlZXBcclxuICAuYXV0b2NvbXBsZXRlLWNvbnRhaW5lclxyXG4gIDo6bmctZGVlcFxyXG4gIC5pbnB1dC1jb250YWluZXJcclxuICA6Om5nLWRlZXBcclxuICBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I4NiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW5SaWdodCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    15070:
    /*!********************************************************!*\
      !*** ./src/@npr/components/layout/layout.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutComponent": function LayoutComponent() {
          return (
            /* binding */
            _LayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      99758);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../sidenav/sidenav.component */
      47200);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      69239);

      var _LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(cd, router, document) {
          _classCallCheck(this, LayoutComponent);

          this.cd = cd;
          this.router = router;
          this.document = document;
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            /**
             * Enable Scrolling to specific parts of the page using the Router
             */
            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Scroll;
            }), (0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(function (e) {});
          }
        }]);

        return LayoutComponent;
      }();

      _LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || _LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
      };

      _LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _LayoutComponent,
        selectors: [["npr-layout"]],
        decls: 6,
        vars: 0,
        consts: [[1, "pageContent"], [1, "pageContentMain"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "npr-sidenav");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "npr-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
        },
        directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      _LayoutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], _LayoutComponent);
      /***/
    },

    /***/
    51457:
    /*!*********************************************************!*\
      !*** ./src/@npr/components/shared-components.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedComponentsModule": function SharedComponentsModule() {
          return (
            /* binding */
            _SharedComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      97544);
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      42255);
      /* harmony import */


      var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-malihu-scrollbar */
      87210);
      /* harmony import */


      var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../directives/shared-directives.module */
      19836);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      69239);
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/layout.component */
      15070);
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      47200);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var components = [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent];

      var _SharedComponentsModule = /*#__PURE__*/_createClass(function _SharedComponentsModule() {
        _classCallCheck(this, _SharedComponentsModule);
      });

      _SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) {
        return new (t || _SharedComponentsModule)();
      };

      _SharedComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _SharedComponentsModule
      });
      _SharedComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutocompleteLibModule, ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_SharedComponentsModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutocompleteLibModule, ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarModule],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent]
        });
      })();
      /***/

    },

    /***/
    47200:
    /*!**********************************************************!*\
      !*** ./src/@npr/components/sidenav/sidenav.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidenavComponent": function SidenavComponent() {
          return (
            /* binding */
            _SidenavComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../utils/track-by */
      34770);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jquery */
      31600);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/layout.service */
      82119);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-malihu-scrollbar */
      87210);
      /* harmony import */


      var _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../directives/menu-collapse.directive */
      79511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../directives/dropdown.directive */
      43998);
      /* harmony import */


      var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../directives/dropdown-link.directive */
      97333);
      /* harmony import */


      var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directives/dropdown-anchor.directive */
      82459);

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function SidenavComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "System Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r1.handleActiveClass("roles") || ctx_r1.handleActiveClass("users") || ctx_r1.handleActiveClass("audit-logs") || ctx_r1.handleActiveClass("security-policy")));
        }
      }

      var _c1 = function _c1() {
        return ["/roles/list"];
      };

      var _c2 = function _c2(a0) {
        return {
          "iconActive": a0
        };
      };

      function SidenavComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Roles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r2.handleActiveClass("roles")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r2.handleActiveClass("roles")));
        }
      }

      var _c3 = function _c3() {
        return ["/users"];
      };

      function SidenavComponent_li_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r3.handleActiveClass("users")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r3.handleActiveClass("users")));
        }
      }

      var _c4 = function _c4() {
        return ["/audit-logs"];
      };

      function SidenavComponent_li_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Audit Logs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r4.handleActiveClass("audit-logs")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r4.handleActiveClass("audit-logs")));
        }
      }

      var _c5 = function _c5() {
        return ["/security-policy/summary"];
      };

      function SidenavComponent_li_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Security Policy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r5.handleActiveClass("security-policy")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r5.handleActiveClass("security-policy")));
        }
      }

      function SidenavComponent_a_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "System Parameter Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r6.handleActiveClass("authorize-cash-payment") || ctx_r6.handleActiveClass("transaction-code") || ctx_r6.handleActiveClass("global-acc-maintenance") || ctx_r6.handleActiveClass("user-gl-acc-maintenance") || ctx_r6.handleActiveClass("dept-id-maintenance") || ctx_r6.handleActiveClass("email-management") || ctx_r6.handleActiveClass("global-gl-edit") || ctx_r6.handleActiveClass("user-gl-edit") || ctx_r6.handleActiveClass("global-ac-edit") || ctx_r6.handleActiveClass("user-ac-edit")));
        }
      }

      var _c6 = "/system-param-maintenance/transaction-code-summary";

      var _c7 = function _c7() {
        return [_c6];
      };

      function SidenavComponent_li_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Transaction Code Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r7.handleActiveClass("transaction-code")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r7.handleActiveClass("transaction-code")));
        }
      }

      var _c8 = "/system-param-maintenance/global-acc-maintenance-summary";

      var _c9 = function _c9() {
        return [_c8];
      };

      function SidenavComponent_li_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Global Account Restriction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r8.handleActiveClass("global-acc-maintenance") || ctx_r8.handleActiveClass("global-gl-edit") || ctx_r8.handleActiveClass("global-ac-edit")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r8.handleActiveClass("global-acc-maintenance") || ctx_r8.handleActiveClass("global-gl-edit") || ctx_r8.handleActiveClass("global-ac-edit")));
        }
      }

      var _c10 = "/system-param-maintenance/user-gl-acc-maintenance-summary";

      var _c11 = function _c11() {
        return [_c10];
      };

      function SidenavComponent_li_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " User Account Restriction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r9.handleActiveClass("user-gl-acc-maintenance") || ctx_r9.handleActiveClass("user-gl-edit") || ctx_r9.handleActiveClass("user-ac-edit")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r9.handleActiveClass("user-gl-acc-maintenance") || ctx_r9.handleActiveClass("user-gl-edit") || ctx_r9.handleActiveClass("user-ac-edit")));
        }
      }

      var _c12 = "/system-param-maintenance/dept-id-maintenance-summary";

      var _c13 = function _c13() {
        return [_c12];
      };

      function SidenavComponent_li_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Department ID Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r10.handleActiveClass("dept-id-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r10.handleActiveClass("dept-id-maintenance")));
        }
      }

      var _c14 = function _c14() {
        return ["/email-management"];
      };

      function SidenavComponent_li_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Email-Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r11.handleActiveClass("email-management")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r11.handleActiveClass("email-management")));
        }
      }

      function SidenavComponent_a_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "System Interface");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r12.handleActiveClass("addSystem") || ctx_r12.handleActiveClass("rule-translation") || ctx_r12.handleActiveClass("createrule") || ctx_r12.handleActiveClass("rule-mapping")));
        }
      }

      var _c15 = function _c15() {
        return ["/addSystem/summary"];
      };

      function SidenavComponent_li_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Add System");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c15))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r13.handleActiveClass("addSystem")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r13.handleActiveClass("addSystem")));
        }
      }

      var _c16 = function _c16() {
        return ["/rule-translation/summary"];
      };

      function SidenavComponent_li_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Rule Translation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c16))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r14.handleActiveClass("rule-translation")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r14.handleActiveClass("rule-translation")));
        }
      }

      var _c17 = function _c17() {
        return ["/createrule/list"];
      };

      function SidenavComponent_li_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Create Rule ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c17))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r15.handleActiveClass("createrule")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r15.handleActiveClass("createrule")));
        }
      }

      var _c18 = function _c18() {
        return ["/rule-mapping/summary"];
      };

      function SidenavComponent_li_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Rule Mapping ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c18))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r16.handleActiveClass("rule-mapping")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r16.handleActiveClass("rule-mapping")));
        }
      }

      function SidenavComponent_a_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "File Upload Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r17.handleActiveClass("extSys") || ctx_r17.handleActiveClass("processCodeMapping") || ctx_r17.handleActiveClass("excel-mapping")));
        }
      }

      var _c19 = function _c19() {
        return ["/external-system/extSys-summary"];
      };

      function SidenavComponent_li_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "External System");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r18.handleActiveClass("extSys")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c19));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r18.handleActiveClass("extSys")));
        }
      }

      var _c20 = function _c20() {
        return ["/external-system/processCodeMapping"];
      };

      function SidenavComponent_li_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process Code Mapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r19.handleActiveClass("processCodeMapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r19.handleActiveClass("processCodeMapping")));
        }
      }

      var _c21 = function _c21() {
        return ["/excel-mapping"];
      };

      function SidenavComponent_li_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Template Mapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, ctx_r20.handleActiveClass("excel-mapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r20.handleActiveClass("excel-mapping")));
        }
      }

      function SidenavComponent_a_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "File upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r21.handleActiveClass("file-upload") || ctx_r21.handleActiveClass("authorize-modification") || ctx_r21.handleActiveClass("treasuryReference") || ctx_r21.handleActiveClass("process-monitoring")));
        }
      }

      var _c22 = function _c22() {
        return ["active"];
      };

      var _c23 = function _c23() {
        return ["/file-upload/upload-excel"];
      };

      function SidenavComponent_li_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Upload Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c22))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c23));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c2, ctx_r22.handleActiveClass("Upload Excel")));
        }
      }

      var _c24 = function _c24() {
        return ["/external-system/treasuryReference"];
      };

      function SidenavComponent_li_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Treasury Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c22))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r23.handleActiveClass("treasuryReference")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c24));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r23.handleActiveClass("treasuryReference")));
        }
      }

      var _c25 = function _c25() {
        return ["/file-upload/authorize_excel"];
      };

      function SidenavComponent_li_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Authorize Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c22))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r24.handleActiveClass("authorize_excel")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c25));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r24.handleActiveClass("authorize_excel")));
        }
      }

      var _c26 = function _c26() {
        return ["/file-upload/rejection_queue"];
      };

      function SidenavComponent_li_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Rejection Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c22))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r25.handleActiveClass("rejection_queue")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c26));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r25.handleActiveClass("rejection_queue")));
        }
      }

      var _c27 = function _c27() {
        return ["/authorize-modification"];
      };

      function SidenavComponent_li_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Authorize Modification");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c22))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r26.handleActiveClass("authorize-modification")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c27));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r26.handleActiveClass("authorize-modification")));
        }
      }

      var _c28 = function _c28() {
        return ["/process-monitoring"];
      };

      function SidenavComponent_li_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process Monitoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c22))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r27.handleActiveClass("process-monitoring")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c28));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, ctx_r27.handleActiveClass("process-monitoring")));
        }
      }

      function SidenavComponent_a_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Blocking");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r28.handleActiveClass("accountBlock") || ctx_r28.handleActiveClass("amountBlock")));
        }
      }

      var _c29 = function _c29() {
        return ["/customer-search"];
      };

      function SidenavComponent_li_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_li_68_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r36.FunctionAccountBlock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Account Block ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c29))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r29.handleActiveClass("customer-search")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r29.handleActiveClass("customer-search")));
        }
      }

      var _c30 = function _c30() {
        return ["/amount-block"];
      };

      function SidenavComponent_li_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_li_69_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r38.FunctionAmountBlock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Amount Block ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c30))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r30.handleActiveClass("amount-block")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r30.handleActiveClass("amount-block")));
        }
      }

      function SidenavComponent_a_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Account Closure");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r31.handleActiveClass("initiate-account-closure") || ctx_r31.handleActiveClass("process-account-closure") || ctx_r31.handleActiveClass("account-closure-maintenance") || ctx_r31.handleActiveClass("charge-maintainence")));
        }
      }

      var _c31 = function _c31() {
        return ["/initiate-account-closure"];
      };

      function SidenavComponent_li_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Initiate Account Closure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c31))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r32.handleActiveClass("initiate-account-closure")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r32.handleActiveClass("initiate-account-closure")));
        }
      }

      var _c32 = function _c32() {
        return ["/process-account-closure"];
      };

      function SidenavComponent_li_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Process Account Closure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c32))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r33.handleActiveClass("process-account-closure")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r33.handleActiveClass("process-account-closure")));
        }
      }

      var _c33 = "/account-closure-maintenance/account-closure-summary";

      var _c34 = function _c34() {
        return [_c33];
      };

      function SidenavComponent_li_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Account Closure Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c34))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r34.handleActiveClass("account-closure-maintenance")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r34.handleActiveClass("account-closure-maintenance")));
        }
      }

      var _c35 = function _c35() {
        return ["/charge-maintainence"];
      };

      function SidenavComponent_li_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Charge Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c35))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r35.handleActiveClass("charge-maintainence")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r35.handleActiveClass("charge-maintainence")));
        }
      }

      var _c36 = function _c36() {
        return ["/dashboard"];
      };

      var _c37 = function _c37() {
        return ["/incoming"];
      };

      var _c38 = function _c38() {
        return ["/outgoing"];
      };

      var _SidenavComponent = /*#__PURE__*/function () {
        function _SidenavComponent(layoutService, roleService, location, mScrollbarService, cdr, el, renderer) {
          _classCallCheck(this, _SidenavComponent);

          this.layoutService = layoutService;
          this.roleService = roleService;
          this.location = location;
          this.mScrollbarService = mScrollbarService;
          this.cdr = cdr;
          this.el = el;
          this.renderer = renderer;
          this.scrollbarOptions = {
            axis: "y",
            theme: "minimal-dark"
          };
          this.newRoleScreenPerm = [""];
          this.screendata = [""];
          this.screenpermissions = [];
          this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
          this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
        }

        _createClass(_SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.EnablescreenPermissions();
            setTimeout(function () {
              var resizeObserver = new ResizeObserver(function (entries) {
                _this12.sidebarHeight = entries[0].target.clientHeight;

                var hideScrollbar = _this12.shouldHideSideScroll();

                if (_this12.isScrollbarHidden === hideScrollbar) return;
                _this12.isScrollbarHidden = hideScrollbar;

                _this12.toggleSideScrollbar(_this12.shouldHideSideScroll());
              });
              resizeObserver.observe(document.getElementById("mCSB_2_container"));
              window.addEventListener("resize", function () {
                var hideScrollbar = _this12.shouldHideSideScroll();

                if (_this12.isScrollbarHidden === hideScrollbar) return;
                _this12.isScrollbarHidden = hideScrollbar;

                _this12.toggleSideScrollbar(_this12.shouldHideSideScroll());
              });
            }, 500); // this.getRoleScreen();
            // start observing a DOM node
            // this.roleName = sessionStorage.getItem('user_role');
            // this.screenpermission = localStorage.getItem('userPermissions');
            // this.screenwisePermissions.subscribe(message => this.screenpermissions = message);
            // this.getRoleScreen();
            // this.roleName = sessionStorage.getItem('user_role');
            // this.screenpermission = localStorage.getItem('userPermissions');

            this.layoutService.share.subscribe(function (val) {
              if (val) {
                _this12.lastValue = val;
              }
            });
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.mScrollbarService.initScrollbar("#sideMenu", {
              axis: "y",
              theme: "inset-3",
              scrollButtons: {
                enable: false
              },
              scrollbarPosition: "outside",
              autoHideScrollbar: true,
              alwaysShowScrollbar: 2,
              setHeight: 900
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.mScrollbarService.initScrollbar("#sideMenu", {
              axis: "y",
              theme: "inset-3",
              scrollButtons: {
                enable: false
              },
              scrollbarPosition: "outside",
              autoHideScrollbar: true,
              alwaysShowScrollbar: 2,
              setHeight: 900
            });
          }
        }, {
          key: "getRoleScreen",
          value: function getRoleScreen() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this13 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.roleService.fetchScreenData().subscribe(function (data) {
                      _this13.screendata = data;

                      _this13.screendata.push("amount block"); // console.log(data);
                      // console.log(this.screendata);


                      _this13.screendata.forEach(function (element) {
                        //admin
                        if (element === "Dashboard") {
                          //  const rolescreen = true;
                          _this13.dashboardscreen = true; // console.log('rolescreen', rolescreen)
                        }

                        if (element === "Roles") {
                          //  const rolescreen = true;
                          _this13.rolescreen = true; // console.log('rolescreen', rolescreen)
                        }

                        if (element == "Users") {
                          _this13.userScreen = true;
                        }

                        if (element === "Audit Logs") {
                          _this13.auditScreen = true;
                        }

                        if (element === "Password Policy") {
                          _this13.passPolicy = true;
                        }

                        if (element === "GlobalCodeMaintenance") {
                          _this13.gcode = true;
                        }

                        if (element === "UserCodeMaintenance") {
                          _this13.ucode = true;
                        }

                        if (element === "Department Id Maintenance") {
                          _this13.deptcodeMaint = true;
                        }

                        if (element === "Transaction Code Maint") {
                          _this13.trncodeMaint = true;
                        }

                        if (element === "AcumenJournal") {
                          _this13.acumenjournal = true;
                        }

                        if (element === "Process Monitoring") {
                          _this13.processMonitor = true;
                        }

                        if (element === "External Systems") {
                          _this13.extSystem = true;
                        }

                        if (element === "Process Code Mapping") {
                          _this13.processCodeMapping = true;
                        }

                        if (element === "Excel Mapping") {
                          _this13.excelMapping = true;
                        }

                        if (element === "Upload Excel") {
                          _this13.uploadExcel = true;
                        }

                        if (element === "Process Excel") {
                          _this13.processExcel = true;
                        }

                        if (element === "Modify Excel") {
                          _this13.modifyExcel = true;
                        }

                        if (element === "Authorize Modifications") {
                          _this13.authModification = true;
                        }

                        if (element === 'Amount Block') {
                          _this13.amountBlock = true;
                        }

                        if (element === 'Account Block') {
                          _this13.accountBlock = true;
                        } //code maintenance


                        if (element === "Email-Management") {
                          _this13.emailManagement = true;
                        } //account closer


                        if (element === "Initiate Account Closure") {
                          _this13.initialAccountCloser = true;
                        }

                        if (element === "Process Account Closure") {
                          _this13.ProcessAccountCloser = true;
                        }

                        if (element === "Acc Closure Maintenance") {
                          _this13.acClosermaint = true;
                        }

                        if (element === "Charge Maintenance") {
                          _this13.chargeMaintenance = true;
                        }
                      });

                      _this13.cdr.markForCheck();
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.layoutService.collapseOpenSidenav();
          }
        }, {
          key: "EnablescreenPermissions",
          value: function EnablescreenPermissions() {
            var _this14 = this;

            var userPermissions = JSON.parse(localStorage.getItem("userPermissions"));
            var permissionlist = [];
            console.log(userPermissions, "UserPermission");

            if (userPermissions) {
              var labelsdata = userPermissions.labels;
              labelsdata.sort(function (a, b) {
                return a.labelId - b.labelId;
              });
              var screensdata = userPermissions.screenAndPermissionsDTO; // let viewindex = labelsdata.findIndex(function (item) { return item.labelName.toLowerCase() == 'view' });;
              //  console.log(viewindex,"ViewIndex");

              for (var i = 0; i < screensdata.length; i++) {
                var data = screensdata[i].permissions.toString(); // console.log(data,"Data");
                // console.log(data.charAt(viewindex),"DataIndex");

                for (var m = 0; m < labelsdata.length; m++) {
                  // console.log(m + " " + labelsdata[m].labelId + " " + labelsdata[m].labelName,"Index");
                  if (data.charAt(m) == 1 || data.charAt(m) == "1") {
                    // console.log("If condition");
                    permissionlist.push(screensdata[i].screenName);
                    break;
                  }
                }
              } //for loop endng

            } //if
            // console.log("methods are ", permissionlist);


            this.screenwisePermissions.next(permissionlist);
            this.screenwisePermissions.subscribe(function (message) {
              return _this14.screenpermissions = message;
            });
            this.screenpermissions.push("Amount Block");
            console.log("screen permissions final", this.screenpermissions);
            sessionStorage.setItem("roleScreenPermission", this.screenpermissions);
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.layoutService.collapseCloseSidenav();
          }
        }, {
          key: "handleActiveClass",
          value: function handleActiveClass(item) {
            var relativePath = this.location.path(); // console.log(relativePath);

            return relativePath.includes(item);
          }
        }, {
          key: "FunctionAccountBlock",
          value: function FunctionAccountBlock() {
            localStorage.setItem("link", "Account_Block");
          }
        }, {
          key: "FunctionAmountBlock",
          value: function FunctionAmountBlock() {
            localStorage.setItem("link", "Amount_Block");
          }
        }, {
          key: "incoming",
          value: function incoming() {
            localStorage.setItem("link", "incoming");
          }
        }, {
          key: "outgoing",
          value: function outgoing() {
            localStorage.setItem("link", "outgoing");
          }
        }, {
          key: "shouldHideSideScroll",
          value: function shouldHideSideScroll() {
            return window.innerHeight > 512 && this.sidebarHeight < 512;
          }
        }, {
          key: "toggleSideScrollbar",
          value: function toggleSideScrollbar(shouldHide) {
            try {
              console.log("shouldhide = ".concat(shouldHide));
              document.getElementsByClassName("mCSB_draggerContainer")[0].style.display = shouldHide ? "none" : "block";
            } catch (error) {}
          }
        }, {
          key: "toggleNav",
          value: function toggleNav() {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this.lastValue).find("ul.subMenuCol").slideUp();
            var el = this.el.nativeElement.querySelector(".activeSMenu");

            if (el) {
              this.renderer.removeClass(el, "activeSMenu");
            }
          }
        }, {
          key: "toggle",
          value: function toggle() {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents(".sMenuLink").siblings().removeClass("activeSMenu");
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents(".sMenuLink").siblings().find("ul.subMenuCol").slideUp();
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents(".sMenuLink").toggleClass("activeSMenu");
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents(".sMenuLink").find("ul.subMenuCol").slideToggle();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// this.mScrollbarService.destroy('#sideMenu');
          }
        }]);

        return _SidenavComponent;
      }();

      _SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || _SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_12__.MalihuScrollbarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2));
      };

      _SidenavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _SidenavComponent,
        selectors: [["npr-sidenav"]],
        hostBindings: function SidenavComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
          }
        },
        decls: 78,
        vars: 52,
        consts: [["malihu-scrollbar", ""], ["sideMenu", ""], ["menuCollapse", "", 1, "navOverlay"], [1, "sidebarCol"], [1, "sidebarLogo"], [3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo", 2, "max-width", "200px"], [1, "sidebarNavCol", "mCustomScrollbar"], ["appDropdown", "", 1, "sidebarNav"], ["routerLinkActive", "open", 1, "navItem", 3, "click"], [1, "navLink", 3, "routerLink", "ngClass"], [1, "navIcon"], ["src", "assets/images/home.svg", "alt", "..."], [1, "navText"], ["appDropdownLink", "", "routerLinkActive", "open", 1, "navItem", "sMenuLink"], ["appDropdownToggle", "", "class", "navLink", 3, "ngClass", 4, "ngIf"], [1, "submenuColMain"], ["appDropdown", "", 1, "subMenuCol"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngIf"], ["appDropdownLink", "", "routerLinkActive", "open"], [1, "subMenuLink", 3, "routerLink", "ngClass", "click"], ["appDropdownToggle", "", 1, "navLink", 3, "ngClass"], ["src", "assets/images/security.svg", "alt", "..."], [1, "subMenuLink", 3, "routerLink", "ngClass"], [1, "customListIcon", "roleIcon", 3, "ngClass"], [1, "customListIcon", "userIcon", 3, "ngClass"], [1, "customListIcon", "auditIcon", 3, "ngClass"], [1, "customListIcon", "securityIcon", 3, "ngClass"], ["src", "assets/images/transaction.svg", "alt", "..."], [1, "subMenuLink", 3, "ngClass", "routerLink"], [1, "customListIcon", "transactionIcon", 3, "ngClass"], [1, "customListIcon", "globalIcon", 3, "ngClass"], [1, "customListIcon", "userGlIcon", 3, "ngClass"], [1, "customListIcon", "departmentIcon", 3, "ngClass"], [1, "customListIcon", "emailIcon", 3, "ngClass"], ["src", "assets/images/add-system.svg", "alt", "..."], [1, "customListIcon", "addSysIcon", 3, "ngClass"], [1, "customListIcon", "translationIcon", 3, "ngClass"], [1, "customListIcon", "ruleIcon", 3, "ngClass"], [1, "customListIcon", "mappingIcon", 3, "ngClass"], ["src", "assets/images/external-system.svg", "alt", "..."], [1, "customListIcon", "externalSystemIcon", 3, "ngClass"], [1, "customListIcon", "processCodeMappingIcon", 3, "ngClass"], [1, "customListIcon", "templateMappingIcon", 3, "ngClass"], ["src", "assets/images/upload-excel.svg", "alt", "..."], [1, "subMenuLink", 3, "routerLinkActive", "routerLink"], [1, "customListIcon", "uploadIcon", 3, "ngClass"], [1, "subMenuLink", 3, "routerLinkActive", "ngClass", "routerLink"], [1, "customListIcon", "tresuryIcon", 3, "ngClass"], [1, "customListIcon", "authorizeIcon", 3, "ngClass"], [1, "customListIcon", "rejectionIcon", 3, "ngClass"], [1, "customListIcon", "authorizeModificationIcon", 3, "ngClass"], [1, "customListIcon", "processMonitoringIcon", 3, "ngClass"], ["src", "assets/images/cash-stack.svg", "alt", "..."], [1, "customListIcon", "customerSearchIcon", 3, "ngClass"], ["src", "assets/images/inititate-account.svg", "alt", "..."], [1, "customListIcon", "initiateIcon", 3, "ngClass"], [1, "customListIcon", "processAccountClosureIcon", 3, "ngClass"], [1, "customListIcon", "accountClosureIcon", 3, "ngClass"], [1, "customListIcon", "chargeIcon", 3, "ngClass"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_10_listener() {
              return ctx.toggleNav();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SidenavComponent_a_17_Template, 5, 3, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SidenavComponent_li_20_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SidenavComponent_li_21_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, SidenavComponent_li_22_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, SidenavComponent_li_23_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, SidenavComponent_a_25_Template, 5, 3, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SidenavComponent_li_28_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SidenavComponent_li_29_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, SidenavComponent_li_30_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SidenavComponent_li_31_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SidenavComponent_li_32_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, SidenavComponent_a_34_Template, 5, 3, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, SidenavComponent_li_37_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SidenavComponent_li_38_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, SidenavComponent_li_39_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, SidenavComponent_li_40_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_42_listener() {
              return ctx.incoming();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, " Incoming ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_45_listener() {
              return ctx.outgoing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " Outgoing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, SidenavComponent_a_48_Template, 5, 3, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, SidenavComponent_li_51_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, SidenavComponent_li_52_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, SidenavComponent_li_53_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, SidenavComponent_a_55_Template, 5, 3, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, SidenavComponent_li_58_Template, 4, 7, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, SidenavComponent_li_59_Template, 4, 10, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, SidenavComponent_li_60_Template, 4, 10, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, SidenavComponent_li_61_Template, 4, 10, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, SidenavComponent_li_62_Template, 4, 10, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, SidenavComponent_li_63_Template, 4, 10, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, SidenavComponent_a_65_Template, 5, 3, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, SidenavComponent_li_68_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, SidenavComponent_li_69_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, SidenavComponent_a_71_Template, 5, 3, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, SidenavComponent_li_74_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, SidenavComponent_li_75_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, SidenavComponent_li_76_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, SidenavComponent_li_77_Template, 4, 8, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](42, _c36));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](43, _c36))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](44, _c0, ctx.handleActiveClass("dashboard")));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Roles") > -1 || ctx.screenpermissions.indexOf("Users") > -1 || ctx.screenpermissions.indexOf("Audit Logs") > -1 || ctx.screenpermissions.indexOf("Security Policy") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Roles") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Users") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Audit Logs") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Security Policy") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Cash Payments") > -1 || ctx.screenpermissions.indexOf("Transaction Code Maintenance") > -1 || ctx.screenpermissions.indexOf("Global Account Restriction") > -1 || ctx.screenpermissions.indexOf("User Account Restriction") > -1 || ctx.screenpermissions.indexOf("Department ID Maintenance") > -1 || ctx.screenpermissions.indexOf("Email-Management") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Transaction Code Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Global Account Restriction") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("User Account Restriction") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Department ID Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Email-Management") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Add System") > -1 || ctx.screenpermissions.indexOf("Rule translation") > -1 || ctx.screenpermissions.indexOf("Create Rule") > -1 || ctx.screenpermissions.indexOf("Rule Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Add System") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Rule translation") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Create Rule") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Rule Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](46, _c37))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](47, _c0, ctx.handleActiveClass("incoming")));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](49, _c38))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](50, _c0, ctx.handleActiveClass("outgoing")));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("External System") > -1 || ctx.screenpermissions.indexOf("Process Code Mapping") > -1 || ctx.screenpermissions.indexOf("Template Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("External System") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Code Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Template Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Upload Excel") > -1 || ctx.screenpermissions.indexOf("Treasury Reference") > -1 || ctx.screenpermissions.indexOf("Authorize Excel") > -1 || ctx.screenpermissions.indexOf("Rejection Queue") > -1 || ctx.screenpermissions.indexOf("Authorize Modification") > -1 || ctx.screenpermissions.indexOf("Process Monitoring") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Upload Excel") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Treasury Reference") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Excel") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Rejection Queue") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Modification") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Monitoring") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Account Block") > -1 || ctx.screenpermissions.indexOf("Amount Block") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Account Block") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Amount Block") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Initiate Account Closure") > -1 || ctx.screenpermissions.indexOf("Process Account Closure") > -1 || ctx.screenpermissions.indexOf("Account Closure Maintenance") > -1 || ctx.screenpermissions.indexOf("Charge Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Initiate Account Closure") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Account Closure") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Account Closure Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Charge Maintenance") > -1);
          }
        },
        directives: [ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_12__.MalihuScrollbarDirective, _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_4__.MenuCollapseDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__.AppDropdownDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownLinkDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_7__.DropdownAnchorDirective],
        styles: ["a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)("slideInOut", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(":enter", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: "translateY(-100%)"
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("200ms ease-in", (0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: "translateY(0%)"
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(":leave", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("200ms ease-in", (0, _angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: "translateY(-100%)"
          }))])])]
        }
      });
      /***/
    },

    /***/
    82459:
    /*!**********************************************************!*\
      !*** ./src/@npr/directives/dropdown-anchor.directive.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropdownAnchorDirective": function DropdownAnchorDirective() {
          return (
            /* binding */
            _DropdownAnchorDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dropdown-link.directive */
      97333);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DropdownAnchorDirective = /*#__PURE__*/function () {
        function _DropdownAnchorDirective(navlink, el, renderer) {
          _classCallCheck(this, _DropdownAnchorDirective);

          this.el = el;
          this.renderer = renderer;
          this.navlink = navlink;
        }

        _createClass(_DropdownAnchorDirective, [{
          key: "onClick",
          value: function onClick(e) {
            this.navlink.toggle();
          }
        }]);

        return _DropdownAnchorDirective;
      }();

      _DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) {
        return new (t || _DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownLinkDirective), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
      };

      _DropdownAnchorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _DropdownAnchorDirective,
        selectors: [["", "appDropdownToggle", ""]],
        hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    97333:
    /*!********************************************************!*\
      !*** ./src/@npr/directives/dropdown-link.directive.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropdownLinkDirective": function DropdownLinkDirective() {
          return (
            /* binding */
            _DropdownLinkDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      31600);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dropdown.directive */
      43998);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/layout.service */
      82119);

      var _DropdownLinkDirective = /*#__PURE__*/function () {
        function _DropdownLinkDirective(nav, el, renderer, layoutService) {
          _classCallCheck(this, _DropdownLinkDirective);

          this.el = el;
          this.renderer = renderer;
          this.layoutService = layoutService;
          this.nav = nav;
        }

        _createClass(_DropdownLinkDirective, [{
          key: "open",
          get: function get() {
            return this._open;
          },
          set: function set(value) {
            this._open = value;
            var hostElem = this.el.nativeElement;

            if (value) {
              this.nav.closeOtherLinks(this);
              jquery__WEBPACK_IMPORTED_MODULE_0__(hostElem).find('ul.subMenuCol').slideDown();
            }

            var part = this.el.nativeElement.querySelector('ul.subMenuCol');
            this.renderer.setStyle(part, 'display', 'none');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav.addLink(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.nav.removeGroup(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.open = !this.open;
            var part = this.el.nativeElement.querySelector('ul.subMenuCol');
            this.layoutService.content.next(this.el.nativeElement);
            var hostElem = this.el.nativeElement;

            if (this.open) {
              this.renderer.setStyle(part, 'display', 'block');
              jquery__WEBPACK_IMPORTED_MODULE_0__(hostElem).find('ul.subMenuCol').slideDown();
            } else {
              this.renderer.setStyle(part, 'display', 'none');
              jquery__WEBPACK_IMPORTED_MODULE_0__(hostElem).find('ul.subMenuCol').slideUp();
            }
          }
        }]);

        return _DropdownLinkDirective;
      }();

      _DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) {
        return new (t || _DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.AppDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService));
      };

      _DropdownLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _DropdownLinkDirective,
        selectors: [["", "appDropdownLink", ""]],
        hostVars: 2,
        hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("activeSMenu", ctx.open);
          }
        },
        inputs: {
          group: "group",
          open: "open"
        }
      });
      /***/
    },

    /***/
    43998:
    /*!***************************************************!*\
      !*** ./src/@npr/directives/dropdown.directive.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppDropdownDirective": function AppDropdownDirective() {
          return (
            /* binding */
            _AppDropdownDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppDropdownDirective = /*#__PURE__*/function () {
        function _AppDropdownDirective(router, el, renderer) {
          _classCallCheck(this, _AppDropdownDirective);

          this.router = router;
          this.el = el;
          this.renderer = renderer;
          this.navlinks = [];
        }

        _createClass(_AppDropdownDirective, [{
          key: "closeOtherLinks",
          value: function closeOtherLinks(openLink) {
            this.navlinks.forEach(function (link) {
              if (link !== openLink) {
                link.open = false;
              }
            });
          }
        }, {
          key: "addLink",
          value: function addLink(link) {
            this.navlinks.push(link);
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(link) {
            var index = this.navlinks.indexOf(link);

            if (index !== -1) {
              this.navlinks.splice(index, 1);
            }
          }
        }, {
          key: "getUrl",
          value: function getUrl() {
            return this.router.url;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this._router = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd;
            })).subscribe(function (event) {
              _this15.navlinks.forEach(function (link) {
                if (link.group) {
                  var routeUrl = _this15.getUrl();

                  var currentUrl = routeUrl.split('/');

                  if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;

                    _this15.closeOtherLinks(link);
                  }
                }
              });
            });
          }
        }]);

        return _AppDropdownDirective;
      }();

      _AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) {
        return new (t || _AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
      };

      _AppDropdownDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _AppDropdownDirective,
        selectors: [["", "appDropdown", ""]]
      });
      /***/
    },

    /***/
    79511:
    /*!********************************************************!*\
      !*** ./src/@npr/directives/menu-collapse.directive.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuCollapseDirective": function MenuCollapseDirective() {
          return (
            /* binding */
            _MenuCollapseDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MenuCollapseDirective = /*#__PURE__*/function () {
        function _MenuCollapseDirective(document) {
          _classCallCheck(this, _MenuCollapseDirective);

          this.document = document;
          this.expanded = false;
        }

        _createClass(_MenuCollapseDirective, [{
          key: "onClick",
          value: function onClick(e) {
            this.toggleCollapse();
          }
        }, {
          key: "toggleCollapse",
          value: function toggleCollapse() {
            this.expanded = !this.expanded;

            if (this.expanded) {
              this.document.body.classList.add('activeNav');
            } else {
              this.document.body.classList.remove('activeNav');
            }
          }
        }]);

        return _MenuCollapseDirective;
      }();

      _MenuCollapseDirective.ɵfac = function MenuCollapseDirective_Factory(t) {
        return new (t || _MenuCollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _MenuCollapseDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MenuCollapseDirective,
        selectors: [["", "menuCollapse", ""]],
        hostBindings: function MenuCollapseDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCollapseDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    19836:
    /*!*********************************************************!*\
      !*** ./src/@npr/directives/shared-directives.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedDirectivesModule": function SharedDirectivesModule() {
          return (
            /* binding */
            _SharedDirectivesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-collapse.directive */
      79511);
      /* harmony import */


      var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dropdown-anchor.directive */
      82459);
      /* harmony import */


      var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dropdown-link.directive */
      97333);
      /* harmony import */


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dropdown.directive */
      43998);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var directives = [_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.MenuCollapseDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective];

      var _SharedDirectivesModule = /*#__PURE__*/_createClass(function _SharedDirectivesModule() {
        _classCallCheck(this, _SharedDirectivesModule);
      });

      _SharedDirectivesModule.ɵfac = function SharedDirectivesModule_Factory(t) {
        return new (t || _SharedDirectivesModule)();
      };

      _SharedDirectivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _SharedDirectivesModule
      });
      _SharedDirectivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_SharedDirectivesModule, {
          declarations: [_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.MenuCollapseDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
          exports: [_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.MenuCollapseDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective]
        });
      })();
      /***/

    },

    /***/
    55114:
    /*!********************************!*\
      !*** ./src/@npr/npr.module.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NprModule": function NprModule() {
          return (
            /* binding */
            _NprModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/shared-components.module */
      51457);
      /* harmony import */


      var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./directives/shared-directives.module */
      19836);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NprModule = /*#__PURE__*/_createClass(function _NprModule() {
        _classCallCheck(this, _NprModule);
      });

      _NprModule.ɵfac = function NprModule_Factory(t) {
        return new (t || _NprModule)();
      };

      _NprModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _NprModule
      });
      _NprModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_NprModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule],
          exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule]
        });
      })();
      /***/

    },

    /***/
    82119:
    /*!*********************************************!*\
      !*** ./src/@npr/services/layout.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutService": function LayoutService() {
          return (
            /* binding */
            _LayoutService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/layout */
      66883);

      var _LayoutService = /*#__PURE__*/function () {
        function _LayoutService(router, breakpointObserver) {
          var _this16 = this;

          _classCallCheck(this, _LayoutService);

          this.router = router;
          this.breakpointObserver = breakpointObserver;
          this.content = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.share = this.content.asObservable();
          this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
          this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
          this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
          this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
          this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
          this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.searchOpen$ = this._searchOpen.asObservable();
          this.isDesktop$ = this.breakpointObserver.observe("(min-width: 1280px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (state) {
            return state.matches;
          }));
          this.ltLg$ = this.breakpointObserver.observe("(max-width: 1279px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (state) {
            return state.matches;
          }));
          this.gtMd$ = this.breakpointObserver.observe("(min-width: 960px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (state) {
            return state.matches;
          }));
          this.ltMd$ = this.breakpointObserver.observe("(max-width: 959px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (state) {
            return state.matches;
          }));
          this.gtSm$ = this.breakpointObserver.observe("(min-width: 600px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (state) {
            return state.matches;
          }));
          this.isMobile$ = this.breakpointObserver.observe("(max-width: 599px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (state) {
            return state.matches;
          }));

          this.isLtLg = function () {
            return _this16.breakpointObserver.isMatched("(max-width: 1279px)");
          };

          this.isMobile = function () {
            return _this16.breakpointObserver.isMatched("(max-width: 599px)");
          };
        }

        _createClass(_LayoutService, [{
          key: "openQuickpanel",
          value: function openQuickpanel() {
            this._quickpanelOpenSubject.next(true);
          }
        }, {
          key: "closeQuickpanel",
          value: function closeQuickpanel() {
            this._quickpanelOpenSubject.next(false);
          }
        }, {
          key: "openSidenav",
          value: function openSidenav() {
            this._sidenavOpenSubject.next(true);
          }
        }, {
          key: "closeSidenav",
          value: function closeSidenav() {
            this._sidenavOpenSubject.next(false);
          }
        }, {
          key: "collapseSidenav",
          value: function collapseSidenav() {
            this._sidenavCollapsedSubject.next(true);
          }
        }, {
          key: "expandSidenav",
          value: function expandSidenav() {
            this._sidenavCollapsedSubject.next(false);
          }
        }, {
          key: "collapseOpenSidenav",
          value: function collapseOpenSidenav() {
            this._sidenavCollapsedOpenSubject.next(true);
          }
        }, {
          key: "collapseCloseSidenav",
          value: function collapseCloseSidenav() {
            this._sidenavCollapsedOpenSubject.next(false);
          }
        }, {
          key: "openConfigpanel",
          value: function openConfigpanel() {
            this._configpanelOpenSubject.next(true);
          }
        }, {
          key: "closeConfigpanel",
          value: function closeConfigpanel() {
            this._configpanelOpenSubject.next(false);
          }
        }, {
          key: "openSearch",
          value: function openSearch() {
            this._searchOpen.next(true);
          }
        }, {
          key: "closeSearch",
          value: function closeSearch() {
            this._searchOpen.next(false);
          }
        }, {
          key: "enableRTL",
          value: function enableRTL() {
            this.router.navigate([], {
              queryParams: {
                rtl: 'true'
              }
            });
          }
        }, {
          key: "disableRTL",
          value: function disableRTL() {
            this.router.navigate([], {
              queryParams: {
                rtl: 'false'
              }
            });
          }
        }]);

        return _LayoutService;
      }();

      _LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || _LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver));
      };

      _LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _LayoutService,
        factory: _LayoutService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    34770:
    /*!************************************!*\
      !*** ./src/@npr/utils/track-by.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "trackByRoute": function trackByRoute() {
          return (
            /* binding */
            _trackByRoute
          );
        },

        /* harmony export */
        "trackById": function trackById() {
          return (
            /* binding */
            _trackById
          );
        },

        /* harmony export */
        "trackByKey": function trackByKey() {
          return (
            /* binding */
            _trackByKey
          );
        },

        /* harmony export */
        "trackByValue": function trackByValue() {
          return (
            /* binding */
            _trackByValue
          );
        },

        /* harmony export */
        "trackByLabel": function trackByLabel() {
          return (
            /* binding */
            _trackByLabel
          );
        }
        /* harmony export */

      });

      function _trackByRoute(index, item) {
        return item.route;
      }

      function _trackById(index, item) {
        return item.id;
      }

      function _trackByKey(index, item) {
        return item.key;
      }

      function _trackByValue(index, value) {
        return value;
      }

      function _trackByLabel(index, value) {
        return value.label;
      }
      /***/

    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_npr_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/@npr/components/layout/layout.component */
      15070);
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      87618);
      /* harmony import */


      var _shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        redirectTo: "session/login",
        pathMatch: "full"
      }, {
        path: "session",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_mjs"), __webpack_require__.e("src_app_views_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./views/auth/login/login.module */
          33794)).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: "forget-password",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_forget-password_forget-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./views/forget-password/forget-password.module */
          82352)).then(function (m) {
            return m.ForgetPasswordModule;
          });
        }
      }, {
        path: "",
        component: src_npr_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        // canActivate: [AuthGuard],
        children: [{
          path: "dashboard",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_dashboard_dashboard-analytics_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/dashboard/dashboard-analytics.module */
            11164)).then(function (m) {
              return m.DashboardAnalyticsModule;
            });
          }
        }, {
          path: "roles",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_roles_roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/roles/roles.module */
            57445)).then(function (m) {
              return m.RolesModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "addSystem",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-system_add-system_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/addSystem/add-system/add-system.module */
            18396)).then(function (m) {
              return m.AddSystemModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "addSystem/summary",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-system_add-system_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/addSystem/add-system/add-system.module */
            18396)).then(function (m) {
              return m.AddSystemModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "audit-logs",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_audit-logs_audit-logs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/audit-logs/audit-logs.module */
            46847)).then(function (m) {
              return m.AuditLogsModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "change-password",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/change-password/change-password.module */
            87015)).then(function (m) {
              return m.ChangePasswordModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "profile",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/profile/profile.module */
            38323)).then(function (m) {
              return m.ProfileModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "process-monitoring",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_process-monitoring_process-monitoring_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/process-monitoring/process-monitoring.module */
            63420)).then(function (m) {
              return m.ProcessMonitoringModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "security-policy",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_security-policy_security-policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/security-policy/security-policy.module */
            88185)).then(function (m) {
              return m.SecurityPolicyModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, // {
        //   path: 'summary',
        //   loadChildren: () => import('./views/security-policy/security-policy.module').then(m => m.SecurityPolicyModule),
        // },
        {
          path: "createrule",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule_rule_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/rule/rule.module */
            11784)).then(function (m) {
              return m.RuleModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "external-system",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/file-upload-maintenance/file-upload-maintenance.module */
            99776)).then(function (m) {
              return m.FileUploadMaintenanceModule;
            });
          }
        }, {
          path: "system-param-maintenance",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_system-param-maintenance_system-param-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/system-param-maintenance/system-param-maintenance.module */
            76464)).then(function (m) {
              return m.SystemParamMaintenanceModule;
            });
          }
        }, {
          path: "file-upload",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_file-upload_file-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/file-upload/file-upload.module */
            9775)).then(function (m) {
              return m.FileUploadModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "process-account-closure",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("src_app_views_process-account-closure_process-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/process-account-closure/process-account-closure.module */
            39382)).then(function (m) {
              return m.ProcessAccountClosureModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "new-external-system",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_new-external-system_new-external-system_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/new-external-system/new-external-system.module */
            66679)).then(function (m) {
              return m.NewExternalSystemModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "initiate-account-closure",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/initiate-account-closure/initiate-account-closure.module */
            69628)).then(function (m) {
              return m.InitiateAccountClosureModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "initiate-account-closure/create",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/initiate-account-closure/initiate-account-closure.module */
            69628)).then(function (m) {
              return m.InitiateAccountClosureModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "email-management",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/email-management/email-management.module */
            81089)).then(function (m) {
              return m.EmailManagementModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "email-management/create",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/email-management/email-management.module */
            81089)).then(function (m) {
              return m.EmailManagementModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "customer-search",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("default-src_app_views_customer-search_customer-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/customer-search/customer-search.module */
            9208)).then(function (m) {
              return m.CustomerSearchModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "authorize-modification",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_authorize-modification_authorize-modification_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/authorize-modification/authorize-modification.module */
            49136)).then(function (m) {
              return m.AuthorizeModificationModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "account-closure-maintenance",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/account-closure-maintenance/account-closure-maintenance.module */
            95521)).then(function (m) {
              return m.AccountClosureMaintenanceModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "account-closure-maintenance/account-closure-summary",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/account-closure-maintenance/account-closure-maintenance.module */
            95521)).then(function (m) {
              return m.AccountClosureMaintenanceModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "excel-mapping",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("src_app_views_excel-mapping_excel-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/excel-mapping/excel-mapping.module */
            18745)).then(function (m) {
              return m.ExcelMappingModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "rule-mapping",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-mapping_rule-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/rule-mapping/rule-mapping.module */
            8690)).then(function (m) {
              return m.RuleMappingModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "charge-maintainence",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_charge-maintainenece_charge-maintainenece_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/charge-maintainenece/charge-maintainenece.module */
            90988)).then(function (m) {
              return m.ChargeMaintaineneceModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "rule-translation",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-translation_rule-translation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/rule-translation/rule-translation.module */
            80646)).then(function (m) {
              return m.RuleTranslationModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "users",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/users/users.module */
            51557)).then(function (m) {
              return m.UsersModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "authorize-cash-payment",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_authorize-cash-payment_authorize-cash-payments_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/authorize-cash-payment/authorize-cash-payments.module */
            96653)).then(function (m) {
              return m.AuthorizeCashPaymentsModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "sql-data",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("src_app_views_banzpay_banzpay-sql-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/banzpay/banzpay-sql-data.module */
            37158)).then(function (m) {
              return m.BanzpaySqlDataModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "amount-block",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-blocking-ser-99fde2"), __webpack_require__.e("default-src_app_views_customer-search_customer-search_module_ts"), __webpack_require__.e("src_app_views_amount-block_amount-block_amount-block_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/amount-block/amount-block/amount-block.module */
            35612)).then(function (m) {
              return m.AmountBlockModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "accountBlocking",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_account-blocking_account-block_account-block_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/account-blocking/account-block/account-block.module */
            2991)).then(function (m) {
              return m.AccountBlockModule;
            });
          },
          canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
        }, {
          path: "incoming",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "default-src_app_views_incoming_incoming_incoming_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/incoming/incoming/incoming.module */
            50764)).then(function (m) {
              return m.IncomingModule;
            });
          } // canActivate: [AuthGuard],

        }, {
          path: "outgoing",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_views_incoming_incoming_incoming_module_ts"), __webpack_require__.e("src_app_views_outgoing_outgoing_outgoing_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/outgoing/outgoing/outgoing.module */
            78426)).then(function (m) {
              return m.OutgoingModule;
            });
          }
        }]
      }, {
        path: "**",
        redirectTo: "dashboard"
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivateGuard],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
          // preloadingStrategy: PreloadAllModules,
          useHash: true,
          scrollPositionRestoration: "enabled",
          relativeLinkResolution: "corrected",
          anchorScrolling: "enabled"
        })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      36145);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(renderer, platform, document, route, router) {
          var _this17 = this;

          _classCallCheck(this, _AppComponent);

          this.renderer = renderer;
          this.platform = platform;
          this.document = document;
          this.route = route;
          this.router = router;
          this.title = "Median";
          this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.SESSION_TIMEOUT_DURATION = 3 * 60 * 1000; // 15 minutes in milliseconds

          this.changeTheme();
          this.setTimeout();
          this.userInactive.subscribe(function () {
            return _this17.logout();
          });
        }

        _createClass(_AppComponent, [{
          key: "onResize",
          value: function onResize(event) {
            this.document.body.classList.remove('activeNav');
          }
        }, {
          key: "setTimeout",
          value: function (_setTimeout) {
            function setTimeout() {
              return _setTimeout.apply(this, arguments);
            }

            setTimeout.toString = function () {
              return _setTimeout.toString();
            };

            return setTimeout;
          }(function () {
            var _this18 = this;

            this.userActivity = setTimeout(function () {
              return _this18.userInactive.next(undefined);
            }, this.SESSION_TIMEOUT_DURATION);
          })
        }, {
          key: "logout",
          value: function logout() {
            if (localStorage.getItem("userFromLogin")) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Session Expired", "Kindly Login to continue.");
            }

            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['/session/login']);
          }
        }, {
          key: "refreshUserState",
          value: function refreshUserState() {
            clearTimeout(this.userActivity);
            this.setTimeout();
          }
        }, {
          key: "onUpdateStorage",
          value: function onUpdateStorage() {
            var getOtpClicked = localStorage.getItem("getOtpClicked");

            if (getOtpClicked === 'true') {
              localStorage.clear();
              sessionStorage.clear();
              this.router.navigate(['/session/login']);
            }
          }
        }, {
          key: "changeTheme",
          value: function changeTheme() {
            var _this19 = this;

            var lastBg = "";
            $(document).on('click', '.tColor', function (e) {
              e.preventDefault();
              var bgClass = $(_this19).data("id");
              $(_this19).addClass('active').parent().siblings().find('.tColor').removeClass('active');
              $('body').removeClass(lastBg).addClass(bgClass);
              lastBg = bgClass;
              $('.ddParent').removeClass('actDD');
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousemove", function AppComponent_mousemove_HostBindingHandler() {
              return ctx.refreshUserState();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("click", function AppComponent_click_HostBindingHandler() {
              return ctx.refreshUserState();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown", function AppComponent_keydown_HostBindingHandler() {
              return ctx.refreshUserState();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("storage", function AppComponent_storage_HostBindingHandler() {
              return ctx.onUpdateStorage();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
          }
        },
        decls: 2,
        vars: 0,
        consts: [[3, "resize"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _npr_npr_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../@npr/npr.module */
      55114);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var ngx_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-dialogs */
      36247);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, // Npr
        _npr_npr_module__WEBPACK_IMPORTED_MODULE_2__.NprModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule, ngx_dialogs__WEBPACK_IMPORTED_MODULE_9__.NgxDialogsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, // Npr
          _npr_npr_module__WEBPACK_IMPORTED_MODULE_2__.NprModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule, ngx_dialogs__WEBPACK_IMPORTED_MODULE_9__.NgxDialogsModule]
        });
      })();
      /***/

    },

    /***/
    3118:
    /*!***********************************************!*\
      !*** ./src/app/shared/config/app.constant.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppConstants": function AppConstants() {
          return (
            /* binding */
            _AppConstants
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);

      var _AppConstants = /*#__PURE__*/function () {
        function _AppConstants() {
          _classCallCheck(this, _AppConstants);
        }

        _createClass(_AppConstants, null, [{
          key: "baseURL",
          get:
          /*
          *Base URL is not used anywhere so dont change it and dont delete it
          */
          function get() {
            return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL;
          }
        }, {
          key: "acctCloserUrl",
          get: function get() {
            return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.ACC_CLOSER_URL;
          }
        }]);

        return _AppConstants;
      }();
      /***/

    },

    /***/
    87618:
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/auth.guard.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/jwt-auth.service */
      79389);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(router, jwtAuth) {
          _classCallCheck(this, _AuthGuard);

          this.router = router;
          this.jwtAuth = jwtAuth;
        } // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //   return this._check();
        // }


        _createClass(_AuthGuard, [{
          key: "_check",
          value: function _check() {
            var _this20 = this;

            // Check the authentication status
            return this.jwtAuth.check().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (authenticated) {
              console.log("check status", authenticated); // If the user is not authenticated...

              if (!authenticated) {
                // Redirect to the sign-in page
                localStorage.clear();
                sessionStorage.clear();

                _this20.router.navigate(["session/login"]); // Prevent the access


                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
              } // Allow the access


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
            }));
          }
        }, {
          key: "canActivate",
          value: function canActivate(route, state) {
            console.log("route " + route.url.toString());
            console.log("state " + state);
            this.roleUrl = route.url.toString(); // this.userType = sessionStorage.getItem("userTypeAuthGuard");

            this.roleInfo = sessionStorage.getItem("roleScreenPermission");
            this.roles = this.roleInfo.split(",");
            console.log(this.roleInfo);
            console.log("roleUrl--- ", this.roleUrl);
            console.log("roles--- ", this.roles); // console.log("Checking url", state.url);

            if (this.roleUrl == "users" && this.roles.includes("Users")) {
              return true;
            } else if (this.roleUrl == "roles" && this.roles.includes("Roles")) {
              return true;
            } else if (this.roleUrl == "audit-logs" && this.roles.includes("Audit Logs")) {
              return true;
            } else if (this.roleUrl == "security-policy" && this.roles.includes("Security Policy")) {
              return true;
            } else if (this.roleUrl == "authorize-cash-payment" && this.roles.includes("Authorize Cash Payments")) {
              return true;
            } else if ((this.roleUrl == "transaction-code-summary" || this.roleUrl == "transaction-code-new" || this.roleUrl == "transaction-code-edit") && this.roles.includes("Transaction Code Maintenance")) {
              return true;
            } else if ((this.roleUrl == "global-acc-maintenance-summary" || this.roleUrl == "global-acc-maintenance-new" || this.roleUrl == "global-gl-edit" || this.roleUrl == "global-ac-edit") && this.roles.includes("Global Account Restriction")) {
              return true;
            } else if ((this.roleUrl == "user-gl-acc-maintenance-summary" || this.roleUrl == "user-gl-acc-maintenance-new" || this.roleUrl == "user-gl-edit" || this.roleUrl == "user-ac-edit") && this.roles.includes("User Account Restriction")) {
              return true;
            } else if ((this.roleUrl == "dept-id-maintenance-summary" || this.roleUrl == "dept-id-maintenance-new" || this.roleUrl == "transaction-code-edit") && this.roles.includes("Department ID Maintenance")) {
              return true;
            } else if (this.roleUrl == "create" && this.roles.includes("Email-Management")) {
              return true;
            } else if ((this.roleUrl == "summary" || this.roleUrl == "addSystem") && this.roles.includes("Add System")) {
              return true;
            } else if ((this.roleUrl == "summary" || this.roleUrl == "create") && this.roles.includes("Rule translation")) {
              return true;
            } else if ((this.roleUrl == "list" || this.roleUrl == "create") && this.roles.includes("Create Rule")) {
              return true;
            } else if ((this.roleUrl == "summary" || this.roleUrl == "create" || this.roleUrl == "conversion") && this.roles.includes("Rule Mapping")) {
              return true;
            } else if ((this.roleUrl == "extSys-summary" || this.roleUrl == "extSys-new" || this.roleUrl == "extSys-edit") && this.roles.includes("External System")) {
              return true;
            } else if ((this.roleUrl == "processCodeMapping" || this.roleUrl == "processCodeMappingNew" || this.roleUrl == "processCodeMappingEdit") && this.roles.includes("Process Code Mapping")) {
              return true;
            } else if ((this.roleUrl == "excel-mapping-new" || this.roleUrl == "excel-mapping-edit") && this.roles.includes("Template Mapping")) {
              return true;
            } else if (this.roleUrl == "upload-excel" && this.roles.includes("Upload Excel")) {
              return true;
            } else if (this.roleUrl == "authorize_excel" && this.roles.includes("Authorize Excel")) {
              return true;
            } else if (this.roleUrl == "rejection_queue" && this.roles.includes("Rejection Queue")) {
              return true;
            } else if (this.roleUrl == "authorize-modification" && this.roles.includes("Authorize Modification")) {
              return true;
            } else if (this.roleUrl == "treasuryReference" && this.roles.includes("Treasury Reference")) {
              return true;
            } else if (this.roleUrl == "process-monitoring" && this.roles.includes("Process Monitoring")) {
              return true;
            } else if (this.roleUrl == "customer-search" && this.roles.includes("Account Block")) {
              return true;
            } else if (this.roleUrl == "initiate-account-closure" && this.roles.includes("Initiate Account Closure")) {
              return true;
            } else if (this.roleUrl == "process-account-closure" && this.roles.includes("Process Account Closure")) {
              return true;
            } else if (this.roleUrl == "account-closure-maintenance" && this.roles.includes("Account Closure Maintenance")) {
              return true;
            } else if ((this.roleUrl == "charge-maintainence" || this.roleUrl == "create") && this.roles.includes("Charge Maintenance")) {
              return true;
            } else if (this.roleUrl == "amount-block" && this.roles.includes("Amount Block")) {
              return true;
            } // else if (
            //   this.roleUrl == "upload-excel" &&
            //   this.roles.includes("File Upload")
            // ) {
            //   return true;
            // }
            // else if (this.roleUrl == "workflowQueue" && this.roles.includes("WFQ")) {
            //   return true;
            // } else if (this.roleUrl == "commonDetails" && this.roles.includes("CM")) {
            //   return true;
            // } else if (
            //   this.roleUrl == "mdaVerification" &&
            //   this.roles.includes("WFRM")
            // ) {
            //   return true;
            // } else if (this.roleUrl == "mdaVerification" && this.roles.includes("QR")) {
            //   return true;
            // } else if (
            //   this.roleUrl == "mdaVerification" &&
            //   this.roles.includes("QRS")
            // ) {
            //   return true;
            // } else if (this.roleUrl == "securityPolicy" && this.roles.includes("SP")) {
            //   return true;
            // }
            // // Commented by Shilpa Sree on 24/09/2020, IssueId: 0000739
            // // else if (this.roleUrl == "mdaVerification" && this.roles.includes("RP")) {
            // //   return true;
            // // }
            // else if (this.roleUrl == "mdaVerification" && this.roles.includes("RM")) {
            //   return true;
            // }
            // // Changed from RC to RP by Shilpa Sree on 24/09/2020, IssueId: 0000739
            // else if (
            //   this.roleUrl == "reportConfiguration" &&
            //   this.roles.includes("RP")
            // ) {
            //   return true;
            // } else if (this.roleUrl == "ExcelMapping" && this.roles.includes("EXM")) {
            //   return true;
            // } else if (this.roleUrl == "ExcelUpload" && this.roles.includes("EXU")) {
            //   return true;
            // } else if (
            //   this.roleUrl == "ExcelProcessing" &&
            //   this.roles.includes("EXP")
            // ) {
            //   return true;
            // } else if (this.roleUrl == "maintanance" && this.roles.includes("EXTSM")) {
            //   return true;
            // } else if (
            //   this.roleUrl == "mapping-nonoracle" &&
            //   this.roles.includes("EXTSNO")
            // ) {
            //   return true;
            // } else if (
            //   this.roleUrl == "mapping-oracle" &&
            //   this.roles.includes("EXTSO")
            // ) {
            //   return true;
            // } else if (this.roleUrl == "refresh" && this.roles.includes("EXTSR")) {
            //   return true;
            // } else if (this.roleUrl == "Authorization" && this.roles.includes("UAS")) {
            //   return true;
            // } else if (this.roleUrl == "ExtSysList" && this.roles.includes("EXMT")) {
            //   return true;
            // } else if (this.roleUrl == "ExtSumamry" && this.roles.includes("EXS")) {
            //   return true;
            // } else if (
            //   this.roleUrl.includes("reportAuthor") &&
            //   this.roles.includes("RA")
            // ) {
            //   return true;
            // }
            else {
              alert("You dont have permission to access this page!");
              console.log("You dont have permission to access this page!");
              localStorage.clear();
              sessionStorage.clear();
              this.router.navigate(["/session/login"]);
            }
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    50215:
    /*!*******************************************************!*\
      !*** ./src/app/shared/guards/can-deactivate.guard.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CanDeactivateGuard": function CanDeactivateGuard() {
          return (
            /* binding */
            _CanDeactivateGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CanDeactivateGuard = /*#__PURE__*/function () {
        function _CanDeactivateGuard() {
          _classCallCheck(this, _CanDeactivateGuard);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.exitWithoutChange = false;
        }

        _createClass(_CanDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            return component.canExit ? component.canExit() : true;
          }
        }]);

        return _CanDeactivateGuard;
      }();

      _CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) {
        return new (t || _CanDeactivateGuard)();
      };

      _CanDeactivateGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CanDeactivateGuard,
        factory: _CanDeactivateGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    35383:
    /*!*********************************************************!*\
      !*** ./src/app/shared/models/fmosNewRolePermissions.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fmosscreenlabels": function fmosscreenlabels() {
          return (
            /* binding */
            _fmosscreenlabels
          );
        },

        /* harmony export */
        "RolePermissions": function RolePermissions() {
          return (
            /* binding */
            _RolePermissions
          );
        },

        /* harmony export */
        "permissionsLabels": function permissionsLabels() {
          return (
            /* binding */
            _permissionsLabels
          );
        }
        /* harmony export */

      });

      var _fmosscreenlabels = /*#__PURE__*/_createClass(function _fmosscreenlabels() {
        _classCallCheck(this, _fmosscreenlabels);

        this.exist = true;
      });

      var _RolePermissions = /*#__PURE__*/_createClass(function _RolePermissions() {
        _classCallCheck(this, _RolePermissions);
      });

      var _permissionsLabels = /*#__PURE__*/_createClass(function _permissionsLabels() {
        _classCallCheck(this, _permissionsLabels);
      });
      /***/

    },

    /***/
    94761:
    /*!************************************************!*\
      !*** ./src/app/shared/services/api.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "median": function median() {
          return (
            /* binding */
            _median
          );
        },

        /* harmony export */
        "API_URL": function API_URL() {
          return (
            /* binding */
            _API_URL
          );
        },

        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../config/app.constant */
      3118);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316); // import { User } from "src/app/views/users/users.dto";


      var _median = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      var _API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;

      var _ApiService = /*#__PURE__*/function () {
        function _ApiService(http) {
          _classCallCheck(this, _ApiService);

          this.http = http;
          this.uriForExt = _median + "/extsys";
          this.ext = _median + "/excelExt";
          this.excelmap = _median + "/excelmap";
          this.uriForMap = _median + "/excelmap";
          this.dashboardapi = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + "/dashboard";
          this.API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
          this.processCodeMappingObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            id: "",
            extSysCode: "",
            extSysName: "",
            commChannel: "",
            creatorDtStamp: "",
            creatorId: "",
            destination: "",
            destinationTag: "",
            dtdFile: "",
            errDirectoryName: "",
            errQueueName: "",
            errSchemaName: "",
            errXsltName: "",
            extSysTag: "",
            formatType: "",
            isDestNode: "",
            isExtSysNode: "",
            isModuleNode: "",
            isProcessNode: "",
            isServiceNode: "",
            latestAmendNo: "",
            messageType: "",
            moduleCode: "",
            moduleTag: "",
            msgDuplication: "",
            processCode: "",
            processTag: "",
            recordStatus: "",
            reqDirectoryName: "",
            reqQueueName: "",
            reqSchemaName: "",
            reqXsltName: "",
            requestTag: "",
            respDirectoryName: "",
            respQueueName: "",
            respSchemaName: "",
            respXsltName: "",
            responseTag: "",
            serviceCode: "",
            serviceTag: "",
            updatedAt: "",
            verifiedEver: "",
            verifierDtStamp: "",
            verifierId: "",
            xsdFile: "",
            authStatus: "",
            updatedBy: "",
            fristTimeAuth: "",
            versionNo: "",
            maxUploadLimit: "",
            fileName: "",
            bdav: "",
            backDateAllow: "",
            futureDateAllow: "",
            fdav: "",
            acft: "",
            autoUpload: "",
            filePath: "",
            fCYRateVariance: "",
            fCYPercentage: "",
            sftpRequired: "",
            sftpIpaddress: "",
            sftpPassword: "",
            sftpPath: "",
            sftpPort: "",
            sftpUsername: "",
            mandatoryFieldImposed: "",
            treasuryrefRequired: "",
            wuFile: "",
            verifiedOnce: ""
          }); // -- Sytstem Param Maintenance  --
          // 1. Transaction Code Maintenance

          this.transactionCodeSummryData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            userId: "",
            creatorDtStamp: "",
            creatorId: "",
            modNo: "",
            recordStatus: "",
            verifiedStatus: "",
            verifiedBy: "",
            verifiedOnce: "",
            verifiedTime: "",
            medTransCode: []
          });
          this.globalGccSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: "",
            approvedStatus: "",
            approvedTime: "",
            approverId: "",
            createdTime: "",
            creatorId: "",
            globalGlCodeId: "",
            medGlobalGlCodeDetails: [],
            permission: "",
            recordStatus: "",
            modNo: "",
            activeTab: ""
          });
          this.globalAccSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: "",
            approvedStatus: "",
            approvedTime: "",
            approverId: "",
            createdTime: "",
            creatorId: "",
            globalGlCodeId: "",
            medGlobalGlCodeDetails: [],
            permission: "",
            recordStatus: "",
            modNo: "",
            activeTab: ""
          });
          this.userGCCSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: "",
            approvedStatus: "",
            approvedTime: "",
            approverId: "",
            createdTime: "",
            creatorId: "",
            userGlCodeId: "",
            medUserGlCodeDetails: [],
            permission: "",
            recordStatus: "",
            versionNo: "",
            activeTab: ""
          });
          this.userACCSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: "",
            approvedStatus: "",
            approvedTime: "",
            approverId: "",
            createdTime: "",
            creatorId: "",
            userAccClassId: "",
            medUserAccountClassDetails: [],
            permission: "",
            recordStatus: "",
            versionNo: "",
            activeTab: ""
          });
          this.homeactiveTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            activeTab: ""
          });
          this.profileactiveTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            activeTab: ""
          }); //File upload end
          // External System

          this.externalSystemData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            authStatus: "",
            authorizedBy: "",
            authorizedTime: "",
            department: "",
            extSysCode: "",
            extSysName: "",
            modifiedBy: "",
            modifiedTime: "",
            recordStatus: "",
            verifiedOnce: "",
            version: ""
          });
          this.securityDetailsEdit = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            authStatus: "",
            authorizedBy: "",
            authorizedTime: "",
            createdBy: "",
            createdDate: "",
            isActive: "",
            maxInvLogins: "",
            maxPswdLength: "",
            minPswdLength: "",
            modifiedBy: "",
            modifiedTime: "",
            notifyPasswordExpiryInDays: "",
            pswdComplexLcase: "",
            pswdComplexNum: "",
            pswdComplexSplc: "",
            pswdComplexUcase: "",
            pswdExpiry: "",
            pswdReuseAft: "",
            recordStatus: "",
            version: ""
          });
          this.customerSearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            firstName: "",
            customerNumber: "",
            accountNumber: "",
            mobileNo: "",
            lastName: "",
            customerName: "",
            branchCode: "",
            nationalId: "",
            email: ""
          });
          this.AccountBlocking = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            exit: ""
          });
          this.CustomerSearchFormValues = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            firstName: "",
            customerNumber: "",
            accountNumber: "",
            mobileNo: "",
            lastName: "",
            customerName: "",
            branchCode: "",
            nationalId: ""
          }); // Excel Mapping

          this.excelSummaryObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            extSysCode: "",
            processName: "",
            extSys: "",
            authStatus: "",
            currency: "",
            sheetNumber: ""
          }); // this._baseURL = AppConstants.baseURL + '/role';

          this._baseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + "/medRoles" + "/fetchAllRolesSummary";
          this._fmosbaseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + "/medRoles";
        }

        _createClass(_ApiService, [{
          key: "getAllExtSys",
          value: function getAllExtSys() {
            return this.http.get("".concat(this.uriForExt) + "/extsysdata?pageNo=".concat(0, "&pageSize=", 1000));
          }
        }, {
          key: "fetchnewscreenlabels",
          value: function fetchnewscreenlabels() {
            return this.http.get("".concat(this._fmosbaseURL) + "/fetchTabLabelAndScreen");
          }
        }, {
          key: "uploadDocument",
          value: function uploadDocument(uploadData) {
            return this.http.post("".concat(_API_URL, "/users/uploadProfileImage"), uploadData);
          }
        }, {
          key: "getCustomerDocuments",
          value: function getCustomerDocuments(user_id) {
            return this.http.get("".concat(_API_URL, "/users/getProfileImage?userId=").concat(user_id));
          }
        }, {
          key: "changePasswordService",
          value: function changePasswordService(obj) {
            return this.http.post("".concat(_API_URL, "/login/changePassword/"), obj);
          }
        }, {
          key: "getProcessCode",
          value: function getProcessCode() {
            return this.processCodeMappingObject.asObservable();
          }
        }, {
          key: "setProcessCodeData",
          value: function setProcessCodeData(processCode) {
            this.processCodeMappingObject.next(processCode);
          }
        }, {
          key: "getAllExt",
          value: function getAllExt() {
            return this.http.get("".concat(this.ext) + "/getExt?pageNo=".concat(0, "&pageSize=", 1000));
          } // getAllAuthExt(): Observable<any> {
          //   return this.http.get(`${this.uriForExt}` + `/getAllAuthExtCode`);
          // }

        }, {
          key: "getAllAuthExt",
          value: function getAllAuthExt() {
            return this.http.get("".concat(this.ext) + "/gettingExtsysCodeonAuthSatus");
          }
        }, {
          key: "modifyExtSysService",
          value: function modifyExtSysService(modifyextSys) {
            return this.http.put("".concat(this.uriForExt) + "/modifyextSys", modifyextSys);
          }
        }, {
          key: "getMonitorData",
          value: function getMonitorData() {
            return this.http.get("".concat(_API_URL, "/excelDataForProcessScreeen/getMonitorData?pageNo=", 0, "&pageSize=", 1000));
          }
        }, {
          key: "getData",
          value: function getData() {
            // //console.log(this.http.get(`${this.dashboardapi}/dashboardchartdata`));
            return this.http.get("".concat(this.dashboardapi, "/dashboardchartdata"));
          }
        }, {
          key: "createExtSys",
          value: function createExtSys(extSys) {
            return this.http.post("".concat(this.uriForExt) + "/createExtSys", extSys);
          }
        }, {
          key: "updateExtSys",
          value: function updateExtSys(extSys) {
            return this.http.put("".concat(this.uriForExt) + "/modifyextSys", extSys);
          }
        }, {
          key: "fetchMedUser",
          value: function fetchMedUser(userId) {
            return this.http.get("".concat(_API_URL, "/login/getUserByUserId/").concat(userId));
          }
        }, {
          key: "fetchAutoPassword",
          value: function fetchAutoPassword(userId) {
            return this.http.post("".concat(_API_URL, "/login/autoGeneratePassword?userId=").concat(userId), userId);
          }
        }, {
          key: "fetchSecurityPolicyService",
          value: function fetchSecurityPolicyService() {
            return this.http.get("".concat(_API_URL, "/securityPolicy/fetch"));
          }
        }, {
          key: "accountBlock",
          value: function accountBlock(data) {
            return this.http.post("".concat(_API_URL, "/amountBlock"), data);
          }
        }, {
          key: "getAuthorizedExt",
          value: function getAuthorizedExt() {
            return this.http.get("".concat(this.ext, "/gettingExtsysCodeonAuthSatus"));
          }
        }, {
          key: "getOtp",
          value: function getOtp(login) {
            return this.http.post("".concat(_API_URL, "/login/otp"), login);
          }
        }, {
          key: "loginService",
          value: function loginService(login) {
            return this.http.post("".concat(_API_URL, "/login/credentials"), login);
          }
        }, {
          key: "gettingTransactionCodeSummary",
          value: function gettingTransactionCodeSummary() {
            return this.http.get("".concat(_median, "/config/getSummaryForTransactionCodeMapping?pageNo=", 0, "&pageSize=", 5000));
          } // saveTrnCodeMaster(master): Observable<any> {
          //   return this.http.post<boolean>(`${median}/config/saveTrnMaster`, master);
          // }

        }, {
          key: "saveTrnCode",
          value: function saveTrnCode(trnData, userId, loggedInuser) {
            return this.http.post("".concat(_median, "/config/saveTrn/").concat(userId, "/").concat(loggedInuser), trnData);
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            return this.http.get("".concat(_median, "/config/getAllUsername"));
          }
        }, {
          key: "gettingTransactionDatabyID",
          value: function gettingTransactionDatabyID(UserId) {
            return this.http.get("".concat(_API_URL, "/config/getTrnData/").concat(UserId));
          }
        }, {
          key: "setSummaryDataTransactionCode",
          value: function setSummaryDataTransactionCode(summaryData) {
            console.log(summaryData);
            this.transactionCodeSummryData.next(summaryData);
          }
        }, {
          key: "getSummaryDataTransactionCode",
          value: function getSummaryDataTransactionCode() {
            return this.transactionCodeSummryData.asObservable();
          }
        }, {
          key: "setGlobalGccSummary",
          value: function setGlobalGccSummary(summaryData) {
            this.globalGccSummary.next(summaryData);
          }
        }, {
          key: "setHomeactiveTab",
          value: function setHomeactiveTab(homeActive) {
            this.homeactiveTab.next(homeActive);
          }
        }, {
          key: "getHomeactiveTab",
          value: function getHomeactiveTab() {
            return this.homeactiveTab.asObservable();
          }
        }, {
          key: "setProfileactiveTab",
          value: function setProfileactiveTab(profileActive) {
            this.profileactiveTab.next(profileActive);
          }
        }, {
          key: "getProfileactiveTab",
          value: function getProfileactiveTab() {
            return this.profileactiveTab.asObservable();
          }
        }, {
          key: "getGlobalGccSummary",
          value: function getGlobalGccSummary() {
            return this.globalGccSummary.asObservable();
          }
        }, {
          key: "setGlobalAccSummary",
          value: function setGlobalAccSummary(summaryData) {
            console.log(summaryData);
            this.globalAccSummary.next(summaryData);
          }
        }, {
          key: "getGlobalAccSummary",
          value: function getGlobalAccSummary() {
            return this.globalAccSummary.asObservable();
          }
        }, {
          key: "setUserGCCSummary",
          value: function setUserGCCSummary(summaryData) {
            this.userGCCSummary.next(summaryData);
          }
        }, {
          key: "getuserGCCSummary",
          value: function getuserGCCSummary() {
            return this.userGCCSummary.asObservable();
          }
        }, {
          key: "setUserACCSummary",
          value: function setUserACCSummary(summaryData) {
            this.userACCSummary.next(summaryData);
          }
        }, {
          key: "getuserACCSummary",
          value: function getuserACCSummary() {
            return this.userACCSummary.asObservable();
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(id, loggedInUser) {
            return this.http["delete"]("".concat(_API_URL, "/config/deleteRow/").concat(id, "?loggedInUser=").concat(loggedInUser));
          }
        }, {
          key: "deleteuserGLRow",
          value: function deleteuserGLRow(id) {
            return this.http["delete"]("".concat(_API_URL, "/userAccGL/deleteAccountDetailByIdRow/").concat(id));
          }
        }, {
          key: "deleteuserAccountClassRow",
          value: function deleteuserAccountClassRow(id) {
            return this.http["delete"]("".concat(_API_URL, "/userAccGL/deleteAccountDetailByIdRow/").concat(id));
          }
        }, {
          key: "deleteglobalGCRow",
          value: function deleteglobalGCRow(id) {
            return this.http["delete"]("".concat(_API_URL, "/globalAccGL/deletegGlDetailByIdRow/").concat(id));
          }
        }, {
          key: "deleteUserData",
          value: function deleteUserData(UserId) {
            return this.http["delete"]("".concat(_API_URL, "/config/deleteWholeRecord/").concat(UserId));
          }
        }, {
          key: "deleteTransactionData",
          value: function deleteTransactionData(UserId, loggedInUser) {
            return this.http["delete"]("".concat(_API_URL, "/config/deleteWholeRecord/").concat(UserId, "?loggedInUser=").concat(loggedInUser));
          }
        }, {
          key: "onClckOfAuthTransactionCode",
          value: function onClckOfAuthTransactionCode(operation, MedTransOperationData) {
            return this.http.put("".concat(_API_URL, "/config/").concat(operation), MedTransOperationData);
          }
        }, {
          key: "onclickOfCloseTransactionCode",
          value: function onclickOfCloseTransactionCode(operation, MedTransOperationData) {
            return this.http.put("".concat(_API_URL, "/config/").concat(operation), MedTransOperationData);
          }
        }, {
          key: "onclickOfReopenTransactionCode",
          value: function onclickOfReopenTransactionCode(operation, MedTransOperationData) {
            return this.http.put("".concat(_API_URL, "/config/").concat(operation), MedTransOperationData);
          }
        }, {
          key: "updateAuditData",
          value: function updateAuditData(master) {
            return this.http.put("".concat(_API_URL, "/config/modifyMaster"), master);
          }
        }, {
          key: "updateTransactionCode",
          value: function updateTransactionCode(trnData, userId, loggedInuser) {
            return this.http.put("".concat(_API_URL, "/config/modify/").concat(userId, "/").concat(loggedInuser), trnData);
          }
        }, {
          key: "todayUploadedBatches",
          value: function todayUploadedBatches(userName) {
            return this.http.get("".concat(this.dashboardapi, "/getUploadBatches/").concat(userName));
          }
        }, {
          key: "getChartDetails",
          value: function getChartDetails() {
            return this.http.get("".concat(this.dashboardapi, "/dashboardchartdata"));
          }
        }, {
          key: "pendingUnauthorizeBatches",
          value: function pendingUnauthorizeBatches(userName) {
            return this.http.get("".concat(this.dashboardapi, "/getPendingBatches/").concat(userName));
          }
        }, {
          key: "authorizedBatchesByuser",
          value: function authorizedBatchesByuser(userName) {
            return this.http.get("".concat(this.dashboardapi, "/getAuthorizedBatches/").concat(userName));
          }
        }, {
          key: "getAllRoles",
          value: function getAllRoles() {
            // return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this._baseURL, "?pageNo=", 0, "&pageSize=", 1000));
          }
        }, {
          key: "getAllUsersListService",
          value: function getAllUsersListService() {
            return this.http.get("".concat(this.API_URL, "/users/getAllUsers?pageNo=", 0, "&pageSize=", 1000));
          } // audit Logs

        }, {
          key: "getAllAuditData",
          value: function getAllAuditData() {
            return this.http.get("".concat(this.API_URL) + "/auditLogs/getAllAuditLogs?pageNo=".concat(0, "&pageSize=", 1000, "&sortBy=", "creatorDtStamp"));
          }
        }, {
          key: "getAllAuditDataByDate",
          value: function getAllAuditDataByDate(from, to) {
            return this.http.get("".concat(this.API_URL, "/dataauditsList/").concat(from, "/").concat(to));
          } // 2. Global GI/ACC Maintenance

        }, {
          key: "getGlData",
          value: function getGlData(type) {
            return this.http.get("".concat(_median, "/globalAccGL/getAllGlobalGlData/").concat(type));
          }
        }, {
          key: "onClckOfOperationGlobal",
          value: function onClckOfOperationGlobal(operation, userIdLoggedIn, data) {
            return this.http.put("".concat(_API_URL, "/globalAccGL/globalgl/").concat(operation, "/").concat(userIdLoggedIn, " "), data);
          }
        }, {
          key: "onClckOfOperationACC",
          value: function onClckOfOperationACC(operation, userIdLoggedIn, data) {
            return this.http.put("".concat(_API_URL, "/globalAccGL/globalgl/").concat(operation, "/").concat(userIdLoggedIn), data);
          }
        }, {
          key: "onClckOfOperationGCCUser",
          value: function onClckOfOperationGCCUser(operation, userIdLoggedIn, data) {
            return this.http.put("".concat(_API_URL, "/userAccGL/userGl/").concat(operation, "/").concat(userIdLoggedIn, "   "), data);
          }
        }, {
          key: "onClckOfOperationACCUser",
          value: function onClckOfOperationACCUser(operation, userIdLoggedIn, data) {
            return this.http.put("".concat(_API_URL, "/userAccGL/userGl/").concat(operation, "/").concat(userIdLoggedIn, " "), data);
          }
        }, {
          key: "getAccData",
          value: function getAccData(type) {
            return this.http.get("".concat(_median, "/globalAccGL/getAllGlobalGlData/").concat(type));
          }
        }, {
          key: "deleteGlData",
          value: function deleteGlData(row, UserId) {
            return this.http.post("".concat(_median, "/config/deletegGlData/").concat(UserId), row);
          }
        }, {
          key: "deleteAcData",
          value: function deleteAcData(row, UserId) {
            return this.http.post("".concat(_median, "/config/deleteAcData/").concat(UserId), row);
          }
        }, {
          key: "saveGlCodeData",
          value: function saveGlCodeData(trnData, userId) {
            return this.http.post("".concat(_median, "/globalAccGL/globalsaveGl/").concat(userId), trnData);
          }
        }, {
          key: "deleteUserGCC",
          value: function deleteUserGCC(userGlCodeId, userId) {
            return this.http["delete"]("".concat(_API_URL, "/userAccGL/deleteUserGlData/").concat(userGlCodeId));
          }
        }, {
          key: "deleteUserACC",
          value: function deleteUserACC(userAccClassId, userId) {
            return this.http["delete"]("".concat(_API_URL, "/userAccGL/deleteUserGlData/").concat(userAccClassId));
          }
        }, {
          key: "deleteGCCuserdata",
          value: function deleteGCCuserdata(id) {
            return this.http["delete"]("".concat(_API_URL, "/globalAccGL/deletegGlDetailById/").concat(id));
          }
        }, {
          key: "deleteACCuserdata",
          value: function deleteACCuserdata(id) {
            return this.http["delete"]("".concat(_API_URL, "/deletegGlDetailById/").concat(id));
          }
        }, {
          key: "updateGlCodeData",
          value: function updateGlCodeData(updatData, operation, userIdLoggedIn) {
            return this.http.put("".concat(_median, "/globalAccGL/globalgl/").concat(operation, "/").concat(userIdLoggedIn, " "), updatData);
          }
        }, {
          key: "updateACCCodeData",
          value: function updateACCCodeData(updatData, operation, userIdLoggedIn) {
            return this.http.put("".concat(_median, "/globalAccGL/globalgl/").concat(operation, "/").concat(userIdLoggedIn, " "), updatData);
          }
        }, {
          key: "updateUserGlCodeData",
          value: function updateUserGlCodeData(updatData, operation, userIdLoggedIn) {
            return this.http.put("".concat(_median, "/userAccGL/userGl/").concat(operation, "/").concat(userIdLoggedIn), updatData);
          }
        }, {
          key: "updateUserACCCodeData",
          value: function updateUserACCCodeData(updatData, operation, userIdLoggedIn) {
            return this.http.put("".concat(_median, "/userAccGL/userGl/").concat(operation, "/").concat(userIdLoggedIn), updatData);
          }
        }, {
          key: "saveAccountCodeData",
          value: function saveAccountCodeData(trnData, userId) {
            return this.http.post("".concat(_median, "/globalAccGL/globalsaveGl/").concat(userId), trnData);
          } // 3. User GL Maintenance

        }, {
          key: "getUserIdGlData",
          value: function getUserIdGlData(UserId, type) {
            return this.http.get("".concat(_API_URL, "/userAccGL/getGlData/").concat(UserId, "/").concat(type));
          }
        }, {
          key: "getUserIdAccData",
          value: function getUserIdAccData(UserId, type) {
            return this.http.get("".concat(_API_URL, "/userAccGL/getGlData/").concat(UserId, "/").concat(type));
          }
        }, {
          key: "saveuserGlCode",
          value: function saveuserGlCode(trnData, userId, permission) {
            return this.http.post("".concat(_API_URL, "/userAccGL/saveGl/").concat(userId, "/").concat(permission), trnData);
          }
        }, {
          key: "saveAccountClassCode",
          value: function saveAccountClassCode(trnData, userId, permission) {
            return this.http.post("".concat(_API_URL, "/userAccGL/saveGl/").concat(userId, "/").concat(permission), trnData);
          }
        }, {
          key: "deleteAcDataUser",
          value: function deleteAcDataUser(row, UserId) {
            return this.http.post("".concat(_API_URL, "/config/deleteAccountData/").concat(UserId), row);
          }
        }, {
          key: "deleteGlDataUser",
          value: function deleteGlDataUser(row, UserId) {
            return this.http.post("".concat(_API_URL, "/config/deleteUserGlData/").concat(UserId), row);
          } //File upload start

        }, {
          key: "getAuditLogService",
          value: function getAuditLogService(excelDataProcessingReqDTO, user_id) {
            return this.http.post("".concat(_API_URL, "/excelDataProcessing/getExcelDataProcessingAuditLog/").concat(user_id), excelDataProcessingReqDTO);
          }
        }, {
          key: "showDetailServiceInExcelDataProcessing",
          value: function showDetailServiceInExcelDataProcessing(excelDataProcessingReqDTO, user_id) {
            // return this.http.post(
            //   `${API_URL}/excelDataProcessing/showDetails/${user_id}`,
            //   excelDataProcessingReqDTO
            // );
            return this.http.post("".concat(_API_URL, "/excelDataProcessing/uploadExcelFile/").concat(user_id), excelDataProcessingReqDTO);
          }
        }, {
          key: "getAllExtSysNamesService",
          value: function getAllExtSysNamesService(userId) {
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/getAllExtSysNames/").concat(userId));
          }
        }, {
          key: "getUploadPermission",
          value: function getUploadPermission(extSysName, processName) {
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/getUploadPermission/").concat(extSysName, "/").concat(processName));
          }
        }, {
          key: "getProcessNamesBasedOnExtSysNameService",
          value: function getProcessNamesBasedOnExtSysNameService(extSysCode) {
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/getProcessCodeByExtSysName?extSysCode=").concat(extSysCode));
          }
        }, {
          key: "getAllTransactionCode",
          value: function getAllTransactionCode(user_id) {
            return this.http.get("".concat(_API_URL, "/config/getTrnData/").concat(user_id));
          }
        }, {
          key: "processDataService",
          value: function processDataService(modalProcessDataReqDTO, userName, remarks) {
            // return this.http.post<boolean>(
            //   `${API_URL}/excelDataForProcessScreeen/processData/${userName}/${remarks}`,
            //   modalProcessDataReqDTO
            // );
            return this.http.post("".concat(_API_URL, "/excelDataForProcessScreeen/processExcelData/").concat(userName, "/").concat(remarks), modalProcessDataReqDTO);
          }
        }, {
          key: "test",
          value: function test(userid) {
            // return this.http.get<any>(`${API_URL}/excelDataProcessing/t`);
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/get/").concat(userid));
          }
        }, {
          key: "showDetailServiceInExcelDataWithFile",
          value: function showDetailServiceInExcelDataWithFile(file, extSysNameData, processNameData, filename) {
            // return this.http.post(
            //   `${API_URL}/excelDataProcessing/getExcelFile`,file
            var formdata = new FormData();
            formdata.append("file", file);
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest("POST", "".concat(_API_URL, "/excelDataProcessing/getExcelFile/").concat(extSysNameData, "/").concat(processNameData, "/").concat(filename), formdata, {
              reportProgress: true,
              responseType: "text"
            });
            return this.http.request(req);
          }
        }, {
          key: "rejectCallApi",
          value: function rejectCallApi(deUploadReqDTO, authorizer, rejectReason) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/reject/").concat(authorizer, "/").concat(rejectReason), deUploadReqDTO);
          }
        }, {
          key: "approveDetailsData",
          value: function approveDetailsData(deUploadReqDTO, authorizer) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/doFirstLevelAuthorization/").concat(authorizer), deUploadReqDTO);
          }
        }, {
          key: "processDeUploadt",
          value: function processDeUploadt(deUploadReqDTO, user_id) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/processDeUpload/").concat(user_id), deUploadReqDTO);
          }
        }, {
          key: "getFirstAndSecondAuthAuditService",
          value: function getFirstAndSecondAuthAuditService(getDetailsQueryToggleReqDTO) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/getFirstAndSecondLevelAuthAuditLog/"), getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "sendUpdatedDataToDetailsData",
          value: function sendUpdatedDataToDetailsData(modifiedDetailsDataReqDTO, userName) {
            return this.http.post("".concat(_API_URL, "/dataModificationDetails/saveAndUpdateDetails/").concat(userName), modifiedDetailsDataReqDTO);
          }
        }, {
          key: "queryDetailsDataByParamService",
          value: function queryDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/getDetailsDataByToggleQuery"), getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "getDetailsListServiceFirst",
          value: function getDetailsListServiceFirst() {
            return this.http.get("".concat(_API_URL, "/excelDataAuthFirst/getExcelDetail"));
          }
        }, {
          key: "getPendingForAuthDataFirst",
          value: function getPendingForAuthDataFirst(userId) {
            return this.http.get("".concat(_API_URL, "/excelDataAuthFirst/getPendingAuth/").concat(userId));
          }
        }, {
          key: "getAuditDataOfDetailsRecord",
          value: function getAuditDataOfDetailsRecord(detailsDto) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/getAuditLogOfDetailRecord/"), detailsDto);
          }
        }, {
          key: "queryFailedDetailsDataByParamService",
          value: function queryFailedDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
            return this.http.post("".concat(_API_URL, "/dataModificationDetails/getDetailsDataByToggleQuery"), getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "getPendingForAuthDataForModification",
          value: function getPendingForAuthDataForModification(user_id) {
            return this.http.get("".concat(_API_URL, "/dataModificationDetails/getPendingAuth/").concat(user_id));
          }
        }, {
          key: "excelModifyAuthorization",
          value: function excelModifyAuthorization(PendingForAuthDetailsDTOList, user) {
            return this.http.post("".concat(_API_URL, "/dataModificationDetails/sendforAuth/").concat(user), PendingForAuthDetailsDTOList);
          }
        }, {
          key: "getFailedDetailsListService",
          value: function getFailedDetailsListService() {
            return this.http.get("".concat(_API_URL, "/dataModificationDetails/getFailedDetailsList"));
          }
        }, {
          key: "authorizeSecondLevel",
          value: function authorizeSecondLevel(pendingForAuthDetailsListAll, authorizer) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthSecond/doSecondLevelAuthorization/").concat(authorizer), pendingForAuthDetailsListAll);
          }
        }, {
          key: "getSecondLevelAuthDetailsData",
          value: function getSecondLevelAuthDetailsData() {
            return this.http.get("".concat(_API_URL, "/excelDataAuthSecond/getSecondAuthDetailsData"));
          } // queryDetailsDataByParamServiceSecond(
          //   getDetailsQueryToggleReqDTO: GetDetailsQueryToggleReqDTO
          // ) {
          //   return this.http.post<PendingForAuthDetailsDTO>(
          //     `${API_URL}/excelDataAuthSecond/getDetailsDataByToggleQuery`,
          //     getDetailsQueryToggleReqDTO
          //   );
          // }

        }, {
          key: "queryDetailsDataByParamServiceSecond",
          value: function queryDetailsDataByParamServiceSecond(batchNo) {
            return this.http.get("".concat(_API_URL) + "/excelDataAuthSecond/getUploadDetailsData?batchNo=".concat(batchNo));
          } // queryDetailsDataByParamServiceSecond1(
          //   batchNo: GetDetailsQueryToggleReqDTO
          // ) {
          //   return this.http.post<PendingForAuthDetailsDTO>(
          //     `${API_URL}/excelDataAuthSecond/getUploadDetailsData/${batchNo}`,
          //   );
          // }

        }, {
          key: "processDeUpload",
          value: function processDeUpload(deUploadReqDTO, user_id) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/processDeUpload/").concat(user_id), deUploadReqDTO);
          }
        }, {
          key: "getPendingForAuthDataFirstError",
          value: function getPendingForAuthDataFirstError(userId) {
            return this.http.get("".concat(_API_URL, "/dataModificationDetails/getPendingAuth/").concat(userId));
          }
        }, {
          key: "getAllDept",
          value: function getAllDept() {
            return this.http.get("".concat(this.ext) + "/getAllAuthDepts");
          }
        }, {
          key: "saveExternalSystem",
          value: function saveExternalSystem(customer) {
            return this.http.post("".concat(this.ext) + "/create", customer);
          }
        }, {
          key: "setExternalSystemSummry",
          value: function setExternalSystemSummry(summaryData) {
            this.externalSystemData.next(summaryData);
          }
        }, {
          key: "getExternalSystemSummry",
          value: function getExternalSystemSummry() {
            return this.externalSystemData.asObservable();
          }
        }, {
          key: "updateexternalSystemEdit",
          value: function updateexternalSystemEdit(formData) {
            return this.http.put("".concat(this.ext) + "/update", formData);
          } // authorizingTheRecord(formData: object, name: string) {
          //   return this.http.put(`${this.ext}` + `/authorizetherecord/${name}`, formData)
          // }

        }, {
          key: "authorizingTheRecord",
          value: function authorizingTheRecord(extsobj, name) {
            return this.http.put("".concat(this.uriForExt) + "/authorizetherecordOfExteranlSystem/".concat(name), extsobj);
          }
        }, {
          key: "authorizingTheRecordExternal",
          value: function authorizingTheRecordExternal(extsobj, name) {
            return this.http.put("".concat(this.ext) + "/authorizetherecord/".concat(name), extsobj);
          }
        }, {
          key: "closingTheRecord",
          value: function closingTheRecord(formData) {
            return this.http.put("".concat(this.ext) + "/toClosingTheRecord", formData);
          }
        }, {
          key: "reopeningTheRecord",
          value: function reopeningTheRecord(formData) {
            return this.http.put("".concat(this.ext) + "/reopeningTheRecord", formData);
          }
        }, {
          key: "onClickOfDeleteOfUpdateExcel",
          value: function onClickOfDeleteOfUpdateExcel(formData) {
            return this.http.put("".concat(this.ext) + "/delete", formData);
          }
        }, {
          key: "fetchingBatchNo",
          value: function fetchingBatchNo() {
            return this.http.get("".concat(_API_URL, "/medUpload/getModule"));
          }
        }, {
          key: "getMappingSummary",
          value: function getMappingSummary() {
            return this.http.get("".concat(this.excelmap, "/fetchAllMappingData?pageNo=", 0, "&pageSize=", 1000));
          }
        }, {
          key: "getExcelMappingDataforEdit",
          value: function getExcelMappingDataforEdit(extSysCode, processName, extSys) {
            return this.http.get("".concat(this.excelmap, "/getExcelMappingInfo?extSysCode=").concat(extSysCode, "&processName=").concat(processName, "&extSys=").concat(extSys));
          }
        }, {
          key: "getTemplateMappingDataforEdit",
          value: function getTemplateMappingDataforEdit(externalSystem, processCode, currency, sheetNumber) {
            return this.http.get("".concat(this.excelmap, "/fetchExcelMapping?externalSystem=").concat(externalSystem, "&processCode=").concat(processCode, "&currency=").concat(currency, "&sheetNumber=").concat(sheetNumber));
          }
        }, {
          key: "deleteTemplateMapping",
          value: function deleteTemplateMapping(externalSystem, processCode, currency, sheetNumber) {
            return this.http["delete"]("".concat(this.excelmap, "/deleteMapping?externalSystem=").concat(externalSystem, "&processCode=").concat(processCode, "&currency=").concat(currency, "&sheetNumber=").concat(sheetNumber));
          }
        }, {
          key: "getAllExtsysNameAndProcessCodeOnAuthStatus",
          value: function getAllExtsysNameAndProcessCodeOnAuthStatus() {
            return this.http.get("".concat(this.uriForExt, "/getAllExternalSystemMap"));
          }
        }, {
          key: "getAllExtsysNameOnAuthStatus",
          value: function getAllExtsysNameOnAuthStatus() {
            return this.http.get("".concat(this.uriForExt, "/getAllExternalSystem"));
          }
        }, {
          key: "getAllExtCode",
          value: function getAllExtCode() {
            return this.http.get("".concat(this.uriForExt) + "/getAllExtCode");
          }
        }, {
          key: "getProcessNameByExtSysCode",
          value: function getProcessNameByExtSysCode(extSysCode) {
            return this.http.get("".concat(this.uriForExt, "/getAllProcessCodeForExternalSystem/").concat(extSysCode));
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            return this.http.get("".concat(this.uriForMap, "/getExtsysByExtCode/").concat(extSysCode), {
              responseType: "text"
            });
          }
        }, {
          key: "columnData",
          value: function columnData(formData, extSys, processName, headerRepeated, startingRow, extCode, currency, userId, sheetNumber) {
            return this.http.post("".concat(this.excelmap, "/postColumnMapping/").concat(extSys, "/").concat(processName, "/").concat(headerRepeated, "/").concat(startingRow, "/").concat(extCode, "/").concat(currency, "/").concat(userId, "/").concat(sheetNumber), formData);
          }
        }, {
          key: "fetchAllName",
          value: function fetchAllName(externalSystem, processCode, ccy) {
            return this.http.get("".concat(this.uriForMap, "/fetchAllName/").concat(externalSystem, "/").concat(processCode, "/").concat(ccy));
          }
        }, {
          key: "getCurrencyOnExtNameAndProcssCode",
          value: function getCurrencyOnExtNameAndProcssCode(extSysCode, processCode, extNameValue) {
            return this.http.get("".concat(this.uriForMap, "/gettingCurrency/").concat(extSysCode, "/").concat(processCode, "/").concat(extNameValue));
          }
        }, {
          key: "setexcelSummaryData",
          value: function setexcelSummaryData(excelsummary) {
            this.excelSummaryObject.next(excelsummary);
          }
        }, {
          key: "getexcelSummaryData",
          value: function getexcelSummaryData() {
            return this.excelSummaryObject.asObservable();
          }
        }, {
          key: "getAllMappingByExtSysAndProcessCode",
          value: function getAllMappingByExtSysAndProcessCode(externalSystem, processCode, ccy, sheetNumber) {
            return this.http.get("".concat(this.uriForMap, "/fetchAllMapping/").concat(externalSystem, "/").concat(processCode, "/").concat(ccy, "/").concat(sheetNumber));
          }
        }, {
          key: "updateMappingData",
          value: function updateMappingData(model, extNameValue, processCode, extSysCode, starting, isChecked, modifiedBy, ccy, sheetNumber) {
            return this.http.put("".concat(this.uriForMap, "/updateMapping/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(starting, "/").concat(isChecked, "/").concat(modifiedBy, "/").concat(ccy, "/").concat(sheetNumber), model);
          }
        }, {
          key: "deleteMappingRow",
          value: function deleteMappingRow(id) {
            return this.http["delete"]("".concat(this.uriForMap, "/deleteMappingRow/").concat(id));
          }
        }, {
          key: "onAuthorizingTheRecordOfExcelMApping",
          value: function onAuthorizingTheRecordOfExcelMApping(model, extNameValue, processCode, extSysCode, userId, ccy) {
            return this.http.put("".concat(this.uriForMap, "/authOfRecord/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(userId, "/").concat(ccy), model);
          }
        }, {
          key: "excelMappingAuditLog",
          value: function excelMappingAuditLog(model, operation) {
            return this.http.put("".concat(this.uriForMap, "/excelMapping/").concat(operation), model);
          }
        }, {
          key: "createTemplateMap",
          value: function createTemplateMap(obj) {
            return this.http.post("".concat(_API_URL, "/excelmap/createExcelMapping"), obj);
          }
        }, {
          key: "onClcikOFCloseOfUpdateExcelMApping",
          value: function onClcikOFCloseOfUpdateExcelMApping(model, extNameValue, processCode, extSysCode, ccy) {
            return this.http.put("".concat(this.uriForMap, "/closeOfRecord/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(ccy), model);
          }
        }, {
          key: "onClcikOfReopenOfUpdateExcelMapping",
          value: function onClcikOfReopenOfUpdateExcelMapping(model, extNameValue, processCode, extSysCode, ccy) {
            return this.http.put("".concat(this.uriForMap, "/reOpenOfRecord/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(ccy), model);
          }
        }, {
          key: "sendingBatchNumber",
          value: function sendingBatchNumber(batchNo) {
            console.log(batchNo);
            return this.http.get("".concat(_API_URL, "/medUpload/get/").concat(batchNo));
          }
        }, {
          key: "closingProcessCodeRecord",
          value: function closingProcessCodeRecord(obj) {
            return this.http.put("".concat(this.uriForExt, "/close"), obj);
          }
        }, {
          key: "reopeningProcessCodeRecord",
          value: function reopeningProcessCodeRecord(obj) {
            return this.http.put("".concat(this.uriForExt, "/reOpen"), obj);
          }
        }, {
          key: "authProcessCodeRecord",
          value: function authProcessCodeRecord(obj) {
            return this.http.put("".concat(this.uriForExt, "/authorize"), obj);
          }
        }, {
          key: "deleteProcessRecord",
          value: function deleteProcessRecord(extSysName, processCode, userIdLoggedIn) {
            return this.http["delete"]("".concat(this.uriForExt, "/").concat(extSysName, "/").concat(processCode, "/").concat(userIdLoggedIn), {
              responseType: "text"
            });
          }
        }, {
          key: "setCustomerSearch",
          value: function setCustomerSearch(data) {
            this.customerSearch.next(data);
          }
        }, {
          key: "getCustomerSearch",
          value: function getCustomerSearch() {
            return this.customerSearch.asObservable();
          }
        }, {
          key: "setSecurityPolicy",
          value: function setSecurityPolicy(data) {
            this.securityDetailsEdit.next(data);
          }
        }, {
          key: "getsecurityDetailsEdit",
          value: function getsecurityDetailsEdit() {
            return this.securityDetailsEdit.asObservable();
          }
        }, {
          key: "setAccountBlocking",
          value: function setAccountBlocking(data) {
            this.AccountBlocking.next(data);
          }
        }, {
          key: "getAccountBlocking",
          value: function getAccountBlocking() {
            return this.AccountBlocking.asObservable();
          }
        }, {
          key: "setCustomerSearchValues",
          value: function setCustomerSearchValues(data) {
            this.CustomerSearchFormValues.next(data);
          }
        }, {
          key: "getCustomerSearchValues",
          value: function getCustomerSearchValues() {
            return this.CustomerSearchFormValues.asObservable();
          }
        }]);

        return _ApiService;
      }();

      _ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ApiService,
        factory: _ApiService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    79389:
    /*!*****************************************************!*\
      !*** ./src/app/shared/services/jwt-auth.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DEMO_TOKEN": function DEMO_TOKEN() {
          return (
            /* binding */
            _DEMO_TOKEN
          );
        },

        /* harmony export */
        "DEMO_USER": function DEMO_USER() {
          return (
            /* binding */
            _DEMO_USER
          );
        },

        /* harmony export */
        "JwtAuthService": function JwtAuthService() {
          return (
            /* binding */
            _JwtAuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      75428);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _local_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./local-store.service */
      69122);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlBSQUJIQVQiLCJ1c2VySWQiOjEsInRlbGxlck5hbWUiOiJQUkFCSEFUIEsifQ.QwgZI9XZtYS6OUJLL1vlEHBi6KLCSgv7O10Kqi-uY_4";
      var _DEMO_USER = {
        "userName": "PRABHAT",
        "userId": 1,
        "tellerName": "PRABHAT K"
      };

      var _JwtAuthService = /*#__PURE__*/function () {
        function _JwtAuthService(ls, http, router, route) {
          _classCallCheck(this, _JwtAuthService);

          this.ls = ls;
          this.http = http;
          this.router = router;
          this.route = route;
          this.user = {};
          this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.user);
          this.JWT_TOKEN = "token";
          this.APP_USER = "ICUST_USER";
        }
        /**
        * Setter & getter for access token
        */


        _createClass(_JwtAuthService, [{
          key: "accessToken",
          get: function get() {
            var _a;

            return (_a = localStorage.getItem('accessToken')) !== null && _a !== void 0 ? _a : '';
          },
          set: function set(token) {
            localStorage.setItem('accessToken', token);
          }
        }, {
          key: "signin",
          value: function signin() {
            var _this21 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
              token: _DEMO_TOKEN,
              user: _DEMO_USER
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              _this21.setUserAndToken(res.token, res.user, !!res);

              _this21.signingIn = true;
              return res;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
            }));
          }
          /*
            checkTokenIsValid is called inside constructor of
            shared/components/layouts/admin-layout/admin-layout.component.ts
          */

        }, {
          key: "checkTokenIsValid",
          value: function checkTokenIsValid() {
            var _this22 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_DEMO_USER).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (profile) {
              _this22.setUserAndToken(_this22.getJwtToken(), profile, true);

              _this22.signingIn = false;
              return profile;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(error);
            }));
          }
        }, {
          key: "signout",
          value: function signout() {
            this.ls.clear();
            sessionStorage.clear();
            localStorage.removeItem('userFromLogin');
            localStorage.clear();
            this.signingIn = false;
            this.router.navigate(["/login"]);
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!this.getJwtToken();
          }
        }, {
          key: "getJwtToken",
          value: function getJwtToken() {
            return this.ls.getItem(this.JWT_TOKEN);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.ls.getItem(this.APP_USER);
          }
        }, {
          key: "setUserAndToken",
          value: function setUserAndToken(token, user, isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
            this.token = token;
            this.accessToken = token;
            this.user = user;
            this.user$.next(user);
            this.ls.setItem(this.JWT_TOKEN, token);
            this.ls.setItem(this.APP_USER, user); // sessionStorage.clear();
          }
        }, {
          key: "check",
          value: function check() {
            if (sessionStorage.getItem('user_id') != null || sessionStorage.getItem('user_id') === '') {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
            }
          }
        }, {
          key: "encodeData",
          value: function encodeData(data) {
            return btoa(data);
          }
        }, {
          key: "decodeData",
          value: function decodeData(data) {
            console.log("data decr", data);
            var user = atob(data);
            console.log("decr", user);
            return JSON.parse(user);
          }
        }, {
          key: "getEncryptedToken",
          value: function getEncryptedToken() {
            var user = this.getUser();
            var encodedUser = this.encodeData(user);
            return encodedUser;
          }
        }]);

        return _JwtAuthService;
      }();

      _JwtAuthService.ɵfac = function JwtAuthService_Factory(t) {
        return new (t || _JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_0__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
      };

      _JwtAuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _JwtAuthService,
        factory: _JwtAuthService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    69122:
    /*!********************************************************!*\
      !*** ./src/app/shared/services/local-store.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalStoreService": function LocalStoreService() {
          return (
            /* binding */
            _LocalStoreService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LocalStoreService = /*#__PURE__*/function () {
        function _LocalStoreService() {
          _classCallCheck(this, _LocalStoreService);

          this.ls = window.localStorage;
        }

        _createClass(_LocalStoreService, [{
          key: "setItem",
          value: function setItem(key, value) {
            value = JSON.stringify(value);
            this.ls.setItem(key, value);
            return true;
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            var value = this.ls.getItem(key);

            try {
              return JSON.parse(value);
            } catch (e) {
              return null;
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.ls.clear();
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            this.ls.removeItem(key);
          }
        }, {
          key: "getParameterByName",
          value: function getParameterByName(name) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
          }
        }]);

        return _LocalStoreService;
      }();

      _LocalStoreService.ɵfac = function LocalStoreService_Factory(t) {
        return new (t || _LocalStoreService)();
      };

      _LocalStoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LocalStoreService,
        factory: _LocalStoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77382:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/role.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoleService": function RoleService() {
          return (
            /* binding */
            _RoleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316); //import { AppConstants } from 'app/config/app.constant';


      var _RoleService = /*#__PURE__*/function () {
        function _RoleService(http) {
          _classCallCheck(this, _RoleService);

          this.http = http;
          this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
          this.tabData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.screenLabelList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels());
          this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.screenpermissions = []; //public screenLabelList = new BehaviorSubject([]);

          this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.httpHeader = {
            header: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
              'Content-type': 'application/json'
            })
          };
          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            index: ''
          });
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
          this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/role';
          this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/medRoles';
          this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        }

        _createClass(_RoleService, [{
          key: "setIndexValue",
          value: function setIndexValue(index) {
            this.Index.next(index);
          }
        }, {
          key: "getIndexValue",
          value: function getIndexValue() {
            return this.Index.asObservable();
          }
        }, {
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "createRoles",
          value: function createRoles(role) {
            // return this.http.delete(`${this._baseURL}/${userId}/${userIdLoggedIn}`, { responseType: 'text' });
            return this.http.post("".concat(this._baseURL) + '/createRole', role);
          }
        }, {
          key: "getRoleByRoleName",
          value: function getRoleByRoleName(roleName) {
            return this.http.get("".concat(this._baseURL, "/").concat(roleName));
          }
        }, {
          key: "getAllRoles",
          value: function getAllRoles() {
            //return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this.baseURL) + '/users' + '/getAllAuthRole');
          }
        }, {
          key: "getAllDept",
          value: function getAllDept() {
            //return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this.baseURL) + '/users' + '/getAllAuthDepts');
          }
        }, {
          key: "getAllRolesSummary",
          value: function getAllRolesSummary() {
            //return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this._fmosbaseURL) + '/fetchAllRolesSummary');
          }
        }, {
          key: "fetchAllAuthRoles",
          value: function fetchAllAuthRoles() {
            return this.http.get("".concat(this._baseURL) + '/fetchAuthRoles');
          }
        }, {
          key: "modifyRoleService",
          value: function modifyRoleService(modifyRole) {
            return this.http.put("".concat(this._baseURL) + "/modifyRole", modifyRole);
          }
        }, {
          key: "newmodifyRoleService",
          value: function newmodifyRoleService(modifyRole) {
            return this.http.put("".concat(this._fmosbaseURL) + "/modifyRole", modifyRole);
          }
        }, {
          key: "verifyRole",
          value: function verifyRole(roleName, userIdLoggedIn) {
            // return this.http.get(`${this._baseURL}/${roleName}/${userIdLoggedIn}`);
            return this.http.get("".concat(this._fmosbaseURL, "/authorize/").concat(roleName, "/").concat(userIdLoggedIn));
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(roleName, userIdLoggedIn) {
            return this.http["delete"]("".concat(this._fmosbaseURL, "/").concat(roleName, "/").concat(userIdLoggedIn), {
              responseType: 'text'
            });
          }
        }, {
          key: "closelockRecord",
          value: function closelockRecord(roleName, userIdLoggedIn) {
            return this.http.get("".concat(this._fmosbaseURL, "/close/").concat(roleName, "/").concat(userIdLoggedIn));
          }
        }, {
          key: "reopenRecord",
          value: function reopenRecord(roleName, userIdLoggedIn) {
            return this.http.get("".concat(this._fmosbaseURL, "/reopen/").concat(roleName, "/").concat(userIdLoggedIn));
          } //permission

        }, {
          key: "getAllPermission",
          value: function getAllPermission() {
            return this.http.get("".concat(this._baseURL) + '/permission');
          }
        }, {
          key: "fetchScreenData",
          value: function fetchScreenData() {
            var userIdLoggedIn = localStorage.getItem('userFromLogin');
            return this.http.get("".concat(this._fmosbaseURL, "/allScreenUser/").concat(userIdLoggedIn));
          }
        }, {
          key: "fetchnewscreenlabels",
          value: function fetchnewscreenlabels() {
            return this.http.get("".concat(this._fmosbaseURL) + '/fetchTabLabelAndScreen');
          }
        }, {
          key: "createnewrole",
          value: function createnewrole(roledata) {
            console.log(roledata);
            return this.http.post("".concat(this._fmosbaseURL) + '/saveRoleDetails', roledata);
          }
        }, {
          key: "fetchfmosroles",
          value: function fetchfmosroles() {
            var userIdLoggedIn = localStorage.getItem('userFromLogin');
            return this.http.get("".concat(this._fmosbaseURL, "/allRolePermissionForUser/").concat(userIdLoggedIn));
          }
        }, {
          key: "fetchScreenPermissions",
          value: function fetchScreenPermissions(screenName) {
            var userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
            console.log('scr', screenName, userPermissions);
            var labellist = [];
            this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();

            if (userPermissions) {
              var labelList = userPermissions.labels;

              if (labelList) {
                labelList.sort(function (a, b) {
                  return a.labelId - b.labelId;
                });
              }

              var permissionList = userPermissions.screenAndPermissionsDTO;
              console.log(permissionList);

              if (permissionList) {
                var idexist = permissionList.findIndex(function (item) {
                  return item.screenName.toLowerCase() == screenName.toLowerCase();
                });

                if (idexist >= 0) {
                  var rolelist = permissionList[idexist];
                  var screenvisibility = rolelist.permissions.toString();

                  for (var i = 0; i < screenvisibility.length; i++) {
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
            console.log('scr', this.screenLabelList);
          }
        }, {
          key: "fetchNewRolePermissions",
          value: function fetchNewRolePermissions(userIdLoggedIn) {
            var _this23 = this;

            this.http.get("".concat(this._fmosbaseURL, "/allRolePermissionForUser/").concat(userIdLoggedIn)).subscribe(function (data) {
              _this23.storeuserpermissions = data;
              localStorage.setItem('userPermissions', JSON.stringify(_this23.storeuserpermissions));
              console.log(_this23.storeuserpermissions);
            });
          } //dynamic roles

        }, {
          key: "fetchdynamicrolesdata",
          value: function fetchdynamicrolesdata(roleName) {
            return this.http.get("".concat(this._fmosbaseURL, "/fetchRoleData/").concat(roleName));
          } //end of dynamic roles

        }, {
          key: "preparingrolesdata",
          value: function preparingrolesdata(data) {
            var arrayC = [];
            var arrayB = data.screenDto;
            var labelsarray = data.labelDto;
            var permissionsarray = data.permissionDto; //fetch screens for tabs

            data.tabDto.forEach(function (element) {
              var screen = [];
              var screenslist = []; //fetching screen list 

              arrayB.forEach(function (items) {
                if (element.tabId == items.screensId.tabId) {
                  var idexist = permissionsarray.findIndex(function (item) {
                    return item.permissionId.screenId == items.screensId.screenId;
                  });
                  screen.push(items.screenName);
                  screenslist.push({
                    screenname: items.screenName,
                    screenid: items.screensId.screenId,
                    permission: permissionsarray[idexist].permissions
                  });
                }
              }); //end of fetching screen list
              //fetching labels for screen

              var screenvisibility = element.visibility.toString();
              var label = [];
              var labellist = [];

              for (var i = 0; i < screenvisibility.length; i++) {
                if (screenvisibility.charAt(i) == 1) {
                  label.push(labelsarray[i].labelName);
                  labellist.push(labelsarray[i]);
                }
              } //end of fetching labels for screen


              arrayC.push({
                tabname: element.tabName,
                screens: screen,
                screenlist: screenslist,
                labels: label,
                labelslist: labellist
              });
            });
            this.tabData.next(arrayC);
          }
        }, {
          key: "EnablescreenPermissions",
          value: function EnablescreenPermissions() {
            var _this24 = this;

            console.log(localStorage.getItem('userPermissions'));
            var userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
            console.log(userPermissions);
            var permissionlist = [];

            if (userPermissions) {
              var labelsdata = userPermissions.labels;
              labelsdata.sort(function (a, b) {
                return a.labelId - b.labelId;
              });
              var screensdata = userPermissions.screenAndPermissionsDTO;
              var viewindex = labelsdata.findIndex(function (item) {
                return item.labelName.toLowerCase() == 'view';
              });
              ;

              for (var i = 0; i < screensdata.length; i++) {
                var data = screensdata[i].permissions.toString();

                if (data.charAt(viewindex) == 1 || data.charAt(viewindex) == "1") {
                  permissionlist.push(screensdata[i].screenName);
                }
              } //for loop endng

            } //if
            //console.log("methods are ",permissionlist);


            this.screenwisePermissions.next(permissionlist);
            this.screenwisePermissions.subscribe(function (message) {
              return _this24.screenpermissions = message;
            }); // console.log("screen permissions final", this.screenpermissions);
          }
        }]);

        return _RoleService;
      }();

      _RoleService.ɵfac = function RoleService_Factory(t) {
        return new (t || _RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _RoleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _RoleService,
        factory: _RoleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    98613:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/user.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "API_URL": function API_URL() {
          return (
            /* binding */
            _API_URL2
          );
        },

        /* harmony export */
        "rolepermission": function rolepermission() {
          return (
            /* binding */
            _rolepermission
          );
        },

        /* harmony export */
        "UsersService": function UsersService() {
          return (
            /* binding */
            _UsersService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _API_URL2 = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;

      var _rolepermission = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/rolePermission'; //export const rolepermission1 = AppConstants.baseURL + '/fmsRoles';
      //export const API_URL = 'http://192.168.0.142:8010';
      //export const API_URL = 'http://localhost:8010';
      //export const API_URL = 'http://192.168.0.113:8010';


      var _UsersService = /*#__PURE__*/function () {
        function _UsersService(http) {
          _classCallCheck(this, _UsersService);

          this.http = http;
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
            index: ''
          });
        }

        _createClass(_UsersService, [{
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "setIndexValue",
          value: function setIndexValue(index) {
            this.Index.next(index);
          }
        }, {
          key: "getIndexValue",
          value: function getIndexValue() {
            return this.Index.asObservable();
          }
        }, {
          key: "getRoleScreenPermission",
          value: function getRoleScreenPermission(userId, screenName, roleName) {
            return this.http.get("".concat(_rolepermission, "/getRolePermission/").concat(userId, "/").concat(screenName, "/").concat(roleName));
          }
        }, {
          key: "getUserAuditService",
          value: function getUserAuditService(userId) {
            return this.http.get("".concat(_API_URL2, "/users/getModifiedUser/").concat(userId));
          }
        }, {
          key: "getUserObjModified",
          value: function getUserObjModified(userId) {
            return this.http.get("".concat(_API_URL2, "/users/getModifiedUser/").concat(userId));
          }
        }, {
          key: "createUserService",
          value: function createUserService(user) {
            return this.http.post("".concat(_API_URL2, "/users/createUser"), user);
          }
        }, {
          key: "modifyUserService",
          value: function modifyUserService(user) {
            return this.http.post("".concat(_API_URL2, "/users/modifyUser"), user);
          }
        }, {
          key: "uploadDocument",
          value: function uploadDocument(uploadData) {
            return this.http.post("".concat(_API_URL2, "/users/uploadProfileImage"), uploadData);
          }
        }, {
          key: "getCustomerDocuments",
          value: function getCustomerDocuments(userId) {
            return this.http.get("".concat(_API_URL2, "/users/getProfileImage?userId=").concat(userId));
          }
        }, {
          key: "deleteProfileImage",
          value: function deleteProfileImage(userId) {
            return this.http["delete"]("".concat(_API_URL2, "/users/deleteProfileImage/").concat(userId));
          }
        }, {
          key: "getAllUsersListService",
          value: function getAllUsersListService() {
            return this.http.get("".concat(_API_URL2, "/users/getAllUsers"));
          }
        }, {
          key: "getAllRoleNameService",
          value: function getAllRoleNameService() {
            return this.http.get("".concat(_API_URL2, "/users/getAllRoleNames"));
          }
        }, {
          key: "getAllRoleNameServiceU",
          value: function getAllRoleNameServiceU() {
            return this.http.get("".concat(_API_URL2, "/users/getAllRoleNamesU"));
          }
        }, {
          key: "getAllAuthRole",
          value: function getAllAuthRole() {
            return this.http.get("".concat(_API_URL2, "/medRoles/fetchAllRolesSummary"));
          } // audit log starts

        }, {
          key: "onClickOfAuthOfUsers",
          value: function onClickOfAuthOfUsers(authUser) {
            return this.http.get("".concat(_API_URL2, "/users/getAllRoleNames"));
          }
        }, {
          key: "onClickOfOpenOfUsers",
          value: function onClickOfOpenOfUsers() {} // Audit log  ends for User creatrion
          // -------------------User Modification-------------
          // audit log for User Modification Starts

        }, {
          key: "onClickOfAuthOfModifyUsers",
          value: function onClickOfAuthOfModifyUsers(obj) {
            return this.http.put("".concat(_API_URL2, "/users/authorizeUser"), obj);
          }
        }, {
          key: "onClickOfCloseOfModifyUsers",
          value: function onClickOfCloseOfModifyUsers(authDto) {
            return this.http.put("".concat(_API_URL2, "/users/closeUser"), authDto);
          }
        }, {
          key: "onClickOfReopenOfModifyUser",
          value: function onClickOfReopenOfModifyUser(authDto) {
            return this.http.put("".concat(_API_URL2, "/users/reopenUser"), authDto);
          }
        }, {
          key: "onClickOfDeleteOfModifyUser",
          value: function onClickOfDeleteOfModifyUser(userobjForDelete) {
            return this.http["delete"]("".concat(_API_URL2, "/users/deleteUser/").concat(userobjForDelete));
          }
        }, {
          key: "statusChangeUser",
          value: function statusChangeUser(user_id) {
            return this.http.get("".concat(_API_URL2, "/users/statusUser/").concat(user_id));
          }
        }, {
          key: "refreshGl",
          value: function refreshGl() {
            return this.http.get("".concat(_API_URL2, "/refxch"));
          }
        }, {
          key: "saveTheme",
          value: function saveTheme(userId, theme) {
            return this.http.put("".concat(_API_URL2, "/users/updateTheme/").concat(userId, "/").concat(theme), userId);
          }
        }]);

        return _UsersService;
      }();

      _UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || _UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _UsersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _UsersService,
        factory: _UsersService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    89019:
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        production: true,
        // MEDIAN_URL: 'http://10.127.43.228:8080/median',
        // ACC_CLOSER_URL: 'http://10.127.43.228:8080/medianAccountClosure'//account closer new
        //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2.2',
        //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianAccountClosure'//account closer new
        // MEDIAN_URL: 'https://10.137.145.90:8443/medianv2.2',
        //ACC_CLOSER_URL: 'https://10.137.145.90:8443/medianAccountClosure'//account closer new
        // MEDIAN_URL: 'https://10.137.160.96:8443/medianv2',
        // ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianv2'//account closer new
        //Currently Using Ports
        MEDIAN_URL: "http://192.168.0.14:8081/medianv2",
        //  MEDIAN_URL : 'http://localhost:9191',
        //ACC_CLOSER_URL: 'http://localhost:9192'
        // MEDIAN_URL: 'http://192.168.0.14:9003/medianBanzpay',
        // ACC_CLOSER_URL: 'http://192.168.0.9003/medianAccountClosure'
        //  MEDIAN_URL: 'http://192.168.0.96:9193',
        //  MEDIAN_URL: 'http://192.168.0.14:9003/medianv2',
        ACC_CLOSER_URL: 'http://192.168.0.14:8081/medianAccountClosure' // ACC_CLOSER_URL: 'http://192.168.0.14:9004/medianv2'
        ///////////////////DTB KENYA//////////////////////
        // MEDIAN_URL: 'https://10.137.161.200:1057/medianv2',
        // ACC_CLOSER_URL: 'https://10.137.161.200:1057/medianv2'

      };
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment2
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment2 = {
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

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map