import React from "react";
import "../Estilos/Headercapacapacitador.css";
import ECOAGRODEFINITIVO1 from "../Imagenes/ECOAGRODEFINITIVO1.png";
import capacitador1 from "../Imagenes/capacitador1.jpg";
import capacitador2 from "../Imagenes/capacitador2.jpg";
import capacitador3 from "../Imagenes/capacitador3.jpg";
import { Link } from "react-router-dom";

export default function Headercapa() {
 return (
   <div>
     <div className="Header">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand">
           <img src={ECOAGRODEFINITIVO1} className="imagendimensioncapa" />
         </a>
         <button
           className="navbar-toggler"
           type="button"
           data-toggle="collapse"
           data-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item nav-item20 normal-nav active">
               <a className="nav-link" href="#">
                 Inicio
               </a>
             </li>
             <li className="nav-item active edit1">
               <a class="nav-link" href="#">
                 Cursos
               </a>
             </li>
             <li className="nav-item normal-nav nav-item20 active">
               <a className="nav-link" href="#">
                 Foros
               </a>
             </li>
             <li className="nav-item normal-nav nav-item20 active">
               <a className="nav-link" href="#">
                 Conexiones
               </a>
             </li>
             <li className="nav-item normal-nav nav-item20 active">
               <a className="nav-link" href="#">
                 Quienes somos
               </a>
             </li>
             <li className="nav-item normal-nav nav-item20 active">
               <a className="nav-link " href="#">
                 Contactanos
               </a>
             </li>
             <li className="nav-item normal-nav nav-item20 active">
               <a className="nav-link  " href="#">
                 Perfil
               </a>
             </li>

             <a type="button" class="btn1-cerrarcapa btn-info1"></a>
             <button type="button" class="btn btn-info btn1-cerrarcapa">
               Cerrar sesión
             </button>
             <li className="nav-item"></li>
           </ul>
         </div>
       </nav>
     </div>

     <div
       id="carouselExampleCaptions"
       className="carousel slide"
       data-ride="carousel"
     >
       <ol className="carousel-indicators">
         <li
           data-target="#carouselExampleCaptions"
           data-slide-to="0"
           class="active"
         ></li>
         <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
         <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
       </ol>

       <div className="carousel-inner">
         <div className="carousel-item active">
           <img
             src={capacitador1}
             className="d-block w-100 "
             id="edit"
             alt="..."
           />
         </div>

         <div className="carousel-item">
           <img src={capacitador2} class="d-block w-100" id="edit" alt="..." />
         </div>

         <div className="carousel-item">
           <img
             src={capacitador3}
             className="d-block w-100"
             id="edit"
             alt="..."
           />
         </div>
       </div>

       <a
         className="carousel-control-prev"
         href="#carouselExampleCaptions"
         role="button"
         data-slide="prev"
       >
         <span
           className="carousel-control-prev-icon"
           aria-hidden="true"
         ></span>
         <span className="sr-only">Previous</span>
       </a>
       <a
         className="carousel-control-next"
         href="#carouselExampleCaptions"
         role="button"
         data-slide="next"
       >
         <span
           className="carousel-control-next-icon"
           aria-hidden="true"
         ></span>
         <span className="sr-only">Next</span>
       </a>
     </div>
   </div>
 );
}
