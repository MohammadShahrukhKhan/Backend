// FS (Async) Module 

const {readFile, writeFile} = require('fs')

console.log('start')

readFile('./content/subfolder/test.txt', 'utf8', (err, result)=>{
    if(err){
     return err
    }
    // console.log(result)
    const first = result
    readFile('./content/subfolder/test.txt', 'utf8', (err, result)=>{
        if(err){
            return err
           }
           // console.log(result)
           const second = result
           writeFile('./content/subfolder2/result.txt',`Here are the results: ${first}, ${second}`, (err,result)=>{
            if(err){
                return err
               }
               console.log(result)
               console.log('done')
           })
    })
})

console.log('starting next one')