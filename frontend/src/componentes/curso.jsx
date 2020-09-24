import React from 'react';
import '../Estilos/curso.css';
import cursosubir from '../imagenes/cursosubir.png';
import click from '../imagenes/click.png';
import cursolisto from '../imagenes/cursolisto.png';

export default function curso(){
  return(

<div className="body">

<div class="card">
  <h1 class="card-header">SUBIR CURSO</h1>
  <div class="card-body">
  <div className="col-md-8">
<img src={cursosubir} className="img-fluid2" />
</div>
  </div>
</div>

    <div className="cards">

   
  <div class="col mb-2">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">INGRESA MATERIAL DEL CURSO</h1>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-2">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">DAR CLICK PARA SUBIR MATERIAL</h1>
        <div className="col-md-8">
        <img src={click} className="img-fluid2" />
        </div>
      </div>
    </div>
  </div>
  <div class="col mb-2">
    <div class="card">
    <h1 class="card-title">SUBIR DESCRIPCIÓN</h1>
    <div className="col-md-8">
        <img src={cursolisto} className="img-fluid2" />
        </div>
      <div class="card-body">
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <a href="#" className="btn btn-primary">SUBIR CURSO</a>
</div>

    
    </div>
   
  
   );
   }

