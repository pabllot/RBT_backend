import { db } from './connect.js'

export const getOrders = (req, res) => {
    const q = "SELECT * FROM pedidos"

    db.query(q, (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
}

export const getPizzas = (req, res) => {
    const q = "SELECT * FROM pizzas"

    db.query(q, (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
}

export const addOrder = (req, res) => {
    const q = "INSERT INTO `rbt`.`pedidos` (`name`, `pizza`, `price`, `quantity`) VALUES (?)"

    const values = [req.body.form.name, req.body.form.pizza, req.body.form.price, req.body.form.quantity]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
}

export const cancelOrder = (req, res) => {
    const q = "UPDATE `rbt`.`pedidos` SET `status` = '3' WHERE (`id` = ?)"

    db.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
}

export const orderDone = (req, res) => {
    const q = "UPDATE `rbt`.`pedidos` SET `status` = '2' WHERE (`id` = ?)"

    db.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
}

export const deleteOrder = (req, res) => {
    const q = "DELETE FROM `rbt`.`pedidos` WHERE (`id` = ?);"

    db.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
}