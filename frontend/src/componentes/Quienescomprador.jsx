import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import procesoecoagro from '../Imagenes/procesoecoagro.png';
import { Link } from 'react-router-dom';
import '../Estilos/Quienes.css';




function Transportador3() {

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
    export default Transportador3;