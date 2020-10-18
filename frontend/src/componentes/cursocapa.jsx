import React from "react";
import "../Estilos/cursocapa.css";
import cursosubir from "../Imagenes/cursosubir.jpg";
import click from "../Imagenes/click.jpg";
import cursolisto from "../Imagenes/cursolisto.jpg";
import {Link} from 'react-router-dom';

export default function curso() {
 return (
   <div className="cursito">
     <div className="cursillo">
       <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">SUBIR CURSO</h1>
       <div className="subircurso">
         <div className="col-md-8">
           <img src={cursosubir} className="cursossubir" />
         </div>
       </div>
     </div>

   
       <div className="col mb-2">
         <div className="curso">
           <div className="subircurso">
             <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">DAR CLICK PARA SUBIR MATERIAL</h1>
             <div className="col-md-8">
               <img src={click} className="cursossubir" />
             </div>
           </div>
         </div>
       </div>
       <div className="col mb-2">
         <div className="curso">
           <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">SUBIR DESCRIPCION</h1>
           <div className="col-md-8">
             <img src={cursolisto} className="cursossubir" />
           </div>
           <div className="subircurso">

           </div>
         </div>
       </div>
       <br/>
       <button href="#" class="btn btn-info centroooo"><h1 className="tamañoescrt ">Subir curso</h1></button>
     <br/>
     <br/>
     </div>
  );
}

