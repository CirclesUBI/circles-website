(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{49986:function(e,i,r){"use strict";r.d(i,{Z:function(){return Y}});var n=r(96156),t=r(85893),l=r(9008),a=r(67294),s=r(44763),o=r(24616),c=r(32553),x=r(47747),h=r(65502),d=(0,x.deepFreeze)((0,x.deepMerge)(h.u,{global:{breakpoints:{small:{size:{none:"0",hair:"1px",xxsmall:"2px",xsmall:"2px",small:"4px",medium:"8px",large:"16px",xlarge:"32px"}}},colors:{background:"hsla(88, 62%, 90%, 0.1)",brand:"#CC1E66",brand2:"#D12D5F",brand3:"#E36567",brand4:"#7E133F",brand5:"#44c1c9",gradient:"linear-gradient(135deg, rgba(102,15,51,1) 0%, rgba(204,30,102,1) 100%)",active:{light:"#57b457",dark:"#52b7f9"},control:{dark:"#52b7f9",light:"#4a984a"},focus:"none","accent-1":"#367bd5","accent-2":"#5ec660","accent-3":"#d4293d","accent-4":"#9C27B0","neutral-1":"#795548","neutral-2":"#CDDC39","neutral-3":"#607D8B","neutral-4":"#9cb6d7","neutral-5":"#FF9800"},font:{family:"'NotoSans-Regular', sans-serif;",size:"16px"},edgeSize:{none:"0",hair:"1px",xxsmall:"2px",xsmall:"4px",small:"8px",medium:"16px",large:"32px",xlarge:"64px"},hover:{background:{light:"#c8c8c8",dark:"#333333"},color:{light:"#333333",dark:"#f8f8f8"}},selected:{background:"#635d60",color:"#f8f8f8"}},icon:{focus:"none",size:{xsmall:"14px"}},text:{xsmall:{size:"10px",height:1.5},small:{size:"14px",height:1.43},medium:{size:"18px",height:1.375},large:{size:"24px",height:1.167},xlarge:{size:"28px",height:1.1875},xxlarge:{size:"32x",height:1.125}},heading:{weight:800,font:{family:"'OstrichSansHeavy', sans"},level:{1:{small:{size:"42px",height:"40px",maxWidth:"816px"},medium:{size:"60px",height:"56px",maxWidth:"1200px"},large:{size:"82px",height:"88px",maxWidth:"1968px"},xlarge:{size:"114px",height:"120px",maxWidth:"2736px"}}},extend:{maxWidth:1280,marginTop:"2em"}},button:{border:{radius:"8px",width:0,color:{dark:"#fbf9ff",light:"#28599e"}},primary:{color:{dark:"#0093ff",light:"#316cbe"}}},anchor:{textDecoration:"none",fontWeight:600,color:{dark:"#f7efff",light:"#275596"}},checkBox:{color:"white",border:{width:"2px",color:"light-2"},check:{radius:"4px",thickness:"4px"}},rangeInput:{track:{color:{dark:"#3a82b1",light:"#52b7f9"}}},paragraph:{small:{size:"14px",height:"18px"},medium:{size:"18px",height:"26px"},extend:{marginTop:8,marginBottom:8,maxWidth:480}}})),g=r(3149),u=r(99365),p=r(17375),m=r(11163),f=r(66763),b=r(95019),j=r(23758),v=r(41999),k=r(5709),w=r(74851),y=r(66261);function z(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?z(Object(r),!0).forEach((function(i){(0,n.Z)(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}var E=[{label:"About",value:"about",isExternal:!1,isRoute:!1},{label:"How It Works",value:"how-it-works",isExternal:!1,isRoute:!1},{label:"Community",value:"community",isExternal:!1,isRoute:!1},{label:"Team",value:"team",isExternal:!1,isRoute:!1}],C=[{label:"Home",value:"/",isExternal:!1,isRoute:!0},{label:"Wallet",value:"wallet",isExternal:!0,isRoute:!1,href:"https://circles.garden"},{label:"FAQ",value:"/faq",isExternal:!1,isRoute:!0},{label:"News",value:"news",isExternal:!0,isRoute:!1,href:"https://medium.com/circles-ubi"},{label:"Businesses",value:"/businesses",isExternal:!1,isRoute:!0},{label:"Donate",value:"/donate",isExternal:!1,isRoute:!0}],L=[{icon:"/images/ig.svg",iconp:"/images/ig-p.svg",link:"https://www.instagram.com/circles_ubi_official/"},{icon:"/images/tg.svg",iconp:"/images/tg-p.svg",link:"https://t.me/CirclesUBI"},{icon:"/images/tw.svg",iconp:"/images/tw-p.svg",link:"https://twitter.com/CirclesUBI"},{icon:"/images/fb.svg",iconp:"/images/fb-p.svg",link:"https://facebook.com/CirclesUBI"},{icon:"/images/em.svg",iconp:"/images/em-p.svg",link:"/contact"}],P=function(e){var i=e.t,r=e.large;return(0,t.jsx)(o.x,{pad:{left:"22px",top:"small",bottom:"small",right:"small"},children:E.map((function(e){return(0,t.jsx)(y.rU,{to:e.value,spy:!0,hashSpy:!0,smooth:!0,duration:500,offset:-50,style:{marginTop:6,marginBottom:6},children:(0,t.jsx)(f.e,{as:"span",label:i(e.label),color:r?"brand":"brand3",margin:{horizontal:"small"}})},e.value)}))})},R=function(e){var i=e.item,r=e.t,n=e.large,l=e.isCurrentPage,s=(0,a.useRef)(),c=(0,a.useState)(!1),x=c[0],h=c[1];return(0,t.jsxs)(o.x,{onMouseOver:function(){return h(!0)},onMouseLeave:function(){return h(!1)},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},children:[(0,t.jsx)(o.x,{ref:s,children:(0,t.jsx)(g.Link,{href:i.value,children:(0,t.jsx)(f.e,{as:"span",label:r(i.label),color:n?"white":"brand4",margin:{horizontal:"28px",vertical:l||n?"none":"small"},style:{fontSize:16},className:l?"current-page":""})},i.value)}),n?l&&x&&s.current&&(0,t.jsx)(b.U,{align:{top:"bottom",left:"left"},target:s.current,elevation:"xsmall",background:"white",style:{zIndex:120},children:(0,t.jsx)(P,{t:r,large:n})}):l&&(0,t.jsx)(o.x,{pad:{left:"medium"},children:(0,t.jsx)(P,{t:r,large:n})})]})},S=(0,g.withTranslation)("header")((function(e){var i=e.t,r=e.large,n=(0,m.useRouter)().pathname,l="/"===n;return(0,t.jsx)(o.x,{direction:r?"row":"column",justify:"center",pad:"small",align:r?"center":"start",children:C.map((function(e,a){return"/"===e.value?(0,t.jsx)(R,{item:e,t:i,large:r,isCurrentPage:l},e.value):e.isExternal?(0,t.jsx)(f.e,{label:i(e.label),href:e.href,rel:"noreferrer",target:"_blank",color:r?"white":"brand4",margin:{horizontal:"28px",vertical:r?"none":"small"}},e.value):e.isRoute?(0,t.jsx)(g.Link,{href:e.value,children:(0,t.jsx)(f.e,{as:"span",label:i(e.label),color:r?"white":"brand4",className:n===e.value?"current-page":"",margin:{horizontal:"28px",vertical:r?"none":"small"}})},e.value):(0,t.jsx)(y.rU,{to:e.value,spy:!0,hashSpy:!0,smooth:!0,duration:500,offset:-50,style:r?null:{marginTop:16,marginBottom:16},children:(0,t.jsx)(f.e,{as:"span",label:i(e.label),color:r?"white":"brand4",margin:{horizontal:"28px"}})},e.value)}))})})),I=function(e){var i=e.mobileMenu,r=e.fixed,n=(0,p.Z)(e,["mobileMenu","fixed"]),l={width:"auto"};return i||r||(l.background="rgba(255, 255, 255, .3)",l.padding=8),(0,t.jsx)(o.x,O(O({direction:"row",justify:"end"},n),{},{children:(0,t.jsx)(o.x,{pad:"10px",gap:"14px",direction:"row",justify:"end",flex:{grow:0},basis:"auto",style:l,children:L.map((function(e){return(0,t.jsx)(g.Link,{href:e.link,children:(0,t.jsx)(f.e,{as:"span",style:{height:24},children:(0,t.jsx)(u.E,{width:"28px",src:i?e.iconp:e.icon})},e.link)},e.icon)}))})}))},D=function(e){var i=e.t,r=e.large,n=e.fixed,l=(0,p.Z)(e,["t","large","fixed"]),s=(0,a.useState)(!1),c=s[0],x=s[1];if(y.zW.scrollEvent.register("begin",(function(e,i){x(!1)})),r)return(0,t.jsx)("nav",{children:(0,t.jsx)(S,{large:!0})});var h=function(){return x(!1)};return(0,t.jsx)("nav",{children:(0,t.jsxs)(o.x,O(O({width:"100%",align:"center"},l),{},{children:[c&&(0,t.jsx)(j.m,{position:"right",full:"vertical",onClickOutside:h,onEsc:h,responsive:!1,children:(0,t.jsxs)(o.x,{pad:"small",justify:"around",height:"100vh",children:[n?(0,t.jsx)("div",{}):(0,t.jsx)(v.z,{alignSelf:"end",onClick:h,icon:(0,t.jsx)(k.x,{color:"brand4"})}),(0,t.jsx)(o.x,{pad:{top:"medium"},children:(0,t.jsx)(S,{t:i,large:!1})}),(0,t.jsx)(o.x,{children:(0,t.jsx)(o.x,{justify:"center",direction:"row",children:(0,t.jsx)(I,{fixed:n,mobileMenu:!r,margin:{top:"medium"}})})})]})}),(0,t.jsx)(v.z,{alignSelf:"end",onClick:c?h:function(){return x(!0)},icon:c?(0,t.jsx)(k.x,{color:"white"}):(0,t.jsx)(w.v,{color:"white"}),margin:{right:"medium"}})]}))})},W=r(75273),B=r(7),_=["en","de","es"],T=function(){return g.i18n&&g.i18n.language?(0,t.jsx)(o.x,{alignSelf:"end",pad:"small",children:(0,t.jsx)(W.v,{label:g.i18n.language.toUpperCase(),items:_.map((function(e){return{label:e.toUpperCase(),onClick:function(){return g.i18n.changeLanguage(e)}}})),size:"small",color:"white",icon:(0,t.jsx)(B.I,{color:"white",size:"small"}),dropProps:{style:{zIndex:99}}})}):null},U=function(e){var i=e.large,r=e.fixed,n=void 0!==r&&r;return(0,t.jsxs)(c.X2,{style:{alignItems:"center"},children:[(0,t.jsx)(c.JX,{xs:i?3:5,md:2,children:(0,t.jsxs)(o.x,{pad:{left:"large"},direction:"row",align:"center",children:[(0,t.jsx)(g.Link,{href:"/",children:(0,t.jsx)(u.E,{style:i&&!n?{width:60,height:60,cursor:"pointer"}:{width:30,height:30,cursor:"pointer"},src:"/images/logo.svg"})}),(0,t.jsx)(o.x,{children:(0,t.jsx)(T,{})})]})}),(0,t.jsx)(c.JX,{xs:i?6:4,md:8,children:i&&(0,t.jsx)(D,{large:!0})}),(0,t.jsx)(c.JX,{xs:3,md:2,children:i?(0,t.jsx)(I,{fixed:n}):(0,t.jsx)(D,{fixed:n,large:!1})})]})},F=r(35151),M=r(57138),X=r(13806),J=r(72720),N=[{label:"Instagram",value:"https://www.instagram.com/circles_ubi_official",imageLink:"/images/ig.svg",blank:!0},{label:"Telegram",value:"https://t.me/CirclesUBI",imageLink:"/images/tg.svg",blank:!0},{label:"Twitter",value:"https://twitter.com/CirclesUBI",imageLink:"/images/tw.svg",blank:!0},{label:"Facebook",value:"https://www.facebook.com/CirclesUBI",imageLink:"/images/fb.svg",blank:!0},{label:"Email",value:"/contact",imageLink:"/images/em.svg",blank:!1}],Z={global:{colors:{border:"light-3"},focus:{border:{color:"#fff"}}},textInput:{extend:{fontStyle:"italic",fontWeight:300}}},q=(0,g.withTranslation)("footer")((function(e){var i=e.t;return(0,t.jsxs)(c.X2,{style:(0,n.Z)({background:"rgb(102,15,51)"},"background","linear-gradient(135deg, rgba(102,15,51,1) 0%, rgba(204,30,102,1) 100%)"),children:[(0,t.jsx)(c.JX,{lg:3,children:(0,t.jsxs)(o.x,{pad:"xlarge",gap:"medium",children:[(0,t.jsx)(F.x,{color:"light-1",size:"large",margin:{bottom:"small"},children:i("follow-us")}),N.map((function(e){return(0,t.jsx)(g.Link,{href:e.value,children:(0,t.jsxs)(f.e,{as:"span",target:e.blank?"_blank":"_self",color:"light-1",style:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(u.E,{width:"24px",src:e.imageLink,margin:{right:"small"}}),(0,t.jsx)(F.x,{size:"small",children:e.label})]},e.value)},e.label)}))]})}),(0,t.jsx)(c.JX,{lg:6,children:(0,t.jsxs)(o.x,{pad:"xlarge",gap:"medium",children:[(0,t.jsx)(F.x,{color:"light-1",size:"large",margin:{bottom:"small"},children:i("newsletter-title")}),(0,t.jsxs)(F.x,{color:"light-1",children:["\u200d",i("newsletter-text")]}),(0,t.jsxs)("form",{action:"https://joincircles.us10.list-manage.com/subscribe/post",children:[(0,t.jsx)("input",{type:"hidden",name:"u",value:"ce7ac2789abf7ce01f739a2b6"}),(0,t.jsx)("input",{type:"hidden",name:"id",value:"35899a122a"}),(0,t.jsx)(s.p,{theme:Z,children:(0,t.jsx)(M.W,{color:"light-1",name:"email",children:(0,t.jsx)(X.o,{id:"MERGE0",name:"MERGE0",placeholder:i("newsletter-input-placeholder"),style:{color:"#fff"}})})}),(0,t.jsx)(o.x,{margin:{bottom:"medium"},children:(0,t.jsx)(J.J,{id:"gdpr_45553",name:"gdpr[45553]",value:"Y",label:(0,t.jsx)(F.x,{color:"white",size:"small",children:i("newsletter-gdpr-check")})})}),(0,t.jsx)(v.z,{primary:!0,color:"light-1",type:"submit",label:i("newsletter-signup-button-label"),style:{borderRadius:8,marginTop:12}})]})]})}),(0,t.jsx)(c.JX,{lg:3,children:(0,t.jsxs)(o.x,{pad:"xlarge",gap:"medium",children:[(0,t.jsx)(F.x,{color:"light-1",size:"large",margin:{bottom:"small"},children:i("links-title")}),(0,t.jsx)(f.e,{href:"https://circles.garden",color:"light-1",children:i("links-wallet")}),(0,t.jsx)(f.e,{href:"https://handbook.joincircles.net/docs/developers/whitepaper",color:"light-1",children:i("links-whitepaper")}),(0,t.jsx)(g.Link,{href:"/contact",children:(0,t.jsx)(f.e,{as:"span",color:"light-1",children:i("links-contact")})}),(0,t.jsx)(g.Link,{href:"/donate",children:(0,t.jsx)(f.e,{as:"span",color:"light-1",children:i("links-donate")})}),(0,t.jsx)(g.Link,{href:"/faq",children:(0,t.jsx)(f.e,{as:"span",color:"light-1",children:i("links-faq")})}),(0,t.jsx)(g.Link,{href:"/privacy-policy",children:(0,t.jsx)(f.e,{as:"span",color:"light-1",children:i("links-privacy-policy")})}),(0,t.jsx)(g.Link,{href:"/terms",children:(0,t.jsx)(f.e,{as:"span",color:"light-1",children:i("links-terms")})})]})})]})}));function H(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?H(Object(r),!0).forEach((function(i){(0,n.Z)(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}(0,c.Dg)({gutterWidth:0});var G={position:"fixed",top:0,width:"100%",zIndex:99,paddingRight:0};var Y=function(e){var i=(0,a.useState)(0),r=i[0],n=i[1],x=function(e){n(window.pageYOffset)};(0,a.useEffect)((function(){return window.addEventListener("scroll",x),function(){return window.removeEventListener("scroll",x)}}));var h=(0,c.pS)(),g=["xl","xxl"].includes(h);return(0,t.jsxs)(s.p,A(A({theme:d},e),{},{children:[(0,t.jsxs)(l.default,{children:[(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,t.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,t.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,t.jsx)("meta",{name:"theme-color",content:"#660F33"})]}),(0,t.jsxs)(c.W2,{style:{maxWidth:"none"},children:[(0,t.jsx)(o.x,{style:{paddingTop:12},children:(0,t.jsx)(U,{large:g})}),r>400&&(0,t.jsx)(o.x,{children:(0,t.jsx)(o.x,{style:G,animation:"fadeIn",pad:"small",background:"brand3",elevation:"small",children:(0,t.jsx)(U,{large:g,fixed:!0})})}),(0,t.jsx)(o.x,{as:"main",margin:{top:"-36px"},children:e.children(g,h)}),(0,t.jsx)(q,{})]}),(0,t.jsx)("script",{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "e7e584e1f91f431da5a98e7e138fc758"}'})]}))}}}]);