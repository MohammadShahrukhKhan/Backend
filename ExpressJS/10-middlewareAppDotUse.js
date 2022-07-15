// Middleware - app.use

const express = require('express')
const app = express()
const port = 5000
const logger = require('./logger.js')

app.use('/api', logger) // only applies to those get methods which are below it and having path '/api'

app.get('/', (req, res) => {
    res.send('<h1>HOME</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>ABOUT</h1>')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})
