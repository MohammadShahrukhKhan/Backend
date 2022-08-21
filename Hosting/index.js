// HTTP Module 

const http = require('http')
const PORT = 3000
const host_name = '00.00.00.00'

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Welcome to my homepage')
})

server.listen(PORT)
console.log(`Server started at http://${host_name}:${PORT}`)