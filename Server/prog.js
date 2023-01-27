// import Data from './Data.db';
// const Data = require('./Data.db')
const express = require('express')
const sqlite = require('sqlite3').verbose();
const cors = require('cors')

const app = express()
app.use(cors());
const path = require('path');
const db = new sqlite.Database(path.join(__dirname, 'Data.db'));

app.post("/",(req, res)=>{
    const item = req.body
    console.log(item);
    // db.run(`INSERT INTO signup(id,name,email,password) VALUES${item}`);
})

app.get("/",(req , res)=>{
    res.send("Hello")
})
const port = 5000
app.listen(port, ()=>{
    console.log(`listening on ${port} :`)
} )
