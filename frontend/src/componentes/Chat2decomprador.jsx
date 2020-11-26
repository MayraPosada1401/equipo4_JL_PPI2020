import React from 'react';
import '../Estilos/EstiloChatSecun.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import {Link} from 'react-router-dom';


export default function InterfazChatPrincipal() {
  
    return (
    
    <div className="App">
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

  <div className="ChatSecundario-campe">

<div className="part1-chatsecundario">
      
      <div className="principaldelchatanterior2-secundario-campe">
      <div className="chatsanteriores-secundario-campe" type="button">
          <div className="contenedorinfocontacto-chat-secundario-campe">
              <img src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" className="img-contacto-chatsecundario" alt="..." />
              <div>
                <h4 className="titulonombres-chatprincipal" >Martina Estrada</h4>
                <p className="textocontacto-chatsecundario">La oferta esta correcta</p>
              </div>
          </div>   
      </div>
      
      <p className="textocontacto-chatsanteriores-secundario">Escriba el precio pactado aquí</p>
      
      <div className="contenedor2dechat-chatsecundario">
      <div className="form-group-chatsecundario col-md-6">
          <input type="text" className="form-control chatsecundario-inputprecio" required/>
      </div>
      <button className="boton-chatsecundario-confirmar"></button>
      </div> 
      </div>

      <div className="principaldelchatanterior-secundario-campe">
      <div className="chatsanteriores-secundario-campe"  type="button">
          <div className="contenedorinfocontacto-chat-secundario-campe">
              <img src="https://plataformas.news/online/nota_tudn-lanza-la-marca-mega-futbol-.jpg" className="img-contacto-chatsecundario" alt="..." />
              <div>
                <h4 className="titulonombres-chatprincipal" >Erick Valencia</h4>
                <p className="textocontacto-chatsecundario">Podemos mejorar la oferta</p>
              </div>
          </div>   
      </div>
      
      <p className="textocontacto-chatsanteriores-secundario">Escriba el precio pactado aquí</p>
      
      <div className="contenedor2dechat-chatsecundario">
      <div className="form-group-chatsecundario col-md-6">
          <input type="text" className="form-control chatsecundario-inputprecio" required/>
      </div>
      <button className="boton-chatsecundario-confirmar"></button>
      </div> 
      </div>

      <div className="principaldelchatanterior-secundario-campe">
      <div className="chatsanteriores-secundario-campe"  type="button">
          <div className="contenedorinfocontacto-chat-secundario-campe">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Personas_introvertidas_buenos_lideres.jpg" className="img-contacto-chatsecundario" alt="..." />
              <div>
                <h4 className="titulonombres-chatprincipal" >Mauricio Reyes</h4>
                <p className="textocontacto-chatsecundario">¿Cómo fueron los procesos de cosecha?</p>
              </div>
          </div>   
      </div>
      
      <p className="textocontacto-chatsanteriores-secundario">Escriba el precio pactado aquí</p>
      
      <div className="contenedor2dechat-chatsecundario">
      <div className="form-group-chatsecundario col-md-6">
          <input type="text" className="form-control chatsecundario-inputprecio" required/>
      </div>
      <button className="boton-chatsecundario-confirmar"></button>
      </div> 
      </div>


      
   </div>

   <div className="contenedor-chatsecundario-campe">
   <h3 className="titulos-fechas-chatsecundario">19/07/2020</h3>
      <div className="recuadromensaje-chatsecundario-campe">
          <h4 className="nombreusuario-chatsecundario-campe">Martina Estrada</h4>
          <p className="parrafo-conversación-chatsecundario-campe">Hola muy buen día, deseo pactar un precio con usted por el producto mango tomy. Ofrezco 2000$ por el kilo</p>
      </div>
      
      <h3 className="titulos-fechas-chatsecundario">20/07/2020</h3>
      
      <div className="recuadromensaje2-chatsecundario-campe">
          <h4 className="nombreusuario-chatsecundario-campe">Pablo Arango</h4>
          <p className="parrafo-conversación-chatsecundario-campe">Hola muy buen día, el precio que me ofrece me parece justo y bueno. Muchas gracias por comunicarse conmigo</p>
      </div>

      <div className="contenedor2dechat-perfilsecundario-campe">
      <div className="form-group-chatsecundario-campe col-md-10">
          <input type="text" className="form-control border border-warning border-input-chatsecundario-campe" required/>
      </div>
      <button className="boton-enviarmensaje-chatsecundario-campe"></button>
      </div> 
   </div>

  </div>
</div>

    );}