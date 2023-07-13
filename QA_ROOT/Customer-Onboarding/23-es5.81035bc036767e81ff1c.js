!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,r=void 0,"symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"))?r:String(r)),o)}var a,r}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{q3xE:function(t,o,a){"use strict";a.r(o),a.d(o,"CustomerOnboardingV2Module",function(){return xe});var r=a("SVse"),i=a("laYw"),c=a("nm5K"),s=a("tZUg"),l=a("8Y7J"),u=a("iELJ"),b=a("s7LF"),f=a("iInd"),d=a("VDRc"),g=a("Tj54"),p=a("PDjf"),m=a("Q2Ze"),h=a("M9ds"),v=a("DE60"),y=a("35u7"),x=a("ZTz/"),C=a("Dxy4"),I=a("ura0"),k=a("UhP/");function F(e,t){if(1&e&&(l.Xb(0,"mat-option",23),l.Tc(1),l.Wb()),2&e){var n=t.$implicit;l.rc("value",n.id),l.Eb(1),l.Uc(n.categoryName)}}function O(e,t){if(1&e){var n=l.Yb();l.Xb(0,"mat-icon",24),l.fc("click",function(){l.Hc(n);var e=l.jc().index;return l.jc(2).addCustomerCategory(e)}),l.Tc(1,"add"),l.Wb()}}function T(e,t){if(1&e){var n=l.Yb();l.Xb(0,"mat-icon",24),l.fc("click",function(){l.Hc(n);var e=l.jc().index;return l.jc(2).removeCustomerCategoty(e)}),l.Tc(1,"remove"),l.Wb()}}function w(e,t){if(1&e){var n=l.Yb();l.Xb(0,"div",11),l.Xb(1,"div",12),l.Xb(2,"mat-form-field",13),l.Xb(3,"mat-label"),l.Tc(4,"Customer Category*"),l.Wb(),l.Xb(5,"mat-select",14),l.Rc(6,F,2,2,"mat-option",7),l.Wb(),l.Wb(),l.Xb(7,"div",15),l.Rc(8,O,2,0,"mat-icon",16),l.Rc(9,T,2,0,"ng-template",null,17,l.Sc),l.Wb(),l.Wb(),l.Xb(11,"div",18),l.Xb(12,"div",19),l.Xb(13,"span",20),l.Tc(14),l.Wb(),l.Wb(),l.Xb(15,"div",21),l.Tc(16," Choose "),l.Xb(17,"input",22),l.fc("change",function(e){l.Hc(n);var o=t.index;return l.jc(2).fileName(e,o)}),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&e){var o=t.$implicit,a=t.index,r=l.Dc(10),i=l.jc(2);l.rc("formGroup",o),l.Eb(6),l.rc("ngForOf",i.customerCategoryArr),l.Eb(2),l.rc("ngIf",a==i.customerCategory.controls.length-1)("ngIfElse",r),l.Eb(5),l.rc("ngClass",o.get("fileName").value&&"textLink"),l.Eb(1),l.Uc(o.get("fileName").value?o.get("fileName").value:"File Uploaded")}}function W(e,t){if(1&e&&(l.Xb(0,"mat-option",23),l.Tc(1),l.Wb()),2&e){var n=t.$implicit;l.rc("value",n.id),l.Eb(1),l.Uc(n.chargeCategory)}}function X(e,t){if(1&e){var n=l.Yb();l.Xb(0,"div",1),l.Xb(1,"mat-card",2),l.Xb(2,"h3"),l.Tc(3,"Category"),l.Wb(),l.Xb(4,"div",3),l.Rc(5,w,18,6,"div",4),l.Xb(6,"mat-form-field",5),l.Xb(7,"mat-label"),l.Tc(8,"Charge Category*"),l.Wb(),l.Xb(9,"mat-select",6),l.Rc(10,W,2,2,"mat-option",7),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(11,"div",8),l.Xb(12,"button",9),l.fc("click",function(){return l.Hc(n),l.jc().prevoiustab()}),l.Tc(13," Back "),l.Wb(),l.Xb(14,"button",10),l.fc("click",function(){return l.Hc(n),l.jc().saveotherinf()}),l.Tc(15," Next "),l.Wb(),l.Wb(),l.Wb()}if(2&e){var o=l.jc();l.rc("formGroup",o.othersInfoForm),l.Eb(5),l.rc("ngForOf",o.customerCategory.controls),l.Eb(5),l.rc("ngForOf",o.chargeCategoryArr)}}var P,M=((P=function(){function t(n,o){e(this,t),this.formBuilder=n,this.apiService=o}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.getCustomerCategory(),this.getCustomerChargeCategory(),this.buildOthersInfoForm(),this.apiService.getCustomerData().subscribe(function(t){if(console.log(t),null==t?void 0:t.customerInfoList){e.othersInfoForm.get("customerChargeCategoryId").setValue(t.customerInfoList[0].custCategoryInfo[0].customerChargeCategoryId);for(var n=0;n<t.customerInfoList[0].custCategoryInfo.length;n++)t.customerInfoList[0].custCategoryInfo[n]&&e.addCustomerCategory(t.customerInfoList[0].custCategoryInfo[n])}}),console.log(this.othersInfoForm)}},{key:"ngAfterViewChecked",value:function(){""==this.customerCategory.value&&this.addCustomerCategory("")}},{key:"ngAfterViewInit",value:function(){}},{key:"buildOthersInfoForm",value:function(e){this.othersInfoForm=this.formBuilder.group({customerCategory:this.formBuilder.array([]),customerChargeCategoryId:[e?e.chargeCategory:"",[b.z.required]]})}},{key:"customerCategory",get:function(){return this.othersInfoForm.get("customerCategory")}},{key:"addCustomerCategory",value:function(e){this.customerCategory.push(this.formBuilder.group({customerCategoryId:[e?e.customerCategoryId:"",[b.z.required]],fileName:[e?e.fileName:"",[b.z.required]],fileUrl:[e?e.fileUrl:""]}))}},{key:"removeCustomerCategoty",value:function(e){this.customerCategory.removeAt(e)}},{key:"getCustomerCategory",value:function(){var e=this;this.apiService.getAuthCustomerCategory().subscribe(function(t){e.customerCategoryArr=t})}},{key:"getCustomerChargeCategory",value:function(){var e=this;this.apiService.getAuthCustomerChargeCategory().subscribe(function(t){e.chargeCategoryArr=t})}},{key:"fileName",value:function(e,t){this.customerId=localStorage.getItem("customer_id")?localStorage.getItem("customer_id"):localStorage.getItem("customerId"),console.log(this.customerId),this.customerCategory.controls[t].get("fileName").setValue(e.target.files[0].name),console.log(this.othersInfoForm),this.upload(this.customerId,e.target.files[0],t)}},{key:"upload",value:function(e,t,n){var o=this,a={customerId:e,documentName:t.name,documentType:"21",fileType:"change",fileName:"aadhar 2 Front",verificationType:"KYC verification",documentSide:"1",idNumber:null},r=new FormData;r.append("data",JSON.stringify(a)),r.append("file",t),this.apiService.upload(r).subscribe(function(e){console.log("resp",e),o.customerCategory.controls[n].get("fileUrl").setValue(e.fileUrl)})}},{key:"saveotherinf",value:function(){var e=this;this.apiService.setIndex({index:3}),this.apiService.setFinishFlag({finishFlag:!1});var t={customerId:this.customerId,primaryEmailAdress:localStorage.getItem("Email"),phoneNumber:localStorage.getItem("phoneNo"),custCategoryInfo:this.customerCategory.controls.map(function(t){return{customerCategoryId:t.get("customerCategoryId").value,customerChargeCategoryId:e.othersInfoForm.get("customerChargeCategoryId").value,fileUrl:t.get("fileUrl").value,fileName:t.get("fileName").value}})};console.log("payload---- ",t)}},{key:"prevoiustab",value:function(){this.apiService.setIndex({index:1})}}]),t}()).\u0275fac=function(e){return new(e||P)(l.Rb(b.f),l.Rb(c.b))},P.\u0275cmp=l.Lb({type:P,selectors:[["app-others-information"]],decls:1,vars:1,consts:[["class","top-div","fxLayout","column","fxLayoutAlign","space-between",3,"formGroup",4,"ngIf"],["fxLayout","column","fxLayoutAlign","space-between",1,"top-div",3,"formGroup"],[1,"category-card"],["fxLayout","row wrap","fxLayoutAlign","space-between",1,"categoryDiv"],["fxFlex","100","fxLayout","row","fxLayoutAlign","space-between start","class","customerCategory-div",3,"formGroup",4,"ngFor","ngForOf"],["fxFlex","49.5","appearance","outline"],["formControlName","customerChargeCategoryId"],[3,"value",4,"ngFor","ngForOf"],["fxLayoutAlign","space-between",1,"btn-div"],["mat-raised-button","",1,"Backbtn",3,"click"],["mat-button","","rounded","",1,"Nextbtn",3,"click"],["fxFlex","100","fxLayout","row","fxLayoutAlign","space-between start",1,"customerCategory-div",3,"formGroup"],["fxFlex","49.5",1,"categoryInput"],["appearance","outline","fxFlex","92"],["formControlName","customerCategoryId"],["fxFlex","10","fxLayoutAlign","center center",1,"addbtndiv"],["class","addbtn",3,"click",4,"ngIf","ngIfElse"],["removeBtn",""],["fxFlex","49",1,"back"],[1,"fil"],[1,"fileName",3,"ngClass"],[1,"chooseFile"],["type","file",1,"hide_file",3,"change"],[3,"value"],[1,"addbtn",3,"click"]],template:function(e,t){1&e&&l.Rc(0,X,16,3,"div",0),2&e&&l.rc("ngIf",t.othersInfoForm)},directives:[r.n,d.e,d.d,b.s,b.j,p.a,r.m,m.c,d.b,m.g,x.a,b.r,b.i,C.b,r.l,I.a,k.n,g.a],styles:[".top-div[_ngcontent-%COMP%]{height:90vh}.category-card[_ngcontent-%COMP%]{background-color:#fffefe}.categoryDiv[_ngcontent-%COMP%]{margin-top:20px}.addbtndiv[_ngcontent-%COMP%]{background-color:#e7eef3;border-top-right-radius:5px;border-bottom-right-radius:5px;margin-left:-12px;margin-top:4px;height:43px;padding-bottom:8px}.addbtn[_ngcontent-%COMP%]{font-size:xx-large;color:#004c97;cursor:pointer}.back[_ngcontent-%COMP%]{background-color:#fff;height:50px;border-radius:5px;box-shadow:0 3px 15px rgba(0,0,0,.09019607843137255);position:relative;margin-top:4px}.chooseFile[_ngcontent-%COMP%]{padding:10px;background:transparent linear-gradient(90deg,#051a2d,#004c97) 0 0 no-repeat padding-box;font-family:manrope;color:#fff;border-radius:8px;text-align:center;top:4px;right:8px;width:120px}.chooseFile[_ngcontent-%COMP%], .hide_file[_ngcontent-%COMP%]{position:absolute;cursor:pointer}.hide_file[_ngcontent-%COMP%]{z-index:1000;opacity:0;right:0;top:0;height:100%;font-size:24px;width:100%}.fileName[_ngcontent-%COMP%]{color:#0b0b0b;opacity:.7}.fil[_ngcontent-%COMP%]{position:absolute;top:28%;left:6%}.textLink[_ngcontent-%COMP%]{color:#004a9a;text-decoration:underline;font-family:manrope;cursor:pointer}.btn-div[_ngcontent-%COMP%]{padding:20px}.Nextbtn[_ngcontent-%COMP%]{padding:2px;color:#fff;background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box}.Backbtn[_ngcontent-%COMP%]{padding:2px;background-color:#fff!important}"]}),P),S=a("YSGX"),_=a("DDtv"),N=a("u81B");function L(e,t){if(1&e&&l.Sb(0,"app-customer-basic-info",20),2&e){var n=l.jc();l.rc("verificationType",n.verificationType)}}function R(e,t){if(1&e&&l.Sb(0,"app-genric-document-upload",21),2&e){var n=l.jc();l.rc("screenInfo",n.screenInfo)}}function E(e,t){1&e&&l.Sb(0,"app-others-information")}function V(e,t){1&e&&l.Sb(0,"app-professional-information")}function j(e,t){1&e&&l.Sb(0,"app-financial-details")}function A(e,t){1&e&&l.Sb(0,"app-mandate-details")}var z,D,U=((z=function(){function t(n,o,a,r,i,c,s){e(this,t),this.dialog=n,this.apiService=o,this.ls=a,this.dialogService=r,this.fb=i,this.api=c,this.router=s,this.verificationType="onboarding",this.arrayRelationshipType=[],this.arrayCountry=[],this.screen="Individual",this.finishFlag=!0}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.screenInfo={screenName:"onboarding",data:"",customerId:"",nextIndex:2,previousIndex:0,currentIndex:1},this.selectedIndex=this.ls.getItem("customerOnboadingTabIndex")?this.ls.getItem("customerOnboadingTabIndex"):0,console.log(this.selectedIndex),this.tabIndex=this.selectedIndex,this.api.getIndex().subscribe(function(t){console.log(t.index),e.tabIndex=t.index,e.ls.getItem("customerOnboadingTabIndex")&&(e.tabIndex=e.ls.getItem("customerOnboadingTabIndex")),e.api.getFinishFlag().subscribe(function(t){console.log("finish flag",t.finishFlag),e.assignValueFinish(t.finishFlag)}),0===t.index&&e.assignValuesForTab1(e.tabIndex),1===t.index&&e.assignValuesForTab2(e.tabIndex),2===t.index&&e.assignValuesForTab3(e.tabIndex),3===t.index&&e.assignValuesForTab4(e.tabIndex),4===t.index&&e.assignValuesForTab5(e.tabIndex),5===t.index&&e.assignValuesForTab6(e.tabIndex)})}},{key:"assignValuesForTab1",value:function(e){this.tab1=!1}},{key:"assignValuesForTab2",value:function(e){this.tab2=!1}},{key:"assignValuesForTab3",value:function(e){this.tab3=!1}},{key:"assignValuesForTab4",value:function(e){this.tab4=!1}},{key:"assignValuesForTab5",value:function(e){this.tab5=!1}},{key:"assignValuesForTab6",value:function(e){this.tab6=!1}},{key:"assignValueFinish",value:function(e){this.finishFlag=e}},{key:"previousStep",value:function(){this.router.navigate(["onboarding/customer-type"])}}]),t}()).\u0275fac=function(e){return new(e||z)(l.Rb(u.b),l.Rb(c.b),l.Rb(s.a),l.Rb(i.a),l.Rb(b.f),l.Rb(c.b),l.Rb(f.h))},z.\u0275cmp=l.Lb({type:z,selectors:[["app-new-customer-onboarding-screen"]],decls:30,vars:7,consts:[[1,"header"],[1,"headerMapping"],["fxLayout","row","fxLayoutAlign","start space-between",1,"mt-16"],[1,"headerArrow",3,"click"],[1,"text-large"],[1,"kycStatuscard"],[1,"label"],[1,"status"],[1,"full-width"],[3,"selectedIndex","selectedIndexChange"],["tabGroup",""],["label","Primary Information"],["screenTitle","Individual",3,"verificationType",4,"ngIf"],["label","Proof Of Identity"],[3,"screenInfo",4,"ngIf"],["label","Other Information"],[4,"ngIf"],["label","Professional Information"],["label","Financial Detail"],["label","Mandate"],["screenTitle","Individual",3,"verificationType"],[3,"screenInfo"]],template:function(e,t){1&e&&(l.Xb(0,"div",0),l.Xb(1,"h4",1),l.Tc(2,"Home>New Customer Onboarding | Individual"),l.Wb(),l.Xb(3,"div",2),l.Xb(4,"span",3),l.fc("click",function(){return t.previousStep()}),l.Xb(5,"mat-icon"),l.Tc(6,"arrow_back"),l.Wb(),l.Wb(),l.Xb(7,"span",4),l.Tc(8," New Customer Onboarding / Individual "),l.Wb(),l.Xb(9,"mat-card",5),l.Xb(10,"mat-card-content"),l.Xb(11,"mat-label",6),l.Tc(12,"KYC Status"),l.Wb(),l.Xb(13,"p",7),l.Tc(14,"APPROVED"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(15,"div",8),l.Xb(16,"mat-tab-group",9,10),l.fc("selectedIndexChange",function(e){return t.tabIndex=e}),l.Xb(18,"mat-tab",11),l.Rc(19,L,1,1,"app-customer-basic-info",12),l.Wb(),l.Xb(20,"mat-tab",13),l.Rc(21,R,1,1,"app-genric-document-upload",14),l.Wb(),l.Xb(22,"mat-tab",15),l.Rc(23,E,1,0,"app-others-information",16),l.Wb(),l.Xb(24,"mat-tab",17),l.Rc(25,V,1,0,"app-professional-information",16),l.Wb(),l.Xb(26,"mat-tab",18),l.Rc(27,j,1,0,"app-financial-details",16),l.Wb(),l.Xb(28,"mat-tab",19),l.Rc(29,A,1,0,"app-mandate-details",16),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Eb(16),l.rc("selectedIndex",t.tabIndex),l.Eb(3),l.rc("ngIf",0==t.tabIndex),l.Eb(2),l.rc("ngIf",1==t.tabIndex),l.Eb(2),l.rc("ngIf",2==t.tabIndex),l.Eb(2),l.rc("ngIf",3==t.tabIndex),l.Eb(2),l.rc("ngIf",4==t.tabIndex),l.Eb(2),l.rc("ngIf",5==t.tabIndex))},directives:[d.e,d.d,g.a,p.a,p.d,m.g,h.b,h.a,r.n,v.a,y.a,M,S.a,_.a,N.a],styles:[".popup-dialog-class[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]{padding-bottom:0;padding-right:0;padding-left:0}.jointCust[_ngcontent-%COMP%]{color:#004c97}.text-large[_ngcontent-%COMP%]{padding-left:20px;font-size:24px;width:36%}.headerArrow[_ngcontent-%COMP%]{padding-left:65px;cursor:pointer;margin-top:5px}.headerMapping[_ngcontent-%COMP%]{top:108px;left:120px;height:17px;font:var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/17px Manrope;letter-spacing:var(--unnamed-character-spacing-0);text-align:left;font:normal normal normal 12px/17px Manrope;letter-spacing:0;color:#bfbfc1;padding-left:70px}.label[_ngcontent-%COMP%]{font-size:10px}.kycStatuscard[_ngcontent-%COMP%]{height:59px;width:12%;border-radius:8px;background:#e2f7f1 0 0 no-repeat padding-box;border:1px solid #008461;margin-left:42%;margin-top:-32px;padding:8px 0 0 20px!important}.status[_ngcontent-%COMP%]{color:#008461;opacity:.85;margin-bottom:20px}.header[_ngcontent-%COMP%]{padding-top:4%} .mat-tab-label-active{color:#004c97!important;font-family:manrope!important;opacity:1!important} .mat-tab-group.mat-primary .mat-ink-bar{background-color:#004c97!important;height:2px} .mat-tab-header{background-color:#fff} .mat-tab-label .mat-tab-label-content{width:12pc;font-size:14px;font-family:manrope} .mat-elevation-z4{box-shadow:none!important} .egret-blue.mat-tab-header-pagination-chevron{border-color:#004c97!important}"]}),z),G=a("u9T3"),B=a("vrAh"),Y=a("pMoy"),q=a("f44v"),H=a("TN/R"),J=a("o4Yh"),K=a("40+f"),Z=a("e6WT"),Q=a("SqCe"),$=a("rJgo"),ee=a("BTe0"),te=a("pu8Q"),ne=a("zQhy"),oe=a("q7Ft"),ae=a("jMqV"),re=a("mPVK"),ie=a("hzfI"),ce=a("l0rg"),se=a("ZFy/"),le=a("cUpR"),ue=a("w9WL"),be=a("jgPy"),fe=a("zMWy"),de=a("PCNd"),ge=a("hrfs"),pe=a("aLe/"),me=a("EpeG"),he=[{path:"individual-onboarding",component:U},{path:"customer-type",component:(D=function(){function t(n){e(this,t),this.dialogService=n}return n(t,[{key:"ngOnInit",value:function(){console.log("customerv2"),this.dialogService.openOnboardingVerificationMethod()}}]),t}(),D.\u0275fac=function(e){return new(e||D)(l.Rb(i.a))},D.\u0275cmp=l.Lb({type:D,selectors:[["app-customer-type-dialog"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),D)}],ve=a("Gp04");a("cMG6");var ye,xe=((ye=n(function t(){e(this,t)})).\u0275mod=l.Pb({type:ye}),ye.\u0275inj=l.Ob({factory:function(e){return new(e||ye)},providers:[_.a,N.a,S.a,M],imports:[[r.c,r.c,b.l,G.a,pe.c,b.x,g.b,Q.e,ie.c,C.c,p.f,K.a,J.b,$.c,re.a,x.b,te.a,m.e,B.b,Z.c,H.f,k.m,be.a,ae.b,q.b,se.b,Y.b,oe.g,ge.a,ne.c,h.c,ce.b,ee.b,G.a,ue.a,le.c,de.a,fe.a,me.b,ve.a,f.l.forChild(he)]]}),ye)}}])}();