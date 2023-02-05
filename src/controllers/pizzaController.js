import { db } from '../database/connect.js'

export const getPizzas = (req, res) => {
    const q = "SELECT * FROM pizzas"

    db.query(q, (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
}

