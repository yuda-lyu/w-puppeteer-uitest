/*!
 * getFiles v1.0.40
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("fs")):"function"==typeof define&&define.amd?define(["fs"],n):(e="undefined"!=typeof globalThis?globalThis:e||self).getFiles=n(e.fs)}(this,(function(e){"use strict";return async function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=e.promises,f=await i.readdir(n);return""!==t&&(f=f.filter((function(e){return e.indexOf(t)>=0}))),f}}));
//# sourceMappingURL=getFiles.umd.js.map
