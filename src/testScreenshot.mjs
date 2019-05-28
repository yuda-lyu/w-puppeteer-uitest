import b from 'bluebird'
import fs from 'fs'
import genPm from 'wsemi/src/genPm.mjs'
import saveB64FromScreenshot from './saveB64FromScreenshot.mjs'
import importGetB64FromScreenshot from './importGetB64FromScreenshot.mjs'
import saveB64 from './saveB64.mjs'


/**
 * 取得資料夾內(*.html)檔案
 *
 * @private
 * @param {String} fd
 * @returns {Array} 回傳html檔案名稱陣列
 */
async function getFilesHtml(fd) {
    let fsp = fs.promises
    let ltfs = await fsp.readdir(fd)

    //filter
    ltfs = ltfs.filter(function (fn) {
        return fn.indexOf('.html') >= 0
    })

    return ltfs
}


/**
 * 建置測試範例之正確版快照(screenshot)
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd_src 輸入html範例所在之資料夾字串
 * @param {String} fd_tar 輸入儲存圖案base64資料之資料夾字串
 * @param {String} fd_mod 輸入引用(import)測試html範例的ES6 Javascript檔(*.mjs)之父層相對路徑字串
 * @param {number} [num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗
 */
async function buildExpected(fd_src, fd_tar, fd_mod, num_web = 10) {

    //mkdirSync
    if (!fs.existsSync(fd_tar)) {
        fs.mkdirSync(fd_tar)
    }

    //getFilesHtml
    let ltfs = await getFilesHtml(fd_src)
    //ltfs = ['ex-kpCellTooltip.html']

    //mapSeries 循序, map 平行化處理
    return b.map(ltfs, async function (v) {
        //console.log('test: ' + v)

        //name
        let name = v.replace('.html', '')

        //url
        let url = fd_mod + name + '.mjs' //`/${name}.mjs`

        //saveB64FromScreenshot
        await saveB64FromScreenshot(url, fd_src + v, fd_tar + name)

    }, { concurrency: num_web })
        .then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'buildExpected success')
        })
        .catch((msg) => {
            console.log('\x1b[31m%s\x1b[0m', 'buildExpected error: ' + msg)
        })

}


/**
 * 測試範例之快照(screenshot)是否與正確版相同
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd_src 輸入html範例所在之資料夾字串
 * @param {String} fd_tar 輸入儲存圖案base64資料之資料夾字串
 * @param {String} fd_mod 輸入引用(import)測試html範例的ES6 Javascript檔(*.mjs)之父層相對路徑字串
 * @param {number} [num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗
 */
async function testExpected(fd_src, fd_tar, fd_mod, num_web = 10) {

    //mkdirSync
    if (!fs.existsSync(fd_src)) {
        console.log('testExpected: folder not exits: ', fd_src)
        return
    }
    if (!fs.existsSync(fd_tar)) {
        console.log('testExpected: folder not exits: ', fd_tar)
        return
    }

    //getFilesHtml
    let ltfs = await getFilesHtml(fd_src)
    //ltfs = ['ex-kpCellTooltip.html']
    //ltfs = ['ex-kpHeadTooltip.html']
    //ltfs = ['ex-kpHeadFilter.html']
    //ltfs = ['ex-kpRowDrag.html']

    //mapSeries 循序, map 平行化處理
    let bstop = false //若使用map平行化時, 多執行序啟動瀏覽器有錯誤會先reject, 但其他已啟動的瀏覽器一樣仍於閉包內會完成該任務, 故會呼叫所屬console.log, 通過bstop來停止這種情況之輸出
    return b.map(ltfs, async function(v) {
        //console.log('test: ' + v)

        //name
        let name = v.replace('.html', '')

        //url
        let url = fd_mod + name + '.mjs' //`/${name}.mjs`

        //importGetB64FromScreenshot
        let b64_now = await importGetB64FromScreenshot(url, fd_src + v)

        //b64_expected
        let b64_expected = fs.readFileSync(fd_tar + name + '.base64', 'utf8')

        //p
        let p = genPm()

        //check
        if (b64_now === b64_expected) {
            if (!bstop) {
                console.log('success: ' + v)
            }
            p.resolve(v)
        }
        else {
            if (!bstop) {
                console.log('error: ' + v)
                saveB64(b64_now, name + '.err')
            }
            bstop = true
            p.reject(v)
        }

        return p
    }, { concurrency: num_web })
        .then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'testExpected success')
        })
        .catch((msg) => {
            console.log('\x1b[31m%s\x1b[0m', 'testExpected error: ' + msg)
        })

}


export { buildExpected, testExpected }
