/*!
 * readJson v1.0.38
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("fs"),require("json5")):"function"==typeof define&&define.amd?define(["fs","json5"],n):(e="undefined"!=typeof globalThis?globalThis:e||self).readJson=n(e.fs,e.json5)}(this,(function(e,n){"use strict";return function(o){let f=e.readFileSync(o,"utf8");return n.parse(f)}}));
//# sourceMappingURL=readJson.umd.js.map
