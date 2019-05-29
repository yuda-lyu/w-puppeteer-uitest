import getB64 from '../src/getB64.mjs'


async function getB64ByAction(fn) {
    let opt = {
        actions: [
            {
                mode: 'eledbclick',
                selector: '#btn',
            },
        ]
    }
    return getB64(fn, opt)
}


export default getB64ByAction

