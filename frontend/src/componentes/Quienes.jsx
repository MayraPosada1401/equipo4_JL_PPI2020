import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import Canasta from '../Imagenes/Canasta.png';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import CAMPO2 from '../Imagenes/CAMPO2.jpg';
import procesoecoagro from '../Imagenes/procesoecoagro.png';
import { Link } from 'react-router-dom';
import '../Estilos/Quienes.css';




function Transportador() {

    return (
        <div className="App Fondodequienes">
      
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item normal-nav nav-item active">
        <Link to="/transportador"> <a class="nav-link" href="#">Transportador</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/quienes"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
        <li className="nav-item normal-nav nav-item active">
          <Link to=""><a className="nav-link  " href="#">Conocenos</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/registro"><a className="nav-link  " href="#">¿No te haz registrado aún?</a></Link>
        </li>
        <a type="button" class="btn1-header btn-info1"></a>
      <Link to="/iniciosesiongeneral"><button type="button" class="btn btn-info btn-ingresar-pagina">Ingresar</button></Link>
      
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

<div className="Maxcontenquien">
<div className="Contenedorparacambiarancho">
<div class="card border-info mb-3 Contenedorparacambiarancho" >
  <div class="card-header">Somos el enlace directo entre campesino y comprador</div>
  <div class="card-body text-infoContenedorparacambiarancho">
    <h5 class="card-title shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">EcoAgro</h5>
    <p class="card-text">Nuestro equipo es cambio del horizonte otorgando una fortaleza al sector agrícola en el impulso de autodominio de sus recursos y oportunidades en el sector económico nacional e internacional.
Tenemos el objetivo de romper el esquema del prototipo del intermediario y dejar atrás ese imaginario colectivo erróneo de la baja calidad de productos agrícolas colombianos.

</p>
  </div>
</div>
</div>
  <div className="Fondodequienes">
  <div class="row row-cols-1 row-cols-md-2 ">
  <div class="col mb-4 ">
    <div class="card">
      <img src="https://image.freepik.com/vector-gratis/grupo-personas-diseno-plano_23-2148462710.jpg" class="Topuncioocparacomprador card-img-top" alt="..."/>
      <div class="card-body cardinpantallapincusers">
        <h5 class="card-title">Mayra Posada</h5>
        <p class="card-text">Desarrolladora web y diseñadora. Estamos disponibles a aclarar cualquier duda, preguntanos y conoce más de la familia EcoAgro.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card ">
      <img src="https://image.freepik.com/vector-gratis/grupo-personas-diseno-plano_23-2148462710.jpg" class="Topuncioocparacomprador card-img-top" alt="..."/>
      <div class="card-body cardinpantallapincusers">
        <h5 class="card-title">Dahiana Restrepo</h5>
        <p class="card-text">Desarrolladora web y diseñadora. Estamos disponibles a aclarar cualquier duda, preguntanos y conoce más de la familia EcoAgro.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card ">
      <img src="https://image.freepik.com/vector-gratis/grupo-personas-diseno-plano_23-2148462710.jpg" class="Topuncioocparacomprador card-img-top" alt="..."/>
      <div class="card-body cardinpantallapincusers">
        <h5 class="card-title">Karol Cuellar </h5>
        <p class="card-text">Desarrolladora web y diseñadora. Estamos disponibles a aclarar cualquier duda, preguntanos y conoce más de la familia EcoAgro.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card ">
      <img src="https://image.freepik.com/vector-gratis/grupo-personas-diseno-plano_23-2148462710.jpg" class="Topuncioocparacomprador card-img-top" alt="..."/>
      <div class="card-body cardinpantallapincusers">
        <h5 class="card-title">Mariana Soto</h5>
        <p class="card-text">Desarrolladora web y diseñadora. Estamos disponibles a aclarar cualquier duda, preguntanos y conoce más de la familia EcoAgro.</p>
      </div>
    </div>
  </div>
</div>
  </div>
  
  </div> 
<div className="Maxcontenquien">
  <button type="button" class="btn btn-info centricoquien" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Contactanos</button>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Conocenos!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Correo:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Mensaje:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Enviar mensaje</button>
      </div>
    </div>
  </div>
</div>
  </div> 
      );
    }
    export default Transportador;