const express =require('express');
const router = express.Router();

const mysqlConnection = require ('../db/db');


router.get('/datosparalacompra', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM datos_compra ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/nuevacompra',(req,res)=>{

const {departamento, municipio, direccion, cedula, telefono} = req.body;

let datosparalacompra = [departamento, municipio, direccion, cedula, telefono];

let nuevaCompra = `INSERT INTO datos_compra (departamento, municipio, direccion, cedula, telefono)
                  VALUES(?,?,?,?,?)`;
mysqlConnection.query(nuevaCompra, datosparalacompra, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Datos de Compra almacenados correctamente`, })
  });
}); 


module.exports = router;