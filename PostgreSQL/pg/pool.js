const express = require('express')

const app = express()

const {Pool} = require('pg')

const port = process.env.PORT || 9000

const pool = new Pool({
    "host": "localhost",
    "port": 3000,
    "user": "postgres",
    "password": "1Windower",
    "database": "mechanificial",
    "max": 20,
    "connectionTimeoutMillis": 0,
    "idleTimeoutMillis": 0
})

app.get("/", async (req, res) => {
    const fromDate = new Date();

    // return all rows
    const results = await pool.query("select * from userdata")
    console.table(results.rows)

    const toDate = new Date()
    const elapsed = toDate.getTime() - fromDate.getTime()

    // send it to the wire
    res.send({"rows": results.rows, "elapsed": elapsed, "method": "pool"})
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})