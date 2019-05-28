import getB64FromScreenshot from '../src/getB64FromScreenshot.mjs'


async function getb64(fn) {
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
    return getB64FromScreenshot(fn, opt)
}


export default getb64

