import { buildExpected, testExpected } from './src/testScreenshot.mjs'


let fd = 'D:\\開源-NodeJS-w-puppeteer-uitest\\w-puppeteer-uitest\\'
let fd_html = fd + 'test-html\\'
let fd_screen = fd + 'test-screenshot\\'
let fd_action = '../test-src/' //動態載入(dynamic import)模組之相對路徑, 位置需由importGetB64FromScreenshot內計算, 故需先..跳出才進/test-src


//各範例之正確圖base64資料, 需使用buildExpected批次建立
//可使用test內的mocha測試js, 其內皆使用require模組撰寫
//若要使用es6 import, 需要node_modules內js皆為已編譯為require模組, mocha目前用babel設定強制轉換node_modules內es6 import程式碼失效


let mode = 'build'
mode = ''
if (mode === 'build') {
    buildExpected(fd_html, fd_screen, fd_action)
}
else {
    testExpected(fd_html, fd_screen, fd_action)
}
