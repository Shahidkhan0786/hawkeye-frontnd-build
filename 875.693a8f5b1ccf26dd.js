"use strict";(self.webpackChunkHawkEye=self.webpackChunkHawkEye||[]).push([[875],{2875:(K,m,r)=>{r.r(m),r.d(m,{HomeModule:()=>V});var f=r(6814),t=r(9468),P=r(8085),C=r(5017),d=r(8010),O=r(5619),_=r(2572),w=r(4664),v=r(1954),x=r(7394);const p={schedule(o){let n=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:i}=p;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);const s=n(c=>{e=void 0,o(c)});return new x.w0(()=>e?.(s))},requestAnimationFrame(...o){const{delegate:n}=p;return(n?.requestAnimationFrame||requestAnimationFrame)(...o)},cancelAnimationFrame(...o){const{delegate:n}=p;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...o)},delegate:void 0};var b=r(2631);const h=new class Z extends b.v{flush(n){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let s;n=n||i.shift();do{if(s=n.execute(n.state,n.delay))break}while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,s){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw s}}}(class y extends v.o{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return null!==i&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=p.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var s;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);const{actions:c}=n;null!=e&&(null===(s=c[c.length-1])||void 0===s?void 0:s.id)!==e&&(p.cancelAnimationFrame(e),n._scheduled=void 0)}});var k=r(6321),T=r(4825),u=r(7398),A=r(9360),S=r(8251),z=r(5211),j=r(2096),H=r(3997),L=r(9773),$=r(5592),J=r(8645),D=r(4552);class Q extends J.x{constructor(n=1/0,e=1/0,i=D.l){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){const{isStopped:e,_buffer:i,_infiniteTimeWindow:s,_timestampProvider:c,_windowTime:a}=this;e||(i.push(n),!s&&i.push(c.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:s}=this,c=s.slice();for(let a=0;a<c.length&&!n.closed;a+=i?1:2)n.next(c[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){const{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:s}=this,c=(s?1:2)*n;if(n<1/0&&c<i.length&&i.splice(0,i.length-c),!s){const a=e.now();let l=0;for(let g=1;g<i.length&&i[g]<=a;g+=2)l=g;l&&i.splice(0,l+1)}}}let M=(()=>{class o extends $.y{constructor(){super(e=>this.destroySubject$.subscribe(e)),this.destroySubject$=new Q(1)}ngOnDestroy(){this.destroySubject$.next(),this.destroySubject$.complete()}static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();const W=o=>o*(2-o);let I=(()=>{class o{set count(e){this.count$.next(e)}set duration(e){this.duration$.next(e)}constructor(e,i,s){this.elementRef=e,this.renderer=i,this.destroy1$=s,this.count$=new O.X(0),this.duration$=new O.X(2e3),this.currentCount$=(0,_.a)([this.count$,this.duration$]).pipe((0,w.w)(([c,a])=>{const l=h.now();return function U(o=0,n=k.z){return o<0&&(o=0),(0,T.H)(o,o,n)}(0,h).pipe((0,u.U)(()=>h.now()-l),(0,u.U)(g=>g/a),function F(o,n=!1){return(0,A.e)((e,i)=>{let s=0;e.subscribe((0,S.x)(i,c=>{const a=o(c,s++);(a||n)&&i.next(c),!a&&i.complete()}))})}(g=>g<=1),(0,u.U)(W),(0,u.U)(g=>Math.round(g*c)),function q(...o){return n=>(0,z.z)(n,(0,j.of)(...o))}(c),(0,H.x)())}))}ngOnInit(){this.displayCurrentCount()}displayCurrentCount(){this.currentCount$.pipe((0,L.R)(this.destroy1$)).subscribe(e=>{this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",e)})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(M))};static#n=this.\u0275dir=t.lG2({type:o,selectors:[["","countUp",""]],inputs:{count:["countUp","count"],duration:"duration"},features:[t._Bn([M])]})}return o})();function B(o,n){if(1&o&&(t.TgZ(0,"div",37)(1,"div",38)(2,"span",31)(3,"p",39),t._uU(4),t.qZA(),t._UZ(5,"span",40),t.qZA(),t.TgZ(6,"span",41),t._uU(7," + "),t.qZA(),t.TgZ(8,"span",42),t._uU(9," > "),t.qZA(),t._UZ(10,"img",43),t.qZA()()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("routerLink",e.link),t.xp6(3),t.Oqu(e.count),t.xp6(1),t.Q6J("innerHTML",e.innerText,t.oJD),t.xp6(5),t.Q6J("src",e.imgSrc,t.LSH)}}function Y(o,n){if(1&o&&(t.TgZ(0,"div",44),t._UZ(1,"img",45)(2,"div",46),t.TgZ(3,"a"),t._uU(4),t.TgZ(5,"span"),t._uU(6,">"),t.qZA()()()),2&o){const e=n.$implicit;t.Q6J("routerLink",e.link),t.xp6(1),t.Q6J("src",e.imgSrc,t.LSH)("alt",e.text),t.xp6(3),t.hij("",e.text," ")}}function R(o,n){if(1&o&&(t.TgZ(0,"div",48)(1,"div",49),t._UZ(2,"img",50),t.qZA(),t.TgZ(3,"div",51)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h3"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()()()),2&o){const e=t.oxw().$implicit;t.xp6(5),t.Oqu(e.name),t.xp6(2),t.Oqu(e.sr_no),t.xp6(2),t.Oqu(e.description)}}function N(o,n){1&o&&t.YNc(0,R,10,3,"ng-template",47)}let E=(()=>{class o{constructor(){this.services=[],this.workWithUs=[],this.count1=5e3,this.count2=7500,this.count3=58,this.duration=1500,this.duration2=2e3,this.customOptions={dots:!0,nav:!0,margin:30,navText:['<img src= "assets/left.svg" />','<img src= "assets/right.svg" />'],autoplay:!0,loop:!0,navSpeed:700,autoplaySpeed:1e3,autoplayTimeout:9e3,responsive:{0:{items:1}}},this.testimonials=[{name:"Jay Sanders",sr_no:"MC # 104970",description:"Place my trucking business in Hawkeye Freights & Dispatch's hands and haven't needed another dispatcher since. Outstanding Communication, very knowledgeable of the business, and they don't break the bank on percentage. Worth way more than other companies charging 10+ percent. Thank you, guys. "},{name:"Sam Jose",sr_no:"MC# 717422",description:"Working with Hawkeye Freights & Dispatch has been a game-changer for our trucking business. Their personalized approach, attention to detail, and commitment to excellence have truly set them apart in the industry. The team at Hawkeye goes above and beyond to ensure our trucks are matched with the right loads, keeping our operations running smoothly and efficiently."}]}ngOnInit(){this.services=[{count:"01",imgSrc:"./assets/services/s1.webp",link:"/services/truck-dispatching",innerText:'<span class="text">Truck <br> dispatching</span>'},{count:"02",imgSrc:"./assets/services/s2.webp",link:"/services/billing",innerText:'<span class="text">Billing</span>'},{count:"03",imgSrc:"./assets/services/s3.webp",link:"/services/document-management",innerText:'<span class="text">Document Management <br/> & Paperwork</span>'},{count:"04",imgSrc:"./assets/services/s4.webp",link:"/services/factoring-services",innerText:'<span class="text">Factoring service</span>'},{count:"05",imgSrc:"./assets/services/s5.webp",link:"/services/rate-negotiation",innerText:'<span class="text">Rate Negotiation</span>'},{count:"06",imgSrc:"./assets/services/s6.webp",link:"/services/safety",innerText:'<span class="text">SAFTY / DOT compliance</span>'},{count:"07",imgSrc:"./assets/services/s7.webp",link:"/services/trucking-invoice",innerText:'<span class="text">Trucking Invoice Service</span>'},{count:"08",imgSrc:"./assets/services/s8.webp",link:"/services/truck-dispatch",innerText:'<span class="text">Truck Document Dispatch</span>'}],this.workWithUs=[{imgSrc:"./assets/work-with-us/img1.webp",link:"/truck-type/dry-van",text:"Dry Van"},{imgSrc:"./assets/work-with-us/img2.jpg",link:"/truck-type/step-deck",text:"Step Deck"},{imgSrc:"./assets/work-with-us/img3.jpg",link:"/truck-type/reefer",text:"Reefer"},{imgSrc:"./assets/work-with-us/img4.jpg",link:"/truck-type/flatbed",text:"Flatbed"},{imgSrc:"./assets/work-with-us/img5.jpg",link:"/truck-type/power-only",text:"Power Only"},{imgSrc:"./assets/work-with-us/img6.jpg",link:"/truck-type/hotshot",text:"Hotshot"},{imgSrc:"./assets/work-with-us/img7.jpg",link:"/truck-type/box-truck",text:"Boxtruck"},{imgSrc:"./assets/work-with-us/img8.webp",link:"/truck-type/straight-truck",text:"Straight truck"}]}static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:106,vars:14,consts:[[1,"hero"],[1,"row"],["src","/assets/hero-video.mp4","playsinline","",3,"autoplay","loop","muted","preload"],[1,"content","pad"],["data-aos","zoom-in",1,"text"],[1,"title"],["href","tel:+1302123456",1,"phone-number","btn"],[1,"services","pad"],[1,"d-flex","justify-content-between","heading"],["data-aos","fade-right",1,"before"],["data-aos","fade-left"],[1,"row","service-container"],["class","col-sm-6",4,"ngFor","ngForOf"],[1,"count-section","pad"],[1,"heading"],[1,"d-flex","justify-content-center","flex-wrap"],[1,"wrapper","text-white"],[1,"fa-solid","fa-car"],[1,"d-flex","align-items-center"],[1,"count-num",3,"countUp","duration"],[1,"count-text"],[1,"fa-solid","fa-house"],[1,"fa-solid","fa-book"],[1,"getStart-section","pad"],["data-aos","fade-right",1,"col-lg-7","content"],[1,"p-0"],["routerLink","/contact-us"],["routerLink","/how-to-start"],["data-aos","fade-left",1,"col-lg-5"],[2,"width","100%"],[1,"work-with-us","pad"],[1,"wrapper"],["class","box","data-aos","slide-up",3,"routerLink",4,"ngFor","ngForOf"],[1,"testimonials","pad"],["routerLink","/testimonials","data-aos","fade-left"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-sm-6"],["data-aos","slide-up",1,"service-card",3,"routerLink"],[1,"service-count"],[1,"text",3,"innerHTML"],[1,"plus"],[1,"plus1"],["alt","",3,"src"],["data-aos","slide-up",1,"box",3,"routerLink"],[3,"src","alt"],[1,"overlay"],["carouselSlide",""],[1,"wrap"],[1,"img"],["src","assets/testimonials.jpg","alt",""],[1,"txt"]],template:function(i,s){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"video",2),t.TgZ(3,"div",3)(4,"div",4)(5,"p",5),t._uU(6,"Freight "),t._UZ(7,"br"),t._uU(8,"Dispatch "),t._UZ(9,"br"),t._uU(10," Service"),t.qZA(),t.TgZ(11,"a",6),t._uU(12,"(406)-4058608"),t.qZA()(),t._UZ(13,"app-form"),t.qZA()()(),t.TgZ(14,"section",7)(15,"span",8)(16,"h2",9),t._uU(17,"Services "),t._UZ(18,"br"),t._uU(19," and pricing"),t.qZA(),t.TgZ(20,"a",10),t._uU(21,"From 5% "),t._UZ(22,"br"),t._uU(23," of gross"),t.qZA()(),t.TgZ(24,"div",11),t.YNc(25,B,11,4,"div",12),t.qZA()(),t.TgZ(26,"section",13)(27,"span",14)(28,"h2",9),t._uU(29," To work "),t._UZ(30,"br"),t._uU(31," not talk"),t.qZA()(),t.TgZ(32,"div",15)(33,"div",16),t._UZ(34,"i",17),t.TgZ(35,"span",18),t._UZ(36,"p",19),t.TgZ(37,"span"),t._uU(38,"+"),t.qZA()(),t.TgZ(39,"p",20),t._uU(40,"Loads Booked"),t.qZA()(),t.TgZ(41,"div",16),t._UZ(42,"i",21),t.TgZ(43,"span",18)(44,"span"),t._uU(45,"$"),t.qZA(),t._UZ(46,"p",19),t.TgZ(47,"span"),t._uU(48,"+"),t.qZA()(),t.TgZ(49,"p",20),t._uU(50,"Average Gross Revenue"),t.qZA()(),t.TgZ(51,"div",16),t._UZ(52,"i",22)(53,"p",19),t.TgZ(54,"p",20),t._uU(55,"Mln Lbs Dispatched"),t.qZA()()()(),t.TgZ(56,"section",23)(57,"span",8)(58,"h2",9),t._uU(59," How to Get Started"),t.qZA(),t.TgZ(60,"a",10),t._uU(61,"Read more \xa0\xa0+"),t.qZA()(),t.TgZ(62,"div",1)(63,"div",24)(64,"p"),t._uU(65,"Hawkeye Dispatch's job is to provide the best loads in the market for every driver. Our expert team ensures that drivers from any region and state get high-quality and best-paying loads."),t.qZA(),t._UZ(66,"hr"),t.TgZ(67,"ul",25)(68,"li",26)(69,"span"),t._uU(70,"01- Fill out the form or call us: (406)-4058608"),t.qZA(),t.TgZ(71,"span"),t._uU(72,">"),t.qZA()(),t.TgZ(73,"li",27)(74,"span"),t._uU(75,"02- Upload your MC Authority, W9 Form, and Certificate of Insurance"),t.qZA(),t.TgZ(76,"span"),t._uU(77,">"),t.qZA()(),t.TgZ(78,"li",27)(79,"span"),t._uU(80,"03- Sign the Dispatch Agreement completed by our team"),t.qZA(),t.TgZ(81,"span"),t._uU(82,">"),t.qZA()(),t.TgZ(83,"li",27)(84,"span"),t._uU(85,"04- We are all set. Let\u2019s get to work"),t.qZA(),t.TgZ(86,"span"),t._uU(87,">"),t.qZA()()()(),t.TgZ(88,"div",28),t._UZ(89,"app-form",29),t.qZA()()(),t.TgZ(90,"section",30)(91,"span",14)(92,"h2",9),t._uU(93," Who can "),t._UZ(94,"br"),t._uU(95," work with us"),t.qZA()(),t.TgZ(96,"div",31),t.YNc(97,Y,7,4,"div",32),t.qZA()(),t.TgZ(98,"section",33)(99,"span",8)(100,"h2",9),t._uU(101,"Testimonials"),t.qZA(),t.TgZ(102,"a",34),t._uU(103,"Testimonials \xa0\xa0+"),t.qZA()(),t.TgZ(104,"owl-carousel-o",35),t.YNc(105,N,1,0,null,36),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("autoplay",!0)("loop",!0)("muted",!0)("preload",!0),t.xp6(23),t.Q6J("ngForOf",s.services),t.xp6(11),t.Q6J("countUp",s.count1)("duration",s.duration),t.xp6(10),t.Q6J("countUp",s.count2)("duration",s.duration2),t.xp6(7),t.Q6J("countUp",s.count3)("duration",s.duration),t.xp6(44),t.Q6J("ngForOf",s.workWithUs),t.xp6(7),t.Q6J("options",s.customOptions),t.xp6(1),t.Q6J("ngForOf",s.testimonials))},dependencies:[f.sg,P.U,C.rH,d.Fy,d.Mp,I],styles:["*[_ngcontent-%COMP%]{--bs-gutter-x: 0 !important}.hero[_ngcontent-%COMP%]{min-height:100vh;position:relative}.hero[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100vh!important;object-fit:cover}@media screen and (max-width: 426px){.hero[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{height:102vh!important}}.hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;position:absolute;top:15vh}@media screen and (max-width: 769px){.hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{top:70px}}.hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:5rem;font-weight:700;color:#fff}@media screen and (max-width: 769px){.hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2.5rem}}@media screen and (max-width: 426px){.hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2rem}}.hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{background-color:red;display:inline-block;color:#fff;font-size:1.5rem;font-weight:700}@media screen and (max-width: 426px){.hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{margin-bottom:10px}}.services[_ngcontent-%COMP%]{position:relative}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-top:3rem;padding-left:5rem;padding-right:5rem}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]{margin-bottom:20px;background-color:#000;width:97%;display:flex;min-height:200px;justify-content:space-between;color:#fff;padding:25px;position:relative;cursor:pointer}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transition:opacity 1s ease;opacity:1;z-index:1;transition:1s}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover   .plus[_ngcontent-%COMP%]{display:none}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover   .plus1[_ngcontent-%COMP%]{background-color:red;color:#fff;height:100%;width:100px;right:0;display:flex;justify-content:center;align-items:center;font-size:18px;font-family:100}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:relative;z-index:2}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .service-count[_ngcontent-%COMP%]{font-weight:800;font-size:3rem}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .plus1[_ngcontent-%COMP%]{display:none}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .plus1[_ngcontent-%COMP%]{font-size:3rem;color:red;font-weight:900;position:absolute;z-index:2;top:50%;right:20px;transform:translateY(-50%)}.services[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.count-section[_ngcontent-%COMP%]{background-image:url(/assets/count_bg.webp);background-repeat:no-repeat;background-position:center;margin-bottom:3rem;position:relative}.count-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}.count-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{padding:0 4rem}@media screen and (max-width: 769px){.count-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{padding:0 2rem}}@media screen and (max-width: 426px){.count-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{padding:1rem 2rem}}.count-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:green;font-size:4rem;margin-bottom:1rem;display:flex;justify-content:center}.count-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .count-num[_ngcontent-%COMP%]{font-size:3rem;font-weight:600;margin:0}.count-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:600}.count-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .count-text[_ngcontent-%COMP%]{font-size:1.5rem}.getStart-section[_ngcontent-%COMP%]{margin-bottom:3rem;position:relative}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding-right:2rem}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:15px;font-family:Logity,sans-serif}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:5rem 0 3rem}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px;display:flex;justify-content:space-between;position:relative;line-height:2}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1){background-color:#fff!important}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2){background-color:red;color:#fff}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){width:100%;padding:12px 0 0 12px}.getStart-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){color:red;height:100%;width:50px;font-size:2rem;padding-left:12px}.work-with-us[_ngcontent-%COMP%]{width:100%;background:#000;position:relative}.work-with-us[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;color:#fff}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin-top:80px;width:100%;display:flex;flex-wrap:wrap;gap:30px}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:31%;height:230px;background:#fff;position:relative;cursor:pointer}@media screen and (max-width: 768px){.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:30%}}@media screen and (max-width: 425px){.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:100%}}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:0}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background:red;color:#fff}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:1}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(0deg,rgba(0,0,0,.4),rgba(0,0,0,.4));transition:opacity .3s}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;bottom:15px;left:-13px;padding:7px 50px 7px 40px;color:#fff;font-size:2rem;font-weight:700;z-index:4;background:transparent;display:flex;transition:ease-in .3s}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer}.work-with-us[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:0;font-size:2rem;font-weight:700;margin-left:1.5rem}.testimonials[_ngcontent-%COMP%]{width:100%;position:relative}.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;background-color:#000}.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:40%;min-height:100%}@media screen and (max-width: 769px){.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:35%}}@media screen and (max-width: 426px){.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:100%}}.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{padding:30px 50px;background:#000;width:60%;min-height:350px}@media screen and (max-width: 769px){.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width: 426px){.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{width:100%}}.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.6rem;color:#fff;margin-bottom:1.5rem}.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;color:#94a9cb;font-weight:500;margin-bottom:3rem}.testimonials[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#fff}  .owl-theme .owl-dots{display:flex;justify-content:flex-end;transform:translateY(-70px)}  .owl-theme .owl-dots .owl-dot span{width:150px;height:5px}  .owl-theme .owl-dots .owl-dot.active span{background-color:red}  .owl-theme .owl-nav{margin-top:70px;display:flex;justify-content:flex-end}  .owl-theme .owl-nav [class*=owl-]{font-size:26px;height:40px;padding:5px;display:flex;align-items:center;font-family:monospace;justify-content:center;border-radius:100px;filter:grayscale(1);opacity:.3;background:transparent}  .owl-theme .owl-nav [class*=owl-]:hover{filter:grayscale(0);opacity:1;background:transparent;bottom:-50px}"]})}return o})();var G=r(2841);const X=[{path:"",component:E}];let V=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[f.ez,G.m,C.Bz.forChild(X),d.bB]})}return o})()}}]);