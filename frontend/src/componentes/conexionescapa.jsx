import React from "react";
import "../Estilos/conexionescapa.css";
import objetivo1 from "../Imagenes/objetivo1.jpg";
import alcance from "../Imagenes/alcance.jpg";
import vision from "../Imagenes/vision.jpg";
import mision from "../Imagenes/mision.jpg";
import ECOAGRODEFINITIVO1 from "../Imagenes/ECOAGRODEFINITIVO1.png";
import eslogan from "../Imagenes/eslogan.jpg";
import { Link } from "react-router-dom";

export default function conexiones() {
 return (
   <div className="cuerpito2 AppFondopaginadeenlaces">
   
       <h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">EcoAgro</h1>

       <div class="card-columns col">
  <div class="card">
    <img src={mision} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">OBJETIVO</h5>
      <p class="card-text">Romper el esquema del prototipo del intermediario y dejar atrás ese imaginario colectivo erróneo de la baja calidad de productos agrícolas colombianos.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Un pais de sueños</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Familia EcoAgro <cite title="Source Title">Acompañanos en nuestro camino a mejorar el campo colmbiano.</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src={vision} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">ALCANCE</h5>
      <p class="card-text">La subordinación y la desobediencia, la humildad y el deseo por la libertad, lo feo y lo sublime se encuentran estrechamente entretejidos, y así, presentan una combinación innegable de elementos opuestos, una combinación mediante la cual estos elementos se provocan mutuamente. 
</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Nuestro campo cuenta con los factores esenciales para ser competitivo y aportar mucho más al crecimiento económico y social del país, y necesitamos convertir ese potencial en proyectos productivos concretos.</p>
      <footer class="blockquote-footer text-white">
        <small>
          Familia EcoAgro<cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Solución a la problematica</h5>
      <p class="card-text">Canal directo entre campesino y comprador
, Mejor economía para el campesino,
Calidad de producto,
Educación al campesino
</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={ECOAGRODEFINITIVO1} class="card-img-top" alt="..."/>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p> "SOMOS EL ENLACE DIRECTO ENTRE CAMPASINO Y EL COMPRADOR"</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
         Familia EcoAgro<cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </div>
 
</div>
   </div>
 );
}

