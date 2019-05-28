import get from 'lodash/get'
import fs from 'fs'
import isbol from 'wsemi/src/isbol.mjs'


/**
 * 圖片base64格式字串儲存至檔案
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} b64 輸入圖片base64格式字串
 * @param {String} fn_out 輸入儲存之檔案路徑，但需不包含副檔名，因由設定檔決定輸出檔案之副檔名
 * @param {Object} [opt={}] 輸入設定檔，預設為{}
 * @param {Boolean} [opt.png=true] 輸入是否輸出png圖，預設為true
 * @param {Boolean} [opt.base64=true] 輸入是否輸出base64資料，預設為true
 * @returns {Promise} 回傳Promise，resolve為依照設定處理完畢，reject為處理失敗
 */
function saveB64(b64, fn_out, opt = {}) {
    //fn_out不需要副檔名, 自動儲存base64與png

    //b_png
    let b_png = get(opt, 'png')
    if (!isbol(b_png)) {
        b_png = true
    }

    //b_base64
    let b_base64 = get(opt, 'base64')
    if (!isbol(b_base64)) {
        b_base64 = true
    }

    //write
    if (b_png) {
        fs.writeFileSync(fn_out + '.png', b64, 'base64')
    }
    if (b_base64) {
        fs.writeFileSync(fn_out + '.base64', b64, 'utf8')
    }

}


export default saveB64
