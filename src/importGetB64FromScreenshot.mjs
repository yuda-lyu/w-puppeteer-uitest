import genPm from 'wsemi/src/genPm.mjs'


/**
 * 動態載入(dynamic import)測試檔案，並自動呼叫其內default的函數(getb64)
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} url_mod 輸入匯入模組網址，可為本機檔案絕對或相對位置
 * @param {String} url_tar  輸入對象(單元測試範例)網址，可為本機檔案絕對或相對位置
 * @returns {Promise} 回傳Promise，resolve回傳圖片的base64字串
 */
function importGetB64FromScreenshot(url_mod, url_tar) {
    let p = genPm()

    //dynamic import
    import(url_mod)
        .then((mod) => {

            //func, 預設模組輸出使用default
            let func = mod.default

            //call
            func(url_tar)
                .then((b64) => {
                    p.resolve(b64)
                })
                .catch((msg) => {
                    p.reject(msg)
                })

        })
        .catch((msg) => {
            p.reject(msg)
        })

    return p
}


export default importGetB64FromScreenshot
