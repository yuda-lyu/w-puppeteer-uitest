import fs from 'fs'
import JSON5 from 'json5'


/**
 * 讀取json檔數據
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fn 輸入json檔案路徑字串
 * @returns {*} 回傳數據
 */
function readJson(fn) {
    let c = fs.readFileSync(fn, 'utf8')
    return JSON5.parse(c)
}


export default readJson
