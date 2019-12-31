import get from 'lodash/get'
import bb from 'bluebird'
import fs from 'fs'
import ispint from 'wsemi/src/ispint.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import cint from 'wsemi/src/cint.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import getB64 from './getB64.mjs'
import compareB64 from './compareB64.mjs'


/**
 * 測試範例之快照(screenshot)是否與正確版相同
 *
 * @memberOf w-puppeteer-uitest
 * @param {Array} items 輸入html範例所在之資料夾字串
 * @param {String} item.name 輸入item名稱字串
 * @param {String} item.url 輸入item所需瀏覽範例位置字串
 * @param {Array} item.actions 輸入item所需執行自動化操作動作陣列
 * @param {String} item.fn_base64 輸入item儲存圖base64資料之路徑字串
 * @param {Object} [optExp={}] 輸入設定物件，預設為{}
 * @param {Boolean} [optExp.headless=true] 輸入是否以無頭方式開啟網頁，預設為true
 * @param {Object} [optExp.viewport={ width: 800, height: 600 }] 輸入網頁開啟後之viewport，預設為{ width: 800, height: 600 }
 * @param {Number} [optExp.num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @param {Number} [optExp.ratio_similar=1] 輸入偵測圖片相近度，預設為1，也就是完全相似
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗item名稱
 */
async function expTest(items, optExp = {}) {

    //headless, viewport, waitsec, num_web, ratio_similar
    let headless = get(optExp, 'headless')
    let viewport = get(optExp, 'viewport')
    let waitsec = get(optExp, 'waitsec')
    let num_web = 10
    if (ispint(optExp.num_web)) {
        num_web = cint(optExp.num_web)
    }
    let ratio_similar = 1
    if (isnum(optExp.ratio_similar)) {
        ratio_similar = cdbl(optExp.ratio_similar)
    }

    //mapSeries 循序, map 平行化處理
    let bstop = false //若使用map平行化時, 多執行序啟動瀏覽器有錯誤會先reject, 但其他已啟動的瀏覽器一樣仍於閉包內會完成該任務, 故會呼叫所屬console.log, 通過bstop來停止這種情況之輸出
    return bb.map(items, async function (v) {
        console.log('expTest: ' + v.name)

        //opt
        let opt = {
            headless,
            viewport,
            actions: v.actions,
            waitsec,
        }

        //getB64
        let b64_now = await getB64(v.url, opt)

        //b64_expected
        let b64_expected = fs.readFileSync(v.fn_base64, 'utf8')

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
                console.log('success: ' + v.name)
            }
        }
        else {
            if (!bstop) {
                console.log('error: ' + v.name)
                fs.writeFileSync(v.name + '.err.png', b64_now, 'base64')
            }
            bstop = true
            return Promise.reject(v.name)
        }

        return v.name
    }, { concurrency: num_web })
        .then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'expTest success')
        })
        .catch((msg) => {
            console.log('\x1b[31m%s\x1b[0m', 'expTest error: ' + msg)
        })

}


export default expTest
