/*!
 * readJson v1.0.32
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("fs"),require("json5")):"function"==typeof define&&define.amd?define(["fs","json5"],t):(e=e||self).readJson=t(e.fs,e.json5)}(this,(function(e,t){"use strict";return e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,function(n){var o=e.readFileSync(n,"utf8");return t.parse(o)}}));
//# sourceMappingURL=readJson.umd.js.map
