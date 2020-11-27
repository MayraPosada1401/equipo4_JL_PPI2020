const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

//METODO GET - Para el despliegue de los cursos
router.get('/cursos', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM subir_curso', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });


//METODO POST - Para crear un nuevo curso capacitador
router.post('/nuevocurso',(req,res)=>{
  
  const {nombre_curso,descripcion_inicial,informacion_curso,fecha_curso,dato_curioso,links_externos} = req.body;
  let todoslosCursos = [nombre_curso,descripcion_inicial,informacion_curso,fecha_curso,dato_curioso,links_externos];

  let nuevoCurso = `INSERT INTO subir_curso(nombre_curso,descripcion_inicial,informacion_curso,fecha_curso,dato_curioso,links_externos) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoCurso, todoslosCursos, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`Curso Creado`, })
    });
  }); 


//METODO PUT - Para actualizar contenidos del curso
   router.put('/cursos/:id', (req, res) => {
    const {nombre_curso,descripcion_inicial,informacion_curso,fecha_curso,dato_curioso,links_externos} = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE subir_curso SET nombre_curso = ?,descripcion_inicial = ?,informacion_curso = ?,fecha_curso = ?,dato_curioso = ?,links_externos = ? WHERE id = ?`, 
    [nombre_curso,descripcion_inicial,informacion_curso,fecha_curso,dato_curioso,links_externos, id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Curso actualizado'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;
