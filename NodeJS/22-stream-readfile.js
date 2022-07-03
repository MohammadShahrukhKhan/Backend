const {createReadStream} = require('fs')

const stream = createReadStream('./content/subfolder/test.txt', {encoding: 'utf8'})
const stream2 = createReadStream('./content/subfolder/test.txt', {highWaterMark: 100})
const stream3 = createReadStream('../content/subfolder/test.txt') //gives error

stream.on('data', (result)=>{
    console.log(result)
})

stream2.on('data', (result)=>{
    console.log(result)
})

stream3.on('data', (err) => console.log(err)) // for error