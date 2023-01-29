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

app.post("/signup", (req, res) => {
    const item = req.body
    console.log(item);
    const ID = crypto.randomBytes(5).toString('hex')

    db.exec(`INSERT INTO signup(id,name,email,password) VALUES('${ID}', '${item.name}', '${item.email}', '${item.password}')`, (err) => {
        if (err) return res.sendStatus(500);
        return res.sendStatus(200); //success
    });

})

app.post('/auth', async(req, res) => {
    const { token } = req.body;
    if (token) {
        const { email, password } = jwt.verify(token, process.env.SECRET_KEY);

        db.all(`SELECT * from signup where email='${email}' and password='${password}'`, (err, rows) => {
            if (err) return res.sendStatus(501);
            console.log({ user: rows[0] });
            if (rows.length > 0) {
                return res.sendStatus(200);
            }
            return res.sendStatus(501);
        });
    }
});

app.post("/login", async(req, res) => {
        const { email, password } = req.body;
        if (email && password) {
            console.log({ email, password })
            db.all(`SELECT * from signup where email='${email}' and password='${password}'`, (err, rows) => {
                if (err) return res.sendStatus(501);
                console.log({ user: rows[0] });
                if (rows.length > 0) {
                    const token = jwt.sign({ email, password }, process.env.SECRET_KEY);
                    return res.send(token);
                }
                return res.sendStatus(501);
            });
        }
    })
    // const port = 2000
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server listening on ${port} :`)
})