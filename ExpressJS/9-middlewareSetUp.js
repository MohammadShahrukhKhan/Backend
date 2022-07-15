// Middleware - Setup 

const express = require('express')
const app = express()
const port = 5000
const logger = require('./logger.js')

// req => middleware => res

app.get('/', logger,(req, res) => {
    res.send('<h1>HOME</h1>')
})

app.get('/about', logger,(req, res) => {
    res.send('<h1>ABOUT</h1>')
})

app.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})
