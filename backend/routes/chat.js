const express =require('express');
const router = express.Router();

const mysqlConnection = require ('../db/db');

// METODO GET - Para el despliegue de las conversaciones y dialogos anteriores
router.get('/conversaciones', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM chat_usuario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

// METODO POST - Para iniciar un nuevo dialogo, mensaje
router.post('/nuevaconversacion',(req,res)=>{

const {conversacion, id_registro} = req.body;

let conversacionusuario = [conversacion, id_registro];

let nuevoRegistro = `INSERT INTO chat_usuario (conversacion, id_registro)
                  VALUES(?,?)`;
mysqlConnection.query(nuevoRegistro, conversacionusuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Nuevo Dialogo Correcto`, })
  });
}); 


module.exports = router;
