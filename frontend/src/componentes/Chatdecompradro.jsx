import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import '../Estilos/EstiloChatPrincipal.css';
import Fresa from '../Imagenes/strawberry.png';
import Manzana from '../Imagenes/apple.png';
import Uva from '../Imagenes/grapes.png';
import Mango from '../Imagenes/mango.png';
import Pera from '../Imagenes/pera.png';
import Piña from '../Imagenes/pineapple.png';
import Sandia from '../Imagenes/sandia.png';
import {Link} from 'react-router-dom';

export default function InterfazChatPerfil() {
  
    return (
    <div className="ChatPerfil">
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
      <li className="nav-item nav-item normal-nav active">
      <Link to="/conexionescompra"><a className="nav-link" href="">Conexiones <span class="sr-only">(current)</span></a></Link>
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
      
  
  
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={COMPRADOR1} className="d-block w-100 " alt="..."/>
        
        </div>
      <div className="carousel-item">
        <img src={COMPRADOR2} className="d-block w-100" alt="..."/>
        
        </div>
      <div className="carousel-item">
        <img src={comprador3} className="d-block w-100" alt="..."/>
        
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
  </div>



  <div className="ChatPrincipal">

<div className="part1-chatprincipal">
      
      <div className="principaldelasprincipalesdelchatanterior2">
      <Link to="/chatcomoprador" className="chatsanteriores text-decoration-none">
      <div type="button">
          <div className="contenedorinfocontacto-chat">
              <img src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" className="img-contacto-chatprincipal" alt="..." />
              <div>
                <h4 className="titulonombres-chatprincipal" >Martina Estrada</h4>
                <p className="textocontacto-chatprincipal">La oferta esta correcta</p>
              </div>
          </div>   
      </div>
      </Link>
      
      <p className="textocontacto-chatsanteriores">Escriba el precio pactado aquí</p>
      
      <div className="contenedor2dechat-chatsecundario">
      <div className="form-group-chatsecundario col-md-6">
        <div className="preciodechat">45.000</div>
      </div>
      <button className="boton-chatsecundario-confirmartyuop"></button>
      </div> 
      </div>

      <div className="principaldelasprincipalesdelchatanterior">
      <div className="chatsanteriores"  type="button">
          <div className="contenedorinfocontacto-chat">
              <img src="https://plataformas.news/online/nota_tudn-lanza-la-marca-mega-futbol-.jpg" className="img-contacto-chatprincipal" alt="..." />
              <div>
                <h4 className="titulonombres-chatprincipal" >Erick Valencia</h4>
                <Link to="/chatcomoprador"><p className="textocontacto-chatprincipal">Podemos mejorar la oferta</p></Link>  
              </div>
          </div>   
      </div>
      
      <p className="textocontacto-chatsanteriores">Escriba el precio pactado aquí</p>
      
      <div className="contenedor2dechat-chatprincipal">
      <div className="form-group-chatprincipal">
          <input type="text" className="form-control chatprincipal-inputprecio" required=""/>
      </div>
      <button className="boton-chatprincipal-confirmar"></button>
      </div> 
      </div>

      <div className="principaldelasprincipalesdelchatanterior">
      <div className="chatsanteriores"  type="button">
          <div className="contenedorinfocontacto-chat">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Personas_introvertidas_buenos_lideres.jpg" className="img-contacto-chatprincipal" alt="..." />
              <div>
                <h4 className="titulonombres-chatprincipal" >Mauricio Reyes</h4>
                <Link to="/chatcomoprador"><p className="textocontacto-chatprincipal">¿Cómo fueron los procesos de cosecha?</p></Link>  
              </div>
          </div>   
      </div>
      
      <p className="textocontacto-chatsanteriores">Escriba el precio pactado aquí</p>
      
      <div className="contenedor2dechat-chatsecundario">
      <div className="form-group-chatsecundario col-md-6">
        <div className="preciodechat">45.000</div>
      </div>
      <button className="boton-chatsecundario-confirmartyuop"></button>
      </div> 
      </div>


      
   </div>

   <div className="contenedor-chatprincipal">
       <img src={Fresa} className="img-fruta-chatprincipal img-fresa-chatprincipal" alt=""/>
       <img src={Manzana} className="img-fruta-chatprincipal img-manzana-chatprincipal" alt=""/>
       <img src={Uva} className="img-fruta-chatprincipal img-uva-chatprincipal" alt=""/>
       <img src={Mango} className="img-fruta-chatprincipal img-mango-chatprincipal" alt=""/>
       <img src={Pera} className="img-fruta-chatprincipal img-pera-chatprincipal" alt=""/>
       <img src={Piña} className="img-fruta-chatprincipal img-piña-chatprincipal" alt=""/>
       <img src={Sandia} className="img-fruta-chatprincipal img-sandia-chatprincipal" alt=""/>
       <img src="https://i.pinimg.com/originals/ee/f1/9d/eef19dfeb18e85ca5ab7cfbcd46e86cb.png" className="imagen-campesinito-chatprincipal" alt=""/>
   </div>

  
</div>
</div>
    );}