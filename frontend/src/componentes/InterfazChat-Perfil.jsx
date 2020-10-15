import React from 'react';
import '../Estilos/EstiloChat-Perfil.css';

export default function InterfazChatPerfil() {
  
    return (
    <div className="ChatPerfil">

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