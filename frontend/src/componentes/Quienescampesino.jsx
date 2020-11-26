import React from 'react';
import '../Estilos/Estiloquienescampesino.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import { Link } from 'react-router-dom';
export default function Conexionescampesino() {

    return (   
      <div className="App Fondodequienes">
      <div className="Header ">
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
     <Link to= "/conexionescampe" className="nav-link" href="#">Conexiones</Link>
      </li>
      <li className="nav-item-campesino normal-nav nav-item-campesino2 active">
      <Link to="/conexionescampesino" className="nav-link " href="#">Contactanos</Link>
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
        <Link to="/quienescomprador">
          <button type="submit" className="btn btn-outline-light">Enviar</button>
        </Link>
        </div>
       
      </form>
      <br/>
      <br/>
      <br/>
        </div> 

      );
    }
    