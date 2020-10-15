import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import Canasta from '../Imagenes/Canasta.png';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import CAMPO2 from '../Imagenes/CAMPO2.jpg';
import procesoecoagro from '../Imagenes/procesoecoagro.png';
import { Link } from 'react-router-dom';
import '../Estilos/Registro.css'

function Transportador() {

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
      
        <li className="nav-item normal-nav nav-item2 active">
         <Link to="/transportador"> <a class="nav-link" href="#">Transportador</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
          <a className="nav-link" href="#">Conocenos</a>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
          <a className="nav-link " href="#" >Contactanos</a>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
          <Link to="/registro"><a className="nav-link  " href="#">¿No te haz registrado aún?</a></Link>
        </li>
        <li className="nav-item nav-item2 active ">
         <Link to="/quienes"><a className="nav-link btn-cerrarcampe " href="#">¿Quienes somos?</a></Link> 
        </li>
        <a type="button" class="btn1-header btn-info1"></a>
        <Link to="/app1"><button type="button" class="btn btn-info btn-cerrarcampe">Ingresar</button></Link>
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
  
  </div></div>
  <div className="contenedorpararegistro">
  
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Usuario</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Nombre de pila"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Dirección</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Casa, apartamento..."/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Departamento</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Pais</label>
      <select id="inputState" class="form-control">
        <option selected>Tipo de usuario</option>
        <option>Campesino</option>
        <option>Comprador</option>
        <option>Capacitador</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Contacto</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
       Acepto todos los terminos y condiciones de uso de datos
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Iniciar sesión</button>
</form>
</div>
  </div> 


      );
    }
    export default Transportador;