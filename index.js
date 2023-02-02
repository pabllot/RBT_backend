import express from 'express'
import cors from 'cors'

import { addOrder, cancelOrder, deleteOrder, getOrders, getPizzas, orderDone } from './controllers.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json('backend is working!!!')
})

app.get("/pizzas", getPizzas)
app.get("/pedidos", getOrders)
app.post("/pizzas", addOrder)
app.post("/pedidos/cancelados", cancelOrder)
app.post("/pedidos/concluidos", orderDone)
app.delete("/pedidos/delete/:id", deleteOrder)

app.listen(8800, () => {
    console.log("Connected to backend!")
})