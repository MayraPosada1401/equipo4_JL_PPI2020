
import React from 'react';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import '../Estilos/Actualizarpaginadecomprador.css';
import { Link } from 'react-router-dom';


function actualiza() {
  return (
    <div className="actualiza">
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
  

  <h3 class="Tituloenpaginaprincipal3">Actualización de datos</h3>

  <form className=" form-actualizardatoscampe col-12 col-md-5">
                <div className="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Nombres</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Apellidos</label>
                    <input type="text" className="form-control" id="lastName" require/>
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputEmail">Email</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" required/>
                </div>
                <div className="form-row">
                  <div class="form-group col-md-12">
                    <label for="name">Municipio</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                </div>
                <div className="form-row">
                  <div class="form-group col-md-12">
                    <label for="name">Contacto Telefónico</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                </div>
                <h3 className="titulobody among-actualizardatoscampe">Cambio de Contraseña</h3>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="lastName">Ingrese Nueva Contraseña</label>
                    <input type="text" className="form-control" id="lastName" require/>
                  </div>
                </div>
                
                <div class="text-center btnalinearenelcentrocontenedor-botonconfirmaractucampe">
                    <button type="submit" class=" btn btn-info text-white col-12 btnalinearenelcentrocontenedor-botonconfirmaractucampe">Confirmar</button>
                </div>
            </form>

</div>

  );
}
  export default  actualiza;


