// Express Basics 
const express = require('express')
const server = express()
const port = 80

server.get('/', (req, res)=>{
    console.log('page1')
    res.status(200).send('<h1>Home</h1>')
})

server.get('/about', (req, res)=>{
    console.log('page2')
    res.status(200).send('About')
})

server.all('*', (req, res)=>{
    res.status(404).send('<h1>404 not found</h1>')
})

server.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})
