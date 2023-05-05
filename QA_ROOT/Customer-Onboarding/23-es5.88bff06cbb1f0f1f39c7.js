!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,r=void 0,"symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?r:String(r)),a)}var o,r}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{q3xE:function(t,a,o){"use strict";o.r(a),o.d(a,"CustomerOnboardingV2Module",function(){return fe});var r=o("SVse"),i=o("laYw"),c=o("nm5K"),s=o("tZUg"),l=o("8Y7J"),b=o("iELJ"),u=o("s7LF"),g=o("iInd"),d=o("VDRc"),f=o("Tj54"),p=o("PDjf"),m=o("Q2Ze"),h=o("M9ds"),x=o("DE60"),y=o("35u7"),v=o("ZTz/"),C=o("Dxy4"),I=o("ura0"),k=o("UhP/");function F(e,t){if(1&e&&(l.Xb(0,"mat-option",23),l.Tc(1),l.Wb()),2&e){var n=t.$implicit;l.rc("value",n.categoryName),l.Eb(1),l.Uc(n.categoryName)}}function O(e,t){if(1&e){var n=l.Yb();l.Xb(0,"mat-icon",24),l.fc("click",function(){l.Hc(n);var e=l.jc().index;return l.jc(2).addCustomerCategory(e)}),l.Tc(1,"add"),l.Wb()}}function w(e,t){if(1&e){var n=l.Yb();l.Xb(0,"mat-icon",24),l.fc("click",function(){l.Hc(n);var e=l.jc().index;return l.jc(2).removeCustomerCategoty(e)}),l.Tc(1,"remove"),l.Wb()}}function W(e,t){if(1&e){var n=l.Yb();l.Xb(0,"div",11),l.Xb(1,"div",12),l.Xb(2,"mat-form-field",13),l.Xb(3,"mat-label"),l.Tc(4,"Customer Category*"),l.Wb(),l.Xb(5,"mat-select",14),l.Rc(6,F,2,2,"mat-option",7),l.Wb(),l.Wb(),l.Xb(7,"div",15),l.Rc(8,O,2,0,"mat-icon",16),l.Rc(9,w,2,0,"ng-template",null,17,l.Sc),l.Wb(),l.Wb(),l.Xb(11,"div",18),l.Xb(12,"div",19),l.Xb(13,"span",20),l.Tc(14),l.Wb(),l.Wb(),l.Xb(15,"div",21),l.Tc(16," Choose "),l.Xb(17,"input",22),l.fc("change",function(e){l.Hc(n);var a=t.index;return l.jc(2).fileName(e,a)}),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&e){var a=t.$implicit,o=t.index,r=l.Dc(10),i=l.jc(2);l.rc("formGroup",a),l.Eb(6),l.rc("ngForOf",i.customerCategoryArr),l.Eb(2),l.rc("ngIf",o==i.customerCategory.controls.length-1)("ngIfElse",r),l.Eb(5),l.rc("ngClass",a.get("fileName").value&&"textLink"),l.Eb(1),l.Uc(a.get("fileName").value?a.get("fileName").value:"File Uploaded")}}function X(e,t){if(1&e&&(l.Xb(0,"mat-option",23),l.Tc(1),l.Wb()),2&e){var n=t.$implicit;l.rc("value",n.chargeCategory),l.Eb(1),l.Uc(n.chargeCategory)}}function T(e,t){if(1&e){var n=l.Yb();l.Xb(0,"div",1),l.Xb(1,"mat-card",2),l.Xb(2,"h3"),l.Tc(3,"Category"),l.Wb(),l.Xb(4,"div",3),l.Rc(5,W,18,6,"div",4),l.Xb(6,"mat-form-field",5),l.Xb(7,"mat-label"),l.Tc(8,"Charge Category*"),l.Wb(),l.Xb(9,"mat-select",6),l.Rc(10,X,2,2,"mat-option",7),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(11,"div",8),l.Xb(12,"button",9),l.fc("click",function(){return l.Hc(n),l.jc().prevoiustab()}),l.Tc(13,"Back"),l.Wb(),l.Xb(14,"button",10),l.fc("click",function(){return l.Hc(n),l.jc().saveotherinf()}),l.Tc(15," Next "),l.Wb(),l.Wb(),l.Wb()}if(2&e){var a=l.jc();l.rc("formGroup",a.othersInfoForm),l.Eb(5),l.rc("ngForOf",a.customerCategory.controls),l.Eb(5),l.rc("ngForOf",a.chargeCategoryArr),l.Eb(4),l.rc("disabled",a.othersInfoForm.invalid)}}var P,M,S,_=((P=function(){function t(n,a){e(this,t),this.formBuilder=n,this.apiService=a}return n(t,[{key:"ngOnInit",value:function(){this.getCustomerCategory(),this.getCustomerChargeCategory(),this.buildOthersInfoForm(),this.addCustomerCategory(),console.log(this.othersInfoForm)}},{key:"ngAfterViewInit",value:function(){}},{key:"buildOthersInfoForm",value:function(e){this.othersInfoForm=this.formBuilder.group({customerCategory:this.formBuilder.array([]),chargeCategory:[e?e.chargeCategory:"",[u.z.required]]})}},{key:"customerCategory",get:function(){return this.othersInfoForm.get("customerCategory")}},{key:"addCustomerCategory",value:function(e){this.customerCategory.push(this.formBuilder.group({categoryName:[e?e.categoryName:"",[u.z.required]],fileName:[e?e.fileName:"",[u.z.required]],fileUrl:[e?e.fileUrl:""]}))}},{key:"removeCustomerCategoty",value:function(e){this.customerCategory.removeAt(e)}},{key:"getCustomerCategory",value:function(){var e=this;this.apiService.getAuthCustomerCategory().subscribe(function(t){e.customerCategoryArr=t})}},{key:"getCustomerChargeCategory",value:function(){var e=this;this.apiService.getAuthCustomerChargeCategory().subscribe(function(t){e.chargeCategoryArr=t})}},{key:"fileName",value:function(e,t){this.customerId=localStorage.getItem("customer_id")?localStorage.getItem("customer_id"):localStorage.getItem("customerId"),console.log(this.customerId),this.customerCategory.controls[t].get("fileName").setValue(e.target.files[0].name),console.log(this.othersInfoForm)}},{key:"saveotherinf",value:function(){this.apiService.setIndex({index:3}),this.apiService.setFinishFlag({finishFlag:!1});var e={customerId:this.customerId,primaryEmailAdress:localStorage.getItem("Email"),phoneNumber:localStorage.getItem("phoneNo"),custCategoryInfo:[{customerCategoryId:1,customerChargeCategoryId:3,fileUrl:"http://192.168.0.14:8083/Icust-Digital-Banking/asdnasf/file.jpg",fileName:"file.jpg"}]};this.apiService.upsertOtherInformation(e).subscribe(function(e){console.log(e)})}},{key:"prevoiustab",value:function(){this.apiService.setIndex({index:1})}}]),t}()).\u0275fac=function(e){return new(e||P)(l.Rb(u.f),l.Rb(c.b))},P.\u0275cmp=l.Lb({type:P,selectors:[["app-others-information"]],decls:1,vars:1,consts:[["class","top-div","fxLayout","column","fxLayoutAlign","space-between",3,"formGroup",4,"ngIf"],["fxLayout","column","fxLayoutAlign","space-between",1,"top-div",3,"formGroup"],[1,"category-card"],["fxLayout","row wrap","fxLayoutAlign","space-between",1,"categoryDiv"],["fxFlex","100","fxLayout","row","fxLayoutAlign","space-between start","class","customerCategory-div",3,"formGroup",4,"ngFor","ngForOf"],["fxFlex","49.5","appearance","outline"],["formControlName","chargeCategory"],[3,"value",4,"ngFor","ngForOf"],["fxLayoutAlign","space-between",1,"btn-div"],["mat-raised-button","",1,"Backbtn",3,"click"],["mat-button","","rounded","",1,"Nextbtn",3,"disabled","click"],["fxFlex","100","fxLayout","row","fxLayoutAlign","space-between start",1,"customerCategory-div",3,"formGroup"],["fxFlex","49.5",1,"categoryInput"],["appearance","outline","fxFlex","92"],["formControlName","categoryName"],["fxFlex","10","fxLayoutAlign","center center",1,"addbtndiv"],["class","addbtn",3,"click",4,"ngIf","ngIfElse"],["removeBtn",""],["fxFlex","49",1,"back"],[1,"fil"],[1,"fileName",3,"ngClass"],[1,"chooseFile"],["type","file",1,"hide_file",3,"change"],[3,"value"],[1,"addbtn",3,"click"]],template:function(e,t){1&e&&l.Rc(0,T,16,4,"div",0),2&e&&l.rc("ngIf",t.othersInfoForm)},directives:[r.n,d.e,d.d,u.s,u.j,p.a,r.m,m.c,d.b,m.g,v.a,u.r,u.i,C.b,r.l,I.a,k.n,f.a],styles:[".top-div[_ngcontent-%COMP%]{height:90vh}.category-card[_ngcontent-%COMP%]{background-color:#fffefe}.categoryDiv[_ngcontent-%COMP%]{margin-top:20px}.addbtndiv[_ngcontent-%COMP%]{background-color:#e7eef3;border-top-right-radius:5px;border-bottom-right-radius:5px;margin-left:-12px;margin-top:4px;height:43px;padding-bottom:8px}.addbtn[_ngcontent-%COMP%]{font-size:xx-large;color:#004c97;cursor:pointer}.back[_ngcontent-%COMP%]{background-color:#fff;height:50px;border-radius:5px;box-shadow:0 3px 15px rgba(0,0,0,.09019607843137255);position:relative;margin-top:4px}.chooseFile[_ngcontent-%COMP%]{padding:10px;background:transparent linear-gradient(90deg,#051a2d,#004c97) 0 0 no-repeat padding-box;font-family:manrope;color:#fff;border-radius:8px;text-align:center;top:4px;right:8px;width:120px}.chooseFile[_ngcontent-%COMP%], .hide_file[_ngcontent-%COMP%]{position:absolute;cursor:pointer}.hide_file[_ngcontent-%COMP%]{z-index:1000;opacity:0;right:0;top:0;height:100%;font-size:24px;width:100%}.fileName[_ngcontent-%COMP%]{color:#0b0b0b;opacity:.7}.fil[_ngcontent-%COMP%]{position:absolute;top:28%;left:6%}.textLink[_ngcontent-%COMP%]{color:#004a9a;text-decoration:underline;font-family:manrope;cursor:pointer}.btn-div[_ngcontent-%COMP%]{padding:20px}.Nextbtn[_ngcontent-%COMP%]{padding:2px;color:#fff;background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box}.Backbtn[_ngcontent-%COMP%]{padding:2px;background-color:#fff!important}"]}),P),N=o("YSGX"),L=o("DDtv"),V=o("u81B"),j=((M=function(){function t(n,a,o,r,i,c,s){e(this,t),this.dialog=n,this.apiService=a,this.ls=o,this.dialogService=r,this.fb=i,this.api=c,this.router=s,this.arrayRelationshipType=[],this.arrayCountry=[],this.screen="Individual",this.finishFlag=!0}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.screenInfo={screenName:"onboarding",data:"",customerId:"",nextIndex:2,previousIndex:0,currentIndex:1},this.selectedIndex=this.ls.getItem("customerOnboadingTabIndex")?this.ls.getItem("customerOnboadingTabIndex"):0,console.log(this.selectedIndex),this.api.getIndex().subscribe(function(t){console.log(t.index),e.tabIndex=t.index,e.ls.getItem("customerOnboadingTabIndex")&&(e.tabIndex=e.ls.getItem("customerOnboadingTabIndex")),e.api.getFinishFlag().subscribe(function(t){console.log("finish flag",t.finishFlag),e.assignValueFinish(t.finishFlag)}),0===t.index&&e.assignValuesForTab1(e.tabIndex),1===t.index&&e.assignValuesForTab2(e.tabIndex),2===t.index&&e.assignValuesForTab3(e.tabIndex),3===t.index&&e.assignValuesForTab4(e.tabIndex),4===t.index&&e.assignValuesForTab5(e.tabIndex),5===t.index&&e.assignValuesForTab6(e.tabIndex)})}},{key:"assignValuesForTab1",value:function(e){this.tab1=!1}},{key:"assignValuesForTab2",value:function(e){this.tab2=!1}},{key:"assignValuesForTab3",value:function(e){this.tab3=!1}},{key:"assignValuesForTab4",value:function(e){this.tab4=!1}},{key:"assignValuesForTab5",value:function(e){this.tab5=!1}},{key:"assignValuesForTab6",value:function(e){this.tab6=!1}},{key:"assignValueFinish",value:function(e){this.finishFlag=e}},{key:"previousStep",value:function(){this.router.navigate(["onboarding/customer-type"])}}]),t}()).\u0275fac=function(e){return new(e||M)(l.Rb(b.b),l.Rb(c.b),l.Rb(s.a),l.Rb(i.a),l.Rb(u.f),l.Rb(c.b),l.Rb(g.h))},M.\u0275cmp=l.Lb({type:M,selectors:[["app-new-customer-onboarding-screen"]],decls:30,vars:2,consts:[[1,"header"],[1,"headerMapping"],["fxLayout","row","fxLayoutAlign","start space-between",1,"mt-16"],[1,"headerArrow",3,"click"],[1,"text-large"],[1,"kycStatuscard"],[1,"label"],[1,"status"],[1,"full-width"],[3,"selectedIndex","selectedIndexChange"],["tabGroup",""],["label","Primary Information"],["screenTitle","Individual"],["label","Proof Of Identity"],[3,"screenInfo"],["label","Other Information"],[3,"customer"],["label","Professional Information"],["label","Financial Detail"],["label","Mandate"]],template:function(e,t){1&e&&(l.Xb(0,"div",0),l.Xb(1,"h4",1),l.Tc(2,"Home>New Customer Onboarding | Individual"),l.Wb(),l.Xb(3,"div",2),l.Xb(4,"span",3),l.fc("click",function(){return t.previousStep()}),l.Xb(5,"mat-icon"),l.Tc(6,"arrow_back"),l.Wb(),l.Wb(),l.Xb(7,"span",4),l.Tc(8," New Customer Onboarding / Individual "),l.Wb(),l.Xb(9,"mat-card",5),l.Xb(10,"mat-card-content"),l.Xb(11,"mat-label",6),l.Tc(12,"KYC Status"),l.Wb(),l.Xb(13,"p",7),l.Tc(14,"APPROVED"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(15,"div",8),l.Xb(16,"mat-tab-group",9,10),l.fc("selectedIndexChange",function(e){return t.tabIndex=e}),l.Xb(18,"mat-tab",11),l.Sb(19,"app-customer-basic-info",12),l.Wb(),l.Xb(20,"mat-tab",13),l.Sb(21,"app-genric-document-upload",14),l.Wb(),l.Xb(22,"mat-tab",15),l.Sb(23,"app-others-information",16),l.Wb(),l.Xb(24,"mat-tab",17),l.Sb(25,"app-professional-information"),l.Wb(),l.Xb(26,"mat-tab",18),l.Sb(27,"app-financial-details"),l.Wb(),l.Xb(28,"mat-tab",19),l.Sb(29,"app-mandate-details"),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Eb(16),l.rc("selectedIndex",t.tabIndex),l.Eb(5),l.rc("screenInfo",t.screenInfo))},directives:[d.e,d.d,f.a,p.a,p.d,m.g,h.b,h.a,x.a,y.a,_,N.a,L.a,V.a],styles:[".popup-dialog-class[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]{padding-bottom:0;padding-right:0;padding-left:0}.jointCust[_ngcontent-%COMP%]{color:#004c97}.text-large[_ngcontent-%COMP%]{padding-left:20px;font-size:24px;width:36%}.headerArrow[_ngcontent-%COMP%]{padding-left:65px;cursor:pointer;margin-top:5px}.headerMapping[_ngcontent-%COMP%]{top:108px;left:120px;height:17px;font:var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/17px Manrope;letter-spacing:var(--unnamed-character-spacing-0);text-align:left;font:normal normal normal 12px/17px Manrope;letter-spacing:0;color:#bfbfc1;padding-left:70px}.label[_ngcontent-%COMP%]{font-size:10px}.kycStatuscard[_ngcontent-%COMP%]{height:59px;width:12%;border-radius:8px;background:#e2f7f1 0 0 no-repeat padding-box;border:1px solid #008461;margin-left:42%;margin-top:-32px;padding:8px 0 0 20px!important}.status[_ngcontent-%COMP%]{color:#008461;opacity:.85;margin-bottom:20px}.header[_ngcontent-%COMP%]{padding-top:4%} .mat-tab-label-active{color:#004c97!important;font-family:manrope!important;opacity:1!important} .mat-tab-group.mat-primary .mat-ink-bar{background-color:#004c97!important;height:2px} .mat-tab-header{background-color:#fff} .mat-tab-label .mat-tab-label-content{width:12pc;font-size:14px;font-family:manrope} .mat-elevation-z4{box-shadow:none!important} .egret-blue.mat-tab-header-pagination-chevron{border-color:#004c97!important}"]}),M),E=o("u9T3"),A=o("vrAh"),R=o("pMoy"),z=o("f44v"),D=o("TN/R"),B=o("o4Yh"),G=o("40+f"),U=o("e6WT"),Y=o("SqCe"),q=o("rJgo"),H=o("BTe0"),J=o("pu8Q"),Z=o("zQhy"),K=o("q7Ft"),Q=o("jMqV"),$=o("mPVK"),ee=o("hzfI"),te=o("l0rg"),ne=o("ZFy/"),ae=o("cUpR"),oe=o("w9WL"),re=o("jgPy"),ie=o("zMWy"),ce=o("PCNd"),se=o("hrfs"),le=o("aLe/"),be=o("EpeG"),ue=[{path:"individual-onboarding",component:j},{path:"customer-type",component:(S=function(){function t(n){e(this,t),this.dialogService=n}return n(t,[{key:"ngOnInit",value:function(){console.log("customerv2"),this.dialogService.openOnboardingVerificationMethod()}}]),t}(),S.\u0275fac=function(e){return new(e||S)(l.Rb(i.a))},S.\u0275cmp=l.Lb({type:S,selectors:[["app-customer-type-dialog"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),S)}],ge=o("Gp04");o("cMG6");var de,fe=((de=n(function t(){e(this,t)})).\u0275mod=l.Pb({type:de}),de.\u0275inj=l.Ob({factory:function(e){return new(e||de)},imports:[[r.c,r.c,u.l,E.a,le.c,u.x,f.b,Y.e,ee.c,C.c,p.f,G.a,B.b,q.c,$.a,v.b,J.a,m.e,A.b,U.c,D.f,k.m,re.a,Q.b,z.b,ne.b,R.b,K.g,se.a,Z.c,h.c,te.b,H.b,E.a,oe.a,ae.c,ce.a,ie.a,be.b,ge.a,g.l.forChild(ue)]]}),de)}}])}();