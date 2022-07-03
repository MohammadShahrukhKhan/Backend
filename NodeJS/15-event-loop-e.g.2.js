
const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(80);
console.log('Server started at http://localhost:' + 80);
