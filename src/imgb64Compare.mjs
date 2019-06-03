import Jimp from 'jimp'


/**
 * 陣列數值比較
 *
 * @private
 * @param {Array} arr1 輸入陣列1
 * @param {Array} arr2 輸入陣列2
 * @returns {Number} 回傳相似度0~1
 */
function arrCompare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return 0
    }
    let rr = 0
    let n = arr1.length
    for (let i = 0, len = arr1.length; i < len; i++) {
        let r = Math.abs(arr1[i] - arr2[i])
        rr += r / 255
    }
    rr = 1 - Math.pow(rr / n, 1 / 3)
    //rr=1-Math.sqrt(rr/n)
    return rr
}


/**
 * 圖片base64轉ImageData
 *
 * @private
 * @param {String} b64
 * @returns {Promise} 回傳Promise，resolve為ImageData的陣列，reject為處理失敗
 */
async function b642imgdata(b64) {
    let b = Buffer.from(b64, 'base64')
    let image = await Jimp.read(b)
    return image.bitmap.data
}


/**
 * 2張圖片base64比對
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} b64_a 輸入圖片a的base64格式字串
 * @param {String} b64_b 輸入圖片b的base64格式字串
 * @returns {Promise} 回傳Promise，resolve為相似度0~1，reject為處理失敗
 */
async function imgb64Compare(b64_a, b64_b) {
    let data_a = await b642imgdata(b64_a)
    let data_b = await b642imgdata(b64_b)
    return arrCompare(data_a, data_b)
}


export default imgb64Compare
