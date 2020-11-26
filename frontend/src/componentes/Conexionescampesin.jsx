
import React from 'react';
import '../Estilos/EstiloHeader.css'
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import campesino1 from '../Imagenes/campesino1.png';
import campesino2 from '../Imagenes/campesino2.png';
import campesino3 from '../Imagenes/campesino3.png';
import {Link} from 'react-router-dom';

function Conexionescampesi() {  
    return(

        <div className="cuerpito2 AppFondopaginadeenlaces EcoAgrofond">
<div className="Header-nabvarcampesino">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item-campesino nav-item-campesino2 normal-nav active">
        <Link to="/iniciocampesino" className="nav-link" href="#">Inicio</Link>
      </li>
      <li className="nav-item-campesino active edit1-nabvarcampesino">
        <Link to= "/aprendecampesino" className="nav-link" href="#">Aprende con Nosotros</Link>
      </li>
      <li className="nav-item-campesino normal-nav nav-item-campesino2 active">
     <a className="nav-link" href="#">Conexiones</a>
      </li>
      <li className="nav-item-campesino normal-nav nav-item-campesino2 active">
      <Link to="/conexionescampesino" className="nav-link " href="#">Contactanos</Link>
      </li>
      <li className="nav-item-campesino normal-nav nav-item-campesino2 active">
        <Link to="/perfilcampesino" className="nav-link" href="#">Perfil</Link>
      </li>
      <li className="nav-item-campesino nav-item-campesino2 active edit1-nabvarcampesino edit2-nece">
        <Link to="/productostendencia" className="nav-link" href="#">Más vendido</Link>
      </li>
      <a type="button" className="btn1-header-campe btn-info1"></a>
      <Link to="/">
      <button type="button" className="btn btn-info btn-cerrarcampe">Cerrar sesión</button>
      </Link>
    </ul>
  </div>
</nav>
  </div>
 
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









<h1 className="component-1-text shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte ">EcoAgro</h1>

<div class="card-columns col">
<div class="card">
<img src="https://cdn.dribbble.com/users/1068771/screenshots/12031686/media/444363d042df196f2b5adb01e2cfef1f.jpg"class="card-img-top" alt="..."/>
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
<img src="https://cdn.dribbble.com/users/2058952/screenshots/12418544/media/52f4609e57fcfd89e8e1c1b9f2dfaef7.png" class="card-img-top" alt="..."/>
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
}export default Conexionescampesi;