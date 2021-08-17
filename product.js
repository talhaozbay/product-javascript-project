const {Client} = require('pg')

var client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "product"
})

client.connect();

client.query(`Select * from users` , (err, res) =>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message)
    }
})