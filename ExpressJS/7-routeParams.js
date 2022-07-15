// route params 
const express = require('express')
const app = express()
const port = 5000
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res)=>{
  const newProducts = products.map((product)=>{
    const {id, name, price} = product
    return {id, name, price}
  })
  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res)=>{
    // console.log(req)
    console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if (!singleProduct){
      return res.status(404).send('There is no such product')
    }
    console.log(singleProduct)
    res.json(singleProduct)
  })

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
  console.log(req.params)
  res.send('hello world')
})

app.listen(port, ()=>{
  console.log(`Serving at http://localhost:${port}`)
})
