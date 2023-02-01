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

app.get("/pedidos", (req, res) => {
    const q = "SELECT * FROM pedidos"

    db.query(q, (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.post("/pizzas", (req, res) => {
    const q = "INSERT INTO `rbt`.`pedidos` (`name`, `pizza`, `price`, `quantity`) VALUES (?)"

    const values = [req.body.form.name, req.body.form.pizza, req.body.form.price, req.body.form.quantity]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.post("/pedidos/cancelados", (req, res) => {
    const q = "UPDATE `rbt`.`pedidos` SET `status` = '3' WHERE (`id` = ?)"

    db.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.post("/pedidos/concluidos", (req, res) => {
    const q = "UPDATE `rbt`.`pedidos` SET `status` = '2' WHERE (`id` = ?)"

    db.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
})
app.post("/pedidos/delete", (req, res) => {
    const q = "DELETE FROM `rbt`.`pedidos` WHERE (`id` = ?);"

    db.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!!")
})