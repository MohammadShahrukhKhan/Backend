const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 3000,
    user: "postgres",
    password: "1Windower",
    database: "mechanificial"
})

client.connect();

client.query(`select * from userdata`, (err, result)=>{
    if(!err){
        console.log(result.rows);
        // console.log(result);
    }
    client.end();
})