(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{70073:function(e,t,n){"use strict";n.d(t,{X:function(){return h}});var r=n(67294),a=n(29163),o=n(89207),i=n(46808),l=n(80363),c=n(51755),u=(0,a.css)(["color:",";"],(function(e){return(0,i.ut)(e.colorProp||e.theme.heading.color,e.theme)})),s=a.default.h1.withConfig({displayName:"StyledHeading",componentId:"sc-1rdh4aw-0"})([""," "," "," "," "," "," ",""],l.$G,(function(e){return function(e){var t=(e.theme.heading.level[e.level]||{}).font;return t&&t.family?(0,a.css)(["font-family:",";"],t.family):e.theme.heading.font?(0,a.css)(["font-family:",";"],e.theme.heading.font.family):""}(e)}),(function(e){return function(e){var t=e.size||"medium",n=e.theme.heading,r=n.level[e.level];if(r){var i=r[t],l=[(0,a.css)(["font-size:",";line-height:",";max-width:",";font-weight:",";"],i?i.size:t,i?i.height:"normal",(e.fillProp?"none":i&&i.maxWidth)||r.medium.maxWidth,r.font.weight||n.weight)];if(e.responsive&&n.responsiveBreakpoint){var c=e.theme.global.breakpoints[n.responsiveBreakpoint];if(c){var u=n.level[e.level+1]?n.level[e.level+1][t]:n.level[e.level][t];u&&l.push((0,o.bk)(c,"\n            font-size: "+u.size+";\n            line-height: "+u.height+";\n            max-width: "+(e.fillProp?"none":u.maxWidth)+";\n          "))}}return l}return console.warn("Heading level "+e.level+" is not defined in your theme."),""}(e)}),(function(e){return e.textAlign&&l.jt}),(function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(e){return(e.colorProp||e.theme.heading.color)&&u}),(function(e){return e.theme.heading&&e.theme.heading.extend}));s.defaultProps={},Object.setPrototypeOf(s.defaultProps,c.l);var f=["color","fill","level"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.fill,o=e.level,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,f);return r.createElement(s,d({as:"h"+o,colorProp:n,fillProp:a,level:+o},i,{ref:t}))}));p.displayName="Heading",p.defaultProps={level:1,responsive:!0};var h=p},72743:function(e,t,n){"use strict";n.d(t,{U:function(){return Et}});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=/[\'\"]/,i={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},l={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},c=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,f=/\n{2,}$/,d=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,p=/^ *> ?/gm,h=/^ {2,}\n/,m=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,g=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,b=/^(?:\n *)*\n/,k=/\r\n?/g,x=/^\[\^([^\]]+)](:.*)\n/,O=/^\[\^([^\]]+)]/,w=/\f/g,P=/^\s*?\[(x|\s)\]/,S=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,j=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,C=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,E=/&([a-z]+);/g,z=/^<!--[\s\S]*?(?:-->)/,H=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,T=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,A=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,N=/^<([^ >]+@[^ >]+)>/,M=/^<([^ >]+:\/[^ >]+)>/,_=/ *\n+$/,R=/(?:^|\n)( *)$/,$=/-([a-z])?/gi,G=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,L=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,W=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,B=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,X=/^\[([^\]]*)\] ?\[([^\]]*)\]/,U=/(\[|\])/g,D=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,F=/\t/g,Z=/^ *\| */,q=/(^ *\||\| *$)/g,V=/ *$/,K=/^ *:-+: *$/,Q=/^ *:-+ *$/,J=/^ *-+: *$/,Y=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ee=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,te=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ne=/^\\([^0-9A-Za-z\s])/,re=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ae=/(^\n+|\n+$|\s+$)/g,oe=/^([ \t]*)/,ie=/\\([^0-9A-Z\s])/gi,le=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ce=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ue=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),se="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",fe=new RegExp("^\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),de=new RegExp("^!\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),pe=[d,v,g,S,j,C,z,T,ce,ue,G,L];function he(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function me(e){return J.test(e)?"right":K.test(e)?"center":Q.test(e)?"left":null}function ge(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"!==e.type||null!=a[t+1]&&"tableSeparator"!==a[t+1].type||(e.content=e.content.replace(V,"")),o[o.length-1].push(e))})),o}function ve(e,t,n){n.inline=!0;var r=ge(e[1],t,n),a=e[2].replace(q,"").split("|").map(me),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ge(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function ye(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function be(e){return function(t,n){return n.inline?e.exec(t):null}}function ke(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Oe(e){return function(t){return e.exec(t)}}function we(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Pe(e){return e.replace(ie,"$1")}function Se(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function je(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ce(e,t,n){return n.inline=!1,e(t+"\n\n",n)}var Ee,ze,He=function(e,t,n){return{content:Se(t,e[1],n)}};function Te(){return{}}function Ae(){return null}function Ie(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Ne(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Me(e,t){var n=Ne(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Ne(t,e+".component",e):e}function _e(e,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||he,t.namedCodesToUnicode=t.namedCodesToUnicode?a({},l,t.namedCodesToUnicode):l;var n=t.createElement||r.createElement;function q(e,r){var o=Ne(t.overrides,e+".props",{});return n.apply(void 0,[Me(e,t.overrides),a({},r,o,{className:Ie(null==r?void 0:r.className,o.className)||void 0})].concat([].slice.call(arguments,2)))}function V(e){var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===D.test(e));var a=ze(ge(n?e:e.replace(ae,"")+"\n\n",{inline:n}));if(null===t.wrapper)return a;var o,i=t.wrapper||(n?"span":"div");if(a.length>1||t.forceWrapper)o=a;else{if(1===a.length)return"string"==typeof(o=a[0])?q("span",{key:"outer"},o):o;o=null}return r.createElement(i,{key:"outer"},o)}function K(e){var t=e.match(u);return t?t.reduce((function(e,t,n){var a,l=t.indexOf("=");if(-1!==l){var c=(a=t.slice(0,l),-1!==a.indexOf("-")&&null===a.match(H)&&(a=a.replace($,(function(e,t){return t.toUpperCase()}))),a).trim(),u=function(e){return e?(o.test(e.charAt(0))&&(e=e.substr(1)),o.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(t.slice(l+1).trim()),s=i[c]||c,f=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?we(t):(t.match(A)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,u);"string"==typeof f&&(C.test(f)||T.test(f))&&(e[s]=r.cloneElement(V(f.trim()),{key:n}))}else"style"!==t&&(e[i[t]||t]=!0);return e}),{}):void 0}var Q=[],J={},ie={blockQuote:{match:xe(d),order:Ee.HIGH,parse:function(e,t,n){return{content:t(e[0].replace(p,""),n)}},react:function(e,t,n){return q("blockquote",{key:n.key},t(e.content,n))}},breakLine:{match:Oe(h),order:Ee.HIGH,parse:Te,react:function(e,t,n){return q("br",{key:n.key})}},breakThematic:{match:xe(m),order:Ee.HIGH,parse:Te,react:function(e,t,n){return q("hr",{key:n.key})}},codeBlock:{match:xe(v),order:Ee.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,n){return q("pre",{key:n.key},q("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:xe(g),order:Ee.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:ke(y),order:Ee.LOW,parse:function(e){return{content:e[2]}},react:function(e,t,n){return q("code",{key:n.key},e.content)}},footnote:{match:xe(x),order:Ee.MAX,parse:function(e){return Q.push({footnote:e[2],identifier:e[1]}),{}},react:Ae},footnoteReference:{match:be(O),order:Ee.HIGH,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,n){return q("a",{key:n.key,href:we(e.target)},q("sup",{key:n.key},e.content))}},gfmTask:{match:be(P),order:Ee.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,n){return q("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},heading:{match:xe(S),order:Ee.HIGH,parse:function(e,n,r){return{content:Se(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,n){return e.tag="h"+e.level,q(e.tag,{id:e.id,key:n.key},t(e.content,n))}},headingSetext:{match:xe(j),order:Ee.MAX,parse:function(e,t,n){return{content:Se(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Oe(z),order:Ee.HIGH,parse:function(){return{}},react:Ae},image:{match:ke(de),order:Ee.HIGH,parse:function(e){return{alt:e[1],target:Pe(e[2]),title:e[3]}},react:function(e,t,n){return q("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:we(e.target)})}},link:{match:be(fe),order:Ee.LOW,parse:function(e,t,n){return{content:je(t,e[1],n),target:Pe(e[2]),title:e[3]}},react:function(e,t,n){return q("a",{key:n.key,href:we(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{match:be(M),order:Ee.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:function(e,t){return t.inAnchor?null:be(I)(e,t)},order:Ee.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:be(N),order:Ee.MAX,parse:function(e){var t=e[1],n=e[1];return s.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=R.exec(n);return!r||!t._list&&t.inline?null:ue.exec(e=r[1]+e)},order:Ee.HIGH,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(f,"\n").match(ce),l=!1;return{items:i.map((function(e,r){var a=le.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),c=e.replace(o,"").replace(le,""),u=r===i.length-1,s=-1!==c.indexOf("\n\n")||u&&l;l=s;var f,d=n.inline,p=n._list;n._list=!0,s?(n.inline=!1,f=c.replace(_,"\n\n")):(n.inline=!0,f=c.replace(_,""));var h=t(f,n);return n.inline=d,n._list=p,h})),ordered:a,start:o}},react:function(e,t,n){return q(e.ordered?"ol":"ul",{key:n.key,start:e.start},e.items.map((function(e,r){return q("li",{key:r},t(e,n))})))}},newlineCoalescer:{match:xe(b),order:Ee.LOW,parse:Te,react:function(){return"\n"}},paragraph:{match:xe(L),order:Ee.LOW,parse:He,react:function(e,t,n){return q("p",{key:n.key},t(e.content,n))}},ref:{match:be(W),order:Ee.MAX,parse:function(e){return J[e[1]]={target:e[2],title:e[4]},{}},react:Ae},refImage:{match:ke(B),order:Ee.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,n){return q("img",{key:n.key,alt:e.alt,src:we(J[e.ref].target),title:J[e.ref].title})}},refLink:{match:be(X),order:Ee.MAX,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(U,"\\$1"),n),ref:e[2]}},react:function(e,t,n){return J[e.ref]?q("a",{key:n.key,href:we(J[e.ref].target),title:J[e.ref].title},t(e.content,n)):q("span",{key:n.key},t(e.fallbackContent,n))}},table:{match:xe(G),order:Ee.HIGH,parse:ve,react:function(e,t,n){return q("table",{key:n.key},q("thead",null,q("tr",null,e.header.map((function(r,a){return q("th",{key:a,style:ye(e,a)},t(r,n))})))),q("tbody",null,e.cells.map((function(r,a){return q("tr",{key:a},r.map((function(r,a){return q("td",{key:a,style:ye(e,a)},t(r,n))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Z.exec(e):null},order:Ee.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Oe(re),order:Ee.MIN,parse:function(e){return{content:e[0].replace(E,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:ke(Y),order:Ee.MED,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return q("strong",{key:n.key},t(e.content,n))}},textEmphasized:{match:ke(ee),order:Ee.LOW,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return q("em",{key:n.key},t(e.content,n))}},textEscaped:{match:ke(ne),order:Ee.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:ke(te),order:Ee.LOW,parse:He,react:function(e,t,n){return q("del",{key:n.key},t(e.content,n))}}};!0!==t.disableParsingRawHTML&&(ie.htmlBlock={match:Oe(C),order:Ee.HIGH,parse:function(e,t,n){var r,a=e[3].match(oe),o=new RegExp("^"+a[1],"gm"),i=e[3].replace(o,""),l=(r=i,pe.some((function(e){return e.test(r)}))?Ce:Se),u=e[1].toLowerCase(),s=-1!==c.indexOf(u);n.inAnchor=n.inAnchor||"a"===u;var f=s?e[3]:l(t,i,n);return n.inAnchor=!1,{attrs:K(e[2]),content:f,noInnerParse:s,tag:s?u:e[1]}},react:function(e,t,n){return q(e.tag,Object.assign({key:n.key},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},ie.htmlSelfClosing={match:Oe(T),order:Ee.HIGH,parse:function(e){return{attrs:K(e[2]||""),tag:e[1]}},react:function(e,t,n){return q(e.tag,Object.assign({},e.attrs,{key:n.key}))}});var se,me,ge=function(e){var t=Object.keys(e);function n(r,a){for(var o=[],i="";r;)for(var l=0;l<t.length;){var c=t[l],u=e[c],s=u.match(r,a,i);if(s){var f=s[0];r=r.substring(f.length);var d=u.parse(s,n,a);null==d.type&&(d.type=c),o.push(d),i=f;break}l++}return o}return t.sort((function(t,n){var r=e[t].order,a=e[n].order;return r!==a?r-a:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(k,"\n").replace(w,"").replace(F,"    ")}(e),t)}}(ie),ze=(me=ie,se=function(e,t,n){return me[e.type].react(e,t,n)},function e(t,n){if(void 0===n&&(n={}),Array.isArray(t)){for(var r=n.key,a=[],o=!1,i=0;i<t.length;i++){n.key=i;var l=e(t[i],n),c="string"==typeof l;c&&o?a[a.length-1]+=l:a.push(l),o=c}return n.key=r,a}return se(t,e,n)}),_e=V(e);return Q.length&&_e.props.children.push(q("footer",{key:"footer"},Q.map((function(e){return q("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,ze(ge(e.footnote,{inline:!0})))})))),_e}function Re(e){var t=e.children,n=e.options,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}(e,["children","options"]);return r.cloneElement(_e(t,n),a)}(ze=Ee||(Ee={}))[ze.MAX=0]="MAX",ze[ze.HIGH=1]="HIGH",ze[ze.MED=2]="MED",ze[ze.LOW=3]="LOW",ze[ze.MIN=4]="MIN";var $e=n(45543),Ge=n(70073),Le=n(60018),We=n(7600),Be=n(69406),Xe=n(29163),Ue=n(26093),De=n(95789),Fe=n(80363),Ze=n(51755),qe={"1/2":"50%","1/4":"25%","2/4":"50%","3/4":"75%","1/3":"33.33%","2/3":"66.66%"},Ve=(0,Xe.css)(["width:",";max-width:",";overflow:hidden;"],(function(e){return"auto"===e.size?"1px":qe[e.size]||e.theme.global.size[e.size]||e.size}),(function(e){return"auto"!==e.size?qe[e.size]||e.theme.global.size[e.size]||e.size:void 0})),Ke=Xe.default.td.withConfig({displayName:"StyledTable__StyledTableCell",componentId:"sc-1m3u5g-0"})(["margin:0;padding:0;font-weight:inherit;text-align:inherit;"," "," "," "," "," "," ",""],(function(e){return e.size&&Ve}),(function(e){return e.verticalAlign&&"vertical-align: "+e.verticalAlign+";"}),(function(e){return e.align&&"text-align: "+e.align+";"}),(function(e){return e.background&&(0,Ue.Nu)(e.background,e.theme)}),(function(e){return e.border&&(0,De.$)(e.border,e.responsive,e.theme)}),(function(e){return e.pad&&(0,Fe.oW)("padding",e.pad,e.responsive,e.theme.box.responsiveBreakpoint,e.theme)}),(function(e){return e.tableContextTheme&&e.tableContextTheme.extend}));Ke.defaultProps={},Object.setPrototypeOf(Ke.defaultProps,Ze.l);var Qe=Xe.default.caption.withConfig({displayName:"StyledTable__StyledTableDataCaption",componentId:"sc-1m3u5g-1"})(["margin-bottom:",";"],(function(e){return e.theme.global.edgeSize.xxsmall}));Qe.defaultProps={},Object.setPrototypeOf(Qe.defaultProps,Ze.l);var Je=Xe.default.tr.withConfig({displayName:"StyledTable__StyledTableRow",componentId:"sc-1m3u5g-2"})([""]);Je.defaultProps={},Object.setPrototypeOf(Je.defaultProps,Ze.l);var Ye=Xe.default.tbody.withConfig({displayName:"StyledTable__StyledTableBody",componentId:"sc-1m3u5g-3"})([""]);Ye.defaultProps={},Object.setPrototypeOf(Ye.defaultProps,Ze.l);var et=Xe.default.thead.withConfig({displayName:"StyledTable__StyledTableHeader",componentId:"sc-1m3u5g-4"})([""]);et.defaultProps={},Object.setPrototypeOf(et.defaultProps,Ze.l);var tt=Xe.default.tfoot.withConfig({displayName:"StyledTable__StyledTableFooter",componentId:"sc-1m3u5g-5"})([""]);tt.defaultProps={},Object.setPrototypeOf(tt.defaultProps,Ze.l);var nt=Xe.default.table.withConfig({displayName:"StyledTable",componentId:"sc-1m3u5g-6"})(["border-spacing:0;border-collapse:collapse;width:inherit;@media all and (min--moz-device-pixel-ratio:0){table-layout:fixed;}"," ",";"],Fe.$G,(function(e){return e.theme.table&&e.theme.table.extend}));nt.defaultProps={},Object.setPrototypeOf(nt.defaultProps,Ze.l);var rt=["caption","children"];var at=function(e){var t=e.caption,n=e.children,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,rt);return r.createElement(nt,a,t?r.createElement(Qe,null,t):null,n)},ot=r.createContext(void 0);function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var lt=(0,r.forwardRef)((function(e,t){return r.createElement(ot.Provider,{value:"body"},r.createElement(Ye,it({ref:t},e)))}));lt.displayName="TableBody";var ct=lt,ut=n(62320),st=n(47187),ft=n(63828),dt=["align","background","border","children","className","colSpan","onWidth","pad","plain","scope","size","verticalAlign"];function pt(){return(pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ht={middle:"center",top:"start",bottom:"end"},mt=(0,r.forwardRef)((function(e,t){var n,a=e.align,o=e.background,i=e.border,l=e.children,c=e.className,u=e.colSpan,s=e.onWidth,f=e.pad,d=e.plain,p=e.scope,h=e.size,m=e.verticalAlign,g=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,dt),v=(0,r.useContext)(Xe.ThemeContext)||Ze.l.theme,y=(0,r.useContext)(ot),b=(0,st.t)(t),k=(0,r.useRef)();(0,ut.b)((function(){if(s){var e=b.current.getBoundingClientRect().width;s(e)}}),[b,s]),(0,r.useEffect)((function(){var e=function(){if("noPad"===d){var e=b.current,t=k.current;if(e&&t){t.style.height="";var n=e.getBoundingClientRect();t.style.height=Math.max(n.height-(i||v.table[y].border?v.global.borderSize.xsmall.replace("px",""):0),0)+"px"}}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[i,b,d,y,v.global.borderSize,v.table]);var x=pt({},n="header"===y?v.table&&v.table.header:"footer"===y?v.table&&v.table.footer:v.table&&v.table.body,g);Object.keys(x).forEach((function(e){void 0===g[e]&&(x[e]=n[e])}));var O={align:a||x.align||void 0,background:o||x.background||void 0,border:i||x.border||void 0,pad:"noPad"!==d&&(f||x.pad)||void 0,verticalAlign:m||x.verticalAlign||void 0};delete x.align,delete x.background,delete x.border,delete x.pad,delete x.verticalAlign;var w=l;"noPad"===d&&l&&(w=r.createElement(ft.x,{ref:k,justify:"center"},l));var P=(0,r.useMemo)((function(){var e;if(O.background||v.darkChanged){var t=(0,Ue.im)(O.background,v);void 0!==t&&t!==v.dark||v.darkChanged?((e=pt({},v)).dark=void 0===t?v.dark:t,e.background=O.background):O.background&&((e=pt({},v)).background=O.background)}return e||v}),[O.background,v]);return r.createElement(Xe.ThemeContext.Provider,{value:P},r.createElement(Ke,pt({ref:b,as:p?"th":void 0,scope:p,size:h,colSpan:u,tableContext:y,tableContextTheme:n},!0===d?x:{},O,{className:c}),d||!Object.keys(x).length?w:r.createElement(ft.x,pt({},x,{align:a,justify:ht[m]}),l)))}));mt.displayName="TableCell";var gt=mt;function vt(){return(vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var yt=(0,r.forwardRef)((function(e,t){return r.createElement(ot.Provider,{value:"footer"},r.createElement(tt,vt({ref:t},e)))}));yt.displayName="TableFooter";var bt=yt;function kt(){return(kt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var xt=(0,r.forwardRef)((function(e,t){return r.createElement(ot.Provider,{value:"header"},r.createElement(et,kt({ref:t},e)))}));xt.displayName="TableHeader";var Ot=xt;function wt(){return(wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Pt=(0,r.forwardRef)((function(e,t){return r.createElement(Je,wt({ref:t},e))}));Pt.displayName="TableRow";var St=Pt,jt=["components","options","theme"];function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Et=function(e){var t=e.components,n=e.options,a=(e.theme,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,jt)),o=[1,2,3,4].reduce((function(e,t){var n=Ct({},e);return n["h"+t]={component:Ge.X,props:{level:t}},n}),{}),i=(0,$e.RH)({a:{component:We.e},img:{component:Be.E},p:{component:Le.n},table:{component:at},td:{component:gt},tbody:{component:ct},tfoot:{component:bt},th:{component:gt},thead:{component:Ot},tr:{component:St}},o,t,n&&n.overrides);return r.createElement(Re,Ct({options:Ct({},n,{overrides:i})},a))}},60018:function(e,t,n){"use strict";n.d(t,{n:function(){return h}});var r=n(67294),a=n(29163),o=n(46808),i=n(80363),l=n(51755),c=(0,a.css)(["color:",";"],(function(e){return(0,o.ut)(e.colorProp,e.theme)})),u=(0,a.css)(["font-family:",";"],(function(e){return e.theme.paragraph.font.family})),s=a.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," "," ",""],i.$G,(function(e){return function(e){var t=e.size||"medium",n=e.theme.paragraph[t];return(0,a.css)(["font-size:",";line-height:",";max-width:",";"],n?n.size:t,n?n.height:"normal",e.fillProp?"none":n&&n.maxWidth)}(e)}),(function(e){return e.textAlign&&i.jt}),(function(e){return e.colorProp&&c}),(function(e){return e.theme.paragraph.font&&e.theme.paragraph.font.family&&u}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));s.defaultProps={},Object.setPrototypeOf(s.defaultProps,l.l);var f=["color","fill"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.fill,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,f);return r.createElement(s,d({ref:t,colorProp:n,fillProp:a},o))}));p.displayName="Paragraph";var h=p}}]);