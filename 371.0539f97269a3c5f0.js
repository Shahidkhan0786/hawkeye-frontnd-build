"use strict";(self.webpackChunkHawkEye=self.webpackChunkHawkEye||[]).push([[371],{8085:(T,l,o)=>{o.d(l,{U:()=>A});var i=o(95),e=o(9468),g=o(6457),m=o(4739),f=o(2425),h=o(6814);function v(t,d){1&t&&(e.TgZ(0,"p"),e._uU(1,"Name is required."),e.qZA())}function Z(t,d){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,v,2,0,"p",14),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.g.name.errors?null:r.g.name.errors.required)}}function a(t,d){1&t&&(e.TgZ(0,"p"),e._uU(1,"Phone Number is required."),e.qZA())}function k(t,d){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,a,2,0,"p",14),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.g.phone.errors?null:r.g.phone.errors.required)}}function p(t,d){1&t&&(e.TgZ(0,"p"),e._uU(1,"Email is required."),e.qZA())}function c(t,d){1&t&&(e.TgZ(0,"p"),e._uU(1,"Email is invalid."),e.qZA())}function _(t,d){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,p,2,0,"p",14),e.YNc(2,c,2,0,"p",14),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.g.email.errors?null:r.g.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.g.email.errors?null:r.g.email.errors.email)}}function U(t,d){1&t&&e._UZ(0,"div",15)}const y=function(t){return{"form-submitted":t}};let A=(()=>{class t{constructor(r,n,s,u){this.ds=r,this.validator=n,this.fb=s,this.toastr=u,this.loading=!1,this.contactForm=this.fb.group({name:new i.NI(null,[i.kI.required]),email:new i.NI(null,[i.kI.required,i.kI.email]),phone:new i.NI(null,[i.kI.required]),agreed:new i.NI,wantToReceiveNotifications:new i.NI})}ngOnInit(){}onSubmit(r){if(this.contactForm.invalid)return;let n=this.contactForm.getRawValue();n.phone=n.phone.toString(),n.agreed=1==n.agreed?1:0,n.wantToReceiveNotifications=1==n.wantToReceiveNotifications?1:0,this.loading=!0,r.resetForm(),this.ds.saveContactUs(n).subscribe(s=>{this.loading=!1,s.success?this.toastr.success("Form submitted successfully","Success"):this.toastr.error("Something went wrong!","Error"),this.loading=!1})}get g(){return this.contactForm.controls}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(g.D),e.Y36(m.z),e.Y36(i.qu),e.Y36(f._W))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-form"]],decls:34,vars:12,consts:[["id","contactForm1",2,"background-color","#fff","padding","10px 30px 20px 30px",3,"formGroup","ngSubmit"],["f","ngForm"],[1,"mb-3","text-center",2,"font-weight","700","line-height","1.5"],[1,"error"],["type","text","formControlName","name",1,"form-control","mt-1",3,"ngClass"],["class","error",4,"ngIf"],[1,"mt-3"],["type","number","formControlName","phone","placeholder","(+1) - (---------)  ",1,"form-control","mt-1",3,"ngClass"],["type","email","formControlName","email",1,"form-control","mt-1"],["type","checkbox","id","agreedCheckbox1","formControlName","agreed"],["type","checkbox","id","notificationCheckbox1","formControlName","wantToReceiveNotifications"],[1,"button","mt-4","d-flex","justify-content-center"],["type","submit",1,"btn","btn-lg","btn-danger","d-flex","justify-content-center","send-request",3,"disabled"],["class","loader1",4,"ngIf"],[4,"ngIf"],[1,"loader1"]],template:function(n,s){if(1&n){const u=e.EpF();e.TgZ(0,"form",0,1),e.NdJ("ngSubmit",function(){e.CHM(u);const b=e.MAs(1);return e.KtG(s.onSubmit(b))}),e.TgZ(2,"h4",2),e._uU(3,"Contact us for free setup"),e.qZA(),e.TgZ(4,"label"),e._uU(5,"Full Name "),e.TgZ(6,"span",3),e._uU(7,"*"),e.qZA()(),e._UZ(8,"input",4),e.YNc(9,Z,2,1,"div",5),e.TgZ(10,"label",6),e._uU(11,"Phone number "),e.TgZ(12,"span",3),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",7),e.YNc(15,k,2,1,"div",5),e.TgZ(16,"label",6),e._uU(17,"Enter Email "),e.TgZ(18,"span",3),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",8),e.YNc(21,_,3,2,"div",5),e.TgZ(22,"div",6),e._UZ(23,"input",9),e.TgZ(24,"span"),e._uU(25," I have read and agree to Terms of Service"),e.qZA()(),e.TgZ(26,"div",6),e._UZ(27,"input",10),e.TgZ(28,"span"),e._uU(29," I want to receive the most useful tips and news"),e.qZA()(),e.TgZ(30,"div",11)(31,"button",12),e._uU(32," Send Request "),e.YNc(33,U,1,0,"div",13),e.qZA()()()}if(2&n){const u=e.MAs(1);e.Q6J("formGroup",s.contactForm),e.xp6(8),e.Q6J("ngClass",e.VKq(8,y,u.submitted)),e.xp6(1),e.Q6J("ngIf",s.validator.checkErrors(s.g.name,u)),e.xp6(5),e.Q6J("ngClass",e.VKq(10,y,u.submitted)),e.xp6(1),e.Q6J("ngIf",s.validator.checkErrors(s.g.phone,u)),e.xp6(6),e.Q6J("ngIf",s.validator.checkErrors(s.g.email,u)),e.xp6(10),e.Q6J("disabled",s.loading),e.xp6(2),e.Q6J("ngIf",s.loading)}},dependencies:[h.mk,h.O5,i._Y,i.Fj,i.wV,i.Wl,i.JJ,i.JL,i.sg,i.u],encapsulation:2})}return t})()},2371:(T,l,o)=>{o.r(l),o.d(l,{ReeferModule:()=>Z});var i=o(6814),e=o(9468),g=o(5017),m=o(8085);let f=(()=>{class a{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(c){return new(c||a)};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-reefer"]],decls:109,vars:0,consts:[[1,"banner"],["src","assets/banners/t1.webp","alt",""],[1,"pad"],[1,"row","mb-5"],["data-aos","fade-right",1,"col-md-7","main-points"],[1,"breadcrumbs"],[1,"item"],[1,"fa-solid","fa-check","text-danger"],["data-aos","fade-left",1,"col-md-5","d-flex","justify-content-end"],[2,"width","100%"],[1,"row"],[1,"col-md-6"],["src","assets/sub-pages/truck-type/img2.jpg","alt","",2,"width","100%","height","350px"],[1,"tick"],[1,"text-center","mt-4",2,"font-weight","700"],[1,"d-flex","justify-content-center","flex-wrap","mb-5"],["routerLink","/services/truck-dispatching",1,"service-link"],["routerLink","/services/billing",1,"service-link"],["routerLink","/services/document-management",1,"service-link"],["routerLink","/services/factoring-services",1,"service-link"],["routerLink","/services/rate-negotiation",1,"service-link"],["routerLink","/services/safety",1,"service-link"],["routerLink","/services/trucker-accounting",1,"service-link"],["routerLink","/services/trucking-invoice",1,"service-link"],["routerLink","/services/truck-document",1,"service-link"],["routerLink","/services/truck-dispatch",1,"service-link"]],template:function(c,_){1&c&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"section",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1"),e._uU(7,"Reefer"),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"i",7),e.TgZ(10,"span"),e._uU(11,"No forced dispatch and hidden payments"),e.qZA()(),e.TgZ(12,"div",6),e._UZ(13,"i",7),e.TgZ(14,"span"),e._uU(15,"Personal dispatcher with 24 / 7 support"),e.qZA()(),e.TgZ(16,"div",6),e._UZ(17,"i",7),e.TgZ(18,"span"),e._uU(19,"Only 5% of gross"),e.qZA()()(),e.TgZ(20,"div",8),e._UZ(21,"app-form",9),e.qZA()(),e.TgZ(22,"div",10)(23,"div",11)(24,"h3"),e._uU(25,"Reefer Dispatch"),e.qZA(),e.TgZ(26,"p"),e._uU(27,"Hawkeye Freights & Dispatch for Reefer Trucks \u2014 Comprehensive Dispatching Services"),e.qZA(),e.TgZ(28,"p"),e._uU(29,"Let our team handle dispatching for your reefer freight \u2014 all you need to do is drive."),e.qZA(),e.TgZ(30,"p"),e._uU(31,"When businesses across the US need temperature-controlled freight, there is no substitute for a refrigerated truck. Also known as reefer trucks, these vehicles are fitted with the technology required to keep meat and produce fresh and sensitive cargo at the right atmospheric conditions."),e.qZA()(),e.TgZ(32,"div",11),e._UZ(33,"img",12),e.qZA()(),e.TgZ(34,"p"),e._uU(35,"You already know this, of course. You and your reefer truck are already providing an excellent service to your customers. But, to continue offering this level of service, you need a dispatcher you can rely on \u2014 one with the right attitude to your business and a range of streamlined, stress-free processes that keep your operation moving."),e.qZA(),e.TgZ(36,"p"),e._uU(37,"This is what the team at Hawkeye Freights & Dispatch aims to provide for your business. We offer full transparency and a personal approach, alongside a comprehensive set of services designed to cover the entire dispatching reefer freight process."),e.qZA(),e.TgZ(38,"h3"),e._uU(39,"Get More from Your Business with Hawkeye Freights & Dispatch for Reefer Trucks"),e.qZA(),e.TgZ(40,"p"),e._uU(41,"Choosing the right service for dispatching reefer freight can make all the difference for your business. At Hawkeye Freights & Dispatch, we have centered our services on securing the best jobs and the best working environment for specialized drivers\xa0\u2014 including reefer truck drivers just like you."),e.qZA(),e.TgZ(42,"p"),e._uU(43,"Look at some of the benefits you can expect:"),e.qZA(),e.TgZ(44,"div",13),e._UZ(45,"i",7),e.TgZ(46,"span"),e._uU(47,"More streamlined, reliable deliveries"),e.qZA()(),e.TgZ(48,"p"),e._uU(49,"Reefer truck drivers typically handle sensitive cargoes. This cargo may include foods and beverages, or other items with specific temperature and climate requirements. As such, they need to be delivered on time, without delay. Working with the right dispatch service helps you connect with the right support and remove many of the obstacles, so you can keep on providing the very best to your customers."),e.qZA(),e.TgZ(50,"div",13),e._UZ(51,"i",7),e.TgZ(52,"span"),e._uU(53,"A steady stream of revenue"),e.qZA()(),e.TgZ(54,"p"),e._uU(55,"Your reefer truck is an investment, and you need to be able to achieve a steady stream of revenue to recoup this investment. What\u2019s more, you need to keep this revenue going as you secure increasing profitability, even after factoring in running costs. Dispatch services put this reliable stream of income in your hands."),e.qZA(),e.TgZ(56,"div",13),e._UZ(57,"i",7),e.TgZ(58,"span"),e._uU(59,"Less hassle, less worry"),e.qZA()(),e.TgZ(60,"p"),e._uU(61,"Running a trucking business can be seriously tricky, particularly if you are just starting out in this industry or are an owner-operator with limited resources to call upon. To put it simply, you don\u2019t want to have to worry about finding contracts and jobs, booking orders, and handling all the additional work that comes with this. Choosing to work with the right reefer freight dispatch service means you don\u2019t have to. Instead, you can let us handle that so you can focus on other aspects of your business."),e.qZA(),e.TgZ(62,"div",13),e._UZ(63,"i",7),e.TgZ(64,"span"),e._uU(65,"Meeting the market demand."),e.qZA()(),e.TgZ(66,"p"),e._uU(67,"A reefer truck is something of a specialized piece of kit. As such, you need to be able to find clients who need this kind of service. Fortunately, there is a high market demand for this kind of refrigerated logistics service. Unfortunately, it\u2019s not always easy to connect with this market demand. A dispatch service removes the hassle, putting you in touch with the right kind of clients and helping you grow your customer base."),e.qZA(),e.TgZ(68,"p"),e._uU(69,"The Hawkeye Freights & Dispatch team has extensive experience in this industry, and we know exactly what your business needs if it is to thrive and grow. This level of expertise helps make us one of the country\u2019s top reefer dispatch services, and we assist clients across the United States and beyond. Reach out to the team to learn more about our services and what they mean for you and your business."),e.qZA(),e.TgZ(70,"p"),e._uU(71,"Hawkeye Freights & Dispatch \u2014 Dispatching Reefer Freight So You Can Focus on Doing What You Do Best"),e.qZA(),e.TgZ(72,"p"),e._uU(73,"Here at Hawkeye Freights & Dispatch, we aim to become your partner, providing dispatch services in an honest, friendly, and fully transparent manner. Look at some of the factors that keep our clients coming back to us."),e.qZA(),e.TgZ(74,"p"),e._uU(75,"Learn about why so many drivers now rely on Hawkeye Freights & to handle dispatch for reefer trucks."),e.qZA(),e.TgZ(76,"p"),e._uU(77,"The right dispatching services for you \u2014 We help you find the loads you need to keep your business moving, including handling customer negotiation, billing, document management, paperwork, and more."),e.qZA(),e.TgZ(78,"p"),e._uU(79,"A reliable, personal approach \u2014 We work with you, fostering an open approach to communication and ensuring you are supported at every turn. We do not believe in making promises we can\u2019t keep."),e.qZA(),e.TgZ(80,"p"),e._uU(81,"Processes that support your driving \u2014 We keep everything streamlined, so you just need to focus on driving your reefer truck."),e.qZA(),e.TgZ(82,"p"),e._uU(83,"High levels of experience in this field \u2014 Our team is highly experienced in dispatching, so you can trust us to offer the right services for your business."),e.qZA(),e.TgZ(84,"p"),e._uU(85,"Get in touch with our team today to get a quote for our services or simply discover more about what we do."),e.qZA(),e.TgZ(86,"h3",14),e._uU(87,"Choose The Service You Need"),e.qZA(),e.TgZ(88,"div",15)(89,"div",16),e._uU(90,"Truck Dispatching"),e.qZA(),e.TgZ(91,"div",17),e._uU(92,"Billing"),e.qZA(),e.TgZ(93,"div",18),e._uU(94,"Document Management"),e.qZA(),e.TgZ(95,"div",19),e._uU(96,"Factoring Service"),e.qZA(),e.TgZ(97,"div",20),e._uU(98,"Rate Negotiation"),e.qZA(),e.TgZ(99,"div",21),e._uU(100,"Safety & DOT Compliance"),e.qZA(),e.TgZ(101,"div",22),e._uU(102,"Trucker Accounting"),e.qZA(),e.TgZ(103,"div",23),e._uU(104,"Trucking Invoice Service"),e.qZA(),e.TgZ(105,"div",24),e._uU(106,"Truck Document Management"),e.qZA(),e.TgZ(107,"div",25),e._uU(108,"Truck Document Dispatch Service"),e.qZA()()())},dependencies:[g.rH,m.U],encapsulation:2})}return a})();var h=o(2841);const v=[{path:"",component:f}];let Z=(()=>{class a{static#e=this.\u0275fac=function(c){return new(c||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[i.ez,g.Bz.forChild(v),h.m]})}return a})()}}]);