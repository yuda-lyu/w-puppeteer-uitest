import { build, test } from './src/exp.mjs'


let fd = 'D:\\開源-NodeJS-w-puppeteer-uitest\\w-puppeteer-uitest\\'
let fd_html = fd + 'test-html\\'
let fd_action = 'test-src\\'
let fd_out = fd + 'test-screenshot\\'


let optExp = {
    headless: true,
    num_web: 10,
    ratio_similar: 0.97,
    // htmlFilter: function(vs) {
    //     console.log(vs)
    //     return vs.filter(function(v) {
    //         return v.indexOf('hover') >= 0
    //     })
    // },
}
//build(fd_html, fd_action, fd_out, optExp)
test(fd_html, fd_action, fd_out, optExp)

