import React from 'react';
import '../Estilos/EstiloOfertaCampe.css';
import {Link} from 'react-router-dom';


export default function InterfazOfertaCampe () {
  
  return (

<div>

    <div>
        <h1 className="component-1-text development-ofertascampe titulobody-ofertascampe" >Tus Ofertas</h1>
        <h3 className="component-1-text social-ofertascampe subtitulo1">Aquí te presentamos ofertas hacia tus productos</h3>
        <p className="component-1-text component-text-ofertascampe parrafo1-ofertascampe">Para EcoAgro es un placer que pertenezcas a esta familia. Somos conocedores de la importancia de ustedes en nuestros bellos campos colombianos, su trabajo es digno de admirar y ha de ser respetado, esa lucha constante que ustedes enfrentan para nosotros en una gran batalla y son héroes a la vez de nuestro país. Queremos romper ese esquema de que para una buena economía se requiere de un intermediario y estamos agradecidos de que ya hagas parte de ese proceso.</p>
        <p className="component-1-text component-text-ofertascampe parrafo1-ofertascampe">En esta sección visualizaras las ofertas que tienen algunos compradores para ti, para que puedas hacer la venta directa de tus productos y puedas pactar precios con ellos, donde el beneficio sea para ambas partes</p>
    </div>
    

    <div  className="cards_ofertas">
        
        <div className="card10 mb-5 overflow-hidden" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" className="card-img-oferta" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-ofertacampe">Martina Estrada</h5>
                <p className="card-text-ofertacampe">Utiliza el chat para estar en contacto para establecer un precio por tu producto (Mango Tommy) </p>
                <Link to="/chat-Reseña">
                <button type="button" class="btn btn-outline-warning btn-info btn3-ofertacampe btn-space-oferta">Ver</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card10 mb-5 overflow-hidden" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://www.inboundcycle.com/hubfs/ClaraAlvarez.jpg" className="card-img-oferta" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-ofertacampe">Clara Alvarez</h5>
                <p className="card-text-ofertacampe">Utiliza el chat para estar en contacto para establecer un precio por tu producto (Sandia)</p>
                <Link to="/chat-Reseña">
                <button type="button" class="btn btn-outline-warning btn-info btn3-ofertacampe btn-space-oferta">Ver</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card10 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://images.pexels.com/photos/267359/pexels-photo-267359.jpeg" className="card-img-oferta" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-ofertacampe">Alfredo Valencia</h5>
                <p className="card-text-ofertacampe">Utiliza el chat para estar en contacto para establecer un precio por tu producto (Platano)</p>
                <Link to="/chat-Reseña">
                <button type="button" class="btn btn-outline-warning btn-info btn3-ofertacampe btn-space-oferta">Ver</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card10 mb-5" >
          <div className="row no-gutters">
            <div className="col-md-8">
              <img src="https://image.freepik.com/foto-gratis/hombre-negocios-guapo-posando-vista-frontal_23-2148336822.jpg" className="card-img-oferta" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title-ofertacampe">Zéf Platón</h5>
                <p className="card-text-ofertacampe">Utiliza el chat para estar en contacto para establecer un precio por tu producto (Fresas)</p>
                <Link to="/chat-Reseña">
                <button type="button" class="btn btn-outline-warning btn-info btn3-ofertacampe btn-space-oferta">Ver</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>


</div>

);
}