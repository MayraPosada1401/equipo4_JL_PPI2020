import React from "react";
import "../Estilos/forolistocapacitador.css";
import agropecuario from "../Imagenes/agropecuario.jpg";
import abono from "../Imagenes/abono.jpg";
import conservacion from "../Imagenes/conservacion.jpg";
import pesticidas from "../Imagenes/pesticidas.jpg";
import { Link } from "react-router-dom";

export default function forolisto() {
 return (
   <div className="Body">
     <h1 className="card-header card-headerdecapacitadorinigu">FOROS</h1>

     <div className="cardsdelcapacitador">
       <div className="card008 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={agropecuario} className="img-fluid2" />
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h1 className="card-tittle">Curso agropecuario parte 1</h1>
               <h2 className="card-tittle">Foro no confrmado</h2>
             </div>
           </div>
         </div>
       </div>

       <div className="card009 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={abono} className="img-fluid2" />
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h1 className="card-tittle">Curso de abonos (Introduccion)</h1>
               <h2 className="card-tittle">Foro confrmado</h2>
             </div>
           </div>
         </div>
       </div>

       <div className="card008 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={conservacion} className="img-fluid2" />
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h1 className="card-tittle">Curso de conservacion del suelo</h1>
               <h2 className="card-tittle">Foro no confrmado</h2>
             </div>
           </div>
         </div>
       </div>

       <div className="card009 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4 ">
             <img src={pesticidas} className="img-fluid2" />
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h1 className="card-tittle">
                 Curso de pesticidas (Introduccion)
               </h1>
               <h2 className="card-tittle">Foro confrmado</h2>
             </div>
           </div>
         </div>
       </div>

       <a href="#" className="btn10 btn-primary">
         REGRESAR
       </a>
     </div>
   </div>
 );
}
