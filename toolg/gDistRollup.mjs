import _ from 'lodash-es'
import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
import getFiles from 'w-package-tools/src/getFiles.mjs'


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
        'jimp': 'jimp',
        'puppeteer': 'puppeteer',
        'json5': 'json5',
    },
    external: [
        'fs',
        'jimp',
        'puppeteer',
        'json5',
    ],
})

