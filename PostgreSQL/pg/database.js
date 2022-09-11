const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "your_password",
    database: "your_database"
})

client.connect();

client.query(`select * from your_table`, (err, result)=>{
    if(!err){
        console.log(result.rows);
        // console.log(result);
    }
    client.end();
})
