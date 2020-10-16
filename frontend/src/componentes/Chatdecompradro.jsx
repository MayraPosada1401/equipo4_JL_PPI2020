import React from 'react';
import '../Estilos/Chatdecomprador.css';
import { Link } from 'react-router-dom';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';

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
      
        <li className="nav-item normal-nav nav-item2 active">
        <a class="nav-link" href="#">Conexiones</a>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
        <Link to="/quienescomprador"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
        <li className="nav-item normal-nav nav-item2 active">
          <Link to="/registro"><a className="nav-link  " href="#">Tienda</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
        <Link to="/comprador"><a className="nav-link  " href="#">Mis compras</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item2 active">
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

      <div>
        <h1 className="component-1-text development-chatperfil titulobody-chatperfil" >Chat e Información de Comprador</h1>
        <h3 className="component-1-text social-chatperfil">Aquí te presentamos el chat de pactar precio y la reseña del comprador interesado.</h3>
     </div>

      <div className="part1-reseña">
            
            <div className="reseña">
                <div>
                <img src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" className="card-img-reseña" alt="..." />
                </div>   
                <div>
                <h2 className="titulonombre-chatperfil">Martina Estrada</h2>
                <h3 className="titulocategoria-chatperfil">Compradora</h3>
                <img src="https://webmarketingtips.mx/wp-content/uploads/2017/08/248-des-1170x395.png" className="estrellas-img-chatperfil" alt=""/>
                </div> 
                <div>
                <p className="datos-reseña-charperfil">Región de compra: Caribe</p>
                <p className="datos-reseña-charperfil">Activo en el mercado: 3 años</p>
                <p className="datos-reseña-charperfil">Teléfono de contacto: 2396363</p>
                <p className="datos-reseña-charperfil">Frecuencia de compra: Alta</p>
                </div>  
            </div>

        <div className="verticalLinea-chatperfil"></div>
      
         <div className="contenedor-chatperfil">
            <h3 className="titulos-fechas-chatperfil">19/07/2020</h3>
            <div className="recuadromensaje-chatperfil">
                <h4 className="nombreusuario-chatperfil">Martina Estrada</h4>
                <p className="parrafo-conversación-chatperfil">Hola muy buen día, deseo pactar un precio con usted por el producto mango tomy. Ofrezco 2000$ por el kilo</p>
            </div>
            
            <h3 className="titulos-fechas-chatperfil">20/07/2020</h3>
            
            <div className="recuadromensaje2-chatperfil">
                <h4 className="nombreusuario-chatperfil">Pablo Arango</h4>
                <p className="parrafo-conversación-chatperfil">Hola muy buen día, el precio que me ofrece me parece justo y bueno. Muchas gracias por comunicarse conmigo</p>
            </div>

            <div className="contenedor2dechat-perfilchat">
            <div className="form-group-chatperfil col-md-10">
                <input type="text" className="form-control border border-warning border-input-chatperfil" required/>
            </div>
            <button className="boton-enviarmensaje-chatperfil"></button>
            </div>
         </div>

         
        </div>
    </div>

    );}