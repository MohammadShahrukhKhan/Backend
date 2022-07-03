const {readFile} = require('fs')
// const { result, stubArray } = require('lodash')

const getText = (path) =>{
    return new Promise((resolve, reject)=>{
  readFile(path, 'utf8', (err, data)=> {
      if (err){
          reject(err)
      }
      else{
          resolve(data)
      }
  })       
    })
}

// METHOD 1
getText('./content/subfolder/test.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err))

// METHOD 2 
const start  = async() =>{
    try {
        const first =  await getText('./content/subfolder/test.txt')
        console.log(first)
    } catch (error) {
        console.log(error)
    }   
}

start()