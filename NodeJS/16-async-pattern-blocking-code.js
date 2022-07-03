const http = require('http')

const port = 150

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        res.end('This is homepage')
    }
    else if(req.url == '/about'){
        // BLOCKING CODE
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('about page')
    }
    else{
        res.end('There is an error')
    }
})

server.listen(port, ()=>{
    console.log(`listenimg on port https://localhost:${port}`)
})
