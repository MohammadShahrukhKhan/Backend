const express = require('express')
const app = express()

const port = 5000
const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./public'))
// parse form data 
app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use('/api/people', people)
app.use('/Contact', auth)

app.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})
