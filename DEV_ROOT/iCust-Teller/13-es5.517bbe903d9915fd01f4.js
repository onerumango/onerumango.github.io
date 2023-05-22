!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"))?i:String(i)),o)}var r,i}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{VVaf:function(e,o,r){"use strict";r.r(o),r.d(o,"SessionsModule",function(){return W});var i,a,s,c,l=r("Kdsb"),u=r("ofXK"),g=r("3Pt+"),d=r("tyNb"),p=r("zMWy"),b=r("YUcS"),f=r("sYmb"),m=r("fXoL"),h=r("NFeN"),v=r("bTqV"),y=function(){return["/"]},x=((i=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=m.Ib({type:i,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.Ub(2,"div",2),m.Ub(3,"mat-icon",3),m.Qc(4,"error"),m.Tb(),m.Ub(5,"div",4),m.Ub(6,"h1",5),m.Qc(7,"404"),m.Tb(),m.Ub(8,"div",6),m.Qc(9,"Page Not Found!"),m.Tb(),m.Tb(),m.Tb(),m.Ub(10,"div",7),m.Ub(11,"button",8),m.Qc(12,"Back to Dashboard"),m.Tb(),m.Ub(13,"button",9),m.Qc(14,"Report this Problem"),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t&&(m.Bb(11),m.oc("routerLink",m.tc(1,y)))},directives:[h.a,v.a,d.h],styles:[""]}),i),w=function(){return["/"]},P=((a=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=m.Ib({type:a,selectors:[["app-error"]],decls:15,vars:2,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.Ub(2,"div",2),m.Ub(3,"mat-icon",3),m.Qc(4,"warning"),m.Tb(),m.Ub(5,"div",4),m.Ub(6,"h1",5),m.Qc(7,"500"),m.Tb(),m.Ub(8,"div",6),m.Qc(9,"Server Error!"),m.Tb(),m.Tb(),m.Tb(),m.Ub(10,"div",7),m.Ub(11,"button",8),m.Qc(12,"Back to Dashboard"),m.Tb(),m.Ub(13,"button",9),m.Qc(14,"Report this Problem"),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t&&(m.Bb(11),m.oc("routerLink",m.tc(1,w)))},directives:[h.a,v.a,d.h],styles:[""]}),a),C=r("nZzT"),T=r("0IaG"),_=r("rp8y"),O=r("tZUg"),U=r("dNgK"),k=r("XiUz"),M=((s=function(){function e(n,o,r,i,a,s,c,l,u,g){t(this,e),this.dialogRef=n,this.fpCaptureService=o,this.data=r,this.cdr=i,this.snack=a,this.fingerPrintService=s,this.jwtService=c,this.formBuilder=l,this.ls=u,this.router=g,this.titleMessage="Please use your fingerprint to authenticate",this.contentMessage="Please place your thumb on the fingerprint reader to proceed.",this.totalItems=0,this.totalPages=0,this.flag=!1}return n(e,[{key:"ngOnInit",value:function(){this.custFormGroup=this.formBuilder.group({anyCustomerId:[""]})}},{key:"applyFilter",value:function(t){t.target.value=t.target.value.trim(),this.customerId=t.target.value,console.log("Value : ",this.customerId)}},{key:"getCutomerData",value:function(t){console.log("formData :: ",t)}},{key:"goToClose",value:function(){this.dialogRef.close()}},{key:"scan",value:function(){this.captureFingerPrint("Thumb")}},{key:"captureFingerPrint",value:function(t){var e=this;this.fingerPrintService.CallingSGIFPCapture().subscribe(function(n){console.log("capFingerPrint 29 ::: ",n),console.log("fingerName :: ",t),0==n.ErrorCode?(e.cdr.detectChanges(),console.log("this.customerId :: ",e.customerId),e.saveFingerPrint(n)):e.getError(n.ErrorCode)})}},{key:"getFpDataForMatchOnPageLoad",value:function(t){var e=this;console.log("TemplateBase64 :: ",t),this.fpCaptureService.getCustInfoByFp(0,100,4).subscribe(function(n){console.log("resp:: ",n),e.matchFpFromUi(t,n.data[0])})}},{key:"matchFpFromUi",value:function(t,e){var n=this;this.fpCaptureService.CallingSGIFPMatch(t,e.fpTemplateBase64).subscribe(function(t){if(console.log("fpResp : ",t),t.MatchingScore>=0&&0===t.ErrorCode){n.snack.open("Finger Print Authentication Completed Successfully","OK",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"});var o=e.customerId;return console.log("res",e),n.jwtService.setUserAndToken(e,!0),n.router.navigateByUrl("/others/dashboard"),n.ls.setItem("customer_id",o),n.cdr.markForCheck(),n.cdr.detectChanges(),void n.dialogRef.close({message:"Confirm",custId:o})}return n.snack.open("Finger Print Authentication Failed","error",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"}),void n.getError(t.ErrorCode)})}},{key:"getError",value:function(t){var e=this.fpCaptureService.errorCodeService(t);console.log("error code",e)}},{key:"saveFingerPrint",value:function(t){var e=this;this.fpCaptureService.uploadFingerPrint(t).subscribe(function(t){console.log("after save ",t),e.cdr.markForCheck(),e.snack.open("Captured  Finger","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})}),this.getFpDataForMatchOnPageLoad(t.TemplateBase64)}}]),e}()).\u0275fac=function(t){return new(t||s)(m.Ob(T.g),m.Ob(_.a),m.Ob(T.a),m.Ob(m.h),m.Ob(U.a),m.Ob(_.a),m.Ob(C.a),m.Ob(g.g),m.Ob(O.a),m.Ob(d.g))},s.\u0275cmp=m.Ib({type:s,selectors:[["app-fingerprint"]],decls:19,vars:2,consts:[[2,"background-color","white"],["fxLayout","row",1,"contain",3,"click"],[1,"backIcon"],["fxLayout","column","fxLayoutGap","5%","fxLayoutAlign","space-between center",1,""],[1,"card-title"],[1,"para"],[1,"matIcon"],["mat-flat-button","",1,"buttonScan",3,"click"]],template:function(t,e){1&t&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.cc("click",function(){return e.goToClose()}),m.Ub(2,"mat-icon",2),m.Qc(3,"close"),m.Tb(),m.Tb(),m.Ub(4,"div"),m.Ub(5,"div",3),m.Ub(6,"div"),m.Ub(7,"h3",4),m.Qc(8),m.Tb(),m.Pb(9,"br"),m.Ub(10,"div"),m.Ub(11,"p",5),m.Qc(12),m.Tb(),m.Tb(),m.Tb(),m.Ub(13,"div"),m.Ub(14,"mat-icon",6),m.Qc(15,"fingerprint"),m.Tb(),m.Tb(),m.Ub(16,"div"),m.Ub(17,"button",7),m.cc("click",function(){return e.scan()}),m.Qc(18,"SCAN"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t&&(m.Bb(8),m.Rc(e.titleMessage),m.Bb(4),m.Rc(e.contentMessage))},directives:[k.d,h.a,k.e,k.c,v.a],styles:[".main-div[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}.contain[_ngcontent-%COMP%]{justify-content:flex-end}.text[_ngcontent-%COMP%]{justify-content:center;padding-top:25px}.backIcon[_ngcontent-%COMP%]{cursor:pointer;padding:0;font-size:20px;color:#000}.para[_ngcontent-%COMP%]{color:#000;text-align:center}.matIcon[_ngcontent-%COMP%]{color:#4badf7;padding-right:4rem;font-size:6rem}.card-title[_ngcontent-%COMP%]{font-size:24px;text-align:center}.card-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:sans-serif;color:#000}p[_ngcontent-%COMP%]{font-size:12px}.buttonScan[_ngcontent-%COMP%]{width:170px;border-radius:25px;background-color:#456efe;color:#fff;font-family:sans-serif}.full-width[_ngcontent-%COMP%]{border-radius:10px}"]}),s),I=r("ETNk"),S=r("rmxa"),F=new Uint8Array(16);function D(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(F)}for(var E=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Q=function(t){return"string"==typeof t&&E.test(t)},B=[],j=0;j<256;++j)B.push((j+256).toString(16).substr(1));var N=function(t,e,n){var o=(t=t||{}).random||(t.rng||D)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=o[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(B[t[e+0]]+B[t[e+1]]+B[t[e+2]]+B[t[e+3]]+"-"+B[t[e+4]]+B[t[e+5]]+"-"+B[t[e+6]]+B[t[e+7]]+"-"+B[t[e+8]]+B[t[e+9]]+"-"+B[t[e+10]]+B[t[e+11]]+B[t[e+12]]+B[t[e+13]]+B[t[e+14]]+B[t[e+15]]).toLowerCase();if(!Q(n))throw TypeError("Stringified UUID is invalid");return n}(o)},R=r("nm5K"),A=r("5eHb"),L=r("JqCM"),z=r("kmnG"),q=r("qFsG");function G(t,e){1&t&&(m.Ub(0,"mat-error",22),m.Qc(1," Please enter user Id "),m.Tb())}function K(t,e){1&t&&(m.Ub(0,"mat-error",22),m.Qc(1," Please enter Password "),m.Tb())}var V,Y,J=[{path:"",children:[{path:"signin",component:(V=function(){function e(n,o,r,i,a,s,c,l,u){t(this,e),this.fb=n,this.layout=o,this.router=r,this.jwtService=i,this.themeService=a,this.dialog=s,this.toastr=c,this.apiService=l,this.spinner=u,this.hide=!0}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.browserKey=N(),this.signinForm=this.fb.group({username:["",g.C.required],password:["",g.C.required],systemCode:[this.browserKey]}),this.apiService.getSecurityPolicyDetails().subscribe(function(e){t.security=e[0]})}},{key:"onSubmit",value:function(){var t=this;this.signinForm.invalid?""!==this.signinForm.value.password&&""!==this.signinForm.value.username||this.toastr.error("Error","Please enter login credentials.",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3}):(this.spinner.show(),this.jwtService.loginIcut(this.signinForm.value).subscribe(function(e){console.log("ress",e),t.userResp=e,t.spinner.hide(),null==(null==e?void 0:e.data)&&"Account blocked, Max failed attempts reached"==e.message?t.toastr.error(""+e.message,"Error!",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3}):e&&(t.notifyPswdExpry=t.security.notifyPasswordExpiryInDays,t.pswdExpiry=t.security.pswdExpiry,0===t.pswdExpiry&&0===t.notifyPswdExpry||(t.currentDate=new Date,t.changePwdDate=new Date(t.userResp.pwdChangeDate),console.log(t.changePwdDate),t.differnceInTime=t.currentDate-t.changePwdDate,console.log(t.differnceInTime),t.differnceInDays=Math.floor(t.differnceInTime/864e5),t.finalDiff=t.pswdExpiry-t.differnceInDays,console.log(t.finalDiff,t.pswdExpiry,t.differnceInDays),0===t.finalDiff||t.finalDiff<=0?t.toastr.error("Error!","Your Password is expired. Please reset your password.",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3}):(console.log("if res",e),t.jwtService.setUserAndToken(e,!0),localStorage.setItem("branchName",e.branchName),localStorage.setItem("userName",e.userName),localStorage.setItem("browserId",t.browserKey),localStorage.setItem("tellerid",e.id),console.log(t.finalDiff),t.finalDiff>0&&t.finalDiff<=t.notifyPswdExpry&&"A"==t.security.authStatus&&t.toastr.error("Your password will expire in "+t.finalDiff+" day(s)",""),t.router.navigateByUrl("/others/dashboard"),t.showToast(e))))},function(e){console.log("err",e),t.spinner.hide(),e.error&&t.toastr.error(""+e.error,"Error!",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3})}))}},{key:"onChange",value:function(t){console.log("e",t)}},{key:"changeTheme1",value:function(t){this.layout.applyMatTheme(t)}},{key:"openDialog",value:function(){this.dialog.open(M).afterClosed().subscribe(function(t){console.log("Dialog result: "+t)})}},{key:"showToast",value:function(t){this.toastr.success(""+t.email,"Welcome, ".concat(t.userName,"!"),{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3})}}]),e}(),V.\u0275fac=function(t){return new(t||V)(m.Ob(g.g),m.Ob(S.a),m.Ob(d.g),m.Ob(C.a),m.Ob(I.a),m.Ob(T.b),m.Ob(A.b),m.Ob(R.a),m.Ob(L.c))},V.\u0275cmp=m.Ib({type:V,selectors:[["app-signin"]],decls:40,vars:5,consts:[[1,"login_container"],[1,"login_content"],[1,"login_heading"],[1,"login_subtitle"],["fxLayout","column",1,"login_form"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","type","text","name","username","placeholder","User Id","required",""],["class","errorColour",4,"ngIf"],["matInput","","formControlName","password","name","password","placeholder","********","required","",3,"type"],["matSuffix","",2,"cursor","pointer",3,"click"],[1,"login_link_button"],["mat-raised-button","",1,"login_sigin",3,"click"],[1,"login_alternate_signin"],[1,"login_horizontal"],[1,"login_alternate_text"],[1,"login_methods"],["mat-raised-button","",1,"login_button",3,"click"],[1,"loginMethodCard"],["mat-raised-button","",1,"login_button"],[1,"login_image"],["src","assets/images/login-image.png"],[1,"errorColour"]],template:function(t,e){1&t&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.Ub(2,"h1",2),m.Qc(3,"Demo Bank"),m.Tb(),m.Ub(4,"h2",3),m.Qc(5,"Welcome to DemoBank!"),m.Tb(),m.Ub(6,"div",4),m.Ub(7,"form",5),m.cc("ngSubmit",function(){return e.onSubmit()}),m.Ub(8,"mat-form-field",6),m.Ub(9,"mat-label"),m.Qc(10,"User Id"),m.Tb(),m.Pb(11,"input",7),m.Oc(12,G,2,0,"mat-error",8),m.Tb(),m.Ub(13,"mat-form-field",6),m.Ub(14,"mat-label"),m.Qc(15,"Password"),m.Tb(),m.Pb(16,"input",9),m.Ub(17,"mat-icon",10),m.cc("click",function(){return e.hide=!e.hide}),m.Qc(18),m.Tb(),m.Oc(19,K,2,0,"mat-error",8),m.Tb(),m.Ub(20,"button",11),m.Qc(21,"Forgot Password?"),m.Tb(),m.Ub(22,"button",12),m.cc("click",function(t){return e.onChange(t)}),m.Qc(23,"Sign In"),m.Tb(),m.Tb(),m.Ub(24,"div",13),m.Pb(25,"div",14),m.Ub(26,"div",15),m.Qc(27,"Or sign in using"),m.Tb(),m.Pb(28,"div",14),m.Tb(),m.Ub(29,"div",16),m.Ub(30,"button",17),m.cc("click",function(){return e.openDialog()}),m.Ub(31,"mat-icon",18),m.Qc(32,"fingerprint"),m.Tb(),m.Qc(33,"FingerPrint"),m.Tb(),m.Ub(34,"button",19),m.Ub(35,"mat-icon",18),m.Qc(36,"face"),m.Tb(),m.Qc(37,"Face Id"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(38,"div",20),m.Pb(39,"img",21),m.Tb(),m.Tb()),2&t&&(m.Bb(7),m.oc("formGroup",e.signinForm),m.Bb(5),m.oc("ngIf",e.signinForm.get("username").hasError("required")),m.Bb(4),m.oc("type",e.hide?"password":"text"),m.Bb(2),m.Rc(e.hide?"visibility_off":"visibility"),m.Bb(1),m.oc("ngIf",e.signinForm.get("password").hasError("required")))},directives:[k.d,g.D,g.u,g.l,z.c,z.g,q.b,g.d,g.t,g.j,g.B,u.n,h.a,z.i,v.a,z.b],styles:[".login_container[_ngcontent-%COMP%]{padding:40px;display:flex;justify-content:center}.login_subtitle[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:28px;padding-left:16px}.login_form[_ngcontent-%COMP%]{max-width:408px;width:100%;padding-left:16px;display:flex;flex-direction:column;gap:16px}.login_content[_ngcontent-%COMP%]{width:100%;max-width:568px;gap:16px;padding-left:20px}.login_heading[_ngcontent-%COMP%]{letter-spacing:0;color:#004c97}.login_link_button[_ngcontent-%COMP%]{color:#004c97;outline:none;background:none;box-shadow:none;border:none;align-self:flex-end;font-weight:700;margin-top:-10px;float:right}.login_horizontal[_ngcontent-%COMP%]{height:2px;width:100%;background-color:#004c97;height:1px;flex-grow:1;align-self:center}.login_alternate_text[_ngcontent-%COMP%]{width:100%;align-self:center;margin:auto;text-align:center;color:#004c97;font-weight:700}.login_button[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;align-items:center;width:100%;height:58px;background:#fff 0 0 no-repeat padding-box;box-shadow:3px 3px 15px rgba(0,0,0,.058823529411764705);border-radius:15px;border:none}.login_alternate_signin[_ngcontent-%COMP%]{display:flex;margin-top:20px}.login_sigin[_ngcontent-%COMP%]{background:transparent linear-gradient(90deg,#051a2d,#004c97) 0 0 no-repeat padding-box;border-radius:24px;opacity:1;padding:5px;width:100%;color:#fff;margin-top:20px}.login_image[_ngcontent-%COMP%]{display:block;display:flex;overflow:hidden;max-width:760px;min-height:520px;max-height:calc(100vh - 80px)}.login_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:cover;object-fit:cover}.login_methods[_ngcontent-%COMP%]{display:flex;gap:16px}@media screen and (max-width:1023px){.login_image[_ngcontent-%COMP%]{display:none}.login_content[_ngcontent-%COMP%]{padding-left:0;max-width:408px}}@media screen and (max-width:767px){.login_container[_ngcontent-%COMP%]{padding:20px}.login_form[_ngcontent-%COMP%]{padding-left:0}.login_subtitle[_ngcontent-%COMP%]{margin:16px 0}}[_nghost-%COMP%]     .mat-form-field-outline-start{border-radius:15px 0 0 15px!important;min-width:10px!important}[_nghost-%COMP%]     .mat-form-field-outline-end{border-radius:0 15px 15px 0!important}.loginMethodCard[_ngcontent-%COMP%]{margin-right:20px;color:#004c97}"]}),V),data:{title:"Signin"}},{path:"404",component:x,data:{title:"Not Found"}},{path:"error",component:P,data:{title:"Error"}}]}],W=((Y=n(function e(){t(this,e)})).\u0275mod=m.Mb({type:Y}),Y.\u0275inj=m.Lb({factory:function(t){return new(t||Y)},imports:[[u.c,g.n,f.b,g.A,p.a,b.a,l.c,L.b,d.k.forChild(J)]]}),Y)}}])}();