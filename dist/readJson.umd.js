/*!
 * readJson v1.0.26
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("fs"),require("json5")):"function"==typeof define&&define.amd?define(["fs","json5"],b):(a=a||self,a.readJson=b(a.fs,a.json5))})(this,function(a,b){'use strict';function c(d){var e=a.readFileSync(d,"utf8");return b.parse(e)}return a=a&&a.hasOwnProperty("default")?a["default"]:a,b=b&&b.hasOwnProperty("default")?b["default"]:b,c});
//# sourceMappingURL=readJson.umd.js.map
