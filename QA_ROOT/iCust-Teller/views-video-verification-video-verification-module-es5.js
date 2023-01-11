(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-video-verification-video-verification-module"], {
    /***/
    "2qn/":
    /*!*************************************************************************!*\
      !*** ./src/app/views/video-verification/calljoin/calljoin.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CalljoinComponent */

    /***/
    function qn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalljoinComponent", function () {
        return CalljoinComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");

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
        styles: [".heading[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.background[_ngcontent-%COMP%] {\n  background-color: #343434;\n  height: 100%;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #242424;\n  width: 50%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 139px;\n  height: 139px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FsbGpvaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFZO0FBQWhCOztBQUdBO0VBRUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFVO0FBRGQ7O0FBR0E7RUFDSSx5QkFBeUI7RUFDekIsVUFBVTtBQUFkOztBQUdBO0VBRUEsWUFBWTtFQUNaLGFBQWE7QUFEYjs7QUFJQTtFQUlJLFlBQVc7RUFDWCx5QkFBaUM7RUFDakMsWUFBVztFQUNYLG1CQUFtQjtBQUp2Qjs7QUFRRTtFQUVJLFlBQVk7QUFObEI7O0FBUUU7RUFFSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBTnpCIiwiZmlsZSI6ImNhbGxqb2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICBcclxufVxyXG5pbWd7XHJcbiBcclxud2lkdGg6IDEzOXB4O1xyXG5oZWlnaHQ6IDEzOXB4O1xyXG59XHJcblxyXG4uTmV4dHtcclxuICAgIC8vIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwxMDYsMjQ1KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgXHJcbiAgfVxyXG4gXHJcbiAgbWF0LWljb25cclxuICB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgbWF0LXNsaWRlLXRvZ2dsZVxyXG4gIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuIFxyXG4iXX0= */"]
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
    "3nf+":
    /*!*******************************************************************************!*\
      !*** ./src/app/views/video-verification/appointment/appointment.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: AppointmentComponent */

    /***/
    function nf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function () {
        return AppointmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../calljoin/calljoin.component */
      "2qn/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AppointmentComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time_r1);
        }
      }

      var AppointmentComponent = /*#__PURE__*/function () {
        function AppointmentComponent(dialogRef, dialog, data) {
          _classCallCheck(this, AppointmentComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.data = data;
          this.date = new Date();
        }

        _createClass(AppointmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.data); // console.log(this.data[0]);
            // this.timeSlots=Object.entries(this.data);

            console.log(this.timeSlots[1]);

            var _iterator = _createForOfIteratorHelper(this.timeSlots[1]),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var date = _step.value;
                this.dateSelected = date;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(this.timeSlots[0]),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {// this.timeSlotsSeected=time[0];

                var time = _step2.value;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "callJoin",
          value: function callJoin() {
            var dialogRef = this.dialog.open(_calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_2__["CalljoinComponent"], {
              width: '100%',
              height: '80%' // data: {time:this.dateCollection}
              // data: {time: this.dateCollection, date: this.selectedDate}

            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed'); // this.animal = result;
            });
          }
        }]);

        return AppointmentComponent;
      }();

      AppointmentComponent.ɵfac = function AppointmentComponent_Factory(t) {
        return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      AppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppointmentComponent,
        selectors: [["app-appointment"]],
        decls: 23,
        vars: 2,
        consts: [["fxLayout", "row wrap"], ["fxFlex", "100"], ["fxLayoutAlign", "center stretch"], [1, "top"], [1, "clr"], ["class", "clr", 4, "ngFor", "ngForOf"], [1, "link", 3, "click"], [1, "button"], ["mat-stroked-button", "", 1, "Next"]],
        template: function AppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your appointment link is active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date Selcted:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Time Slots:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppointmentComponent_span_12_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentComponent_Template_span_click_18_listener() {
              return ctx.callJoin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "https://xyzBank/customerOnboarding/KYCappointmentSchedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dateSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeSlots[0]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 35%;\n  padding-top: 6%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.link[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.clr[_ngcontent-%COMP%] {\n  color: #426af5;\n  font-weight: 10px;\n  font-weight: bold;\n}\n\n.top[_ngcontent-%COMP%] {\n  padding-top: 3%;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCx5QkFBaUM7RUFDakMsWUFBVztFQUNYLG1CQUFtQjtBQUN2Qjs7QUFFRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2xCLGVBQWU7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQzNCOztBQUNFO0VBRUUsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBRUEsY0FBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUFqQjs7QUFFQTtFQUVFLGVBQWU7QUFBakI7O0FBRUE7RUFDRSxpQkFBZ0I7RUFDaEIsY0FDRjtBQUFBIiwiZmlsZSI6ImFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5leHR7XHJcbiAgICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTEzJTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gICBcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctbGVmdDogMzUlO1xyXG4gICBwYWRkaW5nLXRvcDogNiU7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMTQlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5saW5rXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuXHJcbiAgfVxyXG4uY2xyXHJcbntcclxuY29sb3I6cmdiKDY2LDEwNiwyNDUpO1xyXG5mb250LXdlaWdodDogMTBweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRvcFxyXG57XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG59XHJcbmgye1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDBcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-appointment',
            templateUrl: './appointment.component.html',
            styleUrls: ['./appointment.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "BtQX":
    /*!************************************************************************!*\
      !*** ./src/app/views/video-verification/video-verification.routing.ts ***!
      \************************************************************************/

    /*! exports provided: VideoRoutes */

    /***/
    function BtQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoRoutes", function () {
        return VideoRoutes;
      });
      /* harmony import */


      var _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./schedule-appointment/schedule-appointment.component */
      "oJWN");
      /* harmony import */


      var _video_verification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./video-verification.component */
      "ljjX");
      /* harmony import */


      var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calljoin/calljoin.component */
      "2qn/");

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
    },

    /***/
    "Qc9N":
    /*!***********************************************************************!*\
      !*** ./src/app/views/video-verification/video-verification.module.ts ***!
      \***********************************************************************/

    /*! exports provided: VideoVerificationModule */

    /***/
    function Qc9N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoVerificationModule", function () {
        return VideoVerificationModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var angular_highcharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! angular-highcharts */
      "a0Xn");
      /* harmony import */


      var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! app/shared/shared-material.module */
      "zMWy");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./schedule-appointment/schedule-appointment.component */
      "oJWN");
      /* harmony import */


      var _video_verification_routing__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./video-verification.routing */
      "BtQX");
      /* harmony import */


      var _video_verification_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./video-verification.component */
      "ljjX");
      /* harmony import */


      var _video_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./video.directive */
      "WpIq");
      /* harmony import */


      var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./appointment/appointment.component */
      "3nf+");
      /* harmony import */


      var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./calljoin/calljoin.component */
      "2qn/");

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_25__["SharedMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_29__["VideoRoutes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoVerificationModule, {
          declarations: [_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_28__["ScheduleAppointmentComponent"], _video_verification_component__WEBPACK_IMPORTED_MODULE_30__["VideoVerificationComponent"], _video_directive__WEBPACK_IMPORTED_MODULE_31__["VideoDirective"], _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_32__["AppointmentComponent"], _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_33__["CalljoinComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_25__["SharedMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoVerificationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_25__["SharedMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_29__["VideoRoutes"])],
            declarations: [_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_28__["ScheduleAppointmentComponent"], _video_verification_component__WEBPACK_IMPORTED_MODULE_30__["VideoVerificationComponent"], _video_directive__WEBPACK_IMPORTED_MODULE_31__["VideoDirective"], _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_32__["AppointmentComponent"], _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_33__["CalljoinComponent"]],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WpIq":
    /*!*************************************************************!*\
      !*** ./src/app/views/video-verification/video.directive.ts ***!
      \*************************************************************/

    /*! exports provided: VideoDirective */

    /***/
    function WpIq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoDirective", function () {
        return VideoDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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
    "ljjX":
    /*!**************************************************************************!*\
      !*** ./src/app/views/video-verification/video-verification.component.ts ***!
      \**************************************************************************/

    /*! exports provided: VideoVerificationComponent */

    /***/
    function ljjX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoVerificationComponent", function () {
        return VideoVerificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function VideoVerificationComponent_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3);
        }
      }

      function VideoVerificationComponent_span_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideoVerificationComponent_span_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Phone number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var VideoVerificationComponent = /*#__PURE__*/function () {
        function VideoVerificationComponent(router, fb) {
          _classCallCheck(this, VideoVerificationComponent);

          this.router = router;
          this.fb = fb;
          this.title = ['Mr', 'Mrs'];
        }

        _createClass(VideoVerificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.basicInfoForm = this.fb.group({
              title: ['Mr', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              firstName: ['Jane', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              lastName: ['Smith', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              primaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
            });
          }
        }, {
          key: "onChangeTab",
          value: function onChangeTab(event) {
            var tab = event.tab.textLabel;
            console.log(tab);

            if (tab === "Schedule Appointment") {
              this.router.navigateByUrl('/video-verification/schedule-appointment');
            }

            if (tab === "Basic Information") {
              this.router.navigateByUrl('/video-verification/verification');
            }
          }
        }, {
          key: "onNextOfVideoVerification",
          value: function onNextOfVideoVerification(form) {
            console.log(this.basicInfoForm.controls.value);
          }
        }]);

        return VideoVerificationComponent;
      }();

      VideoVerificationComponent.ɵfac = function VideoVerificationComponent_Factory(t) {
        return new (t || VideoVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      VideoVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VideoVerificationComponent,
        selectors: [["app-video-verification"]],
        decls: 52,
        vars: 5,
        consts: [[1, "head"], [1, "main-head"], [1, "basic-container"], ["mat-align-tabs", "start", 3, "selectedTabChange"], ["label", "Basic Information"], ["label", "Schedule Appointment"], [1, "matCard"], [1, "basicInformation"], [1, "line"], [3, "formGroup"], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["fxFlex", "20"], [1, "inputMatcard", "card"], ["formControlName", "title"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "50"], [1, "card"], ["matInput", "", "formControlName", "firstName", "type", "text"], ["matInput", "", "formControlName", "lastName", "type", "text"], ["matInput", "", "formControlName", "primaryEmail", "type", "text", "placeholder", "Primary Email"], ["class", "help-block", 4, "ngIf"], ["matInput", "", "formControlName", "phoneNumber", "type", "number", "placeholder", "Phone Number", "maxlength", "10", "minlength", "10"], [1, "button"], ["mat-button", "", 1, "Back"], ["mat-stroked-button", "", 1, "Next", 3, "routerLink", "click"], [3, "value"], [1, "help-block"]],
        template: function VideoVerificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Screening | Video Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function VideoVerificationComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Prefix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VideoVerificationComponent_mat_option_20_Template, 2, 2, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Primary Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, VideoVerificationComponent_span_40_Template, 2, 0, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, VideoVerificationComponent_span_46_Template, 2, 0, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_50_listener() {
              return ctx.onNextOfVideoVerification(ctx.basicInfoForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.basicInfoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.basicInfoForm.get("primaryEmail").valid && ctx.basicInfoForm.get("primaryEmail").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.basicInfoForm.get("phoneNumber").valid && ctx.basicInfoForm.get("phoneNumber").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/video-verification/schedule-appointment");
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
        styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\napp-kyc-verification[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-width: 500px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 10px;\n  margin-top: 5px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n  width: 100%;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n[_nghost-%COMP%]     div.mat-form-field-outline-start {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-gap {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-end {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 950px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#index[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.basicInformation[_ngcontent-%COMP%] {\n  opacity: 90%;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n  margin-left: 10px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  opacity: 90%;\n  font-weight: 600;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n  width: 116px !important;\n  margin-left: 2%;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mat-select-arrow-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 40px !important;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.card[_ngcontent-%COMP%], mat-label[_ngcontent-%COMP%] {\n  margin: 10px !important;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWRlby12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7QUFDM0I7O0FBQ0U7RUFDRSx1QkFBdUI7QUFFM0I7O0FBRUU7RUFDRSxjQUFjO0FBQ2xCOztBQUNFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFFZjs7QUFDRTtFQUNFLFlBQVk7QUFFaEI7O0FBQUU7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUd2Qjs7QUFERTtFQUNFLGdCQUFnQjtBQUlwQjs7QUFERTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUkxQjs7QUFGRTtFQUVFLGFBQWE7RUFDYixzQkFBc0I7QUFJMUI7O0FBRkU7O0VBRUUsZUFBZTtBQUtuQjs7QUFIRTtFQUNFLE9BQU87QUFNWDs7QUFERTtFQUNFLFdBQVc7QUFJZjs7QUFGRTtFQUVFLFlBQVk7RUFDWixXQUFXO0FBSWY7O0FBQ0U7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFGQUdDO0VBQ0QsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7QUFKbkI7O0FBTUU7RUFDRSxZQUFZO0VBRVoscUZBR0M7RUFDRCwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztBQVZmOztBQWFFO0VBQ0UsWUFBWTtFQUVaLHFGQUdDO0VBQ0QsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFJaEIsV0FBVztBQXBCZjs7QUFzQkU7RUFDRSxlQUFlO0FBbkJuQjs7QUFxQkU7RUFDRSxtQkFBbUI7QUFsQnZCOztBQW9CRTtFQUNFLHFGQUdDO0VBQ0Qsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixtQkFBbUI7QUFwQnZCOztBQXNCRTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFuQmhDOztBQXNCRTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFuQmhDOztBQXNCRTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFuQmhDOztBQXFCRTtFQUNFLGFBQWE7RUFFYixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtBQW5CbEM7O0FBcUJFO0VBQ0UsYUFBYTtFQUViLFNBQVM7RUFDVCxlQUFlO0FBbkJuQjs7QUF1QkU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBcEIzQjs7QUFzQkU7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFuQnJCOztBQXFCRTtFQUVFLHFGQUdDO0VBQ0QsK0JBQStCO0FBdEJuQzs7QUF3QkU7RUFDRSxZQUFZO0FBckJoQjs7QUF3QkU7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtBQXJCakI7O0FBd0JFO0VBQ0UsZ0JBQWU7QUFyQm5COztBQXVCRTtFQUNFLFlBQVk7QUFwQmhCOztBQXNCRTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFtQjtFQUNuQix1QkFBQTtFQUNBLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsY0FBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWdCO0FBcEJwQjs7QUFzQkU7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUZBR0M7QUF0Qkw7O0FBd0JFOzs7O0VBSUUsZUFBZTtBQXJCbkI7O0FBdUJFO0VBQ0UsWUFBWTtBQXBCaEI7O0FBc0JFO0VBQ0UseUJBQW9DO0FBbkJ4Qzs7QUFxQkU7RUFDRSxZQUFZO0VBQ1osY0FBdUI7QUFsQjNCOztBQTRCRTtFQUNFLG9DQUErQztFQUMvQyxXQUFXO0VBQ1gsdUJBQXVCO0VBRXZCLGVBQWU7QUExQm5COztBQTRCRTtFQUNFLGNBQWM7QUF6QmxCOztBQThCRTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBM0IxQjs7QUE2QkU7RUFFRSx5QkFBd0I7RUFDeEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQW1CO0FBM0J2Qjs7QUE2QkU7RUFDRSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCx5QkFBaUM7RUFDakMsWUFBVztFQUNYLG1CQUFtQjtBQTFCdkI7O0FBNkJFO0VBQU8sU0FBUTtFQUFDLFVBQVM7RUFDM0IsaUJBQWlCO0FBeEJqQjs7QUF5QkE7RUFBYSx3QkFBc0I7QUFyQm5DOztBQXNCQTtFQUNBLHVCQUF1QjtBQW5CdkI7O0FBc0JBO0VBQ0UsdUJBQXVCO0FBbkJ6Qjs7QUFzQkE7RUFDRSxxQkFBcUI7QUFuQnZCIiwiZmlsZSI6InZpZGVvLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5oZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIGFwcC1reWMtdmVyaWZpY2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5hcHAtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYmFzaWMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLm1haW4taGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBtYXQtdGFiLWdyb3VwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZmxleC1jb250YWluZXIgKiB7XHJcbiAgICAvLyB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgyKSxcclxuICAuZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIC8vICAgLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoNCkge1xyXG4gIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gICB9XHJcbiAgLmZvcm1GaWVsZDEge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5mb3JtRmllbGQge1xyXG4gICAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIC8vICAgZ2FwOiAyMHB4O1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICAuaW5wdXRNYXRjYXJkIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgICApO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAuaW5wdXRNYXRjYXJkMSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICAgKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5pbnB1dE1hdGNhcmQyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgICApO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIC8vIHBhZGRpbmc6IDEycHg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxuICBtYXQtaGludHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmlucHV0Q2xhc3Mge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICAgKTtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgZGl2Lm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgICBib3JkZXItY29sb3I6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuZm9ybTEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctbGVmdDogMTElO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTQlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5tYXRDYXJkIHtcclxuICAgIG1heC13aWR0aDogOTUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICAgKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgfVxyXG4gIC5mbGV4LWdyb3ctMSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5hbGlnbm1lbnQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAjaW5kZXh7XHJcbiAgICBtYXgtd2lkdGg6MTIwcHg7XHJcbiAgfVxyXG4gIC5iYXNpY0luZm9ybWF0aW9ue1xyXG4gICAgb3BhY2l0eTogOTAlO1xyXG4gIH1cclxuICAubGluZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiB0aGljaztcclxuICAgIC8qIGhlaWdodDogM3B4OyAqL1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAvKiBib3JkZXItd2lkdGg6IDNweDsgKi9cclxuICAgIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIC8vIHdpZHRoOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGNvbG9yOiAjMzc0NjY0O1xyXG4gICAgb3BhY2l0eTogOTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbiAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluazpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4gIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuICAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgfVxyXG4gIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudmVyaWZpY2F0aW9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiByZ2IoNDIsIDg5LCAyMzEpO1xyXG4gIH1cclxuICAvLyAubWF0LWluay1iYXJ7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgICBib3R0b206IDA7XHJcbiAgLy8gICAgIGhlaWdodDogMnB4O1xyXG4gIC8vICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XHJcbiAgLy8gICAgIGhlaWdodDogNHB4O1xyXG4gIC8vICAgICBjb2xvcjpcclxuICAvLyB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDExNnB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIG1hdC10YWItbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG4gIC8vIG1hdC1vcHRpb257XHJcbiAgLy8gICB3aWR0aDogMjBweDtcclxuICAvLyB9XHJcbiAgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5CYWNre1xyXG4gIFxyXG4gICAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTE1JTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgY29sb3I6ZGFya2dyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIH1cclxuICAuTmV4dHtcclxuICAgIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDotMTMlO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7Ym9yZGVyOjA7b3V0bGluZTowO1xyXG5mb250LXdlaWdodDogYm9sZH1cclxuaW5wdXQ6Zm9jdXMge291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7fVxyXG4uY2FyZCxtYXQtbGFiZWx7XHJcbm1hcmdpbiA6MTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0iXX0= */"]
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
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oJWN":
    /*!*************************************************************************************************!*\
      !*** ./src/app/views/video-verification/schedule-appointment/schedule-appointment.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ScheduleAppointmentComponent */

    /***/
    function oJWN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentComponent", function () {
        return ScheduleAppointmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../appointment/appointment.component */
      "3nf+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ScheduleAppointmentComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_26_Template_button_click_1_listener() {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_29_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var time2_r9 = ctx.$implicit;
            var i_r10 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onSelectTime1(time2_r9, i_r10);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_32_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var time3_r13 = ctx.$implicit;
            var i_r14 = ctx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.onSelectTime1(time3_r13, i_r14);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_35_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var time4_r17 = ctx.$implicit;
            var i_r18 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onSelectTime1(time4_r17, i_r18);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_38_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var time5_r21 = ctx.$implicit;
            var i_r22 = ctx.index;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.onSelectTime1(time5_r21, i_r22);
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
        function ScheduleAppointmentComponent(router, dialog, el) {
          _classCallCheck(this, ScheduleAppointmentComponent);

          this.router = router;
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
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
              value: null,
              disabled: true
            });

            console.log(this.el);
          }
        }, {
          key: "onSelectTime1",
          value: function onSelectTime1(time, i) {
            console.log(time, i);
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
          key: "onNext",
          value: function onNext() {
            document.getElementById('n').style.backgroundColor = 'rgb(66,106,245)';
            var dialogRef = this.dialog.open(_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentComponent"], {
              // width: '250px',
              // data: {time:this.dateCollection}
              data: {
                time: this.dateCollection,
                date: this.selectedDate
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed'); // this.animal = result;
            });
          }
        }, {
          key: "onChangeTab",
          value: function onChangeTab(event) {
            var tab = event.tab.textLabel;
            console.log(tab);

            if (tab === "Schedule Appointment") {
              this.router.navigateByUrl('/video-verification/schedule-appointment');
            }

            if (tab === "Basic Information") {
              this.router.navigateByUrl('/video-verification/verification');
            }
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            console.log(event);
            this.selectedDate = event._d;
            console.log(this.selectedDate);
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
        return new (t || ScheduleAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ScheduleAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScheduleAppointmentComponent,
        selectors: [["app-schedule-appointment"]],
        decls: 44,
        vars: 8,
        consts: [[1, "head"], [1, "main-head"], [1, "basic-container"], ["mat-align-tabs", "start", 3, "selectedIndex", "selectedTabChange"], ["label", "Basic Information"], ["label", "Schedule Appointment"], [1, "matCard"], [1, "basicInformation"], [1, "line"], ["fxLayout", "column wrap"], ["fxFlex", "100"], ["fxFlex", "40"], [1, "demo-inline-calendar-card"], [3, "selected", "selectedChange"], ["fxFlex", "60"], ["btn", ""], ["fxLayout", "row wrap"], ["fxFlex", "30", 4, "ngFor", "ngForOf"], [1, "button1"], ["mat-button", "", 1, "Back"], ["mat-stroked-button", "", "id", "n", 1, "Next", 3, "disabled", "click"], ["fxFlex", "30"], ["id", "example", 1, "selectTime", 3, "name", "click"], [1, "matContent"], ["id", "example", 1, "selectTime", 3, "click"]],
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
              return ctx.onNext();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.showNext);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatCalendar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        styles: [".selectTime[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 168px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 10px;\n  border: #d8d3d3 solid 1px;\n  margin-bottom: 20px;\n}\n\n.matContent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: center;\n  color: gray;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%]:focus {\n  background-color: #426af5;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: white;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 90px !important;\n}\n\n .mat-calendar-header {\n  padding-top: 0px !important;\n  padding-right: 8px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  background-color: #456EFE;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-body-selected {\n  background-color: #FE6700;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  background-color: red;\n  padding: 10px;\n}\n\n .mat-button-toggle-group {\n  border: 0px;\n}\n\n#mat-button-toggle-2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  background-color: #FE6700;\n}\n\nmat-card.selectTime[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2NoZWR1bGUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQW9DO0VBQ3BDLG1CQUFtQjtBQUFyQjs7QUFJQTtFQUVDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVTtBQUZYOztBQU9BO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUp6Qjs7QUFNQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFtQjtFQUNuQix1QkFBQTtFQUNBLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsY0FBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBSmpCOztBQU1BO0VBRUUseUJBQXdCO0VBQ3hCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsZUFBYztFQUNkLG1CQUFtQjtBQUpyQjs7QUFNQTtFQUNFLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUFpQztFQUNqQyxZQUFXO0VBQ1gsbUJBQW1CO0FBSHJCOztBQUtBO0VBQ0UseUJBQWlDO0FBRm5DOztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBRG5COztBQUdBO0VBQ0UsWUFBWTtBQUFkOztBQUVBO0VBRUEsbUJBQW1CO0FBQW5COztBQU1BO0VBRUEsNEJBQTRCO0FBSjVCOztBQVNBO0VBQ0UsMkJBQTJCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBRzlCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBUnJCOztBQWVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFackI7O0FBZUE7RUFFRSxrQ0FBa0M7QUFicEM7O0FBc0JBO0VBRUUscUJBQW9CO0VBQ3BCLGFBQVk7QUFwQmQ7O0FBd0JBO0VBRUUsV0FBVztBQXRCYjs7QUF3QkE7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBdEJuQjs7QUF5QkE7RUFDRSx5QkFBeUI7QUF0QjNCOztBQXdCQTtFQUVFLHdCQUF3QjtBQXRCMUIiLCJmaWxlIjoic2NoZWR1bGUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0VGltZVxyXG57XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIHdpZHRoOiAxNjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogcmdiKDIxNiwgMjExLCAyMTEpIHNvbGlkIDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBcclxufVxyXG4ubWF0Q29udGVudFxyXG57XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGNvbG9yOmdyYXk7XHJcbiBcclxuIFxyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTElO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IHRoaWNrO1xyXG4gIC8qIGhlaWdodDogM3B4OyAqL1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAvKiBib3JkZXItd2lkdGg6IDNweDsgKi9cclxuICBib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIC8vIHdpZHRoOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogaW5pdGlhbDtcclxufVxyXG4uQmFja3tcclxuICBcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBjb2xvcjpkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG59XHJcbi5OZXh0e1xyXG4gIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6LTEzJTtcclxuICB3aWR0aDoxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uTmV4dDpmb2N1c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbn1cclxuLm1hdENhcmQge1xyXG4gIG1heC13aWR0aDogMTI1MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuLmRlbW8taW5saW5lLWNhbGVuZGFyLWNhcmQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG46Om5nLWRlZXAuZWdyZXQtbmF2eSAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbClcclxue1xyXG5ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4vLyBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuIFxyXG5cclxuXHJcbi5tYXQtZm9jdXMtaW5kaWNhdG9yIG1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIG1hdC1idXR0b24gbWF0LWJ1dHRvbi1iYXNlLm1hdC1idXR0b24td3JhcHBlclxyXG57XHJcbm1hcmdpbi1sZWZ0OiA5MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1jYWxlbmRhci1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gaGVpZ2h0OiA0MnB4O1xyXG4gIC8vIHdpZHRoOiAzNTRweDtcclxuXHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5lZ3JldC1ibHVlIC5tYXQtY2FsZW5kYXItYXJyb3dcclxue1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gOjpuZy1kZWVwLm1hdC1mb2N1cy1pbmRpY2F0b3IgbWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0LWJ1dHRvbi1iYXNlXHJcbi8vIHtcclxuLy8gcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4vLyBmbG9hdDogbGVmdDtcclxuLy8gfVxyXG5cclxuXHJcbi5zZWxlY3RUaW1lIDpmb2N1c1xyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi8vIDo6bmctZGVlcC5lZ3JldC1ibHVlIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsIC5lZ3JldC1ibHVlIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkXHJcbi8vIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZFxyXG46Om5nLWRlZXAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXBcclxue1xyXG4gIGJvcmRlcjowcHggO1xyXG59XHJcbiNtYXQtYnV0dG9uLXRvZ2dsZS0yXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcblxyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNjcwMDtcclxufVxyXG5tYXQtY2FyZC5zZWxlY3RUaW1lOmFjdGl2ZVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbiJdfQ== */"]
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
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-video-verification-video-verification-module-es5.js.map