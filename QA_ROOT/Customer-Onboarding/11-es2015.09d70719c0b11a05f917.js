(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/Pd4":function(t,e,i){"use strict";i.d(e,"a",function(){return u});var n=i("ngOV"),s=i("2Vo4"),c=i("z6cu"),a=i("JIr8"),o=i("x/2q"),r=i("8Y7J"),d=i("IheW");const l=n.a.baseURL;let u=(()=>{class t{constructor(t,e){this.http=t,this.showMessageService=e,this.addEditOrViewsummary=new s.a(""),this.isSubmitted=new s.a(""),this.fundsEdit=new s.a(""),this.errorHandler=t=>(console.error("Error : "+t.message),console.error("status : "+t.status),this.showMessageService.errorMessage(t.status,t),Object(c.a)(t))}addEditOrViewsummaryData(t){this.addEditOrViewsummary.next(t)}isSubmittedResp(t){this.isSubmitted.next(t)}fundsEditResp(t){this.fundsEdit.next(t)}saveOrUpdateFundStageDetails(t){return console.log("in service"),this.http.post(l+"/fundingStage/saveOrUpdateFunds",t).pipe(Object(a.a)(this.errorHandler))}getFundById(t){return this.http.get(`${l}/fundingStage/getFundById/${t}`).pipe(Object(a.a)(this.errorHandler))}getFundByTellerTrxnRefNo(t){return this.http.get(`${l}/fundingStage/getFundByTellerTxRefNo/${t}`).pipe(Object(a.a)(this.errorHandler))}getFundByAccountId(t){return this.http.get(`${l}/fundingStage/getFundByAccId/${t}`).pipe(Object(a.a)(this.errorHandler))}}return t.\u0275fac=function(e){return new(e||t)(r.bc(d.c),r.bc(o.a))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"2ocR":function(t,e,i){"use strict";i.d(e,"a",function(){return x});var n=i("iELJ"),s=i("r1zJ"),c=i("nm5K"),a=i("qMRc"),o=i("tZUg"),r=i("kA6c"),d=i("8Y7J"),l=i("iInd"),u=i("VDRc"),g=i("SVse"),b=i("Dxy4"),h=i("Tj54"),f=i("PDjf");function m(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",7),d.fc("click",function(){return d.Hc(t),d.jc().close1()}),d.Xb(1,"mat-icon"),d.Tc(2,"close"),d.Wb(),d.Wb()}}function p(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",7),d.fc("click",function(){return d.Hc(t),d.jc().close()}),d.Xb(1,"mat-icon"),d.Tc(2,"close"),d.Wb(),d.Wb()}}function I(t,e){1&t&&(d.Xb(0,"div",4),d.Xb(1,"div",8),d.Sb(2,"img",9),d.Wb(),d.Wb())}function v(t,e){if(1&t){const t=d.Yb();d.Xb(0,"div",10),d.Xb(1,"h5",11),d.Tc(2,"Please e-sign the application!"),d.Wb(),d.Xb(3,"mat-card",12),d.Xb(4,"mat-card-content"),d.Xb(5,"signature-pad",13),d.fc("onBeginEvent",function(){return d.Hc(t),d.jc().drawStart()})("onEndEvent",function(){return d.Hc(t),d.jc().drawComplete()}),d.Wb(),d.Wb(),d.Wb(),d.Xb(6,"div",14),d.Xb(7,"button",15),d.fc("click",function(){return d.Hc(t),d.jc().onSubmit()}),d.Tc(8," SUBMIT "),d.Wb(),d.Wb(),d.Wb()}if(2&t){const t=d.jc();d.Eb(5),d.rc("options",t.signaturePadOptions),d.Eb(2),d.rc("disabled",t.disableDone)}}let x=(()=>{class t{constructor(t,e,i,n,s,c,a,o){this.data=t,this.dialogRef=e,this.ls=i,this.accountService=n,this.apiService=s,this.router=c,this.appEntryService=a,this.cdr=o,this.isDone=!1,this.signaturePadOptions={minWidth:2,canvasWidth:250,canvasHeight:150},this.count=0,this.res={enable:!1,image:null},this.disableDone=!0}ngOnInit(){this.accountId=this.ls.getItem("accountId"),this.accountInfo=this.ls.getItem("EDIT-CREATEACCCIF"),this.accountInfo&&(this.accountId=this.accountInfo.businessProductAccount.accountId),this.isDone=null==this.data.isDone?this.data.isSignLater:this.data.isDone,this.cdr.markForCheck()}ngAfterViewInit(){this.signaturePad.set("minWidth",2),this.signaturePad.clear()}drawComplete(){console.log(this.signaturePad.toDataURL()),this.esignUrl=this.signaturePad.toDataURL(),this.disableDone=!this.esignUrl.toString().includes("data:image/png;base64")}drawStart(){console.log("begin drawing")}clearSignature(){this.signaturePad.clear()}savePad(){const t=this.signaturePad.toDataURL();this.signatureImg=t}close1(){"NewCustomerOnboarding"===this.data.screen?this.dialogRef.close(this.res):(this.dialogRef.close(this.ls.getItem("signedImage")?{image:this.ls.getItem("signedImage")}:null),this.ls.setItem("enable",!1))}close(){this.dialogRef.close("NewCustomerOnboarding"===this.data.screen?this.res:{image:this.esignUrl})}onSubmit(){console.log(this.signaturePad.toDataURL());let t={};console.log("this.data::",this.data),"NewCustomerOnboarding"!==this.data.screen?(t.accountId=this.ls.getItem("accountId"),this.getByAccountId(t.accountId)):(this.apiService.getAccountIdByCusId(this.data.customerId).subscribe(e=>{console.log("Account Id response -- ",e),t.accountId=e}),this.res={enable:!0,image:this.signaturePad.toDataURL()}),t.customerId=this.data.customerId,t.documentName=this.data.customerId+"Signature",t.documentType="10",t.fileType="image/jpeg",t.fileName="signature";const e=this.signaturePad.toDataURL("image/png");this.ls.setItem("signedImage",e);const i=atob(e.substring("data:image/png;base64,".length)),n=new Uint8Array(i.length);for(var s=0,c=i.length;s<c;++s)n[s]=i.charCodeAt(s);const a=new Blob([n],{type:"image/png"}),o=new FormData;o.append("data",JSON.stringify(t)),o.append("file",a),o.append("accType","savings"),this.apiService.uploadDocument(o).subscribe(t=>{console.log(t),t&&(this.close(),this.show=!0,this.res=t)},t=>{this.close(),this.res=!1}),"NewCustomerOnboarding"!==this.data.screen?this.isDone=!1:this.close(),console.log(this.isDone),this.ls.setItem("eSignStage",!0)}getByAccountId(t){this.appEntryService.getByAccountId(t).subscribe(t=>{console.log("updateStatus :: ",t),this.accountdetailsForStatusUpdate=t,this.updateAccountStatus(t)})}updateAccountStatus(t){t.status="BACKLOG",this.appEntryService.updateAccountStatusService(t).subscribe(t=>{console.log("updateResp:: ",t)})}}return t.\u0275fac=function(e){return new(e||t)(d.Rb(n.a),d.Rb(n.g),d.Rb(o.a),d.Rb(r.a),d.Rb(c.b),d.Rb(l.h),d.Rb(a.a),d.Rb(d.h))},t.\u0275cmp=d.Lb({type:t,selectors:[["app-esign-pop"]],viewQuery:function(t,e){if(1&t&&d.ad(s.a,!0),2&t){let t;d.Cc(t=d.gc())&&(e.signaturePad=t.first)}},decls:8,vars:4,consts:[["fxLayout","row wrap"],["fxFlex","100","fxLayoutAlign","end center"],["mat-icon-button","",3,"click",4,"ngIf"],["fxFlex","100",4,"ngIf"],["fxFlex","100"],["fxLayout","row","fxLayoutAlign","center center"],["fxFlex","50","fxFlexOffset","20px",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"propic","text-center"],["src","assets/images/esign.png","alt",""],["fxFlex","50","fxFlexOffset","20px"],[1,"text-center","mt-16"],[1,"mt-16"],[3,"options","onBeginEvent","onEndEvent"],[1,"text-center"],["mat-raised-button","","color","primary",1,"sbmt",3,"disabled","click"]],template:function(t,e){1&t&&(d.Xb(0,"div",0),d.Xb(1,"div",1),d.Rc(2,m,3,0,"button",2),d.Rc(3,p,3,0,"button",2),d.Wb(),d.Rc(4,I,3,0,"div",3),d.Xb(5,"div",4),d.Xb(6,"div",5),d.Rc(7,v,9,2,"div",6),d.Wb(),d.Wb(),d.Wb()),2&t&&(d.Eb(2),d.rc("ngIf",!e.isDone),d.Eb(1),d.rc("ngIf",e.isDone),d.Eb(1),d.rc("ngIf",!e.isDone),d.Eb(3),d.rc("ngIf",!e.isDone))},directives:[u.e,u.b,u.d,g.n,b.b,h.a,u.c,f.a,f.d,s.a],styles:[".sbmt[_ngcontent-%COMP%]{margin:12px 0;width:35%;background-color:#426af5;color:#fff;border-radius:55px}"]}),t})()},"h/GN":function(t,e,i){"use strict";i.d(e,"a",function(){return S});var n=i("iELJ"),s=i("nm5K"),c=i("laYw"),a=i("tZUg"),o=i("2ocR"),r=i("8Y7J"),d=i("iInd"),l=i("VDRc"),u=i("SVse"),g=i("Dxy4"),b=i("Tj54");const h=["profileFile"];function f(t,e){if(1&t){const t=r.Yb();r.Xb(0,"button",7),r.fc("click",function(){return r.Hc(t),r.jc().close1()}),r.Xb(1,"mat-icon"),r.Tc(2,"close"),r.Wb(),r.Wb()}}function m(t,e){if(1&t){const t=r.Yb();r.Xb(0,"button",7),r.fc("click",function(){return r.Hc(t),r.jc().close()}),r.Xb(1,"mat-icon"),r.Tc(2,"close"),r.Wb(),r.Wb()}}function p(t,e){1&t&&(r.Xb(0,"div",4),r.Xb(1,"div",8),r.Sb(2,"img",9),r.Wb(),r.Wb())}function I(t,e){1&t&&(r.Xb(0,"div"),r.Sb(1,"img",23),r.Wb()),2&t&&(r.Eb(1),r.rc("src","assets/images/no-image.jpg",r.Jc))}function v(t,e){if(1&t&&r.Sb(0,"img",24),2&t){const t=r.jc(2);r.rc("src",t.imageURL1,r.Jc)}}function x(t,e){if(1&t){const t=r.Yb();r.Xb(0,"div",10),r.Xb(1,"h5",11),r.Tc(2,"Signatures!"),r.Wb(),r.Xb(3,"div",12),r.Xb(4,"div",13),r.Xb(5,"button",14),r.fc("click",function(){return r.Hc(t),r.jc().openPopUp()}),r.Tc(6," DIGITAL SIGN "),r.Wb(),r.Wb(),r.Xb(7,"div",15),r.Xb(8,"button",14),r.fc("click",function(){return r.Hc(t),r.Dc(11).click()}),r.Tc(9," UPLOAD "),r.Xb(10,"input",16,17),r.fc("change",function(e){return r.Hc(t),r.jc().onFileSelect(e)}),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(12,"div",5),r.Xb(13,"div",13),r.Xb(14,"div",18),r.Rc(15,I,2,1,"div",19),r.Rc(16,v,1,1,"ng-template",null,20,r.Sc),r.Wb(),r.Xb(18,"div",12),r.Xb(19,"button",21),r.fc("click",function(){return r.Hc(t),r.jc().deleteImg()}),r.Tc(20," DELETE "),r.Wb(),r.Xb(21,"button",22),r.fc("click",function(){return r.Hc(t),r.jc().onSubmit()}),r.Tc(22," SUBMIT "),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb()}if(2&t){const t=r.Dc(17),e=r.jc();r.Eb(15),r.rc("ngIf","not_available"==e.imageURL1)("ngIfElse",t),r.Eb(6),r.rc("disabled","not_available"==e.imageURL1)}}let S=(()=>{class t{constructor(t,e,i,n,s,c,a){this.data=t,this.router=e,this.apiService=i,this.dialogService=n,this.dialog=s,this.dialogRef=c,this.ls=a,this.isDone=!1,this.previousUrl="",this.res={enable:!1,image:null},this.disableDone=!0}ngOnInit(){this.accountId=this.ls.getItem("accountId"),this.customerId=this.ls.getItem("CIF_NUM_PRIMARY"),this.image=this.ls.getItem("signedImage"),this.imageURL1=this.image?this.image:"not_available",this.accountId=this.ls.getItem("accountId"),this.getSignatureDetails()}getSignatureDetails(){this.apiService.getDigitalsignById(this.accountId).subscribe(t=>{t&&t[0].accountSignatureId&&(this.id=t[0].accountSignatureId)})}close1(){"NewCustomerOnboarding"===this.data.screen?this.dialogRef.close(this.res):(this.dialogRef.close(!0),this.ls.setItem("enable",!!this.ls.getItem("signedImage")))}openPopUp(t){let e;null==t&&(e={isSignLater:!1,screen:"Create Account"}),this.show||this.dialog.open(o.a,{width:"720px",disableClose:!0,data:null==t?e:t}).afterClosed().subscribe(t=>{console.log("dismiss res",t),t&&(this.imageURL1=null==t?void 0:t.image,this.disableDone=!(null==t?void 0:t.image),this.ls.setItem("enable",!0),console.log(this.show))})}onFileSelect(t){console.log("event -- ",t.target.files),this.selectedFile=t.target.files[0],console.log(this.selectedFile);let e=new FileReader;e.readAsDataURL(t.target.files[0]),e.onload=t=>{this.imageURL1=e.result};const i=this.selectedFile,n=new FormData;n.append("data",JSON.stringify({accountId:this.accountId,customerId:this.customerId,documentName:this.customerId+"Signature",documentType:"10",fileType:"image/jpeg",fileName:"signature"})),n.append("file",i),n.append("accType","savings"),this.apiService.upload(n).subscribe(t=>{t&&(this.ls.setItem("signedImage",this.imageURL1),this.ls.setItem("eSignStage",!0),this.ls.setItem("enable",!0))})}onSubmit(){this.isDone=!0,console.log(this.isDone),this.dialogRef.close(!0)}deleteImg(){this.dialogService.doConfirmDialog("").subscribe(t=>{"Yes"==t&&this.apiService.deleteCustomerDoc(this.customerId,this.id).subscribe(t=>{this.imageURL1="not_available",this.ls.removeItem("signedImage"),this.disableDone=!0,this.ls.setItem("enable",!1)})})}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(n.a),r.Rb(d.h),r.Rb(s.b),r.Rb(c.a),r.Rb(n.b),r.Rb(n.g),r.Rb(a.a))},t.\u0275cmp=r.Lb({type:t,selectors:[["app-upload-sign-esign"]],viewQuery:function(t,e){if(1&t&&r.ad(h,!0),2&t){let t;r.Cc(t=r.gc())&&(e.profileFile=t.first)}},decls:8,vars:4,consts:[["fxLayout","row wrap"],["fxFlex","100","fxLayoutAlign","end center"],["mat-icon-button","",3,"click",4,"ngIf"],["fxFlex","100",4,"ngIf"],["fxFlex","100"],["fxLayout","row","fxLayoutAlign","center center"],["fxFlex","50","fxFlexOffset","20px",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"propic","text-center"],["src","assets/images/esign.png","alt",""],["fxFlex","50","fxFlexOffset","20px"],[1,"text-center","mt-16","size"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","20px"],[1,"sub-section-1"],["mat-raised-button","",1,"btn1",3,"click"],[1,"sub-section-2"],["type","file","accept","image/*","required","",1,"changeInput",2,"display","none",3,"change"],["fileInput",""],[1,"insertDriveImg"],[4,"ngIf","ngIfElse"],["showAvatar",""],["mat-raised-button","","color","red",1,"dltbtn",3,"click"],["mat-raised-button","","color","primary",1,"dbtn",3,"disabled","click"],["alt","No Image",1,"formImg",3,"src"],["required","","alt","",1,"formImg",3,"src"]],template:function(t,e){1&t&&(r.Xb(0,"div",0),r.Xb(1,"div",1),r.Rc(2,f,3,0,"button",2),r.Rc(3,m,3,0,"button",2),r.Wb(),r.Rc(4,p,3,0,"div",3),r.Xb(5,"div",4),r.Xb(6,"div",5),r.Rc(7,x,23,3,"div",6),r.Wb(),r.Wb(),r.Wb()),2&t&&(r.Eb(2),r.rc("ngIf",!e.isDone),r.Eb(1),r.rc("ngIf",e.isDone),r.Eb(1),r.rc("ngIf",!e.isDone),r.Eb(3),r.rc("ngIf",!e.isDone))},directives:[l.e,l.b,l.d,u.n,g.b,b.a,l.c,l.f],styles:[".scanButton[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;color:#00f;border-color:#d3d3d3;margin-left:5px;border-style:ridge;margin-top:0;border-radius:55px;height:35px}.formImg[_ngcontent-%COMP%]{height:200px!important;width:400px!important;background-color:#f5f5f5;border-radius:10%}.dltbtn[_ngcontent-%COMP%]{background-color:red}.dbtn[_ngcontent-%COMP%], .dltbtn[_ngcontent-%COMP%]{margin:12px 0;width:40%;color:#fff;border-radius:55px}.dbtn[_ngcontent-%COMP%]{background-color:#426af5}.size[_ngcontent-%COMP%]{font-size:large;font-weight:300}.btn1[_ngcontent-%COMP%]{margin:12px 0;width:100%;background-color:#426af5;color:#fff;border-radius:55px}"]}),t})()}}]);