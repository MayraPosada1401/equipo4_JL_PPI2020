const express =require('express');
const router = express.Router();

const mysqlConnection = require ('../db/db');


router.get('/conversaciones', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM chat ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/nuevaconversacion',(req,res)=>{

const {conversacion} = req.body;

let conversacionusuario = [conversacion];

let nuevoRegistro = `INSERT INTO chat (conversacion)
                  VALUES(?)`;
mysqlConnection.query(nuevoRegistro, conversacionusuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Nuevo Dialogo Correcto`, })
  });
}); 


module.exports = router;