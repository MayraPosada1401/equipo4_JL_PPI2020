import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import '../Estilos/EstiloHeader.css'
import campesino1 from '../Imagenes/campesino1.png';
import campesino2 from '../Imagenes/campesino2.png';
import campesino3 from '../Imagenes/campesino3.png';
import { Link } from 'react-router-dom';
import '../Estilos/Quienes.css';




function Transportador1() {

    return (
        <div className="App Fondodequienes">
      
      <div>
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
        <a className="nav-link " href="#">Contactanos</a>
      </li>
      <li className="nav-item-campesino normal-nav nav-item-campesino2 active">
        <Link to="/perfilcampesino" className="nav-link" href="#">Perfil</Link>
      </li>
      <li className="nav-item-campesino nav-item-campesino2 active edit1-nabvarcampesino edit2-nece">
        <Link to="/productostendencia" className="nav-link" href="#">Más vendido</Link>
      </li>
      <a type="button" class="btn1-header-campe btn-info1"></a>
      <Link to="/">
      <button type="button" class="btn btn-info btn-cerrarcampe">Cerrar sesión</button>
      </Link>
    </ul>
  </div>
</nav>
  </div>
    </div>
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
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card ">
      <img src="https://image.freepik.com/vector-gratis/grupo-personas-diseno-plano_23-2148462710.jpg" class="Topuncioocparacomprador card-img-top" alt="..."/>
      <div class="card-body cardinpantallapincusers">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card ">
      <img src="https://image.freepik.com/vector-gratis/grupo-personas-diseno-plano_23-2148462710.jpg" class="Topuncioocparacomprador card-img-top" alt="..."/>
      <div class="card-body cardinpantallapincusers">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card ">
      <img src="https://image.freepik.com/vector-gratis/grupo-personas-diseno-plano_23-2148462710.jpg" class="Topuncioocparacomprador card-img-top" alt="..."/>
      <div class="card-body cardinpantallapincusers">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
    export default Transportador1;