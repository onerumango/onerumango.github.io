!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"))?o:String(o)),n)}var a,o}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+DZj":function(t,n,a){"use strict";a.d(n,"a",function(){return R});var o=a("iELJ"),c=a("s7LF"),r=a("dyf6"),s=a("nm5K"),l=a("PSD3"),b=a.n(l),d=a("8Y7J"),u=a("zHaW"),p=a("Dxy4"),g=a("Tj54"),f=a("SVse"),m=a("VDRc"),h=a("PDjf"),v=a("e6WT"),y=a("ura0"),x=function(e){return{color:e}};function I(e,t){if(1&e){var i=d.Yb();d.Xb(0,"form",6),d.Xb(1,"div",7),d.Xb(2,"div",4),d.Xb(3,"span",8),d.Tc(4),d.Wb(),d.Xb(5,"span",9),d.Tc(6),d.Wb(),d.Xb(7,"div",10),d.Sb(8,"img",11),d.Wb(),d.Xb(9,"div",12),d.Xb(10,"mat-card",13),d.Sb(11,"input",14),d.Wb(),d.Wb(),d.Sb(12,"br"),d.Xb(13,"span",15),d.Xb(14,"span",16),d.fc("click",function(){return d.Hc(i),d.jc().getOtp()}),d.Tc(15,"Resend"),d.Wb(),d.Wb(),d.Wb(),d.Wb(),d.Xb(16,"button",17),d.fc("click",function(){d.Hc(i);var e=d.jc();return e.verify(e.basicInformationForm.value)}),d.Tc(17,"Proceed"),d.Wb(),d.Wb()}if(2&e){var n=d.jc();d.rc("formGroup",n.basicInformationForm),d.Eb(4),d.Uc(n.errormsg),d.Eb(2),d.Vc("Code has been sent to ",n.number,""),d.Eb(8),d.rc("ngStyle",d.xc(6,x,3==n.numberOfClick&&"gray")),d.Eb(2),d.rc("ngClass",1==n.basicInformationForm.valid?"buttonName":"buttonData")("disabled",!n.basicInformationForm.valid)}}function k(e,t){if(1&e&&(d.Xb(0,"tr"),d.Xb(1,"td"),d.Tc(2),d.Wb(),d.Wb()),2&e){var i=d.jc(2);d.Eb(2),d.Vc("Address: ",i.address,"")}}function C(e,t){if(1&e&&(d.Xb(0,"mat-card",18),d.Xb(1,"div"),d.Xb(2,"tr"),d.Xb(3,"td"),d.Tc(4),d.Wb(),d.Wb(),d.Xb(5,"tr"),d.Xb(6,"td"),d.Tc(7),d.Wb(),d.Wb(),d.Xb(8,"tr"),d.Xb(9,"td"),d.Tc(10),d.Wb(),d.Wb(),d.Rc(11,k,3,1,"tr",19),d.Wb(),d.Wb()),2&e){var i=d.jc();d.Eb(4),d.Vc("Name:",i.name,""),d.Eb(3),d.Vc("Id Number:",i.id,""),d.Eb(3),d.Vc("Dob: ",i.dob,""),d.Eb(1),d.rc("ngIf",i.address)}}var R=function(){var t=function(){function t(i,n,a,o,c){e(this,t),this.dialogRef=i,this.snack=n,this.api=a,this.fb=o,this.data=c,this.update=new r.c,this.otpmodel=new _,this.numberOfClick=0,this.isGreater=!1,this.number=c.number,this.type=c.type,this.dob=c.dob,this.id=c.id,this.name=c.name,this.address=c.address}return i(t,[{key:"ngOnInit",value:function(){"OCR function"!==this.type&&(this.errormsg="An OTP has been sent to your "+this.type+" !",this.basicInformationForm=this.fb.group({otp:["",[c.z.required,c.z.pattern("[0-9]{6}$")]]}))}},{key:"buttonClick",value:function(){}},{key:"closeClick",value:function(){console.log("reached here"),this.dialogRef.close()}},{key:"verify",value:function(e){var t=this;console.log(e),this.otpValidate=localStorage.getItem("otpValidate"),"email id"==this.type&&(this.update.sourceKey="email"),"Mobile Number"==this.type&&(this.update.sourceKey="mobile"),this.update.sourceValue=this.number,console.log(this.update.sourceValue),this.update.otp=e.otp,console.log(this.update.otp),this.update.type="",this.api.getOtpValidating(this.update).subscribe(function(e){console.log("response from backend",e),null!=e.data?e&&"Mobile Number"==t.type?(t.closeClick(),t.api.setVerify({verify:"verified",type:t.update.sourceKey})):e&&"email id"==t.type&&(t.closeClick(),t.api.setVerify1({verify:"verified",type:t.update.sourceKey})):t.snack.open("Entered Invalid OTP","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})},function(e){console.log("error : ",e.responseMessage,e),e.error&&b.a.fire({icon:"error",text:"Error message : "+e.error,width:500,confirmButtonText:"OK",confirmButtonColor:"#456EFE"}),e&&"Mobile Number"==t.type?(t.closeClick(),t.api.setVerify({verify:"verify",type:t.update.sourceKey})):(console.log("in else eerrrr email"),t.api.setVerify1({verify:"verify",type:t.update.sourceKey}),t.errormsg="Error in OTP"),t.closeClick()})}},{key:"getOtp",value:function(){var e=this;3!=this.numberOfClick?(this.numberOfClick=this.numberOfClick+1,"email id"==this.type&&(this.otpmodel.source_key="email",this.otpmodel.source="customer",this.otpmodel.source_value=this.number),"Mobile Number"==this.type&&(this.otpmodel.source_key="mobile",this.otpmodel.source="customer",this.otpmodel.source_value=this.number),this.api.getOtp(this.otpmodel).subscribe(function(t){console.log(t),null!==t&&e.snack.open("OTP has been sent again","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})):this.snack.open("Maximum Attempt Reached","Ok",{horizontalPosition:"right",verticalPosition:"top",duration:3e3})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.Rb(o.g),d.Rb(u.a),d.Rb(s.b),d.Rb(c.f),d.Rb(o.a))},t.\u0275cmp=d.Lb({type:t,selectors:[["app-fingerprint-authentication"]],decls:7,vars:2,consts:[["mat-button","","id","close","mat-dialog-close","",3,"click"],[1,"closeicon"],[3,"formGroup",4,"ngIf"],["fxLayout","row",1,"ocrDiv"],["id","box",1,"pd-2"],["class","pd-2",4,"ngIf"],[3,"formGroup"],["fxLayout","row"],[1,"verification"],[1,"phoneNumber"],[1,"propic","text-center"],["src","assets/images/svg/otp_image.svg","alt","",1,"w-70"],[1,"flex-grow-1"],["type","input",1,"inputMatcard"],["matInput","","id","otp","placeholder","ENTER OTP","type","number","maxlength","6","oninput","this.value = this.value.slice(0, this.maxLength);","formControlName","otp",1,"alignment"],[1,"verify1"],["id","resend",3,"ngStyle","click"],["mat-raised-button","",3,"ngClass","disabled","click"],[1,"pd-2"],[4,"ngIf"]],template:function(e,t){1&e&&(d.Xb(0,"button",0),d.fc("click",function(){return t.closeClick()}),d.Xb(1,"mat-icon",1),d.Tc(2,"close"),d.Wb(),d.Wb(),d.Rc(3,I,18,8,"form",2),d.Xb(4,"div",3),d.Xb(5,"div",4),d.Rc(6,C,12,4,"mat-card",5),d.Wb(),d.Wb()),2&e&&(d.Eb(3),d.rc("ngIf","OCR function"!=t.type),d.Eb(3),d.rc("ngIf","OCR function"==t.type))},directives:[p.b,g.a,f.n,m.e,c.A,c.s,c.j,h.a,v.b,c.v,c.c,c.m,c.r,c.i,f.o,y.b,f.l,y.a],styles:[".phoneNumber[_ngcontent-%COMP%]{margin-bottom:20px;font-size:smaller;font-weight:bolder}.phoneNumber[_ngcontent-%COMP%], .verification[_ngcontent-%COMP%]{display:block;text-align:center}.verification[_ngcontent-%COMP%]{margin:8% 5% 3%;font-size:22px}.verify[_ngcontent-%COMP%]{font-size:14px}.verify[_ngcontent-%COMP%], .verify1[_ngcontent-%COMP%]{display:block;color:grey;text-align:center;cursor:pointer}.verify1[_ngcontent-%COMP%]{font-size:10px;margin-top:5px}.flex-grow-1[_ngcontent-%COMP%]{flex-grow:1}.ocrDiv[_ngcontent-%COMP%]{width:500px}.ocrDetailsSpan[_ngcontent-%COMP%]{margin-left:40%;font-size:20px}.inputClass[_ngcontent-%COMP%]{border-style:hidden;box-shadow:0 3pt 6pt rgba(0,0,0,.1607843137254902);font-weight:bolder}matCard[_ngcontent-%COMP%]{max-width:500px;align-items:center;justify-content:center;padding:5px}input[_ngcontent-%COMP%]{border-style:hidden;font-weight:bolder}.inputMatcard[_ngcontent-%COMP%]{padding:12px;max-width:55%;align-items:center;justify-content:center;display:flex;margin:20px auto auto}.buttonName[_ngcontent-%COMP%]{background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box;color:#fff}.buttonData[_ngcontent-%COMP%], .buttonName[_ngcontent-%COMP%]{width:170px;display:block;border-radius:45px;margin:25px auto 4%;border-radius:23px;opacity:1}.cdk-overlay-pane.my-dialog[_ngcontent-%COMP%]{position:relative!important}.close.mat-button[_ngcontent-%COMP%]{padding:5px;line-height:14px;min-width:auto}.close.mat-button[_ngcontent-%COMP%], .closeicon[_ngcontent-%COMP%]{position:absolute;top:0;right:0}.closeicon[_ngcontent-%COMP%]{line-height:0;width:18px}#close[_ngcontent-%COMP%]{float:right}#box[_ngcontent-%COMP%]{width:600px}#resend[_ngcontent-%COMP%]{font-weight:bolder;font-size:small;color:#000}#proceed[_ngcontent-%COMP%]{width:170px;background-color:#456efe;color:#fff;margin-top:25px;margin-bottom:4%}#otp[_ngcontent-%COMP%]{outline:none;text-align:center;letter-spacing:10px}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}"]}),t}(),_=i(function t(){e(this,t)})},dyf6:function(t,n,a){"use strict";a.d(n,"a",function(){return E}),a.d(n,"b",function(){return F}),a.d(n,"c",function(){return B});var o=a("nm5K"),c=a("DyWe"),r=a("POE1"),s=a("hwCN"),l=a("vjsB"),b=a("iiaH"),d=a("tZUg"),u=a("8Y7J"),p=a("iELJ"),g=a("zHaW"),f=a("PDjf"),m=a("VDRc"),h=a("SVse"),v=a("Tj54"),y=a("ura0"),x=a("Q2Ze"),I=a("Dxy4");function k(e,t){1&e&&(u.Vb(0),u.Xb(1,"mat-icon",27),u.Tc(2,"check_circle "),u.Wb(),u.Ub())}function C(e,t){1&e&&(u.Xb(0,"div",28),u.Sb(1,"img",29),u.Wb()),2&e&&(u.Eb(1),u.rc("src","assets/images/svg/fingerPrint.svg",u.Jc))}function R(e,t){if(1&e&&u.Sb(0,"img",30),2&e){var i=u.jc();u.rc("src",i.imageURLBioScan,u.Jc)}}function _(e,t){if(1&e){var i=u.Yb();u.Xb(0,"span",31),u.fc("click",function(e){return u.Hc(i),u.jc().openDialogForType1(e)}),u.Tc(1,"Scan "),u.Wb()}}function P(e,t){if(1&e){var i=u.Yb();u.Xb(0,"span",31),u.fc("click",function(e){return u.Hc(i),u.jc().openDialogForType1(e)}),u.Tc(1,"Re-Scan "),u.Wb()}}function O(e,t){1&e&&(u.Vb(0),u.Xb(1,"mat-icon",27),u.Tc(2,"check_circle "),u.Wb(),u.Ub())}function S(e,t){1&e&&(u.Xb(0,"div",32),u.Sb(1,"img",29),u.Wb()),2&e&&(u.Eb(1),u.rc("src","assets/images/svg/irish.svg",u.Jc))}function W(e,t){if(1&e&&u.Sb(0,"img",33),2&e){var i=u.jc();u.rc("src",i.imageURLIrish,u.Jc)}}function w(e,t){if(1&e){var i=u.Yb();u.Xb(0,"span",31),u.fc("click",function(){return u.Hc(i),u.jc().openDialogForType2()}),u.Tc(1,"Scan "),u.Wb()}}function X(e,t){if(1&e){var i=u.Yb();u.Xb(0,"span",31),u.fc("click",function(){return u.Hc(i),u.jc().openDialogForType2()}),u.Tc(1," Re-Scan "),u.Wb()}}function M(e,t){1&e&&(u.Vb(0),u.Xb(1,"mat-icon",27),u.Tc(2,"check_circle "),u.Wb(),u.Ub())}function L(e,t){1&e&&(u.Xb(0,"div",32),u.Sb(1,"img",34),u.Wb()),2&e&&(u.Eb(1),u.rc("src","assets/images/svg/face.svg",u.Jc))}function U(e,t){if(1&e&&u.Sb(0,"img",33),2&e){var i=u.jc();u.rc("src",i.imageURLFace,u.Jc)}}function D(e,t){if(1&e){var i=u.Yb();u.Xb(0,"span",31),u.fc("click",function(){return u.Hc(i),u.jc().openDialogForType3()}),u.Tc(1,"Scan "),u.Wb()}}function T(e,t){if(1&e){var i=u.Yb();u.Xb(0,"span",31),u.fc("click",function(){return u.Hc(i),u.jc().openDialogForType3()}),u.Tc(1,"Re-Scan "),u.Wb()}}var E=function(){var t=function(){function t(i,n,a,o,c,r){e(this,t),this.api=i,this.dialog=n,this.snack=a,this.shareDataService=o,this.ls=c,this.apiService=r,this.document_type=["4","5","11","12"],this.irisScan=!1,this.biometricScan=!1,this.imageURLIrish="not_available",this.imageURLBioScan="not_available",this.imageURLFace="not_available",this.customerId=null}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.api.getKycRef().subscribe(function(t){e.assignKyc(t.kycReference)}),this.shareDataService.getCustomerId.subscribe(function(t){null!=t&&(e.refreshCustomerId=t,e.getAdditionalDocuments(t))}),this.customerId=this.ls.getItem("customer_id"),localStorage.getItem("customer_id")&&this.getAdditionalDocuments(localStorage.getItem("customer_id"))}},{key:"assignKyc",value:function(e){this.kycRef=e}},{key:"getAdditionalDocuments",value:function(e){var t=this;for(var i in e&&(this.customerId=e),this.document_type)Object.prototype.hasOwnProperty.call(this.document_type,i)&&this.api.getCustomerDocuments(e,this.document_type[i]).subscribe(function(e){null!=e&&(console.log("data:: ",e),4==e[0].documentType&&(t.imageURLBioScan=e[0].fileUrl,t.biometricScan=!0,t.fingerPrintId=e[0].id),11==e[0].documentType&&(t.imageURLIrish=e[0].fileUrl,t.irisScan=!0,t.irisId=e[0].id),12==e[0].documentType&&(t.imageURLFace=e[0].fileUrl,t.faceScan=!0,t.faceId=e[0].id))})}},{key:"deleteBioMetric",value:function(e){var t=this;if("fingerprint"==e&&"not_available"!=this.imageURLBioScan)this.api.deleteCustomerDoc(this.customerId,this.fingerPrintId).subscribe(function(e){t.imageURLBioScan="not_available",t.fingerPrintId="",t.snack.open("Fingerprint Deleted Successfully!","Ok",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"})},function(e){console.log(e),t.snack.open("Unable to delete Fingerprint!","Ok",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})});else if("iris"==e&&"not_available"!=this.imageURLBioScan)this.api.deleteCustomerDoc(this.customerId,this.irisId).subscribe(function(e){t.imageURLIrish="not_available",t.irisId="",t.snack.open("Iris Deleted Successfully!","Ok",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"})},function(e){t.snack.open("Unable to delete Iris!","Ok",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})});else{if("not_available"==this.imageURLFace)return;this.api.deleteCustomerDoc(this.customerId,this.faceId).subscribe(function(e){t.imageURLFace="not_available",t.faceId="",t.snack.open("Face Deleted Successfully!","Ok",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"})},function(e){t.snack.open("Unable to delete Face!","Ok",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})})}}},{key:"openDialogForType1",value:function(e){var t=this;this.dialog.open(c.a,{data:{bioData:this.biometricData,customerId:this.refreshCustomerId,verificationType:"kyc"},disableClose:!0,width:"40%"}).afterClosed().subscribe(function(e){if(t.biometricData=e.data,e.isScanned){t.biometricScan=!0,t.imageURLBioScan="data:image/bmp;base64,"+t.biometricData.BMPBase64;var i=new FormData,n=t.DataURIToBlob(t.imageURLBioScan);i.append("file",n,"image.jpg"),i.append("figName","FINGERPRINT"),i.append("customerId",t.customerId),i.append("verify","kyc-verification"),t.apiService.saveOrUpdateBio(i).subscribe(function(e){t.fingerPrintId=e.id,t.snack.open("Fingerprint Saved Successfully!","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}})}},{key:"openDialogForType2",value:function(){var e=this;this.dialog.open(r.a,{data:{number:"9656849771",type:"Mobile Number",customerId:this.customerId},disableClose:!0,width:"40%"}).afterClosed().subscribe(function(t){if(console.log("submit :: ",t),t.isScanned){e.irisScan=!0,e.irisData=t.data,e.imageURLIrish=e.irisData.fileUrl;var i=new FormData,n=e.DataURIToBlob(e.imageURLIrish);i.append("file",n,"image.jpg"),i.append("figName","IRIS"),i.append("customerId",e.customerId),i.append("verify","kyc-verification"),e.apiService.saveOrUpdateBio(i).subscribe(function(t){t&&t.fileUrl&&(e.irisId=t.id,e.snack.open("IRIS Saved Successfully!","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"}))})}else e.irisScan=!1,e.imageURLIrish="not_available"})}},{key:"openDialogForType3",value:function(e){var t=this;this.dialog.open(s.a,{data:{number:"9656849771",type:"Mobile Number",customerId:this.customerId},disableClose:!0,width:"40%"}).afterClosed().subscribe(function(e){if("close"!=e)if(e.isScanned){t.faceScan=!0,t.imageURLFace=e.image;var i=new FormData,n=t.DataURIToBlob(t.imageURLFace);i.append("file",n,"image.jpg"),i.append("figName","FACE"),i.append("customerId",t.customerId),i.append("verify","kyc-verification"),t.apiService.saveOrUpdateBio(i).subscribe(function(e){e&&e.fileUrl&&(t.faceId=e.id,t.snack.open("Face Saved Successfully!","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"}))})}else t.imageURLFace="not_available",t.faceScan=!1})}},{key:"DataURIToBlob",value:function(e){for(var t=e.split(","),i=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),n=t[0].split(":")[1].split(";")[0],a=new Uint8Array(i.length),o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return new Blob([a],{type:n})}},{key:"onNext",value:function(){"not_available"==this.imageURLIrish&&"not_available"==this.imageURLBioScan&&"not_available"==this.imageURLFace||(this.api.setIndex({index:0}),this.api.setFinishFlag({finishFlag:!0}),this.dialog.open(l.a,{data:{kycRef:this.kycRef,rekyc:!1,popupClose:!1},disableClose:!0,width:"45%"}).afterClosed().subscribe(function(e){}))}},{key:"previous",value:function(){this.api.setIndex({index:1});var e=localStorage.getItem("customer_id");console.log("custId::",localStorage.getItem("customer_id")),this.shareDataService.shareCustomerId(e)}},{key:"ngOnDestroy",value:function(){this.shareDataService.shareCustomerId(null)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Rb(o.b),u.Rb(p.b),u.Rb(g.a),u.Rb(b.a),u.Rb(d.a),u.Rb(o.b))},t.\u0275cmp=u.Lb({type:t,selectors:[["app-kyc-basic-information"]],decls:72,vars:22,consts:[[1,"m-333",2,"padding-left","4.5%","padding-right","4.5%"],[1,"matCard"],["fxLayout","row","fxLayoutGap","20px"],["fxLayout","column",1,"flex-grow-2","mat-card-doc"],[1,"inner-mat-card"],["fxLayout","row",3,"fxLayoutAlign"],[4,"ngIf"],["fxLayoutAlign","center center",1,"deleteDiv"],[3,"ngClass","click"],["fxLayoutAlign","center center",1,"insertDriveImg"],["fxFlex","100","fxLayoutAlign","center center",4,"ngIf","ngIfElse"],["showAvatar",""],[1,"dived"],[2,"margin-left","20%","color","gray","font-family","Manrope"],["fxFlex","100","fxLayoutAlign","center center",2,"display","flex","height","30px","padding","10px"],["class","scanButton",3,"click",4,"ngIf","ngIfElse"],["reScanbtn",""],["fxLayoutAlign","center center",4,"ngIf","ngIfElse"],["showIris",""],[2,"margin-left","35%","color","gray","font-family","Manrope"],["reScanIris",""],["showFace",""],["reScanFace",""],[1,"button"],[1,"Back",3,"click"],["mat-stroked-button","",3,"ngClass","click"],[2,"color","white"],[2,"color","green","cursor","pointer","padding-left","5px"],["fxFlex","100","fxLayoutAlign","center center"],["alt","",1,"finger-print-icon",3,"src"],["alt","",2,"max-width","60%",3,"src"],[1,"scanButton",3,"click"],["fxLayoutAlign","center center"],["alt","",2,"max-width","80%",3,"src"],["alt","",3,"src"]],template:function(e,t){if(1&e&&(u.Xb(0,"div",0),u.Xb(1,"mat-card",1),u.Sb(2,"br"),u.Xb(3,"table"),u.Xb(4,"tbody"),u.Xb(5,"tr",2),u.Xb(6,"td"),u.Xb(7,"mat-card",3),u.Xb(8,"mat-card",4),u.Xb(9,"div",5),u.Rc(10,k,3,0,"ng-container",6),u.Xb(11,"div",7),u.Xb(12,"mat-icon",8),u.fc("click",function(){return t.deleteBioMetric("fingerprint")}),u.Tc(13," delete "),u.Wb(),u.Wb(),u.Wb(),u.Xb(14,"div",9),u.Rc(15,C,2,1,"div",10),u.Rc(16,R,1,1,"ng-template",null,11,u.Sc),u.Wb(),u.Xb(18,"div",12),u.Xb(19,"mat-label",13),u.Tc(20,"Fingerprint Scan "),u.Wb(),u.Sb(21,"br"),u.Wb(),u.Wb(),u.Xb(22,"div",14),u.Rc(23,_,2,0,"span",15),u.Rc(24,P,2,0,"ng-template",null,16,u.Sc),u.Wb(),u.Wb(),u.Wb(),u.Xb(26,"td"),u.Xb(27,"mat-card",3),u.Xb(28,"mat-card",4),u.Xb(29,"div",5),u.Rc(30,O,3,0,"ng-container",6),u.Xb(31,"div",7),u.Xb(32,"mat-icon",8),u.fc("click",function(){return t.deleteBioMetric("iris")}),u.Tc(33," delete "),u.Wb(),u.Wb(),u.Wb(),u.Xb(34,"div",9),u.Rc(35,S,2,1,"div",17),u.Rc(36,W,1,1,"ng-template",null,18,u.Sc),u.Wb(),u.Xb(38,"div",12),u.Xb(39,"mat-label",19),u.Tc(40,"Irish Scan "),u.Wb(),u.Sb(41,"br"),u.Wb(),u.Wb(),u.Xb(42,"div",14),u.Rc(43,w,2,0,"span",15),u.Rc(44,X,2,0,"ng-template",null,20,u.Sc),u.Wb(),u.Wb(),u.Wb(),u.Xb(46,"td"),u.Xb(47,"mat-card",3),u.Xb(48,"mat-card",4),u.Xb(49,"div",5),u.Rc(50,M,3,0,"ng-container",6),u.Xb(51,"div",7),u.Xb(52,"mat-icon",8),u.fc("click",function(){return t.deleteBioMetric("face")}),u.Tc(53," delete "),u.Wb(),u.Wb(),u.Wb(),u.Xb(54,"div",9),u.Rc(55,L,2,1,"div",17),u.Rc(56,U,1,1,"ng-template",null,21,u.Sc),u.Wb(),u.Xb(58,"div",12),u.Xb(59,"mat-label",19),u.Tc(60,"Face Scan "),u.Wb(),u.Sb(61,"br"),u.Wb(),u.Wb(),u.Xb(62,"div",14),u.Rc(63,D,2,0,"span",15),u.Rc(64,T,2,0,"ng-template",null,22,u.Sc),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Xb(66,"div",23),u.Xb(67,"span",24),u.fc("click",function(){return t.previous()}),u.Tc(68,"Back"),u.Wb(),u.Xb(69,"button",25),u.fc("click",function(){return t.onNext()}),u.Xb(70,"span",26),u.Tc(71,"Finish"),u.Wb(),u.Wb(),u.Wb()),2&e){var i=u.Dc(17),n=u.Dc(25),a=u.Dc(37),o=u.Dc(45),c=u.Dc(57),r=u.Dc(65);u.Eb(9),u.rc("fxLayoutAlign","not_available"!=t.imageURLBioScan?"space-between center":"end center"),u.Eb(1),u.rc("ngIf","not_available"!=t.imageURLBioScan),u.Eb(2),u.rc("ngClass","not_available"==t.imageURLBioScan?"deleteBtnDisabled":"deleteBtn"),u.Eb(3),u.rc("ngIf","not_available"==t.imageURLBioScan||null==t.imageURLBioScan)("ngIfElse",i),u.Eb(8),u.rc("ngIf","not_available"==t.imageURLBioScan)("ngIfElse",n),u.Eb(6),u.rc("fxLayoutAlign","not_available"!=t.imageURLIrish?"space-between center":"end center"),u.Eb(1),u.rc("ngIf","not_available"!=t.imageURLIrish),u.Eb(2),u.rc("ngClass","not_available"==t.imageURLIrish?"deleteBtnDisabled":"deleteBtn"),u.Eb(3),u.rc("ngIf","not_available"==t.imageURLIrish)("ngIfElse",a),u.Eb(8),u.rc("ngIf","not_available"==t.imageURLIrish)("ngIfElse",o),u.Eb(6),u.rc("fxLayoutAlign","not_available"!=t.imageURLFace?"space-between center":"end center"),u.Eb(1),u.rc("ngIf","not_available"!=t.imageURLFace),u.Eb(2),u.rc("ngClass","not_available"==t.imageURLFace?"deleteBtnDisabled":"deleteBtn"),u.Eb(3),u.rc("ngIf","not_available"==t.imageURLFace)("ngIfElse",c),u.Eb(8),u.rc("ngIf","not_available"==t.imageURLFace)("ngIfElse",r),u.Eb(6),u.rc("ngClass","not_available"==t.imageURLIrish&&"not_available"==t.imageURLBioScan&&"not_available"==t.imageURLFace?"Next":"Next1")}},directives:[f.a,m.e,m.f,m.d,h.n,v.a,h.l,y.a,x.g,m.b,I.b],styles:[".button[_ngcontent-%COMP%]{display:flex;gap:20px;flex-wrap:wrap;justify-content:space-between;padding-left:14.7%;padding-right:17.4%;background-color:#fff}.button[_ngcontent-%COMP%], .matCard[_ngcontent-%COMP%]{align-items:center}.matCard[_ngcontent-%COMP%]{justify-content:center;margin:10px -.5% 3% 0}mat-label[_ngcontent-%COMP%]{margin-right:6%}.Back[_ngcontent-%COMP%]{margin:12px 0 12px -8%;width:150px;letter-spacing:0;color:#342711;background:#fff 0 0 no-repeat padding-box;box-shadow:3px 3px 15px rgba(0,0,0,.058823529411764705);border-radius:35px;opacity:1;cursor:pointer;height:49px;padding-left:55px;padding-top:15px}.Next1[_ngcontent-%COMP%]{background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box;opacity:1}.Next[_ngcontent-%COMP%], .Next1[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;border-radius:23px;color:#fff;height:49px}.Next[_ngcontent-%COMP%]{background:#6c6c6c 0 0 no-repeat padding-box;opacity:.38!important}.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.mat-card-doc[_ngcontent-%COMP%]{background:#fff 0 0 no-repeat padding-box;border:3px solid #fff;border-radius:14px;opacity:1;padding:0;margin:4px}.inner-mat-card[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding:0;background:#f3f3f3 0 0 no-repeat padding-box;border-radius:12px}.insertDriveImg[_ngcontent-%COMP%]{color:#456efe;display:block;margin:auto;width:175px;height:108px;text-align:center;opacity:1}.scanButton[_ngcontent-%COMP%]{display:inline-block;color:#004c97;opacity:1;cursor:pointer}.dived[_ngcontent-%COMP%]{padding-top:15px;font-size:14px;color:#051a2d}#clr[_ngcontent-%COMP%]{height:180px;width:180px}#fingerprintSpan[_ngcontent-%COMP%]{font-weight:700;text-align:center;font-size:12px;margin-bottom:4px}.finger-print-icon[_ngcontent-%COMP%]{height:58.34px;width:58.34px}.deleteDiv[_ngcontent-%COMP%]{height:36px;width:38px;background-color:#fff;border-bottom-left-radius:10px}.deleteBtn[_ngcontent-%COMP%]{color:red;cursor:pointer}.deleteBtnDisabled[_ngcontent-%COMP%]{color:grey}"]}),t}(),F=i(function t(){e(this,t)}),B=i(function t(){e(this,t)})}}])}();