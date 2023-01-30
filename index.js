import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "rbt"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json('hello from the backend!!!')
})

app.get("/pizzas", (req, res) => {
    const q = "SELECT * FROM pizzas"

    db.query(q, (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!!")
})