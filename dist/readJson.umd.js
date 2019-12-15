/*!
 * readJson v1.0.29
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("fs"),require("json5")):"function"==typeof define&&define.amd?define(["fs","json5"],n):(e=e||self).readJson=n(e.fs,e.json5)}(this,(function(e,n){"use strict";return e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,function(t){var f=e.readFileSync(t,"utf8");return n.parse(f)}}));
//# sourceMappingURL=readJson.umd.js.map
