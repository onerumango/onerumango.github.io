!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"))?o:String(o)),n)}var a,o}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"I5/J":function(t,n,a){"use strict";a.d(n,"a",function(){return F});var o=a("iELJ"),c=a("nm5K"),s=a("laYw"),r=a("tZUg"),l=a("r1zJ"),u=a("qMRc"),d=a("kA6c"),b=a("8Y7J"),g=a("iInd"),f=a("VDRc"),h=a("SVse"),p=a("Dxy4"),m=a("Tj54"),v=a("PDjf");function I(e,t){if(1&e){var i=b.Yb();b.Xb(0,"button",7),b.fc("click",function(){return b.Hc(i),b.jc().close1()}),b.Xb(1,"mat-icon"),b.Tc(2,"close"),b.Wb(),b.Wb()}}function x(e,t){if(1&e){var i=b.Yb();b.Xb(0,"button",7),b.fc("click",function(){return b.Hc(i),b.jc().close()}),b.Xb(1,"mat-icon"),b.Tc(2,"close"),b.Wb(),b.Wb()}}function y(e,t){1&e&&(b.Xb(0,"div",4),b.Xb(1,"div",8),b.Sb(2,"img",9),b.Wb(),b.Wb())}function S(e,t){if(1&e){var i=b.Yb();b.Xb(0,"div",10),b.Xb(1,"h5",11),b.Tc(2,"Please e-sign the application!"),b.Wb(),b.Xb(3,"mat-card",12),b.Xb(4,"mat-card-content"),b.Xb(5,"signature-pad",13),b.fc("onBeginEvent",function(){return b.Hc(i),b.jc().drawStart()})("onEndEvent",function(){return b.Hc(i),b.jc().drawComplete()}),b.Wb(),b.Wb(),b.Wb(),b.Xb(6,"div",14),b.Xb(7,"button",15),b.fc("click",function(){return b.Hc(i),b.jc().onSubmit()}),b.Tc(8," SUBMIT "),b.Wb(),b.Wb(),b.Wb()}if(2&e){var n=b.jc();b.Eb(5),b.rc("options",n.signaturePadOptions),b.Eb(2),b.rc("disabled",n.disableDone)}}var R,D=((R=function(){function t(i,n,a,o,c,s,r,l){e(this,t),this.data=i,this.dialogRef=n,this.ls=a,this.router=o,this.accountService=c,this.apiService=s,this.appEntryService=r,this.cdr=l,this.isDone=!1,this.signaturePadOptions={minWidth:2,canvasWidth:700,canvasHeight:300},this.count=0,this.res={enable:!1,image:null},this.disableDone=!0,this.signupload=!0}return i(t,[{key:"ngOnInit",value:function(){this.cardId=this.ls.getItem("cardId"),console.log("popup response data:",this.data),this.isDone=this.data.isSignLater,this.cdr.markForCheck()}},{key:"ngAfterViewInit",value:function(){this.signaturePad.set("minWidth",2),this.signaturePad.clear()}},{key:"drawComplete",value:function(){console.log(this.signaturePad.toDataURL()),this.esignUrl=this.signaturePad.toDataURL(),this.disableDone=!this.esignUrl.toString().includes("data:image/png;base64")}},{key:"drawStart",value:function(){console.log("begin drawing")}},{key:"clearSignature",value:function(){this.signaturePad.clear()}},{key:"savePad",value:function(){var e=this.signaturePad.toDataURL();this.signatureImg=e}},{key:"close1",value:function(){"NewCustomerOnboarding"===this.data.screen?this.dialogRef.close(this.res):(this.dialogRef.close({image:this.ls.getItem("cardSignedImage")?this.ls.getItem("cardSignedImage"):""}),this.ls.setItem("enable",!1))}},{key:"close",value:function(){this.dialogRef.close("NewCustomerOnboarding"===this.data.screen?this.res:{image:this.esignUrl})}},{key:"onSubmit",value:function(){var e=this;console.log(this.signaturePad.toDataURL());var t={},i={};console.log("this.data::",this.data),"NewCustomerOnboarding"!==this.data.screen?(i.cardId=this.data.accountId,this.getByAccountId(i.cardId)):(this.apiService.getAccountIdByCusId(this.data.customerId).subscribe(function(e){console.log("Account Id response -- ",e),t.accountId=e}),this.res={enable:!0,image:this.signaturePad.toDataURL()}),i.customerId=this.data.customerId,i.documentName=this.data.customerId+"Signature",i.documentType="10",i.fileType="image/jpeg",i.fileName="signature";var n=this.signaturePad.toDataURL("image/png");this.ls.setItem("cardSignedImage",n);for(var a=atob(n.substring("data:image/png;base64,".length)),o=new Uint8Array(a.length),c=0,s=a.length;c<s;++c)o[c]=a.charCodeAt(c);var r=new Blob([o],{type:"image/png"});t.uploadModel=i,t.noOfSignatures="1";var l=new FormData;l.append("data",JSON.stringify(t)),console.log("data",t),l.append("file",r),l.append("accType","cardOrigin"),this.apiService.uploadSignature(l).subscribe(function(t){console.log(t),t&&(e.close(),e.show=!0,e.ls.setItem("enable",!0),e.res=t)},function(t){e.close(),e.res=!1}),"NewCustomerOnboarding"!==this.data.screen?this.isDone=!1:this.close(),console.log(this.isDone),this.ls.setItem("eSignStage",!0)}},{key:"getByAccountId",value:function(e){var t=this;this.apiService.getCardInitiationDetails(e).subscribe(function(e){console.log("updateStatus :: ",e),t.accountdetailsForStatusUpdate=e,t.updateCardAccountStatus()})}},{key:"updateCardAccountStatus",value:function(){this.apiService.updateCardStatus({cardId:this.cardId,status:"BACKLOG"}).subscribe(function(e){console.log("updateResp:: ",e)})}}]),t}()).\u0275fac=function(e){return new(e||R)(b.Rb(o.a),b.Rb(o.g),b.Rb(r.a),b.Rb(g.h),b.Rb(d.a),b.Rb(c.b),b.Rb(u.a),b.Rb(b.h))},R.\u0275cmp=b.Lb({type:R,selectors:[["app-esignature-pop"]],viewQuery:function(e,t){var i;1&e&&b.ad(l.a,!0),2&e&&b.Cc(i=b.gc())&&(t.signaturePad=i.first)},decls:8,vars:4,consts:[["fxLayout","row wrap"],["fxFlex","100","fxLayoutAlign","end center"],["mat-icon-button","",3,"click",4,"ngIf"],["fxFlex","100",4,"ngIf"],["fxFlex","100"],["fxLayout","row","fxLayoutAlign","center center"],["fxFlex","50","fxFlexOffset","20px",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"propic","text-center"],["src","assets/images/esign.png","alt",""],["fxFlex","50","fxFlexOffset","20px"],[1,"text-center","mt-16"],[1,"mt-16","signbox"],[3,"options","onBeginEvent","onEndEvent"],[1,"text-center"],["mat-raised-button","",1,"Next",3,"disabled","click"]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Rc(2,I,3,0,"button",2),b.Rc(3,x,3,0,"button",2),b.Wb(),b.Rc(4,y,3,0,"div",3),b.Xb(5,"div",4),b.Xb(6,"div",5),b.Rc(7,S,9,2,"div",6),b.Wb(),b.Wb(),b.Wb()),2&e&&(b.Eb(2),b.rc("ngIf",!t.isDone),b.Eb(1),b.rc("ngIf",t.isDone),b.Eb(1),b.rc("ngIf",!t.isDone),b.Eb(3),b.rc("ngIf",!t.isDone))},directives:[f.e,f.b,f.d,h.n,p.b,m.a,f.c,v.a,v.d,l.a],styles:[".signbox[_ngcontent-%COMP%]{border-style:shadow;height:160px}.Next[_ngcontent-%COMP%]{margin:12px 0;width:150px;background-color:#426af5;color:#fff;border-radius:55px}"]}),R),k=a("zHaW"),w=["profileFile"];function W(e,t){if(1&e){var i=b.Yb();b.Xb(0,"button",7),b.fc("click",function(){return b.Hc(i),b.jc().close1()}),b.Xb(1,"mat-icon"),b.Tc(2,"close"),b.Wb(),b.Wb()}}function X(e,t){if(1&e){var i=b.Yb();b.Xb(0,"button",7),b.fc("click",function(){return b.Hc(i),b.jc().close()}),b.Xb(1,"mat-icon"),b.Tc(2,"close"),b.Wb(),b.Wb()}}function C(e,t){1&e&&(b.Xb(0,"div",4),b.Xb(1,"div",8),b.Sb(2,"img",9),b.Wb(),b.Wb())}function L(e,t){1&e&&(b.Xb(0,"div"),b.Sb(1,"img",24),b.Wb()),2&e&&(b.Eb(1),b.rc("src","assets/images/no-image.jpg",b.Jc))}function E(e,t){if(1&e&&b.Sb(0,"img",25),2&e){var i=b.jc(2);b.rc("src",i.imageURL1,b.Jc)}}function O(e,t){if(1&e){var i=b.Yb();b.Xb(0,"div",10),b.Xb(1,"h5",11),b.Tc(2,"Signature!"),b.Wb(),b.Xb(3,"div",12),b.Xb(4,"div",13),b.Xb(5,"button",14),b.fc("click",function(){return b.Hc(i),b.jc().openPopUp()}),b.Tc(6," Digital Sign "),b.Wb(),b.Wb(),b.Xb(7,"div",15),b.Xb(8,"button",16),b.fc("click",function(){return b.Hc(i),b.Dc(11).click()}),b.Tc(9," Upload "),b.Xb(10,"input",17,18),b.fc("change",function(e){return b.Hc(i),b.jc().onFileSelect(e)}),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(12,"div",5),b.Xb(13,"div",13),b.Xb(14,"div",19),b.Rc(15,L,2,1,"div",20),b.Rc(16,E,1,1,"ng-template",null,21,b.Sc),b.Wb(),b.Xb(18,"div",12),b.Xb(19,"button",22),b.fc("click",function(){return b.Hc(i),b.jc().deleteImg()}),b.Tc(20," DELETE "),b.Wb(),b.Xb(21,"button",23),b.fc("click",function(){return b.Hc(i),b.jc().onSubmit()}),b.Tc(22," SUBMIT "),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb()}if(2&e){var n=b.Dc(17),a=b.jc();b.Eb(15),b.rc("ngIf","not_available"==a.imageURL1)("ngIfElse",n),b.Eb(6),b.rc("disabled",a.disableDone)}}var P,F=((P=function(){function t(i,n,a,o,c,s,r,l,u){e(this,t),this.data=i,this.router=n,this.apiService=a,this.dialogService=o,this.dialog=c,this.dialogRef=s,this.ls=r,this.location=l,this.snack=u,this.isDone=!1,this.previousUrl="",this.disableDone=!0,this.res={enable:!1,image:null}}return i(t,[{key:"ngOnInit",value:function(){this.isCardDigitalSigningDone=this.ls.getItem("CARD_DIGITAL_STAGE_DONE"),this.isCardDigitalSigning=this.ls.getItem("CARD_DIGITAL_SIGN_DONE"),this.image=this.ls.getItem("cardSignedImage"),this.imageURL1=this.image?this.image:"not_available",this.accountId=this.ls.getItem("cardId")}},{key:"close1",value:function(){"NewCustomerOnboarding"===this.data.screen?this.dialogRef.close(this.res):(this.dialogRef.close(!0),this.ls.setItem("enable",!!this.ls.getItem("cardSignedImage")))}},{key:"openPopUp",value:function(e){var t,i=this;null==e&&(t={isSignLater:!1,screen:"Create Account",accountId:this.accountId,customerId:this.ls.getItem("cId")}),this.show||this.dialog.open(D,{width:"720px",disableClose:!0,data:null==e?t:e}).afterClosed().subscribe(function(e){console.log("dismiss res",e),e&&(i.ls.setItem("enable",!0),i.imageURL1=(null==e?void 0:e.image)?null==e?void 0:e.image:"not_available",i.disableDone=!(null==e?void 0:e.image))})}},{key:"onFileSelect",value:function(e){var t=this;console.log("event -- ",e.target.files),this.selectedFile=e.target.files[0],console.log(this.selectedFile);var i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=function(e){t.imageURL1=i.result};var n=this.selectedFile,a=new FormData;a.append("data",JSON.stringify({customerId:this.customerId,documentName:"Signature",documentType:"10",fileType:e.type,fileName:e.name,verificationType:"Digital Signing"})),a.append("file",n),this.apiService.uploadDocument(a).subscribe(function(e){})}},{key:"deleteImg",value:function(){var e=this;this.dialogService.doConfirmDialog("").subscribe(function(t){"Yes"==t&&(e.ls.removeItem("cardSignedImage"),e.disableDone=!0,e.imageURL1="not_available",e.profileFile.nativeElement.value="",e.apiService.deleteCustomerDoc(e.customerId,e.profileId).subscribe(function(e){}),e.disableDone=!0,e.ls.setItem("enable",!1))})}},{key:"onSubmit",value:function(){this.isDone=!0,this.dialogRef.close(!0)}}]),t}()).\u0275fac=function(e){return new(e||P)(b.Rb(o.a),b.Rb(g.h),b.Rb(c.b),b.Rb(s.a),b.Rb(o.b),b.Rb(o.g),b.Rb(r.a),b.Rb(h.j),b.Rb(k.a))},P.\u0275cmp=b.Lb({type:P,selectors:[["app-upload-signature-or-esign"]],viewQuery:function(e,t){var i;1&e&&b.ad(w,!0),2&e&&b.Cc(i=b.gc())&&(t.profileFile=i.first)},decls:8,vars:4,consts:[["fxLayout","row wrap"],["fxFlex","100","fxLayoutAlign","end center"],["mat-icon-button","",3,"click",4,"ngIf"],["fxFlex","100",4,"ngIf"],["fxFlex","100"],["fxLayout","row","fxLayoutAlign","center center"],["fxFlex","50","fxFlexOffset","20px",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"propic","text-center"],["src","assets/images/esign.png","alt",""],["fxFlex","50","fxFlexOffset","20px"],[1,"text-center","mt-16","size"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","20px"],[1,"sub-section-1"],["appearence","outline",1,"scanButton",3,"click"],[1,"sub-section-2"],[1,"Upload","scanButton",3,"click"],["type","file","required","",1,"changeInput",2,"display","none",3,"change"],["fileInput",""],[1,"insertDriveImg"],[4,"ngIf","ngIfElse"],["showAvatar",""],["mat-raised-button","","color","red",1,"dltbtn",3,"click"],["mat-raised-button","","color","primary",1,"dbtn",3,"disabled","click"],["alt","No Image",1,"formImg",3,"src"],["required","","alt","",1,"formImg",3,"src"]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Rc(2,W,3,0,"button",2),b.Rc(3,X,3,0,"button",2),b.Wb(),b.Rc(4,C,3,0,"div",3),b.Xb(5,"div",4),b.Xb(6,"div",5),b.Rc(7,O,23,3,"div",6),b.Wb(),b.Wb(),b.Wb()),2&e&&(b.Eb(2),b.rc("ngIf",!t.isDone),b.Eb(1),b.rc("ngIf",t.isDone),b.Eb(1),b.rc("ngIf",!t.isDone),b.Eb(3),b.rc("ngIf",!t.isDone))},directives:[f.e,f.b,f.d,h.n,p.b,m.a,f.c,f.f],styles:[".scanButton[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;color:#00f;border-color:#d3d3d3;margin-left:5px;border-style:ridge;margin-top:0;border-radius:5px}.formImg[_ngcontent-%COMP%]{height:200px!important;width:400px!important;background-color:#f5f5f5;border-radius:10%}.Next[_ngcontent-%COMP%]{margin:12px 0;width:150px;background-color:#426af5;color:#fff;border-radius:55px}.size[_ngcontent-%COMP%]{font-size:large;font-weight:300}.dltbtn[_ngcontent-%COMP%]{background-color:red}.dbtn[_ngcontent-%COMP%], .dltbtn[_ngcontent-%COMP%]{margin:12px 0;width:35%;color:#fff;border-radius:55px}.dbtn[_ngcontent-%COMP%]{background-color:#426af5}"]}),P)}}])}();