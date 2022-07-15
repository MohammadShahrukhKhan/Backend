// all files in one static folder
const express = require("express");
const server = express()
const path = require('path')
const port = 80

// static - middleware

server.use(express.static('./public'))

server.all('*', (req, res)=>{
    res.status(404).send('<h1>404 resource not found</h1>')
})

server.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})