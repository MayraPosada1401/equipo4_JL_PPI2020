import React from 'react';
import '../Estilos/App1.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import COMPRADOR1 from '../Imagenes/COMPRADOR1.png';
import COMPRADOR2 from '../Imagenes/COMPRADOR2.png';
import comprador3 from '../Imagenes/comprador3.png';
import FRUTA1 from '../Imagenes/Fruta1.png';
import FRUTA2 from '../Imagenes/Fruta2.png';
import raradelcomprador1 from '../Imagenes/raradelcomprador1.png';
import raradelcomprador from '../Imagenes/raradelcomprador.png';
import { Link } from 'react-router-dom';

function App1() {
 
    return (

      
      <div className="fondopanvalor">
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
     
      
  
  <div className="Eiminaciondecarrusel">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={COMPRADOR1} className="d-block w-100" alt="..."/>
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
  
  </div></div>


<div className="Contenedor">
  <br></br>
  <br></br>
  <br></br>
<h1 className="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">A continuación te mostraremos los productos que estan en mayor tendencia</h1></div>
  <div  className="UBICACION ">
        
      

  <div className="Cardsespecialdeinciopaginap Appscolodefondodeneil">

        <section class="wrapper">

<nav class="menu">
  <ul class="menu__list">
   
  </ul>
</nav>

<div class="carditonsten card" data-effect="zoom">
  <button class="card__save  js-save" type="button">
    <i class="fa  fa-bookmark"></i>
   </button>
  <figure  class="card__image">
    <img src={FRUTA2} alt="Short description"/>
  </figure>
  <div class="card__header">
    <figure class="card__profile">
      <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
    </figure>
  </div>
  <div class="card__body">
    <h3 class="card__name">Pera</h3>
    <p class="card__job">Somos el enlace directo entre campesino y comprador.</p>
    <p class="card__bio">Producto proveniente de nuestra Región Amazonica</p>
  </div>
  <div class="card__footer">
    <p class="card__date">Feb 10 2018</p>
    <p class=""></p>
  </div>
</div>


</section>
<section class="wrapper">

<nav class="menu">
<ul class="menu__list">
 
</ul>
</nav>

<div class="carditonsten card" data-effect="zoom">
<button class="card__save  js-save" type="button">
  <i class="fa  fa-bookmark"></i>
 </button>
<figure  class="card__image">
  <img src={FRUTA1} alt="Short description"/>
</figure>
<div class="card__header">
  <figure class="card__profile">
    <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
  </figure>
</div>
<div class="card__body">
  <h3 class="card__name">Pitaya</h3>
  <p class="card__job">Somos el enlace directo entre campesino y comprador.</p>
  <p class="card__bio">Producto procediente de nuestro Eje Cafetero Colombiano</p>
</div>
<div class="card__footer">
  <p class="card__date">Feb 10 2018</p>
  <p class=""></p>
</div>
</div>


</section>

<section class="wrapper">

<nav class="menu">
<ul class="menu__list">
 
</ul>
</nav>

<div class="carditonsten card" data-effect="zoom">
<button class="card__save  js-save" type="button">
  <i class="fa  fa-bookmark"></i>
 </button>
<figure  class="card__image">
  <img src={raradelcomprador1} class="card-img-top Topuncioocparacomprador" alt="Short description"/>
</figure>
<div class="card__header">
  <figure class="card__profile">
    <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
  </figure>
</div>
<div class="card__body">
  <h3 class="card__name">Guanabana</h3>
  <p class="card__job">Somos el enlace directo entre campesino y comprador.</p>
  <p class="card__bio">Producto proveniente d enuestra Región Amazonica</p>
</div>
<div class="card__footer">
  <p class="card__date">Feb 10 2018</p>
  <p class=""></p>
</div>
</div>


</section>

<section class="wrapper">

<nav class="menu">
<ul class="menu__list">
 
</ul>
</nav>

<div class="carditonsten card" data-effect="zoom">
<button class="card__save  js-save" type="button">
  <i class="fa  fa-bookmark"></i>
 </button>
<figure  class="card__image">
  <img src={raradelcomprador} alt="Short description"/>
</figure>
<div class="card__header">
  <figure class="card__profile">
    <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
  </figure>
</div>
<div class="card__body">
  <h3 class="card__name">Guanabana.</h3>
  <p class="card__job">El campesino de valor y el comprador de justicia.</p>
  <p class="card__bio">Producto proveniente d enuestra Región Amazonica</p>
</div>
<div class="card__footer">
  <p class="card__date">Feb 10 2018</p>
  <p class=""></p>
</div>
</div>


</section>
<p className="card-text pnatlladeproductosvalor"><Link to="/compradormapa"><button type="button" className="btn btn-inf btn btn-outline-light centraddooo">Más info</button></Link></p>
</div>






<div className="Cards1pantalladevalor22">
<h1 className="ESTILO12">
¿QUE ESPERAR?
</h1>
<h2 className="SUBTITULO">Somos el enlace directo entre el campesino y el comprador</h2>
        <div class="card-columns">
  <div class="compradorcambiocard card">
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/NewZealand_Ep104_GordonRamsayUncharted_UNG07545_CSI.jpg?w=710&h=1065" class="card-img-top Topuncioocparacomprador" alt="Responsive image"/>
    <div class="card-body">
      <h5 class="card-title ">Alimetación saludable</h5>
      <p class="card-text pnatlladeproductosvalor ">Los mejores productos para tí y tu familia. Productos fescos, con los mejores tratos t procesos.</p>
    </div>
  </div>
  <div class="card compradorcambiocard p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p className="pnatlladeproductosvalor">No hay duda de la confianza en los productos de nuestros campesinos, nacen de nuestra Tierra y para nuestra gente seran. </p>
      <footer class="blockquote-footer">
        <small class="text-muted">
        Campesino Colombiano<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card compradorcambiocard">
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/wet-markets-gettyimages-1197116072.jpg?w=1600&h=900" class="card-img-top Topuncioocparacomprador" alt="Responsive image"/>
    <div class="card-body">
      <h5 class="card-title comp">Los mercados de todo el mundo</h5>
      <p class="card-text pnatlladeproductosvalor">Los productos Colmbianos tiene una envidible multisencaiones de sabores, cada uno de ellos es único y varible del lugar donde fue sembrado y recolectado.</p>
      <p class="card-text pnatlladeproductosvalor"><small class="text-muted">Compra natural</small></p>
    </div>
  </div>
  <div class="card compradorcambiocard bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p className="pnatlladeproductosvalor">Cada precio culminante de los productos debe ser acordado por ambas partes, dando una satisfacción unanime, tanto valorando el trabajo del capesino como el bolsillo del comprador.</p>
      <footer class="blockquote-footer text-white">
        <small>
         <cite title="Source Title">Familia EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card compradorcambiocard text-center">
    <div class="card-body">
      <h5 class="card-title">Opiniones</h5>
      <p class="card-text pnatlladeproductosvalor">Todo el equipo está abierto a cualquier soclicitud de nuestro aplicativo e igualmente del personal diverso que la compone y estructura.</p>
      <p class="card-text pnatlladeproductosvalor"><small class="text-muted">familia EcoAgro</small></p>
    </div>
  </div>
  <div class="card compradorcambiocard">
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/Peru_Ep101_GordonRamsayUncharted_EBS7042_CSI.jpg?w=710&h=473" class="card-img-top uli Topuncioocparacomprador" alt="Responsive image"/>
  </div>
  <div class="card compradorcambiocard p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p className="pnatlladeproductosvalor">Interactua con un sistema completo que te ofrecera las mejores promociones con las mejores calidades.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          EcoAgro <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card compradorcambiocard">
    <div class="card-body">
      <h5 class="card-title">Capacitación</h5>
      <p class="card-text pnatlladeproductosvalor">Nuestros campesinos serán guiados entre ellos y por externos en la mejora constante de la producción en calidad y bienestar común.</p>
      <p class="card-text pnatlladeproductosvalor"><small class="text-muted">Confia en EcoAgro</small></p>
    </div>
  </div>
</div>
      </div>




</div>
<br></br>

<br></br>
<br></br>
<h1 className="shadow p-3 mb-5 bg-whiteverdecitovalor rounded Titulocompradorterceraparte">
NOTICIAS
</h1>

<div ClasName="Noticias">
<div class="cardin3pantalladevalor row row-cols-1 row-cols-md-2 Noticias">
  <div class="col mb-4">
    <div class="card0pantalladevalor21">
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/food_consumption_GettyImages-498489688.jpg?w=1600&h=900" class="card-img-top uli Topuncioocparacomprador" alt="Responsive image"/>
      <div class="card-body">
        <h5 class="card-title">Colombia ve oportunidad para sus frutas por alta demanda de vitamina C</h5>
        <p class="card-text pnatlladeproductosvalor">La creciente demanda de vitamina C, una cadena que incluye a supermercados, inversión extranjera y tecnología en el campo, es una oportunidad para Colombia, según empresarios y expertos europeos de 'retail' reunidos en un foro virtual de Procolombia.</p>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card0pantalladevalor21">
      <img src="https://www.minagricultura.gov.co/noticias/PublishingImages/Foto%20MinAgricultura%20proyecto%20de%20ley%20de%20palma%208%20de%20septiembre%202020%20web.jpeg" class="card-img-top uli Topuncioocparacomprador" alt="Responsive image"/>
      <div class="card-body">
        <h5 class="card-title">MinAgricultura radicó proyecto de ley que busca adhesión de Colombia al Consejo de Países Productores de Aceite de Palma</h5>
        <p class="card-text pnatlladeproductosvalor">Bogotá, 8  de Septiembre  de 2020 (@MinAgricultura) – Por medio de un proyecto de ley, el ministro de Agricultura y Desarrollo Rural, Rodolfo Zea Navarro, buscará la adhesión de Colombia al Consejo de Productores de Aceite de Palma, lo que traerá diferentes beneficios como promover, desarrollar y fortalecer la cooperación en el cultivo de palma de aceite y la industria, además de garantizar el desarrollo económico y el bienestar de los países miembros.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card0pantalladevalor21">
      <img src="https://www.minagricultura.gov.co/noticias/PublishingImages/Foto%20MinAgricultura%20Rodolfo%20Zea%20Navarro%20-%20Programa%20presidente%20-%20septiembre%203%20de%202020%20web.jpeg" class="card-img-top uli Topuncioocparacomprador" alt="Responsive image"/>
      <div class="card-body">
        <h5 class="card-title">MINAGRICULTURA LOGRÓ UN ACUERDO IMPORTANTE ENTRE PRODUCTORES E INDUSTRIALES QUE ESTABLECE UN INCENTIVO DE ALMACENAMIENTO DE ARROZ CON PRECIOS JUSTOS</h5>
        <p class="card-text pnatlladeproductosvalor">Bogotá, 4 de septiembre de 2020 (@MinAgricultura) - El segundo semestre cuenta con un panorama favorable para los productores de arroz, ya que el volumen de la cosecha podría cerrar en 1,8 millones de toneladas, los precios por carga están entre $147.000 y $157.000 (en zonas como los Llanos y Espinal) y está disponible un Incentivo al Almacenamiento de Arroz por $29.000 millones.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card0pantalladevalor21">
      <img src="https://www.minagricultura.gov.co/noticias/PublishingImages/semillas%202%20p.jpg" class="card-img-top uli " alt="Responsive image"/>
      <div class="card-body">
        <h5 class="card-title">Siete mil productores de maíz, fríjol y arroz recibirán gratuitamente semillas biofortificadas para mejorar productividad e ingresos</h5>
        <p class="card-text pnatlladeproductosvalor">Bogotá, 20 de agosto de 2020 (@MinAgricultura) –  El Ministerio de Agricultura y Desarrollo Rural y la Alianza Bioversity-CIAT y HarvestPlus avanzan en un programa de entrega de semillas de maíz, fríjol y arroz fortificadas;  las cuales, según indicó el ministro Rodolfo Zea Navarro se entregarán de manera gratuita a siete mil productores de todo el país: “con esta iniciativa buscamos mejorar la productividad con semillas resistentes a enfermedades, pestes y sequías, que además tienen mayores niveles de micronutrientes, con ello mejorar sus ingresos”, agregó.</p>
      </div>
    </div>
  </div>
 
</div>








</div>

  </div>
  );
}
export default App1;