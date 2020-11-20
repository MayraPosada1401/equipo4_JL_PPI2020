const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/productos', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM subir_producto ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  //METODO POST - PARA INSERTAR
  router.post('/nuevoproducto',(req,res)=>{
  
  const {nombre_producto,tipo_producto,descripcion,municipio_produccion,precio,descripcion_precio} = req.body;
  let todoslosProductos = [nombre_producto,tipo_producto,descripcion,municipio_produccion,precio,descripcion_precio];

  let nuevoProducto = `INSERT INTO subir_producto(nombre_producto,tipo_producto,descripcion,municipio_produccion,precio,descripcion_precio) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoProducto, todoslosProductos, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`Nuevo Producto`, })
    });
  }); 

module.exports = router;