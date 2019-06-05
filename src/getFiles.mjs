import fs from 'fs'


/**
 * 取得資料夾內檔案，可使用havsStr過濾檔名含有之字串
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd
 * @returns {Array} 回傳檔案名稱字串陣列
 */
async function getFiles(fd, havsStr = '') {
    let fsp = fs.promises
    let ltfs = await fsp.readdir(fd)

    //filter
    if (havsStr !== '') {
        ltfs = ltfs.filter(function (fn) {
            return fn.indexOf(havsStr) >= 0
        })
    }

    return ltfs
}


export default getFiles
