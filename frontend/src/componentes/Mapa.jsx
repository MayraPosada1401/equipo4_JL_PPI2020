import React from 'react';
import '../Estilos/Mapa.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import MAPITA from '../Imagenes/MAPITA1.jpg';
import MAPA from '../Imagenes/MAPA.jpg';
import { Link } from 'react-router-dom';

function Mapa() {  
    return(
       <div className="Mapa">
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
 <Link to="/regionesdemapacom"><button className="containercomprador" link=""></button></Link>    
 <Link to="/regionesdemapacom"> <button className="containercomprador1" link=""></button></Link>  
 <Link to="/regionesdemapacom"><button className="containercomprador2"link=""></button></Link>  
  <Link to="/regionesdemapacom"><button className="containercomprador3"link=""></button></Link>  
  <Link to="/regionesdemapacom"><button className="containercomprador4"link=""></button></Link>  
 <Link to="/regionesdemapacom"><button className="containercomprador5"link=""></button></Link>  
<div className="fondodemapacom"><img src={MAPA} className="fondo" alt=""/></div>
<div className="fonsonuevodemaparespon"></div>
<Link to="/regionesdemapacom"><input type="button"className="botondecomprador"/></Link> 
<Link to="/regionesdemapacom"><input type="button"className="botondecomprador1"/></Link> 
<Link to="/regionesdemapacom"><input type="button"className="botondecomprador2"/></Link> 
<Link to="/regionesdemapacom"><input type="button"className="botondecomprador3"/></Link> 
<Link to="/regionesdemapacom"><input type="button"className="botondecomprador4"/></Link> 
<Link to="/regionesdemapacom"><input type="button"className="botondecomprador5"/></Link> 
</div>




);
}
export default Mapa;