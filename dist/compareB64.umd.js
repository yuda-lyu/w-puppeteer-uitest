/*!
 * compareB64 v1.0.39
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jimp")):"function"==typeof define&&define.amd?define(["jimp"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).compareB64=t(e.jimp)}(this,(function(e){"use strict";async function t(t){let n=Buffer.from(t,"base64");return(await e.read(n)).bitmap.data}return async function(e,n){return function(e,t){if(e.length!==t.length)return 0;let n=0,i=e.length;for(let i=0,f=e.length;i<f;i++)n+=Math.abs(e[i]-t[i])/255;return n=1-Math.pow(n/i,1/3),n}(await t(e),await t(n))}}));
//# sourceMappingURL=compareB64.umd.js.map
