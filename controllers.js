import { db } from './connect.js'

export const getOrders = (req, res) => {
    db.getConnection(function(err, connection) {
        if (err) throw err; 
        const q = "SELECT * FROM pedidos"
        connection.query(q, (err,data)=>{
            if(err) return res.json(err)
    
            return res.json(data)
        })
          connection.release();
          if (err) throw err;
        });
      } 
    
    
export const getPizzas = (req, res) => {
    db.getConnection(function(err, connection) {
        if (err) throw err; 
    const q = "SELECT * FROM pizzas"

    connection.query(q, (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
      connection.release();
      if (err) throw err;
    });
  } 

export const addOrder = (req, res) => {
    db.getConnection(function(err, connection) {
        if (err) throw err; 
    const q = "INSERT INTO `rbt`.`pedidos` (`name`, `pizza`, `price`, `quantity`) VALUES (?)"

    const values = [req.body.form.name, req.body.form.pizza, req.body.form.price, req.body.form.quantity]

    connection.query(q, [values], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
      connection.release();
      if (err) throw err;
    });
  } 

export const cancelOrder = (req, res) => {
    db.getConnection(function(err, connection) {
        if (err) throw err; 
    const q = "UPDATE `rbt`.`pedidos` SET `status` = '3' WHERE (`id` = ?)"

    connection.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
      connection.release();
      if (err) throw err;
    });
  } 

export const orderDone = (req, res) => {
    db.getConnection(function(err, connection) {
        if (err) throw err; 
    const q = "UPDATE `rbt`.`pedidos` SET `status` = '2' WHERE (`id` = ?)"

    connection.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
      connection.release();
      if (err) throw err;
    });
  } 

export const deleteOrder = (req, res) => {
    db.getConnection(function(err, connection) {
        if (err) throw err; 
    const q = "DELETE FROM `rbt`.`pedidos` WHERE (`id` = ?);"

    connection.query(q, [req.params.id], (err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
      connection.release();
      if (err) throw err;
    });
  } 