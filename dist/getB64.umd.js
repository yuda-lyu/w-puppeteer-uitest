/*!
 * getB64 v1.0.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("puppeteer")):"function"==typeof define&&define.amd?define(["puppeteer"],e):(t=t||self).getB64=e(t.puppeteer)}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=t&&t.hasOwnProperty("default")?t.default:t;var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var r=function(t){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=F(i,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function d(){}function x(){}function b(){}var g={};g[i]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(L([])));w&&w!==n&&o.call(w,i)&&(g=w);var _=b.prototype=d.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){var r;this._invoke=function(n,a){function i(){return new Promise((function(r,i){!function r(n,a,i,u){var c=f(t[n],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===e(l)&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}(n,a,r,i)}))}return r=r?r.then(i,i):i()}}function F(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,F(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}return x.prototype=_.constructor=b,b.constructor=x,b[c]=x.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[u]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,n,o){var a=new j(s(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),_[c]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function o(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var a=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function u(t){o(i,n,a,u,c,"next",t)}function c(t){o(i,n,a,u,c,"throw",t)}u(void 0)}))}},i=Array.isArray,u="object"==e(r)&&r&&r.Object===Object&&r,c="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),f=s.Symbol,l=Object.prototype,h=l.hasOwnProperty,p=l.toString,v=f?f.toStringTag:void 0;var y=function(t){var e=h.call(t,v),r=t[v];try{t[v]=void 0;var n=!0}catch(t){}var o=p.call(t);return n&&(e?t[v]=r:delete t[v]),o},d=Object.prototype.toString;var x=function(t){return d.call(t)},b="[object Null]",g="[object Undefined]",m=f?f.toStringTag:void 0;var w=function(t){return null==t?void 0===t?g:b:m&&m in Object(t)?y(t):x(t)};var _=function(t){return null!=t&&"object"==e(t)},k="[object Symbol]";var j=function(t){return"symbol"==e(t)||_(t)&&w(t)==k},F=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var S=function(t,r){if(i(t))return!1;var n=e(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!j(t))||(O.test(t)||!F.test(t)||null!=r&&t in Object(r))};var E=function(t){var r=e(t);return null!=t&&("object"==r||"function"==r)},L="[object AsyncFunction]",P="[object Function]",$="[object GeneratorFunction]",N="[object Proxy]";var z,A=function(t){if(!E(t))return!1;var e=w(t);return e==P||e==$||e==L||e==N},T=s["__core-js_shared__"],C=(z=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var G=function(t){return!!C&&C in t},B=Function.prototype.toString;var I=function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""},M=/^\[object .+?Constructor\]$/,R=Function.prototype,U=Object.prototype,V=R.toString,Y=U.hasOwnProperty,q=RegExp("^"+V.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var D=function(t){return!(!E(t)||G(t))&&(A(t)?q:M).test(I(t))};var H=function(t,e){return null==t?void 0:t[e]};var J=function(t,e){var r=H(t,e);return D(r)?r:void 0},K=J(Object,"create");var Q=function(){this.__data__=K?K(null):{},this.size=0};var W=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},X="__lodash_hash_undefined__",Z=Object.prototype.hasOwnProperty;var tt=function(t){var e=this.__data__;if(K){var r=e[t];return r===X?void 0:r}return Z.call(e,t)?e[t]:void 0},et=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;return K?void 0!==e[t]:et.call(e,t)},nt="__lodash_hash_undefined__";var ot=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=K&&void 0===e?nt:e,this};function at(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}at.prototype.clear=Q,at.prototype.delete=W,at.prototype.get=tt,at.prototype.has=rt,at.prototype.set=ot;var it=at;var ut=function(){this.__data__=[],this.size=0};var ct=function(t,e){return t===e||t!=t&&e!=e};var st=function(t,e){for(var r=t.length;r--;)if(ct(t[r][0],e))return r;return-1},ft=Array.prototype.splice;var lt=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():ft.call(e,r,1),--this.size,!0)};var ht=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]};var pt=function(t){return st(this.__data__,t)>-1};var vt=function(t,e){var r=this.__data__,n=st(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}yt.prototype.clear=ut,yt.prototype.delete=lt,yt.prototype.get=ht,yt.prototype.has=pt,yt.prototype.set=vt;var dt=yt,xt=J(s,"Map");var bt=function(){this.size=0,this.__data__={hash:new it,map:new(xt||dt),string:new it}};var gt=function(t){var r=e(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var mt=function(t,e){var r=t.__data__;return gt(e)?r["string"==typeof e?"string":"hash"]:r.map};var wt=function(t){var e=mt(this,t).delete(t);return this.size-=e?1:0,e};var _t=function(t){return mt(this,t).get(t)};var kt=function(t){return mt(this,t).has(t)};var jt=function(t,e){var r=mt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Ft(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ft.prototype.clear=bt,Ft.prototype.delete=wt,Ft.prototype.get=_t,Ft.prototype.has=kt,Ft.prototype.set=jt;var Ot=Ft,St="Expected a function";function Et(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(St);var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Et.Cache||Ot),r}Et.Cache=Ot;var Lt=Et,Pt=500;var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nt=/\\(\\)?/g,zt=function(t){var e=Lt(t,(function(t){return r.size===Pt&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace($t,(function(t,r,n,o){e.push(n?o.replace(Nt,"$1"):r||t)})),e}));var At=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},Tt=1/0,Ct=f?f.prototype:void 0,Gt=Ct?Ct.toString:void 0;var Bt=function t(e){if("string"==typeof e)return e;if(i(e))return At(e,t)+"";if(j(e))return Gt?Gt.call(e):"";var r=e+"";return"0"==r&&1/e==-Tt?"-0":r};var It=function(t){return null==t?"":Bt(t)};var Mt=function(t,e){return i(t)?t:S(t,e)?[t]:zt(It(t))},Rt=1/0;var Ut=function(t){if("string"==typeof t||j(t))return t;var e=t+"";return"0"==e&&1/t==-Rt?"-0":e};var Vt=function(t,e){for(var r=0,n=(e=Mt(e,t)).length;null!=t&&r<n;)t=t[Ut(e[r++])];return r&&r==n?t:void 0};var Yt=function(t,e,r){var n=null==t?void 0:Vt(t,e);return void 0===n?r:n},qt=NaN,Dt=/^\s+|\s+$/g,Ht=/^[-+]0x[0-9a-f]+$/i,Jt=/^0b[01]+$/i,Kt=/^0o[0-7]+$/i,Qt=parseInt;var Wt=function(t){if("number"==typeof t)return t;if(j(t))return qt;if(E(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=E(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Dt,"");var r=Jt.test(t);return r||Kt.test(t)?Qt(t.slice(2),r?2:8):Ht.test(t)?qt:+t},Xt=1/0,Zt=17976931348623157e292;var te=function(t){return t?(t=Wt(t))===Xt||t===-Xt?(t<0?-1:1)*Zt:t==t?t:0:0===t?t:0};var ee=function(t){var e=te(t),r=e%1;return e==e?r?e-r:e:0};var re=function(t){return"number"==typeof t&&t==ee(t)};function ne(t){return"[object String]"===Object.prototype.toString.call(t)}function oe(t){var e=!1;return!function(t){return!(!ne(t)||""===t)}(t)?function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0):e=!isNaN(Number(t)),e}function ae(t){return oe(t)?te(t):0}function ie(t){return!!oe(t)&&(t=ae(t),re(t))}function ue(t){return"[object Object]"===Object.prototype.toString.call(t)}function ce(t){return"[object Array]"===Object.prototype.toString.call(t)}var se="[object Boolean]";var fe=function(t){return!0===t||!1===t||_(t)&&w(t)==se};function le(t){return fe(t)}function he(t){return!!function(t){return"[object Undefined]"===Object.prototype.toString.call(t)}(t)||(!!function(t){return"[object Null]"===Object.prototype.toString.call(t)}(t)||(!!function(t){if(ue(t)){for(var e in t)return!1;return!0}return!1}(t)||(!!function(t){return!(!ne(t)||""!==t)}(t)||!!function(t){return!!ce(t)&&0===t.length}(t))))}var pe=s.isFinite,ve=Math.min;var ye=function(t){var e=Math[t];return function(t,r){if(t=Wt(t),(r=null==r?0:ve(ee(r),292))&&pe(t)){var n=(It(t)+"e").split("e"),o=e(n[0]+"e"+(+n[1]+r));return+((n=(It(o)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}("round");function de(t){if(!oe(t))return 0;t=ae(t);var e=ye(t);return"0"===String(e)?0:e}var xe=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+e];return a};var be=function(t,e,r){var n=null==t?0:t.length;return n?(e=r||void 0===e?1:ee(e),xe(t,e<0?0:e,n)):[]};function ge(t,e){var r,n,o,a,i,u=((o=new Promise((function(){r=arguments[0],n=arguments[1]}))).resolve=r,o.reject=n,o);if(!ce(t))return u.reject("rs is not array"),u;a=e,"[object Function]"!==(i=Object.prototype.toString.call(a))&&"[object AsyncFunction]"!==i&&(e=function(t){return t});var c=-1,s=[];return t.reduce((function(t,r){return t.then((function(t){return s.push(t),e(r,c+=1)}))}),Promise.resolve()).then((function(t){s.push(t),s=be(s),u.resolve(s)})).catch((function(t){u.reject(t)})),u}function me(){return(me=a(n.mark((function e(r){var o,i,u,c,s,f,l,h,p,v,y,d=arguments;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=function(){return(v=a(n.mark((function t(e){var r,o,a,i,u=arguments;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(r=de(r=u.length>1&&void 0!==u[1]?u[1]:0))){t.next=11;break}return t.next=5,h.$(e);case 5:if(!he(o=t.sent)){t.next=9;break}return console.log("page.$ get no result: "+e),t.abrupt("return",null);case 9:t.next=18;break;case 11:return t.next=13,h.$$(e);case 13:if(0!==(a=t.sent).length){t.next=17;break}return console.log("page.$$ get no result: "+e),t.abrupt("return",null);case 17:o=r<0?a[a.length+r]:a[r];case 18:if(!he(o)){t.next=21;break}return console.log("invalid ele: "+e),t.abrupt("return",null);case 21:if(!he(o.boundingBox)){t.next=24;break}return console.log("invalid ele.boundingBox: "+e),t.abrupt("return",null);case 24:return t.next=26,o.boundingBox();case 26:return(i=t.sent).cx=i.x+i.width/2,i.cy=i.y+i.height/2,i.ele=o,t.abrupt("return",i);case 31:case"end":return t.stop()}}),t)})))).apply(this,arguments)},p=function(t){return v.apply(this,arguments)},o=d.length>1&&void 0!==d[1]?d[1]:{},le(i=Yt(o,"headless"))||(i=!0),ue(u=Yt(o,"viewport"))||(u={x:0,y:0,width:800,height:600}),ce(c=Yt(o,"actions"))||(c=[]),ie(s=Yt(o,"waitsec"))||(s=5),f={headless:i,slowMo:20},e.next=14,t.launch(f);case 14:return l=e.sent,e.next=17,l.newPage();case 17:return h=e.sent,e.next=20,h.goto(r);case 20:return e.next=22,h.setViewport(u);case 22:return e.next=24,h.waitFor(1e3*s);case 24:return e.next=26,ge(c,function(){var t=a(n.mark((function t(e){var r,o,a,i,u,c,s,f;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("wait"!==e.mode){t.next=5;break}return t.next=3,h.waitFor(e.time);case 3:t.next=197;break;case 5:if("resize"!==e.mode){t.next=14;break}return t.next=8,h.waitFor(300);case 8:return t.next=10,h.setViewport({x:0,y:0,width:e.width,height:e.height});case 10:return t.next=12,h.waitFor(300);case 12:t.next=197;break;case 14:if("move"!==e.mode){t.next=23;break}return t.next=17,h.waitFor(300);case 17:return t.next=19,h.mouse.move(e.x1,e.y1);case 19:return t.next=21,h.waitFor(300);case 21:t.next=197;break;case 23:if("elemove"!==e.mode){t.next=36;break}return t.next=26,h.waitFor(300);case 26:return t.next=28,p(e.selector,e.nth);case 28:if(!(r=t.sent)){t.next=34;break}return t.next=32,h.mouse.move(r.cx,r.cy);case 32:return t.next=34,h.waitFor(300);case 34:t.next=197;break;case 36:if("elehover"!==e.mode){t.next=45;break}return t.next=39,h.waitFor(300);case 39:return t.next=41,h.hover(e.selector);case 41:return t.next=43,h.waitFor(300);case 43:t.next=197;break;case 45:if("drag"!==e.mode){t.next=64;break}return t.next=48,h.waitFor(300);case 48:return t.next=50,h.mouse.move(e.x1,e.y1);case 50:return t.next=52,h.mouse.down();case 52:return t.next=54,h.waitFor(300);case 54:return t.next=56,h.mouse.move(e.x2,e.y2,{steps:50});case 56:return t.next=58,h.waitFor(300);case 58:return t.next=60,h.mouse.up();case 60:return t.next=62,h.waitFor(300);case 62:t.next=197;break;case 64:if("eledrag"!==e.mode){t.next=87;break}return t.next=67,h.waitFor(300);case 67:return t.next=69,p(e.selector,e.nth);case 69:if(!(o=t.sent)){t.next=85;break}return t.next=73,h.mouse.move(o.cx,o.cy);case 73:return t.next=75,h.mouse.down();case 75:return t.next=77,h.waitFor(300);case 77:return t.next=79,h.mouse.move(o.cx+e.shiftx,o.cy+e.shifty,{steps:50});case 79:return t.next=81,h.waitFor(300);case 81:return t.next=83,h.mouse.up();case 83:return t.next=85,h.waitFor(300);case 85:t.next=197;break;case 87:if("click"!==e.mode){t.next=100;break}return t.next=90,h.waitFor(300);case 90:return t.next=92,h.mouse.move(e.x1,e.y1);case 92:return t.next=94,h.mouse.down();case 94:return t.next=96,h.mouse.up();case 96:return t.next=98,h.waitFor(300);case 98:t.next=197;break;case 100:if("eleclick"!==e.mode){t.next=113;break}return t.next=103,h.waitFor(300);case 103:return t.next=105,p(e.selector,e.nth);case 105:if(!(a=t.sent)){t.next=111;break}return t.next=109,a.ele.click();case 109:return t.next=111,h.waitFor(300);case 111:t.next=197;break;case 113:if("dbclick"!==e.mode){t.next=122;break}return t.next=116,h.waitFor(300);case 116:return t.next=118,h.mouse.click(e.x1,e.y1,{clickCount:2});case 118:return t.next=120,h.waitFor(300);case 120:t.next=197;break;case 122:if("eledbclick"!==e.mode){t.next=135;break}return t.next=125,h.waitFor(300);case 125:return t.next=127,p(e.selector,e.nth);case 127:if(!(i=t.sent)){t.next=133;break}return t.next=131,i.ele.click({clickCount:2});case 131:return t.next=133,h.waitFor(300);case 133:t.next=197;break;case 135:if("type"!==e.mode){t.next=147;break}return t.next=138,h.waitFor(300);case 138:return t.next=140,h.keyboard.type(e.str,{delay:50});case 140:if(e.noEnter){t.next=143;break}return t.next=143,h.keyboard.type(String.fromCharCode(13));case 143:return t.next=145,h.waitFor(300);case 145:t.next=197;break;case 147:if("eletype"!==e.mode){t.next=167;break}return t.next=150,h.waitFor(300);case 150:return t.next=152,p(e.selector,e.nth);case 152:if(!(u=t.sent)){t.next=165;break}return t.next=156,u.ele.click();case 156:return t.next=158,h.waitFor(50);case 158:return t.next=160,h.keyboard.type(e.str,{delay:50});case 160:if(e.noEnter){t.next=163;break}return t.next=163,h.keyboard.type(String.fromCharCode(13));case 163:return t.next=165,h.waitFor(300);case 165:t.next=197;break;case 167:if("keypress"!==e.mode){t.next=183;break}return t.next=170,h.waitFor(300);case 170:(c=de(e.count))<=0&&(c=1),s=0;case 173:if(!(s<c)){t.next=179;break}return t.next=176,h.keyboard.press(e.key);case 176:s++,t.next=173;break;case 179:return t.next=181,h.waitFor(300);case 181:t.next=197;break;case 183:if("elefocus"!==e.mode){t.next=196;break}return t.next=186,h.waitFor(300);case 186:return t.next=188,p(e.selector,e.nth);case 188:if(!(f=t.sent)){t.next=194;break}return t.next=192,f.ele.focus();case 192:return t.next=194,h.waitFor(300);case 194:t.next=197;break;case 196:console.log("mode is unrecognized: "+e.mode);case 197:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 26:return e.next=28,h.waitFor(2e3);case 28:return e.next=30,h.screenshot({encoding:"base64"});case 30:return y=e.sent,e.next=33,h.close();case 33:return e.next=35,l.close();case 35:return e.abrupt("return",y);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(t){return me.apply(this,arguments)}}));
//# sourceMappingURL=getB64.umd.js.map
