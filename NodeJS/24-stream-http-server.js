const http = require('http')
const fs = require('fs')
const text = fs.readFileSync('./content/subfolder2/result.txt')
const port = 5000

const server = http.createServer(function (req, res){
    // res.end(text)
    const fileStream = fs.createReadStream('./content/subfolder2/result.txt') // must be inside http server
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
})

server.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})