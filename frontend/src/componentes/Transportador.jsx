import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import Canasta from '../Imagenes/Canasta.png';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import CAMPO2 from '../Imagenes/CAMPO2.jpg';
import procesoecoagro from '../Imagenes/procesoecoagro.png';
import { Link } from 'react-router-dom';
import '../Estilos/Transportador.css';

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
  <div className="formparatransportador">
  <form>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">Nombres</label>
      <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Apellidos</label>
      <input type="text" class="form-control" id="validationDefault02" value="Otto" required/>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Dirección-residencia</label>
      <input type="text" class="form-control" id="validationDefault03" required/>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Disponibilidad</label>
      <select class="custom-select" id="validationDefault04" required>
        <option selected disabled value="">Constante</option>
        <option selected disabled value="">Variante</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">¿Ha trabajado en el transporte de alimentos? </label>
      <input type="text" class="form-control" id="validationDefault05" required/>
      <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Si</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">No</label>
</div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  

  <div class="form-group">
    <label for="formGroupExampleInput">Región de residencia</label>
  <select class="form-control">
  <option>Pacifica</option>
  <option>Orinoquia</option>
  <option>Andina</option>
  <option>Amazonica</option>
  <option>Caribe</option>
</select>
</div>

<div class="form-group">
    <label for="formGroupExampleInput">¿Posee el vehículo adecuado para el transporte de alimentos?</label>
    <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Si</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">No</label>
</div>
</div>
<button class="btn btn-primary" type="submit">Submit form</button>
</form>
</div>
  </div> 
 
      );
    }
    export default Transportador;