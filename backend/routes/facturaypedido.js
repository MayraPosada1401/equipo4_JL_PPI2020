const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/facturas', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM factura_pedido ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });


/*
  //METODO POST - PARA INSERTAR
  router.post('/nuevafactura',(req,res)=>{
  
  const {fecha_aprox_entrega, precio, id_usuarios} = req.body;
  let todoslosProductos = [];

  let nuevoProducto = `INSERT INTO factura_pedido() VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoProducto, todoslosProductos, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`Nuevo Producto`, })
    });
  }); 
*/  

module.exports = router;