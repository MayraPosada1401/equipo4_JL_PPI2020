import React from 'react';
import '../Estilos/App.css';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import Canasta from '../Imagenes/Canasta.png';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import CAMPO2 from '../Imagenes/CAMPO2.jpg';
import procesoecoagro from '../Imagenes/procesoecoagro.png';


function App() {

  return (
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

</div>
<div className="Cards">

<div className="margen">

<h1 className="SUBTITULO2 ">"Somos el enlace directo entre campesino y comprador"</h1>
<img height="800px" src={procesoecoagro} class="img-fluid1 Imagenes"/>

</div>

<h1 className="SUBTITULO3">¿Con que usuario te identificas?</h1>
<br></br>
<div class="row row-cols-1 row-cols-md-2">
    <div class="col mb-4">
      <div class="cardin">
        <img  src="https://static.nationalgeographicla.com/files/styles/image_3200/public/01-reduce-waste-families.jpg?w=1600&h=900" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Comprador "Imagen tomada de:Natgeo"</h5>
          <p class="card-text">Conoce todas las opciones que tienes, las grandes ofertas y el mejor bienestar para la salud de toda la familia y a precios justos</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="cardin">
        <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/10_ngd-79135-20_ab_0000002_200524.jpg?w=1190&h=794" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Capacitador "Imagen tomada de:Natgeo"</h5>
          <p class="card-text">Si tienes conocimiento en el campo agrario, ayuda a nuestro campesinos fortaleciendo sus saberes e igualmente si eres campesino y quieres compartir tus experciancias, registrate y se fuente de saber de y para el campesino</p>
        </div>
      </div>
    </div>
    
    <br></br>
    <br></br>
    <div class="col mb-4">
      <div class="cardin">
        <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/Peru_Ep101_GordonRamsayUncharted_EBS7042_CSI.jpg?w=710&h=473" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Campesino "Imagen tomada de:Natgeo"</h5>
          <p class="card-text">Si deseas que tus productos sean vendidos y promocionados sin ningun sobre costo, y con tus acuerdos de precios, registrate en este perfil para mostrar tus productos a toda Colombia.</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="cardin3">
        <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/IMG_0691.JPG?w=1190&h=670" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title SUBTITULO4">CAMPO COLOMBIANO </h5>
          <p class="card-text t3">"Imagen tomada de:Natgeo"</p>
        </div>
      </div>
    </div>
  
  </div>
  
</div> 


<div className="Cards1">
<h1 className="ESTILO">
  EXPLORA 
</h1>
<h2 className="SUBTITULO">Descubre el campo colombiano </h2>
<p>"En mis noches de desvelo, mi espíritu divaga y se pasea por los cafetales y demás predios agrícolas de la vereda el Rocío, ubicada del municipio de Aránzazu - Caldas, cuando atendiendo instrucciones de mi Padre, en las vacaciones de fin de año, me desplazaba a ser un trabajador igual a vosotros, coger los granos rojos, conservando los bellos azahares premonitorios de la próxima cosecha"Uriel Ortiz Soto</p>
<div class="card-columns">
  <div class="card">
    <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/pod-07-07-2020_nationalgeographic_1130451_0.jpg?w=1190&h=791" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title that wraps to a new line</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/03-uncontacted-tribe-yanomami.jpg?w=710&h=474" class="card-img-top" alt="..."/>
    </blockquote>
  </div>
  <div class="card">
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/covid-indigenous-amazon-brazil-00018.jpg?w=1600&h=900" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/blue-throated-macaw-nationalgeographic_1559149.jpg?w=1600&h=1067" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class="blockquote-footer text-white">
      <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/01-cotton-top-tamarin-nationalgeographic_1533041_2.jpg?w=1600&h=1067" class="card-img-top" alt="..."/>
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
    
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/03_colombia_biodiversity_i8951_180717_00321.jpg?w=710&h=474" class="card-img-top" alt="..."/>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
      
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div className="SUBTITULO1">Imagenes tomadas de:Natgeo</div>
</div>


   
</div>


  );
}
export default App;

