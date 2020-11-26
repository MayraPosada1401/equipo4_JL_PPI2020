import React from 'react';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import procesoecoagro from '../Imagenes/procesoecoagro.png';
import '../pages/Ensayofer';
import { Link } from 'react-router-dom';
import '../Estilos/Casa.css';


function App() {

  return (
    <div className="Appscolodefondodeneil">
     <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-iconoheadercampe" /></a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item normal-nav nav-item active">
        <Link to="/transportador"> <a class="nav-link" href="#">Transportador</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/quienes"><a className="nav-link" href="#">Contactanos</a></Link> 
      </li>
        <li className="nav-item normal-nav nav-item active">
          <Link to=""><a className="nav-link  " href="#">Conocenos</a></Link>
        </li>
        <li className="nav-item normal-nav nav-item active">
        <Link to="/registro"><a className="nav-link  " href="#">¿No te haz registrado aún?</a></Link>
        </li>
        <a type="button" class="btn1-header btn-info1"></a>
      <Link to="/iniciosesiongeneral"><button type="button" class="btn btn-info btn-ingresar-pagina">Ingresar</button></Link>
      
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
      <img src={carrusel1} className="d-block w-100" alt="..."/>
      </div>
    <div className="carousel-item">
      <img src={carrusel2} className="d-block w-100" alt="..."/>
      
      </div>
    <div className="carousel-item">
      <img src={carrusel3} className="d-block w-100" alt="..."/>
      
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
<div className="Cardsespecialdeinciopaginap Appscolodefondodeneil">

<div className="margenpantallaprinci">

<h1 className="Tituloenpaginaprincipal2 shadow p-3 mb-5 bg-white1 rounded">"Somos el enlace directo entre campesino y comprador"</h1>
<img height="800px" src={procesoecoagro} class="img-fluid1 Imagenespaginaprincipal"/>
<div className="Videoconciente"></div>
</div>
<div className="colorcitodefondoparapag">
<h1 className="shadow p-3 mb-5 bg-whitecolorcitoprin rounded Tituloenpaginaprincipal">¿Con que usuario te identificas?</h1>
</div>
<br></br>

  

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
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/01-reduce-waste-families.jpg?w=1600&h=900" alt="Short description"/>
    </figure>
    <div class="card__header">
      <figure class="card__profile">
        <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
      </figure>
    </div>
    <div class="card__body">
      <h3 class="card__name">Comprador </h3>
      <p class="card__job">Somos el enlace directo entre campesino y comprador.</p>
      <p class="card__bio"> Conoce todas las opciones que tienes, las grandes ofertas y el mejor bienestar para la salud de toda la familia y a precios justos</p>
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
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/Peru_Ep101_GordonRamsayUncharted_EBS7042_CSI.jpg?w=710&h=473" alt="Short description"/>
  </figure>
  <div class="card__header">
    <figure class="card__profile">
      <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
    </figure>
  </div>
  <div class="card__body">
    <h3 class="card__name">Campesino</h3>
    <p class="card__job">Somos el enlace directo entre campesino y comprador.</p>
    <p class="card__bio">Si deseas que tus productos sean vendidos y promocionados sin ningun sobre costo, y con tus acuerdos de precios, registrate en este perfil para mostrar tus productos a toda Colombia.</p>
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
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/10_ngd-79135-20_ab_0000002_200524.jpg?w=1190&h=794" class="card-img-top Topuncioocparacomprador" alt="Short description"/>
  </figure>
  <div class="card__header">
    <figure class="card__profile">
      <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
    </figure>
  </div>
  <div class="card__body">
    <h3 class="card__name">Capacitador</h3>
    <p class="card__job">Somos el enlace directo entre campesino y comprador.</p>
    <p class="card__bio">Si tienes conocimiento en el campo agrario, ayuda a nuestro campesinos fortaleciendo sus saberes e igualmente si eres campesino y quieres compartir tus experciancias, registrate y se fuente de saber de y para el campesino</p>
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
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/IMG_0691.JPG?w=1190&h=670" alt="Short description"/>
  </figure>
  <div class="card__header">
    <figure class="card__profile">
      <img src="https://cdn.dribbble.com/users/1564335/screenshots/8341408/media/77e97bc742fd87af6eaa09fccd232191.png" alt="Short description"/>
    </figure>
  </div>
  <div class="card__body">
    <h3 class="card__name">Nuestro campo colombiano.</h3>
    <p class="card__job">El campesino de valor y el comprador de justicia.</p>
    <p class="card__bio">Conoce el campo colombiano y reconoce sus valores y unicas propiedades.</p>
  </div>
  <div class="card__footer">
    <p class="card__date">Feb 10 2018</p>
    <p class=""></p>
  </div>
</div>


</section>

</div> 


<div className="Cards1cardinpantallapincusers">
<h1 className="ESTILOpantallaprinci">
  EXPLORA 
</h1>
<h2 className="SUBTITULO">Descubre el campo colombiano </h2>
<p className="Parrafosenpaginaprincipal1">"En mis noches de desvelo, mi espíritu divaga y se pasea por los cafetales y demás predios agrícolas de la vereda el Rocío, ubicada del municipio de Aránzazu - Caldas, cuando atendiendo instrucciones de mi Padre, en las vacaciones de fin de año, me desplazaba a ser un trabajador igual a vosotros, coger los granos rojos, conservando los bellos azahares premonitorios de la próxima cosecha"Uriel Ortiz Soto</p>
<div class="card-columns">
  <div class="card">
    <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/pod-07-07-2020_nationalgeographic_1130451_0.jpg?w=1190&h=791" class="card-img-top Topuncioocparacomprador" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Familia campesina</h5>
      <p class="card-text Parrafosenpaginaprincipal">La vida en los campos colombianos es sembrada día a día por nuestros campesinos. Un reconocimiento especial en su día. Sin ellos, en las ciudades no podríamos vivir. Del campesinado, de su fuerza, perseverancia, paciencia en los cultivos depende nuestra alimentación diaria. Por eso, para esos hombres y mujeres que dedican sus vidas a sembrar, a cultivar y cuidar lo que servimos en nuestras mesas</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p className=" Parrafosenpaginaprincipal">A nuestro verdaderos guerreros quienes luchan por cuidar nuestro preciados recursos y proveer los alimentos, aun sacrificando los suyos</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
         Somos <cite title="Source Title">Familia EcoAgro</cite>
        </small>
      </footer>
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/03-uncontacted-tribe-yanomami.jpg?w=710&h=474" class="card-img-top Topuncioocparacomprador" alt="..."/>
    </blockquote>
  </div>
  <div class="card">
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/covid-indigenous-amazon-brazil-00018.jpg?w=1600&h=900" class="card-img-top Topuncioocparacomprador" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Naturaleza exuberante</h5>
      <p class="card-text Parrafosenpaginaprincipal">Una ave de hermosos colores, emblema de la diversidad de nuestr patria, representa a nuestra bandera y a nuestro territorio.</p>
      <p class="card-text Parrafosenpaginaprincipal"><small class="text-muted">Familia EcoAgro</small></p>
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/blue-throated-macaw-nationalgeographic_1559149.jpg?w=1600&h=1067" class="card-img-top Topuncioocparacomprador" alt="..."/>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p className="Parrafosenpaginaprincipal">“Cuando se ven amenazados, los monos tití levantan el pelaje blanco sobre sus cabezas para parecer más grandes.”</p>
      <footer class="blockquote-footer text-white">
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/01-cotton-top-tamarin-nationalgeographic_1533041_2.jpg?w=1600&h=1067" class="card-img-top Topuncioocparacomprador" alt="..."/>
        <small>
          Somos <cite title="Source Title">Familia EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
    
  </div>
  <div class="card text-center eliminacionprinc">
    <div class="card-body">
      <h5 class="card-title">Vive en diversos mundos</h5>
      <p class="card-text Parrafosenpaginaprincipal">Somos el segundo pais más megadiverso a nivel mundial, poseemos una gran variedad de habitats y con ellas especies unicas en todo el planeta.</p>
      <p class="card-text Parrafosenpaginaprincipal"><small class="text-muted">Familia EcoAgro</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/03_colombia_biodiversity_i8951_180717_00321.jpg?w=710&h=474" class="card-img-top Topuncioocparacomprador" alt="..."/>
  </div>
  <div class="card p-3 text-right eliminacionprinc">
    <blockquote class="blockquote mb-0">
      <p className="Parrafosenpaginaprincipal">Las cosas claras y el chocolate espeso.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Familia <cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
      
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body eliminacionprinc">
      <h5 class="card-title">Un territorio unico</h5>
      <p class="card-text Parrafosenpaginaprincipal">Cada esquina de nuestro pais esta llena de familia, de recuerdos, de campesinos, esta llena de sabores y tradiciones y de los lazos que nos convierten en Colombia megadiverso.</p>
      <p class="card-text Parrafosenpaginaprincipal"><small class="text-muted">Familia EcoAgro</small></p>
    </div>
  </div>
</div>
<div className="SUBTITULO1DECASA">Imagenes tomadas de:Natgeo</div>
</div>


   
</div>


  );
}
export default App;

