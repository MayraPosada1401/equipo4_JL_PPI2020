import React from "react";
import "../Estilos/perfilcapa.css";
import cursosubir from "../Imagenes/cursosubir.jpg";
import actualizardatos from "../Imagenes/actualizardatos.jpg";
import crearforo from "../Imagenes/crearforo.jpg";
import verforoanterior from "../Imagenes/verforoanterior.jpg";
import misvaloraciones from "../Imagenes/misvaloraciones.jpg";
import actualizarfoto from "../Imagenes/actualizarfoto.jpg";
import { Link } from "react-router-dom";

export default function perfil() {
 return (
   <div className="cosita FONDO">
     <div>
       <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">MI PERFIL</h1>

       <h1 className="info1">
         Aqui tienes una gran varidedad opciones para que puedas acomodar tu
         perfil como capacitador a tu gusto, desde actualizar tu informacion
         personal hasta subir cun curso nuevo
       </h1>

     
         <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">CAMPOS QUE PUEDES EDITAR</h1>
     <div className="fonditouciopaf">

       <div className="cortes">
         <div className="corte201 mb-5">
           <div className="row no-gutters">
             <div className="col-md-4">
             </div>
             <div className="col-md-8">
               <div className="nana">
                 <h1 className=" component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">CAMBIAR FOTO DE PERFIL</h1>
                 <p className="ñaña1">
                   Primero que todo y lo mas importante es una foto de tu cara
                   que se vea bien que tenga resolucion para que las personas
                   que vean tus cursos sepan quien es la persona que se los da.{" "}
                 </p>
                 <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Ir aver</h1></button>
               </div>
             </div>
           </div>
         </div>
       </div>

       <div className="corte20 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={actualizardatos} className="perfil00" />
           </div>
           <div className="col-md-8">
             <div className="nana">
               <h3 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">ACTUALIZACION DE DATOS</h3>
               <p className="ñaña1">
                 Aqui podras actualizar tu correo, nombres, contraseña , ademas
                 de la region a la cual perteneces y das los curss y tambiien
                 el tiempo de ser capacitador.
               </p>
               <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Ir aver</h1></button>
             </div>
           </div>
         </div>
       </div>

       <div className="corte20 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={cursosubir} className="perfil00" />
           </div>
           <div className="col-md-8">
             <div className="nana">
               <h3 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">DESEO SUBIR UN CURSO</h3>
               <p className="ñaña1">
                 Aqui podras subir el curso que quieras con sus materiales y
                 recursos audiovisuales que le ayudara a tus estudiantes en
                 cada curso.
               </p>
               <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Ir aver</h1></button>
             </div>
           </div>
         </div>
       </div>

       <div className="corte20 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={crearforo} className="perfil00" />
           </div>
           <div className="col-md-8">
             <div className="nana">
               <h3 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">CREAR FORO</h3>
               <p className="ñaña1">
                 Aqui podras crear tus foros el dia que puedas al igual que la
                 hora y crear otros para otras ocasiones para que tus
                 estudiantes esten pendientes de todos los materiales y lo
                 hablado.
               </p>
               <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Ir aver</h1></button>
             </div>
           </div>
         </div>
       </div>

       <div className="corte20 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={verforoanterior} className="perfil00" />
           </div>
           <div className="col-md-8">
             <div className="nana">
               <h3 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">VER FOROS ANTERIORES</h3>
               <p className="ñaña1">
                 Aqui podras ver las conversaciones antiguas, que has tendo con
                 tus estudiantes.
               </p>
               <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Ir aver</h1></button>
             </div>
           </div>
         </div>
       </div>

       <div className="corte201 mb-5">
         <div className="row no-gutters">
           <div className="col-md-4">
             <img src={misvaloraciones} className="perfil00" />
           </div>
           <div className="col-md-8">
             <div className="nana">
               <h3 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">MIS VALORACIONES</h3>
               <p className="ñaña1">
                 Aqui podras ver las valoraciones que tienen todos tus cursos,
                 al igual que las reseñas que dejan los participantes de los
                 mismos(cursos).
               </p>
               <button href="#" class="btn btn-light"><h1 className="tamañoescrt">Ir aver</h1></button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </div>
 );
}

