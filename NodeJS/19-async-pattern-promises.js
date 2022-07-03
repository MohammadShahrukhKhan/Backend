const {readFile, writeFile} = require('fs').promises

const start = async () =>{
    try {
        const first =  await readFile('./content/subfolder/test.txt', 'utf8')
        await writeFile('./content/subfolder2/result.txt', `Hi : ${first}`)
        console.log(first)
    } catch (error) {
        console.log(error)
    }   
}

start()