(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{97324:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return u}});var n=i(85893),o=i(6610),a=i(5991),r=i(65255),l=i(46070),s=i(77608);function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=(0,s.Z)(t);if(e){var o=(0,s.Z)(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return(0,l.Z)(this,i)}}var u=function(t){(0,r.Z)(i,t);var e=c(i);function i(){return(0,o.Z)(this,i),e.apply(this,arguments)}return(0,a.Z)(i,[{key:"render",value:function(){var t=this.props.info,e="".concat(t.city,", ").concat(t.state);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[e," |"," ",(0,n.jsx)("a",{target:"_new",href:"http://en.wikipedia.org/w/index.php?title=Special:Search&search=".concat(e),children:"Wikipedia"})]}),(0,n.jsx)("img",{width:240,src:t.image})]})}}]),i}(i(67294).PureComponent)},59927:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return u}});var n=i(85893),o=i(6610),a=i(5991),r=i(65255),l=i(46070),s=i(77608);function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=(0,s.Z)(t);if(e){var o=(0,s.Z)(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return(0,l.Z)(this,i)}}var u=function(t){(0,r.Z)(i,t);var e=c(i);function i(){return(0,o.Z)(this,i),e.apply(this,arguments)}return(0,a.Z)(i,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"control-panel",children:[(0,n.jsx)("h3",{children:"Marker, Popup, NavigationControl and FullscreenControl "}),(0,n.jsx)("p",{children:"Map showing top 20 most populated cities of the United States. Click on a marker to learn more."}),(0,n.jsxs)("p",{children:["Data source:"," ",(0,n.jsx)("a",{href:"https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population",children:"Wikipedia"})]}),(0,n.jsx)("div",{className:"source-link",children:(0,n.jsx)("a",{href:"https://github.com/visgl/react-map-gl/tree/6.0-release/examples/controls",target:"_new",children:"View Code \u2197"})})]})}}]),i}(i(67294).PureComponent)},16554:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return v}});var n=i(85893),o=i(6610),a=i(5991),r=i(63349),l=i(65255),s=i(46070),c=i(77608),u=i(96156),p=i(67294),d=i(93187),m=(i(59927),i(98827)),h=i(97324),g=i(61699);function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){(0,u.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=(0,c.Z)(t);if(e){var o=(0,c.Z)(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return(0,s.Z)(this,i)}}var x={position:"absolute",top:0,left:0,padding:"10px"},k={position:"absolute",top:36,left:0,padding:"10px"},w={position:"absolute",top:72,left:0,padding:"10px"},j={position:"absolute",bottom:36,left:0,padding:"10px"},v=function(t){(0,l.Z)(i,t);var e=y(i);function i(t){var n;return(0,o.Z)(this,i),n=e.call(this,t),(0,u.Z)((0,r.Z)(n),"_updateViewport",(function(t){n.setState({viewport:t})})),(0,u.Z)((0,r.Z)(n),"_onClickMarker",(function(t){n.setState({popupInfo:t})})),n.state={viewport:{latitude:37.785164,longitude:-100,zoom:3.5,bearing:0,pitch:0},popupInfo:null},n}return(0,a.Z)(i,[{key:"_renderPopup",value:function(){var t=this,e=this.state.popupInfo;return e&&(0,n.jsx)(d.GI,{tipSize:5,anchor:"top",longitude:e.longitude,latitude:e.latitude,closeOnClick:!1,onClose:function(){return t.setState({popupInfo:null})},children:(0,n.jsx)(h.default,{info:e})})}},{key:"render",value:function(){var t=this.state.viewport;return(0,n.jsx)("div",{style:{height:600},children:(0,n.jsxs)(d.ZP,_(_({},t),{},{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/dark-v9",onViewportChange:this._updateViewport,mapboxApiAccessToken:"pk.eyJ1IjoiZW1pbngiLCJhIjoiY2tsYzU5YXZ6MDkyNDJ5bWcxZDZmZXFjMyJ9.w6xYaaz5NOslpqcFHsNGsQ",children:[(0,n.jsx)(m.default,{data:g,onClick:this._onClickMarker}),this._renderPopup(),(0,n.jsx)("div",{style:x,children:(0,n.jsx)(d.$j,{})}),(0,n.jsx)("div",{style:k,children:(0,n.jsx)(d.ot,{})}),(0,n.jsx)("div",{style:w,children:(0,n.jsx)(d.Pv,{})}),(0,n.jsx)("div",{style:j,children:(0,n.jsx)(d.jf,{})})]}))})}}]),i}(p.Component)},98827:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return d}});var n=i(85893),o=i(6610),a=i(5991),r=i(65255),l=i(46070),s=i(77608),c=i(67294),u=i(93187);function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=(0,s.Z)(t);if(e){var o=(0,s.Z)(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return(0,l.Z)(this,i)}}var d=function(t){(0,r.Z)(i,t);var e=p(i);function i(){return(0,o.Z)(this,i),e.apply(this,arguments)}return(0,a.Z)(i,[{key:"render",value:function(){var t=this.props,e=t.data,i=t.onClick;return e.map((function(t,e){return(0,n.jsx)(u.Jx,{longitude:t.longitude,latitude:t.latitude,children:(0,n.jsx)("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){return i(t)},children:(0,n.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})},"marker-".concat(e))}))}}]),i}(c.PureComponent)},29006:function(t,e,i){"use strict";i.r(e);var n=i(85893),o=i(67294),a=i(9008),r=i(66261),l=i(63828),s=i(69406),c=i(93522),u=i(62296),p=i(47588),d=i(32553),m=i(16554),h=i(49986);i(61699);e.default=function(t){t.t;var e=(0,o.useState)(""),i=e[0],g=e[1],f=(0,o.useState)(null),_=(f[0],f[1]);(0,o.useEffect)((function(){r.OK.scrollTo("page-wrapper",{duration:200,smooth:!0}),y.current.focus()}),[]);var y=(0,o.useRef)();return(0,n.jsxs)("div",{className:"page",children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Circles UBI | Community Hubs"}),(0,n.jsx)("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),(0,n.jsx)("meta",{name:"description",content:"Circles | A Basic Income in the Blockchain"}),(0,n.jsx)("meta",{name:"keywords",content:"circles, circle, gift economy, cryptocurrency, universal basic income, blockchain, ubi, money, berlin, andrew yang, bernie sanders, doughnut economics, degrowth, local community currency, p2p, commons, democratic money, faircoin, trustlines, gnosis"})]}),(0,n.jsx)(h.Z,{children:function(t){return(0,n.jsxs)(l.x,{width:"xlarge",style:{margin:"0 auto"},children:[(0,n.jsxs)(l.x,{width:"100%",pad:{top:"large"},children:[(0,n.jsx)(l.x,{alignSelf:"center",children:(0,n.jsx)(s.E,{src:"/images/logo.svg",margin:{bottom:"large"},style:{width:90,height:90}})}),(0,n.jsxs)(l.x,{margin:{left:"medium",right:"medium"},width:"medium",alignSelf:"center",children:[(0,n.jsx)(c.x,{weight:"bold",size:"large",textAlign:"center",margin:{bottom:"medium"},children:"Search for Hubs"}),(0,n.jsx)(l.x,{pad:{horizontal:"medium",top:"small"},background:"light-1",margin:{bottom:"small"},children:(0,n.jsx)(u.W,{children:(0,n.jsx)(p.o,{ref:y,value:i,onChange:function(t){_(null),g(t.target.value)},placeholder:"Berlin",dropProps:{pad:{horizontal:"medium"}}})})})]})]}),(0,n.jsx)(d.X2,{children:(0,n.jsx)(l.x,{width:"100%",children:(0,n.jsx)(l.x,{margin:{left:"medium",right:"medium"},width:"xlarge",pad:{horizontal:"large",bottom:"large"},alignSelf:"center",children:(0,n.jsx)(m.default,{})})})})]})}})]})}},26825:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hubs",function(){return i(29006)}])},61699:function(t){"use strict";t.exports=JSON.parse('[{"city":"New York","population":"8,175,133","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","state":"New York","latitude":40.6643,"longitude":-73.9385},{"city":"Los Angeles","population":"3,792,621","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg","state":"California","latitude":34.0194,"longitude":-118.4108},{"city":"Chicago","population":"2,695,598","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg","state":"Illinois","latitude":41.8376,"longitude":-87.6818},{"city":"Houston","population":"2,100,263","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","state":"Texas","latitude":29.7805,"longitude":-95.3863},{"city":"Phoenix","population":"1,445,632","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg","state":"Arizona","latitude":33.5722,"longitude":-112.088},{"city":"Philadelphia","population":"1,526,006","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg","state":"Pennsylvania","latitude":40.0094,"longitude":-75.1333},{"city":"San Antonio","population":"1,327,407","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG","state":"Texas","latitude":29.4724,"longitude":-98.5251},{"city":"San Diego","population":"1,307,402","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg","state":"California","latitude":32.8153,"longitude":-117.135},{"city":"Dallas","population":"1,197,816","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg","state":"Texas","latitude":32.7757,"longitude":-96.7967},{"city":"San Jose","population":"945,942","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG","state":"California","latitude":37.2969,"longitude":-121.8193},{"city":"Austin","population":"790,390","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG","state":"Texas","latitude":30.3072,"longitude":-97.756},{"city":"Jacksonville","population":"821,784","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg","state":"Florida","latitude":30.337,"longitude":-81.6613},{"city":"San Francisco","population":"805,235","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg","state":"California","latitude":37.7751,"longitude":-122.4193},{"city":"Columbus","population":"787,033","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg","state":"Ohio","latitude":39.9848,"longitude":-82.985},{"city":"Indianapolis","population":"820,445","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG","state":"Indiana","latitude":39.7767,"longitude":-86.1459},{"city":"Fort Worth","population":"741,206","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg","state":"Texas","latitude":32.7795,"longitude":-97.3463},{"city":"Charlotte","population":"731,424","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg","state":"North Carolina","latitude":35.2087,"longitude":-80.8307},{"city":"Seattle","population":"608,660","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg","state":"Washington","latitude":47.6205,"longitude":-122.3509},{"city":"Denver","population":"600,158","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG","state":"Colorado","latitude":39.7618,"longitude":-104.8806},{"city":"El Paso","population":"649,121","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg","state":"Texas","latitude":31.8484,"longitude":-106.427}]')}},function(t){t.O(0,[634,157,33,187,986,774,888,179],(function(){return e=26825,t(t.s=e);var e}));var e=t.O();_N_E=e}]);