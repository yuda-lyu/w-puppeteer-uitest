import b from 'bluebird'
import fs from 'fs'
import genPm from 'wsemi/src/genPm.mjs'
import ispint from 'wsemi/src/ispint.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import cint from 'wsemi/src/cint.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import saveB64FromScreenshot from './saveB64FromScreenshot.mjs'
import getB64FromScreenshot from './getB64FromScreenshot.mjs'
import compareB64 from './compareB64.mjs'
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
 * @param {Object} [opt={}] 輸入設定物件，預設為{}
 * @param {Function} [opt.takeHtml=null] 輸入處理html的函數，預設為null
 * @param {Number} [opt.num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗
 */
async function build(fd_src, fd_tar, fd_mod, opt = {}) {

    //mkdirSync
    if (!fs.existsSync(fd_tar)) {
        fs.mkdirSync(fd_tar)
    }

    //num_web, ratio_similar
    let num_web = 10
    if (ispint(opt.num_web)) {
        num_web = cint(opt.num_web)
    }

    //getFilesHtml
    let ltfs = await getFilesHtml(fd_src)

    //takeHtml
    if (isfun(opt.takeHtml)) {
        ltfs = opt.takeHtml(ltfs)
    }

    //mapSeries 循序, map 平行化處理
    return b.map(ltfs, async function (v) {
        console.log('build: ' + v)

        //name
        let name = v.replace('.html', '')

        //url
        let url = fd_mod + name + '.mjs' //`/${name}.mjs`

        //saveB64FromScreenshot
        await saveB64FromScreenshot(url, fd_src + v, fd_tar + name, opt)

        console.log('success: ' + v)
    }, { concurrency: num_web })
        .then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'build success')
        })
        .catch((msg) => {
            console.log('\x1b[31m%s\x1b[0m', 'build error: ' + msg)
        })

}


/**
 * 測試範例之快照(screenshot)是否與正確版相同
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd_src 輸入html範例所在之資料夾字串
 * @param {String} fd_tar 輸入儲存圖案base64資料之資料夾字串
 * @param {String} fd_mod 輸入引用(import)測試html範例的ES6 Javascript檔(*.mjs)之父層相對路徑字串
 * @param {Object} [opt={}] 輸入設定物件，預設為{}
 * @param {Function} [opt.takeHtml=null] 輸入處理html的函數，預設為null
 * @param {Number} [opt.num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @param {Number} [opt.ratio_similar=1] 輸入偵測圖片相近度，預設為1，也就是完全相似
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗
 */
async function test(fd_src, fd_tar, fd_mod, opt = {}) {

    //mkdirSync
    if (!fs.existsSync(fd_src)) {
        console.log('test: folder not exits: ', fd_src)
        return
    }
    if (!fs.existsSync(fd_tar)) {
        console.log('test: folder not exits: ', fd_tar)
        return
    }

    //num_web, ratio_similar
    let num_web = 10
    if (ispint(opt.num_web)) {
        num_web = cint(opt.num_web)
    }
    let ratio_similar = 1
    if (isnum(opt.ratio_similar)) {
        ratio_similar = cdbl(opt.ratio_similar)
    }

    //getFilesHtml
    let ltfs = await getFilesHtml(fd_src)

    //takeHtml
    if (isfun(opt.takeHtml)) {
        ltfs = opt.takeHtml(ltfs)
    }

    //mapSeries 循序, map 平行化處理
    let bstop = false //若使用map平行化時, 多執行序啟動瀏覽器有錯誤會先reject, 但其他已啟動的瀏覽器一樣仍於閉包內會完成該任務, 故會呼叫所屬console.log, 通過bstop來停止這種情況之輸出
    return b.map(ltfs, async function(v) {
        console.log('test: ' + v)

        //name
        let name = v.replace('.html', '')

        //url
        let url = fd_mod + name + '.mjs' //`/${name}.mjs`

        //getB64FromScreenshot
        let b64_now = await getB64FromScreenshot(url, fd_src + v, opt)

        //b64_expected
        let b64_expected = fs.readFileSync(fd_tar + name + '.base64', 'utf8')

        //p
        let p = genPm()

        //b
        let b
        if (ratio_similar === 1) {
            b = b64_now === b64_expected
        }
        else {
            let r = await compareB64(b64_now, b64_expected)
            b = r >= ratio_similar
            let s = b ? ' >= ' : '<'
            console.log(`ratio[${r}] ${s} ratio_similar[${ratio_similar}]`)
        }

        //check
        if (b) {
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
            console.log('\x1b[32m%s\x1b[0m', 'test success')
        })
        .catch((msg) => {
            console.log('\x1b[31m%s\x1b[0m', 'test error: ' + msg)
        })

}


export { build, test }
