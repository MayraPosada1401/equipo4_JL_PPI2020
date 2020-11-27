import React from "react";
import "../Estilos/calendarioforocapa.css";
import agropecuario from "../Imagenes/agropecuario.jpg";
import abono from "../Imagenes/abono.jpg";
import conservacion from "../Imagenes/conservacion.jpg";
import pesticidas from "../Imagenes/pesticidas.jpg";
import calendario from "../Imagenes/calendario.jpg";
import { Link } from "react-router-dom";

export default function calendarioforo() {
 return (
   <div className="inicio2">
     <div className="cardito">
       <h1 className="card-calendario">CALENDARIO DE PROGRAMACION DE FOROS</h1>
     </div>

     <img src={calendario} className="calenimg" />
     <div className="cardito">
       <h2 className="calendario">NOTA IMPORTANTE</h2>
       <p className="nota">
         Recordemos que los encuentros son los que estan con color azul y la
         revisdion de las actividades son las que estan con negro, muchas
         gracias
       </p>
     </div>

     <div className="cursosvistos">
       <h1 className="calendario">CURSOS MAS VISTOS</h1>

       <div className="curso550 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={agropecuario} className="img02" />
           </div>
           <div className="col-md-8">
             <div className="cuerpito">
               <h3 className="titulo">AGROPECUARIO</h3>
               <p className="titulo1">
                 With supporting text below as a natural lead-in to additional
                 content.
               </p>
             </div>
           </div>
         </div>
       </div>

       <div className="curso550 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={abono} className="img03" />
           </div>
           <div className="col-md-8">
             <div className="cuerpito">
               <h3 className="titulo">ABONO</h3>
               <p className="titulo1">
                 With supporting text below as a natural lead-in to additional
                 content.
               </p>
             </div>
           </div>
         </div>
       </div>

       <div className="curso550 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={conservacion} className="img04" />
           </div>
           <div className="col-md-8">
             <div className="cuerpito">
               <h3 className="titulo">CONSERVACION</h3>
               <p className="titulo1">
                 With supporting text below as a natural lead-in to additional
                 content.
               </p>
             </div>
           </div>
         </div>
       </div>
       <div className="curso550 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={pesticidas} className="img05" />
           </div>
           <div className="col-md-8">
             <div className="cuerpito">
               <h3 className="titulo">PESTICIDAS</h3>
               <p className="titulo1">
                 With supporting text below as a natural lead-in to additional
                 content.
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
