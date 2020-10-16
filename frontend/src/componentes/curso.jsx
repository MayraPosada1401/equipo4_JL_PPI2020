import React from "react";
import "../Estilos/curso.css";
import cursosubir from "../Imagenes/cursosubir.jpg";
import click from "../Imagenes/click.jpg";
import cursolisto from "../Imagenes/cursolisto.jpg";
import {Link} from 'react-router-dom';

export default function curso() {
 return (
   <div className="body">
     <div className="card">
       <h1 className="card-header card-headerdelcapacitadorcurs ">SUBIR CURSO</h1>
       <div className="card-body">
         <div className="col-md-8">
           <img src={cursosubir} className="img-fluid2" />
         </div>
       </div>
     </div>

   
       <div className="col mb-2">
         <div className="card">
           <div className="card-body">
             <h1 className="card-title card-titledelcapacitadorcurs">DAR CLICK PARA SUBIR MATERIAL</h1>
             <div className="col-md-8">
               <img src={click} className="img-fluid2" />
             </div>
           </div>
         </div>
       </div>
       <div className="col mb-2">
         <div className="card">
           <h1 className="card-title card-titledelcapacitadorcurs">SUBIR DESCRIPCION</h1>
           <div className="col-md-8">
             <img src={cursolisto} className="img-fluid2" />
           </div>
           <div className="card-body">

           </div>
         </div>
       </div>
       <a href="#" className="btn botondelcapacitadorcurs btn-primary">
         SUBIR CURSO
       </a>
     </div>
  );
}
