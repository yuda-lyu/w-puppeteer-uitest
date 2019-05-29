let assert = require('assert')
let fs = require('fs')
let getB64 = require('../dist/w-puppeteer-uitest-getB64.umd.js')
let fd = 'D:/開源-NodeJS-w-puppeteer-uitest/w-puppeteer-uitest/'


function getB64ByAction(fn) {
    let opt = {
        actions: [
            {
                mode: 'eleclick',
                selector: '#inp',
            },
            {
                mode: 'type',
                str: 'abc123',
            },
        ]
    }
    return getB64(fn, opt)
}


describe('ex-type', function() {

    it('base64 should be equal', function() {
        getB64ByAction(fd + 'test-html/ex-type.html')
            .then((b64_now) => {
                let b64_exp = fs.readFileSync(fd + 'test-screenshot/ex-type.base64', 'utf8')
                let b = b64_now === b64_exp
                assert.strict.deepEqual(b, true)
            })
    })

})