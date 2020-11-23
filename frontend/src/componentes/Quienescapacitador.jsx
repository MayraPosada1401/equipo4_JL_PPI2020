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




function Transportador2() {

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
      
        <li className="nav-item normal-nav nav-item2 active">
         <Link to="/transportador"> <a class="nav-link" href="#">Transportador</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
       <Link to="/quienes"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <a className="nav-link" href="#">Conexiones</a>
      </li>
        <li className="nav-item normal-nav nav-item2 active">
          <Link to="/registro"><a className="nav-link  " href="#">¿No te haz registrado aún?</a></Link>
        </li>

        <a type="button" class="btn1-header btn-info1"></a>
        <Link to="/iniciosesiongeneral"><button type="button" class="btn btn-info btn-cerrarcampe">Ingresar</button></Link>
        <li className="nav-item">
       
        </li>
      </ul>
    </div>
  </nav>
    </div>
     
  
  <form >
        <div className="Distanciasdecuadro backgroundinicio22">
  <div class="form-group">
    <label className="colordeletra" for="exampleFormControlInput1">Correo</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>

  <div class="form-group ">
    <label className="colordeletra" for="exampleFormControlTextarea1">Mensaje</label>
    <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
</form>
<br/>
<br/>
<br/>
  </div> 
      );
    }
    export default Transportador2;