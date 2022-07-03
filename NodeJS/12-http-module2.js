const http = require('http')
const port = 150

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        res.end('welcome to my homepage')
    }
    else if (req.url == '/about'){
        res.end('here is our short history')
    }
    else {
        res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML</title>
    </head>
    <body>
        <h3>Tutorial</h3>
        <div>This is mainBox</div>
        <div>wow</div>
        <span> This is MainPoint</span>
        <span> ek</span>
        <span> do</span>
        <span> teen</span>
        <span> chaar</span>
        <span> paanch</span>
        <span> chhay</span>
    </body>
    </html>`)}
})

server.listen(port);
console.log('Server started at http://localhost:' + port + '/error');