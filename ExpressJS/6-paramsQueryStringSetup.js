// params query string setup 
const express = require('express')
const app = express()
const port = 5000
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res)=>{
  const newProducts = products.map((product)=>{
    const {id, name, price,} = product
    return {id, name, price,}
  })
  res.json(newProducts)
})

app.get('/api/products/1', (req, res)=>{
    const singleProducts = products.find((product)=> product.id === 1)
    res.json(singleProducts)
  })

app.listen(port, ()=>{
  console.log(`Serving at http://localhost:${port}`)
})
