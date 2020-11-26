import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import capacitador1 from "../Imagenes/capacitador1.jpg";
import capacitador2 from "../Imagenes/capacitador2.jpg";
import capacitador3 from "../Imagenes/capacitador3.jpg";
import CAMPO2 from '../Imagenes/CAMPO2.jpg';
import procesoecoagro from '../Imagenes/procesoecoagro.png';
import { Link } from 'react-router-dom';
import '../Estilos/Quienes.css';




function Transportador() {

    return (
        <div className="App Fondodequienes">
      
      <div>
      <div>
    <div className="Header-nabvarcapa">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercapa" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item-campesino nav-item-campesino2 normal-nav active">
            <Link to="/paginadecap" className="nav-link" href="#">Inicio</Link>
          </li>
          <li className="nav-item-campesino nav-item-campesino2 normal-nav active">
            <Link to= "/cursocapa" className="nav-link" href="#">Cursos</Link>
          </li>
          <li className="nav-item-campesino normal-nav nav-item-campesino2 active">
            <Link to="/conexionescapa" className="nav-link" href="#">Conexiones</Link>
          </li>
          <li className="nav-item-campesino nav-item-campesino2 active edit2-nececapa">
            <Link to="/quienescapa" className="nav-link" href="#">Contactanos</Link>
          </li>
        
          <li className="nav-item-campesino nav-item-campesino2 active edit2-nececapa">
            <Link to="/perfilcapa" className="nav-link" href="#">Perfil</Link>
          </li>
          <a type="button" class="btn1-header-campe btn-info1"></a>
          <Link to="/">
          <button type="button" class="btn btn-info btn-cerrarcapa">Cerrar sesión</button>
          </Link>
        </ul>
      </div>
    </nav>
      </div>
        </div>
    
    
   
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
        <Link to="/quienescapa">
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
    export default Transportador;