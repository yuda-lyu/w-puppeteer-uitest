import map from 'lodash/map'
import isFunction from 'lodash/isFunction'
import fs from 'fs'
import expBuild from './expBuild.mjs'
import expTest from './expTest.mjs'
import getFiles from './getFiles.mjs'
import readJson from './readJson.mjs'


/**
 * 批次建置測試範例之正確版快照(screenshot)
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd_html 輸入html檔案所在資料夾字串
 * @param {String|Function} fd_action 輸入html檔案所需測試動作json檔案所在資料夾字串，為函數時將於產生items時呼叫，針對各item需回傳操作actions物件陣列
 * @param {String} fd_out 輸入快照資料儲存之資料夾字串
 * @param {Object} [optExp={}] 輸入設定物件，預設為{}
 * @param {Function} [optExp.htmlFilter=null] 輸入讀取html檔案過濾函數，可再用以過濾讀取fd_html內html檔案，預設為null
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
    if (!isFunction(fd_action)) {
        if (!fs.existsSync(fd_action)) {
            console.log('build: folder not exits: ', fd_action)
            return
        }
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
        let item = {
            name,
            actions: [],
            url: fd_html + v,
            fn_png: fd_out + name + '.png',
            fn_base64: fd_out + name + '.base64',
        }
        if (isFunction(fd_action)) {
            item.actions = fd_action(name)
        }
        else {
            item.actions = readJson(fd_action + name + '.action.json')
        }
        return item
    })

    //expBuild
    await expBuild(items, optExp)

}


/**
 * 批次測試範例之快照(screenshot)是否與正確版相同
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} fd_html 輸入html檔案所在資料夾字串
 * @param {String|Function} fd_action 輸入html檔案所需測試動作json檔案所在資料夾字串，為函數時將於產生items時呼叫，針對各item需回傳操作actions物件陣列
 * @param {String} fd_base64 輸入快照資料儲存之資料夾字串
 * @param {Object} [optExp={}] 輸入設定物件，預設為{}
 * @param {Function} [optExp.htmlFilter=null] 輸入讀取html檔案過濾函數，可再用以過濾讀取fd_html內html檔案，預設為null
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
    if (!isFunction(fd_action)) {
        if (!fs.existsSync(fd_action)) {
            console.log('build: folder not exits: ', fd_action)
            return
        }
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
        let item = {
            name,
            actions: [],
            url: fd_html + v,
            //fn_png: fd_base64 + name + '.png',
            fn_base64: fd_base64 + name + '.base64',
        }
        if (isFunction(fd_action)) {
            item.actions = fd_action(name)
        }
        else {
            item.actions = readJson(fd_action + name + '.action.json')
        }
        return item
    })

    //expTest
    await expTest(items, optExp)

}


export { build, test }
