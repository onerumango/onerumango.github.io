(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

      function HeaderComponent_ng_template_14_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](0, "a", 79);
        }

        if (rf & 2) {
          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("innerHTML", item_r5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["????sanitizeHtml"]);
        }
      }

      function HeaderComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](0, HeaderComponent_ng_template_14_a_0_Template, 1, 1, "a", 78);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r1.screenpermissions[0] !== "");
        }
      }

      function HeaderComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](0, "div", 79);
        }

        if (rf & 2) {
          var notFound_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("innerHTML", notFound_r8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["????sanitizeHtml"]);
        }
      }

      var _c0 = "/system-param-maintenance/transaction-code-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      function HeaderComponent_li_180_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_li_180_div_1_Template_div_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();

            var data_r9 = ctx_r13.$implicit;
            var i_r10 = ctx_r13.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();

            return ctx_r12.getRecords($event, data_r9, i_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](2, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](4, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](7, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](8, "h5", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](13, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](16, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        }

        if (rf & 2) {
          var data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"]("UserId:", data_r9.userId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"]("Version:", data_r9.version, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"]("RecordStatus:", data_r9.recordStatus, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"]("verifiedTime:", data_r9.verifiedTime, "");
        }
      }

      function HeaderComponent_li_180_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, HeaderComponent_li_180_div_1_Template, 18, 6, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r10 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", i_r10 == 0 || i_r10 == 1 || i_r10 == 2 || i_r10 == 3 || i_r10 == 4 || ctx_r4.pendingReq);
        }
      }

      var _c2 = function _c2() {
        return ["/dashboard"];
      };

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
              this.enablescreenPermissions(search);
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
            this.getPendingForAuthData(); //  this.getAllUsers();

            this.getTransactionCodeSummary();
            this.initTheme(localStorage.getItem('SELECTED_THEME') || 'theme1');
            this.getProfileImage(this.user_id);
            this.getUser();
          }
        }, {
          key: "enablescreenPermissions",
          value: function enablescreenPermissions(inputValue) {
            var _this = this;

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
              return _this.screenpermissions = message;
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
            var _this2 = this;

            this.api.fetchMedUser(JSON.parse(this.user1).userId).subscribe(function (response) {
              console.log(response);

              _this2.initTheme(response.screenThemeSelected);
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
          }
        }, {
          key: "onClickProfile",
          value: function onClickProfile() {
            this.router.navigate(['profile']);
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
              e.preventDefault();
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
              }
            }, function (error) {
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
            var _this3 = this;

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
              if (result.isConfirmed == true) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");

                _this3.localStoreService.clear();

                sessionStorage.clear();
                localStorage.clear();
                window.location.reload();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: "Logout Successfully",
                  icon: 'success'
                });

                _this3.router.navigate(['session/login']);
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
            var _this4 = this;

            console.log(event, "Event");

            if (event.target.files && event.target.files[0]) {
              this.profilePicture = event.target.files[0];
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                console.log("Profile Image Test:: ", reader.result);
                _this4.url = event.target.result;
                console.log(_this4.url, "URL");
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
            var _this5 = this;

            this.api.getCustomerDocuments(user_id).subscribe(function (data) {
              console.log("data ::", data);

              if (data) {
                _this5.profileId = data.id;
                _this5.url = data.fileUrl;
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
            var _this6 = this;

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

                _this6.router.navigate(['change-password']);
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
            var _this7 = this;

            this.api.getPendingForAuthDataFirstError(this.user).subscribe(function (resp) {
              // console.log(resp);
              _this7.pendingForAuthData = resp;
              console.log(_this7.pendingForAuthData);
            });
          }
        }, {
          key: "getTransactionCodeSummary",
          value: function getTransactionCodeSummary() {
            var _this8 = this;

            this.api.gettingTransactionCodeSummary().subscribe(function (resp) {
              var _a;

              _this8.transactionCodeData = resp.result;
              console.log(_this8.transactionCodeData, "Transaction Code Data");

              for (var i = 0; i <= _this8.transactionCodeData.length; i++) {
                // console.log("Looooppppp")
                if (((_a = _this8.transactionCodeData[i]) === null || _a === void 0 ? void 0 : _a.verifiedStatus) == 'U') {
                  // console.log("UnAUthorized");
                  _this8.unAUthorizedUsers.push(_this8.transactionCodeData[i]);
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
            var _this9 = this;

            var userID = data.userId;
            console.log(index, "Index");
            this.api.gettingTransactionDatabyID(data.userId).subscribe(function (trndataResp) {
              _this9.transactionDataResp = trndataResp;
              console.log("this.transactionDataResp", _this9.transactionDataResp); //  this.unAUthorizedUsers=this.unAUthorizedUsers.length-1;

              _this9.seenData.push(_this9.transactionDataResp); // console.log(this.seenData);


              if (_this9.seenData) {
                // console.log("Seen Data Present");
                _this9.getNotifyCount(index);
              }

              if (_this9.transactionDataResp) {
                _this9.api.setSummaryDataTransactionCode({
                  userID: data.userId,
                  creatorDtStamp: data.creatorDtStamp,
                  creatorId: data.creatorId,
                  modNo: data.modNo,
                  recordStatus: data.recordStatus,
                  verifiedStatus: data.verifiedStatus,
                  verifiedBy: data.verifiedBy,
                  verifiedOnce: data.verifiedOnce,
                  verifiedTime: data.verifiedTime,
                  formValues: _this9.transactionDataResp
                });

                _this9.router.navigate(["/system-param-maintenance/transaction-code-edit"]);
              }
            });
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UsersService));
      };

      _HeaderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineComponent"]({
        type: _HeaderComponent,
        selectors: [["npr-header"]],
        decls: 229,
        vars: 13,
        consts: [[1, "topBar"], [1, "row", "align-items-center"], [1, "col"], [1, "headerLeftCol"], [1, "row", "g-0", "align-items-center"], [1, "col-auto", 2, "display", "flex", "gap", "20px"], ["menuCollapse", "", 1, "navTrigger", 2, "cursor", "pointer"], [1, "tglLine", "tlTop"], [1, "tglLine", "tlCenter"], [1, "tglLine", "tlBtm"], [1, "ng-autocomplete", 2, "width", "210px"], ["placeholder", "search", "id", "searchNavAutocomplete", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["src", "assets/images/customer-search.svg", "alt", "...", 2, "position", "relative", "top", "-50%", "left", "5px", "z-index", "1000"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-auto"], [1, "logoIconLink", "d-none", "d-md-block", "d-xl-none", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo", 1, "logoIcon"], [1, "searchCol", "d-none"], [1, "searchIcon"], ["src", "assets/images/search-icon.svg", "alt", "...", "width", "13"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "headerRightOptions"], [1, "greet"], [1, "msgDDCol", "ddParent"], [1, "ddTrigger", "actUnread", 2, "cursor", "pointer", 3, "click"], [1, "ddTriggerContent"], ["src", "assets/images/msg-icon.svg", "alt", "..."], [1, "unreadIndicator"], [1, "ddContent"], [1, "ddHeader"], [1, "row"], [1, "xsTitle", "text-uppercase", "bold", "d-inline-block", "vAlignMdl"], [1, "ddCloseTrigger", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/close.svg", "alt", "..."], [1, "ddBody", "px-0"], ["data-mcs-theme", "dark", 1, "ddScroll", "mCustomScrollbar"], [1, "msgList"], [1, "fullLink"], [1, "msgUserImg"], ["src", "assets/images/user-img-03.png", "alt", "..."], [1, "msgContent"], [1, "msgContentTopCol"], [1, "dateTime"], [1, "dCol"], [1, "tCol"], [1, "text-truncate"], [1, "availableStatus", "online"], ["src", "assets/images/user-img-02.png", "alt", "..."], ["src", "assets/images/user-img-04.png", "alt", "..."], [1, "availableStatus"], [1, "viewAllLink"], ["src", "assets/images/bell-icon.svg", "alt", "..."], [1, "notification-number", "mat-bg-warn"], [4, "ngFor", "ngForOf"], [1, "viewAll", 3, "click"], [1, "proDDCol", "ddStyle", "ddParent"], [1, "ddTrigger", 2, "cursor", "pointer", 3, "click"], [1, "userTrigger"], [1, "userImg"], [3, "src"], [1, "d-none", "d-lg-inline-block", "userName", "text-truncate"], [1, "ddOptions"], [1, "themeColorsCol"], [1, "themeText"], ["id", "themeChangeRadio"], ["data-id", "theme1", 1, "tColor", "theme1", 3, "click"], ["data-id", "theme2", 1, "tColor", "theme2", 3, "click"], ["for", "fileInput", 1, "profileButton"], [1, "profileIcon"], ["aria-hidden", "true", 1, "fa", "fa-user-o"], [1, "profileLinkText", 3, "click"], [1, "background"], [2, "cursor", "pointer", 3, "click"], [1, "ddIcon"], ["src", "assets/images/gear-icon.svg", "alt", "..."], [1, "ddLinkText"], ["src", "assets/images/logout-icon.svg", "alt", "...", 1, "ml-3"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [4, "ngIf"], [3, "routerLink", "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "ng-autocomplete", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("selected", function HeaderComponent_Template_ng_autocomplete_selected_12_listener($event) {
              return ctx.selectEvent($event);
            })("inputChanged", function HeaderComponent_Template_ng_autocomplete_inputChanged_12_listener($event) {
              return ctx.onChangeSearch($event);
            })("inputFocused", function HeaderComponent_Template_ng_autocomplete_inputFocused_12_listener($event) {
              return ctx.onFocused($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](13, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](14, HeaderComponent_ng_template_14_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](16, HeaderComponent_ng_template_16_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](19, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](20, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](23, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](24, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](25, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](28, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](30, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](32, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](34, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](36, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](39, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_39_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](40, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](41, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](42, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](43, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](44, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](45, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](46, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](47, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](48, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](49, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](50, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_50_listener() {
              return ctx.closeAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](51, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](52, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](53, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](54, "ul", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](56, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](57, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](58, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](59, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](60, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](61, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](62, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](63, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](64, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](65, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](66, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](67, "Vasiliki Kalogeraki");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](68, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](69, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](71, "Hello! Good Morning");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](73, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](74, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](75, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](76, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](77, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](78, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](79, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](80, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](81, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](82, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](83, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](84, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](85, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](86, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](88, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](90, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](91, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](92, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](93, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](94, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](95, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](96, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](97, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](98, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](99, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](100, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](101, "A. Mused");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](102, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](103, "offline");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](105, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](106, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](107, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](108, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](109, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](110, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](111, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](112, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](113, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](114, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](115, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](116, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](117, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](118, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](119, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](120, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](121, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](122, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](123, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](124, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](125, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](126, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](127, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](128, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](129, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](130, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](131, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](132, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](133, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](134, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](135, "Vasiliki Kalogeraki");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](136, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](137, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](139, "Hello! Good Morning");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](140, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](141, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](142, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](143, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](144, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](145, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](146, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](147, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](148, "8/18/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](149, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](150, "3:20am");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](151, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](152, "Angelos George");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](153, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](154, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](155, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](156, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](157, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](158, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](159, "View All");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](160, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](161, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](162, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_162_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](163, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](164, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](165, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](166);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](167, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](168, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](169, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](170, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](171, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](172, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](173, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](174, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](175, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_175_listener() {
              return ctx.closeAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](176, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](177, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](178, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](179, "ul", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](180, HeaderComponent_li_180_Template, 2, 1, "li", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](181, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](182, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_182_listener() {
              return ctx.pendingRequestViewAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](183);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](184, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](185, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](186, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_186_listener() {
              return ctx.openPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](187, "span", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](188, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](189, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](190, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](191);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](192, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](193, "ul", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](194, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](195, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](196, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](197, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](198, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](199, " Themes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](200, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](201, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_201_listener() {
              return ctx.closeAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](202, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](203, "ul", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](204, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](205, "span", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_span_click_205_listener() {
              return ctx.changeTheme("theme1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](206, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](207, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_span_click_207_listener() {
              return ctx.changeTheme("theme2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](208, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](209, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](210, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](211, "span", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](212, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](213, "\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](214, "span", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_span_click_214_listener() {
              return ctx.onClickProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](215, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](216, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](217, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](218, "a", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_218_listener() {
              return ctx.changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](219, "span", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](220, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](221, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](222, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](223, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](224, "a", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function HeaderComponent_Template_a_click_224_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](225, "span", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](226, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](227, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](228, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????reference"](15);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????reference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("data", ctx.screenpermissions)("searchKeyword", ctx.keyword)("itemTemplate", _r0)("notFoundTemplate", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pureFunction0"](12, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"]("Department: ", ctx.departmentString, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"]("Last logged in : ", ctx.currentUserString, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](131);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](ctx.unAUthorizedUsers.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx.unAUthorizedUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](ctx.pendingReq ? "View Less" : "View All");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("src", ctx.url ? ctx.url : "assets/images/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](ctx.user);
          }
        },
        directives: [_directives_menu_collapse_directive__WEBPACK_IMPORTED_MODULE_8__.MenuCollapseDirective, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__.AutocompleteComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
        styles: [".viewAll[_ngcontent-%COMP%] {\n  color: #1bcd9d;\n  font-weight: 600;\n  padding-right: 70px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\nprofileIcon[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 2px;\n}\n\n.profileButton[_ngcontent-%COMP%]:hover {\n  color: var(--primaryColor);\n}\n\n.profileLinkText[_ngcontent-%COMP%]:hover {\n  color: var(--primaryColor);\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  margin-left: 20px;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%]     .autocomplete-container   .input-container   input {\n  display: block;\n  padding-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0FBRUo7O0FBQUU7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsMEJBQUE7QUFHRjs7QUFEQTtFQUNFLDBCQUFBO0FBSUY7O0FBREE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0MsaUJBQUE7QUFJSDs7QUFEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUlGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3QWxsIHtcclxuICAgIGNvbG9yOiAjMWJjZDlkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gICNmaWxlSW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBwcm9maWxlSWNvbntcclxuICBoZWlnaHQ6MnB4O1xyXG4gIHdpZHRoOiAycHg7XHJcblxyXG59XHJcbi5wcm9maWxlQnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG59XHJcbi5wcm9maWxlTGlua1RleHQ6aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW5wdXQsIG9wdGdyb3VwLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm5nLWF1dG9jb21wbGV0ZSA6Om5nLWRlZXAgLmF1dG9jb21wbGV0ZS1jb250YWluZXIgOjpuZy1kZWVwIC5pbnB1dC1jb250YWluZXIgOjpuZy1kZWVwIGlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG4gICJdfQ== */"]
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

      _LayoutComponent.??fac = function LayoutComponent_Factory(t) {
        return new (t || _LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
      };

      _LayoutComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _LayoutComponent,
        selectors: [["npr-layout"]],
        decls: 6,
        vars: 0,
        consts: [[1, "pageContent"], [1, "pageContentMain"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "npr-sidenav");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "npr-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
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

      _SharedComponentsModule.??fac = function SharedComponentsModule_Factory(t) {
        return new (t || _SharedComponentsModule)();
      };

      _SharedComponentsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _SharedComponentsModule
      });
      _SharedComponentsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutocompleteLibModule, ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_SharedComponentsModule, {
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


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-malihu-scrollbar */
      87210);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../directives/dropdown.directive */
      43998);
      /* harmony import */


      var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../directives/dropdown-link.directive */
      97333);
      /* harmony import */


      var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../directives/dropdown-anchor.directive */
      82459);

      var _c0 = function _c0() {
        return ["/roles/list"];
      };

      var _c1 = function _c1(a0) {
        return {
          "active": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "iconActive": a0
        };
      };

      function SidenavComponent_li_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Roles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r1.handleActiveClass("roles")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r1.handleActiveClass("roles")));
        }
      }

      var _c3 = function _c3() {
        return ["/users"];
      };

      function SidenavComponent_li_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r2.handleActiveClass("users")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r2.handleActiveClass("users")));
        }
      }

      var _c4 = function _c4() {
        return ["/audit-logs"];
      };

      function SidenavComponent_li_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Audit Logs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r3.handleActiveClass("audit-logs")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r3.handleActiveClass("audit-logs")));
        }
      }

      var _c5 = function _c5() {
        return ["/security-policy/summary"];
      };

      function SidenavComponent_li_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Security Policy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r4.handleActiveClass("security-policy")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r4.handleActiveClass("security-policy")));
        }
      }

      var _c6 = function _c6() {
        return ["/authorize-cash-payment"];
      };

      function SidenavComponent_li_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Authorize Cash Payments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c6))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r5.handleActiveClass("authorize-cash-payment")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r5.handleActiveClass("authorize-cash-payment")));
        }
      }

      var _c7 = "/system-param-maintenance/transaction-code-summary";

      var _c8 = function _c8() {
        return [_c7];
      };

      function SidenavComponent_li_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Transaction Code Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r6.handleActiveClass("transaction-code")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r6.handleActiveClass("transaction-code")));
        }
      }

      var _c9 = "/system-param-maintenance/global-acc-maintenance-summary";

      var _c10 = function _c10() {
        return [_c9];
      };

      function SidenavComponent_li_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Global Account Restriction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r7.handleActiveClass("global-acc-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r7.handleActiveClass("global-acc-maintenance")));
        }
      }

      var _c11 = "/system-param-maintenance/user-gl-acc-maintenance-summary";

      var _c12 = function _c12() {
        return [_c11];
      };

      function SidenavComponent_li_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " User Account Restriction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r8.handleActiveClass("user-gl-acc-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r8.handleActiveClass("user-gl-acc-maintenance")));
        }
      }

      var _c13 = "/system-param-maintenance/dept-id-maintenance-summary";

      var _c14 = function _c14() {
        return [_c13];
      };

      function SidenavComponent_li_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Department ID Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r9.handleActiveClass("dept-id-maintenance")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r9.handleActiveClass("dept-id-maintenance")));
        }
      }

      var _c15 = function _c15() {
        return ["/email-management"];
      };

      function SidenavComponent_li_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Email-Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r10.handleActiveClass("email-management")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c15));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r10.handleActiveClass("email-management")));
        }
      }

      var _c16 = function _c16() {
        return ["/addSystem/summary"];
      };

      function SidenavComponent_li_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Add System");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c16))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r11.handleActiveClass("addSystem")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r11.handleActiveClass("addSystem")));
        }
      }

      var _c17 = function _c17() {
        return ["/rule-translation/summary"];
      };

      function SidenavComponent_li_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Rule Translation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c17))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r12.handleActiveClass("rule-translation")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r12.handleActiveClass("rule-translation")));
        }
      }

      var _c18 = function _c18() {
        return ["/createrule/list"];
      };

      function SidenavComponent_li_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Create Rule ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c18))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r13.handleActiveClass("createrule")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r13.handleActiveClass("createrule")));
        }
      }

      var _c19 = function _c19() {
        return ["/rule-mapping/summary"];
      };

      function SidenavComponent_li_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Rule Mapping ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c19))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r14.handleActiveClass("rule-mapping")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r14.handleActiveClass("rule-mapping")));
        }
      }

      var _c20 = function _c20() {
        return ["/external-system/extSys-summary"];
      };

      function SidenavComponent_li_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "External System");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r15.handleActiveClass("extSys")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r15.handleActiveClass("extSys")));
        }
      }

      var _c21 = function _c21() {
        return ["/external-system/processCodeMapping"];
      };

      function SidenavComponent_li_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Process Code Mapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r16.handleActiveClass("processCodeMapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r16.handleActiveClass("processCodeMapping")));
        }
      }

      var _c22 = function _c22() {
        return ["/excel-mapping"];
      };

      function SidenavComponent_li_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Template Mapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](3, _c1, ctx_r17.handleActiveClass("excel-mapping")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c22));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r17.handleActiveClass("excel-mapping")));
        }
      }

      var _c23 = function _c23() {
        return ["active"];
      };

      var _c24 = function _c24() {
        return ["/file-upload/upload-excel"];
      };

      function SidenavComponent_li_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Upload Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c23))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c24));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c2, ctx_r18.handleActiveClass("Upload Excel")));
        }
      }

      var _c25 = function _c25() {
        return ["/external-system/treasuryReference"];
      };

      function SidenavComponent_li_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Treasury Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c1, ctx_r19.handleActiveClass("treasuryReference")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](7, _c25));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c2, ctx_r19.handleActiveClass("treasuryReference")));
        }
      }

      var _c26 = function _c26() {
        return ["/file-upload/authorize_excel"];
      };

      function SidenavComponent_li_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Authorize Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c1, ctx_r20.handleActiveClass("authorize_excel")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](7, _c26));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c2, ctx_r20.handleActiveClass("authorize_excel")));
        }
      }

      var _c27 = function _c27() {
        return ["/file-upload/rejection_queue"];
      };

      function SidenavComponent_li_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Rejection Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c1, ctx_r21.handleActiveClass("rejection_queue")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](7, _c27));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c2, ctx_r21.handleActiveClass("rejection_queue")));
        }
      }

      var _c28 = function _c28() {
        return ["/authorize-modification"];
      };

      function SidenavComponent_li_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Authorize Modification");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c1, ctx_r22.handleActiveClass("authorize-modification")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](7, _c28));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c2, ctx_r22.handleActiveClass("authorize-modification")));
        }
      }

      var _c29 = function _c29() {
        return ["/process-monitoring"];
      };

      function SidenavComponent_li_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Process Monitoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c23))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c1, ctx_r23.handleActiveClass("process-monitoring")))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](7, _c29));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c2, ctx_r23.handleActiveClass("process-monitoring")));
        }
      }

      var _c30 = function _c30() {
        return ["/customer-search"];
      };

      function SidenavComponent_li_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Customer Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c30))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r24.handleActiveClass("customer-search")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r24.handleActiveClass("customer-search")));
        }
      }

      var _c31 = function _c31() {
        return ["/initiate-account-closure"];
      };

      function SidenavComponent_li_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Initiate Account Closure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c31))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r25.handleActiveClass("initiate-account-closure")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r25.handleActiveClass("initiate-account-closure")));
        }
      }

      var _c32 = function _c32() {
        return ["/process-account-closure"];
      };

      function SidenavComponent_li_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Process Account Closure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c32))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r26.handleActiveClass("process-account-closure")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r26.handleActiveClass("process-account-closure")));
        }
      }

      var _c33 = "/account-closure-maintenance/account-closure-summary";

      var _c34 = function _c34() {
        return [_c33];
      };

      function SidenavComponent_li_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Account Closure Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c34))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r27.handleActiveClass("account-closure-maintenance")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r27.handleActiveClass("account-closure-maintenance")));
        }
      }

      var _c35 = function _c35() {
        return ["/charge-maintainence"];
      };

      function SidenavComponent_li_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Charge Maintenance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](3, _c35))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](4, _c1, ctx_r28.handleActiveClass("charge-maintainence")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c2, ctx_r28.handleActiveClass("charge-maintainence")));
        }
      }

      var _c36 = function _c36() {
        return ["/dashboard"];
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
            axis: 'y',
            theme: 'minimal-dark'
          };
          this.newRoleScreenPerm = [''];
          this.screendata = [''];
          this.screenpermissions = [];
          this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
          this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        }

        _createClass(_SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            setTimeout(function () {
              _this10.EnablescreenPermissions();

              var resizeObserver = new ResizeObserver(function (entries) {
                _this10.sidebarHeight = entries[0].target.clientHeight;

                var hideScrollbar = _this10.shouldHideSideScroll();

                if (_this10.isScrollbarHidden === hideScrollbar) return;
                _this10.isScrollbarHidden = hideScrollbar;

                _this10.toggleSideScrollbar(_this10.shouldHideSideScroll());
              });
              resizeObserver.observe(document.getElementById('mCSB_2_container'));
              window.addEventListener('resize', function () {
                var hideScrollbar = _this10.shouldHideSideScroll();

                if (_this10.isScrollbarHidden === hideScrollbar) return;
                _this10.isScrollbarHidden = hideScrollbar;

                _this10.toggleSideScrollbar(_this10.shouldHideSideScroll());
              });
            }, 500); // this.getRoleScreen();
            // start observing a DOM node    

            this.roleName = sessionStorage.getItem('user_role');
            this.screenpermission = localStorage.getItem('userPermissions');
            this.screenwisePermissions.subscribe(function (message) {
              return _this10.screenpermissions = message;
            });
            this.getRoleScreen();
            this.roleName = sessionStorage.getItem('user_role');
            this.screenpermission = localStorage.getItem('userPermissions');
            this.layoutService.share.subscribe(function (val) {
              if (val) {
                _this10.lastValue = val;
              }
            });
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.roleService.fetchScreenData().subscribe(function (data) {
                        _this11.screendata = data; // console.log(data);
                        // console.log(this.screendata);

                        _this11.screendata.forEach(function (element) {
                          //admin
                          if (element === 'Dashboard') {
                            //  const rolescreen = true;
                            _this11.dashboardscreen = true; // console.log('rolescreen', rolescreen)
                          }

                          if (element === 'Roles') {
                            //  const rolescreen = true;
                            _this11.rolescreen = true; // console.log('rolescreen', rolescreen)
                          }

                          if (element == 'Users') {
                            _this11.userScreen = true;
                          }

                          if (element === 'Audit Logs') {
                            _this11.auditScreen = true;
                          }

                          if (element === 'Password Policy') {
                            _this11.passPolicy = true;
                          }

                          if (element === 'GlobalCodeMaintenance') {
                            _this11.gcode = true;
                          }

                          if (element === 'UserCodeMaintenance') {
                            _this11.ucode = true;
                          }

                          if (element === 'Department Id Maintenance') {
                            _this11.deptcodeMaint = true;
                          }

                          if (element === 'Transaction Code Maint') {
                            _this11.trncodeMaint = true;
                          }

                          if (element === 'AcumenJournal') {
                            _this11.acumenjournal = true;
                          }

                          if (element === 'Process Monitoring') {
                            _this11.processMonitor = true;
                          }

                          if (element === 'External Systems') {
                            _this11.extSystem = true;
                          }

                          if (element === 'Process Code Mapping') {
                            _this11.processCodeMapping = true;
                          }

                          if (element === 'Excel Mapping') {
                            _this11.excelMapping = true;
                          }

                          if (element === 'Upload Excel') {
                            _this11.uploadExcel = true;
                          }

                          if (element === 'Process Excel') {
                            _this11.processExcel = true;
                          }

                          if (element === 'Modify Excel') {
                            _this11.modifyExcel = true;
                          }

                          if (element === 'Authorize Modifications') {
                            _this11.authModification = true;
                          }

                          if (element === 'Customer search') {
                            _this11.customerSearch = true;
                          } //code maintenance


                          if (element === 'Email-Management') {
                            _this11.emailManagement = true;
                          } //account closer


                          if (element === 'Initiate Account Closure') {
                            _this11.initialAccountCloser = true;
                          }

                          if (element === 'Process Account Closure') {
                            _this11.ProcessAccountCloser = true;
                          }

                          if (element === 'Acc Closure Maintenance') {
                            _this11.acClosermaint = true;
                          }

                          if (element === 'Charge Maintenance') {
                            _this11.chargeMaintenance = true;
                          }
                        });

                        _this11.cdr.markForCheck();
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
            var _this12 = this;

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
              return _this12.screenpermissions = message;
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
          key: "shouldHideSideScroll",
          value: function shouldHideSideScroll() {
            return window.innerHeight > 512 && this.sidebarHeight < 512;
          }
        }, {
          key: "toggleSideScrollbar",
          value: function toggleSideScrollbar(shouldHide) {
            try {
              console.log("shouldhide = ".concat(shouldHide));
              document.getElementsByClassName('mCSB_draggerContainer')[0].style.display = shouldHide ? "none" : "block";
            } catch (error) {}
          }
        }, {
          key: "toggleNav",
          value: function toggleNav() {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this.lastValue).find('ul.subMenuCol').slideUp();
            var el = this.el.nativeElement.querySelector(".activeSMenu");

            if (el) {
              this.renderer.removeClass(el, 'activeSMenu');
            }
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
          value: function ngOnDestroy() {// this.mScrollbarService.destroy('#sideMenu');
          }
        }]);

        return _SidenavComponent;
      }();

      _SidenavComponent.??fac = function SidenavComponent_Factory(t) {
        return new (t || _SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2));
      };

      _SidenavComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
        type: _SidenavComponent,
        selectors: [["npr-sidenav"]],
        hostBindings: function SidenavComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resolveWindow"]);
          }
        },
        decls: 100,
        vars: 56,
        consts: [["malihu-scrollbar", ""], ["sideMenu", ""], [1, "navOverlay"], [1, "sidebarCol"], [1, "sidebarLogo"], [3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "sidebarNavCol", "mCustomScrollbar"], ["appDropdown", "", 1, "sidebarNav"], ["routerLinkActive", "open", 1, "navItem", 3, "click"], [1, "navLink", 3, "routerLink", "ngClass"], [1, "navIcon"], ["src", "assets/images/home.svg", "alt", "..."], [1, "navText"], ["appDropdownLink", "", "routerLinkActive", "open", 1, "navItem", "sMenuLink"], ["appDropdownToggle", "", 1, "navLink", 3, "ngClass"], ["src", "assets/images/security.svg", "alt", "..."], [1, "submenuColMain"], ["appDropdown", "", 1, "subMenuCol"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngIf"], ["src", "assets/images/transaction.svg", "alt", "..."], ["src", "assets/images/add-system.svg", "alt", "..."], ["src", "assets/images/external-system.svg", "alt", "..."], ["src", "assets/images/upload-excel.svg", "alt", "..."], ["src", "assets/images/customer-search.svg", "alt", "..."], ["src", "assets/images/inititate-account.svg", "alt", "..."], ["appDropdownLink", "", "routerLinkActive", "open"], [1, "subMenuLink", 3, "routerLink", "ngClass"], [1, "customListIcon", "roleIcon", 3, "ngClass"], [1, "customListIcon", "userIcon", 3, "ngClass"], [1, "customListIcon", "auditIcon", 3, "ngClass"], [1, "customListIcon", "securityIcon", 3, "ngClass"], [1, "customListIcon", "authorizeIcon", 3, "ngClass"], [1, "subMenuLink", 3, "ngClass", "routerLink"], [1, "customListIcon", "transactionIcon", 3, "ngClass"], [1, "customListIcon", "globalIcon", 3, "ngClass"], [1, "customListIcon", "userGlIcon", 3, "ngClass"], [1, "customListIcon", "departmentIcon", 3, "ngClass"], [1, "customListIcon", "emailIcon", 3, "ngClass"], [1, "customListIcon", "addSysIcon", 3, "ngClass"], [1, "customListIcon", "translationIcon", 3, "ngClass"], [1, "customListIcon", "ruleIcon", 3, "ngClass"], [1, "customListIcon", "mappingIcon", 3, "ngClass"], [1, "customListIcon", "externalSystemIcon", 3, "ngClass"], [1, "customListIcon", "processCodeMappingIcon", 3, "ngClass"], [1, "customListIcon", "templateMappingIcon", 3, "ngClass"], [1, "subMenuLink", 3, "routerLinkActive", "routerLink"], [1, "customListIcon", "uploadIcon", 3, "ngClass"], [1, "subMenuLink", 3, "routerLinkActive", "ngClass", "routerLink"], [1, "customListIcon", "tresuryIcon", 3, "ngClass"], [1, "customListIcon", "rejectionIcon", 3, "ngClass"], [1, "customListIcon", "authorizeModificationIcon", 3, "ngClass"], [1, "customListIcon", "processMonitoringIcon", 3, "ngClass"], [1, "customListIcon", "customerSearchIcon", 3, "ngClass"], [1, "customListIcon", "initiateIcon", 3, "ngClass"], [1, "customListIcon", "processAccountClosureIcon", 3, "ngClass"], [1, "customListIcon", "accountClosureIcon", 3, "ngClass"], [1, "customListIcon", "chargeIcon", 3, "ngClass"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "section", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function SidenavComponent_Template_li_click_10_listener() {
              return ctx.toggleNav();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](13, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](19, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](21, "System Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](24, SidenavComponent_li_24_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](25, SidenavComponent_li_25_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](26, SidenavComponent_li_26_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](27, SidenavComponent_li_27_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](31, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](32, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](33, "System Param Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](35, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](36, SidenavComponent_li_36_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](37, SidenavComponent_li_37_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](38, SidenavComponent_li_38_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](39, SidenavComponent_li_39_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](40, SidenavComponent_li_40_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](41, SidenavComponent_li_41_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](42, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](43, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](44, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](45, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](46, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](47, "System Interface");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](48, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](49, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](50, SidenavComponent_li_50_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](51, SidenavComponent_li_51_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](52, SidenavComponent_li_52_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](53, SidenavComponent_li_53_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](54, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](55, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](56, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](57, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](58, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](59, "File Upload Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](60, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](61, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](62, SidenavComponent_li_62_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](63, SidenavComponent_li_63_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](64, SidenavComponent_li_64_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](65, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](66, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](67, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](68, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](69, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](70, "File upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](71, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](72, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](73, SidenavComponent_li_73_Template, 4, 7, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](74, SidenavComponent_li_74_Template, 4, 10, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](75, SidenavComponent_li_75_Template, 4, 10, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](76, SidenavComponent_li_76_Template, 4, 10, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](77, SidenavComponent_li_77_Template, 4, 10, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](78, SidenavComponent_li_78_Template, 4, 10, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](79, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](80, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](81, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](82, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](83, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](84, "Account Block");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](85, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](86, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](87, SidenavComponent_li_87_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](88, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](89, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](90, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](91, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](92, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](93, "Account Closure");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](94, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](95, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](96, SidenavComponent_li_96_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](97, SidenavComponent_li_97_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](98, SidenavComponent_li_98_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](99, SidenavComponent_li_99_Template, 4, 8, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](38, _c36));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](39, _c36))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](40, _c1, ctx.handleActiveClass("dashboard")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](42, _c1, ctx.handleActiveClass("roles") || ctx.handleActiveClass("users") || ctx.handleActiveClass("audit-logs") || ctx.handleActiveClass("security-policy")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Roles") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Users") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Audit Logs") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Security Policy") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](44, _c1, ctx.handleActiveClass("authorize-cash-payment") || ctx.handleActiveClass("transaction-code") || ctx.handleActiveClass("global-acc-maintenance") || ctx.handleActiveClass("user-gl-acc-maintenance") || ctx.handleActiveClass("dept-id-maintenance") || ctx.handleActiveClass("email-management")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Authorize Cash Payments") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Transaction Code Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Global Account Restriction") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("User Account Restriction") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Department ID Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Email-Management") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](46, _c1, ctx.handleActiveClass("addSystem") || ctx.handleActiveClass("rule-translation") || ctx.handleActiveClass("createrule") || ctx.handleActiveClass("rule-mapping")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Add System") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Rule translation") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Create Rule") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Rule Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](48, _c1, ctx.handleActiveClass("extSys") || ctx.handleActiveClass("processCodeMapping") || ctx.handleActiveClass("excel-mapping")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("External System") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Process Code Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Template Mapping") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](50, _c1, ctx.handleActiveClass("file-upload") || ctx.handleActiveClass("authorize-modification") || ctx.handleActiveClass("treasuryReference") || ctx.handleActiveClass("process-monitoring")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Upload Excel") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Treasury Reference") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Authorize Excel") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Rejection Queue") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Authorize Modification") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Process Monitoring") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](52, _c1, ctx.handleActiveClass("customer-search")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Customer Search") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](54, _c1, ctx.handleActiveClass("initiate-account-closure") || ctx.handleActiveClass("process-account-closure") || ctx.handleActiveClass("account-closure-maintenance") || ctx.handleActiveClass("charge-maintainence")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Initiate Account Closure") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Process Account Closure") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Account Closure Maintenance") > -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.screenpermissions.indexOf("Charge Maintenance") > -1);
          }
        },
        directives: [ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_11__.MalihuScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__.AppDropdownDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownLinkDirective, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownAnchorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
        styles: ["a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('slideInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
            transform: 'translateY(-100%)'
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('200ms ease-in', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
            transform: 'translateY(0%)'
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('200ms ease-in', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
            transform: 'translateY(-100%)'
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

      _DropdownAnchorDirective.??fac = function DropdownAnchorDirective_Factory(t) {
        return new (t || _DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownLinkDirective), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
      };

      _DropdownAnchorDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: _DropdownAnchorDirective,
        selectors: [["", "appDropdownToggle", ""]],
        hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) {
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

      _DropdownLinkDirective.??fac = function DropdownLinkDirective_Factory(t) {
        return new (t || _DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.AppDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService));
      };

      _DropdownLinkDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
        type: _DropdownLinkDirective,
        selectors: [["", "appDropdownLink", ""]],
        hostVars: 2,
        hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("activeSMenu", ctx.open);
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
            var _this13 = this;

            this._router = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd;
            })).subscribe(function (event) {
              _this13.navlinks.forEach(function (link) {
                if (link.group) {
                  var routeUrl = _this13.getUrl();

                  var currentUrl = routeUrl.split('/');

                  if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;

                    _this13.closeOtherLinks(link);
                  }
                }
              });
            });
          }
        }]);

        return _AppDropdownDirective;
      }();

      _AppDropdownDirective.??fac = function AppDropdownDirective_Factory(t) {
        return new (t || _AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
      };

      _AppDropdownDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({
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

      _MenuCollapseDirective.??fac = function MenuCollapseDirective_Factory(t) {
        return new (t || _MenuCollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _MenuCollapseDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _MenuCollapseDirective,
        selectors: [["", "menuCollapse", ""]],
        hostBindings: function MenuCollapseDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MenuCollapseDirective_click_HostBindingHandler($event) {
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

      _SharedDirectivesModule.??fac = function SharedDirectivesModule_Factory(t) {
        return new (t || _SharedDirectivesModule)();
      };

      _SharedDirectivesModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _SharedDirectivesModule
      });
      _SharedDirectivesModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_SharedDirectivesModule, {
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

      _NprModule.??fac = function NprModule_Factory(t) {
        return new (t || _NprModule)();
      };

      _NprModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _NprModule
      });
      _NprModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__.SharedDirectivesModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_NprModule, {
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
          var _this14 = this;

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
            return _this14.breakpointObserver.isMatched("(max-width: 1279px)");
          };

          this.isMobile = function () {
            return _this14.breakpointObserver.isMatched("(max-width: 599px)");
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

      _LayoutService.??fac = function LayoutService_Factory(t) {
        return new (t || _LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver));
      };

      _LayoutService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: _LayoutService,
        factory: _LayoutService.??fac,
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
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'session',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_views_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
          [__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_forget-password_forget-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_dashboard_dashboard-analytics_module_ts").then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_roles_roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_ngx-spinner___ivy_ngcc___fesm2015_ngx-spinner_js-src_app_shared_services-95cfea"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_addSystem_add-System_add-System_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_audit-logs_audit-logs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/change-password/change-password.module */
            87015)).then(function (m) {
              return m.ChangePasswordModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_views_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/profile/profile.module */
            38323)).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'process-monitoring',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_process-monitoring_process-monitoring_module_ts").then(__webpack_require__.bind(__webpack_require__,
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
        }, // {
        //   path: 'summary',
        //   loadChildren: () => import('./views/security-policy/security-policy.module').then(m => m.SecurityPolicyModule),
        // },
        {
          path: 'createrule',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule_rule_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_system-param-maintenance_system-param-maintenance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_file-upload_file-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("src_app_views_process-account-closure_process-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular-datatables_index_js-src_app_shared_services_account-closure-serv-3fd946"), __webpack_require__.e("src_app_views_initiate-account-closure_initiate-account-closure_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_customer-search_customer-search_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/customer-search/customer-search.module */
            9208)).then(function (m) {
              return m.CustomerSearchModule;
            });
          }
        }, {
          path: 'customer-search/accountBlocking',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_customer-search_customer-search_module_ts").then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_authorize-modification_authorize-modification_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("src_app_views_excel-mapping_excel-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-mapping_rule-mapping_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/rule-mapping/rule-mapping.module */
            8690)).then(function (m) {
              return m.RuleMappingModule;
            });
          }
        }, {
          path: 'charge-maintainence',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_rxweb_reactive-form-validators___ivy_ngcc___fesm2015_rxweb-reactive-form-0ffb67"), __webpack_require__.e("src_app_views_charge-maintainenece_charge-maintainenece_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"), __webpack_require__.e("src_app_views_rule-translation_rule-translation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
            [__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ng-select_ng-select_fesm2015_ng-20c43d"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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

      _AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        providers: [_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivateGuard],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
          // preloadingStrategy: PreloadAllModules,
          useHash: true,
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'corrected',
          anchorScrolling: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_AppRoutingModule, {
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
          var _this15 = this;

          _classCallCheck(this, _AppComponent);

          this.renderer = renderer;
          this.platform = platform;
          this.document = document;
          this.route = route;
          this.router = router;
          this.title = "Median";
          this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.changeTheme();
          this.setTimeout();
          this.userInactive.subscribe(function () {
            return _this15.logout();
          });
        }

        _createClass(_AppComponent, [{
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
            var _this16 = this;

            this.userActivity = setTimeout(function () {
              return _this16.userInactive.next(undefined);
            }, 600 * 1000);
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
            var lastBg = "";
            $(document).on('click', '.tColor', function (e) {
              e.preventDefault();
              var bgClass = $(this).data("id");
              $(this).addClass('active').parent().siblings().find('.tColor').removeClass('active');
              $('body').removeClass(lastBg).addClass(bgClass);
              lastBg = bgClass;
              $('.ddParent').removeClass('actDD');
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _AppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousemove", function AppComponent_mousemove_HostBindingHandler() {
              return ctx.refreshUserState();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveWindow"])("storage", function AppComponent_storage_HostBindingHandler() {
              return ctx.onUpdateStorage();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveWindow"]);
          }
        },
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "router-outlet");
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

      _AppModule.??fac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, // Npr
        _npr_npr_module__WEBPACK_IMPORTED_MODULE_2__.NprModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule, ngx_dialogs__WEBPACK_IMPORTED_MODULE_9__.NgxDialogsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_AppModule, {
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
            var _this17 = this;

            // Check the authentication status
            return this.jwtAuth.check().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (authenticated) {
              console.log("check status", authenticated); // If the user is not authenticated...

              if (!authenticated) {
                // Redirect to the sign-in page
                localStorage.clear();
                sessionStorage.clear();

                _this17.router.navigate(["session/login"]); // Prevent the access


                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
              } // Allow the access


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
            }));
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService));
      };

      _AuthGuard.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.??fac,
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

      _CanDeactivateGuard.??fac = function CanDeactivateGuard_Factory(t) {
        return new (t || _CanDeactivateGuard)();
      };

      _CanDeactivateGuard.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _CanDeactivateGuard,
        factory: _CanDeactivateGuard.??fac,
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
          'Content-Type': 'application/json'
        })
      };
      var _API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;

      var _ApiService = /*#__PURE__*/function () {
        function _ApiService(http) {
          _classCallCheck(this, _ApiService);

          this.http = http;
          this.uriForExt = _median + '/extsys';
          this.ext = _median + '/excelExt';
          this.excelmap = _median + '/excelmap';
          this.uriForMap = _median + '/excelmap';
          this.dashboardapi = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/dashboard';
          this.API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
          this.processCodeMappingObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            id: '',
            extSysCode: '',
            extSysName: '',
            commChannel: '',
            creatorDtStamp: '',
            creatorId: '',
            destination: '',
            destinationTag: '',
            dtdFile: '',
            errDirectoryName: '',
            errQueueName: '',
            errSchemaName: '',
            errXsltName: '',
            extSysTag: '',
            formatType: '',
            isDestNode: '',
            isExtSysNode: '',
            isModuleNode: '',
            isProcessNode: '',
            isServiceNode: '',
            latestAmendNo: '',
            messageType: '',
            moduleCode: '',
            moduleTag: '',
            msgDuplication: '',
            processCode: '',
            processTag: '',
            recordStatus: '',
            reqDirectoryName: '',
            reqQueueName: '',
            reqSchemaName: '',
            reqXsltName: '',
            requestTag: '',
            respDirectoryName: '',
            respQueueName: '',
            respSchemaName: '',
            respXsltName: '',
            responseTag: '',
            serviceCode: '',
            serviceTag: '',
            updatedAt: '',
            verifiedEver: '',
            verifierDtStamp: '',
            verifierId: '',
            xsdFile: '',
            authStatus: '',
            updatedBy: '',
            fristTimeAuth: '',
            versionNo: '',
            maxUploadLimit: '',
            fileName: '',
            bdav: '',
            backDateAllow: '',
            futureDateAllow: '',
            fdav: '',
            acft: '',
            autoUpload: '',
            filePath: '',
            fCYRateVariance: '',
            fCYPercentage: '',
            sftpRequired: '',
            sftpIpaddress: '',
            sftpPassword: '',
            sftpPath: '',
            sftpPort: '',
            sftpUsername: '',
            mandatoryFieldImposed: '',
            treasuryrefRequired: '',
            wuFile: '',
            verifiedOnce: ''
          }); // -- Sytstem Param Maintenance  --
          // 1. Transaction Code Maintenance

          this.transactionCodeSummryData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            userId: '',
            creatorDtStamp: '',
            creatorId: '',
            modNo: '',
            recordStatus: '',
            verifiedStatus: '',
            verifiedBy: '',
            verifiedOnce: '',
            verifiedTime: '',
            medTransCode: []
          });
          this.globalGccSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            globalGlCodeId: '',
            medGlobalGlCodeDetails: [],
            permission: '',
            recordStatus: '',
            modNo: '',
            activeTab: ''
          });
          this.globalAccSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            globalGlCodeId: '',
            medGlobalGlCodeDetails: [],
            permission: '',
            recordStatus: '',
            modNo: '',
            activeTab: ''
          });
          this.userGCCSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            userGlCodeId: '',
            medUserGlCodeDetails: [],
            permission: '',
            recordStatus: '',
            versionNo: '',
            activeTab: ''
          });
          this.userACCSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            approvedEver: '',
            approvedStatus: '',
            approvedTime: '',
            approverId: '',
            createdTime: '',
            creatorId: '',
            userAccClassId: '',
            medUserAccountClassDetails: [],
            permission: '',
            recordStatus: '',
            versionNo: '',
            activeTab: ''
          });
          this.homeactiveTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            activeTab: ''
          });
          this.profileactiveTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            activeTab: ''
          }); //File upload end
          // External System

          this.externalSystemData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            department: '',
            extSysCode: '',
            extSysName: '',
            modifiedBy: '',
            modifiedTime: '',
            recordStatus: '',
            verifiedOnce: '',
            version: ''
          });
          this.securityDetailsEdit = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            createdBy: '',
            createdDate: '',
            isActive: '',
            maxInvLogins: '',
            maxPswdLength: '',
            minPswdLength: '',
            modifiedBy: '',
            modifiedTime: '',
            notifyPasswordExpiryInDays: '',
            pswdComplexLcase: '',
            pswdComplexNum: '',
            pswdComplexSplc: '',
            pswdComplexUcase: '',
            pswdExpiry: '',
            pswdReuseAft: '',
            recordStatus: '',
            version: ''
          });
          this.customerSearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            firstName: '',
            customerNumber: '',
            accountNumber: '',
            mobileNo: '',
            lastName: '',
            customerName: '',
            branchCode: '',
            nationalId: '',
            email: ''
          });
          this.AccountBlocking = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            exit: ''
          });
          this.CustomerSearchFormValues = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            firstName: '',
            customerNumber: '',
            accountNumber: '',
            mobileNo: '',
            lastName: '',
            customerName: '',
            branchCode: '',
            nationalId: ''
          }); // Excel Mapping

          this.excelSummaryObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            extSysCode: '',
            processName: '',
            extSys: '',
            authStatus: '',
            currency: '',
            sheetNumber: ''
          }); // this._baseURL = AppConstants.baseURL + '/role';

          this._baseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/medRoles' + '/fetchAllRolesSummary';
          this._fmosbaseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/medRoles';
        }

        _createClass(_ApiService, [{
          key: "getAllExtSys",
          value: function getAllExtSys() {
            return this.http.get("".concat(this.uriForExt) + "/extsysdata?pageNo=".concat(0, "&pageSize=", 1000));
          }
        }, {
          key: "fetchnewscreenlabels",
          value: function fetchnewscreenlabels() {
            return this.http.get("".concat(this._fmosbaseURL) + '/fetchTabLabelAndScreen');
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
            return this.http.get("".concat(_API_URL, "/excelDataForProcessScreeen/getMonitorData"));
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
            return this.http.post("".concat(this.uriForExt) + '/createExtSys', extSys);
          }
        }, {
          key: "updateExtSys",
          value: function updateExtSys(extSys) {
            return this.http.put("".concat(this.uriForExt) + '/modifyextSys', extSys);
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
            return this.http.post("".concat(_API_URL, "/api/blockCustAcc"), data);
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
            return this.http["delete"]("".concat(_API_URL, "/userAccGL/deleteUserGlDetailById/").concat(id));
          }
        }, {
          key: "deleteuserAccountClassRow",
          value: function deleteuserAccountClassRow(id) {
            return this.http["delete"]("".concat(_API_URL, "/userAccGL/deleteAccountDetailById/").concat(id));
          }
        }, {
          key: "deleteglobalGCRow",
          value: function deleteglobalGCRow(id) {
            return this.http["delete"]("".concat(_API_URL, "/deletegGlDetailByIdRow/").concat(id));
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
            return this.http.get("".concat(this.API_URL) + "/auditLogs/getAllAuditLogs?pageNo=".concat(0, "&pageSize=", 1000, "&sortBy=", 'creatorDtStamp'));
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
            formdata.append('file', file);
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', "".concat(_API_URL, "/excelDataProcessing/getExcelFile/").concat(extSysNameData, "/").concat(processNameData, "/").concat(filename), formdata, {
              reportProgress: true,
              responseType: 'text'
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
            return this.http.get("".concat(this.ext) + '/getAllAuthDepts');
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
            return this.http.get("".concat(this.uriForExt) + '/getAllExtCode');
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
              responseType: 'text'
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
              responseType: 'text'
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

      _ApiService.??fac = function ApiService_Factory(t) {
        return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _ApiService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: _ApiService,
        factory: _ApiService.??fac,
        providedIn: 'root'
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
            var _this18 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
              token: _DEMO_TOKEN,
              user: _DEMO_USER
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              _this18.setUserAndToken(res.token, res.user, !!res);

              _this18.signingIn = true;
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
            var _this19 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_DEMO_USER).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (profile) {
              _this19.setUserAndToken(_this19.getJwtToken(), profile, true);

              _this19.signingIn = false;
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

      _JwtAuthService.??fac = function JwtAuthService_Factory(t) {
        return new (t || _JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_local_store_service__WEBPACK_IMPORTED_MODULE_0__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
      };

      _JwtAuthService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjectable"]({
        token: _JwtAuthService,
        factory: _JwtAuthService.??fac,
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

      _LocalStoreService.??fac = function LocalStoreService_Factory(t) {
        return new (t || _LocalStoreService)();
      };

      _LocalStoreService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: _LocalStoreService,
        factory: _LocalStoreService.??fac,
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
            var _this20 = this;

            this.http.get("".concat(this._fmosbaseURL, "/allRolePermissionForUser/").concat(userIdLoggedIn)).subscribe(function (data) {
              _this20.storeuserpermissions = data;
              localStorage.setItem('userPermissions', JSON.stringify(_this20.storeuserpermissions));
              console.log(_this20.storeuserpermissions);
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
            var _this21 = this;

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
              return _this21.screenpermissions = message;
            }); // console.log("screen permissions final", this.screenpermissions);
          }
        }]);

        return _RoleService;
      }();

      _RoleService.??fac = function RoleService_Factory(t) {
        return new (t || _RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _RoleService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: _RoleService,
        factory: _RoleService.??fac,
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

      _UsersService.??fac = function UsersService_Factory(t) {
        return new (t || _UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _UsersService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: _UsersService,
        factory: _UsersService.??fac,
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
        //  MEDIAN_URL: 'http://192.168.0.14:8082/medianv2',
        //ACC_CLOSER_URL: 'http://localhost:9192'
        //MEDIAN_URL: 'http://192.168.0.14:8082/medianv2',
        // ACC_CLOSER_URL: 'http://192.168.0.14:8082/medianAccountClosure'
        MEDIAN_URL: 'http://192.168.0.14:9003/medianv2',
        ACC_CLOSER_URL: 'http://192.168.0.14:9003/medianv2'
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