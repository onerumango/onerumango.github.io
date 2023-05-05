!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"))?o:String(o)),i)}var r,o}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{VVaf:function(t,i,r){"use strict";r.r(i),r.d(i,"SessionsModule",function(){return H});var o,a,s,c,l,u,g=r("aLe/"),b=r("SVse"),m=r("s7LF"),d=r("iInd"),p=r("zMWy"),f=r("u9T3"),v=r("TSSN"),h=r("tZUg"),y=r("rp8y"),C=r("iELJ"),S=r("nZzT"),I=r("kA6c"),E=r("8Y7J"),O=r("zHaW"),k=r("PDjf"),D=r("VDRc"),P=r("Tj54"),T=r("Dxy4"),_=((o=function(){function t(n,i,r,o,a,s,c,l,u,g){e(this,t),this.dialogRef=n,this.fpCaptureService=i,this.data=r,this.cdr=o,this.snack=a,this.formBuilder=s,this.ls=c,this.router=l,this.jwtService=u,this.accountService=g,this.titleMessage="Please use your fingerprint to authenticate",this.contentMessage="Please place your thumb on the fingerprint reader to proceed.",this.totalItems=0,this.totalPages=0,this.flag=!1}return n(t,[{key:"ngOnInit",value:function(){this.custFormGroup=this.formBuilder.group({anyCustomerId:[""]})}},{key:"applyFilter",value:function(e){e.target.value=e.target.value.trim(),this.customerId=e.target.value,console.log("Value : ",this.customerId)}},{key:"getCutomerData",value:function(e){console.log("formData :: ",e)}},{key:"goToClose",value:function(){this.dialogRef.close()}},{key:"captureFingerPrintHttps",value:function(){var e=this;console.log("in component"),this.fpCaptureService.CallingSGIFPCapture().subscribe(function(t){console.log("capturedData:: ",t),0==t.ErrorCode?(e.snack.open("Finding ,is registed customer","OK",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"}),e.getFpDataForMatchOnPageLoad(t.TemplateBase64)):e.getError(t.ErrorCode)},function(t){e.snack.open(""+t,"OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}},{key:"getFpDataForMatchOnPageLoad",value:function(e){var t=this;console.log("TemplateBase64 :: ",e),this.fpCaptureService.getCustInfoByFp(0,100,4).subscribe(function(n){console.log("resp:: ",n),t.matchFpFromUi(e,n.data[0])})}},{key:"matchFpFromUi",value:function(e,t){var n=this;this.fpCaptureService.CallingSGIFPMatch(e,t.fpTemplateBase64).subscribe(function(e){if(console.log("fpResp : ",e),e.MatchingScore>=0&&0===e.ErrorCode){n.snack.open("Finger Print Authentication Completed Successfully","OK",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"});var i=t.customerId;return n.router.navigateByUrl("/others/Service"),n.ls.setItem("customer_id",i),n.cdr.markForCheck(),n.cdr.detectChanges(),void n.dialogRef.close({message:"Confirm",custId:i})}return n.snack.open("Finger Print Authentication Failed","error",{duration:1e3,verticalPosition:"top",horizontalPosition:"right"}),void n.getError(e.ErrorCode)},function(e){})}},{key:"getError",value:function(e){var t=this.fpCaptureService.errorCodeService(e);console.log("error code",t)}},{key:"matchFingerPrint",value:function(e){var t=this;this.fpCaptureService.matchCapturedFp(4,e).subscribe(function(e){if(console.log("matchFp:: ",e),e.customerId){var n=e.customerId;t.router.navigateByUrl("/others/Service"),t.ls.setItem("customer_id",e.customerId),t.cdr.markForCheck(),t.cdr.detectChanges(),t.dialogRef.close({message:"Confirm",data:n})}else console.log("else")})}},{key:"saveBiometric",value:function(e,t,n){var i=this;this.fpCaptureService.saveBiometric(e,t,n,"Kisok Authenticate").subscribe(function(e){console.log("after save ",e),i.cdr.markForCheck(),i.snack.open("Captured "+t+" Finger","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}}]),t}()).\u0275fac=function(e){return new(e||o)(E.Rb(C.g),E.Rb(y.b),E.Rb(C.a),E.Rb(E.h),E.Rb(O.a),E.Rb(m.f),E.Rb(h.a),E.Rb(d.h),E.Rb(S.a),E.Rb(I.a))},o.\u0275cmp=E.Lb({type:o,selectors:[["app-fingerprint"]],decls:19,vars:2,consts:[[2,"background-color","white"],["fxLayout","row",1,"contain"],[1,"backIcon",3,"click"],["fxLayout","column","fxLayoutGap","5%","fxLayoutAlign","space-between center",1,""],[1,"card-title"],[1,"para"],[1,"matIcon"],["mat-flat-button","",1,"buttonScan",3,"click"]],template:function(e,t){1&e&&(E.Xb(0,"mat-card",0),E.Xb(1,"div",1),E.Xb(2,"mat-icon",2),E.fc("click",function(){return t.goToClose()}),E.Tc(3,"close"),E.Wb(),E.Wb(),E.Xb(4,"div"),E.Xb(5,"div",3),E.Xb(6,"div"),E.Xb(7,"h3",4),E.Tc(8),E.Wb(),E.Sb(9,"br"),E.Xb(10,"div"),E.Xb(11,"p",5),E.Tc(12),E.Wb(),E.Wb(),E.Wb(),E.Xb(13,"div"),E.Xb(14,"mat-icon",6),E.Tc(15,"fingerprint"),E.Wb(),E.Wb(),E.Xb(16,"div"),E.Xb(17,"button",7),E.fc("click",function(){return t.captureFingerPrintHttps()}),E.Tc(18,"SCAN"),E.Wb(),E.Wb(),E.Wb(),E.Wb(),E.Wb()),2&e&&(E.Eb(8),E.Uc(t.titleMessage),E.Eb(4),E.Uc(t.contentMessage))},directives:[k.a,D.e,P.a,D.f,D.d,T.b],styles:[".main-div[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}.contain[_ngcontent-%COMP%]{justify-content:flex-end}.text[_ngcontent-%COMP%]{justify-content:center;padding-top:25px}.backIcon[_ngcontent-%COMP%]{cursor:pointer;padding:0;font-size:20px;color:#000}.para[_ngcontent-%COMP%]{color:#000;text-align:center}.matIcon[_ngcontent-%COMP%]{color:#4badf7;padding-right:4rem;font-size:6rem}.card-title[_ngcontent-%COMP%]{font-size:24px;text-align:center}.card-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:sans-serif;color:#000}p[_ngcontent-%COMP%]{font-size:12px}.buttonScan[_ngcontent-%COMP%]{width:170px;border-radius:25px;background-color:#456efe;color:#fff;font-family:sans-serif}.full-width[_ngcontent-%COMP%]{border-radius:10px}"]}),o),x=function(){return["/home"]},w=((a=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=E.Lb({type:a,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(e,t){1&e&&(E.Xb(0,"div",0),E.Xb(1,"div",1),E.Xb(2,"div",2),E.Xb(3,"mat-icon",3),E.Tc(4,"error"),E.Wb(),E.Xb(5,"div",4),E.Xb(6,"h1",5),E.Tc(7,"404"),E.Wb(),E.Xb(8,"div",6),E.Tc(9,"Page Not Found!"),E.Wb(),E.Wb(),E.Wb(),E.Xb(10,"div",7),E.Xb(11,"button",8),E.Tc(12,"Back to Dashboard"),E.Wb(),E.Xb(13,"button",9),E.Tc(14,"Report this Problem"),E.Wb(),E.Wb(),E.Wb(),E.Wb()),2&e&&(E.Eb(11),E.rc("routerLink",E.wc(1,x)))},directives:[P.a,T.b,d.i],styles:[""]}),a),N=function(){return["/"]},A=((s=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=E.Lb({type:s,selectors:[["app-error"]],decls:15,vars:2,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(e,t){1&e&&(E.Xb(0,"div",0),E.Xb(1,"div",1),E.Xb(2,"div",2),E.Xb(3,"mat-icon",3),E.Tc(4,"warning"),E.Wb(),E.Xb(5,"div",4),E.Xb(6,"h1",5),E.Tc(7,"500"),E.Wb(),E.Xb(8,"div",6),E.Tc(9,"Server Error!"),E.Wb(),E.Wb(),E.Wb(),E.Xb(10,"div",7),E.Xb(11,"button",8),E.Tc(12,"Back to Dashboard"),E.Wb(),E.Xb(13,"button",9),E.Tc(14,"Report this Problem"),E.Wb(),E.Wb(),E.Wb(),E.Wb()),2&e&&(E.Eb(11),E.rc("routerLink",E.wc(1,N)))},directives:[P.a,T.b,d.i],styles:[""]}),s),W=r("uOmj"),R=r("EApP"),U=r("Q2Ze"),X=r("e6WT"),M=r("BSbQ"),L=function(){return{}},F=((c=function(){function t(n,i,r,o,a,s,c,l){e(this,t),this.fb=n,this.toastr=i,this.snack=r,this.accountService=o,this.ls=a,this.router=s,this.jwtService=c,this.dialog=l}return n(t,[{key:"ngOnInit",value:function(){this.signinForm=this.fb.group({email:["",[m.z.required,m.z.email]],password:["",m.z.required]})}},{key:"onSubmit",value:function(){var e=this;this.signinForm.invalid||this.jwtService.signin().subscribe(function(t){console.log("res: ",t),localStorage.setItem("userName",t.user.userName),e.router.navigateByUrl("/others/Service"),e.ls.removeItem("appEntryStage"),e.ls.removeItem("ACC_DONE"),e.ls.removeItem("ACC_OPEN_DONE"),e.ls.removeItem("ACC_SERVICE_DONE"),e.ls.removeItem("ACC_MANDATE_DONE"),e.ls.removeItem("ACC_NOMINEE_DONE"),e.ls.removeItem("limitEntryStage"),e.ls.removeItem("LIMIT_SECURED_DONE"),e.ls.removeItem("LIMIT_UNSECURED_DONE"),e.ls.removeItem("LIMIT_FIN_DONE"),e.ls.removeItem("enrichmentStage"),e.ls.removeItem("ENRICHMENT_CHARGES_DONE"),e.ls.removeItem("ENRICHMENT_INTEREST_DONE"),e.ls.removeItem("assessmentStage"),e.ls.removeItem("ASSESSMENT_QA_DONE"),e.ls.removeItem("ASSESSMENT_REPORT_DONE"),e.ls.removeItem("fundingStage"),e.ls.removeItem("FUNDING_INI_DONE"),e.ls.removeItem("approvalStage"),e.ls.removeItem("APPROVAL_DETAILS_DONE"),e.ls.removeItem("accountId"),e.ls.removeItem("eSignStage"),e.ls.removeItem("PRODUCT_CUSTOMER_ID"),e.ls.removeItem("cId"),e.accountService.refresh.next()},function(e){return console.error("Err",e)})}},{key:"openDialog",value:function(){var e=this;this.dialog.open(W.a,{width:"40%",panelClass:"paddingClass",data:{verificationType:"signin"}}).afterClosed().subscribe(function(t){"success"==t&&(e.jwtService.signin().subscribe(function(t){console.log("res: ",t),localStorage.setItem("userName",t.user.userName),e.router.navigateByUrl("/others/Service"),e.ls.removeItem("appEntryStage"),e.ls.removeItem("ACC_DONE"),e.ls.removeItem("ACC_OPEN_DONE"),e.ls.removeItem("ACC_SERVICE_DONE"),e.ls.removeItem("ACC_MANDATE_DONE"),e.ls.removeItem("ACC_NOMINEE_DONE"),e.ls.removeItem("limitEntryStage"),e.ls.removeItem("LIMIT_SECURED_DONE"),e.ls.removeItem("LIMIT_UNSECURED_DONE"),e.ls.removeItem("LIMIT_FIN_DONE"),e.ls.removeItem("enrichmentStage"),e.ls.removeItem("ENRICHMENT_CHARGES_DONE"),e.ls.removeItem("ENRICHMENT_INTEREST_DONE"),e.ls.removeItem("assessmentStage"),e.ls.removeItem("ASSESSMENT_QA_DONE"),e.ls.removeItem("ASSESSMENT_REPORT_DONE"),e.ls.removeItem("fundingStage"),e.ls.removeItem("FUNDING_INI_DONE"),e.ls.removeItem("approvalStage"),e.ls.removeItem("APPROVAL_DETAILS_DONE"),e.ls.removeItem("accountId"),e.ls.removeItem("eSignStage"),e.ls.removeItem("PRODUCT_CUSTOMER_ID"),e.ls.removeItem("cId"),e.accountService.refresh.next()},function(e){return console.error("Err",e)}),console.log("Dialog result: "+t))})}}]),t}()).\u0275fac=function(e){return new(e||c)(E.Rb(m.f),E.Rb(R.b),E.Rb(O.a),E.Rb(I.a),E.Rb(h.a),E.Rb(d.h),E.Rb(S.a),E.Rb(C.b))},c.\u0275cmp=E.Lb({type:c,selectors:[["app-signin"]],decls:26,vars:3,consts:[[1,"seciton-left"],[1,"section-left-content"],[1,"text-36","font-weight-light"],[1,"mb-24","text-small"],[1,"form-holder","h-full-screen","mat-bg-card","mat-elevation-z4",3,"perfectScrollbar"],["fxLayout","column",1,"signup-form",3,"formGroup","ngSubmit"],[1,"form-headline","text-center","mb-32"],[1,"font-weight-light"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"mb-48"],["width","200px","src","assets/images/logo.png","alt",""],["appearance","outline",1,"full-width"],["matInput","","formControlName","email","type","email","name","email","placeholder","Email"],["matInput","","formControlName","password","type","password","name","password","placeholder","********"],["mat-raised-button","","color","primary"],[1,"my-32"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"mb-48",3,"click"],["width","90px","height","90px","src","assets/images/fingerprint.png","alt",""]],template:function(e,t){1&e&&(E.Xb(0,"div",0),E.Xb(1,"div",1),E.Xb(2,"h1",2),E.Tc(3,"Sample Text over here?"),E.Wb(),E.Xb(4,"p",3),E.Tc(5,"Content of the app if required!"),E.Wb(),E.Wb(),E.Wb(),E.Xb(6,"div",4),E.Xb(7,"form",5),E.fc("ngSubmit",function(){return t.onSubmit()}),E.Xb(8,"div",6),E.Xb(9,"h1",7),E.Tc(10,"Sign In"),E.Wb(),E.Wb(),E.Xb(11,"div",8),E.Sb(12,"img",9),E.Wb(),E.Xb(13,"mat-form-field",10),E.Xb(14,"mat-label"),E.Tc(15,"Email"),E.Wb(),E.Sb(16,"input",11),E.Wb(),E.Xb(17,"mat-form-field",10),E.Xb(18,"mat-label"),E.Tc(19,"Password"),E.Wb(),E.Sb(20,"input",12),E.Wb(),E.Xb(21,"button",13),E.Tc(22,"Sign In"),E.Wb(),E.Sb(23,"mat-divider",14),E.Xb(24,"div",15),E.fc("click",function(){return t.openDialog()}),E.Sb(25,"img",16),E.Wb(),E.Wb(),E.Wb()),2&e&&(E.Eb(6),E.rc("perfectScrollbar",E.wc(2,L)),E.Eb(1),E.rc("formGroup",t.signinForm))},directives:[g.b,m.A,m.s,D.e,m.j,D.d,U.c,U.g,X.b,m.c,m.r,m.i,T.b,M.a],styles:[""]}),c),B=r("3sEA"),j=r("ETNk"),z=[{path:"",children:[{path:"signin",component:F,data:{title:"Signin"}},{path:"callback",component:(l=function(){function t(n,i,r,o,a){e(this,t),this.spinner=n,this.jwtService=i,this.router=r,this.ls=o,this.themeService=a}return n(t,[{key:"ngOnInit",value:function(){this.spinner.open();var e=window.location.href.indexOf("appType");this.ls.setItem("redirectedFromTellerDashboard",e.toString());var t=window.location.href.indexOf("code"),n=this.ls.getParameterByName("code"),i=this.ls.getParameterByName("appType"),r=this.ls.getParameterByName("theme");this.CID_360=this.ls.getParameterByName("CID_360"),null==this.ls.getParameterByName("searchTerm")&&null==this.ls.getParameterByName("searchTerm")||(this.searchTerm=this.ls.getParameterByName("searchTerm")),console.log(this.searchTerm);var o=this.jwtService.decodeData(n),a=this.parseAccessTokenFromUserObject(o);return r&&(r=r.replace(/['"]+/g,""),this.ls.setItem("theme","dark"==r?"egret-dark-purple":"egret-blue")),console.log(this.ls.getParameterByName("code")),console.log(this.ls.getParameterByName("appType")),console.log(o),-1!=t?(this.jwtService.setUserAndToken(a,o,!0),this.switchRoute(i),void this.spinner.close()):window.location.href="http://192.168.0.14:8081/iCust-Teller/"}},{key:"parseAccessTokenFromUserObject",value:function(e){var t;return null===(t=e.jwtResp)||void 0===t?void 0:t.accessToken}},{key:"switchRoute",value:function(e){switch(console.log(e),e){case"KYC":this.router.navigateByUrl("/others/Service");break;case"INDIVIDUAL":this.router.navigateByUrl("/onboarding/customer-type");break;case"CORPORATE":this.router.navigateByUrl("/onboardingCorporate/corporate");break;case"CUSTACC":this.router.navigateByUrl("/home/application/list");break;case"TASKS":this.router.navigateByUrl("/tasks/task-summary"+(this.searchTerm?"?searchTerm="+this.searchTerm:""));break;case"KYCTASKS":this.router.navigateByUrl("/tasks/kyc-task-summary"+(this.searchTerm?"?searchTerm="+this.searchTerm:""));break;case"CUSTOMERTASKS":this.router.navigateByUrl("/onboarding-summary/cust-on-boarding-task-summary"+(this.searchTerm?"?searchTerm="+this.searchTerm:""));break;case"CORPORATETASKS":this.router.navigateByUrl("/tasks/corporate-task-summary");break;case"DASHBOARD360":this.router.navigateByUrl("/others/mainNavigation?cId="+this.CID_360);break;case"LOANACC":this.router.navigateByUrl("/loan/account/list");break;case"CARDACC":this.router.navigateByUrl("/cardaccount/applicationEntryStage/list");break;default:this.router.navigateByUrl("/others/Service");break;case"LOANACCTASKS":this.router.navigateByUrl("/tasks/loan-account-task-summary"+(this.searchTerm?"?searchTerm="+this.searchTerm:""));break;case"CARDACCTASKS":this.router.navigateByUrl("/tasks/card-account-task-summary"+(this.searchTerm?"?searchTerm="+this.searchTerm:""));break;case"INDIVIDUALONBOARDING":this.router.navigateByUrl("/others/newCustomerOnboarding");break;case"BRANCHKYC":this.router.navigateByUrl("/others/kyc")}}}]),t}(),l.\u0275fac=function(e){return new(e||l)(E.Rb(B.a),E.Rb(S.a),E.Rb(d.h),E.Rb(h.a),E.Rb(j.a))},l.\u0275cmp=E.Lb({type:l,selectors:[["app-auth-callback"]],decls:2,vars:0,template:function(e,t){1&e&&(E.Xb(0,"p"),E.Tc(1," Loading, Please wait...\n"),E.Wb())},styles:[""]}),l)},{path:"404",component:w,data:{title:"Not Found"}},{path:"error",component:A,data:{title:"Error"}},{path:"fingerPrint",component:_,data:{title:"Error"}},{path:"signLater",component:r("cGjq").a,data:{title:"Error"}}]}],H=((u=n(function t(){e(this,t)})).\u0275mod=E.Pb({type:u}),u.\u0275inj=E.Ob({factory:function(e){return new(e||u)},imports:[[b.c,m.l,v.b,m.x,p.a,f.a,g.c,d.l.forChild(z)]]}),u)},cGjq:function(t,i,r){"use strict";r.d(i,"a",function(){return S});var o=r("r1zJ"),a=r("nm5K"),s=r("laYw"),c=r("tZUg"),l=r("8Y7J"),u=r("iInd"),g=r("zHaW"),b=r("l0rg"),m=r("SVse"),d=r("ura0"),p=r("Dxy4"),f=["profileFile"],v=["fileUpload"];function h(e,t){if(1&e){var n=l.Yb();l.Xb(0,"div",4),l.Xb(1,"div",12),l.Xb(2,"div"),l.Xb(3,"signature-pad",13),l.fc("onBeginEvent",function(){return l.Hc(n),l.jc().drawStart()})("onEndEvent",function(){return l.Hc(n),l.jc().drawComplete()}),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&e){var i=l.jc();l.Eb(3),l.rc("options",i.signaturePadOptions)}}function y(e,t){if(1&e){var n=l.Yb();l.Xb(0,"div",12),l.Xb(1,"div",20),l.Xb(2,"div",21),l.Sb(3,"img",22),l.Wb(),l.Xb(4,"div"),l.Xb(5,"span",16),l.fc("click",function(){return l.Hc(n),l.jc(2).deleteImg()}),l.Tc(6,"Clear"),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&e){var i=l.jc(2);l.Eb(3),l.rc("src",i.imageURL1,l.Jc)}}function C(e,t){if(1&e){var n=l.Yb();l.Xb(0,"div",4),l.Xb(1,"div",12),l.Xb(2,"div"),l.Sb(3,"img",14),l.Wb(),l.Xb(4,"div"),l.Xb(5,"h1",15),l.Tc(6,"Drag and Drop file"),l.Wb(),l.Wb(),l.Xb(7,"div"),l.Xb(8,"h1"),l.Tc(9,"or"),l.Wb(),l.Wb(),l.Xb(10,"div"),l.Xb(11,"span",16),l.fc("click",function(){return l.Hc(n),l.jc().chooseFileDevice()}),l.Tc(12,"Browse"),l.Wb(),l.Xb(13,"input",17,18),l.fc("change",function(e){return l.Hc(n),l.jc().onFileSelect(e)}),l.Wb(),l.Wb(),l.Wb(),l.Rc(15,y,7,1,"div",19),l.Wb()}if(2&e){var i=l.jc();l.Eb(15),l.rc("ngIf",i.fileUploaded)}}var S=function(){var t=function(){function t(n,i,r,o,a,s){e(this,t),this.apiService=n,this.dialogService=i,this.ls=r,this.route=o,this.router=a,this.snack=s,this.signaturePadOptions={minWidth:2,canvasWidth:1e3,canvasHeight:300},this.disableDone=!0,this.signUploadActive=!1,this.eSignActive=!0,this.fileUploaded=!1}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.route.queryParamMap.subscribe(function(t){e.userData=atob(t.get("cb")),t.get("cb")&&e.router.navigate([],{queryParams:{cb:atob(t.get("cb"))}})})}},{key:"drawStart",value:function(){console.log("begin drawing")}},{key:"signType",value:function(e){"eSignActive"==e?(this.signUploadActive=!1,this.eSignActive=!0):"signUploadActive"==e&&(this.signUploadActive=!0,this.eSignActive=!1)}},{key:"chooseFileDevice",value:function(){this.fileUpload.nativeElement.click(),this.fileUploaded=!0}},{key:"drawComplete",value:function(){console.log(this.signaturePad.toDataURL()),this.esignUrl=this.signaturePad.toDataURL(),console.log("signUrl",this.esignUrl),this.disableDone=!this.esignUrl.toString().includes("data:image/png;base64")}},{key:"onFileSelect",value:function(e){var t=this;console.log("event -- ",e.target.files),this.selectedFile=e.target.files[0],console.log(this.selectedFile);var n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onload=function(e){t.imageURL1=n.result}}},{key:"save",value:function(e){var t,n=this;this.route.queryParamMap.subscribe(function(e){n.userData="{"+e.get("cb").split("&")+"}",console.log(n.userData)});var i=null===(t=this.signaturePad)||void 0===t?void 0:t.toDataURL();this.signatureImg=i;for(var r=this.signaturePad.toDataURL("image/png"),o=atob(r.substring("data:image/png;base64,".length)),a=new Uint8Array(o.length),s=0,c=o.length;s<c;++s)a[s]=o.charCodeAt(s);var l=new Blob([a],{type:"image/png"}),u=new FormData;u.append("data",JSON.stringify(this.userData)),this.eSignActive?u.append("file",l):this.fileUploaded&&u.append("file",this.selectedFile),console.log(u),this.apiService.uploadSignature(u).subscribe(function(e){console.log(e),e&&n.snack.open("Uploaded successfully!","OK",{duration:6e3,verticalPosition:"top",horizontalPosition:"right"})})}},{key:"deleteImg",value:function(){this.ls.setItem("enable",!1),this.imageURL1="not_available"}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Rb(a.b),l.Rb(s.a),l.Rb(c.a),l.Rb(u.a),l.Rb(u.h),l.Rb(g.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-sign-later"]],viewQuery:function(e,t){var n;(1&e&&(l.ad(o.a,!0),l.ad(f,!0),l.ad(v,!0)),2&e)&&(l.Cc(n=l.gc())&&(t.signaturePad=n.first),l.Cc(n=l.gc())&&(t.profileFile=n.first),l.Cc(n=l.gc())&&(t.fileUpload=n.first))},decls:24,vars:4,consts:[[1,"headerColor"],[1,"headerDiv"],[1,"bankNameDiv"],[1,"locationDiv"],[1,"selectSignatureContentDiv"],[3,"ngClass","click"],[1,"imgSignDiv"],["width","100px","height","100px","src","assets/images/esign.png","alt",""],[1,"fontSignDiv"],["class","selectSignatureContentDiv",4,"ngIf"],[1,"btnalgn"],["mat-raised-button","",1,"btncolor",3,"click"],[1,"signDiv"],[3,"options","onBeginEvent","onEndEvent"],["width","100px","height","100px","src","assets/images/download.jpg","alt",""],[1,"fontStyle"],[1,"browseLink",3,"click"],["type","file",1,"fileUploadClass",3,"change"],["fileUpload",""],["class","signDiv",4,"ngIf"],[1,"afterUploadImgDiv"],[1,"upImgDiv"],["required","","alt","",1,"formImg",3,"src"]],template:function(e,t){1&e&&(l.Xb(0,"div"),l.Xb(1,"div"),l.Xb(2,"mat-toolbar",0),l.Xb(3,"div",1),l.Xb(4,"div",2),l.Tc(5,"Demo Bank"),l.Wb(),l.Xb(6,"div",3),l.Tc(7,"K N-Kasthuri Nagar"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(8,"div",4),l.Xb(9,"div",5),l.fc("click",function(){return t.signType("eSignActive")}),l.Xb(10,"div",6),l.Sb(11,"img",7),l.Wb(),l.Xb(12,"div",8),l.Tc(13," E - Sign Draw "),l.Wb(),l.Wb(),l.Xb(14,"div",5),l.fc("click",function(){return t.signType("signUploadActive")}),l.Xb(15,"div",6),l.Sb(16,"img",7),l.Wb(),l.Xb(17,"div",8),l.Tc(18," Image Upload "),l.Wb(),l.Wb(),l.Wb(),l.Rc(19,h,4,1,"div",9),l.Rc(20,C,16,1,"div",9),l.Xb(21,"div",10),l.Xb(22,"button",11),l.fc("click",function(e){return t.save(e)}),l.Tc(23,"Sumbit"),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Eb(9),l.rc("ngClass",t.eSignActive?"eSignDivActive":"eSignDiv"),l.Eb(5),l.rc("ngClass",t.signUploadActive?"signUploadDivActive":"signUploadDiv"),l.Eb(5),l.rc("ngIf",t.eSignActive),l.Eb(1),l.rc("ngIf",t.signUploadActive))},directives:[b.a,m.l,d.a,m.n,p.b,o.a],styles:[".example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.formImg[_ngcontent-%COMP%]{height:200px}.headerDiv[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 100px;width:100%}.eSignDiv[_ngcontent-%COMP%]{box-shadow:0 1px 4px rgba(0,0,0,.1607843137254902)!important}.eSignDiv[_ngcontent-%COMP%], .eSignDivActive[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:5px;display:flex;flex-direction:column;text-align:center;align-items:center;justify-content:center;font-size:medium;font-family:sans-serif;gap:10px}.eSignDivActive[_ngcontent-%COMP%]{border-bottom:5px solid #004c97}.fontSignDiv[_ngcontent-%COMP%]{font-weight:700;padding-bottom:10px}.imgSignDiv[_ngcontent-%COMP%]{flex:2 1 auto}.btncolor[_ngcontent-%COMP%], .imgSignDiv[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.btncolor[_ngcontent-%COMP%]{color:#fff;background-image:linear-gradient(90deg,#051b2e,#004a92)}.btnalgn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding-bottom:30px}.signUploadDiv[_ngcontent-%COMP%]{width:200px;height:200px;box-shadow:0 1px 4px rgba(0,0,0,.1607843137254902)!important;border-radius:5px;text-align:center;font-size:medium;font-family:sans-serif;gap:10px}.contentCentr[_ngcontent-%COMP%], .signUploadDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.fontStyle[_ngcontent-%COMP%]{font-weight:700}.signUploadDivActive[_ngcontent-%COMP%]{width:200px;height:200px;font-size:medium;font-family:sans-serif;border-bottom:5px solid #004c97}.signDiv[_ngcontent-%COMP%], .signUploadDivActive[_ngcontent-%COMP%]{border-radius:5px;display:flex;flex-direction:column;text-align:center;align-items:center;justify-content:center;gap:10px}.signDiv[_ngcontent-%COMP%]{width:100%;height:300px;box-shadow:0 1px 8px rgba(0,0,0,.1607843137254902)!important}.fileUploadClass[_ngcontent-%COMP%]{display:none!important}.browseLink[_ngcontent-%COMP%]{color:#004c97!important;font-family:sans-serif;font-weight:700;cursor:pointer}.browseLink[_ngcontent-%COMP%]:hover{text-decoration:underline!important}.selectSignatureContentDiv[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;gap:40px;padding:60px}.afterUploadImgDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:20px;justify-content:space-between;align-items:center;gap:30px}.upImgDiv[_ngcontent-%COMP%]{width:300px!important}.bankNameDiv[_ngcontent-%COMP%]{font-size:xx-large;font-family:initial}.locationDiv[_ngcontent-%COMP%]{font-size:large;font-family:sans-serif}.headerColor[_ngcontent-%COMP%]{color:#fff;background-image:linear-gradient(90deg,#051b2e,#004a92)}.mat-progress-bar-fill[_ngcontent-%COMP%]:after{background-color:#02396e}.mat-progress-bar-buffer[_ngcontent-%COMP%]{background:#02396e}.selectedColor[_ngcontent-%COMP%]{color:#02396e}.example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.scanButton[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;color:#00f;border-color:#d3d3d3;margin-left:5px;border-style:ridge;margin-top:0;border-radius:5px}"]}),t}()}}])}();