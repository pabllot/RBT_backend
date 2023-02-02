import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

import {getOrders } from './controllers.js'

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

app.get("/", (req, res) => {
    res.json('backend is working!!!' + PORT)
})

app.get("/pedidos", getOrders)


const PORT = process.env.PORT || 8800

app.listen(PORT , () => {
    console.log("Connected to backend!" + PORT)
})