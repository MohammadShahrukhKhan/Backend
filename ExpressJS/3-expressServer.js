// Express - app example 
const express = require("express");
const server = express()
const path = require('path')
const port = 80

server.use(express.static('./NavbarApp'))

server.get('/', (req, res)=> {
    res.status(200).sendFile(path.resolve(__dirname, './NavbarApp/index.html'))
})

server.all('*', (req, res)=>{
    res.status(404).send('<h1>404 resource not found</h1>')
})

server.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})