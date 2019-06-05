import map from 'lodash/map'
import isFunction from 'lodash/isFunction'
import fs from 'fs'
import JSON5 from 'json5'
import expBuild from './expBuild.mjs'
import expTest from './expTest.mjs'


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


/**
 * 讀取測試動作json檔
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fn 輸入json檔案路徑字串
 * @returns {Array} 回傳動作物件陣列
 */
function readAction(fn) {
    let c = fs.readFileSync(fn, 'utf8')
    return JSON5.parse(c)
}


/**
 * 批次建置測試範例之正確版快照(screenshot)
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd_html 輸入html檔案所在資料夾字串
 * @param {String} fd_action 輸入html檔案所需測試動作json檔案所在資料夾字串
 * @param {String} fd_out 輸入快照資料儲存之資料夾字串
 * @param {Object} [optExp={}] 輸入設定物件，預設為{}
 * @param {Boolean} [optExp.headless=true] 輸入是否以無頭方式開啟網頁，預設為true
 * @param {Object} [optExp.viewport={ width: 800, height: 600 }] 輸入網頁開啟後之viewport，預設為{ width: 800, height: 600 }
 * @param {Number} [optExp.num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗item名稱
 */
async function build(fd_html, fd_action, fd_out, optExp) {

    //check
    if (!fs.existsSync(fd_html)) {
        console.log('build: folder not exits: ', fd_html)
        return
    }
    if (!fs.existsSync(fd_action)) {
        console.log('build: folder not exits: ', fd_action)
        return
    }

    //fd_out mkdirSync
    if (!fs.existsSync(fd_out)) {
        fs.mkdirSync(fd_out)
    }

    //ltfns
    let ltfns = await getFiles(fd_html, '.html')

    //htmlFilter
    if (isFunction(optExp.htmlFilter)) {
        ltfns = optExp.htmlFilter(ltfns)
    }

    //items
    let items = map(ltfns, function(v) {
        let name = v.replace('.html', '')
        return {
            name,
            actions: readAction(fd_action + name + '.action.json'),
            url: fd_html + v,
            fn_png: fd_out + name + '.png',
            fn_base64: fd_out + name + '.base64',
        }
    })

    //expBuild
    await expBuild(items, optExp)

}


/**
 * 批次測試範例之快照(screenshot)是否與正確版相同
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd_html 輸入html檔案所在資料夾字串
 * @param {String} fd_action 輸入html檔案所需測試動作json檔案所在資料夾字串
 * @param {String} fd_base64 輸入快照資料儲存之資料夾字串
 * @param {Object} [optExp={}] 輸入設定物件，預設為{}
 * @param {Boolean} [optExp.headless=true] 輸入是否以無頭方式開啟網頁，預設為true
 * @param {Object} [optExp.viewport={ width: 800, height: 600 }] 輸入網頁開啟後之viewport，預設為{ width: 800, height: 600 }
 * @param {Number} [optExp.num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @param {Number} [optExp.ratio_similar=1] 輸入偵測圖片相近度，預設為1，也就是完全相似
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗item名稱
 */
async function test(fd_html, fd_action, fd_base64, optExp) {

    //check
    if (!fs.existsSync(fd_html)) {
        console.log('test: folder not exits: ', fd_html)
        return
    }
    if (!fs.existsSync(fd_action)) {
        console.log('test: folder not exits: ', fd_action)
        return
    }
    if (!fs.existsSync(fd_base64)) {
        console.log('test: folder not exits: ', fd_base64)
        return
    }

    //ltfns
    let ltfns = await getFiles(fd_html, '.html')

    //htmlFilter
    if (isFunction(optExp.htmlFilter)) {
        ltfns = optExp.htmlFilter(ltfns)
    }

    //items
    let items = map(ltfns, function(v) {
        let name = v.replace('.html', '')
        return {
            name,
            actions: readAction(fd_action + name + '.action.json'),
            url: fd_html + v,
            //fn_png: fd_out + name + '.png',
            fn_base64: fd_base64 + name + '.base64',
        }
    })

    //expTest
    await expTest(items, optExp)

}


export { build, test }
