/*!
 * expTest v1.0.35
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("fs"),require("puppeteer"),require("jimp")):"function"==typeof define&&define.amd?define(["fs","puppeteer","jimp"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).expTest=e(t.fs,t.puppeteer,t.jimp)}(this,(function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(t),a=n(e),i=n(r);function u(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(t){var e={exports:{}};return t(e,e.exports),e.exports}var p=l((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=O(i,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?v:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",y={};function d(){}function b(){}function x(){}var g={};g[a]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(L([])));w&&w!==r&&n.call(w,a)&&(g=w);var _=x.prototype=d.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t,e){function r(o,a,i,u){var c=f(t[o],t,a);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"===s(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(p).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function L(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return b.prototype=_.constructor=x,x.constructor=b,x[u]=b.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),_[u]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})),h=p,v=Array.isArray,y="object"==s(f)&&f&&f.Object===Object&&f,d="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,b=y||d||Function("return this")(),x=b.Symbol,g=Object.prototype,m=g.hasOwnProperty,w=g.toString,_=x?x.toStringTag:void 0;var j=function(t){var e=m.call(t,_),r=t[_];try{t[_]=void 0;var n=!0}catch(t){}var o=w.call(t);return n&&(e?t[_]=r:delete t[_]),o},k=Object.prototype.toString;var O=function(t){return k.call(t)},F=x?x.toStringTag:void 0;var S=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":F&&F in Object(t)?j(t):O(t)};var E=function(t){return null!=t&&"object"==s(t)};var L=function(t){return"symbol"==s(t)||E(t)&&"[object Symbol]"==S(t)},A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var T=function(t,e){if(v(t))return!1;var r=s(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!L(t))||(P.test(t)||!A.test(t)||null!=e&&t in Object(e))};var N=function(t){var e=s(t);return null!=t&&("object"==e||"function"==e)};var $,C=function(t){if(!N(t))return!1;var e=S(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},z=b["__core-js_shared__"],I=($=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"";var M=function(t){return!!I&&I in t},B=Function.prototype.toString;var G=function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""},R=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,V=U.toString,D=q.hasOwnProperty,W=RegExp("^"+V.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!N(t)||M(t))&&(C(t)?W:R).test(G(t))};var H=function(t,e){return null==t?void 0:t[e]};var J=function(t,e){var r=H(t,e);return Y(r)?r:void 0},K=J(Object,"create");var Q=function(){this.__data__=K?K(null):{},this.size=0};var X=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Z=Object.prototype.hasOwnProperty;var tt=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Z.call(e,t)?e[t]:void 0},et=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;return K?void 0!==e[t]:et.call(e,t)};var nt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this};function ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ot.prototype.clear=Q,ot.prototype.delete=X,ot.prototype.get=tt,ot.prototype.has=rt,ot.prototype.set=nt;var at=ot;var it=function(){this.__data__=[],this.size=0};var ut=function(t,e){return t===e||t!=t&&e!=e};var ct=function(t,e){for(var r=t.length;r--;)if(ut(t[r][0],e))return r;return-1},st=Array.prototype.splice;var ft=function(t){var e=this.__data__,r=ct(e,t);return!(r<0)&&(r==e.length-1?e.pop():st.call(e,r,1),--this.size,!0)};var lt=function(t){var e=this.__data__,r=ct(e,t);return r<0?void 0:e[r][1]};var pt=function(t){return ct(this.__data__,t)>-1};var ht=function(t,e){var r=this.__data__,n=ct(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}vt.prototype.clear=it,vt.prototype.delete=ft,vt.prototype.get=lt,vt.prototype.has=pt,vt.prototype.set=ht;var yt=vt,dt=J(b,"Map");var bt=function(){this.size=0,this.__data__={hash:new at,map:new(dt||yt),string:new at}};var xt=function(t){var e=s(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var gt=function(t,e){var r=t.__data__;return xt(e)?r["string"==typeof e?"string":"hash"]:r.map};var mt=function(t){var e=gt(this,t).delete(t);return this.size-=e?1:0,e};var wt=function(t){return gt(this,t).get(t)};var _t=function(t){return gt(this,t).has(t)};var jt=function(t,e){var r=gt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}kt.prototype.clear=bt,kt.prototype.delete=mt,kt.prototype.get=wt,kt.prototype.has=_t,kt.prototype.set=jt;var Ot=kt;function Ft(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Ft.Cache||Ot),r}Ft.Cache=Ot;var St=Ft;var Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/\\(\\)?/g,At=function(t){var e=St(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Et,(function(t,r,n,o){e.push(n?o.replace(Lt,"$1"):r||t)})),e}));var Pt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},Tt=x?x.prototype:void 0,Nt=Tt?Tt.toString:void 0;var $t=function t(e){if("string"==typeof e)return e;if(v(e))return Pt(e,t)+"";if(L(e))return Nt?Nt.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r};var Ct=function(t){return null==t?"":$t(t)};var zt=function(t,e){return v(t)?t:T(t,e)?[t]:At(Ct(t))};var It=function(t){if("string"==typeof t||L(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Mt=function(t,e){for(var r=0,n=(e=zt(e,t)).length;null!=t&&r<n;)t=t[It(e[r++])];return r&&r==n?t:void 0};var Bt=function(t,e,r){var n=null==t?void 0:Mt(t,e);return void 0===n?r:n},Gt=/\s/;var Rt=function(t){for(var e=t.length;e--&&Gt.test(t.charAt(e)););return e},Ut=/^\s+/;var qt=function(t){return t?t.slice(0,Rt(t)+1).replace(Ut,""):t},Vt=/^[-+]0x[0-9a-f]+$/i,Dt=/^0b[01]+$/i,Wt=/^0o[0-7]+$/i,Yt=parseInt;var Ht=function(t){if("number"==typeof t)return t;if(L(t))return NaN;if(N(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=N(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=qt(t);var r=Dt.test(t);return r||Wt.test(t)?Yt(t.slice(2),r?2:8):Vt.test(t)?NaN:+t},Jt=1/0;var Kt=function(t){return t?(t=Ht(t))===Jt||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Qt=function(t){var e=Kt(t),r=e%1;return e==e?r?e-r:e:0};var Xt=function(t){return"number"==typeof t&&t==Qt(t)};function Zt(t){return"[object String]"===Object.prototype.toString.call(t)}function te(t){var e=!1;return!function(t){return!(!Zt(t)||""===t)}(t)?function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0):e=!isNaN(Number(t)),e}function ee(t){return te(t)?Kt(t):0}function re(t){return!!te(t)&&(t=ee(t),Xt(t))}var ne=b.isFinite,oe=Math.min;var ae=function(t){var e=Math[t];return function(t,r){if(t=Ht(t),(r=null==r?0:oe(Qt(r),292))&&ne(t)){var n=(Ct(t)+"e").split("e"),o=e(n[0]+"e"+(+n[1]+r));return+((n=(Ct(o)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}("round");function ie(t){if(!te(t))return 0;t=ee(t);var e=ae(t);return"0"===String(e)?0:e}function ue(t){return!!re(t)&&ie(t)>0}var ce=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var se=function(t){return function(e,r,n){for(var o=-1,a=Object(e),i=n(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===r(a[c],c,a))break}return e}}();var fe=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var le=function(t){return E(t)&&"[object Arguments]"==S(t)},pe=Object.prototype,he=pe.hasOwnProperty,ve=pe.propertyIsEnumerable,ye=le(function(){return arguments}())?le:function(t){return E(t)&&he.call(t,"callee")&&!ve.call(t,"callee")},de=ye;var be=function(){return!1},xe=l((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?b.Buffer:void 0,a=(o?o.isBuffer:void 0)||be;t.exports=a})),ge=/^(?:0|[1-9]\d*)$/;var me=function(t,e){var r=s(t);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&ge.test(t))&&t>-1&&t%1==0&&t<e};var we=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},_e={};_e["[object Float32Array]"]=_e["[object Float64Array]"]=_e["[object Int8Array]"]=_e["[object Int16Array]"]=_e["[object Int32Array]"]=_e["[object Uint8Array]"]=_e["[object Uint8ClampedArray]"]=_e["[object Uint16Array]"]=_e["[object Uint32Array]"]=!0,_e["[object Arguments]"]=_e["[object Array]"]=_e["[object ArrayBuffer]"]=_e["[object Boolean]"]=_e["[object DataView]"]=_e["[object Date]"]=_e["[object Error]"]=_e["[object Function]"]=_e["[object Map]"]=_e["[object Number]"]=_e["[object Object]"]=_e["[object RegExp]"]=_e["[object Set]"]=_e["[object String]"]=_e["[object WeakMap]"]=!1;var je=function(t){return E(t)&&we(t.length)&&!!_e[S(t)]};var ke=function(t){return function(e){return t(e)}},Oe=l((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&y.process,a=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),Fe=Oe&&Oe.isTypedArray,Se=Fe?ke(Fe):je,Ee=Object.prototype.hasOwnProperty;var Le=function(t,e){var r=v(t),n=!r&&de(t),o=!r&&!n&&xe(t),a=!r&&!n&&!o&&Se(t),i=r||n||o||a,u=i?fe(t.length,String):[],c=u.length;for(var s in t)!e&&!Ee.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||me(s,c))||u.push(s);return u},Ae=Object.prototype;var Pe=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ae)};var Te=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Ne=Object.prototype.hasOwnProperty;var $e=function(t){if(!Pe(t))return Te(t);var e=[];for(var r in Object(t))Ne.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Ce=function(t){return null!=t&&we(t.length)&&!C(t)};var ze=function(t){return Ce(t)?Le(t):$e(t)};var Ie=function(t,e){return function(r,n){if(null==r)return r;if(!Ce(r))return t(r,n);for(var o=r.length,a=e?o:-1,i=Object(r);(e?a--:++a<o)&&!1!==n(i[a],a,i););return r}}((function(t,e){return t&&se(t,e,ze)}));var Me=function(t){return t};var Be=function(t){return"function"==typeof t?t:Me};var Ge=function(t,e){return(v(t)?ce:Ie)(t,Be(e))},Re=J(b,"DataView"),Ue=J(b,"Promise"),qe=J(b,"Set"),Ve=J(b,"WeakMap"),De="[object Map]",We="[object Promise]",Ye="[object Set]",He="[object WeakMap]",Je="[object DataView]",Ke=G(Re),Qe=G(dt),Xe=G(Ue),Ze=G(qe),tr=G(Ve),er=S;(Re&&er(new Re(new ArrayBuffer(1)))!=Je||dt&&er(new dt)!=De||Ue&&er(Ue.resolve())!=We||qe&&er(new qe)!=Ye||Ve&&er(new Ve)!=He)&&(er=function(t){var e=S(t),r="[object Object]"==e?t.constructor:void 0,n=r?G(r):"";if(n)switch(n){case Ke:return Je;case Qe:return De;case Xe:return We;case Ze:return Ye;case tr:return He}return e});var rr=er;var nr=function(t){return"string"==typeof t||!v(t)&&E(t)&&"[object String]"==S(t)};var or=function(t){return function(e){return null==e?void 0:e[t]}}("length"),ar=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var ir=function(t){return ar.test(t)},ur="[\\ud800-\\udfff]",cr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",sr="\\ud83c[\\udffb-\\udfff]",fr="[^\\ud800-\\udfff]",lr="(?:\\ud83c[\\udde6-\\uddff]){2}",pr="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="(?:"+cr+"|"+sr+")"+"?",vr="[\\ufe0e\\ufe0f]?",yr=vr+hr+("(?:\\u200d(?:"+[fr,lr,pr].join("|")+")"+vr+hr+")*"),dr="(?:"+[fr+cr+"?",cr,lr,pr,ur].join("|")+")",br=RegExp(sr+"(?="+sr+")|"+dr+yr,"g");var xr=function(t){for(var e=br.lastIndex=0;br.test(t);)++e;return e};var gr=function(t){return ir(t)?xr(t):or(t)};var mr=function(t){if(null==t)return 0;if(Ce(t))return nr(t)?gr(t):t.length;var e=rr(t);return"[object Map]"==e||"[object Set]"==e?t.size:$e(t).length};var wr=function(t,e){return Pt(e,(function(e){return t[e]}))};var _r=function(t){return null==t?[]:wr(t,ze(t))};function jr(){var t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}function kr(t){return"[object Array]"===Object.prototype.toString.call(t)}function Or(t){return"[object Object]"===Object.prototype.toString.call(t)}function Fr(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}var Sr=l((function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}function o(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function a(t,e,n,a,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var u=new o(n,a||t,i),c=r?r+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],u]:t._events[c].push(u):(t._events[c]=u,t._eventsCount++),t}function i(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function u(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),u.prototype.eventNames=function(){var t,n,o=[];if(0===this._eventsCount)return o;for(n in t=this._events)e.call(t,n)&&o.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},u.prototype.listeners=function(t){var e=r?r+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,a=n.length,i=new Array(a);o<a;o++)i[o]=n[o].fn;return i},u.prototype.listenerCount=function(t){var e=r?r+t:t,n=this._events[e];return n?n.fn?1:n.length:0},u.prototype.emit=function(t,e,n,o,a,i){var u=r?r+t:t;if(!this._events[u])return!1;var c,s,f=this._events[u],l=arguments.length;if(f.fn){switch(f.once&&this.removeListener(t,f.fn,void 0,!0),l){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,e),!0;case 3:return f.fn.call(f.context,e,n),!0;case 4:return f.fn.call(f.context,e,n,o),!0;case 5:return f.fn.call(f.context,e,n,o,a),!0;case 6:return f.fn.call(f.context,e,n,o,a,i),!0}for(s=1,c=new Array(l-1);s<l;s++)c[s-1]=arguments[s];f.fn.apply(f.context,c)}else{var p,h=f.length;for(s=0;s<h;s++)switch(f[s].once&&this.removeListener(t,f[s].fn,void 0,!0),l){case 1:f[s].fn.call(f[s].context);break;case 2:f[s].fn.call(f[s].context,e);break;case 3:f[s].fn.call(f[s].context,e,n);break;case 4:f[s].fn.call(f[s].context,e,n,o);break;default:if(!c)for(p=1,c=new Array(l-1);p<l;p++)c[p-1]=arguments[p];f[s].fn.apply(f[s].context,c)}}return!0},u.prototype.on=function(t,e,r){return a(this,t,e,r,!1)},u.prototype.once=function(t,e,r){return a(this,t,e,r,!0)},u.prototype.removeListener=function(t,e,n,o){var a=r?r+t:t;if(!this._events[a])return this;if(!e)return i(this,a),this;var u=this._events[a];if(u.fn)u.fn!==e||o&&!u.once||n&&u.context!==n||i(this,a);else{for(var c=0,s=[],f=u.length;c<f;c++)(u[c].fn!==e||o&&!u[c].once||n&&u[c].context!==n)&&s.push(u[c]);s.length?this._events[a]=1===s.length?s[0]:s:i(this,a)}return this},u.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&i(this,e)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,t.exports=u}));function Er(){return new Sr}function Lr(t){return!!re(t)&&ie(t)<0}function Ar(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=0,r=[];Lr(t)&&(t=0),t=ie(t);var n=Er();function o(){if(r.length>0)return e+=1,r.splice(0,1)[0];return null}function a(){(e-=1)<0&&(e=0),r.length>0&&n.emit("message",r)}function i(o){r.push(o),(t<=0||e<t)&&n.emit("message",r)}function u(){e=0,r=[]}return n.get=o,n.cb=a,n.push=i,n.clear=u,n}function Pr(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n={},o=!1,a=jr();if(!kr(t)&&!Or(t))return a.reject("rs is not array or object"),a;var i=!1;if(Or(t)){i=!0;var u=[];Ge(t,(function(t,e){u.push({k:e,v:t})})),t=u}var c=Ar(r);return c.on("message",(function(r){if(!o){var u,s=c.get();if(Fr(e)){var f=s.key,l=s.value;i&&(f=s.value.k,l=s.value.v),u=e(l,f)}else u=s.value;u.then((function(t){n[s.key]=t})).catch((function(t){o=!0,c.clear(),a.reject(t)})).finally((function(){c.cb(),mr(n)===t.length&&a.resolve(_r(n))}))}})),Ge(t,(function(t,e){c.push({key:e,value:t})})),a}var Tr=function(t){return!0===t||!1===t||E(t)&&"[object Boolean]"==S(t)};function Nr(t){return Tr(t)}function $r(t){return!!function(t){return"[object Undefined]"===Object.prototype.toString.call(t)}(t)||(!!function(t){return"[object Null]"===Object.prototype.toString.call(t)}(t)||(!!function(t){if(Or(t)){for(var e in t)return!1;return!0}return!1}(t)||(!!function(t){return!(!Zt(t)||""!==t)}(t)||!!function(t){return!!kr(t)&&0===t.length}(t))))}var Cr=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+e];return a};var zr=function(t,e,r){var n=null==t?0:t.length;return n?(e=r||void 0===e?1:Qt(e),Cr(t,e<0?0:e,n)):[]};function Ir(t,e){var r=jr();if(!kr(t)&&!Or(t))return r.reject("rs is not array or object"),r;var n=!1;if(Or(t)){n=!0;var o=[];Ge(t,(function(t,e){o.push({k:e,v:t})})),t=o}Fr(e)||(e=function(t){return t});var a=-1,i=[];return t.reduce((function(t,r){return t.then((function(t){i.push(t);var o=a+=1,u=r;return n&&(o=r.k,u=r.v),Fr(e)?e(u,o):u}))}),Promise.resolve()).then((function(t){i.push(t),i=zr(i),r.resolve(i)})).catch((function(t){r.reject(t)})),r}function Mr(t){return Br.apply(this,arguments)}function Br(){return Br=c(h.mark((function t(e){var r,n,o,i,u,s,f,l,p,v,y,d=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){return v=c(h.mark((function t(e){var r,n,o,a,i=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(r=ie(r=i.length>1&&void 0!==i[1]?i[1]:0))){t.next=11;break}return t.next=5,l.$(e);case 5:if(!$r(n=t.sent)){t.next=9;break}return console.log("page.$ get no result: "+e),t.abrupt("return",null);case 9:t.next=18;break;case 11:return t.next=13,l.$$(e);case 13:if(0!==(o=t.sent).length){t.next=17;break}return console.log("page.$$ get no result: "+e),t.abrupt("return",null);case 17:n=r<0?o[o.length+r]:o[r];case 18:if(!$r(n)){t.next=21;break}return console.log("invalid ele: "+e),t.abrupt("return",null);case 21:if(!$r(n.boundingBox)){t.next=24;break}return console.log("invalid ele.boundingBox: "+e),t.abrupt("return",null);case 24:return t.next=26,n.boundingBox();case 26:return(a=t.sent).cx=a.x+a.width/2,a.cy=a.y+a.height/2,a.ele=n,t.abrupt("return",a);case 31:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)},p=function(t){return v.apply(this,arguments)},r=d.length>1&&void 0!==d[1]?d[1]:{},Nr(n=Bt(r,"headless"))||(n=!0),Or(o=Bt(r,"viewport"))||(o={x:0,y:0,width:800,height:600}),kr(i=Bt(r,"actions"))||(i=[]),re(u=Bt(r,"waitsec"))||(u=5),s={headless:n,slowMo:20},t.next=14,a.default.launch(s);case 14:return f=t.sent,t.next=17,f.newPage();case 17:return l=t.sent,t.next=20,l.goto(e);case 20:return t.next=22,l.setViewport(o);case 22:return t.next=24,l.waitFor(1e3*u);case 24:return t.next=26,Ir(i,function(){var t=c(h.mark((function t(e){var r,n,o,a,i,u,c,s;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("wait"!==e.mode){t.next=5;break}return t.next=3,l.waitFor(e.time);case 3:t.next=197;break;case 5:if("resize"!==e.mode){t.next=14;break}return t.next=8,l.waitFor(300);case 8:return t.next=10,l.setViewport({x:0,y:0,width:e.width,height:e.height});case 10:return t.next=12,l.waitFor(300);case 12:t.next=197;break;case 14:if("move"!==e.mode){t.next=23;break}return t.next=17,l.waitFor(300);case 17:return t.next=19,l.mouse.move(e.x1,e.y1);case 19:return t.next=21,l.waitFor(300);case 21:t.next=197;break;case 23:if("elemove"!==e.mode){t.next=36;break}return t.next=26,l.waitFor(300);case 26:return t.next=28,p(e.selector,e.nth);case 28:if(!(r=t.sent)){t.next=34;break}return t.next=32,l.mouse.move(r.cx,r.cy);case 32:return t.next=34,l.waitFor(300);case 34:t.next=197;break;case 36:if("elehover"!==e.mode){t.next=45;break}return t.next=39,l.waitFor(300);case 39:return t.next=41,l.hover(e.selector);case 41:return t.next=43,l.waitFor(300);case 43:t.next=197;break;case 45:if("drag"!==e.mode){t.next=64;break}return t.next=48,l.waitFor(300);case 48:return t.next=50,l.mouse.move(e.x1,e.y1);case 50:return t.next=52,l.mouse.down();case 52:return t.next=54,l.waitFor(300);case 54:return t.next=56,l.mouse.move(e.x2,e.y2,{steps:50});case 56:return t.next=58,l.waitFor(300);case 58:return t.next=60,l.mouse.up();case 60:return t.next=62,l.waitFor(300);case 62:t.next=197;break;case 64:if("eledrag"!==e.mode){t.next=87;break}return t.next=67,l.waitFor(300);case 67:return t.next=69,p(e.selector,e.nth);case 69:if(!(n=t.sent)){t.next=85;break}return t.next=73,l.mouse.move(n.cx,n.cy);case 73:return t.next=75,l.mouse.down();case 75:return t.next=77,l.waitFor(300);case 77:return t.next=79,l.mouse.move(n.cx+e.shiftx,n.cy+e.shifty,{steps:50});case 79:return t.next=81,l.waitFor(300);case 81:return t.next=83,l.mouse.up();case 83:return t.next=85,l.waitFor(300);case 85:t.next=197;break;case 87:if("click"!==e.mode){t.next=100;break}return t.next=90,l.waitFor(300);case 90:return t.next=92,l.mouse.move(e.x1,e.y1);case 92:return t.next=94,l.mouse.down();case 94:return t.next=96,l.mouse.up();case 96:return t.next=98,l.waitFor(300);case 98:t.next=197;break;case 100:if("eleclick"!==e.mode){t.next=113;break}return t.next=103,l.waitFor(300);case 103:return t.next=105,p(e.selector,e.nth);case 105:if(!(o=t.sent)){t.next=111;break}return t.next=109,o.ele.click();case 109:return t.next=111,l.waitFor(300);case 111:t.next=197;break;case 113:if("dbclick"!==e.mode){t.next=122;break}return t.next=116,l.waitFor(300);case 116:return t.next=118,l.mouse.click(e.x1,e.y1,{clickCount:2});case 118:return t.next=120,l.waitFor(300);case 120:t.next=197;break;case 122:if("eledbclick"!==e.mode){t.next=135;break}return t.next=125,l.waitFor(300);case 125:return t.next=127,p(e.selector,e.nth);case 127:if(!(a=t.sent)){t.next=133;break}return t.next=131,a.ele.click({clickCount:2});case 131:return t.next=133,l.waitFor(300);case 133:t.next=197;break;case 135:if("type"!==e.mode){t.next=147;break}return t.next=138,l.waitFor(300);case 138:return t.next=140,l.keyboard.type(e.str,{delay:50});case 140:if(e.noEnter){t.next=143;break}return t.next=143,l.keyboard.type(String.fromCharCode(13));case 143:return t.next=145,l.waitFor(300);case 145:t.next=197;break;case 147:if("eletype"!==e.mode){t.next=167;break}return t.next=150,l.waitFor(300);case 150:return t.next=152,p(e.selector,e.nth);case 152:if(!(i=t.sent)){t.next=165;break}return t.next=156,i.ele.click();case 156:return t.next=158,l.waitFor(50);case 158:return t.next=160,l.keyboard.type(e.str,{delay:50});case 160:if(e.noEnter){t.next=163;break}return t.next=163,l.keyboard.type(String.fromCharCode(13));case 163:return t.next=165,l.waitFor(300);case 165:t.next=197;break;case 167:if("keypress"!==e.mode){t.next=183;break}return t.next=170,l.waitFor(300);case 170:(u=ie(e.count))<=0&&(u=1),c=0;case 173:if(!(c<u)){t.next=179;break}return t.next=176,l.keyboard.press(e.key);case 176:c++,t.next=173;break;case 179:return t.next=181,l.waitFor(300);case 181:t.next=197;break;case 183:if("elefocus"!==e.mode){t.next=196;break}return t.next=186,l.waitFor(300);case 186:return t.next=188,p(e.selector,e.nth);case 188:if(!(s=t.sent)){t.next=194;break}return t.next=192,s.ele.focus();case 192:return t.next=194,l.waitFor(300);case 194:t.next=197;break;case 196:console.log("mode is unrecognized: "+e.mode);case 197:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 26:return t.next=28,l.waitFor(2e3);case 28:return t.next=30,l.screenshot({encoding:"base64"});case 30:return y=t.sent,t.next=33,l.close();case 33:return t.next=35,f.close();case 35:return t.abrupt("return",y);case 36:case"end":return t.stop()}}),t)}))),Br.apply(this,arguments)}function Gr(t,e){if(t.length!==e.length)return 0;for(var r=0,n=t.length,o=0,a=t.length;o<a;o++){r+=Math.abs(t[o]-e[o])/255}return r=1-Math.pow(r/n,1/3)}function Rr(t){return Ur.apply(this,arguments)}function Ur(){return(Ur=c(h.mark((function t(e){var r,n;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Buffer.from(e,"base64"),t.next=3,i.default.read(r);case 3:return n=t.sent,t.abrupt("return",n.bitmap.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function qr(t,e){return Vr.apply(this,arguments)}function Vr(){return(Vr=c(h.mark((function t(e,r){var n,o;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Rr(e);case 2:return n=t.sent,t.next=5,Rr(r);case 5:return o=t.sent,t.abrupt("return",Gr(n,o));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Dr(){return Dr=c(h.mark((function t(e){var r,n,a,i,u,s,f,l=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},n=Bt(r,"headless"),a=Bt(r,"viewport"),i=Bt(r,"waitsec"),u=10,ue(r.num_web)&&(u=ie(r.num_web)),s=1,te(r.ratio_similar)&&(s=ee(r.ratio_similar)),f=!1,t.abrupt("return",Pr(e,function(){var t=c(h.mark((function t(e){var r,u,c,l,p,v;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("expTest: "+e.name),r={headless:n,viewport:a,actions:e.actions,waitsec:i},t.next=4,Mr(e.url,r);case 4:if(u=t.sent,c=o.default.readFileSync(e.fn_base64,"utf8"),1!==s){t.next=10;break}l=u===c,t.next=16;break;case 10:return t.next=12,qr(u,c);case 12:p=t.sent,v=(l=p>=s)?" >= ":"<",console.log("ratio[".concat(p,"] ").concat(v," ratio_similar[").concat(s,"]"));case 16:if(!l){t.next=20;break}f||console.log("success: "+e.name),t.next=23;break;case 20:return f||(console.log("error: "+e.name),o.default.writeFileSync(e.name+".err.png",u,"base64")),f=!0,t.abrupt("return",Promise.reject(e.name));case 23:return t.abrupt("return",e.name);case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u).then((function(){console.log("[32m%s[0m","expTest success")})).catch((function(t){console.log("[31m%s[0m","expTest error: "+t)})));case 10:case"end":return t.stop()}}),t)}))),Dr.apply(this,arguments)}return function(t){return Dr.apply(this,arguments)}}));
//# sourceMappingURL=expTest.umd.js.map
