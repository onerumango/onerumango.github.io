(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_profile_profile_module_ts"], {
    /***/
    85887:
    /*!*********************************************************!*\
      !*** ./src/app/views/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileRoutingModule": function ProfileRoutingModule() {
          return (
            /* binding */
            _ProfileRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.component */
      59939);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
      }];

      var _ProfileRoutingModule = /*#__PURE__*/_createClass(function _ProfileRoutingModule() {
        _classCallCheck(this, _ProfileRoutingModule);
      });

      _ProfileRoutingModule.??fac = function ProfileRoutingModule_Factory(t) {
        return new (t || _ProfileRoutingModule)();
      };

      _ProfileRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _ProfileRoutingModule
      });
      _ProfileRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    59939:
    /*!****************************************************!*\
      !*** ./src/app/views/profile/profile.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileComponent": function ProfileComponent() {
          return (
            /* binding */
            _ProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/security-policy.service */
      10402);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      98613);

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _ProfileComponent = /*#__PURE__*/function () {
        function _ProfileComponent(api, fb, router, apiService, userApi) {
          _classCallCheck(this, _ProfileComponent);

          this.api = api;
          this.fb = fb;
          this.router = router;
          this.apiService = apiService;
          this.userApi = userApi;
          this.hide1 = true;
          this.hide = true;
          this.hide2 = true;
          this.submit = false;
          this.uploadBtn = false;
          this.isSaveEnable = false;
        }

        _createClass(_ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInUser = localStorage.getItem("userFromLogin");
            this.user = localStorage.getItem("userobj");
            console.log(JSON.parse(this.user));
            this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              department: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
            });
            this.getProfileImage(JSON.parse(this.user).userId);
            this.buildForm(JSON.parse(this.user));
          }
        }, {
          key: "buildForm",
          value: function buildForm(item) {
            this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(item ? item.userId : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(item ? item.userName : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              department: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(item ? item.department : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(userId) {
            var _this = this;

            this.userApi.getCustomerDocuments(userId).subscribe(function (data) {
              console.log('data ::', data);

              if (data) {
                _this.profileId = data.id;
                _this.url = data.fileUrl;
              }
            });
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event) {
            var _this2 = this;

            console.log(event, 'Event');

            if (event.target.files && event.target.files[0]) {
              this.profilePicture = event.target.files[0];
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                // called once readAsDataURL is completed
                console.log('Profile Image Test:: ', reader.result);
                _this2.url = event.target.result;
                console.log(_this2.url, 'URL');
              };

              this.submitPhoto();
            }
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(value) {
            // 
            this.isSaveEnable = true;
            this.selectedTheme = value;
            console.log(this.selectedTheme); // this.saveTheme(value)
          }
        }, {
          key: "updateTheme",
          value: function updateTheme() {
            var lastBg = this.lastBg;
            $(document).on('click', '.tColor', function (e) {
              e.preventDefault();
              var bgClass = $(this).data("id");
              $(this).addClass('active').parent().siblings().find('.tColor').removeClass('active');
              $('body').removeClass(lastBg).addClass(bgClass);
              localStorage.setItem('SELECTED_THEME', bgClass);
              lastBg = bgClass;
              $('.ddParent').removeClass('actDD');
            });
          }
        }, {
          key: "saveTheme",
          value: function saveTheme(theme) {
            var _this3 = this;

            // this.updateTheme();
            this.userApi.saveTheme(JSON.parse(this.user).userId, theme).subscribe(function (resp) {
              console.log(resp);

              if (resp === 'Saved successfully') {
                console.log(resp);
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: "Saved successfully",
                  icon: 'success'
                });
              }
            }, function (error) {
              if (error.error.text === 'Saved successfully') {
                _this3.isSaveEnable = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: "Saved successfully",
                  icon: 'success'
                });
              }
            });
            window.location.reload();
          }
        }, {
          key: "submitPhoto",
          value: function submitPhoto() {
            var _this4 = this;

            if (this.profilePicture) {
              console.log(this.profilePicture);
              var profileUpload = {};
              profileUpload.fileType = this.profilePicture.type;
              profileUpload.fileName = this.profilePicture.name;
              profileUpload.userId = JSON.parse(this.user).userId;
              console.log(profileUpload);
              var uploadData = new FormData();
              uploadData.append('data', JSON.stringify(profileUpload));
              uploadData.append('file', this.profilePicture);
              this.userApi.uploadDocument(uploadData).subscribe(function (response) {
                console.log(response);

                if (response.statusCodeValue === 200) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Image Uploaded Successfully",
                    icon: "success"
                  });
                  _this4.uploadBtn = true;
                }
              });
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              text: 'You are trying to delete image. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this5.url = null;

                _this5.userApi.deleteProfileImage(JSON.parse(_this5.user).userId).subscribe(function (resp) {
                  console.log("resp after deletion ", resp);

                  if (resp === true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: "Image deleted Successfully",
                      icon: "success"
                    });
                  }
                });
              }
            });
          }
        }]);

        return _ProfileComponent;
      }();

      _ProfileComponent.??fac = function ProfileComponent_Factory(t) {
        return new (t || _ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_2__.SecurityPolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UsersService));
      };

      _ProfileComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _ProfileComponent,
        selectors: [["npr-profile"]],
        decls: 64,
        vars: 6,
        consts: [[1, "mt-1"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row"], [1, "col-lg-4"], [1, "d-flex", "justify-content-center"], [1, "image_outer_container"], [1, "green_icon", 3, "click"], ["type", "file", "name", "myfile", 2, "display", "none", 3, "change"], ["file", ""], [1, "image_inner_container"], [3, "src"], [1, "row", "g-3", "pt-3", "mt-2", "justify"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "col-lg-6"], [3, "disabled"], [1, "row", "gy-4", 2, "margin-top", "0%"], [1, "formLbl"], [1, "colorRed"], [1, "d-flex"], ["id", "userId", "placeholder", "Old Password", "required", "", "value", "", "name", "userId", "formControlName", "userId", 1, "form-control"], ["userId", ""], ["id", "userName", "placeholder", "User Name", "required", "", "value", "", "name", "userName", "formControlName", "userName", 1, "form-control"], ["userName", ""], ["id", "confirm password", "placeholder", "Confirm Password", "required", "", "value", "", "name", "department", "formControlName", "department", 1, "form-control"], ["department", ""], [1, "row", "mt-10"], ["id", "horizontal-list"], ["data-id", "selectedTheme?'theme1':'theme2'", 1, "tColor", "theme1", 3, "click"], ["data-id", "selectedTheme", 1, "tColor", "theme2", 3, "click"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ProfileComponent_Template_div_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](12);

              return _r0.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function ProfileComponent_Template_input_change_11_listener($event) {
              return ctx.onSelectFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](14, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ProfileComponent_Template_button_click_17_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](18, " Delete Image ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "fieldset", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "UserId");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](29, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](37, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](41, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](43, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](45, "input", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](48, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](51, " Default Themes: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "ul", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ProfileComponent_Template_span_click_54_listener() {
              return ctx.changeTheme("theme1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](56, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ProfileComponent_Template_span_click_56_listener() {
              return ctx.changeTheme("theme2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](57, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](58, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ProfileComponent_Template_button_click_59_listener() {
              return ctx.saveTheme(ctx.selectedTheme);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](60, "Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](62, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](63, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("src", ctx.url ? ctx.url : "assets/images/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.isSaveEnable);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](5, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
        styles: ["img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  cursor: pointer;\n  height: 200px;\n  width: 200px;\n  border: 5px solid #000;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%]   .hover-text[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n\n.hoverable[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .hover-text[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\nul#horizontal-list[_ngcontent-%COMP%] {\n  min-width: 696px;\n  list-style: none;\n  padding-top: 6px;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\nul#horizontal-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  align-content: center;\n}\n\n.image_outer_container[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  border-radius: 50%;\n  position: relative;\n}\n\n.image_inner_container[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 5px;\n  background: #833ab4;\n  background: linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);\n}\n\n.image_inner_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  border: 5px solid white;\n}\n\n.image_outer_container[_ngcontent-%COMP%]   .green_icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/edit-small.svg\");\n  position: absolute;\n  right: 30px;\n  bottom: 10px;\n  height: 30px;\n  width: 30px;\n  border: 5px solid white;\n  border-radius: 50%;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEsaUVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFBRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaG92ZXJhYmxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaG92ZXJhYmxlIC5ob3Zlci10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhvdmVyYWJsZSAuYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmhvdmVyYWJsZTpob3ZlciAuaG92ZXItdGV4dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ob3ZlcmFibGU6aG92ZXIgLmJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jZmlsZUlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG51bCNob3Jpem9udGFsLWxpc3Qge1xyXG4gIG1pbi13aWR0aDogNjk2cHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcblxyXG4ubXQtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbnVsI2hvcml6b250YWwtbGlzdCBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2Vfb3V0ZXJfY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlX2lubmVyX2NvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjODMzYWI0O1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjYjA0NSwgI2ZkMWQxZCwgIzgzM2FiNCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjYjA0NSwgI2ZkMWQxZCwgIzgzM2FiNCk7XHJcbn1cclxuXHJcbi5pbWFnZV9pbm5lcl9jb250YWluZXIgaW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5pbWFnZV9vdXRlcl9jb250YWluZXIgLmdyZWVuX2ljb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZWRpdC1zbWFsbC5zdmcnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    38323:
    /*!*************************************************!*\
      !*** ./src/app/views/profile/profile.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileModule": function ProfileModule() {
          return (
            /* binding */
            _ProfileModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-routing.module */
      85887);
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component */
      59939);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProfileModule = /*#__PURE__*/_createClass(function _ProfileModule() {
        _classCallCheck(this, _ProfileModule);
      });

      _ProfileModule.??fac = function ProfileModule_Factory(t) {
        return new (t || _ProfileModule)();
      };

      _ProfileModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _ProfileModule
      });
      _ProfileModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_ProfileModule, {
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_profile_profile_module_ts-es5.js.map