let assert = require('assert')
let fs = require('fs')
let getB64 = require('../../dist/w-puppeteer-uitest-getB64.umd.js')
let fd = 'D:/開源-NodeJS-w-puppeteer-uitest/w-puppeteer-uitest/' //瀏覽器開本機檔(無伺服器)需絕對路徑


function getB64ByAction(fn) {
    let opt = {
        actions: [
            {
                mode: 'eleclick',
                selector: '#btn',
            },
        ]
    }
    return getB64(fn, opt)
}


describe('ex-click', function() {

    it('base64 should be equal', function() {
        getB64ByAction(fd + 'test-html/ex-click.html')
            .then((b64_now) => {
                let b64_exp = fs.readFileSync(fd + 'test-screenshot/ex-click.base64', 'utf8')
                let b = b64_now === b64_exp
                assert.strict.deepEqual(b, true)
            })
    })

})
