import getB64 from '../src/getB64.mjs'


async function getB64ByAction(fn) {
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
            // { //wait使滑鼠游標消失
            //     mode: 'wait',
            //     time: 300,
            // },
        ]
    }
    return getB64(fn, opt)
}


export default getB64ByAction

