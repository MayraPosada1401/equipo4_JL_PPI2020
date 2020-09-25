import React from 'react';
import '../Estilos/Misvaloraciones.css';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
import EDAD3 from '../Imagenes/el.jpg';
import EDAD1 from '../Imagenes/yo.jpg';
import EDAD from '../Imagenes/vejez.jpg';
function Misvaloraciones() {

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
<br/>
<h1 className="shadow p-3 mb-5 bg-white rounded Titulito">
Mis valoraciones
</h1>
<div className="FONDO">
<div class="card-columns">
  <div class="card">
    <img src={EDAD} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Opinion por:</h5>
      <p class="card-text">Todos los productos llegaron en excelente estado y con el tiempo y dinero acordado.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
        <div className="ESTRELLAS">
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     </div>
      <footer class="blockquote-footer">
        <small class="text-muted">
       Familia<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src={EDAD3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Opinion por:</h5>
      <p class="card-text">El servicio y el cuidado atento de todo el proceso fue excelente.</p>
      <p class="card-text"><small class="text-muted">Familia EcoAgro</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
    <div className="ESTRELLAS">
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img1"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img1"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img1"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img1"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img1"/>
     </div>
      <footer class="blockquote-footer text-white">
        <small>
      Familia<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Sigue con nosotros</h5>
      <p class="card-text">Si haz quedado satisfecho prueba otros de los servicios de nuestras App y recomiendasela a tus amigos.</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card">
    <img src={EDAD1} class="card-img-top" alt="..."/>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
    <div className="ESTRELLAS">
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     <img src="https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg" alt="" className="img"/>
     
     </div>
      <footer class="blockquote-footer">
        <small class="text-muted">
         Familia<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Opinion por:</h5>
      <p class="card-text">Muy buen servicio, pero se tuvo que insistir en la llegada el producto, tardo más de lo estipulado.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
<br/>
<br/>
<h1 className="shadow p-3 mb-5 bg-white rounded Titulito">
Conoce un poco nuestro campo
</h1>
<div className="FON">
<div class="card text-center COL">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Conoce</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.nationalgeographic.com/environment/2019/08/banana-fungus-latin-america-threatening-future/#preparingEmail">Link-¿Problemas?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.nationalgeographic.com/travel/destinations/south-america/colombia/coffee-in-colombia/">Link-Descubre la magía</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.nationalgeographic.com/photography/proof/2016/05/juanita-escobar-life-love-llaneros-pictures/">Link-Conociendo al campesinado</a>
      </li>
 
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title shadow p-3 mb-5 bg-white rounded COLO">Platano</h5>
    <p class="card-text">Un hongo que ha causado estragos en las plantaciones de banano en el hemisferio oriental, a pesar de años de esfuerzos preventivos, llegó a las Américas.

ICA, la autoridad agrícola y ganadera de Colombia, confirmó el jueves que las pruebas de laboratorio han identificado positivamente la presencia de la llamada enfermedad de Panamá Tropical Race 4 en fincas bananeras de la región costera del Caribe. El anuncio fue acompañado de una declaración de estado de emergencia nacional.

El descubrimiento del hongo representa un desastre potencial inminente para los bananos como fuente de alimento y como producto de exportación. La enfermedad de Panamá Tropical Race 4 —o TR4— es una infección de la planta de banano por un hongo del género Fusarium . Aunque los plátanos producidos en suelo infectado no son peligrosos para los humanos, las plantas infectadas eventualmente dejan de dar frutos.</p>
   
   <img src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/12/11/15445625214374.jpg" alt=""/>
   <br/>
   <br/>
   <h5 class="card-title shadow p-3 mb-5 bg-white rounded COLO">Café </h5>
   <p class="card-text">ALGO SE ESTÁ GESTANDO en el pequeño pueblo colombiano de Minca. Huele a caramelo, corteza, carbón y chocolate. ¿La fuente? Granos de café, recién salidos de los tostadores del jardín, con su fuerte olor a quemado atravesando la húmeda neblina tropical.

Aquí en el norte de Colombia, la Sierra Nevada de Santa Marta se eleva directamente desde las costas del Caribe. Sin urbanizar durante mucho tiempo debido a problemas políticos, esta área ahora pacífica atrae a los colombianos urbanos y a los visitantes internacionales inteligentes a las playas bordeadas de palmeras del Parque Nacional Tayrona, el antiguo sitio arqueológico de Ciudad Perdida y el paraíso de las aves en las selvas alrededor de Minca.

Recientemente, Minca y Sierra Nevada han comenzado a atraer a viajeros amantes del café, una colección de conocedores y mochileros curiosos ansiosos por descubrir lo que Juan Pablo Campos, gerente general del grupo comercial Lohas Beans, llama “la región colombiana más importante para el café orgánico . "</p>
<br/>
<br/>
<img src="https://cdn.civitatis.com/colombia/bogota/galeria/cafe-colombiano.jpg"className="IMA" alt=""/>
   <h5 class="card-title shadow p-3 mb-5 bg-white rounded COLO">Campesino</h5>
   <p class="card-text">Eran las 4 de la mañana en Hato San Pablo en Casanare, Colombia, cuando la fotógrafa Juanita Escobar montó a caballo por primera vez en su vida. Se cayó, pero cuando volvió, se quedó ... durante la mayor parte de diez años. Ese mismo día comenzó a aprender sobre la vida como  llanero, un ranchero responsable de arrear cientos de ganado por vastas llanuras, persiguiendo vacas en su caballo con tierra irregular bajo sus pies y demasiadas preguntas ardiendo en su mente. Así le gusta contar historias. </p>
  <br/>
  <br/>
   <img src="https://www.kienyke.com/sites/default/files/styles/interna_destacada_xl_l_m/public/wp-content/uploads/2018/05/llanos-orientales.png?itok=3RP05Spc" className="IMA"alt=""/>
    <br/>
    <br/>
    <a href="#" class="btn btn-primary">Sigue descubriendo</a>
  </div>
</div>
</div>
</div>
   );
}
    export default Misvaloraciones;