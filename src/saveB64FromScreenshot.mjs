import getB64FromScreenshot from './getB64FromScreenshot.mjs'
import saveB64 from './saveB64.mjs'


/**
 * 瀏覽網址並用screenshot取得圖片base64資料，並依照設定儲存
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} url 輸入瀏覽網址，可為本機檔案絕對或相對位置
 * @param {String} url_tar  輸入對象(單元測試範例)網址，可為本機檔案絕對或相對位置
 * @param {String} fn_out 輸入儲存之檔案路徑，但需不包含副檔名，因由設定檔決定輸出檔案之副檔名
 * @param {Object} [opt={}] 輸入設定檔，預設為{}
 * @param {Boolean} [opt.png=true] 輸入是否輸出png圖，預設為true
 * @param {Boolean} [opt.base64=true] 輸入是否輸出base64資料，預設為true
 * @returns {Promise} 回傳Promise，resolve為依照設定處理完畢，reject為處理失敗
 */
async function saveB64FromScreenshot(url, url_tar, fn_out, opt = {}) {

    //getB64FromScreenshot
    let b64 = await getB64FromScreenshot(url, url_tar)

    //saveB64
    saveB64(b64, fn_out, opt)

}


export default saveB64FromScreenshot
