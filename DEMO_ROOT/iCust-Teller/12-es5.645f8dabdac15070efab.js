!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4fRq":function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);t.exports=function(){return n(o),o}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}},EcEN:function(t,e,n){var o=n("xDdU"),r=n("xk4V"),i=r;i.v1=o,i.v4=r,t.exports=i},I2ZF:function(t,e){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);t.exports=function(t,e){var o=e||0;return[n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]]].join("")}},VVaf:function(e,o,r){"use strict";r.r(o),r.d(o,"SessionsModule",function(){return z});var i,a,s,c=r("Kdsb"),l=r("ofXK"),u=r("3Pt+"),d=r("tyNb"),g=r("zMWy"),p=r("YUcS"),b=r("sYmb"),f=r("fXoL"),m=r("NFeN"),h=r("bTqV"),v=function(){return["/"]},y=((i=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=f.Ib({type:i,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(f.Ub(0,"div",0),f.Ub(1,"div",1),f.Ub(2,"div",2),f.Ub(3,"mat-icon",3),f.Qc(4,"error"),f.Tb(),f.Ub(5,"div",4),f.Ub(6,"h1",5),f.Qc(7,"404"),f.Tb(),f.Ub(8,"div",6),f.Qc(9,"Page Not Found!"),f.Tb(),f.Tb(),f.Tb(),f.Ub(10,"div",7),f.Ub(11,"button",8),f.Qc(12,"Back to Dashboard"),f.Tb(),f.Ub(13,"button",9),f.Qc(14,"Report this Problem"),f.Tb(),f.Tb(),f.Tb(),f.Tb()),2&t&&(f.Bb(11),f.oc("routerLink",f.tc(1,v)))},directives:[m.a,h.a,d.h],styles:[""]}),i),x=function(){return["/"]},w=((a=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f.Ib({type:a,selectors:[["app-error"]],decls:15,vars:2,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(f.Ub(0,"div",0),f.Ub(1,"div",1),f.Ub(2,"div",2),f.Ub(3,"mat-icon",3),f.Qc(4,"warning"),f.Tb(),f.Ub(5,"div",4),f.Ub(6,"h1",5),f.Qc(7,"500"),f.Tb(),f.Ub(8,"div",6),f.Qc(9,"Server Error!"),f.Tb(),f.Tb(),f.Tb(),f.Ub(10,"div",7),f.Ub(11,"button",8),f.Qc(12,"Back to Dashboard"),f.Tb(),f.Ub(13,"button",9),f.Qc(14,"Report this Problem"),f.Tb(),f.Tb(),f.Tb(),f.Tb()),2&t&&(f.Bb(11),f.oc("routerLink",f.tc(1,x)))},directives:[m.a,h.a,d.h],styles:[""]}),a),C=r("nZzT"),P=r("0IaG"),O=r("rp8y"),_=r("tZUg"),T=r("dNgK"),k=r("XiUz"),U=((s=function(){function e(n,o,r,i,a,s,c,l,u){t(this,e),this.dialogRef=n,this.fpCaptureService=o,this.data=r,this.cdr=i,this.snack=a,this.jwtService=s,this.formBuilder=c,this.ls=l,this.router=u,this.titleMessage="Please use your fingerprint to authenticate",this.contentMessage="Please place your thumb on the fingerprint reader to proceed.",this.totalItems=0,this.totalPages=0,this.flag=!1}return n(e,[{key:"ngOnInit",value:function(){this.custFormGroup=this.formBuilder.group({anyCustomerId:[""]})}},{key:"applyFilter",value:function(t){t.target.value=t.target.value.trim(),this.customerId=t.target.value,console.log("Value : ",this.customerId)}},{key:"getCutomerData",value:function(t){console.log("formData :: ",t)}},{key:"goToClose",value:function(){this.dialogRef.close()}},{key:"captureFingerPrintHttps",value:function(){var t=this;console.log("in component"),this.fpCaptureService.CallingSGIFPCapture().subscribe(function(e){console.log("capturedData:: ",e),0==e.ErrorCode?(t.snack.open("Finding ,is registed customer","OK",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"}),t.getFpDataForMatchOnPageLoad(e.TemplateBase64)):t.getError(e.ErrorCode)},function(e){t.snack.open(""+e,"OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}},{key:"getFpDataForMatchOnPageLoad",value:function(t){var e=this;console.log("TemplateBase64 :: ",t),this.fpCaptureService.getCustInfoByFp(0,100,4).subscribe(function(n){if(console.log("resp:: ",n),n.totalPages-1==0)Object.keys(n.data).forEach(function(o){e.matchFpFromUi(t,n.data[o])});else for(var o=0;o<n.totalPages;o++)0==o&&Object.keys(n.data).forEach(function(o){e.matchFpFromUi(t,n.data[o])})})}},{key:"matchFpFromUi",value:function(t,e){var n=this;this.fpCaptureService.CallingSGIFPMatch(t,e.fpTemplateBase64).subscribe(function(t){if(console.log("fpResp : ",t),t.MatchingScore>=100){var o=e.customerId;return console.log("res",e),n.jwtService.setUserAndToken(e,!0),n.router.navigateByUrl("/others/dashboard"),n.ls.setItem("customer_id",o),n.cdr.markForCheck(),n.cdr.detectChanges(),n.dialogRef.close({message:"Confirm",custId:o}),void n.snack.open("User found : "+e.customerId,"OK",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"})}})}},{key:"getError",value:function(t){var e=this.fpCaptureService.errorCodeService(t);console.log("error code",e)}},{key:"saveBiometric",value:function(t,e,n){var o=this;this.fpCaptureService.saveBiometric(t,e,n,"Kisok Authenticate").subscribe(function(t){console.log("after save ",t),o.cdr.markForCheck(),o.snack.open("Captured "+e+" Finger","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}}]),e}()).\u0275fac=function(t){return new(t||s)(f.Ob(P.g),f.Ob(O.a),f.Ob(P.a),f.Ob(f.h),f.Ob(T.a),f.Ob(C.a),f.Ob(u.g),f.Ob(_.a),f.Ob(d.g))},s.\u0275cmp=f.Ib({type:s,selectors:[["app-fingerprint"]],decls:19,vars:2,consts:[[2,"background-color","white"],["fxLayout","row",1,"contain",3,"click"],[1,"backIcon"],["fxLayout","column","fxLayoutGap","5%","fxLayoutAlign","space-between center",1,""],[1,"card-title"],[1,"para"],[1,"matIcon"],["mat-flat-button","",1,"buttonScan",3,"click"]],template:function(t,e){1&t&&(f.Ub(0,"div",0),f.Ub(1,"div",1),f.cc("click",function(){return e.goToClose()}),f.Ub(2,"mat-icon",2),f.Qc(3,"close"),f.Tb(),f.Tb(),f.Ub(4,"div"),f.Ub(5,"div",3),f.Ub(6,"div"),f.Ub(7,"h3",4),f.Qc(8),f.Tb(),f.Pb(9,"br"),f.Ub(10,"div"),f.Ub(11,"p",5),f.Qc(12),f.Tb(),f.Tb(),f.Tb(),f.Ub(13,"div"),f.Ub(14,"mat-icon",6),f.Qc(15,"fingerprint"),f.Tb(),f.Tb(),f.Ub(16,"div"),f.Ub(17,"button",7),f.cc("click",function(){return e.captureFingerPrintHttps()}),f.Qc(18,"SCAN"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb()),2&t&&(f.Bb(8),f.Rc(e.titleMessage),f.Bb(4),f.Rc(e.contentMessage))},directives:[k.d,m.a,k.e,k.c,h.a],styles:[".main-div[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}.contain[_ngcontent-%COMP%]{justify-content:flex-end}.text[_ngcontent-%COMP%]{justify-content:center;padding-top:25px}.backIcon[_ngcontent-%COMP%]{cursor:pointer;padding:0;font-size:20px;color:#000}.para[_ngcontent-%COMP%]{color:#000;text-align:center}.matIcon[_ngcontent-%COMP%]{color:#4badf7;padding-right:4rem;font-size:6rem}.card-title[_ngcontent-%COMP%]{font-size:24px;text-align:center}.card-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:sans-serif;color:#000}p[_ngcontent-%COMP%]{font-size:12px}.buttonScan[_ngcontent-%COMP%]{width:170px;border-radius:25px;background-color:#456efe;color:#fff;font-family:sans-serif}.full-width[_ngcontent-%COMP%]{border-radius:10px}"]}),s),M=r("ETNk"),I=r("rmxa"),F=r("EcEN"),S=r("nm5K"),D=r("5eHb"),E=r("JqCM"),B=r("kmnG"),Q=r("qFsG");function j(t,e){1&t&&(f.Ub(0,"mat-error",22),f.Qc(1," Please enter user Id "),f.Tb())}function R(t,e){1&t&&(f.Ub(0,"mat-error",22),f.Qc(1," Please enter Password "),f.Tb())}var N,A,q=[{path:"",children:[{path:"signin",component:(N=function(){function e(n,o,r,i,a,s,c,l,u){t(this,e),this.fb=n,this.layout=o,this.router=r,this.jwtService=i,this.themeService=a,this.dialog=s,this.toastr=c,this.apiService=l,this.spinner=u,this.hide=!0}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.browserKey=Object(F.v4)(),this.signinForm=this.fb.group({username:["",u.C.required],password:["",u.C.required],systemCode:[this.browserKey]}),this.apiService.getSecurityPolicyDetails().subscribe(function(e){t.security=e[0]})}},{key:"onSubmit",value:function(){var t=this;this.signinForm.invalid?""!==this.signinForm.value.password&&""!==this.signinForm.value.username||this.toastr.error("Error","Please enter login credentials.",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3}):(this.spinner.show(),this.jwtService.loginIcut(this.signinForm.value).subscribe(function(e){console.log("ress",e),t.userResp=e,t.spinner.hide(),null==(null==e?void 0:e.data)&&"Account blocked, Max failed attempts reached"==e.message?t.toastr.error(""+e.message,"Error!",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3}):e&&(t.notifyPswdExpry=t.security.notifyPasswordExpiryInDays,t.pswdExpiry=t.security.pswdExpiry,0===t.pswdExpiry&&0===t.notifyPswdExpry||(t.currentDate=new Date,t.changePwdDate=new Date(t.userResp.pwdChangeDate),console.log(t.changePwdDate),t.differnceInTime=t.currentDate-t.changePwdDate,console.log(t.differnceInTime),t.differnceInDays=Math.floor(t.differnceInTime/864e5),t.finalDiff=t.pswdExpiry-t.differnceInDays,console.log(t.finalDiff,t.pswdExpiry,t.differnceInDays),0===t.finalDiff||t.finalDiff<=0?t.toastr.error("Error!","Your Password is expired. Please reset your password.",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3}):(console.log("if res",e),t.jwtService.setUserAndToken(e,!0),localStorage.setItem("branchName",e.branchName),localStorage.setItem("userName",e.userName),localStorage.setItem("browserId",t.browserKey),localStorage.setItem("tellerid",e.id),console.log(t.finalDiff),t.finalDiff>0&&t.finalDiff<=t.notifyPswdExpry&&"A"==t.security.authStatus&&t.toastr.error("Your password will expire in "+t.finalDiff+" day(s)",""),t.router.navigateByUrl("/others/dashboard"),t.showToast(e))))},function(e){console.log("err",e),t.spinner.hide(),e.error&&t.toastr.error(""+e.error,"Error!",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3})}))}},{key:"onChange",value:function(t){console.log("e",t)}},{key:"changeTheme1",value:function(t){this.layout.applyMatTheme(t)}},{key:"openDialog",value:function(){this.dialog.open(U).afterClosed().subscribe(function(t){console.log("Dialog result: "+t)})}},{key:"showToast",value:function(t){this.toastr.success(""+t.email,"Welcome, ".concat(t.userName,"!"),{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3})}}]),e}(),N.\u0275fac=function(t){return new(t||N)(f.Ob(u.g),f.Ob(I.a),f.Ob(d.g),f.Ob(C.a),f.Ob(M.a),f.Ob(P.b),f.Ob(D.b),f.Ob(S.a),f.Ob(E.c))},N.\u0275cmp=f.Ib({type:N,selectors:[["app-signin"]],decls:40,vars:5,consts:[[1,"login_container"],[1,"login_content"],[1,"login_heading"],[1,"login_subtitle"],["fxLayout","column",1,"login_form"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","type","text","name","username","placeholder","User Id","required",""],["class","errorColour",4,"ngIf"],["matInput","","formControlName","password","name","password","placeholder","********","required","",3,"type"],["matSuffix","",2,"cursor","pointer",3,"click"],[1,"login_link_button"],["mat-raised-button","",1,"login_sigin",3,"click"],[1,"login_alternate_signin"],[1,"login_horizontal"],[1,"login_alternate_text"],[1,"login_methods"],["mat-raised-button","",1,"login_button",3,"click"],[1,"loginMethodCard"],["mat-raised-button","",1,"login_button"],[1,"login_image"],["src","assets/images/login-image.png"],[1,"errorColour"]],template:function(t,e){1&t&&(f.Ub(0,"div",0),f.Ub(1,"div",1),f.Ub(2,"h1",2),f.Qc(3,"Demo Bank"),f.Tb(),f.Ub(4,"h2",3),f.Qc(5,"Welcome to DemoBank!"),f.Tb(),f.Ub(6,"div",4),f.Ub(7,"form",5),f.cc("ngSubmit",function(){return e.onSubmit()}),f.Ub(8,"mat-form-field",6),f.Ub(9,"mat-label"),f.Qc(10,"User Id"),f.Tb(),f.Pb(11,"input",7),f.Oc(12,j,2,0,"mat-error",8),f.Tb(),f.Ub(13,"mat-form-field",6),f.Ub(14,"mat-label"),f.Qc(15,"Password"),f.Tb(),f.Pb(16,"input",9),f.Ub(17,"mat-icon",10),f.cc("click",function(){return e.hide=!e.hide}),f.Qc(18),f.Tb(),f.Oc(19,R,2,0,"mat-error",8),f.Tb(),f.Ub(20,"button",11),f.Qc(21,"Forgot Password?"),f.Tb(),f.Ub(22,"button",12),f.cc("click",function(t){return e.onChange(t)}),f.Qc(23,"Sign In"),f.Tb(),f.Tb(),f.Ub(24,"div",13),f.Pb(25,"div",14),f.Ub(26,"div",15),f.Qc(27,"Or sign in using"),f.Tb(),f.Pb(28,"div",14),f.Tb(),f.Ub(29,"div",16),f.Ub(30,"button",17),f.cc("click",function(){return e.openDialog()}),f.Ub(31,"mat-icon",18),f.Qc(32,"fingerprint"),f.Tb(),f.Qc(33,"FingerPrint"),f.Tb(),f.Ub(34,"button",19),f.Ub(35,"mat-icon",18),f.Qc(36,"face"),f.Tb(),f.Qc(37,"Face Id"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(38,"div",20),f.Pb(39,"img",21),f.Tb(),f.Tb()),2&t&&(f.Bb(7),f.oc("formGroup",e.signinForm),f.Bb(5),f.oc("ngIf",e.signinForm.get("username").hasError("required")),f.Bb(4),f.oc("type",e.hide?"password":"text"),f.Bb(2),f.Rc(e.hide?"visibility_off":"visibility"),f.Bb(1),f.oc("ngIf",e.signinForm.get("password").hasError("required")))},directives:[k.d,u.D,u.u,u.l,B.c,B.g,Q.b,u.d,u.t,u.j,u.B,l.n,m.a,B.i,h.a,B.b],styles:[".login_container[_ngcontent-%COMP%]{padding:40px;display:flex;justify-content:center}.login_subtitle[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:28px;padding-left:16px}.login_form[_ngcontent-%COMP%]{max-width:408px;width:100%;padding-left:16px;display:flex;flex-direction:column;gap:16px}.login_content[_ngcontent-%COMP%]{width:100%;max-width:568px;gap:16px;padding-left:20px}.login_heading[_ngcontent-%COMP%]{letter-spacing:0;color:#004c97}.login_link_button[_ngcontent-%COMP%]{color:#004c97;outline:none;background:none;box-shadow:none;border:none;align-self:flex-end;font-weight:700;margin-top:-10px;float:right}.login_horizontal[_ngcontent-%COMP%]{height:2px;width:100%;background-color:#004c97;height:1px;flex-grow:1;align-self:center}.login_alternate_text[_ngcontent-%COMP%]{width:100%;align-self:center;margin:auto;text-align:center;color:#004c97;font-weight:700}.login_button[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;align-items:center;width:100%;height:58px;background:#fff 0 0 no-repeat padding-box;box-shadow:3px 3px 15px rgba(0,0,0,.058823529411764705);border-radius:15px;border:none}.login_alternate_signin[_ngcontent-%COMP%]{display:flex;margin-top:20px}.login_sigin[_ngcontent-%COMP%]{background:transparent linear-gradient(90deg,#051a2d,#004c97) 0 0 no-repeat padding-box;border-radius:24px;opacity:1;padding:5px;width:100%;color:#fff;margin-top:20px}.login_image[_ngcontent-%COMP%]{display:block;display:flex;overflow:hidden;max-width:760px;min-height:520px;max-height:calc(100vh - 80px)}.login_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:cover;object-fit:cover}.login_methods[_ngcontent-%COMP%]{display:flex;gap:16px}@media screen and (max-width:1023px){.login_image[_ngcontent-%COMP%]{display:none}.login_content[_ngcontent-%COMP%]{padding-left:0;max-width:408px}}@media screen and (max-width:767px){.login_container[_ngcontent-%COMP%]{padding:20px}.login_form[_ngcontent-%COMP%]{padding-left:0}.login_subtitle[_ngcontent-%COMP%]{margin:16px 0}}[_nghost-%COMP%]     .mat-form-field-outline-start{border-radius:15px 0 0 15px!important;min-width:10px!important}[_nghost-%COMP%]     .mat-form-field-outline-end{border-radius:0 15px 15px 0!important}.loginMethodCard[_ngcontent-%COMP%]{margin-right:20px;color:#004c97}"]}),N),data:{title:"Signin"}},{path:"404",component:y,data:{title:"Not Found"}},{path:"error",component:w,data:{title:"Error"}}]}],z=((A=n(function e(){t(this,e)})).\u0275mod=f.Mb({type:A}),A.\u0275inj=f.Lb({factory:function(t){return new(t||A)},imports:[[l.c,u.n,b.b,u.A,g.a,p.a,c.c,E.b,d.k.forChild(q)]]}),A)},xDdU:function(t,e,n){var o,r,i=n("4fRq"),a=n("I2ZF"),s=0,c=0;t.exports=function(t,e,n){var l=e&&n||0,u=e||[],d=(t=t||{}).node||o,g=void 0!==t.clockseq?t.clockseq:r;if(null==d||null==g){var p=i();null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==g&&(g=r=16383&(p[6]<<8|p[7]))}var b=void 0!==t.msecs?t.msecs:(new Date).getTime(),f=void 0!==t.nsecs?t.nsecs:c+1,m=b-s+(f-c)/1e4;if(m<0&&void 0===t.clockseq&&(g=g+1&16383),(m<0||b>s)&&void 0===t.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=b,c=f,r=g;var h=(1e4*(268435455&(b+=122192928e5))+f)%4294967296;u[l++]=h>>>24&255,u[l++]=h>>>16&255,u[l++]=h>>>8&255,u[l++]=255&h;var v=b/4294967296*1e4&268435455;u[l++]=v>>>8&255,u[l++]=255&v,u[l++]=v>>>24&15|16,u[l++]=v>>>16&255,u[l++]=g>>>8|128,u[l++]=255&g;for(var y=0;y<6;++y)u[l+y]=d[y];return e||a(u)}},xk4V:function(t,e,n){var o=n("4fRq"),r=n("I2ZF");t.exports=function(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var a=(t=t||{}).random||(t.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var s=0;s<16;++s)e[i+s]=a[s];return e||r(a)}}}])}();