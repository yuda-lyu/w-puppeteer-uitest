import getB64FromScreenshot from '../src/getB64FromScreenshot.mjs'


async function getb64(fn) {
    let opt = {
        actions: [
            {
                mode: 'elehover',
                selector: '#btn',
            },
        ]
    }
    return getB64FromScreenshot(fn, opt)
}


export default getb64

