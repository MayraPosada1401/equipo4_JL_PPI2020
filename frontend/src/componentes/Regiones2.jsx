import React from 'react';
import '../Estilos/Regionestenden.css';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import EDAD3 from '../Imagenes/el.jpg';
import EDAD1 from '../Imagenes/yo.jpg';
import EDAD from '../Imagenes/vejez.jpg';
import { Link } from 'react-router-dom';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import FRUTA1 from '../Imagenes/Fruta1.png';
import FRUTA2 from '../Imagenes/Fruta2.png';

function Regionestenden() {

    return (
      <div className="fonditodefrutas123">
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
      
  
  
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={COMPRADOR1} className="d-block w-100 " alt="..."/>
        
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
  </div>


  <br/>
<br/>
<h1 className="shadow p-3 mb-5 bg-whitecolorcitoprin rounded Tituloenpaginaprincipal">Más vendidos</h1>

<div className="Contenerdorreactivo1">
<div className="Clasepararegion">ANDINA</div>
<a type="button" class="btn-header">
<Link to="/regionestenden"><button type="button"className="Radiobotonmasvendido1 rounded-circle  btn btn-info">Amazonas</button></Link>
</a>
<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>

</div>


<div className="Contenedorparatodacarddes2">
<div className="Regionpequeñadescripcion">La región Andina1​2​ es una de las seis regiones naturales de Colombia. Está ubicada en el centro del país, limitando al norte con la región Caribe, al noreste con Venezuela, al este con la Orinoquía, al sureste con la Amazonia, al sur con Ecuador y al oeste con la región del Pacífico.

Está surcada en dirección SO-NE por tres ramales septentrionales de los Andes: las cordilleras Occidental, Central y Oriental. Las cordilleras dan lugar a numerosos valles, cañones, mesetas y un sistema fluvial cuyos principales ríos son el Cauca y el Magdalena.3​ La región tiene 34 419 398 habitantes (2018), es la zona más poblada y económicamente más activa del país.

Se compone en su totalidad de territorio de la Selva Amazónica. La porción meridional del departamento, al sur del río Putumayo, se denomina "Trapecio amazónico", el cual incluye la triple frontera de Colombia, Perú y Brasil, y su límite sur es el río Amazonas.</div>
<a href="https://www.colombia.co/visita-colombia/turismo-por-regiones/cinco-regiones-te-esperan/"><button type="button" className="unicoestilodespleg Radiobotonmasvendido2 rounded-circle" >
Conoce 
</button></a>

</div>

<br/>
<br/>
</div>

    );}  export default Regionestenden;