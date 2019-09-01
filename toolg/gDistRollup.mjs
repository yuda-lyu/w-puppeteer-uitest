import _ from 'lodash'
import rollupFiles from '../tool/rollupFiles.mjs'
import getFiles from '../tool/getFiles.mjs'


let fdSrc = './src'
let fdTar = './dist'
let fns = getFiles(fdSrc)
fns = _.filter(fns, (v) => {
    return v.indexOf('_class') < 0
})

rollupFiles({
    fns: fns,
    fdSrc,
    fdTar,
    //nameDistType: 'kebabCase',
    globals: {
        'fs': 'fs',
        'bluebird': 'bluebird',
        'jimp': 'jimp',
        'puppeteer': 'puppeteer',
        'json5': 'json5',
    },
    external: [
        'fs',
        'bluebird',
        'jimp',
        'puppeteer',
        'json5',
    ],
})

