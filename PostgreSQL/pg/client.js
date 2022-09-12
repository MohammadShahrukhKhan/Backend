const express = require('express')

const app = express()

const {Client} = require('pg')

const port = process.env.PORT || 9000

app.get("/", async (req, res) => {
    const fromDate = new Date()

    const client = new Client({
        "host": "localhost",
        "port": 5432,
        "user": "postgres",
        "password": "your_password",
        "database": "your_database"
    })
    // connect
    await client.connect()
    // return all rows
    const results = await client.query("select * from your_table")
    console.table(results.rows)
    // end
    client.end()

    const toDate = new Date()
    const elapsed = toDate.getTime() - fromDate.getTime()

    // send it to the wire
    res.send({"rows": results.rows, "elapsed": elapsed, "method": "client"})
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})
