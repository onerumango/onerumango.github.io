(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_rule-mapping_rule-mapping_module_ts"], {
    /***/
    74982:
    /*!***********************************************************************!*\
      !*** ./src/app/views/rule-mapping/conversion/conversion.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConversionComponent": function ConversionComponent() {
          return (
            /* binding */
            _ConversionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ConversionComponent_table_7_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th");
        }
      }

      function ConversionComponent_table_7_td_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConversionComponent_table_7_td_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r4.process();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Process ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r3.conversionForm.valid);
        }
      }

      function ConversionComponent_table_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ConversionComponent_table_7_th_5_Template, 1, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Response");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ConversionComponent_table_7_td_13_Template, 3, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.referenceId == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dataReq);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.referenceId == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dataResp);
        }
      }

      function ConversionComponent_table_8_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th");
        }
      }

      function ConversionComponent_table_8_td_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConversionComponent_table_8_td_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r8.process();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Process ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r7.conversionForm.valid);
        }
      }

      function ConversionComponent_table_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ConversionComponent_table_8_th_5_Template, 1, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Response");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ConversionComponent_table_8_td_13_Template, 3, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referenceId == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.dataResp);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referenceId == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.dataReq);
        }
      }

      var _c0 = function _c0() {
        return ["/rule-mapping/summary"];
      };

      var _ConversionComponent = /*#__PURE__*/function () {
        function _ConversionComponent(rulelist, router, addSystem, fb) {
          _classCallCheck(this, _ConversionComponent);

          this.rulelist = rulelist;
          this.router = router;
          this.addSystem = addSystem;
          this.fb = fb;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.dtOptions = {};
          this.ruleMappingListResp = [];
          this.dataReq = "6547457";
        }

        _createClass(_ConversionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.link = localStorage.getItem("link");
            this.addSystem.getReference().subscribe(function (resp) {
              console.log(resp.referenceId);

              if (resp.referenceId == undefined) {
                resp.referenceI = '';
              }

              _this.referenceId = resp.referenceId;

              if (_this.referenceId != "") {
                _this.getRespAndRequest();
              }
            });
            this.conversionForm = this.fb.group({
              FCUBS_HEADER: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
            });
          }
        }, {
          key: "getRespAndRequest",
          value: function getRespAndRequest() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "http://192.168.0.14:8082/MessageConverter/fetchReqRes?reqType=incoming&referenceNo=".concat(this.referenceId));
            var xmlDoc;
            var self = this;

            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp); // self.dataResp =this.response;

                self.conversionForm.get('FCUBS_HEADER').setValue(this.response);
                ;
              } else if (xmlhttp.readyState == 4 && xmlhttp.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: "Provided Input is incorrect",
                  icon: 'error'
                });
              }
            };

            xmlhttp.setRequestHeader("Content-Type", "application/xml");
            xmlhttp.send('');
            var xmlhttpResp = new XMLHttpRequest();
            xmlhttpResp.open("GET", "http://192.168.0.14:8082/MessageConverter/fetchReqRes?reqType=outgoing&referenceNo=".concat(this.referenceId));
            var xmlDoc;
            var self1 = this;

            xmlhttpResp.onreadystatechange = function () {
              if (xmlhttpResp.readyState == 4 && xmlhttpResp.status == 200) {
                console.log(xmlhttpResp);
                self1.dataResp = this.response;
              } else if (xmlhttpResp.readyState == 4 && xmlhttpResp.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: "Provided Input is incorrect",
                  icon: 'error'
                });
              }
            };

            xmlhttpResp.setRequestHeader("Content-Type", "application/xml");
            xmlhttpResp.send('');
          }
        }, {
          key: "process",
          value: function process() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", 'http://192.168.0.14:8082/MessageConverter/MT-MX?mx=PAC008&mt=103');
            var xmlDoc;
            var self = this;

            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp);
                self.dataResp = this.response;
              } else if (xmlhttp.readyState == 4 && xmlhttp.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: "Provided Input is incorrect",
                  icon: 'error'
                });
              }
            };

            xmlhttp.setRequestHeader("Content-Type", "application/xml");
            xmlhttp.send(this.conversionForm.value.FCUBS_HEADER);
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            this.conversionForm.get('FCUBS_HEADER').setValue('');
            this.dataResp = null;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "exit",
          value: function exit() {
            this.addSystem.setReference({
              referenceId: ''
            });
            localStorage.setItem('link', '');
          }
        }]);

        return _ConversionComponent;
      }();

      _ConversionComponent.ɵfac = function ConversionComponent_Factory(t) {
        return new (t || _ConversionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_1__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
      };

      _ConversionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ConversionComponent,
        selectors: [["npr-conversion"]],
        decls: 13,
        vars: 5,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["novalidate", "", 3, "formGroup"], ["style", "width: 100%", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink", "click"], [2, "width", "100%"], [4, "ngIf"], [2, "margin-top", "2%"], ["id", "exampleFormControlTextarea1", "rows", "15", "formControlName", "FCUBS_HEADER", 1, "form-control", "rounded-0", 2, "width", "80%"], ["id", "exampleFormControlTextarea1", "rows", "15", 1, "form-control", "rounded-0", 2, "width", "80%"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"]],
        template: function ConversionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Conversion");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ConversionComponent_table_7_Template, 17, 4, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ConversionComponent_table_8_Template, 17, 4, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConversionComponent_Template_a_click_11_listener() {
              return ctx.exit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.conversionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link == "incoming" || ctx.link == "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.link == "outgoing");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    7622:
    /*!*****************************************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping-create/rule-mapping-create.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingCreateComponent": function RuleMappingCreateComponent() {
          return (
            /* binding */
            _RuleMappingCreateComponent
          );
        },

        /* harmony export */
        "MdmtMessageMapping": function MdmtMessageMapping() {
          return (
            /* binding */
            _MdmtMessageMapping
          );
        },

        /* harmony export */
        "MdmtMessageMappingDet": function MdmtMessageMappingDet() {
          return (
            /* binding */
            _MdmtMessageMappingDet
          );
        },

        /* harmony export */
        "MdmtMsgTransDetails": function MdmtMsgTransDetails() {
          return (
            /* binding */
            _MdmtMsgTransDetails
          );
        },

        /* harmony export */
        "ruleMapDto": function ruleMapDto() {
          return (
            /* binding */
            _ruleMapDto
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function RuleMappingCreateComponent_ng_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extsys_r20 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", extsys_r20)("hidden", extsys_r20 == ctx_r0.sourseSys);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", extsys_r20, " ");
        }
      }

      function RuleMappingCreateComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_25_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r21.onSelectionOFMessageType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " --Please select-- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_32_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", opt_r24.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", opt_r24.headerValue, " ");
        }
      }

      function RuleMappingCreateComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " --Please select-- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleMappingCreateComponent_div_32_option_4_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.translationDataOperation);
        }
      }

      function RuleMappingCreateComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_39_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var serv_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", serv_r26.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", serv_r26.headerValue, " ");
        }
      }

      function RuleMappingCreateComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " --Please select-- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleMappingCreateComponent_div_39_option_4_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.translationDataService);
        }
      }

      function RuleMappingCreateComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_53_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r27.msgTypeOfDestination($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " --Please select-- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_60_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", opt_r30.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", opt_r30.headerValue, " ");
        }
      }

      function RuleMappingCreateComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " --Please select-- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleMappingCreateComponent_div_60_option_4_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r9.translationDestDataOperation);
        }
      }

      function RuleMappingCreateComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_67_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var serv_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", serv_r32.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", serv_r32.headerValue, " ");
        }
      }

      function RuleMappingCreateComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " --Please select-- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleMappingCreateComponent_div_67_option_4_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r11.translationDestDataService);
        }
      }

      function RuleMappingCreateComponent_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Source System");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_9_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_9_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r53 = ctx.$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r52["try"](tag_r53.messagebasis))("value", tag_r53.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r53.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_9_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_9_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r54.onselectOfFieldNo($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_9_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r38.updateRuleMappingSrc);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_10_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_10_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r60 = ctx.$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r59["try"](tag_r60.messagebasis))("value", tag_r60.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r60.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_10_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_10_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r63);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r61.onselectOfFieldNo($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_10_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r39.updateRuleMappingSrc);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_11_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_11_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r67 = ctx.$implicit;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r66["try"](tag_r67.messagebasis))("value", tag_r67.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r67.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_11_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_11_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r68.onselectOfFieldNo($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_11_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r40.updateRuleMappingSrc);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_12_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Column Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_12_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r74 = ctx.$implicit;

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r73["try"](tag_r74.messagebasis))("value", tag_r74.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r74.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_12_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_12_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r75.onselectOfFieldNo($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_12_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r41.updateRuleMappingSrc);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_13_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_13_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", tag_r81.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r81.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_13_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_13_option_3_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r42.updateRuleMappingSrc);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_label_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Destination system");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_18_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_18_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r85 = ctx.$implicit;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r84.try2(fname_r85.messagebasis))("value", fname_r85.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", fname_r85.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_18_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_18_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r89);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r87.onselectOfFieldNo2($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_18_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r44.updateRuleMappingDest);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_19_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_19_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r93 = ctx.$implicit;

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r92.try2(fname_r93.messagebasis))("value", fname_r93.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", fname_r93.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_19_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_19_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r97);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r95.onselectOfFieldNo2($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_19_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r45.updateRuleMappingDest);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_20_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_20_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r101 = ctx.$implicit;

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r100.try2(fname_r101.messagebasis))("value", fname_r101.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", fname_r101.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_20_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_20_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r105);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r103.onselectOfFieldNo2($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_20_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r46.updateRuleMappingDest);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_21_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Column Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_21_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r109 = ctx.$implicit;

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r108.try2(tag_r109.messagebasis))("value", tag_r109.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r109.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_21_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_21_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r112);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r110.onselectOfFieldNo2($event, i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_21_option_3_Template, 2, 3, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r47.updateRuleMappingDest);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_22_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_22_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r116 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", tag_r116.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r116.messagebasis, " ");
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_22_label_1_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_22_option_3_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r48.updateRuleMappingDest);
        }
      }

      function RuleMappingCreateComponent_div_72_ng_container_2_label_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "first-image": a0,
          image: true
        };
      };

      function RuleMappingCreateComponent_div_72_ng_container_2_a_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_72_ng_container_2_a_31_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r120);

            var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r118.deleteRuleMapGroup(i_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, i_r36 === 0));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          first: a0,
          "form-control": true,
          path: true
        };
      };

      function RuleMappingCreateComponent_div_72_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RuleMappingCreateComponent_div_72_ng_container_2_label_6_Template, 4, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_9_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_10_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_11_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_12_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_13_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, RuleMappingCreateComponent_div_72_ng_container_2_label_15_Template, 2, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_18_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_19_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_20_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_21_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RuleMappingCreateComponent_div_72_ng_container_2_ng_container_22_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, RuleMappingCreateComponent_div_72_ng_container_2_label_24_Template, 2, 0, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, RuleMappingCreateComponent_div_72_ng_container_2_a_31_Template, 2, 3, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r36 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.sourceLabel == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.sourceLabel == "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.sourceLabel == "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.sourceLabel == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.sourceLabel == "MT" || ctx_r33.sourceLabel == "MX");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.labelsDestination == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.labelsDestination == "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.labelsDestination == "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.labelsDestination == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.labelsDestination == "MT" || ctx_r33.labelsDestination == "MX");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r36 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c1, i_r36 === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r33.submit);
        }
      }

      function RuleMappingCreateComponent_div_72_a_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_72_a_5_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r123);

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r122.addRuleDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RuleMappingCreateComponent_div_72_ng_container_2_Template, 32, 18, "ng-container", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, RuleMappingCreateComponent_div_72_a_5_Template, 3, 0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r13.rulemappingDetail.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.submit);
        }
      }

      function RuleMappingCreateComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_74_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r125);

            var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r124.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r14.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r14.roleCodes.edit.labelDescription, " ");
        }
      }

      function RuleMappingCreateComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_78_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r127);

            var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r126.auditChangeRuleTranslation("auth");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r15.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.roleCodes.auth.labelDescription, " ");
        }
      }

      function RuleMappingCreateComponent_div_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_79_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r129);

            var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r128.auditChangeRuleTranslation("close");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r16.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r16.roleCodes.close.labelDescription, " ");
        }
      }

      function RuleMappingCreateComponent_div_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_80_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r131);

            var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r130.auditChangeRuleTranslation("open");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r17.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r17.roleCodes.reopen.labelDescription, " ");
        }
      }

      function RuleMappingCreateComponent_div_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_81_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r133);

            var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r132.deleteRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r18.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r18.roleCodes["delete"].labelDescription, " ");
        }
      }

      function RuleMappingCreateComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "img", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "First Time Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Authorization Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "img", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 8, ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.createdTime, "MM/dd/yyyy, h:mm a"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.recordStatus) == "O" ? "OPEN" : (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.recordStatus) == "C" ? "CLOSED" : ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.recordStatus, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](63, 11, ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedTime, "MM/dd/yyyy, h:mm a"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedEver) == "N" ? "NO" : (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedEver) == "Y" ? "YES" : ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedEver, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedStatus) == "N" || (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedStatus) == "U" ? "UNAUTHORIZED" : (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedStatus) == "Y" || (ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedStatus) == "A" ? "AUTHORIZED" : ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.approvedStatus, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r19.addSysRespData == null ? null : ctx_r19.addSysRespData.versionNo);
        }
      }

      var _c2 = function _c2() {
        return ["/rule-mapping/summary"];
      };

      var _RuleMappingCreateComponent = /*#__PURE__*/function () {
        function _RuleMappingCreateComponent(rulemap, router, roleService, fb, addSystem, formBuilder, cdr, toastService, canDeactivateGuard) {
          _classCallCheck(this, _RuleMappingCreateComponent);

          this.rulemap = rulemap;
          this.router = router;
          this.roleService = roleService;
          this.fb = fb;
          this.addSystem = addSystem;
          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.toastService = toastService;
          this.canDeactivateGuard = canDeactivateGuard;
          this.fieldNoData = [];
          this.disableFetchBtn = false;
          this.disableSubmitBtn = false;
          this.disableResetBtn = false;
          this.showAuditLog = false;
          this.isSelected = true;
          this.hideFetch = false;
          this.hideSubmit = false;
          this.fieldValueData = [];
          this.showFieldNoValue = 1;
          this.xmlLength = [];
          this.temparray = [];
          this.tempArrayList = [];
          this.tempArrayList2 = [];
          this.rulemappingDest = new _MdmtMessageMapping();
          this.mappingObj = new _MdmtMessageMapping();
          this.messageBasisIso = [];
          this.destinationData = [];
          this.sourceData = [];
          this.ruleDto = new _ruleMapDto();
          this.afterSubmit = false;
          this.submit = true;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject(); // externalsystem: any = [];

          this.externalCreateSystemFiltered = [];
          this.sourceMsg = true;
          this.destinationMsg = true;
          this.multipleOperation = true;
          this.multipleOperation1 = true;
          this.multipleService = true;
          this.multipleService1 = true;
        }

        _createClass(_RuleMappingCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.currentUser = localStorage.getItem('userFromLogin');
            this.gettingExternalsystem();
            this.ruleMappingForm = this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              destinationSystems: this.getDestinationItem(),
              rulemappingDetail: this.formBuilder.array([])
            });
            this.addRuleDetail();
            this.fetchingIso();
            this.roleService.fetchScreenPermissions('Rule Mapping');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this2.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this2.roleCodes);
            }, 100);
          }
        }, {
          key: "getDestinationItem",
          value: function getDestinationItem() {
            return this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
            });
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this3 = this;

            var isExit = false;

            if (this.ruleMappingForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  isExit = true;

                  _this3.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this3.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this3.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "auditChangeRuleTranslation",
          value: function auditChangeRuleTranslation(operation) {
            var _this4 = this;

            var message = '';
            var operationType = '';

            switch (operation) {
              case 'open':
                message = 'opened';
                operationType = 'open';
                break;

              case 'close':
                message = 'closed';
                operationType = 'close';
                break;

              case 'auth':
                message = 'authorized';
                operationType = 'authorize';
                break;

              default:
                break;
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: "You are trying to ".concat(operationType, " record. ") + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                if (_this4.currentUser == _this4.addSysRespData.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Maker cannot ".concat(operationType, " the record!"));
                } else {
                  var payloadObj = {};
                  payloadObj = _this4.ruleMappingDataForPayload;
                  payloadObj.msgMappingDetails = _this4.rulemappingDetail;

                  _this4.rulemap.editRuleMapping(operation, _this4.currentUser, payloadObj).subscribe(function (resp) {
                    _this4.addSysRespData = resp;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is ".concat(message)
                    });
                  });
                }
              }
            });
          }
        }, {
          key: "deleteRuleMapping",
          value: function deleteRuleMapping() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: 'You are trying to delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                _this5.rulemap.ondeleteMapping(_this5.addSysRespData.mappingId, _this5.currentUser).subscribe(function (resp) {
                  if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Deleted',
                      confirmButtonText: 'Ok'
                    }).then(function (result) {
                      if (result) {
                        _this5.router.navigateByUrl('/rule-mapping/summary');
                      }
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Failed to delete the reocrd");
                  }
                });
              }
            });
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.hideFetch = true;
            this.hideSubmit = true;
            this.submit = true;
            this.ruleMappingForm.enable();
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.addSysRespData.authStatus == 'U' || this.addSysRespData.authStatus == 'Unauthorized') {
              this.addSysRespData.authStatus = 'UNAUTHORIZED';
            }

            if (this.addSysRespData.authStatus == 'A' || this.addSysRespData.authStatus == 'Authorized') {
              this.addSysRespData.authStatus = 'AUTHORIZED';
            }

            if (this.addSysRespData.recordStatus == 'O' || this.addSysRespData.recordStatus == 'Open') {
              this.addSysRespData.recordStatus = 'OPEN';
            }

            if (this.addSysRespData.recordStatus == 'C' || this.addSysRespData.recordStatus == 'Close') {
              this.addSysRespData.recordStatus = 'CLOSED';
            }

            if (this.addSysRespData.approvedEver == 'N' || this.addSysRespData.approvedEver == 'No') {
              this.addSysRespData.approvedEver = 'NO';
            }

            if (this.addSysRespData.approvedEver == 'Y') {
              this.addSysRespData.approvedEver = 'YES';
            }
          }
        }, {
          key: "getRuleMappingDetail",
          value: function getRuleMappingDetail() {
            return this.formBuilder.group({
              id: [''],
              defaultValue: [""],
              messageMappingId: [''],
              sourceTransDetId: [''],
              targetTransDetId: [''],
              sourceKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              destinationKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
            });
          }
        }, {
          key: "indexTracker",
          value: function indexTracker(index, value) {
            return index;
          }
        }, {
          key: "rulemappingDetail",
          get: function get() {
            return this.ruleMappingForm.get('rulemappingDetail');
          }
        }, {
          key: "addRuleDetail",
          value: function addRuleDetail() {
            this.rulemappingDetail.push(this.getRuleMappingDetail());
            console.log(this.rulemappingDetail.value);
          }
        }, {
          key: "deleteRuleMapGroup",
          value: function deleteRuleMapGroup(index) {
            if (this.tempArrayList[index]) {
              this.tempArrayList.splice(index, 1);
            }

            if (this.tempArrayList2[index]) {
              this.tempArrayList2.splice(index, 1);
            }

            this.rulemappingDetail.removeAt(index);
          }
        }, {
          key: "gettingExternalsystem",
          value: function gettingExternalsystem() {
            var _this6 = this;

            this.rulemap.gettingExternalsystem().subscribe(function (extSysResp) {
              console.log(extSysResp);
              _this6.externalSystem = extSysResp.sort();
              _this6.sourcesysdata = _this6.externalSystem;
              _this6.temparray = _this6.externalSystem;
              _this6.externalCreateSystemFiltered = _this6.externalSystem;
              console.log(_this6.externalSystem);
              console.log(_this6.externalCreateSystemFiltered);
            }, function (err) {
              console.log("err", err);
            });
          }
        }, {
          key: "fetchDestination",
          value: function fetchDestination() {
            console.log(this.rulemapping);
            console.log("Mapping", this.ruleMappingForm.value);
            this.disableFetchBtn = true;
            this.showfetchAll = true;
            this.showDestination = true;
            this.showSource = true; // this.rulemappingDetail = this.ruleMappingDataForPayload.msgMappingDetails;
            // for (let index = 0; index < this.rulemappingDetail.length; index++) {
            //   this.addRuleDetail();
            //   const item = this.rulemappingDetail[index];
            //   this.rulemappingDetails.at(index).patchValue(item);
            //   console.log("Rule Mapping: ", this.rulemappingDetails);
            // }
          }
        }, {
          key: "onFieldNameChange",
          value: function onFieldNameChange(event) {
            console.log(event.value);
            var value = event.value;

            if (event.value) {
              var item = this.sourceIsoResp.find(function (element) {
                return element.fieldValue == value;
              });
              console.log(item);
              this.showFieldNoValue = item.fieldNo;
              console.log("ssss", this.showFieldNoValue);
            }
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this7 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              console.log("iss", isoResp);
              _this7.isoRespData = isoResp; // this.fieldNoData=isoResp;

              _this7.messageBasisIso = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this7.fieldNoData = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this7.fieldValueData = isoResp.map(function (data) {
                return data.messageKey;
              });
            });
          }
        }, {
          key: "onSourseSelection",
          value: function onSourseSelection(event) {
            var _this8 = this;

            console.log(event);
            this.sourseSys = event;
            this.showSource = false;
            this.showDestination = false;
            console.log(this.externalSystem);
            console.log(this.sourseSys);
            this.externalCreateSystemFiltered = this.externalSystem.filter(function (system) {
              return system !== _this8.sourseSys;
            }); // this.externalCreateSystemFiltered = this.externalsystem
            // this.selectedExternalSystems = this.externalsystem.filter((system) => system !== this.sourseSys)
            // this.systemName = event.value;

            this.rulemap.gettingTranslationData(this.sourseSys).subscribe(function (resp) {
              console.log(resp);

              if (resp != null) {
                _this8.showfetchAll = false;
                _this8.rulemapping = resp;
                _this8.sourcesysdata = resp;
                console.log("RuleMapping Res::", _this8.rulemapping.messageType);

                if (_this8.rulemapping.messageType) {
                  if (_this8.rulemapping.messageType == 'I') {
                    _this8.rulemapping.messageType = 'Incoming';
                  }

                  if (_this8.rulemapping.messageType == 'O') {
                    _this8.rulemapping.messageType = 'OutGoing';
                  }

                  _this8.sourceMsg = false;
                }

                _this8.ruleMappingForm.patchValue(_this8.rulemapping);

                if (_this8.rulemapping.messageType) {
                  if (_this8.rulemapping.messageType == 'Incoming') {
                    _this8.rulemapping.messageType = 'I';
                  }

                  if (_this8.rulemapping.messageType == 'OutGoing') {
                    _this8.rulemapping.messageType = 'O';
                  }

                  _this8.sourceMsg = false;
                }

                _this8.gettingoperationAandserv(resp.systemCode, resp.messageType);

                _this8.rulemapping.sourceTranslationId = resp.transId; // this.rulemappingDetail=resp.msgTransDetails;

                resp.msgTransDetails.map(function (el) {
                  _this8.sourceTransDetId = el.translationId;
                });
              } else {
                _this8.showfetchAll = true;
              }
            }, function (err) {
              _this8.showfetchAll = true;
            });
            this.externalSystem = this.temparray;
          }
        }, {
          key: "onsearchingTablName",
          value: function onsearchingTablName(event) {
            console.log(event.target.value);
            console.log("this is arr", this.sourcesysdata);

            if (this.sourcesysdata) {
              var data = this.sourcesysdata.filter(function (e) {
                var extValue = e.toLowerCase();
                var value = event.target.value.toLowerCase();
                console.log(extValue, value); // return !extValue.indexOf(value);//changed this for 1192

                return extValue.search(value) > -1;
              });
              console.log(data);
              this.externalSystem = data;
            }
          }
        }, {
          key: "onSelectionOFMessageType",
          value: function onSelectionOFMessageType(event) {
            console.log("e", event);
            this.showSource = false;
            this.showDestination = false;
            this.gettingoperationAandserv(this.sourseSys, event.value);
          }
        }, {
          key: "gettingoperationAandserv",
          value: function gettingoperationAandserv(system, msgtype) {
            var _this9 = this;

            console.log(system);
            this.rulemap.gettingoperationAndService(system, msgtype, this.currentUser).subscribe(function (sourceResp) {
              console.log(sourceResp);
              _this9.showfetchAll = false;
              _this9.sourceoperation = sourceResp.OPERATION;
              _this9.sourceService = sourceResp.SERVICE;
              _this9.sourceData = sourceResp.MdmtSystemService; // console.log("SourceData",this.sourceData);
              // console.log("Rule Mapping Before",this.rulemapping.msgTransDetails);

              _this9.updateRuleMappingSrc = _this9.rulemapping.msgTransDetails;
              _this9.sourceLabel = sourceResp.MdmtSystemChannel[0].messageChannel;

              if (_this9.sourceLabel === 'Https/Http') {
                _this9.sourceLabel = sourceResp.MdmtSystemChannel[0].messageFormat;
              }

              var keys = Object.keys(sourceResp);
              var x = keys[2];
              var y = keys[3];
              console.log(x);

              if ((x == 'I' || x == 'O') && Object.keys(sourceResp).length == 3) {
                console.log(sourceResp);

                if (sourceResp.I) {
                  if (sourceResp.I.SERVICE.length !== 0) {
                    _this9.translationDataService = sourceResp.I.SERVICE;

                    if (sourceResp.I.SERVICE.length <= 1) {
                      console.log(_this9.translationDataService, "1st if");
                      _this9.multipleService1 = true;
                    }

                    if (sourceResp.I.SERVICE.length > 1) {
                      console.log(_this9.translationDataService, "2nd If");
                      _this9.multipleService1 = false;
                    }
                  }
                }

                if (sourceResp.O) {
                  if (sourceResp.O.SERVICE.length !== 0) {
                    _this9.translationDataService = sourceResp.O.SERVICE;

                    if (sourceResp.O.SERVICE.length <= 1) {
                      console.log(_this9.translationDataService, "1st if");
                      _this9.multipleService1 = true;
                    }

                    if (sourceResp.O.SERVICE.length > 1) {
                      console.log(_this9.translationDataService, "2nd If");
                      _this9.multipleService1 = false;
                    }
                  }
                }

                if (sourceResp.I) {
                  if (sourceResp.I.OPERATION.length !== 0) {
                    _this9.translationDataOperation = sourceResp.I.OPERATION; //  console.log(this.translationDataOperation);

                    if (_this9.translationDataOperation.length <= 1) {
                      console.log(_this9.translationDataOperation, "1st if");
                      _this9.multipleOperation1 = true;
                    }

                    if (_this9.translationDataOperation.length > 1) {
                      console.log(_this9.translationDataOperation, "2nd If");
                      _this9.multipleOperation1 = false;
                    }
                  }
                }

                if (sourceResp.O) {
                  if (sourceResp.O.OPERATION.length !== 0) {
                    _this9.translationDataOperation = sourceResp.O.OPERATION; //  console.log(this.translationDataOperation);

                    if (_this9.translationDataOperation.length <= 1) {
                      console.log(_this9.translationDataOperation, "1st if");
                      _this9.multipleOperation1 = true;
                    }

                    if (_this9.translationDataOperation.length > 1) {
                      console.log(_this9.translationDataOperation, "2nd If");
                      _this9.multipleOperation1 = false;
                    }
                  }
                } // this.translationDataService = sourceResp.I.SERVICE

              }

              console.log(_this9.translationDataService, "Source service");
              console.log(_this9.translationDataOperation, "Source operation"); // for(let g = 0 ; g< this.sourceData.length;g++){
              //   // console.log("messageBasisIso", this.sourceData[g].dataType);
              //   this.updateRuleMappingSrc.push({
              //     dataType: this.sourceData[g].dataType,
              //     defaultValue: null,
              //     encryption: this.sourceData[g].encryption,
              //     id: this.sourceData[g].channelId,
              //     messageKey: this.sourceData[g].messageKey,
              //     messagebasis: this.sourceData[g].messageBasis,
              //     transId: this.sourceData[g].serviceId,
              //     translationId: 0,
              //     versionNo: 1});
              //  }

              console.log("Rule Mapping After", _this9.updateRuleMappingSrc);

              if (_this9.sourceLabel == 'DB Connection') {
                for (var index = 0; index < _this9.sourceData.length; index++) {
                  _this9.sourceData[index].messageKey = _this9.sourceData[index].messageKey.split(",");
                }
              }

              if (_this9.sourceLabel == 'Https/Http') {
                _this9.sourceLabel = sourceResp.MdmtSystemChannel[0].messageFormat;
                _this9.matlabelSource1 = "Tag";
                _this9.matlabelSource2 = null;
              }

              if (_this9.sourceLabel == 'TCP/IP') {
                _this9.matlabelSource1 = "Filed No";
                _this9.matlabelSource2 = "Filed Name";
              } // this.translationData=translationResp;

            }, function (err) {
              console.log(err); // Swal.fire({ text: 'External system data not present.' });

              _this9.showfetchAll = true;
            });
          }
        }, {
          key: "ondestinationSource",
          value: function ondestinationSource(event) {
            var _this10 = this;

            console.log(event.value);
            this.showSource = false;
            this.showDestination = false;
            this.destinationSource = event;
            this.externalCreateSystemFiltered = this.externalSystem.filter(function (system) {
              return system !== _this10.sourseSys;
            });
            this.rulemap.gettingTranslationData(this.destinationSource).subscribe(function (resp) {
              console.log(resp.msgTransDetails[0].transId);

              if (resp != null) {
                _this10.showfetchAll = false;
                _this10.rulemappingDest = resp;
                console.log(_this10.rulemappingDest);

                if (_this10.rulemappingDest.messageType) {
                  if (_this10.rulemappingDest.messageType == 'I') {
                    _this10.rulemappingDest.messageType = 'Incoming';
                  }

                  if (_this10.rulemappingDest.messageType == 'O') {
                    _this10.rulemappingDest.messageType = 'OutGoing';
                  }

                  _this10.destinationMsg = false;
                } // this.rulemapping.targetTranslationId = resp.transId;


                _this10.ruleMappingForm.get('destinationSystems').patchValue(_this10.rulemappingDest);

                resp.msgTransDetails.map(function (el) {
                  _this10.targetTransDetId = el.translationId;
                });

                if (_this10.rulemappingDest.messageType) {
                  if (_this10.rulemappingDest.messageType == 'Incoming') {
                    _this10.rulemappingDest.messageType = 'I';
                  }

                  if (_this10.rulemappingDest.messageType == 'OutGoing') {
                    _this10.rulemappingDest.messageType = 'O';
                  }

                  _this10.sourceMsg = false;
                }

                if (_this10.rulemappingDest.messageType) {
                  if (_this10.rulemappingDest.messageType == 'Incoming') {
                    _this10.rulemappingDest.messageType = 'I';
                  }

                  if (_this10.rulemappingDest.messageType == 'OutGoing') {
                    _this10.rulemappingDest.messageType = 'O';
                  }

                  _this10.sourceMsg = false;
                }

                _this10.gettingmsgTypeAndDestination(resp.systemCode, resp.messageType);
              } else {
                _this10.showfetchAll = true;
              }
            }, function (err) {
              _this10.showfetchAll = true;
            });
            this.externalSystem = this.temparray;
          }
        }, {
          key: "msgTypeOfDestination",
          value: function msgTypeOfDestination(event) {
            console.log(event.value);
            this.showDestination = false;
            this.showSource = false;
            this.gettingmsgTypeAndDestination(this.destinationSource, event.value);
          }
        }, {
          key: "gettingmsgTypeAndDestination",
          value: function gettingmsgTypeAndDestination(destinationSource, msgtype) {
            var _this11 = this;

            this.rulemap.gettingoperationAndService(destinationSource, msgtype, this.currentUser).subscribe(function (destinationResp) {
              console.log(destinationResp);
              _this11.showfetchAll = false;
              _this11.destinationOperation = destinationResp.OPERATION;
              _this11.destinationService = destinationResp.SERVICE;
              _this11.destinationData = destinationResp.MdmtSystemService;
              _this11.updateRuleMappingDest = _this11.rulemappingDest.msgTransDetails;
              var keys = Object.keys(destinationResp);
              var x = keys[2];
              var y = keys[3];

              if ((x == 'I' || x == 'O') && Object.keys(destinationResp).length == 3) {
                console.log(destinationResp);

                if (destinationResp.I) {
                  if (destinationResp.I.SERVICE.length !== 0) {
                    _this11.translationDestDataService = destinationResp.I.SERVICE;

                    if (destinationResp.I.SERVICE.length <= 1) {
                      // console.log(this.translationDestDataService ,"1st if");
                      _this11.multipleService = true;
                    }

                    if (destinationResp.I.SERVICE.length > 1) {
                      // console.log(this.translationDestDataService,"2nd If");
                      _this11.multipleService = false;
                    }
                  }
                }

                if (destinationResp.O) {
                  if (destinationResp.O.SERVICE.length !== 0) {
                    _this11.translationDestDataService = destinationResp.O.SERVICE;

                    if (destinationResp.O.SERVICE.length <= 1) {
                      // console.log(this.translationDestDataService ,"1st if");
                      _this11.multipleService = true;
                    }

                    if (destinationResp.O.SERVICE.length > 1) {
                      // console.log(this.translationDestDataService,"2nd If");
                      _this11.multipleService = false;
                    }
                  }
                }

                if (destinationResp.I) {
                  if (destinationResp.I.OPERATION.length !== 0) {
                    _this11.translationDestDataOperation = destinationResp.I.OPERATION; //  console.log(this.translationDestDataOperation);

                    if (_this11.translationDestDataOperation.length <= 1) {
                      // console.log(this.translationDestDataOperation ,"1st if");
                      _this11.multipleOperation = true;
                    }

                    if (_this11.translationDestDataOperation.length > 1) {
                      // console.log(this.translationDestDataOperation,"2nd If");
                      _this11.multipleOperation = false;
                    }
                  }
                }

                if (destinationResp.O) {
                  if (destinationResp.O.OPERATION.length !== 0) {
                    _this11.translationDestDataOperation = destinationResp.O.OPERATION; //  console.log(this.translationDestDataOperation);

                    if (_this11.translationDestDataOperation.length <= 1) {
                      // console.log(this.translationDestDataOperation ,"1st if");
                      _this11.multipleOperation = true;
                    }

                    if (_this11.translationDestDataOperation.length > 1) {
                      // console.log(this.translationDestDataOperation,"2nd If");
                      _this11.multipleOperation = false;
                    }
                  }
                } // this.translationDestDataService  = destinationResp.I.SERVICE

              }

              console.log(_this11.translationDestDataOperation, "Destination service");
              console.log(_this11.translationDestDataService, "Destination operation"); // console.log(this.destinationData,"destinationData");
              // console.log(this.updateRuleMappingDest,"Before");
              // for(let g = 0 ; g< this.destinationData.length;g++){
              //   console.log("messageBasisIso", this.destinationData[g].dataType);
              //   this.updateRuleMappingDest.push({
              //     dataType: this.destinationData[g].dataType,
              //     defaultValue: null,
              //     encryption: this.destinationData[g].encryption,
              //     id: this.destinationData[g].channelId,
              //     messageKey: this.destinationData[g].messageKey,
              //     messagebasis: this.destinationData[g].messageBasis,
              //     transId: this.destinationData[g].serviceId,
              //     translationId: 0,
              //     versionNo: 1});
              //  }
              //  console.log(this.updateRuleMappingDest,"After");

              _this11.labelsDestination = destinationResp.MdmtSystemChannel[0].messageChannel;

              if (_this11.labelsDestination == 'Https/Http') {
                _this11.labelsDestination = destinationResp.MdmtSystemChannel[0].messageFormat;
                _this11.matLabel = "Tag";
                _this11.matLabel2 = null;
              } else if (_this11.labelsDestination == 'TCP/IP') {
                _this11.matLabel = "Filed No";
                _this11.matLabel2 = "Filed Name";
              } // this.rulemappingData=[...this.sourceData,...this.destinationData]
              // console.log(this.rulemappingData);
              // this.translationData=translationResp;

            }, function (err) {
              console.log(err); // Swal.fire({ text: 'External system data not present.' });

              _this11.showfetchAll = true;
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.disableSubmitBtn = false;
            this.ruleMappingForm.reset();
          }
        }, {
          key: "try",
          value: function _try(value) {
            if (this.tempArrayList.find(function (item) {
              return item == value;
            })) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "try2",
          value: function try2(value) {
            if (this.tempArrayList2.find(function (item) {
              return item == value;
            })) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "onselectOfFieldNo",
          value: function onselectOfFieldNo(event, i) {
            console.log(event.target.value);
            console.log(this.tempArrayList[i]);

            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }
          }
        }, {
          key: "onselectOfFieldNo2",
          value: function onselectOfFieldNo2(event, i) {
            console.log(event.target.value);
            console.log(this.tempArrayList2[i]);

            if (this.tempArrayList2[i]) {
              this.tempArrayList2[i] = event.target.value;
            } else {
              this.tempArrayList2.push(event.target.value);
            }
          }
        }, {
          key: "onsaveRuleMapping",
          value: function onsaveRuleMapping() {
            var _this12 = this;

            console.log(this.ruleMappingForm.value.rulemappingDetail);
            this.mappingObj.msgMappingDetails = this.ruleMappingForm.value.rulemappingDetail;
            this.mappingObj.sourceTranslationId = this.rulemapping.sourceTranslationId; // this.mappingObj.targetTranslationId = this.rulemapping.targetTranslationId;

            this.mappingObj.targetTranslationId = this.rulemappingDest.targetTranslationId;
            this.mappingObj.creatorId = this.currentUser.replace(/['"]+/g, '');

            if (this.mappingId) {
              this.mappingObj.mappingId = this.mappingId;
              this.mappingObj.createdTime = this.addSysRespData.createdTime;
              this.mappingObj.approverId = this.addSysRespData.approverId;
              this.mappingObj.approvedTime = this.addSysRespData.approvedTime;
              this.mappingObj.versionNo = this.addSysRespData.versionNo;
              this.mappingObj.approvedStatus = this.addSysRespData.approvedStatus;
              this.mappingObj.approvedEver = this.addSysRespData.approvedEver;
              this.mappingObj.recordStatus = this.addSysRespData.recordStatus;

              if (this.mappingObj.approvedStatus == 'UNAUTHORIZED') {
                this.mappingObj.approvedStatus = 'U';
              }

              if (this.mappingObj.approvedStatus == 'AUTHORIZED') {
                this.mappingObj.approvedStatus = 'A';
              }

              if (this.mappingObj.recordStatus == 'OPEN') {
                this.mappingObj.recordStatus = 'O';
              }

              if (this.mappingObj.recordStatus == 'CLOSED') {
                this.mappingObj.recordStatus = 'C';
              }

              if (this.mappingObj.approvedEver == 'NO') {
                this.mappingObj.approvedEver = 'N';
              }

              if (this.mappingObj.approvedEver == 'YES') {
                this.mappingObj.approvedEver = 'Y';
              }

              this.rulemap.updatingRuleMapping(this.mappingObj, this.currentUser).subscribe(function (resp) {
                console.log(resp);

                if (resp) {
                  _this12.mappingId = resp.mappingId;

                  _this12.rulemappingDetail.patchValue(resp.msgMappingDetails);

                  _this12.addSysRespData = resp;

                  _this12.auditLog();

                  _this12.showAuditLog = true;
                  _this12.afterSubmit = true;

                  _this12.ruleMappingForm.disable();

                  _this12.disableSubmitBtn = true;
                  _this12.disableResetBtn = true;
                  _this12.submit = false;
                  _this12.formTouched = !_this12.ruleMappingForm.touched;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record is Updated",
                    icon: 'success'
                  });
                }
              }, function (err) {
                console.log(err.error.text);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Unable to update the record, server error!',
                  icon: 'error'
                });
              });
            } else {
              console.log(this.mappingObj);
              this.mappingObj.targetTranslationId = this.rulemappingDest.transId;
              console.log(this.mappingObj);
              this.rulemap.submittingruleMapping(this.mappingObj, this.currentUser).subscribe(function (resp) {
                console.log(resp);

                if (resp) {
                  _this12.mappingId = resp.mappingId;

                  _this12.rulemappingDetail.patchValue(resp.msgMappingDetails);

                  _this12.addSysRespData = resp;

                  _this12.auditLog();

                  _this12.showAuditLog = true;
                  _this12.afterSubmit = true;

                  _this12.ruleMappingForm.disable();

                  _this12.disableSubmitBtn = true;
                  _this12.disableResetBtn = true;
                  _this12.submit = false;
                  _this12.formTouched = !_this12.ruleMappingForm.touched;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record is Created",
                    icon: 'success'
                  });
                }
              }, function (err) {
                console.log(err.error.text);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Rule mapping data already present for source and destination systems.',
                  icon: 'error'
                });
              });
            }
          }
        }]);

        return _RuleMappingCreateComponent;
      }();

      _RuleMappingCreateComponent.ɵfac = function RuleMappingCreateComponent_Factory(t) {
        return new (t || _RuleMappingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__.CanDeactivateGuard));
      };

      _RuleMappingCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _RuleMappingCreateComponent,
        selectors: [["npr-rule-mapping-create"]],
        decls: 86,
        vars: 29,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "addformCol"], [1, "row", "g-4", "align-items-center"], [1, "col"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-3"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["formControlName", "systemCode", "aria-label", "Default select example", 3, "clearable", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", "hidden", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formGroupName", "destinationSystems"], ["formControlName", "systemCode", "placeholder", "Please Select", 3, "items", "clearable", "change"], [1, "btn", "minWdSmBtn", "btnPrimary", 3, "click"], ["class", "dbCardStyle", 4, "ngIf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle mt-20", 4, "ngIf"], [3, "value", "hidden"], ["formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "I"], ["value", "O"], ["type", "text", "formControlName", "messageType", "placeholder", "Message Type", 1, "form-control"], ["id", "ruleName", "formControlName", "operationName", "aria-label", "Default select example", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "ruleName", "type", "text", "formControlName", "operationName", "value", "", 1, "form-control"], ["id", "ruleName", "formControlName", "serviceName", "aria-label", "Default select example", 1, "form-select"], ["id", "ruleName", "type", "text", "formControlName", "serviceName", "value", "", 1, "form-control"], ["formControlName", "operationName", "aria-label", "Default select example", 1, "form-select"], ["type", "text", "formControlName", "operationName", "value", "", 1, "form-control"], ["formArrayName", "rulemappingDetail", 1, "addformCol"], [4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [3, "formGroupName"], [1, "row", "align-items-center"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], [1, "col-lg-12"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 3, "ngClass"], ["class", "deleteIcon2", "style", "cursor: pointer", 3, "click", 4, "ngIf"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select"], [1, "deleteIcon2", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "...", 1, "image", 3, "ngClass"], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"]],
        template: function RuleMappingCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rule Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "fieldset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Source System");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ng-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_ng_select_change_16_listener($event) {
              return ctx.onSourseSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ng-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleMappingCreateComponent_ng_option_19_Template, 2, 3, "ng-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, RuleMappingCreateComponent_div_25_Template, 8, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RuleMappingCreateComponent_div_26_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Operation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, RuleMappingCreateComponent_div_32_Template, 5, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, RuleMappingCreateComponent_div_33_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Service ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, RuleMappingCreateComponent_div_39_Template, 5, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, RuleMappingCreateComponent_div_40_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](41, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Destination System");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "ng-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_ng_select_change_47_listener($event) {
              return ctx.ondestinationSource($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, RuleMappingCreateComponent_div_53_Template, 8, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, RuleMappingCreateComponent_div_54_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Operation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, RuleMappingCreateComponent_div_60_Template, 5, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, RuleMappingCreateComponent_div_61_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Service ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, RuleMappingCreateComponent_div_67_Template, 5, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, RuleMappingCreateComponent_div_68_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_Template_button_click_70_listener() {
              return ctx.fetchDestination();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " Fetch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, RuleMappingCreateComponent_div_72_Template, 6, 2, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, RuleMappingCreateComponent_div_74_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_Template_button_click_76_listener() {
              return ctx.onsaveRuleMapping();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, RuleMappingCreateComponent_div_78_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, RuleMappingCreateComponent_div_79_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, RuleMappingCreateComponent_div_80_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, RuleMappingCreateComponent_div_81_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, " Exit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, RuleMappingCreateComponent_div_85_Template, 100, 14, "div", 26);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.ruleMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("clearable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.externalSystem);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sourceMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.sourceMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.multipleOperation1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.multipleOperation1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.multipleService1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.multipleService1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.externalCreateSystemFiltered)("clearable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.destinationMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.destinationMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.multipleOperation);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.multipleOperation);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.multipleService);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.multipleService);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSource || ctx.showDestination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "O" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "OPEN") && ctx.roleCodes.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.submit)("disabled", ctx.ruleMappingForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedStatus) == "U" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedStatus) == "UNAUTHORIZED") && ctx.roleCodes.auth);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "O" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "OPEN") && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "NO" && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "N" && ctx.roleCodes.close);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "C" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "CLOSED") && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "NO" && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "N" && ctx.roleCodes.reopen);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) == "NO" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) == "N") && ctx.roleCodes["delete"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](28, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.submit);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [".m-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.path[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  min-width: 120px;\n  border-spacing: 1.5;\n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: 31px;\n}\n\n.image[_ngcontent-%COMP%] {\n  vertical-align: top;\n  top: -8px;\n  position: relative;\n}\n\n.first-image[_ngcontent-%COMP%] {\n  top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtbWFwcGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUVBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSiIsImZpbGUiOiJydWxlLW1hcHBpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tMTB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuLnBhdGh7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgLy93aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxLjU7XHJcbn1cclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5maXJzdC1pbWFnZSB7XHJcbiAgICB0b3A6IDI0cHg7XHJcbn1cclxuIl19 */"]
      });

      var _MdmtMessageMapping = /*#__PURE__*/_createClass(function _MdmtMessageMapping() {
        _classCallCheck(this, _MdmtMessageMapping);
      });

      var _MdmtMessageMappingDet = /*#__PURE__*/_createClass(function _MdmtMessageMappingDet() {
        _classCallCheck(this, _MdmtMessageMappingDet);
      });

      var _MdmtMsgTransDetails = /*#__PURE__*/_createClass(function _MdmtMsgTransDetails() {
        _classCallCheck(this, _MdmtMsgTransDetails);
      });

      var _ruleMapDto = /*#__PURE__*/_createClass(function _ruleMapDto() {
        _classCallCheck(this, _ruleMapDto);
      });
      /***/

    },

    /***/
    50531:
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping-details/rule-mapping-details.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingDetailsComponent": function RuleMappingDetailsComponent() {
          return (
            /* binding */
            _RuleMappingDetailsComponent
          );
        },

        /* harmony export */
        "MdmtMessageMapping": function MdmtMessageMapping() {
          return (
            /* binding */
            _MdmtMessageMapping2
          );
        },

        /* harmony export */
        "MdmtMessageMappingDet": function MdmtMessageMappingDet() {
          return (
            /* binding */
            _MdmtMessageMappingDet2
          );
        },

        /* harmony export */
        "ruleMapDto": function ruleMapDto() {
          return (
            /* binding */
            _ruleMapDto2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Source System");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r29 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r28.shouldHideSourceRuleMappingValue(tag_r29.messagebasis))("value", tag_r29.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r29.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r30.onSourceRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_option_3_Template, 2, 3, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r33.index;
          var item_r8 = ctx_r33.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r11.edit)("value", item_r8.sourceKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.updateRuleMappingSrc);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r36 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r35.shouldHideSourceRuleMappingValue(tag_r36.messagebasis))("value", tag_r36.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r36.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r37.onSourceRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_option_3_Template, 2, 3, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r12.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.updateRuleMappingSrc);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_11_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_11_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r43 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r42.shouldHideSourceRuleMappingValue(tag_r43.messagebasis))("value", tag_r43.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r43.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_11_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_11_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r44.onSourceRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_11_option_3_Template, 2, 3, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r13.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.updateRuleMappingSrc);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_12_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Column Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_12_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r50 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r49.shouldHideSourceRuleMappingValue(tag_r50.messagebasis))("value", tag_r50.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r50.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_12_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_12_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r51.onSourceRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_12_option_3_Template, 2, 3, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r14.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r14.updateRuleMappingSrc);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_13_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_13_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tag_r57.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r57.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_13_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_13_option_3_Template, 2, 2, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r15.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.updateRuleMappingSrc);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Destination system");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_18_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_18_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r61 = ctx.$implicit;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r61.messagebasis)("hidden", ctx_r60.shouldHideDestinationRuleMappingValue(fname_r61.messagebasis));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fname_r61.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_18_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_18_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r63.onDestinationRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_18_option_3_Template, 2, 3, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r66.index;
          var item_r8 = ctx_r66.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r8.destinationKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r17.updateRuleMappingDest);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_19_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_19_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r69 = ctx.$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r69.messagebasis)("hidden", ctx_r68.shouldHideDestinationRuleMappingValue(fname_r69.messagebasis));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fname_r69.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_19_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_19_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r73);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r71.onDestinationRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_19_option_3_Template, 2, 3, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r74.index;
          var item_r8 = ctx_r74.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r8.destinationKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r18.updateRuleMappingDest);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_20_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_20_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r77 = ctx.$implicit;

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r77.messagebasis)("hidden", ctx_r76.shouldHideDestinationRuleMappingValue(fname_r77.messagebasis));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fname_r77.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_20_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_20_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r79.onDestinationRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_20_option_3_Template, 2, 3, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r82.index;
          var item_r8 = ctx_r82.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r8.destinationKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r19.updateRuleMappingDest);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_21_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Column Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_21_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r85 = ctx.$implicit;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r85.messagebasis)("hidden", ctx_r84.shouldHideDestinationRuleMappingValue(fname_r85.messagebasis));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fname_r85.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_21_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_21_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r88);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r86.onDestinationRuleMappingChange($event, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_21_option_3_Template, 2, 3, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r20.updateRuleMappingDest);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_22_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_22_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r92 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r92.messagebasis);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fname_r92.messagebasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_22_label_1_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_22_option_3_Template, 2, 2, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r21.updateRuleMappingDest);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "label", 79);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          first: a0,
          "form-control": true,
          path: true
        };
      };

      function RuleMappingDetailsComponent_div_80_ng_container_3_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, i_r9 === 0))("readonly", ctx_r24.edit);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, i_r9 === 0));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "first-image": a0,
          image: true
        };
      };

      function RuleMappingDetailsComponent_div_80_ng_container_3_a_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_ng_container_3_a_32_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r98);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r96.deleteRuleMapGroup(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, i_r9 === 0));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "margin-top": a0
        };
      };

      function RuleMappingDetailsComponent_div_80_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleMappingDetailsComponent_div_80_ng_container_3_label_6_Template, 4, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_Template, 4, 4, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_11_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_12_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_13_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RuleMappingDetailsComponent_div_80_ng_container_3_label_15_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_18_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_19_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_20_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_21_Template, 4, 2, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_22_Template, 4, 2, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, RuleMappingDetailsComponent_div_80_ng_container_3_label_24_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, RuleMappingDetailsComponent_div_80_ng_container_3_label_27_Template, 1, 0, "label", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, RuleMappingDetailsComponent_div_80_ng_container_3_div_28_Template, 2, 4, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, RuleMappingDetailsComponent_div_80_ng_container_3_div_29_Template, 2, 3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, RuleMappingDetailsComponent_div_80_ng_container_3_a_32_Template, 2, 3, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "MT" || ctx_r1.sourceLabel == "MX");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "MT" || ctx_r1.labelsDestination == "MX");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r1.hideFetch)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c2, i_r9 === 0 ? "50px" : "10px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submit);
        }
      }

      function RuleMappingDetailsComponent_div_80_a_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_a_6_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r100.addRuleDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r2.hideFetch);
        }
      }

      function RuleMappingDetailsComponent_div_80_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r103);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r102.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r3.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.roleCodes.edit.labelDescription, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r105);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r104.onAuthOfRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r4.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.roleCodes.auth.labelDescription, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r107);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r106.onCloseOfRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r5.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.roleCodes.close.labelDescription, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_14_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r109);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r108.onOpenRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r6.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.roleCodes.reopen.labelDescription, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r111);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r110.deleteRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r7.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.roleCodes["delete"].labelDescription, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "fieldset", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_Template, 34, 22, "ng-container", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleMappingDetailsComponent_div_80_a_6_Template, 3, 1, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r113);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r112.onsaveRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, RuleMappingDetailsComponent_div_80_div_11_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RuleMappingDetailsComponent_div_80_div_12_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RuleMappingDetailsComponent_div_80_div_13_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RuleMappingDetailsComponent_div_80_div_14_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RuleMappingDetailsComponent_div_80_div_15_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.rulemappingDetails.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r0.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.submit || !ctx_r0.ruleMappingForm.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "O" || ctx_r0.addSysRespData.recordStatus == "OPEN") && ctx_r0.roleCodes.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.approvedStatus == "U" || ctx_r0.addSysRespData.approvedStatus == "UNAUTHORIZED" || ctx_r0.addSysRespData.approvedStatus == "Unauthorized" || ctx_r0.addSysRespData.approvedStatus == "N" || ctx_r0.addSysRespData.approvedEver == "N") && ctx_r0.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "O" || ctx_r0.addSysRespData.recordStatus == "OPEN") && ctx_r0.addSysRespData.approvedEver != "NO" && ctx_r0.addSysRespData.approvedEver != "N" && ctx_r0.roleCodes.close);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "C" || ctx_r0.addSysRespData.recordStatus == "CLOSED") && ctx_r0.addSysRespData.approvedEver != "NO" && ctx_r0.addSysRespData.approvedEver != "N" && ctx_r0.roleCodes.reopen);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.approvedEver == "NO" || (ctx_r0.addSysRespData == null ? null : ctx_r0.addSysRespData.approvedEver) == "N") && ctx_r0.roleCodes["delete"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/rule-mapping/summary");
        }
      }

      var _RuleMappingDetailsComponent = /*#__PURE__*/function () {
        function _RuleMappingDetailsComponent(rulemap, roleService, router, _location, _route, addSystem, toastService, cdr, formBuilder) {
          _classCallCheck(this, _RuleMappingDetailsComponent);

          this.rulemap = rulemap;
          this.roleService = roleService;
          this.router = router;
          this._location = _location;
          this._route = _route;
          this.addSystem = addSystem;
          this.toastService = toastService;
          this.cdr = cdr;
          this.formBuilder = formBuilder;
          this.fieldNoData = [];
          this.disableFetchBtn = false;
          this.disableSubmitBtn = false;
          this.deleted = false;
          this.disableFields = false;
          this.authorizeDone = false;
          this.fieldValueData = [];
          this.showFieldNoValue = 1;
          this.xmlLength = [];
          this.sourceRuleMappingArray = [];
          this.destinationRuleMappingArray = [];
          this.rulemapping = new _MdmtMessageMapping2();
          this.rulemappingdest = new _MdmtMessageMapping2();
          this.isSelected = true;
          this.rulemappingDetail = [];
          this.destinationData = [];
          this.sourceData = [];
          this.ruleDto = new _ruleMapDto2();
          this.submit = true;
          this.hideFetch = false;
          this.hideSubmit = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.editFlag = false;
        }

        _createClass(_RuleMappingDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.currentUser = localStorage.getItem("userFromLogin");
            this.ruleMappingForm = this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              destinationSystems: this.getDestinationItem(),
              rulemappingDetails: this.formBuilder.array([])
            });
            this.navSubscription = this.addSystem.getNavParam.subscribe(function (data) {
              return _this13.editruleMappingResp = data;
            });
            console.log("Response ??", this.editruleMappingResp);
            this.ruleMappingDataForPayload = this.editruleMappingResp["responseData"];

            if (this.editruleMappingResp && Object.keys(this.editruleMappingResp).length === 0 && Object.getPrototypeOf(this.editruleMappingResp) === Object.prototype) {
              this._location.back();
            } else {
              this.addSysRespData = this.ruleMappingDataForPayload.mdmtMessageMapping;
              this.auditLog();
              this.rulemapping.sourceTranslationId = this.editruleMappingResp["sourceTransDetId"];

              if (this.rulemapping.sourceTranslationId) {
                this.gettingTranslationData(this.rulemapping.sourceTranslationId);
              }

              this.rulemapping.targetTranslationId = this.editruleMappingResp["targetTransDetId"];

              if (this.rulemapping.targetTranslationId) {
                this.gettingTranslationDataForDest(this.rulemapping.targetTranslationId);
              }

              if (this.addSysRespData.recordStatus == "C") {
                console.log(this.addSysRespData.recordStatus);
                this.reopenBtn = false;
                this.authBtnHide = true;
              }

              this.rulemappingDetail = this.ruleMappingDataForPayload.mdmtMessageMapping.msgMappingDetails;
              this.auditLog();

              for (var index = 0; index < this.rulemappingDetail.length; index++) {
                this.addRuleDetail();
                var item = this.rulemappingDetail[index];
                this.rulemappingDetails.at(index).patchValue(item);
                console.log("Rule Mapping: ", this.rulemappingDetails);
              }

              this.sourceRuleMappingArray = this.ruleMappingDataForPayload.mdmtMessageMapping.msgMappingDetails.map(function (val) {
                return val.sourceKey;
              });
              this.destinationRuleMappingArray = this.ruleMappingDataForPayload.mdmtMessageMapping.msgMappingDetails.map(function (val) {
                return val.destinationKey;
              });
              this.gettingExternalsystem();
              this.fetchingIso();
            }

            this.roleService.fetchScreenPermissions("Rule Mapping");
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this13.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this13.roleCodes);
            }, 100);
            this.ruleMappingForm.disable();
          }
        }, {
          key: "getDestinationItem",
          value: function getDestinationItem() {
            return this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
            });
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.addSysRespData.approvedStatus == "U" || this.addSysRespData.approvedStatus == "Unauthorized") {
              this.addSysRespData.approvedStatus = "UNAUTHORIZED";
            }

            if (this.addSysRespData.approvedStatus == "A" || this.addSysRespData.approvedStatus == "Authorized") {
              this.addSysRespData.approvedStatus = "AUTHORIZED";
            }

            if (this.addSysRespData.recordStatus == "O" || this.addSysRespData.recordStatus == "Open") {
              this.addSysRespData.recordStatus = "OPEN";
            }

            if (this.addSysRespData.recordStatus == "C" || this.addSysRespData.recordStatus == "Close") {
              this.addSysRespData.recordStatus = "CLOSED";
            }

            if (this.addSysRespData.approvedEver == "N" || this.addSysRespData.approvedEver == "No") {
              this.addSysRespData.approvedEver = "NO";
            }

            if (this.addSysRespData.approvedEver == "Y") {
              this.addSysRespData.approvedEver = "YES";
            }
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this14 = this;

            var isExit = false;

            if (this.ruleMappingForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: "There are unsaved changes in the screen. Would you like to navigate to other screen?",
                showCancelButton: true,
                confirmButtonColor: "#E6224A",
                cancelButtonColor: "#011945",
                cancelButtonText: "NO",
                confirmButtonText: "YES",
                icon: "info"
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  isExit = true;

                  _this14.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this14.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this14.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "getRuleMappingDetails",
          value: function getRuleMappingDetails() {
            return this.formBuilder.group({
              id: [""],
              defaultValue: [""],
              messageMappingId: [""],
              sourceTransDetId: [""],
              targetTransDetId: [""],
              sourceKey: [""],
              destinationKey: [""]
            });
          }
        }, {
          key: "indexTracker",
          value: function indexTracker(index, value) {
            return index;
          }
        }, {
          key: "rulemappingDetails",
          get: function get() {
            return this.ruleMappingForm.get("rulemappingDetails");
          }
        }, {
          key: "addRuleDetail",
          value: function addRuleDetail() {
            this.rulemappingDetails.push(this.getRuleMappingDetails());
            console.log(this.rulemappingDetails.value);
          }
        }, {
          key: "deleteRuleMapGroup",
          value: function deleteRuleMapGroup(index) {
            this.sourceRuleMappingArray.splice(index, 1);
            this.destinationRuleMappingArray.splice(index, 1);
            this.rulemappingDetails.removeAt(index);
          }
        }, {
          key: "gettingExternalsystem",
          value: function gettingExternalsystem() {
            var _this15 = this;

            this.rulemap.gettingExternalsystem().subscribe(function (extSysResp) {
              console.log("extSysResp", extSysResp);
              _this15.externalSystem = extSysResp;
            }, function (err) {
              console.log("err", err);
            });
          }
        }, {
          key: "onDestinationRuleMappingChange",
          value: function onDestinationRuleMappingChange(event, i) {
            this.destinationRuleMappingArray[i] = event.target.value;
          }
        }, {
          key: "onSourceRuleMappingChange",
          value: function onSourceRuleMappingChange(event, i) {
            this.sourceRuleMappingArray[i] = event.target.value;
          }
        }, {
          key: "shouldHideDestinationRuleMappingValue",
          value: function shouldHideDestinationRuleMappingValue(value) {
            return this.destinationRuleMappingArray.find(function (item) {
              return item == value;
            });
          }
        }, {
          key: "shouldHideSourceRuleMappingValue",
          value: function shouldHideSourceRuleMappingValue(value) {
            return this.sourceRuleMappingArray.find(function (item) {
              return item == value;
            });
          }
        }, {
          key: "EditFetch",
          value: function EditFetch() {
            this.editFetch = true;
            console.log("edit");

            if (this.addSysRespData.recordStatus == "C") {
              this.editFetch = false; // Swal.fire("Closed record can't be edited.");

              this.toastService.successMessage("Closed record can't be edited.", "");
            }
          }
        }, {
          key: "Edit",
          value: function Edit() {
            console.log("edit");

            if (this.addSysRespData.approvedStatus == "U") {
              this.edit = false; // Swal.fire("UnAuthorized record can't be  edited.");

              this.toastService.successMessage("UnAuthorized record can't be  edited", "");
            }

            if (this.addSysRespData.recordStatus == "C") {
              this.edit = false; // Swal.fire("Closed record can't be edited.");

              this.toastService.successMessage("Closed record can't be edited.", "");
            }

            this.edit = true;
          }
        }, {
          key: "gettingTranslationData",
          value: function gettingTranslationData(sourseSys) {
            var _this16 = this;

            this.sourseSys = sourseSys;
            this.rulemap.gettingTranslationData(this.sourseSys).subscribe(function (resp) {
              console.log("trans ?", resp);
              _this16.rulemapping = resp;
              _this16.ruleMappingData = resp;

              _this16.ruleMappingForm.patchValue(resp);

              _this16.gettingoperationAandserv(resp.systemCode, resp.messageType);

              _this16.rulemapping.sourceTranslationId = resp.systemCode;
            });
            this.fetchDestination();
          }
        }, {
          key: "gettingTranslationDataForDest",
          value: function gettingTranslationDataForDest(destSys) {
            var _this17 = this;

            this.rulemap.gettingTranslationData(destSys).subscribe(function (resp) {
              console.log("Dset", resp);
              _this17.rulemappingdest = resp;
              _this17.rulemappingdestMapping = resp;

              _this17.ruleMappingForm.get("destinationSystems").patchValue(resp);

              _this17.gettingmsgTypeAndDestination(resp.systemCode, resp.messageType);

              _this17.rulemappingdest.targetTranslationId = resp.systemCode;
            });
          }
        }, {
          key: "onAuthOfRuleMapping",
          value: function onAuthOfRuleMapping() {
            var _this18 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: "You are trying to Authorize record. " + " Do you want to proceed?",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: "NO",
              confirmButtonText: "YES",
              icon: "info"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                if (_this18.currentUser == _this18.addSysRespData.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Maker cannot authorize the record!"); // this.toastService.successMessage('Maker cannot authorize!', '');
                } else {
                  var payloadObj = {};
                  console.log(_this18.ruleMappingDataForPayload);
                  payloadObj = _this18.ruleMappingDataForPayload;
                  payloadObj.msgMappingDetails = _this18.rulemappingDetail;
                  console.log(payloadObj);

                  if (payloadObj.approvedStatus == "UNAUTHORIZED") {
                    payloadObj.approvedStatus = "U";
                  }

                  if (payloadObj.approvedStatus == "AUTHORIZED") {
                    payloadObj.approvedStatus = "A";
                  }

                  if (payloadObj.recordStatus == "OPEN") {
                    payloadObj.recordStatus = "O";
                  }

                  if (payloadObj.recordStatus == "CLOSED") {
                    payloadObj.recordStatus = "C";
                  }

                  if (payloadObj.approvedEver == "NO") {
                    payloadObj.approvedEver = "N";
                  }

                  if (payloadObj.approvedEver == "YES") {
                    payloadObj.approvedEver = "Y";
                  }

                  _this18.rulemap.editRuleMapping("auth", _this18.currentUser, payloadObj).subscribe(function (resp) {
                    _this18.authorizeDone = true;
                    _this18.addSysRespData = resp;

                    _this18.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: "Record is Authorized"
                    }); // this.toastService.successMessage('Record Authorized!', '');
                  });
                }
              }
            });
          }
        }, {
          key: "onCloseOfRuleMapping",
          value: function onCloseOfRuleMapping() {
            var _this19 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: "You are trying to close record. " + " Do you want to proceed?",
              showCancelButton: true,
              confirmButtonColor: "#3e54b8",
              cancelButtonColor: "#d33",
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: "NO",
              confirmButtonText: "YES",
              icon: "info",
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                var payloadObj = {};
                payloadObj = _this19.ruleMappingDataForPayload;
                payloadObj.msgMappingDetails = _this19.rulemappingDetail;

                if (payloadObj.approvedStatus == "UNAUTHORIZED") {
                  payloadObj.approvedStatus = "U";
                }

                if (payloadObj.approvedStatus == "AUTHORIZED") {
                  payloadObj.approvedStatus = "A";
                }

                if (payloadObj.recordStatus == "OPEN") {
                  payloadObj.recordStatus = "O";
                }

                if (payloadObj.recordStatus == "CLOSED") {
                  payloadObj.recordStatus = "C";
                }

                if (payloadObj.approvedEver == "NO") {
                  payloadObj.approvedEver = "N";
                }

                if (payloadObj.approvedEver == "YES") {
                  payloadObj.approvedEver = "Y";
                }

                _this19.rulemap.editRuleMapping("close", _this19.currentUser, payloadObj).subscribe(function (resp) {
                  _this19.addSysRespData = resp;

                  _this19.auditLog();

                  _this19.editBtn = true;
                  _this19.authBtn = true;
                  _this19.deleted = false;
                  _this19.reopenBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Record is  Closed",
                    icon: "success"
                  }); // this.toastService.successMessage('Record is Closed', '');
                });
              }
            });
          }
        }, {
          key: "onOpenRuleMapping",
          value: function onOpenRuleMapping() {
            var _this20 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: "You are trying to re-open record. " + " Do you want to proceed?",
              showCancelButton: true,
              confirmButtonColor: "#3e54b8",
              cancelButtonColor: "#d33",
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: "NO",
              confirmButtonText: "YES",
              icon: "info",
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                var payloadObj = {};
                payloadObj = _this20.ruleMappingDataForPayload;
                payloadObj.msgMappingDetails = _this20.rulemappingDetail;

                if (payloadObj.approvedStatus == "UNAUTHORIZED") {
                  payloadObj.approvedStatus = "U";
                }

                if (payloadObj.approvedStatus == "AUTHORIZED") {
                  payloadObj.approvedStatus = "A";
                }

                if (payloadObj.recordStatus == "OPEN") {
                  payloadObj.recordStatus = "O";
                }

                if (payloadObj.recordStatus == "CLOSED") {
                  payloadObj.recordStatus = "C";
                }

                if (payloadObj.approvedEver == "NO") {
                  payloadObj.approvedEver = "N";
                }

                if (payloadObj.approvedEver == "YES") {
                  payloadObj.approvedEver = "Y";
                }

                _this20.rulemap.editRuleMapping("open", _this20.currentUser, payloadObj).subscribe(function (resp) {
                  _this20.addSysRespData = resp;

                  _this20.auditLog();

                  _this20.authBtnHide = false;
                  _this20.editBtn = false;
                  _this20.authBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Record is Opened",
                    icon: "success"
                  }); // this.toastService.successMessage('Record Opened!', '');
                });
              }
            });
          }
        }, {
          key: "deleteRuleMapping",
          value: function deleteRuleMapping() {
            var _this21 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: "You are trying to delete record. " + " Do you want to proceed?",
              showCancelButton: true,
              confirmButtonColor: "#3e54b8",
              cancelButtonColor: "#d33",
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: "NO",
              confirmButtonText: "YES",
              icon: "info",
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                console.log(_this21.addSysRespData.mappingId);

                _this21.rulemap.ondeleteMapping(_this21.addSysRespData.mappingId, _this21.currentUser).subscribe(function (resp) {
                  if (resp) {
                    _this21.deleted = true;
                    _this21.editBtn = true;
                    _this21.authBtn = true;
                    _this21.closeBtn = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: "Record is Deleted",
                      confirmButtonText: "Ok"
                    }).then(function (result) {
                      if (result) {
                        _this21.router.navigateByUrl("/rule-mapping/summary");
                      }
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Failed to delete the reocrd");
                  }
                });
              }
            });
          }
        }, {
          key: "fetchDestination",
          value: function fetchDestination() {
            console.log(this.rulemapping);
            console.log("Rule ,apping", this.ruleMappingForm);
            this.disableFetchBtn = true;
            this.showDestination = true;
            this.showSource = true;
          }
        }, {
          key: "onFieldNameChange",
          value: function onFieldNameChange(event) {
            console.log(event.value);
            var value = event.value;

            if (event.value) {
              var item = this.sourceIsoResp.find(function (element) {
                return element.fieldValue == value;
              });
              console.log(item);
              this.showFieldNoValue = item.fieldNo;
              console.log("ssss", this.showFieldNoValue);
            }
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.hideFetch = true;
            this.hideSubmit = true;
            this.ruleMappingForm.enable();
            this.editFlag = true; // this.authBtn=false;
            // this.openBtn=false;
            // this.closeBtn=false;
          }
        }, {
          key: "onSubmittingRuleMapping",
          value: function onSubmittingRuleMapping() {
            console.log("submit");
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this22 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              console.log("iss", isoResp);
              _this22.isoRespData = isoResp; // this.fieldNoData=isoResp;

              _this22.messageBasisIso = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this22.fieldNoData = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this22.fieldValueData = isoResp.map(function (data) {
                return data.messageKey;
              });
            });
          }
        }, {
          key: "onSourseSelection",
          value: function onSourseSelection(event) {
            console.log(event);
            this.sourseSys = event.value;
          }
        }, {
          key: "onSelectionOFMessageType",
          value: function onSelectionOFMessageType(source, event) {
            console.log("e", event);
            this.sourseSys = source;
            this.gettingoperationAandserv(this.sourseSys, event.value);
          }
        }, {
          key: "gettingoperationAandserv",
          value: function gettingoperationAandserv(system, msgtype) {
            var _this23 = this;

            console.log(system);
            this.rulemap.gettingoperationAndService(system, msgtype, this.currentUser).subscribe(function (sourceResp) {
              console.log("sourceResp", sourceResp);
              _this23.sourceoperation = sourceResp.OPERATION;
              _this23.sourceService = sourceResp.SERVICE;
              _this23.sourceData = sourceResp.MdmtSystemService;
              _this23.updateRuleMappingSrc = _this23.ruleMappingData.msgTransDetails;
              _this23.sourceLabel = sourceResp.MdmtSystemChannel[0].messageChannel; // this.sourceKey=this.sourceData[0].messageKey + ' ' +this.sourceData[0].messageBasis;

              console.log(_this23.sourceData); // console.log(this.ruleMappingForm.controls.rulemappingDetails.value[0].sourceKey)
              // this.ruleMappingForm.controls.rulemappingDetails.value[0].sourceKey.setValue(this.sourceKey);

              if (_this23.sourceLabel == "Https/Http") {
                _this23.sourceLabel = sourceResp.MdmtSystemChannel[0].messageFormat;
                _this23.matlabelSource1 = "Node";
                _this23.matlabelSource2 = "TagName";
              }

              if (_this23.sourceLabel == "TCP/IP") {
                _this23.matlabelSource1 = "Filed No";
                _this23.matlabelSource2 = "Filed Name";
              } // this.translationData=translationResp;

            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "ondestinationSource",
          value: function ondestinationSource(event) {
            console.log(event.value);
            this.destinationSource = event.value;
          }
        }, {
          key: "msgTypeOfDestination",
          value: function msgTypeOfDestination(event) {
            console.log(event.value);
            this.gettingmsgTypeAndDestination(this.destinationSource, event.value);
          }
        }, {
          key: "gettingmsgTypeAndDestination",
          value: function gettingmsgTypeAndDestination(destinationSource, msgtype) {
            var _this24 = this;

            this.rulemap.gettingoperationAndService(destinationSource, msgtype, this.currentUser).subscribe(function (destinationResp) {
              console.log("destinationResp", destinationResp);
              _this24.destinationOperation = destinationResp.OPERATION;
              _this24.destinationService = destinationResp.SERVICE;
              _this24.destinationData = destinationResp.MdmtSystemService;
              _this24.updateRuleMappingDest = _this24.rulemappingdestMapping.msgTransDetails;
              _this24.labelsDestination = destinationResp.MdmtSystemChannel[0].messageChannel;
              console.log(_this24.labelsDestination);

              if (_this24.labelsDestination == "Https/Http") {
                _this24.labelsDestination = destinationResp.MdmtSystemChannel[0].messageFormat;
                _this24.matLabel = "Node";
                _this24.matLabel2 = "Tag Name";
              } else if (_this24.labelsDestination == "TCP/IP") {
                _this24.matLabel = "Filed No";
                _this24.matLabel2 = "Filed Name";
              } // this.rulemappingData=[...this.sourceData,...this.destinationData]


              console.log(_this24.rulemappingData); // this.translationData=translationResp;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "onSelectingMessageBasis",
          value: function onSelectingMessageBasis(event) {
            var _this25 = this;

            console.log("option for fieldno", event.value);
            console.log(event.value);
            var x = this.isoRespData.find(function (item) {
              return item.messageBasis == event.value;
            });
            this.isoRespData.forEach(function (data) {
              data.messageKey = x.messageKey;
              _this25.tagName = data.messageKey;
              data.dataType = x.dataType;
            });
          }
        }, {
          key: "onsaveRuleMapping",
          value: function onsaveRuleMapping() {
            var _this26 = this;

            var payloadObj = {};
            payloadObj = this.ruleMappingDataForPayload;
            payloadObj.creatorId = this.currentUser;
            payloadObj.msgMappingDetails = this.rulemappingDetails.value;

            if (payloadObj.approvedEver == "NO") {
              payloadObj.approvedEver = "N";
            }

            if (payloadObj.approvedEver == "YES") {
              payloadObj.approvedEver = "Y";
            }

            if (payloadObj.approvedStatus == "UNAUTHORIZED") {
              payloadObj.approvedStatus = "U";
            }

            if (payloadObj.approvedStatus == "AUTHORIZED") {
              payloadObj.approvedStatus = "A";
            }

            if (payloadObj.recordStatus == "OPEN") {
              payloadObj.recordStatus = "O";
            }

            if (payloadObj.recordStatus == "CLOSE") {
              payloadObj.recordStatus = "C";
            }

            this.rulemap.updatingRuleMapping(payloadObj, this.currentUser).subscribe(function (resp) {
              console.log(resp);

              if (resp) {
                _this26.addSysRespData = resp;

                _this26.auditLog();

                _this26.disableSubmitBtn = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: "Record is Updated",
                  icon: "success"
                });
                _this26.submit = false;
                _this26.hideFetch = false;
                _this26.hideSubmit = false;
                _this26.formTouched = !_this26.ruleMappingForm.touched;
              }
            }, function (err) {
              console.log(err.error.text);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: "Unable to update the record, server error!",
                icon: "error"
              });
            });
          }
        }]);

        return _RuleMappingDetailsComponent;
      }();

      _RuleMappingDetailsComponent.ɵfac = function RuleMappingDetailsComponent_Factory(t) {
        return new (t || _RuleMappingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
      };

      _RuleMappingDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _RuleMappingDetailsComponent,
        selectors: [["npr-rule-mapping-details"]],
        decls: 181,
        vars: 22,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "addformCol"], [1, "row", "g-4", "align-items-center"], [1, "col"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-3"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["type", "text", "id", "ruleName", "name", "serviceNameS", "placeholder", "Service Name", "formControlName", "systemCode", "readonly", "", 1, "form-control"], ["formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "I"], ["value", "O"], ["value", "A"], ["type", "text", "name", "operationName", "placeholder", "Operation Name", "formControlName", "operationName", "readonly", "", 1, "form-control"], ["type", "text", "name", "serviceName", "placeholder", "Service Name", "formControlName", "serviceName", "readonly", "", 1, "form-control"], ["formGroupName", "destinationSystems"], ["readonly", "", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["readonly", "", "type", "text", "name", "operationName", "placeholder", "Operation Name", "formControlName", "operationName", "readonly", "", 1, "form-control"], ["readonly", "", "type", "text", "name", "serviceName", "placeholder", "Service Name", "formControlName", "serviceName", 1, "form-control", 3, "disabled"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["class", "dbCardStyle", 4, "ngIf"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "col-auto"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"], ["formArrayName", "rulemappingDetails", 1, "addformCol"], [4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], ["class", "addIcon primarybg", 3, "hidden", "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [3, "formGroupName"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], [1, "col-lg-12"], [4, "ngIf"], ["for", "defaultValue", "class", "formLbl", 4, "ngIf"], [3, "hidden", "ngStyle"], ["class", "deleteIcon2", "style", "cursor: pointer", 3, "click", 4, "ngIf"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "value", "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select", 3, "value", "change"], [3, "value", "hidden", 4, "ngFor", "ngForOf"], [3, "value", "hidden"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select"], ["for", "defaultValue", 1, "formLbl"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 2, "background-color", "#f8f9fa", 3, "ngClass", "readonly"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 2, "background-color", "#ffffff", 3, "ngClass"], [1, "deleteIcon2", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "...", 3, "ngClass"], [1, "addIcon", "primarybg", 3, "hidden", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"]],
        template: function RuleMappingDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Rule Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "fieldset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Source System");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_Template_select_change_22_listener($event) {
              return ctx.onSelectionOFMessageType(ctx.rulemapping.sourceTranslationId, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " --Please select-- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Incoming");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Outgoing");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](43, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Destination System");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_Template_select_change_55_listener($event) {
              return ctx.msgTypeOfDestination($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, " --Please select-- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Incoming");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Outgoing");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_Template_button_click_78_listener() {
              return ctx.fetchDestination();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " Fetch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, RuleMappingDetailsComponent_div_80_Template, 19, 11, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Maker");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Maker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](107, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Checker");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](137, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "Checker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](144, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](150, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "First Time Authorization");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](162, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "Authorization Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](174, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "Modification Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.ruleMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.disableFields);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.hideFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.disableFetchBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSource || ctx.showDestination);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.creatorId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](107, 16, ctx.addSysRespData.createdTime, "MM/dd/yyyy, h:mm a"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.addSysRespData.recordStatus == "O" ? "OPEN" : ctx.addSysRespData.recordStatus == "C" ? "CLOSED" : ctx.addSysRespData.recordStatus, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.approverId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](144, 19, ctx.addSysRespData.approvedTime, "MM/dd/yyyy, h:mm a"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.addSysRespData.approvedEver == "N" ? "NO" : ctx.addSysRespData.approvedEver == "Y" ? "YES" : ctx.addSysRespData.approvedEver, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.addSysRespData.approvedStatus == "N" || ctx.addSysRespData.approvedStatus == "U" ? "UNAUTHORIZED" : ctx.addSysRespData.approvedStatus == "Y" || ctx.addSysRespData.approvedStatus == "A" ? "AUTHORIZED" : ctx.addSysRespData.approvedStatus, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.versionNo);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".m-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.path[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  min-width: 120px;\n  border-spacing: 1.5;\n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.image[_ngcontent-%COMP%] {\n  vertical-align: top;\n  top: -8px;\n  position: relative;\n}\n\n.first-image[_ngcontent-%COMP%] {\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtbWFwcGluZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxRQUFBO0FBQ0oiLCJmaWxlIjoicnVsZS1tYXBwaW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS0xMHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxufVxyXG4ucGF0aHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAvLyBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAvL3dpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEuNTtcclxufVxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmltYWdle1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHRvcDogLThweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZpcnN0LWltYWdlIHtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcbiJdfQ== */"]
      });

      var _MdmtMessageMapping2 = /*#__PURE__*/_createClass(function _MdmtMessageMapping2() {
        _classCallCheck(this, _MdmtMessageMapping2);
      });

      var _MdmtMessageMappingDet2 = /*#__PURE__*/_createClass(function _MdmtMessageMappingDet2() {
        _classCallCheck(this, _MdmtMessageMappingDet2);
      });

      var _ruleMapDto2 = /*#__PURE__*/_createClass(function _ruleMapDto2() {
        _classCallCheck(this, _ruleMapDto2);
      });
      /***/

    },

    /***/
    9216:
    /*!*******************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingRoutingModule": function RuleMappingRoutingModule() {
          return (
            /* binding */
            _RuleMappingRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./conversion/conversion.component */
      74982);
      /* harmony import */


      var _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rule-mapping-create/rule-mapping-create.component */
      7622);
      /* harmony import */


      var _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rule-mapping-details/rule-mapping-details.component */
      50531);
      /* harmony import */


      var _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rule-mapping/rule-mapping.component */
      49);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'create',
        component: _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_2__.RuleMappingCreateComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'edit/:mapId',
        component: _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_3__.RuleMappingDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'summary',
        component: _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_4__.RuleMappingComponent
      }, {
        path: 'conversion',
        component: _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_1__.ConversionComponent
      }];

      var _RuleMappingRoutingModule = /*#__PURE__*/_createClass(function _RuleMappingRoutingModule() {
        _classCallCheck(this, _RuleMappingRoutingModule);
      });

      _RuleMappingRoutingModule.ɵfac = function RuleMappingRoutingModule_Factory(t) {
        return new (t || _RuleMappingRoutingModule)();
      };

      _RuleMappingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _RuleMappingRoutingModule
      });
      _RuleMappingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_RuleMappingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8690:
    /*!***********************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingModule": function RuleMappingModule() {
          return (
            /* binding */
            _RuleMappingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rule-mapping-routing.module */
      9216);
      /* harmony import */


      var _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rule-mapping/rule-mapping.component */
      49);
      /* harmony import */


      var _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rule-mapping-details/rule-mapping-details.component */
      50531);
      /* harmony import */


      var _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rule-mapping-create/rule-mapping-create.component */
      7622);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./conversion/conversion.component */
      74982);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RuleMappingModule = /*#__PURE__*/_createClass(function _RuleMappingModule() {
        _classCallCheck(this, _RuleMappingModule);
      });

      _RuleMappingModule.ɵfac = function RuleMappingModule_Factory(t) {
        return new (t || _RuleMappingModule)();
      };

      _RuleMappingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _RuleMappingModule
      });
      _RuleMappingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_RuleMappingModule, {
          declarations: [_rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_1__.RuleMappingComponent, _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_2__.RuleMappingDetailsComponent, _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_3__.RuleMappingCreateComponent, _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_5__.ConversionComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    49:
    /*!***************************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping/rule-mapping.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingComponent": function RuleMappingComponent() {
          return (
            /* binding */
            _RuleMappingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      var _c0 = function _c0() {
        return ["/rule-mapping/create"];
      };

      var _c1 = function _c1() {
        return ["active"];
      };

      function RuleMappingComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function RuleMappingComponent_tbody_28_tr_1_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingComponent_tbody_28_tr_1_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);

            var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r9.close(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingComponent_tbody_28_tr_1_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingComponent_tbody_28_tr_1_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r12.open(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingComponent_tbody_28_tr_1_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingComponent_tbody_28_tr_1_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);

            var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r15["delete"](data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["/rule-mapping/conversion"];
      };

      function RuleMappingComponent_tbody_28_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingComponent_tbody_28_tr_1_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);

            var data_r5 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r18.getById(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Conversion");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingComponent_tbody_28_tr_1_Template_button_click_17_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);

            var data_r5 = restoredCtx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r20.auth(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleMappingComponent_tbody_28_tr_1_button_19_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RuleMappingComponent_tbody_28_tr_1_button_20_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, RuleMappingComponent_tbody_28_tr_1_button_21_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.sourceTransDetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.targetTransDetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.mdmtMessageMapping.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.mdmtMessageMapping.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 10, data_r5.mdmtMessageMapping.createdTime, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !(data_r5.mdmtMessageMapping.approvedStatus == "U" || data_r5.mdmtMessageMapping.approvedStatus == "UNAUTHORIZED" || data_r5.mdmtMessageMapping.approvedStatus == "Unauthorized"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (data_r5.mdmtMessageMapping.recordStatus == "O" || data_r5.mdmtMessageMapping.recordStatus == "Open" || data_r5.mdmtMessageMapping.recordStatus == "OPEN") && (data_r5.mdmtMessageMapping.approvedEver == "Y" || data_r5.mdmtMessageMapping.approvedEver == "YES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (data_r5.mdmtMessageMapping.recordStatus == "CLOSED" || data_r5.mdmtMessageMapping.recordStatus == "Close") && (data_r5.mdmtMessageMapping.approvedEver == "YES" || data_r5.mdmtMessageMapping.approvedEver == "Y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r5.mdmtMessageMapping.approvedEver == "N" || data_r5.mdmtMessageMapping.approvedEver == "NO");
        }
      }

      function RuleMappingComponent_tbody_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingComponent_tbody_28_tr_1_Template, 22, 14, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.ruleMappingListResp);
        }
      }

      function RuleMappingComponent_tbody_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      var _c3 = function _c3() {
        return ["/dashboard"];
      };

      var _RuleMappingComponent = /*#__PURE__*/function () {
        function _RuleMappingComponent(rulelist, roleService, router, addSystem, cdr, http) {
          _classCallCheck(this, _RuleMappingComponent);

          this.rulelist = rulelist;
          this.roleService = roleService;
          this.router = router;
          this.addSystem = addSystem;
          this.cdr = cdr;
          this.http = http;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.dtOptions = {};
          this.ruleMappingListResp = [];
          this.isLoading = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
          this.API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        }

        _createClass(_RuleMappingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.currentUser = localStorage.getItem('userFromLogin');
            this.addSystem.setReference({
              referenceId: ''
            });
            localStorage.setItem('link', '');
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              serverSide: true,
              columnDefs: [{
                type: 'date',
                targets: [4]
              }],
              order: [[4, 'desc']],
              // processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]],
              // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],
              ajax: function ajax(dataTablesParameters, callback) {
                dataTablesParameters.minNumber = dataTablesParameters.start + 1;
                dataTablesParameters.maxNumber = dataTablesParameters.start + dataTablesParameters.length;
                console.log(dataTablesParameters.minNumber, dataTablesParameters.maxNumber);
                var pageNo = Math.floor(dataTablesParameters.minNumber / dataTablesParameters.length);
                var pageSize = dataTablesParameters.length;
                var search = dataTablesParameters.search.value;

                _this27.http.get("".concat(_this27.API_URL) + "/msgApi/getAllMapping?pageNo=".concat(pageNo, "&pageSize=").concat(pageSize, "&search=").concat(search)).subscribe(function (resp) {
                  ;
                  console.log(resp);

                  var _iterator = _createForOfIteratorHelper(resp.result),
                      _step;

                  try {
                    var _loop = function _loop() {
                      var item = _step.value;
                      item.recordStatus = _this27.statusArr.find(function (i) {
                        return i.startsWith(item.recordStatus);
                      });
                      item.approvedStatus = _this27.statusArr.find(function (i) {
                        return i.startsWith(item.approvedStatus);
                      });
                    };

                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      _loop();
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  _this27.totalPages = resp.totalNoOfPages;
                  _this27.totalRecords = resp.totalRecords;
                  _this27.ruleMappingListResp = resp.result;

                  var _iterator2 = _createForOfIteratorHelper(_this27.ruleMappingListResp),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var item = _step2.value;

                      _this27.auditLog(item);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  _this27.isLoading = false;

                  _this27.cdr.markForCheck();

                  callback({
                    recordsTotal: resp.totalRecords,
                    recordsFiltered: resp.totalRecords,
                    data: []
                  });
                });
              }
            }; // this.fetchinglistRuleMapping();

            this.roleService.fetchScreenPermissions('Rule Mapping');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this27.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "auditLog",
          value: function auditLog(ruleMappingListResp) {
            console.log(ruleMappingListResp);

            if (ruleMappingListResp.mdmtMessageMapping.approvedStatus == 'U' || ruleMappingListResp.mdmtMessageMapping.approvedStatus == 'Unauthorized' || ruleMappingListResp.mdmtMessageMapping.approvedStatus == 'UNAUTHORIZED') {
              ruleMappingListResp.mdmtMessageMapping.approvedStatus = 'UNAUTHORIZED';
            }

            if (ruleMappingListResp.mdmtMessageMapping.approvedStatus == 'A' || ruleMappingListResp.mdmtMessageMapping.approvedStatus == 'Authorized' || ruleMappingListResp.mdmtMessageMapping.approvedStatus == 'AUTHORIZED') {
              ruleMappingListResp.mdmtMessageMapping.approvedStatus = 'AUTHORIZED';
            }

            if (ruleMappingListResp.mdmtMessageMapping.recordStatus == 'O' || ruleMappingListResp.mdmtMessageMapping.recordStatus == 'Open') {
              ruleMappingListResp.mdmtMessageMapping.recordStatus = 'OPEN';
            }

            if (ruleMappingListResp.mdmtMessageMapping.recordStatus == 'C' || ruleMappingListResp.mdmtMessageMapping.recordStatus == 'Close') {
              ruleMappingListResp.mdmtMessageMapping.recordStatus = 'CLOSED';
            }

            if (ruleMappingListResp.firstTimeAuth == 'N') {
              console.log("NO");
              ruleMappingListResp.firstTimeAuth = 'NO';
            }

            if (ruleMappingListResp.firstTimeAuth == 'Y') {
              ruleMappingListResp.firstTimeAuth = 'YES';
            }
          }
        }, {
          key: "fetchinglistRuleMapping",
          value: function fetchinglistRuleMapping() {
            var _this28 = this;

            this.isLoading = true;
            this.rulelist.fetchingruleMapping().subscribe(function (resp) {
              var _iterator3 = _createForOfIteratorHelper(resp.result),
                  _step3;

              try {
                var _loop2 = function _loop2() {
                  var item = _step3.value;
                  item.recordStatus = _this28.statusArr.find(function (i) {
                    return i.startsWith(item.recordStatus);
                  });
                  item.approvedStatus = _this28.statusArr.find(function (i) {
                    return i.startsWith(item.approvedStatus);
                  });
                };

                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              console.log(resp);
              _this28.ruleMappingListResp = resp.result; // this.auditLog();

              _this28.isLoading = false;

              _this28.cdr.markForCheck();

              _this28.dtTrigger.next();
            });
          }
        }, {
          key: "getById",
          value: function getById(data) {
            var _this29 = this;

            console.log('OnClick', data);
            var id = 0;

            if (data.mdmtMessageMapping.msgMappingDetails.length > 0) {
              data.mappingId = data.mdmtMessageMapping.msgMappingDetails[0].mappingId;
            }

            console.log(id);
            this.rulelist.getruleMappingById(id, data.mappingId).subscribe(function (resp) {
              console.log(resp);
              _this29.mappingDetailsArray = resp.mdmtMessageMappingDet;
              var queryParams = {
                sourceTransDetId: resp.sourceTransDetId,
                targetTransDetId: resp.targetTransDetId,
                mdmtMessageMappingDet: resp.mdmtMessageMappingDet,
                responseData: data
              };
              console.log(queryParams);

              _this29.addSystem.sendNavParam(queryParams);

              _this29.router.navigate(['/rule-mapping/edit', data.mappingId]);
            });
          }
        }, {
          key: "open",
          value: function open(data) {
            var _this30 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                _this30.rulelist.editRuleMapping("open", _this30.currentUser, data).subscribe(function (resp) {
                  _this30.addSysRespData = resp;
                  _this30.authBtnHide = false;
                  _this30.editBtn = false;
                  _this30.authBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Record is Opened',
                    icon: 'success'
                  }).then(function () {
                    return window.location.reload();
                  }); // this.toastService.successMessage('Record Opened!', '');
                });
              }
            });
          }
        }, {
          key: "close",
          value: function close(data) {
            var _this31 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to close record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                // let payloadObj: any = {};
                // payloadObj = this.ruleMappingDataForPayload;
                // payloadObj.msgMappingDetails = this.rulemappingDetail;
                _this31.rulelist.editRuleMapping("close", _this31.currentUser, data).subscribe(function (resp) {
                  _this31.addSysRespData = resp;
                  _this31.editBtn = true;
                  _this31.authBtn = true;
                  _this31.deleted = false;
                  _this31.reopenBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Record is  Closed',
                    icon: 'success'
                  }).then(function () {
                    return window.location.reload();
                  }); // this.toastService.successMessage('Record is Closed', '');
                });
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this32 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                _this32.rulelist.ondeleteMapping(data.mappingId, _this32.currentUser).subscribe(function (resp) {
                  if (resp) {
                    _this32.deleted = true;
                    _this32.editBtn = true;
                    _this32.authBtn = true;
                    _this32.closeBtn = true; // this.toastService.successMessage('Deleted Successfully!', '');

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      title: 'Record is Deleted',
                      confirmButtonText: 'Ok'
                    }).then(function () {
                      return window.location.reload();
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Failed to delete the reocrd");
                  }
                });
              }
            });
          }
        }, {
          key: "auth",
          value: function auth(data) {
            var _this33 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                console.log(data.creatorId);

                if (_this33.currentUser == data.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Maker cannot authorize the record!'); // this.toastService.successMessage('Maker cannot authorize!', '');
                } else {
                  _this33.rulelist.editRuleMapping("auth", _this33.currentUser, data.mdmtMessageMapping).subscribe(function (resp) {
                    _this33.authorizeDone = true;
                    _this33.addSysRespData = resp;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record is Authorized'
                    }).then(function () {
                      return window.location.reload();
                    }); // this.toastService.successMessage('Record Authorized!', '');
                  });
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return _RuleMappingComponent;
      }();

      _RuleMappingComponent.ɵfac = function RuleMappingComponent_Factory(t) {
        return new (t || _RuleMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_5__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient));
      };

      _RuleMappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _RuleMappingComponent,
        selectors: [["npr-rule-mapping"]],
        decls: 31,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize", 1, "summaryIcon"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "...", 1, "summaryIcon"], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "...", 1, "summaryIcon"], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "...", 1, "summaryIcon"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function RuleMappingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rule Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RuleMappingComponent_div_6_Template, 3, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Source System");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Destination System");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Conversion");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, RuleMappingComponent_tbody_28_Template, 2, 1, "tbody", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, RuleMappingComponent_tbody_29_Template, 2, 0, "tbody", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RuleMappingComponent_ng_container_30_Template, 5, 0, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx.dtOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.ruleMappingListResp == null ? null : ctx.ruleMappingListResp.length) != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.ruleMappingListResp == null ? null : ctx.ruleMappingListResp.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_6__.DataTableDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydWxlLW1hcHBpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_rule-mapping_rule-mapping_module_ts-es5.js.map