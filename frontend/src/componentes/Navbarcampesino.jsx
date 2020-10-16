import React from 'react';
import '../Estilos/EstiloHeader.css'
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import {Link} from 'react-router-dom';

export default function Navbarcampesino() {
  
  return (

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
      <Link to="/quienescampesino"><a className="nav-link " href="#">Contactanos</a></Link>
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
  );
}



