import React from 'react';
import '../Estilos/iniciocapa.css';
import ECOAGRODEFINITIVO1 from '../imagenes/ECOAGRODEFINITIVO1.jpg';
import capacitador1 from '../imagenes/capacitador1.png';
import capacitador2 from '../imagenes/capacitador2.png';
import capacitador3 from '../imagenes/capacitador3.png';



export default function Header(){
  return(
    <>
  <div className="Header">
   
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-fluid" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Casa<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Transportador</a>
      </li>
      <li className="nav-item active">
        <a className  ="nav-link" href="#">Conocenos</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link  " href="#">¿No te haz registrado aún?</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link  " href="#">Quienes somos</a>
      </li>
      <a type="button" className="btn1 btn-info1"></a>
      <button type="button" className="btn1 btn-info">Ingresar</button>
      <li className="nav-item">
     </li>
    </ul>
  </div>
</nav>
</div>

     

<div className="carousel">
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active"><img src={capacitador1} className="d-block w-100" alt="Responsive image" />    
         <div className="carousel-caption d-none d-md-block">
    </div>
    </div>
  <div className="carousel-item"> <img src={capacitador2} className="d-block w-100" alt="Responsive image" />    
   <div className="carousel-caption d-none d-md-block">
    </div>
    </div>
  <div className="carousel-item"><img src={capacitador3} className="d-block w-100" alt="Responsive image" />        
  <div className="carousel-caption d-none d-md-block">
    </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>
</div>


</>
  )
}

