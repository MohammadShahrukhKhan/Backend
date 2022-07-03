// PATH Module 

const path = require('path')
console.log(path.sep) // gives \

const filepath = path.join('/content', 'subfolder', 'test.txt') // creates path for the file in the folder
console.log(filepath)

const base = path.basename(filepath) //shows name of the base folder/file
console.log(base)

const abs = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // shows absolute path of the folder 
console.log(abs)
