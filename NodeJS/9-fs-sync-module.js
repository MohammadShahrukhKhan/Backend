// FS (Sync.) Module

const {readFileSync, writeFileSync} = require('fs')

const test = readFileSync('./content/subfolder/test.txt', 'utf8')
const test2 = readFileSync('./content/subfolder/test.txt', 'utf8')
console.log(test, test2)

const result = writeFileSync('./content/subfolder2/result.txt', `Here is the result: ${test}, ${test2}`, {flag: 'a'})
console.log(result)