_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"1OyB":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},"8oxB":function(t,e){var n,o,i=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(t){n=r}try{o="function"===typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,l=[],p=!1,s=-1;function f(){p&&c&&(p=!1,c.length?l=c.concat(l):s=-1,l.length&&d())}function d(){if(!p){var t=u(f);p=!0;for(var e=l.length;e;){for(c=l,l=[];++s<e;)c&&c[s].run();s=-1,e=l.length}c=null,p=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new m(t,e)),1!==l.length||p||u(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},HALo:function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))},JX7q:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},Ji7U:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("s4An");function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(o.a)(t,e)}},Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},RqDu:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var o=n("HALo"),i=n("H+61"),r=n("UlJF"),a=n("+Css"),u=n("7LId"),c=n("VIvw"),l=n("iHvq"),p=n("cpVT"),s=n("q1tI"),f=n.n(s),d=n("UP1k"),m=(n("pL25"),n("nyvd")),h=n("VKGR"),_=n("p2a6"),g=f.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var i=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var w={position:"absolute",top:0,left:0,padding:"10px"},b={position:"absolute",top:36,left:0,padding:"10px"},k={position:"absolute",top:72,left:0,padding:"10px"},v={position:"absolute",bottom:36,left:0,padding:"10px"},x=function(t){Object(u.a)(n,t);var e=y(n);function n(t){var o;return Object(i.a)(this,n),o=e.call(this,t),Object(p.a)(Object(a.a)(o),"_updateViewport",(function(t){o.setState({viewport:t})})),Object(p.a)(Object(a.a)(o),"_onClickMarker",(function(t){o.setState({popupInfo:t})})),o.state={viewport:{latitude:37.785164,longitude:-100,zoom:3.5,bearing:0,pitch:0},popupInfo:null},o}return Object(r.a)(n,[{key:"_renderPopup",value:function(){var t=this,e=this.state.popupInfo;return e&&g(d.e,{tipSize:5,anchor:"top",longitude:e.longitude,latitude:e.latitude,closeOnClick:!1,onClose:function(){return t.setState({popupInfo:null})}},g(h.default,{info:e}))}},{key:"render",value:function(){var t=this.state.viewport;return g("div",{style:{height:600}},g(d.g,Object(o.a)({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/dark-v9",onViewportChange:this._updateViewport,mapboxApiAccessToken:"pk.eyJ1IjoiZW1pbngiLCJhIjoiY2tsYzU5YXZ6MDkyNDJ5bWcxZDZmZXFjMyJ9.w6xYaaz5NOslpqcFHsNGsQ"}),g(m.default,{data:_,onClick:this._onClickMarker}),this._renderPopup(),g("div",{style:w},g(d.b,null)),g("div",{style:b},g(d.a,null)),g("div",{style:k},g(d.d,null)),g("div",{style:v},g(d.f,null))))}}]),n}(s.Component)},U8pU:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}))},VKGR:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var o=n("H+61"),i=n("UlJF"),r=n("7LId"),a=n("VIvw"),u=n("iHvq"),c=n("q1tI"),l=c.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(u.a)(t);if(e){var i=Object(u.a)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return Object(a.a)(this,n)}}var s=function(t){Object(r.a)(n,t);var e=p(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.info,e="".concat(t.city,", ").concat(t.state);return l("div",null,l("div",null,e," |"," ",l("a",{target:"_new",href:"http://en.wikipedia.org/w/index.php?title=Special:Search&search=".concat(e)},"Wikipedia")),l("img",{width:240,src:t.image}))}}]),n}(c.PureComponent)},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},cpVT:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},fHcB:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hubs/components/Map",function(){return n("RqDu")}])},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("cDf5"),i=n.n(o),r=n("JX7q");function a(t,e){return!e||"object"!==i()(e)&&"function"!==typeof e?Object(r.a)(t):e}},ntbh:function(t,e){(function(e){t.exports=function(){var t={149:function(t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"===typeof window&&(e=window)}t.exports=e}},n={};function o(e){if(n[e])return n[e].exports;var i=n[e]={exports:{}},r=!0;try{t[e](i,i.exports,o),r=!1}finally{r&&delete n[e]}return i.exports}return o.ab=e+"/",o(149)}()}).call(this,"/")},p2a6:function(t){t.exports=JSON.parse('[{"city":"New York","population":"8,175,133","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","state":"New York","latitude":40.6643,"longitude":-73.9385},{"city":"Los Angeles","population":"3,792,621","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg","state":"California","latitude":34.0194,"longitude":-118.4108},{"city":"Chicago","population":"2,695,598","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg","state":"Illinois","latitude":41.8376,"longitude":-87.6818},{"city":"Houston","population":"2,100,263","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","state":"Texas","latitude":29.7805,"longitude":-95.3863},{"city":"Phoenix","population":"1,445,632","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg","state":"Arizona","latitude":33.5722,"longitude":-112.088},{"city":"Philadelphia","population":"1,526,006","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg","state":"Pennsylvania","latitude":40.0094,"longitude":-75.1333},{"city":"San Antonio","population":"1,327,407","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG","state":"Texas","latitude":29.4724,"longitude":-98.5251},{"city":"San Diego","population":"1,307,402","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg","state":"California","latitude":32.8153,"longitude":-117.135},{"city":"Dallas","population":"1,197,816","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg","state":"Texas","latitude":32.7757,"longitude":-96.7967},{"city":"San Jose","population":"945,942","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG","state":"California","latitude":37.2969,"longitude":-121.8193},{"city":"Austin","population":"790,390","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG","state":"Texas","latitude":30.3072,"longitude":-97.756},{"city":"Jacksonville","population":"821,784","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg","state":"Florida","latitude":30.337,"longitude":-81.6613},{"city":"San Francisco","population":"805,235","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg","state":"California","latitude":37.7751,"longitude":-122.4193},{"city":"Columbus","population":"787,033","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg","state":"Ohio","latitude":39.9848,"longitude":-82.985},{"city":"Indianapolis","population":"820,445","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG","state":"Indiana","latitude":39.7767,"longitude":-86.1459},{"city":"Fort Worth","population":"741,206","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg","state":"Texas","latitude":32.7795,"longitude":-97.3463},{"city":"Charlotte","population":"731,424","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg","state":"North Carolina","latitude":35.2087,"longitude":-80.8307},{"city":"Seattle","population":"608,660","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg","state":"Washington","latitude":47.6205,"longitude":-122.3509},{"city":"Denver","population":"600,158","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG","state":"Colorado","latitude":39.7618,"longitude":-104.8806},{"city":"El Paso","population":"649,121","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg","state":"Texas","latitude":31.8484,"longitude":-106.427}]')},pL25:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var o=n("H+61"),i=n("UlJF"),r=n("7LId"),a=n("VIvw"),u=n("iHvq"),c=n("q1tI"),l=c.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(u.a)(t);if(e){var i=Object(u.a)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return Object(a.a)(this,n)}}var s=function(t){Object(r.a)(n,t);var e=p(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l("div",{className:"control-panel"},l("h3",null,"Marker, Popup, NavigationControl and FullscreenControl "),l("p",null,"Map showing top 20 most populated cities of the United States. Click on a marker to learn more."),l("p",null,"Data source:"," ",l("a",{href:"https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population"},"Wikipedia")),l("div",{className:"source-link"},l("a",{href:"https://github.com/visgl/react-map-gl/tree/6.0-release/examples/controls",target:"_new"},"View Code \u2197")))}}]),n}(c.PureComponent)},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},s4An:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return o}))},vuIU:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return i}))},wx14:function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))}},[["fHcB",0,1,6,5,7]]]);