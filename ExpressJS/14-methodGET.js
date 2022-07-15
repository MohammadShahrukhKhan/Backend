// Get Method

const express = require('express')
const app = express()
const port = 5000
let {people} = require('./data')

app.get('/api/people', (req, res)=>{
    res.status(200).json({success: true, data: people})
})

app.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})
