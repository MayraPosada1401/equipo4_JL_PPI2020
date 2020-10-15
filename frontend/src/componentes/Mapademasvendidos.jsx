import React from 'react';
import '../Estilos/Mapa.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import MAPITA from '../Imagenes/MAPITA1.jpg';
import MAPACOLOMBIA23 from '../Imagenes/MAPACOLOMBIA23.jpg';
import { Link } from 'react-router-dom';

function Mapatendencias() {  
    return(
       <div className="Mapa">
<div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item nav-item2 normal-nav active">
      <a className="nav-link" href="">Inicio<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <a class="nav-link" href="#">Perfil</a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <a className="nav-link" href="#">Conexiones</a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <a className="nav-link " href="#" >Contactanos</a>
      </li>
      <li className="nav-item normal-nav nav-item2 active">
        <Link to="/compradormapa"><a className="nav-link  " href="#">Tienda</a> </Link>
      </li>
      <li className="nav-item nav-item2 active ">
      <Link to="/comprador"><a className="nav-link btn-cerrarcampe " href="#">Mis compras</a></Link>  
      </li>
      <a type="button" class="btn1-header btn-info1"></a>
      <Link to="/"><button type="button" class="btn btn-info btn-cerrarcampe">Cerrar sesión</button></Link> 
      <li className="nav-item">
     
      </li>
    </ul>
  </div>
</nav>
  </div>
  <button className="button-container" link=""></button>   
  <button className="button-container1" link=""></button>  
  <button className="button-container2"link=""></button>  
  <button className="button-container3"link=""></button>  
  <button className="button-container4"link=""></button>  
  <button className="button-container5"link=""></button>  
<div className="fondo"><img src={MAPACOLOMBIA23} className="fondo " alt=""/></div>
<img className="Mapitacambio" alt="Responsive image" ></img>



</div>




);
}
export default Mapatendencias;