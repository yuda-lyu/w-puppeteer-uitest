import { buildExpected, testExpected } from './src/testScreenshot.mjs'


let fd = 'D:\\開源-NodeJS-w-puppeteer-uitest\\w-puppeteer-uitest\\'
let fd_src = fd + 'test-html\\'
let fd_tar = fd + 'test-screenshot\\'
let fd_mod = '../test-src/' //動態載入(dynamic import)模組之相對路徑, 位置需由importGetB64FromScreenshot內計算, 故需先..跳出才進/test-src


let mode = 'build'
mode = ''
if (mode === 'build') {
    buildExpected(fd_src, fd_tar, fd_mod)
}
else {
    testExpected(fd_src, fd_tar, fd_mod)
}
