// commonJS, every file is a module by default 
// Modules - Encapsulated code (only share minimum )

const { tyre, fire } = require("./3-names")
const lesson = require("./4-utils")
const data = require('./5-alter-syntax') // variable can be anything
require('./6-mind-grenade') // also works without assigning variables
// require('./app.js')

console.log({ tyre, fire })

console.log(data)

lesson('hire')
lesson(tyre)
lesson(fire)
