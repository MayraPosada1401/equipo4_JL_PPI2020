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
import FRUTA1 from '../Imagenes/FRUTA1.png';
import FRUTA2 from '../Imagenes/FRUTA2.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';

function Regionestenden() {

    return (
      <div className="App">
         <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item nav-item2 normal-nav active">
      <a className="nav-link" href="">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <a class="nav-link" href="#">Perfil</a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <a className="nav-link" href="#">Conexiones</a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <a className="nav-link " href="#" >Contactanos</a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <Link to="/compradormapa"><a className="nav-link  " href="#">Tienda</a> </Link>
      </li>
      <li className="nav-item nav-item2 active ">
      <Link to="/comprador"><a className="nav-link btn-cerrarcampe " href="#">Mis compras</a></Link>  
      </li>
      <a type="button" class="btn1-header btn-info1"></a>
     <Link to="/"><button type="button" class="btn btn-info btn-cerrarcampe">Cerrar sesión</button></Link> 
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
<div className="palancaparaqueesteordenado">
<a type="" class="">
<Link to="/regiones2"><button type="button"className="Radiobotonmasvendido1 rounded-circle  ">Andina</button></Link>
<Link to="/regiones3"><button type="button"className="Radiobotonmasvendido2  rounded-circle  ">Caribe</button></Link>
<Link to="/regiones4"><button type="button"className="Radiobotonmasvendido3  rounded-circle  ">Insular</button></Link>
<Link to="/regiones5"><button type="button"className="Radiobotonmasvendido4  rounded-circle ">Orinoquía</button></Link>
<Link to="/regiones6"><button type="button"className="Radiobotonmasvendido5  rounded-circle ">Pacífico</button></Link>
<div className="Contenerdorreactivo">
<label className="Clasepararegion">AMAZONAS</label>
  </div>
</a>

</div>



<div className="Contenedorparatodacarddes">
<div className="Regionpequeñadescripcion">Amazonas es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Leticia. Está ubicado en el extremo sur del país, en gran parte al sur de la línea ecuatorial, en la región Amazonia. Limita al norte con Caquetá y Vaupés, al este con Brasil, al sur con Perú y al oeste con Putumayo. Con 110 000 km² es el departamento más extenso, con unos 75.000 habitantes en 2015, el cuarto menos poblado —por delante de Vichada, Vaupés y Guainía, el menos poblado— y con 0,68 hab/km², el tercero menos densamente poblado, por delante de Vichada y Guainía, el menos densamente poblado.

Se compone en su totalidad de territorio de la Selva Amazónica. La porción meridional del departamento, al sur del río Putumayo, se denomina "Trapecio amazónico", el cual incluye la triple frontera de Colombia, Perú y Brasil, y su límite sur es el río Amazonas.</div>
<a><button type="button" className="unicoestilodespleg Radiobotonmasvendido2 rounded-circle" data-toggle="modal" data-target="#staticBackdrop">
Tendencias
</button></a>
<div class="modal fade " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Tendencias</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      La región más rica en todo el aspecto de fauna y flora, tiene los frutos más exoticos y únicos de todo nuestro pais de sabores inigualables y de una naturalidad unica.
      </div>

      <div class="card Cardparalasfrutas" >
  <img src={FRUTA1} class="card-img-top" alt="Responsive image"/>
  <div class="card-body">
    <h5 class="card-title">Pitaya</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">COMPRALO</a>
  </div>
</div>
<div class="card Cardparalasfrutas" >
  <img src={FRUTA2} class="card-img-top" alt="Responsive image"/>
  <div class="card-body">
    <h5 class="card-title">Durazno</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">COMPRALO</a>
  </div>
</div>

      <div class="modal-footer">
        <button type="button" class="btn " data-dismiss="modal">Close</button>
        <Link to="/mapas2"><button type="button" class="btn btn-primary">Más</button></Link>
      </div>
    </div>
  </div>
</div>
</div>
<br/>
<br/>
</div>
    );}  export default Regionestenden;
