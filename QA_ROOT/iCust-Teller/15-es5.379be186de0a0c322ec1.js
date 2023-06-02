!function(){function t(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,b=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){b=!0,r=t},f:function(){try{c||null==o.return||o.return()}finally{if(b)throw r}}}}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Qc9N:function(n,o,i){"use strict";i.r(o),i.d(o,"VideoVerificationModule",function(){return tt});var r,c=i("ofXK"),b=i("YUcS"),l=i("3Pt+"),d=i("bTqV"),m=i("Wp6s"),p=i("bSwM"),g=i("A5z7"),s=i("FKr1"),f=i("iadO"),u=i("kmnG"),h=i("zkoq"),x=i("NFeN"),v=i("qFsG"),T=i("MutI"),C=i("STbY"),P=i("bv9b"),O=i("QibW"),U=i("d3UM"),M=i("1jcm"),y=i("5RNC"),w=i("wZkO"),_=i("/t3+"),k=i("tyNb"),N=i("a0Xn"),S=i("zMWy"),F=i("PCNd"),B=i("Kdsb"),I=i("0IaG"),R=i("fXoL"),j=i("XiUz"),L=((r=function(){function t(){e(this,t),this.color="accent",this.checked=!1,this.disabled=!1}return a(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=R.Ib({type:r,selectors:[["app-calljoin"]],decls:34,vars:0,consts:[[1,"background"],["fxLayout","row wrap"],["fxFlex","30"],["fxFlex","40"],["fxLayoutAlign","center stretch",1,"heading"],["fxFlex","100"],["fxFlex","20"],[1,"card"],["fxLayoutAlign","center stretch"],["src","assets/images/call.png"],["fxFlex","100","fxLayoutAlign","center stretch"],["mat-stroked-button","",1,"Next"],["fxFlex","10"]],template:function(t,n){1&t&&(R.Ub(0,"div",0),R.Ub(1,"div",1),R.Pb(2,"div",2),R.Ub(3,"div",3),R.Ub(4,"h3",4),R.Rc(5,"Choose your audio and video settings"),R.Tb(),R.Tb(),R.Pb(6,"div",2),R.Tb(),R.Ub(7,"div",1),R.Ub(8,"div",5),R.Pb(9,"div",6),R.Ub(10,"mat-card",7),R.Ub(11,"div",8),R.Pb(12,"img",9),R.Tb(),R.Pb(13,"br"),R.Ub(14,"div",1),R.Ub(15,"div",10),R.Ub(16,"button",11),R.Rc(17,"Proceed"),R.Tb(),R.Tb(),R.Tb(),R.Pb(18,"br"),R.Ub(19,"div",1),R.Ub(20,"div",5),R.Pb(21,"div",2),R.Ub(22,"div",12),R.Ub(23,"mat-icon"),R.Rc(24,"videocam_off"),R.Tb(),R.Tb(),R.Ub(25,"div",12),R.Pb(26,"mat-slide-toggle"),R.Tb(),R.Ub(27,"div",12),R.Ub(28,"mat-icon"),R.Rc(29,"mic_off"),R.Tb(),R.Tb(),R.Ub(30,"div",12),R.Pb(31,"mat-slide-toggle"),R.Tb(),R.Pb(32,"div",2),R.Tb(),R.Tb(),R.Tb(),R.Pb(33,"div",6),R.Tb(),R.Tb(),R.Tb())},directives:[j.d,j.b,j.c,m.a,d.a,x.a,M.a],styles:[".heading[_ngcontent-%COMP%]{color:#fff}.background[_ngcontent-%COMP%]{background-color:#343434;height:100%;width:100%}.card[_ngcontent-%COMP%]{background-color:#242424;width:50%}img[_ngcontent-%COMP%]{width:139px;height:139px}.Next[_ngcontent-%COMP%]{width:150px;background-color:#426af5;border-radius:55px}.Next[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%]{color:#fff}mat-slide-toggle[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}"]}),r);function A(t,n){if(1&t&&(R.Ub(0,"span",4),R.Rc(1),R.Tb()),2&t){var e=n.$implicit;R.Bb(1),R.Sc(e)}}var E,V=((E=function(){function n(t,o,a){e(this,n),this.dialogRef=t,this.dialog=o,this.data=a,this.date=new Date}return a(n,[{key:"ngOnInit",value:function(){console.log(this.data),console.log(this.timeSlots[1]);var n,e=t(this.timeSlots[1]);try{for(e.s();!(n=e.n()).done;){var o=n.value;this.dateSelected=o}}catch(r){e.e(r)}finally{e.f()}var a,i=t(this.timeSlots[0]);try{for(i.s();!(a=i.n()).done;)a.value}catch(r){i.e(r)}finally{i.f()}}},{key:"callJoin",value:function(){this.dialog.open(L,{width:"100%",height:"80%"}).afterClosed().subscribe(function(t){console.log("The dialog was closed")})}}]),n}()).\u0275fac=function(t){return new(t||E)(R.Ob(I.g),R.Ob(I.b),R.Ob(I.a))},E.\u0275cmp=R.Ib({type:E,selectors:[["app-appointment"]],decls:23,vars:2,consts:[["fxLayout","row wrap"],["fxFlex","100"],["fxLayoutAlign","center stretch"],[1,"top"],[1,"clr"],["class","clr",4,"ngFor","ngForOf"],[1,"link",3,"click"],[1,"button"],["mat-stroked-button","",1,"Next"]],template:function(t,n){1&t&&(R.Ub(0,"div",0),R.Ub(1,"div",1),R.Ub(2,"h2",2),R.Rc(3,"Your appointment link is active"),R.Tb(),R.Ub(4,"div",2),R.Ub(5,"span",3),R.Rc(6,"Date Selcted:"),R.Ub(7,"span",4),R.Rc(8),R.Tb(),R.Tb(),R.Tb(),R.Ub(9,"div",2),R.Ub(10,"span",3),R.Rc(11,"Time Slots:"),R.Pc(12,A,2,1,"span",5),R.Tb(),R.Tb(),R.Ub(13,"div",2),R.Ub(14,"a"),R.Rc(15,"Link"),R.Tb(),R.Tb(),R.Ub(16,"div"),R.Ub(17,"mat-card"),R.Ub(18,"span",6),R.cc("click",function(){return n.callJoin()}),R.Rc(19,"https://xyzBank/customerOnboarding/KYCappointmentSchedule"),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Ub(20,"div",7),R.Ub(21,"button",8),R.Rc(22,"Done"),R.Tb(),R.Tb(),R.Tb()),2&t&&(R.Bb(8),R.Sc(n.dateSelected),R.Bb(4),R.oc("ngForOf",n.timeSlots[0]))},directives:[j.d,j.b,j.c,c.m,m.a,d.a],styles:[".Next[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;background-color:#426af5;color:#fff;border-radius:55px}.button[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;gap:20px;flex-wrap:wrap;justify-content:space-between;padding-left:35%;padding-top:6%;padding-right:14%;background-color:#fff}.link[_ngcontent-%COMP%]{margin-left:10%}.clr[_ngcontent-%COMP%]{color:#426af5;font-weight:10px;font-weight:700}.top[_ngcontent-%COMP%]{padding-top:3%}h2[_ngcontent-%COMP%]{padding-top:10px;color:#000}"]}),E);function $(t,n){if(1&t){var e=R.Vb();R.Ub(0,"div",21),R.Ub(1,"button",22),R.cc("click",function(){R.Ec(e);var t=n.$implicit,o=R.gc();return o.onSelectTime1(t,o.i)}),R.Ub(2,"span",23),R.Rc(3),R.Tb(),R.Tb(),R.Tb()}if(2&t){var o=n.$implicit;R.Bb(1),R.oc("name",o),R.Bb(2),R.Sc(o)}}function z(t,n){if(1&t){var e=R.Vb();R.Ub(0,"div",21),R.Ub(1,"button",24),R.cc("click",function(){R.Ec(e);var t=n.$implicit,o=n.index;return R.gc().onSelectTime1(t,o)}),R.Ub(2,"span",23),R.Rc(3),R.Tb(),R.Tb(),R.Tb()}if(2&t){var o=n.$implicit;R.Bb(3),R.Sc(o)}}function D(t,n){if(1&t){var e=R.Vb();R.Ub(0,"div",21),R.Ub(1,"button",24),R.cc("click",function(){R.Ec(e);var t=n.$implicit,o=n.index;return R.gc().onSelectTime1(t,o)}),R.Ub(2,"span",23),R.Rc(3),R.Tb(),R.Tb(),R.Tb()}if(2&t){var o=n.$implicit;R.Bb(3),R.Sc(o)}}function q(t,n){if(1&t){var e=R.Vb();R.Ub(0,"div",21),R.Ub(1,"button",24),R.cc("click",function(){R.Ec(e);var t=n.$implicit,o=n.index;return R.gc().onSelectTime1(t,o)}),R.Ub(2,"span",23),R.Rc(3),R.Tb(),R.Tb(),R.Tb()}if(2&t){var o=n.$implicit;R.Bb(3),R.Sc(o)}}function K(t,n){if(1&t){var e=R.Vb();R.Ub(0,"div",21),R.Ub(1,"button",24),R.cc("click",function(){R.Ec(e);var t=n.$implicit,o=n.index;return R.gc().onSelectTime1(t,o)}),R.Ub(2,"span",23),R.Rc(3),R.Tb(),R.Tb(),R.Tb()}if(2&t){var o=n.$implicit;R.Bb(3),R.Sc(o)}}var Y,G=((Y=function(){function t(n,o,a){e(this,t),this.router=n,this.dialog=o,this.el=a,this.dateCollection=[],this.toggle=!0,this.status="Enable",this.showNext=!1,this.count=0,this.selectTime1=["10:00 am","10:30 am","11:00 am"],this.selectTime2=["11:30 am","12:00 pm","12:30 pm"],this.selectTime3=["01:00 pm","01:30 pm","02:00 pm"],this.selectTime4=["02:30 pm","03:00 pm","03:30 pm"],this.selectTime5=["04:00 pm","04:30 pm","05:00 pm"],this.completeTimeSolte=["10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","01:00 pm","01:30 pm","02:00 pm","02:30 pm","03:00 pm","03:30 pm","04:00 pm","04:30 pm","05:00 pm"]}return a(t,[{key:"ngOnInit",value:function(){new l.h({value:null,disabled:!0}),console.log(this.el)}},{key:"onSelectTime1",value:function(t,n){console.log(t,n),this.dateCollection.push(t),console.log(this.dateCollection),this.showNext=!0,this.count++}},{key:"onNext",value:function(){document.getElementById("n").style.backgroundColor="rgb(66,106,245)",this.dialog.open(V,{data:{time:this.dateCollection,date:this.selectedDate}}).afterClosed().subscribe(function(t){console.log("The dialog was closed")})}},{key:"onChangeTab",value:function(t){var n=t.tab.textLabel;console.log(n),"Schedule Appointment"===n&&this.router.navigateByUrl("/video-verification/schedule-appointment"),"Basic Information"===n&&this.router.navigateByUrl("/video-verification/verification")}},{key:"onSelect",value:function(t){console.log(t),this.selectedDate=t._d,console.log(this.selectedDate)}},{key:"ngDoCheck",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||Y)(R.Ob(k.g),R.Ob(I.b),R.Ob(R.l))},Y.\u0275cmp=R.Ib({type:Y,selectors:[["app-schedule-appointment"]],decls:44,vars:8,consts:[[1,"head"],[1,"main-head"],[1,"basic-container"],["mat-align-tabs","start",3,"selectedIndex","selectedTabChange"],["label","Basic Information"],["label","Schedule Appointment"],[1,"matCard"],[1,"basicInformation"],[1,"line"],["fxLayout","column wrap"],["fxFlex","100"],["fxFlex","40"],[1,"demo-inline-calendar-card"],[3,"selected","selectedChange"],["fxFlex","60"],["btn",""],["fxLayout","row wrap"],["fxFlex","30",4,"ngFor","ngForOf"],[1,"button1"],["mat-button","",1,"Back"],["mat-stroked-button","","id","n",1,"Next",3,"disabled","click"],["fxFlex","30"],["id","example",1,"selectTime",3,"name","click"],[1,"matContent"],["id","example",1,"selectTime",3,"click"]],template:function(t,n){1&t&&(R.Ub(0,"div",0),R.Ub(1,"h3",1),R.Rc(2,"KYC Screening | Video Verification"),R.Tb(),R.Ub(3,"div",2),R.Ub(4,"mat-tab-group",3),R.cc("selectedTabChange",function(t){return n.onChangeTab(t)}),R.Pb(5,"mat-tab",4),R.Pb(6,"mat-tab",5),R.Tb(),R.Tb(),R.Tb(),R.Ub(7,"mat-card",6),R.Ub(8,"h3",7),R.Rc(9,"Basic Information"),R.Tb(),R.Pb(10,"hr",8),R.Pb(11,"br"),R.Ub(12,"div",9),R.Ub(13,"div",10),R.Ub(14,"div",11),R.Ub(15,"span"),R.Rc(16,"Select Date"),R.Tb(),R.Ub(17,"mat-card",12),R.Ub(18,"mat-calendar",13),R.cc("selectedChange",function(t){return n.onSelect(t)}),R.Tb(),R.Tb(),R.Tb(),R.Ub(19,"div",14,15),R.Ub(21,"span"),R.Rc(22,"Select Time"),R.Tb(),R.Ub(23,"div"),R.Ub(24,"div",16),R.Ub(25,"div",10),R.Pc(26,$,4,2,"div",17),R.Tb(),R.Tb(),R.Ub(27,"div",16),R.Ub(28,"div",10),R.Pc(29,z,4,1,"div",17),R.Tb(),R.Tb(),R.Ub(30,"div",16),R.Ub(31,"div",10),R.Pc(32,D,4,1,"div",17),R.Tb(),R.Tb(),R.Ub(33,"div",16),R.Ub(34,"div",10),R.Pc(35,q,4,1,"div",17),R.Tb(),R.Tb(),R.Ub(36,"div",16),R.Ub(37,"div",10),R.Pc(38,K,4,1,"div",17),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Ub(39,"div",18),R.Ub(40,"button",19),R.Rc(41,"Back"),R.Tb(),R.Ub(42,"button",20),R.cc("click",function(){return n.onNext()}),R.Rc(43,"Next"),R.Tb(),R.Tb()),2&t&&(R.Bb(4),R.oc("selectedIndex",1),R.Bb(14),R.oc("selected",n.selectedDate),R.Bb(8),R.oc("ngForOf",n.selectTime1),R.Bb(3),R.oc("ngForOf",n.selectTime2),R.Bb(3),R.oc("ngForOf",n.selectTime3),R.Bb(3),R.oc("ngForOf",n.selectTime4),R.Bb(3),R.oc("ngForOf",n.selectTime5),R.Bb(4),R.oc("disabled",!n.showNext))},directives:[w.b,w.a,m.a,j.d,j.b,f.a,c.m,d.a],styles:[".selectTime[_ngcontent-%COMP%]{height:42px;width:168px;text-align:center;cursor:pointer;background-color:#fff;border-radius:10px;border:1px solid #d8d3d3;margin-bottom:20px}.matContent[_ngcontent-%COMP%]{font-size:12px;justify-content:center;color:grey}.button1[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;gap:20px;flex-wrap:wrap;justify-content:space-between;padding-left:11%;padding-right:14%;background-color:#fff}.line[_ngcontent-%COMP%]{border:thick;border-style:solid;border-block-width:unset;color:#00f;color:#6988f6;width:40px;border-radius:5px;margin:initial}.Back[_ngcontent-%COMP%]{margin:12px 0 12px -15%;width:150px;color:#a9a9a9;border-radius:45px}.Next[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;color:#fff;border-radius:55px}.Next[_ngcontent-%COMP%], .Next[_ngcontent-%COMP%]:focus{background-color:#426af5}.matCard[_ngcontent-%COMP%]{max-width:1250px;align-items:center;justify-content:center;margin:10px auto 3%}.demo-inline-calendar-card[_ngcontent-%COMP%]{width:300px} .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#fff}.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%]{margin-left:90px!important} .mat-calendar-header{padding:0 8px 0 0!important;background-color:#456efe;color:#fff;border-radius:10px} .egret-blue .mat-calendar-body-selected{background-color:#fe6700;color:#fff;border-radius:10px} .egret-blue .mat-calendar-arrow{border-top-color:#fff!important}.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{background-color:red;padding:10px} .mat-button-toggle-group{border:0}#mat-button-toggle-2[_ngcontent-%COMP%]{margin-right:30px;margin-left:30px}button[_ngcontent-%COMP%]:focus{background-color:#fe6700}mat-card.selectTime[_ngcontent-%COMP%]:active{background-color:#ff0}"]}),Y);function J(t,n){if(1&t&&(R.Ub(0,"mat-option",26),R.Rc(1),R.Tb()),2&t){var e=n.$implicit;R.oc("value",e),R.Bb(1),R.Sc(e)}}function X(t,n){1&t&&(R.Ub(0,"span",27),R.Rc(1," Please enter valid Email "),R.Tb())}function W(t,n){1&t&&(R.Ub(0,"span",27),R.Rc(1," Please enter valid Phone number "),R.Tb())}var Q,Z,H=[{path:"verification",component:(Q=function(){function t(n,o){e(this,t),this.router=n,this.fb=o,this.title=["Mr","Mrs"]}return a(t,[{key:"ngOnInit",value:function(){this.basicInfoForm=this.fb.group({title:["Mr",[l.C.required]],firstName:["Jane",[l.C.required]],lastName:["Smith",[l.C.required]],primaryEmail:["",[l.C.required,l.C.email,l.C.required]],phoneNumber:["",[l.C.required,l.C.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]})}},{key:"onChangeTab",value:function(t){var n=t.tab.textLabel;console.log(n),"Schedule Appointment"===n&&this.router.navigateByUrl("/video-verification/schedule-appointment"),"Basic Information"===n&&this.router.navigateByUrl("/video-verification/verification")}},{key:"onNextOfVideoVerification",value:function(t){console.log(this.basicInfoForm.controls.value)}}]),t}(),Q.\u0275fac=function(t){return new(t||Q)(R.Ob(k.g),R.Ob(l.g))},Q.\u0275cmp=R.Ib({type:Q,selectors:[["app-video-verification"]],decls:52,vars:5,consts:[[1,"head"],[1,"main-head"],[1,"basic-container"],["mat-align-tabs","start",3,"selectedTabChange"],["label","Basic Information"],["label","Schedule Appointment"],[1,"matCard"],[1,"basicInformation"],[1,"line"],[3,"formGroup"],["fxLayout","row wrap"],["fxFlex","100"],["fxFlex","20"],[1,"inputMatcard","card"],["formControlName","title"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","50"],[1,"card"],["matInput","","formControlName","firstName","type","text"],["matInput","","formControlName","lastName","type","text"],["matInput","","formControlName","primaryEmail","type","text","placeholder","Primary Email"],["class","help-block",4,"ngIf"],["matInput","","formControlName","phoneNumber","type","number","placeholder","Phone Number","maxlength","10","minlength","10"],[1,"button"],["mat-button","",1,"Back"],["mat-stroked-button","",1,"Next",3,"routerLink","click"],[3,"value"],[1,"help-block"]],template:function(t,n){1&t&&(R.Ub(0,"div",0),R.Ub(1,"h3",1),R.Rc(2,"KYC Screening | Video Verification"),R.Tb(),R.Ub(3,"div",2),R.Ub(4,"mat-tab-group",3),R.cc("selectedTabChange",function(t){return n.onChangeTab(t)}),R.Pb(5,"mat-tab",4),R.Pb(6,"mat-tab",5),R.Tb(),R.Tb(),R.Tb(),R.Ub(7,"mat-card",6),R.Ub(8,"h3",7),R.Rc(9,"Basic Information"),R.Tb(),R.Pb(10,"hr",8),R.Pb(11,"br"),R.Ub(12,"form",9),R.Ub(13,"div",10),R.Ub(14,"div",11),R.Ub(15,"div",12),R.Ub(16,"mat-label"),R.Rc(17,"Prefix"),R.Tb(),R.Ub(18,"mat-card",13),R.Ub(19,"mat-select",14),R.Pc(20,J,2,2,"mat-option",15),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Ub(21,"div",10),R.Ub(22,"div",11),R.Ub(23,"div",16),R.Ub(24,"mat-label"),R.Rc(25,"First Name"),R.Tb(),R.Ub(26,"mat-card",17),R.Pb(27,"input",18),R.Tb(),R.Tb(),R.Ub(28,"div",16),R.Ub(29,"mat-label"),R.Rc(30,"Last Name"),R.Tb(),R.Ub(31,"mat-card",17),R.Pb(32,"input",19),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Ub(33,"div",10),R.Ub(34,"div",11),R.Ub(35,"div",16),R.Ub(36,"mat-label"),R.Rc(37,"Primary Email"),R.Tb(),R.Ub(38,"mat-card",17),R.Pb(39,"input",20),R.Tb(),R.Pc(40,X,2,0,"span",21),R.Tb(),R.Ub(41,"div",16),R.Ub(42,"mat-label"),R.Rc(43,"Phone Number"),R.Tb(),R.Ub(44,"mat-card",17),R.Pb(45,"input",22),R.Tb(),R.Pc(46,W,2,0,"span",21),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Tb(),R.Ub(47,"div",23),R.Ub(48,"button",24),R.Rc(49,"Back"),R.Tb(),R.Ub(50,"button",25),R.cc("click",function(){return n.onNextOfVideoVerification(n.basicInfoForm)}),R.Rc(51,"Next"),R.Tb(),R.Tb()),2&t&&(R.Bb(12),R.oc("formGroup",n.basicInfoForm),R.Bb(8),R.oc("ngForOf",n.title),R.Bb(20),R.oc("ngIf",!n.basicInfoForm.get("primaryEmail").valid&&n.basicInfoForm.get("primaryEmail").touched),R.Bb(6),R.oc("ngIf",!n.basicInfoForm.get("phoneNumber").valid&&n.basicInfoForm.get("phoneNumber").touched),R.Bb(4),R.oc("routerLink","/video-verification/schedule-appointment"))},directives:[w.b,w.a,m.a,l.D,l.u,l.l,j.d,j.b,u.g,U.a,l.t,l.j,c.m,v.b,l.d,c.n,l.x,l.o,l.p,d.a,k.h,s.n],styles:[".breadcrumb[_ngcontent-%COMP%]{position:fixed;top:40px;width:100%}.breadcrumb[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]{background-color:#fff}app-kyc-verification[_ngcontent-%COMP%]{margin-top:5%}.app-container[_ngcontent-%COMP%]{height:100%;width:100%}.basic-container[_ngcontent-%COMP%]{padding:5px}.main-head[_ngcontent-%COMP%]{padding-left:6%;padding-top:16px;padding-bottom:0}mat-tab-group[_ngcontent-%COMP%]{padding-left:3%}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;height:60vh;border:1px solid #000;padding:10px 5px;box-sizing:border-box}.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0 5px;box-sizing:border-box}.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){margin-top:5px}.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){flex:1}.formField1[_ngcontent-%COMP%]{width:50px}.formField[_ngcontent-%COMP%]{flex-grow:1;width:100%}.inputMatcard[_ngcontent-%COMP%]{max-width:500px;padding:10px;margin-top:5px}.inputMatcard[_ngcontent-%COMP%], .inputMatcard1[_ngcontent-%COMP%]{flex-grow:1;background-image:linear-gradient(hsla(0,0%,100%,.5),rgba(248,250,254,.5));box-shadow:0 3pt 6pt rgba(0,0,0,.1607843137254902);box-sizing:border-box;margin-left:0}.inputMatcard1[_ngcontent-%COMP%]{padding:12px;width:100%}.inputMatcard2[_ngcontent-%COMP%]{flex-grow:1;background-image:linear-gradient(hsla(0,0%,100%,.5),rgba(248,250,254,.5));box-shadow:0 3pt 6pt rgba(0,0,0,.1607843137254902);box-sizing:border-box;margin-left:0;width:20px}mat-hint[_ngcontent-%COMP%]{font-size:10px}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.inputClass[_ngcontent-%COMP%]{background-image:linear-gradient(hsla(0,0%,100%,.5),rgba(248,250,254,.5));border-style:hidden;box-shadow:0 3pt 6pt rgba(0,0,0,.1607843137254902);font-weight:bolder}[_nghost-%COMP%]     .mat-form-field-outline-end, [_nghost-%COMP%]     .mat-form-field-outline-gap, [_nghost-%COMP%]     div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}.form[_ngcontent-%COMP%]{gap:20px;justify-content:space-between}.form[_ngcontent-%COMP%], .form1[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.form1[_ngcontent-%COMP%]{gap:50px}.button[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;gap:20px;flex-wrap:wrap;justify-content:space-between;padding-left:11%;padding-right:14%;background-color:#fff}.matCard[_ngcontent-%COMP%]{max-width:950px;align-items:center;justify-content:center;margin:10px auto 3%}.mat-form-field-flex[_ngcontent-%COMP%]{background-image:linear-gradient(hsla(0,0%,100%,.5),rgba(248,250,254,.5));box-shadow:0 3pt 6pt rgba(0,0,0,.1607843137254902)}.flex-grow-1[_ngcontent-%COMP%]{flex-grow:1}.alignment[_ngcontent-%COMP%]{border-style:none!important;outline:none}#index[_ngcontent-%COMP%]{max-width:120px}.basicInformation[_ngcontent-%COMP%]{opacity:1%}.line[_ngcontent-%COMP%]{border:thick;border-style:solid;border-block-width:unset;color:#00f;color:#6988f6;width:40px;border-radius:5px;margin:initial;margin-left:10px}input[_ngcontent-%COMP%]{width:80%;color:#374664;opacity:1%;font-weight:600;background-image:linear-gradient(hsla(0,0%,100%,.5),rgba(248,250,254,.5))}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus{background:red}.mat-tab-label-active[_ngcontent-%COMP%]{color:green}  .mat-tab-label-active{color:#6988f6!important}.verification[_ngcontent-%COMP%]{float:right;color:#2a59e7}  .mat-tab-group.mat-primary .mat-ink-bar{background-color:#6988f6!important;height:4px;width:116px!important;margin-left:2%}mat-tab-label[_ngcontent-%COMP%]{font-size:8px}.mat-select-arrow-wrapper[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;width:40px!important}.Back[_ngcontent-%COMP%]{margin:12px 0 12px -15%;width:150px;color:#a9a9a9;border-radius:45px}.Next[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;background-color:#426af5;color:#fff;border-radius:55px}input[_ngcontent-%COMP%]{border:0;outline:0;font-weight:700}input[_ngcontent-%COMP%]:focus{outline:none!important}.card[_ngcontent-%COMP%], mat-label[_ngcontent-%COMP%]{margin:10px!important}.green[_ngcontent-%COMP%]{background-color:green}.red[_ngcontent-%COMP%]{background-color:red}"]}),Q)},{path:"schedule-appointment",component:G},{path:"calljoin",component:L}],tt=((Z=a(function t(){e(this,t)})).\u0275mod=R.Mb({type:Z}),Z.\u0275inj=R.Lb({factory:function(t){return new(t||Z)},imports:[[c.c,l.n,b.a,B.c,S.a,l.A,T.d,x.b,d.b,m.e,C.c,y.a,U.b,M.b,h.b,f.d,g.b,p.b,O.c,w.c,_.b,v.c,P.b,b.a,N.c,F.a,U.b,u.e,v.c,s.m,k.k.forChild(H)]]}),Z)}}])}();