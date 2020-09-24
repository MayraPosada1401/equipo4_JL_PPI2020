import React from 'react';
import '../Estilos/Mapa.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import MAPA from '../Imagenes/MAPA.jpg';


function Mapa() {  
    return(
       <div className="Mapa">

      <div className="App">
      <div ClasName="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-fluid" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="">Casa <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a class="nav-link" href="#">Transportador</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Conocenos</a>
        </li>
        
        <li className="nav-item active">
          <a className="nav-link  " href="#">¿No te haz registrado aún?</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link  " href="#">Quienes somos</a>
        </li>
       
        <a type="button" className="btn1 btn-info1"></a>
        <button type="button" className="btn btn-info" >Ingresar</button>
        <li className="nav-item active">
       
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
<div className="fondo"><img src={MAPA} className="fondo" alt=""/></div>

</div>
</div>
    );
}
export default Mapa;