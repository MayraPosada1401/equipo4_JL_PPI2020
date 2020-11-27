const express =require('express');
const router = express.Router();

const mysqlConnection = require ('../db/db');


router.get('/preciosdeacuerdos', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM precio_acuerdo2 ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/nuevopreciodeacuerdo',(req,res)=>{

const {precio_nuevo, id_registros} = req.body;

let precio_acuerdo = [precio_nuevo, id_registros];

let nuevoacuerdo = `INSERT INTO precio_acuerdo2 (precio_nuevo, id_registros)
                  VALUES(?,?)`;
mysqlConnection.query(nuevoacuerdo, precio_acuerdo, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Nuevo Acuerdo almacenado`, })
  });
}); 


module.exports = router;