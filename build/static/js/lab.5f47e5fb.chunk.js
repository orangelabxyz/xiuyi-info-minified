(this.webpackJsonpxiuyi=this.webpackJsonpxiuyi||[]).push([[10],{1125:function(t,e,n){t.exports=n.p+"static/media/lab.8f94f07e.png"},1126:function(t,e,n){},1275:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(505),c=n(1125),l=n.n(c);n(1126);e.default=function(){return a.a.createElement("div",{className:"lab"},a.a.createElement("div",{className:"lab-container"},a.a.createElement("div",{className:"lab-top"},a.a.createElement("div",{className:"lab-top-wrap"},a.a.createElement("div",{className:"top-title"},a.a.createElement("p",null,"\u5b9e\u9a8c\u5ba4"),a.a.createElement("p",{className:"sub-title"},"\u5b9e\u9a8c\u5ba4\uff0c\u524d\u6cbf\u6280\u672f\u62d3\u5c55\u7814\u7a76")),a.a.createElement("img",{className:"top-log",src:l.a,alt:""}))),a.a.createElement("div",{className:"lab-content"},"\u5373\u5c06\u5f00\u653e\uff0c\u656c\u8bf7\u671f\u5f85")),a.a.createElement(o.a,null))}},505:function(t,e,n){"use strict";n(508);var r=n(512),a=n(0),o=n.n(a),c=n(6);n(55);e.a=function(t){var e=t.style,n=void 0===e?{}:e;return o.a.createElement("div",{className:"footer",style:n},o.a.createElement("div",{className:"footer-des"},o.a.createElement("span",null,"\u7ee3\u8863 @\u6d77\u5e26\u5b9e\u9a8c\u5ba4 Version: v1.18.196+beta"),o.a.createElement("span",null,"\u670d\u52a1\u72b6\u6001\uff1a",o.a.createElement(r.a,{status:"processing",color:"green",text:"Running"})),o.a.createElement("span",null,o.a.createElement("span",{className:"linkto",onClick:function(){return c.a.push("/feedback")}},"\u95ee\u9898\u53cd\u9988"))))}},508:function(t,e,n){"use strict";n(24),n(513)},509:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var r=n(17),a=Object(r.a)("success","processing","error","default","warning"),o=Object(r.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},512:function(t,e,n){"use strict";var r=n(0),a=n(69),o=n(7),c=n(1),l=n.n(c),s=n(27),u=n(3);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t){return t?t.toString().split("").reverse().map((function(t){var e=Number(t);return isNaN(e)?t:e})):[]}var b=function(t){var e=f(r.useState(!0),2),n=e[0],a=e[1],c=f(r.useState(t.count),2),m=c[0],b=c[1],y=f(r.useState(t.count),2),v=y[0],d=y[1],g=f(r.useState(t.count),2),h=g[0],N=g[1];v!==t.count&&(a(!0),d(t.count)),r.useEffect((function(){var e;return N(m),n&&(e=setTimeout((function(){a(!1),b(t.count),t.onAnimated&&t.onAnimated()}))),function(){e&&clearTimeout(e)}}),[n,m,t.count,t.onAnimated]);var E=function(t,e,a){if("number"===typeof e){var o=function(t,e){var r=Math.abs(Number(m)),a=Math.abs(Number(h)),o=Math.abs(p(m)[e]),c=Math.abs(p(a)[e]);return n?10+t:r>a?o>=c?10+t:20+t:o<=c?10+t:t}(e,a),c=n||void 0===p(h)[a];return r.createElement("span",{className:"".concat(t,"-only"),style:{transition:c?"none":void 0,msTransform:"translateY(".concat(100*-o,"%)"),WebkitTransform:"translateY(".concat(100*-o,"%)"),transform:"translateY(".concat(100*-o,"%)")},key:a},function(t,e){for(var n=[],a=0;a<30;a++)n.push(r.createElement("p",{key:a.toString(),className:l()(e,{current:t===a})},a%10));return n}(o,"".concat(t,"-only-unit")))}return r.createElement("span",{key:"symbol",className:"".concat(t,"-symbol")},e)},w=function(e){var n=e.getPrefixCls,a=t.prefixCls,c=t.className,s=t.style,f=t.title,b=t.component,y=void 0===b?"sup":b,v=t.displayComponent,d=Object(o.a)(t,["count","onAnimated","component","prefixCls","displayComponent"]),g=n("scroll-number",a),h=i(i({},d),{className:l()(g,c),title:f});return s&&s.borderColor&&(h.style=i(i({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),v?Object(u.a)(v,{className:l()("".concat(g,"-custom-component"),v.props&&v.props.className)}):r.createElement(y,h,function(t){return m&&Number(m)%1===0?p(m).map((function(e,n){return E(t,e,n)})).reverse():m}(g))};return r.createElement(s.a,null,w)};b.defaultProps={count:null,onAnimated:function(){}};var y=b,v=n(509);function d(t){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var N=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};function E(t){return-1!==v.a.indexOf(t)}var w=function(t){var e=function(){var e=t.count,n=t.overflowCount;return e>n?"".concat(n,"+"):e},n=function(){var e=t.status,n=t.color;return!!e||!!n},c=function(){var t=e();return"0"===t||0===t},i=function(){return t.dot&&!c()||n()},f=function(){return i()?"":e()},m=function(){var e=t.title,n=t.count;return e||("string"===typeof n||"number"===typeof n?n:void 0)},p=function(){var e=t.offset,n=t.style;return e?h({right:-parseInt(e[0],10),marginTop:e[1]},n):n},b=function(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr",o=t.className,c=t.children;return l()(o,e,(g(r={},"".concat(e,"-status"),n()),g(r,"".concat(e,"-not-a-wrapper"),!c),g(r,"".concat(e,"-rtl"),"rtl"===a),r))},v=function(){var e=t.showZero,n=f();return(null===n||void 0===n||""===n||c()&&!e)&&!i()},w=function(){var e=t.count;if(e&&"object"===d(e))return Object(u.a)(e,{style:h(h({},p()),e.props&&e.props.style)})},O=function(e){var c,s=e.getPrefixCls,u=e.direction,d=t.prefixCls,O=t.scrollNumberPrefixCls,x=t.children,S=t.status,j=t.text,C=t.color,k=N(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color"]),P=["count","showZero","overflowCount","className","style","dot","offset","title"],A=s("badge",d),T=function(e,n){var a,o=t.status,c=t.count,s=t.color,u=f(),b=i(),d=v(),h=l()((g(a={},"".concat(e,"-dot"),b),g(a,"".concat(e,"-count"),!b),g(a,"".concat(e,"-multiple-words"),!b&&c&&c.toString&&c.toString().length>1),g(a,"".concat(e,"-status-").concat(o),!!o),g(a,"".concat(e,"-status-").concat(s),E(s)),a)),N=p();return s&&!E(s)&&((N=N||{}).background=s),d?null:r.createElement(y,{prefixCls:n,"data-show":!d,className:h,count:u,displayComponent:w(),title:m(),style:N,key:"scrollNumber"})}(A,s("scroll-number",O)),I=function(e){var n=t.text;return v()||!n?null:r.createElement("span",{className:"".concat(e,"-status-text")},n)}(A),M=l()((g(c={},"".concat(A,"-status-dot"),n()),g(c,"".concat(A,"-status-").concat(S),!!S),g(c,"".concat(A,"-status-").concat(C),E(C)),c)),Y={};if(C&&!E(C)&&(Y.background=C),!x&&n()){var Z=p(),J=Z&&Z.color;return r.createElement("span",h({},Object(o.a)(k,P),{className:b(A,u),style:Z}),r.createElement("span",{className:M,style:Y}),r.createElement("span",{style:{color:J},className:"".concat(A,"-status-text")},j))}return r.createElement("span",h({},Object(o.a)(k,P),{className:b(A,u)}),x,r.createElement(a.a,{component:"",showProp:"data-show",transitionName:x?"".concat(A,"-zoom"):"",transitionAppear:!0},T),I)};return r.createElement(s.a,null,O)};w.defaultProps={count:null,showZero:!1,dot:!1,overflowCount:99};e.a=w},513:function(t,e,n){}}]);