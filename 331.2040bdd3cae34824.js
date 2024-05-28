"use strict";(self.webpackChunkHawkEye=self.webpackChunkHawkEye||[]).push([[331],{9331:(U,u,r)=>{r.r(u),r.d(u,{ContactUsModule:()=>Z});var n=r(6814),t=r(9468),f=r(8085);let g=(()=>{class s{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(m){return new(m||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-contact-us"]],decls:25,vars:0,consts:[[1,"banner"],["src","assets/banners/contactUs.webp","alt",""],[1,"pad"],[1,"breadcrumbs"],[1,"row","mb-5"],[1,"col-md-6",2,"background-color","#000","color","#fff","padding","2rem 5rem"],[1,"bg-light","mt-5","mb-5"],[1,"mb-4"],[1,"mb-3"],[1,"col-md-6","d-flex","justify-content-start",2,"background-color","#fff"],[2,"width","100%"]],template:function(m,v){1&m&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"section",2)(3,"div",3)(4,"h1"),t._uU(5,"Contact Us"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"h3"),t._uU(9,"YOUR CONVENIENCE "),t._UZ(10,"br"),t._uU(11," IS OUR #1 PRIORITY"),t.qZA(),t._UZ(12,"hr",6),t.TgZ(13,"p",7),t._uU(14," Head Office "),t.qZA(),t.TgZ(15,"p",8),t._uU(16,"Phone"),t.qZA(),t.TgZ(17,"h4",7),t._uU(18,"(406)-4058608"),t.qZA(),t.TgZ(19,"p",8),t._uU(20,"E-mail"),t.qZA(),t.TgZ(21,"h4"),t._uU(22,"info@hawkeyefreights.com"),t.qZA()(),t.TgZ(23,"div",9),t._UZ(24,"app-form",10),t.qZA()()())},dependencies:[f.U],encapsulation:2})}return s})();var _=r(5017),d=r(2841);const h=[{path:"",component:g}];let Z=(()=>{class s{static#t=this.\u0275fac=function(m){return new(m||s)};static#e=this.\u0275mod=t.oAB({type:s});static#n=this.\u0275inj=t.cJS({imports:[n.ez,_.Bz.forChild(h),d.m]})}return s})()},8085:(U,u,r)=>{r.d(u,{U:()=>I});var n=r(95),t=r(9468),f=r(6457),g=r(4739),_=r(2425),d=r(6814);function h(e,l){1&e&&(t.TgZ(0,"p"),t._uU(1,"Name is required."),t.qZA())}function Z(e,l){if(1&e&&(t.TgZ(0,"div",3),t.YNc(1,h,2,0,"p",14),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",null==o.g.name.errors?null:o.g.name.errors.required)}}function s(e,l){1&e&&(t.TgZ(0,"p"),t._uU(1,"Phone Number is required."),t.qZA())}function C(e,l){if(1&e&&(t.TgZ(0,"div",3),t.YNc(1,s,2,0,"p",14),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",null==o.g.phone.errors?null:o.g.phone.errors.required)}}function p(e,l){1&e&&(t.TgZ(0,"p"),t._uU(1,"Email is required."),t.qZA())}function m(e,l){1&e&&(t.TgZ(0,"p"),t._uU(1,"Email is invalid."),t.qZA())}function v(e,l){if(1&e&&(t.TgZ(0,"div",3),t.YNc(1,p,2,0,"p",14),t.YNc(2,m,2,0,"p",14),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",null==o.g.email.errors?null:o.g.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.g.email.errors?null:o.g.email.errors.email)}}function b(e,l){1&e&&t._UZ(0,"div",15)}const T=function(e){return{"form-submitted":e}};let I=(()=>{class e{constructor(o,i,a,c){this.ds=o,this.validator=i,this.fb=a,this.toastr=c,this.loading=!1,this.contactForm=this.fb.group({name:new n.NI(null,[n.kI.required]),email:new n.NI(null,[n.kI.required,n.kI.email]),phone:new n.NI(null,[n.kI.required]),agreed:new n.NI,wantToReceiveNotifications:new n.NI})}ngOnInit(){}onSubmit(o){if(this.contactForm.invalid)return;let i=this.contactForm.getRawValue();i.phone=i.phone.toString(),i.agreed=1==i.agreed?1:0,i.wantToReceiveNotifications=1==i.wantToReceiveNotifications?1:0,this.loading=!0,o.resetForm(),this.ds.saveContactUs(i).subscribe(a=>{this.loading=!1,a.success?this.toastr.success("Form submitted successfully","Success"):this.toastr.error("Something went wrong!","Error"),this.loading=!1})}get g(){return this.contactForm.controls}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(f.D),t.Y36(g.z),t.Y36(n.qu),t.Y36(_._W))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-form"]],decls:34,vars:12,consts:[["id","contactForm1",2,"background-color","#fff","padding","10px 30px 20px 30px",3,"formGroup","ngSubmit"],["f","ngForm"],[1,"mb-3","text-center",2,"font-weight","700","line-height","1.5"],[1,"error"],["type","text","formControlName","name",1,"form-control","mt-1",3,"ngClass"],["class","error",4,"ngIf"],[1,"mt-3"],["type","number","formControlName","phone","placeholder","(+1) - (---------)  ",1,"form-control","mt-1",3,"ngClass"],["type","email","formControlName","email",1,"form-control","mt-1"],["type","checkbox","id","agreedCheckbox1","formControlName","agreed"],["type","checkbox","id","notificationCheckbox1","formControlName","wantToReceiveNotifications"],[1,"button","mt-4","d-flex","justify-content-center"],["type","submit",1,"btn","btn-lg","btn-danger","d-flex","justify-content-center","send-request",3,"disabled"],["class","loader1",4,"ngIf"],[4,"ngIf"],[1,"loader1"]],template:function(i,a){if(1&i){const c=t.EpF();t.TgZ(0,"form",0,1),t.NdJ("ngSubmit",function(){t.CHM(c);const E=t.MAs(1);return t.KtG(a.onSubmit(E))}),t.TgZ(2,"h4",2),t._uU(3,"Contact us for free setup"),t.qZA(),t.TgZ(4,"label"),t._uU(5,"Full Name "),t.TgZ(6,"span",3),t._uU(7,"*"),t.qZA()(),t._UZ(8,"input",4),t.YNc(9,Z,2,1,"div",5),t.TgZ(10,"label",6),t._uU(11,"Phone number "),t.TgZ(12,"span",3),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",7),t.YNc(15,C,2,1,"div",5),t.TgZ(16,"label",6),t._uU(17,"Enter Email "),t.TgZ(18,"span",3),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",8),t.YNc(21,v,3,2,"div",5),t.TgZ(22,"div",6),t._UZ(23,"input",9),t.TgZ(24,"span"),t._uU(25," I have read and agree to Terms of Service"),t.qZA()(),t.TgZ(26,"div",6),t._UZ(27,"input",10),t.TgZ(28,"span"),t._uU(29," I want to receive the most useful tips and news"),t.qZA()(),t.TgZ(30,"div",11)(31,"button",12),t._uU(32," Send Request "),t.YNc(33,b,1,0,"div",13),t.qZA()()()}if(2&i){const c=t.MAs(1);t.Q6J("formGroup",a.contactForm),t.xp6(8),t.Q6J("ngClass",t.VKq(8,T,c.submitted)),t.xp6(1),t.Q6J("ngIf",a.validator.checkErrors(a.g.name,c)),t.xp6(5),t.Q6J("ngClass",t.VKq(10,T,c.submitted)),t.xp6(1),t.Q6J("ngIf",a.validator.checkErrors(a.g.phone,c)),t.xp6(6),t.Q6J("ngIf",a.validator.checkErrors(a.g.email,c)),t.xp6(10),t.Q6J("disabled",a.loading),t.xp6(2),t.Q6J("ngIf",a.loading)}},dependencies:[d.mk,d.O5,n._Y,n.Fj,n.wV,n.Wl,n.JJ,n.JL,n.sg,n.u],encapsulation:2})}return e})()}}]);