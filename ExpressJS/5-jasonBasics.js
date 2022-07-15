// jason basics 
const express = require('express')
const app = express()
const port = 5000
const { products } = require('./data')

app.get('/', (req, res) => {
  res.json(products)
})

app.listen(port, ()=>{
  console.log(`Serving at http://localhost:${port}`)
})
