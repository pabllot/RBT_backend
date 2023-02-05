import express from 'express'
import cors from 'cors'

import router from './routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

app.get("/", (req, res) => {
    res.json('backend is working!!!')
})

app.listen(8800, () => {
    console.log("Connected to backend!!")
})