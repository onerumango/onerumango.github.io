(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-card-account-card-account-module~views-others-others-module~views-sessions-sessions-mo~5ec51b27"], {
    /***/
    "cGjq":
    /*!*****************************************************************!*\
      !*** ./src/app/views/others/sign-later/sign-later.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SignLaterComponent */

    /***/
    function cGjq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignLaterComponent", function () {
        return SignLaterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular2-signaturepad */
      "r1zJ");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var _c0 = ["profileFile"];
      var _c1 = ["fileUpload"];

      function SignLaterComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "signature-pad", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function SignLaterComponent_div_19_Template_signature_pad_onBeginEvent_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.drawStart();
          })("onEndEvent", function SignLaterComponent_div_19_Template_signature_pad_onEndEvent_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.drawComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.signaturePadOptions);
        }
      }

      function SignLaterComponent_div_20_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignLaterComponent_div_20_div_15_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.deleteImg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.imageURL1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SignLaterComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Drag and Drop file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignLaterComponent_div_20_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.chooseFileDevice();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Browse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignLaterComponent_div_20_Template_input_change_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onFileSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignLaterComponent_div_20_div_15_Template, 7, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.fileUploaded);
        }
      }

      var SignLaterComponent = /*#__PURE__*/function () {
        function SignLaterComponent(apiService, dialogService, ls, route, router, snack) {
          _classCallCheck(this, SignLaterComponent);

          this.apiService = apiService;
          this.dialogService = dialogService;
          this.ls = ls;
          this.route = route;
          this.router = router;
          this.snack = snack;
          this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 1000,
            'canvasHeight': 300
          };
          this.disableDone = true;
          this.signUploadActive = false;
          this.eSignActive = true;
          this.fileUploaded = false;
        }

        _createClass(SignLaterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParamMap.subscribe(function (params) {
              _this.userData = atob(params.get('cb'));

              if (params.get('cb')) {
                _this.router.navigate([], {
                  queryParams: {
                    'cb': atob(params.get('cb'))
                  }
                });
              }
            });
          }
        }, {
          key: "drawStart",
          value: function drawStart() {
            console.log('begin drawing');
          }
        }, {
          key: "signType",
          value: function signType(_signType) {
            if (_signType == 'eSignActive') {
              this.signUploadActive = false;
              this.eSignActive = true;
            } else if (_signType == 'signUploadActive') {
              this.signUploadActive = true;
              this.eSignActive = false;
            }
          }
        }, {
          key: "chooseFileDevice",
          value: function chooseFileDevice() {
            var el = this.fileUpload.nativeElement;
            el.click();
            this.fileUploaded = true;
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {
            console.log(this.signaturePad.toDataURL());
            this.esignUrl = this.signaturePad.toDataURL();
            console.log('signUrl', this.esignUrl);

            if (this.esignUrl.toString().includes('data:image/png;base64')) {
              this.disableDone = false;
            } else {
              this.disableDone = true;
            }
          }
        }, {
          key: "onFileSelect",
          value: function onFileSelect(event) {
            var _this2 = this;

            console.log("event -- ", event.target.files);
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              _this2.imageURL1 = reader.result;
            };
          }
        }, {
          key: "save",
          value: function save(event) {
            var _this3 = this;

            var _a;

            this.route.queryParamMap.subscribe(function (params) {
              _this3.userData = "{" + params.get('cb').split("&") + "}";
              console.log(_this3.userData);
            });
            var base64Data = (_a = this.signaturePad) === null || _a === void 0 ? void 0 : _a.toDataURL();
            this.signatureImg = base64Data;
            var dataURL = this.signaturePad.toDataURL('image/png');
            var datam = atob(dataURL.substring('data:image/png;base64,'.length)),
                asArray = new Uint8Array(datam.length);

            for (var i = 0, len = datam.length; i < len; ++i) {
              asArray[i] = datam.charCodeAt(i);
            }

            var blob = new Blob([asArray], {
              type: 'image/png'
            });
            var payload = new FormData();
            payload.append('data', JSON.stringify(this.userData));
            if (this.eSignActive) payload.append('file', blob);else if (this.fileUploaded) {
              payload.append('file', this.selectedFile);
            }
            console.log(payload);
            this.apiService.uploadSignature(payload).subscribe(function (resp) {
              console.log(resp);

              if (resp) {
                _this3.snack.open("Uploaded successfully!", "OK", {
                  duration: 6000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
              }
            });
          }
        }, {
          key: "deleteImg",
          value: function deleteImg() {
            this.ls.setItem('enable', false);
            this.imageURL1 = "not_available";
          }
        }]);

        return SignLaterComponent;
      }();

      SignLaterComponent.ɵfac = function SignLaterComponent_Factory(t) {
        return new (t || SignLaterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      SignLaterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignLaterComponent,
        selectors: [["app-sign-later"]],
        viewQuery: function SignLaterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.profileFile = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        decls: 24,
        vars: 4,
        consts: [[1, "headerColor"], [1, "headerDiv"], [1, "bankNameDiv"], [1, "locationDiv"], [1, "selectSignatureContentDiv"], [3, "ngClass", "click"], [1, "imgSignDiv"], ["width", "100px", "height", "100px", "src", "assets/images/esign.png", "alt", ""], [1, "fontSignDiv"], ["class", "selectSignatureContentDiv", 4, "ngIf"], [1, "btnalgn"], ["mat-raised-button", "", 1, "btncolor", 3, "click"], [1, "signDiv"], [3, "options", "onBeginEvent", "onEndEvent"], ["width", "100px", "height", "100px", "src", "assets/images/download.jpg", "alt", ""], [1, "fontStyle"], [1, "browseLink", 3, "click"], ["type", "file", 1, "fileUploadClass", 3, "change"], ["fileUpload", ""], ["class", "signDiv", 4, "ngIf"], [1, "afterUploadImgDiv"], [1, "upImgDiv"], ["required", "", "alt", "", 1, "formImg", 3, "src"]],
        template: function SignLaterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Demo Bank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "K N-Kasthuri Nagar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignLaterComponent_Template_div_click_9_listener() {
              return ctx.signType("eSignActive");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " E - Sign Draw ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignLaterComponent_Template_div_click_14_listener() {
              return ctx.signType("signUploadActive");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Image Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignLaterComponent_div_19_Template, 4, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignLaterComponent_div_20_Template, 16, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignLaterComponent_Template_button_click_22_listener($event) {
              return ctx.save($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sumbit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.eSignActive ? "eSignDivActive" : "eSignDiv");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.signUploadActive ? "signUploadDivActive" : "signUploadDiv");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eSignActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUploadActive);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"]],
        styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.headerDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 100px;\n  width: 100%;\n}\n\n.eSignDiv[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  box-shadow: 0px 1px 4px #00000029 !important;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: medium;\n  font-family: sans-serif;\n  gap: 10px;\n}\n\n.eSignDivActive[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: medium;\n  font-family: sans-serif;\n  gap: 10px;\n  border-bottom: 5px solid #004C97;\n}\n\n.fontSignDiv[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.imgSignDiv[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btncolor[_ngcontent-%COMP%] {\n  color: white;\n  background-image: linear-gradient(to right, #051b2e, #004a92);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btnalgn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.signUploadDiv[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  box-shadow: 0px 1px 4px #00000029 !important;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: medium;\n  font-family: sans-serif;\n  gap: 10px;\n}\n\n.contentCentr[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.fontStyle[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.signUploadDivActive[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: medium;\n  font-family: sans-serif;\n  gap: 10px;\n  border-bottom: 5px solid #004C97;\n}\n\n.signDiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  box-shadow: 0px 1px 8px #00000029 !important;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.fileUploadClass[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.browseLink[_ngcontent-%COMP%] {\n  color: #004C97 !important;\n  font-family: sans-serif;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.browseLink[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n}\n\n.selectSignatureContentDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  gap: 40px;\n  padding: 60px 60px;\n}\n\n.afterUploadImgDiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  justify-content: space-between;\n  align-items: center;\n  gap: 30px;\n}\n\n.upImgDiv[_ngcontent-%COMP%] {\n  width: 300px !important;\n}\n\n.bankNameDiv[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  font-family: initial;\n}\n\n.locationDiv[_ngcontent-%COMP%] {\n  font-size: large;\n  font-family: sans-serif;\n}\n\n.headerColor[_ngcontent-%COMP%] {\n  color: white;\n  background-image: linear-gradient(to right, #051b2e, #004a92);\n}\n\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #02396E;\n}\n\n.mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background: #02396E;\n}\n\n.selectedColor[_ngcontent-%COMP%] {\n  color: #02396E;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.scanButton[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: white;\n  color: blue;\n  border-color: lightgray;\n  margin-left: 5px;\n  border-style: ridge;\n  margin-top: 0px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbi1sYXRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7QUFDbkI7O0FBQ0U7RUFDRSxjQUFjO0FBRWxCOztBQUNFO0VBQ0UsYUFBYTtBQUVqQjs7QUFDRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFFZjs7QUFDRTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsU0FBUztBQUVmOztBQUFFO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQ0FBZ0M7QUFHcEM7O0FBQUU7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBR3hCOztBQUFFO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBR3ZCOztBQUFFO0VBQ0UsWUFBWTtFQUNaLDZEQUF1RTtFQUN2RSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUd2Qjs7QUFBRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUd4Qjs7QUFDRTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsU0FBUztBQUVmOztBQUVFO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQzFCOztBQUVFO0VBQ0UsaUJBQWlCO0FBQ3JCOztBQUVFO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDdEM7O0FBR0U7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0FBQWI7O0FBR0U7RUFDRSx3QkFBd0I7QUFBNUI7O0FBR0U7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0FBQW5COztBQUdFO0VBQ0UscUNBQXFDO0FBQXpDOztBQUdFO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFtQjtBQUF2Qjs7QUFHRTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztBQUFiOztBQUdFO0VBQ0csdUJBQXVCO0FBQTVCOztBQUdFO0VBQ0csbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUF6Qjs7QUFHRTtFQUNELGdCQUFnQjtFQUNoQix1QkFBdUI7QUFBeEI7O0FBSUE7RUFDSSxZQUFZO0VBQ1osNkRBQXVFO0FBRDNFOztBQUlBO0VBQ0UseUJBQXlCO0FBRDNCOztBQUdBO0VBQ0UsbUJBQW1CO0FBQXJCOztBQUdBO0VBQ0UsY0FBYztBQUFoQjs7QUFHQTtFQUNFLGdCQUFnQjtBQUFsQjs7QUFHQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFBeEI7O0FBR0E7RUFFRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx1QkFBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBRHBCIiwiZmlsZSI6InNpZ24tbGF0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1JbWd7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlckRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwcHggMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5lU2lnbkRpdntcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAjMDAwMDAwMjkgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICB9XHJcbiAgLmVTaWduRGl2QWN0aXZle1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDA0Qzk3OyBcclxuICB9XHJcblxyXG4gIC5mb250U2lnbkRpdntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nU2lnbkRpdntcclxuICAgIGZsZXg6IDIgMSBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG5jb2xvcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDUsMjcsNDYpLHJnYigwLDc0LDE0NikpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgIFxyXG4gIC5idG5hbGdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5zaWduVXBsb2FkRGl2e1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNHB4ICMwMDAwMDAyOSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuY29udGVudENlbnRye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuZm9udFN0eWxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuc2lnblVwbG9hZERpdkFjdGl2ZXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzAwNEM5NzsgXHJcbiAgfVxyXG5cclxuXHJcbiAgLnNpZ25EaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDhweCAjMDAwMDAwMjkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbGVVcGxvYWRDbGFzc3tcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5icm93c2VMaW5re1xyXG4gICAgY29sb3I6ICMwMDRDOTcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnJvd3NlTGluazpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0U2lnbmF0dXJlQ29udGVudERpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgcGFkZGluZyA6IDYwcHggNjBweDtcclxuICB9XHJcblxyXG4gIC5hZnRlclVwbG9hZEltZ0RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAudXBJbWdEaXZ7XHJcbiAgICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYmFua05hbWVEaXZ7XHJcbiAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICBmb250LWZhbWlseTogaW5pdGlhbDtcclxuICB9XHJcbiAgXHJcbiAgLmxvY2F0aW9uRGl2e1xyXG4gZm9udC1zaXplOiBsYXJnZTtcclxuIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5oZWFkZXJDb2xvcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDUsMjcsNDYpLHJnYigwLDc0LDE0NikpO1xyXG4gICAgXHJcbn1cclxuLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzk2RTtcclxufVxyXG4ubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMjM5NkU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZENvbG9ye1xyXG4gIGNvbG9yOiAjMDIzOTZFO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4OyBcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2NhbkJ1dHRvbiB7XHJcbiAgLy8gICB3aWR0aDogODBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBib3JkZXItc3R5bGU6IHJpZGdlO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignLaterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-later',
            templateUrl: './sign-later.component.html',
            styleUrls: ['./sign-later.component.scss']
          }]
        }], function () {
          return [{
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, {
          signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"]]
          }],
          profileFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["profileFile"]
          }],
          fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUpload']
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-card-account-card-account-module~views-others-others-module~views-sessions-sessions-mo~5ec51b27-es5.js.map