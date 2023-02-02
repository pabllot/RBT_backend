import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

import { addOrder, cancelOrder, deleteOrder, getOrders, getPizzas, orderDone } from './controllers.js'

const app = express()

app.use(express.json())

const corsOptions = {
    origin: 'https://railway.app',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

dotenv.config()

app.get("/", (req, res) => {
    res.json('backend is working!!!' + PORT)
})

app.get("/pizzas", getPizzas)
app.get("/pedidos", getOrders)
app.post("/pizzas", addOrder)
app.post("/pedidos/cancelados", cancelOrder)
app.post("/pedidos/concluidos", orderDone)
app.delete("/pedidos/delete/:id", deleteOrder)

const PORT = process.env.PORT || 8800

app.listen(PORT , () => {
    console.log("Connected to backend!" + PORT)
})