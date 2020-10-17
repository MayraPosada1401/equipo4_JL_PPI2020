import React from 'react';
import '../Estilos/Miscompras.css';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import FRUTA2 from '../Imagenes/Fruta2.png';
import FRUTA3 from '../Imagenes/FRUTA3.png';
import FRUTA4 from '../Imagenes/FRUTA4.png';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import { Link } from 'react-router-dom';

function Miscompras() {

    return (
      <div className="App">
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
        <li className="nav-item normal-nav nav-item active">
        <a class="nav-link" href="#">Conexiones</a>
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
      <img src={carrusel1} className="d-block w-100" alt="..."/>
      </div>
    <div className="carousel-item">
      <img src={carrusel2} className="d-block w-100" alt="..."/>
      
      </div>
    <div className="carousel-item">
      <img src={carrusel3} className="d-block w-100" alt="..."/>
      
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
<br></br>
<br></br>
<h1 className="shadow p-3 mb-5 bg-whitefonditoazul rounded Titulocompradorsegundaparte">
    Agradecemos su apoyo al campo Colombiano
</h1>
<div className="CAP FONDO">
<div class="card-columns">
  <div class="card">
    <img src={FRUTA4} class="card-img-top img-fluid" alt="..."/>
    <div class="card-body2">
      <h5 class="card-title TI">Guayaba</h5>
      <p class="card-text paginademiscomprasp" className="sinConfirmar paginademiscomprasp">Producto por confirmar</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body3">
      <p className="paginademiscomprasp">Conocenos y explora EcoAgro.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
        Familia<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src={FRUTA3} class="card-img-top img-fluid" alt="..."/>
    <div class="card-body4">
      <h5 class="card-title TI">Sandia</h5>
      <p class="card-text paginademiscomprasp" className="Confirmado paginademiscomprasp">Producto confirmado</p>
      <p class="card-text paginademiscomprasp"><small class="text-muted">Tarde 3 Minutos tarde</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p className="paginademiscomprasp">Confirma tus productos una vez entregados para tener confianza de la entrega a tiempo de tus productos.</p>
      <footer class="blockquote-footer text-white">
        <small>
          Familia<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body5">
    </div>
  </div>
  <div class="card">
    <img src={FRUTA2} class="card-img-top img-fluid" alt="..."/>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p className="TI paginademiscomprasp">Durazno:</p>
      <footer class="blockquote-footer">
 <p class="card-text paginademiscomprasp" className="Confirmado paginademiscomprasp">Producto confirmado </p>
      </footer>
    </blockquote>
  </div>
  <div class="card DIS">
    <div class="card-body1">
      <h5 class="card-title ">Sequimiento de productos</h5>
      <p class="card-text paginademiscomprasp">Ten confianza de que tus productos llegaran a tiempo a través de nuestro segumiento de productos a tiempo y con la calidad y estados prometidos.</p>
      <p class="card-text paginademiscomprasp"><small class="text-muted">Tarde 3 Minutos tarde</small></p>
    </div>
  </div>
</div>
</div>
<h1 className="Titulito">
<div class="shadow p-3 mb-5 bg-whitefonditoazul rounded Titulocompradorsegundaparte">Seguimiento de pedidos</div>
</h1>
<div className="CAR">
<p className="paginademiscomprasp">
  <a class="btn btn-light btn-primary p-3 mb-2 bg-info text-white DIS" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Salió del punto de origen</a>
  <button class="btn btn-light btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Viajando</button>
  <button class="btn btn-light btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Todo</button>
  
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
  
      <div class="cardin mb-3">
  <img src="https://image.freepik.com/vector-gratis/entrega-segura-alimentos_23-2148569813.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Salio del punto origen</h5>
    <p class="card-text paginademiscomprasp">Durante este proceso se realiza todo el empaquetado y la pedida del producto correspondiente al campesino que lo proporciona y con el cual el cliente ha llegado a un acuerdo.</p>
    <p class="card-text paginademiscomprasp"><small class="text-muted">Familia EcoAgro</small></p>
  </div>
</div>

       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
 
      <div class="cardin1 mb-3">
  <img src="https://image.freepik.com/vector-gratis/entrega-linea-compras-digitales-rapidas-servicio-transporte-mensajeria-urbana-envio-regalos-entrega-concepto-ilustracion_80590-7328.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title paginademiscomprasp">Viajando</h5>
    <p class="card-text paginademiscomprasp">El producto ya ha sido revisado y puesto en despacho para empezar el transcurso hasta la puerta de tu casa.</p>
    <p class="card-text paginademiscomprasp"><small class="text-muted">Familia EcoAgro</small></p>
  </div>
</div>

      </div>
    </div>
  </div>
</div>

<p className="paginademiscomprasp">
 
  <a class="btn btn-light btn-primary p-3 mb-2 bg-info text-white DIS" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Oficina de envio</a>
  <button class="btn btn-light btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">En reparto</button>
  </p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
      <div class="cardin2 mb-3">
  <img src="https://image.freepik.com/vector-gratis/isometrica-mundial-posterior-entrega_1284-21833.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ">Oficina envio</h5>
    <p class="card-text paginademiscomprasp">El producto llega a la oficina local de tu ciudad o región para partir hacia tu dirección.</p>
    <p class="card-text paginademiscomprasp"><small class="text-muted">Familia EcoAgro</small></p>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
     
      <div class="cardin3 mb-3">
  <img src="https://image.freepik.com/vector-gratis/ilustracion-logistica-almacen_1284-21009.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">En reparto</h5>
    <p class="card-text paginademiscomprasp">Se confirma la llegada del producto a la oficina y se prepara para su último tramo</p>
    <p class="card-text paginademiscomprasp"><small class="text-muted">Familia EcoAgro</small></p>
  </div>
</div>

      </div>
    </div>
  </div>
</div>
<p className="paginademiscomprasp">

  <a class="btn btn-light btn-primary p-3 mb-2 bg-info text-white" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Entregado</a>
  <button class="btn btn-light btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Disfruta tus productos</button>
 
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      
      <div class="card card-body">
      <div class="cardin1 mb-3">
  <img src="https://image.freepik.com/vector-gratis/colorido-concepto-entrega-ilustrado_23-2148534121.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Entregado</h5>
    <p class="card-text paginademiscomprasp">A través de nuestros mensajeros, se confirma la entrega al correspondiente dueño del producto e igualmente se reafirma el estado del producto.</p>
    <p class="card-text paginademiscomprasp"><small class="text-muted">Familia EcoAgro</small></p>
  </div>
</div>
      </div>

    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
     
      <div class="cardin2 mb-3">
  <img src="https://image.freepik.com/vector-gratis/amigos-tomados-mano-ilustracion-concepto_52683-23815.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Disfruta</h5>
    <p class="card-text paginademiscomprasp">Esperamos que sigas confiando en nosotros, vuelve pronto.</p>
    <p class="card-text paginademiscomprasp"><small class="text-muted">Familia EcoAgro</small></p>
  </div>
</div>

      </div>
    </div>
  </div>
</div>
</div>
  </div>
    );
}
    export default Miscompras;