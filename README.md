# w-puppeteer-uitest
A uitest package for web developer.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-puppeteer-uitest.svg?style=flat)](https://npmjs.org/package/w-puppeteer-uitest) 
[![license](https://img.shields.io/npm/l/w-puppeteer-uitest.svg?style=flat)](https://npmjs.org/package/w-puppeteer-uitest) 
[![npm download](https://img.shields.io/npm/dt/w-puppeteer-uitest.svg)](https://npmjs.org/package/w-puppeteer-uitest) 
[![npm download](https://img.shields.io/npm/dm/w-puppeteer-uitest.svg)](https://npmjs.org/package/w-puppeteer-uitest) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-puppeteer-uitest.svg)](https://www.jsdelivr.com/package/npm/w-puppeteer-uitest)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-puppeteer-uitest/w-puppeteer-uitest.html).

## Installation
### Using npm(ES6 module):
> **Note:** w-puppeteer-uitest is mainly dependent on `puppeteer`, `jimp`, `lodash-es`, `wsemi`
```alias
npm i w-puppeteer-uitest
```

#### Example
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-puppeteer-uitest/blob/master/scla.mjs)]
```alias
import { build, test } from './src/exp.mjs'
import readJson from './src/readJson.mjs'

let fd = 'D:\\開源-JS-003-2-w-puppeteer-uitest\\w-puppeteer-uitest\\'
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

```
