(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/local-store.service */
      69122);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/menu-collapse.directive */
      79511);

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(localStoreService, router) {
          _classCallCheck(this, _HeaderComponent);

          this.localStoreService = localStoreService;
          this.router = router;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = localStorage.getItem("userFromLogin");
            this.department = localStorage.getItem("departmentHeader");
            this.departmentString = this.department.replace(/["]+/g, '');
            this.currentUser = localStorage.getItem("LoggedInUserHeader");
            this.currentUserString = this.currentUser.replace(/["]+/g, '');
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
          }
        }, {
          key: "closeAll",
          value: function closeAll() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(document).on("click", function (event) {
              var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent");

              if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.ddCloseTrigger', function (e) {
              jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            });
          }
        }, {
          key: "changeTheme",
          value: function changeTheme() {
            var lastBg = "";
            jquery__WEBPACK_IMPORTED_MODULE_0__(document).on('click', '.tColor', function (e) {
              e.preventDefault();
              var bgClass = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data("id");
              jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active').parent().siblings().find('.tColor').removeClass('active');
              jquery__WEBPACK_IMPORTED_MODULE_0__('body').removeClass(lastBg).addClass(bgClass);
              lastBg = bgClass;
              jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
            });
          }
        }, {
          key: "logOut",
          value: function logOut() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            this.localStoreService.clear();
            sessionStorage.clear();
            this.router.navigate(['session/login']);
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            this.router.navigate(['change-password']);
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["npr-header"]],
        decls: 281,
        vars: 5,
        consts: [[1, "topBar"], [1, "row", "align-items-center"], [1, "col"], [1, "headerLeftCol"], [1, "row", "g-0", "align-items-center"], [1, "col-auto"], ["menuCollapse", "", 1, "navTrigger", 2, "cursor", "pointer"], [1, "tglLine", "tlTop"], [1, "tglLine", "tlCenter"], [1, "tglLine", "tlBtm"], [1, "logoIconLink", "d-none", "d-md-block", "d-xl-none", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo", 1, "logoIcon"], [1, "searchCol", "d-none"], [1, "searchIcon"], ["src", "assets/images/search-icon.svg", "alt", "...", "width", "13"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "headerRightOptions"], [2, "color", "darkred"], [1, "msgDDCol", "ddParent"], [1, "ddTrigger", "actUnread", 2, "cursor", "pointer", 3, "click"], [1, "ddTriggerContent"], ["src", "assets/images/msg-icon.svg", "alt", "..."], [1, "unreadIndicator"], [1, "ddContent"], [1, "ddHeader"], [1, "row"], [1, "xsTitle", "text-uppercase", "bold", "d-inline-block", "vAlignMdl"], [1, "ddCloseTrigger", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/close.svg", "alt", "..."], [1, "ddBody", "px-0"], ["data-mcs-theme", "dark", 1, "ddScroll", "mCustomScrollbar"], [1, "msgList"], ["href", "javascript:void(0)", 1, "fullLink"], [1, "msgUserImg"], ["src", "assets/images/user-img-03.png", "alt", "..."], [1, "msgContent"], [1, "msgContentTopCol"], [1, "dateTime"], [1, "dCol"], [1, "tCol"], [1, "text-truncate"], [1, "availableStatus", "online"], ["src", "assets/images/user-img-02.png", "alt", "..."], ["src", "assets/images/user-img-04.png", "alt", "..."], [1, "availableStatus"], [1, "viewAllLink"], ["href", "javascript:void(0)"], [1, "notifyDDCol", "ddParent"], ["src", "assets/images/bell-icon.svg", "alt", "..."], [1, "d-block", "themeColor"], [1, "lightColor"], [1, "proDDCol", "ddStyle", "ddParent"], [1, "ddTrigger", 2, "cursor", "pointer", 3, "click"], [1, "userTrigger"], [1, "userImg"], ["src", "assets/images/user.png", "alt", "..."], [1, "d-none", "d-lg-inline-block", "userName", "text-truncate"], [1, "ddOptions"], [1, "themeColorsCol"], [1, "themeText"], ["data-id", "theme1", 1, "tColor", "theme1", "active", 3, "click"], ["data-id", "theme2", 1, "tColor", "theme2", 3, "click"], [2, "cursor", "pointer", 3, "click"], [1, "ddIcon"], ["src", "assets/images/gear-icon.svg", "alt", "..."], [1, "ddLinkText"], ["src", "assets/images/logout-icon.svg", "alt", "..."]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_31_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_42_listener() {
              return ctx.closeAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Vasiliki Kalogeraki");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Hello! Good Morning");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "A. Mused");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "offline");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Vasiliki Kalogeraki");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Hello! Good Morning");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "View All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_154_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_165_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](173, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "TELEMACHOS TZAK..");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Customer Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Project: DIGITAL ADVERTISING & ANALYTICS / DIGITAL ADVERTISING AND RETURN DATA");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "TELEMACHOS TZAK..");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Customer Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Project: DIGITAL ADVERTISING & ANALYTICS / DIGITAL ADVERTISING AND RETURN DATA");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "TELEMACHOS TZAK..");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "Customer Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Project: DIGITAL ADVERTISING & ANALYTICS / DIGITAL ADVERTISING AND RETURN DATA");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "TELEMACHOS TZAK..");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "Customer Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Project: DIGITAL ADVERTISING & ANALYTICS / DIGITAL ADVERTISING AND RETURN DATA");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "View All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_251_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](254, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, " Themes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_265_listener() {
              return ctx.changeTheme();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_267_listener() {
              return ctx.changeTheme();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](268, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_270_listener() {
              return ctx.changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](272, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_276_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](278, "img", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Department: ", ctx.departmentString, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Last logged in : ", ctx.currentUserString, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](229);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user);
          }
        },
        directives: [_directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.MenuCollapseDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
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
      3786);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule, ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_7__.MalihuScrollbarModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_SharedComponentsModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule, ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_7__.MalihuScrollbarModule],
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


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
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


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-malihu-scrollbar */
      87210);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _c0 = function _c0() {
        return ["/roles/list"];
      };

      var _c1 = function _c1(a0) {
        return {
          "active": a0
        };
      };

      function SidenavComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r1.handleActiveClass("roles")));
        }
      }

      var _c2 = function _c2() {
        return ["/users"];
      };

      function SidenavComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r2.handleActiveClass("users")));
        }
      }

      var _c3 = function _c3() {
        return ["/audit-logs"];
      };

      var _c4 = function _c4() {
        return ["active"];
      };

      function SidenavComponent_li_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Audit Logs");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4));
        }
      }

      var _c5 = function _c5() {
        return ["/security-policy"];
      };

      function SidenavComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Security Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4));
        }
      }

      var _c6 = function _c6() {
        return ["/authorize-cash-payment"];
      };

      function SidenavComponent_li_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Authorize Cash Payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4));
        }
      }

      var _c7 = "/system-param-maintenance/transaction-code-summary";

      var _c8 = function _c8() {
        return [_c7];
      };

      function SidenavComponent_li_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Transaction Code Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c8))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r6.handleActiveClass("transaction-code")));
        }
      }

      var _c9 = "/system-param-maintenance/global-acc-maintenance-summary";

      var _c10 = function _c10() {
        return [_c9];
      };

      function SidenavComponent_li_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Global GI/ACC Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c10))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r7.handleActiveClass("global-acc-maintenance")));
        }
      }

      var _c11 = "/system-param-maintenance/user-gl-acc-maintenance-summary";

      var _c12 = function _c12() {
        return [_c11];
      };

      function SidenavComponent_li_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "User GI/ACC Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c12))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r8.handleActiveClass("user-gl-acc-maintenance")));
        }
      }

      var _c13 = function _c13() {
        return ["/external-system/extSys-summary"];
      };

      function SidenavComponent_li_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "External System");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c13))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r9.handleActiveClass("extSys")));
        }
      }

      var _c14 = function _c14() {
        return ["/external-system/processCodeMapping"];
      };

      function SidenavComponent_li_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Process Code Mapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c14))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r10.handleActiveClass("processCodeMapping")));
        }
      }

      var _c15 = function _c15() {
        return ["/excel-mapping"];
      };

      function SidenavComponent_li_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Excel Mapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c15))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4));
        }
      }

      var _c16 = function _c16() {
        return ["/file-upload/upload-excel"];
      };

      function SidenavComponent_li_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Upload Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c16))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4));
        }
      }

      var _c17 = function _c17() {
        return ["/file-upload/authorize_excel"];
      };

      function SidenavComponent_li_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Authorize Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c17))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r13.handleActiveClass("authorize_excel")));
        }
      }

      var _c18 = function _c18() {
        return ["/file-upload/rejection_queue"];
      };

      function SidenavComponent_li_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Rejection Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c18))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r14.handleActiveClass("rejection_queue")));
        }
      }

      var _c19 = function _c19() {
        return ["/authorize-modification"];
      };

      function SidenavComponent_li_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Authorize Modification");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c19))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r15.handleActiveClass("authorize-modification")));
        }
      }

      var _c20 = function _c20() {
        return ["/external-system/treasuryReference"];
      };

      function SidenavComponent_li_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Treasury Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c20))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r16.handleActiveClass("treasuryReference")));
        }
      }

      var _c21 = function _c21() {
        return ["/process-monitoring"];
      };

      function SidenavComponent_li_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Process Monitoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c21))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r17.handleActiveClass("process-monitoring")));
        }
      }

      var _c22 = function _c22() {
        return ["/customer-search"];
      };

      function SidenavComponent_li_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Customer Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c22))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r18.handleActiveClass("customer-search")));
        }
      }

      var _c23 = function _c23() {
        return ["/email-management"];
      };

      function SidenavComponent_li_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Email-Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r19.handleActiveClass("email-management")));
        }
      }

      var _c24 = function _c24() {
        return ["/initiate-account-closure"];
      };

      function SidenavComponent_li_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Initiate Account Closure");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c24))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r20.handleActiveClass("initiate-account-closure")));
        }
      }

      var _c25 = function _c25() {
        return ["/process-account-closure"];
      };

      function SidenavComponent_li_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Process Account Closure");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c25))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r21.handleActiveClass("process-account-closure")));
        }
      }

      var _c26 = "/account-closure-maintenance/account-closure-summary";

      var _c27 = function _c27() {
        return [_c26];
      };

      function SidenavComponent_li_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Account Closure Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c27))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r22.handleActiveClass("account-closure-maintenance")));
        }
      }

      var _c28 = function _c28() {
        return ["/charge-maintainence"];
      };

      function SidenavComponent_li_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Charge Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c28))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r23.handleActiveClass("charge-maintainence")));
        }
      }

      var _c29 = function _c29() {
        return ["/dashboard"];
      };

      var _c30 = "/system-param-maintenance/dept-id-maintenance-summary";

      var _c31 = function _c31() {
        return [_c30];
      };

      var _c32 = function _c32() {
        return ["/addSystem/summary"];
      };

      var _c33 = function _c33() {
        return ["/rule-translation/summary"];
      };

      var _c34 = function _c34() {
        return ["/createrule/list"];
      };

      var _c35 = function _c35() {
        return ["/rule-mapping/summary"];
      };

      var _SidenavComponent = /*#__PURE__*/function () {
        function _SidenavComponent(layoutService, roleService, location, mScrollbarService) {
          _classCallCheck(this, _SidenavComponent);

          this.layoutService = layoutService;
          this.roleService = roleService;
          this.location = location;
          this.mScrollbarService = mScrollbarService;
          this.scrollbarOptions = {
            axis: 'y',
            theme: 'minimal-dark'
          };
          this.newRoleScreenPerm = [''];
          this.screendata = [''];
          this.screenpermissions = [];
          this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
          this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        }

        _createClass(_SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.EnablescreenPermissions();
            }, 500); // this.getRoleScreen();

            this.roleName = sessionStorage.getItem('user_role');
            this.screenpermission = localStorage.getItem('userPermissions');
            this.screenwisePermissions.subscribe(function (message) {
              return _this.screenpermissions = message;
            });
            this.getRoleScreen();
            this.roleName = sessionStorage.getItem('user_role');
            this.screenpermission = localStorage.getItem('userPermissions');
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.mScrollbarService.initScrollbar('#sideMenu', {
              axis: 'y',
              theme: 'inset-3',
              scrollButtons: {
                enable: false
              },
              scrollbarPosition: 'outside',
              autoHideScrollbar: true,
              alwaysShowScrollbar: 2,
              setHeight: 900
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.mScrollbarService.initScrollbar('#sideMenu', {
              axis: 'y',
              theme: 'inset-3',
              scrollButtons: {
                enable: false
              },
              scrollbarPosition: 'outside',
              autoHideScrollbar: true,
              alwaysShowScrollbar: 2,
              setHeight: 900
            });
          }
        }, {
          key: "getRoleScreen",
          value: function getRoleScreen() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.roleService.fetchScreenData().subscribe(function (data) {
                        _this2.screendata = data; // console.log(data);
                        // console.log(this.screendata);

                        _this2.screendata.forEach(function (element) {
                          //admin
                          if (element === 'Dashboard') {
                            //  const rolescreen = true;
                            _this2.dashboardscreen = true; // console.log('rolescreen', rolescreen)
                          }

                          if (element === 'Roles') {
                            //  const rolescreen = true;
                            _this2.rolescreen = true; // console.log('rolescreen', rolescreen)
                          }

                          if (element == 'Users') {
                            _this2.userScreen = true;
                          }

                          if (element === 'Audit Logs') {
                            _this2.auditScreen = true;
                          }

                          if (element === 'Password Policy') {
                            _this2.passPolicy = true;
                          }

                          if (element === 'GlobalCodeMaintenance') {
                            _this2.gcode = true;
                          }

                          if (element === 'UserCodeMaintenance') {
                            _this2.ucode = true;
                          }

                          if (element === 'Transaction Code Maint') {
                            _this2.trncodeMaint = true;
                          }

                          if (element === 'AcumenJournal') {
                            _this2.acumenjournal = true;
                          }

                          if (element === 'Process Monitoring') {
                            _this2.processMonitor = true;
                          }

                          if (element === 'External Systems') {
                            _this2.extSystem = true;
                          }

                          if (element === 'Process Code Mapping') {
                            _this2.processCodeMapping = true;
                          }

                          if (element === 'Excel Mapping') {
                            _this2.excelMapping = true;
                          }

                          if (element === 'Upload Excel') {
                            _this2.uploadExcel = true;
                          }

                          if (element === 'Process Excel') {
                            _this2.processExcel = true;
                          }

                          if (element === 'Modify Excel') {
                            _this2.modifyExcel = true;
                          }

                          if (element === 'Authorize Modifications') {
                            _this2.authModification = true;
                          }

                          if (element === 'Customer search') {
                            _this2.customerSearch = true;
                          } //code maintenance


                          if (element === 'Email-Management') {
                            _this2.emailManagement = true;
                          } //account closer


                          if (element === 'Initiate Account Closure') {
                            _this2.initialAccountCloser = true;
                          }

                          if (element === 'Process Account Closure') {
                            _this2.ProcessAccountCloser = true;
                          }

                          if (element === 'Acc Closure Maintenance') {
                            _this2.acClosermaint = true;
                          }

                          if (element === 'Charge Maintenance') {
                            _this2.chargeMaintenance = true;
                          }
                        });
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
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
            var _this3 = this;

            var userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
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
              return _this3.screenpermissions = message;
            }); // console.log("screen permissions final", this.screenpermissions);
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
          key: "toggleNav",
          value: function toggleNav(e) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.sMenuLink > a').on("click", this.toggle);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').siblings().removeClass('activeSMenu');
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').siblings().find('ul.subMenuCol').slideUp();
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').toggleClass('activeSMenu');
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).parents('.sMenuLink').find('ul.subMenuCol').slideToggle();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.mScrollbarService.destroy('#sideMenu');
          }
        }]);

        return _SidenavComponent;
      }();

      _SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || _SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_8__.MalihuScrollbarService));
      };

      _SidenavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _SidenavComponent,
        selectors: [["npr-sidenav"]],
        hostBindings: function SidenavComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
          }
        },
        decls: 88,
        vars: 54,
        consts: [["malihu-scrollbar", ""], ["sideMenu", ""], [1, "navOverlay"], [1, "sidebarCol"], [1, "sidebarLogo"], [3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "sidebarNavCol", "mCustomScrollbar"], [1, "navLbl"], [1, "sidebarNav"], [1, "navItem"], [1, "navLink", 3, "routerLink", "routerLinkActive"], [1, "navIcon"], ["src", "assets/images/home.svg", "alt", "..."], [1, "navText"], ["class", "navItem", 4, "ngIf"], [1, "navLink", 3, "routerLink", "ngClass"], ["src", "assets/images/gear-icon.svg", "alt", "..."], ["src", "assets/images/add-system.svg", "alt", "..."], ["src", "assets/images/rule-translate.svg", "alt", "..."], ["src", "assets/images/create-rule.svg", "alt", "..."], ["src", "assets/images/rule-mapping.svg", "alt", "..."], ["src", "assets/images/role.svg", "alt", "..."], ["src", "assets/images/user.svg", "alt", "..."], ["src", "assets/images/aduit.svg", "alt", "..."], ["src", "assets/images/security.svg", "alt", "..."], ["src", "assets/images/transaction.svg", "alt", "..."], ["src", "assets/images/global.svg", "alt", "..."], ["src", "assets/images/user-icon-1.svg", "alt", "..."], ["src", "assets/images/external-system.svg", "alt", "..."], ["src", "assets/images/process-code.svg", "alt", "..."], ["src", "assets/images/excel-mapping.svg", "alt", "..."], ["src", "assets/images/upload-excel.svg", "alt", "..."], ["src", "assets/images/authorize.svg", "alt", "..."], ["src", "assets/images/treasury-reference.svg", "alt", "..."], ["src", "assets/images/process.svg", "alt", "..."], ["src", "assets/images/customer-search.svg", "alt", "..."], ["src", "assets/images/email-managment.svg", "alt", "..."], ["src", "assets/images/inititate-account.svg", "alt", "..."], ["src", "assets/images/account-closer.svg", "alt", "..."], ["src", "assets/images/grommet-maintenance.svg", "alt", "..."], ["src", "assets/images/charge-maintenance.svg", "alt", "..."]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "System Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SidenavComponent_li_17_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SidenavComponent_li_18_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SidenavComponent_li_19_Template, 6, 4, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SidenavComponent_li_20_Template, 6, 4, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "System Param Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SidenavComponent_li_24_Template, 6, 4, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, SidenavComponent_li_25_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SidenavComponent_li_26_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SidenavComponent_li_27_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Department ID Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "External system");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Add System");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Rule translation");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Create Rule");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Rule Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "File Upload Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, SidenavComponent_li_64_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, SidenavComponent_li_65_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, SidenavComponent_li_66_Template, 6, 4, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "File upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, SidenavComponent_li_70_Template, 6, 4, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, SidenavComponent_li_71_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, SidenavComponent_li_72_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, SidenavComponent_li_73_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, SidenavComponent_li_74_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, SidenavComponent_li_75_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Account Block");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, SidenavComponent_li_79_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, SidenavComponent_li_80_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Account Closure");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, SidenavComponent_li_84_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, SidenavComponent_li_85_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, SidenavComponent_li_86_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, SidenavComponent_li_87_Template, 6, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c29));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](37, _c29))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](38, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Roles") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Users") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Audit Logs") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Password Policy") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Cash Payments") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Transaction Code Maint") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("GlobalCodeMaintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("UserCodeMaintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](39, _c31))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](40, _c1, ctx.handleActiveClass("dept-id-maintenance")));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](42, _c32))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](43, _c1, ctx.handleActiveClass("addSystem")));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](45, _c33))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](46, _c1, ctx.handleActiveClass("rule-translation")));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](48, _c34))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](49, _c1, ctx.handleActiveClass("createrule")));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](51, _c35))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](52, _c1, ctx.handleActiveClass("rule-mapping")));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("External Systems") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Code Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Excel Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Upload Excel") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Excel") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Rejection Queue") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Authorize Modifications") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Treasury Reference") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Monitoring") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Customer search") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Email-Management") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Initiate Account Closure") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Process Account Closure") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Acc Closure Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screenpermissions.indexOf("Charge Maintenance") > -1);
          }
        },
        directives: [ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_8__.MalihuScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DropdownAnchorDirective = /*#__PURE__*/function () {
        function _DropdownAnchorDirective() {
          _classCallCheck(this, _DropdownAnchorDirective);
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
        return new (t || _DropdownAnchorDirective)();
      };

      _DropdownAnchorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DropdownAnchorDirective,
        selectors: [["", "appDropdownToggle", ""]],
        hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) {
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


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dropdown.directive */
      43998);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DropdownLinkDirective = /*#__PURE__*/function () {
        function _DropdownLinkDirective(nav) {
          _classCallCheck(this, _DropdownLinkDirective);

          this.nav = nav;
        }

        _createClass(_DropdownLinkDirective, [{
          key: "open",
          get: function get() {
            return this._open;
          },
          set: function set(value) {
            this._open = value; // if (value) {
            //   this.nav.closeOtherLinks(this);
            // }  
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("Nav", this.nav);
            this.nav.addLink(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Nav droy", this.nav);
            this.nav.removeGroup(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.open = !this.open;
            console.log("isOpen::", this.open);
          }
        }]);

        return _DropdownLinkDirective;
      }();

      _DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) {
        return new (t || _DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective));
      };

      _DropdownLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _DropdownLinkDirective,
        selectors: [["", "appDropdownLink", ""]],
        hostVars: 2,
        hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sMenuLink", ctx.open);
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
        function _AppDropdownDirective(router) {
          _classCallCheck(this, _AppDropdownDirective);

          this.router = router;
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
            var _this4 = this;

            this._router = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd;
            })).subscribe(function (event) {
              _this4.navlinks.forEach(function (link) {
                if (link.group) {
                  var routeUrl = _this4.getUrl();

                  var currentUrl = routeUrl.split('/');

                  if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;

                    _this4.closeOtherLinks(link);
                  }
                }
              });
            });
          }
        }]);

        return _AppDropdownDirective;
      }();

      _AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) {
        return new (t || _AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
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


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dropdown.directive */
      43998);
      /* harmony import */


      var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dropdown-anchor.directive */
      82459);
      /* harmony import */


      var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dropdown-link.directive */
      97333);
      /* harmony import */


      var _menu_collapse_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-collapse.directive */
      79511);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var directives = [_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective, _menu_collapse_directive__WEBPACK_IMPORTED_MODULE_3__.MenuCollapseDirective];

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
          declarations: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective, _menu_collapse_directive__WEBPACK_IMPORTED_MODULE_3__.MenuCollapseDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
          exports: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective, _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownAnchorDirective, _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownLinkDirective, _menu_collapse_directive__WEBPACK_IMPORTED_MODULE_3__.MenuCollapseDirective]
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
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      66883);

      var _LayoutService = /*#__PURE__*/function () {
        function _LayoutService(router, breakpointObserver) {
          var _this5 = this;

          _classCallCheck(this, _LayoutService);

          this.router = router;
          this.breakpointObserver = breakpointObserver;
          this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
          this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
          this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
          this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
          this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
          this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.searchOpen$ = this._searchOpen.asObservable();
          this.isDesktop$ = this.breakpointObserver.observe("(min-width: 1280px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (state) {
            return state.matches;
          }));
          this.ltLg$ = this.breakpointObserver.observe("(max-width: 1279px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (state) {
            return state.matches;
          }));
          this.gtMd$ = this.breakpointObserver.observe("(min-width: 960px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (state) {
            return state.matches;
          }));
          this.ltMd$ = this.breakpointObserver.observe("(max-width: 959px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (state) {
            return state.matches;
          }));
          this.gtSm$ = this.breakpointObserver.observe("(min-width: 600px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (state) {
            return state.matches;
          }));
          this.isMobile$ = this.breakpointObserver.observe("(max-width: 599px)").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (state) {
            return state.matches;
          }));

          this.isLtLg = function () {
            return _this5.breakpointObserver.isMatched("(max-width: 1279px)");
          };

          this.isMobile = function () {
            return _this5.breakpointObserver.isMatched("(max-width: 599px)");
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
        return new (t || _LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver));
      };

      _LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'session',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js"), __webpack_require__.e("src_app_views_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./views/auth/login/login.module */
          33794)).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'forget-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_forget-password_forget-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./views/forget-password/forget-password.module */
          82352)).then(function (m) {
            return m.ForgetPasswordModule;
          });
        }
      }, {
        path: '',
        component: src_npr_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [{
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_dashboard_dashboard-analytics_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/dashboard/dashboard-analytics.module */
            11164)).then(function (m) {
              return m.DashboardAnalyticsModule;
            });
          }
        }, {
          path: 'roles',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_roles_roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/roles/roles.module */
            57445)).then(function (m) {
              return m.RolesModule;
            });
          }
        }, {
          path: 'addSystem',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_add-system_service_t-cda0d0"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/addSystem/add-System/add-System.module */
            21067)).then(function (m) {
              return m.AddSystemModule;
            });
          }
        }, {
          path: 'addSystem/summary',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_add-system_service_t-cda0d0"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/addSystem/add-System/add-System.module */
            21067)).then(function (m) {
              return m.AddSystemModule;
            });
          }
        }, {
          path: 'audit-logs',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_file-saver_dist_FileSaver_min_j-305313"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_audit-logs_audit-logs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/audit-logs/audit-logs.module */
            46847)).then(function (m) {
              return m.AuditLogsModule;
            });
          }
        }, {
          path: 'change-password',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/change-password/change-password.module */
            87015)).then(function (m) {
              return m.ChangePasswordModule;
            });
          }
        }, {
          path: 'process-monitoring',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("src_app_views_process-monitoring_process-monitoring_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/process-monitoring/process-monitoring.module */
            63420)).then(function (m) {
              return m.ProcessMonitoringModule;
            });
          }
        }, {
          path: 'security-policy',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_security-policy_security-policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/security-policy/security-policy.module */
            88185)).then(function (m) {
              return m.SecurityPolicyModule;
            });
          }
        }, {
          path: 'createrule',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_add-system_service_t-cda0d0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_rule_rule_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/rule/rule.module */
            11784)).then(function (m) {
              return m.RuleModule;
            });
          }
        }, {
          path: 'external-system',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/file-upload-maintenance/file-upload-maintenance.module */
            99776)).then(function (m) {
              return m.FileUploadMaintenanceModule;
            });
          }
        }, {
          path: 'system-param-maintenance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("src_app_views_system-param-maintenance_system-param-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/system-param-maintenance/system-param-maintenance.module */
            76464)).then(function (m) {
              return m.SystemParamMaintenanceModule;
            });
          }
        }, {
          path: 'file-upload',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_file-saver_dist_FileSaver_min_j-305313"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_file-upload_file-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/file-upload/file-upload.module */
            9775)).then(function (m) {
              return m.FileUploadModule;
            });
          }
        }, {
          path: 'process-account-closure',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_file-saver_dist_FileSaver_min_j-305313"), __webpack_require__.e("src_app_views_process-account-closure_process-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/process-account-closure/process-account-closure.module */
            39382)).then(function (m) {
              return m.ProcessAccountClosureModule;
            });
          }
        }, {
          path: 'new-external-system',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_new-external-system_new-external-system_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/new-external-system/new-external-system.module */
            66679)).then(function (m) {
              return m.NewExternalSystemModule;
            });
          }
        }, {
          path: 'initiate-account-closure',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_file-saver_dist_FileSaver_min_j-305313"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/initiate-account-closure/initiate-account-closure.module */
            69628)).then(function (m) {
              return m.InitiateAccountClosureModule;
            });
          }
        }, {
          path: 'initiate-account-closure/create',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_file-saver_dist_FileSaver_min_j-305313"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/initiate-account-closure/initiate-account-closure.module */
            69628)).then(function (m) {
              return m.InitiateAccountClosureModule;
            });
          }
        }, {
          path: 'email-management',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/email-management/email-management.module */
            81089)).then(function (m) {
              return m.EmailManagementModule;
            });
          }
        }, {
          path: 'email-management/create',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_email-management_email-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/email-management/email-management.module */
            81089)).then(function (m) {
              return m.EmailManagementModule;
            });
          }
        }, {
          path: 'customer-search',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("src_app_views_customer-search_customer-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/customer-search/customer-search.module */
            9208)).then(function (m) {
              return m.CustomerSearchModule;
            });
          }
        }, {
          path: 'customer-search/accountBlocking',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("src_app_views_customer-search_customer-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/customer-search/customer-search.module */
            9208)).then(function (m) {
              return m.CustomerSearchModule;
            });
          }
        }, {
          path: 'authorize-modification',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_file-saver_dist_FileSaver_min_j-305313"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_authorize-modification_authorize-modification_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/authorize-modification/authorize-modification.module */
            49136)).then(function (m) {
              return m.AuthorizeModificationModule;
            });
          }
        }, {
          path: 'account-closure-maintenance',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/account-closure-maintenance/account-closure-maintenance.module */
            95521)).then(function (m) {
              return m.AccountClosureMaintenanceModule;
            });
          }
        }, {
          path: 'account-closure-maintenance/account-closure-summary',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/account-closure-maintenance/account-closure-maintenance.module */
            95521)).then(function (m) {
              return m.AccountClosureMaintenanceModule;
            });
          }
        }, {
          path: 'excel-mapping',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("src_app_views_excel-mapping_excel-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/excel-mapping/excel-mapping.module */
            18745)).then(function (m) {
              return m.ExcelMappingModule;
            });
          }
        }, {
          path: 'rule-mapping',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_add-system_service_t-cda0d0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_rule-mapping_rule-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/rule-mapping/rule-mapping.module */
            8690)).then(function (m) {
              return m.RuleMappingModule;
            });
          }
        }, {
          path: 'charge-maintainence',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_charge-maintainenece_charge-maintainenece_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/charge-maintainenece/charge-maintainenece.module */
            90988)).then(function (m) {
              return m.ChargeMaintaineneceModule;
            });
          }
        }, {
          path: 'rule-translation',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_add-system_service_t-cda0d0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_rule-translation_rule-translation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/rule-translation/rule-translation.module */
            80646)).then(function (m) {
              return m.RuleTranslationModule;
            });
          }
        }, {
          path: 'users',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_services_api_service_ts"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_file-saver_dist_FileSaver_min_j-305313"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/users/users.module */
            51557)).then(function (m) {
              return m.UsersModule;
            });
          }
        }, {
          path: 'authorize-cash-payment',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_authorize-cash-payment_authorize-cash-payments_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/authorize-cash-payment/authorize-cash-payments.module */
            96653)).then(function (m) {
              return m.AuthorizeCashPaymentsModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: 'dashboard'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          // preloadingStrategy: PreloadAllModules,
          useHash: true,
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'corrected',
          anchorScrolling: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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
          _classCallCheck(this, _AppComponent);

          // this.setTimeout();
          // this.userInactive.subscribe(() => this.logout());}
          this.renderer = renderer;
          this.platform = platform;
          this.document = document;
          this.route = route;
          this.router = router;
          this.title = "Median";
          this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject(); // setTimeout() {
          //   this.userActivity = setTimeout(
          //     () => this.userInactive.next(undefined),
          //     600 * 1000
          //   );
        }

        _createClass(_AppComponent, [{
          key: "logout",
          value: function logout() {
            if (localStorage.getItem("userFromLogin")) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Session Expired", "Kindly Login to continue.");
            }

            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['/session/login']);
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
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
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
        providers: [],
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
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this._check();
          }
        }, {
          key: "_check",
          value: function _check() {
            var _this6 = this;

            // Check the authentication status
            return this.jwtAuth.check().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (authenticated) {
              console.log("check status", authenticated); // If the user is not authenticated...

              if (!authenticated) {
                // Redirect to the sign-in page
                _this6.router.navigate(["session/login"]); // Prevent the access


                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
              } // Allow the access


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
            }));
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
            var _this7 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
              token: _DEMO_TOKEN,
              user: _DEMO_USER
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              _this7.setUserAndToken(res.token, res.user, !!res);

              _this7.signingIn = true;
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
            var _this8 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_DEMO_USER).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (profile) {
              _this8.setUserAndToken(_this8.getJwtToken(), profile, true);

              _this8.signingIn = false;
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
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
          this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/role';
          this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles';
          this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        }

        _createClass(_RoleService, [{
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
          }
        }, {
          key: "fetchNewRolePermissions",
          value: function fetchNewRolePermissions(userIdLoggedIn) {
            var _this9 = this;

            this.http.get("".concat(this._fmosbaseURL, "/allRolePermissionForUser/").concat(userIdLoggedIn)).subscribe(function (data) {
              _this9.storeuserpermissions = data;
              localStorage.setItem('userPermissions', JSON.stringify(_this9.storeuserpermissions));
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
            var _this10 = this;

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
              return _this10.screenpermissions = message;
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
        //MEDIAN_URL: 'http://10.127.43.228:8080/median',
        //ACC_CLOSER_URL: 'http://10.127.43.228:8080/medianAccountClosure'//account closer new
        //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2.2',
        //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianAccountClosure'//account closer new
        // MEDIAN_URL: 'https://10.137.145.90:8443/medianv2.2',
        //ACC_CLOSER_URL: 'https://10.137.145.90:8443/medianAccountClosure'//account closer new
        //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2',
        //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianv2'//account closer new
        // MEDIAN_URL: 'http://localhost:9191', // phase2 for local testing
        // ACC_CLOSER_URL: 'http://localhost:9192'//account closer for local testing
        //  MEDIAN_URL: 'http://localhost:9192', // phase2 for local testing
        // ACC_CLOSER_URL: 'http://localhost:9191'//account closer for local testing
        MEDIAN_URL: 'http://192.168.0.14:8082/medianv2',
        ACC_CLOSER_URL: 'http://192.168.0.14:8089/medianAccountClosure'
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