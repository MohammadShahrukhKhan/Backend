const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    try {
        const first =  await readFilePromise('./content/subfolder/test.txt', 'utf8')
        await writeFilePromise('./content/subfolder2/result.txt', `Hey Dude: ${first}`)
        console.log(first)
    } catch (error) {
        console.log(error)
    }   
}

start()