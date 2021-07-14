(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{38245:function(e,n,t){"use strict";t.r(n);var i=t(87757),o=t.n(i),r=t(92137),a=t(67294),l=t(9008),c=t(11163),s=t(66261),u=t(68341),m=t.n(u),d=t(46066),p=t(40712),h=t.n(p),g=t(48585),f=t(69406),x=t(93522),b=t(54281),v=t(62296),y=t(47588),w=t(70587),k=t(67625),C=t(60018),S=t(2398),q=t(65276),z=t(47996),E=t(43463),_=t(5709),j=t(32553),I=t(16042),N=t(3149),O=a.createElement,T={global:{focus:{border:{color:"#CC1E66"}}}};function B(e){var n=e.t,t=(0,a.useState)(""),i=t[0],o=t[1],r=(0,c.useRouter)(),u=r.pathname,d=r.query,p=r.push,h=(0,a.useRef)(),S=d.open&&Number(d.open),q=n("items",{returnObjects:!0}),_=function(e){p({pathname:u,query:{open:e}},void 0,{shallow:!0,scroll:!1})};(0,a.useEffect)((function(){if(S){var e=q&&q[S];s.OK.scrollTo(e.question,{duration:300,smooth:!0,offset:-90})}else s.OK.scrollTo("page-wrapper",{duration:200,smooth:!0}),h.current.focus()}),[S,q]);var N=[];i.length>3&&q.forEach((function(e,n){e.question.toLowerCase().includes(i.toLowerCase())&&N.push({label:O(s.rU,{onClick:function(){return _(n)},to:e.question,smooth:!0,duration:300,offset:-80},O(g.x,{pad:"small"},e.question)),value:e.question,topic:e.topic,index:n})}));var B=function(e){var n=e.suggestion;_(n.index),o(""),s.OK.scrollTo(n.question,{duration:300,offset:-80,smooth:!0})};return O("div",{className:"page"},O(l.default,null,O("title",null,"Circles UBI | Frequently Asked Questions"),O("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),O("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),O("meta",{name:"description",content:"Circles | A Basic Income in the Blockchain"}),O("meta",{name:"keywords",content:"circles, circle, gift economy, cryptocurrency, universal basic income, blockchain, ubi, money, berlin, andrew yang, bernie sanders, doughnut economics, degrowth, local community currency, p2p, commons, democratic money, faircoin, trustlines, gnosis"})),O(I.Z,null,(function(e){return O(g.x,{width:"large",alignSelf:"center",className:"page-wrapper",elevation:"medium"},O(s.W_,{name:"page-wrapper"},O(g.x,{width:"100%",pad:{top:"large"}},O(g.x,{alignSelf:"center"},O(f.E,{src:"/images/logo.svg",margin:{bottom:"large"},style:{width:90,height:90}})),O(g.x,{margin:{left:"medium",right:"medium"},width:"medium",alignSelf:"center"},O(x.x,{weight:"bold",size:"large",textAlign:"center",margin:{bottom:"medium"}},n("title")),O(g.x,{pad:{horizontal:"medium"}},O(b.p,{theme:T},O(v.W,null,O(y.o,{ref:h,value:i,onChange:function(e){p({query:{}}),o(e.target.value)},onSelect:B,suggestions:N,placeholder:n("placeholder"),type:"search",dropProps:{pad:{horizontal:"medium"}}}))))))),O(j.X2,null,O(g.x,{width:"100%"},O(g.x,{pad:{top:"large",horizontal:"large"}},O(x.x,{margin:{top:"medium",bottom:"medium"},size:"large"},"Video Library"),O(R,{large:e})),O(g.x,{margin:{left:"medium",right:"medium"},width:"large",pad:{horizontal:"large",bottom:"large"},alignSelf:"center"},O(w.U,{activeIndex:S,animate:!1},q.map((function(e,n){return O(g.x,{key:e.question},(0===n||e.topic!==q[n-1].topic)&&O(x.x,{margin:{top:"xlarge",bottom:"medium"},size:"large"},e.topic),O(k.H,{id:e.question,header:O(g.x,{direction:"row",pad:"medium",onClick:function(){return function(e){_(e!==S?e:null)}(n)}},O(s.W_,{name:e.question,style:{flexBasis:"100%",flexGrow:3}},O(x.x,{weight:"bold"},e.question)),O(n===S?z.Up:E.R,null))},O(g.x,{pad:{horizontal:"medium",bottom:"medium"},animation:"fadeIn"},e.answer.map((function(e){return O(C.n,{key:e&&e.substring(0,20),className:"faq-answer-anchor",size:"small"},m()(e))})))))})))))))})))}var U={dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1,lazyLoad:!1},L=[{caption:"Circles Philosophy",videoSrc:"https://player.vimeo.com/video/469757163",imageSrc:"/images/videothumbs/circles-team-philosophy.jpg"},{caption:"Basic Income March",videoSrc:"https://player.vimeo.com/video/469872391",imageSrc:"/images/videothumbs/basic-income-march-berlin.jpg"},{caption:"About Basic Income",videoSrc:"https://player.vimeo.com/video/469693447",imageSrc:"/images/videothumbs/circles-team-basic-income.jpg"},{caption:"Users Explain Circles",videoSrc:"https://player.vimeo.com/video/475014191",imageSrc:"/images/videothumbs/users-explain-circles.jpg"}];function P(e){var n=e.thumb,t=e.large;return O(g.x,{alignSelf:"center",width:t?"small":"medium",height:t?"xsmall":"small",style:{margin:"0 auto",position:"relative"}},O(f.E,{fit:"cover",src:n.imageSrc,caption:n.caption}),O(g.x,{pad:"xsmall",background:"rgba(255, 255, 255, .8)",style:{position:"absolute",bottom:6}},O(x.x,{size:"small",color:"dark-1"},n.caption)))}function A(e){var n=e.thumb,t=e.onClose;return n?O(S.m,{animation:"fadeIn",onEsc:t,onClickOutside:t},O(g.x,{width:"large",height:"medium"},O(h(),{width:"100%",height:"100%",url:n.videoSrc,controls:!0,playing:!0,playerOptions:{fullscreen:!1}}))):null}function R(e){var n=e.large,t=(0,a.useState)(null),i=t[0],o=t[1];return n?O(g.x,null,O(g.x,{direction:"row",align:"start",justify:"center",gap:"medium"},L.map((function(e){return O(g.x,{key:e.caption,onClick:function(){return o(e)}},O(P,{large:n,thumb:e}))}))),i&&O(S.m,{position:"top-right",modal:!1,plain:!0},O(q.z,{icon:O(_.x,{color:"white"}),onClick:function(){return o(null)},style:{zIndex:999}})),O(A,{onClose:function(){return o(null)},thumb:i})):O(g.x,null,O(d.Z,U,L.map((function(e){return O(g.x,{key:e.caption,onClick:function(){return o(e)}},O(P,{onClick:function(){return o(e)},large:n,thumb:e}))}))),O(A,{onClose:function(){return o(null)},thumb:i}),i&&O("div",{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:100}},O(g.x,{background:"dark-1",pad:"medium"},O(q.z,{icon:O(_.x,null),label:"CLOSE",onClick:function(){return o(null)}}))))}B.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["faq"]});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,N.withTranslation)("faq")(B)},56564:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t(38245)}])},52361:function(){},94616:function(){}},function(e){e.O(0,[554,33,707,948,42,774,888,179],(function(){return n=56564,e(e.s=n);var n}));var n=e.O();_N_E=n}]);