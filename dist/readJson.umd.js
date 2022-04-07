/*!
 * readJson v1.0.36
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("fs"),require("json5")):"function"==typeof define&&define.amd?define(["fs","json5"],n):(e="undefined"!=typeof globalThis?globalThis:e||self).readJson=n(e.fs,e.json5)}(this,(function(e,n){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=t(e),o=t(n);return function(e){var n=f.default.readFileSync(e,"utf8");return o.default.parse(n)}}));
//# sourceMappingURL=readJson.umd.js.map
