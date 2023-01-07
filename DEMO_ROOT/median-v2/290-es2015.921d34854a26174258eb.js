"use strict";(self.webpackChunkmedian=self.webpackChunkmedian||[]).push([[290],{31443:function(s,t,e){e.d(t,{k:function(){return o}});var i=e(37716),r=e(80463);let o=(()=>{class s{constructor(s){this.iziToast=s}successMessage(s,t){this.iziToast.success({title:s,message:t,layout:2,balloon:!1,position:"topRight",progressBarColor:"red",pauseOnHover:!0})}errorMessage(s,t){this.iziToast.error({title:s,message:t,layout:2,balloon:!1,position:"topRight",progressBarColor:"red",pauseOnHover:!0})}infoMessage(s,t){this.iziToast.info({title:s,message:t,layout:2,balloon:!1,position:"topRight",progressBarColor:"red",pauseOnHover:!0})}}return s.\u0275fac=function(t){return new(t||s)(i.LFG(r.I))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},65290:function(s,t,e){e.r(t),e.d(t,{ForgetPasswordModule:function(){return R}});var i=e(38583),r=e(39895),o=e(3679),n=e(2527),a=e(88259),c=e.n(a),h=e(37716),g=e(3118),d=e(26215),u=e(91841);let l=(()=>{class s{constructor(s){this.http=s,this.uri=g.$.baseURL,this.dashboardapi=g.$.baseURL+"/dashboard",this.userapi=g.$.baseURL+"/users",this.departmentname=new d.X(""),this.logouttime=new d.X("")}getOtp(s){return this.http.post(`${this.uri}/login/otp`,s)}loginService(s){return this.http.post(`${this.uri}/login/credentials`,s)}forgetPassword(s){return this.http.post(`${this.uri}/login/forgetPsw`,s)}fristTimePassword(s){return this.http.post(`${this.uri}/user/passwordReset`,s)}getOtpForReset(s){return this.http.post(`${this.uri}/users/otpForReset`,s)}userPasswordExpireNotif(s){return this.http.get(`${this.uri}/login/pwdNotif/${s}`)}fetchSecurityPolicyService(){return this.http.get(`${this.uri}/securityPolicy/fetch`)}fetchMedUser(s){return this.http.get(`${this.uri}/login/getUserByUserId/${s}`)}settingdepartmentlogged(s,t){this.departmentname.next(s),this.logouttime.next(t)}gettingloginTimeandDepartment(s){return this.http.get(`${this.userapi}/loganddept/${s}`)}}return s.\u0275fac=function(t){return new(t||s)(h.LFG(u.eN))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var p=e(31443),m=e(10402),f=e(3494);const w=["ngOtpInput"];function v(s,t){1&s&&h._UZ(0,"img",32)}function x(s,t){1&s&&h._UZ(0,"img",33)}function Z(s,t){if(1&s&&(h.TgZ(0,"div"),h._uU(1),h.qZA()),2&s){const s=h.oxw(2);h.xp6(1),h.Oqu(s.errorMsg)}}function P(s,t){if(1&s&&(h.TgZ(0,"div",34),h.YNc(1,Z,2,1,"div",35),h.qZA()),2&s){const s=h.oxw();h.xp6(1),h.Q6J("ngIf",s.reactiveForm.get("password").errors.pattern)}}function b(s,t){if(1&s&&(h.TgZ(0,"div",34),h._uU(1),h.qZA()),2&s){const s=h.oxw();h.xp6(1),h.hij(" New Password Password must contain Minimum ",s.minPass," digits. ")}}function I(s,t){if(1&s&&(h.TgZ(0,"div",34),h._uU(1),h.qZA()),2&s){const s=h.oxw();h.xp6(1),h.hij(" New Password must contain Maximum ",s.maxPass," digits. ")}}function y(s,t){1&s&&h._UZ(0,"img",32)}function T(s,t){1&s&&h._UZ(0,"img",33)}function A(s,t){if(1&s&&(h.TgZ(0,"div"),h._uU(1),h.qZA()),2&s){const s=h.oxw(2);h.xp6(1),h.Oqu(s.errorMsg)}}function q(s,t){if(1&s&&(h.TgZ(0,"div",34),h.YNc(1,A,2,1,"div",35),h.qZA()),2&s){const s=h.oxw();h.xp6(1),h.Q6J("ngIf",s.reactiveForm.get("confirmPassword").errors.pattern)}}function S(s,t){if(1&s&&(h.TgZ(0,"div",34),h._uU(1),h.qZA()),2&s){const s=h.oxw();h.xp6(1),h.hij(" Confirm Password must contain Minimum ",s.minPass," digits. ")}}function N(s,t){if(1&s&&(h.TgZ(0,"div",34),h._uU(1),h.qZA()),2&s){const s=h.oxw();h.xp6(1),h.hij(" Confirm Password must contain Maximum ",s.maxPass," digits. ")}}let U=(()=>{class s{constructor(s,t,e,i,r,o){this.router=s,this.route=t,this.apiService=e,this.fb=i,this.toastService=r,this.securityService=o,this.config={allowNumbersOnly:!0,length:6,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"*",inputStyles:{width:"40px",height:"40px"}},this.loginProcessing=!1,this.login=new C,this.editable=!1,this.errorMsg="",this.hide=!0,this.hide1=!0,this.hideConfirm=!0,this.modifyUserObject=new C,this.login1=new C,this.otpBtn=!1,this.submitBtn=!1,this.getOtpButtonEnable=!0,this.route.queryParams.subscribe(s=>{this.modifyUserObject.username=s.userId})}ngOnInit(){this.isReadOnly=!1,this.button2=!0,this.reactiveForm=this.fb.group({userId:new o.NI(""),otp:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required,o.kI.compose([o.kI.pattern(this.passwordRegex),o.kI.maxLength(this.maxPass),o.kI.minLength(this.minPass)])]),confirmPassword:new o.NI("",[o.kI.required,o.kI.compose([o.kI.pattern(this.passwordRegex),o.kI.maxLength(this.maxPass),o.kI.minLength(this.minPass)])])}),this.userId=localStorage.getItem("userIdForChangePassword"),this.securityService.fetchSecurityPolicyService().subscribe(s=>{this.security=s,console.log(this.security),this.minPass=this.security.minPswdLength,this.maxPass=this.security.maxPswdLength,this.buildForm(this.minPass,this.maxPass),console.log(this.minPass,this.maxPass),console.log(this.security)}),this.buildForm(this.minPass?this.minPass:void 0,this.maxPass?this.maxPass:void 0)}buildForm(s,t){this.securityService.fetchSecurityPolicyService().subscribe(s=>{this.security1=s,this.ucase=this.security1.pswdComplexUcase,this.lcase=this.security1.pswdComplexLcase,this.num=this.security1.pswdComplexNum,this.splc=this.security1.pswdComplexSplc,"true"==this.security1.pswdComplexUcase&&(this.passwordRegex="(?=[^A-Z]*[A-Z])",this.errorMsg=" UpperCase"),"true"==this.security1.pswdComplexLcase&&(this.passwordRegex=this.passwordRegex+"(?=[^a-z]*[a-z])",this.errorMsg=""!=this.errorMsg?this.errorMsg+", LowerCase":this.errorMsg+" LowerCase"),"true"==this.splc&&(this.passwordRegex=this.passwordRegex+"(?=.*[!@#$%^&*])",this.errorMsg=""!=this.errorMsg?this.errorMsg+", Special Character":this.errorMsg+" Special Character"),"true"==this.security1.pswdComplexNum&&(this.passwordRegex=this.passwordRegex+"(?=[^0-9]*[0-9])",this.errorMsg=""!=this.errorMsg?this.errorMsg+", Number":this.errorMsg+" Number"),this.passwordRegex=this.passwordRegex+".{"+this.minPass+","+this.maxPass+"}",this.errorMsg="Password must contain atleast one "+this.errorMsg+".",console.log(this.passwordRegex),this.reactiveForm=this.fb.group({userId:new o.NI(""),otp:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required,o.kI.compose([o.kI.pattern(this.passwordRegex),o.kI.maxLength(this.maxPass),o.kI.minLength(this.minPass)])]),confirmPassword:new o.NI("",[o.kI.required,o.kI.compose([o.kI.pattern(this.passwordRegex),o.kI.maxLength(this.maxPass),o.kI.minLength(this.minPass)])])})}),console.log(this.minPass,this.maxPass),console.log("form",this.reactiveForm)}resetButton(){this.reactiveForm.reset()}reset(s){if(s.username){var t=n.AES.encrypt(s.password,"@12#90!^*NPR*g&*()$34#$"),e=n.AES.encrypt(s.username,"@12#90!^*NPR*g&*()$34#$"),i=t.toString(),r=e.toString();this.login1.password=i,this.login1.username=r,this.login1.otp=this.otp,console.log(this.login1),this.spinnerbutton=!0,this.apiService.forgetPassword(this.login1).subscribe(s=>{this.var1=s,console.log(this.var1),this.var1?(this.spinnerbutton=!1,"Login success."===this.var1[0]?(this.otpBtn=!0,this.submitBtn=!0,c().fire({text:"password Changed Successfully."})):c().fire({text:this.var1[0]})):(this.spinnerbutton=!1,c().fire({text:"Choose Other Password or otp is invalid."}))})}else this.toastService.infoMessage("Enter User Id.","")}getOtp(s){this.loginProcessing=!0,s?this.apiService.fetchMedUser(s).subscribe(t=>{console.log(t),this.user=t,this.email=this.user.email,localStorage.setItem("userFromLogin",this.user.userId),sessionStorage.setItem("user_id",this.user.userId);var e=n.AES.encrypt(s,"@12#90!^*NPR*g&*()$34#$").toString();console.log(e),this.spinnerbutton=!0,this.passwordReset1=e,console.log("uname",e),this.apiService.getOtpForReset(this.passwordReset1).subscribe(s=>{this.loginProcessing=!1,this.var=s,this.var?(this.button1=!0,this.button2=!1,this.isReadOnly=!0,this.spinnerbutton=!1,this.toastService.successMessage("OTP sent successfully to "+this.email,""),this.getOtpButtonEnable=!1):(c().fire({text:"Unable to find User details.Verify your userid."}),this.button1=!1,this.button2=!0,this.isReadOnly=!0,this.spinnerbutton=!1)})},s=>{c().fire(s.error.message)}):c().fire({text:"Enter User Id."})}goHome(){this.router.navigate(["/login"])}onOtpChange(s){this.otp=s,6===this.otp.length&&this.reactiveForm.get("otp").setValue(this.otp)}changePassword(s,t,e,i){if(console.log(s,t,e,i),s!=t)c().fire({text:"Password Not Matched."});else{this.loginProcessing=!0;let t=n.AES.encrypt(s,"@12#90!^*NPR*g&*()$34#$"),o=n.AES.encrypt(e,"@12#90!^*NPR*g&*()$34#$");var r=t.toString();let a=o.toString();this.login.password=r,this.login.username=a,this.login.otp=i,console.log(this.login),this.apiService.forgetPassword(this.login).subscribe(s=>{this.loginProcessing=!1,this.res=s,console.log(this.res),this.res?("Login success."===this.res[0]&&(this.otpBtn=!0,this.submitBtn=!0,c().fire({text:"Password Changed Successfully."})),"Time Expired"==this.res[0]&&c().fire({text:"This OTP is expired. Please click on Resend OTP to get a new OTP."}),"You cannot use your previous password. Please choose another password"==s[0]&&c().fire("You can not use your last "+this.security.pswdReuseAft+" passwords. Please choose another password.",""),"OTP is invalid"==s[0]&&c().fire({text:"Otp is invalid."}),"successfull"==s[0]&&(this.otpBtn=!0,this.submitBtn=!0,c().fire({text:"Password Changed Successfully."}))):c().fire({text:"Choose Other Password or otp is invalid."})})}}exit(){localStorage.clear(),sessionStorage.clear(),this.router.navigate(["/session/login"])}}return s.\u0275fac=function(t){return new(t||s)(h.Y36(r.F0),h.Y36(r.gz),h.Y36(l),h.Y36(o.qu),h.Y36(p.k),h.Y36(m.W))},s.\u0275cmp=h.Xpm({type:s,selectors:[["npr-forget-password"]],viewQuery:function(s,t){if(1&s&&h.Gf(w,5),2&s){let s;h.iGM(s=h.CRH())&&(t.ngOtpInput=s.first)}},decls:66,vars:16,consts:[[1,"mt-4"],["action","",1,"formStyle",3,"formGroup"],[1,"dbCardStyle","fieldwidth"],[1,"pageTitle","text-center","mb-md-4","mb-3"],[1,"row","gy-4"],[1,"col-12"],[1,"formLbl"],[1,"colorRed"],["id","User Id","placeholder","User Id","required","","value","","name","userId","formControlName","userId","oninput","this.value = this.value.toUpperCase()",1,"form-control"],["user",""],[1,"mb-10","px-md-10"],[1,"d-flex","flex-wrap","flex-stack"],["inputControls","9",2,"font-size","20px",3,"config","onInputChange"],["ngOtpInput",""],[1,"row"],[1,"col"],[1,"inputField"],[1,"inputField","pwdFldCol","d-flex"],["id","password","placeholder","New Password","required","","type","password","value","","name","password","formControlName","password",1,"form-control",3,"type"],["newPassword",""],["toggle","#pwdFld",1,"alignSelf",3,"click"],["class","showPwd","src","assets/images/show-icon.svg","alt","...",4,"ngIf"],["class","hidePwd","src","assets/images/hide-icon.svg","alt","...",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],["id","confirm password","placeholder","Confirm Password","required","","value","","name","confirmPassword","formControlName","confirmPassword",1,"form-control",3,"type"],["confirmPassword",""],[1,"col-lg-12"],[1,"row","g-3","pb-3","pt-3","justify"],[1,"col-auto"],[1,"btn","smBtn","minWdSmBtn","btnPrimary",3,"disabled","click"],[1,"btn","smBtn","minWdSmBtn","btnSecondary",3,"disabled","click"],[1,"btn","smBtn","minWdSmBtn","btnSecondary",3,"click"],["src","assets/images/show-icon.svg","alt","...",1,"showPwd"],["src","assets/images/hide-icon.svg","alt","...",1,"hidePwd"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(s,t){if(1&s){const s=h.EpF();h.TgZ(0,"div",0),h.TgZ(1,"form",1),h.TgZ(2,"div",2),h.TgZ(3,"h2",3),h._uU(4,"Reset Password"),h.qZA(),h.TgZ(5,"div",4),h.TgZ(6,"div",5),h.TgZ(7,"label",6),h._uU(8,"User ID"),h.TgZ(9,"span",7),h._uU(10,"*"),h.qZA(),h.qZA(),h._UZ(11,"input",8,9),h.qZA(),h.TgZ(13,"div",10),h.TgZ(14,"label",6),h._uU(15,"OTP"),h.TgZ(16,"span",7),h._uU(17,"*"),h.qZA(),h.qZA(),h.TgZ(18,"div",11),h.TgZ(19,"ng-otp-input",12,13),h.NdJ("onInputChange",function(s){return t.onOtpChange(s)}),h.qZA(),h.qZA(),h.qZA(),h.TgZ(21,"div",5),h.TgZ(22,"div",14),h.TgZ(23,"div",15),h.TgZ(24,"label",6),h._uU(25,"New Password"),h.TgZ(26,"span",7),h._uU(27,"*"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(28,"div",16),h.TgZ(29,"div",17),h._UZ(30,"input",18,19),h.TgZ(32,"span",20),h.NdJ("click",function(){return t.hide=!t.hide}),h.YNc(33,v,1,0,"img",21),h.YNc(34,x,1,0,"img",22),h.qZA(),h.qZA(),h.qZA(),h.YNc(35,P,2,1,"div",23),h.YNc(36,b,2,1,"div",23),h.YNc(37,I,2,1,"div",23),h.qZA(),h.TgZ(38,"div",5),h.TgZ(39,"div",14),h.TgZ(40,"div",15),h.TgZ(41,"label",6),h._uU(42,"Confirm Password"),h.TgZ(43,"span",7),h._uU(44,"*"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(45,"div",16),h.TgZ(46,"div",17),h._UZ(47,"input",24,25),h.TgZ(49,"span",20),h.NdJ("click",function(){return t.hide1=!t.hide1}),h.YNc(50,y,1,0,"img",21),h.YNc(51,T,1,0,"img",22),h.qZA(),h.qZA(),h.qZA(),h.YNc(52,q,2,1,"div",23),h.YNc(53,S,2,1,"div",23),h.YNc(54,N,2,1,"div",23),h.qZA(),h.TgZ(55,"div",26),h.TgZ(56,"div",27),h.TgZ(57,"div",28),h.TgZ(58,"button",29),h.NdJ("click",function(){h.CHM(s);const e=h.MAs(12);return t.getOtp(e.value)}),h._uU(59,"Get OTP"),h.qZA(),h.qZA(),h.TgZ(60,"div",28),h.TgZ(61,"button",30),h.NdJ("click",function(){h.CHM(s);const e=h.MAs(31),i=h.MAs(48),r=h.MAs(12);return t.changePassword(e.value,i.value,r.value,t.otp)}),h._uU(62,"Save"),h.qZA(),h.qZA(),h.TgZ(63,"div",28),h.TgZ(64,"a",31),h.NdJ("click",function(){return t.exit()}),h._uU(65,"Exit"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()}2&s&&(h.xp6(1),h.Q6J("formGroup",t.reactiveForm),h.xp6(18),h.Q6J("config",t.config),h.xp6(11),h.Q6J("type",t.hide?"password":"text"),h.xp6(3),h.Q6J("ngIf",!t.hide),h.xp6(1),h.Q6J("ngIf",t.hide),h.xp6(1),h.Q6J("ngIf",t.reactiveForm.get("password").touched&&!t.reactiveForm.get("password").valid),h.xp6(1),h.Q6J("ngIf",t.reactiveForm.get("password").hasError("minlength")),h.xp6(1),h.Q6J("ngIf",t.reactiveForm.get("password").hasError("maxlength")),h.xp6(10),h.Q6J("type",t.hide1?"password":"text"),h.xp6(3),h.Q6J("ngIf",!t.hide1),h.xp6(1),h.Q6J("ngIf",t.hide1),h.xp6(1),h.Q6J("ngIf",t.reactiveForm.get("confirmPassword").touched&&!t.reactiveForm.get("confirmPassword").valid),h.xp6(1),h.Q6J("ngIf",t.reactiveForm.get("confirmPassword").hasError("minlength")),h.xp6(1),h.Q6J("ngIf",t.reactiveForm.get("confirmPassword").hasError("maxlength")),h.xp6(4),h.Q6J("disabled",t.otpBtn||!t.getOtpButtonEnable),h.xp6(3),h.Q6J("disabled",!t.reactiveForm.valid||t.submitBtn))},directives:[o._Y,o.JL,o.sg,o.Fj,o.Q7,o.JJ,o.u,f.df,i.O5],styles:["img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]{vertical-align:middle}"]}),s})();class C{}const k=[{path:"",component:U}];let M=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=h.oAB({type:s}),s.\u0275inj=h.cJS({imports:[[r.Bz.forChild(k)],r.Bz]}),s})(),R=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=h.oAB({type:s}),s.\u0275inj=h.cJS({imports:[[i.ez,M,o.UX,f.Xz]]}),s})()}}]);