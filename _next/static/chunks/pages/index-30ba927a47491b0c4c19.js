(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{23438:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var i=n(67294),r=n(29163),l=n(89207),a=n(46808),o=n(80363),c=n(51755),s=(0,r.css)(["color:",";"],(function(e){return(0,a.ut)(e.colorProp||e.theme.heading.color,e.theme)})),m=r.default.h1.withConfig({displayName:"StyledHeading",componentId:"sc-1rdh4aw-0"})([""," "," "," "," "," "," ",""],o.$G,(function(e){return function(e){var t=(e.theme.heading.level[e.level]||{}).font;return t&&t.family?(0,r.css)(["font-family:",";"],t.family):e.theme.heading.font?(0,r.css)(["font-family:",";"],e.theme.heading.font.family):""}(e)}),(function(e){return function(e){var t=e.size||"medium",n=e.theme.heading,i=n.level[e.level];if(i){var a=i[t],o=[(0,r.css)(["font-size:",";line-height:",";max-width:",";font-weight:",";"],a?a.size:t,a?a.height:"normal",(e.fillProp?"none":a&&a.maxWidth)||i.medium.maxWidth,i.font.weight||n.weight)];if(e.responsive&&n.responsiveBreakpoint){var c=e.theme.global.breakpoints[n.responsiveBreakpoint];if(c){var s=n.level[e.level+1]?n.level[e.level+1][t]:n.level[e.level][t];s&&o.push((0,l.bk)(c,"\n            font-size: "+s.size+";\n            line-height: "+s.height+";\n            max-width: "+(e.fillProp?"none":s.maxWidth)+";\n          "))}}return o}return console.warn("Heading level "+e.level+" is not defined in your theme."),""}(e)}),(function(e){return e.textAlign&&o.jt}),(function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(e){return(e.colorProp||e.theme.heading.color)&&s}),(function(e){return e.theme.heading&&e.theme.heading.extend}));m.defaultProps={},Object.setPrototypeOf(m.defaultProps,c.l);n(45697);var d={},g=["color","fill","level"];function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var u=(0,i.forwardRef)((function(e,t){var n=e.color,r=e.fill,l=e.level,a=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,g);return i.createElement(m,h({as:"h"+l,colorProp:n,fillProp:r,level:+l},a,{ref:t}))}));u.displayName="Heading",u.defaultProps={level:1,responsive:!0},u.propTypes=d},48069:function(e,t,n){"use strict";var i=n(85893),r=n(24616),l=n(23438),a=n(35151),o=n(99365),c=n(32553),s=n(3149),m=[{name:"Sarah Friend",image:"images/team/sarahf.png"},{name:"Blanka Vay",image:"images/team/blankav.png"},{name:"Julio Linares",image:"images/team/juliol.png"},{name:"@adz",image:"images/team/adz.png"},{name:"Martin K\xf6ppelmann",image:"images/team/martink.png"},{name:"Saraswathi Subbaraman",image:"images/team/swathi.png"}],d=["Andy Milenius","Anne Walther","Ashoka Finley","David Terry","Ed Murphy","Emin Durak","Franziska B\xf6rner-Zobel","Harriet von Froreich","Jacob H\xfchn","Javier Alaves","Justyna Trivedi","Karenina Schr\xf6der","Malthus John","Martin Lundfall","Ronit Kory","Wouter Kampmann"];t.Z=(0,s.withTranslation)("team")((function(e){var t=e.t;return(0,i.jsxs)(r.x,{id:"team",margin:{top:"large"},style:{background:"linear-gradient(180deg, #fff 0%, rgb(243, 208, 223) 20%, #fff 40%, #fff 50%, rgb(243, 208, 223)) 100%",position:"relative"},children:[(0,i.jsx)(l.X,{alignSelf:"center",color:"dark-1",margin:{top:"large",bottom:"small"},level:1,textAlign:"center",children:t("team-title")}),(0,i.jsx)(a.x,{textAlign:"center",margin:{bottom:"medium"},children:(0,i.jsx)("em",{children:t("team-subtitle")})}),(0,i.jsx)(r.x,{margin:{left:"large",right:"large",bottom:"large"},children:(0,i.jsx)(c.X2,{children:m.map((function(e){return(0,i.jsx)(c.JX,{md:4,children:(0,i.jsxs)(r.x,{pad:"medium",gap:"small",align:"center",alignSelf:"center",children:[(0,i.jsx)(r.x,{children:(0,i.jsx)(o.E,{width:"220px",src:e.image,alt:e.name})}),(0,i.jsxs)(r.x,{alignSelf:"center",children:[(0,i.jsx)(a.x,{textAlign:"center",children:e.name}),(0,i.jsx)(a.x,{textAlign:"center",children:(0,i.jsx)("em",{children:t("".concat(e.name," title"))})})]})]})},e.name)}))})}),(0,i.jsxs)(r.x,{pad:"medium",width:"100%",style:{backgroundImage:"url('/images/team-back-left.svg'), url('/images/team-back-right.svg')",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"bottom left, bottom right",backgroundSize:"50% 50%"},children:[(0,i.jsx)(a.x,{textAlign:"center",margin:{top:"xlarge",bottom:"large"},children:(0,i.jsx)("em",{children:t("team-extra-subtitle")})}),(0,i.jsxs)(r.x,{size:"large",alignSelf:"center",direction:"row",margin:{bottom:"large"},children:[(0,i.jsx)(r.x,{pad:{horizontal:"large"},gap:"small",children:d.filter((function(e,t){return t<d.length/2})).map((function(e){return(0,i.jsx)(a.x,{children:e},e)}))}),(0,i.jsx)(r.x,{pad:{horizontal:"large"},gap:"small",children:d.filter((function(e,t){return t>=d.length/2})).map((function(e){return(0,i.jsx)(a.x,{children:e},e)}))})]})]})]})}))},67313:function(e,t,n){"use strict";var i=n(85893),r=(n(67294),n(24616)),l=n(99365),a=n(35151);t.Z=function(e){var t=e.imageLink,n=e.title,o=e.content,c=e.imageWidth,s=void 0===c?"small":c,m=e.imageHeight,d=void 0===m?"100px":m,g=e.onClick,h=void 0===g?null:g;return(0,i.jsxs)(r.x,{pad:"large",elevation:"small",align:"center",margin:"large",style:{borderRadius:8,maxWidth:"360px"},alignSelf:"center",background:"white",hoverIndicator:"light-1",onClick:h,children:[t&&(0,i.jsx)(r.x,{margin:{bottom:"large"},children:(0,i.jsx)(l.E,{src:t,width:s,height:d,alignSelf:"center"})}),(0,i.jsx)(a.x,{weight:"bold",margin:{bottom:"medium"},children:n}),(0,i.jsx)(a.x,{size:"small",children:o})]})}},41225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i=n(87757),r=n.n(i),l=n(92137),a=n(96156),o=n(85893),c=n(9008),s=n(24616),m=n(99365),d=n(35151),g=n(41999),h=n(66763),u=n(23438),x=n(32553),p=n(66261),f=n(75323),j=n.n(f),b=n(49986),w=n(67313),v=n(46066);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.imageLink,n=e.count,i=e.caption;return(0,o.jsxs)(s.x,{align:"center",pad:"medium",children:[(0,o.jsx)(s.x,{background:"dark-1",style:{borderRadius:"50%"},pad:"14px",width:"72px",height:"72px",margin:{bottom:"small"},children:(0,o.jsx)(u.X,{textAlign:"center",style:{marginTop:0},children:n})}),(0,o.jsx)(s.x,{style:{maxWidth:240},pad:{horizontal:"medium",bottom:"small"},children:(0,o.jsx)(d.x,{weight:"bold",size:"small",textAlign:"center",children:i})}),(0,o.jsx)(s.x,{pad:{horizontal:"large"},margin:{bottom:"medium"},height:"medium",children:(0,o.jsx)(m.E,{src:t,alt:i,height:"100%",fit:"contain"})})]})},S={dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1,lazyLoad:!1},O=function(e){var t=e.sliderContent;return e.large?(0,o.jsx)(s.x,{direction:"row",align:"start",justify:"center",gap:"medium",children:t.map((function(e){return(0,o.jsx)(_,{count:e.count,caption:e.caption,imageLink:e.imageLink},e.caption)}))}):(0,o.jsx)(s.x,{width:"medium",alignSelf:"center",children:(0,o.jsx)(v.Z,y(y({},S),{},{children:t.map((function(e){return(0,o.jsx)(_,{count:e.count,caption:e.caption,imageLink:e.imageLink},e.caption)}))}))})},z=n(48069),P=n(3149),A=function(e){return["xs","sm"].includes(e)?"980px":(["md","lg","xl"].includes(e),"320px")};function H(e){var t=e.t,n=[{count:"1",caption:t("hiw-slide-1"),imageLink:"/images/slider-1.webp"},{count:"2",caption:t("hiw-slide-2"),imageLink:"/images/slider-2.webp"},{count:"3",caption:t("hiw-slide-3"),imageLink:"/images/slider-3.webp"},{count:"4",caption:t("hiw-slide-4"),imageLink:"/images/slider-4.webp"}],i=function(e,t){e.preventDefault(),window.location.href=t};return(0,o.jsxs)("div",{className:j().home,children:[(0,o.jsxs)(c.default,{children:[(0,o.jsx)("title",{children:t("meta")}),(0,o.jsx)("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),(0,o.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),(0,o.jsx)("meta",{name:"description",content:"Circles | A Basic Income in the Blockchain"}),(0,o.jsx)("meta",{name:"keywords",content:"circles, circle, gift economy, cryptocurrency, universal basic income, blockchain, ubi, money, berlin, andrew yang, bernie sanders, doughnut economics, degrowth, local community currency, p2p, commons, democratic money, faircoin, trustlines, gnosis"})]}),(0,o.jsx)(b.Z,{children:function(e,r){return(0,o.jsxs)(s.x,{children:[(0,o.jsx)(x.X2,{children:(0,o.jsx)(s.x,{width:"100%",pad:"large",children:(0,o.jsx)(s.x,{pad:{top:"large"},width:"large",alignSelf:"center",children:(0,o.jsx)(m.E,{src:"/images/circlestitle-big.svg",width:"100%"})})})}),(0,o.jsxs)(s.x,{width:"100%",pad:"large",children:[(0,o.jsx)(d.x,{size:"large",color:"light-1",margin:{bottom:"medium"},textAlign:"center",children:(0,o.jsx)("b",{children:(0,o.jsx)("em",{children:t("slogan")})})}),(0,o.jsxs)(s.x,{width:"medium",margin:{top:"medium"},alignSelf:"center",pad:"medium",children:[(0,o.jsx)(d.x,{margin:{bottom:"medium"},color:"white",children:t("main-paragraph-1")}),(0,o.jsx)(d.x,{weight:"bold",margin:{bottom:"medium"},color:"white",children:t("main-paragraph-2")})]}),(0,o.jsx)(s.x,{alignSelf:"center",children:(0,o.jsx)(g.z,{color:"dark-2",plain:!0,size:"large",fill:!1,label:t("get-circles-button-label"),href:"https://circles.garden",target:"_blank",rel:"noreferrer",style:(0,a.Z)({padding:"14px 52px",borderRadius:8,color:"#fff",fontSize:"24px",background:"rgb(102,15,51)"},"background","linear-gradient(135deg,  rgba(204,30,102,1) 0%, rgba(102,15,51,1) 100%)")})}),(0,o.jsxs)(s.x,{pad:{vertical:"large"},align:"center",children:[(0,o.jsx)(p.rU,{to:"about",smooth:!0,duration:500,style:{marginBottom:20},offset:-50,children:(0,o.jsx)(h.e,{as:"span",color:"dark-1",children:t("more-info")})}),(0,o.jsx)(m.E,{src:"/images/arrows-down-dark.svg"})]}),(0,o.jsx)(s.x,{width:"medium",alignSelf:"center",pad:"medium",id:"about",margin:{top:A(r)},children:(0,o.jsx)(m.E,{src:"images/people.svg"})}),(0,o.jsx)(u.X,{alignSelf:"center",color:"dark-1",level:1,margin:{top:"large",bottom:"small"},textAlign:"center",children:t("about-title")}),(0,o.jsx)(d.x,{textAlign:"center",margin:{bottom:"medium"},children:(0,o.jsx)("em",{children:t("about-subtitle")})})]}),(0,o.jsx)(s.x,{margin:{left:"large",right:"large"},children:(0,o.jsxs)(x.X2,{children:[(0,o.jsx)(x.JX,{lg:4,children:(0,o.jsx)(s.x,{children:(0,o.jsx)(w.Z,{title:t("about-widget-1-title"),content:t("about-widget-1-content"),imageLink:"/images/unconditional.svg"})})}),(0,o.jsx)(x.JX,{lg:4,children:(0,o.jsx)(s.x,{children:(0,o.jsx)(w.Z,{title:t("about-widget-2-title"),content:t("about-widget-2-content"),imageLink:"/images/people-powered.svg"})})}),(0,o.jsx)(x.JX,{lg:4,children:(0,o.jsx)(s.x,{children:(0,o.jsx)(w.Z,{title:t("about-widget-3-title"),content:t("about-widget-3-content"),imageLink:"/images/decentralized.svg"})})})]})}),(0,o.jsxs)(s.x,{margin:{top:"large",bottom:"large"},style:{background:"linear-gradient(180deg, #fff, rgb(120,230,200), #fff"},id:"how-it-works",children:[(0,o.jsx)(u.X,{alignSelf:"center",color:"dark-1",level:1,margin:{top:"large",bottom:"small"},textAlign:"center",children:t("hiw-title")}),(0,o.jsx)(d.x,{textAlign:"center",margin:{bottom:"medium"},children:(0,o.jsx)("em",{children:t("hiw-subtitle")})}),(0,o.jsx)(O,{sliderContent:n,large:e})]}),(0,o.jsxs)(s.x,{id:"community",margin:{top:"large",bottom:"large"},children:[(0,o.jsx)(u.X,{alignSelf:"center",color:"dark-1",level:1,margin:{top:"large",bottom:"small"},textAlign:"center",children:t("community-title")}),(0,o.jsx)(d.x,{textAlign:"center",margin:{bottom:"medium"},children:(0,o.jsx)("em",{children:t("community-subtitle")})}),(0,o.jsx)(s.x,{margin:{left:"large",right:"large"},children:(0,o.jsxs)(x.X2,{children:[(0,o.jsx)(x.JX,{lg:4,children:(0,o.jsx)(s.x,{children:(0,o.jsx)(w.Z,{title:t("community-widget-2-title"),content:t("community-widget-2-content"),imageLink:"/images/learn.svg",imageHeight:"180px",onClick:function(e){return i(e,"https://handbook.joincircles.net")}})})}),(0,o.jsx)(x.JX,{lg:4,children:(0,o.jsx)(s.x,{children:(0,o.jsx)(w.Z,{title:t("community-widget-1-title"),content:t("community-widget-1-content"),imageLink:"/images/chat.svg",imageHeight:"180px",onClick:function(e){return i(e,"https://t.me/CirclesUBI")}})})}),(0,o.jsx)(x.JX,{lg:4,children:(0,o.jsx)(s.x,{children:(0,o.jsx)(w.Z,{title:t("community-widget-3-title"),content:t("community-widget-3-content"),imageLink:"/images/build.svg",imageHeight:"180px",onClick:function(e){return i(e,"https://github.com/CirclesUBI/")}})})})]})})]}),(0,o.jsx)(s.x,{margin:"large",children:(0,o.jsxs)(s.x,{children:[(0,o.jsx)(d.x,{color:"brand",size:"large",weight:"bold",textAlign:"center",style:{background:"-webkit-linear-gradient(180deg, rgba(102,15,51,1), rgba(204,30,102,1))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},margin:{bottom:"medium"},children:t("marketplace-button-label")}),(0,o.jsx)(d.x,{textAlign:"center",margin:{bottom:"medium"},children:t("marketplace-content")}),(0,o.jsx)(s.x,{alignSelf:"center",children:(0,o.jsx)(g.z,{href:"https://t.me/CirclesUBI",target:"_blank",label:(0,o.jsx)(m.E,{src:"/images/telegram-nice.svg"}),plain:!0})})]})}),(0,o.jsx)(z.Z,{})]})}})]})}H.getInitialProps=(0,l.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["home"]});case 1:case"end":return e.stop()}}),e)})));var E=(0,P.withTranslation)("home")(H)},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(41225)}])},75323:function(e){e.exports={container:"Home_container__1EcsU",home:"Home_home__17yb6",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},function(e){e.O(0,[831,33,66,986,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);