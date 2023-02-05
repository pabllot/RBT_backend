import express from 'express'

import { addOrder, cancelOrder, deleteOrder, getOrders, orderDone } from './controllers/ordersController.js'
import { getPizzas } from './controllers/pizzaController.js'

const router = express.Router();

router.get("/pizzas", getPizzas)
router.post("/pizzas", addOrder)

router.get("/pedidos", getOrders)
router.post("/pedidos/cancelados", cancelOrder)
router.post("/pedidos/concluidos", orderDone)
router.delete("/pedidos/delete/:id", deleteOrder)

export default router