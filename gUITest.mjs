import { buildExpected, testExpected } from './src/testScreenshot.mjs'


let fd = 'D:\\開源-NodeJS-w-puppeteer-uitest\\w-puppeteer-uitest\\'
let fd_html = fd + 'test-html\\'
let fd_screen = fd + 'test-screenshot\\'
let fd_action = '../test-src/' //動態載入(dynamic import)模組之相對路徑, 位置需由importGetB64FromScreenshot內計算, 故需先..跳出才進/test-src


//可使用test/req內的mocha測試js, 其內皆使用require模組撰寫, 裡面呼叫getB64函數(使用瀏覽器快照html)是已編譯成umd，其原始動作js檔來自test-src
//若要使用es6 import, 需要node_modules內js皆為已編譯為require模組, 因mocha目前用babel設定強制轉換node_modules內es6 import程式碼失效, 故只能改寫require方式進行mocha測試
//mocha測試時是直接瀏覽本機檔(沒有開網頁伺服器瀏覽html), 上github使用travis-ci進行測試時, 會因沒辦法讀取絕對路徑而會失敗, 此處就只放替代測試檔(all.test.js)

//各範例之html寫在test-html內
//各範例之動作js寫在test-src內, 使用es6模組撰寫, 副檔名為(*.mjs)
//各範例之正確圖base64資料存放在test-screenshot, 可使用buildExpected批次建立
//各範例之單元測試, 可使用testExpected批次進行


let mode = 'build'
mode = ''
if (mode === 'build') {
    buildExpected(fd_html, fd_screen, fd_action)
}
else {
    testExpected(fd_html, fd_screen, fd_action)
}
