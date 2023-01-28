const express = require('express')
const sqlite = require('sqlite3').verbose();
const cors = require('cors');
const crypto = require('crypto');
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');

dotenv.config()

const app = express()
app.use(cors());
app.use(express.json())
const path = require('path');
const db = new sqlite.Database(path.join(__dirname, 'Data.db'));

app.post("/signup",(req, res)=>{
    const item = req.body
    console.log(item);
    db.all('select * from signup', (err, rows) => {
        if(err){}
        else{
            console.log('db rows: ', {rows});
        }
    })
    const ID = crypto.randomBytes(5).toString('hex')

    db.exec(`INSERT INTO signup(id,name,email,password) VALUES('${ID}', '${item.name}', '${item.email}', '${item.password}')`, (err) => {
        if(err) return res.sendStatus(500);
        res.sendStatus(200); //success
       const saveData =  db.run(`select * from signup where id = ('${ID}')`)
       const token = jwt.sign(
            {userID : saveData.id},
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        )
        console.log(token);
        });

})

app.get("/signup",(req , res)=>{
    res.send("Hello")
})
// const port = 2000
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server listening on ${port} :`)
} )
