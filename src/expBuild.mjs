import fs from 'fs'
import get from 'lodash/get'
import ispint from 'wsemi/src/ispint.mjs'
import cint from 'wsemi/src/cint.mjs'
import pmMap from 'wsemi/src/pmMap.mjs'
import getB64 from './getB64.mjs'


/**
 * 建置測試範例之正確版快照(screenshot)
 *
 * @memberOf w-puppeteer-uitest
 * @param {Array} items 輸入html範例所在之資料夾字串
 * @param {String} item.name 輸入item名稱字串
 * @param {String} item.url 輸入item所需瀏覽範例位置字串
 * @param {Array} item.actions 輸入item所需執行自動化操作動作陣列
 * @param {String} item.fn_png 輸入item儲存png圖之路徑字串
 * @param {String} item.fn_base64 輸入item儲存圖base64資料之路徑字串
 * @param {Object} [optExp={}] 輸入設定物件，預設為{}
 * @param {Boolean} [optExp.headless=true] 輸入是否以無頭方式開啟網頁，預設為true
 * @param {Object} [optExp.viewport={ width: 800, height: 600 }] 輸入網頁開啟後之viewport，預設為{ width: 800, height: 600 }
 * @param {Number} [optExp.num_web=10] 輸入平行啟動瀏覽器之數量，預設為10
 * @returns {Promise} 回傳Promise，resolve為建置成功，reject為建置失敗item名稱
 */
async function expBuild(items, optExp = {}) {

    //headless, viewport, waitsec, num_web
    let headless = get(optExp, 'headless')
    let viewport = get(optExp, 'viewport')
    let waitsec = get(optExp, 'waitsec')
    let num_web = 10
    if (ispint(optExp.num_web)) {
        num_web = cint(optExp.num_web)
    }

    //pmMap, 平行化處理
    return pmMap(items, async function (v) {
        console.log('expBuild: ' + v.name)

        //opt
        let opt = {
            headless,
            viewport,
            actions: v.actions,
            waitsec,
        }

        //getB64
        let b64 = await getB64(v.url, opt)

        //save
        if (v.fn_png) {
            fs.writeFileSync(v.fn_png, b64, 'base64')
        }
        if (v.fn_base64) {
            fs.writeFileSync(v.fn_base64, b64, 'utf8')
        }

        console.log('success: ' + v.name)
    }, num_web)
        .then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'expBuild success')
        })
        .catch((msg) => {
            console.log('\x1b[31m%s\x1b[0m', 'expBuild error: ' + msg)
        })

}


export default expBuild
