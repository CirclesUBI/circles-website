_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"+QRC":function(e,t,a){"use strict";var n=a("E9nw"),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,o,l,i,s,c,u=!1;t||(t={}),a=t.debug||!1;try{if(l=n(),i=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[t.format]||r.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){a&&console.error("unable to copy using execCommand: ",d),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(i):s.removeAllRanges()),c&&document.body.removeChild(c),l()}return u}},"0OBr":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Qetd"),l=a.n(o),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.a=function(e){for(var t=e.url,a=e.allowFullScreen,n=e.position,o=e.display,s=e.height,c=e.width,u=e.overflow,d=e.styles,p=e.onLoad,f=e.onMouseOver,m=e.onMouseOut,g=e.scrolling,y=e.id,b=e.frameBorder,h=e.ariaHidden,w=e.sandbox,v=e.allow,C=e.className,D=e.title,E=e.ariaLabel,O=e.ariaLabelledby,x=e.name,S=e.target,R=e.loading,k=e.importance,P=e.referrerpolicy,A=e.allowpaymentrequest,N=e.src,j=l()({src:N||t,target:S||null,style:{position:n||null,display:o||"block",overflow:u||null},scrolling:g||null,allowpaymentrequest:A||null,importance:k||null,sandbox:w||null,loading:R||null,styles:d||null,name:x||null,className:C||null,referrerpolicy:P||null,title:D||null,allow:v||null,id:y||null,"aria-labelledby":O||null,"aria-hidden":h||null,"aria-label":E||null,width:c||null,height:s||null,onLoad:p||null,onMouseOver:f||null,onMouseOut:m||null}),T=Object.create(null),_=0,I=Object.keys(j);_<I.length;_++){var z=I[_];null!=j[z]&&(T[z]=j[z])}for(var B=0,U=Object.keys(T.style);B<U.length;B++){var q=U[B];null==T.style[q]&&delete T.style[q]}if(a)if("allow"in T){var G=T.allow.replace("fullscreen","");T.allow=("fullscreen "+G.trim()).trim()}else T.allow="fullscreen";return b>=0&&(T.style.hasOwnProperty("border")||(T.style.border=b)),r.a.createElement("iframe",i({},T))}},"6JoE":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a("q1tI"),r=a.n(n),o=a("g4pe"),l=a.n(o),i=a("otPn"),s=a("ACV0"),c=a("t7s+"),u=a("XDYV"),d=a("463D"),p=a("T1Te"),f=a("+QRC"),m=a.n(f),g=(a("0OBr"),a("5Yp1")),y=a("wJ4g"),b=r.a.createElement,h=y.a.ETHADDRESS,w=y.a.BTCADDRESS,v=y.a.EuroADDRESS;function C(){var e=Object(n.useState)(!1),t=e[0],a=e[1],r=Object(n.useState)(!1),o=r[0],p=r[1],f=Object(n.useState)(!1),y=f[0],C=f[1];return b("div",{className:"page"},b(l.a,null,b("title",null,"CirclesUBI | Donate to Our Cause"),b("script",{src:"https://donorbox.org/widget.js",paypalexpress:"false"})),b(g.a,null,(function(e){return b(i.a,{pad:{vertical:"medium",horizontal:e?"150px":"large"},width:"large",alignSelf:"center",className:"page-wrapper",elevation:"medium"},b(i.a,{margin:{bottom:"small"}},b(s.a,{level:1},"Donate to Circles"),b(c.a,null,"Our legal entity is a cooperative: The Circles Coop eG (in Gr\xfcndung). It is founded by the team who have been most busy during the last years working on implementing varying features that compose Circles ecosystem."," "),b(c.a,null,"We are dedicated to continue improving Circles; with motivations to provide access to a community based basic income for many, around the entire globe."),b(c.a,null,"Therefore this huge and long work needs your support too."),b(c.a,null,"We will make our business plan and our budget transparently published here to show you how we are using your donation.")),b(i.a,{background:"light-1",pad:"medium",margin:{vertical:"medium"}},b(O,{title:"EURO",subtitle:"Circles Coop eG. at GLS BANK",address:v,action:function(){return a(!1),p(!1),m()(v),void C(!0)},copied:y}),b(O,{title:"ETHEREUM",address:h,action:function(){return p(!1),C(!1),m()(h),void a(!0)},copied:t}),b(O,{title:"BITCOIN",address:w,action:function(){return a(!1),C(!1),m()(w),void p(!0)},copied:o})),b(i.a,{margin:{vertical:"medium"}},b(u.a,null,"We also have non-profit status via"," ",b(d.a,{href:"https://opencollective.com/circles",target:"_blank"},"Open Collective"))),b(i.a,{margin:{vertical:"medium"}},b(u.a,null,"And you can support our work on"," ",b(d.a,{href:"https://gitcoin.co/grants/331/circles-ubi",target:"_blank"},"GitCoin"))))})))}var D={borderRadius:8,borderColor:"#D12D5F",borderWidth:1},E={fontFamily:"monospace",background:"#eee",padding:4,borderRadius:4,wordBreak:"break-all"};function O(e){var t=e.title,a=e.subtitle,n=e.address,r=e.action,o=e.copied;return b(i.a,{margin:{vertical:"medium"},gap:"xsmall"},b(s.a,{level:3,margin:"none"},t),a&&b(u.a,{size:"small"},"Circles Coop eG. at GLS BANK"),b(i.a,{direction:"row",gap:"small",margin:{bottom:"medium"},align:"center"},b(u.a,{size:"small",weight:"bold",style:E},n),b(p.a,{plain:!1,size:"small",style:D,onClick:r,label:o?"COPIED!":"COPY"})))}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},NVRb:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donate",function(){return a("6JoE")}])},"t7s+":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),r=a.n(n),o=a("vOnD"),l=a("cVt8"),i=a("/Rk8"),s=a("+Wdg"),c=Object(o.css)(["color:",";"],(function(e){return Object(l.c)(e.colorProp,e.theme)})),u=Object(o.css)(["font-family:",";"],(function(e){return e.theme.paragraph.font.family})),d=o.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," "," ",""],i.f,(function(e){return function(e){var t=e.size||"medium",a=e.theme.paragraph[t];return Object(o.css)(["font-size:",";line-height:",";max-width:",";"],a.size,a.height,e.fillProp?"none":a.maxWidth)}(e)}),(function(e){return e.textAlign&&i.m}),(function(e){return e.colorProp&&c}),(function(e){return e.theme.paragraph.font&&e.theme.paragraph.font.family&&u}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}d.defaultProps={},Object.setPrototypeOf(d.defaultProps,s.a);var f=Object(n.forwardRef)((function(e,t){var a=e.color,n=e.fill,o=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["color","fill"]);return r.a.createElement(d,p({ref:t,colorProp:a,fillProp:n},o))}));f.displayName="Paragraph";var m=f},wJ4g:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={ETHADDRESS:"0x7415EfD9D908281ea0279c49A6c23011D9d9A0a4",BTCADDRESS:"1P8oaMk65aE5PqJfsfzAzgRwqdPSHoXhw1",EuroADDRESS:"DE68430609671107235000"}}},[["NVRb",1,2,0,3,4]]]);