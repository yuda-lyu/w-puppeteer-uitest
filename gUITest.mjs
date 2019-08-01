import { build, test } from './src/exp.mjs'
import readJson from './src/readJson.mjs'


let fd = 'D:\\開源-Javascript-w-puppeteer-uitest\\w-puppeteer-uitest\\'
let fd_html = fd + 'test-html\\'
let fd_action = fd + 'test-action\\'
let fd_out = fd + 'test-screenshot\\'


function readAction(name) {
    return readJson(fd_action + name + '.action.json')
}


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
//build(fd_html, readAction, fd_out, optExp)
test(fd_html, readAction, fd_out, optExp)

