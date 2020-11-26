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
  <div className="perfil">
  <div>
  <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte " >Bienvenido a tu perfil de EcoAgro</h1>
  <h3 className="component-1-text social-perfil subtitulo1-perfil">Aquí te presentamos las opciones que tienes para mayor accesibilidad a contenidos de Ecoagro</h3>
  <p className="component-1-text component-text-perfil parrafo1-perfil">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
  <p className="component-1-text component-text-perfil parrafo1-perfil">En esta sección visualizaras y eligiras de acuerdo a tu necesidad las opciones de perfil. Estas opciones estan orientadas a tu bienestar y por supuesto potecializando nuestro objetivo. Te recordamos que si tienes alguna duda puedes irte a la opción de contacto e interactuar más con el grupo EcoAgro, con el fin de que obtengan un mejor servicio y te sientas comodo en el aplicativo. A continuación, se mostraran los accesos que desde tu perfil tienes disponibles</p>
</div>

<div className="found-4-perfil">
  <h2 className="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">Deseo Cambiar mi foto de Perfil</h2>
  <h3 className="titulodato-perfil subtitulo1-perfil">Recomendaciones generales</h3>
</div>
  <div className="part1-perfil">
      <div>
      <a href="#" className="btn btn-light btn-primary-perfildecompas2"></a>
      <button type="button" class="btn btn-info btn2-perfil">Cambiar foto de perfil</button>
      </div>
     

   <ul className="list-unstyled-perfil">
      <li className="media">
          <div class="media-body parrafo1-perfil">
              <h5 className="mt-0 mb-1 title-info-perfil-foto">Pon una foto clara donde se aprecie tu rostro</h5>
             Los diferentes compradores podran conocer quien eres y van a sentirse más seguro al conocer quien es el productor encargado de su producto. Tenga en cuenta que es más comodo conocer con quienes interactuamos
          </div>
      </li>
      <li className="media my-4">
          <div className="media-body parrafo1-perfil ">
              <h5 className="mt-0 mb-1 title-info-perfil-foto">En caso de no subir una foto</h5>
              Comprendemos en caso de que no desees subir tu foto, como equipo EcoAgro te recomendamos que pongas visibles tus valoraciones, para que los diversos compradores conozcan abiertamente como llevas los procesos. Ya que como no conocen quien eres, tus valoraciones les dará una imagen
          </div>
      </li>
      <li className="media">
          <div className="media-body parrafo1-perfil">
              <h5 className="mt-0 mb-1 title-info-perfil-foto">¿Puedo poner cualquier imagen?</h5>
              Claro que se puede, mientras no vulnere e infrinja lo establecido por el equipo EcoaAgro, teniedno en cuenta que no debe de atentar contra la integridad de un humano. De emplear una imagen que violente ciertas políticas se vera sansionado o expulsado por el equipo. Recuerde que todo lo que hacemos es por ustedes y no se busca afectar a alguien
          </div>
      </li>
   </ul>
  </div>
 
  <h3 class="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">Mi perfil</h3>


<br/>
<br/>

<div  className="cards-perfil">
  
  

  <div className="card0-perfil mb-5" >
    <div className="row no-gutters">
      <div className="col-md-8">
        <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_cloud-512.png" className="card-img-top-perfil img-orange" alt="..." />
      </div>
      <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title-perfil">Deseo subir un curso</h5>
          <p className="card-text-perfil">Aquí podras montar la información de tus cursos de una manera ordenada y de tu gudto.</p>
          <Link to="/cursocapa">
          <button type="button" class="btn btn-outline-light btn3-perfil">Deseo subir un curso</button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  

  <div className="card0-perfil mb-5" >
    <div className="row no-gutters">
      <div className="col-md-8">
        <img src="https://cdn2.iconfinder.com/data/icons/random-set-1/410/Asset_85-512.png" className="card-img-top-perfil" alt="..." />
      </div>
      <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title-perfil">Actualización de datos</h5>
          <p className="card-text-perfil">Aquí podras mantener tu información personal actualizada.</p>
          <Link to="/actualcapa">
          <button type="button" class="btn btn-outline-light btn3-perfil">Actualización de datos</button>
          </Link>      
        </div>
      </div>
    </div>
  </div>
</div>



</div>
 );
}

