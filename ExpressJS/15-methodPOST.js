const express = require('express')
const app = express()
const port = 5000
let {people} = require('./data')

// static assets
app.use(express.static('./public'))

// parse form data 
app.use(express.urlencoded({ extended : false }))

app.use(express.json())

app.get('/api/people', (req, res)=>{
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res)=>{
    const {name} =req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({success:true, person:name})
})

app.post('/api/postman/people', (req, res)=>{
    const {name} =req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({success:true, data: [...people, name]})
})

app.post('/Contact', (req, res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
})
