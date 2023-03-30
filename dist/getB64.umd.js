/*!
 * getB64 v1.0.39
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("puppeteer")):"function"==typeof define&&define.amd?define(["puppeteer"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).getB64=e(t.puppeteer)}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n=Array.isArray,o="object"==typeof e&&e&&e.Object===Object&&e,a=o,i="object"==typeof self&&self&&self.Object===Object&&self,u=a||i||Function("return this")(),c=u.Symbol,l=c,f=Object.prototype,s=f.hasOwnProperty,p=f.toString,v=l?l.toStringTag:void 0;var y=function(t){var e=s.call(t,v),r=t[v];try{t[v]=void 0;var n=!0}catch(t){}var o=p.call(t);return n&&(e?t[v]=r:delete t[v]),o},w=Object.prototype.toString;var h=y,d=function(t){return w.call(t)},b=c?c.toStringTag:void 0;var g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?h(t):d(t)};var j=function(t){return null!=t&&"object"==typeof t},_=g,m=j;var F=function(t){return"symbol"==typeof t||m(t)&&"[object Symbol]"==_(t)},O=n,x=F,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var S=function(t,e){if(O(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!x(t))||(k.test(t)||!A.test(t)||null!=e&&t in Object(e))};var $=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},z=g,P=$;var T,C=function(t){if(!P(t))return!1;var e=z(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},N=u["__core-js_shared__"],B=(T=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var E=function(t){return!!B&&B in t},I=Function.prototype.toString;var M=C,U=E,q=$,R=function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""},V=/^\[object .+?Constructor\]$/,D=Function.prototype,G=Object.prototype,L=D.toString,W=G.hasOwnProperty,H=RegExp("^"+L.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!q(t)||U(t))&&(M(t)?H:V).test(R(t))},K=function(t,e){return null==t?void 0:t[e]};var Q=function(t,e){var r=K(t,e);return J(r)?r:void 0},X=Q(Object,"create"),Y=X;var Z=function(){this.__data__=Y?Y(null):{},this.size=0};var tt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},et=X,rt=Object.prototype.hasOwnProperty;var nt=function(t){var e=this.__data__;if(et){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return rt.call(e,t)?e[t]:void 0},ot=X,at=Object.prototype.hasOwnProperty;var it=X;var ut=Z,ct=tt,lt=nt,ft=function(t){var e=this.__data__;return ot?void 0!==e[t]:at.call(e,t)},st=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=it&&void 0===e?"__lodash_hash_undefined__":e,this};function pt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}pt.prototype.clear=ut,pt.prototype.delete=ct,pt.prototype.get=lt,pt.prototype.has=ft,pt.prototype.set=st;var vt=pt;var yt=function(){this.__data__=[],this.size=0};var wt=function(t,e){return t===e||t!=t&&e!=e};var ht=function(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1},dt=ht,bt=Array.prototype.splice;var gt=ht;var jt=ht;var _t=ht;var mt=yt,Ft=function(t){var e=this.__data__,r=dt(e,t);return!(r<0)&&(r==e.length-1?e.pop():bt.call(e,r,1),--this.size,!0)},Ot=function(t){var e=this.__data__,r=gt(e,t);return r<0?void 0:e[r][1]},xt=function(t){return jt(this.__data__,t)>-1},At=function(t,e){var r=this.__data__,n=_t(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}kt.prototype.clear=mt,kt.prototype.delete=Ft,kt.prototype.get=Ot,kt.prototype.has=xt,kt.prototype.set=At;var St=kt,$t=Q(u,"Map"),zt=vt,Pt=St,Tt=$t;var Ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Nt=function(t,e){var r=t.__data__;return Ct(e)?r["string"==typeof e?"string":"hash"]:r.map},Bt=Nt;var Et=Nt;var It=Nt;var Mt=Nt;var Ut=function(){this.size=0,this.__data__={hash:new zt,map:new(Tt||Pt),string:new zt}},qt=function(t){var e=Bt(this,t).delete(t);return this.size-=e?1:0,e},Rt=function(t){return Et(this,t).get(t)},Vt=function(t){return It(this,t).has(t)},Dt=function(t,e){var r=Mt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Gt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Gt.prototype.clear=Ut,Gt.prototype.delete=qt,Gt.prototype.get=Rt,Gt.prototype.has=Vt,Gt.prototype.set=Dt;var Lt=Gt;function Wt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Wt.Cache||Lt),r}Wt.Cache=Lt;var Ht=Wt;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Qt=function(t){var e=Ht(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Jt,(function(t,r,n,o){e.push(n?o.replace(Kt,"$1"):r||t)})),e}));var Xt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},Yt=n,Zt=F,te=c?c.prototype:void 0,ee=te?te.toString:void 0;var re=function t(e){if("string"==typeof e)return e;if(Yt(e))return Xt(e,t)+"";if(Zt(e))return ee?ee.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},ne=re;var oe=function(t){return null==t?"":ne(t)},ae=n,ie=S,ue=Qt,ce=oe;var le=F;var fe=function(t,e){return ae(t)?t:ie(t,e)?[t]:ue(ce(t))},se=function(t){if("string"==typeof t||le(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var r=0,n=(e=fe(e,t)).length;null!=t&&r<n;)t=t[se(e[r++])];return r&&r==n?t:void 0};var ve=function(t,e,r){var n=null==t?void 0:pe(t,e);return void 0===n?r:n},ye=/\s/;var we=function(t){for(var e=t.length;e--&&ye.test(t.charAt(e)););return e},he=/^\s+/;var de=function(t){return t?t.slice(0,we(t)+1).replace(he,""):t},be=$,ge=F,je=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,me=/^0o[0-7]+$/i,Fe=parseInt;var Oe=function(t){if("number"==typeof t)return t;if(ge(t))return NaN;if(be(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=be(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=de(t);var r=_e.test(t);return r||me.test(t)?Fe(t.slice(2),r?2:8):je.test(t)?NaN:+t},xe=Oe,Ae=1/0;var ke=function(t){return t?(t=xe(t))===Ae||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0},Se=ke;var $e=function(t){var e=Se(t),r=e%1;return e==e?r?e-r:e:0},ze=$e;var Pe=function(t){return"number"==typeof t&&t==ze(t)};function Te(t){return"[object String]"===Object.prototype.toString.call(t)}function Ce(t){let e=!1;return!function(t){return!(!Te(t)||""===t)}(t)?function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0):e=!isNaN(Number(t)),e}function Ne(t){if(!Ce(t))return 0;return ke(t)}function Be(t){return"[object Object]"===Object.prototype.toString.call(t)}function Ee(t){return"[object Array]"===Object.prototype.toString.call(t)}var Ie=g,Me=j;var Ue=function(t){return!0===t||!1===t||Me(t)&&"[object Boolean]"==Ie(t)};function qe(t){return!!function(t){return"[object Undefined]"===Object.prototype.toString.call(t)}(t)||(!!function(t){return"[object Null]"===Object.prototype.toString.call(t)}(t)||(!!function(t){if(Be(t)){for(let e in t)return!1;return!0}return!1}(t)||(!!function(t){return!(!Te(t)||""!==t)}(t)||!!function(t){return!!Ee(t)&&0===t.length}(t))))}var Re=$e,Ve=Oe,De=oe,Ge=u.isFinite,Le=Math.min;var We=function(t){var e=Math[t];return function(t,r){if(t=Ve(t),(r=null==r?0:Le(Re(r),292))&&Ge(t)){var n=(De(t)+"e").split("e"),o=e(n[0]+"e"+(+n[1]+r));return+((n=(De(o)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}("round");function He(t){if(!Ce(t))return 0;t=Ne(t);let e=We(t);return"0"===String(e)?0:e}var Je=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+e];return a},Ke=$e;var Qe=function(t,e,r){var n=null==t?0:t.length;return n?(e=r||void 0===e?1:Ke(e),Je(t,e<0?0:e,n)):[]},Xe={},Ye={get exports(){return Xe},set exports(t){Xe=t}};var Ze=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var tr=function(t){return function(e,r,n){for(var o=-1,a=Object(e),i=n(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===r(a[c],c,a))break}return e}}();var er=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},rr=g,nr=j;var or=function(t){return nr(t)&&"[object Arguments]"==rr(t)},ar=j,ir=Object.prototype,ur=ir.hasOwnProperty,cr=ir.propertyIsEnumerable,lr=or(function(){return arguments}())?or:function(t){return ar(t)&&ur.call(t,"callee")&&!cr.call(t,"callee")},fr=lr,sr={};var pr=function(){return!1};!function(t,e){var r=u,n=pr,o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o?r.Buffer:void 0,c=(i?i.isBuffer:void 0)||n;t.exports=c}({get exports(){return sr},set exports(t){sr=t}},sr);var vr=/^(?:0|[1-9]\d*)$/;var yr=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&vr.test(t))&&t>-1&&t%1==0&&t<e};var wr=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},hr=g,dr=wr,br=j,gr={};gr["[object Float32Array]"]=gr["[object Float64Array]"]=gr["[object Int8Array]"]=gr["[object Int16Array]"]=gr["[object Int32Array]"]=gr["[object Uint8Array]"]=gr["[object Uint8ClampedArray]"]=gr["[object Uint16Array]"]=gr["[object Uint32Array]"]=!0,gr["[object Arguments]"]=gr["[object Array]"]=gr["[object ArrayBuffer]"]=gr["[object Boolean]"]=gr["[object DataView]"]=gr["[object Date]"]=gr["[object Error]"]=gr["[object Function]"]=gr["[object Map]"]=gr["[object Number]"]=gr["[object Object]"]=gr["[object RegExp]"]=gr["[object Set]"]=gr["[object String]"]=gr["[object WeakMap]"]=!1;var jr=function(t){return br(t)&&dr(t.length)&&!!gr[hr(t)]};var _r=function(t){return function(e){return t(e)}},mr={};!function(t,e){var r=o,n=e&&!e.nodeType&&e,a=n&&t&&!t.nodeType&&t,i=a&&a.exports===n&&r.process,u=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}({get exports(){return mr},set exports(t){mr=t}},mr);var Fr=jr,Or=_r,xr=mr&&mr.isTypedArray,Ar=xr?Or(xr):Fr,kr=er,Sr=fr,$r=n,zr=sr,Pr=yr,Tr=Ar,Cr=Object.prototype.hasOwnProperty;var Nr=function(t,e){var r=$r(t),n=!r&&Sr(t),o=!r&&!n&&zr(t),a=!r&&!n&&!o&&Tr(t),i=r||n||o||a,u=i?kr(t.length,String):[],c=u.length;for(var l in t)!e&&!Cr.call(t,l)||i&&("length"==l||o&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Pr(l,c))||u.push(l);return u},Br=Object.prototype;var Er=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Br)};var Ir=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Mr=Er,Ur=Ir,qr=Object.prototype.hasOwnProperty;var Rr=C,Vr=wr;var Dr=function(t){return null!=t&&Vr(t.length)&&!Rr(t)},Gr=Nr,Lr=function(t){if(!Mr(t))return Ur(t);var e=[];for(var r in Object(t))qr.call(t,r)&&"constructor"!=r&&e.push(r);return e},Wr=Dr;var Hr=tr,Jr=function(t){return Wr(t)?Gr(t):Lr(t)};var Kr=Dr;var Qr=function(t,e){return function(r,n){if(null==r)return r;if(!Kr(r))return t(r,n);for(var o=r.length,a=e?o:-1,i=Object(r);(e?a--:++a<o)&&!1!==n(i[a],a,i););return r}}((function(t,e){return t&&Hr(t,e,Jr)}));var Xr=function(t){return t};var Yr=Ze,Zr=Qr,tn=function(t){return"function"==typeof t?t:Xr},en=n;var rn=function(t,e){return(en(t)?Yr:Zr)(t,tn(e))};!function(t){t.exports=rn}(Ye);var nn=r(Xe);function on(t){let e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function an(t,e){let r=function(){let t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}();if(!Ee(t)&&!Be(t))return r.reject("rs is not an array or object"),r;let n=!1;if(Be(t)){n=!0;let e=[];nn(t,((t,r)=>{e.push({k:r,v:t})})),t=e}on(e)||(e=function(t){return t});let o=-1,a=[];return t.reduce((function(t,r){return t.then((function(t){a.push(t),o+=1;let i=o,u=r;return n&&(i=r.k,u=r.v),on(e)?e(u,i):u}))}),Promise.resolve()).then((function(t){a.push(t),a=Qe(a),r.resolve(a)})).catch((function(t){r.reject(t)})),r}return async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=ve(r,"headless");Ue(n)||(n=!0);let o=ve(r,"viewport");Be(o)||(o={x:0,y:0,width:800,height:600});let a=ve(r,"actions");Ee(a)||(a=[]);let i=ve(r,"waitsec");(function(t){return!!Ce(t)&&(t=Ne(t),Pe(t))})(i)||(i=5);let u={headless:n,slowMo:20},c=await t.launch(u),l=await c.newPage();async function f(t){let e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(r=He(r),0===r){if(e=await l.$(t),qe(e))return console.log("page.$ get no result: "+t),null}else{let n=await l.$$(t);if(0===n.length)return console.log("page.$$ get no result: "+t),null;e=r<0?n[n.length+r]:n[r]}if(qe(e))return console.log("invalid ele: "+t),null;if(qe(e.boundingBox))return console.log("invalid ele.boundingBox: "+t),null;let n=await e.boundingBox();return n.cx=n.x+n.width/2,n.cy=n.y+n.height/2,n.ele=e,n}await l.goto(e),await l.setViewport(o),await l.waitFor(1e3*i),await an(a,(async function(t){if("wait"===t.mode)await l.waitFor(t.time);else if("resize"===t.mode)await l.waitFor(300),await l.setViewport({x:0,y:0,width:t.width,height:t.height}),await l.waitFor(300);else if("move"===t.mode)await l.waitFor(300),await l.mouse.move(t.x1,t.y1),await l.waitFor(300);else if("elemove"===t.mode){await l.waitFor(300);let e=await f(t.selector,t.nth);e&&(await l.mouse.move(e.cx,e.cy),await l.waitFor(300))}else if("elehover"===t.mode)await l.waitFor(300),await l.hover(t.selector),await l.waitFor(300);else if("drag"===t.mode)await l.waitFor(300),await l.mouse.move(t.x1,t.y1),await l.mouse.down(),await l.waitFor(300),await l.mouse.move(t.x2,t.y2,{steps:50}),await l.waitFor(300),await l.mouse.up(),await l.waitFor(300);else if("eledrag"===t.mode){await l.waitFor(300);let e=await f(t.selector,t.nth);e&&(await l.mouse.move(e.cx,e.cy),await l.mouse.down(),await l.waitFor(300),await l.mouse.move(e.cx+t.shiftx,e.cy+t.shifty,{steps:50}),await l.waitFor(300),await l.mouse.up(),await l.waitFor(300))}else if("click"===t.mode)await l.waitFor(300),await l.mouse.move(t.x1,t.y1),await l.mouse.down(),await l.mouse.up(),await l.waitFor(300);else if("eleclick"===t.mode){await l.waitFor(300);let e=await f(t.selector,t.nth);e&&(await e.ele.click(),await l.waitFor(300))}else if("dbclick"===t.mode)await l.waitFor(300),await l.mouse.click(t.x1,t.y1,{clickCount:2}),await l.waitFor(300);else if("eledbclick"===t.mode){await l.waitFor(300);let e=await f(t.selector,t.nth);e&&(await e.ele.click({clickCount:2}),await l.waitFor(300))}else if("type"===t.mode)await l.waitFor(300),await l.keyboard.type(t.str,{delay:50}),t.noEnter||await l.keyboard.type(String.fromCharCode(13)),await l.waitFor(300);else if("eletype"===t.mode){await l.waitFor(300);let e=await f(t.selector,t.nth);e&&(await e.ele.click(),await l.waitFor(50),await l.keyboard.type(t.str,{delay:50}),t.noEnter||await l.keyboard.type(String.fromCharCode(13)),await l.waitFor(300))}else if("keypress"===t.mode){await l.waitFor(300);let e=He(t.count);e<=0&&(e=1);for(let r=0;r<e;r++)await l.keyboard.press(t.key);await l.waitFor(300)}else if("elefocus"===t.mode){await l.waitFor(300);let e=await f(t.selector,t.nth);e&&(await e.ele.focus(),await l.waitFor(300))}else console.log("mode is unrecognized: "+t.mode)})),await l.waitFor(2e3);let s=await l.screenshot({encoding:"base64"});return await l.close(),await c.close(),s}}));
//# sourceMappingURL=getB64.umd.js.map
