!function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],f=0,s=[];f<c.length;f++)o=c[f],u[o]&&s.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(d&&d(t);s.length;)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==u[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},u={1:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{4:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r=e+"."+{4:"9f7c1cbe1651c92671f6",5:"31d6cfe0d16ae931b73c",6:"31d6cfe0d16ae931b73c",7:"31d6cfe0d16ae931b73c",8:"31d6cfe0d16ae931b73c"}[e]+".css",u=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=(d=a[i]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===u))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){var d;if((l=(d=f[i]).getAttribute("data-href"))===r||l===u)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete o[e],s.parentNode.removeChild(s),n(a)},s.href=u,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){o[e]=0}));var n=u[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=u[e]=[t,r]});t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+""+({}[e]||e)+"."+{4:"18176deac8eaa2ca59c0",5:"728ff48cf675fc3a7eec",6:"ff9324c27b1638effc6e",7:"2c8500c6a262d8d16ab7",8:"fc69e5f7d99ce8e4299c"}[e]+".js"}(e),a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}u[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;a.push([157,0,3]),n()}({145:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a});var r=n(155),o=n.n(r),u="userInfo/GET_USER_INFO";function a(){return function(e){o.a.post("/api/user").then(function(t){var n=JSON.parse(t.request.responseText);e({type:u,payload:n})})}}},157:function(e,t,n){n(158),e.exports=n(378)},378:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),u=n(107),a=n.n(u),c=n(34),i=n(48),l=n(55),f=n.n(l),d=function(){return o.a.createElement("div",null,"Loading...")},s=f()({loader:function(){return n.e(7).then(n.bind(null,389))},loading:d,timeout:1e4}),p=f()({loader:function(){return n.e(4).then(n.bind(null,390))},loading:d,timeout:1e4}),m=f()({loader:function(){return n.e(6).then(n.bind(null,391))},loading:d,timeout:1e4}),h=f()({loader:function(){return n.e(5).then(n.bind(null,392))},loading:d,timeout:1e4}),g=f()({loader:function(){return n.e(8).then(n.bind(null,393))},loading:d,timeout:1e4}),v=function(){return o.a.createElement(i.g,null,o.a.createElement(i.d,{exact:!0,path:"/",component:s}),o.a.createElement(i.d,{path:"/page",component:p}),o.a.createElement(i.d,{path:"/counter",component:m}),o.a.createElement(i.d,{path:"/userinfo",component:h}),o.a.createElement(i.d,{component:g}))},b=n(76),E=n(37),y=n(153),w=n(75),O={count:0};var j=n(154),T=n.n(j),k=n(145),P={userInfo:{}};var S=Object(E.createStore)(Object(E.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;switch((arguments.length>1?arguments[1]:void 0).type){case w.b:return{count:e.count+1};case w.a:return{count:e.count-1};case w.c:return{count:0};default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.a:return T()({},e,{userInfo:t.payload});default:return e}}}),Object(E.applyMiddleware)(y.a)),x=n(156);n.n(x).a.mock("/api/user",{name:"@cname",intro:"@word(20)"}),a.a.render(o.a.createElement(b.Provider,{store:S},o.a.createElement(c.BrowserRouter,null,o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/"},"首页")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/page"},"Page")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/counter"},"Counter")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/userinfo"},"UserInfo"))))},null),v())),document.getElementById("app"))},75:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return i});var r="counter/INCREMENT",o="counter/DECREMENT",u="counter/RESET";function a(){return{type:r}}function c(){return{type:o}}function i(){return{type:u}}}});