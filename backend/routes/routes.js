const express =require('express');
const router = express.Router();

const mysqlConnection = require ('../db/db');

//METODO GET - Despliegue de todos los usuarios
router.get('/registros', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM usuarios ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

//METODO GET - Para el login, según el tipo de usuario
router.get('/registros/:tipo_usuario', (req, res) => {
  const { tipo_usuario } = req.params; 
  mysqlConnection.query('SELECT * FROM usuarios WHERE tipo_usuario = ?', [tipo_usuario],
  (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//METODO POST - Un nuevo registro de usuarios en el aplicativo web
router.post('/ingresonuevoregistro',(req,res)=>{

const {nombre, apellido, usuario, email, contraseña, confirmar_contraseña, departamento, tipo_usuario, estrato, genero} = req.body;

let nRegistro = [nombre, apellido, usuario, email, contraseña, confirmar_contraseña, departamento, tipo_usuario, estrato, genero];

let nuevoRegistro = `INSERT INTO usuarios (nombre, apellido,usuario, email, contraseña, confirmar_contraseña, departamento, tipo_usuario, estrato, genero)
                  VALUES(?,?,?,?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoRegistro, nRegistro, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`REGISTRO EXITOSO`, })
  });
}); 

//METODO PUT - Para la actualización de datos de los usuarios
router.put('/registros/:id_registro', (req, res) => {
  const {nombre, apellido,usuario, email, contraseña, confirmar_contraseña, departamento, estrato} = req.body;


  const { id_registro } = req.params;


  mysqlConnection.query(`UPDATE usuarios SET nombre= ?, apellido= ?, usuario=?, email=?, contraseña=?, confirmar_contraseña=?, departamento=?, estrato=?`, 

  
  [nombre, apellido,usuario, email, contraseña, confirmar_contraseña, departamento, estrato, id_registro], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});


module.exports = router;