// http - app example 
const { readFileSync } = require('fs')
const http = require('http')
const port = 80

const homepage = readFileSync('./NavbarApp/index.html')
const homestyles = readFileSync('./NavbarApp/styles.css')
const homeImage = readFileSync('./NavbarApp/blockchain.jpg')

const server = http.createServer((req, res)=>{
    // res.writeHead(200, {'content-type':'text/html'})
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    console.log(req.method)

    const url = req.url
    console.log(url)

    // Home page 
    if (url === '/'){
        res.write(homepage)
        res.end()
    }
    // About page 
    else if (url === '/about'){
        res.write('<h1>About page<h1/>')
        res.end()
    }
    // styles 
    else if (url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homestyles)
        res.end()
    }
    // image 
    else if (url === '/blockchain.jpg'){
        res.writeHead(200, {'content-type':'image/jpg+xml'})
        res.write(homeImage)
        res.end()
    }
    // error 
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>404 page not found<h1/>')
        res.end()
    }
})

server.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})
