import React from 'react';
import '../Estilos/perfilcapacitador.css';
import cursosubir from '../Imagenes/cursosubir.jpg';
import actualizardatos from '../Imagenes/actualizardatos.jpg';
import crearforo from '../Imagenes/crearforo.jpg';
import verforoanterior from '../Imagenes/verforoanterior.jpg';
import misvaloraciones from '../Imagenes/misvaloraciones.jpg';
import actualizarfoto from '../Imagenes/actualizarfoto.jpg';
import {Link} from 'react-router-dom';

export default function perfil(){
 return(
<div className="Body">

<div>
 <h1 className="bienvenido">MI PERFIL</h1>

 <h1 className="info">Aqui tienes una gran varidedad opciones para que puedas acomodar tu perfil como capacitador a tu gusto,
  desde actualizar tu informacion personal hasta subir cun curso nuevo</h1>

  <div className="card11">
  <h1 className="bienvenido">CAMPOS QUE PUEDES EDITAR</h1>
</div>


 <div className="cards">

 <div className="card201 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={actualizarfoto} className="card-img card-imgcapacitador100" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
     <h1 className="card-title card-titlecapacitador12 ">CAMBIAR FOTO DE PERFIL</h1>
   <p className="card-text card-textdelcapacitador">Primero que todo y lo mas importante es una foto de tu cara que se vea bien que tenga
    resolucion para que las personas que vean tus cursos sepan quien es la persona que se los da. </p>
   <a href="#" className="ver btn-primary">IR A VER</a>
     </div>
   </div>
 </div>
</div>
  </div>

 <div className="card20 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={actualizardatos} className="card-img card-imgcapacitador100" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titlecapacitador12 ">ACTUALIZACION DE DATOS</h3>
   <p className="card-text card-textdelcapacitador">Aqui podras actualizar tu correo, nombres, contraseña , ademas de la region a la cual perteneces y das los curss y tambiien el tiempo de ser capacitador.</p>
   <a href="#" className="ver btn-primary">IR A VER</a>
     </div>
   </div>
 </div>
</div>

<div className="card20 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={cursosubir} className="card-img card-imgcapacitador100" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titlecapacitador12 ">DESEO SUBIR UN CURSO</h3>
   <p className="card-text card-textdelcapacitador">Aqui podras subir el curso que quieras con sus materiales y recursos audiovisuales que le ayudara a tus estudiantes en cada curso.</p>
   <a href="#" className="ver btn-primary">IR A VER</a>
     </div>
   </div>
 </div>
</div>


 <div className="card20 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={crearforo} className="card-img card-imgcapacitador100" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titlecapacitador12 ">CREAR FORO</h3>
   <p className="card-text card-textdelcapacitador">Aqui podras crear tus foros el dia que puedas al igual que la hora y crear otros para otras ocasiones para que tus estudiantes esten pendientes de todos los materiales y lo hablado.</p>
   <a href="#" className="ver btn-primary">IR A VER</a>
   </div>
   </div>
 </div>
</div>


<div className="card20 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={verforoanterior} className="card-img card-imgcapacitador100" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titlecapacitador12 ">VER FOROS ANTERIORES(CHAT)</h3>
   <p className="card-text card-textdelcapacitador">Aqui podras ver las conversaciones antiguas, que has tendo con tus estudiantes.</p>
   <a href="#" className="ver btn-primary">IR A VER</a>
     </div>
   </div>
 </div>
</div>

<div className="card201 mb-5" >
 <div className="row no-gutters">
   <div className="col-md-4">
   <img src={misvaloraciones} className="card-img card-imgcapacitador100" />
   </div>
   <div className="col-md-8">
     <div className="card-body">
     <h3 className="card-title card-titlecapacitador12 ">MIS VALORACIONES</h3>
   <p className="card-text card-textdelcapacitador">Aqui podras ver las valoraciones que tienen todos tus cursos, al igual que las reseñas que dejan los participantes de los mismos(cursos).</p>
   <a href="#" className="ver btn-primary">IR A VER</a>
   </div>
 </div>
</div>

 </div>
  
   </div>
</div>
 );
}
