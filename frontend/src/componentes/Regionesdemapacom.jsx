import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import papa from '../Imagenes/papa.png';
import mazorca from '../Imagenes/mazorca.png';
import yuca from '../Imagenes/yuca.png';
import '../Estilos/Regionesdemapacom.css';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import { Link } from 'react-router-dom';

function andina() {
  return (
    <div className="andina FONDO">
    <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item normal-nav nav-item2 active">
        <a class="nav-link" href="#">Conexiones</a>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
        <Link to="/quienescomprador"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
        <li className="nav-item normal-nav nav-item2 active">
          <Link to="/compradormapa"><a className="nav-link  " href="#">Tienda</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
        <Link to="/comprador"><a className="nav-link  " href="#">Mis compras</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
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
    

<div className="Tituloenpaginaprincipal3" >Cultivos</div>
<div className="diesñosubdecom">Alta producción</div>
<div className="diseñocentrocom">Regiones colombianas</div>
<div  className="UBICACION">
        
        

        <div className="card01com mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8 tamaño">
              <img src={papa} className="card-img-top Topuncioocparacomprador"  alt="Responsive image" />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">PAPA</h5>
                <p className="card-text">Precio: $750 X Kg</p>
              <Link to="/regionesparaconocer"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Más info</button></p></Link>  
               <Link to="/comprasdelcomprador"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Comprar</button></p></Link> 
               <Link to="/chatdecompradro"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Acuerdo</button></p></Link> 
              </div>
            </div>
          </div>
        </div>
        <div className="cardin2 card01com mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8 tamaño">
              <img src={mazorca} className="card-img-top Topuncioocparacomprador" alt="Responsive image" />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">MAZORCA DULCE</h5>
                <p className="card-text">Precio: $7.500 X Unidad.</p>
                <Link to="/regionesparaconocer"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Más info</button></p></Link>  
                <Link to="/comprasdelcomprador"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Comprar</button></p></Link>    
                <Link to="/chatdecompradro"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Acuerdo</button></p></Link>  
              </div>
            </div>
          </div>
        </div>
        <div className="cardin3 card01com mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8 tamaño">
              <img src={yuca} className="card-img-top Topuncioocparacomprador" alt="Responsive image" />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">YUCA SELECTA</h5>
                <p className="card-text">Precio: $1.150 X Kg</p>
                <Link to="/regionesparaconocer"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Más info</button></p></Link>     
                <Link to="/comprasdelcomprador"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Comprar</button></p></Link>   
                <Link to="/chatdecompradro"><p className="card-text"><button type="button" className="btn btn-inf btn btn-outline-warning">Acuerdo</button></p></Link>  
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="contenedorbotonesparaver">
   <Link to="/compradormapa"><button type="button" class="btn btn-outline-light centroycentro"><h1>Mapa</h1></button></Link> 
   <Link to="/app1"><button type="button" class="btn btn-outline-light centroycentro2"><h1>Mas</h1></button></Link> 
    </div>
    <br/>
    <br/>
    </div>
  );
}
export default andina;