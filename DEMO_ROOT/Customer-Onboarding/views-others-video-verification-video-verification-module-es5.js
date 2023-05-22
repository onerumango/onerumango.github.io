(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-others-video-verification-video-verification-module"], {
    /***/
    "68+F":
    /*!********************************************************************************!*\
      !*** ./src/app/views/others/video-verification/calljoin/calljoin.component.ts ***!
      \********************************************************************************/

    /*! exports provided: CalljoinComponent */

    /***/
    function F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalljoinComponent", function () {
        return CalljoinComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");

      var CalljoinComponent = /*#__PURE__*/function () {
        function CalljoinComponent() {
          _classCallCheck(this, CalljoinComponent);

          this.color = 'accent';
          this.checked = false;
          this.disabled = false;
        }

        _createClass(CalljoinComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CalljoinComponent;
      }();

      CalljoinComponent.ɵfac = function CalljoinComponent_Factory(t) {
        return new (t || CalljoinComponent)();
      };

      CalljoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CalljoinComponent,
        selectors: [["app-calljoin"]],
        decls: 34,
        vars: 0,
        consts: [[1, "background"], ["fxLayout", "row wrap"], ["fxFlex", "30"], ["fxFlex", "40"], ["fxLayoutAlign", "center stretch", 1, "heading"], ["fxFlex", "100"], ["fxFlex", "20"], [1, "card"], ["fxLayoutAlign", "center stretch"], ["src", "assets/images/call.png"], ["fxFlex", "100", "fxLayoutAlign", "center stretch"], ["mat-stroked-button", "", 1, "Next"], ["fxFlex", "10"]],
        template: function CalljoinComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose your audio and video settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Proceed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "videocam_off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "mic_off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"]],
        styles: [".heading[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.background[_ngcontent-%COMP%] {\n  background-color: #343434;\n  height: 100%;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #242424;\n  width: 50%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 139px;\n  height: 139px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhbGxqb2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWTtBQUFoQjs7QUFHQTtFQUVJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVTtBQURkOztBQUdBO0VBQ0kseUJBQXlCO0VBQ3pCLFVBQVU7QUFBZDs7QUFHQTtFQUVBLFlBQVk7RUFDWixhQUFhO0FBRGI7O0FBSUE7RUFJSSxZQUFXO0VBQ1gseUJBQWlDO0VBQ2pDLFlBQVc7RUFDWCxtQkFBbUI7QUFKdkI7O0FBUUU7RUFFSSxZQUFZO0FBTmxCOztBQVFFO0VBRUksa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQU56QiIsImZpbGUiOiJjYWxsam9pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgXHJcbn1cclxuaW1ne1xyXG4gXHJcbndpZHRoOiAxMzlweDtcclxuaGVpZ2h0OiAxMzlweDtcclxufVxyXG5cclxuLk5leHR7XHJcbiAgICAvLyBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDozJTtcclxuICAgIFxyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgIFxyXG4gIH1cclxuIFxyXG4gIG1hdC1pY29uXHJcbiAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIG1hdC1zbGlkZS10b2dnbGVcclxuICB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiBcclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalljoinComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-calljoin',
            templateUrl: './calljoin.component.html',
            styleUrls: ['./calljoin.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "83s1":
    /*!*********************************************************************************!*\
      !*** ./src/app/views/others/video-verification/video-verification.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: VideoVerificationComponent */

    /***/
    function s1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoVerificationComponent", function () {
        return VideoVerificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./video.service */
      "ztLX");
      /* harmony import */


      var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./appointment/appointment.component */
      "D+DX");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../kyc-basic-information/kyc-basic-information.component */
      "dyf6");
      /* harmony import */


      var _fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../fingerprint-authentication/fingerprint-authentication.component */
      "+DZj");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/application-entry-stage.service */
      "qMRc");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _only_number_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./only-number.directive */
      "Zpjb");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");

      var _c0 = ["profileFile"];

      function VideoVerificationComponent_form_12_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function VideoVerificationComponent_form_12_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 103);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function VideoVerificationComponent_form_12_mat_option_31_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 4, option_r46 == null ? null : option_r46.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 10, option_r46 == null ? null : option_r46.lastName, 0, 1)), " ");
        }
      }

      function VideoVerificationComponent_form_12_mat_option_31_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", option_r46 == null ? null : option_r46.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function VideoVerificationComponent_form_12_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VideoVerificationComponent_form_12_mat_option_31_div_3_Template, 7, 14, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoVerificationComponent_form_12_mat_option_31_div_4_Template, 2, 1, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r46.customerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (option_r46 == null ? null : option_r46.profileImage) == "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (option_r46 == null ? null : option_r46.profileImage) != "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, option_r46 == null ? null : option_r46.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, option_r46 == null ? null : option_r46.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, option_r46 == null ? null : option_r46.lastName), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", option_r46 == null ? null : option_r46.cifNumber, "");
        }
      }

      function VideoVerificationComponent_form_12_p_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_p_33_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.autofillDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_spinner_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 117);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 40);
        }
      }

      function VideoVerificationComponent_form_12_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r53);
        }
      }

      function VideoVerificationComponent_form_12_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Prefix ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0 Prefix and Gender does not match! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Date Of Birth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_option_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", status_r54, " ");
        }
      }

      function VideoVerificationComponent_form_12_mat_error_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Marital Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_option_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gender_r55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gender_r55);
        }
      }

      function VideoVerificationComponent_form_12_mat_error_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0 Prefix and Gender does not match! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_option_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var nation_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", nation_r56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nation_r56);
        }
      }

      function VideoVerificationComponent_form_12_mat_error_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Nationality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_hint_112_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_mat_hint_112_Template_mat_hint_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r57.getOtp(ctx_r57.basicInfoForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.emailVerify, "");
        }
      }

      function VideoVerificationComponent_form_12_mat_error_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Primary Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter valid email address! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_hint_120_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_mat_hint_120_Template_mat_hint_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r59.getOtpMobile(ctx_r59.basicInfoForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r28.mobVerify, " ");
        }
      }

      function VideoVerificationComponent_form_12_mat_error_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number must be 10 digits. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0 \xA0 Please Enter Correct Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_radio_button_130_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VideoVerificationComponent_form_12_mat_radio_button_130_Template_mat_radio_button_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r63.onChange(ctx_r63.basicInfoForm.controls.permanentAddress, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", option_r61.checked)("value", option_r61.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r61.name, " ");
        }
      }

      function VideoVerificationComponent_form_12_mat_error_145_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_152_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_option_162_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Resi_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", Resi_r65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Resi_r65);
        }
      }

      function VideoVerificationComponent_form_12_mat_error_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Residence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_option_172_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r66 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r66, "");
        }
      }

      function VideoVerificationComponent_form_12_mat_error_173_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_error_181_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter vaild Zip Code!(5-10 digits) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_h5_182_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Zip Code!(5-10 digits) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_option_191_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r67 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r67, "");
        }
      }

      function VideoVerificationComponent_form_12_mat_error_192_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_mat_option_201_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r68, "");
        }
      }

      function VideoVerificationComponent_form_12_mat_error_202_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Resi_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", Resi_r81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Resi_r81);
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Residence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r82, "");
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter vaild Zip Code!(5-10 digits) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_h5_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Zip Code!(5-10 digits) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r83, "");
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r84 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r84, "");
        }
      }

      function VideoVerificationComponent_form_12_div_203_mat_error_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "errbd": a0
        };
      };

      function VideoVerificationComponent_form_12_div_203_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Permanent Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address Line 1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VideoVerificationComponent_form_12_div_203_mat_error_13_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VideoVerificationComponent_form_12_div_203_mat_error_20_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Residence Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VideoVerificationComponent_form_12_div_203_mat_option_30_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VideoVerificationComponent_form_12_div_203_mat_error_31_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_div_203_Template_mat_select_selectionChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r85.getPerStateName($event.value, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, VideoVerificationComponent_form_12_div_203_mat_option_40_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, VideoVerificationComponent_form_12_div_203_mat_error_41_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Zip Code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VideoVerificationComponent_form_12_div_203_Template_input_keyup_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r87.isAllSameDigit($event, 1);
          })("change", function VideoVerificationComponent_form_12_div_203_Template_input_change_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r88.getCityandStateByZipcode(ctx_r88.basicInfoForm.get("permanentAddress.country").value, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, VideoVerificationComponent_form_12_div_203_mat_error_48_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, VideoVerificationComponent_form_12_div_203_h5_49_Template, 2, 0, "h5", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "State*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-select", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_div_203_Template_mat_select_selectionChange_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r89.onStateChange("permanent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, VideoVerificationComponent_form_12_div_203_mat_option_59_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, VideoVerificationComponent_form_12_div_203_mat_error_60_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "City*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-select", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_div_203_Template_mat_select_selectionChange_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r90.onCityChange("permanent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, VideoVerificationComponent_form_12_div_203_mat_option_69_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, VideoVerificationComponent_form_12_div_203_mat_error_70_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, !ctx_r45.basicInfoForm.get("permanentAddress.address1").valid && ctx_r45.basicInfoForm.get("permanentAddress.address1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.basicInfoForm.get("permanentAddress.address1").valid && ctx_r45.basicInfoForm.get("permanentAddress.address1").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, !ctx_r45.basicInfoForm.get("permanentAddress.address2").valid && ctx_r45.basicInfoForm.get("permanentAddress.address2").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.basicInfoForm.get("permanentAddress.address2").valid && ctx_r45.basicInfoForm.get("permanentAddress.address2").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, !ctx_r45.basicInfoForm.get("permanentAddress.residenceType").valid && ctx_r45.basicInfoForm.get("permanentAddress.residenceType").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.Residences);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.basicInfoForm.get("permanentAddress.residenceType").valid && ctx_r45.basicInfoForm.get("permanentAddress.residenceType").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, !ctx_r45.basicInfoForm.get("permanentAddress.country").valid && ctx_r45.basicInfoForm.get("permanentAddress.country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.countrys);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.basicInfoForm.get("permanentAddress.country").valid && ctx_r45.basicInfoForm.get("permanentAddress.country").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, !ctx_r45.basicInfoForm.get("permanentAddress.zipCode").valid && ctx_r45.basicInfoForm.get("permanentAddress.zipCode").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.basicInfoForm.get("permanentAddress.zipCode").valid && ctx_r45.basicInfoForm.get("permanentAddress.zipCode").touched || ctx_r45.basicInfoForm.get("permanentAddress.zipCode").required && ctx_r45.basicInfoForm.get("permanentAddress.zipCode").minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.isAllSameDigitVal && 1 == ctx_r45.zipIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, !ctx_r45.basicInfoForm.get("permanentAddress.state").valid && ctx_r45.basicInfoForm.get("permanentAddress.state").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.arrayState1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.basicInfoForm.get("permanentAddress.state").valid && ctx_r45.basicInfoForm.get("permanentAddress.state").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, !ctx_r45.basicInfoForm.get("permanentAddress.city").valid && ctx_r45.basicInfoForm.get("permanentAddress.city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.basicInfoForm.get("permanentAddress.city").valid && ctx_r45.basicInfoForm.get("permanentAddress.city").touched);
        }
      }

      function VideoVerificationComponent_form_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VideoVerificationComponent_form_12_Template_input_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r91.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VideoVerificationComponent_form_12_div_12_Template, 2, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VideoVerificationComponent_form_12_ng_template_13_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_Template_mat_icon_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r93.deleteProfileImg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CIF Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VideoVerificationComponent_form_12_Template_input_keyup_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r94.onKeyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-autocomplete", null, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VideoVerificationComponent_form_12_mat_option_31_Template, 13, 13, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VideoVerificationComponent_form_12_p_33_Template, 2, 0, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, VideoVerificationComponent_form_12_mat_spinner_34_Template, 1, 1, "mat-spinner", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_Template_p_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r95.resetData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Prefix*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r96.onChangePrefix($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, VideoVerificationComponent_form_12_mat_option_47_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, VideoVerificationComponent_form_12_mat_error_48_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, VideoVerificationComponent_form_12_mat_error_49_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "First Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r97.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, VideoVerificationComponent_form_12_mat_error_55_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Middle Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r98.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Last Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r99.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, VideoVerificationComponent_form_12_mat_error_66_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Date of Birth*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-datepicker-toggle", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "mat-datepicker", null, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, VideoVerificationComponent_form_12_mat_error_77_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Marital Status*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-card", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-select", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, VideoVerificationComponent_form_12_mat_option_85_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, VideoVerificationComponent_form_12_mat_error_86_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Gender*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_91_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r100.onChangeGender($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, VideoVerificationComponent_form_12_mat_option_94_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, VideoVerificationComponent_form_12_mat_error_95_Template, 2, 0, "mat-error", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, VideoVerificationComponent_form_12_mat_error_96_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Nationality*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-card", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-select", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, VideoVerificationComponent_form_12_mat_option_105_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, VideoVerificationComponent_form_12_mat_error_106_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Primary Email*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_111_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r101._keyPress1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, VideoVerificationComponent_form_12_mat_hint_112_Template, 2, 1, "mat-hint", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, VideoVerificationComponent_form_12_mat_error_113_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, VideoVerificationComponent_form_12_mat_error_114_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Mobile Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-card", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_119_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r102._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, VideoVerificationComponent_form_12_mat_hint_120_Template, 2, 1, "mat-hint", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, VideoVerificationComponent_form_12_mat_error_121_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, VideoVerificationComponent_form_12_mat_error_122_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, VideoVerificationComponent_form_12_mat_error_123_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Is your Permanent Address same as Communication Address? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-radio-group", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, VideoVerificationComponent_form_12_mat_radio_button_130_Template, 2, 3, "mat-radio-button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Communication Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "mat-divider", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Address Line 1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_144_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r103.keyPressAlphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, VideoVerificationComponent_form_12_mat_error_145_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_151_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r104.keyPressAlphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, VideoVerificationComponent_form_12_mat_error_152_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Residence Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "mat-select", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, VideoVerificationComponent_form_12_mat_option_162_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, VideoVerificationComponent_form_12_mat_error_163_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-select", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_169_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r105.getStateName($event.value, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, VideoVerificationComponent_form_12_mat_option_172_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, VideoVerificationComponent_form_12_mat_error_173_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Zip Code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VideoVerificationComponent_form_12_Template_input_keyup_180_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r106.isAllSameDigit($event, 0);
          })("change", function VideoVerificationComponent_form_12_Template_input_change_180_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r107.getCityandStateByZipcode(ctx_r107.basicInfoForm.get("communicationAddress.country").value, $event.target.value, "communication");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, VideoVerificationComponent_form_12_mat_error_181_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, VideoVerificationComponent_form_12_h5_182_Template, 2, 0, "h5", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "State*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-select", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_188_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r108.onStateChange("communication");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, VideoVerificationComponent_form_12_mat_option_191_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, VideoVerificationComponent_form_12_mat_error_192_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "City*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-card", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-select", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_198_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r109.onCityChange("communication");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, VideoVerificationComponent_form_12_mat_option_201_Template, 2, 2, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, VideoVerificationComponent_form_12_mat_error_202_Template, 2, 0, "mat-error", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, VideoVerificationComponent_form_12_div_203_Template, 71, 33, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var tmp_8_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.basicInfoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.imageURL == "not_available")("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.cifNumberForm)("matAutocomplete", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfCustByCif);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !((tmp_8_0 = ctx_r1.basicInfoForm.get("cifNumber")) == null ? null : tmp_8_0.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c1, !ctx_r1.basicInfoForm.get("prefix").valid && ctx_r1.basicInfoForm.get("prefix").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.indexs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("prefix").valid && ctx_r1.basicInfoForm.get("prefix").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.prefixFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c1, !ctx_r1.basicInfoForm.get("firstName").valid && ctx_r1.basicInfoForm.get("firstName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("firstName").valid && ctx_r1.basicInfoForm.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c1, !ctx_r1.basicInfoForm.get("lastName").valid && ctx_r1.basicInfoForm.get("lastName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("lastName").valid && ctx_r1.basicInfoForm.get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c1, !ctx_r1.basicInfoForm.get("dateOfBirth").valid && ctx_r1.basicInfoForm.get("dateOfBirth").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r16)("max", ctx_r1.tomorrow)("max", ctx_r1.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("dateOfBirth").valid && ctx_r1.basicInfoForm.get("dateOfBirth").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c1, !ctx_r1.basicInfoForm.get("maritalStatus").valid && ctx_r1.basicInfoForm.get("maritalStatus").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.MarritialStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("maritalStatus").valid && ctx_r1.basicInfoForm.get("maritalStatus").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c1, !ctx_r1.basicInfoForm.get("gender").valid && ctx_r1.basicInfoForm.get("gender").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.genders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("gender").valid && ctx_r1.basicInfoForm.get("gender").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.prefixFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c1, !ctx_r1.basicInfoForm.get("nationality").valid && ctx_r1.basicInfoForm.get("nationality").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.nationality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("nationality").valid && ctx_r1.basicInfoForm.get("nationality").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c1, !ctx_r1.basicInfoForm.get("primaryEmailAdress").valid && ctx_r1.basicInfoForm.get("primaryEmailAdress").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("primaryEmailAdress").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("primaryEmailAdress").hasError("required") && ctx_r1.basicInfoForm.get("primaryEmailAdress").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("primaryEmailAdress").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c1, !ctx_r1.basicInfoForm.get("phoneNumber").valid && ctx_r1.basicInfoForm.get("phoneNumber").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("phoneNumber").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("phoneNumber").hasError("required") && ctx_r1.basicInfoForm.get("phoneNumber").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("phoneNumber").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.controls["phoneNumber"].value == "0000000000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.array);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.address1").valid && ctx_r1.basicInfoForm.get("communicationAddress.address1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.address1").valid && ctx_r1.basicInfoForm.get("communicationAddress.address1").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.address2").valid && ctx_r1.basicInfoForm.get("communicationAddress.address2").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.address2").valid && ctx_r1.basicInfoForm.get("communicationAddress.address2").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.residenceType").valid && ctx_r1.basicInfoForm.get("communicationAddress.residenceType").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.Residences);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.residenceType").valid && ctx_r1.basicInfoForm.get("communicationAddress.residenceType").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.country").valid && ctx_r1.basicInfoForm.get("communicationAddress.country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.countrys);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.country").valid && ctx_r1.basicInfoForm.get("communicationAddress.country").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.zipCode").valid && ctx_r1.basicInfoForm.get("communicationAddress.zipCode").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.zipCode").valid && ctx_r1.basicInfoForm.get("communicationAddress.zipCode").touched || ctx_r1.basicInfoForm.get("communicationAddress.zipCode").required && ctx_r1.basicInfoForm.get("permanentAddress.zipCode").minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAllSameDigitVal && 0 == ctx_r1.zipIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.state").valid && ctx_r1.basicInfoForm.get("communicationAddress.state").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.state").valid && ctx_r1.basicInfoForm.get("communicationAddress.state").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](93, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.city").valid && ctx_r1.basicInfoForm.get("communicationAddress.city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.city").valid && ctx_r1.basicInfoForm.get("communicationAddress.city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sameAddress == "No");
        }
      }

      function VideoVerificationComponent_div_33_mat_spinner_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 131);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
        }
      }

      var _c2 = function _c2(a0, a1, a2) {
        return {
          "bookedSlot": a0,
          "availableSlot": a1,
          "selectedClass": a2
        };
      };

      function VideoVerificationComponent_div_33_div_6_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_div_33_div_6_div_2_Template_mat_card_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

            var time_r114 = ctx.$implicit;
            var i_r115 = ctx.index;

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r116.onSelectTime1(time_r114.time, i_r115, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time_r114 = ctx.$implicit;

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", time_r114)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c2, time_r114.booked, time_r114.available, ctx_r113.dateCollection.indexOf(time_r114.time) != -1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r113.format24HrsTo12Hrs(time_r114.time));
        }
      }

      function VideoVerificationComponent_div_33_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoVerificationComponent_div_33_div_6_div_2_Template, 4, 7, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r111.TimeSolts);
        }
      }

      function VideoVerificationComponent_div_33_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Note :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Already Booked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pick the date and then choose the available time slots.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoVerificationComponent_div_33_mat_spinner_5_Template, 1, 1, "mat-spinner", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VideoVerificationComponent_div_33_div_6_Template, 3, 1, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VideoVerificationComponent_div_33_div_7_Template, 15, 0, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showSpinn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.kycTimeOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showNote);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "Next12": a0,
          "Next": a1
        };
      };

      var _c4 = function _c4(a0, a1) {
        return {
          "finish": a0,
          "finish1": a1
        };
      };

      var VideoVerificationComponent = /*#__PURE__*/function () {
        function VideoVerificationComponent(snack, router, videoService, api, dialogService, shareDataService, renderer, dialog, cdr, fb, appApiService) {
          var _this = this;

          _classCallCheck(this, VideoVerificationComponent);

          this.snack = snack;
          this.router = router;
          this.videoService = videoService;
          this.api = api;
          this.dialogService = dialogService;
          this.shareDataService = shareDataService;
          this.renderer = renderer;
          this.dialog = dialog;
          this.cdr = cdr;
          this.fb = fb;
          this.appApiService = appApiService; // selectTime1=['10:00 am','10:30 am','11:00 am'];
          // selectTime2=['11:30 am','12:00 pm','12:30 pm'];
          // selectTime3=['01:00 pm','01:30 pm','02:00 pm'];
          // selectTime4=['02:30 pm','03:00 pm','03:30 pm'];
          // selectTime5=['04:00 pm','04:30 pm','05:00 pm'];

          this.masterInfo = {};
          this.addressInfo = {};
          this.tellerId = 1;
          this.loggedInUser = 1;
          this.title = ['Mr', 'Ms', 'Mrs'];
          this.TimeSolts = [];
          this.tomorrow = new Date();
          this.maxDate = new Date();
          this.minDate = new Date();
          this.cifNumberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.dateCollection = [];
          this.count = 0;
          this.availableSlots = [];
          this.kycTimeOption = false;
          this.selectedIndex = 0;
          this.otpmodel = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_7__["OtpModel"]();
          this.mobVerify = "verify";
          this.emailVerify = "verify";
          this.arrayPrefix = [];
          this.prefixFlag = false;
          this.countrys = [];
          this.arrayState = [];
          this.arrayCity = [];
          this.listOfCustByCif = [];
          this.disabledsatsun = [];
          this.cifFetch = false;
          this.showNote = false;
          this.permanentAddress = this.fb.group({
            addressType: ["Permanent", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          this.array = [{
            id: 1,
            checked: true,
            name: "Yes"
          }, {
            id: 2,
            checked: false,
            name: "No"
          }];

          this.dateClass = function (cellDate, view) {
            if (view === 'month') {
              var highlightDate = _this.disabledsatsun.map(function (strDate) {
                return new Date(strDate);
              }).some(function (d) {
                return d.getDate() === cellDate.getDate() && d.getMonth() === cellDate.getMonth() && d.getFullYear() === cellDate.getFullYear();
              });

              return highlightDate ? 'custom-date-class' : '';
            }

            return '';
          };

          this.maxDate.setDate(this.maxDate.getDate() + 7); //this.tomorrow.setDate(this.tomorrow.getDate())
        }

        _createClass(VideoVerificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.getDoc();
            this.calculateHolidays();
            this.callingTimeslots();
            this.api.getIndex().subscribe(function (resp) {
              console.log(resp.index);
              _this2.tabIndex = resp.index;

              if (resp.index === 1) {
                _this2.assignValuesForTab2(_this2.tabIndex);
              } // TODO WITH MATTAB DISABLE CUSTOM LATER
              // this.tabGroup._tabs[resp.index].disabled = true;

            });
            this.api.getverify1().subscribe(function (resp) {
              if (resp.verify == 'verified') {
                _this2.assignVerify(resp);
              }
            });
            this.api.getverify().subscribe(function (resp) {
              if (resp.verify == 'verified') {
                _this2.assignVerify(resp);
              }
            });
            this.prefixFlag = true;
            this.basicInfoForm = this.fb.group({
              cifNumber: [''],
              prefix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              // middleName: ['',],
              lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              // primaryEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
              // phoneNo: ['', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
              scheduledDate: [''],
              scheduledTime: ['null'],
              primaryEmailAdress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
              phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
              middleName: [""],
              customer_id: [""],
              isAddressSame: [""],
              gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              dateOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              maritalStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              nationality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              profileImage: [""],
              communicationAddress: this.fb.group({
                addressType: ["Communication", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              })
            });
            this.imageURL = "not_available";
            this.link = "vide_link";
          }
        }, {
          key: "onKeyPress",
          value: function onKeyPress(event) {
            var _this3 = this;

            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }

            console.log(event.target.value);
            clearTimeout(this.timer);

            if (!event.target.value) {
              this.listOfCustByCif = [];
            } else {
              this.timer = setTimeout(function () {
                _this3.appApiService.fetchByCif(event.target.value).subscribe(function (res) {
                  console.log(res);

                  if (res) {
                    _this3.listOfCustByCif = res.customerInfoList;
                  }
                });
              }, 1000);
            }
          }
        }, {
          key: "getDoc",
          value: function getDoc() {
            var _this4 = this;

            this.index = "prefix";
            this.gender = "gender";
            this.resi = "residence";
            this.marr = "maritial_Status";
            this.coun = "country";
            this.nation = "nationality"; // this.api.getDropDownValues(this.coun).subscribe((responseData) => {
            //   this.countrys = responseData;
            //   console.log("this.countrys::", this.countrys)
            // });

            this.api.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                  _this4.countrys.push(data[i].countryName);
                }
              }
            });
            this.getAllAuthCities();
            this.api.getDropDownValues(this.gender).subscribe(function (responseDatas) {
              _this4.genders = responseDatas;
            });
            this.api.getDropDownValues(this.resi).subscribe(function (responses) {
              _this4.Residences = responses;
            });
            this.api.getDropDownValues(this.marr).subscribe(function (respo) {
              _this4.MarritialStatus = respo;
            });
            this.api.getDropDownValues(this.index).subscribe(function (re) {
              _this4.indexs = re;
            });
            this.api.getDropDownValues(this.nation).subscribe(function (datas) {
              _this4.nationality = datas;
            });
          }
        }, {
          key: "sameAddress",
          get: function get() {
            return this.basicInfoForm.get("isAddressSame").value;
          }
        }, {
          key: "assignValuesForTab2",
          value: function assignValuesForTab2(tabIndex) {
            this.tab2 = true;
          }
        }, {
          key: "assignVerify",
          value: function assignVerify(resp) {
            if (resp.type == 'mobile') {
              this.mobVerify = 'verified';
            }

            if (resp.type == 'email') {
              this.emailVerify = 'verified';
            }
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }

            if (this.mobVerify == 'verified') {
              if (event != this.mobileVerified) {
                this.mobVerify = 'verify';
              } else {
                this.mobVerify = 'verified';
              }
            }
          }
        }, {
          key: "_keyPress1",
          value: function _keyPress1(event) {
            if (this.emailVerify == 'verified') {
              if (event != this.emailVerified) {
                this.emailVerify = 'verify';
              } else {
                this.emailVerify = 'verified';
              }
            }
          }
        }, {
          key: "letterOnly",
          value: function letterOnly(event) {
            var charCode = event.keyCode;
            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 8) return true;else return false;
          }
        }, {
          key: "callingTimeslots",
          value: function callingTimeslots() {
            this.TimeSolts = [{
              "time": "9:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "9:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "10:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "10:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "11:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "11:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "12:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "12:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "13:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "13:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "14:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "14:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "15:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "15:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "16:00",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "16:30",
              "available": true,
              "selected": false,
              "booked": false
            }, {
              "time": "17:00",
              "available": true,
              "selected": false,
              "booked": false
            }];
          }
        }, {
          key: "backToKyc",
          value: function backToKyc() {
            this.dialogService.openKycVerificationMethod();
            this.router.navigateByUrl('others/Service');
          }
        }, {
          key: "onNextOfVideoVerification",
          value: function onNextOfVideoVerification(form) {
            console.log(form.value);
            this.basicInfoForm = form.value; //  this.videoService.sendUserDetailsOFVideo(this.basicInfoForm);

            this.router.navigateByUrl('/video/schedule-appointment');
          }
        }, {
          key: "onSelectTime1",
          value: function onSelectTime1(time, i, event) {
            this.showNext = true;
            this.datewitmAmPm = event.target.innerText;
            this.count++;

            if (this.count > 1) {
              this.dateCollection = [];
              console.log(!this.TimeSolts[i].selected);
              this.showNext = !this.TimeSolts[i].selected;
            }

            console.log("Time", time, i);
            this.TimeSolts[i].selected = !this.TimeSolts[i].selected;
            this.TimeSolts[i].available = !this.TimeSolts[i].available;
            console.log(this.TimeSolts[i].selected);
            var index = this.dateCollection.indexOf(time);

            if (index > -1 && !this.TimeSolts[i].selected) {
              this.dateCollection.splice(index, 1);
            } else if (index == -1 && this.TimeSolts[i].selected) {
              this.dateCollection.push(time);
              console.log(this.dateCollection);
            }
          }
        }, {
          key: "onNextOfSheduleAppointment",
          value: function onNextOfSheduleAppointment() {
            var _this5 = this;

            this.icustCustVideoVerifyDto = this.basicInfoForm.value;
            this.icustCustVideoVerifyDto.scheduledDate = this.selectedDate;
            this.icustCustVideoVerifyDto.scheduledTime = this.dateCollection;
            this.icustCustVideoVerifyDto.tellerId = this.tellerId;
            this.icustCustVideoVerifyDto.loggedInUser = this.loggedInUser;
            this.videoService.saveCustBasicInfoData(this.icustCustVideoVerifyDto).subscribe(function (data) {
              console.log("data link", data);
              _this5.link = data;

              var dialogRef = _this5.dialog.open(_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentComponent"], {
                data: {
                  time: _this5.datewitmAmPm,
                  date: _this5.selectedDate,
                  link: _this5.link,
                  kycRef: _this5.kycRef
                }
              });

              dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed'); // this.animal = result;
              }); // this.previousStep(1);

              _this5.basicInfoForm.reset();

              _this5.selectedDate = null;
              _this5.TimeSolts = []; //  console.log("in video",this.link);

              _this5.cdr.markForCheck();
            }, function (err) {
              console.log(err.message);
            });
            this.cdr.markForCheck();
          }
        }, {
          key: "bookSlot",
          value: function bookSlot(bookedTime) {
            var now = new Date();
            var time = bookedTime;
            var dt = now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear() + " " + time; //var now = new Date();

            var userval = new Date(dt);

            if (now > userval) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this6 = this;

            for (var i = 0; i < this.TimeSolts.length; i++) {
              var slot = this.bookSlot(this.format24HrsTo12Hrs(this.TimeSolts[i].time));
              this.TimeSolts[i].booked = slot;
            } //console.log("today", moment(today).format('YYYY-MMM-DD HH:MM:SS'),moment(event).format('YYYY-MMM-DD') )


            this.callingTimeslots();
            this.showSpinn = true;
            this.dateCollection = [];
            console.log(event);
            this.selectedDate = this.videoService.convertDate(event);
            console.log("selectedDate", this.selectedDate);
            this.api.gettingAvailableSlotsTeller(this.selectedDate, this.tellerId).subscribe(function (availableSlotsResp) {
              console.log("Available Slots", availableSlotsResp); // availableSlotsResp[0].availableSlots

              if (availableSlotsResp) {
                _this6.showSpinn = false;
                _this6.kycTimeOption = true;
                availableSlotsResp.bookedSlots.forEach(function (element) {
                  var index = _this6.TimeSolts.map(function (x) {
                    return x.time;
                  }).indexOf(element);

                  if (index > -1) {
                    _this6.TimeSolts[index].available = false;
                    _this6.TimeSolts[index].booked = true;
                  }
                });
              }
            });
          }
        }, {
          key: "format24HrsTo12Hrs",
          value: function format24HrsTo12Hrs(time) {
            this.showNote = true;
            var formatted = moment__WEBPACK_IMPORTED_MODULE_11__(time, "HH:mm").format("LT");
            console.log("time", time, formatted);
            return formatted;
          }
        }, {
          key: "kycRef",
          value: function kycRef(kycReference) {
            this.api.setKycRef({
              kycReference: kycReference
            });
          }
        }, {
          key: "next",
          value: function next() {
            // this.kycVerificationForm.reset();
            this.api.setIndex({
              index: 1
            });
            this.api.setFinishFlag({
              finishFlag: false
            });
            var customerId = localStorage.getItem('customer_id');
            console.log("custId::", localStorage.getItem('customer_id'));
            localStorage.setItem('page_id', '1');
            this.shareDataService.shareCustomerId(customerId);
          }
        }, {
          key: "onClickNext",
          value: function onClickNext(tabIndex) {
            var _this7 = this;

            console.log('onClicknext');
            var phoneNumber = this.basicInfoForm.value.phoneNumber;

            if (!this.cifFetch) {
              this.api.fetchCustomerDetails(phoneNumber).subscribe(function (res) {
                if (res != null) {
                  _this7.dialogService.phoneNumberDetailsDialogue(res).subscribe(function (response) {
                    if (response == "Yes") {
                      _this7.nextStep(tabIndex);
                    }
                  });
                } else {
                  _this7.nextStep(tabIndex);
                }
              });
            } else {
              this.nextStep(tabIndex);
            }
          }
        }, {
          key: "nextStep",
          value: function nextStep(tabIndex) {
            var _this8 = this;

            console.log(tabIndex);

            if (this.selectedIndex < 2) {
              this.selectedIndex = tabIndex + 1;
            }

            var userAddress = [];
            userAddress.push(this.basicInfoForm.value.communicationAddress);

            if (this.basicInfoForm.value.permanentAddress) {
              userAddress.push(this.basicInfoForm.value.permanentAddress);
            }

            var payload = {
              cifNumber: this.basicInfoForm.value.cifNumber,
              prefix: this.basicInfoForm.value.prefix,
              primaryEmailAdress: this.basicInfoForm.value.primaryEmailAdress,
              phoneNumber: this.basicInfoForm.value.phoneNumber,
              firstName: this.basicInfoForm.value.firstName,
              lastName: this.basicInfoForm.value.lastName,
              middleName: this.basicInfoForm.value.middleName,
              customer_id: this.basicInfoForm.value.customer_id,
              gender: this.basicInfoForm.value.gender,
              maritalStatus: this.basicInfoForm.value.maritalStatus,
              nationality: this.basicInfoForm.value.nationality,
              // dateOfBirth:this.basicInfoForm.value.dateOfBirth,
              userAddress: userAddress,
              verificationType: 'KYC',
              kycSubmit: false
            };
            console.log(payload, " :: Payload");
            console.log(this.profilePicture);
            this.api.kycScreenBasicinfo(payload).subscribe(function (resp) {
              console.log(resp, "Next response");
              console.log("resp after saving ", resp);
              _this8.id = resp.cifNumber;

              _this8.snack.open("Basic Information Data Saved! ", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right"
              }); // this.disableDays(this.disabledsatsun);


              sessionStorage.setItem('customer_id', resp.customerId);
              localStorage.setItem('customer_id', resp.customerId);
              sessionStorage.setItem('kyc_reference', resp.kycReference);

              _this8.kycRef(resp.kycReference);

              console.log("resp.customerId::", resp.customerId);
              console.log("(this.profilePicture::", _this8.profilePicture);

              if (_this8.profilePicture) {
                // console.log(this.profilePicture)
                var profileUpload = {};
                profileUpload.documentName = "Profile";
                profileUpload.documentType = 1;
                profileUpload.fileType = _this8.profilePicture.type;
                profileUpload.fileName = _this8.profilePicture.name;
                profileUpload.customerId = resp.customerId;
                console.log(profileUpload);
                var uploadData = new FormData();
                uploadData.append('data', JSON.stringify(profileUpload));
                uploadData.append('file', _this8.profilePicture);

                _this8.api.uploadDocument(uploadData).subscribe(function (response) {
                  console.log(response);

                  _this8.next();
                }, function (err) {
                  console.log("error", err);
                });
              }

              _this8.next();
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.basicInfoForm.reset();
            this.imageURL = "not_available";
          }
        }, {
          key: "previousStep",
          value: function previousStep(tabIndex) {
            console.log(tabIndex);

            if (this.selectedIndex > 0) {
              this.selectedIndex = tabIndex - 2;
            }
          }
        }, {
          key: "autofillDetails",
          value: function autofillDetails() {
            // this.basicInfoForm.reset();
            this.cifNumber = this.basicInfoForm.controls.cifNumber.value;

            if (this.cifNumber) {
              this.cifFetch = true;
              this.getallCustomerDetails();
            }
          }
        }, {
          key: "getOtp",
          value: function getOtp(email) {
            this.otpmodel.source = "customer";
            this.otpmodel.source_key = "email";
            this.otpmodel.source_value = email.primaryEmailAdress;

            if (this.emailVerify == 'verify') {
              this.api.getOtp(this.otpmodel).subscribe(function (resp) {});
              this.openDialogEmail(email.primaryEmailAdress);
              this.emailVerified = email.primaryEmailAdress;
            }
          }
        }, {
          key: "openDialogEmail",
          value: function openDialogEmail(email) {
            var dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintAuthenticationComponent"], {
              data: {
                number: email,
                type: "email id"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {}); // this.emailsverify();
          }
        }, {
          key: "getallCustomerDetails",
          value: function getallCustomerDetails() {
            var _this9 = this;

            this.loading = true;
            console.log("CIF video verification ---- :: ", event);
            this.api.gettingCustomerDetails(this.cifNumber).subscribe(function (allCustomerResp) {
              _this9.loading = false;
              console.log("All Customer Details", allCustomerResp);

              if (allCustomerResp === null) {
                _this9.snack.open("Invalid CIF number!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });

                _this9.basicInfoForm.controls.prefix.setValue('');

                _this9.basicInfoForm.controls.firstName.setValue('');

                _this9.basicInfoForm.controls.middleName.setValue('');

                _this9.basicInfoForm.controls.lastName.setValue('');

                _this9.basicInfoForm.controls.primaryEmailAdress.setValue('');

                _this9.basicInfoForm.controls.phoneNo.setValue('');
              }

              _this9.image = allCustomerResp.customerInfoList[0];
              _this9.imageURL = _this9.image.profileImage;
              _this9.masterInfo = allCustomerResp.customerInfoList;
              _this9.addressInfo = allCustomerResp.customerInfoList[0].userAddress;

              if (_this9.masterInfo) {
                _this9.setCustValues();
              }

              if (_this9.addressInfo) {
                _this9.setCustValues2();
              }

              _this9.mobileverify();

              _this9.emailsverify();
            });
          }
        }, {
          key: "setCustValues",
          value: function setCustValues() {
            this.basicInfoForm.controls.prefix.setValue(this.masterInfo[0].prefix);
            this.basicInfoForm.controls.firstName.setValue(this.masterInfo[0].firstName);
            this.basicInfoForm.controls.middleName.setValue(this.masterInfo[0].middleName);
            this.basicInfoForm.controls.lastName.setValue(this.masterInfo[0].lastName);
            this.basicInfoForm.controls.primaryEmailAdress.setValue(this.masterInfo[0].primaryEmailAdress);
            this.basicInfoForm.controls.phoneNumber.setValue(this.masterInfo[0].phoneNumber);
            this.basicInfoForm.controls.dateOfBirth.setValue(this.masterInfo[0].dateOfBirth);
            this.basicInfoForm.controls.maritalStatus.setValue(this.masterInfo[0].maritalStatus);
            this.basicInfoForm.controls.gender.setValue(this.masterInfo[0].gender);
            this.basicInfoForm.controls.nationality.setValue(this.masterInfo[0].nationality);
          }
        }, {
          key: "setCustValues2",
          value: function setCustValues2() {
            this.basicInfoForm.get('communicationAddress.address1').setValue(this.addressInfo[0].address1);
            this.basicInfoForm.get('communicationAddress.address2').setValue(this.addressInfo[0].address2);
            this.basicInfoForm.get('communicationAddress.residenceType').setValue(this.addressInfo[0].residenceType);
            this.basicInfoForm.get('communicationAddress.country').setValue(this.addressInfo[0].country);
            this.basicInfoForm.get('communicationAddress.state').setValue(this.addressInfo[0].state);
            this.getStateName(this.addressInfo[0].country, this.addressInfo[0].address1);
            this.basicInfoForm.get('communicationAddress.city').setValue(this.addressInfo[0].city); // this.getCityName(this.addressInfo[0].state, this.addressInfo[0].address1);

            this.basicInfoForm.get('communicationAddress.zipCode').setValue(this.addressInfo[0].zipCode);
          }
        }, {
          key: "getOtpMobile",
          value: function getOtpMobile(email) {
            this.otpmodel.source = "customer";
            this.otpmodel.source_key = "mobile";
            this.otpmodel.source_value = email.phoneNumber;

            if (this.mobVerify == 'verify') {
              this.api.getOtp(this.otpmodel).subscribe(function (resp) {});
              this.openDialog1(email.phoneNumber);
              this.mobileVerified = email.phoneNumber;
            }
          }
        }, {
          key: "openDialog1",
          value: function openDialog1(phoneNUmber) {
            var dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintAuthenticationComponent"], {
              data: {
                number: phoneNUmber,
                type: "Mobile Number"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {}); // this.mobileverify();
          }
        }, {
          key: "mobileverify",
          value: function mobileverify() {
            var _this10 = this;

            this.api.getverify().subscribe(function (resp) {
              console.log(resp);

              if (resp) {
                _this10.mobVerify = resp.verify;
              }
            }, function (err) {
              _this10.mobVerify = "verify";
            });
          }
        }, {
          key: "emailsverify",
          value: function emailsverify() {
            var _this11 = this;

            this.api.getverify1().subscribe(function (resp) {
              console.log(resp);

              if (resp) {
                _this11.emailVerify = resp.verify;
              }
            }, function (err) {
              _this11.emailVerify = "verify";
            });
          }
        }, {
          key: "deleteProfileImg",
          value: function deleteProfileImg() {
            var _this12 = this;

            this.dialogService.doConfirmDialog('').subscribe(function (response) {
              if (response == "Yes") {
                _this12.imageURL = "not_available";
                _this12.profileFile.nativeElement.value = '';
                var customerId = localStorage.getItem('customerId');

                _this12.api.deleteCustomerDoc(customerId, _this12.profileId).subscribe(function (data) {
                  _this12.snack.open('Profile Image Deleted Successfully', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                });
              }
            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(customerId, document_type) {
            var _this13 = this;

            this.api.getCustomerDocuments(customerId, document_type).subscribe(function (data) {
              console.log("data ::", data);

              if (data.length > 0) {
                _this13.profileId = data[0].id;
                _this13.imageURL = data[0].fileUrl;
              }
            });
          }
        }, {
          key: "onFileChanged",
          value: function onFileChanged(event) {
            var _this14 = this;

            this.profilePicture = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              // this.imgUrl = reader.result;
              //this.fun(event.target.files[0], this.profilePicture);
              //  this.image = reader.result;
              _this14.imageURL = reader.result;
              console.log("file ", reader);
            }; // console.log(this.profilePicture);

          }
        }, {
          key: "onChange",
          value: function onChange(control, e) {
            if (e.value == "No" && !this.basicInfoForm.contains("permanentAddress")) {
              this.basicInfoForm.addControl("permanentAddress", this.permanentAddress);
            } else {
              this.basicInfoForm.removeControl("permanentAddress");
            }
          }
        }, {
          key: "onChangeGender",
          value: function onChangeGender(event) {
            var prefix = this.basicInfoForm.value.prefix;

            if (prefix == "Mr" && event.value == "Male" || prefix == "Ms" && event.value == "Female" || prefix == "Mrs" && (event.value == "Male" || event.value == "Female")) {
              this.prefixFlag = true;
            } else {
              this.prefixFlag = false;
              this.snack.open("Prefix and Gender does not match!", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right"
              });
            }
          }
        }, {
          key: "onChangePrefix",
          value: function onChangePrefix(event) {
            var prefix = this.basicInfoForm.value.gender;
            console.log("gender", prefix);
            console.log("prefix", event.value);

            if (prefix != '') {
              if (event.value == "Mr" && prefix == "Male" || (event.value == "Ms" || event.value == "Mrs") && prefix == "Female") {
                this.prefixFlag = true;
              } else {
                this.prefixFlag = false;
                this.snack.open("Prefix and Gender does not match!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
              }
            }
          }
        }, {
          key: "getStateName",
          value: function getStateName(country, address, isAdd) {
            var _this15 = this;

            if (isAdd) {
              this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
              this.basicInfoForm.get('communicationAddress.state').setValue('');
              this.basicInfoForm.get('communicationAddress.city').setValue('');
            }

            this.entityName = "state";
            console.log("State -- ", country); // this.api.getDropDownForStateCity(this.entityName, country).subscribe((data) => {
            //   this.arrayState = data;

            this.api.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].countryName === country) {
                  _this15.api.getStateByCountryId(data[i].id).subscribe(function (resp) {
                    for (var _i = 0; _i < resp.length; _i++) {
                      if (resp[_i].authStatus === 'A') {
                        _this15.arrayState.push(resp[_i].stateName);
                      }
                    }
                  });

                  break;
                }
              }

              console.log("-->", _this15.arrayState);

              if (address.length > 0) {
                for (var key in address) {
                  if (Object.prototype.hasOwnProperty.call(address, key)) {
                    var element = address[key];

                    for (var state in _this15.arrayState) {
                      if (Object.prototype.hasOwnProperty.call(_this15.arrayState, state)) {
                        var elementState = _this15.arrayState[state];

                        if (elementState.trim() === element.trim()) {
                          console.log('elementState', elementState); // this.getCityName(elementState.trim(),address);
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "getPerStateName",
          value: function getPerStateName(country, isAdd) {
            var _this16 = this;

            if (isAdd) {
              this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
              this.basicInfoForm.get('communicationAddress.state').setValue('');
              this.basicInfoForm.get('communicationAddress.city').setValue('');
            }

            this.entityName = "state";
            console.log("State -- ", country);
            this.api.getDropDownForStateCity(this.entityName, country).subscribe(function (data) {
              _this16.arrayState1 = data;
              console.log("-->", _this16.arrayState);
            });
          } // getCityName(state: any,address) {
          //   this.entityName = "city";
          //   console.log(state)
          //   this.api.getDropDownForStateCity(this.entityName, state).subscribe((data) => {
          //     this.arrayCity = data;
          //     console.log("-->", this.arrayCity)
          //     if (address.length > 0) {
          //       for (const key in address) {
          //         if (Object.prototype.hasOwnProperty.call(address, key)) {
          //           const element = address[key];
          //           for (const City in this.arrayCity) {
          //             if (Object.prototype.hasOwnProperty.call(this.arrayCity, City)) {
          //               const elementCity = this.arrayCity[City];
          //               if (elementCity.trim() === element.trim()) {
          //                 console.log('elementCity', elementCity)
          //                 this.kycVerificationForm.get('communicationAddress.city').setValue(elementCity);
          //                 this.cdr.detectChanges();
          //                 this.cdr.markForCheck();
          //               }
          //             }
          //           }
          //         }
          //       }
          //     }
          //   });
          // }
          // getPerCityName(state: any) {
          //   this.entityName = "city";
          //   console.log(state)
          //   this.api.getDropDownForStateCity(this.entityName, state).subscribe((data) => {
          //     this.arrayCity1 = data;
          //     console.log("-->", this.arrayCity)
          //   });
          // }

        }, {
          key: "getAllAuthCities",
          value: function getAllAuthCities() {
            var _this17 = this;

            this.api.getAuthorizedCityInfo().subscribe(function (res) {
              return res.map(function (r) {
                return _this17.arrayCity.push(r.cityName);
              });
            });
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(addType) {
            if (addType == 'communication') {
              this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
              this.basicInfoForm.get('communicationAddress.city').setValue('');
            } else if (addType == 'permanent') {
              this.basicInfoForm.get('permanentAddress.zipCode').setValue('');
              this.basicInfoForm.get('permanentAddress.city').setValue('');
            }
          }
        }, {
          key: "onCityChange",
          value: function onCityChange(addType) {
            if (addType == 'communication') {
              this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
            } else if (addType == 'permanent') {
              this.basicInfoForm.get('permanentAddress.zipCode').setValue('');
            }
          }
        }, {
          key: "keyPressAlphanumeric",
          value: function keyPressAlphanumeric(event) {
            var inp = String.fromCharCode(event.keyCode);

            if (/^[ A-Za-z0-9_@./#&$,.;:+-]*$/.test(inp)) {
              return true;
            } else {
              event.preventDefault();
              return false;
            }
          }
        }, {
          key: "calculateHolidays",
          value: function calculateHolidays() {
            var _this18 = this;

            this.api.getBranchHolidayInfo().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].authStatus == "A") _this18.disabledsatsun.push(moment__WEBPACK_IMPORTED_MODULE_11__(data[i].calenderDate).format('MMMM D, YYYY'));
              }
            });
            var d = new Date();
            var pred = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
            var nowd;
            var sat_array = "";

            for (var i = 1; i <= pred; i++) {
              nowd = new Date(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + i);
              var weekday = moment__WEBPACK_IMPORTED_MODULE_11__(nowd).format('dddd');

              if (weekday == 'Sunday' || weekday == 'Saturday') {
                this.disabledsatsun.push(moment__WEBPACK_IMPORTED_MODULE_11__(nowd).format('MMMM D, YYYY'));
                sat_array = sat_array + "," + i;
              }
            }
          }
        }, {
          key: "disableDays",
          value: function disableDays(days) {
            var _this19 = this;

            var dayElements = document.querySelectorAll('mat-calendar .mat-calendar-table .mat-calendar-body-cell');
            Array.from(dayElements).forEach(function (element) {
              var matchingDay = days.find(function (d) {
                return d === element.getAttribute('aria-label');
              }) !== undefined;
              if (matchingDay) _this19.renderer.setAttribute(element, 'disabled', '');else _this19.renderer.removeAttribute(element, 'disabled');
            });
          }
        }, {
          key: "getCityandStateByZipcode",
          value: function getCityandStateByZipcode(countryName, zipcode, addType) {
            var _this20 = this;

            if (zipcode.length >= 6) {
              this.api.fetchStateCityByZipcode(countryName, zipcode).subscribe(function (res) {
                if (res) {
                  if (addType == 'communication') {
                    _this20.basicInfoForm.get('communicationAddress.state').setValue(res.stateName);

                    _this20.basicInfoForm.get('communicationAddress.city').setValue(res.cityName);
                  } else {
                    _this20.basicInfoForm.get('permanentAddress.state').setValue(res.stateName);

                    _this20.basicInfoForm.get('permanentAddress.city').setValue(res.cityName);
                  }
                } else {
                  _this20.snack.open("Entered Zipcode is exists", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }
              });
            }
          }
        }]);

        return VideoVerificationComponent;
      }();

      VideoVerificationComponent.ɵfac = function VideoVerificationComponent_Factory(t) {
        return new (t || VideoVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationEntryStageService"]));
      };

      VideoVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VideoVerificationComponent,
        selectors: [["app-video-verification"]],
        viewQuery: function VideoVerificationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.profileFile = _t.first);
          }
        },
        decls: 41,
        vars: 19,
        consts: [[1, "head", "mt-32"], [1, "headerMapping"], [1, "main-head", 2, "padding-left", "5.1%"], [1, "basic-container"], ["mat-align-tabs", "start", 3, "selectedIndex"], ["tabgroup", ""], ["label", "Basic Information", 2, "height", "100%", 3, "disabled"], [1, "outerDiv"], [1, "marginTopKyc"], [3, "formGroup", 4, "ngIf"], [1, "button"], [1, "Back1", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "ngClass", "disabled", "click"], [2, "color", "white"], ["label", "Schedule Appointment", 2, "background-color", "white !important", 3, "disabled"], [1, "matCard", 2, "margin-right", "55px", "margin-left", "27px", "margin-right", "55px !important", "margin-left", "27px", "border-radius", "12px", "background", "#FFFEFE 0% 0% no-repeat padding-box", "box-shadow", "0px 3px 15px #00000017 !important"], [1, "basicInformation"], [1, "line"], ["fxLayout", "column wrap"], ["fxFlex", "100"], ["fxFlex", "35"], [1, "textFont"], [1, "demo-inline-calendar-card", 2, "padding", "0 !important"], [3, "selected", "dateClass", "maxDate", "minDate", "selectedChange"], ["fxFlex", "60", 4, "ngIf"], [1, "forBackBtn"], [1, "back", 3, "click"], ["mat-stroked-button", "", "id", "n", 3, "ngClass", "disabled", "click"], [3, "formGroup"], [1, "verificationHead"], [1, "formSectionContainer"], [1, "formLeft"], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-left", "30px", "cursor", "pointer"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 1, "changeInput", 3, "change"], ["profileFile", ""], ["color", "primary"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "color", "red", "margin-left", "94%", "cursor", "pointer", 3, "click"], ["id", "formfetch", 1, "form"], ["id", "fech", 1, "flex-grow-1"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["type", "input", 1, "widthCard", "inputMatcard"], ["matInput", "", "formControlName", "cifNumber", "type", "number", "min", "0", "oninput", "validity.valid ||(value='');", "name", "cifNumber", "value", "cifNumber", 1, "alignment", 3, "formControl", "matAutocomplete", "keyup"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fechButtonDiv"], ["class", "fetchButton", 3, "click", 4, "ngIf"], ["class", "fetchButton", 3, "diameter", 4, "ngIf"], [1, "fetchButton", 3, "hidden", "click"], [1, "flex-grow-2", 2, "margin-left", "-1px"], [1, "widthCard", "inputMatcard", 3, "ngClass"], ["formControlName", "prefix", 3, "selectionChange"], ["value", ""], [4, "ngIf"], [1, "flex-grow-1"], [1, "inputMatName", 3, "ngClass"], ["matInput", "", "formControlName", "firstName", "type", "text", "name", "lastName", "value", "updateUserInfo.firstName", 1, "alignment", 3, "keypress"], [1, "inputMatNew"], ["matInput", "", "formControlName", "middleName", "type", "text", "name", "middleName", 1, "alignment", 3, "keypress"], [1, "inputMatLastName", 3, "ngClass"], ["matInput", "", "formControlName", "lastName", "type", "text", "name", "lastName", "value", "updateUserInfo.lastName", 1, "alignment", 3, "keypress"], [1, "form"], [1, "inputMatLastName", 2, "height", "48px", 3, "ngClass"], ["matInput", "", "formControlName", "dateOfBirth", "id", "dob", "name", "dateOfBirth", "readonly", "", "value", "dateOfBirth", 1, "alignment", 3, "matDatepicker", "max"], ["fxFlex", "8%", "id", "toggle"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "inputMatcardMarritial", 3, "ngClass"], ["formControlName", "maritalStatus"], [1, "inputGender", 3, "ngClass"], ["formControlName", "gender", 3, "selectionChange"], ["class", "help-block", 4, "ngIf"], ["formControlName", "nationality"], ["fxLayout", "row", 1, "inputMatcardMail", 3, "ngClass"], ["matInput", "", "formControlName", "primaryEmailAdress", "type", "text", "name", "primaryEmailAdress", 3, "keypress"], ["class", "verification", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "inputMatcard", 3, "ngClass"], ["matInput", "", "name", "phoneNumber", "maxLength", "10", "formControlName", "phoneNumber", "required", "", 3, "keypress"], ["fxLayout", "row"], ["id", "bill"], [1, "billName"], ["formControlName", "isAddressSame"], ["class", "ml-8 pr-10", "color", "primary", 3, "checked", "value", "change", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "10px", "fxLayout", "row wrap", 1, "mt-32", "communicationForm"], ["fxFlex", "", "id", "communicationBlockForm", 1, "addressGrid"], [1, "spanDiv"], [1, "span"], [1, "divider"], ["formGroupName", "communicationAddress"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between center"], ["fxFlex", "50%"], [1, "pb-1"], [1, "address-card", "inputMatcard3", 3, "ngClass"], ["matInput", "", "formControlName", "address1", "maxlength", "50", "name", "address1", 1, "full-width", 3, "keypress"], ["matInput", "", "formControlName", "address2", "maxlength", "50", "name", "address2", 1, "full-width", 3, "keypress"], ["formControlName", "residenceType"], ["formControlName", "country", 3, "selectionChange"], ["matInput", "", "formControlName", "zipCode", "onlyNumber", "", "type", "text", "matInput", "", "minLength", "5", "maxLength", "10", "name", "zipCode", 3, "keyup", "change"], ["style", "color: #E74C3C;", 4, "ngIf"], ["name", "state", "formControlName", "state", 3, "selectionChange"], ["name", "city", "formControlName", "city", 3, "selectionChange"], ["fxFlex", "", "class", "addressGrid", "id", "communicationBlockForm", 4, "ngIf"], ["alt", "", 1, "formImg", 3, "src"], [3, "value"], ["fxLayout", "row wrap", 2, "margin-top", "20px"], ["fxFlex", " 100"], ["mat-card-avatar", "", "class", "example-header-image-dropdown", "fxFlex", "10", 4, "ngIf"], ["mat-card-avatar", "", "fxFlex", "10", 4, "ngIf"], ["fxFlex", "80"], [2, "margin-bottom", "0px"], [2, "margin-top", "0px"], ["mat-card-avatar", "", "fxFlex", "10", 1, "example-header-image-dropdown"], ["align", "center", 2, "margin-top", "5px", "font-size", "large"], ["mat-card-avatar", "", "fxFlex", "10"], ["matListAvatar", "", "align", "center", "alt", "...", 2, "border-radius", "50%", "height", "85%", "margin-right", "20px", "width", "100%", "margin-bottom", "50px", 3, "src"], [1, "fetchButton", 3, "click"], [1, "fetchButton", 3, "diameter"], [1, "help-block"], [1, "verification", 3, "click"], ["color", "primary", 1, "ml-8", "pr-10", 3, "checked", "value", "change"], [2, "color", "#E74C3C"], ["formGroupName", "permanentAddress"], ["matInput", "", "formControlName", "address1", "maxlength", "50", "name", "address1", 1, "full-width"], ["fxFlex", "50"], ["matInput", "", "formControlName", "address2", "maxlength", "50", "name", "address2", 1, "full-width"], ["fxFlex", "60"], [1, "paraFont"], ["class", "spinner", 3, "diameter", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], ["style", "font-family: 'Manrope'; padding-left: 13px;\n                                ", 4, "ngIf"], [1, "spinner", 3, "diameter"], ["fxLayout", "row wrap"], ["class", "timeboxes", 4, "ngFor", "ngForOf"], [1, "timeboxes"], [3, "name", "ngClass", "click"], ["fxLayoutAlign", "center stretch", 1, "matContent"], [2, "font-family", "Manrope", "padding-left", "13px"], [2, "margin-right", "40px", "display", "inline-block"], [1, "customBox"], [1, "latterclass"], [1, "customBox1"], [2, "display", "inline-block"], [1, "customBox2"]],
        template: function VideoVerificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home > KYC Screening ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "KYC Screening | Video Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VideoVerificationComponent_form_12_Template, 204, 95, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_span_click_14_listener() {
              return ctx.backToKyc();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.onClickNext(_r0.selectedIndex);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Schedule Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-calendar", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function VideoVerificationComponent_Template_mat_calendar_selectedChange_32_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VideoVerificationComponent_div_33_Template, 8, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_span_click_36_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.previousStep(_r0.selectedIndex);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_38_listener() {
              return ctx.onNextOfSheduleAppointment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c3, ctx.basicInfoForm.invalid, !ctx.basicInfoForm.invalid))("disabled", ctx.basicInfoForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selectedDate)("dateClass", ctx.dateClass)("maxDate", ctx.maxDate)("minDate", ctx.minDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNote);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c4, !ctx.showNext, ctx.showNext))("disabled", !ctx.showNext);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatCalendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _only_number_directive__WEBPACK_IMPORTED_MODULE_29__["OnlyNumberDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListAvatarCssMatStyler"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["SlicePipe"]],
        styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.pr-10[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n  margin-right: 40px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-left: -10%;\n}\n\n#fech[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.fechButtonDiv[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n#formfetch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(50%, 1fr));\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n  .mat-tooltip {\n  font-size: 15px;\n  white-space: pre-wrap;\n  color: gray !important;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 1px solid gray;\n  max-width: unset !important;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n  width: 150px;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetchDiv[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 10px;\n}\n\n.mainAadhar[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n.aadharInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.marginTopKyc[_ngcontent-%COMP%] {\n  margin-top: -1.2%;\n}\n\n.aadharInput1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 3%;\n  text-align: center;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 40px;\n  margin-top: 4%;\n  cursor: pointer;\n}\n\n.aadharForm[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-left: 85px;\n}\n\n.toggleGroup[_ngcontent-%COMP%] {\n  padding: 10px 30px 10px 25px;\n  border: 1px solid lightgrey;\n  margin-top: 1%;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n#dateOf[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.aadharCheck[_ngcontent-%COMP%] {\n  color: green;\n  margin-left: -8%;\n  margin-top: 5%;\n}\n\n.aadharUpload[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  gap: 20px;\n}\n\n.aadharDoc[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -9%;\n  width: 150px;\n  color: white;\n  background-color: gray;\n  border-radius: 45px;\n  margin-left: -17.2%;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 10px;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.flex-grow-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n  margin-left: -10%;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  width: 92% !important;\n  float: right;\n}\n\n#toggle[_ngcontent-%COMP%] {\n  margin-top: -2%;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n  margin-right: -18.7%;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n  align-items: center;\n}\n\n.finish1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  color: white;\n  border-radius: 55px;\n}\n\n.finish[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 24px;\n  opacity: 0.38 !important;\n  color: white;\n}\n\n.back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  letter-spacing: 0px;\n  color: #5D5D5D;\n  cursor: pointer;\n}\n\n.Next1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n  cursor: pointer;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 10%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 100%;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 30% !important;\n}\n\n.span8[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 60% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: 2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.communicationForm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n#communicationBlockForm[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px solid lightgrey;\n  padding: 20px;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n#docMainDivider[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.hide[_ngcontent-%COMP%] {\n  color: white;\n  display: none;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetch[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #456EFE;\n  font-size: small;\n  align-self: center;\n}\n\nF.breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\napp-kyc-verification[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.verify[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  margin-left: 10px;\n}\n\n.verifyButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  height: 10px;\n}\n\n.verifyButton1[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  height: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.cardwidth[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-width: 500px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n  width: 100%;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 2%;\n  padding-right: 14%;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 950px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#index[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n  margin-left: 10px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n  width: 21pc !important;\n  margin-left: 2%;\n}\n\n  .egret-blue .mat-tab-label, .egret-blue[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  width: 21pc;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mat-select-arrow-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 40px !important;\n}\n\n.Back1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  letter-spacing: 0px;\n  color: #5D5D5D;\n  cursor: pointer;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next12[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 24px;\n  opacity: 0.38 !important;\n  color: white;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.selectTime[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 168px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 10px;\n  border: #d8d3d3 solid 1px;\n  margin-bottom: 20px;\n}\n\n.matContent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: center;\n  color: #000000;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 13%;\n  padding-right: 14%;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%]:focus {\n  background-color: #426af5;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: white;\n}\n\n.paraFont[_ngcontent-%COMP%] {\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n  padding-left: 17px;\n}\n\n.textFont[_ngcontent-%COMP%] {\n  font-family: 'Manrope';\n  color: #004C97;\n  font-size: 16px;\n  font-weight: 600;\n  padding-left: 17px;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 90px !important;\n}\n\n .mat-calendar-header {\n  padding-top: 0px !important;\n  padding-right: 8px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  color: white;\n  opacity: 1;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.forBackBtn[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  \n  width: 150px;\n  \n  border-radius: 24px;\n  \n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 3px 3px 15px #0000000f;\n  text-align: center;\n  border: 0;\n}\n\n  .egret-blue .mat-icon-button.mat-button-disabled.mat-button-disabled {\n  color: white;\n}\n\n  .mat-datepicker-content {\n  border-radius: 12px !important;\n}\n\n  .mat-calendar-controls {\n  margin: 0 !important;\n}\n\n  .egret-blue .mat-calendar-table-header-divider::after {\n  background: white;\n}\n\n  .mat-datepicker-content .mat-calendar {\n  height: 375px !important;\n  width: 295px !important;\n}\n\n.customBox[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 20px;\n  background-color: #000000;\n  box-shadow: 0px 3px 10px #00000017;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n.customBox1[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 20px;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 10px #00000017;\n  border: 1px solid #00468C;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n.customBox2[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 20px;\n  background-color: #B20000  !important;\n  box-shadow: 0px 3px 10px #00000017;\n  border: 1px solid #B00000;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n.latterclass[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  display: inline-block;\n}\n\n  .egret-blue .mat-calendar-body-selected {\n  background: transparent linear-gradient(92deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  border: 2px solid #051A2D;\n  color: white;\n  border-radius: 6px;\n  box-shadow: inset 0 0 0 1px white;\n}\n\n  .mat-calendar-content {\n  padding: 0 !important;\n}\n\n  .egret-blue .mat-calendar-table-header > tr:first-child {\n  color: #ffffff;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n}\n\n  .egret-blue .mat-calendar-table-header > tr:first-child > th:first-child {\n  border-bottom-left-radius: 12px !important;\n}\n\n  .egret-blue .mat-calendar-table-header > tr:first-child > th:last-child {\n  border-bottom-right-radius: 12px !important;\n}\n\n .egret-blue .mat-calendar-body-selected {\n  background-color: #FE6700;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  background-color: red;\n  padding: 10px;\n}\n\n .mat-button-toggle-group {\n  border: 0px;\n}\n\n#mat-button-toggle-2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  background-color: #FE6700;\n}\n\nmat-card.selectTime[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n\n.Back[_ngcontent-%COMP%] {\n  background-color: gray;\n  color: white;\n}\n\n.timeboxes[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n  text-align: center;\n}\n\n.bookedSlot[_ngcontent-%COMP%] {\n  background-color: #F3F3F3 !important;\n  pointer-events: none;\n}\n\n.bookedSlot[_ngcontent-%COMP%]    > .matContent[_ngcontent-%COMP%] {\n  color: #B20000;\n}\n\n.availableSlot[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  cursor: pointer;\n  color: #000000 !important;\n  border-radius: 8px;\n}\n\n.selectedClass[_ngcontent-%COMP%] {\n  color: #f7f7f7 !important;\n  background: transparent linear-gradient(90deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box !important;\n  border-radius: 8px !important;\n}\n\n.selectedClass[_ngcontent-%COMP%]    > .matContent[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n  .cdk-overlay-pane {\n  min-width: 270px !important;\n  padding: 7px 0;\n}\n\n  .mat-card-avatar {\n  max-width: 15% !important;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #AED6F1;\n  max-width: 15% !important;\n  width: 25px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.headerMapping[_ngcontent-%COMP%] {\n  top: 108px;\n  left: 120px;\n  height: 17px;\n  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/17px Manrope;\n  letter-spacing: var(--unnamed-character-spacing-0);\n  text-align: left;\n  font: normal normal normal 12px/17px Manrope;\n  letter-spacing: 0px;\n  color: #BFBFC1;\n  padding-left: 70px;\n}\n\n[_nghost-%COMP%]     .mat-tab-header {\n  background-color: white;\n  margin-left: -46px;\n}\n\n.outerDiv[_ngcontent-%COMP%] {\n  padding-right: 50px;\n  padding-left: 14px;\n  padding-top: 24px;\n}\n\n  .mat-calendar-body-cell[disabled] {\n  pointer-events: none;\n}\n\n  .mat-calendar-body-cell[disabled] .mat-calendar-body-cell-content {\n  color: red !important;\n}\n\n  .custom-date-class .mat-calendar-body-cell-content {\n  color: red !important;\n  border-radius: 100% !important;\n}\n\n  td.custom-date-class {\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW8tdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsbUJBQW1CO0FBRHJCOztBQUdBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUFwQjs7QUFHQTtFQUNFLGVBQWU7QUFBakI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUFiOztBQU1BO0VBQ0UsaUJBQWlCO0FBSG5COztBQUtBO0VBQ0EsYUFBYTtBQUZiOztBQUlBO0VBQ0Usa0JBQWtCO0FBRHBCOztBQUdBO0VBRUUsYUFBYTtFQUNiLHNDQUFzQztBQUR4Qzs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFJQTtFQUNFLGFBQWE7QUFEZjs7QUFJQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0RBQWtEO0FBRHBEOztBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxnQkFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFEeEI7O0FBSUE7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBRnhCOztBQUtBOztFQUVFLGVBQWU7QUFGakI7O0FBS0E7RUFDRSxPQUFPO0FBRlQ7O0FBUUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUxiOztBQVFBO0VBRUUsWUFBWTtFQUNaLFlBQVk7QUFOZDs7QUFhQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNC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QTdSaEI7O0FBK1JBO0VBQ0Esb0NBQW9DO0VBQ3BDLGVBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBNVJsQjs7QUFrU0E7RUFDRSx5QkFBeUI7RUFDekIsK0dBQStHO0VBQy9HLDZCQUE2QjtBQS9SL0I7O0FBaVNBO0VBQ0UsWUFBWTtBQTlSZDs7QUFnU0E7RUFDQSxTQUFTO0VBQ1QsYUFBYTtFQUliLGlDQUFpQztBQWhTakM7O0FBbVNBO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtFQWhTdkI7QUFDRjs7QUFtU0E7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQWhTaEI7O0FBbVNBO0VBQ0UseUJBQXlCO0FBaFMzQjs7QUFtU0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBaFNwQjs7QUFrU0E7RUFDRSxVQUFVO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixpR0FBaUc7RUFDakcsa0RBQWtEO0VBQ2xELGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7QUEvUnRCOztBQWlTQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUE5UnBCOztBQWdTQTtFQUNFLG1CQUFtQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBN1JyQjs7QUErUkE7RUFDRSxvQkFBb0I7QUE1UnRCOztBQStSQTtFQUNFLHFCQUFxQjtBQTVSdkI7O0FBK1JBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE2QjtBQTVSL0I7O0FBK1JBO0VBQ0UsK0JBQStCO0FBNVJqQyIsImZpbGUiOiJ2aWRlby12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnByLTEwe1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZldGNoQnV0dG9uIHtcclxuICBjb2xvcjogIzQ1NkVGRTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxubWF0LWhpbnQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmFwcC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gLnZlcmlmaWNhdGlvbkhlYWR7XHJcbi8vICAgb3BhY2l0eTogOTAlO1xyXG4vLyB9XHJcbi5tYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xyXG59XHJcbiNmZWNoe1xyXG5kaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mZWNoQnV0dG9uRGl2e1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4jZm9ybWZldGNoe1xyXG4gIFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JSAyNSU7XHJcbn1cclxuXHJcbi5iYXNpYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg1MCUsIDFmcikpO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyICoge1xyXG4gIC8vIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMiksXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4vLyAgIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDQpIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcbi5mb3JtRmllbGQxIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtRmllbGQge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcblxyXG4gIC8vICAgZ2FwOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbiAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLmZvcm1GaWVsZDIge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRHZW5kZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5ldyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiA0NTVweDtcclxufVxyXG5cclxuLmlucHV0TWF0TGFzdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkRG9jIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoyNzBweDtcclxuICAvLyB3aWR0aDogMTk1cHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYWlsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0MTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1haWxBZGQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFycml0aWFsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZFByZWZpeCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQzIHtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwOHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRBZGQge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXgtd2lkdGg6MjA4cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkNCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXgtd2lkdGg6IDIwOHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDotMSU7XHJcblxyXG59XHJcblxyXG4vLyAjZm9ybTF7XHJcbi8vICAgbWFyZ2luLXJpZ2h0Oi0xJTtcclxuLy8gfVxyXG4uaW5wdXRNYXRjYXJkMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkMiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi8vIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuLy8gICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4vLyB9XHJcblxyXG4uaW5wdXRDbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4vLyA6aG9zdCA6Om5nLWRlZXAgZGl2Lm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuI2NoZWNre1xyXG4gIGFwcGVhcmFuY2U6IG91dGxpbmU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5hYWRoYXJEb2NOdW17XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5hYWRoYXJGZXRjaERpdntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tYWluQWFkaGFye1xyXG4gIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuXHJcbi5hYWRoYXJJbnB1dHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG4vLyAubWFyZ2luVG9we1xyXG4vLyAgIC8vIG1hcmdpbi10b3A6IC00JTtcclxuLy8gfVxyXG4ubWFyZ2luVG9wS3lje1xyXG4gICBtYXJnaW4tdG9wOiAtMS4yJTtcclxuIFxyXG59XHJcbi5hYWRoYXJJbnB1dDF7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC00JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udG9nZ2xlR3JvdXAxe1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hYWRoYXJGb3Jte1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tbGVmdDo4NXB4O1xyXG59XHJcbi50b2dnbGVHcm91cHtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAyNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmOGY3O1xyXG4gIC8vIGZvbnQtc2l6ZTogMTBweDtcclxuICAvLyBoZWlnaHQ6IDQwcHg7XHJcbiBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLnRvZ2dsZUdyb3VwMXtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAyNXB4O1xyXG4vLyAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyZXk7XHJcbi8vICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY4Zjc7XHJcbi8vICAgLy8gZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgIC8vIGhlaWdodDogNDBweDtcclxuIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbiNkYXRlT2Z7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbi5hYWRoYXJDaGVja3tcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IC04JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uYWFkaGFyVXBsb2Fke1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hYWRoYXJEb2N7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIC8vIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9ybTEzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLy8gZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbn1cclxuXHJcbi5mb3JtMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogNTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMTQlO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5CYWNre1xyXG4gIFxyXG4gIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDotOSU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTcuMiU7XHJcbn1cclxuLm1hdENhcmQge1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmNoYW5nZUlucHV0IHtcclxuICBvcGFjaXR5OiAwLjA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbmdlRGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4vLyAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbi8vICAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuLy8gfVxyXG5cclxuLmZsZXgtZ3Jvdy0xIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmZsZXgtZ3Jvdy0yIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xyXG59XHJcblxyXG4uYWxpZ25tZW50IHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jZG9iIHtcclxuICB3aWR0aDo5MiUgIWltcG9ydGFudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiN0b2dnbGV7XHJcblxyXG4gIG1hcmdpbi10b3A6LTIlO1xyXG59XHJcbiNtYXgtd2lkdGgge1xyXG4gIG1heC13aWR0aDogMTUwcHhcclxufVxyXG5cclxuI2Ryb3AtbWF4LXdpZHRoIHtcclxuICB3aWR0aDogMTkwcHg7XHJcbn1cclxuXHJcbiNyYWRpbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5yYWRpb0dyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNuYXRpb25hbGl0eSB7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gIG1hcmdpbi1yaWdodDogNiU7XHJcbn1cclxuXHJcbi5jaGFuZ2Uge1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi5OZXh0IHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTEzJTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTguNyU7XHJcbn1cclxuLmJ1dHRvbjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy9tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTElO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gXHJcbn1cclxuXHJcbi5maW5pc2gxIHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTEzJTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkxZGVnLCAjMDUxQTJEIDAlLCAjMDA0Qzk3IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uZmluaXNoIHtcclxuXHRtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDotMTMlO1xyXG4vL2xlZnQ6IDEwNjNweDtcclxud2lkdGg6IDE1MHB4O1xyXG4vKiBVSSBQcm9wZXJ0aWVzICovXHJcbmJhY2tncm91bmQ6ICM2QzZDNkMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXItcmFkaXVzOiAyNHB4O1xyXG5vcGFjaXR5OiAwLjM4ICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbi5iYWNre1xyXG5cclxuICAgIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNSU7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuLk5leHQxIHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogLTEzJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgLy9tYXJnaW4tbGVmdDoxMDAlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogIzM3NDY2NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyAubWF0LWluay1iYXJ7XHJcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTogMDtcclxuLy8gICAgIGhlaWdodDogMnB4O1xyXG4vLyAgICAgdHJhbnNpdGlvbjogNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xyXG4vLyAgICAgaGVpZ2h0OiA0cHg7XHJcbi8vICAgICBjb2xvcjpcclxuLy8gfVxyXG46Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDRweDtcclxuICAvLyB3aWR0aDogMTE2cHggIWltcG9ydGFudDtcclxuXHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG5tYXQtdGFiLWxhYmVsIHtcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuLy8gbWF0LW9wdGlvbntcclxuLy8gICB3aWR0aDogMjBweDtcclxuLy8gfVxyXG4vLyAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuLy8gICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4vLyAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxufVxyXG5cclxuZmlndXJlIGltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICBnYXA6IDQwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDtcclxuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSApO1xyXG4gIC8vZ3JpZC1nYXA6IDIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtU2VjdGlvbkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybUltZyB7XHJcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbiAgY29sb3I6IHJnYig2NiwgMTM0LCAyNDQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTM0LCAyNDQpO1xyXG59XHJcblxyXG4uVXBsb2FkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbn1cclxuXHJcbiNyb3cge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbn1cclxuXHJcbi5zcGFuIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuOCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3BhbjEyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG5cclxuXHJcbn1cclxuXHJcbiNiaWxsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTQlO1xyXG59XHJcblxyXG4uYmlsbE5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMjAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndyYXAge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZsZXgtYmFzaXMtNTAge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxufVxyXG5cclxuLmdhcC0yMCB7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uYWRkcmVzc0NvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkcmVzcy1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5pbmxpbmUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuYWRkcmVzc0dyaWQge1xyXG4gICAgLy8gZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbi5hZGRyZXNzR3JpZElubmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwge1xyXG4vLyAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuLy8gICBsZWZ0OiAwO1xyXG4vLyB9XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlaWdodC1hdXRvIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hbGlnbi1zZWxmLWZsZXgtZW5kIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmFsaWduLXNlbGYtZmxleC1zdGFydCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLndpZHRoLWZpdC1jb250ZW50IHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tLTgge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jYWRkcmVzc0Jsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuI2NvbW11bmljYXRpb25EaXZpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmNvbW11bmljYXRpb25Gb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNjb21tdW5pY2F0aW9uQmxvY2tGb3JtIHtcclxuXHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jRG9jdW1lbnRGb3JtIHtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0xIHtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbiNkb2NNYWluRGl2aWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbiNkaXZpZGVySW5zaWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmVycmJkXHJcbntcclxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxufVxyXG4uaGlkZVxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuI2NoZWNre1xyXG4gIGFwcGVhcmFuY2U6IG91dGxpbmU7XHJcbn1cclxuLmFhZGhhckRvY051bXtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYWRoYXJGZXRjaHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgXHJcbiAgY29sb3I6IzQ1NkVGRTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gdmlkZW9cclxuXHJcbkYuYnJlYWRjcnVtYiB7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbi8vIC5oZWFkIHtcclxuLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbi8vICAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbi8vIH1cclxuLmZ1bGwtd2lkdGh7XHJcbiAgd2lkdGg6MTgwcHg7XHJcbn1cclxuYXBwLWt5Yy12ZXJpZmljYXRpb257XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmFwcC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udmVyaWZ5e1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4uZmV0Y2hCdXR0b257XHJcbiAgY29sb3I6ICM0NTZFRkU7XHJcbiAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4udmVyaWZ5QnV0dG9ue1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICBmb250LXNpemU6IDEycHg7IFxyXG4gLy8gbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAvL2Zsb2F0OiByaWdodDtcclxuIC8vcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiBcclxuICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4udmVyaWZ5QnV0dG9uMXtcclxuICBjb2xvcjogIzQ1NkVGRTtcclxuICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBcclxuIC8vIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGhlaWdodDogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zcGlubmVye1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm1haW4taGVhZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbm1hdC10YWItZ3JvdXAge1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZmxleC1jb250YWluZXIgKiB7XHJcbiAgLy8gd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpLFxyXG4uZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgzKSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbi8vICAgLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoNCkge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIH1cclxuLmZvcm1GaWVsZDEge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5mb3JtRmllbGQge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG59XHJcbi5jYXJkd2lkdGh7XHJcbiB3aWR0aDogNTAwcHg7XHJcbn1cclxuLmlucHV0TWF0Y2FyZCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uaW5wdXRNYXRjYXJkMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmlucHV0TWF0Y2FyZDIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAvLyBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDEycHg7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbm1hdC1oaW50e1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuXHJcbi5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uZm9ybTEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDUwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxufVxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdENhcmQge1xyXG4gIG1heC13aWR0aDogOTUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmZsZXgtZ3Jvdy0xIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5hbGlnbm1lbnQge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpbmRleHtcclxuICBtYXgtd2lkdGg6MTIwcHg7XHJcbn1cclxuLy8gLmJhc2ljSW5mb3JtYXRpb257XHJcbi8vICAgb3BhY2l0eTogOTAlO1xyXG4vLyB9XHJcbi5saW5lIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLy8gY29sb3I6ICMzNzQ2NjQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgLy8gICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICAvLyApO1xyXG59XHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcbi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxufVxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuLy8gLm1hdC1pbmstYmFye1xyXG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICBoZWlnaHQ6IDJweDtcclxuLy8gICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuLy8gICAgIGhlaWdodDogNHB4O1xyXG4vLyAgICAgY29sb3I6XHJcbi8vIH1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDIxcGMgIWltcG9ydGFudDtcclxuICBcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtYmx1ZSAubWF0LXRhYi1sYWJlbCwgLmVncmV0LWJsdWUgLm1hdC10YWItbGluayB7XHJcbiAgd2lkdGg6IDIxcGM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG59XHJcbm1hdC10YWItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcbi8vIG1hdC1vcHRpb257XHJcbi8vICAgd2lkdGg6IDIwcHg7XHJcbi8vIH1cclxuLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLkJhY2sxe1xyXG5cclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdGNvbG9yOiAjNUQ1RDVEO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uTmV4dHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuXHJcbi5OZXh0MTIge1xyXG5cdG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbi8vbGVmdDogMTA2M3B4O1xyXG53aWR0aDogMTUwcHg7XHJcbi8qIFVJIFByb3BlcnRpZXMgKi9cclxuYmFja2dyb3VuZDogIzZDNkM2QyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbm9wYWNpdHk6IDAuMzggIWltcG9ydGFudDtcclxuY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuaW5wdXQge2JvcmRlcjowO291dGxpbmU6MDtcclxuZm9udC13ZWlnaHQ6IGJvbGR9XHJcbmlucHV0OmZvY3VzIHtvdXRsaW5lOm5vbmUhaW1wb3J0YW50O31cclxuLy8gLmNhcmQsbWF0LWxhYmVse1xyXG4vLyBtYXJnaW4gOjEwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmdyZWVuIHtcclxuYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLnNlbGVjdFRpbWVcclxue1xyXG5oZWlnaHQ6IDQycHg7XHJcbndpZHRoOiAxNjhweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5ib3JkZXI6IG5vbmU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJvcmRlcjogcmdiKDIxNiwgMjExLCAyMTEpIHNvbGlkIDFweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcblxyXG59XHJcbi5tYXRDb250ZW50XHJcbntcclxuZm9udC1zaXplOiAxMnB4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuY29sb3I6IzAwMDAwMCAgO1xyXG5cclxuXHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuZGlzcGxheTogZmxleDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuZ2FwOiAyMHB4O1xyXG5mbGV4LXdyYXA6IHdyYXA7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxucGFkZGluZy1sZWZ0OiAxMyU7XHJcbnBhZGRpbmctcmlnaHQ6IDE0JTtcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmxpbmUge1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5ib3JkZXI6IHRoaWNrO1xyXG4vKiBoZWlnaHQ6IDNweDsgKi9cclxuLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuLyogYm9yZGVyLXdpZHRoOiAzcHg7ICovXHJcbmJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbmNvbG9yOiBibHVlO1xyXG4vLyB3aWR0aDogMjBweDtcclxuY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxud2lkdGg6IDQwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxubWFyZ2luOiBpbml0aWFsO1xyXG59XHJcbi5CYWNre1xyXG5cclxubWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG5tYXJnaW4tbGVmdDotMTUlO1xyXG53aWR0aDoxNTBweDtcclxuY29sb3I6ZGFya2dyZXk7XHJcbmJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbn1cclxuLk5leHR7XHJcbm1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxubWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbndpZHRoOjE1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbmNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiA1NXB4O1xyXG59XHJcbi5OZXh0OmZvY3Vze1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbn1cclxuLm1hdENhcmQge1xyXG5tYXgtd2lkdGg6IDEyNTBweDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbm1hcmdpbi1sZWZ0OiAxNSU7XHJcbm1hcmdpbi1yaWdodDogMTUlO1xyXG5tYXJnaW46IDEwcHggYXV0byAwIGF1dG87XHJcbm1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5kZW1vLWlubGluZS1jYWxlbmRhci1jYXJkIHtcclxud2lkdGg6IDMwMHB4O1xyXG59XHJcbjo6bmctZGVlcC5lZ3JldC1uYXZ5IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKVxyXG57XHJcbmJvcmRlci1jb2xvcjogd2hpdGU7XHJcbi8vIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4ucGFyYUZvbnR7XHJcbmNvbG9yOiAjOTQ5NDk0O1xyXG5mb250LWZhbWlseTonTWFucm9wZSc7XHJcbmZvbnQtc2l6ZTogMTFweDtcclxucGFkZGluZy1sZWZ0OiAxN3B4O1xyXG59XHJcbi50ZXh0Rm9udHtcclxuLy8gY29sb3I6ICMwMDAwMDA7XHJcbi8vIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LWZvY3VzLWluZGljYXRvciBtYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1idXR0b24tYmFzZS5tYXQtYnV0dG9uLXdyYXBwZXJcclxue1xyXG5tYXJnaW4tbGVmdDogOTBweCAhaW1wb3J0YW50O1xyXG5cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2FsZW5kYXItaGVhZGVyIHtcclxucGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTFkZWcsICMwNTFBMkQgMCUsICMwMDRDOTcgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG5jb2xvcjogd2hpdGU7XHJcbi8vIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbm9wYWNpdHk6IDE7XHJcbi8vIGhlaWdodDogNDJweDtcclxuLy8gd2lkdGg6IDM1NHB4O1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcclxuXHJcblxyXG59XHJcbi5mb3JCYWNrQnRue1xyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgLyogbWFyZ2luLXJpZ2h0OiAtMjElOyAqL1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICAvKiBiYWNrZ3JvdW5kOiAjNkM2QzZDIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsgKi9cclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIC8qIG9wYWNpdHk6IDAuMzggIWltcG9ydGFudDsgKi9cclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDE1cHggIzAwMDAwMDBmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmVncmV0LWJsdWUgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItY29udGVudHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItY29udHJvbHN7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5lZ3JldC1ibHVlIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhciB7XHJcbiAgaGVpZ2h0OiAzNzVweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyOTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e1xyXG4vLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MmRlZywgIzA1MUEyRCAwJSwgIzAwNEM5NyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcclxuLy8gICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkge1xyXG4vLyAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkyZGVnLCAjMDUxQTJEIDAlLCAjMDA0Qzk3IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuLy8gICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4uY3VzdG9tQm94e1xyXG4gIGhlaWdodDogMTRweDtcclxuICB3aWR0aDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIC8vIGJhY2tncm91bmQ6ICNGRkZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAjMDAwMDAwMTc7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jdXN0b21Cb3gxe1xyXG4gIGhlaWdodDogMTRweDtcclxuICB3aWR0aDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTFkZWcsICMwNTFBMkQgMCUsICMwMDRDOTcgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIC8vIGJhY2tncm91bmQ6ICNGRkZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAjMDAwMDAwMTc7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNDY4QztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jdXN0b21Cb3gye1xyXG4gIGhlaWdodDogMTRweDtcclxuICB3aWR0aDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0IyMDAwMCAgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjRkZGRUZFIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzAwMDAwMDE3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCMDAwMDA7O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4ubGF0dGVyY2xhc3N7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5lZ3JldC1ibHVlIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTJkZWcsICMwNTFBMkQgMCUsICMwMDRDOTcgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNTFBMkQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggd2hpdGU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmVncmV0LWJsdWUgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgPiB0cjpmaXJzdC1jaGlsZHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MWRlZywgIzA1MUEyRCAwJSwgIzAwNEM5NyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciA+IHRyOmZpcnN0LWNoaWxkPiB0aDpmaXJzdC1jaGlsZHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciA+IHRyOmZpcnN0LWNoaWxkID50aDpsYXN0LWNoaWxke1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwLmVncmV0LWJsdWUgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI0ZFNjcwMDtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLWFycm93XHJcbntcclxuYm9yZGVyLXRvcC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4vLyA6Om5nLWRlZXAubWF0LWZvY3VzLWluZGljYXRvciBtYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXQtYnV0dG9uLWJhc2VcclxuLy8ge1xyXG4vLyBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbi8vIGZsb2F0OiBsZWZ0O1xyXG4vLyB9XHJcblxyXG5cclxuLnNlbGVjdFRpbWUgOmZvY3VzXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbnBhZGRpbmc6MTBweDtcclxufVxyXG4vLyA6Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLCAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZFxyXG4vLyAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmRcclxuOjpuZy1kZWVwLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXHJcbntcclxuYm9yZGVyOjBweCA7XHJcbn1cclxuI21hdC1idXR0b24tdG9nZ2xlLTJcclxue1xyXG5tYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbm1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxufVxyXG5idXR0b246Zm9jdXMge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkU2NzAwO1xyXG59XHJcbm1hdC1jYXJkLnNlbGVjdFRpbWU6YWN0aXZlXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5CYWNre1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aW1lYm94ZXN7XHJcbndpZHRoOjMzJTsgXHJcbmRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm9va2VkU2xvdHtcclxuLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOWM5YzljICwjYzRjNGM0LCNmNWY1ZjUpIWltcG9ydGFudDtcclxuYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMyAhaW1wb3J0YW50O1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbi8vIG9wYWNpdHk6IC41ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvb2tlZFNsb3Q+Lm1hdENvbnRlbnR7XHJcbiAgY29sb3I6ICNCMjAwMDA7XHJcbn1cclxuLmF2YWlsYWJsZVNsb3R7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4vLyAuc2VsZWN0ZWRDbGFzc3tcclxuLy8gY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkU2NzAwICwjRkU4NDMwLCNGRUE5NkUpIWltcG9ydGFudDsgXHJcbi8vIH1cclxuLnNlbGVjdGVkQ2xhc3N7XHJcbiAgY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQgMCUsICMwMDRDOTcgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlbGVjdGVkQ2xhc3M+Lm1hdENvbnRlbnR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mb3JtU2VjdGlvbkNvbnRhaW5lciB7XHJcbmdhcDogNDBweDtcclxuZGlzcGxheTogZ3JpZDtcclxuLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA7XHJcbi8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpICk7XHJcbi8vZ3JpZC1nYXA6IDIwcHg7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0bztcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG4gIG1pbi13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA3cHggMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1hdmF0YXIge1xyXG4gIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZS1kcm9wZG93biB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBRUQ2RjE7XHJcbiAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5oZWFkZXJNYXBwaW5ne1xyXG4gIHRvcDogMTA4cHg7XHJcbiAgICBsZWZ0OiAxMjBweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIGZvbnQ6IHZhcigtLXVubmFtZWQtZm9udC1zdHlsZS1ub3JtYWwpIG5vcm1hbCB2YXIoLS11bm5hbWVkLWZvbnQtd2VpZ2h0LW5vcm1hbCkgMTJweC8xN3B4IE1hbnJvcGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tdW5uYW1lZC1jaGFyYWN0ZXItc3BhY2luZy0wKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxMnB4LzE3cHggTWFucm9wZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0JGQkZDMTtcclxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDZweDtcclxufVxyXG4ub3V0ZXJEaXZ7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbFtkaXNhYmxlZF17XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbFtkaXNhYmxlZF0gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gXHJcbn1cclxuOjpuZy1kZWVwIC5jdXN0b20tZGF0ZS1jbGFzcyAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHRkLmN1c3RvbS1kYXRlLWNsYXNzIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoVerificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-video-verification',
            templateUrl: './video-verification.component.html',
            styleUrls: ['./video-verification.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationEntryStageService"]
          }];
        }, {
          profileFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["profileFile"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZQ1n":
    /*!******************************************************************************!*\
      !*** ./src/app/views/others/video-verification/video-verification.module.ts ***!
      \******************************************************************************/

    /*! exports provided: VideoVerificationModule */

    /***/
    function ZQ1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoVerificationModule", function () {
        return VideoVerificationModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var angular_highcharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! angular-highcharts */
      "mE01");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./schedule-appointment/schedule-appointment.component */
      "lR1S");
      /* harmony import */


      var _video_verification_routing__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./video-verification.routing */
      "traM");
      /* harmony import */


      var _video_verification_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./video-verification.component */
      "83s1");
      /* harmony import */


      var _video_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./video.directive */
      "goEz");
      /* harmony import */


      var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./appointment/appointment.component */
      "D+DX");
      /* harmony import */


      var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./calljoin/calljoin.component */
      "68+F");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _only_number_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./only-number.directive */
      "Zpjb");

      var VideoVerificationModule = /*#__PURE__*/_createClass(function VideoVerificationModule() {
        _classCallCheck(this, VideoVerificationModule);
      });

      VideoVerificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: VideoVerificationModule
      });
      VideoVerificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function VideoVerificationModule_Factory(t) {
          return new (t || VideoVerificationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__["PerfectScrollbarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_28__["VideoRoutes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoVerificationModule, {
          declarations: [_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__["ScheduleAppointmentComponent"], _video_verification_component__WEBPACK_IMPORTED_MODULE_29__["VideoVerificationComponent"], _video_directive__WEBPACK_IMPORTED_MODULE_30__["VideoDirective"], _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_31__["AppointmentComponent"], _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_32__["CalljoinComponent"], _only_number_directive__WEBPACK_IMPORTED_MODULE_34__["OnlyNumberDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__["PerfectScrollbarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoVerificationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__["PerfectScrollbarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_28__["VideoRoutes"])],
            declarations: [_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__["ScheduleAppointmentComponent"], _video_verification_component__WEBPACK_IMPORTED_MODULE_29__["VideoVerificationComponent"], _video_directive__WEBPACK_IMPORTED_MODULE_30__["VideoDirective"], _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_31__["AppointmentComponent"], _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_32__["CalljoinComponent"], _only_number_directive__WEBPACK_IMPORTED_MODULE_34__["OnlyNumberDirective"]],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Zpjb":
    /*!**************************************************************************!*\
      !*** ./src/app/views/others/video-verification/only-number.directive.ts ***!
      \**************************************************************************/

    /*! exports provided: CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR, OnlyNumberDirective */

    /***/
    function Zpjb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR", function () {
        return CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function () {
        return OnlyNumberDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return OnlyNumberDirective;
        }),
        multi: true
      };

      var OnlyNumberDirective = /*#__PURE__*/function () {
        function OnlyNumberDirective(elementRef, renderer) {
          _classCallCheck(this, OnlyNumberDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
        }

        _createClass(OnlyNumberDirective, [{
          key: "onInputChange",
          value: function onInputChange(value) {
            var filteredValue = filterValue(value);
            this.updateTextInput(filteredValue, this.value !== filteredValue);
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.onTouched();
          }
        }, {
          key: "updateTextInput",
          value: function updateTextInput(value, propagateChange) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);

            if (propagateChange) {
              this.onChange(value);
            }

            this.value = value;
          } // ControlValueAccessor Interface

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            value = value ? String(value) : '';
            this.updateTextInput(value, false);
          }
        }]);

        return OnlyNumberDirective;
      }();

      OnlyNumberDirective.ɵfac = function OnlyNumberDirective_Factory(t) {
        return new (t || OnlyNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      OnlyNumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OnlyNumberDirective,
        selectors: [["", "onlyNumber", ""]],
        hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OnlyNumberDirective_input_HostBindingHandler($event) {
              return ctx.onInputChange($event.target.value);
            })("blur", function OnlyNumberDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlyNumberDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[onlyNumber]',
            providers: [CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target.value']]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
          }]
        });
      })();

      function filterValue(value) {
        return value.replace(/[^0-9]*/g, '');
      }
      /***/

    },

    /***/
    "goEz":
    /*!********************************************************************!*\
      !*** ./src/app/views/others/video-verification/video.directive.ts ***!
      \********************************************************************/

    /*! exports provided: VideoDirective */

    /***/
    function goEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoDirective", function () {
        return VideoDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var VideoDirective = /*#__PURE__*/function () {
        function VideoDirective(render, el) {
          _classCallCheck(this, VideoDirective);

          this.render = render;
          this.el = el;
          this.backgroundColor = "transparent";
          this.clr = "white";
        }

        _createClass(VideoDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.name);
          }
        }, {
          key: "ClickType",
          value: function ClickType() {
            console.log("clcick");
            this.backgroundColor = "#FE6700";
            this.clr = "white";
          }
        }]);

        return VideoDirective;
      }();

      VideoDirective.ɵfac = function VideoDirective_Factory(t) {
        return new (t || VideoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      VideoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: VideoDirective,
        selectors: [["", "appVideo", ""]],
        hostVars: 4,
        hostBindings: function VideoDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoDirective_click_HostBindingHandler() {
              return ctx.ClickType();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor)("color", ctx.clr);
          }
        },
        inputs: {
          name: "name"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appVideo]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundColor']
          }],
          clr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.color']
          }],
          ClickType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /***/

    },

    /***/
    "lR1S":
    /*!********************************************************************************************************!*\
      !*** ./src/app/views/others/video-verification/schedule-appointment/schedule-appointment.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ScheduleAppointmentComponent */

    /***/
    function lR1S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentComponent", function () {
        return ScheduleAppointmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../appointment/appointment.component */
      "D+DX");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _video_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../video.directive */
      "goEz");

      function ScheduleAppointmentComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_26_Template_mat_card_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var time_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onSelectTime1(time_r6, ctx_r7.i);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", time_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time_r6);
        }
      }

      function ScheduleAppointmentComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_29_Template_mat_card_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var time2_r9 = ctx.$implicit;
            var i_r10 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onSelectTime1(time2_r9, i_r10, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time2_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time2_r9);
        }
      }

      function ScheduleAppointmentComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_32_Template_mat_card_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var time3_r13 = ctx.$implicit;
            var i_r14 = ctx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.onSelectTime1(time3_r13, i_r14, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time3_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time3_r13);
        }
      }

      function ScheduleAppointmentComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_35_Template_mat_card_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var time4_r17 = ctx.$implicit;
            var i_r18 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onSelectTime1(time4_r17, i_r18, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time4_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time4_r17);
        }
      }

      function ScheduleAppointmentComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_38_Template_mat_card_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var time5_r21 = ctx.$implicit;
            var i_r22 = ctx.index;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.onSelectTime1(time5_r21, i_r22, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time5_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time5_r21);
        }
      }

      var ScheduleAppointmentComponent = /*#__PURE__*/function () {
        function ScheduleAppointmentComponent(router, api, cdr, dialog, el) {
          _classCallCheck(this, ScheduleAppointmentComponent);

          this.router = router;
          this.api = api;
          this.cdr = cdr;
          this.dialog = dialog;
          this.el = el;
          this.dateCollection = [];
          this.toggle = true;
          this.status = 'Enable';
          this.showNext = false;
          this.count = 0;
          this.selectTime1 = ['10:00 am', '10:30 am', '11:00 am'];
          this.selectTime2 = ['11:30 am', '12:00 pm', '12:30 pm'];
          this.selectTime3 = ['01:00 pm', '01:30 pm', '02:00 pm'];
          this.selectTime4 = ['02:30 pm', '03:00 pm', '03:30 pm'];
          this.selectTime5 = ['04:00 pm', '04:30 pm', '05:00 pm'];
          this.completeTimeSolte = ['10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '01:00 pm', '01:30 pm', '02:00 pm', '02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm', '05:00 pm'];
        }

        _createClass(ScheduleAppointmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
              value: null,
              disabled: true
            });

            this.api.getKycRef().subscribe(function (resp) {
              _this21.assignKyc(resp.kycReference);

              console.log(resp.kycReference);
            }); // this.subscription = this.videoService.getUserDetailsOfVideo().subscribe(message => {
            //   console.log("video msg",message);
            //   this.dataFromBasicInfo=Object.assign(message);
            //   console.log("this info",this.dataFromBasicInfo);
            //  console.log("firstName", this.dataFromBasicInfo.text.firstName);
            //   this.cdr.markForCheck();
            //   // if (message) {
            //   //   this.messages.push(message);
            //   // } else {
            //   //   // clear messages when empty message received
            //   //   this.messages = [];
            //   // }
            // });

            console.log(this.el);
          }
        }, {
          key: "assignKyc",
          value: function assignKyc(kycReference) {
            this.kycRef = kycReference;
          }
        }, {
          key: "onSelectTime1",
          value: function onSelectTime1(time, i, event) {
            console.log(time, i, event); // this.IcustCutomerVideoVerification.scheduledTime=time;

            this.dateCollection.push(time);
            console.log(this.dateCollection);
            this.showNext = true;
            this.count++; // if(this.count>1)
            // {
            //   console.log("inside if",this.count);
            // document.getElementById('example').style.backgroundColor="white";
            // }
          }
        }, {
          key: "onNextOfSheduleAppointment",
          value: function onNextOfSheduleAppointment() {
            console.log(this.dataFromBasicInfo);
            this.cdr.markForCheck(); // this.videoService.saveCustBasicInfoData(this.IcustCutomerVideoVerification).subscribe(data=>
            //   {
            //     console.log(data);
            //   })

            document.getElementById('n').style.backgroundColor = 'rgb(66,106,245)';
            var dialogRef = this.dialog.open(_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentComponent"], {
              // width: '250px',
              // data: {time:this.dateCollection}
              data: {
                time: this.dateCollection,
                date: this.selectedDate,
                kycRef: this.kycRef
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed'); // this.animal = result;
            }); // this.IcustCutomerVideoVerification.firstName=this.dataFromBasicInfo.text.firstName;
            // this.IcustCutomerVideoVerification.lastName=this.dataFromBasicInfo.text.elastName;
            // this.IcustCutomerVideoVerification.prefix=this.dataFromBasicInfo.text.prefix;
            // this.IcustCutomerVideoVerification.primaryEmail=this.dataFromBasicInfo.text.primaryEmail;
            // this.IcustCutomerVideoVerification.phoneNo=this.dataFromBasicInfo.text.phoneNo;
          }
        }, {
          key: "onChangeTab",
          value: function onChangeTab(event) {
            var tab = event.tab.textLabel;
            console.log(tab);

            if (tab === "Schedule Appointment") {
              this.router.navigateByUrl('/video/schedule-appointment');
            }

            if (tab === "Basic Information") {
              this.router.navigateByUrl('/video/verification');
            }
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            console.log(event);
            this.selectedDate = event._d;
            console.log(this.selectedDate); // this.IcustCutomerVideoVerification.scheduledDate=this.selectedDate;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {// this.completeTimeSolte.forEach(data=>
            //   {
            //     console.log(data);
            //     this.dateCollection.includes(data)
            //   })
          }
        }]);

        return ScheduleAppointmentComponent;
      }();

      ScheduleAppointmentComponent.ɵfac = function ScheduleAppointmentComponent_Factory(t) {
        return new (t || ScheduleAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ScheduleAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScheduleAppointmentComponent,
        selectors: [["app-schedule-appointment"]],
        decls: 44,
        vars: 7,
        consts: [[1, "head"], [1, "main-head"], [1, "basic-container"], ["mat-align-tabs", "start", 3, "selectedIndex", "selectedTabChange"], ["label", "Basic Information"], ["label", "Schedule Appointment"], [1, "matCard"], [1, "basicInformation"], [1, "line"], ["fxLayout", "column wrap"], ["fxFlex", "100"], ["fxFlex", "40"], [1, "demo-inline-calendar-card"], [3, "selected", "selectedChange"], ["fxFlex", "60"], ["btn", ""], ["fxLayout", "row wrap"], ["fxFlex", "30", 4, "ngFor", "ngForOf"], [1, "button1"], ["mat-button", "", 1, "Back"], ["mat-stroked-button", "", "id", "n", 1, "Next", 3, "click"], ["fxFlex", "30"], ["appVideo", "", "id", "example", 3, "name", "click"], ["fxLayoutAlign", "center stretch", 1, "matContent"], ["appVideo", "", "id", "example", 3, "click"]],
        template: function ScheduleAppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Screening | Video Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function ScheduleAppointmentComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) {
              return ctx.onChangeTab($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Basic Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-calendar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ScheduleAppointmentComponent_Template_mat_calendar_selectedChange_18_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ScheduleAppointmentComponent_div_26_Template, 4, 2, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ScheduleAppointmentComponent_div_29_Template, 4, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ScheduleAppointmentComponent_div_32_Template, 4, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ScheduleAppointmentComponent_div_35_Template, 4, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ScheduleAppointmentComponent_div_38_Template, 4, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_Template_button_click_42_listener() {
              return ctx.onNextOfSheduleAppointment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selectedDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime5);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendar"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _video_directive__WEBPACK_IMPORTED_MODULE_12__["VideoDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"]],
        styles: [".selectTime[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 168px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 10px;\n  border: #d8d3d3 solid 1px;\n  margin-bottom: 20px;\n}\n\n.matContent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: center;\n  color: gray;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%]:focus {\n  background-color: #426af5;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: white;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 90px !important;\n}\n\n .mat-calendar-header {\n  padding-top: 0px !important;\n  padding-right: 8px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  background-color: #456EFE;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-body-selected {\n  background-color: #FE6700;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  background-color: red;\n  padding: 10px;\n}\n\n .mat-button-toggle-group {\n  border: 0px;\n}\n\n#mat-button-toggle-2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  background-color: #FE6700;\n}\n\nmat-card.selectTime[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjaGVkdWxlLWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUFvQztFQUNwQyxtQkFBbUI7QUFBckI7O0FBSUE7RUFFQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVU7QUFGWDs7QUFPQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFKekI7O0FBTUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUpqQjs7QUFNQTtFQUVFLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGVBQWM7RUFDZCxtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCx5QkFBaUM7RUFDakMsWUFBVztFQUNYLG1CQUFtQjtBQUpyQjs7QUFNQTtFQUNFLHlCQUFpQztBQUhuQzs7QUFLQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUZuQjs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFHQTtFQUVBLG1CQUFtQjtBQURuQjs7QUFPQTtFQUVBLDRCQUE0QjtBQUw1Qjs7QUFVQTtFQUNFLDJCQUEyQjtFQUN6Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUc5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQVRyQjs7QUFnQkE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQWJyQjs7QUFnQkE7RUFFRSxrQ0FBa0M7QUFkcEM7O0FBdUJBO0VBRUUscUJBQW9CO0VBQ3BCLGFBQVk7QUFyQmQ7O0FBeUJBO0VBRUUsV0FBVztBQXZCYjs7QUF5QkE7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBdkJuQjs7QUEwQkE7RUFDRSx5QkFBeUI7QUF2QjNCOztBQXlCQTtFQUVFLHdCQUF3QjtBQXZCMUIiLCJmaWxlIjoic2NoZWR1bGUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0VGltZVxyXG57XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIHdpZHRoOiAxNjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogcmdiKDIxNiwgMjExLCAyMTEpIHNvbGlkIDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBcclxufVxyXG4ubWF0Q29udGVudFxyXG57XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGNvbG9yOmdyYXk7XHJcbiBcclxuIFxyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTElO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IHRoaWNrO1xyXG4gIC8qIGhlaWdodDogM3B4OyAqL1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAvKiBib3JkZXItd2lkdGg6IDNweDsgKi9cclxuICBib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIC8vIHdpZHRoOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogaW5pdGlhbDtcclxufVxyXG4uQmFja3tcclxuICBcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBjb2xvcjpkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG5cclxufVxyXG4uTmV4dHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuLk5leHQ6Zm9jdXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG59XHJcbi5tYXRDYXJkIHtcclxuICBtYXgtd2lkdGg6IDEyNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5kZW1vLWlubGluZS1jYWxlbmRhci1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuOjpuZy1kZWVwLmVncmV0LW5hdnkgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpXHJcbntcclxuYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuLy8gYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbiBcclxuXHJcblxyXG4ubWF0LWZvY3VzLWluZGljYXRvciBtYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1idXR0b24tYmFzZS5tYXQtYnV0dG9uLXdyYXBwZXJcclxue1xyXG5tYXJnaW4tbGVmdDogOTBweCAhaW1wb3J0YW50O1xyXG5cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2FsZW5kYXItaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGhlaWdodDogNDJweDtcclxuICAvLyB3aWR0aDogMzU0cHg7XHJcblxyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwLmVncmV0LWJsdWUgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU2NzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLWFycm93XHJcbntcclxuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDo6bmctZGVlcC5tYXQtZm9jdXMtaW5kaWNhdG9yIG1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24gbWF0LWljb24tYnV0dG9uIG1hdC1idXR0b24tYmFzZVxyXG4vLyB7XHJcbi8vIHBhZGRpbmctbGVmdDogOTBweDtcclxuLy8gZmxvYXQ6IGxlZnQ7XHJcbi8vIH1cclxuXHJcblxyXG4uc2VsZWN0VGltZSA6Zm9jdXNcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4vLyA6Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLCAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZFxyXG4vLyAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmRcclxuOjpuZy1kZWVwLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXHJcbntcclxuICBib3JkZXI6MHB4IDtcclxufVxyXG4jbWF0LWJ1dHRvbi10b2dnbGUtMlxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxufVxyXG5idXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbn1cclxubWF0LWNhcmQuc2VsZWN0VGltZTphY3RpdmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleAppointmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-schedule-appointment',
            templateUrl: './schedule-appointment.component.html',
            styleUrls: ['./schedule-appointment.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "traM":
    /*!*******************************************************************************!*\
      !*** ./src/app/views/others/video-verification/video-verification.routing.ts ***!
      \*******************************************************************************/

    /*! exports provided: VideoRoutes */

    /***/
    function traM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoRoutes", function () {
        return VideoRoutes;
      });
      /* harmony import */


      var _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./schedule-appointment/schedule-appointment.component */
      "lR1S");
      /* harmony import */


      var _video_verification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./video-verification.component */
      "83s1");
      /* harmony import */


      var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calljoin/calljoin.component */
      "68+F");

      var VideoRoutes = [{
        path: 'verification',
        component: _video_verification_component__WEBPACK_IMPORTED_MODULE_1__["VideoVerificationComponent"]
      }, {
        path: 'schedule-appointment',
        component: _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleAppointmentComponent"]
      }, {
        path: 'calljoin',
        component: _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_2__["CalljoinComponent"]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-others-video-verification-video-verification-module-es5.js.map