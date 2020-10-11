import React from 'react';
import '../Estilos/EstiloHeader.css'
import campesino1 from '../Imagenes/campesino1.png';
import campesino2 from '../Imagenes/campesino2.png';
import campesino3 from '../Imagenes/campesino3.png';

export default function Carrouselcampesino() {
  
  return (

<div>
   
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={campesino1} className="d-block w-100 " id="edit" alt="..." />
        </div>

        <div className="carousel-item">
          <img src={campesino2} class="d-block w-100" id="edit" alt="..." />
        </div>

        <div className="carousel-item">
          <img src={campesino3} className="d-block w-100" id="edit" alt="..." />
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div> 
    </div>
  );
}
