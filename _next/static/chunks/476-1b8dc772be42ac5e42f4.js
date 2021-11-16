"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{11476:function(e,r,i){i.d(r,{Z:function(){return K}});var n=i(4942),l=i(9008),t=i(67294),a=i(44763),s=i(24616),o=i(32553),c=i(47747),x=i(65502),h=(0,c.deepFreeze)((0,c.deepMerge)(x.u,{global:{breakpoints:{small:{size:{none:"0",hair:"1px",xxsmall:"2px",xsmall:"2px",small:"4px",medium:"8px",large:"16px",xlarge:"32px"}}},colors:{background:"hsla(88, 62%, 90%, 0.1)",brand:"#CC1E66",brand2:"#D12D5F",brand3:"#E36567",brand4:"#7E133F",brand5:"#44c1c9",gradient:"linear-gradient(135deg, rgba(102,15,51,1) 0%, rgba(204,30,102,1) 100%)",active:{light:"#57b457",dark:"#52b7f9"},control:{dark:"#52b7f9",light:"#4a984a"},focus:"none","accent-1":"#367bd5","accent-2":"#5ec660","accent-3":"#d4293d","accent-4":"#9C27B0","neutral-1":"#795548","neutral-2":"#CDDC39","neutral-3":"#607D8B","neutral-4":"#9cb6d7","neutral-5":"#FF9800"},font:{family:"'NotoSans-Regular', sans-serif;",size:"16px"},edgeSize:{none:"0",hair:"1px",xxsmall:"2px",xsmall:"4px",small:"8px",medium:"16px",large:"32px",xlarge:"64px"},hover:{background:{light:"#c8c8c8",dark:"#333333"},color:{light:"#333333",dark:"#f8f8f8"}},selected:{background:"#635d60",color:"#f8f8f8"}},icon:{focus:"none",size:{xsmall:"14px"}},text:{xsmall:{size:"10px",height:1.5},small:{size:"14px",height:1.43},medium:{size:"18px",height:1.375},large:{size:"24px",height:1.167},xlarge:{size:"28px",height:1.1875},xxlarge:{size:"32x",height:1.125}},heading:{weight:800,font:{family:"'OstrichSansHeavy', sans"},level:{1:{small:{size:"42px",height:"40px",maxWidth:"816px"},medium:{size:"60px",height:"56px",maxWidth:"1200px"},large:{size:"82px",height:"88px",maxWidth:"1968px"},xlarge:{size:"114px",height:"120px",maxWidth:"2736px"}}},extend:{maxWidth:1280,marginTop:"2em"}},button:{border:{radius:"8px",width:0,color:{dark:"#fbf9ff",light:"#28599e"}},primary:{color:{dark:"#0093ff",light:"#316cbe"}}},anchor:{textDecoration:"none",fontWeight:600,color:{dark:"#f7efff",light:"#275596"}},checkBox:{color:"white",border:{width:"2px",color:"light-2"},check:{radius:"4px",thickness:"4px"}},rangeInput:{track:{color:{dark:"#3a82b1",light:"#52b7f9"}}},paragraph:{small:{size:"14px",height:"18px"},medium:{size:"18px",height:"26px"},extend:{marginTop:8,marginBottom:8,maxWidth:480}}})),d=i(12625),g=i(99365),p=i(44925),u=i(11163),m=i(66763),f=i(95019),b=i(41999),j=i(23758),v=i(5709),k=i(74851),w=i(66261),y=i(85893),z=["mobileMenu","fixed"],O=["t","large","fixed"];function E(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function C(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?E(Object(i),!0).forEach((function(r){(0,n.Z)(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}var L=[{label:"About",value:"about",isExternal:!1,isRoute:!1},{label:"How It Works",value:"how-it-works",isExternal:!1,isRoute:!1},{label:"Community",value:"community",isExternal:!1,isRoute:!1},{label:"Team",value:"team",isExternal:!1,isRoute:!1}],S=[{label:"Home",value:"/",isExternal:!1,isRoute:!0},{label:"Wallet",value:"wallet",isExternal:!0,isRoute:!1,href:"https://circles.garden"},{label:"FAQ",value:"/faq",isExternal:!1,isRoute:!0},{label:"News",value:"news",isExternal:!0,isRoute:!1,href:"https://medium.com/circles-ubi"},{label:"Businesses",value:"/businesses",isExternal:!1,isRoute:!0}],P=[{icon:"/images/ig.svg",iconp:"/images/ig-p.svg",link:"https://www.instagram.com/circles_ubi_official/"},{icon:"/images/tg.svg",iconp:"/images/tg-p.svg",link:"https://t.me/CirclesUBI"},{icon:"/images/tw.svg",iconp:"/images/tw-p.svg",link:"https://twitter.com/CirclesUBI"},{icon:"/images/fb.svg",iconp:"/images/fb-p.svg",link:"https://facebook.com/CirclesUBI"},{icon:"/images/em.svg",iconp:"/images/em-p.svg",link:"/contact"}],I=function(e){var r=e.t,i=e.large;return(0,y.jsx)(s.x,{pad:{left:"22px",top:"small",bottom:"small",right:"small"},children:L.map((function(e){return(0,y.jsx)(w.rU,{to:e.value,spy:!0,hashSpy:!0,smooth:!0,duration:500,offset:-50,style:{marginTop:6,marginBottom:6},children:(0,y.jsx)(m.e,{as:"span",label:r(e.label),color:i?"brand":"brand3",margin:{horizontal:"small"}})},e.value)}))})},R=function(e){var r=e.item,i=e.t,n=e.large,l=e.isCurrentPage,a=(0,t.useRef)(),o=(0,t.useState)(!1),c=o[0],x=o[1];return(0,y.jsxs)(s.x,{onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},onFocus:function(){return x(!0)},onBlur:function(){return x(!1)},children:[(0,y.jsx)(s.x,{ref:a,children:(0,y.jsx)(d.Link,{href:r.value,children:(0,y.jsx)(m.e,{as:"span",label:i(r.label),color:n?"white":"brand4",margin:{horizontal:"28px",vertical:l||n?"none":"small"},style:{fontSize:16},className:l?"current-page":""})},r.value)}),n?l&&c&&a.current&&(0,y.jsx)(f.U,{align:{top:"bottom",left:"left"},target:a.current,elevation:"xsmall",background:"white",style:{zIndex:120},children:(0,y.jsx)(I,{t:i,large:n})}):l&&(0,y.jsx)(s.x,{pad:{left:"medium"},children:(0,y.jsx)(I,{t:i,large:n})})]})},D=(0,d.withTranslation)("header")((function(e){var r=e.t,i=e.large,n=(0,u.useRouter)().pathname,l="/"===n;return(0,y.jsxs)(s.x,{direction:i?"row":"column",justify:"center",pad:"small",align:i?"center":"start",children:[S.map((function(e,t){return"/"===e.value?(0,y.jsx)(R,{item:e,t:r,large:i,isCurrentPage:l},e.value):e.isExternal?(0,y.jsx)(m.e,{label:r(e.label),href:e.href,rel:"noreferrer",target:"_blank",color:i?"white":"brand4",margin:{horizontal:"28px",vertical:i?"none":"small"}},e.value):e.isRoute?(0,y.jsx)(d.Link,{href:e.value,children:(0,y.jsx)(m.e,{as:"span",label:r(e.label),color:i?"white":"brand4",className:n===e.value?"current-page":"",margin:{horizontal:"28px",vertical:i?"none":"small"}})},e.value):(0,y.jsx)(w.rU,{to:e.value,spy:!0,hashSpy:!0,smooth:!0,duration:500,offset:-50,style:i?null:{marginTop:16,marginBottom:16},children:(0,y.jsx)(m.e,{as:"span",label:r(e.label),color:i?"white":"brand4",margin:{horizontal:"28px"}})},e.value)})),(0,y.jsx)(d.Link,{href:"/donate",children:(0,y.jsx)(b.z,{primary:!0,as:"span",alignSelf:"center",label:(0,y.jsx)("span",{style:{color:"#fff",fontSize:16},children:(0,y.jsx)("b",{children:"Donate"})}),margin:{horizontal:"28px",vertical:i?"none":"small"},color:"brand5"})})]})})),W=function(e){var r=e.mobileMenu,i=e.fixed,n=(0,p.Z)(e,z),l={width:"auto"};return r||i||(l.background="rgba(255, 255, 255, .3)",l.padding=8),(0,y.jsx)(s.x,C(C({direction:"row",justify:"end"},n),{},{children:(0,y.jsx)(s.x,{pad:"10px",gap:"14px",direction:"row",justify:"end",flex:{grow:0},basis:"auto",style:l,children:P.map((function(e){return(0,y.jsx)(d.Link,{href:e.link,children:(0,y.jsx)(m.e,{as:"span",style:{height:24},children:(0,y.jsx)(g.E,{width:"28px",src:r?e.iconp:e.icon})},e.link)},e.icon)}))})}))},B=function(e){var r=e.t,i=e.large,n=e.fixed,l=(0,p.Z)(e,O),a=(0,t.useState)(!1),o=a[0],c=a[1];if(w.zW.scrollEvent.register("begin",(function(e,r){c(!1)})),i)return(0,y.jsx)("nav",{children:(0,y.jsx)(D,{large:!0})});var x=function(){return c(!1)};return(0,y.jsx)("nav",{children:(0,y.jsxs)(s.x,C(C({width:"100%",align:"center"},l),{},{children:[o&&(0,y.jsx)(j.m,{position:"right",full:"vertical",onClickOutside:x,onEsc:x,responsive:!1,children:(0,y.jsxs)(s.x,{pad:"small",justify:"around",height:"100vh",children:[n?(0,y.jsx)("div",{}):(0,y.jsx)(b.z,{alignSelf:"end",onClick:x,icon:(0,y.jsx)(v.x,{color:"brand4"})}),(0,y.jsx)(s.x,{pad:{top:"medium"},children:(0,y.jsx)(D,{t:r,large:!1})}),(0,y.jsx)(s.x,{children:(0,y.jsx)(s.x,{justify:"center",direction:"row",children:(0,y.jsx)(W,{fixed:n,mobileMenu:!i,margin:{top:"medium"}})})})]})}),(0,y.jsx)(b.z,{alignSelf:"end",onClick:o?x:function(){return c(!0)},icon:o?(0,y.jsx)(v.x,{color:"white"}):(0,y.jsx)(k.v,{color:"white"}),margin:{right:"medium"}})]}))})},_=i(75273),T=i(7),U=["en","de","es"],F=function(){return d.i18n&&d.i18n.language?(0,y.jsx)(s.x,{alignSelf:"end",pad:"small",children:(0,y.jsx)(_.v,{label:d.i18n.language.toUpperCase(),items:U.map((function(e){return{label:e.toUpperCase(),onClick:function(){return d.i18n.changeLanguage(e)}}})),size:"small",color:"white",icon:(0,y.jsx)(T.I,{color:"white",size:"small"}),dropProps:{style:{zIndex:99}}})}):null},M=function(e){var r=e.large,i=e.fixed,n=void 0!==i&&i;return(0,y.jsxs)(o.X2,{style:{alignItems:"center"},children:[(0,y.jsx)(o.JX,{xs:r?3:5,md:2,children:(0,y.jsxs)(s.x,{pad:{left:"large"},direction:"row",align:"center",children:[(0,y.jsx)(d.Link,{href:"/",children:(0,y.jsx)(g.E,{style:r&&!n?{width:60,height:60,cursor:"pointer"}:{width:30,height:30,cursor:"pointer"},src:"/images/logo.svg"})}),(0,y.jsx)(s.x,{children:(0,y.jsx)(F,{})})]})}),(0,y.jsx)(o.JX,{xs:r?6:4,md:8,children:r&&(0,y.jsx)(B,{large:!0})}),(0,y.jsx)(o.JX,{xs:3,md:2,children:r?(0,y.jsx)(W,{fixed:n}):(0,y.jsx)(B,{fixed:n,large:!1})})]})},X=i(35151),J=i(57138),N=i(13806),Z=i(72720),q=[{label:"Instagram",value:"https://www.instagram.com/circles_ubi_official",imageLink:"/images/ig.svg",blank:!0},{label:"Telegram",value:"https://t.me/CirclesUBI",imageLink:"/images/tg.svg",blank:!0},{label:"Twitter",value:"https://twitter.com/CirclesUBI",imageLink:"/images/tw.svg",blank:!0},{label:"Facebook",value:"https://www.facebook.com/CirclesUBI",imageLink:"/images/fb.svg",blank:!0},{label:"Email",value:"/contact",imageLink:"/images/em.svg",blank:!1}],H={global:{colors:{border:"light-3"},focus:{border:{color:"#fff"}}},textInput:{extend:{fontStyle:"italic",fontWeight:300}}},A=(0,d.withTranslation)("footer")((function(e){var r=e.t;return(0,y.jsxs)(o.X2,{style:(0,n.Z)({background:"rgb(102,15,51)"},"background","linear-gradient(135deg, rgba(102,15,51,1) 0%, rgba(204,30,102,1) 100%)"),children:[(0,y.jsx)(o.JX,{lg:3,children:(0,y.jsxs)(s.x,{pad:"xlarge",gap:"medium",children:[(0,y.jsx)(X.x,{color:"light-1",size:"large",margin:{bottom:"small"},children:r("follow-us")}),q.map((function(e){return(0,y.jsx)(d.Link,{href:e.value,children:(0,y.jsxs)(m.e,{as:"span",target:e.blank?"_blank":"_self",color:"light-1",style:{display:"flex",alignItems:"center"},children:[(0,y.jsx)(g.E,{width:"24px",src:e.imageLink,margin:{right:"small"}}),(0,y.jsx)(X.x,{size:"small",children:e.label})]},e.value)},e.label)}))]})}),(0,y.jsx)(o.JX,{lg:6,children:(0,y.jsxs)(s.x,{pad:"xlarge",gap:"medium",children:[(0,y.jsx)(X.x,{color:"light-1",size:"large",margin:{bottom:"small"},children:r("newsletter-title")}),(0,y.jsxs)(X.x,{color:"light-1",children:["\u200d",r("newsletter-text")]}),(0,y.jsxs)("form",{action:"https://joincircles.us10.list-manage.com/subscribe/post",children:[(0,y.jsx)("input",{type:"hidden",name:"u",value:"ce7ac2789abf7ce01f739a2b6"}),(0,y.jsx)("input",{type:"hidden",name:"id",value:"35899a122a"}),(0,y.jsx)(a.p,{theme:H,children:(0,y.jsx)(J.W,{color:"light-1",name:"email",children:(0,y.jsx)(N.o,{id:"MERGE0",name:"MERGE0",placeholder:r("newsletter-input-placeholder"),style:{color:"#fff"}})})}),(0,y.jsx)(s.x,{margin:{bottom:"medium"},children:(0,y.jsx)(Z.J,{id:"gdpr_45553",name:"gdpr[45553]",value:"Y",label:(0,y.jsx)(X.x,{color:"white",size:"small",children:r("newsletter-gdpr-check")})})}),(0,y.jsx)(b.z,{primary:!0,color:"light-1",type:"submit",label:r("newsletter-signup-button-label"),style:{borderRadius:8,marginTop:12}})]})]})}),(0,y.jsx)(o.JX,{lg:3,children:(0,y.jsxs)(s.x,{pad:"xlarge",gap:"medium",children:[(0,y.jsx)(X.x,{color:"light-1",size:"large",margin:{bottom:"small"},children:r("links-title")}),(0,y.jsx)(m.e,{href:"https://circles.garden",color:"light-1",children:r("links-wallet")}),(0,y.jsx)(m.e,{href:"https://handbook.joincircles.net/docs/developers/whitepaper",color:"light-1",children:r("links-whitepaper")}),(0,y.jsx)(d.Link,{href:"/contact",children:(0,y.jsx)(m.e,{as:"span",color:"light-1",children:r("links-contact")})}),(0,y.jsx)(d.Link,{href:"/donate",children:(0,y.jsx)(m.e,{as:"span",color:"light-1",children:r("links-donate")})}),(0,y.jsx)(d.Link,{href:"/faq",children:(0,y.jsx)(m.e,{as:"span",color:"light-1",children:r("links-faq")})}),(0,y.jsx)(d.Link,{href:"/privacy-policy",children:(0,y.jsx)(m.e,{as:"span",color:"light-1",children:r("links-privacy-policy")})}),(0,y.jsx)(d.Link,{href:"/terms",children:(0,y.jsx)(m.e,{as:"span",color:"light-1",children:r("links-terms")})})]})})]})}));function G(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function Y(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?G(Object(i),!0).forEach((function(r){(0,n.Z)(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}(0,o.Dg)({gutterWidth:0});var Q={position:"fixed",top:0,width:"100%",zIndex:99,paddingRight:0};var K=function(e){var r=(0,t.useState)(0),i=r[0],n=r[1],c=function(e){n(window.pageYOffset)};(0,t.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}));var x=(0,o.pS)(),d=["xl","xxl"].includes(x);return(0,y.jsxs)(a.p,Y(Y({theme:h},e),{},{children:[(0,y.jsxs)(l.default,{children:[(0,y.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,y.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,y.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,y.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,y.jsx)("meta",{name:"theme-color",content:"#660F33"})]}),(0,y.jsxs)(o.W2,{style:{maxWidth:"none"},children:[(0,y.jsx)(s.x,{style:{paddingTop:12},children:(0,y.jsx)(M,{large:d})}),i>400&&(0,y.jsx)(s.x,{children:(0,y.jsx)(s.x,{style:Q,animation:"fadeIn",pad:"small",background:"brand3",elevation:"small",children:(0,y.jsx)(M,{large:d,fixed:!0})})}),(0,y.jsx)(s.x,{as:"main",margin:{top:"-36px"},children:e.children(d,x)}),(0,y.jsx)(A,{})]}),(0,y.jsx)("script",{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "e7e584e1f91f431da5a98e7e138fc758"}'})]}))}}}]);