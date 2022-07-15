/// query string 
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

app.get('/api/v1/query', (req, res)=>{ 
  console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

if (search){
  sortedProducts = sortedProducts.filter((product)=>{
    return product.name.startsWith(search)
  })
}
if (limit){
  sortedProducts = sortedProducts.slice(0, Number(limit))
}
if (sortedProducts.length < 1){
  // res.status(200).send('There are no products matching your search keyword')
  return res.status(200).json({success: true, data: []})
}
res.status(200).json(sortedProducts)
  // res.send('Hello world')
})

app.listen(port, ()=>{
  console.log(`Serving at http://localhost:${port}`)
})

// http://localhost:5000/api/v1/query?search=h&limit=1
// search is used for the products name keyword and limit is used to limit the number of searches 
