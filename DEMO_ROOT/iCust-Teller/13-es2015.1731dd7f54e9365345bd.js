(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{VVaf:function(t,e,r){"use strict";r.r(e),r.d(e,"SessionsModule",function(){return q});var o=r("Kdsb"),n=r("ofXK"),i=r("3Pt+"),s=r("tyNb"),a=r("zMWy"),c=r("YUcS"),l=r("sYmb"),b=r("fXoL"),u=r("NFeN"),d=r("bTqV");const p=function(){return["/"]};let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Ib({type:t,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Ub(1,"div",1),b.Ub(2,"div",2),b.Ub(3,"mat-icon",3),b.Pc(4,"error"),b.Tb(),b.Ub(5,"div",4),b.Ub(6,"h1",5),b.Pc(7,"404"),b.Tb(),b.Ub(8,"div",6),b.Pc(9,"Page Not Found!"),b.Tb(),b.Tb(),b.Tb(),b.Ub(10,"div",7),b.Ub(11,"button",8),b.Pc(12,"Back to Dashboard"),b.Tb(),b.Ub(13,"button",9),b.Pc(14,"Report this Problem"),b.Tb(),b.Tb(),b.Tb(),b.Tb()),2&t&&(b.Bb(11),b.nc("routerLink",b.sc(1,p)))},directives:[u.a,d.a,s.h],styles:[""]}),t})();const h=function(){return["/"]};let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Ib({type:t,selectors:[["app-error"]],decls:15,vars:2,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Ub(1,"div",1),b.Ub(2,"div",2),b.Ub(3,"mat-icon",3),b.Pc(4,"warning"),b.Tb(),b.Ub(5,"div",4),b.Ub(6,"h1",5),b.Pc(7,"500"),b.Tb(),b.Ub(8,"div",6),b.Pc(9,"Server Error!"),b.Tb(),b.Tb(),b.Tb(),b.Ub(10,"div",7),b.Ub(11,"button",8),b.Pc(12,"Back to Dashboard"),b.Tb(),b.Ub(13,"button",9),b.Pc(14,"Report this Problem"),b.Tb(),b.Tb(),b.Tb(),b.Tb()),2&t&&(b.Bb(11),b.nc("routerLink",b.sc(1,h)))},directives:[u.a,d.a,s.h],styles:[""]}),t})();var f=r("nZzT"),v=r("0IaG"),P=r("rp8y"),y=r("tZUg"),U=r("dNgK"),T=r("XiUz");let C=(()=>{class t{constructor(t,e,r,o,n,i,s,a,c){this.dialogRef=t,this.fpCaptureService=e,this.data=r,this.cdr=o,this.snack=n,this.jwtService=i,this.formBuilder=s,this.ls=a,this.router=c,this.titleMessage="Please use your fingerprint to authenticate",this.contentMessage="Please place your thumb on the fingerprint reader to proceed.",this.totalItems=0,this.totalPages=0,this.flag=!1}ngOnInit(){this.custFormGroup=this.formBuilder.group({anyCustomerId:[""]})}applyFilter(t){t.target.value=t.target.value.trim(),this.customerId=t.target.value,console.log("Value : ",this.customerId)}getCutomerData(t){console.log("formData :: ",t)}goToClose(){this.dialogRef.close()}captureFingerPrintHttps(){console.log("in component"),this.fpCaptureService.CallingSGIFPCapture().subscribe(t=>{console.log("capturedData:: ",t),0==t.ErrorCode?(this.snack.open("Finding ,is registed customer","OK",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"}),this.getFpDataForMatchOnPageLoad(t.TemplateBase64)):this.getError(t.ErrorCode)},t=>{this.snack.open(""+t,"OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}getFpDataForMatchOnPageLoad(t){console.log("TemplateBase64 :: ",t),this.fpCaptureService.getCustInfoByFp(0,100,4).subscribe(e=>{if(console.log("resp:: ",e),e.totalPages-1==0)Object.keys(e.data).forEach(r=>{this.matchFpFromUi(t,e.data[r])});else for(let r=0;r<e.totalPages;r++)0==r&&Object.keys(e.data).forEach(r=>{this.matchFpFromUi(t,e.data[r])})})}matchFpFromUi(t,e){this.fpCaptureService.CallingSGIFPMatch(t,e.fpTemplateBase64).subscribe(t=>{if(console.log("fpResp : ",t),t.MatchingScore>=100){let t=e.customerId;return console.log("res",e),this.jwtService.setUserAndToken(e,!0),this.router.navigateByUrl("/others/dashboard"),this.ls.setItem("customer_id",t),this.cdr.markForCheck(),this.cdr.detectChanges(),this.dialogRef.close({message:"Confirm",custId:t}),void this.snack.open("User found : "+e.customerId,"OK",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"})}})}getError(t){let e=this.fpCaptureService.errorCodeService(t);console.log("error code",e)}saveBiometric(t,e,r){this.fpCaptureService.saveBiometric(t,e,r,"Kisok Authenticate").subscribe(t=>{console.log("after save ",t),this.cdr.markForCheck(),this.snack.open("Captured "+e+" Finger","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}}return t.\u0275fac=function(e){return new(e||t)(b.Ob(v.g),b.Ob(P.a),b.Ob(v.a),b.Ob(b.h),b.Ob(U.a),b.Ob(f.a),b.Ob(i.e),b.Ob(y.a),b.Ob(s.g))},t.\u0275cmp=b.Ib({type:t,selectors:[["app-fingerprint"]],decls:19,vars:2,consts:[[2,"background-color","white"],["fxLayout","row",1,"contain",3,"click"],[1,"backIcon"],["fxLayout","column","fxLayoutGap","5%","fxLayoutAlign","space-between center",1,""],[1,"card-title"],[1,"para"],[1,"matIcon"],["mat-flat-button","",1,"buttonScan",3,"click"]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Ub(1,"div",1),b.cc("click",function(){return e.goToClose()}),b.Ub(2,"mat-icon",2),b.Pc(3,"close"),b.Tb(),b.Tb(),b.Ub(4,"div"),b.Ub(5,"div",3),b.Ub(6,"div"),b.Ub(7,"h3",4),b.Pc(8),b.Tb(),b.Pb(9,"br"),b.Ub(10,"div"),b.Ub(11,"p",5),b.Pc(12),b.Tb(),b.Tb(),b.Tb(),b.Ub(13,"div"),b.Ub(14,"mat-icon",6),b.Pc(15,"fingerprint"),b.Tb(),b.Tb(),b.Ub(16,"div"),b.Ub(17,"button",7),b.cc("click",function(){return e.captureFingerPrintHttps()}),b.Pc(18,"SCAN"),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Tb()),2&t&&(b.Bb(8),b.Qc(e.titleMessage),b.Bb(4),b.Qc(e.contentMessage))},directives:[T.d,u.a,T.e,T.c,d.a],styles:[".main-div[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}.contain[_ngcontent-%COMP%]{justify-content:flex-end}.text[_ngcontent-%COMP%]{justify-content:center;padding-top:25px}.backIcon[_ngcontent-%COMP%]{cursor:pointer;padding:0;font-size:20px;color:#000}.para[_ngcontent-%COMP%]{color:#000;text-align:center}.matIcon[_ngcontent-%COMP%]{color:#4badf7;padding-right:4rem;font-size:6rem}.card-title[_ngcontent-%COMP%]{font-size:24px;text-align:center}.card-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:sans-serif;color:#000}p[_ngcontent-%COMP%]{font-size:12px}.buttonScan[_ngcontent-%COMP%]{width:170px;border-radius:25px;background-color:#456efe;color:#fff;font-family:sans-serif}.full-width[_ngcontent-%COMP%]{border-radius:10px}"]}),t})();var w,O=r("ETNk"),k=r("rmxa"),x=new Uint8Array(16);function I(){if(!w&&!(w="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(x)}for(var S=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,F=function(t){return"string"==typeof t&&S.test(t)},M=[],B=0;B<256;++B)M.push((B+256).toString(16).substr(1));var L=function(t,e,r){var o=(t=t||{}).random||(t.rng||I)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){r=r||0;for(var n=0;n<16;++n)e[r+n]=o[n];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(M[t[e+0]]+M[t[e+1]]+M[t[e+2]]+M[t[e+3]]+"-"+M[t[e+4]]+M[t[e+5]]+"-"+M[t[e+6]]+M[t[e+7]]+"-"+M[t[e+8]]+M[t[e+9]]+"-"+M[t[e+10]]+M[t[e+11]]+M[t[e+12]]+M[t[e+13]]+M[t[e+14]]+M[t[e+15]]).toLowerCase();if(!F(r))throw TypeError("Stringified UUID is invalid");return r}(o)},N=r("5eHb"),_=r("JqCM"),z=r("kmnG"),j=r("qFsG"),E=r("f0Cb");function R(t,e){1&t&&(b.Ub(0,"mat-error",20),b.Pc(1," Please enter user Id "),b.Tb())}function A(t,e){1&t&&(b.Ub(0,"mat-error",20),b.Pc(1," Please enter Password "),b.Tb())}const D=function(){return{}},K=[{path:"",children:[{path:"signin",component:(()=>{class t{constructor(t,e,r,o,n,i,s,a){this.fb=t,this.layout=e,this.router=r,this.jwtService=o,this.themeService=n,this.dialog=i,this.toastr=s,this.spinner=a,this.hide=!0}ngOnInit(){this.browserKey=L(),this.signinForm=this.fb.group({username:["",i.z.required],password:["",i.z.required],systemCode:[this.browserKey]})}onSubmit(){this.signinForm.invalid||(this.spinner.show(),this.jwtService.loginIcut(this.signinForm.value).subscribe(t=>{console.log("ress",t),this.spinner.hide(),t&&(console.log("if res",t),this.jwtService.setUserAndToken(t,!0),localStorage.setItem("branchName",t.branchName),localStorage.setItem("userName",t.userName),localStorage.setItem("browserId",this.browserKey),this.router.navigateByUrl("/others/dashboard"),this.showToast(t))},t=>{console.log("err",t),this.spinner.hide(),t.error&&this.toastr.error(""+t.error.message,"Error!",{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3})}))}onChange(t){console.log("e",t)}changeTheme1(t){this.layout.applyMatTheme(t)}openDialog(){this.dialog.open(C).afterClosed().subscribe(t=>{console.log("Dialog result: "+t)})}showToast(t){this.toastr.success(""+t.email,`Welcome, ${t.userName}!`,{progressAnimation:"decreasing",progressBar:!0,positionClass:"toast-top-right",timeOut:3e3})}}return t.\u0275fac=function(e){return new(e||t)(b.Ob(i.e),b.Ob(k.a),b.Ob(s.g),b.Ob(f.a),b.Ob(O.a),b.Ob(v.b),b.Ob(N.b),b.Ob(_.c))},t.\u0275cmp=b.Ib({type:t,selectors:[["app-signin"]],decls:29,vars:7,consts:[[1,"seciton-left"],[1,"section-left-content"],[1,"text-36","font-weight-light"],[1,"mb-24","text-small"],[1,"form-holder","h-full-screen","mat-bg-card","mat-elevation-z4",3,"perfectScrollbar"],["fxLayout","column",1,"signup-form",3,"formGroup","ngSubmit"],[1,"form-headline","text-center","mb-32"],[1,"font-weight-light"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"mb-48"],["width","200px","src","assets/images/logo.png","alt",""],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","type","text","name","username","placeholder","User Id","required",""],["class","errorColour",4,"ngIf"],["matInput","","formControlName","password","name","password","placeholder","********","required","",3,"type"],["matSuffix","",2,"cursor","pointer",3,"click"],["mat-raised-button","","color","primary",1,"btnclr",3,"click"],[1,"my-32"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"mb-48",3,"click"],["width","90px","height","90px","src","assets/images/fingerprint.png","alt",""],["size","small","type","square-loader"],[1,"errorColour"]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Ub(1,"div",1),b.Pb(2,"h1",2),b.Pb(3,"p",3),b.Tb(),b.Tb(),b.Ub(4,"div",4),b.Ub(5,"form",5),b.cc("ngSubmit",function(){return e.onSubmit()}),b.Ub(6,"div",6),b.Ub(7,"h1",7),b.Pc(8,"Sign In"),b.Tb(),b.Tb(),b.Ub(9,"div",8),b.Pb(10,"img",9),b.Tb(),b.Ub(11,"mat-form-field",10),b.Ub(12,"mat-label"),b.Pc(13,"User Id"),b.Tb(),b.Pb(14,"input",11),b.Nc(15,R,2,0,"mat-error",12),b.Tb(),b.Ub(16,"mat-form-field",10),b.Ub(17,"mat-label"),b.Pc(18,"Password"),b.Tb(),b.Pb(19,"input",13),b.Ub(20,"mat-icon",14),b.cc("click",function(){return e.hide=!e.hide}),b.Pc(21),b.Tb(),b.Nc(22,A,2,0,"mat-error",12),b.Tb(),b.Ub(23,"button",15),b.cc("click",function(t){return e.onChange(t)}),b.Pc(24,"Sign In"),b.Tb(),b.Pb(25,"mat-divider",16),b.Ub(26,"div",17),b.cc("click",function(){return e.openDialog()}),b.Pb(27,"img",18),b.Tb(),b.Tb(),b.Tb(),b.Pb(28,"ngx-spinner",19)),2&t&&(b.Bb(4),b.nc("perfectScrollbar",b.sc(6,D)),b.Bb(1),b.nc("formGroup",e.signinForm),b.Bb(10),b.nc("ngIf",e.signinForm.get("username").hasError("required")),b.Bb(4),b.nc("type",e.hide?"password":"text"),b.Bb(2),b.Qc(e.hide?"visibility_off":"visibility"),b.Bb(1),b.nc("ngIf",e.signinForm.get("password").hasError("required")))},directives:[o.b,i.A,i.s,T.d,i.j,T.c,z.c,z.g,j.b,i.c,i.r,i.h,i.y,n.n,u.a,z.j,d.a,E.a,_.a,z.b],styles:[".errorColour[_ngcontent-%COMP%]{color:red}.btnclr[_ngcontent-%COMP%]{color:#fff;background-color:#03a9f4;font-size:14px;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400!important;line-height:36px}.toast-success[_ngcontent-%COMP%]{background-color:#304156!important}"]}),t})(),data:{title:"Signin"}},{path:"404",component:g,data:{title:"Not Found"}},{path:"error",component:m,data:{title:"Error"}}]}];let q=(()=>{class t{}return t.\u0275mod=b.Mb({type:t}),t.\u0275inj=b.Lb({factory:function(e){return new(e||t)},imports:[[n.c,i.l,l.b,i.x,a.a,c.a,o.c,_.b,s.k.forChild(K)]]}),t})()}}]);