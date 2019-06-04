import get from 'lodash/get'
import b from 'bluebird'
import puppeteer from 'puppeteer'
import isint from 'wsemi/src/isint.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import iser from 'wsemi/src/iser.mjs'
import cint from 'wsemi/src/cint.mjs'


/**
 * 瀏覽網址並用screenshot取得圖片base64資料
 *
 * @memberOf w-puppeteer-uitest
 * @param {String} url 輸入瀏覽網址，可為本機檔案絕對或相對位置
 * @param {Object} [opt={}] 輸入設定檔，預設為{}
 * @param {Boolean} [opt.headless=true] 輸入是否以無頭方式開啟網頁，預設為true
 * @param {Object} [opt.viewport={ width: 800, height: 600 }] 輸入網頁開啟後之viewport，預設為{ width: 800, height: 600 }
 * @param {Array} [opt.actions=[]] 輸入網頁開啟後之操作動作，預設為[]
 * @param {Object} opt.action 輸入action動作物件
 * @param {Object} opt.action.mode 動作模式字串，可選'wait','move','elemove','elehover',drag','eledrag','click','eleclick','dbclick','eledbclick','type','eletype'
 * @param {Object} opt.action 若action.mode使用'wait'，需再輸入{time}，單位為毫秒
 * @param {Object} opt.action 若action.mode使用'resize'，需再輸入{width,height}，為網頁可視區域(viewport)的長寬，單位為整數
 * @param {Object} opt.action 若action.mode使用'move'，需再輸入{x1,y1}，為相對網頁內容左上角位置，單位為px
 * @param {Object} opt.action 若action.mode使用'elemove'，需再輸入{selector,nth(可選)}，selector為css選擇器，nth為陣列結果取第nth個dom元素
 * @param {Object} opt.action 若action.mode使用'elehover'，需再輸入{selector}，selector為css選擇器，若有超過1個結果則取第1個dom元素
 * @param {Object} opt.action 若action.mode使用'drag'，需再輸入{x1,y1,x2,y2}，由(x1,y1)拖曳至(x2,y2)，為相對網頁內容左上角位置，單位為px
 * @param {Object} opt.action 若action.mode使用'eledrag'，需再輸入{selector,nth(可選),shiftx,shifty}，由元素中心拖曳平移(shiftx,shifty)，selector為css選擇器，nth為陣列結果取第nth個dom元素，shiftx,shifty單位為px
 * @param {Object} opt.action 若action.mode使用'click'，需再輸入{x1,y1}，為相對網頁內容左上角位置，單位為px
 * @param {Object} opt.action 若action.mode使用'eleclick'，需再輸入{selector,nth(可選)}，selector為css選擇器，nth為陣列結果取第nth個dom元素
 * @param {Object} opt.action 若action.mode使用'dbclick'，需再輸入{x1,y1}，為相對網頁內容左上角位置，單位為px
 * @param {Object} opt.action 若action.mode使用'eledbclick'，需再輸入{selector,nth(可選)}，selector為css選擇器，nth為陣列結果取第nth個dom元素
 * @param {Object} opt.action 若action.mode使用'type'，需再輸入{str}，為由當前焦點輸入文字str
 * @param {Object} opt.action 若action.mode使用'eletype'，需再輸入{selector,nth(可選),str}，selector為css選擇器，nth為陣列結果取第nth個dom元素，通過click該dom元素作為焦點輸入文字str
 * @param {Object} opt.action 若action.mode使用'type'，需再輸入{str}，為由當前焦點輸入文字str
 * keypress
 * @param {Integer} [opt.waitsec=5] 輸入開啟網頁後之等待時間，單位為秒，預設為5
 * @returns {String} 回傳screenshot圖片轉base64資料
 */
async function getB64(url, opt = {}) {


    //headless
    let headless = get(opt, 'headless')
    if (!isbol(headless)) {
        headless = true //true false
    }


    //viewport
    let viewport = get(opt, 'viewport')
    if (!isobj(viewport)) {
        viewport = {
            x: 0,
            y: 0,
            width: 800,
            height: 600,
        }
    }


    //action
    let actions = get(opt, 'actions')
    if (!isarr(actions)) {
        actions = []
    }


    //waitsec
    let waitsec = get(opt, 'waitsec')
    if (!isint(waitsec)) {
        waitsec = 5
    }


    //new page
    let olaunch = {
        //timeout: 0,
        headless: headless,
        slowMo: 20,
        // arg: [
        //     //`--window-size=${viewport.width},${viewport.height}`, //無效
        //     //`--disable-resize-lock`, //無效
        // ],
        // defaultViewport: { //無效
        //     x: 0,
        //     y: 0,
        //     width: 800,
        //     height: 600,
        // }
    }
    let browser = await puppeteer.launch(olaunch)
    let page = await browser.newPage()


    //show page
    await page.goto(url)
    await page.setViewport(viewport)
    // await page.emulate({ //無效
    //     viewport: {
    //         width: viewport.width,
    //         height: viewport.height,
    //     },
    //     userAgent: ''
    // })

    //getxy
    async function getxy(selector, n = 0) {

        //n
        n = cint(n)

        //ele
        let ele
        if (n === 0) {
            ele = await page.$(selector)
            if (iser(ele)) {
                console.log('page.$ get no result: ' + selector)
            }
        }
        else {
            let eles = await page.$$(selector)
            if (eles.length === 0) {
                console.log('page.$$ get no result: ' + selector)
            }
            ele = eles[n]
        }

        //r
        if (!ele.boundingBox) {
            console.log('ele.boundingBox get no result: ' + selector)
        }
        let r = await ele.boundingBox()
        r['cx'] = r.x + r.width / 2
        r['cy'] = r.y + r.height / 2
        r['ele'] = ele
        // let r = await page.evaluate((e) => {
        //     let { top, left, bottom, right } = e.getBoundingClientRect()
        //     return {
        //         top: top,
        //         left: left,
        //         bottom: bottom,
        //         right: right,
        //         cx: (left + right) / 2,
        //         cy: (top + bottom) / 2,
        //     }
        // }, ele)

        return r
    }


    //wait
    await page.waitFor(waitsec * 1000)


    //action
    await b.mapSeries(actions, async function(v) {
        if (v.mode === 'wait') {
            await page.waitFor(v.time)
        }
        else if (v.mode === 'resize') {
            await page.waitFor(300)
            await page.setViewport({
                x: 0,
                y: 0,
                width: v.width,
                height: v.height,
            })
            await page.waitFor(300)
        }
        else if (v.mode === 'move') {
            await page.waitFor(300)
            await page.mouse.move(v.x1, v.y1)
            await page.waitFor(300)
        }
        else if (v.mode === 'elemove') {
            await page.waitFor(300)
            let r = await getxy(v.selector, v.nth)
            await page.mouse.move(r.cx, r.cy)
            await page.waitFor(300)
        }
        else if (v.mode === 'elehover') {
            await page.waitFor(300)
            await page.hover(v.selector)
            await page.waitFor(300)
        }
        else if (v.mode === 'drag') {
            await page.waitFor(300)
            await page.mouse.move(v.x1, v.y1)
            await page.mouse.down()
            await page.waitFor(300)
            await page.mouse.move(v.x2, v.y2, { steps: 50 })
            await page.waitFor(300)
            await page.mouse.up()
            await page.waitFor(300)
        }
        else if (v.mode === 'eledrag') {
            await page.waitFor(300)
            let r = await getxy(v.selector, v.nth)
            await page.mouse.move(r.cx, r.cy)
            await page.mouse.down()
            await page.waitFor(300)
            await page.mouse.move(r.cx + v.shiftx, r.cy + v.shifty, { steps: 50 })
            await page.waitFor(300)
            await page.mouse.up()
            await page.waitFor(300)
        }
        else if (v.mode === 'click') {
            await page.waitFor(300)
            await page.mouse.move(v.x1, v.y1)
            await page.mouse.down()
            await page.mouse.up()
            await page.waitFor(300)
        }
        // else if (v.mode === 'eleclickB') {
        //     await page.waitFor(300)
        //     await page.click(v.selector)
        //     await page.waitFor(300)
        // }
        else if (v.mode === 'eleclick') {
            await page.waitFor(300)
            let r = await getxy(v.selector, v.nth)
            await r.ele.click()
            // await page.mouse.move(r.cx, r.cy)
            // await page.waitFor(50)
            // await page.mouse.down()
            // await page.mouse.up()
            await page.waitFor(300)
        }
        else if (v.mode === 'dbclick') {
            await page.waitFor(300)
            await page.mouse.click(v.x1, v.y1, { clickCount: 2 })
            await page.waitFor(300)
        }
        // else if (v.mode === 'eledbclickB') {
        //     await page.waitFor(300)
        //     await page.click(v.selector, { clickCount: 2 })
        //     await page.waitFor(300)
        // }
        else if (v.mode === 'eledbclick') {
            await page.waitFor(300)
            let r = await getxy(v.selector, v.nth)
            await r.ele.click({ clickCount: 2 })
            //await page.mouse.move(r.cx, r.cy)
            // //await page.waitFor(50)
            // await page.mouse.down()
            // await page.mouse.move(r.cx, r.cy)
            // await page.mouse.up()
            // //await page.waitFor(50)
            // await page.mouse.move(r.cx, r.cy)
            // await page.mouse.down()
            // await page.mouse.move(r.cx, r.cy)
            // await page.mouse.up()
            await page.waitFor(300)
        }
        else if (v.mode === 'type') {
            await page.waitFor(300)
            await page.keyboard.type(v.str, { delay: 50 })
            await page.keyboard.type(String.fromCharCode(13))
            await page.waitFor(300)
        }
        else if (v.mode === 'eletype') {
            await page.waitFor(300)
            let r = await getxy(v.selector, v.nth)
            await r.ele.click()
            await page.waitFor(50)
            await page.keyboard.type(v.str, { delay: 50 })
            await page.keyboard.type(String.fromCharCode(13))
            await page.waitFor(300)
        }
        else if (v.mode === 'keypress') {
            await page.waitFor(300)
            await page.keyboard.press(v.key) //Backspace, ArrowLeft, ArrowRight, ArrowTop, ArrowBottom
            await page.waitFor(300)
        }
        else {
            console.log('mode is unrecognized: ' + v.mode)
        }
        // else if (v.mode === 'press') {
        //     await page.waitFor(300)
        //     //await page.keyboard.press(v.key, { delay: 50 })
        //     //await page.keyboard.sendCharacter(String.fromCharCode(9))
        //     //await page.keyboard.press(String.fromCharCode(9))
        //     //await page.keyboard.type('\t')
        // }
    })


    //wait
    await page.waitFor(2000) //預設等2s才視為action全部結束


    // //get base64 from screenshot, 此法雖能sceenshot到tooltip, 但內容物(例:ag-grid)會爆版
    // //add html2canvas and html2pic64
    // await page.addScriptTag({ url: 'https://html2canvas.hertzen.com/dist/html2canvas.min.js' })
    // let cfun = `
    // function html2pic64(ele) {
    //     //類似print screen將html轉為base64圖片

    //     return new Promise((resolve, reject) => {
    //         let opt={
    //             logging:false, //不要console.log
    //             scale:1, //anti-aliasing
    //             width:${viewport.width},
    //             height:${viewport.height},
    //         }
    //         html2canvas(ele, opt)
    //             .then(function (canvas) {
    //                 resolve(canvas.toDataURL('image/png'))
    //             })
    //             .catch(function (msg) {
    //                 reject(msg)
    //             })
    //     })
    // }
    // `
    // await page.addScriptTag({ content: cfun })
    // let base64 = await page.evaluate(() => {
    //     return html2pic64(document.body)
    // })
    // base64 = base64.replace('data:image/png;base64,', '') //取代掉給img用之開頭符號


    //get base64 from screenshot, 此法最不會爆版, 但screenshot前會先resize至原始dpi(例:96), 導致tooltip被自動隱藏無法截到圖
    //已恢復正常
    let base64 = await page.screenshot({ encoding: 'base64' }) //fullPage: true


    //close
    await page.close()
    await browser.close()


    return base64
}


export default getB64
