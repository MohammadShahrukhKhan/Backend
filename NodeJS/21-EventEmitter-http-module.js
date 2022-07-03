const http = require('http')
const port = 80

const server = http.createServer()

server.on('response', (req, res) => {
    console.log(req)
    res.write('some')
    res.end()
})
server.listen(port, () => {
    console.log(`serving at http://localhost:${port}`)
})