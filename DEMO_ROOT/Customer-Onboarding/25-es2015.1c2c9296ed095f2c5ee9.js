(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{cqMF:function(e,t,i){"use strict";i.r(t),i.d(t,"KycModule",function(){return Ce});var n=i("SVse"),a=(i("V4JI"),i("CqlM"),i("s7LF")),o=i("nm5K"),r=i("laYw"),c=i("wd/R"),s=i("iiaH"),d=i("qMRc"),l=i("D+DX"),b=i("ztLX"),p=i("8Y7J"),m=i("zHaW"),g=i("iInd"),f=i("iELJ"),h=i("VDRc"),u=i("Tj54"),x=i("M9ds"),y=i("PDjf"),v=i("TN/R"),k=i("Dxy4"),C=i("ura0"),I=i("DE60"),_=i("pu8Q");const M=function(e,t){return{Next12:e,Next:t}};function P(e,t){if(1&e){const e=p.Yb();p.Xb(0,"form",25),p.Sb(1,"app-customer-basic-info",26),p.Xb(2,"div",21),p.Xb(3,"button",22),p.Xb(4,"span",27),p.fc("click",function(){return p.Hc(e),p.jc().backToKyc()}),p.Tc(5,"Back"),p.Wb(),p.Wb(),p.Xb(6,"button",28),p.fc("click",function(){p.Hc(e);const t=p.jc(),i=p.Dc(12);return t.onClickNext(i.selectedIndex)}),p.Xb(7,"span"),p.Tc(8,"Next"),p.Wb(),p.Wb(),p.Wb(),p.Wb()}if(2&e){const e=p.jc();p.rc("formGroup",e.basicInfoForm),p.Eb(6),p.rc("ngClass",p.yc(2,M,e.basicInfoForm.controls.kycVerificationForm.invalid,!e.basicInfoForm.controls.kycVerificationForm.invalid))}}function S(e,t){1&e&&p.Sb(0,"mat-spinner",34),2&e&&p.rc("diameter",80)}const O=function(e,t,i){return{bookedSlot:e,availableSlot:t,selectedClass:i}};function T(e,t){if(1&e){const e=p.Yb();p.Xb(0,"div",37),p.Xb(1,"mat-card",38),p.fc("click",function(i){p.Hc(e);const n=t.$implicit,a=t.index;return p.jc(3).onSelectTime1(n.time,a,i)}),p.Xb(2,"span",39),p.Tc(3),p.Wb(),p.Wb(),p.Wb()}if(2&e){const e=t.$implicit,i=p.jc(3);p.Eb(1),p.rc("name",e)("ngClass",p.zc(3,O,e.booked,e.available,-1!=i.dateCollection.indexOf(e.time))),p.Eb(2),p.Uc(i.format24HrsTo12Hrs(e.time))}}function w(e,t){if(1&e&&(p.Xb(0,"div",35),p.Xb(1,"div",15),p.Rc(2,T,4,7,"div",36),p.Wb(),p.Wb()),2&e){const e=p.jc(2);p.Eb(2),p.rc("ngForOf",e.TimeSolts)}}function F(e,t){1&e&&(p.Xb(0,"div",40),p.Xb(1,"h3"),p.Tc(2,"Note :"),p.Wb(),p.Xb(3,"div",41),p.Sb(4,"div",42),p.Xb(5,"h4",43),p.Tc(6,"Available"),p.Wb(),p.Wb(),p.Xb(7,"div",44),p.Sb(8,"div",45),p.Xb(9,"h4",43),p.Tc(10,"Selected"),p.Wb(),p.Wb(),p.Xb(11,"div",46),p.Sb(12,"div",47),p.Xb(13,"h4",43),p.Tc(14,"Already Booked"),p.Wb(),p.Wb(),p.Wb())}function D(e,t){if(1&e&&(p.Xb(0,"div",29),p.Xb(1,"span",17),p.Tc(2,"Select Time"),p.Wb(),p.Xb(3,"p",30),p.Tc(4," Pick the date and then choose the available time slots. "),p.Wb(),p.Rc(5,S,1,1,"mat-spinner",31),p.Rc(6,w,3,1,"div",32),p.Rc(7,F,15,0,"div",33),p.Wb()),2&e){const e=p.jc();p.Eb(5),p.rc("ngIf",e.showSpinn),p.Eb(1),p.rc("ngIf",e.kycTimeOption),p.Eb(1),p.rc("ngIf",e.showNote)}}const W=function(e,t){return{finish:e,finish1:t}};let X=(()=>{class e{constructor(e,t,i,n,o,r,c,s,d,l,b){this.snack=e,this.router=t,this.videoService=i,this.api=n,this.dialogService=o,this.shareDataService=r,this.renderer=c,this.dialog=s,this.cdr=d,this.fb=l,this.appApiService=b,this.tellerId=1,this.loggedInUser=1,this.TimeSolts=[],this.maxDate=new Date,this.minDate=new Date,this.dateCollection=[],this.count=0,this.availableSlots=[],this.kycTimeOption=!1,this.selectedIndex=0,this.prefixFlag=!1,this.disabledsatsun=[],this.cifFetch=!0,this.showNote=!1,this.permanentAddress=this.fb.group({addressType:["Permanent",[a.z.required]],address1:["",[a.z.required]],address2:["",[a.z.required]],city:["",[a.z.required]],zipCode:["",[a.z.required,a.z.minLength(5),a.z.maxLength(10)]],country:["",[a.z.required]],residenceType:["",[a.z.required]],state:["",[a.z.required]]}),this.array=[{id:1,checked:!0,name:"Yes"},{id:2,checked:!1,name:"No"}],this.dateClass=(e,t)=>{const i=new Date(e);return"month"===t&&this.disabledsatsun.map(e=>new Date(e)).some(e=>e.getDate()===i.getDate()&&e.getMonth()===i.getMonth()&&e.getFullYear()===i.getFullYear())?"custom-date-class":""},this.maxDate.setDate(this.maxDate.getDate()+7)}ngOnInit(){this.api.setScreenTitle({screenTitle:"video verification"}),this.calculateHolidays(),this.api.getIndex().subscribe(e=>{console.log(e.index),this.tabIndex=e.index,1===e.index&&this.assignValuesForTab2(this.tabIndex)}),this.prefixFlag=!0,this.basicInfoForm=this.fb.group({cifNumber:[""],prefix:["",[a.z.required]],firstName:["",[a.z.required]],lastName:["",[a.z.required]],kycVerificationForm:[],scheduledDate:[""],scheduledTime:["null"],primaryEmailAdress:["",[a.z.required,a.z.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],phoneNumber:["",[a.z.required,a.z.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],middleName:[""],customer_id:[""],isAddressSame:[""],gender:["",[a.z.required]],dateOfBirth:["",[a.z.required]],maritalStatus:["",[a.z.required]],nationality:["",[a.z.required]],profileImage:[""],communicationAddress:this.fb.group({addressType:["Communication",[a.z.required]],address1:["",[a.z.required]],address2:["",[a.z.required]],city:["",[a.z.required]],zipCode:["",[a.z.required,a.z.minLength(5),a.z.maxLength(10)]],country:["",[a.z.required]],residenceType:["",[a.z.required]],state:["",[a.z.required]]})}),this.imageURL="not_available",this.link="vide_link"}previousStep(){this.dialogService.openKycVerificationMethod()}assignValuesForTab2(e){this.tab2=!0}callingTimeslots(){this.TimeSolts=[{time:"9:00",available:!0,selected:!1,booked:!1},{time:"9:30",available:!0,selected:!1,booked:!1},{time:"10:00",available:!0,selected:!1,booked:!1},{time:"10:30",available:!0,selected:!1,booked:!1},{time:"11:00",available:!0,selected:!1,booked:!1},{time:"11:30",available:!0,selected:!1,booked:!1},{time:"12:00",available:!0,selected:!1,booked:!1},{time:"12:30",available:!0,selected:!1,booked:!1},{time:"13:00",available:!0,selected:!1,booked:!1},{time:"13:30",available:!0,selected:!1,booked:!1},{time:"14:00",available:!0,selected:!1,booked:!1},{time:"14:30",available:!0,selected:!1,booked:!1},{time:"15:00",available:!0,selected:!1,booked:!1},{time:"15:30",available:!0,selected:!1,booked:!1},{time:"16:00",available:!0,selected:!1,booked:!1},{time:"16:30",available:!0,selected:!1,booked:!1},{time:"17:00",available:!0,selected:!1,booked:!1}]}backToKyc(){this.dialogService.openKycVerificationMethod(),this.router.navigateByUrl("others/Service"),this.api.setScreenTitle({screenTitle:"video verification"})}onSelectTime1(e,t,i){this.showNext=!0,this.datewitmAmPm=i.target.innerText,this.count++,this.count>1&&(this.dateCollection=[],console.log(!this.TimeSolts[t].selected),this.showNext=!this.TimeSolts[t].selected),this.TimeSolts[t].selected=!this.TimeSolts[t].selected,this.TimeSolts[t].available=!this.TimeSolts[t].available,console.log(this.TimeSolts[t].selected);const n=this.dateCollection.indexOf(e);n>-1&&!this.TimeSolts[t].selected?this.dateCollection.splice(n,1):-1==n&&this.TimeSolts[t].selected&&this.dateCollection.push(e)}onNextOfSheduleAppointment(){this.icustCustVideoVerifyDto=this.basicInfoForm.value,this.icustCustVideoVerifyDto.scheduledDate=this.selectedDate,this.icustCustVideoVerifyDto.scheduledTime=this.dateCollection,this.icustCustVideoVerifyDto.tellerId=this.tellerId,this.icustCustVideoVerifyDto.loggedInUser=this.loggedInUser,this.videoService.saveCustBasicInfoData(this.icustCustVideoVerifyDto).subscribe(e=>{console.log("data link",e),this.link=e,this.dialog.open(l.a,{data:{time:this.datewitmAmPm,date:this.selectedDate,link:this.link,kycRef:this.kycRef}}).afterClosed().subscribe(e=>{console.log("The dialog was closed")}),this.basicInfoForm.reset(),this.selectedDate=null,this.TimeSolts=[],this.cdr.markForCheck(),this.api.setScreenTitle({screenTitle:""})},e=>{console.log(e.message)}),this.cdr.markForCheck()}bookSlot(e){var t=new Date,i=e,n=t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()+" "+i;return!(t>new Date(n))}onSelect(e){for(let i=0;i<this.TimeSolts.length;i++){var t=this.bookSlot(this.format24HrsTo12Hrs(this.TimeSolts[i].time));this.TimeSolts[i].booked=t}this.callingTimeslots(),this.showSpinn=!0,this.dateCollection=[],this.selectedDate=this.videoService.convertDate(e),this.api.gettingAvailableSlotsTeller(this.selectedDate,this.tellerId).subscribe(e=>{this.availableSlotsResp=e,this.cdr.markForCheck(),this.cdr.detectChanges(),this.availableSlotsResp&&(this.showSpinn=!1,this.kycTimeOption=!0,this.availableSlotsResp.bookedSlots.forEach(e=>{const t=this.TimeSolts.map(e=>e.time).indexOf(e);t>-1&&(this.TimeSolts[t].available=!1,this.TimeSolts[t].booked=!0)}),this.cdr.markForCheck(),this.cdr.detectChanges())},e=>{console.log(e)})}format24HrsTo12Hrs(e){return this.showNote=!0,c(e,"HH:mm").format("LT")}kycRef(e){this.api.setKycRef({kycReference:e})}next(){this.api.setIndex({index:1}),this.api.setFinishFlag({finishFlag:!1});let e=localStorage.getItem("customer_id");localStorage.setItem("page_id","1"),this.shareDataService.shareCustomerId(e)}onClickNext(e){let t=this.basicInfoForm.value.kycVerificationForm.phoneNumber;this.cifFetch?this.nextStep(e):this.api.fetchCustomerDetails(t).subscribe(t=>{null!=t?this.dialogService.phoneNumberDetailsDialogue(t).subscribe(t=>{"Yes"==t&&this.nextStep(e)}):this.nextStep(e)})}nextStep(e){this.selectedIndex<2&&(this.selectedIndex=e+1);let t=[];t.push(this.basicInfoForm.value.kycVerificationForm.communicationAddress),this.basicInfoForm.value.kycVerificationForm.permanentAddress&&t.push(this.basicInfoForm.value.kycVerificationForm.permanentAddress),this.api.kycScreenBasicinfo({cifNumber:this.basicInfoForm.value.kycVerificationForm.cifNumber,prefix:this.basicInfoForm.value.kycVerificationForm.prefix,primaryEmailAdress:this.basicInfoForm.value.kycVerificationForm.primaryEmailAdress,phoneNumber:this.basicInfoForm.value.kycVerificationForm.phoneNumber,firstName:this.basicInfoForm.value.kycVerificationForm.firstName,lastName:this.basicInfoForm.value.kycVerificationForm.lastName,middleName:this.basicInfoForm.value.kycVerificationForm.middleName,customer_id:this.basicInfoForm.value.kycVerificationForm.customer_id,gender:this.basicInfoForm.value.kycVerificationForm.gender,maritalStatus:this.basicInfoForm.value.kycVerificationForm.maritalStatus,nationality:this.basicInfoForm.value.kycVerificationForm.nationality,userAddress:t,verificationType:"KYC",kycSubmit:!1}).subscribe(e=>{if(this.id=e.cifNumber,this.snack.open("Basic Information Data Saved! ","OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"}),sessionStorage.setItem("customer_id",e.customerId),localStorage.setItem("customer_id",e.customerId),sessionStorage.setItem("kyc_reference",e.kycReference),this.kycRef(e.kycReference),this.profilePicture){let t={documentName:"Profile",documentType:1};t.fileType=this.profilePicture.type,t.fileName=this.profilePicture.name,t.customerId=e.customerId,console.log(t);const i=new FormData;i.append("data",JSON.stringify(t)),i.append("file",this.profilePicture),this.api.uploadDocument(i).subscribe(e=>{console.log(e),this.next()},e=>{console.log("error",e)})}this.next()})}calculateHolidays(){this.api.getBranchHolidayInfo().subscribe(e=>{for(let t=0;t<e.length;t++)"A"==e[t].authStatus&&this.disabledsatsun.push(c(e[t].calenderDate).format("MMMM D, YYYY"))});var e,t=new Date,i=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),n="";for(let o=1;o<=i;o++){e=new Date(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+o);var a=c(e).format("dddd");"Sunday"!=a&&"Saturday"!=a||(this.disabledsatsun.push(c(e).format("MMMM D, YYYY")),n=n+","+o)}}}return e.\u0275fac=function(t){return new(t||e)(p.Rb(m.a),p.Rb(g.h),p.Rb(b.a),p.Rb(o.b),p.Rb(r.a),p.Rb(s.a),p.Rb(p.I),p.Rb(f.b),p.Rb(p.h),p.Rb(a.f),p.Rb(d.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["app-video-verification-new-component"]],decls:37,vars:14,consts:[[1,"head","mt-32"],[1,"headerMapping"],["fxLayout","row","fxLayoutAlign","start center",1,"mt-16"],[1,"header",3,"click"],[1,"text-large"],[1,"basic-container"],["mat-align-tabs","start",3,"selectedIndex"],["tabgroup",""],["label","Basic Information",1,"basic_info_tab",3,"disabled"],[3,"formGroup",4,"ngIf"],["label","Schedule Appointment",1,"schedule_app_tab",3,"disabled"],[1,"matCard"],[1,"basicInformation"],[1,"line"],["fxLayout","column wrap"],["fxFlex","100"],["fxFlex","35"],[1,"textFont"],[1,"demo-inline-calendar-card"],[3,"selected","dateClass","maxDate","minDate","selectedChange"],["fxFlex","60",4,"ngIf"],[1,"button"],[1,"forBackBtn"],[1,"back",3,"click"],["mat-stroked-button","","id","n",3,"ngClass","disabled","click"],[3,"formGroup"],["formControlName","kycVerificationForm","screenTitle","video verification"],[1,"Back1",3,"click"],["mat-stroked-button","",1,"Next",3,"ngClass","click"],["fxFlex","60"],[1,"paraFont"],["class","spinner",3,"diameter",4,"ngIf"],["fxLayout","row wrap",4,"ngIf"],["class","note_div",4,"ngIf"],[1,"spinner",3,"diameter"],["fxLayout","row wrap"],["class","timeboxes",4,"ngFor","ngForOf"],[1,"timeboxes"],[3,"name","ngClass","click"],["fxLayoutAlign","center stretch",1,"matContent"],[1,"note_div"],[1,"available"],[1,"customBox"],[1,"latterclass"],[1,"selected"],[1,"customBox1"],[1,"booked"],[1,"customBox2"]],template:function(e,t){1&e&&(p.Xb(0,"div",0),p.Sb(1,"br"),p.Xb(2,"h4",1),p.Tc(3,"Home > KYC Screening"),p.Wb(),p.Xb(4,"div",2),p.Xb(5,"span",3),p.fc("click",function(){return t.previousStep()}),p.Xb(6,"mat-icon"),p.Tc(7,"arrow_back"),p.Wb(),p.Wb(),p.Xb(8,"span",4),p.Tc(9," KYC Screening | Video Verification "),p.Wb(),p.Wb(),p.Xb(10,"div",5),p.Xb(11,"mat-tab-group",6,7),p.Xb(13,"mat-tab",8),p.Rc(14,P,9,5,"form",9),p.Wb(),p.Xb(15,"mat-tab",10),p.Xb(16,"mat-card",11),p.Xb(17,"h3",12),p.Tc(18,"Schedule Appointment"),p.Wb(),p.Sb(19,"hr",13),p.Sb(20,"br"),p.Xb(21,"div",14),p.Xb(22,"div",15),p.Xb(23,"div",16),p.Xb(24,"span",17),p.Tc(25,"Select Date"),p.Wb(),p.Sb(26,"br"),p.Xb(27,"mat-card",18),p.Xb(28,"mat-calendar",19),p.fc("selectedChange",function(e){return t.onSelect(e)}),p.Wb(),p.Wb(),p.Wb(),p.Rc(29,D,8,3,"div",20),p.Wb(),p.Wb(),p.Wb(),p.Xb(30,"div",21),p.Xb(31,"button",22),p.Xb(32,"span",23),p.fc("click",function(){return t.previousStep()}),p.Tc(33,"Back"),p.Wb(),p.Wb(),p.Xb(34,"button",24),p.fc("click",function(){return t.onNextOfSheduleAppointment()}),p.Xb(35,"span"),p.Tc(36,"Finish"),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e&&(p.Eb(11),p.rc("selectedIndex",t.selectedIndex),p.Eb(2),p.rc("disabled",!t.tab1),p.Eb(1),p.rc("ngIf",t.basicInfoForm),p.Eb(1),p.rc("disabled",!t.tab2),p.Eb(13),p.rc("selected",t.selectedDate)("dateClass",t.dateClass)("maxDate",t.maxDate)("minDate",t.minDate),p.Eb(1),p.rc("ngIf",t.showNote),p.Eb(5),p.rc("ngClass",p.yc(11,W,!t.showNext,t.showNext))("disabled",!t.showNext))},directives:[h.e,h.d,u.a,x.b,x.a,n.n,y.a,h.b,v.a,k.b,n.l,C.a,a.A,a.s,a.j,I.a,a.r,a.i,_.b,n.m],styles:[".head[_ngcontent-%COMP%]{background-color:#fff}.header[_ngcontent-%COMP%]{padding-left:65px;padding-top:5px;cursor:pointer}.text-large[_ngcontent-%COMP%]{padding-left:15px;font-size:24px}.headerMapping[_ngcontent-%COMP%]{top:108px;left:120px;height:17px;font:var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/17px Manrope;letter-spacing:var(--unnamed-character-spacing-0);text-align:left;font:normal normal normal 12px/17px Manrope;letter-spacing:0;color:#bfbfc1;padding-left:70px}  .mat-tooltip{font-size:15px;white-space:pre-wrap;color:grey!important;background-color:hsla(0,0%,100%,.9);border:1px solid grey;max-width:unset!important}.button[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;gap:20px;flex-wrap:wrap;justify-content:space-between;padding-left:2%;padding-right:14%}.matCard[_ngcontent-%COMP%]{align-items:center;justify-content:center;margin:10px 55px 3% 27px;max-width:1250px;border-radius:12px;background:#fffefe 0 0 no-repeat padding-box;box-shadow:0 3px 15px rgba(0,0,0,.09019607843137255)!important}.finish1[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box;border-radius:55px}.finish1[_ngcontent-%COMP%], .finish1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.finish[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;background:#6c6c6c 0 0 no-repeat padding-box;border-radius:24px;opacity:1!important;color:#000!important;background:#e3e3e3}.back[_ngcontent-%COMP%]{margin:12px 0 12px -15%;width:150px;letter-spacing:0;color:#5d5d5d;cursor:pointer}hr[_ngcontent-%COMP%]{margin-bottom:20px}.line[_ngcontent-%COMP%]{border:thick;border-style:solid;border-block-width:unset;color:#6988f6;width:40px;border-radius:5px;margin:initial;flex:1;margin-bottom:20px;margin-left:10px}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}app-kyc-verification[_ngcontent-%COMP%]{margin-top:5%}.spinner[_ngcontent-%COMP%]{padding:20px}.basic-container[_ngcontent-%COMP%]{padding:5px}mat-tab-group[_ngcontent-%COMP%]{padding-left:3%}  .mat-tab-label-active{color:#004c97!important;font-family:Poppins,sans-serif}  .mat-tab-group.mat-primary .mat-ink-bar{background-color:#004c97!important;height:2px;width:21pc!important;margin-left:2%}.egret-blue[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%],   .egret-blue .mat-tab-label{width:21pc;font-size:20px;font-family:Poppins,sans-serif;color:rgba(0,0,0,.87)}  .egret-blue .mat-tab-label{opacity:1!important}.Back1[_ngcontent-%COMP%]{margin:12px 0 12px -15%;width:150px;letter-spacing:0;color:#5d5d5d;cursor:pointer}.Next[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box;color:#fff;border-radius:55px}.Next[_ngcontent-%COMP%]:focus{background-color:#426af5}.Next12[_ngcontent-%COMP%]{margin:12px -13% 12px 0;width:150px;background:#6c6c6c 0 0 no-repeat padding-box;border-radius:24px;opacity:.38!important;color:#fff}input[_ngcontent-%COMP%]{border:0;outline:0;font-weight:700}input[_ngcontent-%COMP%]:focus{outline:none!important}.matContent[_ngcontent-%COMP%]{font-size:12px;justify-content:center;color:#000}.demo-inline-calendar-card[_ngcontent-%COMP%]{width:300px;padding:0!important} .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#fff}.paraFont[_ngcontent-%COMP%]{color:#949494;font-size:11px}.paraFont[_ngcontent-%COMP%], .textFont[_ngcontent-%COMP%]{font-family:Manrope;padding-left:17px}.textFont[_ngcontent-%COMP%]{color:#004c97;font-size:16px;font-weight:600} .mat-calendar-header{padding:0 8px 0 0!important;background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box;color:#fff;opacity:1;border-top-left-radius:12px;border-top-right-radius:12px}.forBackBtn[_ngcontent-%COMP%]{margin:12px 0;width:150px;border-radius:24px;background:#fff 0 0 no-repeat padding-box;box-shadow:3px 3px 15px rgba(0,0,0,.058823529411764705);text-align:center;border:0}  .egret-blue .mat-icon-button.mat-button-disabled.mat-button-disabled{color:#fff}  .mat-datepicker-content{border-radius:12px!important}  .mat-calendar-controls{margin:0!important}  .egret-blue .mat-calendar-table-header-divider:after{background:#fff}  .mat-datepicker-content .mat-calendar{height:375px!important;width:295px!important}.customBox[_ngcontent-%COMP%]{background-color:#000;border:1px solid #000;border-radius:3px}.customBox[_ngcontent-%COMP%], .customBox1[_ngcontent-%COMP%]{height:14px;width:20px;box-shadow:0 3px 10px rgba(0,0,0,.09019607843137255);display:inline-block}.customBox1[_ngcontent-%COMP%]{background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box;border:1px solid #00468c;border-radius:3px}.customBox2[_ngcontent-%COMP%]{height:14px;width:20px;background-color:#b20000!important;box-shadow:0 3px 10px rgba(0,0,0,.09019607843137255);border:1px solid #b00000;border-radius:3px;display:inline-block}.latterclass[_ngcontent-%COMP%]{padding-left:10px;display:inline-block}  .egret-blue .mat-calendar-body-selected{background:transparent linear-gradient(92deg,#051a2d,#004c97) 0 0 no-repeat padding-box;border:2px solid #051a2d;color:#fff;border-radius:6px;box-shadow:inset 0 0 0 1px #fff}  .mat-calendar-content{padding:0!important}  .egret-blue .mat-calendar-table-header>tr:first-child{color:#fff;background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box}  .egret-blue .mat-calendar-table-header>tr:first-child>th:first-child{border-bottom-left-radius:12px!important}  .egret-blue .mat-calendar-table-header>tr:first-child>th:last-child{border-bottom-right-radius:12px!important} .egret-blue .mat-calendar-body-selected{background-color:#fe6700;color:#fff;border-radius:10px} .egret-blue .mat-calendar-arrow{border-top-color:#fff!important} .mat-button-toggle-group{border:0}button[_ngcontent-%COMP%]:focus{background-color:#fe6700}.timeboxes[_ngcontent-%COMP%]{width:33%;display:inline-block;text-align:center}.bookedSlot[_ngcontent-%COMP%]{background-color:#f3f3f3!important;pointer-events:none}.bookedSlot[_ngcontent-%COMP%] > .matContent[_ngcontent-%COMP%]{color:#b20000}.availableSlot[_ngcontent-%COMP%]{background-color:#fff!important;cursor:pointer;color:#000!important;border-radius:8px}.selectedClass[_ngcontent-%COMP%]{color:#f7f7f7!important;background:transparent linear-gradient(90deg,#051a2d,#004c97) 0 0 no-repeat padding-box!important;border-radius:8px!important}.selectedClass[_ngcontent-%COMP%] > .matContent[_ngcontent-%COMP%]{color:#fff}  .cdk-overlay-pane{min-width:270px!important;padding:7px 0}  .mat-card-avatar{max-width:15%!important}[_nghost-%COMP%]     .mat-tab-header{background-color:#fff;margin-left:-46px;border:none}[_nghost-%COMP%]     .mat-tab-header .mat-tab-list{transform:translateX(0);border-radius:0 0 20px 20px;box-shadow:0 3px 15px rgba(0,0,0,.058823529411764705);margin-bottom:2rem}  .mat-calendar-body-cell[disabled]{pointer-events:none}  .mat-calendar-body-cell[disabled] .mat-calendar-body-cell-content{color:red!important}  .custom-date-class .mat-calendar-body-cell-content{color:red!important;border-radius:100%!important}  td.custom-date-class{pointer-events:none!important}.basic_info_tab[_ngcontent-%COMP%]{height:100%}.schedule_app_tab[_ngcontent-%COMP%]{background-color:#fff!important}.note_div[_ngcontent-%COMP%]{font-family:Manrope;padding-left:13px}.note_div[_ngcontent-%COMP%]   .available[_ngcontent-%COMP%], .note_div[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{margin-right:40px;display:inline-block}.note_div[_ngcontent-%COMP%]   .booked[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0}),e})();var A=i("zMWy"),N=i("u9T3"),z=i("PCNd"),R=i("aLe/"),V=i("EpeG"),U=i("tZUg"),B=i("35u7"),E=i("uOmj"),L=i("ei2L"),q=i("Mij7"),Y=i("xAek"),j=i("Q2Ze");function K(e,t){1&e&&(p.Vb(0),p.Xb(1,"mat-icon",21),p.Tc(2,"check_circle "),p.Wb(),p.Ub())}function H(e,t){if(1&e&&(p.Xb(0,"div",22),p.Sb(1,"img",23),p.Wb()),2&e){const e=p.jc().$implicit;p.Eb(1),p.rc("src",e.imageUrl,p.Jc)}}function J(e,t){if(1&e&&p.Sb(0,"img",24),2&e){const e=p.jc().$implicit;p.rc("src",e.scannedImgUrl,p.Jc)}}function $(e,t){if(1&e){const e=p.Yb();p.Xb(0,"td"),p.Xb(1,"mat-card",8),p.Xb(2,"mat-card",9),p.Xb(3,"div",10),p.Rc(4,K,3,0,"ng-container",11),p.Xb(5,"div",12),p.Xb(6,"mat-icon",13),p.fc("click",function(){p.Hc(e);const i=t.index;return p.jc().deleteBioMetric(i)}),p.Tc(7," delete "),p.Wb(),p.Wb(),p.Wb(),p.Xb(8,"div",14),p.Rc(9,H,2,1,"div",15),p.Rc(10,J,1,1,"ng-template",null,16,p.Sc),p.Wb(),p.Xb(12,"div",17),p.Xb(13,"mat-label",18),p.Tc(14),p.Wb(),p.Sb(15,"br"),p.Wb(),p.Wb(),p.Xb(16,"div",19),p.Xb(17,"span",20),p.fc("click",function(){p.Hc(e);const i=t.index;return p.jc().openDialog(i)}),p.Tc(18),p.Wb(),p.Wb(),p.Wb(),p.Wb()}if(2&e){const e=t.$implicit,i=p.Dc(11);p.Eb(3),p.rc("fxLayoutAlign",e.scannedImgUrl?"space-between center":"end center"),p.Eb(1),p.rc("ngIf",e.scannedImgUrl),p.Eb(2),p.rc("ngClass",e.scannedImgUrl?"deleteBtn":"deleteBtnDisabled"),p.Eb(3),p.rc("ngIf",!e.scannedImgUrl)("ngIfElse",i),p.Eb(5),p.Vc("",e.label," "),p.Eb(4),p.Vc("",e.scannedImgUrl?"Re-Scan":"Scan"," ")}}let G=(()=>{class e{constructor(e,t,i,n,a,o){this.api=e,this.dialog=t,this.snack=i,this.shareDataService=n,this.ls=a,this.apiService=o,this.document_type=["4","5","11","12"],this.customerId=null,this.verificationTypeArr=[{label:"Fingerprint Scan",figName:"FINGERPRINT",imageUrl:"assets/images/svg/fingerPrint.svg",scannedImgUrl:"",biometricData:null,id:"",popupComponent:E.a},{label:"Irish Scan",figName:"IRIS",imageUrl:"assets/images/svg/irish.svg",scannedImgUrl:"",biometricData:null,id:"",popupComponent:q.a},{label:"Face Scan",figName:"FACE",imageUrl:"assets/images/svg/face.svg",scannedImgUrl:"",biometricData:null,id:"",popupComponent:L.a}]}ngOnInit(){this.api.getKycRef().subscribe(e=>{this.assignKyc(e.kycReference)}),this.shareDataService.getCustomerId.subscribe(e=>{null!=e&&(this.refreshCustomerId=e,this.getAdditionalDocuments(e))}),this.customerId=this.ls.getItem("customer_id"),localStorage.getItem("customer_id")&&this.getAdditionalDocuments(localStorage.getItem("customer_id"))}assignKyc(e){this.kycRef=e}getAdditionalDocuments(e){e&&(this.customerId=e);for(const t in this.document_type)Object.prototype.hasOwnProperty.call(this.document_type,t)&&this.api.getCustomerDocuments(e,this.document_type[t]).subscribe(e=>{null!=e&&(4==e[0].documentType&&(this.verificationTypeArr[0].scannedImgUrl=e[0].fileUrl,this.verificationTypeArr[0].id=e[0].id),11==e[0].documentType&&(this.verificationTypeArr[1].scannedImgUrl=e[0].fileUrl,this.verificationTypeArr[1].id=e[0].id),12==e[0].documentType&&(this.verificationTypeArr[2].scannedImgUrl=e[0].fileUrl,this.verificationTypeArr[2].id=e[0].id))})}deleteBioMetric(e){this.verificationTypeArr[e].scannedImgUrl&&this.api.deleteCustomerDoc(this.customerId,this.verificationTypeArr[e].id).subscribe(t=>{this.verificationTypeArr[e].scannedImgUrl="",this.verificationTypeArr[e].id="",this.snack.open(this.verificationTypeArr[e].figName+" Deleted Successfully!","Ok",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"})},t=>{this.snack.open(`Unable to delete ${this.verificationTypeArr[e].figName}!`,"Ok",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})})}openDialog(e){this.dialog.open(this.verificationTypeArr[e].popupComponent,{data:{bioData:this.biometricData,customerId:this.refreshCustomerId,verificationType:"kyc"},disableClose:!0,width:"40%"}).afterClosed().subscribe(t=>{if(t.isScanned){this.verificationTypeArr[e].scannedImgUrl=0==e?"data:image/bmp;base64,"+t.data.BMPBase64:1==e?t.data.fileUrl:t.image;const i=new FormData,n=this.DataURIToBlob(this.verificationTypeArr[e].scannedImgUrl);i.append("file",n,"image.jpg"),i.append("figName",this.verificationTypeArr[e].figName),i.append("customerId",this.customerId),i.append("verify","kyc-verification"),this.apiService.saveOrUpdateBio(i).subscribe(t=>{this.verificationTypeArr[e].id=t.id,this.snack.open(` ${this.verificationTypeArr[e].figName} Saved Successfully!`,"OK",{duration:4e3,verticalPosition:"top",horizontalPosition:"right"})})}})}DataURIToBlob(e){const t=e.split(","),i=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),n=t[0].split(":")[1].split(";")[0],a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return new Blob([a],{type:n})}onNext(){(this.verificationTypeArr[0].scannedImgUrl||this.verificationTypeArr[1].scannedImgUrl||this.verificationTypeArr[2].scannedImgUrl)&&(localStorage.getItem("email_pry"),localStorage.getItem("phone_pry"),this.api.updateKycStatusByCustId(this.refreshCustomerId,"INITIATED","").subscribe(e=>{this.api.setIndex({index:0}),this.api.setFinishFlag({finishFlag:!0}),this.dialog.open(Y.a,{data:{kycRef:e.kycReference,rekyc:!1,popupClose:!1},disableClose:!0,width:"45%"})}))}previous(){this.api.setIndex({index:1});let e=localStorage.getItem("customer_id");console.log("custId::",localStorage.getItem("customer_id")),this.shareDataService.shareCustomerId(e)}ngOnDestroy(){this.shareDataService.shareCustomerId(null)}}return e.\u0275fac=function(t){return new(t||e)(p.Rb(o.b),p.Rb(f.b),p.Rb(m.a),p.Rb(s.a),p.Rb(U.a),p.Rb(o.b))},e.\u0275cmp=p.Lb({type:e,selectors:[["app-kyc-verification"]],decls:13,vars:2,consts:[[1,"m-333","top-div"],[1,"matCard"],["fxLayout","row","fxLayoutGap","20px"],[4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-between",1,"mt-24"],["mat-raised-button","",1,"btn-class","back-btn",3,"click"],["mat-stroked-button","",1,"btn-class",3,"ngClass","click"],[1,"finish-span"],["fxLayout","column",1,"flex-grow-2","mat-card-doc"],[1,"inner-mat-card"],["fxLayout","row",3,"fxLayoutAlign"],[4,"ngIf"],["fxLayoutAlign","center center",1,"deleteDiv"],[3,"ngClass","click"],["fxLayoutAlign","center center",1,"insertDriveImg"],["fxFlex","100","fxLayoutAlign","center center",4,"ngIf","ngIfElse"],["showAvatar",""],[1,"dived"],[1,"title-label"],["fxFlex","100","fxLayoutAlign","center center",1,"scanbtn"],[1,"scanButton",3,"click"],[1,"success-icon"],["fxFlex","100","fxLayoutAlign","center center"],["alt","",1,"finger-print-icon",3,"src"],["alt","",1,"scanned-img",3,"src"]],template:function(e,t){1&e&&(p.Xb(0,"div",0),p.Xb(1,"mat-card",1),p.Sb(2,"br"),p.Xb(3,"table"),p.Xb(4,"tbody"),p.Xb(5,"tr",2),p.Rc(6,$,19,7,"td",3),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Xb(7,"div",4),p.Xb(8,"button",5),p.fc("click",function(){return t.previous()}),p.Tc(9,"Back"),p.Wb(),p.Xb(10,"button",6),p.fc("click",function(){return t.onNext()}),p.Xb(11,"span",7),p.Tc(12,"Finish"),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e&&(p.Eb(6),p.rc("ngForOf",t.verificationTypeArr),p.Eb(4),p.rc("ngClass",t.verificationTypeArr[0].scannedImgUrl||t.verificationTypeArr[1].scannedImgUrl||t.verificationTypeArr[2].scannedImgUrl?"Next1":"Next"))},directives:[y.a,h.e,h.f,n.m,h.d,k.b,n.l,C.a,n.n,u.a,j.g,h.b],styles:[".top-div[_ngcontent-%COMP%]{padding-left:7.5%;padding-right:12.5%;background-color:#fff}.success-icon[_ngcontent-%COMP%]{color:green;cursor:pointer;padding-left:5px}.title-label[_ngcontent-%COMP%]{color:grey;font-family:Manrope}.matCard[_ngcontent-%COMP%]{align-items:center;justify-content:center;box-shadow:0 3px 15px rgba(0,0,0,.09019607843137255)!important}mat-label[_ngcontent-%COMP%]{margin-right:6%}.Back[_ngcontent-%COMP%]{margin:12px 0 12px -8%;width:150px;letter-spacing:0;color:#342711;background:#fff 0 0 no-repeat padding-box;box-shadow:3px 3px 15px rgba(0,0,0,.058823529411764705);border-radius:35px;opacity:1;cursor:pointer;height:49px;padding-left:55px;padding-top:15px}.Next1[_ngcontent-%COMP%]{background:transparent linear-gradient(91deg,#051a2d,#004c97) 0 0 no-repeat padding-box;opacity:1;color:#fff}.Next[_ngcontent-%COMP%]{background:#6c6c6c 0 0 no-repeat padding-box;opacity:.38!important;color:#fff}.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.mat-card-doc[_ngcontent-%COMP%]{background:#fff 0 0 no-repeat padding-box;border:3px solid #fff;border-radius:14px;opacity:1;padding:0;margin:4px}.inner-mat-card[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding:0;background:#f3f3f3 0 0 no-repeat padding-box;border-radius:12px}.insertDriveImg[_ngcontent-%COMP%]{color:#456efe;display:block;margin:auto;width:175px;height:108px;text-align:center;opacity:1}.scanButton[_ngcontent-%COMP%]{display:inline-block;color:#004c97;opacity:1;cursor:pointer}.dived[_ngcontent-%COMP%]{padding-top:15px;font-size:14px;color:#051a2d;text-align:center}#clr[_ngcontent-%COMP%]{height:180px;width:180px}#fingerprintSpan[_ngcontent-%COMP%]{font-weight:700;text-align:center;font-size:12px;margin-bottom:4px}.finger-print-icon[_ngcontent-%COMP%]{height:58.34px;width:58.34px}.deleteDiv[_ngcontent-%COMP%]{height:36px;width:38px;background-color:#fff;border-bottom-left-radius:10px}.deleteBtn[_ngcontent-%COMP%]{color:red;cursor:pointer}.deleteBtnDisabled[_ngcontent-%COMP%]{color:grey}.scanbtn[_ngcontent-%COMP%]{display:flex;height:30px;padding:10px}.scanned-img[_ngcontent-%COMP%]{max-width:60%}.finish-span[_ngcontent-%COMP%]{color:#fff}.btn-class[_ngcontent-%COMP%]{border-radius:23px!important;width:150px!important;height:49px;font:normal poppins}.back-btn[_ngcontent-%COMP%]{background-color:#fff!important;color:#342711!important}"]}),e})();const Z=[{path:"branchVerification",component:(()=>{class e{constructor(e,t,i,n){this.api=e,this.dialog=t,this.ls=i,this.dialogService=n,this.titleName="kyc",this.finishFlag=!0,this.verificationType="KYC"}ngOnInit(){this.api.setScreenTitle({screenTitle:""}),this.screenInfo={screenName:"KYC verification",data:"",customerId:""},this.api.getIndex().subscribe(e=>{this.tabIndex=e.index,this.ls.getItem("currentKycTabIndex")&&(this.tabIndex=this.ls.getItem("currentKycTabIndex")),this.api.getFinishFlag().subscribe(e=>{console.log("finish flag",e.finishFlag),this.assignValueFinish(e.finishFlag)}),0===e.index&&this.assignValuesForTab1(),1===e.index&&this.assignValuesForTab2(),2===e.index&&this.assignValuesForTab3()})}assignValueFinish(e){this.finishFlag=e}assignValuesForTab1(){this.tab1=!1}assignValuesForTab2(){this.tab2=!1}assignValuesForTab3(){this.tab3=!1}previousStep(){this.dialogService.openKycVerificationMethod()}}return e.\u0275fac=function(t){return new(t||e)(p.Rb(o.b),p.Rb(f.b),p.Rb(U.a),p.Rb(r.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["app-kyc-branch-verification"]],inputs:{titleName:"titleName"},decls:19,vars:6,consts:[[1,"head"],[1,"headerMapping"],["fxLayout","row","fxLayoutAlign","start center",1,"mt-16"],[1,"header",3,"click"],[1,"text-large"],[1,"basic-container"],["mat-align-tabs","start",3,"selectedIndex","selectedIndexChange"],["tabGroup",""],["label","Basic Information",3,"disabled"],["screenTitle","branch verfication",3,"verificationType"],["label","Documents",3,"disabled"],[3,"screenInfo"],["label","Verification",3,"disabled"]],template:function(e,t){1&e&&(p.Xb(0,"div",0),p.Sb(1,"br"),p.Xb(2,"h4",1),p.Tc(3,"Home > KYC Screening "),p.Wb(),p.Xb(4,"div",2),p.Xb(5,"span",3),p.fc("click",function(){return t.previousStep()}),p.Xb(6,"mat-icon"),p.Tc(7,"arrow_back"),p.Wb(),p.Wb(),p.Xb(8,"span",4),p.Tc(9," KYC Screening | Branch Verification "),p.Wb(),p.Wb(),p.Xb(10,"div",5),p.Xb(11,"mat-tab-group",6,7),p.fc("selectedIndexChange",function(e){return t.tabIndex=e}),p.Xb(13,"mat-tab",8),p.Sb(14,"app-customer-basic-info",9),p.Wb(),p.Xb(15,"mat-tab",10),p.Sb(16,"app-genric-document-upload",11),p.Wb(),p.Xb(17,"mat-tab",12),p.Sb(18,"app-kyc-verification"),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e&&(p.Eb(11),p.rc("selectedIndex",t.tabIndex),p.Eb(2),p.rc("disabled",!t.tab1||t.finishFlag),p.Eb(1),p.rc("verificationType",t.verificationType),p.Eb(1),p.rc("disabled",!t.tab2||t.finishFlag),p.Eb(1),p.rc("screenInfo",t.screenInfo),p.Eb(1),p.rc("disabled",!t.tab3||t.finishFlag))},directives:[h.e,h.d,u.a,x.b,x.a,I.a,B.a,G],styles:[".head[_ngcontent-%COMP%]{margin-top:25px}app-kyc-verification[_ngcontent-%COMP%]{margin-top:5%}app-documents-upload[_ngcontent-%COMP%]{font-size:160px}.basic-container[_ngcontent-%COMP%]{padding:5px}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus{background:red}.mat-tab-label-active[_ngcontent-%COMP%]{color:green}  .mat-tab-label-active{color:#004c97!important;font-family:manrope!important;opacity:1!important}  .mat-tab-group.mat-primary .mat-ink-bar{background-color:#004c97!important;height:2px}mat-tab-label[_ngcontent-%COMP%]{font-size:8px}.mat-select-arrow-wrapper[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;width:40px!important}[_nghost-%COMP%]     .mat-tab-header{background-color:#fff}.mat-tab-body-content[_ngcontent-%COMP%]{height:100%;overflow:auto;background-color:#f0f8ff!important}  .mat-tab-label .mat-tab-label-content{width:21pc!important;font-size:18px!important;font-family:manrope!important}.header[_ngcontent-%COMP%]{padding-left:120px;cursor:pointer;margin-top:6px}.text-large[_ngcontent-%COMP%]{padding-left:20px;font-size:20px;font-family:Manrope}.headerMapping[_ngcontent-%COMP%]{color:#bfbfc1;font-size:smaller;padding-left:120px}  .tab-container .mat-tab-body-content{overflow-y:hidden}"]}),e})()},{path:"videoVerification",component:X}];var Q=i("Gp04"),ee=i("pMoy"),te=i("f44v"),ie=i("o4Yh"),ne=i("40+f"),ae=i("e6WT"),oe=i("SqCe"),re=i("rJgo"),ce=i("BTe0"),se=i("zQhy"),de=i("ZTz/"),le=i("q7Ft"),be=i("jMqV"),pe=i("mPVK"),me=i("hzfI"),ge=i("l0rg"),fe=i("ZFy/"),he=i("cUpR"),ue=i("w9WL"),xe=i("jgPy"),ye=i("hrfs"),ve=i("vrAh"),ke=i("UhP/");let Ce=(()=>{class e{}return e.\u0275mod=p.Pb({type:e}),e.\u0275inj=p.Ob({factory:function(t){return new(t||e)},imports:[[n.c,n.c,a.l,N.a,R.c,a.x,u.b,oe.e,me.c,k.c,y.f,ne.a,ie.b,re.c,pe.a,de.b,_.a,j.e,ve.b,ae.c,v.f,ke.m,xe.a,be.b,te.b,fe.b,ee.b,le.g,ye.a,se.c,x.c,ge.b,ce.b,N.a,ue.a,he.c,z.a,A.a,Q.a,V.b,g.l.forChild(Z)]]}),e})()}}]);