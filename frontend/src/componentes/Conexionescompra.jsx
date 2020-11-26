import React from 'react';
import '../Estilos/Mapa.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import MAPITA from '../Imagenes/MAPITA1.jpg';
import MAPA from '../Imagenes/MAPA.jpg';
import { Link } from 'react-router-dom';

function Conexionescompra() {  
    return(
        <div className="cuerpito2 AppFondopaginadeenlaces EcoAgrofond">
   <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item nav-item normal-nav active">
      <Link to="/app1"><a className="nav-link" href="">Inicio <span class="sr-only">(current)</span></a></Link>
      </li>
        <li className="nav-item nav-item normal-nav active">
      <Link to="/conexionescompra"><a className="nav-link" href="">Conexiones <span class="sr-only">(current)</span></a></Link>
      </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/quienescomprador"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
        <li className="nav-item normal-nav nav-item active">
          <Link to="/compradormapa"><a className="nav-link  " href="#">Tienda</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/comprador"><a className="nav-link  " href="#">Mis compras</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/perfildecomprador"><a className="nav-link  " href="#">Perfil</a></Link>
        </li>
        <a type="button" class="btn1-header btn-info1"></a>
        <Link to="/"><button type="button" class="btn btn-info btn-cerrarcampe">Cerrar sesion</button></Link>
        <li className="nav-item">
       
        </li>
      </ul>
    </div>
  </nav>
    </div>
    <div className="Eiminaciondecarrusel">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={COMPRADOR1} className="d-block w-100" alt="..."/>
        </div>
      <div className="carousel-item">
        <img src={COMPRADOR2} className="d-block w-100" alt="..."/>
        
        </div>
      <div className="carousel-item">
        <img src={comprador3} className="d-block w-100" alt="..."/>
        
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
  
  </div></div>

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
}export default Conexionescompra;