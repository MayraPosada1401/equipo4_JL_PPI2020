const express =require('express');
const router = express.Router();

const mysqlConnection = require ('../db/db');


router.get('/usuarios', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM registro ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/ingresonuevousuario',(req,res)=>{

const {nombre,apellido,usuario,email,contraseña,municipio,rol_agrario,telefono,id_usuarios} = req.body;

let nRegistro = [nombre,apellido,usuario,email,contraseña,municipio,rol_agrario,telefono,id_usuarios];

let nuevoRegistro = `INSERT INTO registro (nombre,apellido,usuario,email,contraseña,municipio,rol_agrario,telefono,id_usuarios)
                  VALUES(?,?,?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoRegistro, nRegistro, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`REGISTRO EXITOSO`, })
  });
}); 

/*
router.put('/usuarios/:id', (req, res) => {
  const {nombre,apellido,usuario,email,contraseña,municipio,rol_agrario,telefono,id_usuarios} = req.body;


  const { id } = req.params;


  mysqlConnection.query(`UPDATE registro SET nombre = ?,apellido = ?,usuario = ?,email = ?,contraseña = ?,municipio = ?,rol_agrario = ?,telefono = ?, WHERE id_usuarios= ?`, 

  
  [nombre,apellido,usuario,email,contraseña,municipio,rol_agrario,telefono,id_usuarios], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});
*/


module.exports = router;